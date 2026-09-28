# HTML06: Box Model, Spacing, Display, and Position

One lesson, about 3 class days. Students learn how to control spacing and layout with CSS, then apply it to their own website. This lesson also sets up the permanent `DiyWebsite_Lastname` folder that every later DIY builds on.

## ODE Competencies (145010 Web Design)

- **6.5.8 Format website layout**: box model (padding, border, margin), width and max-width, `box-sizing: border-box`, centering with `margin: 0 auto`, `display`, and basic `position` (sticky header, relative/absolute badge, fixed button).
- **6.2.7 Hover effect**: taught here as the CSS `:hover` pseudo-class on nav links and cards.

## Files

| File | What it is |
|---|---|
| `html06_Slides.md` | MARP slide deck for the intro |
| `html06_Walkthrough.md` | Guided walkthrough. Students build `boxPractice.html` one step at a time. |
| `html06_Task.html` | Practice task. Starter page with 19 CSS TODOs and a few HTML TODOs. |
| `html06_DIYTask.md` | The graded item. Part 0 sets up `DiyWebsite_Lastname`; Parts 1 to 5 add spacing, nav buttons with hover, a sticky header, and gallery cards to the student's site. |
| `html06_StudyGuide.md` | Vocabulary, width math, cheat sheet, debugging checklist |
| `teacher/html06_Task_Solutions.html` | Working solution for the practice task (CSS in a `<style>` block; TODO numbers match the starter) |
| `teacher/html06_GoogleQuiz.csv` | Google Forms quiz |
| `teacher/html06_Gimkit.csv` | Gimkit review game |
| `archive/` | Old files from before the trim (06a/06b tasks, old DIY, extension, old walkthrough, and their solutions). Not used. |

## Suggested Days

| Day | Plan |
|---|---|
| 1 | Slides (short). Walkthrough sections 1 to 6: box model, padding/border/margin, box-sizing, centering, X-ray trick. |
| 2 | Walkthrough sections 7 to 10: display, `:hover`, position. Then `html06_Task.html`. |
| 3 | DIY. Part 0 first (set up `DiyWebsite_Lastname`, check with each student that it pushed), then Parts 1 to 6. Gimkit review at the end if time. |

The Google Quiz can be given at the start of the next lesson.

## Notes for Mr. McMaster

- **No developer tools.** Inspect is disabled on student machines. The X-ray trick (`* { outline: 1px solid red; }`) is how students see boxes. The validators (validator.w3.org and jigsaw.w3.org/css-validator) catch broken code.
- **Units.** Lesson 05 taught rem and em. This lesson uses `rem` for padding, margin, and font sizes, and `px` for borders.
- **Sticky, not fixed, for headers.** A fixed header covers the top of the page unless you add a matching margin. Sticky keeps its space, so it is the one used on student sites. Fixed is shown with a "Back to top" link.
- **Flexbox comes next.** Side-by-side layout here uses `inline-block` on purpose. Lesson 07 replaces it with flexbox.
- **DiyWebsite folder.** Part 0 copies the html04 pages (with `images` and `media`) and the html05 `styles.css` into one folder. If a student's html05 stylesheet only covered one page, they link it to every page now. From Lesson 07 on, every DIY changes this folder.

## Common Problems

| Problem | Fix |
|---|---|
| Box wider than its width | `* { box-sizing: border-box; }` at the top of the CSS |
| Box won't center | Needs `max-width` and `margin: 0 auto` |
| Link padding does nothing up and down | `display: inline-block` |
| Absolute badge flies to the page corner | `position: relative` on the parent |
| Sticky header scrolls away | Missing `top: 0`, or a later `header` rule overrides it |
| No styles on one page of the DIY site | Missing `<link rel="stylesheet" href="styles.css">` |
