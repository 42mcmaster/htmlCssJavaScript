# ITS HTML & CSS — Exam-Day Cheat Card (print one page)

*Review the morning of the exam. Everything here is the high-miss list — the full detail is in the Certiport study guide.*

## The specificity ladder (low → high)

element `p` → class `.intro` → ID `#main` → inline `style=""` → `!important`
Count as (IDs, classes, elements): `#nav .link a` = (1,1,1). **Longer ≠ stronger.**

## Cascade tiebreak

Same specificity? **Last one in the file wins.** Inline beats the stylesheet. `!important` beats inline (and is a code smell).

## Inheritance — what passes down

YES: `color`, `font-*`, `text-align`, `line-height`, `visibility`
NO: `margin`, `padding`, `border`, `width`, `height`, `background`

## Units

Absolute: `px`, `pt`, `cm` · Relative: `%`, `em` (parent font), `rem` (root font), `vw`/`vh` (viewport)

## The trio everyone confuses

- `display: none` — gone, takes no space
- `visibility: hidden` — invisible, KEEPS its space
- `overflow: hidden` — content clipped at the box edge

## HTTP methods

**GET** — data in the URL, bookmarkable, for retrieving. **POST** — data in the body, for submitting/changing.

## Character entities

`&lt;` < · `&gt;` > · `&amp;` & · `&nbsp;` non-breaking space · `&copy;` ©

## Image maps

`<img usemap="#map1">` + `<map name="map1">` + `<area shape="rect|circle|poly" coords="..." href="...">`

## Media

`<video controls autoplay muted loop poster="...">` · `<track kind="subtitles">` for captions · fallback text goes INSIDE the element

## Box model (outside → in)

margin → border → padding → content. Shorthand order: **T R B L** (clockwise). Two values = vertical | horizontal.

## Last sentence to repeat

*Read every option — the almost-right answer is placed before the right one on purpose.*
