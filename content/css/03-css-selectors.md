---
title: "CSS Selectors"
order: 3
---

## CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories:

- **Simple selectors**: select elements based on name, id, class.
- **Combinator selectors**: select elements based on a specific relationship between them.
- **Pseudo-class selectors**: select elements based on a certain state.
- **Pseudo-elements selectors**: select and style a part of an element.
- **Attribute selectors**: select elements based on an attribute or attribute value.

### Common Selectors

- **Element Selector**: `p` (selects all `<p>` elements)
- **ID Selector**: `#firstname` (selects the element with `id="firstname"`)
- **Class Selector**: `.note` (selects all elements with `class="note"`)

```css
/* Selects all paragraphs */
p {
  font-family: verdana;
}

/* Selects the element with id="main" */
#main {
  border: 1px solid blue;
}

/* Selects all elements with class="highlight" */
.highlight {
  background-color: yellow;
}
```