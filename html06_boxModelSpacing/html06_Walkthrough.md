# HTML06 Walkthrough: Box Model & Spacing

## Overview
In this guided walkthrough, you'll build a **styled card component** from scratch, exploring padding, margin, and borders. Then you'll experiment with the **display** and **position** properties to create a simple page layout. You'll use DevTools to inspect the box model at each step.

---

## Part 1: Understanding Box Model (Card Component)

### Step 1: Create a Basic Card

Create a file called `card.html` and build this structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Card Component</title>
  <style>
    /* First, apply box-sizing: border-box to all elements */
    * {
      box-sizing: border-box;
    }

    /* Style the card container */
    .card {
      width: 300px;
      background-color: #f5f5f5;
    }

    .card-title {
      font-size: 24px;
      font-weight: bold;
    }

    .card-body {
      font-size: 14px;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2 class="card-title">My First Card</h2>
    <p class="card-body">This is a simple card component to learn the box model.</p>
  </div>
</body>
</html>
```

**Try This:** Open in browser. Notice the card looks flat with no spacing.

---

### Step 2: Add Padding (Interior Space)

Padding goes *inside* the border, between content and border. It makes the card "breathe."

```css
.card {
  width: 300px;
  background-color: #f5f5f5;
  padding: 20px;  /* 20px space inside all sides */
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;  /* Remove default margin */
  padding-bottom: 10px;
}

.card-body {
  font-size: 14px;
  color: #555;
  margin: 0;  /* Remove default margin */
}
```

**Try This:**
- Change `padding: 20px;` to `padding: 40px;`. Notice more space inside.
- Try `padding: 10px 20px;` (top/bottom 10px, left/right 20px).

**Question:** Does padding make the card wider?
Answer: It depends on `box-sizing`. With `border-box`, NO. With `content-box`, YES.

---

### Step 3: Add a Border

A border is a line around the padding layer.

```css
.card {
  width: 300px;
  background-color: #f5f5f5;
  padding: 20px;
  border: 2px solid #333;  /* 2px width, solid style, color #333 */
  border-radius: 8px;  /* Rounded corners */
}
```

**Try This:**
- Change `border: 2px solid #333;` to `border: 4px dashed #999;`
- Try `border: 1px dotted #ccc;`
- Experiment with `border-radius: 0px;` vs `border-radius: 16px;`

---

### Step 4: Add Margin (Exterior Space)

Margin is space *outside* the border. It separates elements from each other.

```css
.card {
  width: 300px;
  background-color: #f5f5f5;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 8px;
  margin: 30px;  /* 30px space outside all sides */
}
```

Create a second card to see margin in action:

```html
<div class="card">
  <h2 class="card-title">Card One</h2>
  <p class="card-body">First card with margin.</p>
</div>

<div class="card">
  <h2 class="card-title">Card Two</h2>
  <p class="card-body">Second card. Notice the space between cards.</p>
</div>
```

**Try This:**
- Change `margin: 30px;` to `margin: 10px;`. Cards get closer.
- Try `margin: 0;`. Cards touch.
- Set only left margin: `margin-left: 50px;`

---

### Step 5: Inspect with DevTools

**Right-click the card** → Select "Inspect"

In the DevTools:
1. Look at the **Styles** tab
2. Scroll down to **Box Model** diagram
3. You should see:
   - **Orange** border = Margin (30px)
   - **Yellow** border = Border (2px)
   - **Green** = Padding (20px)
   - **Blue** = Content (text)

**Try This:**
- Hover over each color section
- In DevTools, change `padding: 20px;` to `padding: 40px;` in the Styles tab
- Watch the green section grow
- Change back (press Escape or reload)

---

## Part 2: Display Property

### Step 6: Create Elements with Different Display Values

Create a file called `display-demo.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Display Property Demo</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    /* Block elements (default for divs) */
    .block-box {
      display: block;
      width: 200px;
      height: 80px;
      background-color: #e3f2fd;
      border: 2px solid #1976d2;
      padding: 10px;
      margin-bottom: 20px;
    }

    /* Inline elements (default for span) */
    .inline-box {
      display: inline;
      background-color: #fff3e0;
      border: 2px solid #f57c00;
      padding: 5px 10px;
      margin-right: 10px;
    }

    /* Inline-block (inline flow + respects width/height) */
    .inline-block-box {
      display: inline-block;
      width: 150px;
      height: 60px;
      background-color: #f3e5f5;
      border: 2px solid #7b1fa2;
      padding: 10px;
      margin: 10px 10px 10px 0;
    }

    /* Hidden element */
    .hidden-box {
      display: none;
      background-color: #ffebee;
    }
  </style>
</head>
<body>
  <h1>Display Property Examples</h1>

  <!-- Block example -->
  <h2>Block Elements</h2>
  <div class="block-box">Block 1 (full width)</div>
  <div class="block-box">Block 2 (starts new line)</div>

  <!-- Inline example -->
  <h2>Inline Elements</h2>
  <span class="inline-box">Inline 1</span>
  <span class="inline-box">Inline 2</span>
  <span class="inline-box">Inline 3</span>
  <p>Notice inline elements flow with text.</p>

  <!-- Inline-block example -->
  <h2>Inline-Block Elements</h2>
  <div class="inline-block-box">Inline-Block 1</div>
  <div class="inline-block-box">Inline-Block 2</div>
  <div class="inline-block-box">Inline-Block 3</div>
  <p>Inline-block elements sit side-by-side but respect width/height.</p>

  <!-- Hidden element -->
  <div class="hidden-box">This is hidden (display: none)</div>
  <p>The hidden element takes NO space on the page.</p>
</body>
</html>
```

**Try This:**
- Change `.block-box` to `display: inline;`. Notice width is ignored.
- Change `.inline-box` to `display: block;`. Notice it takes full width.
- Change `.inline-block-box` to `display: block;`. Notice they stack vertically.

---

## Part 7: Position Property

### Create a Layout with Headers and Footers

Create `layout-demo.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Layout with Positioning</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* Fixed header at top */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60px;
      background-color: #1976d2;
      color: white;
      padding: 15px 20px;
      z-index: 100;  /* Stay on top */
    }

    header h1 {
      margin: 0;
      font-size: 24px;
    }

    /* Main content (push down to avoid header) */
    main {
      margin-top: 60px;  /* Match header height */
      padding: 20px;
      min-height: calc(100vh - 180px);  /* Fill space */
    }

    /* Fixed footer at bottom */
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60px;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px 20px;
    }

    footer p {
      margin: 0;
    }

    /* Adjust main to not overlap footer */
    body {
      margin-bottom: 60px;  /* Space for footer */
    }
  </style>
</head>
<body>
  <!-- Fixed header -->
  <header>
    <h1>My Website</h1>
  </header>

  <!-- Main content -->
  <main>
    <h2>Welcome</h2>
    <p>This page demonstrates fixed header and footer positioning.</p>
    <p>The header stays at the top and the footer at the bottom when you scroll.</p>
    <p>Try scrolling to see how position: fixed keeps them in place.</p>

    <!-- Add extra content to enable scrolling -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
  </main>

  <!-- Fixed footer -->
  <footer>
    <p>&copy; 2024 Medina County Career Center</p>
  </footer>
</body>
</html>
```

**Try This:**
- Change `position: fixed;` to `position: absolute;` on header. Notice it scrolls away.
- Remove `margin-top: 60px;` from main. Notice header overlaps content.
- Change `z-index: 100;` to `z-index: 1;` on header. Does it still work?

---

## Part 8: Relative & Absolute Positioning

Create `positioning-advanced.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Relative & Absolute Positioning</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    /* Parent container with relative positioning */
    .container {
      position: relative;  /* Create positioning context */
      width: 400px;
      height: 300px;
      background-color: #f5f5f5;
      border: 2px solid #333;
      margin-bottom: 30px;
    }

    /* Absolute child positioned within parent */
    .box {
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: #1976d2;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .box1 {
      top: 10px;
      left: 10px;
    }

    .box2 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);  /* Center the box */
    }

    .box3 {
      bottom: 10px;
      right: 10px;
    }
  </style>
</head>
<body>
  <h1>Relative & Absolute Positioning</h1>

  <div class="container">
    <div class="box box1">Top Left</div>
    <div class="box box2">Center</div>
    <div class="box box3">Bottom Right</div>
  </div>

  <p>Parent container has position: relative (creates positioning context)</p>
  <p>Child boxes have position: absolute (positioned within parent)</p>
</body>
</html>
```

**Try This:**
- Remove `position: relative;` from `.container`. Where do boxes move?
- Change `.box1` offsets: `top: 50px;` and `left: 100px;`
- Try `bottom: 0; right: 0;` on `.box3`. Does it stick to bottom-right corner?

---

## Summary: Key Takeaways

1. **Box Model** = Content + Padding + Border + Margin
   - Padding = inside space
   - Margin = outside space

2. **box-sizing: border-box;** prevents width surprises

3. **Display** controls how elements flow:
   - `block` = full width, new line
   - `inline` = flows with text, width/height ignored
   - `inline-block` = inline + respects width/height
   - `none` = completely hidden

4. **Position** controls element placement:
   - `static` = normal flow (default)
   - `relative` = relative to normal position
   - `absolute` = relative to positioned parent
   - `fixed` = relative to viewport

5. **DevTools** is essential for debugging box model and layout issues

---

## Challenge: Modify the Card

Try these modifications to deepen your understanding:

1. Add a second card and change margin/padding between them
2. Make cards display inline-block so they sit side-by-side
3. Add a positioned badge (position: absolute) to card corner
4. Use DevTools to inspect box model and verify your changes
5. Create a card with different padding on each side: `padding: 10px 20px 30px 40px;`

Open DevTools after each change to confirm your understanding!
