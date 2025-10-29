---
title: "JS Variables"
order: 2
---

## JavaScript Variables

Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.

- **`var`**: Was the original way to declare variables. It has function scope, but can have some unintuitive behaviors (like hoisting). Generally, it's recommended to use `let` and `const` instead.
- **`let`**: Allows you to declare block-scoped variables. The value can be changed.
- **`const`**: Allows you to declare block-scoped variables, but the value cannot be reassigned.

```javascript
let message = "Hello"; // The value can be changed
message = "World";

const year = 2023; // This will cause an error: year = 2024;
```