# Lesson 09 Study Guide: JavaScript

## Table of Contents

1. [Vocabulary](#vocabulary)
2. [Adding JavaScript to a Page](#adding-javascript-to-a-page)
3. [Showing Output](#showing-output)
4. [Comments](#comments)
5. [Variables and Data Types](#variables-and-data-types)
6. [Joining Strings](#joining-strings)
7. [Functions](#functions)
8. [if and else](#if-and-else)
9. [DOM Cheat Sheet](#dom-cheat-sheet)
10. [Dark Mode Pattern](#dark-mode-pattern)
11. [Form Validation Pattern](#form-validation-pattern)
12. [What the Server Does with Form Data](#what-the-server-does-with-form-data)
13. [Common Mistakes](#common-mistakes)
14. [ODE Competencies](#ode-competencies)
15. [Practice Questions](#practice-questions)

---

## Vocabulary

**JavaScript basics**

1. **JavaScript**: A scripting language that runs in the web browser and makes pages interactive.
2. **Scripting language**: A language whose code is run by another program (here, the browser) instead of being built into an app first.
3. **Client-side**: Code that runs on the visitor's computer, in the browser. JavaScript in a web page is client-side.
4. **Server-side**: Code that runs on the web server, before or after the page is sent.
5. **`<script>` tag**: The HTML tag that adds JavaScript to a page.
6. **Internal script**: JavaScript written between `<script>` and `</script>` in the HTML file.
7. **External script**: JavaScript in its own `.js` file, linked with `<script src="script.js"></script>`.
8. **`src` attribute**: Points a `<script>` tag to an external `.js` file.
9. **`defer`**: A `<script>` attribute that waits until the page is loaded before running the script.
10. **`console.log()`**: Prints a message to the browser console. (The console is off on our school computers.)
11. **Comment**: A note in the code that the browser skips. `//` for one line, `/* */` for several.
12. **Variable**: A named box that holds a value.
13. **`let`**: Makes a variable whose value can change.
14. **`const`**: Makes a variable whose value can't change after it is set.
15. **`var`**: The old way to make a variable. Don't use it in new code.
16. **camelCase**: Naming style with no spaces, where each new word starts with a capital: `firstName`.
17. **Data type**: The kind of value: string, number, boolean, undefined, or null.
18. **String**: Text inside quotes: `'hello'`.
19. **Number**: A number with no quotes: `42` or `3.5`.
20. **Boolean**: `true` or `false`.
21. **undefined**: The value of a variable that was made but not given a value.
22. **null**: A value that means "nothing" on purpose. `getElementById` returns `null` when it finds nothing.
23. **Concatenation**: Joining strings with `+`.
24. **Template literal**: A string in backticks that can hold variables with `${ }`.
25. **Function**: A named set of steps you can run again and again.
26. **Parameter**: The name in the function's parentheses that holds the value sent in.
27. **Argument**: The actual value you send in when you call a function.
28. **`return`**: Sends a value back out of a function.
29. **Operator**: A symbol that does something with values: `+ - * / = === > <`.
30. **`if` / `else`**: Runs one block of code if something is true, and another if it is not.

**The DOM and events**

31. **DOM (Document Object Model)**: The browser's model of the page. Every tag is an object JavaScript can find and change.
32. **`document`**: The object that stands for the whole page.
33. **`getElementById()`**: Finds the one element with a given id.
34. **`querySelector()`**: Finds the first element that matches a CSS selector.
35. **`textContent`**: The plain text inside an element. You can read it or change it.
36. **`innerHTML`**: The HTML inside an element. Tags you put in become real HTML.
37. **`.style`**: Changes one CSS property on an element. Dashed names become camelCase: `backgroundColor`.
38. **Event**: Something that happens on the page: a click, a form being sent, a key press.
39. **Event listener**: Code that waits for an event and runs a function when it happens.
40. **`addEventListener()`**: Attaches an event listener to an element.
41. **`click` event**: Happens when an element is clicked.
42. **`submit` event**: Happens when a form is sent. It goes on the form.
43. **`event.preventDefault()`**: Stops the normal action of an event. For a form, it stops the send and page reload.
44. **`classList`**: The list of classes on an element, with `add`, `remove`, `toggle`, and `contains`.
45. **`classList.toggle()`**: Adds the class if it is missing, removes it if it is there.
46. **CSS custom property**: A CSS variable. Starts with `--`, set on `:root`, used with `var()`.
47. **`.value`**: What the user typed into an input or textarea. Always a string.
48. **Form validation**: Checking form input to make sure it is correct.
49. **Client-side validation**: Validation in the browser, for quick feedback. Users can get around it.
50. **Server-side validation**: Validation on the server. This is the check that keeps the data safe.
51. **Database**: An organized place to store records, like every message sent through a form.
52. **Web service**: A program on a server that does one job for other programs, like sending an email.

[Back to top](#table-of-contents)

---

## Adding JavaScript to a Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">

  <!-- Option B: in the head with defer (waits for the page to load) -->
  <!-- <script src="script.js" defer></script> -->
</head>
<body>
  <h1 id="page-title">Hello</h1>

  <!-- Option A: at the end of the body (what we use in class) -->
  <script src="script.js"></script>
</body>
</html>
```

| | Internal script | External script |
|---|---|---|
| Where the code is | Between `<script>` and `</script>` in the HTML | In its own `.js` file |
| The tag | `<script> ... </script>` | `<script src="script.js"></script>` (empty) |
| Best for | Quick practice files | Real sites: one file, linked on every page |

A `.js` file has only JavaScript in it. No `<script>` tags inside it.

[Back to top](#table-of-contents)

---

## Showing Output

The usual tool is `console.log()`, which prints to the browser's console:

```js
console.log('Hello');          // prints Hello in the console
console.log('Score: ' + 10);   // prints Score: 10
```

**The console is turned off on our school computers**, so in class we print to a box on the page with `say()`:

```html
<!-- The box that messages go into -->
<div id="output" style="white-space: pre-line;"></div>

<script>
  // say() adds a message to the #output box, one per line
  function say(msg) {
    document.getElementById('output').textContent += msg + '\n';
  }

  say('Hello');          // shows Hello on the page
  say('Score: ' + 10);   // shows Score: 10 on the page
</script>
```

How it works: it finds `#output`, then adds (`+=`) the message and a new line (`\n`) to its text.

[Back to top](#table-of-contents)

---

## Comments

```js
// One-line comment: everything after // is skipped

let tries = 3;   // A comment can sit at the end of a line

/*
  Multi-line comment.
  Everything between slash-star and star-slash is skipped.
*/
```

In HTML, comments look different: `<!-- like this -->`. In CSS: `/* like this */`.

Good comments say **why** or **what for**:

```js
// Bad:  add 1 to count
// Good: count how many times the user tried to send the form
count = count + 1;
```

[Back to top](#table-of-contents)

---

## Variables and Data Types

```js
// let: the value can change
let score = 0;
score = score + 5;               // score is now 5

// const: the value is set once
const schoolName = 'MCCC';
// schoolName = 'Other';         // ERROR: can't change a const

// The five data types you should know
let firstName = 'Alex';          // string (text in quotes)
let age = 16;                    // number (no quotes)
let isStudent = true;            // boolean (true or false)
let answer;                      // undefined (no value yet)
let result = null;               // null (nothing, on purpose)
```

**Watch the quotes:**

```js
5 + 3        // 8     (number + number = add)
'5' + '3'    // '53'  (string + string = join)
'5' + 3      // '53'  (string + number = join)
```

[Back to top](#table-of-contents)

---

## Joining Strings

```js
let firstName = 'Alex';
let age = 16;

// Concatenation with + (know this one)
let sentence = 'My name is ' + firstName + ' and I am ' + age + '.';
// My name is Alex and I am 16.

// Template literal: backticks and ${ } (recognize this one)
let sentence2 = `My name is ${firstName} and I am ${age}.`;
// My name is Alex and I am 16.
```

Spaces go inside the quotes. `'Hi' + firstName` gives `HiAlex`.

[Back to top](#table-of-contents)

---

## Functions

```js
// Define: one parameter
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Define: two parameters
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Define: three parameters
function announceEvent(eventName, date, place) {
  return eventName + ' is on ' + date + ' at the ' + place + '!';
}

// Call them (the values in parentheses are arguments)
say(greet('Maya'));                                    // Hello, Maya!
say(addNumbers(5, 3));                                 // 8
say(announceEvent('Open House', '3/15', 'Career Center'));
// Open House is on 3/15 at the Career Center!

// Save a returned value in a variable
let total = addNumbers(10, 20);                        // total is 30
```

A function doesn't have to return anything. `say(msg)` just does a job.

A function with no parameters still needs the parentheses: `function sayHi() { ... }` and `sayHi();`

[Back to top](#table-of-contents)

---

## if and else

```js
// Returns a message based on the score
function checkScore(score) {
  if (score >= 90) {
    return 'Great job';
  } else if (score >= 70) {
    return 'Pass';
  } else {
    return 'Try again';
  }
}
```

| Operator | Meaning | Example (true) |
|---|---|---|
| `===` | equal | `'a' === 'a'` |
| `!==` | not equal | `'a' !== 'b'` |
| `>` / `<` | greater / less than | `5 > 3` |
| `>=` / `<=` | greater or equal / less or equal | `70 >= 70` |
| `&&` | and (both true) | `age > 13 && age < 20` |
| `\|\|` | or (at least one true) | `name === '' \|\| email === ''` |
| `!` | not (flips it) | `!false` |

`=` stores a value. `===` compares. Mixing them up is the most common bug.

[Back to top](#table-of-contents)

---

## DOM Cheat Sheet

```js
// ----- Find -----
const title = document.getElementById('page-title');   // by id (no #)
const firstP = document.querySelector('p');             // first <p>
const note = document.querySelector('.note');           // first class="note"
const body = document.body;                             // the <body>

// ----- Change text -----
title.textContent = 'New heading';                      // plain text
title.innerHTML = 'A <em>new</em> heading';             // real HTML

// ----- Change one style (camelCase names) -----
title.style.color = 'red';
title.style.backgroundColor = 'yellow';
title.style.fontSize = '2rem';

// ----- Classes (put the look in CSS, switch it here) -----
title.classList.add('highlight');
title.classList.remove('highlight');
title.classList.toggle('highlight');
title.classList.contains('highlight');                  // true or false

// ----- Listen for a click -----
const btn = document.getElementById('my-btn');
btn.addEventListener('click', function () {
  title.textContent = 'Clicked!';
});
```

**Every feature is the same three moves:** find the element, listen for an event, change something.

[Back to top](#table-of-contents)

---

## Dark Mode Pattern

**CSS (styles.css)**

```css
/* Light colors (the default) */
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #0055aa;
}

/* Dark colors: same variable names, new values */
body.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #eeeeee;
  --accent-color: #66aaff;
}

/* Use the variables everywhere a color goes */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
a { color: var(--accent-color); }
```

**HTML (in the header on every page)**

```html
<button id="theme-toggle" type="button">Dark mode</button>
```

**JavaScript (script.js)**

```js
// ----- Dark mode button -----
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', function () {
  // Turn the dark-mode class on or off
  document.body.classList.toggle('dark-mode');

  // Change the button words to match
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Light mode';
  } else {
    themeBtn.textContent = 'Dark mode';
  }
});
```

[Back to top](#table-of-contents)

---

## Form Validation Pattern

**HTML**

```html
<form id="contact-form" novalidate>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>
  <span class="error" id="name-error"></span>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
  <span class="error" id="email-error"></span>

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>
  <span class="error" id="message-error"></span>

  <button type="submit">Send</button>
  <p class="success" id="form-success" hidden>Thanks! Your message passed every check.</p>
</form>
```

`novalidate` turns off the browser's pop-up bubbles so your own messages show.

**JavaScript**

```js
// ----- Contact form checks -----
const form = document.getElementById('contact-form');

// Only run on pages that have the form
if (form) {
  form.addEventListener('submit', function (event) {
    // Stop the send and reload so we can check first
    event.preventDefault();

    let allGood = true;

    // Check 1: name can't be empty
    const nameValue = document.getElementById('name').value.trim();
    const nameError = document.getElementById('name-error');
    if (nameValue === '') {
      nameError.textContent = 'Please enter your name.';
      allGood = false;
    } else {
      nameError.textContent = '';
    }

    // Check 2: email needs an @
    const emailValue = document.getElementById('email').value.trim();
    const emailError = document.getElementById('email-error');
    if (!emailValue.includes('@')) {
      emailError.textContent = 'Please enter an email address with an @.';
      allGood = false;
    } else {
      emailError.textContent = '';
    }

    // Check 3: message needs 10 or more characters
    const messageValue = document.getElementById('message').value.trim();
    const messageError = document.getElementById('message-error');
    if (messageValue.length < 10) {
      messageError.textContent = 'Your message must be at least 10 characters.';
      allGood = false;
    } else {
      messageError.textContent = '';
    }

    // Show the thank-you line only if every check passed
    document.getElementById('form-success').hidden = !allGood;
  });
}
```

| Tool | What it does |
|---|---|
| `.value` | What the user typed (always a string) |
| `.trim()` | Removes spaces at the start and end |
| `.length` | Number of characters |
| `.includes('@')` | `true` if the string has an `@` |
| `event.preventDefault()` | Stops the form from sending |
| `field.value = ''` | Clears a field |

[Back to top](#table-of-contents)

---

## What the Server Does with Form Data

1. The browser checks the form (your JavaScript).
2. If it passes, the browser sends the data to a **web server**.
3. The server **validates it again**. A user can turn off JavaScript or get around it, so the server never trusts browser checks alone.
4. The server stores the data in a **database**, or passes it to a **web service** (for example, one that sends an email).
5. The server sends back a response, like a thank-you page.

**Client-side validation** is for quick, friendly feedback. **Server-side validation** is for safety.

[Back to top](#table-of-contents)

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Nothing works at all | One typo stops the whole script. Check quotes, `( )`, and `{ }`. |
| `getElementById('#name')` | No `#` in `getElementById`. It is `getElementById('name')`. (`querySelector` does use `#`.) |
| Id in JavaScript doesn't match the HTML | They must match exactly, including dashes and capital letters. |
| Script in the `<head>` can't find the button | Move the script right before `</body>`, or add `defer`. |
| `if (name = '')` | One `=` stores. Use `===` to compare. |
| `'Hello' + name` prints `Helloname` | Put the space inside the quotes: `'Hello ' + name`. |
| Form reloads and the message flashes away | Missing `event.preventDefault()`, or the listener is on the button instead of the form. |
| Browser bubble shows instead of your message | Add `novalidate` to the `<form>`. |
| `script.js` breaks on pages with no form | Wrap the form code in `if (form) { ... }`. |
| Changing a `const` | Use `let` if the value needs to change. |
| `<script>` tags inside `script.js` | A `.js` file holds only JavaScript. |
| Using `alert()` for errors | Write the message on the page next to the field. |

[Back to top](#table-of-contents)

---

## ODE Competencies

**6.3.1 Scripting languages in web development.** JavaScript is a client-side scripting language that runs in the browser and makes pages interactive: changing content, responding to clicks, checking forms.

**6.3.2 Insert client-side scripts.** Add JavaScript with a `<script>` tag, either internal or external with `src`. Place it at the end of the body, or in the head with `defer`.

**6.3.3 Comments in scripts.** Use `//` and `/* */` comments to explain what each part of the code does.

**6.4.7 Scripting with forms and data.** Use JavaScript to read form input (`.value`), check it before it is sent, and show messages on the page. Describe what a server, database, and web service do with the data after it is sent.

[Back to top](#table-of-contents)

---

## Practice Questions

1. What does JavaScript do that HTML and CSS can't?
2. What does "client-side" mean?
3. What is the difference between an internal and an external script? Which is better for a website with five pages, and why?
4. Why does the `<script>` tag usually go right before `</body>`?
5. Write two kinds of JavaScript comments.
6. What is the difference between `let` and `const`? What happens if you try to change a `const`?
7. Name the data type of each: `'16'`, `16`, `true`.
8. What does `'5' + '3'` give? What does `5 + 3` give?
9. Write a line that joins `firstName` and `lastName` with a space between them.
10. Write a function `double(num)` that returns the number times 2.
11. In `function greet(name)` and `greet('Maya')`, which is the parameter and which is the argument?
12. Write an `if / else` that returns `'Adult'` if `age` is 18 or more, and `'Minor'` if not.
13. What is the DOM?
14. Write a line that finds the element with `id="score"` and changes its text to `0`.
15. What is the difference between `textContent` and `innerHTML`?
16. What does `classList.toggle('dark-mode')` do the first time? The second time?
17. Why does dark mode use CSS custom properties?
18. Why does the form listener use `'submit'` and go on the form, not the button?
19. What does `event.preventDefault()` do in a form listener?
20. Write a check that shows an error if `email` does not include an `@`.
21. Why must the server check form data again, even if JavaScript already checked it?
22. What does a database do with submitted form data? What is a web service?

[Back to top](#table-of-contents)
