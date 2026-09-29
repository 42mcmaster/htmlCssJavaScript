# CSS Units Walkthrough: px, em, and rem (html05c)

## Table of Contents

- [Overview](#overview)
- [Part 1: px (Fixed Size)](#part-1-px-fixed-size)
- [Part 2: rem (Based on the Root)](#part-2-rem-based-on-the-root)
- [Part 3: em (Based on the Parent)](#part-3-em-based-on-the-parent)
- [Part 4: The em Nesting Problem](#part-4-the-em-nesting-problem)
- [Part 5: Which Unit Should I Use?](#part-5-which-unit-should-i-use)
- [Check Your Understanding](#check-your-understanding)

---

## Overview

Every size in CSS needs a unit, like `16px`, `1.5rem`, or `2em`. So far we have used `px`. You will also see `em` and `rem` in a lot of code, including our later starter files. This walkthrough explains what they mean and when to use each one.

**Key fact:** The browser's default font size is **16px**. Most of the math below starts from that number.

**Why it matters:** Users can make text bigger in their browser settings (Chrome: Settings > Appearance > Font size). Text sized in **rem or em** grows when they do. Text sized in **px** does not. That makes rem and em better for accessibility.

**Setup:** Make a file called `units.html` with a `<style>` block in the `<head>`. Try each example as you go.

---

## Part 1: px (Fixed Size)

A pixel is always the same size.

```css
h1 {
  font-size: 32px;          /* always 32 pixels */
}

.card {
  border: 1px solid #ccc;   /* px is the right choice for borders */
}
```

Use px for **borders** and other small details that should stay the same size.

---

## Part 2: rem (Based on the Root)

**rem** means "multiply by the font size of the `<html>` tag." That is 16px unless someone changes it.

| rem | Math | Result |
|-----|------|--------|
| `0.875rem` | 0.875 × 16 | 14px |
| `1rem` | 1 × 16 | 16px |
| `1.25rem` | 1.25 × 16 | 20px |
| `1.5rem` | 1.5 × 16 | 24px |
| `2rem` | 2 × 16 | 32px |
| `2.5rem` | 2.5 × 16 | 40px |

**To convert px to rem, divide by 16.** Example: 24px ÷ 16 = `1.5rem`.

### Try it

```html
<style>
  .small { font-size: 0.875rem; }  /* 14px */
  .large { font-size: 1.5rem; }    /* 24px */
  .huge  { font-size: 3rem; }      /* 48px */
</style>

<p class="small">0.875rem</p>
<p class="large">1.5rem</p>
<p class="huge">3rem</p>
```

A `1.5rem` element is 24px **no matter where it is on the page**.

---

## Part 3: em (Based on the Parent)

**em** means "multiply by the **parent's** font size." The parent is the element this one sits inside.

### Try it

```html
<style>
  .parent    { font-size: 20px; }
  .child-em  { font-size: 1.5em; }   /* 1.5 × 20 (the parent) = 30px */
  .child-rem { font-size: 1.5rem; }  /* 1.5 × 16 (the root)   = 24px */
</style>

<div class="parent">
  <p class="child-em">1.5em = 30px</p>
  <p class="child-rem">1.5rem = 24px</p>
</div>
```

Both say "1.5," but they come out different sizes:

- **em** looks at the **parent** (20px)
- **rem** looks at **`<html>`** (16px)

**Check it:** Right-click the text > **Inspect** > **Computed** tab > `font-size`. DevTools shows the final size in pixels.

**One more detail:** When em is used for padding or margin (not font-size), it multiplies the element's **own** font size. So `padding: 0.5em` on a button with 20px text gives 10px of padding.

---

## Part 4: The em Nesting Problem

Because em is based on the parent, putting em inside em makes the sizes **stack**. This is called **compounding**.

### Try it

```html
<style>
  .grow   { font-size: 1.5em; }
  .steady { font-size: 1.5rem; }
</style>

<div class="grow">Level 1
  <div class="grow">Level 2
    <div class="grow">Level 3</div>
  </div>
</div>

<div class="steady">Level 1
  <div class="steady">Level 2
    <div class="steady">Level 3</div>
  </div>
</div>
```

| Level | em | rem |
|-------|----|-----|
| 1 | 1.5 × 16 = **24px** | 24px |
| 2 | 1.5 × 24 = **36px** | 24px |
| 3 | 1.5 × 36 = **54px** | 24px |

The em text keeps growing. The rem text stays the same. This is why **rem is the safer choice for font sizes**.

---

## Part 5: Which Unit Should I Use?

| Sizing | Use | Example |
|--------|-----|---------|
| Font sizes | **rem** | `h1 { font-size: 2.5rem; }` |
| Padding and margin | **rem** | `.card { padding: 1.5rem; }` |
| Button padding | **em** | `.btn { padding: 0.5em 1em; }` |
| Borders | **px** | `border: 1px solid #ccc;` |
| Widths and images | **%** | `img { max-width: 100%; }` |
| Line height | **no unit** | `line-height: 1.6;` |

**Remember:** rem = root. em = parent.

**Common mistakes:**

- `font-size: 1.5 rem;` — no space is allowed before the unit
- `padding: 20;` — missing unit (only `0` can skip the unit)

---

## Check Your Understanding

1. What is `2rem` in pixels?
2. Convert `20px` to rem.
3. A div has `font-size: 20px`. A paragraph inside it has `font-size: 2em`. How big is the paragraph?
4. Same div. The paragraph has `font-size: 2rem` instead. How big is it now?
5. Why is rem better than px for font sizes?

<details>
<summary><strong>Answers</strong></summary>

1. **32px** (2 × 16)
2. **1.25rem** (20 ÷ 16)
3. **40px** (2 × 20; em uses the parent)
4. **32px** (2 × 16; rem uses the root)
5. rem follows the user's browser font-size setting. px ignores it.

</details>
