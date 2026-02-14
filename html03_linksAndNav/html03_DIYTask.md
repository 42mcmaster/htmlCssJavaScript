# Lesson 03 DIY Task: Build a 3-Page Mini-Site

## Overview
In this independent project, you will design and build a **fully functional 3-page website** with working navigation, page anchors, and contact links. You get to choose the topic!

**Time Estimate:** 45-60 minutes

---

## Project Requirements

### Site Structure
Your site must include **exactly 3 pages**:
1. **index.html** — Home page
2. **about.html** — About/Info page
3. **contact.html** — Contact page

All files must be in the **same folder**.

---

### Page 1: Home (index.html)

**Must Include:**
- [ ] `<header>` with `id="top"` containing the site title (h1)
- [ ] `<nav>` element with links to all 3 pages using **relative links**
  - `<a href="index.html">Home</a>`
  - `<a href="about.html">About</a>`
  - `<a href="contact.html">Contact</a>`
- [ ] At least 2 `<section>` elements with `id` attributes
- [ ] At least one **page anchor** — use `<a href="#section-id">` to link to sections
- [ ] `<footer>` with copyright text and secondary navigation
- [ ] Descriptive content relevant to your chosen topic

**Example Topics to Choose:**
- Coffee shop (menu, locations, hours)
- Tech blog (tutorials, resources, contact)
- Portfolio (projects, skills, contact)
- Pet care business (services, pricing, contact)
- Music band (biography, tour dates, contact)
- Fitness studio (classes, pricing, contact)

---

### Page 2: About (about.html)

**Must Include:**
- [ ] Same `<header>` and `<nav>` as index.html (copy and paste is fine)
- [ ] At least 2 sections with meaningful content
- [ ] At least one internal **page anchor** using `id` and `href="#id"`
- [ ] **Relative links** to other pages (`href="index.html"`, `href="contact.html"`)
- [ ] `<footer>` with same navigation structure as home page
- [ ] Descriptive content about your chosen business/topic

---

### Page 3: Contact (contact.html)

**Must Include:**
- [ ] Same `<header>` and `<nav>` structure as other pages
- [ ] At least one **email link** using `mailto:`
  - Example: `<a href="mailto:hello@example.com">Email Us</a>`
- [ ] At least one **phone link** using `tel:` protocol
  - Example: `<a href="tel:+1-555-0100">Call Us</a>`
- [ ] At least one **external link** to a related website with `target="_blank"`
- [ ] Contact information displayed nicely
- [ ] `<footer>` with same navigation
- [ ] Optional: a **download link** using the `download` attribute

---

### Code Quality Requirements

- [ ] **Valid HTML5** — all tags properly opened and closed
- [ ] **Comments** — include HTML comments explaining key sections
- [ ] **Descriptive link text** — avoid "click here"; use meaningful text
- [ ] **Consistent navigation** — same nav menu on all pages
- [ ] **Working links** — test all links before submitting
- [ ] **Proper id attributes** — use hyphens or camelCase (no spaces)

---

## Bonus Challenges (Optional)

- [ ] Add a **breadcrumb navigation** on the About page showing: Home > About
- [ ] Create a **"Back to Top"** link on the longest page using `#top`
- [ ] Add more than 3 sections with page anchors for better organization
- [ ] Include a **download link** for a PDF file (e.g., resume, brochure, menu)
- [ ] Use consistent HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`)

---

## Submission Checklist

Before you submit, verify:

- [ ] All 3 HTML files are created (index.html, about.html, contact.html)
- [ ] All files are in the same folder
- [ ] Navigation links work on all pages
- [ ] Page anchors jump to the correct sections
- [ ] Email link opens your email client (or shows an error, which is fine)
- [ ] External link opens in a new tab
- [ ] All HTML is valid (no broken tags)
- [ ] Page titles are descriptive
- [ ] Footer appears on all pages with consistent links

---

## Tips for Success

1. **Plan before you code**
   - Decide on your topic
   - Sketch out what content goes on each page
   - Plan your section ids before writing HTML

2. **Copy-paste your header and footer**
   - To ensure consistency, copy the exact same `<header>` and `<footer>` to all pages
   - This guarantees navigation works everywhere

3. **Test as you go**
   - After creating each page, open it in a browser
   - Click every link to verify it works
   - Don't wait until the end to test

4. **Use meaningful id names**
   - Instead of `id="section1"`, use `id="mission"` or `id="team"`
   - This makes your HTML easier to understand

5. **Keep it simple**
   - You don't need CSS or styling for this project
   - Focus on correct HTML structure and working links
   - Content should be well-organized and readable

---

## Example HTML Structure

Here's a quick example structure (adapt for your topic):

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

## Grading Rubric (if applicable)

| Criteria | Points | Notes |
|----------|--------|-------|
| **All 3 pages created** | 20 | index.html, about.html, contact.html |
| **Navigation works** | 20 | All relative links functional on all pages |
| **Page anchors work** | 15 | Fragment links (#) jump to correct sections |
| **Email & special links** | 15 | mailto:, tel:, target="_blank" work correctly |
| **Code quality** | 15 | Valid HTML, proper tags, comments included |
| **Content & organization** | 15 | Clear, readable, well-organized content |
| **Total** | 100 | |

---

## Questions to Ask Yourself

Before submitting, ask:

1. Do all my links work when I click them?
2. Can users navigate between all 3 pages easily?
3. Are there any broken tags or missing closing tags?
4. Does my site make sense? Is the content organized logically?
5. Did I test on multiple pages? (not just the home page)
6. Would a stranger be able to understand what my site is about?
7. Are all my id attributes unique and properly spelled?

---

## Need Help?

**Troubleshooting:**
- Links not working? Check file names and paths carefully
- Email link not opening? That's normal if no email client is set up
- Fragment links not working? Check that your id attribute exists and is spelled correctly
- Navigation missing on a page? Probably didn't save changes; try closing and reopening

**Review:**
- Check the walkthrough files for examples
- Look at the task solutions for proper structure
- Read the study guide for syntax help

---

Good luck building your site!

