# Lesson 03 DIY Task: Build a 3-Page Mini-Site

## Overview
Design and build a **3-page website** with working navigation, page anchors, and contact links. You choose the topic.

**Time Estimate:** 45-60 minutes

---

## Site Structure
Exactly 3 pages, all in the **same folder**:
1. **index.html** — Home
2. **about.html** — About
3. **contact.html** — Contact

**Example topics:** coffee shop, tech blog, portfolio, pet care business, band, fitness studio.

---

## Requirements (all pages)
- Same `<header>` and `<nav>` on every page (copy/paste), with **relative links** to all 3 pages: `index.html`, `about.html`, `contact.html`
- `id="top"` on the header of every page
- `<footer>` with copyright text and matching nav
- Valid HTML5, all tags closed, at least a few explanatory comments
- Descriptive link text (no "click here")

## Page-Specific Requirements

**Home (index.html)**
- At least 2 `<section>` elements with `id` attributes
- At least one page anchor linking to a section (`href="#section-id"`)

**About (about.html)**
- At least 2 sections with meaningful content
- At least one page anchor

**Contact (contact.html)**
- Email link: `<a href="mailto:hello@example.com">Email Us</a>`
- Phone link: `<a href="tel:+1-555-0100">Call Us</a>`
- External link with `target="_blank"`
- Contact info displayed clearly

---

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Site Title - Home</title>
</head>
<body>

  <header id="top">
    <h1>Your Site Title</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <!-- Your page-specific content here -->
  </main>

  <footer>
    <p>&copy; 2024 Your Site. All rights reserved.</p>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </footer>

</body>
</html>
```

---

## Submission Checklist
- [ ] All 3 files created and in the same folder
- [ ] Navigation works on every page
- [ ] Page anchors jump to the correct sections
- [ ] Email link, phone link, and external link (`target="_blank"`) all work
- [ ] All HTML valid, no broken tags
- [ ] Footer with consistent links on all pages

Good luck building your site!