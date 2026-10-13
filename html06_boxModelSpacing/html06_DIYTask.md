# Lesson 06 DIY: Spacing and Layout for Your Website

Add spacing and layout to the website you have been building since Lesson 03. This is the one graded item for Lesson 06. The walkthrough and `html06_Task.html` are practice.

Starting this lesson, your website gets a **permanent home**: one folder named `DiyWebsite_Lastname` in your `htmlCssJavaScript` repo. Every DIY from now on changes the files in this folder.

All CSS goes in `styles.css`. No `style` attributes and no `<style>` blocks in your pages.

---

## Table of Contents

- [Where Everything Goes](#where-everything-goes)
- [Part 0: Set up your DIY website folder](#part-0-set-up-your-diy-website-folder)
- [Part 1: Box-sizing and the X-ray trick](#part-1-box-sizing-and-the-x-ray-trick)
- [Part 2: Center the page and add spacing](#part-2-center-the-page-and-add-spacing)
- [Part 3: Nav buttons with a hover effect](#part-3-nav-buttons-with-a-hover-effect)
- [Part 4: Sticky header](#part-4-sticky-header)
- [Part 5: Gallery cards](#part-5-gallery-cards)
- [Part 6: Finish and push](#part-6-finish-and-push)
- [Checklist](#checklist)
- [Grading](#grading)
- [If something goes wrong](#if-something-goes-wrong)

---

## Where Everything Goes

When you are done with Part 0, your repo should look like this (with your own last name):

```
htmlCssJavaScript/                 <- your GitHub repo
├── DiyWebsite_Smith/              <- NEW: your website lives here from now on
│   ├── index.html                 <- Home (promo video)
│   ├── about.html                 <- About (comparison table)
│   ├── gallery.html               <- Gallery (photos)
│   ├── contact.html               <- Contact
│   ├── styles.css                 <- ONE stylesheet for every page
│   ├── images/                    <- your photos
│   └── media/                     <- promo-lastname.mp4
├── html04 ... (your old lesson folders stay where they are)
└── html05 ...
```

| File | What changes in this lesson |
|---|---|
| `styles.css` | All of the new CSS from Parts 1 to 5 |
| All 4 pages | Must have `<link rel="stylesheet" href="styles.css">` in the `<head>` |
| `gallery.html` | Nothing, unless a figure is missing its `<figure>` tags. The cards are all CSS. |

---

## Part 0: Set up your DIY website folder

Do this once. Take it slow and check each step.

1. Open **GitHub Desktop**. Make sure the current repository (top left) is `htmlCssJavaScript`.
2. Click **Repository > Show in Finder** (on Windows: **Show in Explorer**). Your repo folder opens.
3. Make a new folder there (Mac: **File > New Folder**; Windows: right-click > **New > Folder**). Name it `DiyWebsite_` plus your last name, with a capital D, W, and first letter of your last name. Example: `DiyWebsite_Smith`. No spaces.
4. Open the folder where your website is (the one with `index.html`, `gallery.html`, `styles.css`, `images`, and `media`).
5. Select everything for the site: all 4 pages, `styles.css`, the `images` folder, and the `media` folder. Copy them (Cmd+C on a Mac, Ctrl+C on Windows).
6. Open your new `DiyWebsite_Lastname` folder and paste (Cmd+V or Ctrl+V).
7. **Copy, don't move.** Your old lesson folders stay as they are.
8. Quick check: open each of the 4 pages in VS Code and make sure this line is inside `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

9. Open each page in the browser. Every page should use your Lesson 05 colors and fonts. Photos and the video should still show.
10. In GitHub Desktop, type a summary like `Set up DiyWebsite folder`, click **Commit to main**, then **Push origin**.

From now on, when a lesson says "your website," it means the files in `DiyWebsite_Lastname`.

---

## Part 1: Box-sizing and the X-ray trick

At the **very top** of `styles.css`, add:

```css
/* X-RAY: shows every box while I work. Remove before turning in. */
* { outline: 1px solid red; }

/* Width and height include padding and border */
* {
  box-sizing: border-box;
}
```

Keep the X-ray line while you work on Parts 2 to 5. It shows you where each box starts and ends.

---

## Part 2: Center the page and add spacing

Use `rem` for padding and margin. Use `px` for borders.

1. **Remove the page edge gap** so your header and footer reach the sides:

```css
body {
  margin: 0;
  /* keep your Lesson 05 font and color lines here */
}
```

2. **Center the main content** with a max-width and `margin: 0 auto`:

```css
/* Keep the main area from stretching too wide, and center it */
main {
  max-width: 60rem;
  margin: 0 auto;      /* auto left and right = centered */
  padding: 2rem;
}
```

3. **Give the header and footer padding** so the text is not touching the edges:

```css
header, footer {
  padding: 1rem 2rem;  /* 1rem top/bottom, 2rem left/right */
}
```

4. **Space out your sections** so they don't run together:

```css
section {
  margin-bottom: 2rem;
}
```

5. **Give your table cells padding** on `about.html` (the table from Lesson 04):

```css
th, td {
  padding: 0.5rem 1rem;
}
```

You may change any number to fit your design. The goal is a page that is easy to read and not crowded.

---

## Part 3: Nav buttons with a hover effect

Make every nav link look like a button. Then add a hover effect. This is required: it covers the "hover effect" competency.

```css
/* Links are inline. inline-block lets padding work on all sides. */
nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  text-decoration: none;
  border-radius: 4px;
  /* pick a background-color and color that match your site */
}

/* Only while the mouse is on the link */
nav a:hover {
  /* change the background-color (and/or color) so it clearly changes */
}
```

Check the nav in the header **and** the footer on all 4 pages. Every link should look like a button and change on hover.

---

## Part 4: Sticky header

Make your header stay at the top of the window while the page scrolls.

```css
header {
  position: sticky;
  top: 0;              /* stick at the top edge */
  z-index: 10;         /* stay above the content under it */
  /* your header MUST have a background-color, or content shows through */
}
```

Test on your longest page (usually `index.html` or `gallery.html`). Scroll down. The header should stay at the top and nothing should show through it.

---

## Part 5: Gallery cards

On `gallery.html`, each photo is a `<figure>` with an `<img>` and a `<figcaption>`. Turn each figure into a card and put them side by side.

```css
/* Each gallery figure becomes a card */
figure {
  display: inline-block;     /* side by side */
  vertical-align: top;       /* line up the tops */
  width: 18rem;
  padding: 1rem;             /* space inside the card */
  margin: 1rem;              /* space between cards */
  border: 1px solid #cccccc;
  border-radius: 8px;
  background-color: white;
}

/* Keep each photo inside its card */
figure img {
  max-width: 100%;
  height: auto;
}

/* A hover effect on the cards */
figure:hover {
  /* change the border-color or background-color */
}
```

Pick your own colors and sizes. Check a phone width with the **device toolbar** in Live Preview's Developer Tools (the phone-and-tablet icon) and make sure the cards wrap to the next row instead of running off the page.

---

## Part 6: Finish and push

1. **Remove the X-ray line** from the top of `styles.css` (delete it or turn it into a comment).
2. Open all 4 pages. Click every nav link in the header and footer.
3. Scroll each page. The header stays at the top.
4. Hover over the nav buttons and the gallery cards. They change.
5. Run each page through https://validator.w3.org/ and fix the errors.
6. Check your CSS at https://jigsaw.w3.org/css-validator/ (choose **By file upload** and pick `styles.css`).
7. In GitHub Desktop, write a summary like `Lesson 06 spacing and layout`, click **Commit to main**, then **Push origin**.
8. On github.com, open your repo and check that the `DiyWebsite_Lastname` folder is there with all 4 pages, `styles.css`, `images`, and `media`.

---

## Checklist

**Part 0: DIY website folder**
- [ ] Folder named `DiyWebsite_Lastname` at the top of the `htmlCssJavaScript` repo
- [ ] All 4 pages, `styles.css`, `images`, and `media` are inside it
- [ ] Every page links `styles.css`
- [ ] Photos and video still work from the new folder

**CSS in styles.css**
- [ ] `* { box-sizing: border-box; }`
- [ ] `body` margin removed; `main` centered with `max-width` and `margin: 0 auto`
- [ ] Padding on header, footer, and main; margin between sections
- [ ] Padding on table cells
- [ ] Nav links use `display: inline-block` with padding
- [ ] `nav a:hover` changes how the links look
- [ ] Sticky header with `top: 0`, `z-index`, and a background color
- [ ] Gallery figures are side-by-side cards with padding, border, margin, and a hover effect
- [ ] `rem` for spacing, `px` for borders
- [ ] X-ray line removed

**Finish**
- [ ] No `style` attributes or `<style>` blocks in any page
- [ ] All 4 pages pass the HTML validator
- [ ] Every link works
- [ ] Committed and pushed with GitHub Desktop

---

## Grading

| Criteria | Looking for |
|---|---|
| **DIY folder set up** | `DiyWebsite_Lastname` in the repo with all pages, `styles.css`, `images`, `media`; every page linked to `styles.css` |
| **Box model spacing** | `border-box`; centered `main`; padding and margin used so the pages are easy to read |
| **Display** | Nav links as `inline-block` buttons; gallery figures side by side as cards |
| **Hover** | Hover effect on the nav links and on the gallery cards |
| **Position** | Sticky header that stays on top with a solid background |
| **Clean and working** | All CSS in `styles.css`, X-ray removed, pages pass the validator, every link works, pushed |

**How it is graded:**

- **Complete:** every part is done and the site looks clean and readable. A few small things may be missing.
- **Mostly done:** the folder is set up and most parts work, but several things are missing or broken.
- **Started:** the folder is set up or some CSS is added, but most parts are missing.
- **Missing:** nothing pushed in `DiyWebsite_Lastname`.

---

## If something goes wrong

- **No styles on a page:** that page is missing `<link rel="stylesheet" href="styles.css">`, or `styles.css` is not in the same folder as the page.
- **Photos or video broken after copying:** the `images` or `media` folder did not get copied into `DiyWebsite_Lastname`, or a file name does not match exactly (capital letters count).
- **Page is wider than the window:** check for a missing `box-sizing: border-box`, or a photo without `max-width: 100%`.
- **Main area won't center:** it needs both `max-width` and `margin: 0 auto`.
- **Padding on nav links does nothing up and down:** add `display: inline-block;` to `nav a`.
- **Header scrolls away:** add `top: 0;` to the header rule. Also check that no other `header` rule later in the file sets `position` back.
- **Content shows through the header:** give the header a `background-color`.
- **Gallery cards stack instead of sitting side by side:** check `display: inline-block;` on `figure`, and that each card's width fits in the window.
- **Can't find where extra space comes from:** turn the X-ray line back on and look at the red lines. Or open **Developer Tools** in Live Preview, select the element, and look at the colors and the box model diagram (Computed tab).
- **Folder missing on github.com:** you committed but did not click **Push origin**, or the folder is empty. GitHub does not show empty folders.
