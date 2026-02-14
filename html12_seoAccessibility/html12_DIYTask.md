# HTML 12: DIY Task — SEO & Accessibility Audit & Improvement

## Overview

In this task, you'll take **one of your own previous projects** from any earlier lesson (HTML 1-11) and perform a complete SEO and accessibility audit. Then, you'll fix the issues you find.

**Estimated time:** 60-90 minutes

---

## Part 1: Select Your Project

Choose ONE of your previous projects that:
- Has multiple pages or substantial content
- Includes images
- Has forms or interactive elements (bonus)
- Is a site you're proud of

Examples:
- Your personal portfolio (HTML 5)
- A business website (HTML 6)
- A blog or news site (HTML 7)
- An e-commerce product page (HTML 8-9)
- A landing page (HTML 10)

**Note:** Don't pick a tiny 1-page project. You need enough content to audit.

---

## Part 2: SEO Audit Checklist

Go through each item below and check YES or NO. If NO, it's a problem to fix.

### Title & Meta Tags
- [ ] Title tag exists and is under 60 characters
- [ ] Title tag includes the main keyword or topic
- [ ] Title tag is compelling (not generic like "Home" or "Page 1")
- [ ] Meta description tag exists
- [ ] Meta description is 150-160 characters
- [ ] Meta description is compelling and describes the content
- [ ] Meta description includes call-to-action (optional but good)

### Images
- [ ] All images have alt text
- [ ] Alt text is descriptive (not just "image" or "picture")
- [ ] Alt text describes the image content clearly
- [ ] Alt text is concise (100-125 characters max)
- [ ] No decorative images (like spacers or borders) - those can have empty alt=""

### Heading Hierarchy
- [ ] Page has exactly ONE `<h1>` tag
- [ ] H2 tags exist and describe main sections
- [ ] H3 tags exist (if applicable) and describe subsections
- [ ] Heading hierarchy is logical (no skipping: h1 → h3 is bad)
- [ ] Headings match the visual importance of content

### HTML Structure & Semantics
- [ ] Page uses `<header>` tag
- [ ] Page uses `<nav>` tag for navigation
- [ ] Page uses `<main>` tag for primary content
- [ ] Page uses `<article>` or `<section>` tags
- [ ] Page uses `<footer>` tag
- [ ] Avoid excessive `<div>` tags (prefer semantic tags)

### URL & Content
- [ ] Page URL is descriptive (not /page1 or /index123)
- [ ] Content is original and unique
- [ ] Content is substantial (200+ words for pages, 300+ for articles)
- [ ] Keywords appear naturally in: title, h1, first paragraph, headings
- [ ] Content answers the user's likely search query

### Technical SEO
- [ ] Page has valid HTML5 (no syntax errors)
- [ ] All links have proper `<a>` tags (not divs with onclick)
- [ ] All links have descriptive text (not "click here")
- [ ] Images are optimized (reasonable file size, not 5MB+)

---

## Part 3: Accessibility Audit Checklist

Go through each item below and check YES or NO. If NO, it's a problem to fix.

### Color & Contrast
- [ ] Text color and background color have good contrast
- [ ] Dark text on light background OR light text on dark background
- [ ] No light gray text on white background
- [ ] No colored text that relies only on color to convey meaning

**Test:** Use WebAIM Contrast Checker (free online) to verify 4.5:1 ratio

### Images & Visual Elements
- [ ] All images have meaningful alt text
- [ ] Decorative images have empty alt=""
- [ ] Icons have `aria-label` explaining their purpose
- [ ] Visual information isn't conveyed by color alone

### Forms & Inputs
- [ ] All text inputs have connected `<label>` tags
- [ ] Labels use `for` attribute matching input `id`
- [ ] Form labels are clear and descriptive
- [ ] Required fields are marked (visually and with `required` attribute)
- [ ] Error messages are clear and specific

### Interactive Elements
- [ ] All buttons are `<button>` or `<input type="button">` (not divs)
- [ ] All links are `<a>` tags (not divs with onclick)
- [ ] Buttons have clear, descriptive text
- [ ] Buttons/links announce their purpose to screen readers

### Keyboard Navigation
- [ ] Page is fully navigable using keyboard only (Tab, Shift+Tab, Enter)
- [ ] Tab order follows logical flow (left-to-right, top-to-bottom)
- [ ] All interactive elements are reachable via keyboard
- [ ] Focus indicator is visible (outline, border, or color change)
- [ ] Focus indicator is not hidden by CSS

### Heading Structure (Same as SEO!)
- [ ] Page has exactly ONE `<h1>`
- [ ] H2, H3 headings follow logical hierarchy
- [ ] No skipped heading levels (h1 → h2 → h3, never h1 → h3)

### Semantic HTML (Same as SEO!)
- [ ] Proper use of `<button>`, `<a>`, `<header>`, `<nav>`, `<main>`, etc.
- [ ] Avoid using `<div>` or `<span>` for interactive elements
- [ ] Form uses `<form>`, `<label>`, `<input>`, etc.
- [ ] Lists use `<ul>`, `<ol>`, `<li>` tags

### ARIA & Accessibility Attributes
- [ ] Icon buttons have `aria-label` (e.g., close, menu, search)
- [ ] Complex widgets have appropriate `role` attributes
- [ ] Form sections have `<fieldset>` and `<legend>` if grouped
- [ ] Skip navigation link exists (optional but recommended)

### Readability
- [ ] Font size is readable (16px minimum for body text)
- [ ] Line spacing is comfortable (1.5 or better)
- [ ] Line length is reasonable (not too wide)
- [ ] Content is organized with clear headings

---

## Part 4: Document Your Findings

Create a file called **`AUDIT_REPORT.md`** in your project folder with this format:

```markdown
# SEO & Accessibility Audit Report

## Project Name
[Your project name]

## Audit Date
[Today's date]

## SEO Issues Found (with fix required)

### Issue 1: Missing Title Tag
- Location: index.html
- Problem: Title tag is empty or too generic
- Fix: Change to "Clear, descriptive title under 60 chars"
- Status: [Not Started / In Progress / Fixed]

### Issue 2: Images Without Alt Text
- Location: about.html
- Problem: <img src="team.jpg"> has no alt text
- Fix: Add alt="Team members in office"
- Status: [Not Started / In Progress / Fixed]

[Continue for all SEO issues...]

## Accessibility Issues Found

### Issue 1: Poor Color Contrast
- Location: contact.html
- Problem: Light gray text (#999) on white background
- Fix: Change text color to #333 or darker
- Current contrast ratio: 2.3:1
- Target contrast ratio: 4.5:1
- Status: [Not Started / In Progress / Fixed]

### Issue 2: Form Labels Not Connected
- Location: contact.html (contact form)
- Problem: <input type="text"> has no connected <label>
- Fix: Add <label for="name">Name:</label> and id="name" to input
- Status: [Not Started / In Progress / Fixed]

[Continue for all accessibility issues...]

## Summary

### SEO Score
- Total issues found: [X]
- Issues fixed: [X]
- Remaining: [X]

### Accessibility Score
- Total issues found: [X]
- Issues fixed: [X]
- Remaining: [X]

## Testing Done
- [x] WAVE accessibility checker
- [x] Keyboard-only navigation test
- [x] Color contrast test
- [x] Google Lighthouse audit
- [ ] Screen reader test (optional)

## Notes
[Any additional observations or learnings]
```

---

## Part 5: Fix the Issues

### Priority 1 (Fix First - Most Important)
1. Add/fix title tags (every page)
2. Add/fix meta descriptions (every page)
3. Add alt text to all images
4. Fix color contrast issues
5. Connect form labels to inputs

### Priority 2 (Fix Next - Important)
6. Fix heading hierarchy
7. Add semantic HTML tags
8. Make buttons real `<button>` tags
9. Make links real `<a>` tags
10. Add focus indicators to interactive elements

### Priority 3 (Cleanup - Nice to Have)
11. Add aria-labels to icon buttons
12. Improve form usability
13. Optimize images
14. Add/improve content

---

## Part 6: Document Your Fixes

In your **`AUDIT_REPORT.md`**, update the Status column as you fix each issue:

```markdown
- Status: Fixed ✓
```

Show examples of what you changed:

```markdown
## Example Fixes

### Title Tag Fix
**Before:**
```html
<title></title>
```

**After:**
```html
<title>John's Web Development Portfolio | Designer & Developer</title>
```

### Alt Text Fix
**Before:**
```html
<img src="project1.jpg">
```

**After:**
```html
<img src="project1.jpg" alt="Responsive e-commerce website design with product grid">
```

[Include more examples...]
```

---

## Testing Your Fixes

### Keyboard Navigation Test
1. Open your project in a browser
2. Close your trackpad/mouse
3. Use ONLY:
   - **Tab** = next element
   - **Shift+Tab** = previous element
   - **Enter** = activate button/link
   - **Arrow keys** = navigate within components
4. Can you reach every clickable element? YES / NO
5. Can you see where you are (focus)? YES / NO

### Color Contrast Test
1. Go to https://webaim.org/resources/contrastchecker
2. Test each text color + background color pair
3. Record contrast ratios in your audit report
4. Fix any below 4.5:1

### Screen Reader Test (Optional)
1. Download NVDA (Windows, free): https://www.nvaccess.org
2. Or use built-in: VoiceOver (Mac), Narrator (Windows)
3. Enable screen reader and navigate your site
4. Do headings, links, form labels make sense when read aloud? YES / NO

---

## Submission Requirements

When you're done, submit:

1. **Your fixed project files** (HTML, CSS, any assets)
2. **`AUDIT_REPORT.md`** with:
   - All issues found
   - How each was fixed
   - Before/after code examples
   - Test results
3. **Optional: Screenshot of contrast checker** showing improved ratios

---

## Grading Rubric (100 points)

| Criterion | Points | Evidence |
|-----------|--------|----------|
| **SEO Audit Completeness** | 20 | Found and documented 10+ SEO issues |
| **Accessibility Audit Completeness** | 20 | Found and documented 10+ accessibility issues |
| **SEO Fixes** | 20 | Fixed 8+ priority SEO issues correctly |
| **Accessibility Fixes** | 20 | Fixed 8+ priority accessibility issues correctly |
| **Documentation Quality** | 10 | Clear audit report with before/after examples |
| **Testing & Verification** | 10 | Evidence of keyboard navigation and contrast testing |

---

## Example: What a Good Fix Looks Like

### Bad (Before)
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <div id="header">
        <div>My Business</div>
    </div>
    <div id="nav">
        <div onclick="goHome()">Home</div>
        <div onclick="goAbout()">About</div>
    </div>
    <div id="main">
        <div id="hero">
            <img src="banner.jpg">
            <h1>Welcome</h1>
        </div>
        <p>We sell things...</p>
        <img src="product.jpg">
        <h1>Product 1</h1>
    </div>
</body>
</html>
```

**Issues:**
- Empty title tag
- No meta description
- Images have no alt text
- Non-semantic structure (divs instead of semantic tags)
- Multiple H1 tags
- Navigation uses divs with onclick
- No form labels
- Light gray text: `<p style="color: #ccc;">` on white background

### Good (After)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Quality Products Online | AccuRate Shop</title>
    <meta name="description" content="Shop our selection of quality products with fast shipping. From electronics to home goods, find what you need.">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { color: #333; background: white; }
        button:focus, a:focus, input:focus { outline: 3px solid blue; }
    </style>
</head>
<body>
    <header>
        <h1>AccuRate Shop — Quality Products Online</h1>
    </header>

    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>

    <main>
        <section class="hero">
            <img src="banner.jpg" alt="Selection of quality products including electronics and home goods">
            <h2>Welcome to AccuRate Shop</h2>
            <p>We provide quality products with fast shipping and excellent customer service.</p>
        </section>

        <section>
            <h2>Featured Products</h2>
            <article>
                <img src="product.jpg" alt="Wireless Bluetooth headphones in black">
                <h3>Product 1: Wireless Headphones</h3>
                <p>High-quality audio with noise cancellation...</p>
                <button>Buy Now</button>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 AccuRate Shop. All rights reserved.</p>
    </footer>
</body>
</html>
```

**Fixes:**
- ✓ Descriptive title tag with keyword
- ✓ Meta description with call-to-action
- ✓ All images have alt text
- ✓ Semantic structure (header, nav, main, section, article, footer)
- ✓ One H1 per page, then H2, H3
- ✓ Real `<a>` tags for navigation
- ✓ Real `<button>` for actions
- ✓ Dark text on light background (good contrast)
- ✓ Focus styles visible for keyboard navigation

---

## Tips for Success

1. **Start with Priority 1 issues** — they have the biggest impact
2. **Test as you fix** — use keyboard navigation after each major change
3. **Use tools** — WAVE, Lighthouse, WebAIM Contrast Checker
4. **Document everything** — your audit report is half the assignment
5. **Be thorough** — audit every page, not just the homepage
6. **Ask for help** — if you find an issue you don't know how to fix, ask!

---

## Resources

- **WAVE Accessibility Checker:** https://wave.webaim.org
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker
- **Google Lighthouse:** Built into Chrome DevTools (F12)
- **NVDA Screen Reader (free):** https://www.nvaccess.org
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref
- **Moz SEO Guide:** https://moz.com/beginners-guide-to-seo
