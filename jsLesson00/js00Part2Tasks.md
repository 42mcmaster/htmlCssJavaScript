# Lesson 00 Part 2 Tasks: Understanding JavaScript Syntax

These tasks will help you practice **reading** JavaScript code and understanding how functions, objects, and methods work.

---

## Task 1: GUIDED EXAMPLE - Anatomy of Code

**Goal:** Break down JavaScript statements to understand each part.

### Instructions:
For each line of code below, identify and label the parts.

#### Example (Done for you):
```javascript
alert('Hello World');
  ↓        ↓
Name    Argument
```

**Parts identified:**
- Function name: `alert`
- Opening parenthesis: `(`
- Argument/Input: `'Hello World'`
- Closing parenthesis: `)`
- Semicolon: `;`

### Now You Try:

#### Code 1:
```javascript
console.log('JavaScript is fun!');
```

**Label these parts:**
- Object: 
- Method: 
- Dot notation: 
- Opening parenthesis: 
- Argument: 
- Closing parenthesis: 
- Semicolon: 

---

#### Code 2:
```javascript
document.write('Welcome to my page');
```

**Label these parts:**
- Object: 
- Method: 
- Dot notation: 
- Opening parenthesis: 
- Argument: 
- Closing parenthesis: 
- Semicolon: 

---

## Task 2: Function vs Method Identification

**Goal:** Practice distinguishing between simple functions and object methods.

### Instructions:
For each line of code, identify:
1. Is it a function or a method?
2. If it's a method, what object does it belong to?

#### Example 1:
```javascript
alert('Test');
```
**Answer:** 
- Type: Simple function (technically window.alert, but usually shortened)
- Object: None written (but belongs to window object)

#### Example 2:
```javascript
console.log('Test');
```
**Your answer:** 
- Type: 
- Object: 

#### Example 3:
```javascript
document.write('Test');
```
**Your answer:** 
- Type: 
- Object: 

#### Example 4:
```javascript
Math.random();
```
**Your answer:** 
- Type: 
- Object: 

#### Example 5:
```javascript
window.alert('Test');
```
**Your answer:** 
- Type: 
- Object: 

**Reflection:** Write 2-3 sentences explaining the difference between a function and a method.

---

## Task 3: Reading Code Out Loud

**Goal:** Practice translating code into plain English.

### Instructions:
For each line of code, write what it means in plain English, as if explaining to someone who has never seen code before.

#### Example (Done for you):
```javascript
console.log('Starting program');
```
**Plain English:** "Ask the console object to use its log method to display the message 'Starting program' in the developer console."

### Now You Try:

#### Code 1:
```javascript
alert('Welcome!');
```
**Your plain English explanation:**

---

#### Code 2:
```javascript
document.write('Hello World');
```
**Your plain English explanation:**

---

#### Code 3:
```javascript
console.log('Testing my code');
```
**Your plain English explanation:**

---

#### Code 4:
```javascript
document.write('The End');
```
**Your plain English explanation:**

---

**Bonus Challenge:** Explain this one:
```javascript
window.alert('Bonus!');
```
**Your plain English explanation:**

---

## Task 4: Spot the Syntax Errors

**Goal:** Learn to identify common mistakes in code.

### Instructions:
Each code sample below has one or more errors. Find the errors and explain what's wrong. Then write the corrected version.

#### Example 1:
```javascript
alert('Hello)
```
**Error found:** Missing closing quote before the closing parenthesis  
**Corrected code:** `alert('Hello');`

---

#### Example 2:
```javascript
console.log('Test'
```
**Error found:**  
**Corrected code:**

---

#### Example 3:
```javascript
alert("Welcome to my site');
```
**Error found:**  
**Corrected code:**

---

#### Example 4:
```javascript
consol.log('Hello');
```
**Error found:**  
**Corrected code:**

---

#### Example 5:
```javascript
Alert('Testing');
```
**Error found:**  
**Corrected code:**

---

#### Example 6:
```javascript
document.write(Hello);
```
**Error found:**  
**Corrected code:**

---

#### Example 7:
```javascript
alert('First';
alert'Second');
```
**Errors found:**  
**Corrected code:**

---

## Task 5: Understanding Quotes

**Goal:** Practice using single and double quotes correctly.

### Part A: Which Quotes Should You Use?
For each message, decide if you should use single quotes `' '` or double quotes `" "`, and explain why.

#### Message 1: 
```
I'm learning JavaScript
```
**Best choice:** Single or Double?  
**Why?**  
**Your code:**

---

#### Message 2: 
```
She said "Hello" to me
```
**Best choice:** Single or Double?  
**Why?**  
**Your code:**

---

#### Message 3: 
```
Welcome to my page
```
**Best choice:** Single or Double?  
**Why?**  
**Your code:**

---

#### Message 4: 
```
It's "super" cool!
```
**Best choice:** Single or Double?  
**Why?**  
**Your code:**

---

### Part B: Fix These Quote Problems

#### Problem 1:
```javascript
alert('I'm happy');
```
**Issue:** The apostrophe in "I'm" ends the string early!  
**Fixed code:**

---

#### Problem 2:
```javascript
console.log("He said "hi" to me");
```
**Issue:** The quotes inside confuse JavaScript!  
**Fixed code:**

---

## Task 6: Testing Code in the Browser

**Goal:** Practice using the browser console to test small pieces of code.

### Instructions:

1. Open any webpage in your browser
2. Press F12 to open Developer Tools
3. Click on the "Console" tab
4. Type each command below and press Enter
5. Record what happened

#### Test 1:
**Type this in console:**
```javascript
alert('Testing the console');
```
**What happened?**

---

#### Test 2:
**Type this in console:**
```javascript
console.log('Hello from console');
```
**What happened?**  
**Where did the message appear?**

---

#### Test 3:
**Type this in console:**
```javascript
2 + 2
```
**What happened?**  
**What did the console show?**

---

#### Test 4:
**Type this in console:**
```javascript
'Hello' + ' ' + 'World'
```
**What happened?**  
**Interesting, right? JavaScript can combine text!**

---

#### Test 5 - Error Time:
**Type this in console (it has an error!):**
```javascript
consol.log('Test');
```
**What happened?**  
**What did the error message say?**  
**What was wrong?**

---

**Reflection:** Write 2-3 sentences about how the browser console can help you learn JavaScript.

---

## Task 7: What Happens Behind the Scenes?

**Goal:** Think about the complexity hidden behind simple functions.

### Instructions:
For each function call, brainstorm at least 3 things the JavaScript engine might need to do "behind the scenes" to make it work.

#### Example (Done for you):
```javascript
alert('Hello');
```
**Behind the scenes, JavaScript probably:**
1. Creates a popup window element
2. Adds the text "Hello" to the popup
3. Adds an "OK" button
4. Displays it on top of the page
5. Waits for user to click
6. Removes the popup when clicked

---

#### Your Turn - Example 1:
```javascript
console.log('Testing');
```
**Behind the scenes, JavaScript probably:**
1. 
2. 
3. 

---

#### Your Turn - Example 2:
```javascript
document.write('Welcome');
```
**Behind the scenes, JavaScript probably:**
1. 
2. 
3. 

---

**Reflection:** Why is it helpful that functions hide all this complexity from us?

---

## Task 8: Build Your Own Code Examples

**Goal:** Practice writing simple JavaScript statements from scratch.

### Instructions:
Write the JavaScript code for each task. Test them in a simple HTML file or in the browser console.

#### Task A:
Create an alert that says "Good morning!"

**Your code:**

---

#### Task B:
Create a console message that says "JavaScript is awesome"

**Your code:**

---

#### Task C:
Use document.write to add "Welcome to my website!" to a page

**Your code:**

---

#### Task D:
Create three consecutive alerts that tell a short story (like "Once upon a time", "there was a coder", "who loved JavaScript")

**Your code:**

---

#### Task E:
Create a program that:
1. Shows an alert with a greeting
2. Logs a message to the console
3. Writes something to the page

**Your complete code:**

---

## Task 9: Pattern Recognition

**Goal:** Recognize common patterns in JavaScript code.

### Instructions:
Look at these code examples. What pattern do you notice?

#### Group 1:
```javascript
alert('message');
console.log('message');
document.write('message');
```

**Pattern I notice:**

---

#### Group 2:
```javascript
console.log('one');
Math.random();
window.alert('two');
```

**Pattern I notice:**

---

#### Group 3:
```javascript
'Hello'
"Hello"
'Welcome'
"Welcome"
```

**Pattern I notice:**

---

**Reflection:** How do patterns help you understand code?

---

## Task 10: Create a Reference Guide

**Goal:** Create your own quick-reference guide for future use.

### Instructions:
Create a one-page reference guide that includes:

1. **The three output methods:**
   - Function name
   - What it does
   - Example code

2. **Common syntax rules:**
   - Quotes
   - Parentheses
   - Semicolons
   - Dot notation

3. **Function vs Method:**
   - Definition of each
   - Example of each

4. **Common errors to avoid**

**Format:** You can handwrite this or type it in a document. Make it colorful and easy to read!

**Tip:** Keep this reference guide handy while you learn JavaScript!

---

## Challenge Task: The Syntax Puzzle

**Goal:** Put together a complete working program from scrambled parts.

### Instructions:
Below are parts of a program, but they're all mixed up. Put them in the correct order and fix any syntax errors to create a working program.

**Scrambled parts:**
```
</body>
document.write('Learning JavaScript is fun!');
console.log('Program complete');
<title>My Program</title>
alert('Welcome to my program!');
</html>
<head>
<!DOCTYPE html>
<script>
console.log('Program started');
</head>
</script>
<html>
<body>
<h1>My JavaScript Program</h1>
```

### Your Task:
1. Rearrange these parts in the correct order
2. Make sure HTML structure is correct
3. Make sure JavaScript code is in the right place
4. Test it to ensure it works!

**Your complete, corrected code:**

---

## Reflection and Self-Check

Before moving to the next lesson, make sure you can answer YES to these questions:

- [ ] I can identify the parts of a function call
- [ ] I understand the difference between a function and a method
- [ ] I know what dot notation means
- [ ] I can spot common syntax errors in code
- [ ] I understand why we use quotes around text
- [ ] I know what happens when I call alert(), console.log(), and document.write()
- [ ] I can read simple JavaScript code and explain what it does

---

## Tips for These Tasks

1. **Test everything** - Try each code example in the browser
2. **Use the console** - It's your best tool for learning
3. **Read error messages** - They tell you what's wrong
4. **Practice explaining** - If you can explain code, you understand it
5. **Take breaks** - Learning new syntax takes mental energy
6. **Keep your reference guide handy** - You'll use it a lot!

---

## Need Help?

**Having trouble?**
- Review the lesson material again
- Pay attention to every character (quotes, parentheses, dots, semicolons)
- Test in the browser console to see immediate results
- Remember: JavaScript is picky about spelling and capitalization
- Ask questions - syntax can be confusing at first!

**Remember:** You're learning to read a new language. It takes practice, but you'll get better at recognizing patterns with every example you see!

---

## Moving Forward

Once you complete these tasks, you're ready for Lesson 01 where you'll put all this knowledge together and start building real programs!

You now understand:
- ✅ What functions are and how to call them
- ✅ What objects and methods are
- ✅ How to read JavaScript syntax
- ✅ Common patterns and errors to watch for

**Next up:** Actually writing your first JavaScript programs!
