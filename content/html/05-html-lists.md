---
title: "HTML Lists"
order: 5
---

## HTML Lists

HTML lists allow web developers to group a set of related items in lists. This is useful for organizing information in a structured and semantic way.

### Unordered List

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` (list item) tag. By default, the list items will be marked with bullets (small black circles).

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

### Ordered List

An ordered list starts with the `<ol>` tag. Each list item also starts with the `<li>` tag. By default, the list items will be marked with numbers.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Description List

A description list is a list of terms, with a description of each term. The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term.

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

### Exercises

1.  **Create a shopping list**: Make an HTML file and create a shopping list for groceries using an unordered list (`<ul>`).
2.  **List your top 3 movies**: Create an ordered list (`<ol>`) of your three favorite movies.
3.  **Define some web terms**: Use a description list (`<dl>`) to define the terms "HTML", "CSS", and "JavaScript".
