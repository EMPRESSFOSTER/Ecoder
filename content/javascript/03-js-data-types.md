---
title: "JS Data Types"
order: 3
---

## JavaScript Data Types

JavaScript is a **dynamically typed** language. This means you don't have to specify the data type of a variable when you declare it. The JavaScript engine infers the type at runtime. Variables can also hold different types of data over time.

### Primitive Data Types

Primitives are the most basic data types. They are **immutable**, meaning their value cannot be changed once created.

-   **String**: Represents textual data. Enclosed in single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``).
    ```javascript
    let name = "John Doe";
    ```
-   **Number**: Represents both integer and floating-point numbers.
    ```javascript
    let age = 30;
    let price = 19.99;
    ```
-   **Boolean**: Represents a logical entity and can have two values: `true` or `false`.
    ```javascript
    let isLoggedIn = true;
    ```
-   **Undefined**: A variable that has been declared but has not yet been assigned a value has the type `undefined`.
    ```javascript
    let user; // user is undefined
    ```
-   **Null**: Represents the intentional absence of any object value. It's an assignment value that means "no value".
    ```javascript
    let selectedCar = null;
    ```
-   **BigInt**: For integers of arbitrary length.
-   **Symbol**: A unique and immutable primitive value.

### Non-Primitive Data Type

-   **Object**: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Objects are mutable.
    ```javascript
    let person = {
      firstName: "John",
      lastName: "Doe",
      age: 50
    };
    ```

### The `typeof` Operator

You can use the `typeof` operator to find the data type of a JavaScript variable.

```javascript
typeof "Hello";   // Returns "string"
typeof 3.14;      // Returns "number"
typeof true;      // Returns "boolean"
typeof {a: 1};    // Returns "object"
typeof undefined; // Returns "undefined"
typeof null;      // Returns "object" (This is a famous, long-standing bug)
```

### Exercises

1.  **Check types in the console**: Open your browser console and use the `typeof` operator on the following values: `42`, `"hello"`, `false`, `[]` (an empty array, which is an object), and a variable you haven't declared.
2.  **Create a person object**: Declare a `const` variable named `student` and assign it an object. The object should have properties for `name` (string), `age` (number), and `isEnrolled` (boolean).
3.  **Log properties**: Log the `name` and `age` of your `student` object to the console using dot notation (e.g., `student.name`).
4.  **Dynamic typing**: Declare a variable with `let` called `myVar` and assign it a number. Log its `typeof`. Then, assign it a string. Log its `typeof` again to see the type change.
