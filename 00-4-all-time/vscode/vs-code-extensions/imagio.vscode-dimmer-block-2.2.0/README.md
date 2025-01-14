# vscode-dimmer-block

## Features

Dims text outside of the current block by reducing the opacity of the text. Helps you focus. Works great with high contrast themes.

Set a keybinding for `dimmer.ToggleDimmer`, search `Toggle Dimmer` in the command palette, or use the `dimmer.enabled` setting.

![Context](https://github.com/AndrewMorsillo/vscode-dimmer/raw/master/images/context.gif)

Original code by hoovercj, block capability by jmasramon, uploaded by andrewmorsillo

## Configuration

```
"dimmer.enabled": {
    "default": false,
    "description": "When set to true, the extension will dim non-selected text."
},
"dimmer.toggleDimmerCommandScope": {
    "defualt": "user",
    "description": "Decides whether the `ToggleDimmer` command will affect the user (global) or workspace (local) settings."
},
"dimmer.opacity": {
    "default": 50,
    "description": "An integer between 0 and 100 used for the opacity percentage for the dimmed (non-selected) text."
},
"dimmer.delay": {
    "default": 0,
    "description": "Delay in milliseconds for dimming the non-selected text to reduce number of API calls in the event of rapid selection changes. Defaults to 0, but set higher if it feels like it is causing problems."
}
```

### 2.2.0

- Highlight current block instead of just a few lines. Thanks @jmasramon
- Republish with different name VSCode Dimmer Block to separate it from non-block version

### 2.0.0

- Dim on editor change (e.g. ctrl+tab). Thanks @roblourens
- Highlight context (n lines before/after). Thanks @rebornix
- Breaking: `dimmer.dimSelectedLines` has been replaced by `dimmer.context`.

### 1.0.0

Initial release
