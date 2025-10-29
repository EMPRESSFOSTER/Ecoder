---
title: "Node.js Modules"
order: 2
---

## Node.js Modules

In Node.js, modules are reusable blocks of code. A module is a JavaScript file that exports its code so that it can be used in other files. This system helps in organizing and structuring code. Node.js has a simple module loading system.

### Core Modules

Node.js has a set of built-in modules that you can use without any further installation. Some of the core modules are:

-   `http`: for making Node.js act as an HTTP server.
-   `fs`: for interacting with the file system.
-   `path`: for handling and transforming file paths.
-   `os`: provides operating system-related utility methods and properties.

To use a core module, you use the `require()` function:

```javascript
const fs = require('fs');

// Read a file synchronously
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

### Local Modules

You can create your own modules. If you have a file `myModule.js`, you can export functions, objects, or variables from it.

**myModule.js:**
```javascript
const sayHello = (name) => {
  return `Hello, ${name}!`;
};

// Export the function
module.exports = sayHello;
```

**app.js:**
```javascript
// Import the local module
const sayHello = require('./myModule.js');

console.log(sayHello('Alice')); // Outputs: Hello, Alice!
```
-   `module.exports` is a special object. Anything assigned to it will be exposed as a module.
-   `require('./myModule.js')` loads the module. The `./` indicates it's a local file.

### Third-Party Modules

Third-party modules are libraries and frameworks created by the community, available through the **npm** (Node Package Manager) registry. You can install them into your project using the npm command-line tool.

For example, to install the popular web framework `Express`:

```bash
npm install express
```

Then you can use it in your application:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello with Express!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

### Exercises

1.  **Use the `fs` module**: Create a file `data.txt` with some text. Write a Node.js script `reader.js` that reads the content of `data.txt` and prints it to the console.
2.  **Create a local module**: Create a module `math.js` that exports two functions: `add(a, b)` and `subtract(a, b)`.
3.  **Use your local module**: Create an `app.js` file that imports your `math.js` module and uses both functions to perform some calculations, logging the results.
