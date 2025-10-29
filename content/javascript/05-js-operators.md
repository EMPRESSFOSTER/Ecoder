---
title: "JS Operators"
order: 5
---

## JavaScript Operators

Operators are symbols used to perform operations on operands (values and variables).

### Arithmetic Operators

Used to perform arithmetic between numbers.

-   `+` (Addition)
-   `-` (Subtraction)
-   `*` (Multiplication)
-   `/` (Division)
-   `%` (Modulus - returns the division remainder)
-   `**` (Exponentiation - ES2016)

```javascript
let x = 10;
let y = 4;
console.log(x + y); // 14
console.log(x % y); // 2 (10 divided by 4 is 2 with a remainder of 2)
console.log(2 ** 3); // 8 (2 * 2 * 2)
```

### Assignment Operators

Used to assign values to variables.

-   `=` (Assignment)
-   `+=` (Add and assign, e.g., `x += y` is `x = x + y`)
-   `-=`, `*=`, `/=`, `%=` (Similar shorthand)

```javascript
let score = 100;
score += 10; // score is now 110
```

### Comparison Operators

Used in logical statements to determine equality or difference between variables or values. Returns `true` or `false`.

-   `==` (Equal to - converts types to match, can be unpredictable)
-   `===` (Strictly equal to - checks value AND type, **recommended**)
-   `!=` (Not equal)
-   `!==` (Strictly not equal - **recommended**)
-   `>`, `<`, `>=`, `<=` (Greater than, less than, etc.)

```javascript
console.log(5 == "5");  // true (bad!)
console.log(5 === "5"); // false (good!)
console.log(10 > 5);    // true
```

### Logical Operators

Used to combine or invert boolean values.

-   `&&` (Logical AND): `true` if both operands are true.
-   `||` (Logical OR): `true` if at least one operand is true.
-   `!` (Logical NOT): Inverts the boolean value (`!true` becomes `false`).

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive.");
}
```

### Exercises

1.  **Calculate total cost**: Declare a `price` variable and a `taxRate` variable. Calculate the `totalCost` (price + price * taxRate) and log it.
2.  **Use strict equality**: In the console, compare the number `7` and the string `"7"` using both `==` and `===`. Observe the difference.
3.  **Write a logical check**: Create two boolean variables, `isHungry` and `hasMoney`. Write an `if` statement that uses the logical AND (`&&`) operator to log "Time to eat!" only if both variables are `true`.
4.  **Use the NOT operator**: Declare a variable `isRaining` and set it to `false`. Write an `if` statement using the NOT (`!`) operator to log "Let's go for a walk!" if it is *not* raining.
