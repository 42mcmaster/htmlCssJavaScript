# Lesson 02 Study Guide: Semantic HTML & Text Formatting

## Vocabulary & Key Concepts

### Text Formatting
1. **`<strong>`** — Semantic tag for text of strong importance; screen readers emphasize it
2. **`<em>`** — Semantic tag for emphasized text; conveys stress or emphasis to screen readers
3. **`<b>`** — Visual bold tag with no semantic meaning; use `<strong>` instead
4. **`<i>`** — Visual italic tag with no semantic meaning; use `<em>` instead
5. **Semantic Markup** — Using HTML tags that describe the meaning of content, not just how it looks

### Page Structure (Semantic Elements)
6. **`<header>`** — Container for introductory content, logos, site titles, or navigation
7. **`<nav>`** — Semantic container for navigation links and menus
8. **`<main>`** — The primary content area of the page; there should only be one per page
9. **`<section>`** — A generic container for a thematic grouping of content
10. **`<article>`** — Self-contained content like blog posts, news articles, or product reviews
11. **`<aside>`** — Sidebar content tangentially related to main content (links, ads, related items)
12. **`<footer>`** — Footer section containing copyright, contact info, or links

### List Types
13. **`<ol>`** — Ordered list; displays numbered items (1, 2, 3, etc.)
14. **`<ul>`** — Unordered list; displays bulleted items
15. **`<li>`** — List item; individual item within an ordered or unordered list
16. **`<dl>`** — Description list; displays key-value pairs or glossaries
17. **`<dt>`** — Description term; the key or term in a description list
18. **`<dd>`** — Description definition; the value or definition in a description list

### Accessibility & Best Practices
19. **Accessibility (a11y)** — Designing web content so it's usable by everyone, including those with disabilities
20. **Screen Reader** — Software that reads page content aloud; depends on semantic HTML to understand structure
21. **Nested Lists** — Lists contained within list items of another list; used for hierarchical information
22. **HTML5 Semantic Elements** — Modern HTML tags designed to give meaning and structure to web content

---

## Quick Reference Cheat Sheet

### Text Formatting
```html
<!-- Use semantic tags for meaning -->
<strong>Important text</strong>        <!-- Strong importance -->
<em>Emphasized text</em>              <!-- Emphasized/stressed -->

<!-- Avoid these (visual only) -->
<b>Bold</b>  <i>Italic</i>            <!-- NOT semantic -->
```

### Page Structure
```html
<header>
  <h1>Site Title</h1>
</header>

<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content here...</p>
  </article>

  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Site</p>
</footer>
```

### Lists
```html
<!-- Ordered List (numbered) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Unordered List (bulleted) -->
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>

<!-- Nested Lists -->
<ol>
  <li>Main item
    <ul>
      <li>Sub-item</li>
      <li>Sub-item</li>
    </ul>
  </li>
  <li>Main item 2</li>
</ol>

<!-- Description List (glossary) -->
<dl>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
  <dt>Another Term</dt>
  <dd>Definition of another term</dd>
</dl>
```

---

## ODE Competencies Covered

**6.1.2 — Plan with Web Design Standards**
- Understanding semantic HTML structure improves planning and accessibility compliance

**6.1.3 — Format Content with HTML Tags**
- Using `<strong>`, `<em>`, and semantic page elements to properly format and structure content

**6.1.4 — Proofread & Validate Code**
- Using semantic tags correctly ensures valid HTML and proper document structure

**6.1.5 — Create Lists Using HTML**
- Creating ordered lists (`<ol>`), unordered lists (`<ul>`), nested lists, and description lists (`<dl>`)

---

## Common Mistakes to Avoid

1. **Using `<b>` and `<i>` instead of `<strong>` and `<em>`**
   - These are not semantic; screen readers won't understand the intent

2. **Forgetting `<li>` tags**
   - Every item in a list must be wrapped in `<li>`

3. **Putting `<main>` inside `<header>` or `<footer>`**
   - `<main>` is a top-level structural element, not nested inside others

4. **Using nested lists for styling**
   - Only nest lists when the content is truly hierarchical

5. **Mixing `<ol>` and `<ul>` items without proper nesting**
   - If you want mixed lists, nest them correctly

---

## Study Tips

- **Practice building pages** with semantic structure; type out the code yourself
- **Use a screen reader** to hear how semantic vs. non-semantic HTML sounds
- **Validate your HTML** at validator.w3.org to catch mistakes
- **Look at real websites** and inspect their HTML to see how professionals use semantic tags
- **Memorize the main semantic tags** — header, nav, main, article, aside, footer
- **Know when to use each list type** — ordered for steps, unordered for items, description lists for glossaries

---

## Practice Questions

1. What is the difference between `<strong>` and `<b>`?
2. When would you use `<em>` instead of `<i>`?
3. What is the purpose of the `<nav>` element?
4. Should there be one `<main>` element or multiple per page?
5. What list type would you use for a shopping list? Why?
6. When would you nest one list inside another?
7. How does semantic HTML help users with screen readers?
8. What would you put in a `<footer>` element?
9. What is the difference between `<section>` and `<article>`?
10. Can you have a `<dl>` with multiple `<dt>` elements but only one `<dd>`?
