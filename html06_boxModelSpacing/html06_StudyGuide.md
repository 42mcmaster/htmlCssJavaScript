# HTML06 Study Guide: Box Model & Spacing

## Vocabulary

1. **Box Model** — The concept that every HTML element consists of content, padding, border, and margin layers.

2. **Content** — The actual element material (text, images, etc.) inside an element's box.

3. **Padding** — Internal space inside the border, between content and border. Transparent. Does not affect margin.

4. **Border** — A line drawn around the padding. Can have color, width, and style.

5. **Margin** — External space outside the border. Transparent. Creates distance between elements.

6. **Width** — The horizontal size of an element's content (or entire box with `border-box`).

7. **Height** — The vertical size of an element's content (or entire box with `border-box`).

8. **box-sizing: content-box** — Default. Width/height apply ONLY to content; padding and border are added on top.

9. **box-sizing: border-box** — Width/height include content, padding, AND border. Total size stays fixed.

10. **Display** — CSS property that controls how an element flows in the page (block, inline, inline-block, none).

11. **Block** — Display value where elements take full width and start a new line. Example: `<div>`, `<p>`.

12. **Inline** — Display value where elements flow with text. Width/height are ignored.

13. **Inline-block** — Display value combining inline flow with ability to set width/height.

14. **Display: none** — Hides an element completely; it takes no space on the page.

15. **Position** — CSS property controlling element placement (static, relative, absolute, fixed).

16. **Static** — Default position. Element follows normal document flow.

17. **Relative** — Element positioned relative to its normal position using top/right/bottom/left offsets.

18. **Absolute** — Element positioned relative to nearest positioned parent (or document).

19. **Fixed** — Element positioned relative to viewport and stays fixed when scrolling.

20. **top / right / bottom / left** — Offset properties used with non-static positioning.

21. **z-index** — Controls stacking order of positioned elements (higher value = on top).

22. **DevTools** — Browser developer tools used to inspect and debug HTML/CSS, including box model visualization.

---

## Box Model Diagram & Formula

```
┌─────────────────────────────────────┐
│        MARGIN (exterior space)      │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   BORDER (styled line)      │   │
│  │                             │   │
│  │  ┌───────────────────────┐  │   │
│  │  │  PADDING (interior)   │  │   │
│  │  │  ┌─────────────────┐  │  │   │
│  │  │  │  CONTENT        │  │  │   │
│  │  │  │  (text/images)  │  │  │   │
│  │  │  └─────────────────┘  │  │   │
│  │  └───────────────────────┘  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Calculation (content-box):**
```
Total Width = width + (padding-left + padding-right)
              + (border-left + border-right)
              + (margin-left + margin-right)
```

**Calculation (border-box):**
```
Total Width = width (includes padding + border)
              + (margin-left + margin-right)
```

---

## Cheat Sheet

### Margin & Padding Shorthand

```css
margin: 10px;                    /* All sides: 10px */
margin: 10px 20px;               /* Top/Bottom: 10px, Left/Right: 20px */
margin: 10px 20px 30px;          /* Top: 10px, Left/Right: 20px, Bottom: 30px */
margin: 10px 20px 30px 40px;     /* Top, Right, Bottom, Left (clockwise) */

padding: 15px;                   /* Same as margin */
padding-top: 10px;               /* Individual sides */
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
```

### Border Syntax

```css
border: 2px solid black;         /* width, style, color */
border-width: 2px;
border-style: solid;             /* solid, dashed, dotted, double */
border-color: #333;
border-radius: 8px;              /* Rounded corners */
```

### Display Values

```css
div { display: block; }           /* Full width, new line */
span { display: inline; }         /* Flows with text */
button { display: inline-block; } /* Inline + respects width/height */
.hidden { display: none; }        /* Completely hidden */
```

### Position & Offsets

```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.absolute-box {
  position: absolute;
  top: 50px;
  left: 100px;
}

.relative-text {
  position: relative;
  top: 5px;
  left: 10px;
}
```

### Best Practice: Universal Border-Box

```css
* {
  box-sizing: border-box;
}
```

Apply this to ALL projects to avoid width calculation surprises.

---

## How DevTools Shows the Box Model

1. Right-click element → "Inspect"
2. Go to **Styles** tab
3. Scroll to **Box Model** section
4. Colors represent:
   - **Blue** = Content
   - **Green** = Padding
   - **Yellow** = Border
   - **Orange** = Margin
5. Hover/click to highlight on page

---

## ODE Competencies

**6.5.8 — Format Website Layout**
- Apply box model properties (margin, padding, border) to control spacing
- Use display and position properties to arrange page elements
- Utilize DevTools to inspect and debug layouts
- Create consistent, professional layouts using modern CSS techniques

---

## Key Concepts Summary

| Concept | Purpose | Key Property |
|---------|---------|--------------|
| Box Model | Understand element spacing | margin, padding, border |
| Content Box | Inner element area | width, height |
| box-sizing | Control width/height calculation | border-box (recommended) |
| Display | Control element flow | block, inline, inline-block |
| Position | Control element placement | static, relative, absolute, fixed |
| DevTools | Debug layouts visually | Inspect → Box Model |

---

## Common Mistakes & Fixes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Forgot `box-sizing: border-box;` | Width calculations are wrong | Add to `*` selector |
| Confused padding & margin | Elements too close/far apart | Padding = inside, Margin = outside |
| Position absolute breaks layout | Element overlaps others | Use position: relative on parent |
| Can't select fixed element | Scrolling issues | Check z-index and parent positioning |
| Width too wide | Padding adds to width | Use `box-sizing: border-box;` |

---

## Quick Debugging Checklist

- [ ] Did you add `box-sizing: border-box;` to `*`?
- [ ] Is padding making width wider than expected?
- [ ] Are margins collapsing? (vertical margins merge)
- [ ] Is position: absolute parent set to relative/absolute/fixed?
- [ ] Check DevTools box model colors match expectations
- [ ] Is z-index high enough to show on top?
- [ ] Did you test on different screen sizes?
