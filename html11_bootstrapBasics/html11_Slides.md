---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 11: Bootstrap Basics

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 11a — Grid System" -->

## What is Bootstrap?

Bootstrap is a **front-end framework** that provides:
- Pre-built CSS & JavaScript components
- A responsive **grid system** for layouts
- Utilities for spacing, colors, typography
- Faster web development

### Why Use It?
- Saves time: Don't write CSS from scratch
- Responsive: Works on all devices
- Consistent: Professional-looking pages
- Large community: Lots of examples & support

---

<!-- _header: "Sub-Lesson 11a — Grid System" -->

## Getting Started: CDN

Include Bootstrap in your `<head>`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

And before `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

**CDN** = Content Delivery Network (load from web, not files)

---

<!-- _header: "Sub-Lesson 11a — Grid System" -->

## The Grid System: Containers

A **container** holds your content and sets max-width:

```html
<!-- Fixed width -->
<div class="container">
  Your content here
</div>

<!-- Full width -->
<div class="container-fluid">
  Your content here
</div>
```

**Key Idea:** Everything in Bootstrap starts with a container!

---

<!-- _header: "Sub-Lesson 11a — Grid System" -->

## The Grid System: Rows & Columns

Divide content into **rows** and **columns**:

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

- **row** = horizontal line
- **col** = equal-width sections
- Columns automatically stack on small screens!

---

<!-- _header: "Sub-Lesson 11a — Grid System" -->

## Responsive Breakpoints

Bootstrap adjusts layout at different screen sizes:

| Class | Screen Size |
|-------|-------------|
| xs | < 576px (mobile) |
| sm | ≥ 576px |
| md | ≥ 768px |
| lg | ≥ 992px |
| xl | ≥ 1200px |
| xxl | ≥ 1400px |

---

<!-- _header: "Sub-Lesson 11a — Grid System" -->

## Breakpoints in Action

Control columns at each breakpoint:

```html
<div class="row">
  <!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols -->
  <div class="col-12 col-md-6 col-lg-4">Card</div>
  <div class="col-12 col-md-6 col-lg-4">Card</div>
  <div class="col-12 col-md-6 col-lg-4">Card</div>
</div>
```

- `col-12` = full width (mobile)
- `col-md-6` = 50% width at medium screens
- `col-lg-4` = ~33% width at large screens

---

<!-- _header: "Sub-Lesson 11b — Components" -->

## Bootstrap Components: Navbar

A navigation bar at the top:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">MyBrand</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>
```

---

<!-- _header: "Sub-Lesson 11b — Components" -->

## Common Components

**Cards:** Containers for content
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Description</p>
  </div>
</div>
```

**Buttons:**
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
```

**Alerts:**
```html
<div class="alert alert-info">Info message</div>
<div class="alert alert-warning">Warning!</div>
```

---

<!-- _header: "Sub-Lesson 11b — Components" -->

## Utilities: Spacing & Colors

**Spacing:** `m-` (margin), `p-` (padding), numbers 1-5
```html
<div class="m-3 p-2">Spaced content</div>
```

**Text Alignment:**
```html
<p class="text-center">Centered</p>
<p class="text-end">Right-aligned</p>
```

**Colors:**
```html
<div class="bg-primary text-white">Blue background</div>
<p class="text-success">Green text</p>
```

**Forms:**
```html
<input class="form-control" type="text" placeholder="Enter name">
<textarea class="form-control">Message</textarea>
```

---

<!-- _header: "Summary" -->

## Key Takeaways

1. **Bootstrap** = Framework for fast, responsive web design
2. **Grid System** = 12-column layout (container → row → col)
3. **Breakpoints** = Responsive design for all screen sizes
4. **Components** = Pre-built navbar, cards, buttons, alerts
5. **Utilities** = Quick styling with classes (spacing, colors, text)

**Next:** Build a responsive landing page using all of these!
