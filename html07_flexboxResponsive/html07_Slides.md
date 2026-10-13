---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 07: Flexbox and Responsive Design

## Web Development
### Medina County Career Center

---

# What We Are Doing

- **Flexbox:** put things in a row or a column and line them up
- **Responsive design:** one site that works on a phone, a tablet, and a desktop
- **CSS Grid:** know what it is (rows and columns)

**This lesson:** walkthrough, one practice task, then make **your** website responsive.

---

# What is Flexbox?

- A layout tool for **one direction at a time** (a row or a column)
- Put `display: flex` on the **parent** (the container)
- The **children** (flex items) are what move

```css
.cards {
  display: flex;   /* children now sit side by side */
}
```

---

# Flexbox Container Properties

| Property | What it does |
|---|---|
| `flex-direction` | `row` (default) or `column` |
| `justify-content` | Spacing **along** the row: `center`, `space-between` |
| `align-items` | Lining up **across** the row: `center`, `stretch` |
| `gap` | Space between items |
| `flex-wrap` | `wrap` lets items drop to the next line |

**Item property:** `flex: 1` = grow to an equal share of the space

---

# Example: Nav Bar

```css
/* Logo on the left, links on the right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

/* The links group is also a flex container */
.nav-links {
  display: flex;
  gap: 1rem;
}
```

---

# Example: Gallery That Wraps

```css
.gallery {
  display: flex;
  flex-wrap: wrap;   /* extra photos move to the next row */
  gap: 1rem;
}

.gallery figure {
  flex: 1;           /* grow to fill the row */
  min-width: 15rem;  /* but wrap before getting too skinny */
}
```

---

# Responsive Images and the Viewport Tag

**Every image:**
```css
img {
  max-width: 100%;   /* never wider than its box */
  height: auto;      /* keep its shape */
  display: block;    /* no gap underneath */
}
```

**Every page, in the `<head>`:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without the viewport tag, a phone shows a tiny zoomed-out desktop page.

---

# Media Queries

CSS that only runs when the screen matches a condition.

```css
/* 768px wide and narrower (phones) */
@media (max-width: 768px) {
  .navbar  { flex-direction: column; }
  .gallery { flex-direction: column; }
}
```

- Put media queries at the **bottom** of the CSS
- The width where the layout changes is a **breakpoint**
- Common breakpoints: **768px** (tablet), **1024px** (desktop)

---

# max-width vs. min-width

| Query | Means | Used for |
|---|---|---|
| `@media (max-width: 768px)` | 768px **and narrower** | Fixing a desktop layout for phones (what we use) |
| `@media (min-width: 768px)` | 768px **and wider** | **Mobile-first:** phone layout is the default, bigger screens are added |

**Testing:** Live Preview → **Developer Tools** → **device toolbar** (phone-and-tablet icon) → pick a phone or type `375`. Use the **Styles** pane to check that the `@media` rule is applied.

---

# CSS Grid: Know What It Is

- **Two-dimensional:** rows **and** columns at the same time
- Flexbox is one-dimensional

```css
.page-layout {
  display: grid;
  grid-template-columns: 15rem 1fr;   /* sidebar + the rest */
  gap: 1.5rem;
}
```

- `fr` = a fraction of the leftover space
- `repeat(3, 1fr)` = three equal columns

---

# Flexbox vs. Grid

| | Flexbox | Grid |
|---|---|---|
| Directions | One | Two (rows and columns) |
| Turn it on | `display: flex` | `display: grid` |
| Good for | Nav bars, cards, galleries | Whole-page layouts |

Real sites use both: grid for the page, flexbox for the parts inside.

---

# Your DIY: Make Your Site Responsive

In `DiyWebsite_Lastname`:

1. Viewport tag on every page
2. Flexbox nav bar in the header
3. Flexbox gallery with `flex-wrap` and `gap`
4. Responsive images
5. Media query: nav stacks, gallery goes to one column
6. Save a bare page skeleton as `template.html`

Push with GitHub Desktop.
