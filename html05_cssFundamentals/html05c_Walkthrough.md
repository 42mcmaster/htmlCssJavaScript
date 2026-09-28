# CSS Units Walkthrough: px, rem, and em (html05c)

Instructor demo. About 15 minutes. Build it live, then assign `html05c_Task.html`. The three demos line up with the three task steps.

| Demo | What it shows | Task step |
|------|---------------|-----------|
| 1 | Convert px to rem | Step 1 |
| 2 | Predict nested em sizes | Step 2 |
| 3 | Fix text that keeps shrinking | Step 3 |

## Table of Contents

- [Starter Code](#starter-code)
- [Key Facts to Put on the Board](#key-facts-to-put-on-the-board)
- [Demo 1: px to rem](#demo-1-px-to-rem)
- [Demo 2: Nested em](#demo-2-nested-em)
- [Demo 3: Fix the Shrinking Text](#demo-3-fix-the-shrinking-text)
- [Which Unit to Use](#which-unit-to-use)
- [Assign the Task](#assign-the-task)

---

## Starter Code

Make a folder called `units` with two files. Open `units.html` in the browser.

**units.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Units Demo</title>
  <!-- All styles live in styles.css -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- DEMO 1: px to rem -->
  <h2>Demo 1: px to rem</h2>
  <p class="headline">Headline (32px)</p>
  <p class="intro">Intro text (18px)</p>

  <!-- DEMO 2: nested em -->
  <h2>Demo 2: Nested em</h2>
  <div class="box">Box 1
    <div class="box">Box 2
      <div class="box">Box 3</div>
    </div>
  </div>

  <!-- DEMO 3: shrinking text -->
  <h2>Demo 3: Shrinking text</h2>
  <div class="comment">First comment
    <div class="comment">Reply
      <div class="comment">Reply to the reply
        <div class="comment">This is getting too small to read</div>
      </div>
    </div>
  </div>

</body>
</html>
```

**styles.css**

```css
/* ===== Page setup ===== */
body {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

/* ===== DEMO 1: px to rem ===== */
.headline {
  font-size: 32px;
}

.intro {
  font-size: 18px;
}

/* ===== DEMO 2: nested em ===== */
.box {
  font-size: 1.5em;
  border-left: 3px solid tomato;   /* px for borders */
  padding-left: 0.5rem;
}

/* ===== DEMO 3: shrinking text ===== */
.comment {
  font-size: 0.85em;
  border-left: 3px solid steelblue;
  padding-left: 0.5rem;
}
```

---

## Key Facts 

- The browser's default font size is **16px**.
- **px** = fixed size. Always the same.
- **rem** = multiply by the `<html>` size (16px). **rem = root.**
- **em** = multiply by the **parent's** size. **em = parent.**
- Why it matters: users can make text bigger in their browser settings. rem and em grow with that setting. px does not.

---

## Demo 1: px to rem

**Rule: divide the px value by 16.**

1. Point at `.headline` in `styles.css`. Ask: "32 divided by 16?" → 2.
2. Point at `.intro`. Ask: "18 divided by 16?" → 1.125.
3. Change both rules and save:

```css
/* ===== DEMO 1: px to rem ===== */
.headline {
  font-size: 2rem;      /* 32 / 16 = 2 */
}

.intro {
  font-size: 1.125rem;  /* 18 / 16 = 1.125 */
}
```

4. Reload the page. **Nothing changed.** That's the point: same size today, but now the text follows the user's browser setting.

---

## Demo 2: Nested em

Each `.box` is `1.5em`. Each box sits inside the one before it.

1. Before reloading, have students predict each size on paper:

| Box | Math | Size |
|-----|------|------|
| 1 | 1.5 × 16 | 24px |
| 2 | 1.5 × 24 | 36px |
| 3 | 1.5 × 36 | 54px |

2. Reload. Box 3 is huge. Each box multiplied the one around it. This is called **compounding**.
3. Change `1.5em` to `1.5rem` and reload:

```css
/* ===== DEMO 2: nested em ===== */
.box {
  font-size: 1.5rem;   /* 1.5 x 16 = 24px for EVERY box */
  border-left: 3px solid tomato;
  padding-left: 0.5rem;
}
```

4. All three boxes are now 24px. rem ignores the parent.

---

## Demo 3: Fix the Shrinking Text

1. Point at `.comment` (`0.85em`). Ask: "What happens to each reply?"

| Comment | Math | Size |
|---------|------|------|
| First | 0.85 × 16 | 13.6px |
| Reply | 0.85 × 13.6 | 11.56px |
| Reply to the reply | 0.85 × 11.56 | 9.83px |
| Last one | 0.85 × 9.83 | 8.35px |

2. Fix it by changing **one unit**:

```css
/* ===== DEMO 3: shrinking text ===== */
.comment {
  font-size: 0.85rem;  /* 13.6px at every level */
  border-left: 3px solid steelblue;
  padding-left: 0.5rem;
}
```

3. Reload. Every comment is the same size.

---

## Which Unit to Use

| Sizing | Use | Example |
|--------|-----|---------|
| Font sizes | rem | `font-size: 1.5rem;` |
| Padding and margin | rem | `padding: 1rem;` |
| Borders | px | `border: 1px solid #ccc;` |
| Line height | no unit | `line-height: 1.6;` |

Common mistake: `1.5 rem` (with a space) does not work. Write `1.5rem`.

---

## Do the Task

Open `html05c_Task.html`. It follows the same three demos:

- **Step 1:** convert three px font sizes to rem (Demo 1)
- **Step 2:** predict three nested `1.25em` sizes and show the math (Demo 2)
- **Step 3:** fix a shrinking menu by changing one unit (Demo 3)

