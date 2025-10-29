---
title: "JS Functions"
order: 4
---

## JavaScript Functions

A JavaScript function is a reusable block of code designed to perform a particular task. Functions are executed when they are "called" or "invoked".

### Why Use Functions?

-   **Reusability**: Write the code once, and use it many times.
-   **Organization**: Break down complex problems into smaller, manageable pieces.
-   **Readability**: Well-named functions make your code easier to understand.

### Function Declaration

This is the classic way to define a function.

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function
let greeting = greet("Alice"); // greeting is now "Hello, Alice!"
console.log(greeting);
```
-   `function` is the keyword.
-   `greet` is the function's name.
-   `(name)` is a **parameter**, a placeholder for a value that will be passed to the function.
-   The code inside `{...}` is the function body.
-   `return` specifies the value the function will output.

### Function Expression

A function can also be defined as an expression and assigned to a variable.

```javascript
const add = function(a, b) {
  return a + b;
};

let sum = add(5, 3); // sum is 8
```

### Arrow Functions (ES6)

Arrow functions provide a more concise syntax for writing function expressions.

```javascript
// A simple arrow function
const subtract = (a, b) => {
  return a - b;
};

// If the function has only one expression, you can omit the curly braces and return keyword
const multiply = (a, b) => a * b;

// If there is only one parameter, you can omit the parentheses
const square = x => x * x;
```

### Exercises

1.  **Write a `sayGoodbye` function**: Create a function declaration named `sayGoodbye` that takes one parameter, `name`, and returns the string "Goodbye, [name]!". Call it and log the result.
2.  **Convert to an Arrow Function**: Rewrite the `sayGoodbye` function as an arrow function assigned to a `const` variable.
3.  **Create a `calculateArea` function**: Write a function that takes two parameters, `width` and `height`, and returns their product. Use any function syntax you prefer (declaration, expression, or arrow).
4.  **Call your function**: Call the `calculateArea` function with two numbers and store the result in a variable called `area`. Log the `area` to the console.
