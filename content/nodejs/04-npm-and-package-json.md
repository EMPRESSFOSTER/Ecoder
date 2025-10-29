---
title: "NPM and package.json"
order: 4
---

## NPM and package.json

**NPM** stands for Node Package Manager. It is the world's largest software registry. Developers use it to share and borrow packages, and it's the command-line tool used to interact with this registry. When you install Node.js, npm is automatically installed as well.

### Key `npm` Commands

-   **`npm init`**: Initializes a new Node.js project and creates a `package.json` file. It will ask you a series of questions about your project. You can use `npm init -y` to quickly accept the defaults.
-   **`npm install <package-name>`**: Installs a package and adds it to your project's dependencies.
-   **`npm install`**: Installs all the dependencies listed in the `package.json` file.
-   **`npm uninstall <package-name>`**: Removes a package from your project.
-   **`npm update`**: Updates all packages to their latest versions according to the version constraints in `package.json`.

### The `package.json` File

This file is the heart of any Node.js project. It contains metadata about the project and manages its dependencies.

A basic `package.json` looks like this:

```json
{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "description": "An awesome Node.js project.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

### Key Properties in `package.json`

-   **`name`**: The name of your project.
-   **`version`**: The current version of your project.
-   **`description`**: A brief description of your project.
-   **`main`**: The entry point to your application (the file that runs when someone `require`s your package).
-   **`scripts`**: A dictionary containing script commands that you can run using `npm run <script-name>`. For example, `npm start` would run `node index.js`.
-   **`dependencies`**: Packages required for your application to run in production. These are installed when someone runs `npm install`.
-   **`devDependencies`**: Packages that are only needed for local development and testing (e.g., testing libraries, code linters, `nodemon`).

### Semantic Versioning

NPM uses Semantic Versioning (SemVer). A version number is written as `MAJOR.MINOR.PATCH` (e.g., `4.17.1`).
-   `MAJOR` version change means there are incompatible API changes.
-   `MINOR` version change means functionality was added in a backward-compatible manner.
-   `PATCH` version change means backward-compatible bug fixes.

The `^` in front of a version (e.g., `"^4.17.1"`) means `npm` can install the latest minor version. The `~` means it can install the latest patch version.

### Exercises

1.  **Initialize a project**: Create a new folder for a project. Open your terminal in that folder and run `npm init -y`. Examine the generated `package.json` file.
2.  **Install a package**: Install the `lodash` package by running `npm install lodash`. Look at your `package.json` to see how `dependencies` was added. You'll also see a `node_modules` folder and a `package-lock.json` file.
3.  **Create a script**: Create an `index.js` file and use a function from the `lodash` package (e.g., `_.camelCase`).
4.  **Add a `start` script**: In `package.json`, modify the `scripts` section to have a `start` command that runs your `index.js` file with node. Run `npm start` from your terminal.
