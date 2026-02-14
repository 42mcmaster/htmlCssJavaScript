---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 01: Document Structure & Dev Environment

## Web Design Fundamentals
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 01a — HTML Document Structure" -->

## What is HTML?

- **HTML** = HyperText Markup Language
- It defines the **structure** of web pages
- Uses **tags** like `<p>`, `<h1>`, `<body>` to organize content
- Not for styling or design (that's CSS)
- Every modern web page starts with HTML

---

<!-- _header: "Sub-Lesson 01a — HTML Document Structure" -->

## The HTML Skeleton

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

**Every** HTML file needs this structure

---

<!-- _header: "Sub-Lesson 01a — HTML Document Structure" -->

## Key Parts of an HTML Document

- `<!DOCTYPE html>` — Tells the browser this is HTML5
- `<html>` — Root tag, wraps everything
- `<head>` — Metadata, title, links to CSS
- `<title>` — What appears in the browser tab
- `<meta charset="UTF-8">` — Character encoding (supports all languages)
- `<body>` — Where all visible content goes

---

<!-- _header: "Sub-Lesson 01b — Content Markup" -->

## Headings & Paragraphs

- `<h1>` to `<h6>` — Six heading levels
  - `<h1>` = most important (use once per page)
  - `<h2>` to `<h6>` = descending importance
- `<p>` — Paragraphs of text
- `<br>` — Line break (creates space without new paragraph)

**Note:** Use headings for structure, not just big text!

---

<!-- _header: "Sub-Lesson 01b — Content Markup" -->

## Comments & Whitespace

- `<!-- This is a comment -->` — Not visible to users, useful notes for developers
- **Whitespace in HTML is flexible:** extra spaces, tabs, and line breaks are treated as one space
- Write your HTML neatly with indentation for readability
- Comments help you remember what code does

---

<!-- _header: "Sub-Lesson 01b — Development Environment" -->

## VS Code Setup

1. Download **Visual Studio Code** (free)
2. Create a folder for your project
3. Open folder in VS Code
4. Create a new file: `index.html`
5. VS Code has built-in syntax highlighting for HTML
6. Use **Live Server** extension to preview in browser

---

<!-- _header: "Sub-Lesson 01b — Development Environment" -->

## Your First HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>About Me</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

Save as `index.html` and open in browser!

---

<!-- _header: "Review" -->

## Key Takeaways

- HTML provides **structure**, CSS provides **style**, JavaScript provides **interactivity**
- Every page needs doctype, html, head, body, title, and meta charset
- Headings show importance; paragraphs hold content
- Comments explain code; whitespace keeps it readable
- VS Code + Live Server = your development environment

---

<!-- _header: "Up Next" -->

## What's Coming

- 01a task: Build a basic page with proper structure
- 01b task: Add headings, paragraphs, and comments
- DIY task: Create a complete "About Me" page from scratch
- Quiz and study guide to review

Good luck!

---
