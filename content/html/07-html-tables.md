---
title: "HTML Tables"
order: 7
---

## HTML Tables

HTML tables allow you to arrange data into rows and columns.

### Basic Table Structure

- The `<table>` element defines a table.
- Each table row is defined with a `<tr>` tag.
- A table header is defined with a `<th>` tag (by default, bold and centered).
- A table data/cell is defined with a `<td>` tag.

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table>
```