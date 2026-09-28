---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 06: Box Model & Spacing

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 06a — The Box Model" -->

# The Box Model

Every HTML element is a **box** with four layers:

```
┌──────────────────────────────────┐
│          MARGIN                  │
│  ┌────────────────────────────┐  │
│  │      BORDER                │  │
│  │  ┌──────────────────────┐  │  │
│  │  │     PADDING          │  │  │
│  │  │  ┌──────────────────┐│  │  │
│  │  │  │    CONTENT       ││  │  │
│  │  │  │  (text, images)  ││  │  │
│  │  │  └──────────────────┘│  │  │
│  │  └──────────────────────┘  │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

- **Content**: Your element (text, images)
- **Padding**: Space *inside* the border
- **Border**: Line around padding
- **Margin**: Space *outside* the border

---

# Box Model Properties

```css
/* Content dimensions */
width: 300px;
height: 200px;

/* Padding (inside) */
padding: 20px;

/* Border */
border: 2px solid black;

/* Margin (outside) */
margin: 15px;
```

**Order of values (shorthand):**
- `10px` → all sides
- `10px 20px` → top/bottom, left/right
- `10px 20px 30px 40px` → top, right, bottom, left

---

# box-sizing: border-box

By default, width includes ONLY content. Add padding/border and it gets wider!

```css
/* Default: width = content only */
box-sizing: content-box;
width: 300px;
padding: 20px;
/* Total width = 340px! */

/* Better: width = content + padding + border */
box-sizing: border-box;
width: 300px;
padding: 20px;
border: 2px solid black;
/* Total width = 300px (stays fixed) */
```

**Best Practice:** Use `box-sizing: border-box;` for all elements.

```css
* {
  box-sizing: border-box;
}
```

---

<!-- _header: "Sub-Lesson 06b — Display & Positioning" -->

# Display Property

**Display** controls how an element appears on the page:

```css
display: block;         /* Full width, starts new line */
display: inline;        /* Flows with text, width/height ignored */
display: inline-block;  /* Inline but respects width/height */
display: none;          /* Hidden from page entirely */
```

| Display | Width/Height | Line Break | Example |
|---------|-------------|-----------|---------|
| block | Yes | Yes | `<div>`, `<p>` |
| inline | No | No | `<span>`, `<a>` |
| inline-block | Yes | No | custom buttons |
| none | N/A | Hidden | hide elements |

---

# Position Property

**Position** controls where an element appears:

```css
position: static;    /* Default, flow of document */
position: relative;  /* Relative to normal position */
position: absolute;  /* Relative to nearest positioned parent */
position: fixed;     /* Relative to viewport, stays when scrolling */
```

With `relative`, `absolute`, `fixed`, use offset properties:
```css
top: 10px;
right: 20px;
bottom: 30px;
left: 40px;
z-index: 5;  /* Stacking order (higher = on top) */
```

---

# Layout Example: Header + Content

```html
<body>
  <header>Navigation Bar</header>
  <main>Page Content</main>
  <footer>Footer</footer>
</body>
```

```css
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
}

main {
  margin-top: 60px;  /* Prevent overlap */
  display: block;
}

footer {
  margin-top: 40px;
}
```

---

# The X-Ray Trick: See the Box Model

Dev tools are turned off on school computers, so we use CSS to see the boxes.

```css
* { outline: 1px solid red; }
```

1. Add this line at the **top** of your CSS
2. Every element gets a red line around its edge
3. An outline takes up **no space**, so nothing moves
4. Change padding or margin and watch which box moves

**Try it:** Turn on the X-ray trick, change a card's padding, save, and refresh. Delete the line when you're done.

---

# Key Takeaways

- **Box Model** = Content + Padding + Border + Margin
- **Padding** = inside space | **Margin** = outside space
- Use `box-sizing: border-box;` to prevent width surprises
- **Display** changes how elements flow
- **Position** changes where elements appear
- The **X-ray trick** shows every box edge when a layout looks wrong

---

# Practice Ahead

You'll build:
1. A **styled card component** with padding, margin, borders
2. A **page layout** with fixed header, content, footer using positioning

Let's code!
