# Lesson 03 Study Guide: Links & Navigation

## Vocabulary & Key Concepts

### Link Fundamentals
1. **`<a>` (Anchor Tag)** — HTML element that creates hyperlinks to other pages, files, or websites
2. **`href` Attribute** — Specifies the destination URL or file path for a link
3. **Link Text** — The visible text users see and click on in a link
4. **Absolute Link** — A complete URL including protocol (https://) that works from anywhere
5. **Relative Link** — A file path relative to the current page; works within your own site

### Link Navigation
6. **Target Attribute** — Controls where a link opens (same tab, new tab, new window, etc.)
7. **`target="_blank"`** — Opens link in a new tab or window; keeps the original page open
8. **`target="_self"`** — Opens link in the same tab (default behavior)
9. **Fragment Identifier** — The `#` symbol used to link to a specific section on a page
10. **`id` Attribute** — Creates a unique identifier on an element that can be linked to

### Page Anchors & Navigation
11. **Page Anchor** — A named location on a page created with `id` attribute; used for internal linking
12. **Navigation Menu** — Links that help users move between pages (usually in `<header>` or `<footer>`)
13. **`<nav>` Element** — Semantic HTML container for navigation links
14. **Site Map** — A visual or text overview of all pages in a website and how they connect
15. **Breadcrumb Navigation** — A secondary navigation showing the user's path through the site

### Email & Download Links
16. **Email Link** — A link using `mailto:` protocol that opens the user's default email client
17. **`mailto:` Protocol** — URL scheme that launches an email application (e.g., `mailto:contact@example.com`)
18. **Download Attribute** — HTML attribute that forces browsers to download a file instead of opening it
19. **Query String** — Additional parameters added to URLs (e.g., `?subject=Hello&body=Message`)
20. **Protocol** — The beginning of a URL that specifies how to access a resource (http, https, mailto, ftp, etc.)

### Best Practices
21. **Accessibility in Links** — Using descriptive link text so screen readers can understand the link's purpose
22. **External Links** — Links to websites outside your own; should open in new tab for better UX
23. **Navigation Consistency** — Keeping navigation menus the same across all pages for user familiarity
24. **Folder Structure** — Organizing website files into logical directories for easier relative linking

---

## Quick Reference Cheat Sheet

### Basic Links
```html
<!-- Simple link to another page -->
<a href="about.html">About Us</a>

<!-- Link to external website -->
<a href="https://www.google.com">Google</a>

<!-- Link that opens in new tab -->
<a href="https://www.google.com" target="_blank">Google (new tab)</a>
```

### Absolute vs. Relative Links
```html
<!-- Absolute link (full URL) -->
<a href="https://example.com/pages/about.html">About</a>

<!-- Relative link (same folder) -->
<a href="about.html">About</a>

<!-- Relative link (subfolder) -->
<a href="pages/services.html">Services</a>

<!-- Relative link (parent folder) -->
<a href="../index.html">Home</a>
```

### Page Anchors
```html
<!-- Mark a section with id -->
<h2 id="contact">Contact Information</h2>
<p id="footer-section">Footer content</p>

<!-- Link to that section on same page -->
<a href="#contact">Jump to Contact</a>

<!-- Link to section on different page -->
<a href="index.html#contact">View Contact Info</a>

<!-- Back to top -->
<header id="top"></header>
<a href="#top">Back to Top</a>
```

### Email Links
```html
<!-- Basic email link -->
<a href="mailto:contact@example.com">Email Us</a>

<!-- With subject line -->
<a href="mailto:support@example.com?subject=Help%20Needed">Contact Support</a>

<!-- With subject and body -->
<a href="mailto:info@example.com?subject=Question&body=I%20have%20a%20question">Send Email</a>
```

### Download Links
```html
<!-- Download file -->
<a href="files/resume.pdf" download>Download Resume</a>

<!-- Download and rename -->
<a href="files/document.pdf" download="MyDocument.pdf">Download</a>

<!-- Download image -->
<a href="images/photo.jpg" download="ProfilePhoto.jpg">Save Photo</a>
```

### Navigation Structure
```html
<header>
  <h1>My Site</h1>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>

<main>
  <!-- Page content -->
</main>

<footer>
  <p>&copy; 2024 My Site</p>
  <nav>
    <a href="index.html">Home</a>
    <a href="privacy.html">Privacy</a>
    <a href="mailto:support@example.com">Support</a>
  </nav>
</footer>
```

### Multi-Page Site Structure
```
my-site/
  index.html
  about.html
  contact.html
  styles/
    style.css
  images/
    logo.png
  files/
    resume.pdf
```

---

## ODE Competencies Covered

**6.2.1 — Understand Absolute and Relative Links**
- Recognizing when to use absolute URLs vs. relative file paths
- Creating functional links between pages on your site and external websites

**6.2.2 — Create Internal Page Anchors and Fragment Links**
- Using `id` attributes to mark sections
- Linking to sections within the same page or to sections on other pages using `#`

**6.2.3 — Create Email Links and Download Links**
- Building `mailto:` links for contact forms
- Using the `download` attribute for files

**6.5.2 — Design Site Structure and Navigation**
- Planning multi-page websites with consistent navigation
- Organizing files into folder structures
- Creating intuitive navigation menus

---

## Common Mistakes to Avoid

1. **Forgetting the `href` attribute**
   - Wrong: `<a>Click here</a>`
   - Right: `<a href="page.html">Click here</a>`

2. **Using absolute paths for internal links**
   - Wrong: `<a href="https://mysite.com/about.html">About</a>`
   - Right: `<a href="about.html">About</a>`

3. **Incorrect relative paths**
   - Wrong: `<a href="about.html">` (when about.html is in a subfolder)
   - Right: `<a href="pages/about.html">About</a>`

4. **Forgetting `#` in fragment identifiers**
   - Wrong: `<a href="about">Jump</a>`
   - Right: `<a href="#about">Jump</a>`

5. **Using non-descriptive link text**
   - Wrong: `<a href="about.html">Click here</a>`
   - Right: `<a href="about.html">About Our Team</a>`

6. **Not using `target="_blank"` for external links**
   - Users may get confused if external link replaces your site

7. **Duplicate `id` attributes on the same page**
   - Each `id` must be unique; browsers only navigate to the first match

8. **Email links without proper encoding**
   - Spaces in emails should use `%20` instead of literal spaces

9. **Missing protocol in absolute links**
   - Wrong: `<a href="google.com">`
   - Right: `<a href="https://google.com">`

10. **Over-using `target="_blank"`**
    - Only use for external links; internal navigation should stay in same tab

---

## Study Tips

- **Test all links** as you build; click them to verify they work
- **Use relative paths** for your own site; use absolute for external websites
- **Create an id on every major section** so users can link directly to them
- **Keep navigation consistent** by copying the nav code to every page
- **Check file names carefully** — `about.html` and `About.html` are different on some servers
- **Validate paths** by looking at your folder structure; ensure paths match
- **Write descriptive link text** that tells users where they're going
- **Test in multiple browsers** to verify links work everywhere

---

## Practice Questions

1. What is the difference between an absolute link and a relative link?
2. When should you use `target="_blank"`?
3. How do you create a link to a specific section on the same page?
4. What does the `id` attribute do?
5. Write a link to "contact@example.com" using `mailto:`
6. How would you create a download link for a PDF file?
7. What is a fragment identifier?
8. Why is navigation consistency important across a website?
9. What are the three most common attributes on an `<a>` tag?
10. How would you link to a page in a different folder?

---

## Quick ID Reference

```html
<!-- ✓ Good ID names -->
id="contact-section"
id="mainNav"
id="testimonials"

<!-- ✗ Avoid -->
id="1section"              (can't start with number)
id="contact section"       (spaces not allowed)
id="Contact Section"       (can cause linking issues)
```

---
