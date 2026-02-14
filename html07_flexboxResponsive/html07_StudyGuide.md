# Lesson 07: Flexbox & Responsive Design — Study Guide

## Vocabulary

1. **Flexbox (Flexible Box Layout)** — A one-dimensional CSS layout system for arranging items in rows or columns with flexible sizing and alignment options.

2. **display: flex** — CSS property that enables flexbox layout on a container element.

3. **justify-content** — Flexbox property that aligns items along the main axis (horizontally in row direction, vertically in column direction).

4. **align-items** — Flexbox property that aligns items along the cross axis (perpendicular to the main axis).

5. **flex-direction** — Property that sets the main axis of a flex container; values: `row`, `column`, `row-reverse`, `column-reverse`.

6. **flex-wrap** — Property that controls whether flex items wrap to a new line when they don't fit; values: `nowrap`, `wrap`, `wrap-reverse`.

7. **gap** — Property that sets the space between flex or grid items.

8. **Media Query** — CSS rule that applies styles only when specific conditions are met (e.g., screen width, device type).

9. **Breakpoint** — A screen width at which the layout changes; common breakpoints: 768px (tablet), 1024px (desktop).

10. **Mobile-First Approach** — Design method where you write CSS for mobile devices first, then add media queries for larger screens.

11. **Responsive Design** — Web design that adapts layout and content to fit any screen size or device.

12. **Viewport Meta Tag** — HTML tag that sets how a webpage should be displayed on different devices: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

13. **max-width: 100%** — CSS rule that makes images scale down to fit their container without stretching beyond original size.

14. **CSS Grid** — A two-dimensional layout system for creating complex page layouts with rows and columns.

15. **grid-template-columns** — Property that defines the width and number of grid columns.

16. **grid-template-rows** — Property that defines the height and number of grid rows.

17. **grid-gap** (or **gap**) — Property that sets space between grid rows and columns.

18. **fr unit (Fraction Unit)** — CSS unit used in grid that represents a fraction of available space; `1fr` = one part, `2fr` = two parts.

19. **auto-fill** — Grid keyword that fills columns automatically based on available space while maintaining a minimum size.

20. **auto-fit** — Grid keyword similar to auto-fill but collapses empty tracks.

21. **minmax()** — Grid function that sets a minimum and maximum size for columns or rows.

---

## Flexbox Cheat Sheet

### Container Properties
```css
.flex-container {
  display: flex;                    /* Enable flexbox */
  flex-direction: row;              /* row, column, row-reverse, column-reverse */
  justify-content: center;          /* flex-start, center, space-between, space-around, space-evenly */
  align-items: center;              /* flex-start, center, stretch, baseline */
  flex-wrap: wrap;                  /* nowrap, wrap, wrap-reverse */
  gap: 20px;                        /* Space between items */
}
```

### Item Properties
```css
.flex-item {
  flex: 1;                          /* Shorthand: grow shrink basis */
  flex-grow: 1;                     /* How much to grow */
  flex-shrink: 1;                   /* How much to shrink */
  flex-basis: auto;                 /* Base size before flex properties */
  align-self: center;               /* Override container's align-items */
}
```

---

## Media Queries Cheat Sheet

### Mobile-First Structure
```css
/* Styles for mobile (default) */
body { font-size: 14px; }
.container { width: 100%; }

/* Add styles for tablets and larger */
@media (min-width: 768px) {
  body { font-size: 16px; }
  .container { width: 90%; }
}

/* Add styles for desktop and larger */
@media (min-width: 1024px) {
  body { font-size: 18px; }
  .container { width: 1000px; }
}
```

### Common Conditions
```css
@media (min-width: 768px) { }          /* Screen width is at least 768px */
@media (max-width: 767px) { }          /* Screen width is less than 768px */
@media (min-width: 768px) and (max-width: 1023px) { } /* Between 768px and 1023px */
@media (orientation: landscape) { }    /* Landscape orientation */
@media (orientation: portrait) { }     /* Portrait orientation */
```

---

## CSS Grid Cheat Sheet

### Container Properties
```css
.grid-container {
  display: grid;                              /* Enable grid */
  grid-template-columns: 1fr 2fr 1fr;         /* Define column widths */
  grid-template-rows: 100px auto 50px;        /* Define row heights */
  gap: 20px;                                  /* Space between cells */
  grid-template-columns: repeat(3, 1fr);      /* 3 equal columns */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive */
}
```

### Item Properties
```css
.grid-item {
  grid-column: 1 / 3;        /* Span from column 1 to 3 */
  grid-row: 1 / 2;           /* Span from row 1 to 2 */
  grid-column: span 2;       /* Span 2 columns */
}
```

### Common Units
- `1fr` — One fraction of available space
- `200px` — Fixed pixels
- `50%` — Percentage of container
- `auto` — Size based on content

---

## ODE Competencies

**6.5.8 Format Website Layout**
- Create layouts using CSS Flexbox and Grid
- Arrange elements in flexible, responsive containers
- Design multi-column and multi-row page structures

**6.5.13 Responsive Design**
- Use media queries to adjust layout for different screen sizes
- Implement mobile-first design approach
- Test and optimize for multiple devices and breakpoints

**6.2.5 Resize Images with CSS**
- Use `max-width: 100%` to make images responsive
- Maintain aspect ratio with `height: auto`
- Ensure images scale properly on mobile devices

---

## Key Concepts Summary

### When to Use Flexbox
- Navigation bars
- Card layouts
- Component alignment
- Simple one-dimensional layouts
- Equal spacing distribution

### When to Use Grid
- Page layouts (header, sidebar, main, footer)
- Complex two-dimensional layouts
- Precise column and row control
- Gallery grids with fixed dimensions

### Responsive Design Process
1. Write CSS for mobile first (default styles)
2. Define breakpoints (768px, 1024px)
3. Add media queries for larger screens
4. Test on multiple devices
5. Ensure images and text scale properly

### Mobile-First Advantages
- Optimized for all users, especially mobile
- Progressive enhancement (add features for bigger screens)
- Cleaner, more maintainable CSS
- Better performance on slow connections

---
