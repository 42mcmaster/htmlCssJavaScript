# Sprint 01 Study Guide: Bootstrap & Responsive Layouts

**Course:** CTE Web Design | **School:** Medina County Career Center
**Sprint:** Exam Prep — Bootstrap Essentials
**Time:** 2 Hours

---

## Vocabulary

1. **Bootstrap** — A front-end framework that provides pre-built CSS classes and components for responsive web design
2. **Framework** — A collection of pre-written code and tools that speed up development
3. **CDN (Content Delivery Network)** — A service that delivers Bootstrap files from servers around the world
4. **Container** — A Bootstrap class that wraps content and provides margins and fixed widths
5. **Container-fluid** — A Bootstrap class that makes a container stretch full width of the viewport
6. **Row** — A Bootstrap class that creates a horizontal line containing columns
7. **Col** — A Bootstrap class that creates a column within a row
8. **Grid System** — Bootstrap's 12-column layout system for organizing page content
9. **Breakpoint** — A screen size at which the layout changes (xs, sm, md, lg, xl, xxl)
10. **Responsive Design** — A design approach that adapts layouts for different screen sizes
11. **Navbar** — A Bootstrap component for creating navigation bars
12. **Card** — A Bootstrap component for displaying content in boxes
13. **Button** — A Bootstrap component for interactive clickable elements
14. **Alert** — A Bootstrap component for displaying messages or notifications
15. **Utility Class** — A Bootstrap class that provides a single CSS property (like m-3 for margin)

---

## Cheat Sheet

### Basic Grid Structure
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>
```

### Breakpoints Reference Table
| Breakpoint | Class | Screen Size | Device Type |
|------------|-------|-------------|------------|
| XS (Extra Small) | `col-*` | < 576px | Mobile phone |
| SM (Small) | `col-sm-*` | ≥ 576px | Large mobile |
| MD (Medium) | `col-md-*` | ≥ 768px | Tablet |
| LG (Large) | `col-lg-*` | ≥ 992px | Laptop |
| XL (Extra Large) | `col-xl-*` | ≥ 1200px | Large monitor |
| XXL (2XL) | `col-xxl-*` | ≥ 1400px | Extra large monitor |

### Responsive Column Example
```html
<!-- Stacked on mobile, 2 columns on tablet, 3 columns on desktop -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Card</div>
  <div class="col-12 col-md-6 col-lg-4">Card</div>
  <div class="col-12 col-md-6 col-lg-4">Card</div>
</div>
```

### Bootstrap CDN
```html
<!-- Add to <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Add before </body> for interactive components -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Navbar Component
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Card Component
```html
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card description goes here.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
```

### Common Button Styles
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
```

### Alert Component
```html
<div class="alert alert-success" role="alert">Success message!</div>
<div class="alert alert-danger" role="alert">Error message!</div>
<div class="alert alert-warning" role="alert">Warning message!</div>
<div class="alert alert-info" role="alert">Info message!</div>
```

### Utility Classes for Spacing
```html
<!-- Margin classes: m-1 to m-5 -->
<div class="m-3">Margin all sides</div>
<div class="mt-2">Margin top</div>
<div class="mb-4">Margin bottom</div>
<div class="ms-1">Margin start (left)</div>
<div class="me-2">Margin end (right)</div>

<!-- Padding classes: p-1 to p-5 -->
<div class="p-3">Padding all sides</div>
<div class="pt-2">Padding top</div>
<div class="pb-4">Padding bottom</div>
```

### Text Alignment & Display
```html
<p class="text-center">Centered text</p>
<p class="text-start">Left aligned</p>
<p class="text-end">Right aligned</p>
<p class="text-bold">Bold text</p>
<p class="text-muted">Muted/gray text</p>
```

### Form Controls
```html
<input type="text" class="form-control" placeholder="Enter text">
<input type="email" class="form-control" placeholder="Enter email">
<textarea class="form-control" rows="3"></textarea>
<select class="form-select">
  <option>Select option</option>
</select>
```

### Background & Text Colors
```html
<div class="bg-primary">Primary background</div>
<div class="bg-success">Success background</div>
<div class="bg-danger">Danger background</div>
<p class="text-primary">Primary text</p>
<p class="text-light bg-dark">Light text on dark</p>
```

---

## ODE Competencies

This sprint covers the following Ohio Department of Education Web Design Competencies:

- **6.5.3** — Develop and implement responsive design techniques using CSS media queries and frameworks
- **6.5.6** — Apply industry-standard frameworks (Bootstrap) to create consistent, professional layouts
- **6.5.13** — Use component libraries to speed up development and maintain design consistency
- **6.1.7** — Demonstrate understanding of mobile-first design principles

---

## Common Mistakes

1. **Not including the Bootstrap CDN** — Students forget to add the `<link>` tag to the `<head>`. Without it, Bootstrap classes won't work.

2. **Wrong grid structure** — Forgetting the container, row, or column nesting order. It must be: `<div class="container">` → `<div class="row">` → `<div class="col">`.

3. **Columns don't add up to 12** — The grid system expects columns to total 12. For example, `col-md-4 col-md-4 col-md-4` = 12, but `col-md-5 col-md-5` = 10 (leaves gaps).

4. **Using only one breakpoint** — Writing `<div class="col-lg-6">` without `col-12` or `col-md-` means it won't be responsive on smaller screens.

5. **Incorrect class names** — Common typos like `col-medium-6` instead of `col-md-6`, or `margin-3` instead of `m-3`. Class names must be exact.

---

## Practice Questions

### Question 1
What does the Bootstrap CDN link do?
**Answer:** It loads Bootstrap CSS and JavaScript files from the internet so you don't have to download and install them locally.

### Question 2
What is the correct order for Bootstrap grid structure?
**Answer:** Container → Row → Columns. You put rows inside containers and columns inside rows.

### Question 3
If you want a layout where columns are full-width on mobile but half-width on tablets, what classes would you use?
**Answer:** `class="col-12 col-md-6"` — the col-12 makes it full width on extra small screens, and col-md-6 makes it half width on medium screens and up.

### Question 4
What is the Bootstrap grid system based on?
**Answer:** A 12-column system. All rows are divided into 12 equal columns, and you can combine columns to create different layouts.

### Question 5
Name three Bootstrap components covered in this sprint.
**Answer:** Any three of: Navbar, Card, Button, Alert (students could also mention Form controls or other components).

### Question 6
What is a "breakpoint" in Bootstrap?
**Answer:** A breakpoint is a screen size at which the layout changes. Bootstrap uses breakpoints (xs, sm, md, lg, xl, xxl) to make layouts responsive.

### Question 7
What is the difference between `<div class="container">` and `<div class="container-fluid">`?
**Answer:** A container has fixed margins and doesn't stretch full width. A container-fluid stretches edge-to-edge and uses the full width of the viewport.

### Question 8
What class would you use to add spacing (margin) above an element?
**Answer:** `mt-` followed by a number (1-5), like `mt-3` or `mt-4`.

### Question 9
What is the mobile-first approach in Bootstrap?
**Answer:** Start with the smallest screen size (no prefix or col-*), then add larger breakpoint classes as needed (col-sm-*, col-md-*, etc.).

### Question 10
Write a line of HTML that creates a responsive card that is full-width on mobile and one-third width on large screens.
**Answer:** `<div class="col-12 col-lg-4">` (or similar with a card inside)

---

## Key Exam Topics

**Know these topics for the exam:**
1. How to include Bootstrap using CDN
2. The 12-column grid system structure
3. All six breakpoints (xs, sm, md, lg, xl, xxl) and their screen sizes
4. How to create responsive layouts using multiple breakpoint classes
5. Common Bootstrap components (navbar, card, button, alert)
6. Utility classes for spacing, text alignment, and colors
7. Correct syntax for Bootstrap class names
8. Mobile-first design principle

**Practice:** Build at least 3 different responsive layouts using the grid system with different breakpoint combinations.
