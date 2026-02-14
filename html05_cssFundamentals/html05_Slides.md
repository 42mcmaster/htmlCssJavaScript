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

**font-size** — Size in px (pixels)
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

<!-- _header: "Practice & Project" -->

# What You'll Build

Restyle your **"About Me" page** from html01 using CSS:

1. Start with HTML structure from html01
2. Create a separate `styles.css` file
3. Link the stylesheet in your HTML
4. Add CSS rules for:
   - Colors (text, backgrounds)
   - Fonts (family, size, weight)
   - Text formatting (alignment, spacing)
   - Use at least 2 classes and 1 ID selector

**Goal:** Same HTML, totally different look through CSS!

---

<!-- _header: "Key Takeaways" -->

# Summary

- **Three CSS methods:** inline, internal, external (external is best)
- **Three selectors:** element (`p`), class (`.highlight`), ID (`#main`)
- **CSS rule:** selector + declarations (property: value;)
- **Colors:** named, hex (#), or RGB
- **Fonts:** family, size, weight, and Google Fonts
- **Text:** align, line-height, decoration, letter-spacing
- **Cascade & Specificity:** last rule and selector strength matter

Next: Build your styled About Me page!
