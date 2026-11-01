# Lesson 09a Walkthrough: Light and Dark Mode with JavaScript

In this walkthrough you will build the same light and dark mode page from the video, one step at a time. The page has a button that switches between light mode and dark mode, and the button's text changes to match. After this, you will add dark mode to your own website in the DIY task.

## Table of Contents

1. [What We Are Building](#1-what-we-are-building)
2. [Set Up the Practice Folder](#2-set-up-the-practice-folder)
3. [The Plan: CSS Does the Look, JavaScript Flips the Switch](#3-the-plan-css-does-the-look-javascript-flips-the-switch)
4. [Step 1: The HTML Page and Button](#4-step-1-the-html-page-and-button)
5. [Step 2: The Light Mode and Dark Mode Classes in CSS](#5-step-2-the-light-mode-and-dark-mode-classes-in-css)
6. [Step 3: Finding the Button and the Body](#6-step-3-finding-the-button-and-the-body)
7. [Step 4: Switching Classes with classList.toggle](#7-step-4-switching-classes-with-classlisttoggle)
8. [Step 5: Running Code When the Button Is Clicked](#8-step-5-running-code-when-the-button-is-clicked)
9. [Step 6: Changing the Button's Text with if and else](#9-step-6-changing-the-buttons-text-with-if-and-else)
10. [The Finished Practice Code](#10-the-finished-practice-code)
11. [How This Compares to the Video](#11-how-this-compares-to-the-video)
12. [Vocabulary](#12-vocabulary)
13. [If Something Goes Wrong](#13-if-something-goes-wrong)

---

## 1. What We Are Building

A page with a heading, a paragraph, and a button that says **Switch to Dark Mode**.

- Click the button: the page fades to dark, and the button changes to **Switch to Light Mode**.
- Click it again: the page fades back to light, and the button changes back.

This is the same page as the video. The only difference is that our JavaScript goes in its own `script.js` file.

---

## 2. Set Up the Practice Folder

Work in your `htmlCssJavaScript` repo. Make a new folder at the top level called `darkModePractice`. Inside it, make three empty files:

```
darkModePractice/
├── index.html
├── styles.css
└── script.js
```

This folder is for practice only. Your `DiyWebsite_Lastname` site does not change until the DIY task.

---

## 3. The Plan: CSS Does the Look, JavaScript Flips the Switch

Dark mode uses three files, and each one has one job:

| File | Its job |
|---|---|
| `index.html` | Holds the content and the button |
| `styles.css` | Says what light mode looks like and what dark mode looks like |
| `script.js` | Switches between light mode and dark mode when the button is clicked |

The key idea: **JavaScript does not pick the colors.** CSS has two classes, `.light-mode` and `.dark-mode`, with the colors already in them. JavaScript only swaps which class the body has. That keeps the design in the CSS file where it belongs.

---

## 4. Step 1: The HTML Page and Button

Put this in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Light and Dark Mode</title>
  <link rel="stylesheet" href="styles.css">
</head>
<!-- The page starts in light mode -->
<body class="light-mode">
  <h1>Light and Dark Mode Toggle</h1>
  <p>Click the button to switch between light mode and dark mode.</p>

  <!-- The button that switches modes. The id lets JavaScript find it. -->
  <button type="button" id="toggleButton">Switch to Dark Mode</button>

  <!-- Link the external JavaScript file. It goes last, right before </body> -->
  <script src="script.js"></script>
</body>
</html>
```

Three things to notice:

- **`<body class="light-mode">`** The page starts with the `light-mode` class. JavaScript will swap it for `dark-mode` and back.
- **`id="toggleButton"`** gives the button a unique name. An `id` can only be used once on a page. JavaScript will use this name to find the button.
- **The `<script>` tag is at the very end of the body.** The browser reads the page from top to bottom. By putting the script last, the button already exists by the time the JavaScript runs. If the script came first, it would look for a button that hasn't been built yet.

---

## 5. Step 2: The Light Mode and Dark Mode Classes in CSS

Put this in `styles.css`:

```css
/* The body: spacing, font, and a smooth color change */
body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  /* Fade the colors over 0.3 seconds instead of switching instantly */
  transition: background-color 0.3s, color 0.3s;
}

/* Light mode colors */
.light-mode {
  background-color: white;
  color: black;
}

/* Dark mode colors */
.dark-mode {
  background-color: black;
  color: white;
}

/* The toggle button */
button {
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
}
```

What's new here:

| Code | What it does |
|---|---|
| `transition: background-color 0.3s, color 0.3s;` | When the background color or text color changes, fade to the new color over 0.3 seconds instead of jumping |
| `cursor: pointer;` | Shows the pointing-hand cursor when the mouse is over the button |
| `.light-mode` and `.dark-mode` | Two classes with opposite colors. The body has one of them at a time. |

Test it before writing any JavaScript. In `index.html`, change `<body class="light-mode">` to `<body class="dark-mode">` and look at Live Preview. The page should be dark. Then change it back to `light-mode`.

That is exactly what the JavaScript is going to do: swap the body's class between `light-mode` and `dark-mode`. The only difference is that JavaScript does it while the page is open, when the button is clicked.

### Other parts of the page

The `.dark-mode` rule above only changes the body. If a page has a header, nav, or links with their own colors, those stay the same. To change them too, write a rule that starts with `.dark-mode`:

```css
/* Links inside a dark-mode body */
.dark-mode a {
  color: lightblue;
}

/* The header inside a dark-mode body */
.dark-mode header {
  background-color: #333333;
}
```

`.dark-mode a` means "any link inside something that has the dark-mode class." Since the body holds everything on the page, this covers every link.

---

## 6. Step 3: Finding the Button and the Body

Before JavaScript can change something on the page, it has to find it. The browser gives JavaScript an object called **`document`** that stands for the whole web page.

Put this in `script.js`:

```js
/*
  script.js
  JavaScript for the light and dark mode practice page.
*/

// Find the button by its id and store it in a variable
const toggleButton = document.getElementById('toggleButton');

// Store the body of the page in a variable
const body = document.body;

// Print them to the Console to check that they were found
console.log(toggleButton);
console.log(body);
```

What each part means:

| Code | Meaning |
|---|---|
| `document` | The whole web page |
| `.getElementById('toggleButton')` | A method that finds the one element whose `id` is `toggleButton` |
| `document.body` | The body of the page. Every page has exactly one body, so no id is needed. |
| `const toggleButton =` and `const body =` | Store what was found in variables so they can be used later |

Notice that `getElementById(...)` has parentheses but `document.body` does not. `getElementById` is a **method**, an action that has to run. `body` is a **property**, a value that is already there. Writing `document.body()` with parentheses causes an error. The video makes this exact mistake and fixes it.

Open the page in Live Preview, open Developer Tools, and check the Console. You should see the button and the body printed there.

If the Console shows **`null`** for the button, JavaScript could not find it. The id in the HTML and the id in the JavaScript don't match. They must be spelled exactly the same, including capital letters.

---

## 7. Step 4: Switching Classes with classList.toggle

Every element has a **`classList`**. It is the list of classes on that element, and it has tools for changing that list.

| Code | What it does |
|---|---|
| `body.classList.add('dark-mode')` | Adds the class |
| `body.classList.remove('dark-mode')` | Removes the class |
| `body.classList.toggle('dark-mode')` | Adds it if it's missing, removes it if it's there |
| `body.classList.contains('dark-mode')` | Checks for the class. Gives `true` if it's there, `false` if it's not. |

**Toggle** means switch back and forth, like a light switch.

To switch modes, the body needs **two** toggles, one for each class:

```js
body.classList.toggle('dark-mode');
body.classList.toggle('light-mode');
```

Here is what happens each time those two lines run:

| Body before | After `toggle('dark-mode')` | After `toggle('light-mode')` |
|---|---|---|
| `light-mode` | `light-mode dark-mode` | `dark-mode` |
| `dark-mode` | (no class) | `light-mode` |

The body always ends up with exactly one of the two classes.

Try it in the Console. Click in the Console, type these two lines one at a time, and press Enter after each:

```js
document.body.classList.toggle('dark-mode')
document.body.classList.toggle('light-mode')
```

The page turns dark. Run them both again and the page turns light. You are running JavaScript by hand. Next you will make the button do it.

Notice the class name is written **without a dot**: `'dark-mode'`, not `'.dark-mode'`. The dot is only used in CSS to mean "this is a class." In `classList`, you just give the name.

---

## 8. Step 5: Running Code When the Button Is Clicked

Something that happens on a page, like a click, is called an **event**. To make code run when an event happens, use **`addEventListener`**. It tells an element: "listen for this event, and when it happens, run this code."

Delete the two `console.log` lines and add this at the bottom of `script.js`:

```js
// When the button is clicked, switch between light mode and dark mode
toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});
```

| Part | Meaning |
|---|---|
| `toggleButton` | The button found in Step 3 |
| `.addEventListener(` | Start listening for an event |
| `'click'` | The event to listen for |
| `function () { ... }` | The code to run when the click happens |

The code inside `function () { ... }` is a **function**: a group of code that runs when it is called. It doesn't run when the page loads. It waits, and it runs every time the button is clicked.

This function has no name. It is written right inside `addEventListener` because it is only used in this one place.

Save, refresh, and click the button. The page should fade between light and dark every time. The button's text doesn't change yet. That's next.

---

## 9. Step 6: Changing the Button's Text with if and else

When the page is dark, a button that says "Switch to Dark Mode" doesn't make sense. The button should say what it will do next.

An **if / else** statement checks something, then runs one block of code if it's true and a different block if it's false.

Add the if / else **inside** the function, below the two toggle lines:

```js
// When the button is clicked, switch between light mode and dark mode
toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Change the button's text to match the new mode
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});
```

Reading it in plain English:

- **If** the body now has the `dark-mode` class, the button should offer to go back: "Switch to Light Mode."
- **Otherwise** (`else`), the page is in light mode, so the button should say "Switch to Dark Mode."

| Code | Meaning |
|---|---|
| `if ( ... )` | Check whether something is true |
| `body.classList.contains('dark-mode')` | `true` if the body has the dark-mode class, `false` if not |
| `toggleButton.textContent = '...'` | Change the text inside the button |
| `else` | Run this instead when the check is false |

**Where it goes matters.** The if / else must be inside the function's curly braces, so it runs on every click. If it's outside the function, it only runs once when the page loads. The video makes this mistake too, then moves the code inside the event listener.

Save, refresh, and click. The page and the button's text should both switch every time.

---

## 10. The Finished Practice Code

Your finished `script.js`:

```js
/*
  script.js
  JavaScript for the light and dark mode practice page.
*/

// Find the button by its id and store it in a variable
const toggleButton = document.getElementById('toggleButton');

// Store the body of the page in a variable
const body = document.body;

// When the button is clicked, switch between light mode and dark mode
toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Change the button's text to match the new mode
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});
```

The whole thing comes down to three steps:

1. **Find** the button and the body.
2. **Listen** for a click on the button.
3. **Change** the body's class and the button's text when the click happens.

Commit and push your `darkModePractice` folder with GitHub Desktop.

---

## 11. How This Compares to the Video

Our code does the same thing as the video. A few small differences:

| Video | This walkthrough | Why |
|---|---|---|
| JavaScript inside a `<script>` tag in the HTML file | JavaScript in its own `script.js` file | One `script.js` can be linked on every page of your website. Fix it once and every page gets the fix. |
| Writes `document.body()` with parentheses at first, then fixes it | `document.body` with no parentheses from the start | `body` is a property, not a method |
| Puts the if / else outside the event listener at first, then moves it | if / else inside the function from the start | Code outside the function only runs once, when the page loads |

---

## 12. Vocabulary

| Word | Meaning |
|---|---|
| **document** | The JavaScript object that stands for the whole web page |
| **element** | One piece of the page, like a button, a heading, or the body |
| **id** | A unique name for one element on a page, used so JavaScript can find it |
| **method** | An action that belongs to an object. It has parentheses: `getElementById()` |
| **property** | A value that belongs to an object. No parentheses: `document.body` |
| **getElementById** | Finds the one element with a certain id |
| **classList** | The list of classes on an element, with tools to add, remove, toggle, and check them |
| **toggle** | Switch back and forth: add something if it's missing, remove it if it's there |
| **contains** | Checks whether an element has a class. Gives `true` or `false`. |
| **textContent** | The text inside an element. Setting it changes the text on the page. |
| **function** | A group of code that runs when it is called |
| **event** | Something that happens on the page, like a click |
| **addEventListener** | Tells an element to run code when an event happens |
| **if / else** | Runs one block of code if a check is true and a different block if it's false |
| **transition** | A CSS property that makes a change happen smoothly over time |
| **null** | JavaScript's way of saying "nothing was found" |

---

## 13. If Something Goes Wrong

- **Nothing happens when you click, and the Console is empty:** the script isn't linked. Check that `src="script.js"` is spelled right and that `script.js` is in the same folder as the HTML page.
- **Red error: "Cannot read properties of null":** JavaScript couldn't find the button. Check that the `id` in the HTML matches the id in `getElementById` exactly, including capital letters. Also check that the `<script>` tag is at the end of the body, below the button.
- **Red error: "document.body is not a function":** you wrote `document.body()` with parentheses. Take them out.
- **The page switches but the button's text never changes:** the if / else is outside the function. Move it inside the curly braces of `function () { ... }`.
- **The page turns dark but won't come back to light:** check that you toggle **both** classes, `dark-mode` and `light-mode`, and that the body starts with `class="light-mode"`.
- **The button works but the page doesn't change color:** check the class names. CSS uses `.dark-mode` with a dot. JavaScript uses `'dark-mode'` without a dot. The spelling must match.
- **The colors switch instantly instead of fading:** check the `transition` line in the `body` rule.
- **Some parts of the page stay light:** those parts have their own colors in CSS. Add a `.dark-mode` rule for them, like `.dark-mode header`.
- **Red error about a missing `)` or `}`:** every `(` and `{` needs a matching `)` and `}`. The event listener ends with `});`.
- **Old results still show after you change the code:** save every file and refresh the preview.
