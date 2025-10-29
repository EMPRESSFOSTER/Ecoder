---
title: "Node.js File System"
order: 5
---

## Node.js File System Module

The Node.js file system (`fs`) module allows you to work with the file system on your computer. It's a core module, so you can use it by requiring it in your file.

```javascript
const fs = require('fs');
```

The `fs` module provides both synchronous (blocking) and asynchronous (non-blocking) methods for most operations. Asynchronous methods are generally preferred to avoid blocking the event loop.

### Reading Files

-   **Asynchronous Read**: `fs.readFile()`
    This method reads a file asynchronously. It takes a file path, encoding, and a callback function which gets executed once the file reading is complete.

    ```javascript
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }
      console.log(data);
    });
    ```

-   **Synchronous Read**: `fs.readFileSync()`
    This method blocks the event loop until the file is read.

    ```javascript
    try {
      const data = fs.readFileSync('welcome.txt', 'utf8');
      console.log(data);
    } catch (err) {
      console.error("Error reading the file:", err);
    }
    ```

### Writing Files

-   **Asynchronous Write**: `fs.writeFile()`
    This method writes data to a file asynchronously. If the file already exists, its content is overwritten.

    ```javascript
    const content = 'Some content!';
    fs.writeFile('newfile.txt', content, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log('Successfully wrote to file!');
    });
    ```

### Appending to Files

-   **Asynchronous Append**: `fs.appendFile()`
    This method appends content to an existing file. If the file doesn't exist, it's created.

    ```javascript
    fs.appendFile('existing.txt', ' This is my new text.', (err) => {
      if (err) throw err;
      console.log('Updated!');
    });
    ```

### Exercises

1.  **Create and write**: Write a Node.js script that creates a file named `note.txt` and writes the text "This is my first note." to it.
2.  **Read and log**: Create a script that reads the `note.txt` file you just created and logs its content to the console.
3.  **Append a message**: Modify your script to append a new sentence, " The note was updated.", to `note.txt`. Run the read script again to confirm the change.
4.  **Error handling**: Try to read a file that doesn't exist and use a `try...catch` block (for sync) or the `err` object (for async) to log a user-friendly error message.