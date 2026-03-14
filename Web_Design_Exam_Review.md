# Web Design Exam Review Guide

**145010 — Web Design | Monday Exam Prep**

---

## 1. Internet Law, Ethics & Professional Practice

**Creative Commons** — A set of public copyright licenses that allow free distribution of an otherwise copyrighted work. Creators choose how others may use their content (share, remix, commercial use, etc.).

**Intellectual Property** — Any work that is the result of creativity to which the creator has legal rights. You can apply for a copyright, patent, or trademark to protect it.

**Acceptable Use Policy (AUP)** — A set of rules defining how a network, system, or website may be used. Schools, businesses, and ISPs all use AUPs.

**Anti-Spam Laws (CAN-SPAM Act)** — Require commercial emails to clearly identify themselves as advertisements, provide an opt-out option, and include a valid sender address.

**Privacy Laws** — Laws that prohibit the disclosure or misuse of information about private individuals. Data protection regulations control how personal data is collected, stored, and shared.

**Netiquette** — The correct or acceptable way of communicating on the Internet — things like using appropriate language, not typing in ALL CAPS, and respecting others' time and bandwidth.

---

## 2. HTML Fundamentals

**HTML (Hypertext Markup Language)** — The standard coding language used to structure and format content for the World Wide Web. Browsers read HTML to display web pages.

**Elements** — Everything from a start tag to its end tag, including the content in between.
```html
<p>This entire line is an element.</p>
```

**Tags** — The HTML markup itself, from `<` to `>`. Tags wrap around content to create elements.

**Attributes** — Provide additional information about an element using name/value pairs.
```html
<img src="photo.jpg" alt="A sunset">
```

### Semantic vs. Non-Semantic Elements

**Semantic elements** clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO.

| Semantic | Purpose |
|---|---|
| `<header>` | Introductory content or navigation container |
| `<nav>` | Set of navigation links |
| `<main>` | Primary content of the page |
| `<section>` | Thematic grouping of content |
| `<article>` | Independent, self-contained content (blog post, news story) |
| `<aside>` | Content tangentially related to surrounding content (sidebar) |
| `<footer>` | Author info, copyright, contact links, sitemap |

**Non-semantic elements** tell nothing about their content. Examples: `<div>` (division/section) and `<span>` (inline container). Use these when no semantic tag fits.

### Block vs. Inline Elements

**Block-level elements** start on a new line and take up the full width available. Examples: `<div>`, `<h1>`–`<h6>`, `<p>`, `<section>`.

**Inline elements** do not start on a new line and only take up as much width as needed. Examples: `<span>`, `<a>`, `<img>`, `<strong>`.

### Headings

`<h1>` is the largest heading and should be used once per page for the main title. Headings range from `<h1>` (largest) down to `<h6>` (smallest).

---

## 3. Links, Media & Special Characters

### Absolute vs. Relative Links

**Absolute link** — A complete URL including the protocol. Used for external sites.
```html
<a href="https://www.example.com/page">Visit Example</a>
```

**Relative link** — A path referencing a file on the same server. No protocol needed.
```html
<a href="about.html">About Us</a>
```

### Link Pseudo-Classes (CSS)

| Selector | What It Styles |
|---|---|
| `a:link` | Unvisited link |
| `a:visited` | Previously visited link |
| `a:hover` | Link when mouse is over it |
| `a:active` | Link at the moment it is clicked |

### Character Entities (Special Characters)

Used to display reserved characters in HTML that would otherwise be interpreted as code.

| Entity | Displays |
|---|---|
| `&amp;` | & |
| `&nbsp;` | Non-breaking space |
| `&lt;` | < |
| `&gt;` | > |
| `&copy;` | (c) |

### Meta Elements

Reside in the `<head>` section. They provide metadata about the page — keywords, descriptions, author, and viewport settings — that help with SEO and responsiveness.

**Keywords** — Words or phrases describing page content, used as metadata for search engines and image descriptions.

**Viewport** — The user's visible area of a web page. It varies by device. Setting the viewport meta tag ensures proper scaling on mobile.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 4. CSS (Cascading Style Sheets)

CSS controls a website's text color, backgrounds, borders, spacing, positioning, and more.

### Three Ways to Apply CSS

**Inline style** — Applied directly to a single element using the `style` attribute. Highest specificity.
```html
<p style="color: blue;">Blue text</p>
```

**Internal style** — Written inside `<style>` tags in the `<head>`. Styles one page.
```html
<style>  p { color: blue; }  </style>
```

**External style sheet** — A separate `.css` file linked in the `<head>`. Best practice — one file can style an entire website.
```html
<link rel="stylesheet" href="styles.css">
```

### Cascade Order (When Rules Conflict)

Priority from highest to lowest: **Inline > Internal > External**. The most specific rule wins.

### Key CSS Concepts

**ID selector** (`#name`) — Used only once per page. Targets a unique element.

**Class selector** (`.name`) — Can be used multiple times on a page. Targets groups of elements.

**Font attributes** — type (font-family), size (font-size), color.

**Background attributes** — color and image.

**Border attributes** — width, style, and color.
```css
border: 2px solid #333;
```

---

## 5. Web Design Principles

**Validation (W3C)** — The process of checking that your HTML/CSS conforms to web standards defined by the World Wide Web Consortium. Ensures cross-browser consistency and accessibility.

**Usability** — How easy a user interface is to learn and use. Good usability means users can accomplish tasks efficiently.

**Readability** — How easily a person can understand your content. Affected by font choice, size, line spacing, contrast, and content complexity.

**Accessibility** — The practice of ensuring websites can be used by everyone, including people with physical disabilities, situational limitations, and limited bandwidth. Related standards include the Americans with Disabilities Act (ADA).

**Cross-Browser Compatibility** — Testing and debugging your site across different browsers and devices so it works consistently everywhere.

**Wireframe** — A visual prototype of a webpage focusing on content placement, layout, and behavior — not colors or final design.

**Site Map** — A structured list of all pages on a website, showing how they connect.

**Image Resolution / Optimization** — Optimizing images so they load quickly while maintaining acceptable quality. Higher resolution means more detail but larger file size.

---

## 6. Web Development Roles

**Front-End Developer** — Builds what users see and interact with, using HTML, CSS, and JavaScript.

**Back-End Developer** — Works with servers, databases, and dynamic content using languages like PHP.

**UX (User Experience) Designer** — Focused on how the product *feels*. Creates wireframes, prototypes, and conducts user testing.

**UI (User Interface) Designer** — Focused on how the product *looks*. Handles buttons, icons, spacing, typography, color schemes, and responsive design.

---

## 7. Web Forms (Outcome 6.4)

Forms collect user input using a variety of elements: text fields, radio buttons, check boxes, drop-down menus, and submit/reset buttons.

**Form action** — The `action` attribute specifies where form data is sent when submitted.
```html
<form action="process.php" method="post">
```

Key form elements to know: `<input>`, `<select>`, `<textarea>`, `<button>`, `<fieldset>`, `<label>`.

---

## 8. Quick-Reference: Document Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title (shows in browser tab)</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>Site header / navigation</header>
    <main>
      <section>
        <article>Main content here</article>
      </section>
      <aside>Sidebar content</aside>
    </main>
    <footer>Copyright, contact info</footer>
  </body>
</html>
```

---

**Best Coding Practice** — Informal rules adopted by the development community to keep code clean, maintainable, and consistent. Using external CSS, semantic HTML, proper indentation, and W3C validation are all best practices.

*Good luck on Monday — you've got this!*
