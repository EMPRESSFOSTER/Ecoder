---
title: "Asynchronous JavaScript in Node.js"
order: 7
---

## Asynchronous JavaScript in Node.js

Node.js is designed to be non-blocking, which means it uses asynchronous operations extensively. Understanding how to handle async code is key to being a proficient Node.js developer. The three main patterns for handling async operations are callbacks, promises, and `async/await`.

### 1. Callbacks

The original pattern for handling async operations in Node.js was using callbacks. A callback is a function passed as an argument to another function, which is then executed after the outer function has completed its operation.

The convention in Node.js is to use "error-first" callbacks, where the first argument of the callback function is reserved for an error object.

**Example with `fs.readFile`:**
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  // The callback function
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("Reading file..."); // This will log first!
```

### 2. Promises

Promises were introduced in ES6 to provide a cleaner way to handle async operations and avoid "callback hell" (deeply nested callbacks). A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

A promise can be in one of three states:
-   **Pending**: initial state, neither fulfilled nor rejected.
-   **Fulfilled**: the operation completed successfully.
-   **Rejected**: the operation failed.

You can chain `.then()` to handle a fulfilled promise and `.catch()` to handle a rejected one.

**Example with `fs/promises`:**
```javascript
const fs = require('fs/promises');

fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log("File content:", data);
  })
  .catch(err => {
    console.error("Error:", err);
  });

console.log("Reading file...");
```

### 3. Async/Await (ES2017)

`async/await` is syntactic sugar built on top of promises. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it much easier to read and reason about.

-   The `async` keyword is used to declare an async function, which automatically returns a promise.
-   The `await` keyword can only be used inside an `async` function. It pauses the function execution and waits for a promise to resolve before continuing.

**Example:**
```javascript
const fs = require('fs/promises');

async function readFileAsync() {
  try {
    console.log("Reading file...");
    const data = await fs.readFile('example.txt', 'utf8'); // Pauses here
    console.log("File content:", data); // Runs after await is done
  } catch (err) {
    console.error("Error:", err);
  }
}

readFileAsync();
```

This is the most modern and widely preferred method for handling asynchronous code in Node.js.

### Exercises

1.  **Use a callback**: Write a script that uses `fs.writeFile` with a callback to write "Hello from callback!" to a file named `callback.txt`. The callback should log a success message.
2.  **Use a promise**: Use `fs/promises` to write "Hello from promise!" to a file named `promise.txt`. Use `.then()` and `.catch()` to handle the result.
3.  **Use async/await**: Write an `async` function that uses `await` with `fs/promises` to write "Hello from async/await!" to `async.txt`. Use a `try...catch` block for error handling.