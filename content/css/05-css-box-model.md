---
title: "The Box Model"
order: 5
---

## The CSS Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout. The CSS box model is a box that wraps around every HTML element. It consists of: **content**, **padding**, **border**, and **margin**.

![CSS Box Model](https://www.w3schools.com/css/boxmodel.gif)
*Image from W3Schools*

-   **Content**: The content of the box, where text and images appear. Its size can be set with `width` and `height` properties.
-   **Padding**: An area of space around the content, inside the border. The padding is transparent. You can set it with `padding`.
-   **Border**: A border that goes around the padding and content. You can set its `border-width`, `border-style`, and `border-color`.
-   **Margin**: An area of space outside the border. The margin is also transparent and is used to create space between elements.

```css
div {
  width: 300px;
  padding: 25px;
  border: 5px solid navy;
  margin: 25px;
  background-color: lightblue;
}
```

### `box-sizing`

By default, the `width` and `height` properties apply only to the content box. Padding and border are added *on top* of the width/height. This can make sizing tricky.

The `box-sizing: border-box;` property changes this behavior. It tells the browser to include the padding and border in the element's total width and height. This is a much more intuitive way to handle sizing. It's common practice to apply this to all elements:

```css
* {
  box-sizing: border-box;
}
```

### Exercises

1.  **Create a styled box**: Create a `<div>` in your HTML. In your CSS, give it a `width`, `height`, `padding`, `border`, and `margin`. Set a `background-color` to see the content and padding area clearly.
2.  **Observe spacing**: Create two of these boxes, one after the other. Notice how their margins combine to create space between them.
3.  **Implement `border-box`**: Add the `* { box-sizing: border-box; }` rule to the top of your stylesheet. Now, set your box's `width` to `100%`. See how it now fills its container without overflowing due to padding or border.
