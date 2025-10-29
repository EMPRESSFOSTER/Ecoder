---
title: "CSS Selectors"
order: 3
---

## CSS Selectors

CSS selectors are patterns used to "find" (or select) the HTML elements you want to style. They are the first part of any CSS rule.

We can divide CSS selectors into five categories:

1.  **Simple selectors**: select elements based on name, id, class.
2.  **Combinator selectors**: select elements based on a specific relationship between them.
3.  **Pseudo-class selectors**: select elements based on a certain state (like `:hover`).
4.  **Pseudo-elements selectors**: select and style a part of an element (like `::first-line`).
5.  **Attribute selectors**: select elements based on an attribute or attribute value.

### The Most Common Selectors

-   **Element Selector**: Selects elements based on the element name.
    ```css
    p {
      text-align: center;
    }
    ```
-   **ID Selector**: Uses the `id` attribute of an HTML element to select a *specific* element. An ID must be unique within a page.
    ```css
    #unique-element {
      color: blue;
    }
    ```
-   **Class Selector**: Selects elements with a specific `class` attribute. You can use the same class on multiple elements.
    ```css
    .highlight {
      background-color: yellow;
    }
    ```

### Chaining and Grouping

-   **Grouping Selector**: To apply the same style to multiple selectors, group them with commas.
    ```css
    h1, h2, p {
      color: grey;
    }
    ```
-   **Chaining Selector**: To select an element that has multiple classes, you can chain them without spaces.
    ```html
    <p class="urgent important">Warning!</p>
    ```
    ```css
    .urgent.important {
      font-weight: bold;
    }
    ```

### Exercises

1.  **ID vs. Class**: Create an HTML file. Give one `<p>` an `id="intro"`. Give two other `<p>` elements a `class="note"`.
2.  **Style by ID**: In your CSS, use the ID selector to make the intro paragraph have a `font-style` of `italic`.
3.  **Style by Class**: Use the class selector to give all "note" paragraphs a light grey background color (`#f0f0f0`).
4.  **Group Selectors**: Style both the `<h1>` and `<h2>` on your page to have the same `font-family` using a grouped selector.
