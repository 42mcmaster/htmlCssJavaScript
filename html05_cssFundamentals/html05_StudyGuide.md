# CSS Fundamentals Study Guide (html05)

## Vocabulary (22 terms)

1. **CSS** — Cascading Style Sheets; language for styling HTML elements
2. **Selector** — Part of CSS rule that targets which HTML elements to style
3. **Property** — Aspect of an element you want to change (color, size, etc.)
4. **Value** — The setting you assign to a property (blue, 16px, etc.)
5. **Declaration** — A property-value pair (e.g., `color: blue;`)
6. **Declaration Block** — The { } section containing all declarations for a selector
7. **Inline Style** — CSS applied directly in an HTML tag using the `style` attribute
8. **Internal Stylesheet** — CSS written in a `<style>` tag inside the HTML `<head>`
9. **External Stylesheet** — Separate `.css` file linked to HTML with `<link>` tag
10. **Element Selector** — Selector that targets all tags of one type (e.g., `p`, `h1`)
11. **Class Selector** — Selector targeting elements with a specific class (uses `.`)
12. **ID Selector** — Selector targeting one unique element by ID (uses `#`)
13. **Hex Color** — Color code using # and 6 characters (0-9, A-F); e.g., `#FF0000`
14. **RGB** — Color model using Red, Green, Blue values 0-255; e.g., `rgb(255, 0, 0)`
15. **Named Color** — Color specified by English name; e.g., `red`, `blue`, `navy`
16. **font-family** — CSS property specifying the typeface
17. **font-size** — CSS property specifying text size in pixels (px)
18. **font-weight** — CSS property controlling boldness (normal, bold, or 400-900)
19. **line-height** — CSS property controlling vertical space between text lines
20. **text-align** — CSS property controlling horizontal alignment (left, center, right)
21. **text-decoration** — CSS property for underline, overline, line-through, or none
22. **Google Fonts** — Free library of professional fonts linked via `<link>` tag

---

## Cheat Sheet: Quick Reference

### CSS Rule Syntax
```css
selector {
  property: value;
  property: value;
}
```

### Three CSS Methods

| Method | Location | Use Case |
|--------|----------|----------|
| Inline | `style` attribute in tag | Quick one-off styles (avoid) |
| Internal | `<style>` in `<head>` | Small projects, single file |
| External | Separate `.css` file | Best practice, reusable, maintainable |

### Basic Selectors

```css
/* Element Selector */
p { }
h1 { }
div { }

/* Class Selector */
.highlight { }
.warning { }

/* ID Selector */
#header { }
#main { }
```

### Color Syntax

```css
/* Named color */
color: red;
background-color: navy;

/* Hex color */
color: #FF0000;           /* Red */
color: #0000FF;           /* Blue */
background-color: #FFFFFF; /* White */

/* RGB color */
color: rgb(255, 0, 0);       /* Red */
color: rgb(0, 0, 255);       /* Blue */
background-color: rgb(200, 200, 200); /* Gray */
```

### Font Properties

```css
/* Font family */
font-family: Arial, sans-serif;
font-family: 'Roboto', sans-serif;

/* Font size */
font-size: 16px;
font-size: 32px;

/* Font weight */
font-weight: normal;
font-weight: bold;
font-weight: 700;

/* Line height */
line-height: 1.6;
line-height: 20px;
```

### Text Properties

```css
/* Text alignment */
text-align: left;
text-align: center;
text-align: right;

/* Text decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;

/* Letter spacing */
letter-spacing: 2px;
```

### Linking External Stylesheet

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

### Linking Google Fonts

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
```

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

### Cascade & Specificity

**Cascade:** Browser reads CSS top to bottom. Later rules override earlier ones.

**Specificity (weakest to strongest):**
1. Element selector: `p { }`
2. Class selector: `.highlight { }`
3. ID selector: `#main { }`
4. Inline style: `style="color: red;"`

---

## ODE Competencies Covered

### 6.1.7 — Integrate Styles
- Students apply CSS properties (color, font, text) to HTML elements
- Use selectors to target specific elements or groups
- Understand the three methods of applying CSS

### 6.5.7 — Create and Attach CSS Stylesheets
- Create an external `.css` file
- Link the stylesheet to HTML using `<link>` tag
- Recognize differences between inline, internal, and external CSS

### 6.5.3 — Use Standard Web Languages
- Write valid CSS syntax (selectors, properties, values, declarations)
- Apply CSS correctly in HTML documents
- Understand foundational CSS concepts

---

## Common Beginner Mistakes

1. **Forgetting semicolons** — Every declaration must end with `;`
2. **Wrong color syntax** — Hex needs `#`, RGB needs `rgb()`, not just the color name alone
3. **Class vs. ID confusion** — Classes use `.` and can be used multiple times; IDs use `#` and should be unique
4. **Not linking the stylesheet** — External CSS file won't work unless you add `<link>` in HTML `<head>`
5. **Misspelled property names** — `font-size` not `fontSize`; `text-align` not `textAlign`
6. **Forgetting to close brackets** — Always match opening `{` with closing `}`

---

## Practice Questions

1. What's the difference between a class selector and an ID selector?
2. Write the `<link>` tag to attach a file called `styles.css`.
3. What color does `#FF0000` represent?
4. How do you add Google Fonts to your HTML?
5. What does the `font-weight: bold;` property do?
6. Why is an external stylesheet better than inline styles?
7. How many colors can you make with hex codes?
8. What property centers text horizontally?
9. What happens if two CSS rules apply to the same element?
10. Write an element selector for all `<h2>` tags.

---

## Answers

1. Class selectors target multiple elements and use `.`; ID selectors target one unique element and use `#`.
2. `<link rel="stylesheet" href="styles.css">`
3. Red
4. Add a `<link>` tag in the `<head>` to Google Fonts URL, then use the font name in `font-family`.
5. Makes text bold.
6. External stylesheets are reusable, keep HTML clean, and are easier to maintain.
7. 16,777,216 (256 × 256 × 256 combinations)
8. `text-align: center;`
9. The more specific or later rule wins (cascade and specificity).
10. `h2 { }`
