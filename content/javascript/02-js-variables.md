---
title: "JS Variables"
order: 2
---

## JavaScript Variables

Variables are containers for storing data values. Think of them as labeled jars where you can keep information that your program needs to work with. In JavaScript, there are three keywords to declare variables: `let`, `const`, and `var`.

### `let`

The `let` keyword declares a block-scoped variable that can be reassigned. "Block-scoped" means the variable is only available within the block (`{...}`) where it's defined. This is the most common way to declare a variable when you know its value will change.

```javascript
let message = "Hello";
console.log(message); // Outputs: "Hello"

message = "World"; // The value can be changed
console.log(message); // Outputs: "World"
```

### `const`

The `const` keyword declares a block-scoped variable that **cannot** be reassigned. You must assign it a value when you declare it. Use `const` when you know the value should not change.

```javascript
const year = 2024;
console.log(year); // Outputs: 2024

// This would cause an error:
// year = 2025; // TypeError: Assignment to constant variable.
```

**Note**: For `const` objects and arrays, you can still change the *properties* of the object or the *elements* of the array, but you cannot reassign the variable to a new object or array.

### `var`

`var` was the original way to declare variables in JavaScript. It is function-scoped, not block-scoped, and has some behaviors (like hoisting) that can be confusing for new developers. In modern JavaScript (`ES6` and later), it's highly recommended to use `let` and `const` instead of `var`.

### Naming Variables

-   Names can contain letters, digits, underscores, and dollar signs.
-   Names must begin with a letter, `$`, or `_`.
-   Names are case-sensitive (`y` and `Y` are different variables).
-   Reserved keywords (like `let`, `const`, `function`) cannot be used as names.

### Exercises

1.  **Declare and assign**: Open your browser console. Declare a variable named `favoriteFood` using `let` and assign it the value of your favorite food as a string.
2.  **Try reassigning**: On the next line, reassign `favoriteFood` to a different food and log it to the console.
3.  **Use a constant**: Declare a constant named `birthYear` and assign it your birth year. Try to reassign it to a different year and observe the error in the console.
4.  **Calculate and store**: Declare two variables, `num1` and `num2`, with `let` and assign them numbers. Declare a third variable, `sum`, and assign it the value of `num1 + num2`. Log the `sum` to the console.
