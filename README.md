# Silent Crash in Node.js Server

This repository demonstrates a common but easily missed error in Node.js servers: unhandled errors in event listeners.  The provided `server.js` demonstrates a server that crashes silently if an error occurs during request handling, making debugging difficult. The `server-solution.js` provides a fix.

## Problem
The initial server lacks error handling.  If an exception occurs within the `requestListener`, the server will crash without informative logging.

## Solution
The solution utilizes `domain` module(or you can use `try...catch` block to handle errors). Adding `server.on('error', ...)` ensures that any uncaught exceptions within request handling are logged and the server remains operational.