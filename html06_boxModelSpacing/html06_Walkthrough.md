# Lesson 06 Walkthrough: Box Model, Spacing, Display, and Position

You build one practice page, one step at a time. Then you use the same skills in the picture frame task (`html06_FrameTask.html`), the practice task (`html06_Task.html`), and on your own website (`html06_DIYTask.md`).

## Table of Contents

1. [Set up the practice page](#1-set-up-the-practice-page)
2. [The box model](#2-the-box-model)
3. [Padding, border, and margin](#3-padding-border-and-margin)
4. [Width and box-sizing](#4-width-and-box-sizing)
5. [Centering a box with margin auto](#5-centering-a-box-with-margin-auto)
6. [See every box](#6-see-every-box)
7. [The display property](#7-the-display-property)
8. [Hover effects with :hover](#8-hover-effects-with-hover)
9. [The position property](#9-the-position-property)
10. [Common mistakes](#10-common-mistakes)

---

## 1. Set up the practice page

Make a file named `boxPractice.html` and paste this in. The CSS goes in a `<style>` block so you can see everything in one file. (Your real website uses `styles.css`.)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Model Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;                  /* remove the browser's default space around the page */
      background-color: #eeeeee;
    }
    /* Add each new rule below this line */
  </style>
</head>
<body>
  <header>
    <h1>Box Model Practice</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main>
    <div class="card">
      <h2>Card One</h2>
      <p>A card is a box with a heading and some text.</p>
    </div>
    <div class="card">
      <h2>Card Two</h2>
      <p>We will use cards to learn padding, border, and margin.</p>
    </div>
  </main>
</body>
</html>
```

Open it with Live Preview in VS Code. Everything is squished together. That is what we fix.

---

## 2. The box model

Every HTML element is a rectangle, called a **box**. Each box has four layers, from the inside out:

```
+--------------------------------------+
|  MARGIN   (space outside the border) |
|  +--------------------------------+  |
|  |  BORDER  (the line)            |  |
|  |  +--------------------------+  |  |
|  |  |  PADDING (space inside)  |  |  |
|  |  |  +--------------------+  |  |  |
|  |  |  |  CONTENT           |  |  |  |
|  |  |  +--------------------+  |  |  |
|  |  +--------------------------+  |  |
|  +--------------------------------+  |
+--------------------------------------+
```

| Layer | What it is | In a framed picture |
|---|---|---|
| Content | The text or image | The picture |
| Padding | Space between the content and the border. The background color fills it. | The mat (the blank border around the picture) |
| Border | A line around the padding | The frame |
| Margin | Space outside the border. Always see-through. Pushes other boxes away. | The wall space between frames |

**Padding is inside. Margin is outside.** In a framed picture, the mat is inside the frame and the wall space is outside it.

---

## 3. Padding, border, and margin

Add this CSS:

```css
/* A card: space inside, a line around it, space outside */
.card {
  background-color: white;
  padding: 1.5rem;              /* space INSIDE the border */
  border: 2px solid #1565c0;    /* width, style, color */
  border-radius: 8px;           /* rounded corners */
  margin: 1rem;                 /* space OUTSIDE the border */
}

/* Headings come with a top margin. Remove it inside the card. */
.card h2 {
  margin-top: 0;
}
```

**Try it:**
- Change the padding to `3rem`. The white area grows.
- Change the margin to `3rem`. The cards stay the same size, but the space between them grows.
- Change the border to `4px dashed gray`. Then put it back.

**Units:** use `rem` for padding, margin, and font sizes (Lesson 05). Use `px` for borders so the line stays thin.

### Boxes inside boxes

The `<h2>` inside the card is its own box, with its own padding, border, and margin. Its margin is outside **the heading's** box, but the heading sits inside the card. So the heading's margin shows up as white space **inside** the card's border.

The white space above "Card One" is two things stacked:

1. The card's padding (inside the blue border)
2. The heading's top margin (outside the heading, but still inside the card)

Browsers give every heading a top margin by default. That is why `.card h2 { margin-top: 0; }` removes it. Without that rule, the top of the card gets the padding you chose **plus** the heading's default margin.

**Try it:** change `.card h2` to `margin-top: 60px;`. The white space at the top of the card grows, but the card's padding did not change. The heading's margin pushed the heading down. Put it back to `0`.

**Rule to remember:** a margin always belongs to one box. Ask "whose margin is this?" The card's margin is outside the blue border. The heading's margin is outside the heading.

### Shorthand: 1, 2, or 4 values

Four values always go clockwise from the top: **top, right, bottom, left**.

```css
padding: 1rem;                 /* all 4 sides */
padding: 1rem 2rem;            /* top and bottom 1rem, left and right 2rem */
padding: 1rem 2rem 3rem 4rem;  /* top, right, bottom, left */
margin-bottom: 2rem;           /* one side only (also: -top, -right, -left) */
```

---

## 4. Width and box-sizing

Add `width: 300px;` to `.card`.

**Predict it:** the card has `width: 300px`, `1.5rem` of padding (24px), and a `2px` border. Before you read on, how wide is the card on the screen? Write your guess down.

By default the browser adds padding and border **on top of** the width:

```
300 (width) + 24 + 24 (padding) + 2 + 2 (border) = 352px on screen
```

That default is `box-sizing: content-box`. The fix is one rule at the **top** of your CSS:

```css
/* width now INCLUDES padding and border. 300px means 300px. */
* {
  box-sizing: border-box;
}
```

`*` is the **universal selector**. It picks every element.

| box-sizing | `width: 300px` with 1.5rem padding and 2px border |
|---|---|
| `content-box` (default) | 352px on screen |
| `border-box` (use this) | 300px on screen |

Margin is never inside the width. It is always extra space outside.

`height` works the same way, but you likely won't use it much. If the text is taller than the height of the box, it spills out of the box.

---

## 5. Centering a box with margin auto

Give a box a width, then set left and right margin to `auto`. The browser splits the leftover space evenly.  In this example we are centering `main` which is inside of `body`.  The `main` content contains the `cards` so therefore all the content is centered.

```css
/* Center the main area */
main {
  max-width: 50rem;     /* never wider than 50rem; shrinks on a phone */
  margin: 0 auto;       /* 0 top and bottom, auto left and right = centered */
  padding: 1rem;
}
```

- `margin: auto` needs a `width` or `max-width`. A full-width box has nothing to center.
- `text-align: center` centers the **text inside** a box, not the box itself.

---

## 6. See every box

There are two ways to see the boxes on a page. Use the X-ray line first. Developer Tools show more detail.

### Way 1: The X-ray line

Add this line at the **very top** of your CSS:

```css
* { outline: 1px solid red; }   /* X-RAY: shows every box. Remove when done. */
```

Every element gets a thin red line around its edge. An outline takes up no space, so nothing moves. Remove it before you turn in your work.

**Try it:** with the X-ray line on, change the card's padding to `3rem`. The red line around the card moves out. Change the margin to `3rem`. The red line stays put, and the space between the red lines grows.

### Way 2: Developer Tools

**Developer Tools** (often called **dev tools**) show you every box on the page, what CSS is on it, and exactly how big its padding, border, and margin are. Web developers use them every day.

#### Open Developer Tools

1. Open `boxPractice.html` with **Live Preview** in VS Code.
2. In the preview's toolbar, click the **Developer Tools** button. A panel opens next to the page.

#### Tool 1: Select an element

Click the **select element** button. It is the arrow-in-a-box icon at the top-left corner of the Developer Tools panel. Now move the mouse over the page. Each box lights up in color:

| Color | Layer |
|---|---|
| Blue | Content |
| Green | Padding |
| Yellow | Border |
| Orange | Margin |

Click **Card One** to select it.

#### Tool 2: The Styles pane

With Card One selected, the **Styles** pane lists every CSS rule on it. You should see your `.card` rule.

- Click a value, like `1.5rem` next to `padding`, and type a new one. The page changes right away.
- Uncheck the checkbox next to a line to turn it off. Check it to turn it back on.
- A line with a line through it is being replaced by another rule.

**Changes in Developer Tools are not saved.** It is a place to try things. When you like a value, type it into your CSS file.

#### Tool 3: The box model diagram

Click the **Computed** tab. At the top is a box model diagram for the selected element, with the real numbers for margin, border, padding, and content size. It is the same diagram as Section 2, filled in with your values.

**Try it:**
- Select Card One. Read its padding and margin in the diagram.
- In the Styles pane, change the padding to `3rem`. Watch the green area grow and the diagram numbers change.
- Change the margin to `3rem`. Watch the orange area grow.
- Hover over the `<h2>` inside the card. Its orange margin is the default heading margin you removed with `.card h2 { margin-top: 0; }`.

**Next:** open `html06_FrameTask.html` and use sections 2-6 to frame three pictures.

---

## 7. The display property

`display` controls how a box sits on the page.

| Value | New line? | Width and height work? | Normal examples |
|---|---|---|---|
| `block` | Yes, full width | Yes | `div`, `p`, `h1`, `section`, `header` |
| `inline` | No, sits in the text | No | `a`, `span`, `strong` |
| `inline-block` | No, sits side by side | Yes | Nav buttons, cards in a row |
| `none` | Hidden, takes no space | Not shown | Anything you want to hide |

```css
/* Cards side by side instead of stacked */
.card {
  display: inline-block;
  vertical-align: top;          /* line up the tops */
  width: 15rem;
}

/* Links are inline, so top/bottom padding doesn't push anything.
   inline-block makes them real buttons. */
nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background-color: #1565c0;
  color: white;
  text-decoration: none;        /* remove the underline */
  border-radius: 4px;
}

/* Hide anything with class="hidden". It leaves no gap. */
.hidden {
  display: none;
}
```

**Try it:** change `nav a` to `display: block;`. Each link becomes a full-width bar. Change it back. Narrow the window and watch the cards wrap.

---

## 8. Hover effects with :hover

`:hover` is a **pseudo-class**. The rule only applies while the mouse is on the element. Write the normal rule first, then a `:hover` rule with only the changes.

```css
/* Only while the mouse is on a nav link */
nav a:hover {
  background-color: #0d47a1;    /* darker blue */
}

/* Only while the mouse is on a card */
.card:hover {
  border-color: #ff9800;
}
```

Hover effects tell visitors "you can click this." Keep them simple: change a color, background, or border. Optional: add `transition: background-color 0.3s;` to the normal `nav a` rule so the color fades instead of snapping.

---

## 9. The position property

`position` moves a box out of its normal spot. Use it for a few special jobs. (Lesson 07 flexbox handles most layout.)

| Value | What it does | Common use |
|---|---|---|
| `static` | Default. Normal flow. | Almost everything |
| `relative` | Stays in the flow. Becomes the anchor for `absolute` children. | Parent of a badge |
| `absolute` | Leaves the flow. Placed from the nearest parent that is not static. | Badge in a card corner |
| `fixed` | Leaves the flow. Placed on the browser window. Stays put when you scroll. | "Back to top" button |
| `sticky` | Scrolls normally until it reaches its `top` value, then sticks. | Header that stays at the top |

`top`, `right`, `bottom`, and `left` only work when position is not static. **z-index** decides which box is on top when boxes overlap. Higher number = on top.

### Sticky header

```css
header {
  position: sticky;
  top: 0;                       /* stick at the top edge of the window */
  z-index: 10;                  /* stay above content scrolling under it */
  background-color: #0d2a4a;    /* solid background, or content shows through */
  color: white;
  padding: 1rem;
}
header h1 {
  margin: 0;
}
```

Copy a card a few more times so the page scrolls. The header stays at the top. A `fixed` header would also stay, but it leaves the flow, so it covers the top of the page. Sticky keeps its space.

### Badge in the corner (relative + absolute)

```html
<div class="card has-badge">
  <span class="badge">NEW</span>
  <h2>Card Three</h2>
  <p>This card has a badge.</p>
</div>
```

```css
.has-badge {
  position: relative;           /* the anchor for the badge */
}
.badge {
  position: absolute;           /* placed from the parent's corner */
  top: 0.5rem;
  right: 0.5rem;
  background-color: #ff9800;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
```

**Try it:** remove `position: relative;` from `.has-badge`. The badge jumps to the corner of the whole page. Put it back.

### Fixed "Back to top" link

```html
<!-- right before </body> -->
<a href="#" class="to-top">Back to top</a>
```

```css
.to-top {
  position: fixed;              /* stays in the window corner while scrolling */
  bottom: 1rem;
  right: 1rem;
  background-color: #1565c0;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
```

---

## 10. Common mistakes

| Problem | Fix |
|---|---|
| Box is wider than the width you set | Add `* { box-sizing: border-box; }` at the top of the CSS |
| Box won't center | Give it `max-width` and `margin: 0 auto;` |
| Padding or width on a link does nothing | Links are inline. Add `display: inline-block;` |
| Absolute badge flies to the page corner | Add `position: relative;` to the parent |
| Sticky header doesn't stick | Add `top: 0;` |
| Content shows through the header | Give the header a `background-color` |
| Can't tell where the space comes from | Open Developer Tools, select the element, and look at the colors and the box model diagram |
| Changed CSS in Developer Tools but it's gone after a refresh | Developer Tools changes are not saved. Type the value into your CSS file. |
