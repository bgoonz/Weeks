#!/usr/bin/python
#
# Copyright 2014 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Retrieves a saved report, or a report for the specified ad client.

To get ad clients, run get_all_ad_clients.py.

Tags: reports.generate
"""
from __future__ import print_function

__author__ = 'sgomes@google.com (Sérgio Gomes)'

import argparse
import sys

from googleapiclient import sample_tools
from oauth2client import client

# Declare command-line flags.
argparser = argparse.ArgumentParser(add_help=False)
argparser.add_argument(
    '--ad_client_id',
    help='The ID of the ad client for which to generate a report')
argparser.add_argument(
    '--report_id',
    help='The ID of the saved report to generate')


def main(argv):
  # Authenticate and construct service.
  service, flags = sample_tools.init(
      argv, 'adexchangeseller', 'v1.1', __doc__, __file__, parents=[argparser],
      scope='https://www.googleapis.com/auth/adexchange.seller.readonly')

  # Process flags and read their values.
  ad_client_id = flags.ad_client_id
  saved_report_id = flags.report_id

  try:
    # Retrieve report.
    if saved_report_id:
      result = service.reports().saved().generate(
          savedReportId=saved_report_id).execute()
    elif ad_client_id:
      result = service.reports().generate(
          startDate='2011-01-01', endDate='2011-08-31',
          filter=['AD_CLIENT_ID==' + ad_client_id],
          metric=['PAGE_VIEWS', 'AD_REQUESTS', 'AD_REQUESTS_COVERAGE',
                  'CLICKS', 'AD_REQUESTS_CTR', 'COST_PER_CLICK',
                  'AD_REQUESTS_RPM', 'EARNINGS'],
          dimension=['DATE'],
          sort=['+DATE']).execute()
    else:
      argparser.print_help()
      sys.exit(1)
    # Display headers.
    for header in result['headers']:
      print('%25s' % header['name'], end=' ')
    print()

    # Display results.
    for row in result['rows']:
      for column in row:
        print('%25s' % column, end=' ')
      print()

  except client.AccessTokenRefreshError:
    print ('The credentials have been revoked or expired, please re-run the '
           'application to re-authorize')

if __name__ == '__main__':
  main(sys.argv)
