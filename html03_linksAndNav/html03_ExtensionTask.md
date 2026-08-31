# html03 Extension Task: Breadcrumbs & the Skip Link

**For fast finishers. Extra credit — no points, no rubric. Finish the regular html03 tasks first.**

## The task

Two real-world navigation patterns, added to your multi-page mini-site:

**Part 1 — Breadcrumb trail.** On every page except the home page, add a breadcrumb line near the top showing where the visitor is, with each ancestor a working link:

`Home > Menu > Desserts`

Use a `<nav>` element with an ordered list inside — breadcrumbs are a *sequence*, so `<ol>` is the semantically correct list. Only the current page is plain text; everything before it is a link.

**Part 2 — Skip link.** As the very first element inside `<body>` on each page, add:

`<a href="#main-content">Skip to main content</a>`

and give your main content area `id="main-content"`. This link lets keyboard users jump past the navigation instead of tabbing through every link on every page. Test it: click in the address bar, then press Tab once — your skip link should be the first thing reachable, and activating it should jump to the content.

## What to commit

Your updated mini-site pages (breadcrumbs on all subpages, skip link on every page).

## Done when

- [ ] Every subpage has a breadcrumb `<nav>` with an `<ol>` inside
- [ ] Every breadcrumb ancestor is a working relative link; current page is plain text
- [ ] Every page's first focusable element is the skip link
- [ ] The skip link target exists and the jump works
- [ ] Pushed to GitHub
