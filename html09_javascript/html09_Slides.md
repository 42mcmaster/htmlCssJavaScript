---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 09: JavaScript

## Web Development
### Medina County Career Center

---

# What We Are Doing

- **JavaScript basics:** variables, data types, functions, if / else, comments
- **The DOM:** find an element, change it, respond to a click
- **Two real features:** a dark mode button and a form that checks itself

**This lesson:** walkthrough, one practice task, then add JavaScript to **your** website.

---

# What Does JavaScript Do?

| Language | Job |
|---|---|
| HTML | What is on the page |
| CSS | How it looks |
| **JavaScript** | **What it does** |

- A **scripting language** that runs **in the browser** (client-side)
- Changes the page after it loads, responds to clicks, checks forms
- Hover effects are still CSS (`a:hover`). Use JavaScript for what CSS can't do.

---

# The script Tag

```html
<!-- Internal: code in the HTML file -->
<script>
  // JavaScript here
</script>

<!-- External: code in its own file (use this for your site) -->
<script src="script.js"></script>
```

- Put it **right before `</body>`** so the HTML exists before the script runs
- Or in the `<head>` with `defer`: `<script src="script.js" defer></script>`
- One `script.js` linked on every page, just like one `styles.css`

---

# Seeing Your Output

Programmers use `console.log('Hello');` but **the console is off on our computers.**

We print to a box on the page instead:

```html
<div id="output"></div>
<script>
  // say() adds a message to the #output box
  function say(msg) {
    document.getElementById('output').textContent += msg + '\n';
  }
  say('Hello, world!');
</script>
```

Nothing shows up? There is a typo. One mistake stops the whole script.

---

# Comments

```js
// One-line comment

let tries = 3;   // comment at the end of a line

/*
  Multi-line comment
  for longer notes
*/
```

- The browser skips comments
- Say **what the code is for**, not just what it says
- Your DIY is graded on comments

---

# Variables: let and const

```js
let score = 0;        // let: can change
score = 10;           // OK

const school = 'MCCC';  // const: set once
school = 'Other';       // ERROR, and the script stops
```

- Use `const` when it never changes, `let` when it will
- `var` is the old way. Don't use it.
- Names use **camelCase**: `firstName`, `isStudent`

---

# Data Types

```js
let firstName = 'Alex';   // string: text in quotes
let age = 16;             // number: no quotes
let isStudent = true;     // boolean: true or false
```

Quotes change everything:

```js
say(5 + 3);       // 8
say('5' + '3');   // 53
```

Also: `undefined` (no value yet) and `null` (nothing on purpose)

---

# Joining Strings

```js
let name = 'Alex';
let age = 16;

// + joins strings (this is the one to know)
say('My name is ' + name + ' and I am ' + age + '.');

// Template literal: backticks and ${ } (you'll see it online)
say(`My name is ${name} and I am ${age}.`);
```

Spaces go **inside** the quotes: `'My name is ' + name`

---

# Functions

```js
// Define it once
function greet(name) {            // name is a parameter
  return 'Hello, ' + name + '!';  // return sends a value back
}

// Call it as many times as you want
say(greet('Maya'));               // 'Maya' is an argument
say(greet('Marco'));
```

More than one parameter: `function addNumbers(num1, num2) { return num1 + num2; }`

---

# if and else

```js
function checkScore(score) {
  if (score >= 70) {
    return 'Pass';
  } else {
    return 'Try again';
  }
}
```

| `===` equal | `!==` not equal | `>` `<` `>=` `<=` |
|---|---|---|
| `&&` and | `\|\|` or | `!` not |

One `=` stores a value. Three `===` compare.

---

# The DOM

The browser turns your HTML into the **DOM** (Document Object Model). JavaScript can find any element and change it.

```js
// Find one element by id (use this most)
const title = document.getElementById('page-title');

// Find the first match for any CSS selector
const firstP = document.querySelector('p');

// Change its text
title.textContent = 'New heading!';
```

`innerHTML` turns tags into real HTML. `textContent` keeps them as plain text.

---

# Responding to a Click

```js
const btn = document.getElementById('click-btn');
const msg = document.getElementById('message');

btn.addEventListener('click', function () {
  msg.textContent = 'You clicked!';
});
```

**The pattern for every feature:**
1. **Find** the element
2. **Listen** for an event
3. **Change** something

---

# Turning a Class On and Off

```css
.hidden { display: none; }
```

```js
secret.classList.add('hidden');      // on
secret.classList.remove('hidden');   // off
secret.classList.toggle('hidden');   // flip it
secret.classList.contains('hidden'); // true or false
```

Put the look in CSS. JavaScript just switches the class.

(You can also set one style: `box.style.backgroundColor = 'red';`)

---

# Dark Mode: The CSS

```css
:root {                         /* light (default) */
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
}
body.dark-mode {                /* dark: same names */
  --bg-color: #1a1a1a;
  --text-color: #eeeeee;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

**Custom properties** (CSS variables): change them in one place and every rule updates.

---

# Dark Mode: The JavaScript

```js
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Light mode';
  } else {
    themeBtn.textContent = 'Dark mode';
  }
});
```

Find, listen, toggle. The button is a `<button>`, not a link.

---

# Checking a Form Before It Sends

```js
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();     // don't send yet

  const email = document.getElementById('email').value;
  const emailError = document.getElementById('email-error');

  if (!email.includes('@')) {
    emailError.textContent = 'Please enter an email with an @.';
  } else {
    emailError.textContent = '';
  }
});
```

- Listen on the **form** for `'submit'`, not on the button
- `.value` is what they typed. `.length` counts characters.
- Show the message **on the page**, never `alert()`
- `novalidate` on the form turns off the browser's pop-up bubbles

---

# After the Form Is Sent

1. The browser sends the data to a **web server**
2. The server **checks it again** (users can get around JavaScript)
3. The server saves it in a **database**
4. It may pass it to a **web service** (like an email service)

Browser checks = quick, friendly feedback.
Server checks = safety.

---

# Your DIY Task

In your `DiyWebsite_Lastname` folder:

1. New `script.js`, linked before `</body>` on every page
2. **Dark mode button** in the header on every page
3. **Contact form checks:** name, email with @, message of 10+ characters
4. **Comments** on every part, plus a comment on what the server does

Push with GitHub Desktop.
