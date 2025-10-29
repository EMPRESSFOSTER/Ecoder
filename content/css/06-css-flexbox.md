---
title: "CSS Flexbox"
order: 6
---

## CSS Flexbox Layout

The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space. A flex container expands items to fill available free space or shrinks them to prevent overflow.

### Parent and Child

Flexbox consists of a parent element (the "flex container") and its immediate children (the "flex items").

To start using flexbox, you need to first define a flex container.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
```