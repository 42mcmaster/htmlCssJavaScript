# Lesson 07 Walkthrough, Part 1: Flexbox

In this walkthrough you build a small page with **flexbox**: a nav bar, a row of cards, and a photo gallery that wraps.

Every step tells you **where** to type, **what** to add or change, and **what you should see**.

Part 2 (`html07_Walkthrough_Responsive.md`) covers media queries, phone testing, and CSS Grid.

## Table of Contents

1. [Set Up Your File](#1-set-up-your-file)
2. [Turn On Flexbox in the Nav Bar](#2-turn-on-flexbox-in-the-nav-bar)
3. [justify-content: Spread Items Left to Right](#3-justify-content-spread-items-left-to-right)
4. [align-items: Line Items Up Top to Bottom](#4-align-items-line-items-up-top-to-bottom)
5. [gap: Space Between the Links](#5-gap-space-between-the-links)
6. [flex-direction: Row or Column](#6-flex-direction-row-or-column)
7. [flex: 1 for Equal-Width Cards](#7-flex-1-for-equal-width-cards)
8. [flex-wrap: A Gallery That Wraps](#8-flex-wrap-a-gallery-that-wraps)
9. [Check Your Finished CSS](#9-check-your-finished-css)
10. [Try This Answers](#10-try-this-answers)

---

## 1. Set Up Your File

1. In your `htmlCssJavaScript` repo, open the `html07_flexboxResponsive` folder.
2. Make a new file named `html07_Flexbox_lastname.html` (use your real last name).
3. The photos for this lesson are in the `images` folder on GitHub:
   https://github.com/42mcmaster/htmlCssJavaScript/tree/main/html07_flexboxResponsive/images
   If they are not already in your repo, download them into a folder named `images` next to your file.
4. Paste in this starter:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>html07 Flexbox</title>
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

    /* ===== Your CSS goes below this line ===== */

  </style>
</head>
<body>
  <!-- Nav bar: two items (the logo and the links group) -->
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

    <!-- Three cards -->
    <div class="cards">
      <div class="card"><h2>Fast</h2><p>Loads quickly on any device.</p></div>
      <div class="card"><h2>Clean</h2><p>Easy to read and easy to use.</p></div>
      <div class="card"><h2>Responsive</h2><p>Works on phones, tablets, and desktops.</p></div>
    </div>

    <!-- Six photos -->
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

5. Open the page in **Live Preview**.

**What you should see:** everything stacked down the page, one thing under another. The logo is above the links. The cards are stacked. That is normal: block elements go top to bottom.

**You will not change the HTML in this walkthrough.** Every step adds or changes CSS below the line `/* ===== Your CSS goes below this line ===== */`.

[Back to top](#table-of-contents)

---

## 2. Turn On Flexbox in the Nav Bar

**Flexbox** is a CSS tool for putting things in a **row** (or a column) and lining them up.

- The **flex container** is the parent. You give it `display: flex;`.
- The **flex items** are the parent's direct children. They are the things that move.

In the nav bar, `.navbar` is the container. Its two children, `.logo` and `.nav-links`, are the items.

**Where:** below the "Your CSS goes below this line" comment.

**Add:**

```css
.navbar {
  display: flex;                /* turn on flexbox: children sit in a row */
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
```

**What you should see:** a dark blue bar. "My Site" and the links are now **side by side** in one row, both pushed to the left.

**Try This 1:** Delete `display: flex;` and refresh. What happens? Put it back.

[Back to top](#table-of-contents)

---

## 3. justify-content: Spread Items Left to Right

`justify-content` controls where the items sit **left to right** in a row.

| Value | What it does |
|---|---|
| `flex-start` | All items on the left (this is the default) |
| `center` | All items in the middle |
| `flex-end` | All items on the right |
| `space-between` | First item on the far left, last item on the far right |
| `space-around` | Equal space around each item |

**Where:** inside the `.navbar` rule you already have.

**Change:** add one line under `display: flex;`. Start with `center`:

```css
.navbar {
  display: flex;
  justify-content: center;      /* NEW LINE */
  padding: 1rem 2rem;
  background-color: #2c3e50;
}
```

**What you should see:** the logo and links move to the middle of the bar.

Now change only the word `center` to each of these, and refresh after each one:

1. `flex-end` → everything moves to the right.
2. `space-around` → the two items spread out with space on both sides.
3. `space-between` → the logo goes to the far left and the links go to the far right.

**Leave it on `space-between`.** That is how most nav bars look.

[Back to top](#table-of-contents)

---

## 4. align-items: Line Items Up Top to Bottom

`align-items` controls where the items sit **top to bottom** in a row.

| Value | What it does |
|---|---|
| `stretch` | Items stretch to fill the height (this is the default) |
| `flex-start` | Items sit at the top |
| `center` | Items sit in the middle |
| `flex-end` | Items sit at the bottom |

Right now the bar is short, so it is hard to see any difference. You will make the bar tall for a minute so you can see it work.

**Where:** inside the `.navbar` rule.

**Change:** add two lines: a **temporary** `height` and `align-items`:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;      /* NEW LINE */
  height: 8rem;                 /* NEW LINE - temporary, delete it later */
  padding: 1rem 2rem;
  background-color: #2c3e50;
}
```

**What you should see:** a tall bar with the logo and links at the **top**.

Now change only `flex-start` to each of these, and refresh after each one:

1. `flex-end` → the logo and links drop to the **bottom** of the bar.
2. `center` → they sit in the **middle** of the bar.

**Leave it on `center`. Then delete the `height: 8rem;` line.** The bar goes back to normal height, and the logo and links stay lined up in the middle.

Easy way to remember:
- **justify-content** = left to right (along the row)
- **align-items** = top to bottom (across the row)

Your `.navbar` rule should now look like this:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
}
```

[Back to top](#table-of-contents)

---

## 5. gap: Space Between the Links

Look at the links. They run together: "HomeAboutGalleryContact". The links group (`.nav-links`) is not a flex container yet.

`gap` puts space **between** flex items. It does not add space on the outside edges.

**Where:** below your `.nav-links a` rule.

**Add:**

```css
.nav-links {
  display: flex;   /* the links group is ALSO a flex container */
  gap: 1rem;       /* 1rem of space between each link */
}
```

**What you should see:** the four links are spaced out evenly.

**Try This 2:** Change `1rem` to `3rem`. What happens? Change it back.

[Back to top](#table-of-contents)

---

## 6. flex-direction: Row or Column

Now the cards. `flex-direction` sets which way the items go.

| Value | What it does |
|---|---|
| `row` | Left to right (this is the default) |
| `column` | Top to bottom (stacked) |

**Where:** below your `.nav-links` rule.

**Add:**

```css
.cards {
  display: flex;
  flex-direction: column;
}
```

**What you should see:** nothing moves. The cards are still stacked, because `column` stacks them.

**Change:** change `column` to `row`.

**What you should see:** the three cards jump into a row, side by side.

**Leave it on `row`.** (You could also delete the line, since `row` is the default.)

[Back to top](#table-of-contents)

---

## 7. flex: 1 for Equal-Width Cards

The cards are in a row, but they are touching, they have no border, and each one is a different width (each is only as wide as its text).

`flex: 1` tells each item to **grow** and take an equal share of the space. Give it to every card and they all come out the same width.

**Step A. Where:** inside the `.cards` rule.

**Change:** add a `gap` line:

```css
.cards {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;     /* NEW LINE - space between the cards */
}
```

**Step B. Where:** below the `.cards` rule.

**Add** a new rule for `.card` (no "s", this is each single card):

```css
.card {
  flex: 1;                     /* every card grows the same amount = equal widths */
  background-color: #fff;
  padding: 1.5rem;
  border: 2px solid #2c3e50;
  border-radius: 8px;
}
```

**What you should see:** three white boxes with borders, all the same width, with space between them.

**Try This 3:** Delete `flex: 1;` and refresh. What happens to the widths? Put it back.

[Back to top](#table-of-contents)

---

## 8. flex-wrap: A Gallery That Wraps

By default, flexbox squeezes **every** item onto one line, even if they get tiny. `flex-wrap: wrap` lets items move down to a new line when the row is full.

**Step A. Where:** below your `.card` rule.

**Add:**

```css
.gallery {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;   /* space between the cards and the gallery */
}

.gallery img {
  flex: 1;              /* each photo grows to fill the row */
  min-width: 12rem;     /* but never gets skinnier than 12rem */
}
```

**What you should see:** all six photos try to fit on **one** line. If the preview is narrow, they run off the right side of the page.

**Step B. Where:** inside the `.gallery` rule.

**Change:** add `flex-wrap: wrap;`:

```css
.gallery {
  display: flex;
  flex-wrap: wrap;      /* NEW LINE - extra photos move to the next line */
  gap: 1rem;
  margin-top: 1.5rem;
}
```

**What you should see:** the photos now fill the row and the extra ones drop to the next line.

**Test it:** drag the edge of the preview to make it narrower and wider. The number of photos per row changes on its own.

[Back to top](#table-of-contents)

---

## 9. Check Your Finished CSS

Everything below the "Your CSS goes below this line" comment should now look like this. If something on your page looks wrong, compare your CSS to this.

```css
    /* ===== Your CSS goes below this line ===== */

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
```

### Summary

1. `display: flex` on the parent puts its children in a row.
2. `justify-content` moves items **left to right**. `space-between` pushes them to the two ends.
3. `align-items` moves items **top to bottom**. `center` lines them up in the middle.
4. `gap` adds space between items.
5. `flex-direction` picks `row` or `column`.
6. `flex: 1` makes items grow to equal widths.
7. `flex-wrap: wrap` lets items drop to the next line.

Next: Part 2, `html07_Walkthrough_Responsive.md`.

[Back to top](#table-of-contents)

---

## 10. Try This Answers

1. The logo and links stack again, one on top of the other.
2. The links spread farther apart.
3. The cards go back to different widths, each only as wide as its text.

[Back to top](#table-of-contents)
