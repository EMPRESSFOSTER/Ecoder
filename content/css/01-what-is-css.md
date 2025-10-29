---
title: "What is CSS?"
order: 1
---

## What is CSS?

CSS stands for **Cascading Style Sheets**. If HTML is the skeleton of a webpage, CSS is the clothing, styling, and appearance. It's a stylesheet language used for describing the presentation of a document written in a markup language like HTML.

### What can CSS do?

-   **Control Appearance**: You can change the color, font, size, and spacing of your content.
-   **Create Layouts**: You can position elements on the page, create multi-column layouts, and more.
-   **Add Effects**: You can add animations, transitions, and other visual effects to elements.
-   **Responsive Design**: It allows for creating designs that adapt to different screen sizes, making your site look good on desktops, tablets, and phones.

Here's a small CSS snippet that makes all paragraphs red and centered:

```css
p {
  color: red;
  text-align: center;
}
```

### How to Add CSS

There are three ways of inserting a style sheet:

1.  **External CSS**: The best way. You define your styles in a separate `.css` file and link it in your HTML's `<head>`.
2.  **Internal CSS**: You can place CSS rules within a `<style>` tag in the `<head>` section of an HTML document.
3.  **Inline CSS**: You apply styles directly to an HTML element using the `style` attribute. This is generally discouraged for large-scale styling.

### Exercises

1.  **Create a CSS file**: Create a new file named `style.css`.
2.  **Style a heading**: In `style.css`, write a rule to make all `<h1>` elements blue.
3.  **Link it**: Create an `index.html` file and link your `style.css` file in the `<head>` section using a `<link>` tag. Add an `<h1>` to your HTML to see the style applied.
4.  **Try internal CSS**: In the same HTML file, add a `<style>` block in the `<head>` and write a rule to make all `<p>` elements have a green color.
