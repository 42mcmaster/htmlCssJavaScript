# Lesson 07 Study Guide: Flexbox and Responsive Design

## Table of Contents

1. [Vocabulary](#vocabulary)
2. [Flexbox Cheat Sheet](#flexbox-cheat-sheet)
3. [Common Flexbox Patterns](#common-flexbox-patterns)
4. [Responsive Design Cheat Sheet](#responsive-design-cheat-sheet)
5. [CSS Grid (Recognition Level)](#css-grid-recognition-level)
6. [Flexbox vs. Grid](#flexbox-vs-grid)
7. [Page Templates](#page-templates)
8. [Common Mistakes](#common-mistakes)
9. [ODE Competencies](#ode-competencies)

---

## Vocabulary

1. **Flexbox (Flexible Box Layout)**: A CSS layout tool that puts items in a row or a column and lines them up. It is **one-dimensional** (one direction at a time).
2. **Flex container**: The parent element with `display: flex`.
3. **Flex items**: The direct children of a flex container.
4. **Main axis**: The direction items flow. For a row, left to right.
5. **Cross axis**: The other direction. For a row, top to bottom.
6. **flex-direction**: Sets the main axis: `row` (default), `column`, `row-reverse`, `column-reverse`.
7. **justify-content**: Spaces items along the main axis.
8. **align-items**: Lines items up along the cross axis.
9. **gap**: Space between flex or grid items (not on the outside edges).
10. **flex-wrap**: `wrap` lets items move to a new line when the row is full. The default is `nowrap`.
11. **flex: 1**: Makes an item grow to take an equal share of the empty space (short for `flex-grow: 1`).
12. **Responsive design**: One site that changes its layout to fit any screen size.
13. **Media query**: A block of CSS that only runs when the screen matches a condition, like `@media (max-width: 768px)`.
14. **Breakpoint**: The screen width where the layout changes. Common ones: 768px (tablet) and 1024px (desktop).
15. **Mobile-first**: Writing the phone layout as the normal CSS, then using `min-width` media queries to add layout for bigger screens.
16. **Viewport meta tag**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Tells a phone to use its real width.
17. **Responsive image**: An image with `max-width: 100%; height: auto;` so it shrinks to fit its box and keeps its shape.
18. **Aspect ratio**: The width-to-height shape of an image.
19. **CSS Grid**: A **two-dimensional** layout tool (rows and columns at the same time).
20. **fr unit**: In grid, a fraction of the leftover space.
21. **Page template**: A bare page skeleton (head, header, nav, empty main, footer) that you copy to start every new page.

[Back to top](#table-of-contents)

---

## Flexbox Cheat Sheet

### Container properties (go on the parent)

```css
.container {
  display: flex;                    /* turn on flexbox */
  flex-direction: row;              /* row (default), column, row-reverse, column-reverse */
  justify-content: space-between;   /* flex-start, center, flex-end, space-between, space-around, space-evenly */
  align-items: center;              /* stretch (default), center, flex-start, flex-end */
  flex-wrap: wrap;                  /* nowrap (default), wrap */
  gap: 1rem;                        /* space between items */
}
```

### Item property (goes on the children)

```css
.item {
  flex: 1;   /* grow to an equal share of the space */
}
```

If one item has `flex: 2` and the others have `flex: 1`, that item grows twice as much.

**Memory trick:** justify-content = **along** the row. align-items = **across** the row.

| justify-content value | Result |
|---|---|
| `flex-start` | Items bunched at the start |
| `center` | Items bunched in the middle |
| `flex-end` | Items bunched at the end |
| `space-between` | First and last at the edges, equal space between |
| `space-around` | Equal space around each item |
| `space-evenly` | Exactly equal space everywhere |

[Back to top](#table-of-contents)

---

## Common Flexbox Patterns

### Nav bar: logo left, links right

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}
```

### Equal-width cards

```css
.cards { display: flex; gap: 1.5rem; }
.card  { flex: 1; }
```

### Gallery that wraps

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.gallery figure {
  flex: 1;
  min-width: 15rem;   /* wrap instead of getting too skinny */
  margin: 0;
}
```

### Center something both ways

```css
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

[Back to top](#table-of-contents)

---

## Responsive Design Cheat Sheet

### Viewport tag (every page, in the head)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width`: use the phone's real width
- `initial-scale=1.0`: start at normal zoom

### Responsive images

```css
img {
  max-width: 100%;   /* never wider than its box */
  height: auto;      /* keep the aspect ratio */
  display: block;    /* remove the gap under the image */
}
```

### Media queries

```css
/* 768px and narrower: phones */
@media (max-width: 768px) {
  .navbar { flex-direction: column; }
}

/* 1024px and wider: desktops (mobile-first style) */
@media (min-width: 1024px) {
  .gallery figure { min-width: 18rem; }
}
```

| Query | Means |
|---|---|
| `@media (max-width: 768px)` | 768px **and narrower** |
| `@media (min-width: 768px)` | 768px **and wider** |

- Put media queries at the **bottom** of the stylesheet so they override the rules above them.
- **Mobile-first:** phone layout is the normal CSS; `min-width` queries add layout for bigger screens.
- **Testing:** in VS Code Live Preview, open **Developer Tools** (button in the preview toolbar) and click the **device toolbar** button (phone-and-tablet icon). Pick a phone or type a width like `375`. Select an element and check the **Styles** pane: the `@media` rule shows only at phone width.

[Back to top](#table-of-contents)

---

## CSS Grid (Recognition Level)

You need to recognize grid, not build with it. Know this much:

```css
.page-layout {
  display: grid;                      /* turn on grid */
  grid-template-columns: 15rem 1fr;   /* a 15rem column, then the rest */
  gap: 1.5rem;                        /* same gap idea as flexbox */
}
```

- Grid is **two-dimensional** (rows AND columns). Flexbox is one-dimensional.
- `grid-template-columns` lists the width of each column.
- `1fr 1fr 1fr` = three equal columns. `repeat(3, 1fr)` is the short way to write it.
- `1fr 2fr` = the second column is twice as wide as the first.

[Back to top](#table-of-contents)

---

## Flexbox vs. Grid

| | Flexbox | Grid |
|---|---|---|
| Directions | One (row **or** column) | Two (rows **and** columns) |
| Turn it on | `display: flex` | `display: grid` |
| Good for | Nav bars, card rows, galleries, lining things up | Whole-page layouts (header, sidebar, main, footer) |

Real sites often use grid for the page layout and flexbox for the parts inside it.

[Back to top](#table-of-contents)

---

## Page Templates

A **page template** is a copy of your bare page skeleton: doctype, head (charset, viewport tag, title, stylesheet link), header with nav, an empty `<main>`, and footer. Every new page starts by copying it, so every page matches. In the DIY you save yours as `template.html`.

[Back to top](#table-of-contents)

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Put `display: flex` on the items instead of the parent | Flexbox goes on the **container** |
| Items all squeezed onto one line | Add `flex-wrap: wrap` |
| Heading squished next to the gallery photos | Move the heading outside the flex container |
| Media query does nothing | Put it at the bottom of the CSS; check the curly braces |
| Works on the computer but not on a phone | Add the viewport meta tag |
| Image sticks out past the screen | `max-width: 100%; height: auto;` |
| Image looks stretched | Add `height: auto` |

[Back to top](#table-of-contents)

---

## ODE Competencies

- **6.5.8 Format website layout:** arrange page parts with flexbox (and recognize grid).
- **6.5.13 Responsive design:** viewport tag, media queries, breakpoints, mobile-first.
- **6.2.5 Resize images with CSS:** `max-width: 100%` and `height: auto`.
- **6.5.6 Page templates:** create and use a page template (`template.html`).
- **2.7.2 Ways to present data:** a responsive website is one way to deliver content. The others are a mobile app, a desktop app, and a web application.

[Back to top](#table-of-contents)
