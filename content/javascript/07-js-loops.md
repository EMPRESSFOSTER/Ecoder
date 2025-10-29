---
title: "JS Loops"
order: 7
---

## JavaScript Loops

Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly. They are handy if you want to run the same code over and over again, each time with a different value.

### The `for` Loop

The `for` loop is the most common type of loop. It repeats a block of code as long as a certain condition is true.

It is composed of three parts:
1.  **Initialization**: `let i = 0` - executed once before the loop starts.
2.  **Condition**: `i < 5` - checked before each iteration. If it's `true`, the loop continues.
3.  **Increment**: `i++` - executed at the end of each iteration.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}
// This will print numbers 0 through 4.
```

### Looping Through Arrays

You can use a `for` loop to iterate over the elements of an array.

```javascript
const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### The `for...of` Loop (ES6)

A more modern and cleaner way to loop over iterable objects like arrays.

```javascript
const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### The `while` Loop

A `while` loop repeats a block of code as long as a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log("The number is " + i);
  i++;
}
```

Be careful with `while` loops! If the condition never becomes `false`, the loop will run forever, causing your browser to freeze.

### Exercises

1.  **Count to 10**: Write a `for` loop that logs the numbers from 1 to 10 to the console.
2.  **Sum an array**: Create an array of numbers (e.g., `[1, 2, 3, 4, 5]`). Use a loop to calculate the sum of all the numbers in the array and log the final sum.
3.  **Use `for...of`**: Create an array of your favorite colors. Use a `for...of` loop to log a sentence for each color, like "My favorite color is [color]".
4.  **A simple `while` loop**: Write a `while` loop that counts down from 3 to 1, logging "T-minus [number]..." each time.
