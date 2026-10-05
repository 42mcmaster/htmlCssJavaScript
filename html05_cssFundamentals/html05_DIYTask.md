# Lesson 05 DIY Task: Style Your Mini-Site with One Stylesheet

In this task you will style your whole mini-site (all 4 pages) with **one** CSS file named `styles.css`. Every page links to the same file, so one change in `styles.css` changes every page at once. That is the main reason web developers use external stylesheets.

Three things to pay attention to:

1. **Check your site** so the right things are on the right pages.
2. **Write `styles.css`** and link it to all 4 pages.
3. **Ensure your website is in it's own folder** in other words, it should be separate from any of the units and you can just call it `diyWebsite`. 

---

**All CSS goes in `styles.css`.** No `style` attributes and no `<style>` blocks in your pages.

---

## Table of Contents

- [Where Everything Goes](#where-everything-goes)
- [Part 1: Check Your Site First](#part-1-check-your-site-first)
- [Part 2: Link the Stylesheet](#part-2-link-the-stylesheet)
- [Part 3: Write Your CSS](#part-3-write-your-css)
- [Part 4: Test, Validate, and Push](#part-4-test-validate-and-push)
- [Example styles.css](#example-stylescss)
- [Part 4: Header, nav links, and footer](#part-4-header-nav-links-and-footer)
- [Part 5: Class and id selectors](#part-5-class-and-id-selectors)
- [Part 6: The table on about.html](#part-6-the-table-on-abouthtml)
- [Part 7: The captions on gallery.html](#part-7-the-captions-on-galleryhtml)
- [Part 8: Finish and push](#part-8-finish-and-push)
- [Checklist](#checklist)
- [Bonus Challenges](#bonus-challenges)
- [If Something Goes Wrong](#if-something-goes-wrong)

---

## Where Everything Goes

This is an ongoing project, continuing from your Lesson 03 and Lesson 04 DIY site. When you are done, it should look like this:

```
your-site-folder/
├── index.html      <- Home: promo video
├── about.html      <- About: comparison table
├── contact.html    <- Contact: email, phone, and external links
├── gallery.html    <- Gallery: 3+ photos
├── styles.css      <- NEW: one stylesheet for every page
├── images/         <- your photos
└── media/          <- promo-lastname.mp4
```

| File | What changes |
|---|---|
| `styles.css` | New file. All of your CSS goes here. |
| All 4 html pages | Add `<link rel="stylesheet" href="styles.css">` in the `<head>`. Add a few `class` attributes (Part 5). |
| `about.html` | Nothing new in the HTML. The table gets styled from `styles.css`. |
| `gallery.html` | Nothing new in the HTML. The captions get styled from `styles.css`. |

---

## Part 1: Check Your Site First

Your CSS will style things that live on specific pages. Before you write any CSS, make sure your site matches this. **If something is on the wrong page, move it now.**

### Repeated from above: Your folder should look like this

```
your-site-folder/
├── index.html      <- Home: promo video
├── about.html      <- About: comparison table
├── contact.html    <- Contact: email, phone, and external links
├── gallery.html    <- Gallery: 3+ photos
├── styles.css      <- NEW in this lesson
├── images/         <- your photos
└── media/          <- promo-lastname.mp4
```

### What goes on each page

| Page | Must have |
|---|---|
| **All 4 pages** | The same `<header id="top">`, header nav, and `<footer>` with footer nav. Each nav has 4 links: Home, About, Gallery, Contact. |
| `index.html` | A section with `id="promo"` holding your `<video controls>`. A link near the top of `<main>` that jumps to it: `<a href="#promo">`. |
| `about.html` | A section with `id="compare"` holding your comparison table (caption, `<th>` header row, 4+ data rows, a colspan or rowspan). |
| `gallery.html` | A section with `id="photos"` holding 3+ photos. Each photo is inside a `<figure>` with a `<figcaption>`. |
| `contact.html` | Your email link, phone link, and external link from Lesson 03. |

### Fix these common problems

- **No `gallery.html`?** Copy `index.html`, rename the copy `gallery.html`, change its `<title>`, and delete everything inside `<main>`. Move your photos into a `<section id="photos">` there.
- **Photos on the Home or About page?** Move them to `gallery.html`.
- **Video on a page other than Home?** Move the whole `promo` section to `index.html`.
- **Table on a page other than About?** Move it into a `<section id="compare">` on `about.html`.
- **Gallery link missing from a nav?** There are 8 navs (header and footer on 4 pages). Every one needs all 4 links:

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="gallery.html">Gallery</a>
  <a href="contact.html">Contact</a>
</nav>
```

- **Remove all old CSS from your HTML.** Delete any `style="..."` attributes (the 04a task had one on an `<img>`) and any `<style>` blocks. All styling goes in `styles.css` now.

Click every nav link on every page before you move on.

```html
<link rel="stylesheet" href="styles.css">
```

```html
<link rel="stylesheet" href="styles.css">
```

4. Do the same on `about.html`, `contact.html`, and `gallery.html`. That is **4 links**, one on each page.
5. Test the link: put this one rule in `styles.css`, save, and open each page.

```css
body {
  background-color: lightyellow; /* test rule - change once links work */
}
```

All 4 pages should turn light yellow. If one doesn't, that page is missing the `<link>` line or has a typo in it. Once all 4 work, change the color to whatever you want and delete the test rule.

---

## Part 3: Write Your CSS

Write **at least 10 rules** in `styles.css`. A rule is one selector and its curly braces:

```css
h1 {                  /* selector */
  color: navy;        /* property: value; */
  text-align: center;
}
```

### Selector requirements

| Type | How many | What it looks like | Where it comes from |
|---|---|---|---|
| **Element** | at least 2 | `body`, `h1`, `nav a`, `table` | Tags already in your HTML |
| **Class** | at least 2 | `.intro`, `.note` | **You add these.** Put `class="..."` on elements in your HTML. |
| **ID** | at least 1 | `#top`, `#promo`, `#compare` | ids you already have from Lessons 03 and 04 |

**Adding a class:** a class is a label you add to an HTML tag so you can style it. For example, give your colspan cell a class:

```html
<td colspan="4" class="note">Prices include tax.</td>
```

Then style it in `styles.css`:

```css
.note {
  font-style: italic;
  text-align: center;
}
```

### Things you must style

Your 10+ rules must cover these parts of the site:

| Part of the site | Page | What to style |
|---|---|---|
| **Whole page** | all | `body`: background color, text color, font family |
| **Headings** | all | `h1` and `h2`: color, size, or alignment |
| **Nav links** | all | `nav a`: color, spacing, remove underline with `text-decoration: none;` |
| **Table** | about.html | Borders on `table`, `th`, `td` with `border` and `border-collapse: collapse;`, plus `padding`. Make the header row look different from the data rows. |
| **Photos** | gallery.html | `img`: `max-width: 100%;` and `height: auto;` so photos shrink on small screens. Style `figcaption` (size, color, or italic). |
| **Video section** | index.html | `#promo`: a border, background color, or padding so it stands out. |

### Property requirements

Use at least one property from each group somewhere in your file:

- **Colors:** `color`, `background-color`
- **Fonts:** `font-family`, `font-size`, `font-weight`
- **Text:** `text-align`, `line-height`, `text-decoration`
- **Spacing and borders:** `padding`, `margin`, `border`

Always give `font-family` a backup, like `font-family: Arial, sans-serif;`. If the first font is missing, the browser uses the second.
}
```

Use at least one of each of these text properties somewhere in your stylesheet:

| Property | What it does | Example |
|---|---|---|
| `text-align` | Left, center, or right | `text-align: center;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `text-decoration` | Underline on or off | `text-decoration: none;` |
| `letter-spacing` (optional) | Space between letters | `letter-spacing: 1px;` |

## Checklist

**Site check (Part 1)**
- [ ] 4 pages: `index.html`, `about.html`, `gallery.html`, `contact.html`
- [ ] Every page has the same header (`id="top"`), header nav, and footer nav with all 4 links
- [ ] Promo video in `<section id="promo">` on `index.html`, with an anchor link to it
- [ ] Table in `<section id="compare">` on `about.html`
- [ ] 3+ photos in figures in `<section id="photos">` on `gallery.html`
- [ ] No `style="..."` attributes or `<style>` blocks anywhere

**Stylesheet**
- [ ] `styles.css` is in the same folder as the HTML files
- [ ] `<link rel="stylesheet" href="styles.css">` in the `<head>` of all 4 pages
- [ ] At least 10 rules
- [ ] At least 2 element selectors, 2 class selectors (with `class` added in the HTML), and 1 ID selector
- [ ] Styled: body, headings, nav links, table, photos and captions, promo section
- [ ] Uses color, font, text, and spacing/border properties

**Finish**
- [ ] All 4 pages share the same look
- [ ] `styles.css` passes the CSS validator
- [ ] All 4 HTML pages pass the HTML validator
- [ ] Pushed to GitHub with `styles.css`

---

## Part 4: Header, nav links, and footer

Every page has the same header, nav, and footer. Style them once and all 4 pages match.

`nav a` means "links that are inside a `<nav>`." It styles your nav links without changing other links on the page.

```css
/* ===== Header ===== */
header {
  background-color: #8b4513;           /* accent color behind the site name */
  color: #ffffff;                      /* white text */
  text-align: center;
}

/* ===== Nav links (header and footer) ===== */
nav a {
  color: #ffe8c2;                      /* light color that shows up on the dark header and footer */
  font-weight: bold;
  text-decoration: none;               /* removes the underline */
}

/* ===== Footer ===== */
footer {
  background-color: #8b4513;           /* same as the header so the page looks finished */
  color: #ffffff;
  font-size: 0.875rem;                 /* 14px, a little smaller */
  text-align: center;
}
```

**Tip:** text needs to stand out from what is behind it. If your header and footer are dark, use a light color for the nav links and the site name. If they are light, use a dark color. Check it on every page.

---

### Bonus suggestions

1. **Google Fonts:** pick a font at fonts.google.com and use it for your headings.
2. **Hover effect:** use `nav a:hover` to change the link color when the mouse is over it.
3. **Color scheme:** use at least 3 hex colors (like `#6b3e1f`) and 1 `rgb()` color that go well together.
4. **Second theme (optional):** make a copy of your stylesheet named `styles-dark.css` with dark colors. Change the `href` in one page's `<link>` to `styles-dark.css` to preview a different theme (switch it back before pushing).

---

## If Something Goes Wrong

- **No page changes at all:** the `<link>` line is missing, is outside the `<head>`, or `href` doesn't match the file name exactly. It must be `styles.css` with an `s` on the end in both places.
- **One page changes but another doesn't:** that page is missing the `<link>` line.
- **A class rule does nothing:** check that the class is in the HTML (`class="note"`) and has a dot in the CSS (`.note`). The names must match exactly, including capital letters.
- **An ID rule does nothing:** the CSS needs a `#` (`#promo`), and the HTML needs `id="promo"` with the same spelling.
- **One rule breaks everything after it:** a missing `}` or `;` in the rule above. The CSS validator will point to the line.
- **Table still has no borders:** the rule needs `table, th, td` (all three, with commas), not just `table`.
- **Photos run off the side of the page:** the `img` rule needs both `max-width: 100%;` and `height: auto;`.

Still stuck: ask a classmate, then ask Mr. McMaster.
