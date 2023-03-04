/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * @format
 */

function findThreadsWithFrame(frameStr) {
    const threads = [];

    const curProcess = host.currentProcess;
    for (const thread of curProcess.Threads)
    {
        for (const frame of thread.Stack.Frames)
        {
            const funcName = frame.toString();
            if (frame.toString().includes(frameStr))
            {
                threads.push(thread);
                break;
            }
        }
    }

    return threads;
}

function findFramesWithType(typeStr) {
    const frames = [];

    const curProcess = host.currentProcess;
    for (const thread of curProcess.Threads)
    {
        for (const frame of thread.Stack.Frames)
        {
            var locals = frame.LocalVariables;

            let hasType = false;

            for (const varName in locals) {
                const local = locals[varName];

                if (local !== undefined && varName == 's') {
                    hasType = true;
                    break;
                }
            }

            if (hasType) {
                frames.push(frame);
            }
        }
    }

    return frames;
}

function findHermesThreads() {
    return findThreadsWithFrame('hermes!');
}

function findHermesInspectorThreads() {
    return findThreadsWithFrame('hermesinspector!');
}

function findReactNativeThreads() {
    return findThreadsWithFrame('Microsoft_ReactNative!');
}

function findHermesFrames() {
    return findFramesWithType('hermes::vm::')
}