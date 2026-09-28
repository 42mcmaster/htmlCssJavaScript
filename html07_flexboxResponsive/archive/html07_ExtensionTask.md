# html07 Extension Task: CSS Grid Photo Gallery

**For fast finishers. Extra credit — no points, no rubric. Finish the regular html07 tasks first.**

## Why this is an extension

The class covers CSS Grid at recognition level — it exists, it does rows *and* columns. The full toolkit isn't on either of our exams, but it IS how real photo galleries, dashboards, and card layouts get built. This task is the deep end.

## The task

Build `html07_ExtensionGallery_lastname.html`: a responsive photo gallery of at least 9 images that uses **CSS Grid, not flexbox**, for its layout.

Requirements, in increasing order of difficulty:

1. A grid container using `display: grid` with `gap`
2. Columns defined with `repeat()` — start with `repeat(3, 1fr)`
3. Then make it responsive **without a single media query**:
   `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`
   Narrow the window and watch the columns reflow on their own. Figure out — and write in a comment — *why* this works.
4. Make one "featured" image span 2 columns and 2 rows using `grid-column: span 2` and `grid-row: span 2`

## What to commit

- `html07_ExtensionGallery_lastname.html` + stylesheet + images
- The comment explaining, in your own words, what `auto-fit` + `minmax()` are doing

## Done when

- [ ] Grid layout, 9+ images, gap between cells
- [ ] Columns reflow responsively with zero media queries
- [ ] One featured image spans 2×2
- [ ] The explanation comment is in your own words (this is the part that proves you learned it)
- [ ] Pushed to GitHub
