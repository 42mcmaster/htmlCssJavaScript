# Lesson 07 DIY: Make Your Website Responsive

Add this lesson's skills to the website you are already building in `DiyWebsite_Lastname`. This is the one graded item for Lesson 07. The walkthrough and `html07_Task.html` are practice.

You will add five things:

1. The viewport meta tag on **every page**
2. A **flexbox nav bar** in the header
3. A **flexbox gallery** on `gallery.html` (wrap and gap)
4. **Responsive images** (and video) that shrink to fit
5. A **media query** so the site works on a phone

Then you will save a bare page skeleton as **`template.html`**, and push.

All CSS goes in your one `styles.css` file. No `style` attributes and no `<style>` blocks in your pages.

---

## Where Everything Goes

Work in your `DiyWebsite_Lastname` folder at the top of your `htmlCssJavaScript` repo. When you are done, it should look like this:

```
htmlCssJavaScript/
└── DiyWebsite_Lastname/
    ├── index.html      <- viewport tag check
    ├── about.html      <- viewport tag check
    ├── contact.html    <- viewport tag check
    ├── gallery.html    <- viewport tag check + wrap the photos in <div class="gallery">
    ├── template.html   <- NEW: bare page skeleton (Part 6)
    ├── styles.css      <- most of today's work: nav, gallery, images, media query
    ├── images/
    └── media/
```

| File | What changes |
|---|---|
| All 4 pages | Viewport meta tag in the `<head>` |
| `gallery.html` | Put one `<div class="gallery">` around your `<figure>`s |
| `styles.css` | Flexbox header and nav, gallery layout, responsive images, media query |
| `template.html` | New file. Header, nav, empty main, footer. |

---

## Part 1: Viewport Meta Tag (every page)

Open each of your 4 pages. In the `<head>`, right under `<meta charset="UTF-8">`, make sure this line is there. Add it if it is missing:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it, a phone shows your site as a tiny zoomed-out desktop page, and your media query in Part 5 will not work.

---

## Part 2: Flexbox Nav Bar in the Header

Your header has your site name and your nav. Make them one bar: site name on the left, links on the right.

**Check your header HTML first.** Flexbox moves the header's **direct children**. You want exactly two: the site name and the nav. If your header has a site name **and** a tagline, wrap those two in a `<div>` so they count as one item:

```html
<header>
  <!-- Flex item 1: site name (and tagline, if you have one) -->
  <div>
    <h1>Your Site Name</h1>
    <p>Your tagline</p>
  </div>

  <!-- Flex item 2: the nav -->
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="gallery.html">Gallery</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>
```

Do the same on all 4 pages so every header matches.

Now add this to `styles.css`. Keep your own colors and fonts from Lessons 05 and 06.

```css
/* Header: site name on the left, nav on the right */
header {
  display: flex;
  justify-content: space-between;   /* push the two items to opposite ends */
  align-items: center;              /* line them up in the middle */
  padding: 1rem 2rem;
}

/* The nav links in a row with space between them */
header nav {
  display: flex;
  gap: 1rem;
}
```

Using `header nav` means this only changes the nav **in the header**. Your footer nav is left alone. (If you want the footer nav in a row too, add a `footer nav` rule the same way.)

---

## Part 3: Flexbox Gallery (gallery.html)

Right now your photos stack down the page. Make them sit side by side and wrap to a new row when they run out of room.

### 3a. Wrap the figures in one div

In `gallery.html`, put one `<div class="gallery">` around **all** your `<figure>`s. Leave the `<h2>` outside it, or it becomes a flex item too.

```html
<section id="photos">
  <h2>Photo Gallery</h2>

  <div class="gallery">
    <figure>
      <img src="images/latte.jpg" alt="Latte with a leaf drawn in the foam" width="400" height="300">
      <figcaption>Our house latte</figcaption>
    </figure>

    <!-- The rest of your figures, all inside the gallery div -->

  </div>
</section>
```

### 3b. Style it

```css
/* Gallery: photos in a row that wraps */
.gallery {
  display: flex;
  flex-wrap: wrap;   /* extra photos drop to the next row */
  gap: 1rem;         /* space between photos */
}

/* Each photo box grows to fill the row but never gets narrower than 15rem */
.gallery figure {
  flex: 1;
  min-width: 15rem;
  margin: 0;         /* figure has a built-in margin; gap does the spacing now */
}
```

You can add your card look from Lesson 06 (background, padding, border-radius, shadow, `:hover`) to `.gallery figure` too.

---

## Part 4: Responsive Images and Video

Your `<img>` tags have `width` and `height` attributes. On a phone, a 400px-wide photo can stick out past the edge of the screen. This rule fixes that for every image on the site:

```css
/* Every image shrinks to fit its box and keeps its shape */
img {
  max-width: 100%;   /* never wider than its box */
  height: auto;      /* keep the shape (no squishing) */
  display: block;    /* remove the small gap under the image */
}

/* Same idea for the promo video on the Home page */
video {
  max-width: 100%;
  height: auto;
}
```

---

## Part 5: Media Query for Phones

Add this at the **very bottom** of `styles.css`. It only runs when the screen is 768px wide or narrower.

```css
/* ===== Phones: 768px wide and narrower ===== */
@media (max-width: 768px) {

  /* Header: site name on top, nav underneath */
  header {
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Nav links: stack them (or use flex-wrap: wrap if they fit two to a row) */
  header nav {
    flex-direction: column;
    align-items: center;
  }

  /* Gallery: one photo per row */
  .gallery {
    flex-direction: column;
  }
}
```

**Test it in Live Preview.** Drag the line between your code and the Live Preview panel until the preview is about as narrow as a phone. You should see:

- The header change from one bar to site name on top, links underneath
- The gallery go to one photo per row
- No side-to-side scrolling on any page

Drag it wide again and everything should go back to rows.

If something doesn't change, open **Developer Tools** (the button in the Live Preview toolbar), select the element, and look in the **Styles** pane. When the preview is narrow, your `@media` rule should be listed. If it is missing or crossed out, check the media query.

If you can, open your published site on your own phone too.

You can change anything else inside the media query if it helps your site on a phone, like smaller heading sizes or less padding.

---

## Part 6: Save Your Page Template (template.html)

Save a copy of your bare page skeleton (header, nav, main, footer, linked stylesheet, viewport meta) as `template.html`. From now on, every new page you make all year starts by copying this file. That is what a page template **is**, and creating and editing one is a state competency (6.5.6).

1. Make a copy of `index.html` and rename it `template.html`.
2. Delete everything **inside** `<main>`. Leave a comment in its place.
3. Change the `<title>` to `Your Site Name - Page Title`.
4. Check that it still has the viewport tag, the `<link>` to `styles.css`, the header with the nav, and the footer.

It should look like this (with your own site name, tagline, and footer):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Site Name - Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div>
      <h1>Your Site Name</h1>
      <p>Your tagline</p>
    </div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <!-- Page content goes here -->
  </main>

  <footer>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.html">Contact</a>
    </nav>
    <p>&copy; 2026 Your Name</p>
  </footer>
</body>
</html>
```

Do **not** add `template.html` to your nav. It is a starting file for you, not a page for visitors.

---

## Part 7: Finish and Push

1. Open all 4 pages wide, then narrow. Check the header, nav, and gallery at both sizes.
2. Click every nav link on every page (header and footer).
3. Run each page through https://validator.w3.org/ and fix the errors.
4. In GitHub Desktop, write a summary like `html07 responsive site`, **Commit to main**, then **Push origin**.
5. Check on github.com that `styles.css` changed and `template.html` is in your `DiyWebsite_Lastname` folder.

---

## Checklist

**Every page**
- [ ] Viewport meta tag in the `<head>` of all 4 pages
- [ ] Header has two flex items: site name (block) and nav
- [ ] No `style` attributes or `<style>` blocks

**styles.css**
- [ ] `header` uses `display: flex`, `justify-content: space-between`, `align-items: center`
- [ ] `header nav` uses `display: flex` and `gap`
- [ ] `.gallery` uses `display: flex`, `flex-wrap: wrap`, and `gap`
- [ ] `.gallery figure` uses `flex: 1` and a `min-width`
- [ ] `img` has `max-width: 100%` and `height: auto`
- [ ] `@media (max-width: 768px)` at the bottom: header stacks, gallery goes to one column

**gallery.html**
- [ ] One `<div class="gallery">` around all the figures, `<h2>` outside it

**template.html**
- [ ] In the `DiyWebsite_Lastname` folder
- [ ] Viewport tag, stylesheet link, header with nav, empty main with a comment, footer

**Finish**
- [ ] Looks right wide and narrow, no side-to-side scrolling when narrow
- [ ] Every link works; all pages pass the validator
- [ ] Pushed with GitHub Desktop

---

## Grading

| Criteria | Looking for |
|---|---|
| **Viewport tag** | On all 4 pages |
| **Flexbox nav** | Header is one bar: site name on one side, nav links in a row with a gap on the other |
| **Flexbox gallery** | Photos sit side by side, wrap to new rows, and have even gaps |
| **Responsive images** | `max-width: 100%` and `height: auto`; no image or video sticks out past the screen when narrow |
| **Media query** | When the window is narrow, the header stacks and the gallery goes to one column |
| **Template** | `template.html` in the site folder with the full skeleton and an empty main |
| **Site still works** | All pages match, every link works, pages pass the validator, pushed to GitHub |

| Level | What it looks like |
|---|---|
| **Complete** | Everything on the checklist works, wide and narrow. |
| **Mostly there** | The nav, gallery, and media query work, but one or two small things are missing (a page without the viewport tag, no template, a nav that does not stack). |
| **Started** | Some flexbox is in place, but several parts are missing or the site does not change when the window is narrow. |
| **Missing** | No Lesson 07 changes pushed to the `DiyWebsite_Lastname` folder. |

---

## If something goes wrong

- **Nothing changed at all:** the page is not using `styles.css`. Check the `<link>` tag and the file name, and make sure you saved the CSS file.
- **The header title and tagline are side by side:** they are two separate flex items. Wrap them in one `<div>` (Part 2).
- **The gallery heading is squished next to the photos:** the `<h2>` is inside `<div class="gallery">`. Move it above the div.
- **Photos are all on one line and tiny:** you are missing `flex-wrap: wrap;` on `.gallery`.
- **Photos are different heights:** your images are different shapes. Use photos that are close to the same shape, or crop them to match.
- **The media query does nothing:** check that it is at the very bottom of `styles.css`, that the curly braces match (the `@media` block has its own `{ }` around the rules), and that the window is really narrower than 768px.
- **Media query works on the computer but not on a phone:** the page is missing the viewport tag.
- **The page scrolls sideways when narrow:** something is too wide. Usually it is an image or video without `max-width: 100%`, or your About page table. For the table, you can make the font smaller inside the media query.
- **Footer nav changed too:** you used `nav` instead of `header nav` in your CSS.
- **Pushed but GitHub shows old files:** you committed but did not click **Push origin** in GitHub Desktop.
