# Lesson 07 Walkthrough: Flexbox and Responsive Design

In this walkthrough you build one small page, step by step. By the end it has a flexbox nav bar, a row of cards, a photo gallery that wraps, a media query that makes it work on a phone, and a short look at CSS Grid.

Everything here is graded in the practice task (`html07_Task.html`) and in the DIY task, where you add these skills to your own website.

## Table of Contents

1. [Before You Start](#1-before-you-start)
2. [What Flexbox Is](#2-what-flexbox-is)
3. [flex-direction: Row or Column](#3-flex-direction-row-or-column)
4. [justify-content: Spacing Along the Row](#4-justify-content-spacing-along-the-row)
5. [align-items: Lining Up Top to Bottom](#5-align-items-lining-up-top-to-bottom)
6. [gap: Space Between Items](#6-gap-space-between-items)
7. [Build a Flexbox Nav Bar](#7-build-a-flexbox-nav-bar)
8. [flex: 1 for Equal-Width Cards](#8-flex-1-for-equal-width-cards)
9. [flex-wrap: A Gallery That Wraps](#9-flex-wrap-a-gallery-that-wraps)
10. [Responsive Images](#10-responsive-images)
11. [The Viewport Meta Tag](#11-the-viewport-meta-tag)
12. [Media Queries](#12-media-queries)
13. [Testing Phone Size](#13-testing-phone-size)
14. [CSS Grid: The Basics](#14-css-grid-the-basics)
15. [Flexbox or Grid?](#15-flexbox-or-grid)
16. [Try This Answers](#16-try-this-answers)

---

## 1. Before You Start

1. In your `htmlCssJavaScript` repo, open the `html07_flexboxResponsive` folder.
2. Make a new file named `html07_Walkthrough_lastname.html` (use your real last name).
3. The photos for this lesson are in the `images` folder inside `html07_flexboxResponsive` on GitHub:
   https://github.com/42mcmaster/htmlCssJavaScript/tree/main/html07_flexboxResponsive/images
   If they are not already in your repo, download them into a folder named `images` next to your file.
4. Paste in this starter. You will add CSS inside the `<style>` block as you go.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Viewport tag: explained in Step 11 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>html07 Walkthrough</title>
  <style>
    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

    main {
      max-width: 60rem;   /* page stops growing at 960px */
      margin: 0 auto;     /* center it */
      padding: 1rem;
    }

    /* Your walkthrough CSS goes below this line */

  </style>
</head>
<body>
  <!-- Nav bar: two flex items (the logo and the links group) -->
  <nav class="navbar">
    <div class="logo">My Site</div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <main>
    <h1>Flexbox Practice</h1>

    <!-- Three cards: will sit in a row -->
    <div class="cards">
      <div class="card"><h2>Fast</h2><p>Loads quickly on any device.</p></div>
      <div class="card"><h2>Clean</h2><p>Easy to read and easy to use.</p></div>
      <div class="card"><h2>Responsive</h2><p>Works on phones, tablets, and desktops.</p></div>
    </div>

    <!-- Six photos: will wrap onto more than one row -->
    <div class="gallery">
      <img src="images/photo-1.png" alt="Sample photo 1">
      <img src="images/photo-2.png" alt="Sample photo 2">
      <img src="images/photo-3.png" alt="Sample photo 3">
      <img src="images/photo-4.png" alt="Sample photo 4">
      <img src="images/photo-5.png" alt="Sample photo 5">
      <img src="images/photo-6.png" alt="Sample photo 6">
    </div>
  </main>
</body>
</html>
```

Open the file in the browser. Right now everything stacks down the page. That is normal flow: block elements go top to bottom.

**Where to put your CSS:** In Steps 2 through 11, add each new CSS rule at the end of the `<style>` block, below the comment `/* Your walkthrough CSS goes below this line */` and above `</style>`. If a step changes a rule you already have (like `.cards`), edit that rule instead of making a second copy. Step 12 adds a media query, and after that the placement changes. Step 12 explains how.

[Back to top](#table-of-contents)

---

## 2. What Flexbox Is

**Flexbox** is a CSS layout tool for putting things in a **row** or a **column**, and lining them up.

- The **flex container** is the parent. You put `display: flex;` on it.
- The **flex items** are its direct children. They are the things that move.
- Flexbox works in **one direction at a time** (a row or a column). That is why it is called **one-dimensional**.

```css
/* The parent becomes a flex container.
   Its children (the flex items) now sit side by side in a row. */
.cards {
  display: flex;
}
```

Two words you will see:

| Word | Meaning (for a row) |
|---|---|
| **Main axis** | The direction the items flow. For a row, left to right. |
| **Cross axis** | The other direction. For a row, top to bottom. |

**Try This 1:** Add the `.cards` rule above to your `<style>` block (below the "Your walkthrough CSS" comment) and refresh. What happened to the three cards?

[Back to top](#table-of-contents)

---

## 3. flex-direction: Row or Column

`flex-direction` sets which way the items flow.

| Value | What it does |
|---|---|
| `row` | Left to right. **This is the default.** |
| `column` | Top to bottom (stacked) |
| `row-reverse` | Right to left |
| `column-reverse` | Bottom to top |

Add the `flex-direction` line to the `.cards` rule you already have:

```css
.cards {
  display: flex;
  flex-direction: column;   /* stack the cards */
}
```

Try `column`, look at the page, then change it back to `row` (or delete the line, since `row` is the default).

[Back to top](#table-of-contents)

---

## 4. justify-content: Spacing Along the Row

`justify-content` spreads items out along the **main axis** (left to right in a row).

| Value | What it does |
|---|---|
| `flex-start` | Items bunch up at the start (default) |
| `center` | Items bunch up in the middle |
| `flex-end` | Items bunch up at the end |
| `space-between` | First item at the start, last at the end, even space between |
| `space-around` | Even space around each item |
| `space-evenly` | Exactly equal space everywhere |

`space-between` is the one you will use most. It is how a nav bar puts the logo on the left and the links on the right. You will use it in Step 7.

[Back to top](#table-of-contents)

---

## 5. align-items: Lining Up Top to Bottom

`align-items` lines items up on the **cross axis** (top to bottom in a row).

| Value | What it does |
|---|---|
| `stretch` | Items stretch to the same height (default) |
| `center` | Items are centered top to bottom |
| `flex-start` | Items line up at the top |
| `flex-end` | Items line up at the bottom |

Easy way to remember: **justify-content = along the row. align-items = across the row.**

A common trick is centering something both ways. You do not need to add this to your page. It is here so you know the pattern:

```css
.center-box {
  display: flex;
  justify-content: center;   /* center left to right */
  align-items: center;       /* center top to bottom */
  height: 10rem;
}
```

[Back to top](#table-of-contents)

---

## 6. gap: Space Between Items

`gap` puts space **between** flex items, but not on the outside edges. It is cleaner than adding margins to every item.

Add the `gap` line to your `.cards` rule:

```css
.cards {
  display: flex;
  gap: 1.5rem;   /* 1.5rem of space between each card */
}
```

Use `rem` for spacing, the same as in Lesson 05. `1rem` is the page's base font size (usually 16px).

[Back to top](#table-of-contents)

---

## 7. Build a Flexbox Nav Bar

The nav has two flex items: the `.logo` and the `.nav-links` group. The links group is also a flex container, so the links sit in a row with a gap.

Add these four rules at the end of your `<style>` block:

```css
/* The whole bar: logo on the left, links on the right */
.navbar {
  display: flex;
  justify-content: space-between;   /* push the two items to opposite ends */
  align-items: center;              /* line them up in the middle */
  padding: 1rem 2rem;
  background-color: #2c3e50;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

/* The links group is ALSO a flex container */
.nav-links {
  display: flex;
  gap: 1rem;   /* space between the links */
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}
```

**Try This 2:** Change `space-between` to `center`. What happens to the logo and links? Change it back.

[Back to top](#table-of-contents)

---

## 8. flex: 1 for Equal-Width Cards

By default, a flex item is only as wide as its content. `flex: 1` tells each item to **grow** and take an equal share of the empty space. Give it to every card and they all come out the same width.

Your `.cards` rule should now match the one below. Then add the new `.card` rule (no "s") under it:

```css
.cards {
  display: flex;
  gap: 1.5rem;
}

.card {
  flex: 1;   /* every card grows by the same amount = equal widths */
  background-color: #fff;
  padding: 1.5rem;
  border: 2px solid #2c3e50;
  border-radius: 8px;
}
```

`flex: 1` is short for `flex-grow: 1`. If one card had `flex: 2`, it would grow twice as much as the others.

[Back to top](#table-of-contents)

---

## 9. flex-wrap: A Gallery That Wraps

By default, flexbox squeezes **every** item onto one line, even if they get tiny. `flex-wrap: wrap` lets items move to a new line when the row is full.

Add these two rules at the end of your `<style>` block:

```css
.gallery {
  display: flex;
  flex-wrap: wrap;   /* extra items move to the next line */
  gap: 1rem;
}

.gallery img {
  flex: 1;             /* grow to fill the row */
  min-width: 12rem;    /* but never get skinnier than 12rem, so they wrap instead */
}
```

**Try This 3:** Delete the `flex-wrap: wrap;` line and refresh. What happens to the photos? Put it back.

The `flex: 1` + `min-width` pair is a simple way to build a gallery: photos fill the row, and when the window gets narrow they drop to the next line on their own.

[Back to top](#table-of-contents)

---

## 10. Responsive Images

A **responsive image** shrinks to fit its box instead of spilling off the side of the screen. Put this rule in every site you build.

Add it at the end of your `<style>` block:

```css
img {
  max-width: 100%;   /* never wider than the box it is in */
  height: auto;      /* keep the picture's shape (no stretching) */
  display: block;    /* remove the small gap under the image */
}
```

- `max-width: 100%` lets the image shrink on a small screen but never grow past its real size.
- `height: auto` keeps the **aspect ratio** (the width-to-height shape). Without it, an image with a `height` attribute gets squished.
- `display: block` removes the thin gap images leave under them because they are normally inline.

**Try This 4:** Why do we need `height: auto`?

[Back to top](#table-of-contents)

---

## 11. The Viewport Meta Tag

Phones pretend to be about 980px wide unless the page tells them otherwise. The page shows up tiny and zoomed out, and your media queries never kick in.

This tag goes in the `<head>` of **every** page. Your starter already has it:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Part | Meaning |
|---|---|
| `width=device-width` | Use the phone's real screen width |
| `initial-scale=1.0` | Start at normal zoom (100%) |

**Try This 5:** What happens on a phone if a page does not have this tag?

[Back to top](#table-of-contents)

---

## 12. Media Queries

**Responsive design** means one page that works on any screen size. The tool for it is the **media query**: a block of CSS that only runs when the screen matches a condition.

A responsive website is one of the ways to present data to people (competency 2.7.2). The others are a mobile app, a desktop app, and a web application.

Add this at the **very bottom** of your `<style>` block, just above `</style>`:

```css
/* ===== Media queries: keep this block at the very bottom ===== */

/* Only runs when the window is 768px wide or narrower (phones) */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;   /* logo on top, links underneath */
    gap: 0.5rem;
  }

  .cards {
    flex-direction: column;   /* cards stack */
  }
}
```

How to read it: "When the screen is **at most** 768px wide, use these rules." The rules inside **override** the normal ones because they come later in the stylesheet.

**Important:** This only works if the media query comes **after** the normal rules. From now on:

- New normal CSS rules go **above** the `@media` block.
- New phone rules go **inside** the `@media` block.
- The `@media` block always stays last, right above `</style>`.

If a normal rule ends up below the media query, it wins, and your phone layout will not change.

The width where the layout changes is called a **breakpoint**. Common breakpoints:

| Screen | Width |
|---|---|
| Phone | up to about 767px |
| Tablet | 768px and up |
| Desktop | 1024px and up |

### max-width vs. min-width

- `@media (max-width: 768px)` means **768px and narrower**. You write the desktop layout first, then fix it for phones. This is what we use in class.
- `@media (min-width: 768px)` means **768px and wider**. This is used for **mobile-first** design: write the phone layout as the normal CSS, then add media queries for bigger screens. Many professional sites work this way. Know the term for the exam.

This example is just to read. Do not add it to your page:

```css
/* Mobile-first example: one column by default... */
.cards { display: flex; flex-direction: column; gap: 1rem; }

/* ...and a row once the screen is at least 768px wide */
@media (min-width: 768px) {
  .cards { flex-direction: row; }
}
```

**Try This 6:** Write the media query line that targets screens 1024px and wider.

[Back to top](#table-of-contents)

---

## 13. Testing Phone Size

Test phone size in **Live Preview** in VS Code. (Developer Tools in Chrome are turned off on school computers, but the ones in Live Preview work.)

1. Open the page with **Live Preview**.
2. Click the **Developer Tools** button in the preview's toolbar.
3. Click the **device toolbar** button. It is the phone-and-tablet icon at the top-left of the Developer Tools panel, next to the select element arrow.
4. A bar appears above the page. Click the menu that says **Responsive** and pick a phone, or type a width like `375` in the width box.
5. Watch the nav and cards stack. Any width of 768px or less uses your media query.
6. Type a wide width like `1200`. The nav and cards go back to a row.
7. Click the device toolbar button again to turn it off.

You can also drag the line between your code and the preview to make the preview narrow.

**Check the media query with the Styles pane:**

1. With the page at phone width, click the **select element** button (the arrow-in-a-box icon), then click the nav bar.
2. Look in the **Styles** pane. At phone width, the rule from inside `@media (max-width: 768px)` shows at the top. At a wide width, that rule is gone.

If the layout doesn't change, the Styles pane tells you why: the rule is missing, crossed out, or has a typo. A crossed-out media query rule usually means a normal rule is sitting below the `@media` block (see Step 12).

If you can, also open your published page on your own phone.

[Back to top](#table-of-contents)

---

## 14. CSS Grid: The Basics

You only need to **recognize** CSS Grid in this course. Know what it is and what the basic lines do.

**CSS Grid** is a layout tool for **rows AND columns at the same time**. That makes it **two-dimensional**. Flexbox does one direction at a time.

### Step A: Add the HTML

Add this inside `<main>`, right after the gallery's closing `</div>` and right before `</main>`:

```html
<!-- Two grid items: the sidebar and the main area -->
<div class="page-layout">
  <aside><h2>Sidebar</h2><p>15rem wide.</p></aside>
  <section><h2>Main Area</h2><p>Takes the rest of the space.</p></section>
</div>
```

The bottom of your `<body>` should now look like this:

```html
    <!-- Six photos: will wrap onto more than one row -->
    <div class="gallery">
      ...six img tags...
    </div>

    <!-- Two grid items: the sidebar and the main area -->
    <div class="page-layout">
      <aside><h2>Sidebar</h2><p>15rem wide.</p></aside>
      <section><h2>Main Area</h2><p>Takes the rest of the space.</p></section>
    </div>
  </main>
</body>
</html>
```

### Step B: Add the grid CSS

Add these rules in your `<style>` block **above** the `@media` block (not below it):

```css
/* A page with a 15rem sidebar and a main area that takes the rest */
.page-layout {
  display: grid;                        /* turn on grid */
  grid-template-columns: 15rem 1fr;     /* two columns: 15rem, then the rest */
  gap: 1.5rem;                          /* same gap idea as flexbox */
  margin-top: 1.5rem;                   /* space between the gallery and the grid */
}

/* Give both grid items a box so you can see the two columns */
.page-layout aside,
.page-layout section {
  background-color: #fff;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  padding: 1rem;
}

/* A different color so the sidebar stands out */
.page-layout aside {
  background-color: #dfe6ec;
}
```

Without the second and third rules, the grid still works, but the two columns are just plain text and it is hard to tell anything changed. The borders and colors make the columns visible.

**What you should see:** a narrow gray-blue box on the left (the sidebar) and a wide white box on the right (the main area), side by side.

Now make the preview narrower. The sidebar stays 15rem wide. The main area shrinks. That is what `1fr` does: it takes whatever space is left over.

### What each line does

- `display: grid` turns it on.
- `grid-template-columns` lists the width of each column.
- `fr` means "a fraction of the leftover space." `1fr 1fr 1fr` makes three equal columns. `1fr 2fr` makes the second column twice as wide as the first.
- `repeat(3, 1fr)` is a short way to write `1fr 1fr 1fr`.
- `gap` works the same as in flexbox.

### Step C: One column on phones

Grid works with media queries too. On a phone, a 15rem sidebar takes up most of the screen, so switch to one column.

Add the `.page-layout` rule **inside** your existing `@media (max-width: 768px)` block, below the `.cards` rule. Do not make a second `@media` block. Your whole media query should now look like this:

```css
/* ===== Media queries: keep this block at the very bottom ===== */

/* Only runs when the window is 768px wide or narrower (phones) */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;   /* logo on top, links underneath */
    gap: 0.5rem;
  }

  .cards {
    flex-direction: column;   /* cards stack */
  }

  .page-layout {
    grid-template-columns: 1fr;   /* one column: sidebar on top, main area below */
  }
}
```

Test it at phone width (Step 13). The sidebar box should move on top of the main area box, and both should be full width.

**Try This 7:** What does `grid-template-columns: repeat(3, 1fr)` make?

**Try This 8:** Change `15rem 1fr` to `1fr 2fr` and make the preview wider and narrower. What is different about the sidebar now? Change it back.

[Back to top](#table-of-contents)

---

## 15. Flexbox or Grid?

| | Flexbox | Grid |
|---|---|---|
| Directions | One (a row **or** a column) | Two (rows **and** columns) |
| Turn it on | `display: flex` | `display: grid` |
| Good for | Nav bars, card rows, galleries, lining things up | Whole-page layouts (header, sidebar, main, footer) |
| Spacing | `gap` | `gap` |

Real sites use both: grid for the big page layout, flexbox for the parts inside it. In this class, flexbox is the one you build with. Grid you need to recognize.

### Summary

1. `display: flex` on the parent puts the children in a row.
2. `flex-direction` picks row or column.
3. `justify-content` spaces items along the row. `align-items` lines them up across it.
4. `gap` adds space between items.
5. `flex: 1` makes items grow to equal widths.
6. `flex-wrap: wrap` lets items drop to the next line.
7. Every image: `max-width: 100%; height: auto;`
8. Every page: the viewport meta tag.
9. `@media (max-width: 768px) { ... }` changes the layout for phones. Keep it at the bottom of the CSS. `min-width` is used for mobile-first.
10. Grid = two-dimensional: `display: grid`, `grid-template-columns`, `gap`.

[Back to top](#table-of-contents)

---

## 16. Try This Answers

1. They moved into a row, side by side.
2. The logo and links bunch up together in the middle of the bar.
3. All six photos squeeze onto one line and get very narrow.
4. To keep the image's shape (aspect ratio) when its width changes, so it does not stretch or squish.
5. The phone shows the page zoomed out like a tiny desktop page, and media queries for phones do not run.
6. `@media (min-width: 1024px) { ... }`
7. Three columns of equal width.
8. The sidebar is no longer a fixed width. It is always one third of the space (and the main area is two thirds), so the sidebar grows and shrinks with the window.

[Back to top](#table-of-contents)
