# Lesson 09a Walkthrough: Using JavaScript to Change a Page

In this walkthrough you will build a small practice page with a button that switches it between light mode and dark mode. Along the way you will learn the pieces of JavaScript that make it work. After this, you will try the W3Schools example, and then add dark mode to your own website in the DIY task.

## Table of Contents

1. [What We Are Building](#1-what-we-are-building)
2. [Set Up the Practice Folder](#2-set-up-the-practice-folder)
3. [The Plan: CSS Does the Look, JavaScript Flips the Switch](#3-the-plan-css-does-the-look-javascript-flips-the-switch)
4. [Step 1: The HTML Page and Button](#4-step-1-the-html-page-and-button)
5. [Step 2: The Dark Mode Class in CSS](#5-step-2-the-dark-mode-class-in-css)
6. [Step 3: Finding Elements with JavaScript](#6-step-3-finding-elements-with-javascript)
7. [Step 4: Adding and Removing a Class with classList](#7-step-4-adding-and-removing-a-class-with-classlist)
8. [Step 5: Putting Code in a Function](#8-step-5-putting-code-in-a-function)
9. [Step 6: Running the Function When the Button Is Clicked](#9-step-6-running-the-function-when-the-button-is-clicked)
10. [The Finished Practice Code](#10-the-finished-practice-code)
11. [Try the W3Schools Example](#11-try-the-w3schools-example)
12. [Vocabulary](#12-vocabulary)
13. [If Something Goes Wrong](#13-if-something-goes-wrong)

---

## 1. What We Are Building

A page with a heading, a paragraph, and a button. Clicking the button turns the page dark. Clicking it again turns it back to light.

This is the same idea used by many real websites and apps that have a dark mode setting.

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
| `script.js` | Turns dark mode on or off when the button is clicked |

The key idea: **JavaScript does not pick the colors.** CSS already has a class called `.dark-mode` with the dark colors in it. JavaScript only adds that class to the page, or takes it away. That keeps the design in the CSS file where it belongs.

---

## 4. Step 1: The HTML Page and Button

Put this in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Practice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Dark Mode Practice</h1>
  <p>Click the button to switch between light mode and dark mode.</p>

  <!-- The button that switches dark mode on and off -->
  <!-- The id lets JavaScript find this exact button -->
  <button type="button" id="themeButton">Dark Mode</button>

  <!-- Link the external JavaScript file. It goes last, right before </body> -->
  <script src="script.js"></script>
</body>
</html>
```

Two things to notice:

- **`id="themeButton"`** gives the button a unique name. An `id` can only be used once on a page. JavaScript will use this name to find the button.
- **The `<script>` tag is at the very end of the body.** The browser reads the page from top to bottom. By putting the script last, the button already exists by the time the JavaScript runs. If the script came first, it would look for a button that hasn't been built yet.

---

## 5. Step 2: The Dark Mode Class in CSS

Put this in `styles.css`:

```css
/* Light mode: the normal look of the page */
body {
  background-color: white;
  color: black;
  font-family: Arial, sans-serif;
  padding: 25px;
}

/* Dark mode: only used when the body has the dark-mode class */
.dark-mode {
  background-color: #222222;
  color: #eeeeee;
}
```

Test it before writing any JavaScript. In `index.html`, change `<body>` to `<body class="dark-mode">` and look at Live Preview. The page should be dark. Then change it back to `<body>`.

That is exactly what the JavaScript is going to do: add `class="dark-mode"` to the body and take it away again. The only difference is that JavaScript does it while the page is open, when the button is clicked.

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

## 6. Step 3: Finding Elements with JavaScript

Before JavaScript can change something on the page, it has to find it. The browser gives JavaScript an object called **`document`** that stands for the whole web page.

Put this in `script.js`:

```js
/*
  script.js
  JavaScript for the dark mode practice page.
*/

// Find the button by its id and store it in a variable
const themeButton = document.getElementById('themeButton');

// Print it to the Console to check that it was found
console.log(themeButton);
```

What each part means:

| Code | Meaning |
|---|---|
| `document` | The whole web page |
| `.getElementById('themeButton')` | Find the one element whose `id` is `themeButton` |
| `const themeButton =` | Store what was found in a variable so it can be used later |

Open the page in Live Preview, open Developer Tools, and check the Console. You should see the button printed there.

If the Console shows **`null`**, JavaScript could not find the button. The id in the HTML and the id in the JavaScript don't match. They must be spelled exactly the same, including capital letters.

---

## 7. Step 4: Adding and Removing a Class with classList

Every element has a **`classList`**. It is the list of classes on that element, and it has tools for changing that list.

| Code | What it does |
|---|---|
| `document.body.classList.add('dark-mode')` | Adds the class |
| `document.body.classList.remove('dark-mode')` | Removes the class |
| `document.body.classList.toggle('dark-mode')` | Adds it if it's missing, removes it if it's there |

**Toggle** means switch back and forth, like a light switch. That's exactly what a dark mode button needs.

Try it in the Console. Click in the Console, type this line, and press Enter:

```js
document.body.classList.toggle('dark-mode')
```

The page turns dark. Press the up arrow and Enter to run it again. The page turns light. You are running JavaScript by hand. Next you will make the button do it.

Notice the class name is written **without a dot**: `'dark-mode'`, not `'.dark-mode'`. The dot is only used in CSS to mean "this is a class." In `classList`, you just give the name.

---

## 8. Step 5: Putting Code in a Function

A **function** is a named group of code that runs when you tell it to. Writing code inside a function doesn't run it. It saves it so it can run later, as many times as needed.

Add this to `script.js`:

```js
// Switch dark mode on or off by toggling the dark-mode class on the body
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
```

The parts of a function:

| Part | Meaning |
|---|---|
| `function` | Starts a function |
| `toggleDarkMode` | The function's name, in camelCase, saying what it does |
| `()` | Parentheses that come after every function name |
| `{ }` | Curly braces that hold the code that runs |

If you save and refresh now, nothing happens. That's correct. The function exists, but nothing has told it to run yet.

---

## 9. Step 6: Running the Function When the Button Is Clicked

Something that happens on a page, like a click, is called an **event**. To make code run when an event happens, use **`addEventListener`**. It tells an element: "listen for this event, and when it happens, run this function."

Add this at the bottom of `script.js`:

```js
// When the button is clicked, run toggleDarkMode
themeButton.addEventListener('click', toggleDarkMode);
```

| Part | Meaning |
|---|---|
| `themeButton` | The button found in Step 3 |
| `.addEventListener(` | Start listening for an event |
| `'click'` | The event to listen for |
| `toggleDarkMode` | The function to run when it happens |

Notice that `toggleDarkMode` has **no parentheses** here. With parentheses, `toggleDarkMode()` means "run it right now." Without them, it means "here is the function, run it later when the click happens."

Save, refresh, and click the button. The page should switch between light and dark every time.

---

## 10. The Finished Practice Code

Your finished `script.js`:

```js
/*
  script.js
  JavaScript for the dark mode practice page.
*/

// Find the button by its id and store it in a variable
const themeButton = document.getElementById('themeButton');

// Switch dark mode on or off by toggling the dark-mode class on the body
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// When the button is clicked, run toggleDarkMode
themeButton.addEventListener('click', toggleDarkMode);
```

The whole thing is three steps: **find** the button, **write** what should happen, **connect** the two with an event.

Commit and push your `darkModePractice` folder with GitHub Desktop.

---

## 11. Try the W3Schools Example

Open the W3Schools page **How TO - Toggle Dark Mode**:

https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

Read through it, then click **Try it Yourself** and click the button in their example. Try changing the colors in their `.dark-mode` class and click **Run** to see the change.

Their example does the same thing you just built, written a little differently. Compare them:

| W3Schools | This walkthrough | Why we do it our way |
|---|---|---|
| `onclick="myFunction()"` inside the HTML button | `addEventListener` in `script.js` | Keeps all JavaScript in the `.js` file, the same way all CSS stays in the `.css` file |
| `var element = document.body;` | `document.body` used directly, and `const` for variables | `var` is an older way to make variables. Use `const` or `let`. |
| `myFunction` | `toggleDarkMode` | A function name should say what the function does |

Both versions work. In this class, use the walkthrough version.

---

## 12. Vocabulary

| Word | Meaning |
|---|---|
| **document** | The JavaScript object that stands for the whole web page |
| **element** | One piece of the page, like a button, a heading, or the body |
| **id** | A unique name for one element on a page, used so JavaScript can find it |
| **getElementById** | Finds the one element with a certain id |
| **classList** | The list of classes on an element, with tools to add, remove, and toggle them |
| **toggle** | Switch back and forth: add something if it's missing, remove it if it's there |
| **function** | A named group of code that runs when it is called |
| **event** | Something that happens on the page, like a click |
| **addEventListener** | Tells an element to run a function when an event happens |
| **null** | JavaScript's way of saying "nothing was found" |

---

## 13. If Something Goes Wrong

- **Nothing happens when you click, and the Console is empty:** the script isn't linked. Check that `src="script.js"` is spelled right and that `script.js` is in the same folder as the HTML page.
- **Red error: "Cannot read properties of null":** JavaScript couldn't find the button. Check that the `id` in the HTML matches the id in `getElementById` exactly, including capital letters. Also check that the `<script>` tag is at the end of the body, below the button.
- **Red error: "toggleDarkMode is not defined":** the function name is spelled differently in two places. Names must match exactly.
- **The page turns dark as soon as it loads, and the button does nothing:** you wrote `toggleDarkMode()` with parentheses inside `addEventListener`. Take the parentheses out.
- **The button works but the page doesn't change color:** check the class name. CSS uses `.dark-mode` with a dot. JavaScript uses `'dark-mode'` without a dot. The spelling must match.
- **Some parts of the page stay light:** those parts have their own colors in CSS. Add a `.dark-mode` rule for them, like `.dark-mode header`.
- **Old results still show after you change the code:** save every file and refresh the preview.
