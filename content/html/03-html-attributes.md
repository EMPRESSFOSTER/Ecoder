---
title: "HTML Attributes"
order: 3
---

## HTML Attributes

Attributes provide **additional information** about HTML elements.

-   They are always specified in the **start tag**.
-   They usually come in name/value pairs like `name="value"`.

### The `href` Attribute

The `<a>` tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to:

```html
<a href="https://www.google.com">Visit Google</a>
```

### The `src` Attribute

The `<img>` tag is used to embed an image in an HTML page. The `src` attribute specifies the path to the image to be displayed:

```html
<img src="image.jpg">
```

### The `width` and `height` Attributes

The `width` and `height` attributes of `<img>` provide size information for images. The value can be in pixels (e.g., `width="500"`) or a percentage.

```html
<img src="img_girl.jpg" width="500" height="600">
```

### The `alt` Attribute

The `alt` attribute for `<img>` specifies an alternate text to be shown when the image cannot be displayed. This is important for accessibility.

```html
<img src="img_typo.jpg" alt="Girl with a jacket">
```

### The `style` Attribute

The `style` attribute is used to add styles to an element, such as color, font, size, and more.

```html
<p style="color:red;">This is a red paragraph.</p>
```

### Exercises

1.  **Add a link**: Create an HTML file and add a link to your favorite website.
2.  **Embed an image with attributes**: Find an image online and embed it using the `<img>` tag. Add `src`, `alt`, `width`, and `height` attributes.
3.  **Style a paragraph**: Add a paragraph and use the `style` attribute to make the text blue and increase its font size to `20px`.
