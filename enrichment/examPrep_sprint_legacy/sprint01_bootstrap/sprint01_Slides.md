---
marp: true
theme: default
class: invert
paginate: true
---

# Sprint 01: Bootstrap & Responsive Layouts

**CTE Web Design | Medina County Career Center**
*Exam Prep Sprint — 2 Hours*

---

<!-- _header: "Sprint 01a — What is Bootstrap?" -->

## What is Bootstrap?

Bootstrap is a **front-end framework** that makes building responsive websites faster and easier.

### Key Features:
- Pre-built CSS classes and components
- 12-column grid system for layouts
- Mobile-first responsive design built in
- CDN delivery (no installation needed)

---

### Why Use Bootstrap?
✓ Save time on CSS
✓ Consistent design across browsers
✓ Mobile-responsive by default
✓ Professional-looking components ready to use

### Getting Started
```html
<!-- Bootstrap CDN in <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS (optional, for interactive components) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

---

<!-- _header: "Sprint 01b — The Grid System" -->

## The Grid System

Bootstrap's grid is the foundation for responsive layouts.

### Structure: Container → Row → Columns

```html
<div class="container">
  <div class="row">
    <div class="col">Content here</div>
    <div class="col">Content here</div>
  </div>
</div>
```

### The 12-Column System
- Every row has 12 columns
- Divide columns to create layout
- Column widths adjust at breakpoints

### Container Types
- `.container` — fixed width, margins on sides
- `.container-fluid` — full width, edge to edge

---

<!-- _header: "Sprint 01c — Responsive Breakpoints" -->

## Responsive Breakpoints

Bootstrap uses breakpoints to change layout at different screen sizes.

| Class | Screen Size | Device |
|-------|-------------|--------|
| `col-*` | < 576px | Extra Small (XS) |
| `col-sm-*` | ≥ 576px | Small |
| `col-md-*` | ≥ 768px | Medium |
| `col-lg-*` | ≥ 992px | Large |
| `col-xl-*` | ≥ 1200px | Extra Large |
| `col-xxl-*` | ≥ 1400px | XXL |

**Mobile-First Approach:** Start with smallest breakpoint, add larger breakpoints as needed

---

<!-- _header: "Sprint 01d — Breakpoints in Action" -->

## Breakpoints in Action

### Real-World Example

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Card 1</div>
  <div class="col-12 col-md-6 col-lg-4">Card 2</div>
  <div class="col-12 col-md-6 col-lg-4">Card 3</div>
</div>
```

### What Happens at Each Breakpoint:
- **XS (mobile):** Each card is `col-12` (full width, stacked)
- **MD (tablet):** Each card is `col-md-6` (half width, 2 per row)
- **LG (desktop):** Each card is `col-lg-4` (one-third width, 3 per row)

---

<!-- _header: "Sprint 01e — Common Components" -->

## Common Components

### Navbar
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">Menu</button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Card
```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Description here</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
```

---

<!-- _header: "Sprint 01f — Components & Utilities" -->

## More Components & Utilities

### Button
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
```

### Alert
```html
<div class="alert alert-success" role="alert">
  Success message here!
</div>
```

### Utility Classes
| Class | Purpose | Examples |
|-------|---------|----------|
| `m-` | margin | `m-3`, `mt-2`, `mb-4` |
| `p-` | padding | `p-3`, `pt-2`, `pb-4` |
| `text-center` | alignment | `text-start`, `text-end` |
| `bg-` | background | `bg-primary`, `bg-light` |
| `form-control` | input styling | (text, email, password) |

---

<!-- _header: "Sprint 01g — Key Takeaways" -->

## Key Takeaways

✓ **Bootstrap = Framework** that provides CSS classes and components

✓ **Grid System** uses container → row → col structure with 12 columns

✓ **Responsive** by using breakpoint classes (col-md-6, col-lg-4, etc.)

✓ **Components** like navbar, cards, buttons, alerts are ready to use

✓ **Utilities** (m-, p-, text-, bg-) speed up styling

✓ **Mobile-First** — start with xs, add larger breakpoints

### Next Steps
- Review the Bootstrap documentation
- Complete the hands-on task
- Practice building layouts with the grid

---

<!-- _header: "Exam Tips" -->

## Exam Tips

1. **Know the 12-column system** — understand how col-* classes divide space
2. **Breakpoint names and sizes** — memorize xs, sm, md, lg, xl, xxl with screen sizes
3. **Grid structure** — container → row → col, in that order
4. **Common components** — navbar, card, button, alert (recognize and understand)
5. **Utility classes** — m-/p- for spacing, text- for alignment, bg- for colors
6. **CDN link** — know where to put it in your HTML (in the <head>)

**Practice:** Build responsive layouts using the grid system with multiple breakpoints.
