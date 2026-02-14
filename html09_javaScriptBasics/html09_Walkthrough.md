# HTML09 Walkthrough: Your First JavaScript

## Part 1: Open the Console & Test console.log()

1. Open a browser and press **F12** (or right-click → Inspect → Console)
2. In the Console tab, type:
   ```javascript
   console.log('Hello World!');
   ```
3. Press Enter. You should see:
   ```
   Hello World!
   ```

**Try This:**
- Print your name to the console: `console.log(___);`
- Print a number: `console.log(___);`
- Print the result of math: `console.log(___ + ___);`

---

## Part 2: Create Variables

In the console, create variables to store information:

```javascript
// Create a string variable (use quotes)
let myName = 'Alex';

// Create a number variable
let myAge = 16;

// Create a boolean variable
let isStudent = true;
```

Now print them:
```javascript
console.log(myName);   // Prints: Alex
console.log(myAge);    // Prints: 16
console.log(isStudent); // Prints: true
```

**Try This:**
- Create a variable called `favoriteColor` and set it to a color name (string)
  ```javascript
  let favoriteColor = ___;
  ```
- Create a variable called `score` and set it to a number
  ```javascript
  let score = ___;
  ```
- Print both to the console using console.log()
  ```javascript
  console.log(___);
  console.log(___);
  ```

---

## Part 3: Understand let vs. const

```javascript
// Use let when the value might change
let counter = 0;
counter = 5;        // This works - you can reassign let
console.log(counter); // Prints: 5

// Use const when the value should NOT change
const courseCode = 'WEB101';
courseCode = 'WEB102';  // ERROR! You cannot reassign const
```

**Try This:**
- Create a const for something that shouldn't change (like your school name):
  ```javascript
  const schoolName = ___;
  ```
- Create a let for something that might change (like points in a game):
  ```javascript
  let gamePoints = ___;
  ```

---

## Part 4: String Concatenation (Joining Strings)

```javascript
// Old way: using + to join strings
let firstName = 'John';
let greeting = 'Hello ' + firstName + '!';
console.log(greeting);  // Prints: Hello John!
```

**Try This:**
- Build a greeting for yourself:
  ```javascript
  let name = ___;
  let greeting = 'Welcome, ' + ___ + '!';
  console.log(___);
  ```

---

## Part 5: Template Literals (Modern & Clean)

```javascript
// Modern way: backticks and ${variable}
let firstName = 'Maya';
let greeting = `Hello ${firstName}!`;
console.log(greeting);  // Prints: Hello Maya!

// Even better with multiple variables
let firstName = 'Alex';
let lastName = 'Johnson';
let greeting = `Hi, I'm ${firstName} ${lastName}.`;
console.log(greeting);  // Prints: Hi, I'm Alex Johnson.
```

**Try This:**
- Create a template literal with your name and age:
  ```javascript
  let name = ___;
  let age = ___;
  let intro = `My name is ${___} and I am ${___} years old.`;
  console.log(___);
  ```

---

## Part 6: Write Your First Function

A function is a reusable block of code. Let's create one:

```javascript
// Define a function
function sayHello(name) {
  // Inside the function, we use the parameter 'name'
  return `Hello, ${name}!`;
}

// Call the function
let result = sayHello('Sarah');
console.log(result);  // Prints: Hello, Sarah!

// Call it again with a different name
console.log(sayHello('Marco'));  // Prints: Hello, Marco!
```

**Breaking it down:**
- `function sayHello(name)` — Define the function and its parameter
- `return` — Send a value back from the function
- `sayHello('Sarah')` — Call the function with an argument

**Try This:**
- Write a function that combines two numbers and returns their sum:
  ```javascript
  function addNumbers(num1, num2) {
    return ___ + ___;
  }

  console.log(addNumbers(5, 3));  // Should print: 8
  ```

---

## Part 7: Connect JavaScript to an HTML Page

Create an HTML file with JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First JavaScript</title>
</head>
<body>
  <h1>JavaScript Test</h1>
  <p>Check the console (F12) to see messages!</p>

  <!-- Write JavaScript here -->
  <script>
    // Create variables
    let studentName = 'YOU';
    let courseNumber = 9;

    // Use console.log to test
    console.log('Welcome to Lesson ' + courseNumber);
    console.log(`Your name is ${studentName}`);

    // Create a function
    function buildGreeting(name, lesson) {
      return `${name} is learning JavaScript in Lesson ${lesson}!`;
    }

    // Call the function and print the result
    console.log(buildGreeting(studentName, courseNumber));
  </script>
</body>
</html>
```

**Try This:**
1. Save this as `myFirstJS.html`
2. Open it in your browser
3. Press F12 and look at the Console
4. Change the variable values and see what prints
5. Modify the function to return something different:
   ```javascript
   function buildGreeting(name, lesson) {
     return `___ ${___} is learning JavaScript in Lesson ${___}!`;
   }
   ```

---

## Part 8: Add Comments to Your Code

```javascript
// Always comment your code to explain what it does

// This variable stores the student's name
let studentName = 'Alex';

// Function that creates a friendly greeting message
function makeGreeting(firstName, lastName) {
  // Use a template literal to build the message
  return `Hi ${firstName} ${lastName}, welcome to web dev!`;
}

// Call the function and print the result to the console
console.log(makeGreeting('John', 'Smith'));

/*
  Multi-line comment:
  This is useful when you need to explain
  a bigger block of code or add detailed notes.
*/
```

---

## Summary: What You Learned

✓ How to use console.log() to test code
✓ How to create variables with let and const
✓ Different data types (string, number, boolean)
✓ How to build strings with concatenation and template literals
✓ How to write and call functions
✓ How to add comments to explain your code
✓ How to connect JavaScript to HTML

**Next step:** Complete the practice tasks (09a and 09b) to strengthen your skills!

