# HTML 12: SEO & Accessibility Walkthrough

## Overview
In this walkthrough, we'll review a sample website, identify SEO and accessibility problems, and fix them. You'll learn to spot common mistakes and understand how to improve both search engine visibility and usability for all visitors.

---

## Part 1: The Bad Example

Below is an intentionally flawed website. Read through the code and HTML, then answer the questions.

**File: `html12a_Task.html`**

Notice these problems:
- Missing `<title>` tag (or too generic)
- No meta description
- Images without alt text
- Poor heading hierarchy
- No semantic HTML structure (lots of divs)
- Vague or no keywords

---

## Part 1A: SEO Audit — Find the Problems

### Step 1: Check the Title Tag
Look at the `<head>` section. What is the title tag?

Current: `_____________`

Is it descriptive? ___

Does it include a keyword? ___

### Step 2: Check the Meta Description
Is there a meta description tag?

Current: `_____________`

Does it describe the page's content? ___

Is it compelling? ___

### Step 3: Check Images
List all images and their alt text:

| Image | Current Alt Text | Should Be |
|-------|------------------|-----------|
| ___ | ___ | ___ |
| ___ | ___ | ___ |

### Step 4: Check Heading Hierarchy
List all headings on the page:

- H1: `_____________`
- H2: `_____________`
- H3: `_____________`

Are they in logical order? ___

Is there more than one H1? ___

### Step 5: Check HTML Structure
Does the page use semantic tags? Circle all found:

`<header>` `<nav>` `<main>` `<article>` `<section>` `<footer>`

Or is it mostly divs? ___

### Step 6: Check URL Structure
What is the page URL?

`_____________`

Is it descriptive? ___

---

## Part 1B: Accessibility Audit — Find the Problems

### Step 1: Color Contrast
Look at the text colors. Are dark text and light backgrounds used?

Text color: `_____________`

Background color: `_____________`

Do they have good contrast? ___

*(Tip: Test with WebAIM Contrast Checker)*

### Step 2: Alt Text (Same as SEO!)
From Part 1A, do all images have meaningful alt text?

Missing alt text on: `_____________`

### Step 3: Form Labels
Look for form inputs. Are they connected to labels?

Form label example: `_____________`

Is there a `for` attribute? ___

### Step 4: Keyboard Navigation
Try to navigate the page using only:
- **Tab** = move to next element
- **Shift+Tab** = move to previous element
- **Enter** = click buttons/links

Can you reach all buttons and links? ___

Can you see where you are (focus indicator)? ___

### Step 5: Semantic HTML
Is the page using semantic tags (`<button>`, `<a>`, `<header>`, etc.) or just divs and generic elements?

Semantic tags found: `_____________`

Generic divs with onclick: `_____________`

### Step 6: Button vs Div
Look for clickable elements. Are they proper `<button>` or `<a>` tags, or are they divs with onclick?

Buttons: `_____________`

Links: `_____________`

Divs with onclick: `_____________`

---

## Part 2: The Good Example (Solutions)

Now let's look at the fixed version: **`html12a_Task_Solutions.html`**

### SEO Improvements Made

**Title Tag:**
```html
<title>Premium Italian Restaurant | Giuseppe's Trattoria in Medina</title>
```
- Descriptive
- Includes keyword ("Italian Restaurant", "Medina")
- Under 60 characters
- Compelling

**Meta Description:**
```html
<meta name="description"
  content="Authentic Italian cuisine since 1995. Fresh pasta,
  wood-fired oven, award-winning recipes. Visit Giuseppe's
  in downtown Medina today.">
```
- 160 characters
- Describes page clearly
- Includes keyword naturally
- Call-to-action ("Visit today")

**Images with Alt Text:**
```html
<img src="pasta.jpg" alt="creamy fettuccine alfredo with parmesan">
<img src="chef.jpg" alt="Chef Giuseppe preparing handmade pasta">
```
- Descriptive
- Specific, not "image" or "picture"
- Helps search engines understand images

**Heading Hierarchy:**
```html
<h1>Giuseppe's Trattoria — Italian Restaurant</h1>
  <h2>Our Story</h2>
    <p>Founded in 1995...</p>
  <h2>Menu</h2>
    <h3>Pasta Dishes</h3>
    <h3>Main Courses</h3>
```
- One H1 (main topic)
- H2s for main sections
- H3s for subsections
- Logical structure

**Semantic HTML:**
```html
<header>
  <h1>Giuseppe's Trattoria</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/menu">Menu</a>
    <a href="/contact">Contact</a>
  </nav>
</header>
<main>
  <article>
    <h2>Our Story</h2>
    <p>...</p>
  </article>
</main>
<footer>
  <p>&copy; 2024 Giuseppe's Trattoria. All rights reserved.</p>
</footer>
```
- Header, nav, main, article, footer
- Tells search engines what content is
- Better for accessibility too

---

### Accessibility Improvements Made

**Color Contrast:**
```css
/* Good contrast: dark text on light background */
body {
  color: #333;        /* Dark gray text */
  background: #fff;   /* White background */
}
/* Contrast ratio: 12.6:1 (exceeds WCAG AA of 4.5:1) */
```

**Form Labels Connected:**
```html
<label for="email">Email:</label>
<input id="email" type="email" required>

<label for="message">Message:</label>
<textarea id="message" required></textarea>
```
- Label `for` attribute matches input `id`
- Screen readers announce label + input together
- Users know what field is for

**Keyboard Navigation:**
- Tab order follows logical flow (left to right, top to bottom)
- All links and buttons are reachable
- Focus indicator is visible:
```css
button:focus,
a:focus,
input:focus {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}
```

**Semantic HTML (Same as SEO!):**
```html
<!-- Use real buttons for actions -->
<button onclick="submitForm()">Submit Order</button>

<!-- Use real links for navigation -->
<a href="/menu">View Our Menu</a>

<!-- Use proper form elements -->
<select id="cuisine">
  <option>Italian</option>
  <option>Pizza</option>
</select>
```

**ARIA Labels for Icons:**
```html
<!-- Icon button: aria-label explains what it does -->
<button aria-label="Close navigation menu">
  <span aria-hidden="true">&times;</span>
</button>

<!-- Icon with description -->
<img src="star.svg" alt="5-star rating" aria-label="Rated 5 stars">
```

---

## Part 3: Your Turn — Audit Checklist

Use this checklist to audit any website:

### SEO Checklist
- [ ] Title tag exists and is under 60 characters
- [ ] Title tag includes main keyword
- [ ] Title tag is compelling (not just "Home")
- [ ] Meta description exists
- [ ] Meta description is 150-160 characters
- [ ] Meta description is compelling
- [ ] All images have alt text
- [ ] Alt text is descriptive (not "image")
- [ ] One H1 on page
- [ ] H2, H3 headings follow logical hierarchy
- [ ] No heading levels skipped (h1 → h3)
- [ ] Page uses semantic HTML (header, nav, main, article, footer)
- [ ] URL is descriptive and includes keyword
- [ ] Content is original and unique
- [ ] Content is substantial (300+ words for blog posts)

### Accessibility Checklist
- [ ] All images have meaningful alt text
- [ ] Text and background have 4.5:1 color contrast
- [ ] All form inputs have connected labels
- [ ] Buttons are `<button>` elements (not divs)
- [ ] Links are `<a>` elements (not divs)
- [ ] Page is navigable via keyboard (Tab, Shift+Tab, Enter)
- [ ] Focus indicator is visible (outline or border)
- [ ] Icons have aria-labels explaining their purpose
- [ ] Page uses semantic HTML (header, nav, main, article, footer)
- [ ] Link text is descriptive (not "click here")
- [ ] No text is hidden with white color or tiny font size

---

## Try It Yourself

1. Open **`html12a_Task.html`** in your browser
2. Follow the audit steps in Part 1A (SEO) and Part 1B (Accessibility)
3. Write down all the problems you find
4. Open **`html12a_Task_Solutions.html`** and compare
5. Understand how each fix works
6. Complete the Task (instructions in the next section)

---

## Summary: SEO + Accessibility Best Practices

| Best Practice | Helps Search Engines | Helps Users |
|---------------|---------------------|------------|
| Descriptive title tag | Rank page for keyword | Know what page is about |
| Meta description | Display in results | Decide to click link |
| Alt text | Understand images | Know what images contain (or if missing) |
| Heading hierarchy | Understand structure | Navigate page structure quickly |
| Semantic HTML | Parse content correctly | Navigate logically with screen readers |
| Good color contrast | N/A | Read text easily (color-blind, low vision users) |
| Connected form labels | N/A | Understand form fields (with screen reader) |
| Keyboard navigation | N/A | Use site without mouse |
| Visible focus indicator | N/A | Know where you are |
| Real buttons/links | Understand navigation | Know what's clickable, work with keyboard |

**Remember:** Accessibility isn't an extra feature. It's the foundation of good web development. And it helps SEO too!
