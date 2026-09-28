# Lesson 09: JavaScript

Students learn their first JavaScript: the `<script>` tag, variables, data types, functions, if / else, and comments. Then they use the DOM to change a page, respond to clicks, build a dark mode button, and check a form before it sends. The DIY task adds dark mode and form checks to the website in each student's `DiyWebsite_Lastname` folder.

**ODE competencies:** 6.3.1, 6.3.2, 6.3.3, 6.4.7

## Files

### Student files

| File | What it is |
|---|---|
| `html09_Walkthrough.md` | The one walkthrough. Students build one page step by step: output, variables, functions, if / else, the DOM, clicks, classes, dark mode, form checks, and moving the script to an external file. Includes Try This answers. |
| `html09_Task.html` | The one practice task (20 TODOs in 4 parts): variables, functions, DOM changes, and form validation. |
| `html09_DIYTask.md` | The graded task. Add an external `script.js` to the student's website with a dark mode button on every page and checks on the contact form. |
| `html09_Slides.md` | Slide deck (Marp) for the whole lesson. |
| `html09_StudyGuide.md` | Vocabulary, cheat sheets with commented code, common mistakes, ODE competencies, and practice questions. |

### Teacher files (`teacher/`)

| File | What it is |
|---|---|
| `html09_Walkthrough_Solutions.html` | The finished walkthrough page, every step working. |
| `html09_Task_Solutions.html` | The finished practice task, all 20 TODOs. |
| `html09_DIYTask_Example.html` / `.css` / `.js` | A working example of the DIY: dark mode button, form checks with messages on the page, and the server comment at the top of the JS. |
| `html09_GoogleQuiz.csv` | 53 questions for Google Forms (same column format as the other lessons). |
| `html09_Gimkit.csv` | The same 53 questions in Gimkit format. |

### Archive (`archive/`)

The old lesson files: the three slide decks, three walkthroughs, two study guides, tasks html09a through html09d, the Mad Libs DIY, the three-feature DIY, the extension task, the unit guide, the manifest, the old README, and all of their solutions (in `archive/teacher/`). Nothing was deleted.

## Suggested Days (about 3 class days)

| Day | In class | Files |
|---|---|---|
| 1 | Slides through "if and else." Walkthrough Steps 1 to 10. Start the practice task, Parts 1 and 2. | Slides, Walkthrough, Task |
| 2 | Slides through "After the Form Is Sent." Walkthrough Steps 11 to 18. Finish the practice task, Parts 3 and 4. | Slides, Walkthrough, Task |
| 3 | DIY task: `script.js`, dark mode on every page, contact form checks, comments. Push with GitHub Desktop. Gimkit review at the end if there is time. | DIY Task, Gimkit |

The Google Quiz can go at the start of the next lesson or at the end of Day 3.

## The console is turned off on student computers

Dev tools are disabled on student machines, so `console.log()` can't be seen. All student materials use the **output box** instead: a `<div id="output">` and a small `say()` function that writes into it.

```html
<div id="output"></div>
<script>
  // say() adds a message to the #output box on the page
  function say(msg) {
    document.getElementById('output').textContent += msg + '\n';
  }
  say('Hello, world!');   // used everywhere console.log() would be
</script>
```

`console.log()` is still taught by name, so students recognize it. A side benefit: students use `getElementById` and `textContent` on day one, which makes the DOM steps on day two easier.

## Scope Decisions

- **Hover effects are CSS** (`:hover`, html06). JavaScript is for what CSS can't do: clicks, reading input, changing content.
- **Concatenation with `+` is the tested form.** Template literals are shown once so students recognize them.
- **One `if / else`** is taught, because dark mode (button label) and form validation both need it. Loops are not in this lesson.
- **Form validation is the 6.4.7 carrier.** Students check the form in the browser and write a short comment on what a server, database, and web service do with the data after it is sent. No real server.
- **Cut from this lesson:** the Mad Libs project, the mobile menu button, the FAQ show/hide pattern, the extension task, and anything with fetch or APIs. The old files are in `archive/` if you want them back.
- **Dark mode does not carry between pages.** Each page starts in light mode. Remembering the choice needs `localStorage`, which is not in scope.

## ODE Competencies

| Competency | Where it is covered |
|---|---|
| **6.3.1** Scripting languages in web development | Walkthrough Step 2, Slides, Study Guide |
| **6.3.2** Insert client-side scripts | Walkthrough Steps 3 and 18 (internal, external, end of body, `defer`); DIY Part 1 (`script.js` on every page) |
| **6.3.3** Comments in scripts | Walkthrough Step 5; Task and DIY code comments; DIY Part 4 is graded on comments |
| **6.4.7** Scripting with forms and data | Walkthrough Steps 16 and 17; Task Part 4; DIY Part 3 (form checks) and Part 4 (server / database comment) |
