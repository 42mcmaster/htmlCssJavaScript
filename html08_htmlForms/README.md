# HTML 08: Forms

Students learn to build and style HTML forms, then add a working contact form to the Contact page of the website they have been building all year (`DiyWebsite_Lastname/contact.html`). The form gets `id="contact-form"` so Lesson 09 can add JavaScript validation to it.

## Files

### Student files

| File | What it is |
|---|---|
| `html08_Walkthrough.md` | Step-by-step guide. Students build a practice sign-up form (`form-practice.html` + `form-practice.css`) using every graded form skill. |
| `html08_Task.html` | The one practice task: a coding camp registration form. Starter file with TODO comments for the HTML (Part 1), the CSS (Part 2), and a test list (Part 3). |
| `html08_DIYTask.md` | The graded item. Add a styled contact form to `contact.html` on the student's own site, styled in their existing `styles.css`. |
| `html08_Slides.md` | Marp slide deck for direct instruction. |
| `html08_StudyGuide.md` | Vocabulary, reference tables, commented examples, and review questions. |

### Teacher files (`teacher/`)

| File | What it is |
|---|---|
| `teacher/html08_Task_Solutions.html` | Finished practice task, all TODOs done (internal CSS). |
| `teacher/html08_Gimkit.csv` | Gimkit question set (Question, Correct, 3 Incorrect). |
| `teacher/html08_GoogleQuiz.csv` | Google Forms quiz import (Question, Options A-D, Correct Answer, Points). |

### Archive (`archive/`)

Older versions of this lesson: the three separate a/b/c tasks and their solutions, the old walkthrough and its solution, the old stand-alone form DIY and its solution, the old fast-finisher task, and copies of the old slides, study guide, and quiz files. Kept for reference only. Not used by students.

## Suggested Days (about 3 class days)

| Day | What happens |
|---|---|
| 1 | Slides. Walkthrough steps 1-10 (form tag, action/method, labels, input types, radio, checkbox, select, textarea, fieldset, buttons). |
| 2 | Walkthrough steps 11-13 (tab order, styling, testing). Practice task `html08_Task.html`. |
| 3 | DIY: contact form on `contact.html`, styled in `styles.css`. Test, validate, push with GitHub Desktop. Gimkit or quiz if time allows. |

## What Is Graded

The DIY only. Grading bands are in words (Complete, Mostly complete, Started, Missing). The form must include: `id="contact-form"`, `action` and `method`, labels tied to inputs with `for`/`id`, text, email, and tel or number inputs, a radio group, a checkbox group, a select, a textarea, `required`, `placeholder`, fieldsets with legends, submit and reset buttons, and styling in `styles.css`. The existing mailto link stays on the page.

## ODE Competencies

| Code | Competency | Where it is covered |
|---|---|---|
| 6.4.1 | Design forms from specifications | DIY Part 1 (plan the form for the site's topic); task follows a written spec |
| 6.4.2 | HTML code to add a form to a web page | Walkthrough steps 2-10; task Part 1; DIY Part 2 |
| 6.4.3 | Text fields, radio buttons, checkboxes, dropdowns | Walkthrough steps 3-8; task TODO 2-5; DIY 2b-2d |
| 6.4.4 | Concept of form action | Walkthrough step 2. `action` is where the answers go; our sites have no server, so `action="#"`. GET vs POST at concept level: GET puts answers in the address bar, POST hides them and is what real contact and login forms use. Students submit with GET to see the `name=value` pairs. |
| 6.4.5 | Submit and reset buttons | Walkthrough step 10; task TODO 6; DIY 2e |
| 6.4.6 | Style forms with CSS (fieldset, tabindex) | Walkthrough steps 9, 11, 12; task Part 2 and TODO 7 (remove a bad `tabindex`); DIY Part 3 and 2f |

## Notes for Mr. McMaster

- **Why `method="get"`:** with no server, GET lets students see what the form sends in the address bar. It also works on static hosts like Firebase Hosting. A form that POSTs to a plain HTML page on a static host returns an error (405 Method Not Allowed). GET works.
- **Lesson 09 hook:** the DIY fixes the ids `contact-form`, `name`, `email`, and `message` so the JavaScript lesson can use them.
- Font sizes in examples use `rem` (taught in html05c).
- Students check their work with the browser, the W3C validator, and the address bar only.
