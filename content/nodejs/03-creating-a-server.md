---
title: "Creating a Server"
order: 3
---

## Creating a Web Server in Node.js

One of the most common uses for Node.js is to create web servers. Node.js provides a built-in `http` module that makes this straightforward.

### The `http` Module

The `http` module allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP). To use the HTTP server and client, one must `require('http')`.

### A Basic Server

Let's break down the "Hello World" server from the first lesson.

```javascript
const http = require('http'); // 1. Import the http module

const server = http.createServer((req, res) => { // 2. Create the server
  // This callback function runs for every request that comes in
  
  // 3. Handle the request and response
  res.statusCode = 200; // Set the status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello, World!'); // 4. End the response, sending data back
});

server.listen(3000, '127.0.0.1', () => { // 5. Start the server
  console.log('Server listening on port 3000');
});
```

**Explanation:**

1.  **`require('http')`**: Loads the built-in HTTP module.
2.  **`http.createServer(...)`**: Creates a new server object. The function passed to it is a request listener, which is executed each time the server gets a request.
3.  **`req` and `res`**: The request listener function receives two arguments: `req` (the request object) and `res` (the response object). `req` contains information about the incoming request, such as the URL and headers. `res` is used to send a response back to the client.
4.  **`res.end()`**: This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, `res.end()`, MUST be called on each response.
5.  **`server.listen(...)`**: This tells the server to start listening for incoming connections on a specific port and hostname.

### Routing

You can handle different URLs (routes) by inspecting the `req.url` property.

```javascript
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to the homepage!</h1>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1>');
  } else {
    res.statusCode = 404; // Not Found
    res.end('<h1>404 Not Found</h1>');
  }
});
```

This is basic routing. For more complex applications, you would typically use a framework like Express.js, which simplifies routing and many other server tasks.

### Exercises

1.  **Build a simple server**: Create a file `server.js`. Write code to create a server that listens on port `8080`. When a request comes in, it should respond with "My first server in Node.js".
2.  **Add routing**: Modify your server to handle two routes:
    -   `/`: should respond with "Welcome!"
    -   `/api`: should respond with some JSON data, like `{'message': 'This is the API'}`. Remember to set the `Content-Type` header to `application/json` for this route. You'll need to use `JSON.stringify()` on your object before sending it with `res.end()`.
3.  **Handle 404s**: If a request is made to any other URL, your server should respond with a `404` status code and a "Page not found" message.
