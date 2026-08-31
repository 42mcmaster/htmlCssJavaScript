# html02 Extension Task: Div Soup Rescue

**For fast finishers. This is extra credit — Mr. M will assign points when complete. But, make sure you finish the regular html02 tasks first.**

## The situation

A "web developer" delivered the page in `html02_ExtensionStarter.html`. It *looks* okay in a browser — but the markup underneath is a disaster: everything is a `<div>`, the "headings" are just bold text, the "list" is built with `<br>` tags, and `<b>`/`<i>` are used where `<strong>`/`<em>` belong.

Your job: fix it with the knowledge you have learned regarding semantic tags. 

## The task

1. Copy `html02_ExtensionStarter.html` to a new file named `html02_ExtensionRescue_lastname.html`.
2. Refactor the markup so every element is the **semantically correct** one. The page should look roughly the same in the browser — you are fixing *meaning*, not style. You will need at least: proper headings (`h1`–`h3`), `header`/`nav`/`main`/`footer` regions, a real list, `strong`/`em`, and real paragraphs.
3. Create `html02_ExtensionNotes_lastname.md` — a short "what I changed and why" note. For each *category* of fix (not every single line), one or two sentences: what was wrong, what you replaced it with, why the new element is correct.

## What to commit

- `html02_ExtensionRescue_lastname.html`
- `html02_ExtensionNotes_lastname.md`

## Done when

- [ ] No `<div>` remains that should be a semantic element
- [ ] No bold-text fake headings; a single `h1`, logical `h2`/`h3` below it
- [ ] The `<br>` "list" is a real `<ul>` or `<ol>`
- [ ] Every `<b>` and `<i>` is either justified or replaced with `<strong>`/`<em>`
- [ ] Your notes file explains each category of change
- [ ] Both files pushed to GitHub
