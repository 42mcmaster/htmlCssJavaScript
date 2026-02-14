# HTML 01 Study Guide: Document Structure & Dev Environment

## Vocabulary

1. **HTML** — HyperText Markup Language; the standard markup language for creating web pages that defines document structure.

2. **DOCTYPE** — Declaration that tells the browser what version of HTML the document uses; `<!DOCTYPE html>` for HTML5.

3. **Tag** — An HTML element enclosed in angle brackets; can be opening (e.g., `<p>`) or closing (e.g., `</p>`).

4. **Element** — A complete HTML component made up of opening tag, content, and closing tag (e.g., `<p>Hello</p>`).

5. **Attribute** — Additional information about an element, placed in the opening tag (e.g., `lang` in `<html lang="en">`).

6. **Meta Tag** — A tag in the `<head>` that provides metadata about the document; does not appear on the page.

7. **Charset** — Character set encoding that specifies how text is encoded; UTF-8 supports all languages and symbols.

8. **Semantics** — Using HTML tags that accurately describe the meaning of content; important for accessibility and SEO.

9. **Whitespace** — Extra spaces, tabs, and line breaks in HTML code; browsers treat multiple whitespaces as a single space.

10. **Comment** — Text in HTML surrounded by `<!-- -->` that is not displayed to users; useful for developer notes.

11. **Root Element** — The outermost HTML element (`<html>`) that contains all other elements.

12. **Head** — The `<head>` section of an HTML document containing metadata, title, and links; not displayed on the page.

13. **Body** — The `<body>` section containing all visible content that displays in the browser window.

14. **Title** — The `<title>` tag that displays in the browser tab and bookmark; important for SEO and user identification.

15. **Heading** — Tags `<h1>` through `<h6>` that create headings of different importance levels; `<h1>` is most important.

16. **Paragraph** — The `<p>` tag that marks a block of text as a paragraph with spacing before and after.

17. **Line Break** — The `<br>` tag that creates a line break without starting a new paragraph or creating extra space.

18. **Indentation** — Using spaces or tabs to organize HTML code hierarchy for readability.

19. **IDE** — Integrated Development Environment; software for writing and editing code (e.g., Visual Studio Code).

20. **VS Code** — Visual Studio Code; a free, popular text editor with built-in features for HTML development.

---

## Quick Reference: HTML Document Structure

### Minimal HTML5 Template
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

### Essential Meta Tag
```html
<!-- Declares character encoding for international text support -->
<meta charset="UTF-8">
```

### Headings Hierarchy
```html
<h1>Most Important Title</h1>      <!-- Use once per page -->
<h2>Section Heading</h2>           <!-- Next level down -->
<h3>Subsection</h3>               <!-- Continue as needed -->
<!-- ... h4, h5, h6 available for deeper nesting -->
```

### Text Content
```html
<p>This is a paragraph of text.</p>
<p>This is another paragraph.<br>This is on a new line.</p>

<!-- This is a comment and won't display -->
```

### VS Code Workflow
1. Create project folder
2. Open folder in VS Code
3. Create `index.html` file
4. Add HTML structure
5. Install Live Server extension
6. Right-click file → "Open with Live Server"
7. Edit and save; browser auto-refreshes

---

## ODE Competencies Covered

### 6.1.1 — Understand HTML Principles
- Structure and purpose of HTML documents
- DOCTYPE and proper document hierarchy
- Use of semantic markup (headings, paragraphs)
- Role of meta tags in document metadata

### 6.5.5 — Select Appropriate IDE and Tools
- Introduction to Visual Studio Code
- Basic VS Code interface and file management
- Using Live Server for local testing
- Code editor features (syntax highlighting, indentation)

### 6.5.1 — Follow Web Standards and Conventions
- HTML5 standards and best practices
- Proper document structure
- Valid HTML syntax
- Character encoding standards (UTF-8)
- Code organization and commenting practices

---
