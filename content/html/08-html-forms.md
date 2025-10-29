---
title: "HTML Forms"
order: 8
---

## HTML Forms

HTML forms are one of the most important parts of a web page. They are used to collect user input, which can then be sent to a server for processing. Examples include contact forms, login forms, and search boxes.

### The `<form>` Element

The `<form>` element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, and more.

```html
<form action="/submit-form" method="post">
  <!-- Form elements go here -->
</form>
```
-   The `action` attribute defines where the data gets sent when a form is submitted.
-   The `method` attribute specifies the HTTP method to be used (`GET` or `POST`).

### Common Input Types

The `<input>` element is the most used form element. The `type` attribute can be changed to many different variations depending on what you want to collect.

-   **Text Input**: `<input type="text" name="username">`
-   **Password Input**: `<input type="password" name="password">`
-   **Email Input**: `<input type="email" name="email">`
-   **Checkboxes**: `<input type="checkbox" name="vehicle" value="Bike">`
-   **Radio Buttons**: `<input type="radio" name="gender" value="male">`
-   **Submit Button**: `<input type="submit" value="Submit">`

### The `<label>` Element

The `<label>` tag defines a label for many form elements. It's a usability and accessibility best practice. The `for` attribute of the `<label>` should be equal to the `id` of the `<input>` element to bind them together.

```html
<label for="firstname">First name:</label>
<input type="text" id="firstname" name="firstname">
```

### Exercises

1.  **Create a simple login form**: In a new HTML file, create a form with an `action` that points to `/login`.
2.  **Add fields**: Inside the form, add two `<input>` fields: one for an email address and one for a password. Use the correct `type` for each.
3.  **Add labels**: Add a `<label>` for each input field and correctly associate it using the `for` and `id` attributes.
4.  **Add a submit button**: Add an `<input type="submit">` at the end of your form.
