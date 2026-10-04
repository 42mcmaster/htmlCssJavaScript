---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 06: Box Model, Spacing, Display, and Position

## Web Design
### Medina County Career Center

---

# The Box Model

Every HTML element is a **box** with four layers:

```
+----------------------------------+
|  MARGIN                          |
|  +----------------------------+  |
|  |  BORDER                    |  |
|  |  +----------------------+  |  |
|  |  |  PADDING             |  |  |
|  |  |  +----------------+  |  |  |
|  |  |  |  CONTENT       |  |  |  |
|  |  |  +----------------+  |  |  |
|  |  +----------------------+  |  |
|  +----------------------------+  |
+----------------------------------+
```

- **Content**: the text or image
- **Padding**: space *inside* the border
- **Border**: the line around the padding
- **Margin**: space *outside* the border

---

# Box Model Properties

```css
.card {
  padding: 1.5rem;            /* inside space (rem) */
  border: 2px solid #1565c0;  /* width, style, color (px) */
  border-radius: 8px;         /* rounded corners */
  margin: 1rem;               /* outside space (rem) */
}
```

**Shorthand:**
- `1rem` → all sides
- `1rem 2rem` → top/bottom, left/right
- `1rem 2rem 3rem 4rem` → top, right, bottom, left (clockwise)

---

# box-sizing: border-box

By default, padding and border are **added on top of** the width.

```css
width: 300px;
padding: 20px;
border: 2px solid black;
/* content-box (default): 300 + 40 + 4 = 344px on screen */
/* border-box:            300px on screen                */
```

**Always put this at the top of your CSS:**

```css
* {
  box-sizing: border-box;
}
```

---

# Centering a Box

```css
main {
  max-width: 60rem;  /* a width is required */
  margin: 0 auto;    /* auto left and right = centered */
}
```

- `margin: auto` centers the **box**
- `text-align: center` centers the **text inside** the box

---

# The X-Ray Trick: See the Box Model

Developer tools are turned off on school computers, so we use CSS to see the boxes.

```css
* { outline: 1px solid red; }
```

1. Add this line at the **top** of your CSS
2. Every element gets a red line around its edge
3. An outline takes up **no space**, so nothing moves
4. Change padding or margin and watch which space grows

Remove the line when you're done.

---

# Display Property

| Display | New line? | Width/height work? | Example |
|---------|-----------|--------------------|---------|
| block | Yes | Yes | `<div>`, `<p>`, `<section>` |
| inline | No | No | `<a>`, `<span>` |
| inline-block | No | Yes | nav buttons, cards in a row |
| none | Hidden | n/a | hide an element |

```css
nav a {
  display: inline-block;   /* padding now works on all sides */
  padding: 0.5rem 1rem;
}
```

---

# Hover Effects: :hover

The rule applies **only while the mouse is on the element**.

```css
nav a {
  background-color: #1565c0;
}

nav a:hover {
  background-color: #ff9800;   /* changes on hover */
}
```

Hover tells visitors "you can click this."

---

# Position Property

| Value | What it does |
|-------|--------------|
| static | Default. Normal flow. |
| relative | Stays in flow. Anchor for absolute children. |
| absolute | Leaves flow. Placed inside nearest positioned parent. |
| fixed | Leaves flow. Stuck to the window while scrolling. |
| sticky | Scrolls, then sticks at its `top` value. |

`top`, `right`, `bottom`, `left` move positioned boxes.
`z-index`: higher number = on top.

---

# Sticky Header

```css
header {
  position: sticky;
  top: 0;                     /* stick at the top */
  z-index: 10;                /* stay on top */
  background-color: #0d2a4a;  /* solid, so content doesn't show through */
}
```

Sticky keeps its space on the page. A fixed header leaves the flow and covers the top of your content.

---

# Key Takeaways

- **Box model** = content + padding + border + margin
- **Padding** is inside, **margin** is outside
- `box-sizing: border-box` keeps widths honest
- `max-width` + `margin: 0 auto` centers a box
- **display** changes how boxes flow; **:hover** styles the mouse-over state
- **position** is for special jobs: sticky headers, badges, fixed buttons
- The **X-ray trick** shows every box edge

---

# This Lesson

1. **Walkthrough**: build a practice page with cards, nav buttons, and a sticky header
2. **Task** (`html06_Task.html`): fill in the TODOs
3. **DIY**: set up your `DiyWebsite_Lastname` folder, then add spacing, nav buttons with hover, a sticky header, and gallery cards to your website
