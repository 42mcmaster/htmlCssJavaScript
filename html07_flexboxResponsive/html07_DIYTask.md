# Lesson 07: Independent Project — Responsive Photo Gallery

## Overview

You will build a **fully responsive photo gallery website** from scratch. This is your opportunity to demonstrate mastery of flexbox, media queries, and CSS Grid. You choose which layout approach to use.

**Time:** 45-60 minutes
**Complexity:** Intermediate
**Skills:** Responsive design, flexbox or grid, media queries, responsive images

---

## Requirements

Your gallery must meet ALL of these requirements:

### 1. HTML Structure
- [ ] Valid HTML5 with doctype, meta tags, and semantic elements
- [ ] Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] At least 6 photos/images
- [ ] Gallery wrapper container with individual photo items
- [ ] Photo captions or titles
- [ ] Proper alt text on all images

### 2. Layout (Choose ONE approach)

**OPTION A: Flexbox Layout**
- [ ] Use `display: flex` on gallery container
- [ ] Implement `flex-wrap` for multi-line layout
- [ ] Use `gap` for consistent spacing
- [ ] Use `justify-content` for alignment
- [ ] Responsive flex items with `flex-basis` or `flex: 1`

**OPTION B: CSS Grid Layout**
- [ ] Use `display: grid` on gallery container
- [ ] Use `grid-template-columns` with responsive units
- [ ] Implement `gap` for spacing
- [ ] Use `repeat()` and `auto-fit` or `auto-fill` for responsive grid
- [ ] Example: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`

**OPTION C: Combination (Flexbox + Grid)**
- [ ] Grid for overall page layout (header, gallery, footer)
- [ ] Flexbox for gallery items or navigation

### 3. Responsive Design (Mobile-First)
- [ ] **Mobile (default, < 768px):** 1 column, full width images
- [ ] **Tablet (768px+):** 2 columns
- [ ] **Desktop (1024px+):** 3 or 4 columns
- [ ] Use `@media (min-width: Xpx)` media queries
- [ ] Test at minimum three breakpoints

### 4. Responsive Images
- [ ] All images use `max-width: 100%`
- [ ] All images use `height: auto` to maintain aspect ratio
- [ ] Images display as `block` to remove inline spacing
- [ ] Images scale properly on all screen sizes

### 5. Styling
- [ ] Clean, professional appearance
- [ ] Consistent color scheme (at least 3 colors)
- [ ] Proper spacing and padding
- [ ] Hover effects on photos (shadow, scale, or opacity change)
- [ ] Readable typography with proper line-height

### 6. Additional Features (Choose at least 2)
- [ ] Photo hover effect (scale, shadow, overlay)
- [ ] Lightbox effect or modal on click
- [ ] Category/filter buttons
- [ ] Search functionality
- [ ] Star rating or like button
- [ ] Animated transitions
- [ ] Dark mode toggle
- [ ] Lazy loading images (advanced)

---

## Suggested Page Structure

```html
<body>
  <header>
    <h1>Gallery Title</h1>
    <p>Subtitle or description</p>
  </header>

  <main>
    <!-- Optional: Category/filter buttons -->
    <nav class="filters">
      <button>All</button>
      <button>Category 1</button>
      <button>Category 2</button>
    </nav>

    <!-- Gallery container -->
    <div class="gallery">
      <div class="photo-card">
        <img src="..." alt="...">
        <p class="caption">Photo Title</p>
      </div>
      <!-- More photos -->
    </div>
  </main>

  <footer>
    <p>Copyright and contact info</p>
  </footer>
</body>
```

---

## Step-by-Step Guide

### Step 1: Plan Your Design (5 minutes)
- Sketch your layout on paper
- Decide: Flexbox, Grid, or combination?
- Choose your color scheme
- Plan your breakpoints (mobile, tablet, desktop)

### Step 2: Create HTML (15 minutes)
- Build semantic structure
- Add viewport meta tag
- Add at least 6 photos (use placeholder images)
- Write proper alt text
- Add captions for each photo

### Step 3: Add Basic Styles (10 minutes)
- Body/general styles (font, background)
- Header and footer
- Basic card styling (background, border-radius, shadow)

### Step 4: Create Gallery Layout (15 minutes)
- Implement flexbox OR grid
- Add `gap` for spacing
- Style photo containers
- Make images responsive

### Step 5: Add Media Queries (10 minutes)
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3+ columns
- Test at each breakpoint

### Step 6: Polish and Add Effects (10 minutes)
- Hover effects on photos
- Additional features from the list
- Final styling tweaks
- Test responsiveness

---

## Flexbox Gallery Example (Minimal)

```css
.gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: 768px) {
  .gallery {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .photo-card {
    flex: 0 1 calc(50% - 10px);  /* 2 columns */
  }
}

@media (min-width: 1024px) {
  .photo-card {
    flex: 0 1 calc(33.333% - 14px);  /* 3 columns */
  }
}
```

---

## Grid Gallery Example (Minimal)

```css
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Testing Checklist

Before submitting, verify:

- [ ] Valid HTML5 (no errors in browser console)
- [ ] Viewport meta tag present
- [ ] Mobile view (375px): 1 column, readable
- [ ] Tablet view (768px): 2 columns, responsive
- [ ] Desktop view (1024px): 3+ columns, correct
- [ ] Images scale properly on all sizes
- [ ] No horizontal scrollbars on any screen size
- [ ] Text is readable on mobile (font size adequate)
- [ ] Hover effects work smoothly
- [ ] All links/buttons work
- [ ] Footer is accessible on all screen sizes

---

## Image Resources

**Free image sources:**
- https://via.placeholder.com/ (placeholder images)
- https://unsplash.com/ (high-quality free photos)
- https://pexels.com/ (high-quality free photos)
- https://pixabay.com/ (free stock images)

Or create placeholder images with placeholder.com:
```html
<img src="https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Photo+1" alt="Photo 1">
```

---

## Submission Requirements

Create a folder named `html07_DIYTask_YourName/` containing:

1. **index.html** — Your complete HTML file
2. **styles.css** — Your complete CSS file
3. **README.md** — Brief description of your gallery:
   - Layout approach used (Flexbox/Grid/Combination)
   - Color scheme explanation
   - Features implemented
   - Any challenges and how you solved them
   - Browser compatibility notes

---

## Grading Rubric

| Criteria | Points | Notes |
|----------|--------|-------|
| **HTML Structure** | 15 | Valid HTML, viewport tag, semantic elements |
| **Responsive Layout** | 20 | Flexbox or Grid, works on 3+ breakpoints |
| **Media Queries** | 15 | Mobile-first, min-width breakpoints, correct transitions |
| **Responsive Images** | 10 | max-width: 100%, height: auto, display: block |
| **Styling & Polish** | 15 | Colors, typography, spacing, hover effects |
| **Additional Features** | 15 | At least 2 bonus features implemented |
| **Testing & Performance** | 10 | No scrollbars, smooth interactions, works on mobile |
| **Total** | 100 | |

---

## Common Issues & Solutions

**Problem:** Images aren't scaling on mobile
**Solution:** Check for `max-width: 100%` and `height: auto` on all images

**Problem:** Layout breaks on some screen sizes
**Solution:** Test media queries at exact breakpoints (375px, 768px, 1024px)

**Problem:** Text too small on mobile
**Solution:** Use mobile-first approach with larger font sizes on mobile, adjust down on desktop

**Problem:** Gallery items unequal width
**Solution:** With flexbox, use `flex-basis` or percentage widths consistently

**Problem:** Gaps between grid items are uneven
**Solution:** Use `gap` property instead of margins; it's more consistent

---

## Inspiration & Ideas

**Gallery Themes:**
- Travel photography
- Product showcase
- Portfolio/artwork
- Nature/wildlife
- Food photography
- Student work/projects
- Local business showcase

**Additional Polish:**
- Add shadow effects on hover
- Increase image brightness on hover
- Smooth color transitions
- Animated borders or underlines
- Gradient overlays on images
- Icon overlays on hover

---

## Example Project Structure

```
html07_DIYTask_YourName/
├── index.html          (Your gallery HTML)
├── styles.css          (Your gallery CSS)
├── README.md           (Project description)
└── images/            (Optional: local image folder)
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

---

## Questions to Ask Yourself

1. Does my layout work on mobile first, then enhance for larger screens?
2. Are my images responsive and maintaining aspect ratios?
3. Is my color scheme cohesive and professional?
4. Do hover effects enhance the user experience?
5. Is my code clean, readable, and well-organized?
6. Have I tested on multiple screen sizes?
7. Are there any accessibility issues (alt text, color contrast)?
8. Does my gallery tell a story or showcase content effectively?

---

Good luck! Have fun creating your gallery!
