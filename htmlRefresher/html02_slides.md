---
marp: true
theme: default
paginate: true
---

# HTML Lesson 2
## Text Formatting & Semantic Elements

### Web Design
Medina County Career Center

---

## Today's Learning Objectives

By the end of this lesson, you will be able to:

- Use heading tags (h1-h6) appropriately
- Apply text formatting tags (bold, italic, emphasis)
- Understand semantic HTML elements
- Create line breaks and horizontal rules
- Use special characters in HTML
- Structure content with semantic tags

---

## Why Text Formatting Matters

**Good text formatting:**
- Makes content easier to read
- Improves accessibility for screen readers
- Helps search engines understand your content
- Creates visual hierarchy on the page

**Remember:** HTML describes *meaning*, not appearance!

---

## Heading Tags: h1 through h6

HTML has six levels of headings:

```html
<h1>Main Page Title - Use Only Once</h1>
<h2>Major Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Minor Heading</h4>
<h5>Smallest Heading</h5>
<h6>Tiny Heading</h6>
```

**Best Practices:**
- Use only ONE `<h1>` per page
- Don't skip levels (don't go from h2 to h5)
- Use headings for structure, not sizing

---

## Live Demo: Heading Hierarchy

Let's create a document outline:

```html
<h1>My Restaurant Website</h1>

<h2>About Us</h2>
<p>Our story...</p>

<h2>Menu</h2>

<h3>Appetizers</h3>
<p>Delicious starters...</p>

<h3>Main Courses</h3>
<p>Our signature dishes...</p>
```

---

## Text Formatting: Bold

Two ways to make text bold:

```html
<strong>This text is important!</strong>
<b>This text is bold.</b>
```

**What's the difference?**
- `<strong>` = "this is important" (semantic meaning)
- `<b>` = "make this bold" (just appearance)

**Best Practice:** Use `<strong>` when the text is important!

---

## Text Formatting: Italic

Two ways to make text italic:

```html
<em>This text is emphasized.</em>
<i>This text is italic.</i>
```

**What's the difference?**
- `<em>` = "emphasize this" (semantic meaning)
- `<i>` = "make this italic" (just appearance)

**Best Practice:** Use `<em>` for emphasis!

---

## Other Text Formatting Tags

```html
<!-- Subscript and superscript -->
H<sub>2</sub>O        <!-- Water formula -->
E=mc<sup>2</sup>      <!-- Einstein's equation -->

<!-- Inserted and deleted text -->
<ins>This text was added</ins>
<del>This text was removed</del>

<!-- Marked/highlighted text -->
<mark>This is highlighted</mark>

<!-- Small print -->
<small>© 2025 Company Name</small>
```

---

## Line Breaks and Horizontal Rules

```html
<!-- Line break (empty element) -->
<p>First line<br />Second line<br />Third line</p>

<!-- Horizontal rule (empty element) -->
<p>Section 1 content...</p>
<hr />
<p>Section 2 content...</p>
```

**When to use:**
- `<br />` - Within addresses, poems, or specific line breaks
- `<hr />` - To separate major sections or topics

**Warning:** Don't use `<br />` to create space - use CSS instead!

---

## Special Characters (HTML Entities)

Some characters need special codes:

```html
<!-- Common entities -->
&lt;      <!-- < (less than) -->
&gt;      <!-- > (greater than) -->
&amp;     <!-- & (ampersand) -->
&quot;    <!-- " (quote) -->
&copy;    <!-- © (copyright) -->
&trade;   <!-- ™ (trademark) -->
&nbsp;    <!-- non-breaking space -->
```

---

## Why Use HTML Entities?

**Problem:**
```html
<p>Use the <strong> tag for important text</p>
```
This breaks! The browser thinks you're opening a tag.

**Solution:**
```html
<p>Use the &lt;strong&gt; tag for important text</p>
```
This displays correctly: "Use the <strong> tag for important text"

---

## Common HTML Entities Reference

| Symbol | Entity | Description |
|--------|--------|-------------|
| < | `&lt;` | Less than |
| > | `&gt;` | Greater than |
| & | `&amp;` | Ampersand |
| © | `&copy;` | Copyright |
| ® | `&reg;` | Registered trademark |
| ™ | `&trade;` | Trademark |
| " | `&quot;` | Quote mark |
|   | `&nbsp;` | Non-breaking space |

---

## Semantic HTML: What Does It Mean?

**Semantic HTML** = HTML that describes the *meaning* of content

**Why it matters:**
- Helps screen readers assist visually impaired users
- Helps search engines understand your page
- Makes code easier to read and maintain
- Better structure for responsive design

---

## Paragraph Tag

```html
<p>This is a paragraph of text. It will automatically 
add space above and below when displayed in the browser.</p>

<p>This is another paragraph. Browsers handle spacing 
automatically between paragraphs.</p>
```

**Remember:** Use `<p>` for actual paragraphs of text, not for spacing!

---

## Blockquote Element

```html
<blockquote>
  "The only way to do great work is to love what you do."
  - Steve Jobs
</blockquote>
```

**Use for:**
- Direct quotes from other sources
- Testimonials
- Featured quotes

**Browsers typically indent blockquotes automatically**

---

## Preformatted Text

```html
<pre>
This text is    displayed
exactly    as    you    type    it.
   Spaces and line breaks
      are preserved!
</pre>
```

**Use for:**
- Code examples
- ASCII art
- Anything where exact spacing matters

**Usually displayed in a monospace font**

---

## Semantic Elements: `<header>`

```html
<header>
  <h1>My Website Name</h1>
  <p>Tagline or brief description</p>
</header>
```

**Use for:**
- Site header with logo/title
- Article header with title/author
- Any introductory content

---

## Semantic Elements: `<nav>`

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
```

**Use for:**
- Main site navigation
- Table of contents
- Any collection of links for navigation

---

## Semantic Elements: `<main>`

```html
<main>
  <h1>Welcome to Our Site</h1>
  <p>This is the main content of the page...</p>
</main>
```

**Rules:**
- Only ONE `<main>` per page
- Contains the primary content
- Should not include repeated content (nav, footer, etc.)

---

## Semantic Elements: `<article>`

```html
<article>
  <h2>Blog Post Title</h2>
  <p>Posted on October 16, 2025</p>
  <p>Content of the blog post goes here...</p>
</article>
```

**Use for:**
- Blog posts
- News articles
- Forum posts
- Comments
- Any self-contained content

---

## Semantic Elements: `<section>`

```html
<section>
  <h2>Our Services</h2>
  <p>We offer the following services...</p>
</section>

<section>
  <h2>Contact Us</h2>
  <p>Get in touch with us...</p>
</section>
```

**Use for:**
- Thematic grouping of content
- Chapters in a document
- Tabbed content

---

## Semantic Elements: `<aside>`

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li>Article 1</li>
    <li>Article 2</li>
  </ul>
</aside>
```

**Use for:**
- Sidebars
- Pull quotes
- Advertising
- Related content
- Content tangentially related to main content

---

## Semantic Elements: `<footer>`

```html
<footer>
  <p>&copy; 2025 Company Name. All rights reserved.</p>
  <p>Contact: info@example.com</p>
</footer>
```

**Use for:**
- Copyright information
- Contact information
- Site navigation links
- Social media links
- Bottom of page content

---

## Complete Semantic Structure Example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>My Blog</title>
</head>
<body>
  <header>
    <h1>My Awesome Blog</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
    </nav>
  </header>
```

---

## Complete Semantic Structure (continued)

```html
  <main>
    <article>
      <h2>My First Post</h2>
      <p>This is my first blog post...</p>
    </article>
    
    <aside>
      <h3>About the Author</h3>
      <p>I'm a student learning web development!</p>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 My Name</p>
  </footer>
</body>
</html>
```

---

## Text Formatting Best Practices

✅ **DO:**
- Use semantic tags (`<strong>`, `<em>`)
- Use headings for structure
- Use `<p>` for paragraphs
- Use HTML entities for special characters

❌ **DON'T:**
- Use `<br />` to create vertical space
- Skip heading levels
- Use formatting tags just for appearance
- Forget to close your tags

---

## Common Mistakes to Avoid

```html
<!-- WRONG: Using br for spacing -->
<p>First paragraph</p>
<br /><br /><br />
<p>Second paragraph</p>

<!-- RIGHT: Use CSS for spacing (later lesson!) -->
<p>First paragraph</p>
<p>Second paragraph</p>

<!-- WRONG: Wrong tag for meaning -->
<b>Warning: This is important!</b>

<!-- RIGHT: Use semantic tag -->
<strong>Warning: This is important!</strong>
```

---

## Accessibility Matters!

**Screen readers use semantic HTML to help users navigate:**

- `<h1>`-`<h6>` create document outline
- `<strong>` announces "important"
- `<em>` announces "emphasis"
- `<nav>` identifies navigation areas
- `<main>` finds main content quickly

**Your HTML choices affect real people's ability to use your site!**

---

## Quick Review: Text Formatting

| Tag | Purpose | Example |
|-----|---------|---------|
| `<strong>` | Important text | `<strong>Required!</strong>` |
| `<em>` | Emphasized text | `<em>Please note</em>` |
| `<mark>` | Highlighted | `<mark>Key term</mark>` |
| `<sub>` | Subscript | `H<sub>2</sub>O` |
| `<sup>` | Superscript | `E=mc<sup>2</sup>` |
| `<del>` | Deleted | `<del>$20</del>` |
| `<ins>` | Inserted | `<ins>$15</ins>` |

---

## Quick Review: Semantic Elements

| Element | Purpose |
|---------|---------|
| `<header>` | Page or section header |
| `<nav>` | Navigation links |
| `<main>` | Main content (one per page) |
| `<article>` | Self-contained content |
| `<section>` | Thematic grouping |
| `<aside>` | Sidebar content |
| `<footer>` | Page or section footer |

---

## Today's Tasks

You'll be creating two HTML files:

1. **Recipe Page** - Using text formatting tags
2. **Blog Post** - Using semantic HTML structure

**Requirements:**
- Proper HTML5 structure
- Semantic elements where appropriate
- Text formatting tags
- HTML entities
- Well-commented code

---

## Questions?

Before we start the tasks, any questions about:
- Heading hierarchy?
- Text formatting tags?
- HTML entities?
- Semantic elements?

---

## Let's Code!

Open VS Code and let's get started on your tasks!

**Remember:**
- Create a new folder for today's work
- Save files as `.html`
- Test in your browser frequently
- Push to GitHub when complete

**Good luck!**
