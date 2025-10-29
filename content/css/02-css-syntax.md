---
title: "CSS Syntax"
order: 2
---

## CSS Syntax

A CSS rule consists of a selector and a declaration block.

-   The **selector** points to the HTML element you want to style.
-   The **declaration block** contains one or more declarations separated by semicolons.
-   Each declaration includes a CSS **property name** and a **value**, separated by a colon.

```css
selector {
  property: value;
}
```

For example, this rule will make all `<p>` elements red:

```css
p {
  color: red;
  text-align: center;
}
```