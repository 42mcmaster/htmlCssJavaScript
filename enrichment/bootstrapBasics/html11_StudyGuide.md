# HTML11: Bootstrap Basics — Study Guide

## Vocabulary

1. **Bootstrap** — A front-end framework providing CSS & JavaScript for responsive web design
2. **Framework** — A pre-built collection of tools, styles, and components for development
3. **CDN** — Content Delivery Network; a way to load libraries from the web instead of files
4. **Container** — A Bootstrap class that holds content and sets a max-width (`container` or `container-fluid`)
5. **Container-fluid** — A Bootstrap container that spans 100% of the screen width
6. **Row** — A horizontal line in the Bootstrap grid; contains columns
7. **Col** — A column in the Bootstrap grid; divides horizontal space
8. **Grid System** — Bootstrap's 12-column layout system (container → row → col)
9. **Breakpoint** — A screen size at which Bootstrap layouts change responsively (xs, sm, md, lg, xl, xxl)
10. **Responsive Design** — A layout that adapts to different screen sizes and devices
11. **sm** — Bootstrap breakpoint for small screens (≥ 576px)
12. **md** — Bootstrap breakpoint for medium screens (≥ 768px)
13. **lg** — Bootstrap breakpoint for large screens (≥ 992px)
14. **xl** — Bootstrap breakpoint for extra-large screens (≥ 1200px)
15. **xxl** — Bootstrap breakpoint for 2xl screens (≥ 1400px)
16. **Navbar** — A Bootstrap navigation bar component at the top of a page
17. **Card** — A Bootstrap container component for displaying content (title, text, images)
18. **Card-body** — The inner content area of a Bootstrap card
19. **Card-title** — A heading inside a card
20. **Button** — A Bootstrap component for user actions (btn, btn-primary, btn-success, etc.)
21. **Alert** — A Bootstrap component for messages (alert-info, alert-warning, alert-success, alert-danger)
22. **Form-control** — A Bootstrap class for styling form inputs (text, email, textarea, etc.)
23. **Utility Class** — A Bootstrap class that applies a single style (spacing, color, text alignment, etc.)
24. **Margin** — Space outside an element; Bootstrap `m-` classes control margin
25. **Padding** — Space inside an element; Bootstrap `p-` classes control padding
26. **Text-center** — A Bootstrap utility that centers text horizontally

---

## Cheat Sheet

### Grid System

```html
<!-- Container (fixed max-width) -->
<div class="container">
  <!-- Row -->
  <div class="row">
    <!-- Columns -->
    <div class="col">Auto width</div>
    <div class="col-12">Full width (mobile)</div>
    <div class="col-md-6">50% at medium screens</div>
    <div class="col-lg-4">~33% at large screens</div>
  </div>
</div>
```

### Breakpoints Reference

| Breakpoint | Class | Screen Size |
|------------|-------|-------------|
| xs (default) | — | < 576px |
| Small | col-sm-* | ≥ 576px |
| Medium | col-md-* | ≥ 768px |
| Large | col-lg-* | ≥ 992px |
| Extra Large | col-xl-* | ≥ 1200px |
| 2XL | col-xxl-* | ≥ 1400px |

### Common Components

```html
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brand</a>
</nav>

<!-- Card -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>

<!-- Button -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>

<!-- Alert -->
<div class="alert alert-info">Message</div>

<!-- Form Input -->
<input class="form-control" type="text" placeholder="Name">
```

### Utilities

```html
<!-- Spacing: m = margin, p = padding; 1-5 = scale -->
<div class="m-3">Margin</div>
<div class="p-2">Padding</div>
<div class="mx-auto">Horizontal auto margin (center)</div>

<!-- Text Alignment -->
<p class="text-center">Centered</p>
<p class="text-start">Left</p>
<p class="text-end">Right</p>

<!-- Colors -->
<div class="bg-primary text-white">Blue background</div>
<p class="text-success">Green text</p>
<p class="text-danger">Red text</p>

<!-- Display & Visibility -->
<div class="d-none">Hidden</div>
<div class="d-block">Block display</div>
```

---

## ODE Competencies Addressed

### 6.5.3: Standard Web Languages
- Understanding Bootstrap as an extension of HTML/CSS
- Using Bootstrap classes to apply styles without writing custom CSS

### 6.5.6: Create/Edit Web Page Templates
- Building responsive page layouts with Bootstrap grid system
- Using Bootstrap components (navbar, cards, buttons, forms) to structure pages
- Creating reusable component patterns

### 6.5.13: Responsive Design
- Applying breakpoints (sm, md, lg, xl, xxl) to create mobile-first layouts
- Using responsive column sizing (`col-md-6`, `col-lg-4`, etc.)
- Testing layouts across different screen sizes

### 6.1.7: Integrate External CSS/Resources
- Loading Bootstrap via CDN in the `<head>`
- Using external Bootstrap JavaScript bundle for interactive components

---

## Key Concepts Summary

### Why Bootstrap?
- **Speed:** Pre-built components save hours of coding
- **Consistency:** Professional look across projects
- **Responsive:** Mobile-first, works on all devices
- **Community:** Large ecosystem of plugins and examples

### The 12-Column Grid
Bootstrap divides screens into 12 equal columns. You specify how many columns each element takes at each breakpoint.

Example: A 3-card layout responsive to screen size
```html
<div class="container">
  <div class="row">
    <!-- Mobile: full width (col-12), Tablet: 2 per row (col-md-6), Desktop: 3 per row (col-lg-4) -->
    <div class="col-12 col-md-6 col-lg-4">Card 1</div>
    <div class="col-12 col-md-6 col-lg-4">Card 2</div>
    <div class="col-12 col-md-6 col-lg-4">Card 3</div>
  </div>
</div>
```

### Mobile-First Thinking
- Default (xs): Mobile layout
- Add breakpoints for larger screens
- Example: `col-12` (mobile), `col-md-6` (tablet), `col-lg-4` (desktop)

---

## Common Mistakes to Avoid

1. **Forgetting `<container>` or `<container-fluid>`** — Grid doesn't work without it
2. **Using `<col>` without `<row>`** — Columns must be inside rows
3. **Forgetting the CDN link** — Bootstrap CSS won't load; nothing will style
4. **Overwriting Bootstrap with custom CSS** — Use utilities first, custom CSS only if needed
5. **Not testing responsive** — Always resize browser to test breakpoints

---

## Study Questions

1. What three things are needed to use Bootstrap in an HTML file?
   - Bootstrap CSS CDN, Bootstrap JS CDN, container/row/col structure

2. How many columns does Bootstrap's grid system have?
   - 12

3. What breakpoint applies to screens ≥ 768px?
   - Medium (md)

4. What's the difference between `container` and `container-fluid`?
   - `container` has max-width; `container-fluid` is 100% width

5. How would you make a column full-width on mobile but 50% on tablets?
   - `class="col-12 col-md-6"`

6. What Bootstrap component is used for a navigation bar?
   - `navbar`

7. What class makes text centered?
   - `text-center`

8. How would you add margin to all sides of an element?
   - `m-1` through `m-5`

9. Name three Bootstrap color utility classes.
   - `bg-primary`, `text-success`, `bg-danger`, etc.

10. What does CDN stand for?
    - Content Delivery Network
