# Hermes WinDbg JS Extension

This script extends the WinDbg debugger with various useful commands for debugging a hermes instance from either a live session or a memory dump.

## Usage

With

### Loading the script into WinDbg

```
.scriptload path\to\utils\windbg\hermes.js
dx @$hermes = Debugger.State.Scripts.hermes.Contents
```

### findHermesThreads

```
dx @$hermes.findHermesThreads(),d
```

### findHermesInspectorThreads

```
dx @$hermes.findHermesInspectorThreads(),d
```

## Example

```
.scriptunload E:\code\hermes-windows\utils\windbg\hermes.js
.scriptload E:\code\hermes-windows\utils\windbg\hermes.js
dx @$hermes = Debugger.State.Scripts.hermes.Contents
dx @$hermes.findHermesThreads(),d
```

## Resources

* [JavaScript Debugger Scripting](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/javascript-debugger-scripting)