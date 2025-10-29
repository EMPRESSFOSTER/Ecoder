---
title: "Links & Images"
order: 6
---

## Links and Images

Links and images are fundamental components that make the web interactive and visually engaging.

### Links (`<a>`)

The HTML `<a>` tag defines a hyperlink. The most important attribute of the `<a>` element is `href`, which indicates the link's destination.

-   **Absolute URL**: Links to an external page.
    ```html
    <a href="https://www.google.com">Visit Google</a>
    ```
-   **Relative URL**: Links to a file within your own website.
    ```html
    <a href="/about.html">About Us</a>
    ```
-   **The `target` attribute**: Specifies where to open the linked document. `_blank` opens it in a new window or tab.
    ```html
    <a href="https://www.google.com" target="_blank">Search on Google</a>
    ```

### Images (`<img>`)

The HTML `<img>` tag is used to embed an image in a web page. It is an empty tag, which means it contains attributes only and has no closing tag.

-   **`src` attribute (required)**: Specifies the path (URL) to the image.
-   **`alt` attribute (required)**: Provides an alternate text for an image if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

```html
<img src="smiley.gif" alt="Smiley face" width="42" height="42">
```

### Exercises

1.  **Create a navigation menu**: In an HTML file, create an unordered list where each list item contains a link (`<a>`) to a different website. Use `target="_blank"` for each link.
2.  **Make an image a link**: Embed an image using `<img>`. Then, wrap the `<img>` tag with an `<a>` tag to make the entire image a clickable link.
3.  **Create a simple gallery**: Create a section in your HTML file with a heading "My Photo Gallery". Below it, add three different images with appropriate `alt` text for each.
