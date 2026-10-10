# html07: Flexbox and Responsive Design

Students learn flexbox, media queries, the viewport tag, and responsive images, and see CSS Grid at recognition level. Then they make their own website (`DiyWebsite_Lastname`) responsive.

**Suggested time:** about 3 class days.

## ODE Competencies

| Competency | Where it shows up |
|---|---|
| **6.5.8** Format website layout | Flexbox nav, card row, gallery; grid recognition |
| **6.5.13** Responsive design | Viewport tag, media queries, breakpoints, mobile-first |
| **6.2.5** Resize images with CSS | `max-width: 100%; height: auto;` |
| **6.5.6** Page templates | DIY Part 6: `template.html` |
| **2.7.2** Ways to present data | Responsive website vs. mobile app, desktop app, web app (walkthrough Step 12) |

## Files

### Student files

| File | What it is |
|---|---|
| `html07_Slides.md` | Marp slide deck for the lesson intro |
| `html07_Walkthrough.md` | Guided walkthrough. Students build one practice page step by step. Linked table of contents, Try This questions with answers at the end. |
| `html07_Task.html` | The practice task. HTML is done; students fill in 13 CSS TODOs in the `<style>` block (viewport tag, responsive images, flex nav, card row, wrapping gallery, testimonials, star row, grid sidebar layout, flex footer, phone media query). |
| `html07_DIYTask.md` | The graded item. Students add a flexbox nav, flexbox gallery, responsive images, a phone media query, and viewport tags to `DiyWebsite_Lastname`, and save `template.html`. |
| `html07_StudyGuide.md` | Vocabulary, cheat sheets, common mistakes, competencies. Printable. |
| `images/` | Photos used by the walkthrough and the task |

### Teacher files (`teacher/`)

| File | What it is |
|---|---|
| `html07_Walkthrough_Solutions.html` | The finished walkthrough page (one file, CSS in a `<style>` block) |
| `html07_Task_Solutions.html` | Working solution for `html07_Task.html` (one file, CSS in a `<style>` block) |
| `html07_GoogleQuiz.csv` | 40 questions, Google Forms quiz format |
| `html07_Gimkit.csv` | 30 questions, Gimkit import format |
| `Unit2_EndOfUnit_GoogleQuiz.csv` | End-of-unit quiz for Unit 2 (unchanged; its html07 questions are all still taught) |

The teacher solution files use `../images/` paths so the pictures show from inside `teacher/`.

## Suggested Days

| Day | Plan |
|---|---|
| **Day 1** | Slides. Walkthrough Steps 1 to 9 (flexbox: direction, justify-content, align-items, gap, nav bar, flex: 1, flex-wrap). |
| **Day 2** | Walkthrough Steps 10 to 15 (responsive images, viewport tag, media queries, grid basics). Start and finish `html07_Task.html`. |
| **Day 3** | DIY: make `DiyWebsite_Lastname` responsive and save `template.html`. Push with GitHub Desktop. Gimkit review at the end if time allows. |

## Notes

- Browser dev tools are turned off on student computers, but the Developer Tools in VS Code's Live Preview work. Students test phone size by dragging the Live Preview panel narrow and check the media query in Developer Tools (Styles pane).
- The class uses `max-width` media queries (desktop layout first, fix for phones). Mobile-first and `min-width` are taught as terms for the exam.
- CSS Grid is recognition only: `display: grid`, `grid-template-columns`, `fr`, `repeat()`, `gap`. No `auto-fit`, `minmax()`, or spanning.
- Spacing and font sizes use `rem` (taught in html05c).
- Older versions of this lesson (the a/b/c tasks, the Extension Task, the from-scratch gallery DIY, and their solutions) are in `archive/`.
