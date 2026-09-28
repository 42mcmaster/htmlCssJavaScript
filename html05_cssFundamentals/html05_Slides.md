---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 05: CSS Fundamentals

## Web Development
### Medina County Career Center

---

<!-- _header: "05a — CSS Methods & Selectors" -->

# Three CSS Methods

1. **Inline Styles** — CSS in HTML tag attributes
2. **Internal Stylesheet** — CSS in `<style>` tag in `<head>`
3. **External Stylesheet** — Separate `.css` file linked with `<link>`

```html
<!-- Inline -->
<p style="color: blue;">Styled text</p>

<!-- Internal -->
<style>
  p { color: blue; }
</style>

<!-- External -->
<link rel="stylesheet" href="styles.css">
```

Best practice: **Use external stylesheets** for cleaner, reusable code.

---

<!-- _header: "05a — CSS Methods & Selectors" -->

# Three Basic Selectors

**Element Selector** — Targets all tags of a type
```css
p { color: red; }
h1 { font-size: 32px; }
```

**Class Selector** — Targets elements with a class (use `.`)
```css
.highlight { background-color: yellow; }
```

**ID Selector** — Targets one unique element (use `#`)
```css
#header { margin: 20px; }
```

```html
<p class="highlight">This text is yellow</p>
<div id="header">Unique element</div>
```

---

<!-- _header: "05a — CSS Methods & Selectors" -->

# CSS Rule Structure

A **CSS rule** has two parts: **selector** and **declaration block**

```css
p {
  color: blue;
  font-size: 18px;
}
```

- `p` = **selector** (what to style)
- `{ ... }` = **declaration block** (how to style)
- `color: blue;` = one **declaration** (property + value)
- `color` = **property** (what aspect)
- `blue` = **value** (the setting)

Every declaration ends with a **semicolon (;)**

---

<!-- _header: "05b — Colors, Fonts & Text" -->

# Colors: Three Methods

**Named Colors** — English words
```css
color: red;
color: navy;
```

**Hex Colors** — # followed by 6 characters (0-9, A-F)
```css
color: #FF0000;  /* Red */
color: #0000FF;  /* Blue */
```

**RGB Colors** — Red, Green, Blue values (0-255)
```css
color: rgb(255, 0, 0);   /* Red */
color: rgb(0, 0, 255);   /* Blue */
```

Hex and RGB let you make custom colors. Named colors are simple for beginners.

---

<!-- _header: "05b — Colors, Fonts & Text" -->

# Font Properties

**font-family** — Typeface to use
```css
p { font-family: Arial, sans-serif; }
```

**font-size** — Size in px, rem, or em (more in 05c)
```css
h1 { font-size: 32px; }
p { font-size: 16px; }
```

**font-weight** — Boldness (normal, bold, 400-900)
```css
strong { font-weight: bold; }
p { font-weight: 700; }
```

**Google Fonts** — Free professional fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```
```css
body { font-family: 'Roboto', sans-serif; }
```

---

<!-- _header: "05b — Colors, Fonts & Text" -->

# Text Properties

**text-align** — Alignment (left, center, right, justify)
```css
h1 { text-align: center; }
p { text-align: left; }
```

**line-height** — Space between lines (unitless or px)
```css
p { line-height: 1.6; }
```

**text-decoration** — Underline, overline, line-through, none
```css
a { text-decoration: none; }  /* Remove link underline */
h2 { text-decoration: underline; }
```

**letter-spacing** — Space between characters
```css
h1 { letter-spacing: 2px; }
```

---

<!-- _header: "05b — Colors, Fonts & Text" -->

# Cascade & Specificity (Quick Intro)

**Cascade** — Browser applies styles from top to bottom. Last rule wins.

**Specificity** — Some selectors are "stronger" than others:
- Element selector: weak
- Class selector: medium
- ID selector: strong
- Inline style: strongest

```css
p { color: blue; }          /* Element selector */
.highlight { color: yellow; }  /* Class selector (wins!) */
#main { color: red; }       /* ID selector (wins!) */
```

Use external stylesheets and classes for maintainable code.

---

<!-- _header: "05c — CSS Units" -->

# CSS Units: px, rem, em

**Default browser font size = 16px**

| Unit | Based on | Example |
|------|----------|---------|
| **px** | Nothing (fixed) | `border: 1px solid;` |
| **rem** | The `<html>` font size | `1.5rem` = 24px |
| **em** | The parent's font size | `1.5em` in a 20px parent = 30px |

**px to rem:** divide by 16. &nbsp; 24px ÷ 16 = `1.5rem`

rem and em grow when a user makes their browser text bigger. px does not.

---

<!-- _header: "05c — CSS Units" -->

# em Stacks, rem Doesn't

Three boxes inside each other, each set to `1.5`:

| Level | `1.5em` | `1.5rem` |
|-------|---------|----------|
| 1 | 24px | 24px |
| 2 | 36px | 24px |
| 3 | 54px | 24px |

**Rule of thumb:** rem for font sizes and spacing, em for button padding, px for borders.

---

<!-- _header: "Practice & Project" -->

# What You'll Build

Style the **website you built in Lessons 03 and 04** with one stylesheet:

1. Make one `styles.css` file in your site folder
2. Link it in the `<head>` of all 4 pages (index, about, contact, gallery)
3. Add CSS rules for:
   - Colors (text, backgrounds) in hex or rgb
   - Fonts (family, size in rem, weight)
   - Text formatting (alignment, line-height, links)
   - Nav links, the table on About, the captions on Gallery
   - Use at least 2 classes and 1 id selector

**Goal:** One CSS file, 4 pages that look like one website!

---

<!-- _header: "Key Takeaways" -->

# Summary

- **Three CSS methods:** inline, internal, external (external is best)
- **Three selectors:** element (`p`), class (`.highlight`), ID (`#main`)
- **CSS rule:** selector + declarations (property: value;)
- **Colors:** named, hex (#), or RGB
- **Fonts:** family, size, weight, and Google Fonts
- **Units:** px is fixed, rem uses the root (16px), em uses the parent
- **Text:** align, line-height, decoration, letter-spacing
- **Cascade & Specificity:** last rule and selector strength matter

Next: Style every page of your website with one stylesheet!
