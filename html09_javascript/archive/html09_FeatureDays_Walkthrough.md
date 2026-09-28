# html09 Feature Days Walkthrough: Dark Mode & Mobile Nav

Two real features, one JavaScript move. By the end, your actual site has both — and they stay on it for the html11 project.

---

## Part 1 — Dark Mode Toggle

### Step 1: Define both palettes with CSS custom properties

In your stylesheet, put your colors in variables on `:root`, then override them under a `.dark-mode` class:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #0055aa;
}

body.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #eeeeee;
  --accent-color: #66aaff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

a { color: var(--accent-color); }
```

Now *one class on body* re-themes everything that uses the variables. This is the cascade doing the heavy lifting — the JS only has to flip one switch.

### Step 2: Add the button

```html
<button id="theme-toggle">Dark mode</button>
```

Put it in your header. It's a `button`, not a link — it does something on this page, it doesn't go anywhere.

### Step 3: The JavaScript — three lines that matter

```js
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
```

That's the whole feature. Select, listen, toggle.

### Step 4: Polish

- Update the button's own text when the mode changes (`toggleBtn.textContent = ...` — an if/else on `classList.contains('dark-mode')`).
- Add a CSS `transition` on body's background-color so the switch fades instead of snapping.

---

## Part 2 — Mobile Hamburger Nav

Same move, new problem: on a narrow screen your nav links should hide behind a ☰ button.

### Step 1: The button and the CSS

```html
<button id="nav-toggle" aria-expanded="false">☰ Menu</button>
```

```css
/* phones first: nav hidden until opened */
nav ul { display: none; }
nav ul.open { display: block; }

/* desktop: nav always visible, button gone */
@media (min-width: 768px) {
  nav ul { display: flex; }
  #nav-toggle { display: none; }
}
```

### Step 2: The JavaScript — recognize it?

```js
const navBtn = document.getElementById('nav-toggle');
const navList = document.querySelector('nav ul');

navBtn.addEventListener('click', function () {
  navList.classList.toggle('open');
  const isOpen = navList.classList.contains('open');
  navBtn.setAttribute('aria-expanded', isOpen);
});
```

Same pattern as dark mode: select, listen, toggle. The `aria-expanded` line tells screen readers whether the menu is open — a button that hides and shows content should always announce its state.

### Step 3: Test like you mean it

Narrow the window below 768px: button appears, menu toggles. Widen it: menu visible, button gone. Then Tab to the button and hit Enter — keyboard users get the menu too, for free, *because you used a real button*.

---

## The takeaway

Two features that look completely different to a user are the identical four moves to you: **select an element → listen for an event → toggle a class → let CSS do the rest.** Every item on the extension menu (accordion, tabs, lightbox) is this same pattern one more time.
