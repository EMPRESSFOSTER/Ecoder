---
title: "CSS Flexbox"
order: 6
---

## CSS Flexbox Layout

The Flexbox Layout (Flexible Box) module is a one-dimensional layout model that offers an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.

The main idea behind flexbox is to give the container the ability to alter its items' width/height (and order) to best fill the available space. A flex container expands items to fill available free space or shrinks them to prevent overflow.

### The Flex Container and Flex Items

To start using Flexbox, you need a parent element (the "flex container") and one or more child elements (the "flex items").

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

The magic starts when you apply `display: flex;` to the container.

```css
.flex-container {
  display: flex;
}
```

### Key Flexbox Properties (for the Container)

-   `flex-direction`: Defines the direction items are placed (row, row-reverse, column, column-reverse).
-   `justify-content`: Aligns items along the main axis (flex-start, flex-end, center, space-between, space-around).
-   `align-items`: Aligns items along the cross axis (flex-start, flex-end, center, stretch, baseline).
-   `flex-wrap`: Allows items to wrap onto multiple lines if needed (`nowrap`, `wrap`, `wrap-reverse`).

```css
.flex-container {
  display: flex;
  justify-content: space-around; /* Distribute items with space around them */
  align-items: center; /* Vertically center items */
  height: 200px;
  background-color: DodgerBlue;
}
```

### Exercises

1.  **Create a flex row**: Create a `<div>` with three child `<div>`s inside. Apply `display: flex` to the parent. Give each child a width, height, and background color to see them.
2.  **Center the items**: Use `justify-content` and `align-items` on the container to perfectly center the three child items both horizontally and vertically within the parent. Give the parent a fixed height to see the vertical alignment.
3.  **Make a responsive navigation bar**: Create a `<nav>` with a `<ul>` inside. The `<ul>` should be a flex container. Place several `<li>` elements (your nav links) inside. Use `justify-content: space-between` to push the links to the edges of the container.
4.  **Try wrapping**: Add more items to your flex container until they overflow. Then, add `flex-wrap: wrap;` to the container to see them wrap to the next line.
