/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * @format
 */

function findThreadWithFrame(frameStr) {
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

function findHermesThreads() {
    return findThreadWithFrame('hermes!');
}

function findHermesInspectorThreads() {
    return findThreadWithFrame('hermesinspector!');
}
