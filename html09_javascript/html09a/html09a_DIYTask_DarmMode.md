# Lesson 09a DIY Task: Add Dark Mode to Your Website

Add a dark mode button to the website in your `DiyWebsite_Lastname` folder. This is the graded item for Lesson 09a. Do the walkthrough and the W3Schools example first.

You will:

1. Make an **external script file**, `script.js`, and link it on **every page**
2. Add a **Dark Mode button** to every page
3. Add a **`.dark-mode` class** to `styles.css` with dark colors that fit your site
4. Write JavaScript that **toggles** dark mode when the button is clicked

No JavaScript inside your HTML pages (no `onclick`), and no `alert()` pop-ups.

---

## Where Everything Goes

Work in your `DiyWebsite_Lastname` folder at the top of your `htmlCssJavaScript` repo. When you're done, it should look like this:

```
DiyWebsite_Lastname/
├── index.html      <- button + script link
├── about.html      <- button + script link
├── contact.html    <- button + script link
├── gallery.html    <- button + script link
├── template.html   <- button + script link
├── images/
├── media/
├── styles.css      <- add dark mode rules
└── script.js       <- NEW file: your JavaScript
```

| File | What changes |
|---|---|
| Every `.html` page | A Dark Mode button, and one line right before `</body>` that links `script.js` |
| `styles.css` | New `.dark-mode` rules at the bottom |
| `script.js` | New file with a comment block and the dark mode code |

The button has to be on **every page that links `script.js`**. If a page links the script but has no button, the Console shows a red error.

---

## Part 1: Add the Button to Every Page

1. Open `template.html` first. Add the button in your header or nav, wherever it fits your design:

```html
<!-- Button that switches dark mode on and off -->
<button type="button" id="themeButton">Dark Mode</button>
```

2. Add the same two lines to `index.html`, `about.html`, `contact.html`, and `gallery.html`, in the same spot on each page.

The `id` must be exactly `themeButton` on every page.

---

## Part 2: Link script.js on Every Page

1. In VS Code, make a new file in your `DiyWebsite_Lastname` folder named `script.js`. All lowercase, no spaces.
2. On every page, add these two lines right before `</body>`:

```html
  <!-- Link the external JavaScript file -->
  <script src="script.js"></script>
</body>
```

---

## Part 3: Dark Mode Styles

At the bottom of `styles.css`, add a comment and a `.dark-mode` rule. Pick dark colors that go with your site. You don't have to use black and white.

```css
/* Dark mode: used when the body has the dark-mode class */
.dark-mode {
  background-color: #1e1e2e;
  color: #e0e0e0;
}
```

Then look at your pages and find anything that stays light or becomes hard to read in dark mode, like your header, nav, footer, or links. Add a rule for **at least two** of them:

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

Use your own colors, not the examples. Tip: test the look first by typing `class="dark-mode"` on the `<body>` of one page, then remove it when you're done.

---

## Part 4: Write the JavaScript

In `script.js`:

1. At the very top, add a multi-line comment with the file name, your name, and one sentence saying what this file does.
2. Find the button with `document.getElementById` and store it in a `const`.
3. Write a function that toggles the `dark-mode` class on `document.body`. Give it a name that says what it does.
4. Use `addEventListener` so the function runs when the button is clicked.
5. Put a one-line `//` comment above each part saying what it does.

Your code should follow the same three steps as the walkthrough: **find** the button, **write** the function, **connect** them with an event. Write it yourself instead of pasting the walkthrough code, and check the walkthrough if you get stuck.

---

## Part 5: Test, Finish, and Push

1. Open each page in Live Preview. Click the button. The page should switch to dark mode and back again every time.
2. Open Developer Tools and check the Console on each page. There should be no red errors.
3. Check that all text is easy to read in dark mode.
4. Run `index.html` and `contact.html` through https://validator.w3.org/ and fix any errors.
5. In GitHub Desktop, commit with a message like `html09a: dark mode button`, then Push.
6. Check on github.com that `script.js` is in your `DiyWebsite_Lastname` folder.

Note: dark mode turns off when you go to a different page. That's expected for this task.

---

## Optional Challenge

Make the button's text change. When the page is in dark mode, the button should say **Light Mode**. When it's in light mode, it should say **Dark Mode**.

Hints: `document.body.classList.contains('dark-mode')` gives `true` or `false`. `themeButton.textContent = 'Light Mode';` changes the button's text. You'll need an `if` statement.

---

## Checklist

**HTML**
- [ ] A Dark Mode button with `id="themeButton"` on every page
- [ ] An HTML comment `<!-- -->` above each button
- [ ] `<script src="script.js"></script>` right before `</body>` on every page, with an HTML comment above it
- [ ] No JavaScript inside the HTML pages (no `onclick`), no `alert()`

**CSS**
- [ ] A `.dark-mode` rule with a background color and text color that fit your site
- [ ] At least two more `.dark-mode` rules for other parts of the page (header, nav, footer, links, and so on)
- [ ] A comment above the dark mode section

**script.js**
- [ ] Multi-line comment block at the top with the file name, your name, and what the file does
- [ ] The button found with `getElementById` and stored in a `const`
- [ ] A function with a clear camelCase name that toggles `dark-mode` on the body
- [ ] `addEventListener` runs the function when the button is clicked
- [ ] A one-line comment above each part

**Finish**
- [ ] The button works on every page, with no red errors in the Console
- [ ] All text is readable in dark mode
- [ ] `index.html` and `contact.html` pass the validator
- [ ] Pushed to GitHub with GitHub Desktop

---

## Grading

| Criteria | Looking for |
|---|---|
| **Button and script link** | A button with `id="themeButton"` and a `script.js` link at the end of the body on every page, with HTML comments |
| **Dark mode CSS** | A `.dark-mode` rule plus at least two more `.dark-mode` rules, with colors that fit the site and keep text readable |
| **JavaScript** | Finds the button, uses a function that toggles the class on the body, connects it with `addEventListener`; works with no red errors |
| **Comments** | Comment block at the top of `script.js`, a comment above each part, both comment styles (`//` and `/* */`) used |
| **Pushed** | On GitHub with `script.js` in the `DiyWebsite_Lastname` folder; the rest of the site still works |

Mostly done with only a few things missing is full credit. Several things missing is one step down. Missing work gets no credit.

---

## If something goes wrong

- **Nothing happens when you click, and the Console is empty:** the script isn't linked on that page. Check the `src` spelling and that `script.js` is in the same folder as the page.
- **Red error: "Cannot read properties of null":** JavaScript couldn't find the button on that page. Check that the page has the button, that its id is exactly `themeButton`, and that the `<script>` tag is below the button, right before `</body>`.
- **Red error that a name "is not defined":** a variable or function name is spelled differently in two places. Names must match exactly, including capital letters.
- **The page turns dark when it loads and the button does nothing:** take the parentheses off the function name inside `addEventListener`.
- **The button works but nothing changes color:** CSS uses `.dark-mode` with a dot. JavaScript uses `'dark-mode'` without a dot. Check that the spelling matches.
- **Part of the page stays light:** that part has its own color in your CSS. Add a `.dark-mode` rule for it, like `.dark-mode footer`.
- **Dark mode turns off when you change pages:** that's expected. Each page starts in light mode.
- **Old results still show after you change the code:** save every file and refresh the preview.
- **Still stuck:** ask a classmate to read your code out loud with you, then ask Mr. McMaster.
