# Lesson 07: Responsive Photo Gallery — Guided Walkthrough

## Project Overview

You will build a **responsive photo gallery** that:
- Uses **flexbox** for initial layout
- Adapts to different screen sizes with **media queries**
- Rebuilds the same gallery using **CSS Grid**

This walkthrough shows you three approaches to the same problem, demonstrating how flexbox, media queries, and grid all solve layout challenges.

---

## Part 1: Flexbox Gallery (Mobile-First)

### Step 1: Create HTML Structure

Create an `index.html` file with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Photo Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Photo Gallery</h1>
    <div class="gallery">
      <div class="photo">
        <img src="photo1.jpg" alt="Photo 1">
        <p>Beautiful landscape</p>
      </div>
      <div class="photo">
        <img src="photo2.jpg" alt="Photo 2">
        <p>Mountain view</p>
      </div>
      <div class="photo">
        <img src="photo3.jpg" alt="Photo 3">
        <p>Sunset scene</p>
      </div>
      <div class="photo">
        <img src="photo4.jpg" alt="Photo 4">
        <p>Ocean waves</p>
      </div>
      <div class="photo">
        <img src="photo5.jpg" alt="Photo 5">
        <p>Forest trees</p>
      </div>
      <div class="photo">
        <img src="photo6.jpg" alt="Photo 6">
        <p>City skyline</p>
      </div>
    </div>
  </main>
</body>
</html>
```

### Step 2: CSS for Mobile (Single Column)

Add these styles to `styles.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 20px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

/* Mobile-first: single column with flexbox */
.gallery {
  display: flex;
  flex-direction: column;  /* Stack items vertically */
  gap: 20px;              /* Space between items */
}

.photo {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.photo img {
  width: 100%;
  height: auto;
  display: block;
}

.photo p {
  padding: 15px;
  text-align: center;
  color: #666;
}
```

**Try This 1:** What CSS property makes the gallery stack vertically? _______

---

### Step 3: Add Media Query for Tablet (2 Columns)

Add this media query to your CSS:

```css
/* Tablet: 2 columns */
@media (min-width: 768px) {
  .gallery {
    flex-direction: _______;  /* Change to horizontal */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Try This 2:** What value should `flex-direction` be for a horizontal layout? _______

---

### Step 4: Add Media Query for Desktop (3 Columns)

```css
/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(_______, 1fr);
  }
}
```

**Try This 3:** How many columns should desktop have? _______

---

## Part 2: Media Queries Deep Dive

### Understanding the Mobile-First Approach

**Mobile (default):**
```css
.gallery {
  grid-template-columns: 1fr;  /* 1 column */
}
```

**Add styles progressively:**
```css
@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
  }
}

@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  }
}
```

### Why Mobile-First?

1. **Mobile-optimized by default** — Everyone gets a fast, simple experience
2. **Progressive enhancement** — Larger screens get more complex layouts
3. **Easier to maintain** — Less CSS to override
4. **Better performance** — Simpler CSS loads faster on mobile

---

## Part 3: The Same Gallery Using CSS Grid

Now rebuild the gallery using **pure CSS Grid** (no flexbox).

### Grid HTML (same as before)

Use the same HTML structure. Only change the CSS.

### Grid CSS - Mobile (1 Column)

```css
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
```

**Try This 4:** What does `1fr` mean? _______

---

### Grid CSS - Tablet (2 Columns)

```css
@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(_______, 1fr);
  }
}
```

**Try This 5:** What does `repeat(2, 1fr)` create? _______

---

### Grid CSS - Desktop (3 Columns)

```css
@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Part 4: Responsive Images

### The Critical Rule

Make sure every image in responsive layouts follows this pattern:

```css
.photo img {
  max-width: 100%;    /* Never wider than container */
  height: auto;       /* Maintain aspect ratio */
  display: block;     /* Remove inline spacing */
}
```

**Try This 6:** Why do we need `height: auto`? _______

---

## Part 5: Viewport Meta Tag

Every responsive page MUST have this in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**What it does:**
- `width=device-width` — Use device width, not desktop width
- `initial-scale=1.0` — Start at 100% zoom, no automatic scaling

**Try This 7:** What happens without this meta tag on mobile? _______

---

## Testing Your Gallery

### Browser DevTools Steps:

1. Open your HTML file in a browser
2. Press `F12` to open DevTools
3. Click the **device toggle** (mobile icon) in DevTools
4. Select different devices: iPhone, iPad, Desktop
5. Verify:
   - Mobile: 1 column
   - Tablet: 2 columns
   - Desktop: 3 columns

### Manual Testing Steps:

1. Open browser to full width → Should see 3 columns
2. Resize window to ~800px width → Should see 2 columns
3. Resize window to ~400px width → Should see 1 column

---

## Flexbox vs Grid: Side-by-Side

### Flexbox Approach
```css
.gallery {
  display: flex;
  flex-direction: column;  /* Mobile default */
  gap: 20px;
}

@media (min-width: 768px) {
  .gallery {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
```

### Grid Approach
```css
.gallery {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile default */
  gap: 20px;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Why Grid for This?** Grid makes it easier to create exact column counts. Flexbox is better for flexible component layouts.

---

## Summary: Key Takeaways

1. **Mobile-First:** Write default styles for mobile, add media queries for larger screens
2. **Media Queries:** Use `@media (min-width: Xpx)` to target screen sizes
3. **Responsive Images:** Always use `max-width: 100%` and `height: auto`
4. **Viewport Tag:** Never forget `<meta name="viewport">`
5. **Flexbox:** Great for one-dimensional layouts (rows or columns)
6. **Grid:** Great for two-dimensional layouts (rows and columns)
7. **Breakpoints:** 768px (tablet), 1024px (desktop) are industry standard

---

## Answer Key

1. `flex-direction`
2. `row`
3. `3`
4. One fraction of available space
5. Two equal-width columns
6. To maintain the original aspect ratio when the width changes
7. The page would display at desktop size, making it too wide and hard to read on mobile

---
