# HTML09 Study Guide: JavaScript Basics

## Vocabulary (20 Terms)

1. **JavaScript** — A programming language that runs in web browsers to make pages interactive and dynamic.

2. **Script Tag** — HTML element `<script>` that tells the browser to execute JavaScript code.

3. **src Attribute** — Attribute in `<script src="file.js">` that links to an external JavaScript file.

4. **console.log()** — JavaScript function that prints messages to the browser console for testing and debugging.

5. **Variable** — A named container that stores a value (like a labeled box holding data).

6. **let** — Modern keyword to declare a variable; preferred for most situations.

7. **const** — Keyword to declare a constant; value cannot be changed after assignment.

8. **var** — Older keyword for declaring variables; avoid in modern code (shown for recognition).

9. **Data Type** — The category of a value: string, number, boolean, undefined, or null.

10. **String** — Text data enclosed in quotes; example: `"Hello World"` or `'blue'`.

11. **Number** — Numeric data (integers or decimals); example: `42` or `3.14`.

12. **Boolean** — A value that is either `true` or `false`; used in logic and conditions.

13. **Undefined** — Default value when a variable is declared but no value is assigned.

14. **Null** — A value intentionally set to represent "no value" or "empty."

15. **Function** — A reusable block of code that performs a specific task.

16. **Parameter** — A placeholder name in a function definition that receives a value when called.

17. **Argument** — The actual value passed to a function when it is called.

18. **return** — Keyword that sends a value back from a function to where it was called.

19. **Operator** — A symbol that performs an action: `+`, `-`, `*`, `/`, `=`, etc.

20. **Template Literal** — A string enclosed in backticks (`) that allows inserting variables with `${variable}`.

---

## Quick Cheat Sheet

### Variable Declaration
```javascript
let myVar = 'value';      // Use let for most variables
const myConst = 'fixed';  // Use const for values that don't change
var oldVar = 'legacy';    // Avoid: outdated
```

### Data Types
```javascript
let text = 'string';      // String
let count = 42;           // Number
let flag = true;          // Boolean
let empty;                // Undefined
let nothing = null;       // Null
```

### console.log()
```javascript
console.log('Message');           // Print text
console.log(myVar);               // Print variable value
console.log(x + y);               // Print calculation result
console.log('Result:', answer);   // Print label and value
```

### Functions
```javascript
// Define function
function add(num1, num2) {
  return num1 + num2;
}

// Call function
let sum = add(5, 3);  // sum = 8
console.log(sum);
```

### Strings
```javascript
// Concatenation (joining)
let greeting = 'Hello ' + name + '!';

// Template literal (modern, cleaner)
let greeting = `Hello ${name}!`;
```

### Comments
```javascript
// Single-line comment

/* Multi-line
   comment */
```

---

## ODE Competencies

### 6.3.1 — Scripting Languages in Web Development
Students understand that scripting languages like JavaScript add interactivity and dynamic behavior to web pages. They recognize JavaScript as client-side code that runs in browsers.

### 6.3.2 — Insert Client-Side Scripts
Students can insert JavaScript into HTML using `<script>` tags (inline) and external `.js` files. They understand when to use each approach and link scripts properly with the `src` attribute.

### 6.3.3 — Comments in Scripts
Students write clear, meaningful comments in their JavaScript code to explain logic, document parameters, and help future readers (including themselves) understand intent.

---

## Key Concepts

**Client-Side vs. Server-Side:**
- JavaScript runs **in your browser** (client-side)
- This is different from languages that run on a web server

**Variables Hold Different Types:**
- A variable can hold a string, number, boolean, or other data
- Use `let` and `const` in modern JavaScript
- Choose meaningful names: `studentName`, not `x`

**Functions Reduce Repetition:**
- Write code once in a function, call it many times
- Parameters make functions flexible and reusable

**Template Literals Are Your Friend:**
- Backticks and `${variable}` make string building easy
- Cleaner than concatenating with `+`

**console.log() Finds Bugs:**
- Print values to check if your code is working
- Open Developer Tools (F12) and look at the Console tab

---

## Practice Questions

1. What does JavaScript do on a website?
2. What's the difference between inline and external scripts?
3. How do you print a message to the console?
4. What's the difference between `let` and `const`?
5. What are five data types in JavaScript?
6. Write a function that takes a name and returns a greeting.
7. What's a template literal and why is it useful?
8. What do parameters and arguments do in a function?
9. How do you add a comment in JavaScript?
10. Why is camelCase used for variable names?

