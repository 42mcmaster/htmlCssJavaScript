# html06 Extension Task: Sticky Header & Lifting Cards

**For fast finishers. Extra credit — no points, no rubric. Finish the regular html06 tasks first.**

## The task

Two professional touches, pure CSS, zero JavaScript:

**Part 1 — Sticky header.** Make your site header stay visible while the page scrolls:

```css
header {
  position: sticky;
  top: 0;
  z-index: 10;
}
```

Give the header a solid background (a transparent sticky header lets content show through it — try it and see) and enough content below to actually scroll.

**Part 2 — Cards that lift.** Build a row of at least three "cards" (a bordered box with padding, a heading, and a sentence — this is box model practice). On hover, each card should *lift*:

```css
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

Add a `transition` on the card so the lift is smooth rather than instant. Experiment with the values until it feels right — the numbers above are a starting point, not the answer.

## What to commit

- `html06_ExtensionSticky_lastname.html` + its stylesheet

## Done when

- [ ] Header stays pinned while scrolling, with a solid background and correct stacking
- [ ] Three or more cards built with padding/border/margin (box model, not magic)
- [ ] Hover lifts a card smoothly (transition, transform, shadow)
- [ ] No JavaScript anywhere
- [ ] Pushed to GitHub
