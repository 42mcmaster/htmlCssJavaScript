# CSS Fundamentals Walkthrough (html05)

## Overview
In this walkthrough, you'll learn CSS by building it step-by-step. We'll start with a plain HTML page, add inline styles, convert to internal CSS, and finally create an external stylesheet. Then we'll style with colors, fonts, and text properties.

---

## Part 1: Start with Plain HTML

Before any CSS, here's a simple HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
</head>
<body>
  <h1>Welcome to CSS!</h1>
  <p>This page demonstrates three CSS methods.</p>
  <p class="highlight">This paragraph should stand out.</p>
  <div id="footer">© 2024 My Website</div>
</body>
</html>
```

**Your turn:** Copy this HTML into a file called `practice.html` and view it in your browser. It should look plain—no colors, no special fonts.

---

## Part 2: Method 1 — Inline Styles

**Inline styles** go directly in the HTML tag using the `style` attribute:

```html
<h1 style="color: blue;">Welcome to CSS!</h1>
```

**Try This:** Modify the `<h1>` tag to add an inline style:

```html
<h1 style="___: blue;">Welcome to CSS!</h1>
```

**Answer:** `<h1 style="color: blue;">Welcome to CSS!</h1>`

Now make the paragraph with class `highlight` have a yellow background:

```html
<p class="highlight" style="background-color: ___;">This paragraph should stand out.</p>
```

**Answer:** `<p class="highlight" style="background-color: yellow;">This paragraph should stand out.</p>`

**Note:** We can add multiple properties separated by semicolons:
```html
<p style="color: white; background-color: navy;">Light text on dark background</p>
```

---

## Part 3: Method 2 — Internal Stylesheet

Instead of putting styles in every tag, we use a `<style>` tag in the `<head>`. This is cleaner!

Add this to your `<head>` section:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
  <style>
    /* Internal stylesheet */
    h1 {
      color: blue;
      font-size: 32px;
    }

    p {
      color: #333333;
      font-size: 16px;
    }
  </style>
</head>
```

**Try This:** Add a rule for the class `highlight` inside the `<style>` tag:

```css
.___ {
  background-color: yellow;
  font-weight: bold;
}
```

**Answer:**
```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

Add a rule for the ID `footer`:

```css
#___ {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 20px;
}
```

**Answer:**
```css
#footer {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 20px;
}
```

---

## Part 4: Method 3 — External Stylesheet

The best practice! Move CSS to a separate `.css` file.

**Step 1:** Create a new file called `styles.css` in the same folder as your HTML.

**Step 2:** Move all the CSS rules from the `<style>` tag into `styles.css`:

```css
/* styles.css */
/* This is an external stylesheet */

h1 {
  color: blue;
  font-size: 32px;
}

p {
  color: #333333;
  font-size: 16px;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}

#footer {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 20px;
}
```

**Step 3:** In your HTML `<head>`, replace the `<style>` tag with a `<link>` tag:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

**Try This:** The `<link>` tag has four attributes. Can you match them?

```html
<link ___ = "stylesheet" ___ = "styles.css">
```

**Answer:**
```html
<link rel="stylesheet" href="styles.css">
```

---

## Part 5: Add Colors

Now let's expand our CSS with better colors. Update your `styles.css`:

```css
/* colors.css */

body {
  background-color: #f5f5f5;  /* Light gray background */
}

h1 {
  color: #1a73e8;  /* Google blue */
  font-size: 32px;
}

p {
  color: #202124;  /* Dark gray text */
  font-size: 16px;
}

.highlight {
  background-color: #fff3cd;  /* Light yellow */
  color: #856404;  /* Dark brown */
  font-weight: bold;
}

#footer {
  background-color: #202124;  /* Dark gray */
  color: white;
  text-align: center;
  padding: 20px;
}
```

**Try This:** Use RGB format instead of hex for the body background:

```css
body {
  background-color: rgb(___, ___, ___);  /* Light gray: 245, 245, 245 */
}
```

**Answer:**
```css
body {
  background-color: rgb(245, 245, 245);
}
```

---

## Part 6: Add Fonts

Update your `styles.css` to add Google Fonts. First, add the link to your HTML `<head>`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
```

Now update your `styles.css` to use the new font:

```css
/* Google Fonts import and usage */

body {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(245, 245, 245);
}

h1 {
  color: #1a73e8;
  font-size: 32px;
  font-weight: 700;  /* Bold for headings */
  font-family: 'Roboto', sans-serif;
}

p {
  color: #202124;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

.highlight {
  background-color: #fff3cd;
  color: #856404;
  font-weight: bold;
}

#footer {
  background-color: #202124;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
}
```

**Try This:** Change the h1 font-size to a larger value:

```css
h1 {
  font-size: ___;
}
```

**Answer:** Any value larger than 32px works. For example: `font-size: 40px;` or `font-size: 48px;`

---

## Part 7: Add Text Properties

Enhance your `styles.css` with line-height, text-alignment, and text-decoration:

```css
/* Complete styled page */

body {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(245, 245, 245);
  line-height: 1.6;  /* Better spacing between lines */
}

h1 {
  color: #1a73e8;
  font-size: 40px;
  font-weight: 700;
  text-align: center;  /* Center the heading */
  margin-bottom: 20px;
}

p {
  color: #202124;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.highlight {
  background-color: #fff3cd;
  color: #856404;
  font-weight: bold;
  padding: 10px;  /* Add space inside */
  border-left: 4px solid #ffc107;  /* Yellow accent border */
}

#footer {
  background-color: #202124;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  margin-top: 40px;
  border-top: 1px solid #555;
}
```

**Try This:** Add `text-decoration` to remove underlines from links. Add this rule to your CSS:

```css
a {
  color: #1a73e8;
  text-decoration: ___;  /* Should be 'none' to remove underlines */
}
```

**Answer:**
```css
a {
  color: #1a73e8;
  text-decoration: none;
}
```

---

## Part 8: Review the Complete File Structure

Your project should now have **two files**:

**File 1: practice.html**
- Contains HTML structure
- Links to `styles.css`
- Clean, no inline styles

**File 2: styles.css**
- Contains all CSS rules
- Uses element, class, and ID selectors
- Colors, fonts, and text properties

This is **best practice**! Separating HTML and CSS makes your code:
- Easier to read
- Easier to update
- Reusable across multiple pages
- Professional

---

## Recap: Three CSS Methods

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Inline** | Quick, immediate | Not reusable, messy | Quick tests only |
| **Internal** | Organized, in one file | Only for one HTML page | Single small projects |
| **External** | Clean, reusable, professional | Separate file to manage | Real websites (BEST!) |

---

## Key Takeaways

1. **CSS Rule:** `selector { property: value; }`
2. **Selectors:** element (`p`), class (`.highlight`), ID (`#footer`)
3. **Properties:** color, font-family, font-size, font-weight, text-align, line-height, etc.
4. **Colors:** named, hex (#RRGGBB), or rgb(R, G, B)
5. **Google Fonts:** Link in `<head>`, use in CSS `font-family`
6. **Best Practice:** Use external stylesheets

You now know the fundamentals of CSS! Next, you'll apply this to restyle your "About Me" page.
