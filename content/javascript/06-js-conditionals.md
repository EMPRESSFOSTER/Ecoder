---
title: "JS Conditionals"
order: 6
---

## JavaScript Conditional Statements

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

### `if`, `else if`, `else`

The most common conditional statement is the `if...else` block.

-   Use `if` to specify a block of code to be executed, if a specified condition is true.
-   Use `else if` to specify a new condition to test, if the first condition is false.
-   Use `else` to specify a block of code to be executed, if all previous conditions are false.

```javascript
let hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(greeting);
```

### The `switch` Statement

The `switch` statement is used to perform different actions based on different conditions. It's a good alternative to a long chain of `if...else if` statements when you are comparing a single value against multiple variants.

```javascript
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  // ... more cases for Tuesday, Wednesday, etc.
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}
console.log("Today is " + day);
```
-   The `switch` expression is evaluated once.
-   The value of the expression is compared with the values of each `case`.
-   If there is a match, the associated block of code is executed.
-   The `break` keyword stops the execution inside the switch block. If omitted, the next case will be executed.
-   The `default` keyword specifies the code to run if there is no case match.

### Exercises

1.  **Check a grade**: Declare a variable `score` and give it a number value (e.g., 85). Write an `if...else if...else` statement to log "A" for scores 90+, "B" for 80-89, "C" for 70-79, and "F" for anything lower.
2.  **Create a `switch` statement**: Write a `switch` statement for a variable `fruit`. Create cases for "apple", "banana", and "orange". Each case should log a sentence about that fruit. Add a `default` case that logs "I don't know that fruit."
3.  **Combine conditionals**: Write a function `canEnterBar` that takes an `age` and a boolean `isWithParent`. The function should log "Welcome" if the age is 21 or over, OR if the age is 18 or over AND `isWithParent` is true. Otherwise, it should log "Access denied".
