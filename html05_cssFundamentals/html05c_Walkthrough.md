# CSS Units Walkthrough: px, rem, and em (html05c)

This walkthrough sets up the html05c task. We will look at three ways to size text in CSS: **px**, **rem**, and **em**. The examples use different numbers than the task, so you still do the task yourself.

## Table of Contents

- [Part 1: px (Fixed Size)](#part-1-px-fixed-size)
- [Part 2: rem (Based on the Root)](#part-2-rem-based-on-the-root)
- [Part 3: em (Based on the Parent)](#part-3-em-based-on-the-parent)
- [Part 4: The em Shrinking Problem](#part-4-the-em-shrinking-problem)
- [Part 5: Which Unit Should I Use?](#part-5-which-unit-should-i-use)
- [You Are Ready for the Task](#you-are-ready-for-the-task)

---

## Part 1: px (Fixed Size)

A **pixel (px)** is a fixed size. `20px` is always 20 pixels, no matter where the text is on the page.

```css
/* This heading is always 20 pixels tall */
.heading {
  font-size: 20px;
}
```

px is easy to understand, but it does not change when the root text size changes (for example, when a user sets a bigger default text size in their browser). That is why many sites use rem instead.

---

## Part 2: rem (Based on the Root)

**rem** means "root em." The root is the `<html>` tag, and browsers set its text size to **16px** by default.

- `1rem` = 16px
- `2rem` = 32px
- `0.5rem` = 8px

**To convert px to rem, divide by 16.**

| px | Math | rem |
|---|---|---|
| 32px | 32 ÷ 16 | 2rem |
| 20px | 20 ÷ 16 | 1.25rem |
| 12px | 12 ÷ 16 | 0.75rem |

```css
/* Before: fixed pixels */
.heading {
  font-size: 20px;
}

/* After: same size (1.25 x 16px = 20px), but now it follows the root size */
.heading {
  font-size: 1.25rem;
}
```

The page looks the same after the change. rem always measures from the root, so the size does not depend on what the text is inside.

If the root size changes, every rem size on the page changes with it. The root size can change in two ways:

- The user changes the default text size in their browser settings.
- The CSS sets a size on the `html` tag. For example:

```css
html {
  font-size: 20px; /* now 1rem = 20px, so 1.25rem = 25px */
}
```

A px size does not change in either case.

**This is what Step 1 of the task asks you to do.**

---

## Part 3: em (Based on the Parent)

**em** measures from the **parent** element, which is the tag the text is inside.

- If the parent is 16px, then `1.5em` = 16 × 1.5 = 24px
- If the parent is 20px, then `1.5em` = 20 × 1.5 = 30px

Same CSS, different result, because the parent changed.

---

## Part 4: The em Shrinking Problem

em gets tricky when elements are **nested** (one inside another). Each level multiplies the one around it.

Example: this rule makes each box half again as big as the box around it.

```css
.box {
  font-size: 1.5em;
}
```

```html
<div class="box">Box 1
  <div class="box">Box 2
    <div class="box">Box 3</div>
  </div>
</div>
```

Start at the root size of 16px and multiply at each level:

| Level | Math | Size |
|---|---|---|
| Box 1 | 16 × 1.5 | 24px |
| Box 2 | 24 × 1.5 | 36px |
| Box 3 | 36 × 1.5 | 54px |

The text keeps **growing** because each box multiplies the size of its parent.

It works the other way too. If the number is **less than 1** (like `0.9em`), each nested level gets **smaller** than the one before it. After a few levels, the text is too small to read.

**Step 2 of the task** asks you to do this math for a different number.

**Step 3 of the task** has a menu that keeps shrinking. Think about which unit measures from the root instead of the parent. That unit gives every level the same size.

---

## Part 5: Which Unit Should I Use?

| Unit | Measures from | Use it for |
|---|---|---|
| **px** | Nothing. It is fixed. | Borders and small details |
| **rem** | The root (16px) | Text sizes on most of your site |
| **em** | The parent element | Rarely. Watch out for nesting. |

**Rule of thumb for this class:** use **rem** for font sizes.

---

## You Are Ready for the Task

Open `html05c_Task.html` and complete the three steps:

1. **Step 1:** Convert each px value to rem (divide by 16). The page should look the same.
2. **Step 2:** Predict the size of each nested level. Show your math in the comment.
3. **Step 3:** Change one unit to stop the menu from shrinking, then answer the two questions in the comment.

Save, commit, and push when you finish.
