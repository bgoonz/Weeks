﻿// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;

using Microsoft.Templates.Core.Diagnostics;
using Microsoft.Templates.Core.Helpers;
using Microsoft.Templates.Core.Locations;
using Microsoft.Templates.Core.Naming;
using Microsoft.Templates.Core.Resources;

namespace Microsoft.Templates.Core.Gen
{
    public class GenContext
    {
        private static readonly string _tempGenerationFolder = Path.Combine(Path.GetTempPath(), Configuration.Current.TempGenerationFolderPath);

        private static IContextProvider _currentContext;

        public static GenToolBox ToolBox { get; set; }

        public static string CurrentPlatform { get; private set; }

        public static string CurrentLanguage { get; private set; }

        public static bool ContextInitialized => _currentContext != null;

        public static IContextProvider Current
        {
            get
            {
                if (_currentContext == null)
                {
                    throw new InvalidOperationException(StringRes.GenContextCurrentInvalidOperationMessage);
                }

                return _currentContext;
            }

            set
            {
                _currentContext = value;
            }
        }

        public static void Bootstrap(TemplatesSource source, GenShell shell, string platform, string language)
        {
            Bootstrap(source, shell, GetWizardVersionFromAssembly(), platform, language);
        }

        public static void SetCurrentLanguage(string language)
        {
            CurrentLanguage = language;
            ToolBox.Repo.CurrentLanguage = language;
        }

        public static void SetCurrentPlatform(string platform)
        {
            CurrentPlatform = platform;
            ToolBox.Repo.CurrentPlatform = platform;
        }

        public static void Bootstrap(TemplatesSource source, GenShell shell, Version wizardVersion, string platform, string language)
        {
            try
            {
                AppHealth.Current.AddWriter(new ShellHealthWriter(shell));
                AppHealth.Current.IntializeTelemetryClient(shell);

                AppHealth.Current.Info.TrackAsync($"{StringRes.ConfigurationFileLoadedString}: {Configuration.LoadedConfigFile}").FireAndForget();

                string hostVersion = $"{shell.GetVsVersionAndInstance()}-{wizardVersion.Major}.{wizardVersion.Minor}";

                if (source is RemoteTemplatesSource)
                {
                    CodeGen.Initialize($"{source.Id}.{source.Platform}.{source.Language}", hostVersion);
                }
                else
                {
                    CodeGen.Initialize($"{source.Id}", hostVersion);
                }

                var repository = new TemplatesRepository(source, wizardVersion, platform, language);

                ToolBox = new GenToolBox(repository, shell);
                PurgeTempGenerations(Configuration.Current.DaysToKeepTempGenerations);

                CurrentLanguage = language;
                CurrentPlatform = platform;
            }
            catch (Exception ex)
            {
                AppHealth.Current.Exception.TrackAsync(ex, StringRes.GenContextBootstrapError).FireAndForget();
                Trace.TraceError($"{StringRes.GenContextBootstrapError} Exception:\n\r{ex}");
                throw;
            }
        }

        public static string GetTempGenerationPath(string projectName)
        {
            string projectGuid = ToolBox.Shell.GetProjectGuidByName(GenContext.Current.ProjectName).ToString();
            var projectTempFolder = Path.Combine(_tempGenerationFolder, projectGuid);

            Fs.EnsureFolder(projectTempFolder);
            var tempGenerationName = $"{projectName}_{DateTime.Now.FormatAsShortDateTime()}";
            var inferredName = NamingService.Infer(tempGenerationName, new List<Validator> { new FolderNameValidator(projectTempFolder) }, "_");

            return Path.Combine(projectTempFolder, inferredName, projectName);
        }

        private static void PurgeTempGenerations(int daysToKeep)
        {
            if (Directory.Exists(_tempGenerationFolder))
            {
                var di = new DirectoryInfo(_tempGenerationFolder);

                var toBeDeleted = di.GetDirectories()
                    .Where(d => Guid.TryParse(d.Name, out Guid guidID))
                    .SelectMany(d => d.GetDirectories())
                    .Where(d => d.CreationTimeUtc.AddDays(daysToKeep) < DateTime.UtcNow).ToList();

                foreach (var d in toBeDeleted)
                {
                    Fs.SafeDeleteDirectory(d.FullName);
                    if (Directory.Exists(d.Parent.FullName) && !d.Parent.GetDirectories().Any())
                    {
                        Fs.SafeDeleteDirectory(d.Parent.FullName);
                    }
                }
            }
        }

        public static Version GetWizardVersionFromAssembly()
        {
            string assemblyLocation = Assembly.GetExecutingAssembly().Location;
            var versionInfo = FileVersionInfo.GetVersionInfo(assemblyLocation);

            Version.TryParse(versionInfo.FileVersion, out Version v);

            return v;
        }
    }
}
