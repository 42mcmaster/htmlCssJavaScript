---
marp: true
theme: default
paginate: true
---

<!-- _header: "html09 — Feature Days" -->

# Two Real Features, One Move
## Dark Mode & the Hamburger Menu

Everything today is: **select → listen → toggle → let CSS finish.**

---

# Why Dark Mode Is a CSS Lesson in Disguise

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
}
body.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #eeeeee;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

One class on `body` re-themes the page. The **cascade** does the work — JS just flips a switch.

---

# The Whole JavaScript

```js
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
```

Three statements. Select. Listen. Toggle.

**Polish:** update the button label; add a CSS `transition` so it fades.

---

# The Hamburger: Same Move, New Problem

```css
nav ul { display: none; }        /* phones: hidden */
nav ul.open { display: block; }  /* until opened  */

@media (min-width: 768px) {
  nav ul { display: flex; }      /* desktop: always on */
  #nav-toggle { display: none; } /* button gone */
}
```

The media query decides *who sees the button.* The toggle decides *whether the menu is open.*

---

# One New Idea: Announce Your State

```js
navBtn.addEventListener('click', function () {
  navList.classList.toggle('open');
  const isOpen = navList.classList.contains('open');
  navBtn.setAttribute('aria-expanded', isOpen);
});
```

A button that hides/shows content should tell assistive tech whether it's open. That's `aria-expanded` — and it's why we used a real `<button>`.

---

# Hover ≠ JavaScript

Want a link to change on hover? That is **CSS**:

```css
nav a:hover { color: gold; }
```

JS events are for what CSS *can't* do: clicks, input, changing content.

---

# Today's Build

1. Dark mode on YOUR site (custom properties + toggle)
2. Hamburger on YOUR site (mobile-first + toggle)
3. Both stay — they're required in the html11 project

Fast finishers: the extension menu (accordion, scroll-to-top, lightbox, tabs) — same move, more reps.
