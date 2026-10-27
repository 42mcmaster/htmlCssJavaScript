# Lesson 09 Walkthrough: JavaScript

In this walkthrough you build one small page, step by step. It starts with messages printed in the Console. By the end, the page has buttons that change it, a dark mode button, and a form that checks itself before it sends.

Everything here is practiced in `html09_Task.html` and used in the DIY task, where you add JavaScript to your own website.

## Table of Contents

1. [Before You Start](#1-before-you-start)
2. [What JavaScript Does](#2-what-javascript-does)
3. [The script Tag](#3-the-script-tag)
4. [Showing Output in the Console](#4-showing-output-in-the-console)
5. [Comments](#5-comments)
6. [Variables: let and const](#6-variables-let-and-const)
7. [Data Types: String, Number, Boolean](#7-data-types-string-number-boolean)
8. [Joining Strings](#8-joining-strings)
9. [Functions and Parameters](#9-functions-and-parameters)
10. [Making a Choice with if and else](#10-making-a-choice-with-if-and-else)
11. [The DOM: Finding an Element](#11-the-dom-finding-an-element)
12. [Changing Text with textContent](#12-changing-text-with-textcontent)
13. [Responding to a Click](#13-responding-to-a-click)
14. [Turning a Class On and Off](#14-turning-a-class-on-and-off)
15. [Dark Mode](#15-dark-mode)
16. [Checking a Form Before It Sends](#16-checking-a-form-before-it-sends)
17. [What Happens After a Form Is Sent](#17-what-happens-after-a-form-is-sent)
18. [Moving the Script to Its Own File](#18-moving-the-script-to-its-own-file)
19. [Try This Answers](#19-try-this-answers)

---

## 1. Before You Start

1. In your `htmlCssJavaScript` repo, open the `html09_javascript` folder.
2. Make a new file named `html09_Walkthrough_lastname.html` (use your real last name).
3. Paste in this starter. You will add JavaScript inside the `<script>` block at the bottom as you go.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>html09 Walkthrough</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 1rem;
      margin: 0;
      padding: 1rem;
    }

    /* Your walkthrough CSS goes below this line */

  </style>
</head>
<body>
  <h1 id="page-title">html09 Walkthrough</h1>

  <!-- Your walkthrough HTML goes below this line -->


  <!-- Scripts go at the end of the body -->
  <script>
    // Your walkthrough JavaScript goes below this line

  </script>
</body>
</html>
```

---

## 2. What JavaScript Does

A web page is built from three languages:

| Language | Job | Example |
|---|---|---|
| HTML | What is on the page | a heading, a form, a button |
| CSS | How it looks | colors, fonts, layout |
| JavaScript | What it does | a button that switches to dark mode, a form that checks your email |

JavaScript is a **scripting language**. It runs **in the browser**, on the visitor's computer. That is called **client-side**. The web server sends the file, and the browser runs it.

JavaScript can:

- Change text and styles on the page after it loads
- Respond when someone clicks, types, or sends a form
- Check what a user typed before the form is sent

Things CSS can already do stay in CSS. A hover effect, for example, is `a:hover` in your stylesheet. You don't need JavaScript for it.

---

## 3. The script Tag

JavaScript goes on a page with the `<script>` tag. There are two ways to do it.

**Internal script:** the code goes between the tags, in the HTML file.

```html
<script>
  // JavaScript code goes here
</script>
```

**External script:** the code goes in its own `.js` file. The tag points to it with `src`, and the tags are empty.

```html
<script src="script.js"></script>
```

External is better for a real site. One `script.js` file can be linked on every page, the same way one `styles.css` file styles every page. Your DIY task uses an external file. This walkthrough uses an internal script so everything stays in one file while you learn.

**Where the tag goes:** put it at the **end of the body**, right before `</body>`. The browser reads the page from top to bottom. If the script runs before your button exists, it can't find the button.

You may also see it in the `<head>` with `defer`. `defer` tells the browser to wait until the page is loaded before running the script. Both ways work.

```html
<head>
  <script src="script.js" defer></script>
</head>
```

---

## 4. Showing Output in the Console

When you write code, you need to see what it is doing. Programmers use `console.log()`. It prints a message to the **Console**, a panel in the Developer Tools. Visitors to your page never see the Console. It is a tool for you.

Add this to your `<script>` block:

```js
// console.log() prints a message to the Console
console.log('Hello, world!');
console.log('JavaScript is running.');
```

### Open the Console

The Console is part of the Developer Tools in VS Code's Live Preview. (Developer Tools in Chrome are turned off on school computers, but the ones in Live Preview work.)

1. Open your page with **Live Preview** in VS Code.
2. In the preview's toolbar, click the **Developer Tools** button. A panel opens next to the page.
3. Click the **Console** tab.

Both lines should show up in the Console. Keep the Console open for the whole walkthrough.

**The Console also shows errors.** If your code has a mistake, the Console shows a red error message with the line number where it happened. One mistake stops the whole script, so if a message you expect is missing, look for red. Then check the spelling, the quotes, and that every `(` and `{` has a matching `)` and `}`.

If you change your code and the Console doesn't show the new messages, save the file and refresh the preview.

> **Try This 4:** Use `console.log()` to print your name, then your favorite food.

---

## 5. Comments

A **comment** is a note in your code. The browser skips it. Comments explain what the code does, for other people and for you next week.

```js
// A one-line comment starts with two slashes.

let score = 0;   // A comment can go at the end of a line too.

/*
  A multi-line comment starts with slash-star
  and ends with star-slash.
  Use it for longer notes.
*/
```

Good comments say **what** the code is for, not just repeat the code:

```js
// Bad: set x to 5
// Good: number of tries the user gets before the form locks
let triesLeft = 5;
```

From here on, put a comment above each new part you add. Your DIY task is graded on comments.

---

## 6. Variables: let and const

A **variable** is a named box that holds a value. You make one with `let` or `const`.

```js
// let: the value can change later
let score = 0;
score = 10;          // this works
console.log('Score: ' + score);

// const: the value is set once and never changes
const schoolName = 'Medina County Career Center';
console.log('School: ' + schoolName);
```

What happens if you try to change a `const`?

```js
// schoolName = 'Another School';   // ERROR: can't change a const
```

That line causes an error, and the error stops the script. Everything after it won't run. The Console shows the error in red.

**Which one should you use?** Use `const` when the value should never change. Use `let` when it will. You may see `var` in older code online. It is the old way. Use `let` and `const`.

**Naming:** use **camelCase**. Start lowercase, and start each new word with a capital: `firstName`, `favoriteColor`, `isStudent`. No spaces or dashes. Pick names that say what the box holds.

> **Try This 6:** Make a `let` variable called `favoriteColor` and a `const` called `birthYear`. Print both with `console.log()`.

---

## 7. Data Types: String, Number, Boolean

The kind of value a variable holds is its **data type**. You need these three:

```js
// String: text, always inside quotes
let firstName = 'Alex';

// Number: no quotes. Can be whole or decimal.
let age = 16;
let price = 3.75;

// Boolean: only true or false. No quotes.
let isStudent = true;

console.log(firstName);
console.log(age);
console.log(isStudent);
```

Quotes matter. `'16'` is a string. `16` is a number. Watch what `+` does with each:

```js
console.log(5 + 3);       // 8   (two numbers: adds them)
console.log('5' + '3');   // 53  (two strings: joins them)
```

You will also run into two more values:

- `undefined`: a variable that was made but never given a value (`let answer;`)
- `null`: "nothing here" on purpose. `getElementById` gives `null` when it can't find the id.

---

## 8. Joining Strings

Joining strings together is called **concatenation**. You do it with `+`.

```js
let firstName = 'Alex';
let age = 16;

// Join strings and variables with +
let sentence = 'My name is ' + firstName + ' and I am ' + age + ' years old.';
console.log(sentence);
```

Watch the spaces. `'My name is' + firstName` prints `My name isAlex`. The space has to be inside the quotes.

There is also a newer way called a **template literal**. It uses backticks (`` ` ``, the key left of 1) and `${ }` around each variable:

```js
let sentence2 = `My name is ${firstName} and I am ${age} years old.`;
console.log(sentence2);
```

Both lines print the same thing. You will see template literals in code online. In this class, `+` is the one you need to know.

> **Try This 8:** Make a variable `city`. Print `I live in ___.` using `+`.

---

## 9. Functions and Parameters

A **function** is a named set of steps you can run over and over. You **define** it once and **call** it as many times as you want.

```js
// Define: makes a greeting for any name
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Call: run it with different names
console.log(greet('Maya'));    // Hello, Maya!
console.log(greet('Marco'));   // Hello, Marco!
```

The parts:

| Part | What it means |
|---|---|
| `function greet` | Makes a function named `greet` |
| `(name)` | A **parameter**: a box that gets filled when the function is called |
| `'Maya'` | An **argument**: the actual value sent in when you call it |
| `return` | Sends a value back to wherever the function was called |

A function can have more than one parameter. Separate them with commas:

```js
// Adds two numbers and sends back the total
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(5, 3));      // 8
console.log(addNumbers(10, 20));    // 30
```

You have already been calling a function: `console.log()`. You send it a value, and it prints it. It doesn't `return` anything. It just does a job.

> **Try This 9:** Write `calculateArea(width, height)` that returns `width * height`. Print the area of a 4 by 6 rectangle.

---

## 10. Making a Choice with if and else

`if` runs code only when something is true. `else` runs when it is not.

```js
// Returns Pass or Try again based on the score
function checkScore(score) {
  if (score >= 70) {
    return 'Pass';
  } else {
    return 'Try again';
  }
}

console.log(checkScore(85));   // Pass
console.log(checkScore(50));   // Try again
```

Ways to compare two values:

| Code | Means |
|---|---|
| `a === b` | a is equal to b |
| `a !== b` | a is not equal to b |
| `a > b` / `a < b` | greater than / less than |
| `a >= b` / `a <= b` | greater than or equal / less than or equal |

Use `===` (three equals) to compare. One `=` puts a value in a variable. It does not compare.

You can check two things at once:

- `&&` means **and**: both must be true
- `||` means **or**: at least one must be true
- `!` means **not**: flips true to false

```js
let name = '';
if (name === '' || name === 'none') {
  console.log('Please enter a name.');
}
```

---

## 11. The DOM: Finding an Element

When the browser loads your HTML, it builds a model of the page called the **DOM** (Document Object Model). Every tag on the page is an object in the DOM. JavaScript can find those objects and change them.

Everything in the DOM starts at `document`, which means "this page."

The most common way to find one element is by its `id`:

```js
// Find the element with id="page-title"
const title = document.getElementById('page-title');
```

There is also `querySelector`, which takes any CSS selector and gives back the **first** match:

```js
const firstParagraph = document.querySelector('p');        // first <p>
const header = document.querySelector('header');           // first <header>
const note = document.querySelector('.note');              // first class="note"
```

In this class, use `getElementById` for most things. Use `querySelector` when the element doesn't have an id.

If the id is spelled wrong, you get `null` (nothing found), and the next line that uses it causes an error.

---

## 12. Changing Text with textContent

Once you have an element, `.textContent` reads or changes the text inside it.

```js
// Change the heading text
const title = document.getElementById('page-title');
title.textContent = 'JavaScript changed this heading!';
```

Save and refresh. The heading on the page is different, but your HTML file didn't change. JavaScript changed the page after it loaded.

**See it in the Developer Tools:** click the **Elements** tab. The `<h1>` there shows the new text. The Elements tab shows the page as it is right now, after JavaScript changed it. Your HTML file still has the old text.

**textContent vs innerHTML:** `textContent` puts in plain text. If you give it `<strong>hi</strong>`, the tags show up as text. `innerHTML` turns tags into real HTML:

```js
// innerHTML: the <em> tags become real italics
title.innerHTML = 'JavaScript <em>changed</em> this heading!';
```

Use `textContent` unless you need tags. It is safer, because text a user typed can't turn into HTML.

---

## 13. Responding to a Click

An **event** is something that happens on the page: a click, a key press, a form being sent. An **event listener** waits for an event and runs a function when it happens.

Add a button to your HTML (below the "Your walkthrough HTML" comment):

```html
<p id="message">Nothing has happened yet.</p>
<button id="click-btn" type="button">Click me</button>
```

Add this to your script:

```js
// ----- Click button -----
const clickBtn = document.getElementById('click-btn');
const message = document.getElementById('message');

// When the button is clicked, run this function
clickBtn.addEventListener('click', function () {
  message.textContent = 'You clicked the button!';
});
```

`addEventListener` takes two things:

1. The event name in quotes: `'click'`
2. A function to run when it happens

Every interactive feature in this lesson uses the same pattern:

1. **Find** the element (`getElementById`)
2. **Listen** for an event (`addEventListener`)
3. **Change** something (`textContent`, a class, a style)

You can also change a style directly with `.style`. CSS names with dashes become camelCase: `background-color` becomes `backgroundColor`.

```js
message.style.backgroundColor = 'yellow';
message.style.fontSize = '1.5rem';
```

> **Try This 13:** Add a counter. Make `let clicks = 0;` above the listener. Inside it, add 1 to `clicks` and show `'Clicks: ' + clicks` in `#message`.

---

## 14. Turning a Class On and Off

Changing styles one at a time with `.style` gets messy. A cleaner way: write the look in CSS as a class, and have JavaScript add or remove the class.

`classList` has three tools:

```js
element.classList.add('highlight');      // turns the class on
element.classList.remove('highlight');   // turns the class off
element.classList.toggle('highlight');   // on if it's off, off if it's on
```

Try it. Add this CSS (below the "Your walkthrough CSS" comment):

```css
.hidden {
  display: none;
}
```

Add this HTML:

```html
<p id="secret">This is a secret message.</p>
<button id="hide-btn" type="button">Hide / Show</button>
```

Add this JavaScript:

```js
// ----- Hide / show button -----
const hideBtn = document.getElementById('hide-btn');
const secret = document.getElementById('secret');

// Each click turns the hidden class on or off
hideBtn.addEventListener('click', function () {
  secret.classList.toggle('hidden');
});
```

Click it a few times. Hide, show, hide.

To check whether a class is on right now, use `classList.contains`. It gives back `true` or `false`, so it works in an `if`:

```js
if (secret.classList.contains('hidden')) {
  console.log('The secret is hidden.');
}
```

---

## 15. Dark Mode

Dark mode is `classList.toggle` on the `<body>`, plus a CSS trick called **custom properties**.

### Step 1: Put the colors in variables (CSS)

A **custom property** is a CSS variable. Its name starts with two dashes. You make them on `:root` (the whole page) and use them with `var()`.

Add this to your CSS:

```css
/* Light colors (the default) */
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #0055aa;
}

/* Dark colors: same names, new values */
body.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #eeeeee;
  --accent-color: #66aaff;
}

/* Rules use the variables, not real colors */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;   /* fade instead of snap */
}

h1 {
  color: var(--accent-color);
}
```

When `<body>` has the class `dark-mode`, the variables get the dark values. Every rule that uses them changes at once.

### Step 2: Add the button (HTML)

Put this under your `<h1>`:

```html
<button id="theme-toggle" type="button">Dark mode</button>
```

It is a `<button>`, not a link. It does something on this page. It doesn't go anywhere.

### Step 3: The JavaScript

```js
// ----- Dark mode button -----
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', function () {
  // Turn dark mode on or off
  document.body.classList.toggle('dark-mode');

  // Change the button words to match
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Light mode';
  } else {
    themeBtn.textContent = 'Dark mode';
  }
});
```

`document.body` is a shortcut for the `<body>` element. You don't need `getElementById` for it.

Find, listen, toggle. That's the whole feature.

---

## 16. Checking a Form Before It Sends

When someone fills out a form, JavaScript can check it before it is sent. This is called **client-side form validation**. It catches mistakes right away and tells the user what to fix.

### Step 1: The form (HTML)

Add this form to your page:

```html
<h2>Contact</h2>
<!-- novalidate: turn off the browser's pop-up bubbles so our messages show -->
<form id="contact-form" novalidate>
  <label for="name">Name</label>
  <input type="text" id="name" name="name">
  <span class="error" id="name-error"></span>

  <label for="email">Email</label>
  <input type="email" id="email" name="email">
  <span class="error" id="email-error"></span>

  <label for="message-box">Message (at least 10 characters)</label>
  <textarea id="message-box" name="message" rows="4"></textarea>
  <span class="error" id="message-error"></span>

  <button type="submit">Send</button>
</form>
<p class="success" id="form-success" hidden>Thanks! Your message passed every check.</p>
```

And this CSS:

```css
label { display: block; margin-top: 0.75rem; font-weight: bold; }
.error { display: block; color: #b3261e; }
.success { color: #1b7f3a; font-weight: bold; }
```

Notice the empty `<span class="error">` under each field. That is where your error messages will go. The `hidden` attribute hides the success line until you turn it off.

### Step 2: Stop the form from sending

A form normally sends as soon as you click Submit, and the page reloads. We need to stop that so we can check first. The event is `'submit'`, and it goes on the **form**, not the button.

```js
// ----- Contact form checks -----
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  // Stop the form from sending so we can check it first
  event.preventDefault();

  console.log('The form tried to send.');
});
```

`event` is information about what just happened. `event.preventDefault()` means "don't do the normal thing" (for a form, the normal thing is sending and reloading).

### Step 3: Read what the user typed

For inputs and textareas, `.value` is what the user typed. It is always a string.

```js
const nameValue = document.getElementById('name').value.trim();
```

`.trim()` cuts off extra spaces at the start and end, so a name of only spaces counts as empty.

### Step 4: Check each field

Replace the `console.log('The form tried to send.');` line with the checks:

```js
form.addEventListener('submit', function (event) {
  // Stop the form from sending so we can check it first
  event.preventDefault();

  // Start by assuming everything is fine
  let allGood = true;

  // Check 1: the name can't be empty
  const nameValue = document.getElementById('name').value.trim();
  const nameError = document.getElementById('name-error');
  if (nameValue === '') {
    nameError.textContent = 'Please enter your name.';
    allGood = false;
  } else {
    nameError.textContent = '';
  }

  // Check 2: the email needs an @
  const emailValue = document.getElementById('email').value.trim();
  const emailError = document.getElementById('email-error');
  if (!emailValue.includes('@')) {
    emailError.textContent = 'Please enter an email address with an @.';
    allGood = false;
  } else {
    emailError.textContent = '';
  }

  // Check 3: the message needs at least 10 characters
  const messageValue = document.getElementById('message-box').value.trim();
  const messageError = document.getElementById('message-error');
  if (messageValue.length < 10) {
    messageError.textContent = 'Your message must be at least 10 characters.';
    allGood = false;
  } else {
    messageError.textContent = '';
  }

  // Show the thank-you line only when every check passed
  document.getElementById('form-success').hidden = !allGood;
});
```

New pieces:

| Code | What it does |
|---|---|
| `.includes('@')` | `true` if the string has an `@` in it |
| `!` | flips it: `!emailValue.includes('@')` means "does NOT have an @" |
| `.length` | how many characters are in the string |
| `.hidden = !allGood` | hides the success line if anything failed, shows it if everything passed |

Each check has an `else` that clears the message. That way, when the user fixes a field, its error goes away.

### Step 5: Test it

1. Click Send with everything empty. Three messages show.
2. Type a name. Click Send. The name message goes away.
3. Type `hello` as the email. The email message stays.
4. Fill everything in correctly. The errors clear and the thank-you line shows.

The messages are written on the page, next to the field. Don't use `alert()` pop-ups. They block the page and don't say where the problem is.

---

## 17. What Happens After a Form Is Sent

Your checks run in the browser. On a real website, when the form passes, the browser sends the data to a **web server**. Here is what happens next:

1. **The server checks it again.** A user can turn off JavaScript or get around it. So the server never trusts the data just because the browser checked it. Browser checks are for quick, friendly feedback. Server checks are for safety.
2. **The server stores it.** It usually saves the data in a **database**, which is an organized place to keep records, like a table of every message that was sent.
3. **The server may pass it on.** It might send the data to a **web service**, another program that does one job, like sending an email to the site owner or adding the person to a mailing list.
4. **The server answers.** It sends back a page or message like "Thanks, we got your message."

In this class, our forms stop after the browser checks. Nothing is actually sent. The server side comes in later courses.

---

## 18. Moving the Script to Its Own File

On a real site, the JavaScript goes in its own file, like your CSS does.

1. Make a new file next to your HTML named `html09_Walkthrough_lastname.js`.
2. Cut everything **between** `<script>` and `</script>` and paste it into the new file. Don't bring the `<script>` tags. A `.js` file has only JavaScript.
3. Change the script tag at the end of the body to:

```html
<script src="html09_Walkthrough_lastname.js"></script>
```

4. Save both files and refresh. Everything should work the same.

If it stopped working, check that the file name in `src` matches exactly, including capital letters.

Commit and push with GitHub Desktop.

---

## 19. Try This Answers

**Try This 4**

```js
console.log('Alex');
console.log('Pizza');
```

**Try This 6**

```js
let favoriteColor = 'green';
const birthYear = 2010;
console.log(favoriteColor);
console.log(birthYear);
```

**Try This 8**

```js
let city = 'Medina';
console.log('I live in ' + city + '.');
```

**Try This 9**

```js
// Returns the area of a rectangle
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(4, 6));   // 24
```

**Try This 13**

```js
// ----- Click counter -----
let clicks = 0;

clickBtn.addEventListener('click', function () {
  clicks = clicks + 1;
  message.textContent = 'Clicks: ' + clicks;
});
```

(Put this in place of the Step 13 listener, or both will run on each click.)
