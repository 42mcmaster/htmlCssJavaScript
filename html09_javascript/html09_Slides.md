---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 09: JavaScript Basics

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 09a — Scripts & Variables" -->

# What Does JavaScript Do?

- Makes web pages **interactive** and **dynamic**
- Responds to user actions (clicks, typing, scrolling)
- Changes content, styles, and behavior in real-time
- Runs **in the browser** (client-side)
- Examples: form validation, animations, games, Mad Libs generators

---

# The Script Tag

## Inline Script (in HTML):
```html
<script>
  console.log('Hello from inline JavaScript!');
</script>
```

## External Script (separate .js file):
```html
<script src="script.js"></script>
```

**Best Practice:** Use external scripts for organization and reusability.

---

# console.log() — Your Debugging Friend

```javascript
// Print messages to the browser console
console.log('This is a message');
console.log('Age:', 25);
console.log(3 + 5);  // Prints: 8
```

**How to view:** Press F12 → Console tab

Use it to test code and find bugs!

---

# Variables: Storing Data

```javascript
// let — modern, block-scoped (USE THIS)
let studentName = 'Alex';
let score = 95;

// const — cannot be reassigned (USE THIS for fixed values)
const courseCode = 'WEB101';
const PI = 3.14159;

// var — old style (avoid, but you'll see it)
var legacyCode = 'old-style';
```

Variable names use **camelCase**: `myFirstVariable`, `studentAge`

---

# Data Types in JavaScript

```javascript
// String — text, enclosed in quotes
let color = 'blue';
let message = "Hello World";

// Number — integers and decimals
let age = 16;
let temperature = 98.6;

// Boolean — true or false
let isStudent = true;
let hasPassport = false;

// Undefined — no value assigned yet
let emptyVar;

// Null — intentionally empty
let noValue = null;
```

---

<!-- _header: "Sub-Lesson 09b — Functions & Operators" -->

# Functions: Reusable Code Blocks

```javascript
// Define a function
function greetUser(name) {
  return 'Hello, ' + name + '!';
}

// Call the function with an argument
let greeting = greetUser('Maya');
console.log(greeting);  // Prints: Hello, Maya!
```

- **Parameter** (name): what the function expects
- **Argument** ('Maya'): what you actually pass in
- **return**: sends data back to the caller

---

# Operators & String Concatenation

```javascript
// Basic operators
let x = 10 + 5;   // Addition: 15
let y = 10 - 3;   // Subtraction: 7
let z = 4 * 6;    // Multiplication: 24

// String concatenation — joining strings
let firstName = 'John';
let greeting = 'Hello ' + firstName + '!';  // Hello John!

// Template Literals (easier, modern)
let better = `Hello ${firstName}!`;  // Hello John!
```

Template literals use backticks and `${variable}` for interpolation.

---

# Comments: Documentation for Code

```javascript
// Single-line comment — explains one line

/*
  Multi-line comment
  Useful for explaining entire sections
  or adding notes to yourself
*/

// Always explain WHY, not just WHAT
let taxRate = 0.07;  // Ohio sales tax is 7%

// BAD comment:
let x = 5;  // x is 5

// GOOD comment:
let studentCount = 5;  // Total students in first period
```

---

# Your First Mad Libs Generator

We'll build a page that:
1. Stores words in JavaScript variables
2. Uses a function to combine them into a story
3. Displays the funny result on the page

**Next:** Walkthroughs, practice tasks, then build your own Mad Libs!

---

# Questions & Practice

- What's the difference between `let` and `const`?
- Why use console.log()?
- How do functions make code reusable?
- What's a template literal used for?

**Key Takeaway:** JavaScript makes websites interactive, variables store data, functions organize code, and comments explain your thinking!

