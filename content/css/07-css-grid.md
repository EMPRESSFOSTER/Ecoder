---
title: "CSS Grid"
order: 7
---

## CSS Grid Layout

The CSS Grid Layout is a two-dimensional grid-based layout system that, compared to Flexbox, is optimized for building complex layouts. It allows you to create grid-based user interfaces with rows and columns.

### Grid Container and Grid Items

Similar to Flexbox, you start with a parent element (the "grid container") and one or more child elements (the "grid items").

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

The magic begins when you apply `display: grid;` to the container.

```css
.grid-container {
  display: grid;
}
```

### Defining the Grid Structure

You define the structure of the grid using `grid-template-columns` and `grid-template-rows`.

-   `grid-template-columns`: Defines the number and width of columns.
-   `grid-template-rows`: Defines the number and height of rows.

You can use pixel values, percentages, or the `fr` unit (which represents a fraction of the available space).

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 1fr 1fr; /* 3 columns: fixed, and two fractional */
  grid-template-rows: auto 200px;     /* 2 rows: one auto height, one fixed */
  gap: 10px; /* Space between grid items */
}
```

### Placing Items

Items are automatically placed into the grid cells, or you can explicitly place them using `grid-column` and `grid-row`.

```css
.item-1 {
  grid-column: 1 / 3; /* Span from column line 1 to 3 */
  grid-row: 1;
}
```

### Exercises

1.  **Create a simple grid**: Create a `<div>` with six child `<div>`s. Apply `display: grid` to the parent.
2.  **Define columns**: Use `grid-template-columns` to create a three-column grid where each column takes up an equal fraction of the space (`1fr 1fr 1fr`).
3.  **Add a gap**: Use the `gap` property to add space between your grid items.
4.  **Span an item**: Target one of the items and use `grid-column` to make it span across two columns.
