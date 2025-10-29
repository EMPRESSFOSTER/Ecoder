---
title: "HTML Syntax"
order: 2
---

## HTML Syntax

HTML elements are the building blocks of HTML pages. An HTML element is defined by a **start tag**, some **content**, and an **end tag**.

```html
<tagname>Content goes here...</tagname>
```

-   The **HTML element** is everything from the start tag to the end tag: `<p>My first paragraph.</p>`.
-   **Start tag**: `<p>`
-   **Element content**: `My first paragraph.`
-   **End tag**: `</p>`

Some HTML elements have no content, like the `<br>` element (which represents a line break). These are called **empty elements**. Empty elements do not have an end tag.

### Nested Elements

HTML elements can be nested, which means that elements can contain other elements.

All HTML documents consist of nested HTML elements. The following example contains four HTML elements (`<html>`, `<body>`, `<h1>`, and `<p>`):

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

### Exercises

1.  **Nest some elements**: Create a new HTML file. Inside the `<body>`, add a `<div>` element.
2.  **Add content to the nested element**: Inside the `<div>`, add an `<h2>` heading and two `<p>` paragraphs.
3.  **Observe the structure**: Open the file in a browser. While it may not look different visually yet, the content is now structurally grouped within the `<div>`.
