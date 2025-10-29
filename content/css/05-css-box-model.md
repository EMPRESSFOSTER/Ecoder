---
title: "The Box Model"
order: 5
---

## The CSS Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

-   **Content**: The content of the box, where text and images appear.
-   **Padding**: Clears an area around the content. The padding is transparent.
-   **Border**: A border that goes around the padding and content.
-   **Margin**: Clears an area outside the border. The margin is transparent.

```css
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```