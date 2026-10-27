---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 09a: JavaScript Basics

## Web Development
### Medina County Career Center

---

# What We Are Doing

- What JavaScript is and where it runs
- Client-side vs. server-side scripting languages
- Adding a script to a page: internal and external
- The Console, comments, and variables
- What happens to form data after it is sent

**This lesson:** walkthrough, then add a `script.js` file to **your** contact page.

---

# What Does JavaScript Do?

| Language | Job |
|---|---|
| HTML | What is on the page |
| CSS | How it looks |
| **JavaScript** | **What it does** |

- A **scripting language**: a programming language that runs inside another program
- JavaScript runs inside the **web browser**
- Changes the page, responds to clicks, checks forms before they send
- Hover effects are still CSS (`a:hover`)

---

# Client-Side vs. Server-Side

| | Client-side | Server-side |
|---|---|---|
| Runs | In the visitor's browser | On the web server |
| Languages | **JavaScript** | PHP, Python, Node.js, Ruby, C# (ASP.NET), Java |
| Visitor sees the code? | Yes | No |
| Good for | Page changes, clicks, checking forms | Databases, logins, email |


---

- **Node.js** = JavaScript running on a server

- **PHP** = A server-side language built specifically for powering dynamic web pages

- **Python** = A versatile language used for web apps, automation, and data science

- **Ruby** = A developer-friendly language optimized for rapid web application development

- **C# (ASP.NET)** = Microsoft's enterprise language for building scalable web apps and services

- **Java** = A robust, widely-used language for large-scale enterprise backend systems

- **SQL** talks to databases. It is not a page scripting language.
---

# Static vs. Dynamic Sites

**Static:** the same files go to every visitor. Pages change only when someone edits them.

**Dynamic:** the server builds each page, often from a database. Different visitors see different content.

- Shopping cart, messages, order history = **dynamic**
- Dynamic sites need **server-side** scripting
- The site you built in this class is **static**

---

# The script Tag

```html
<!-- Internal: code in the HTML file -->
<script>
  // JavaScript here
</script>

<!-- External: code in its own .js file -->
<script src="script.js"></script>
```

- Put it **right before `</body>`** so the page loads first
- Or in the `<head>` with `defer`
- External is better for a real site: one file, linked on many pages

---

# CSS and JavaScript Side by Side

| | CSS | JavaScript |
|---|---|---|
| Inside the HTML | `<style> ... </style>` | `<script> ... </script>` |
| Own file | `<link rel="stylesheet" href="styles.css">` | `<script src="script.js"></script>` |
| Extension | `.css` | `.js` |

---

# The Console

```js
console.log('Hello, world!');
```

- Prints a message for **the programmer**. Visitors never see it.
- Live Preview → **Developer Tools** button → **Console** tab
- **Red** text = an error, with the line number
- One error stops the rest of the script

---

# Comments

```js
// One-line comment

/*
  Multi-line comment
*/
```

| Language | Comment |
|---|---|
| HTML | `<!-- comment -->` |
| CSS | `/* comment */` |
| JavaScript | `// comment` or `/* comment */` |

The browser skips comments. Write what the code is **for**.

---

# Variables: let and const

```js
let score = 0;          // let: can change
score = 10;

const schoolName = 'MCCC';   // const: can't change
```

- Use `const` when the value never changes, `let` when it will
- `var` is the old way
- Names use **camelCase**: `firstName`, `pageCount`, `isStudent`

---

# Data Types and Joining Strings

```js
let firstName = 'Alex';   // string: text in quotes
let age = 16;             // number: no quotes
let isStudent = true;     // boolean: true or false

console.log(5 + 3);       // 8
console.log('5' + '3');   // 53

console.log('My name is ' + firstName + '.');
```

Joining strings with `+` is called **concatenation**. Put spaces inside the quotes.

---

# After a Form Is Sent

1. **Browser (JavaScript):** checks the form before it sends. This is **form validation**.
2. **Server:** checks the data **again**. Users can get around JavaScript.
3. **Server:** saves it in a **database**.
4. **Server:** may pass it to a **web service** (send an email, join a mailing list).
5. **Server:** sends back a reply ("Thanks!").

Browser checks are for convenience. Server checks are for safety.

---

# Your DIY Task

In your `DiyWebsite_Lastname` folder:

1. Make `script.js` and link it on **contact.html**
2. Comment block at the top: file name, your name, what the file is for
3. At least **4 variables** about your site, printed in the Console, plus one joined sentence
4. A comment explaining what happens to **your** contact form's data: **server, check it again, database, web service**

Push with GitHub Desktop.
