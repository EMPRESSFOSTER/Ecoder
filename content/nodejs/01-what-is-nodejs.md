---
title: "What is Node.js?"
order: 1
---

## What is Node.js?

Node.js is a back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

### Key Features

-   **Asynchronous and Event-Driven**: All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data.
-   **Very Fast**: Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
-   **Single-Threaded but Highly Scalable**: Node.js uses a single-threaded model with event looping. This event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests.
-   **No Buffering**: Node.js applications never buffer any data. These applications simply output the data in chunks.

### Where to use Node.js?

-   I/O bound Applications
-   Data Streaming Applications
-   Data Intensive Real-time Applications (DIRT)
-   JSON APIs based Applications
-   Single Page Applications

### Simple Example

Here is a simple "Hello World" example in Node.js. Create a file named `app.js` and add the following code:

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run this, you would open your terminal, navigate to the file's directory, and run `node app.js`.

### Exercises

1.  **Install Node.js**: If you don't have it, go to the [official Node.js website](https://nodejs.org/) and download the LTS version.
2.  **Run a file**: Create a file `test.js` and add `console.log("Node.js is working!");`. Run it from your terminal using `node test.js`.
3.  **Run the server**: Copy the server code above into `app.js` and run it. Visit `http://127.0.0.1:3000` in your browser to see the result.
