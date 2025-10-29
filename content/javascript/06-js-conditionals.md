---
title: "JS Conditionals"
order: 6
---

## JavaScript Conditional Statements

Conditional statements are used to perform different actions based on different conditions.

### If, Else, Else If

-   Use `if` to specify a block of code to be executed, if a specified condition is true.
-   Use `else` to specify a block of code to be executed, if the same condition is false.
-   Use `else if` to specify a new condition to test, if the first condition is false.

```javascript
let time = 14;

if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
```

### Switch Statement

The `switch` statement is used to perform different actions based on different conditions. Use it to select one of many code blocks to be executed.

```javascript
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Weekday";
}
```