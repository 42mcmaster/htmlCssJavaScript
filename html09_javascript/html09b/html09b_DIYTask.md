# Lesson 09 DIY Task: Add JavaScript to Your Website

Add JavaScript to the website you have been building in your `DiyWebsite_Lastname` folder. This is the graded item for Lesson 09. The `html09_Task.html` practice file gets you ready for it.

1. A **dark mode button** in the header of every page
2. **Form checks** on your contact form, so it can't send bad information
3. **Comments** in your JavaScript that explain what each part does

All of your JavaScript goes in **one new file**, `script.js`. Every page links to it. No JavaScript inside your HTML pages, and no `alert()` pop-ups.

---

## Where Everything Goes

Work in your `DiyWebsite_Lastname` folder at the top of your `htmlCssJavaScript` repo. When you're done, it should look like this:

```
DiyWebsite_Lastname/
├── index.html      <- add the dark mode button + link script.js
├── about.html      <- add the dark mode button + link script.js
├── contact.html    <- add the dark mode button + link script.js + error message spots
├── gallery.html    <- add the dark mode button + link script.js
├── template.html   <- add the dark mode button + link script.js
├── images/
├── media/
├── styles.css      <- colors move into variables; add dark mode colors
└── script.js       <- NEW file: all of your JavaScript
```

| File | What changes |
|---|---|
| `styles.css` | Your colors move into variables on `:root`. A new `body.dark-mode` rule gives the dark colors. Add `.error` and `.success` styles. |
| `script.js` | New file. The dark mode code and the form check code, with comments. |
| Every `.html` page | A dark mode `<button>` in the header. A `<script src="script.js"></script>` line right before `</body>`. |
| `contact.html` | Also: `novalidate` on the form, an error `<span>` under each field you check, and a success line. |

---

## Part 1: Link script.js on Every Page

1. In VS Code, make a new file in your `DiyWebsite_Lastname` folder named `script.js`.
2. Put this at the top of it for now:

```js
// script.js - JavaScript for my website
// This file is linked on every page.
```

3. On **every** page (including `template.html`), add this line right before `</body>`:

```html
  <script src="script.js"></script>
</body>
```

The script goes at the end of the body so the page's HTML is already loaded when the script runs. If the script is at the top, it looks for your button before the button exists.

---

## Part 2: Dark Mode Button

### 2a. Move your colors into variables (styles.css)

Right now your colors are typed straight into your CSS rules, like `background-color: #faf7f2;`. Move them into **custom properties** (CSS variables) at the top of `styles.css`. Use your own colors, not these:

```css
/* Light colors (the default) */
:root {
  --bg-color: #faf7f2;
  --text-color: #2a2118;
  --accent-color: #7a4a1f;
  --surface-color: #ffffff;   /* header, footer, cards */
}
```

Then go through your rules and swap each color for its variable:

```css
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;   /* fades instead of snapping */
}

header, footer {
  background-color: var(--surface-color);
}

a {
  color: var(--accent-color);
}
```

Refresh your pages. Nothing should look different yet. That means you did it right.

### 2b. Add the dark colors (styles.css)

Under the `:root` rule, add the dark version. Same variable names, new values:

```css
/* Dark mode: same names, darker colors */
body.dark-mode {
  --bg-color: #211a12;
  --text-color: #f0e9df;
  --accent-color: #d9a662;
  --surface-color: #2e251a;
}
```

When the `dark-mode` class is on `<body>`, every rule that uses a variable picks up the dark color. Make sure text is still easy to read in both modes.

### 2c. Add the button (every page)

Put this button inside the `<header>` on every page, after your nav:

```html
<button id="theme-toggle" type="button">Dark mode</button>
```

It is a `<button>`, not a link, because it does something on the page. It doesn't go to another page.

### 2d. Write the JavaScript (script.js)

```js
// ----- Dark mode button -----

// Find the button in the header
const themeBtn = document.getElementById('theme-toggle');

// When it is clicked, turn the dark-mode class on or off
themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Change the button words to match the mode
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Light mode';
  } else {
    themeBtn.textContent = 'Dark mode';
  }
});
```

Type it yourself. Don't paste it. Then test the button on every page.

**Note:** when you click to a different page, it goes back to light mode. That's expected. Each page starts fresh.

---

## Part 3: Check the Contact Form (contact.html + script.js)

Your contact form from Lesson 08 already has `required` on some fields. Now JavaScript will check the form and write friendly messages on the page.

### 3a. Get the form ready (contact.html)

1. Make sure the form has `id="contact-form"`.
2. Add `novalidate` to the form tag. This turns off the browser's pop-up bubbles so your messages show instead. Keep your `required` attributes.
3. Make sure these three fields have these ids. If yours are different, change the `id` **and** the matching label's `for`:
   - the name box: `id="name"`
   - the email box: `id="email"`
   - the message box (textarea): `id="message"`
4. Under each of those three fields, add an empty `<span>` for its error message.
5. At the bottom of the form, add a success line that starts out hidden.

It should look something like this. Your other fields (radio buttons, checkboxes, select, fieldset) stay where they are:

```html
<form id="contact-form" novalidate>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>
  <span class="error" id="name-error"></span>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
  <span class="error" id="email-error"></span>

  <!-- your other fields stay here -->

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" required></textarea>
  <span class="error" id="message-error"></span>

  <button type="submit">Send</button>
  <button type="reset">Clear</button>

  <p class="success" id="form-success" hidden>Thanks! Your message passed every check.</p>
</form>
```

### 3b. Style the messages (styles.css)

```css
.error {
  display: block;
  color: #b3261e;
}

.success {
  color: #1b7f3a;
  font-weight: bold;
}
```

Check that both colors are readable in dark mode too. If not, add a `body.dark-mode .error { ... }` rule with a lighter color.

### 3c. Write the checks (script.js)

Your form needs **at least these three checks**:

| Field | Rule | Example message |
|---|---|---|
| Name | Can't be empty | Please enter your name. |
| Email | Must include `@` | Please enter an email address with an @. |
| Message | At least 10 characters | Your message must be at least 10 characters. |

Here is the start. It shows the name check. You write the email and message checks the same way.

```js
// ----- Contact form checks -----

// Find the form. Only contact.html has one, so on other pages this is null.
const form = document.getElementById('contact-form');

// Only set up the checks if this page has the form
if (form) {
  form.addEventListener('submit', function (event) {
    // Stop the form from sending until we check it
    event.preventDefault();

    // Start by assuming everything is fine
    let allGood = true;

    // Check 1: the name can't be empty
    const nameBox = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameBox.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      allGood = false;
    } else {
      nameError.textContent = '';
    }

    // Check 2: the email needs an @
    // (your code here - use emailBox.value.includes('@'))

    // Check 3: the message needs at least 10 characters
    // (your code here - use messageBox.value.trim().length)

    // Show the thank-you line only when every check passed
    document.getElementById('form-success').hidden = !allGood;
  });
}
```

Why `if (form)`? `script.js` runs on every page. On `about.html` there is no form, so `form` is empty (`null`). Without the `if`, the script would crash on those pages.

### 3d. Test it

Try each of these on `contact.html`:

1. Click Send with everything empty. All three messages show up.
2. Type an email with no `@`. The email message shows.
3. Type a message shorter than 10 characters. The message check shows.
4. Fill everything in correctly. The errors go away and the thank-you line shows.
5. Click the dark mode button. The messages are still easy to read.

---

## Part 4: Comments (script.js)

Your JavaScript must be commented (ODE 6.3.3).

1. Put a comment above each part (dark mode, form checks) saying what it does.
2. Put a one-line comment above each `if` check saying what it checks.
3. At the top of `script.js`, write **2 or 3 sentences** in a comment saying what a real website does with the form data after it passes your checks. Use the words **server**, **database**, and **check it again**. For example:

```js
// What happens to the form data on a real site:
// When the form passes these checks, the browser sends the data to a web server.
// The server checks it again, because a user can get around JavaScript.
// Then the server saves it in a database or sends it on to a web service, like email.
```

Write it in your own words.

---

## Part 5: Finish and Push

1. Open every page. Click the dark mode button on each one.
2. Run all 4 contact form tests again.
3. Run each page through https://validator.w3.org/ and fix the errors.
4. In GitHub Desktop, commit with a message like `html09: dark mode and form checks`, then Push.
5. Check on github.com that `script.js` is in your `DiyWebsite_Lastname` folder.

---

## Checklist

**script.js**
- [ ] `script.js` is in the `DiyWebsite_Lastname` folder
- [ ] Every page links it with `<script src="script.js"></script>` right before `</body>`
- [ ] No JavaScript inside the HTML pages, no `alert()`

**Dark mode**
- [ ] Colors moved into variables on `:root` in `styles.css`
- [ ] `body.dark-mode` rule with the dark colors
- [ ] `<button id="theme-toggle">` in the header on every page
- [ ] Clicking it switches the page between light and dark
- [ ] The button words change (Dark mode / Light mode)
- [ ] Text is readable in both modes

**Form checks (contact.html)**
- [ ] Form has `id="contact-form"` and `novalidate`
- [ ] Name, email, and message each have an error `<span>`
- [ ] Empty name shows a message on the page
- [ ] Email without `@` shows a message on the page
- [ ] Message under 10 characters shows a message on the page
- [ ] Thank-you line shows only when everything passes

**Comments**
- [ ] A comment above each part and each check
- [ ] The server / database comment at the top, in your own words

**Finish**
- [ ] All pages still work: nav, images, video, table, form
- [ ] All pages pass the validator
- [ ] Pushed to GitHub with GitHub Desktop

---

## Grading

| Criteria | Looking for |
|---|---|
| **script.js linked** | One external `script.js`, linked at the end of the body on every page, no JavaScript inside the HTML |
| **Dark mode** | Colors in variables, a `body.dark-mode` rule, a real button in the header on every page, button words change, readable in both modes |
| **Form checks** | Name, email, and message checks on `contact.html`, messages written on the page (not `alert()`), thank-you line only when everything passes |
| **Comments** | Each part and each check has a comment; the server / database comment is there in the student's own words |
| **Site still works** | Every page loads, every link works, nothing from earlier lessons broke, pages pass the validator |
| **Pushed** | On GitHub with `script.js` in the `DiyWebsite_Lastname` folder |

Mostly done with a working page and only a few things missing is full credit. Several things missing is one step down. Missing work gets no credit.

---

## If something goes wrong

- **The button does nothing:** check that the `<script>` line is right before `</body>`, and that the file name is spelled `script.js` exactly. Then check that the button's id is `theme-toggle` in both the HTML and the JavaScript.
- **The button works on one page but not another:** that page is missing the button or the `<script>` line.
- **The dark mode button stopped working on contact.html only:** there is a typo in the form code. A mistake anywhere in `script.js` can stop the whole file. Check your brackets `{ }` and parentheses `( )`. Every one that opens has to close.
- **Dark mode only changes some colors:** those rules still have a real color typed in. Swap it for `var(--bg-color)` or the matching variable.
- **The browser shows its own pop-up bubble instead of your message:** add `novalidate` to the `<form>` tag.
- **The page reloads and your message flashes away:** `event.preventDefault();` is missing or misspelled, or the listener is on the button instead of the form. Use `form.addEventListener('submit', ...)`.
- **An error message never shows:** the id in `getElementById('...')` doesn't match the id in the HTML. They must match exactly, including dashes.
- **Code below the form checks doesn't run on your other pages:** you are missing the `if (form) { ... }` around the form code.
- **Still stuck:** ask a classmate to read your code out loud with you, then ask Mr. McMaster.
