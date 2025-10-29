---
title: "HTML Tables"
order: 7
---

## HTML Tables

HTML tables allow you to arrange data—like text, images, links, etc.—into rows and columns. They are great for displaying tabular data.

### Basic Table Structure

-   The `<table>` element is the container for the entire table.
-   `<tr>` defines a table row.
-   `<th>` defines a table header cell. Text inside is bold and centered by default.
-   `<td>` defines a table data cell.

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>45</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>43</td>
  </tr>
</table>
```

### Table Attributes

-   `colspan`: To make a cell span over multiple columns.
-   `rowspan`: To make a cell span over multiple rows.

```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>45</td>
  </tr>
</table>
```

### Exercises

1.  **Create a weekly schedule**: Build a table that represents a simple 5-day weekly schedule. The columns should be the days of the week (Monday-Friday) and the rows should be time slots (e.g., 9am, 11am, 1pm). Fill in some activities.
2.  **Use `colspan`**: Create a new table for contact information with columns for Name, Email, and Phone. Add a row at the bottom that uses `colspan="3"` to have a single cell for a footer note like "All information is confidential."
3.  **Use `rowspan`**: Create a simple table with two columns. In the first column, have a cell that spans two rows using `rowspan="2"`.
