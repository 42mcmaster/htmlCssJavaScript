# Lesson 09a DIY Task: Add Light and Dark Mode to Your Website

Add a light and dark mode button to the website in your `DiyWebsite_Lastname` folder. This is the graded item for Lesson 09a. Watch the video and do the walkthrough first.

You will:

1. Make an **external script file**, `script.js`, and link it on **every page**
2. Give the body of every page the **`light-mode`** class and add a **toggle button**
3. Add **`.light-mode`** and **`.dark-mode`** classes to `styles.css` with colors that fit your site
4. Write JavaScript that **switches modes** and **changes the button's text** when the button is clicked

No JavaScript inside your HTML pages (no `onclick`), and no `alert()` pop-ups.

---

## Where Everything Goes

Work in your `DiyWebsite_Lastname` folder at the top of your `htmlCssJavaScript` repo. When you're done, it should look like this:

```
DiyWebsite_Lastname/
├── index.html      <- light-mode class, button, script link
├── about.html      <- light-mode class, button, script link
├── contact.html    <- light-mode class, button, script link
├── gallery.html    <- light-mode class, button, script link
├── template.html   <- light-mode class, button, script link
├── images/
├── media/
├── styles.css      <- light mode and dark mode rules
└── script.js       <- NEW file: your JavaScript
```

| File | What changes |
|---|---|
| Every `.html` page | `class="light-mode"` on the body, a toggle button, and one line right before `</body>` that links `script.js` |
| `styles.css` | A transition on the body, plus `.light-mode` and `.dark-mode` rules |
| `script.js` | New file with a comment block and the light and dark mode code |

The button has to be on **every page that links `script.js`**. If a page links the script but has no button, the Console shows a red error.

---

## Part 1: Update the HTML on Every Page

Start with `template.html`, then make the same changes to `index.html`, `about.html`, `contact.html`, and `gallery.html`.

1. Add the `light-mode` class to the body, with a comment above it:

```html
<!-- The page starts in light mode -->
<body class="light-mode">
```

2. Add the button in your header or nav, wherever it fits your design. Put it in the same spot on every page:

```html
<!-- Button that switches between light mode and dark mode -->
<button type="button" id="toggleButton">Switch to Dark Mode</button>
```

3. Make a new file in your `DiyWebsite_Lastname` folder named `script.js`. All lowercase, no spaces. Then add these two lines right before `</body>` on every page:

```html
  <!-- Link the external JavaScript file -->
  <script src="script.js"></script>
</body>
```

The `id` must be exactly `toggleButton` on every page.

---

## Part 2: Light Mode and Dark Mode Styles

1. Find your `body` rule in `styles.css` and add a transition so the colors fade:

```css
  /* Fade the colors over 0.3 seconds instead of switching instantly */
  transition: background-color 0.3s, color 0.3s;
```

2. **Move** the `background-color` and `color` out of your `body` rule and into a new `.light-mode` rule. These are your site's normal colors, so your site should look the same as before in light mode.

3. Add a `.dark-mode` rule with dark colors that go with your site. You don't have to use black and white.

```css
/* Light mode: the site's normal colors */
.light-mode {
  background-color: #f5f5f5;
  color: #222222;
}

/* Dark mode colors */
.dark-mode {
  background-color: #1e1e2e;
  color: #e0e0e0;
}
```

4. Look at your pages and find anything that stays light or becomes hard to read in dark mode, like your header, nav, footer, or links. Add a `.dark-mode` rule for **at least two** of them:

```css
/* Links in dark mode */
.dark-mode a {
  color: #8ab4f8;
}

/* Header in dark mode */
.dark-mode header {
  background-color: #2a2a3c;
}
```

Use your own colors, not the examples. Tip: test the look first by changing `class="light-mode"` to `class="dark-mode"` on one page, then change it back when you're done.

---

## Part 3: Write the JavaScript

In `script.js`:

1. At the very top, add a multi-line comment with the file name, your name, and one sentence saying what this file does.
2. Find the button with `document.getElementById` and store it in a `const`.
3. Store `document.body` in a `const`.
4. Use `addEventListener` so a function runs when the button is clicked.
5. Inside the function, toggle **both** the `dark-mode` and `light-mode` classes on the body.
6. Inside the function, use an **if / else** with `classList.contains('dark-mode')` to change the button's text:
   - Dark mode on: **Switch to Light Mode**
   - Light mode on: **Switch to Dark Mode**
7. Put a one-line `//` comment above each part saying what it does.

Your code should follow the same steps as the walkthrough: **find** the button and the body, **listen** for a click, **change** the class and the button's text. Write it yourself instead of pasting the walkthrough code, and check the walkthrough if you get stuck.

---

## Part 4: Test, Finish, and Push

1. Open each page in Live Preview. Click the button. The page should fade to dark mode and back every time, and the button's text should change to match.
2. Open Developer Tools and check the Console on each page. There should be no red errors.
3. Check that all text is easy to read in both modes.
4. Run `index.html` and `contact.html` through https://validator.w3.org/ and fix any errors.
5. In GitHub Desktop, commit with a message like `html09a: light and dark mode`, then Push.
6. Check on github.com that `script.js` is in your `DiyWebsite_Lastname` folder.

Note: each page starts in light mode when you go to it. That's expected for this task.

---

## Checklist

**HTML**
- [ ] `class="light-mode"` on the body of every page, with a comment above it
- [ ] A button with `id="toggleButton"` and the text "Switch to Dark Mode" on every page, with a comment above it
- [ ] `<script src="script.js"></script>` right before `</body>` on every page, with a comment above it
- [ ] No JavaScript inside the HTML pages (no `onclick`), no `alert()`

**CSS**
- [ ] A transition on the body for `background-color` and `color`
- [ ] A `.light-mode` rule with your site's normal colors
- [ ] A `.dark-mode` rule with a background color and text color that fit your site
- [ ] At least two more `.dark-mode` rules for other parts of the page (header, nav, footer, links, and so on)
- [ ] A comment above each rule

**script.js**
- [ ] Multi-line comment block at the top with the file name, your name, and what the file does
- [ ] The button found with `getElementById` and stored in a `const`
- [ ] `document.body` stored in a `const`
- [ ] `addEventListener` runs a function when the button is clicked
- [ ] The function toggles both `dark-mode` and `light-mode`
- [ ] An if / else with `classList.contains` changes the button's text
- [ ] A one-line comment above each part

**Finish**
- [ ] The button works on every page, with no red errors in the Console
- [ ] All text is readable in both modes
- [ ] `index.html` and `contact.html` pass the validator
- [ ] Pushed to GitHub with GitHub Desktop

---

## Grading

| Criteria | Looking for |
|---|---|
| **HTML on every page** | `class="light-mode"` on the body, a button with `id="toggleButton"`, and a `script.js` link at the end of the body, all with HTML comments |
| **CSS** | A body transition, a `.light-mode` rule, a `.dark-mode` rule, and at least two more `.dark-mode` rules; colors fit the site and keep text readable |
| **JavaScript** | Finds the button and the body, toggles both classes on a click, and changes the button's text with if / else; works with no red errors |
| **Comments** | Comment block at the top of `script.js`, a comment above each part, both comment styles (`//` and `/* */`) used |
| **Pushed** | On GitHub with `script.js` in the `DiyWebsite_Lastname` folder; the rest of the site still works |

Mostly done with only a few things missing is full credit. Several things missing is one step down. Missing work gets no credit.

---

## If something goes wrong

- **Nothing happens when you click, and the Console is empty:** the script isn't linked on that page. Check the `src` spelling and that `script.js` is in the same folder as the page.
- **Red error: "Cannot read properties of null":** JavaScript couldn't find the button on that page. Check that the page has the button, that its id is exactly `toggleButton`, and that the `<script>` tag is below the button, right before `</body>`.
- **Red error: "document.body is not a function":** you wrote `document.body()` with parentheses. Take them out.
- **Red error that a name "is not defined":** a variable name is spelled differently in two places. Names must match exactly, including capital letters.
- **The page switches but the button's text never changes:** the if / else is outside the function. Move it inside the function's curly braces.
- **The page turns dark but won't come back:** toggle **both** classes, and check that the body starts with `class="light-mode"`.
- **Your site's normal colors changed:** put your site's normal background and text colors in the `.light-mode` rule.
- **The button works but nothing changes color:** CSS uses `.dark-mode` with a dot. JavaScript uses `'dark-mode'` without a dot. Check that the spelling matches.
- **Part of the page stays light:** that part has its own color in your CSS. Add a `.dark-mode` rule for it, like `.dark-mode footer`.
- **Each page starts in light mode again:** that's expected. Each page starts in light mode.
- **Old results still show after you change the code:** save every file and refresh the preview.
- **Still stuck:** ask a classmate to read your code out loud with you, then ask Mr. McMaster.
