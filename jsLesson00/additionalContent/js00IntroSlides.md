---
marp: true
theme: default
paginate: true
---

# What is Programming?

**Welcome to the World of Code**

---

## What is a Computer Program?

A **program** is a set of instructions that tells a computer what to do.

**Just like:**
- A recipe tells you how to bake a cake
- A GPS tells you how to get somewhere
- Sheet music tells you what notes to play

**Examples you use daily:**
- Web browsers, phone apps, video games
- Calculator, Microsoft Word, Instagram

---

## How Do Computers Think?

### Computers are incredibly fast... but also incredibly dumb 🤖

**Good at:**
- Following exact instructions very quickly
- Doing repetitive tasks millions of times
- Remembering huge amounts of information

**Bad at:**
- Understanding unclear instructions
- Making assumptions
- Thinking creatively

**Key takeaway:** You must be extremely specific when writing code!

---

## Programming Languages

Computers only understand **machine code** (1s and 0s):
```
01001000 01100101 01101100 01101100 01101111
```

That's really hard for humans! So we created **programming languages**.

---

## Low-Level vs High-Level Languages
### Low-Level (Assembly)
```asm
MOV AX, 5
ADD AX, 3
```
- Closer to machine code
- Harder for humans
- More control over hardware

---

### High-Level (JavaScript, Python)
```javascript
let sum = 5 + 3;
```

```python
sum = 5 + 3
``` 
- Closer to human language
- Easier to read and write
- Faster to develop

---

## What is JavaScript?

A **high-level programming language** for making websites interactive

**Why JavaScript?**
✅ Runs in every browser (no special software)
✅ Beginner-friendly
✅ Powerful and practical
✅ In-demand job skill

**Important:** JavaScript ≠ Java
(They're as different as "car" and "carpet"!)

---

## How Code Executes

```javascript
alert('Hello');
alert('How are you?');
alert('Goodbye!');
```

**Execution order:**
1. Line 1: Shows "Hello" → waits for OK
2. Line 2: Shows "How are you?" → waits for OK  
3. Line 3: Shows "Goodbye!" → waits for OK
4. Done!

**Code runs from top to bottom, one line at a time**

---

## The Programming Mindset

**Be Patient** → Code rarely works perfectly the first time

**Be Precise** → Spelling, capitalization, and syntax all matter

**Be Curious** → Experiment and learn from errors

**Think Logically** → Break big problems into small steps

**Use Resources** → Google, documentation, examples

---

## Key Vocabulary

**Program** → Instructions for a computer

**High-Level Language** → Easy for humans (like JavaScript)

**Execute** → When the computer runs your code

**Syntax** → The rules for writing code

**JavaScript Engine** → Translates your code into machine code

---

## Summary: Part 1

✅ Programs are instructions for computers
✅ Computers need very specific instructions  
✅ High-level languages are easier for humans
✅ JavaScript makes websites interactive
✅ Code executes top to bottom
✅ Programming takes patience and practice

---

# 🛑 Break Time!

**Stand up, stretch, grab water**

---

# Part 2: Reading JavaScript Code

**Before we write code, we need to understand what we're reading**

---

## What Are Functions?

A **function** is pre-written code that performs a specific task

**Think of it like a microwave:**
- You press "Start"
- Food heats up
- You don't need to know how it works inside

**Functions in JavaScript:**
```javascript
alert('Hello!');  
console.log('Testing');  // console is the object, log is the function
document.write('Hi there!');  //document is the object
```

---

## Anatomy of a Function Call

```javascript
alert('Hello, World!');
```

Breaking it down:
```
alert  ('Hello, World!')  ;
  ↓            ↓           ↓
Name      Input/Data    End
```

1. **Function Name** → `alert`
2. **Parentheses** → `()` (tells JS to run it)
3. **Argument** → `'Hello, World!'` (the input)
4. **Semicolon** → `;` (end of statement)

---

## Objects and Methods

```javascript
document.write('Hello!');
```
---

## 🧩 What is an Object?

**Object** → A container with related data *and* the actions it can perform
Like a car (the object):

* Methods: start(), stop(), honk()

### ✅ Example Object: `console`

```javascript
console.log("This is a message");
console.error("This is an error");
```

---

## 🔧 What is a Method?

**Method** → A function that belongs to an object

```javascript
document.write('Hello!');
   ↓        ↓
Object    Method
```

Reading:

> “Hey **document**, use your **write** method to add ‘Hello!’ to the page.”

---

## 📝 More Examples

### ✅ `alert` method of the `window` object 
(you dont' have to type "window" because it's the default object of JavaScript)

```javascript
alert("Hi!");
```

### ✅ `Math.random()`

```javascript
let number = Math.random();
```

### ✅ `Date` object with methods

```javascript
let now = new Date();  // make a Date object and store it in a variable
now.getFullYear();  // use a built-in method on that object to pull the year
```

---

## Summary

**Object** = A thing in JavaScript that can hold:
- data (called properties)
- functions (called methods)

**Method** = a function that lives *inside* an object
* You call a method with the dot:

```javascript
object.method();
```
**( )** Runs the method - like the start button

---

```

If you want, I can make a second slide that visually compares **object vs method vs function** with little diagrams.
```



## The Dot Notation

The dot (`.`) connects objects to their methods:

```javascript
object.method()
```

**Examples:**
```javascript
console.log('message');    // Console object, log method
Math.random();             // Math object, random method  
document.write('Hi!');     // Document object, write method
```

Think: "Hey [object], do your [method] action!"

---

## Three Output Functions

### 1. alert() → Popup Message
```javascript
alert('This is a popup!');
```

### 2. console.log() → Developer Console
```javascript
console.log('Check the console!');
```

### 3. document.write() → On the Page
```javascript
document.write('Appears on page!');
```

---

## Understanding Strings

A **string** is text data, surrounded by quotes:

```javascript
'Hello'              // String
"Hello"              // Also a string
'123'                // String (not a number!)
'Hello World!'       // Can have spaces
```

**Single or double quotes both work** → Pick one and be consistent!

**Why quotes?**
- Tell JavaScript: "This is text, not code"

---

## Common Syntax Errors

### ❌ Misspelling
```javascript
alrt('Hello');     // Should be: alert
```

### ❌ Missing Quotes  
```javascript
alert(Hello);      // Should be: alert('Hello');
```

### ❌ Mismatched Parentheses
```javascript
alert('Hello';     // Missing )
```

### ❌ Mixing Quotes
```javascript
alert('Hello");    // Don't mix ' and "
```

---

## Reading Code Practice

```javascript
console.log('Program starting');
alert('Welcome!');
document.write('Hello!');
console.log('Done');
```

**Line by line:**
1. Display "Program starting" in console
2. Show popup with "Welcome!"
3. Write "Hello!" on the page
4. Display "Done" in console

---

## Code Patterns to Recognize

| Code | Pattern | Type |
|------|---------|------|
| `alert('Hi')` | `function(data)` | Function |
| `console.log('Hi')` | `object.method(data)` | Method |
| `document.write('Hi')` | `object.method(data)` | Method |

**Key difference:** Methods belong to objects (have the dot!)

---

## Summary: Part 2

✅ **Functions** perform specific tasks
✅ **Methods** are functions that belong to objects
✅ **Objects** contain related data and functions
✅ **Dot notation** (`.`) connects objects to methods
✅ **Parentheses** `()` run functions
✅ **Quotes** `' '` mark text
✅ **Semicolons** `;` end statements

---

## Key Takeaways

**Remember:**
- Every expert was once a beginner
- Mistakes are how you learn
- Be patient with yourself
- Practice makes progress
- You've got this! 🚀

**Next:** Time to write your first JavaScript programs!

---

## Questions to Check Understanding

1. What's the difference between a function and a method?
2. Why do we need quotes around text?
3. What does the dot (`.`) mean in code?
4. What do parentheses do?
5. In what order does code execute?

**Can you answer these? You're ready to code!**
