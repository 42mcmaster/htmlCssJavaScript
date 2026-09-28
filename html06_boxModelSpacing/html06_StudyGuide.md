# HTML06 Study Guide: Box Model, Spacing, Display, and Position

## Table of Contents

- [Vocabulary](#vocabulary)
- [Box Model Diagram and Width Math](#box-model-diagram-and-width-math)
- [Cheat Sheet](#cheat-sheet)
- [Seeing the Box Model Without Developer Tools](#seeing-the-box-model-without-developer-tools)
- [ODE Competencies](#ode-competencies)
- [Common Mistakes and Fixes](#common-mistakes-and-fixes)
- [Quick Debugging Checklist](#quick-debugging-checklist)

---

## Vocabulary

1. **Box model**: every HTML element is a box made of four layers: content, padding, border, and margin.
2. **Content**: the text or image inside the box.
3. **Padding**: space inside the border, between the content and the border. The element's background color fills it.
4. **Border**: a line around the padding. Has a width, a style (solid, dashed, dotted), and a color.
5. **Margin**: space outside the border. Always see-through. Pushes other boxes away.
6. **width / height**: the size of the box. With `border-box`, they include padding and border.
7. **max-width**: the widest a box can get. It can still shrink on a small screen.
8. **box-sizing: content-box**: the default. Width is the content only. Padding and border are added on top.
9. **box-sizing: border-box**: width includes content, padding, and border. The box stays the size you set.
10. **Universal selector (`*`)**: selects every element on the page.
11. **margin: 0 auto**: centers a box that has a width or max-width. Auto splits the leftover space evenly on the left and right.
12. **display**: controls how a box flows on the page.
13. **block**: starts on a new line and takes the full width. Examples: `div`, `p`, `section`, `header`.
14. **inline**: sits inside a line of text. Width and height are ignored. Examples: `a`, `span`.
15. **inline-block**: sits side by side like inline, but width, height, and padding all work.
16. **display: none**: hides an element. It takes up no space.
17. **Pseudo-class**: a keyword after a selector that picks an element in a certain state, like `:hover`.
18. **:hover**: applies a rule only while the mouse pointer is on the element.
19. **position**: controls where a box is placed (static, relative, absolute, fixed, sticky).
20. **static**: the default. The box stays in the normal flow.
21. **relative**: stays in the normal flow. Becomes the anchor for `absolute` children.
22. **absolute**: leaves the flow. Placed from the nearest positioned parent (or the page, if there is none).
23. **fixed**: leaves the flow. Placed on the browser window and stays there while scrolling.
24. **sticky**: scrolls normally until it reaches its `top` value, then sticks. Keeps its space in the flow.
25. **top / right / bottom / left**: offset properties that move a positioned (not static) box.
26. **z-index**: stacking order of positioned boxes. Higher number = on top.
27. **X-ray trick**: the temporary rule `* { outline: 1px solid red; }`, which draws a line around every element so you can see the boxes.

---

## Box Model Diagram and Width Math

```
+-------------------------------------+
|  MARGIN (outside space)             |
|  +-------------------------------+  |
|  |  BORDER (the line)            |  |
|  |  +-------------------------+  |  |
|  |  |  PADDING (inside space) |  |  |
|  |  |  +-------------------+  |  |  |
|  |  |  |  CONTENT          |  |  |  |
|  |  |  +-------------------+  |  |  |
|  |  +-------------------------+  |  |
|  +-------------------------------+  |
+-------------------------------------+
```

**Width on screen with content-box (default):**
```
width + padding-left + padding-right + border-left + border-right
```

**Width on screen with border-box:**
```
width   (padding and border are already inside it)
```

Margin is always extra space outside the box, in both cases.

**Example:** `width: 200px; padding: 20px; border: 5px solid;`
- content-box: 200 + 20 + 20 + 5 + 5 = **250px**
- border-box: **200px**

---

## Cheat Sheet

### Padding and margin shorthand

Use `rem` for spacing. Four values go clockwise from the top.

```css
margin: 1rem;                 /* all sides */
margin: 1rem 2rem;            /* top/bottom 1rem, left/right 2rem */
margin: 1rem 2rem 3rem;       /* top 1rem, left/right 2rem, bottom 3rem */
margin: 1rem 2rem 3rem 4rem;  /* top, right, bottom, left */

padding-top: 1rem;            /* one side at a time */
padding-right: 2rem;
padding-bottom: 1rem;
padding-left: 2rem;
```

### Border

Use `px` for borders.

```css
border: 2px solid black;      /* width, style, color */
border-bottom: 1px solid #ddd; /* one side only */
border-radius: 8px;           /* rounded corners */
```

### box-sizing and centering

```css
/* Put at the top of every stylesheet */
* {
  box-sizing: border-box;
}

/* Center a box */
main {
  max-width: 60rem;
  margin: 0 auto;
}
```

### Display

```css
nav a { display: inline-block; }  /* buttons: side by side, padding works */
aside a { display: block; }       /* each link on its own full-width row */
.hidden { display: none; }        /* gone, no space left behind */
```

### Hover

```css
nav a:hover {
  background-color: #ff9800;      /* only while the mouse is on the link */
}
```

### Position

```css
/* Sticky header */
header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #0d2a4a;
}

/* Badge in the corner of a card */
.card { position: relative; }     /* anchor */
.badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

/* Button that stays in the window corner */
.to-top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
```

---

## Seeing the Box Model Without Developer Tools

Developer tools are turned off on school computers, so we use CSS to see the boxes.

**The X-ray trick:** add this at the top of your stylesheet:

```css
* { outline: 1px solid red; }
```

Every element's edge shows as a red line. An outline takes up no space, so nothing moves. Change a margin or padding and watch which space grows. Remove the line when you are done.

**The paper method:** draw four nested rectangles and label them from the inside out: content, padding, border, margin. Write the values from your CSS on each ring and add up the total width.

---

## ODE Competencies

**6.5.8: Format website layout**
- Use padding, border, and margin to control spacing
- Use width, max-width, box-sizing, and margin auto to size and center boxes
- Use display and position to arrange page elements

**6.2.7: Hover effect**
- Use the CSS `:hover` pseudo-class to change how links and cards look when the mouse is on them

---

## Common Mistakes and Fixes

| Mistake | What happens | Fix |
|---|---|---|
| No `box-sizing: border-box` | Boxes are wider than the width you set | Add `* { box-sizing: border-box; }` |
| Mixing up padding and margin | Space ends up in the wrong place | Padding = inside, margin = outside |
| `margin: auto` with no width | The box doesn't center | Add `max-width` |
| Padding on a link does nothing up and down | Links are inline | Use `display: inline-block;` |
| Absolute box flies to the page corner | Parent is not positioned | Add `position: relative;` to the parent |
| Sticky header doesn't stick | No `top` value | Add `top: 0;` |
| Content shows through the header | Header has no background | Add a `background-color` |
| X-ray lines left in finished work | Red lines on the page | Delete the X-ray line |

---

## Quick Debugging Checklist

- [ ] Is `* { box-sizing: border-box; }` at the top of the CSS?
- [ ] Is padding or margin coming from a default (like on `h1`, `p`, or `body`)? Try `margin: 0`.
- [ ] Turn on the X-ray trick: do the box edges match what you expected?
- [ ] Does a box you want to center have a `max-width`?
- [ ] Does an absolute box have a positioned parent?
- [ ] Does a sticky header have `top: 0` and a background color?
- [ ] Did you remove the X-ray line before turning it in?
