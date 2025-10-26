# Lesson B2: Bootstrap Grid System & Responsive Design

## Why are we learning this?

Have you ever noticed how websites look different on your phone versus your computer? That's responsive design! The Bootstrap Grid System is like having an intelligent layout assistant that automatically rearranges your content to look perfect on any screen size - from tiny phones to giant desktop monitors. This is one of the most powerful features of Bootstrap and a critical skill for modern web development.

---

## What is the Bootstrap Grid System?

The **Grid System** is Bootstrap's way of organizing content into rows and columns that automatically adjust to different screen sizes. Think of it like a smart spreadsheet that reorganizes itself based on how much space is available.

### Real-World Analogy
Imagine organizing books on shelves:
- **On a wide bookshelf (desktop):** You can fit 4 books side-by-side
- **On a medium bookshelf (tablet):** Only 2 books fit side-by-side
- **On a narrow bookshelf (phone):** Books must stack vertically, one per row

That's exactly what the Bootstrap Grid does with your website content!

---

## The Three Building Blocks

Every Bootstrap grid layout uses three elements working together:

### 1. Container
The outer wrapper that holds everything and centers your content.

```html
<div class="container">
    <!-- Everything goes inside -->
</div>
```

**Two Container Types:**
- `container` - Fixed width with margins (stops growing at certain screen sizes)
- `container-fluid` - Full width, edge-to-edge (stretches to fill screen)

### 2. Row
Creates a horizontal group for your columns.

```html
<div class="container">
    <div class="row">
        <!-- Columns go here -->
    </div>
</div>
```

**Important:** Columns must always be direct children of rows!

### 3. Column
The actual content areas that divide the row into parts.

```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

---

## The 12-Column System

Bootstrap divides every row into **12 equal parts**. You control how many of those 12 parts each column takes up.

### Why 12?
Because 12 is divisible by 1, 2, 3, 4, 6, and 12 - giving you lots of layout flexibility!

### Visual Representation
```
[-------- 12 columns total --------]
[6] [6]                  (2 equal columns)
[4] [4] [4]              (3 equal columns)
[3] [3] [3] [3]          (4 equal columns)
[8] [4]                  (2/3 and 1/3 split)
[9] [3]                  (3/4 and 1/4 split)
```

### Equal Width Columns

When you use `col` without a number, columns automatically divide space equally:

```html
<div class="row">
    <div class="col">Equal 1</div>
    <div class="col">Equal 2</div>
    <div class="col">Equal 3</div>
</div>
```
**Result:** Three columns, each taking 4/12 of the space (since 12 ÷ 3 = 4)

### Specific Width Columns

Use `col-X` where X is a number from 1-12:

```html
<div class="row">
    <div class="col-8">Wide column (8/12 = 66%)</div>
    <div class="col-4">Narrow column (4/12 = 33%)</div>
</div>
```

### Mixing Sized and Auto Columns

```html
<div class="row">
    <div class="col-6">Fixed: Half width</div>
    <div class="col">Auto: Takes remaining space</div>
</div>
```

**Important Rule:** Column numbers in a row should add up to 12 (or less)!

---

## Responsive Breakpoints

This is where the magic happens! Bootstrap has 5 screen size categories:

| Breakpoint | Device | Screen Width | Class Prefix |
|------------|--------|--------------|--------------|
| Extra Small | Phones | < 576px | `col-` |
| Small | Landscape phones | ≥ 576px | `col-sm-` |
| Medium | Tablets | ≥ 768px | `col-md-` |
| Large | Desktops | ≥ 992px | `col-lg-` |
| Extra Large | Large desktops | ≥ 1200px | `col-xl-` |

### How Breakpoints Work

You can specify different column sizes for different screen sizes:

```html
<div class="col-12 col-md-6 col-lg-4">
    Responsive column
</div>
```

**What this means:**
- **On phones** (`col-12`): Full width (12/12 = 100%)
- **On tablets** (`col-md-6`): Half width (6/12 = 50%)
- **On desktops** (`col-lg-4`): One-third width (4/12 = 33%)

### Mobile-First Approach

Bootstrap uses "mobile-first" design, meaning:
1. Start with the mobile layout (smallest screen)
2. Add larger breakpoints as needed
3. Each breakpoint applies to that size **and larger** (until overridden)

```html
<div class="col-12 col-md-6">
    <!-- Mobile: full width (12)
         Tablet and up: half width (6) -->
</div>
```

---

## Common Layout Patterns

### Pattern 1: Two-Column Layout

**Desktop:** Side-by-side  
**Mobile:** Stacked

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            <h2>Left Content</h2>
            <p>This takes the left side on tablets and up.</p>
        </div>
        <div class="col-12 col-md-6">
            <h2>Right Content</h2>
            <p>This takes the right side on tablets and up.</p>
        </div>
    </div>
</div>
```

### Pattern 2: Three-Column Card Layout

**Desktop:** Three across  
**Tablet:** Two across  
**Mobile:** Stacked

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">Card 1</div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">Card 2</div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">Card 3</div>
        </div>
    </div>
</div>
```

### Pattern 3: Sidebar Layout

**Desktop:** 3/4 main content, 1/4 sidebar  
**Mobile:** Stacked (sidebar below content)

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-9">
            <h1>Main Content</h1>
            <p>Your main article or content here.</p>
        </div>
        <div class="col-12 col-lg-3">
            <h3>Sidebar</h3>
            <p>Related links, ads, or widgets.</p>
        </div>
    </div>
</div>
```

### Pattern 4: Four-Column Grid

**Desktop:** Four across  
**Tablet:** Two across  
**Mobile:** Stacked

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Item 1</div>
        <div class="col-12 col-md-6 col-lg-3">Item 2</div>
        <div class="col-12 col-md-6 col-lg-3">Item 3</div>
        <div class="col-12 col-md-6 col-lg-3">Item 4</div>
    </div>
</div>
```

---

## Column Ordering & Offsetting

### Offsetting Columns

Add empty space before a column using `offset-X`:

```html
<div class="row">
    <div class="col-md-4 offset-md-4">
        <!-- Starts after 4 columns of empty space -->
        <!-- Takes 4 columns -->
        <!-- Centered! (4 + 4 + 4 = 12) -->
    </div>
</div>
```

**Centering a column:**
```html
<div class="row">
    <div class="col-6 offset-3">
        <!-- 3 empty + 6 content + 3 empty = 12 -->
        <!-- Perfectly centered! -->
    </div>
</div>
```

### Responsive Offsets

Offsets can be different at different screen sizes:

```html
<div class="col-12 col-md-6 offset-md-3">
    <!-- Mobile: Full width, no offset
         Tablet+: Half width, centered with offset -->
</div>
```

---

## Gutters (Spacing Between Columns)

By default, Bootstrap adds space (gutters) between columns. You can control this:

### Default Gutters
```html
<div class="row">
    <div class="col">Has spacing</div>
    <div class="col">Has spacing</div>
</div>
```

### No Gutters
```html
<div class="row g-0">
    <div class="col">No spacing</div>
    <div class="col">No spacing</div>
</div>
```

### Custom Gutter Sizes
```html
<div class="row g-2">Small gutters</div>
<div class="row g-3">Medium gutters (default)</div>
<div class="row g-5">Large gutters</div>
```

---

## Nesting Rows and Columns

You can put rows inside columns to create complex layouts:

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-8">
            <h2>Main Section</h2>
            
            <!-- Nested row inside this column -->
            <div class="row">
                <div class="col-6">Nested 1</div>
                <div class="col-6">Nested 2</div>
            </div>
        </div>
        
        <div class="col-12 col-md-4">
            <h3>Sidebar</h3>
        </div>
    </div>
</div>
```

**Important:** A nested row always has its own 12-column grid system!

---

## Bootstrap Cards (Perfect with Grid)

Cards are Bootstrap's flexible content containers. They work great with the grid system!

### Basic Card Structure

```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

### Card with Header and Footer

```html
<div class="card">
    <div class="card-header">
        Featured
    </div>
    <div class="card-body">
        <h5 class="card-title">Special title</h5>
        <p class="card-text">Card content here.</p>
    </div>
    <div class="card-footer text-muted">
        2 days ago
    </div>
</div>
```

### Card with Image

```html
<div class="card">
    <img src="image.jpg" class="card-img-top" alt="Description">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Description of the image.</p>
        <a href="#" class="btn btn-primary">Learn More</a>
    </div>
</div>
```

### Cards in a Grid Layout

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card 1</h5>
                    <p class="card-text">Content here.</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card 2</h5>
                    <p class="card-text">Content here.</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card 3</h5>
                    <p class="card-text">Content here.</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## Testing Responsive Layouts

### How to Test Your Responsive Design

1. **Browser DevTools:**
   - Press F12 (or right-click → Inspect)
   - Click the device toolbar icon (looks like a phone/tablet)
   - Choose different device sizes from dropdown
   - Or drag the viewport to resize manually

2. **Common Sizes to Test:**
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1200px+

3. **What to Look For:**
   - ✅ Content doesn't overflow or get cut off
   - ✅ Text is readable (not too small)
   - ✅ Buttons are easy to tap on mobile
   - ✅ Images scale appropriately
   - ✅ Layout makes sense at each size

---

## Common Mistakes to Avoid

### ❌ Forgetting the Container

```html
<!-- WRONG -->
<div class="row">
    <div class="col">Content</div>
</div>
```

```html
<!-- CORRECT -->
<div class="container">
    <div class="row">
        <div class="col">Content</div>
    </div>
</div>
```

### ❌ Columns Exceeding 12

```html
<!-- WRONG - adds to 16! -->
<div class="row">
    <div class="col-8">Too much</div>
    <div class="col-8">Together</div>
</div>
```

```html
<!-- CORRECT - adds to 12 -->
<div class="row">
    <div class="col-6">Perfect</div>
    <div class="col-6">Balance</div>
</div>
```

### ❌ Putting Content Directly in Row

```html
<!-- WRONG -->
<div class="row">
    This text is directly in the row!
</div>
```

```html
<!-- CORRECT -->
<div class="row">
    <div class="col">
        This text is in a column!
    </div>
</div>
```

### ❌ Not Using Mobile-First Thinking

```html
<!-- LESS EFFICIENT -->
<div class="col-lg-4 col-md-6 col-sm-12">
```

```html
<!-- BETTER (mobile-first) -->
<div class="col-12 col-md-6 col-lg-4">
```

---

## Practical Example: Complete Responsive Page

Here's a full example putting it all together:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Page</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <!-- Header -->
        <div class="row mb-4">
            <div class="col">
                <h1 class="text-center">My Responsive Website</h1>
            </div>
        </div>
        
        <!-- Hero Section -->
        <div class="row mb-4">
            <div class="col-12 col-lg-8">
                <h2>Main Content</h2>
                <p>This takes up most of the space on desktop,
                   but full width on mobile.</p>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sidebar</h5>
                        <p class="card-text">Additional info here.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Three-Column Feature Section -->
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Feature 1</h5>
                        <p class="card-text">Description here.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Feature 2</h5>
                        <p class="card-text">Description here.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Feature 3</h5>
                        <p class="card-text">Description here.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

**How this responds:**
- **Mobile (< 768px):** Everything stacks vertically
- **Tablet (768px - 991px):** Features show 2 per row, main/sidebar stack
- **Desktop (≥ 992px):** Features show 3 per row, main/sidebar side-by-side

---

## Quick Reference: Grid Classes

| Class | Purpose | Example |
|-------|---------|---------|
| `container` | Fixed-width container | `<div class="container">` |
| `container-fluid` | Full-width container | `<div class="container-fluid">` |
| `row` | Horizontal column group | `<div class="row">` |
| `col` | Auto-width column | `<div class="col">` |
| `col-6` | Specific width (6/12) | `<div class="col-6">` |
| `col-md-6` | Responsive width | `<div class="col-md-6">` |
| `offset-3` | Empty space before | `<div class="col-6 offset-3">` |
| `g-0` | No gutters | `<div class="row g-0">` |
| `g-3` | Medium gutters | `<div class="row g-3">` |

---

## Summary

In this lesson, you learned:
- ✅ The Bootstrap Grid System uses containers, rows, and columns
- ✅ Every row is divided into 12 equal parts
- ✅ Responsive breakpoints: xs, sm, md, lg, xl
- ✅ Mobile-first design approach
- ✅ How to create layouts that adapt to screen size
- ✅ Column offsetting and spacing
- ✅ Bootstrap cards for content organization
- ✅ Testing responsive designs in browser DevTools

### Next Lesson Preview:
In the next lesson, we'll learn about **Navigation Bars** and how to create professional navigation menus that collapse on mobile devices!

---

## Key Terms
- **Grid System**: Bootstrap's 12-column layout framework
- **Container**: Outer wrapper that holds rows and centers content
- **Row**: Horizontal grouping for columns
- **Column**: Content area that takes up 1-12 parts of a row
- **Breakpoint**: Screen width where layout changes
- **Responsive Design**: Layouts that adapt to different screen sizes
- **Mobile-First**: Design starting with mobile, adding larger breakpoints
- **Offset**: Empty space added before a column
- **Gutter**: Space between columns
- **Card**: Flexible content container with optional headers/footers
