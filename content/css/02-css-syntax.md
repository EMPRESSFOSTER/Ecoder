---
title: "CSS Syntax"
order: 2
---

## CSS Syntax

A CSS rule-set consists of a **selector** and a **declaration block**.

```css
selector {
  property: value;
}
```

-   The **selector** points to the HTML element you want to style (e.g., `p`, `h1`, `.classname`).
-   The **declaration block** contains one or more declarations separated by semicolons.
-   Each **declaration** includes a CSS property name and a value, separated by a colon.

### Example Explained

```css
p {
  color: red;
  text-align: center;
}
```

-   `p` is the selector. It selects all `<p>` elements on the page.
-   `{ color: red; text-align: center; }` is the declaration block.
-   `color: red;` is the first declaration. `color` is the property, and `red` is the value.
-   `text-align: center;` is the second declaration. `text-align` is the property, and `center` is the value.

### Comments in CSS

You can add comments to your CSS code to explain what it does. Comments are ignored by the browser. A CSS comment starts with `/*` and ends with `*/`.

```css
/* This is a single-line comment */
p {
  color: red;
}

/*
  This is a
  multi-line comment
*/
```

### Exercises

1.  **Write your own rules**: Create an HTML file with an `<h1>` and a `<p>`.
2.  **Create a stylesheet**: Create a `styles.css` file and link it to your HTML.
3.  **Style the elements**: In your CSS file, write a rule to make the `<h1>` text color `navy`. Write another rule to give the `<p>` a `font-size` of `18px`.
4.  **Add a comment**: Add a comment above your `h1` rule explaining what it does.
