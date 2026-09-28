---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 12: SEO & Accessibility

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 12a — Search Engine Optimization" -->

# What is SEO?

SEO = **Search Engine Optimization**

Making your website easier for search engines (Google, Bing) to find, understand, and rank.

**Why it matters:**
- More visitors = more business/impact
- FREE traffic (if you rank well)
- Users can actually find your site

**What developers control:**
- Title tags, meta descriptions
- Semantic HTML (proper heading hierarchy)
- Alt text for images
- URL structure
- Page speed

---

# Title Tags & Meta Descriptions

**Title Tag** (appears in browser tab & search results):
```html
<title>Best Pizza in Ohio | Joe's Pizzeria</title>
```
- Keep under 60 characters
- Include keyword early
- Make it clickable

**Meta Description** (snippet under title in search results):
```html
<meta name="description"
  content="Award-winning pizza since 1985. Fresh ingredients,
  wood-fired oven. Order online or visit us in Medina.">
```
- 150-160 characters
- Write for humans, not robots
- Include call-to-action

---

# Semantic HTML for SEO

Search engines rely on **semantic structure** to understand content.

**Good semantics:**
```html
<header><h1>Main Title</h1></header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Content...</p>
  </article>
</main>
<footer>Copyright...</footer>
```

**Bad (div soup):**
```html
<div id="header"><div id="title">Main Title</div></div>
<div id="main">
  <div><h2>Article Title</h2><p>Content...</p></div>
</div>
```

Search engines = "What is this page actually about?"

---

# Heading Hierarchy & Alt Text

**Heading Hierarchy** (tell Google your content structure):
- ONE `<h1>` per page (main topic)
- `<h2>` for sections, `<h3>` for subsections
- Don't skip levels (h1 → h3 is bad)

```html
<h1>Web Design Course</h1>
<h2>Unit 1: HTML</h2>
<h3>Semantic Tags</h3>
<h2>Unit 2: CSS</h2>
```

**Alt Text** (describe images for accessibility AND SEO):
```html
<!-- Good: descriptive -->
<img src="pizza.jpg" alt="wood-fired pizza with fresh basil">

<!-- Bad: generic or missing -->
<img src="pizza.jpg" alt="image">
<img src="pizza.jpg"> <!-- NO! -->
```

---

# URL Structure & Keywords

**Clean URLs help SEO:**
```html
<!-- Good: descriptive -->
/blog/how-to-make-sourdough-bread
/products/blue-ceramic-mug

<!-- Bad: vague or messy -->
/blog/post123
/p?id=456&sort=price&filter=color
```

**Keywords:**
- What would someone Google to find YOUR page?
- Use naturally in: title, headings, first paragraph, alt text
- DON'T stuff keywords (Google penalizes spam)

```html
<!-- Natural use -->
<h1>How to Make Sourdough Bread at Home</h1>
<p>Making sourdough bread requires patience and the right starter...</p>

<!-- Bad: keyword stuffing -->
<h1>Sourdough Bread Sourdough Recipe Sourdough How To</h1>
```

---

<!-- _header: "Sub-Lesson 12b — Accessibility" -->

# What is Accessibility?

**Accessibility** = Making websites usable for EVERYONE, including people with:
- Vision impairments (blind, low vision, color blind)
- Hearing impairments (deaf, hard of hearing)
- Motor impairments (can't use mouse, need keyboard only)
- Cognitive disabilities

**ADA = Americans with Disabilities Act** (U.S. law)
- Websites must be accessible
- Violation can mean lawsuits + damage to reputation

**WCAG = Web Content Accessibility Guidelines** (international standard)
- WCAG 2.1 Level AA = industry standard
- Four principles: **P**erceptible, **O**perable, **U**nderstandable, **R**obust

---

# Screen Readers & Color Contrast

**Screen Reader** = Software that reads web content aloud
- Users navigate with keyboard (Tab, Enter, Arrow keys)
- Screen reader announces: headings, links, form labels, alt text

**Color Contrast** = Make text readable for color-blind users
- Text must have enough contrast ratio
- WCAG AA standard: 4.5:1 (text on background)

```html
<!-- Bad: light gray text on white (fails contrast) -->
<p style="color: #ccc;">This is hard to read</p>

<!-- Good: dark text on light background -->
<p style="color: #333;">This is easy to read</p>
```

**Test contrast:** WebAIM Contrast Checker (free online tool)

---

# ARIA Labels & Keyboard Navigation

**ARIA** = Accessible Rich Internet Applications
- Extra labels for screen reader users
- Tells assistive tech what an element does

```html
<!-- Good: descriptive aria-label for icon button -->
<button aria-label="Close menu">×</button>

<!-- Good: aria-describedby for longer description -->
<img src="chart.png" alt="Q4 sales chart"
     aria-describedby="chart-description">
<p id="chart-description">Shows a 15% increase...</p>
```

**Keyboard Navigation:**
- Tab through page in logical order
- Every interactive element must be reachable
- Focus indicator must be visible (not hidden!)

```css
button:focus {
  outline: 2px solid #0066cc;
}
```

---

# Semantic HTML for Accessibility

Semantic tags tell assistive tech what content IS:

```html
<!-- Buttons are for actions -->
<button>Click me</button>  <!-- Good -->
<div onclick="...">Click me</div>  <!-- Bad -->

<!-- Links are for navigation -->
<a href="/about">About</a>  <!-- Good -->
<span onclick="...">About</span>  <!-- Bad -->

<!-- Form labels must be connected -->
<label for="email">Email:</label>
<input id="email" type="email">  <!-- Good -->
<input placeholder="Email">  <!-- Bad -->

<!-- Navigation wrapper -->
<nav>
  <a href="/">Home</a>
  <a href="/services">Services</a>
</nav>
```

---

# Accessibility Checklist

Before launching, check:

✓ **Alt text** on all images (meaningful, not "image")
✓ **Heading hierarchy** (one h1, logical flow)
✓ **Color contrast** (4.5:1 for text)
✓ **Keyboard navigation** (Tab through entire page)
✓ **Focus indicators** (see where you are)
✓ **Form labels** (connected to inputs)
✓ **Semantic HTML** (use proper tags, not divs)
✓ **Link text** (says where it goes, not "click here")

**Test with:**
- Keyboard only (disable mouse)
- Screen reader (NVDA, JAWS, VoiceOver)
- Color contrast checker

---

# SEO + Accessibility = Good Web Development

They overlap! Same practices help both:
- Semantic HTML helps search engines AND screen readers
- Alt text helps SEO AND blind users
- Heading hierarchy helps both understand structure
- Mobile-friendly helps users AND search rankings

**Remember:** Accessibility isn't a feature. It's the foundation of good web development.
