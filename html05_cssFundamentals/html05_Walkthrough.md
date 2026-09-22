# CSS Fundamentals Walkthrough (html05)

## Overview

In this walkthrough you'll learn CSS by building it one step at a time. You'll start with a plain HTML page, add inline styles, move them into an internal stylesheet, and then move them into an external stylesheet. After that you'll add colors, fonts, text properties, and the selectors you need to style your mini-site.

## Table of Contents

- [You've Already Seen CSS](#youve-already-seen-css)
- [Part 1: Start with Plain HTML](#part-1-start-with-plain-html)
- [Part 2: Method 1 — Inline Styles](#part-2-method-1--inline-styles)
- [Part 3: Method 2 — Internal Stylesheet](#part-3-method-2--internal-stylesheet)
- [Part 4: Method 3 — External Stylesheet](#part-4-method-3--external-stylesheet)
- [Part 5: Add Colors](#part-5-add-colors)
- [Part 6: Add Fonts](#part-6-add-fonts)
- [Part 7: Add Text Properties](#part-7-add-text-properties)
- [Part 8: Selectors You'll Need for Your Site](#part-8-selectors-youll-need-for-your-site)
- [Part 9: Review the Complete File Structure](#part-9-review-the-complete-file-structure)
- [Recap: Three CSS Methods](#recap-three-css-methods)
- [Key Takeaways](#key-takeaways)

---

## You've Already Seen CSS

Two things from Lesson 04 were CSS, even though we didn't call them that:

- `style="max-width: 100%; height: auto;"` on an image. That's an **inline style**, the first method below.
- The small `<style>` block at the top of the table tasks that drew the borders. That's an **internal stylesheet**, the second method below.

This lesson explains what those were and gives you the third method, which is the one real websites use.

---

## Part 1: Start with Plain HTML

Here's a simple HTML page with no CSS. It has a header, a nav, a link, a small table, and a footer, so you'll have something to style for every part of this walkthrough.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
</head>
<body>

  <header>
    <h1>Welcome to CSS!</h1>
    <nav>
      <a href="#methods">Methods</a>
      <a href="#prices">Prices</a>
    </nav>
  </header>

  <p id="methods">This page demonstrates three CSS methods.</p>
  <p class="highlight">This paragraph should stand out.</p>
  <p>Learn more in <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">the MDN CSS guide</a>.</p>

  <table id="prices">
    <caption>Snack Prices</caption>
    <tr>
      <th>Snack</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Chips</td>
      <td>$1.50</td>
    </tr>
    <tr>
      <td>Pretzels</td>
      <td>$1.25</td>
    </tr>
  </table>

  <footer id="footer">&copy; 2026 My Website</footer>

</body>
</html>
```

**Your turn:** Copy this HTML into a file named `practice.html` and open it in your browser. It should look plain: black text, white background, underlined blue links, and a table with no lines.

---

## Part 2: Method 1 — Inline Styles

An **inline style** goes directly in an HTML tag, using the `style` attribute:

```html
<h1 style="color: blue;">Welcome to CSS!</h1>
```

**Try This:** Add an inline style to the `<h1>` to make it blue:

```html
<h1 style="___: blue;">Welcome to CSS!</h1>
```

**Answer:** `<h1 style="color: blue;">Welcome to CSS!</h1>`

Now give the paragraph with `class="highlight"` a yellow background:

```html
<p class="highlight" style="background-color: ___;">This paragraph should stand out.</p>
```

**Answer:** `<p class="highlight" style="background-color: yellow;">This paragraph should stand out.</p>`

You can put more than one property in a style. Separate them with semicolons:

```html
<p style="color: white; background-color: navy;">Light text on dark background</p>
```

Save and refresh. The heading should be blue and the highlight paragraph yellow.

**The problem with inline styles:** each style only affects the one tag it's on. If your site had 20 headings, you'd have to type the style 20 times.

---

## Part 3: Method 2 — Internal Stylesheet

An **internal stylesheet** is a `<style>` tag inside the `<head>`. One rule in it can style every matching tag on the page.

Add this to your `<head>`, right after the `<title>`:

```html
<style>
  /* Internal stylesheet */
  h1 {
    font-size: 32px;
  }

  p {
    color: #333333;
    font-size: 16px;
  }
</style>
```

Each rule has three parts:

```css
p {                   /* selector: which tags to style */
  color: #333333;     /* property: value; */
}
```

**Try This:** Add a rule for the class `highlight` inside the `<style>` tag. A class selector starts with a dot.

```css
.___ {
  font-weight: bold;
}
```

**Answer:**
```css
.highlight {
  font-weight: bold;
}
```

Now add a rule for the ID `footer`. An ID selector starts with a `#`.

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

Save and refresh. The footer should now be dark with white text.

**The problem with internal stylesheets:** the rules only work on this one page. Your mini-site has 4 pages, so you'd have to copy the `<style>` block into every page, and change all 4 every time you change a color.

---

## Part 4: Method 3 — External Stylesheet

An **external stylesheet** is a separate `.css` file. Every page links to it, so one file styles the whole site. This is what real websites use.

**Step 1:** Create a new file named `styles.css` in the same folder as `practice.html`.

**Step 2:** Move all the rules from your `<style>` tag into `styles.css`. Don't copy the `<style>` tags themselves. A `.css` file only holds rules.

```css
/* styles.css */

h1 {
  font-size: 32px;
}

p {
  color: #333333;
  font-size: 16px;
}

.highlight {
  font-weight: bold;
}

#footer {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 20px;
}
```

**Step 3:** In your HTML `<head>`, delete the whole `<style>` block and put a `<link>` tag in its place:

```html
<link rel="stylesheet" href="styles.css">
```

**Step 4:** Delete the inline styles from Part 2. Remove `style="color: blue;"` from the `<h1>` and `style="background-color: yellow;"` from the highlight paragraph. Leave `class="highlight"`, because the stylesheet uses it.

**Why Step 4 matters:** when an inline style and a stylesheet rule set the same property on the same tag, **the inline style wins**. If you leave the inline styles in, the color changes you make in `styles.css` later will seem to do nothing.

Save and refresh. The heading should be black again and the highlight paragraph white. That's correct. You'll add colors back in Part 5, this time in `styles.css`.

**Try This:** The `<link>` tag has two attributes. Fill them in:

```html
<link ___="stylesheet" ___="styles.css">
```

**Answer:**
```html
<link rel="stylesheet" href="styles.css">
```

- `rel="stylesheet"` tells the browser what kind of file it is.
- `href="styles.css"` is the path to the file, just like the `href` in a regular link.

---

## Part 5: Add Colors

CSS colors can be written three ways:

| Format | Example | Notes |
|---|---|---|
| Name | `blue`, `white`, `navy` | Easy, but only about 140 names |
| Hex | `#1a73e8` | `#` then 6 characters: red, green, blue |
| rgb() | `rgb(26, 115, 232)` | Red, green, blue, each 0 to 255 |

Update `styles.css` to this:

```css
/* styles.css */

body {
  background-color: #f5f5f5;  /* light gray background */
}

h1 {
  color: #1a73e8;  /* bright blue */
  font-size: 32px;
}

p {
  color: #202124;  /* dark gray text */
  font-size: 16px;
}

.highlight {
  background-color: #fff3cd;  /* light yellow */
  color: #856404;  /* dark brown */
  font-weight: bold;
}

#footer {
  background-color: #202124;  /* dark gray */
  color: white;
  text-align: center;
  padding: 20px;
}
```

Save and refresh. The heading should be bright blue and the highlight paragraph light yellow with brown text.

**Try This:** Change the body background to rgb format instead of hex:

```css
body {
  background-color: rgb(___, ___, ___);  /* light gray: 245, 245, 245 */
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

Google Fonts are free fonts you can load into your page.

**Step 1:** Add this link to your HTML `<head>`, **above** the link to `styles.css`:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
```

**Step 2:** Set the font on `body` in `styles.css`:

```css
body {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(245, 245, 245);
}
```

You only need to set `font-family` on `body`. Tags inside the body (headings, paragraphs, links, table cells) **inherit** the font from it. You don't have to repeat it in every rule.

`sans-serif` is the backup. If Roboto doesn't load, the browser uses its own plain font instead of a fancy one.

**Step 3:** Make the heading bold with `font-weight`:

```css
h1 {
  color: #1a73e8;
  font-size: 32px;
  font-weight: 700;  /* 700 = bold, 400 = normal */
}
```

**Try This:** Change the h1 font size to something larger:

```css
h1 {
  font-size: ___;
}
```

**Answer:** Any value larger than 32px works, like `font-size: 40px;` or `font-size: 48px;`.

---

## Part 7: Add Text Properties

Now add spacing, alignment, and borders. Update `styles.css` to this:

```css
/* styles.css */

body {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(245, 245, 245);
  line-height: 1.6;  /* more space between lines of text */
}

h1 {
  color: #1a73e8;
  font-size: 40px;
  font-weight: 700;
  text-align: center;  /* center the heading */
}

p {
  color: #202124;
  font-size: 16px;
  margin-bottom: 15px;  /* space below each paragraph */
}

.highlight {
  background-color: #fff3cd;
  color: #856404;
  font-weight: bold;
  padding: 10px;  /* space inside the box */
  border-left: 4px solid #ffc107;  /* yellow bar on the left */
}

#footer {
  background-color: #202124;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  margin-top: 40px;  /* space above the footer */
}
```

**padding vs. margin:** `padding` is space **inside** an element, between its text and its edge. `margin` is space **outside** an element, between it and the next thing.

**Try This:** Remove the underline from every link on the page. Add this rule and fill in the blank:

```css
a {
  color: #1a73e8;
  text-decoration: ___;
}
```

**Answer:**
```css
a {
  color: #1a73e8;
  text-decoration: none;
}
```

Save and refresh. All three links (the two nav links and the MDN link) should lose their underlines.

---

## Part 8: Selectors You'll Need for Your Site

Your DIY task asks you to style the nav, the table, and the photos on your mini-site. These three selector tricks make that possible.

### One rule for several tags (grouping)

Put commas between selectors to give them all the same styles. This is how you put borders on a table: the table, the header cells, and the data cells each need a border.

```css
table, th, td {
  border: 1px solid #202124;
  border-collapse: collapse;  /* merge double lines into single lines */
  padding: 8px;
}

th {
  background-color: #1a73e8;
  color: white;
}
```

Save and refresh. The Snack Prices table should now have lines and a blue header row. This is the same CSS that was in the `<style>` block of the 04b and 04c tasks.

Try removing `border-collapse: collapse;` and refresh. You'll see double lines around every cell. Put it back.

### Only the tags inside another tag (descendant)

A space between two selectors means "the second tag, but only when it's inside the first." `nav a` styles only the links inside the `<nav>`. Links anywhere else are left alone.

```css
nav a {
  font-weight: bold;
  margin-right: 16px;
}
```

Save and refresh. The two nav links should be bold and spread apart. The MDN link in the paragraph should stay normal weight.

| Selector | What it styles |
|---|---|
| `a` | Every link on the page |
| `nav a` | Only links inside a `<nav>` |
| `footer p` | Only paragraphs inside a `<footer>` |
| `#prices td` | Only data cells inside the element with `id="prices"` |

**Try This:** Write a rule that makes only the data cells in the Snack Prices table centered:

```css
#prices ___ {
  text-align: center;
}
```

**Answer:**
```css
#prices td {
  text-align: center;
}
```

### Images that shrink to fit the screen

In Lesson 04 you put `style="max-width: 100%; height: auto;"` on an image. Here is that same thing as a rule in your stylesheet. It works on every image on every page that links to `styles.css`:

```css
img {
  max-width: 100%;  /* never wider than the space it's in */
  height: auto;     /* keep the right shape when it shrinks */
}
```

There's no image on `practice.html`, so you won't see a change here. You'll use this rule on your Gallery page.

---

## Part 9: Review the Complete File Structure

Your practice folder should now have **two files**:

**practice.html**
- Contains the HTML structure
- Has a `<link>` to `styles.css` (and the Google Fonts link above it)
- Has no `style="..."` attributes and no `<style>` block

**styles.css**
- Contains every CSS rule
- Uses element (`p`), class (`.highlight`), and ID (`#footer`) selectors
- Uses a grouping selector (`table, th, td`) and a descendant selector (`nav a`)
- Sets colors, fonts, text properties, spacing, and borders

Keeping HTML and CSS in separate files means:
- One stylesheet can style every page of a site
- You change a color in one place and it changes everywhere
- The HTML is easier to read because it only holds content

---

## Recap: Three CSS Methods

| Method | Where it goes | Works on | Best for |
|--------|---------------|----------|----------|
| **Inline** | `style="..."` on one tag | That one tag | Quick tests only |
| **Internal** | `<style>` block in the `<head>` | That one page | A single-page project |
| **External** | A `.css` file linked with `<link>` | Every page that links it | Real websites |

When two methods set the same property on the same tag, **inline wins**.

---

## Key Takeaways

1. **CSS rule:** `selector { property: value; }`
2. **Selectors:**
   - element: `p`
   - class: `.highlight`
   - ID: `#footer`
   - grouping: `table, th, td`
   - descendant: `nav a`
3. **Properties:** `color`, `background-color`, `font-family`, `font-size`, `font-weight`, `text-align`, `line-height`, `text-decoration`, `padding`, `margin`, `border`
4. **Colors:** name (`blue`), hex (`#1a73e8`), or rgb (`rgb(26, 115, 232)`)
5. **Google Fonts:** link it in the `<head>` above your stylesheet, then use it in `font-family` on `body`
6. **Inheritance:** set the font on `body` once and everything inside uses it
7. **Inline wins:** remove old `style="..."` attributes when you move to a stylesheet
8. **Best practice:** one external stylesheet for the whole site

Next, in the DIY task, you'll write one `styles.css` that styles all 4 pages of your mini-site.
