# Lesson 09a Study Guide: JavaScript Basics

This guide covers what the state Web Design exam asks about JavaScript and scripting. Print it and keep it with your other study guides.

## Table of Contents

1. [Vocabulary](#vocabulary)
2. [HTML, CSS, and JavaScript](#html-css-and-javascript)
3. [Client-Side and Server-Side Scripting](#client-side-and-server-side-scripting)
4. [Static and Dynamic Sites](#static-and-dynamic-sites)
5. [Adding JavaScript to a Page](#adding-javascript-to-a-page)
6. [Showing Output in the Console](#showing-output-in-the-console)
7. [Comments](#comments)
8. [Variables and Data Types](#variables-and-data-types)
9. [Joining Strings](#joining-strings)
10. [What Happens to Form Data](#what-happens-to-form-data)
11. [Common Mistakes](#common-mistakes)
12. [ODE Competencies](#ode-competencies)
13. [Practice Questions](#practice-questions)
14. [Practice Question Answers](#practice-question-answers)

---

## Vocabulary

**Scripting and where it runs**

1. **JavaScript**: The scripting language that runs in web browsers. It makes pages do things: respond to clicks, change content, check forms.
2. **Scripting language**: A programming language that runs inside another program. JavaScript runs inside the browser.
3. **Client**: The visitor's web browser.
4. **Client-side**: Code that runs in the visitor's browser. JavaScript in a web page is client-side.
5. **Server-side**: Code that runs on the web server before the page is sent. The visitor never sees it.
6. **Web server**: The computer that stores a website and sends its files to browsers.
7. **PHP**: A common server-side scripting language. Many CMS sites, like WordPress, run on it.
8. **Node.js**: JavaScript running on a server instead of in a browser.
9. **SQL**: The language for asking a database for data. Server-side scripts use it. It is not a page scripting language.
10. **Static site**: A site that sends the same files to every visitor. Pages change only when someone edits them.
11. **Dynamic site**: A site where the server builds pages, often from a database, so visitors can see different content.

**Adding scripts to a page**

12. **`<script>` tag**: The HTML tag that adds JavaScript to a page.
13. **Internal script**: JavaScript written between `<script>` and `</script>` in the HTML file.
14. **External script**: JavaScript in its own `.js` file, linked with `<script src="script.js"></script>`.
15. **`src` attribute**: Points a `<script>` tag to an external `.js` file.
16. **`defer`**: A `<script>` attribute that waits until the page is loaded before running the script.
17. **`.js`**: The file extension for a JavaScript file.

**Writing JavaScript**

18. **Console**: A panel in the Developer Tools that shows messages and errors for the programmer. Visitors never see it.
19. **`console.log()`**: Prints a message to the Console.
20. **Comment**: A note in the code that the browser skips. `//` for one line, `/* */` for several.
21. **Variable**: A named box that holds a value.
22. **`let`**: Makes a variable whose value can change.
23. **`const`**: Makes a variable whose value can't change after it is set.
24. **`var`**: The old way to make a variable. Don't use it in new code.
25. **camelCase**: Naming style with no spaces, where each new word starts with a capital: `firstName`.
26. **Data type**: The kind of value a variable holds.
27. **String**: Text inside quotes: `'hello'`.
28. **Number**: A number with no quotes: `42` or `3.5`.
29. **Boolean**: Only `true` or `false`, no quotes.
30. **Concatenation**: Joining strings together with `+`.

**Forms and data**

31. **Form validation**: Checking that form data is filled in and makes sense.
32. **Client-side validation**: Validation in the browser with JavaScript. Quick feedback, but users can get around it.
33. **Server-side validation**: Validation on the server. This is the check that keeps the data safe.
34. **Database**: An organized collection of records that the server saves to and looks up, like every message sent through a form.
35. **Web service**: A program on the internet that does one job when another program asks, like sending an email or looking up the weather.
36. **`action` attribute**: The form attribute that says where the form data is sent.

[Back to top](#table-of-contents)

---

## HTML, CSS, and JavaScript

Every web page uses up to three languages. Each has its own job.

| Language | Job | Example | File extension |
|---|---|---|---|
| HTML | What is on the page | headings, paragraphs, forms, buttons | `.html` |
| CSS | How it looks | colors, fonts, spacing, layout | `.css` |
| JavaScript | What it does | a button that switches to dark mode, a form that checks your email | `.js` |

**What JavaScript can do:**

- Change text and styles on the page after it loads
- Respond when someone clicks, types, or sends a form
- Check what a user typed before a form is sent

**What JavaScript is not needed for:** anything CSS already does. A hover effect on a link is CSS:

```css
/* A hover effect is CSS, not JavaScript */
a:hover {
  color: red;
}
```

[Back to top](#table-of-contents)

---

## Client-Side and Server-Side Scripting

Scripts on a website run in one of two places.

| | Client-side | Server-side |
|---|---|---|
| Where it runs | In the visitor's browser | On the web server |
| When it runs | After the page arrives in the browser | Before the page is sent |
| Main languages | JavaScript | PHP, Python, Node.js, Ruby, C# (ASP.NET), Java |
| Can the visitor see the code? | Yes (View Page Source) | No |
| Good for | Quick page changes, responding to clicks, checking a form before it sends | Saving to a database, logins, sending email, building pages from stored data |
| Example | A dark mode button | An online store showing your order history |

**Things to remember:**

- **JavaScript is the client-side language.** Every modern browser runs it.
- **Node.js** is JavaScript on the server. Same language, different place.
- **SQL** is not a page scripting language. It is the language for asking a database for data. Server-side scripts use SQL to talk to the database.
- **VBScript** and **Flash (ActionScript)** were used on older websites. Browsers no longer support them.

**Which side is it?** Ask: does it need stored data or a secret (a password, a database)? Then it's server-side. Is it a quick change to the page the visitor is looking at? Then it's client-side.

| Job | Side |
|---|---|
| Show a "Please enter your name" message when the name box is empty | Client |
| Check a username and password | Server |
| Open and close a menu when a button is clicked | Client |
| Save a new order | Server |
| Send a confirmation email | Server |
| Switch the page to dark mode | Client |

[Back to top](#table-of-contents)

---

## Static and Dynamic Sites

| | Static site | Dynamic site |
|---|---|---|
| What the visitor gets | The same files as everyone else | A page built for them by the server |
| How pages change | Someone edits the files | The server builds them from a database |
| Needs server-side scripting? | No | Yes |
| Good for | Small business sites, portfolios, class projects | Stores, social media, email, anything with logins |
| Example | The website you built in this class | An online store with your cart and order history |

A static site can still use client-side JavaScript. A dark mode button on a static site is fine, because it only changes the page in the browser.

[Back to top](#table-of-contents)

---

## Adding JavaScript to a Page

There are two ways to add JavaScript.

**Internal script** — code inside the HTML file:

```html
<body>
  <h1>My Page</h1>

  <!-- Internal script: the code goes between the tags -->
  <script>
    console.log('This page has an internal script.');
  </script>
</body>
```

**External script** — code in its own `.js` file:

```html
<body>
  <h1>My Page</h1>

  <!-- External script: src points to the file, nothing goes between the tags -->
  <script src="script.js"></script>
</body>
```

```js
// script.js
// A .js file has only JavaScript in it. No <script> tags.
console.log('This page has an external script.');
```

**Which is better?** External, for a real site. One `script.js` file can be linked on many pages. Fix it once and every page gets the fix. This is the same reason you use one `styles.css`.

**Where does the tag go?**

- **At the end of the body**, right before `</body>`. The browser reads the page top to bottom, so the rest of the page loads first.
- **Or in the head with `defer`**, which tells the browser to wait until the page is loaded:

```html
<head>
  <!-- defer: wait until the page loads before running the script -->
  <script src="script.js" defer></script>
</head>
```

**CSS and JavaScript side by side:**

| | CSS | JavaScript |
|---|---|---|
| Inside the HTML file | `<style> ... </style>` | `<script> ... </script>` |
| In its own file | `<link rel="stylesheet" href="styles.css">` | `<script src="script.js"></script>` |
| Where the link usually goes | In the `<head>` | End of the `<body>`, or `<head>` with `defer` |
| File extension | `.css` | `.js` |

Notice that CSS uses `<link>` with `href`, and JavaScript uses `<script>` with `src`. That is a common test question.

[Back to top](#table-of-contents)

---

## Showing Output in the Console

`console.log()` prints a message to the Console. It is for the programmer. Visitors to the page never see it.

```js
// Print a message
console.log('Hello, world!');

// Print the value of a variable
let score = 10;
console.log(score);
```

**Open the Console in class:** open the page with **Live Preview** in VS Code, click the **Developer Tools** button in the preview's toolbar, then the **Console** tab.

**The Console shows errors in red**, with the line number. One error stops the whole script, so if messages are missing, look for red.

[Back to top](#table-of-contents)

---

## Comments

A comment is a note in the code. The browser skips it.

```js
// A one-line comment starts with two slashes.

console.log('Hi');   // A one-line comment can go at the end of a line.

/*
  A multi-line comment starts with slash-star
  and ends with star-slash.
*/
```

**Comments in all three languages:**

| Language | Comment | Example |
|---|---|---|
| HTML | `<!-- -->` | `<!-- Main navigation -->` |
| CSS | `/* */` | `/* Colors for the header */` |
| JavaScript | `//` or `/* */` | `// Print the site name` |

**Why comment?**

- To explain what the code is for, so other people (and you, later) can understand it
- To turn off a line while testing, without deleting it

**Good comments say what the code is for**, not just repeat it:

```js
// Bad: print hello
// Good: check that script.js is linked and running
console.log('Hello, world!');
```

[Back to top](#table-of-contents)

---

## Variables and Data Types

A variable is a named box that holds a value.

```js
// let: the value can change later
let score = 0;
score = 10;

// const: set once, can't change
const schoolName = 'Medina County Career Center';

// schoolName = 'Another School';   // ERROR: can't change a const
```

| Keyword | Can the value change? | Use it when |
|---|---|---|
| `let` | Yes | The value will change |
| `const` | No | The value should stay the same |
| `var` | Yes | Don't. It is the old way. |

**Naming rules:** camelCase (`firstName`, `pageCount`), no spaces, no dashes, can't start with a number. Pick names that say what the box holds.

**Data types:**

```js
// String: text, always in quotes (single or double)
let firstName = 'Alex';

// Number: no quotes, whole or decimal
let age = 16;
let price = 3.75;

// Boolean: true or false, no quotes
let isStudent = true;
```

| Value | Data type | Why |
|---|---|---|
| `'Alex'` | String | Text in quotes |
| `16` | Number | No quotes |
| `'16'` | String | It has quotes, so it is text |
| `true` | Boolean | true or false, no quotes |
| `'true'` | String | It has quotes |

[Back to top](#table-of-contents)

---

## Joining Strings

Joining strings with `+` is called **concatenation**.

```js
let firstName = 'Alex';
let age = 16;

// Join text and variables with +
console.log('My name is ' + firstName + ' and I am ' + age + '.');
// Prints: My name is Alex and I am 16.
```

**Watch the spaces.** They go inside the quotes:

```js
console.log('My name is' + firstName);    // My name isAlex
console.log('My name is ' + firstName);   // My name is Alex
```

**`+` does two different things:**

```js
console.log(5 + 3);       // 8   (two numbers: adds)
console.log('5' + '3');   // 53  (two strings: joins)
console.log('5' + 3);     // 53  (a string and a number: joins)
```

[Back to top](#table-of-contents)

---

## What Happens to Form Data

A form's `action` attribute says where the data goes when the user clicks Submit. On a real site, that is a web server.

```html
<!-- action: where the data is sent. method: how it is sent. -->
<form action="/send-message" method="post">
```

**The steps, in order:**

| Step | Where | What happens |
|---|---|---|
| 1 | Browser (JavaScript) | Checks the form before it sends: empty boxes, missing `@` in the email. This is client-side validation. |
| 2 | Server | Checks the data again. Users can turn off or get around JavaScript, so the server never trusts the browser's check. |
| 3 | Server | Saves the data in a **database**. |
| 4 | Server | May send the data to a **web service**, like an email service or mailing list. |
| 5 | Server | Sends back a reply, like "Thanks, we got your message." |

**Why check twice?**

- **Browser check:** for convenience. The user sees a problem right away without waiting.
- **Server check:** for safety. It is the one check a user can't skip.

[Back to top](#table-of-contents)

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Nothing prints in the Console | The script isn't linked. Check the file name in `src`, and that the `.js` file is in the same folder as the HTML. |
| Some lines print, then they stop | One error stops the script. Read the red error in the Console. It gives the line number. |
| `<script>` tags inside `script.js` | A `.js` file holds only JavaScript. The tags go in the HTML file. |
| Code between the tags of an external script | `<script src="script.js"></script>` stays empty. The code goes in the `.js` file. |
| Using `href` for a script | Scripts use `src`. CSS links use `href`. |
| Changing a `const` | Use `let` if the value needs to change. |
| `firstName` in one place, `firstname` in another | Names must match exactly, including capital letters. |
| `'Hello' + name` prints `Helloname` | Put the space inside the quotes: `'Hello ' + name`. |
| A `/*` comment with no `*/` | Every `/*` needs a matching `*/`. |
| Using JavaScript for a hover effect | Hover is CSS: `a:hover { ... }`. |
| Thinking JavaScript checks are enough | The server must check the data again. |

[Back to top](#table-of-contents)

---

## ODE Competencies

**6.3.1 Select and apply scripting languages used in web development.** JavaScript is the client-side scripting language that runs in the browser. Server-side languages like PHP, Python, and Node.js run on the web server. Choose client-side for quick changes on the page and server-side for databases, logins, and email.

**6.3.2 Insert client-side script into a web page.** Add JavaScript with a `<script>` tag, either internal (code between the tags) or external (`src="script.js"`). Place it at the end of the body, or in the head with `defer`.

**6.3.3 Insert comments into client-side scripts.** Use `//` for one line and `/* */` for several, to explain what each part of the code does.

**6.4.7 Code scripting to interact with data sources (e.g., database, web services).** JavaScript checks form data in the browser. When the form is sent, a server-side script checks it again, saves it in a database, and may pass it to a web service.

**2.7.8 Describe the difference between static and dynamic sites.** A static site sends the same files to everyone. A dynamic site builds pages on the server, often from a database.

[Back to top](#table-of-contents)

---

## Practice Questions

1. What is the job of HTML? CSS? JavaScript?
2. What is a scripting language?
3. What does "client-side" mean? What does "server-side" mean?
4. Name the client-side scripting language. Name three server-side scripting languages.
5. Is SQL a scripting language for web pages? What is it for?
6. Client-side or server-side? (a) checking a password (b) showing an error when a box is empty (c) saving an order (d) opening a menu when a button is clicked
7. What is the difference between a static site and a dynamic site? Give an example of each.
8. Write an internal script that prints `Hello` to the Console.
9. Write the tag that links an external file named `main.js`.
10. Why is an external script better for a website with five pages?
11. Where should the `<script>` tag go, and why? What does `defer` do?
12. CSS is linked with `<link>` and which attribute? JavaScript is linked with `<script>` and which attribute?
13. Who sees the output of `console.log()`?
14. Write a one-line JavaScript comment and a multi-line JavaScript comment.
15. Write a comment in HTML, in CSS, and in JavaScript.
16. What is the difference between `let` and `const`? What happens if you change a `const`?
17. Name the data type of each: `'blue'`, `42`, `false`, `'42'`.
18. What does `'5' + '3'` print? What does `5 + 3` print?
19. Write a line that prints `I live in Medina.` using a variable `city` and `+`.
20. Why must the server check form data again, even if JavaScript already checked it?
21. What does a database do with submitted form data? What is a web service?
22. Is a hover effect on a link done with CSS or JavaScript?

[Back to top](#table-of-contents)

---

## Practice Question Answers

1. HTML is what is on the page. CSS is how it looks. JavaScript is what it does.
2. A programming language that runs inside another program. JavaScript runs inside the web browser.
3. Client-side code runs in the visitor's browser. Server-side code runs on the web server before the page is sent.
4. JavaScript. Any three of: PHP, Python, Node.js, Ruby, C# (ASP.NET), Java.
5. No. SQL is the language for asking a database for data. Server-side scripts use it.
6. (a) server-side (b) client-side (c) server-side (d) client-side
7. A static site sends the same files to every visitor (a portfolio, our class website). A dynamic site builds pages on the server from a database, so visitors see different content (an online store, social media).
8.
```html
<script>
  console.log('Hello');
</script>
```
9. `<script src="main.js"></script>`
10. One file is linked on all five pages. A fix in that one file fixes every page.
11. At the end of the body, right before `</body>`, so the page loads before the script runs. `defer` lets the tag go in the `<head>` and still wait until the page is loaded.
12. CSS uses `href`. JavaScript uses `src`.
13. Only the programmer, in the Developer Tools. Visitors never see it.
14.
```js
// One-line comment
/*
  Multi-line comment
*/
```
15. HTML: `<!-- comment -->` CSS: `/* comment */` JavaScript: `// comment`
16. A `let` variable can change. A `const` can't. Changing a `const` causes an error, and the script stops.
17. `'blue'` string, `42` number, `false` boolean, `'42'` string
18. `'5' + '3'` prints `53`. `5 + 3` prints `8`.
19.
```js
let city = 'Medina';
console.log('I live in ' + city + '.');
```
20. Users can turn off JavaScript or get around it. The server check is the one they can't skip.
21. The database stores the data as records, like a table of every message sent. A web service is a program that does one job when asked, like sending an email.
22. CSS (`a:hover`).

[Back to top](#table-of-contents)
