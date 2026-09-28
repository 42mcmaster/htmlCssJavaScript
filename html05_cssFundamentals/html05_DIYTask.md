# Lesson 05 DIY: One Stylesheet for Your Whole Website

Write one CSS file that styles every page of the website you built in Lesson 03 and Lesson 04. This is the one graded item for Lesson 05. The walkthroughs and the a/b/c tasks are practice.

Your site has 4 pages: `index.html`, `about.html`, `contact.html`, and `gallery.html`. You will make **one** file named `styles.css` and link it to **all 4 pages**. When you change a color in that one file, all 4 pages change. That is the reason we use an external stylesheet.

**All CSS goes in `styles.css`.** No `style` attributes and no `<style>` blocks in your pages.

---

## Table of Contents

- [Where Everything Goes](#where-everything-goes)
- [Part 1: Make styles.css and link it to every page](#part-1-make-stylescss-and-link-it-to-every-page)
- [Part 2: Colors and fonts for the whole site](#part-2-colors-and-fonts-for-the-whole-site)
- [Part 3: Headings and text](#part-3-headings-and-text)
- [Part 4: Header, nav links, and footer](#part-4-header-nav-links-and-footer)
- [Part 5: Class and id selectors](#part-5-class-and-id-selectors)
- [Part 6: The table on about.html](#part-6-the-table-on-abouthtml)
- [Part 7: The captions on gallery.html](#part-7-the-captions-on-galleryhtml)
- [Part 8: Finish and push](#part-8-finish-and-push)
- [Checklist](#checklist)
- [Grading](#grading)
- [If something goes wrong](#if-something-goes-wrong)

---

## Where Everything Goes

Work in the same folder as your Lesson 03 and Lesson 04 site. When you are done, it should look like this:

```
your-site-folder/
├── index.html      <- Home: add the <link> to styles.css
├── about.html      <- About: add the <link> to styles.css
├── contact.html    <- Contact: add the <link> to styles.css
├── gallery.html    <- Gallery: add the <link> to styles.css
├── styles.css      <- NEW: one stylesheet for every page
├── images/         <- your photos (no changes)
└── media/          <- your promo video (no changes)
```

| File | What changes |
|---|---|
| `styles.css` | New file. All of your CSS goes here. |
| All 4 pages | Add `<link rel="stylesheet" href="styles.css">` in the `<head>`. Add a few `class` attributes (Part 5). |
| `about.html` | Nothing new in the HTML. The table gets styled from `styles.css`. |
| `gallery.html` | Nothing new in the HTML. The captions get styled from `styles.css`. |

---

## Part 1: Make styles.css and link it to every page

1. In VS Code, make a new file in your site folder. Name it `styles.css` (all lowercase, next to your HTML files, not inside `images` or `media`).
2. Put a comment at the top so anyone reading it knows what it is:

```css
/* styles.css
   Stylesheet for every page of my website
   Author: Your Name */
```

3. Open `index.html`. Inside `<head>`, under the `<title>`, add this line:

```html
<link rel="stylesheet" href="styles.css">
```

4. Do the same on `about.html`, `contact.html`, and `gallery.html`. That is **4 links**, one on each page.
5. Test it. Add this rule to `styles.css`, save, and open each page in the browser:

```css
/* Test rule - delete this after all 4 pages turn light blue */
body {
  background-color: lightblue;
}
```

6. All 4 pages should turn light blue. If one does not, that page is missing the `<link>` line or has a typo in it. Once all 4 work, delete the test rule.

---

## Part 2: Colors and fonts for the whole site

Pick a color scheme that fits your topic: a background color, a text color, and 1 or 2 accent colors for headings and links. Use **hex** (`#2c3e50`) or **rgb** (`rgb(44, 62, 80)`) values, not color names.

Rules on `body` are passed down to everything on the page, so this is where the site-wide color and font go.

```css
/* ===== Whole page ===== */
body {
  background-color: #fdf6ec;           /* page background (hex) */
  color: rgb(51, 51, 51);              /* main text color (rgb) */
  font-family: Arial, sans-serif;      /* font for the whole site */
  font-size: 1rem;                     /* 16px, the normal size */
  line-height: 1.6;                    /* space between lines of text */
}
```

**Google Fonts (optional).** If you use a Google Font, the Google Fonts `<link>` goes in the `<head>` of **all 4 pages**, above the `styles.css` link. Then use the font name in `font-family`:

```css
body {
  font-family: 'Poppins', sans-serif;  /* sans-serif is the backup font */
}
```

**Font sizes use rem.** Remember from 05c: `1rem` is 16px. To convert, divide pixels by 16. Example: 24px ÷ 16 = `1.5rem`. Borders can stay in px.

---

## Part 3: Headings and text

Style your headings and paragraphs with **element selectors**. These rules work on every page because every page uses the same tags.

```css
/* ===== Headings ===== */
h1 {
  font-size: 2.5rem;                   /* 40px */
  text-align: center;                  /* no color here: the h1 sits in the header and uses the header's text color */
}

h2 {
  color: #8b4513;
  font-size: 1.75rem;                  /* 28px */
  letter-spacing: 1px;                 /* optional: a little space between letters */
}

/* ===== Paragraphs ===== */
p {
  font-size: 1rem;
}
```

Use at least one of each of these text properties somewhere in your stylesheet:

| Property | What it does | Example |
|---|---|---|
| `text-align` | Left, center, or right | `text-align: center;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `text-decoration` | Underline on or off | `text-decoration: none;` |
| `letter-spacing` (optional) | Space between letters | `letter-spacing: 1px;` |

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

## Part 5: Class and id selectors

You need **at least 2 class selectors** and **at least 1 id selector**.

**Id selectors.** Your site already has ids from Lesson 04: `id="promo"` on `index.html` and `id="compare"` on `about.html`. You can style one of them:

```css
/* ===== id: the promo video section on index.html ===== */
#promo {
  background-color: #f3e3cc;           /* light box behind the video */
  text-align: center;
}
```

**Class selectors.** Add a `class` attribute to a few tags in your HTML, then style the class in `styles.css`. A class can be used on more than one page. Some ideas:

| Class | Where to put it | What it could do |
|---|---|---|
| `intro` | The first paragraph on each page | Bigger or italic text |
| `highlight` | A sentence you want to stand out | Background color, bold |
| `note` | A small note, like hours or a credits line | Smaller, gray text |

HTML (on any page):

```html
<p class="intro">Welcome to Bean There, the best coffee in Medina.</p>
```

CSS:

```css
/* ===== Classes ===== */
.intro {
  font-size: 1.25rem;                  /* 20px */
  font-style: italic;
}

.highlight {
  background-color: #fff3cd;           /* soft yellow behind the text */
  font-weight: bold;
}
```

Adding `class="..."` to a tag is fine. It is not inline CSS. Inline CSS is the `style="..."` attribute, and that is still not allowed.

---

## Part 6: The table on about.html

In Lesson 04 your table had no lines. Now add them. `border-collapse: collapse` turns the double lines into single lines.

```css
/* ===== Comparison table (about.html) ===== */
table {
  border-collapse: collapse;           /* single lines instead of double */
}

th,
td {
  border: 1px solid #8b4513;           /* px is fine for borders */
  padding: 0.5rem;                     /* space inside each cell */
  text-align: left;
}

th {
  background-color: #8b4513;
  color: #ffffff;
}

caption {
  font-weight: bold;
}
```

Open `about.html` and check that every cell has a border and the text is not touching the lines.

---

## Part 7: The captions on gallery.html

Style the `<figcaption>` under each photo so the captions look like captions.

```css
/* ===== Photo captions (gallery.html) ===== */
figcaption {
  font-size: 0.875rem;                 /* 14px, smaller than normal text */
  font-style: italic;
  text-align: center;
  color: #666666;                      /* gray */
}
```

Lining the photos up side by side comes in Lesson 06. For now, just style the captions.

---

## Part 8: Finish and push

1. Count your rules. You need **at least 10 rules**. A rule is a selector and its `{ }` block.
2. Check that your CSS has comments that label each section (like `/* ===== Header ===== */`).
3. Open all 4 pages in the browser. They should look like one website: same colors, same fonts, same header, nav, and footer.
4. Click every nav link on every page (header and footer).
5. On `index.html`, play the video. On `gallery.html`, check that every photo shows up.
6. Run each page through https://validator.w3.org/ and fix the errors.
7. Open **GitHub Desktop**. Type a summary like `Add styles.css to my website`, click **Commit to main**, then **Push origin**.
8. On github.com, check that `styles.css` is there next to your HTML files.

---

## Checklist

**Stylesheet**
- [ ] `styles.css` is in the same folder as the 4 pages
- [ ] `<link rel="stylesheet" href="styles.css">` in the `<head>` of all 4 pages
- [ ] No `style` attributes or `<style>` blocks anywhere
- [ ] At least 10 rules
- [ ] Comments that label the sections of the CSS

**Selectors**
- [ ] At least 2 element selectors (like `body`, `h1`, `p`)
- [ ] At least 2 class selectors (like `.intro`, `.highlight`), and the classes are used in the HTML
- [ ] At least 1 id selector (like `#promo` or `#compare`)

**Colors, fonts, and text**
- [ ] Text color and background color using hex or rgb
- [ ] `font-family` on the body (Google Font optional)
- [ ] Font sizes in rem
- [ ] `text-align`, `line-height`, and `text-decoration` used somewhere
- [ ] Nav links styled

**Pages**
- [ ] Table on `about.html` has borders and cell padding
- [ ] Captions on `gallery.html` are styled
- [ ] All 4 pages look like the same website
- [ ] Every link works on every page
- [ ] All 4 pages pass the validator
- [ ] Pushed to GitHub with `styles.css`

---

## Grading

| Criteria | Looking for |
|---|---|
| **Linked to every page** | One `styles.css`, linked in the `<head>` of all 4 pages; no inline CSS or `<style>` blocks |
| **Selectors** | 10+ rules; at least 2 element, 2 class, and 1 id selector; classes used in the HTML |
| **Colors and fonts** | Hex or rgb colors for text and background; a font-family; font sizes in rem |
| **Text and nav** | text-align, line-height, and text-decoration used; nav links styled |
| **Table and gallery** | Table on `about.html` has borders and padding; figcaptions on `gallery.html` styled |
| **Consistent and working** | All 4 pages look like one site, CSS has comments, every link works, pages pass the validator, pushed |

**How it is graded:**

- **Complete:** every part is done and all 4 pages look like one clean, readable website. A few small things may be missing.
- **Mostly done:** `styles.css` is linked and styles most of the site, but several things are missing or one page is not linked.
- **Started:** `styles.css` exists and has some rules, but most parts are missing or it is not linked to the pages.
- **Missing:** no `styles.css` pushed.

---

## If something goes wrong

- **A page has no styles at all:** that page is missing the `<link>` line, or it has a typo. It must be `href="styles.css"` exactly, and `styles.css` must be in the same folder as the page.
- **Nothing works on any page:** check the file name. `Styles.css`, `style.css`, and `styles.css.txt` are all different files. It must be `styles.css`.
- **One rule does not work but the others do:** look for a missing `;` or `}` in the rule just above it. One missing brace can break everything below it.
- **Class does nothing:** the CSS needs the dot (`.intro`) and the HTML does not (`class="intro"`). Spelling and capital letters must match.
- **Id does nothing:** the CSS needs the `#` (`#promo`) and the HTML does not (`id="promo"`).
- **Font size does nothing:** no space before the unit. `1.5rem` works, `1.5 rem` does not.
- **Google Font only works on one page:** the Google Fonts `<link>` has to be on all 4 pages.
- **Table still has double lines:** add `border-collapse: collapse;` to the `table` rule.
- **Nav links are hard to read on the header:** change the nav link color so it stands out from the header background.
- **Still stuck:** ask a classmate, then ask Mr. McMaster.
