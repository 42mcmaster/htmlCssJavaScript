# Lesson 07 Walkthrough, Part 2: Responsive Design and Grid

In this walkthrough you make the page from Part 1 work on a phone, then try a simple CSS Grid layout.

Every step tells you **where** to type, **what** to add or change, and **what you should see**.

Do Part 1 (`html07_Walkthrough_Flexbox.md`) first.

## Table of Contents

1. [Set Up Your File](#1-set-up-your-file)
2. [The Viewport Tag](#2-the-viewport-tag)
3. [Responsive Images](#3-responsive-images)
4. [Add a Media Query](#4-add-a-media-query)
5. [Test Phone Size in a Chrome Guest Window](#5-test-phone-size-in-a-chrome-guest-window)
6. [CSS Grid: A Two-Column Layout](#6-css-grid-a-two-column-layout)
7. [Grid on a Phone](#7-grid-on-a-phone)
8. [Terms to Know for the Exam](#8-terms-to-know-for-the-exam)
9. [Check Your Finished CSS](#9-check-your-finished-css)
10. [Try This Answers](#10-try-this-answers)

---

## 1. Set Up Your File

1. In the `html07_flexboxResponsive` folder, make a new file named `html07_Responsive_lastname.html` (use your real last name).
2. Paste in this starter. It is the finished page from Part 1, with **two marker comments** that show where your new CSS goes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>html07 Responsive</title>
  <style>
    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

    main {
      max-width: 60rem;
      margin: 0 auto;
      padding: 1rem;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #2c3e50;
    }

    .logo {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links a {
      color: #fff;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
    }

    .cards {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
    }

    .card {
      flex: 1;
      background-color: #fff;
      padding: 1.5rem;
      border: 2px solid #2c3e50;
      border-radius: 8px;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .gallery img {
      flex: 1;
      min-width: 12rem;
    }

    /* ===== MARKER A: new rules go here (Steps 3 and 6) ===== */


    /* ===== MARKER B: media query goes here (Steps 4 and 7) ===== */

  </style>
</head>
<body>
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
    <h1>Responsive Practice</h1>

    <div class="cards">
      <div class="card"><h2>Fast</h2><p>Loads quickly on any device.</p></div>
      <div class="card"><h2>Clean</h2><p>Easy to read and easy to use.</p></div>
      <div class="card"><h2>Responsive</h2><p>Works on phones, tablets, and desktops.</p></div>
    </div>

    <div class="gallery">
      <img src="images/photo-1.png" alt="Sample photo 1">
      <img src="images/photo-2.png" alt="Sample photo 2">
      <img src="images/photo-3.png" alt="Sample photo 3">
      <img src="images/photo-4.png" alt="Sample photo 4">
      <img src="images/photo-5.png" alt="Sample photo 5">
      <img src="images/photo-6.png" alt="Sample photo 6">
    </div>

    <!-- ===== MARKER C: grid HTML goes here (Step 6) ===== -->

  </main>
</body>
</html>
```

3. Open the page in **Live Preview**. It should look like your finished Part 1 page.

[Back to top](#table-of-contents)

---

## 2. The Viewport Tag

**Responsive design** means one page that works on any screen size: phone, tablet, or desktop. A responsive website is one of the ways to present data to people (competency 2.7.2). The others are a mobile app, a desktop app, and a web application.

The first thing every responsive page needs is the **viewport tag**. It is already in your starter. Find this line in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Part | Meaning |
|---|---|
| `width=device-width` | Use the phone's real screen width |
| `initial-scale=1.0` | Start at normal zoom (100%) |

Without this tag, a phone pretends to be a desktop screen about 980px wide. The page shows up tiny and zoomed out, and your phone CSS never runs.

**Nothing to change in this step.** Just know that this tag goes in the `<head>` of **every** page you build.

[Back to top](#table-of-contents)

---

## 3. Responsive Images

A **responsive image** shrinks to fit its box instead of running off the side of the screen.

**Where:** under **MARKER A**.

**Add:**

```css
img {
  max-width: 100%;   /* never wider than the box it is in */
  height: auto;      /* keep the picture's shape (no stretching) */
  display: block;    /* remove the small gap under the image */
}
```

- `max-width: 100%` lets the image shrink on a small screen.
- `height: auto` keeps the image's **aspect ratio** (its width-to-height shape), so it does not get squished.
- `display: block` removes a thin gap that shows up under images.

**What you should see:** not much changes on this page, because the gallery already sizes the photos. This rule protects **every other image** on a site, like a large photo inside a card. Put it in every site you build.

[Back to top](#table-of-contents)

---

## 4. Add a Media Query

A **media query** is a block of CSS that only runs when the screen matches a condition. This one runs only when the screen is 768px wide or narrower (a phone).

**Where:** under **MARKER B**, at the very bottom of the `<style>` block.

**Add:**

```css
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

How to read it: "When the screen is **768px wide or less**, use these rules."

The rules inside the media query **replace** the normal rules for `.navbar` and `.cards`, but only on small screens. They win because they come **later** in the CSS. That is why the media query must stay at the **very bottom**. If a normal `.cards` rule sat below it, the normal rule would win and the phone layout would not change.

The width where the layout changes (768px here) is called a **breakpoint**.

| Screen | Width |
|---|---|
| Phone | up to about 767px |
| Tablet | 768px and up |
| Desktop | 1024px and up |

**What you should see:** nothing yet, because your preview is wider than 768px. Step 5 shows you how to test it.

[Back to top](#table-of-contents)

---

## 5. Test Phone Size in a Chrome Guest Window

The phone-size button in Live Preview's Developer Tools does not change the page size. Developer Tools are turned off in regular Chrome on school computers, but they work in a Chrome **Guest** window. You will open your Live Preview page there.

**Open the page in a Guest window**

1. Keep your page open in Live Preview in VS Code.
2. In the Live Preview address bar, copy the page address. It looks like `http://127.0.0.1:3000/index.html`.
3. Open Chrome. Click your profile picture at the top-right, then click **Guest**. A new Guest window opens.
4. Paste the address into the Guest window and press Enter. Your page appears.

**Turn on phone size**

5. Right-click the page and click **Inspect**. Developer Tools open.
6. Click the **device toolbar** button. It is the phone-and-tablet icon at the top-left of the Developer Tools panel.
7. A bar appears above the page. In the width box, type `375` (a phone width).

**What you should see at 375:**
- The logo is on top and the links are underneath it.
- The three cards are stacked.

8. Change the width to `1200`.

**What you should see at 1200:** the nav and cards go back to a row.

9. Try `768` and then `769`. At 768 the phone layout is on. At 769 it is off. That is the breakpoint.
10. Click the device toolbar button again to turn it off.

When you change your code and save, the Guest window should update. If it does not, click Chrome's refresh button.

Quick way without Developer Tools: drag the line between your code and the preview in VS Code to make the preview narrow.

**If the layout does not change:**
- Check that the media query is at the very bottom of the `<style>` block.
- Check for a missing `}`. The media query has its own `{ }` around all the rules inside it.

**Try This 1:** Change `768px` to `500px`. Test at width `600`. Is the phone layout on or off? Change it back to `768px`.

[Back to top](#table-of-contents)

---

## 6. CSS Grid: A Two-Column Layout

First, let's watch this on YouTube: [Watch the video](https://www.youtube.com/watch?v=eHaZlFcGl6k)

You only need to **recognize** CSS Grid in this course.

- **Flexbox** works in **one direction at a time** (a row or a column). It is **one-dimensional**.
- **CSS Grid** works in **rows and columns at the same time**. It is **two-dimensional**.

You will make a layout with a narrow sidebar on the left and a wide main area on the right.

**Step A. Where:** in the HTML, under **MARKER C** (after the gallery, before `</main>`).

**Add:**

```html
<div class="page-layout">
  <aside><h2>Sidebar</h2><p>15rem wide.</p></aside>
  <section><h2>Main Area</h2><p>Takes the rest of the space.</p></section>
</div>
```

**What you should see:** two plain headings and two lines of text under the gallery, stacked.

**Step B. Where:** in the CSS, under **MARKER A**, below your `img` rule. (Not under Marker B.)

**Add:**

```css
.page-layout {
  display: grid;                      /* turn on grid */
  grid-template-columns: 15rem 1fr;   /* first column is 15rem; 1fr fills the remaining space */
                                       /* 1fr 1fr = two equal columns */
                                       /* 1fr 2fr = two columns; second gets twice the space */
  gap: 1.5rem;                         /* space between columns and rows */
  margin-top: 1.5rem;                  /* add space above the grid */
}

/* Give both boxes a border so you can see the two columns */
.page-layout aside,
.page-layout section {
  background-color: #fff;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  padding: 1rem;
}

/* Make the sidebar a different color */
.page-layout aside {
  background-color: #dfe6ec;
}
```

**What you should see:** a narrow gray-blue box on the left (Sidebar) and a wide white box on the right (Main Area), side by side.

**Test it:** make the preview narrower and wider. The sidebar stays 15rem wide. The main area grows and shrinks.

### What the grid lines mean

- `display: grid` turns grid on.
- `grid-template-columns` lists the width of each column. `15rem 1fr` means two columns.
- `fr` means "a fraction of the leftover space." `1fr` here means "all the space that is left."
- `1fr 1fr 1fr` makes three equal columns. `repeat(3, 1fr)` is a short way to write the same thing.
- `gap` works the same as in flexbox.

**Try This 2:** Change `15rem 1fr` to `1fr 2fr`. Make the preview wider and narrower. What is different about the sidebar now? Change it back.

[Back to top](#table-of-contents)

---

## 7. Grid on a Phone

On a phone, a 15rem sidebar takes up most of the screen. Switch the grid to one column on small screens.

**Where:** inside the media query under **MARKER B**, below the `.cards` rule and above the media query's last `}`.

**Add:**

```css
  .page-layout {
    grid-template-columns: 1fr;   /* one column */
  }
```

Your whole media query should now look like this:

```css
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 0.5rem;
  }

  .cards {
    flex-direction: column;
  }

  .page-layout {
    grid-template-columns: 1fr;
  }
}
```

**What you should see:** test at width `375` (Step 5). The Sidebar box is on top and the Main Area box is under it, both full width. At `1200` they go back side by side.

[Back to top](#table-of-contents)

---

## 8. Terms to Know for the Exam

**Nothing to type in this step.** Read it.

### max-width vs. min-width

- `@media (max-width: 768px)` = **768px and narrower**. You build the desktop layout first, then fix it for phones. This is what we use in class.
- `@media (min-width: 768px)` = **768px and wider**. This is used for **mobile-first** design: build the phone layout first, then add media queries for bigger screens.

### Flexbox or Grid?

| | Flexbox | Grid |
|---|---|---|
| Directions | One (a row **or** a column) | Two (rows **and** columns) |
| Turn it on | `display: flex` | `display: grid` |
| Good for | Nav bars, card rows, galleries | Whole-page layouts (header, sidebar, main, footer) |
| Spacing | `gap` | `gap` |

Real sites use both: grid for the big page layout, flexbox for the parts inside it.

**Try This 3:** Write the media query line that targets screens 1024px and wider.

[Back to top](#table-of-contents)

---

## 9. Check Your Finished CSS

The bottom of your `<style>` block, from Marker A down, should look like this:

```css
    /* ===== MARKER A: new rules go here (Steps 3 and 6) ===== */
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .page-layout {
      display: grid;
      grid-template-columns: 15rem 1fr;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .page-layout aside,
    .page-layout section {
      background-color: #fff;
      border: 2px solid #2c3e50;
      border-radius: 8px;
      padding: 1rem;
    }

    .page-layout aside {
      background-color: #dfe6ec;
    }

    /* ===== MARKER B: media query goes here (Steps 4 and 7) ===== */
    /* Keep the media query at the very bottom, right above </style> */
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 0.5rem;
      }

      .cards {
        flex-direction: column;
      }

      .page-layout {
        grid-template-columns: 1fr;
      }
    }

  </style>
```

### Summary

1. Every page needs the viewport tag in the `<head>`.
2. Every image: `max-width: 100%; height: auto;`
3. `@media (max-width: 768px) { ... }` changes the layout on phones. Keep it at the bottom of the CSS.
4. Test phone sizes with the device toolbar in a Chrome Guest window (copy the Live Preview address, right-click > Inspect).
5. Grid is two-dimensional: `display: grid`, `grid-template-columns`, `gap`.
6. `fr` = a fraction of the leftover space.

[Back to top](#table-of-contents)

---

## 10. Try This Answers

1. Off. 600 is wider than 500, so the media query does not run.
2. The sidebar is no longer a fixed width. It is always one third of the space, so it grows and shrinks with the window.
3. `@media (min-width: 1024px) { ... }`

[Back to top](#table-of-contents)
