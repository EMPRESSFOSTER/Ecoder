---
title: "Colors & Backgrounds"
order: 4
---

## CSS Colors and Backgrounds

CSS gives you full control over the colors and backgrounds of your elements, which is fundamental to the look and feel of your website.

### Text Color

The `color` property is used to set the color of the text. Values can be color names, HEX codes, RGB, or HSL values.

```css
/* Using a color name */
body {
  color: darkblue;
}

/* Using a hexadecimal code */
h1 {
  color: #00008b;
}

/* Using RGB */
p {
  color: rgb(0, 0, 139);
}
```

### Background Color

The `background-color` property sets the background color of an element. This color fills the content and padding boxes of the element.

```css
body {
  background-color: lightblue;
}

div {
  background-color: #f1f1f1;
  padding: 20px;
}
```

### Background Image

The `background-image` property sets an image as the background of an element. By default, the image is repeated to fill the entire element.

```css
body {
  background-image: url("paper.gif");
}
```

You can control the background's behavior with other properties:

-   `background-repeat`: `no-repeat`, `repeat-x`, `repeat-y`, `repeat`.
-   `background-position`: `center`, `top left`, `50% 50%`, etc.
-   `background-size`: `cover`, `contain`, or specific dimensions.

```css
div {
  background-image: url("photo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 400px;
  color: white;
}
```

### Exercises

1.  **Set a page background**: In your CSS file, set the `background-color` of the `<body>` to a light, neutral color like `#f4f4f4`.
2.  **Highlight a section**: Create a `<div>` in your HTML with some text inside. In your CSS, give this `<div>` a different `background-color` and set the `color` of the text inside to contrast with it (e.g., dark text on a light background).
3.  **Add a background image**: Find a subtle pattern image online. Apply it as a `background-image` to the `<body>`. Experiment with the `background-repeat` property.
4.  **Create a hero banner**: Make a `<div>` with a specific height (e.g., `300px`). Set a `background-image` on it, and use `background-size: cover` and `background-position: center` to make it a responsive banner.
