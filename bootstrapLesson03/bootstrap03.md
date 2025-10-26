# Lesson B3: Navigation & Layout Components

## Why are we learning this?

Every professional website needs navigation - a way for users to move between pages and find what they need. Bootstrap's navigation components make it easy to create beautiful, responsive navigation bars that automatically collapse into a "hamburger menu" on mobile devices. This is a crucial skill for building complete, professional websites!

---

## What is a Navbar?

A **navbar** (navigation bar) is the menu at the top of a website that contains links to different pages. You've seen them on every professional website you visit!

### Examples of Navbars:
- **E-commerce sites:** Logo, Search, Cart, Account
- **Blogs:** Home, About, Articles, Contact
- **Business sites:** Services, Portfolio, Team, Contact
- **Social media:** Feed, Messages, Notifications, Profile

### What Makes Bootstrap Navbars Special?

1. **Responsive** - Automatically collapses to a hamburger menu on mobile
2. **Flexible** - Can contain links, buttons, forms, dropdowns
3. **Professional** - Looks polished without custom CSS
4. **Accessible** - Works with screen readers and keyboards

---

## Basic Navbar Structure

Every Bootstrap navbar has this structure:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <!-- Brand/Logo -->
        <a class="navbar-brand" href="#">Brand</a>
        
        <!-- Mobile Toggle Button (Hamburger) -->
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Navigation Links (Collapsible) -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Breaking Down the Classes

| Class | Purpose |
|-------|---------|
| `navbar` | Makes it a Bootstrap navbar |
| `navbar-expand-lg` | Stays expanded on large screens, collapses on smaller |
| `navbar-light` | Light text on dark background styling |
| `navbar-dark` | Dark text on light background styling |
| `bg-light` | Light gray background color |
| `navbar-brand` | Styles the logo/brand name |
| `navbar-toggler` | The hamburger menu button |
| `navbar-collapse` | The collapsible section |
| `navbar-nav` | Container for navigation links |
| `nav-item` | Individual navigation item |
| `nav-link` | Styles the actual link |

---

## Navbar Color Schemes

Bootstrap provides built-in color combinations:

### Light Navbar (Dark text on light background)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Light gray background -->
</nav>
```

### Dark Navbar (Light text on dark background)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Dark background -->
</nav>
```

### Primary Color Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <!-- Blue background -->
</nav>
```

### Custom Color Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2c3e50;">
    <!-- Custom dark blue-gray -->
</nav>
```

**Important:** 
- Use `navbar-light` with light backgrounds
- Use `navbar-dark` with dark backgrounds
- This controls text color for readability

---

## Responsive Navbar Breakpoints

The `navbar-expand-*` class controls when the navbar collapses:

```html
<!-- Always collapsed (hamburger on all sizes) -->
<nav class="navbar navbar-light bg-light">

<!-- Expands at small screens (≥ 576px) -->
<nav class="navbar navbar-expand-sm navbar-light bg-light">

<!-- Expands at medium screens (≥ 768px) -->
<nav class="navbar navbar-expand-md navbar-light bg-light">

<!-- Expands at large screens (≥ 992px) -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">

<!-- Expands at extra large screens (≥ 1200px) -->
<nav class="navbar navbar-expand-xl navbar-light bg-light">

<!-- Never collapses (always horizontal) -->
<nav class="navbar navbar-expand navbar-light bg-light">
```

**Most Common:** `navbar-expand-lg` - Collapses on tablets and phones, expands on desktops

---

## Adding a Logo/Brand

The brand is typically the site name or logo on the left side:

### Text Brand

```html
<a class="navbar-brand" href="#">My Website</a>
```

### Image Logo

```html
<a class="navbar-brand" href="#">
    <img src="logo.png" alt="Logo" height="30">
</a>
```

### Text + Image Brand

```html
<a class="navbar-brand" href="#">
    <img src="logo.png" alt="Logo" height="30" class="d-inline-block align-text-top">
    My Brand
</a>
```

---

## Navigation Links

Links go inside `navbar-nav` as list items:

### Basic Links

```html
<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
    </li>
</ul>
```

**The `active` class:** Highlights the current page

### Disabled Links

```html
<li class="nav-item">
    <a class="nav-link disabled" href="#">Coming Soon</a>
</li>
```

---

## Alignment Options

By default, navbar links align to the left. You can change this:

### Left-Aligned (Default)

```html
<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>
```

### Right-Aligned Links

```html
<ul class="navbar-nav ms-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
    </li>
</ul>
```

**The `ms-auto` class** pushes content to the right (margin-start: auto)

### Center-Aligned Links

```html
<ul class="navbar-nav mx-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>
```

### Split Alignment (Links on both sides)

```html
<div class="collapse navbar-collapse">
    <!-- Left side links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li>
    </ul>
    
    <!-- Right side links -->
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sign Up</a>
        </li>
    </ul>
</div>
```

---

## Dropdown Menus in Navbar

Dropdowns let you group related links under one menu item:

### Basic Dropdown

```html
<ul class="navbar-nav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" 
           id="servicesDropdown" role="button" 
           data-bs-toggle="dropdown" aria-expanded="false">
            Services
        </a>
        <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
            <li><a class="dropdown-item" href="#">Web Design</a></li>
            <li><a class="dropdown-item" href="#">App Development</a></li>
            <li><a class="dropdown-item" href="#">SEO</a></li>
        </ul>
    </li>
</ul>
```

### Key Dropdown Classes:

| Class | Purpose |
|-------|---------|
| `dropdown` | Makes the nav-item a dropdown container |
| `dropdown-toggle` | Adds the down arrow icon |
| `dropdown-menu` | The menu that appears when clicked |
| `dropdown-item` | Individual items in the dropdown |

### Dropdown with Dividers

```html
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action 1</a></li>
    <li><a class="dropdown-item" href="#">Action 2</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated Link</a></li>
</ul>
```

### Dropdown with Headers

```html
<ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Category 1</h6></li>
    <li><a class="dropdown-item" href="#">Item 1</a></li>
    <li><a class="dropdown-item" href="#">Item 2</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><h6 class="dropdown-header">Category 2</h6></li>
    <li><a class="dropdown-item" href="#">Item 3</a></li>
    <li><a class="dropdown-item" href="#">Item 4</a></li>
</ul>
```

---

## Buttons in Navbar

You can add buttons to your navbar for calls-to-action:

### Single Button

```html
<div class="collapse navbar-collapse">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li>
    </ul>
    
    <!-- Button on the right -->
    <button class="btn btn-primary ms-auto">Get Started</button>
</div>
```

### Multiple Buttons

```html
<div class="collapse navbar-collapse">
    <ul class="navbar-nav">
        <!-- Links here -->
    </ul>
    
    <div class="d-flex ms-auto">
        <button class="btn btn-outline-primary me-2">Login</button>
        <button class="btn btn-primary">Sign Up</button>
    </div>
</div>
```

---

## Search Bar in Navbar

Adding a search form to your navigation:

### Basic Search Form

```html
<div class="collapse navbar-collapse">
    <ul class="navbar-nav">
        <!-- Links here -->
    </ul>
    
    <form class="d-flex ms-auto" role="search">
        <input class="form-control me-2" type="search" 
               placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</div>
```

### Search Form with Icon

```html
<form class="d-flex ms-auto">
    <input class="form-control me-2" type="search" placeholder="Search">
    <button class="btn btn-primary" type="submit">🔍</button>
</form>
```

---

## Fixed and Sticky Navbars

Control how the navbar behaves when scrolling:

### Fixed to Top

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <!-- Navbar stays at top while scrolling -->
</nav>
```

**Important:** When using `fixed-top`, add padding to `<body>` so content doesn't hide behind navbar:

```html
<style>
    body {
        padding-top: 56px; /* Height of navbar */
    }
</style>
```

### Fixed to Bottom

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
    <!-- Navbar stays at bottom -->
</nav>
```

### Sticky Top (Shows/hides based on scroll)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <!-- Sticks to top when you scroll to it -->
</nav>
```

---

## Complete Navbar Examples

### Example 1: Simple Business Site

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="logo.png" alt="Logo" height="30"> BizCorp
        </a>
        
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Example 2: E-commerce Site with Dropdown

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">ShopStore</a>
        
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarMain">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarMain">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       id="shopDropdown" data-bs-toggle="dropdown">
                        Shop
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Electronics</a></li>
                        <li><a class="dropdown-item" href="#">Clothing</a></li>
                        <li><a class="dropdown-item" href="#">Home & Garden</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">All Products</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Deals</a>
                </li>
            </ul>
            
            <form class="d-flex me-3">
                <input class="form-control me-2" type="search" placeholder="Search products">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
            
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        🛒 Cart <span class="badge bg-light text-dark">3</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Example 3: App-Style Navigation

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">MyApp</a>
        
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarApp">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarApp">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Messages</a>
                </li>
            </ul>
            
            <div class="d-flex">
                <button class="btn btn-outline-light me-2">
                    🔔 <span class="badge bg-danger">5</span>
                </button>
                <button class="btn btn-light">Profile</button>
            </div>
        </div>
    </div>
</nav>

<style>
    body {
        padding-top: 56px;
    }
</style>
```

---

## Container vs Container-Fluid

Inside your navbar, you can use different container types:

### With `container` (Centered, max-width)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <!-- Content is centered with margins -->
    </div>
</nav>
```

**Effect:** Navbar content aligns with page content (if using `container` on page)

### With `container-fluid` (Full-width)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <!-- Content stretches edge-to-edge -->
    </div>
</nav>
```

**Effect:** Navbar content goes to screen edges

---

## Important: Bootstrap JavaScript Required!

For navbars with collapsible menus and dropdowns to work, you MUST include Bootstrap's JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Site</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Your navbar and content here -->
    
    <!-- Bootstrap JavaScript - REQUIRED for navbar toggle and dropdowns -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Without the JavaScript:**
- Hamburger menu won't work
- Dropdowns won't open
- Collapsible sections won't collapse

---

## Building a Complete Page with Navbar

Here's a full example with navbar and content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Example</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">MySite</a>
            
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarMain">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <div class="bg-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 mx-auto text-center">
                    <h1 class="display-4 mb-4">Welcome to MySite</h1>
                    <p class="lead">We create amazing web experiences</p>
                    <button class="btn btn-primary btn-lg">Get Started</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Features Section -->
    <div class="container my-5">
        <h2 class="text-center mb-4">Our Features</h2>
        <div class="row">
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <div class="display-4 text-primary">⚡</div>
                        <h5 class="card-title mt-3">Fast</h5>
                        <p class="card-text">Lightning-fast performance</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <div class="display-4 text-success">✓</div>
                        <h5 class="card-title mt-3">Reliable</h5>
                        <p class="card-text">Always available when you need it</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <div class="display-4 text-info">🔒</div>
                        <h5 class="card-title mt-3">Secure</h5>
                        <p class="card-text">Bank-level security</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <footer class="bg-dark text-light py-4 mt-5">
        <div class="container text-center">
            <p class="mb-0">© 2025 MySite. All rights reserved.</p>
        </div>
    </footer>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## Testing Your Navbar

### Testing Checklist:

**Desktop View (> 992px):**
- [ ] All links visible horizontally
- [ ] Brand/logo on the left
- [ ] Links properly aligned (left, center, or right)
- [ ] Dropdowns work when clicked
- [ ] Hover effects work on links

**Mobile View (< 992px):**
- [ ] Hamburger icon appears
- [ ] Clicking hamburger expands/collapses menu
- [ ] Links stack vertically when expanded
- [ ] Dropdowns work in collapsed view
- [ ] Links are easy to tap (not too small)

**All Sizes:**
- [ ] Active page is highlighted
- [ ] Disabled links don't work
- [ ] Buttons and forms work correctly
- [ ] Search bar functions properly

---

## Common Navbar Mistakes

### ❌ Forgetting Bootstrap JavaScript

```html
<!-- Navbar won't work without this! -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### ❌ Wrong Color Combination

```html
<!-- Hard to read! Dark text on dark background -->
<nav class="navbar navbar-dark bg-dark">
```

**Should be:**
```html
<nav class="navbar navbar-light bg-dark">  <!-- Light text on dark -->
```

### ❌ Mismatched IDs

```html
<!-- These IDs must match! -->
<button data-bs-target="#navbarNav"></button>
<div class="collapse navbar-collapse" id="navbarNav">
```

### ❌ Forgetting Container

```html
<!-- Content not properly contained -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Brand</a>  <!-- Missing container wrapper -->
</nav>
```

**Should be:**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
    </div>
</nav>
```

---

## Quick Reference: Navbar Classes

| Class | Purpose |
|-------|---------|
| `navbar` | Base navbar class (required) |
| `navbar-expand-lg` | Collapse at large breakpoint |
| `navbar-light` | Light text on dark bg |
| `navbar-dark` | Dark text on light bg |
| `navbar-brand` | Logo/site name |
| `navbar-toggler` | Hamburger menu button |
| `navbar-collapse` | Collapsible section |
| `navbar-nav` | List of nav links |
| `nav-item` | Individual link container |
| `nav-link` | The actual link |
| `active` | Highlight current page |
| `dropdown` | Dropdown menu container |
| `dropdown-toggle` | Dropdown trigger |
| `dropdown-menu` | Dropdown content |
| `dropdown-item` | Link in dropdown |
| `fixed-top` | Fix navbar to top |
| `sticky-top` | Sticky positioning |

---

## Summary

In this lesson, you learned:
- ✅ Bootstrap navbar structure and classes
- ✅ Creating responsive navigation that collapses on mobile
- ✅ Adding logos, links, buttons, and search forms
- ✅ Creating dropdown menus
- ✅ Aligning navbar content (left, center, right)
- ✅ Fixed and sticky positioning
- ✅ Color schemes for different designs
- ✅ Building complete pages with navigation
- ✅ Testing navbars on different screen sizes

### Next Lesson Preview:
In the next lesson, we'll learn about **Bootstrap Forms** and connect them to the JavaScript validation you learned in js07!

---

## Key Terms
- **Navbar**: Navigation bar - menu at top of website
- **Hamburger Menu**: Three-line icon that expands mobile navigation
- **Collapse**: Hide/show content based on screen size
- **Dropdown**: Menu that appears when clicking a link
- **Toggle**: Switch between two states (expanded/collapsed)
- **Brand**: Logo or site name in navbar
- **Fixed**: Stays in position while scrolling
- **Sticky**: Sticks to position after scrolling to it
- **Active**: Highlighted state showing current page
