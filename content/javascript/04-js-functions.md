---
title: "JS Functions"
order: 4
---

## JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

### Function Declaration

You can declare a function using the `function` keyword, followed by a name, followed by parentheses `()`.

```javascript
function greet(name) {
  return "Hello " + name;
}

// Call the function
let greeting = greet("Alice"); // "Hello Alice"
```

### Arrow Functions

ES6 introduced arrow function expression. It allows for a shorter syntax for writing function expressions.

```javascript
const add = (a, b) => {
  return a + b;
};

// Even shorter for single expression
const subtract = (a, b) => a - b;
```