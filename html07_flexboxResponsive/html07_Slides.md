---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 07: Flexbox & Responsive Design

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 07a — Flexbox Layout" -->

# What is Flexbox?

- **Flexible Box Layout** makes aligning elements easy
- One-dimensional layout system (rows or columns)
- Perfect for navigation bars, cards, and component layouts
- Uses `display: flex` on container, not children

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

# Flexbox Key Properties

**Container Properties:**
- `flex-direction`: `row` (default), `column`, `row-reverse`, `column-reverse`
- `justify-content`: distribute along main axis (`flex-start`, `center`, `space-between`)
- `align-items`: align along cross axis (`flex-start`, `center`, `stretch`)
- `flex-wrap`: `nowrap` (default), `wrap`, `wrap-reverse`
- `gap`: space between items

**Item Properties:**
- `flex`: grow, shrink, basis shorthand
- `align-self`: override container's align-items

---

# Flexbox Example: Navigation Bar

```html
<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  background: #333;
}

.navbar a {
  color: white;
  text-decoration: none;
}
```

---

<!-- _header: "Sub-Lesson 07b — Media Queries & Responsive Design" -->

# Mobile-First Approach

**Write CSS for mobile first, then add larger screens:**

```css
/* Mobile styles (small screens) */
body { font-size: 14px; }

/* Tablets and up */
@media (min-width: 768px) {
  body { font-size: 16px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  body { font-size: 18px; }
}
```

**Advantages:**
- Mobile-optimized experience for everyone
- Progressive enhancement (add features for larger screens)
- Lighter, faster on mobile devices

---

# Responsive Images

**Make images scale with screen size:**

```html
<img src="photo.jpg" alt="description" class="responsive-image">
```

```css
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
}
```

**Viewport Meta Tag (required in all HTML files):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

# Media Query Breakpoints

**Common breakpoints (mobile-first):**

| Device | Width | Query |
|--------|-------|-------|
| Mobile | < 768px | default |
| Tablet | 768px+ | `@media (min-width: 768px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

```css
/* Single column on mobile */
.grid { display: flex; flex-direction: column; }

/* 2 columns on tablet */
@media (min-width: 768px) {
  .grid { flex-direction: row; }
}
```

---

<!-- _header: "Sub-Lesson 07c — CSS Grid Basics" -->

# What is CSS Grid?

- **Two-dimensional** layout system (rows and columns)
- Define grid structure with `display: grid`
- Best for page layouts, not components
- More powerful but more complex than flexbox

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto 50px;
  gap: 20px;
}
```

---

# CSS Grid Properties

**Grid Container:**
- `grid-template-columns`: define column widths (e.g., `1fr 1fr 1fr`)
- `grid-template-rows`: define row heights
- `grid-gap` or `gap`: space between cells
- `fr` unit: fraction of available space

**Grid Item:**
- `grid-column`: which column(s) the item spans
- `grid-row`: which row(s) the item spans

**Responsive Grid:**
```css
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

# Flexbox vs Grid

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimensions | 1D (rows or columns) | 2D (rows and columns) |
| Best for | Components, navigation | Page layouts |
| Alignment | Main and cross axis | Rows and columns |
| Complexity | Simple | More options |

**Use both:** Flexbox inside grid cells, grid for page layout.

---

# Putting It Together: Responsive Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .gallery { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 767px) {
  .gallery { grid-template-columns: 1fr; }
}
```

---
