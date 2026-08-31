# html09 DIY Task: Ship Three Features

**The unit's capstone task. All three features go on YOUR real site — not a scratch page — and stay there.**

## Feature 1 — Dark mode toggle

Following the pattern from the feature days (not copy-paste — retype and adapt to your own colors):

- Your palette moved into CSS custom properties on `:root`
- A `.dark-mode` override set
- A real `<button>` in the header that toggles it
- Button label updates with the mode; background transition so it fades

## Feature 2 — Mobile hamburger nav

- Below 768px: nav hidden behind a ☰ button; above: normal nav, no button
- `classList.toggle('open')` drives it
- `aria-expanded` updates when it opens/closes
- Works by keyboard (Tab + Enter)

## Feature 3 — Form validation

On your html08 form:

- At least three checks (required field empty, email shape, length or pattern rule)
- Friendly error messages written into the page (not `alert()`)
- The form only "submits" when everything passes
- In a comment at the top of your JS: two or three sentences on what a real server would do with this data after submission (this is competency 6.4.7 — say the words *server*, *database*, and *validation happens again on the server because users can bypass yours*)

## What to commit

Your updated site: HTML, CSS, and a single external `script.js`. All JavaScript commented — every function gets a one-line comment saying what it does (competency 6.3.3).

## Done when

- [ ] Dark mode toggles site-wide via one body class
- [ ] Hamburger appears only on narrow screens and toggles the nav
- [ ] Form blocks bad input with visible, friendly messages
- [ ] All JS is external, commented, and in one file
- [ ] The server comment exists and uses the vocabulary
- [ ] Everything pushed to GitHub
