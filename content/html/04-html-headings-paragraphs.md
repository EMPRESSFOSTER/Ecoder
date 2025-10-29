---
title: "Headings & Paragraphs"
order: 4
---

## Headings and Paragraphs

Headings and paragraphs are the most basic and essential elements for structuring text content on a webpage, making it readable and organized.

### Headings

HTML offers six levels of headings, from `<h1>` to `<h6>`. `<h1>` should be used for the main heading of a page, followed by `<h2>` for subheadings, and so on.

Using headings correctly is crucial for both user experience and Search Engine Optimization (SEO), as search engines use them to understand the structure and importance of your page content.

```html
<h1>Page Title</h1>
<h2>Section Heading</h2>
<p>Some text for this section.</p>
<h3>Subsection Heading</h3>
<p>More detailed text.</p>
```

### Paragraphs

The `<p>` element defines a paragraph. Browsers automatically add some white space (a margin) before and after each paragraph, which separates them visually. You should use `<p>` for any block of standalone text.

```html
<p>This is the first paragraph. It contains some text that introduces a topic.</p>
<p>This is the second paragraph. It provides more details and continues the discussion.</p>
```

### The `<hr>` Tag

The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. It is used to separate content (or define a change) in an HTML page.

```html
<h1>Main Title</h1>
<p>Some introductory text.</p>
<hr>
<h2>A New Section</h2>
<p>Text related to the new section.</p>
```

### Exercises

1.  **Create a blog post structure**: In a new HTML file, create a structure for a simple blog post. It should have one `<h1>` for the main title, two `<h2>` sections, and a few `<p>` paragraphs under each section.
2.  **Add a thematic break**: Use the `<hr>` tag to visually separate the two sections of your blog post.
3.  **Experiment with heading levels**: Add `<h3>` and `<h4>` subheadings within your sections to see how they render. Notice the default size and boldness of each level.
