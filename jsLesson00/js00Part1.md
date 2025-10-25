# Lesson 00: What is Programming?

## Welcome to Programming!

Before we start writing JavaScript, let's understand what programming actually is and how it works.

### What is a Computer Program?

A **program** is a set of instructions that tells a computer what to do. Just like a recipe tells you step-by-step how to bake a cake, a program tells the computer step-by-step how to complete a task.

**Examples of programs you use every day:**
- Your web browser (Chrome, Firefox, Edge)
- Apps on your phone (Instagram, TikTok, Games)
- Video games
- Microsoft Word or Google Docs
- Your phone's calculator

All of these were created by programmers who wrote instructions for the computer to follow.

---

## How Do Computers Think?

Here's an important truth: **Computers are incredibly fast, but also incredibly dumb.**

### What Computers Are Good At:
- Following exact instructions very quickly
- Doing the same thing millions of times without getting bored
- Remembering large amounts of information
- Performing calculations instantly

### What Computers Are Bad At:
- Understanding unclear instructions
- Making assumptions about what you meant
- Thinking creatively
- Handling tasks that aren't precisely defined

**This means:** When you write code, you must be extremely specific and precise. The computer will do EXACTLY what you tell it to do, not what you MEANT to tell it to do.

---

## Programming Languages: Talking to Computers

Computers only understand **machine code** - instructions made up of 1s and 0s that look like this:

```
01001000 01100101 01101100 01101100 01101111
```

That's really hard for humans to read and write! So programmers created **programming languages** that are easier for humans to understand.

### Low-Level Languages
- Closer to machine code
- More difficult for humans to read
- Give you more direct control over the computer
- Examples: Assembly language, Machine code

**Example of low-level code:**
```assembly
MOV AX, 5
ADD AX, 3
```

The example above is **assembly language**, which is a type of **low-level programming language**.

Here’s what it’s doing:

```asm
MOV AX, 5   ; Move the number 5 into the AX register (a small storage location inside the Central Processing Unit - the Brain 🧠)
ADD AX, 3   ; Add 3 to whatever value is in AX (so AX now holds 8)
```

### Breakdown:

* **`MOV`** = move or copy a value into a register (like a variable in CPU memory)
* **`AX`** = a specific CPU register used for arithmetic and data storage
* **`ADD`** = perform addition between a register and a value

### In plain English:

This code is roughly equivalent to this in a high-level language like Python:

```python
AX = 5
AX = AX + 3
```

While Python or JavaScript are designed for humans to read easily, assembly directly manipulates CPU registers and operations, which makes it **faster and more efficient** but **harder to read and write**.

---

### ⚙️ Assembly

**Assembly isn’t one single language** like C or C#.
It’s actually **a family of languages**, each one tied to a specific **CPU type (architecture)**.

So:

> 💬 Assembly **is** a language — but it’s not universal.
> It’s more like a **dialect** that depends on the hardware you’re talking to.


### Here’s why:

* Every kind of processor (Intel, AMD, ARM, etc.) has its own **instruction set** — the list of binary operations it understands.
* Assembly is just a **human-readable version** of those binary instructions.
* That means **each processor has its own version of assembly language.**

---

### 🔍 Example:

| Processor                      | Assembly Example     | Notes                                         |
| ------------------------------ | -------------------- | --------------------------------------------- |
| **x86 (Intel/AMD)**            | `MOV AX, 5`          | Common on PCs                                 |
| **ARM (phones, Raspberry Pi)** | `MOV R0, #5`         | Different register names and syntax           |
| **MIPS**                       | `ADDI $t0, $zero, 5` | Used in some embedded systems, older consoles |

Each one *does the same kind of thing* — moving numbers into registers — but the **syntax and instruction names** are different.

---

### 🧩 Compare to C/C#:

* **C and C#** are **high-level** and portable — the same code can run on many computers once it’s compiled.
* **Assembly** is **hardware-specific** — code written for Intel won’t run on an ARM chip without being rewritten.

---

### High-Level Languages
- Closer to human language
- Easier for humans to read and write
- The computer translates them into machine code
- Examples: JavaScript, Python, Java, C++

**Example of high-level code (JavaScript):**
```javascript
let sum = 5 + 3;
```

Much easier to understand, right? **JavaScript is a high-level language**, which makes it great for beginners!

### How Does the Translation Happen?

When you write JavaScript code, the computer doesn't understand it directly. Here's what happens:

1. **You write** JavaScript code (high-level)
2. **The browser's JavaScript engine** translates it into machine code (low-level)
3. **The computer's processor** executes the machine code
4. **You see** the result in your browser

```
Your Code → JavaScript Engine → Machine Code → Computer Executes It
```

This translation happens so fast that it feels instant!

---

## What is JavaScript?

JavaScript is a **high-level programming language** designed specifically for making web pages interactive and dynamic.

### Why JavaScript?

1. **Runs in Every Browser**
   - No special software needed
   - Works on Windows, Mac, Linux, phones, tablets

2. **Beginner-Friendly**
   - Easier to learn than many other languages
   - You can see results immediately in your browser

3. **Powerful and Practical**
   - Used by professional developers every day
   - Can build real websites, apps, and games

4. **In-Demand Skill**
   - One of the most popular programming languages in the world
   - Valuable for future careers

### JavaScript is Not Java!

**Common Confusion:** Despite similar names, JavaScript and Java are completely different languages!

- **JavaScript**: Runs in web browsers, makes websites interactive
- **Java**: Runs on computers and servers, different syntax and purpose

They're as different as "car" and "carpet" - they just happen to share some letters!

---

## Understanding Code Execution: Step by Step

Let's look at a simple example of how a computer executes code:

```javascript
alert('Hello');
alert('How are you?');
alert('Goodbye!');
```

### What Happens:
1. Computer starts at the **first line**
2. Executes: Shows alert box with "Hello"
3. **Waits** for you to click OK
4. Moves to the **second line**
5. Executes: Shows alert box with "How are you?"
6. **Waits** for you to click OK
7. Moves to the **third line**
8. Executes: Shows alert box with "Goodbye!"
9. **Finishes** - no more instructions

**Key Concept:** Code executes **from top to bottom**, one line at a time (usually).

### Try to Predict:
What order will these messages appear?
```javascript
alert('Third');
alert('First');
alert('Second');
```

**Answer:** They'll appear in order: "Third", "First", "Second" - because that's the order they're written in! The computer doesn't care about the words inside; it just follows the order of the instructions.

---

## What Can You Build With Code?

As a beginner, you'll start simple, but programming skills can help you create amazing things:

### Starting Out (Weeks 1-4):
- Interactive buttons that respond to clicks
- Forms that check if information is valid
- Simple calculators
- Dynamic content that changes

### Getting Better (Months 2-6):
- Complete websites with multiple pages
- Quiz games and interactive activities
- Photo galleries and slideshows
- To-do lists and task managers

### Advanced (After lots of practice):
- Full web applications (like Gmail or Facebook)
- Mobile apps
- Video games
- Automation tools that save you hours of work

**Remember:** Every expert programmer was once a beginner. The key is to keep practicing and learning!

---

## The Programming Mindset

Programming is a skill that improves with practice. Here are important mindsets to develop:

### 1. Be Patient
- Code rarely works perfectly the first time
- Debugging (fixing errors) is a normal part of programming
- Even experienced programmers make mistakes

### 2. Be Precise
- Spelling matters: `alert` works, but `alrt` doesn't
- Capitalization matters: `Alert` is different from `alert`
- Syntax matters: Quotes, parentheses, and semicolons all have meaning

### 3. Be Curious
- Don't be afraid to experiment
- Try changing things to see what happens
- Learn from errors - they teach you a lot!

### 4. Think Logically
- Break big problems into smaller steps
- Think about the order of operations
- Consider: "What do I want to happen, and what instructions will make that happen?"

### 5. Use Your Resources
- Google error messages
- Read documentation
- Ask questions
- Look at examples and try to understand them

---

## Key Vocabulary

Before we start coding, let's define some important terms:

- **Program**: A set of instructions that tells a computer what to do
- **Code**: The text you write in a programming language
- **Programming Language**: A formal language used to write instructions for computers
- **High-Level Language**: A programming language that's easier for humans to read (like JavaScript)
- **Low-Level Language**: A programming language that's closer to machine code
- **Execute**: When the computer runs/performs your code instructions
- **JavaScript Engine**: The part of the browser that translates and runs JavaScript code
- **Syntax**: The rules and structure of how to write code in a programming language

---

## Testing Your Understanding

Before moving to the next lesson, make sure you can answer these questions:

1. What is a computer program?
2. Why do we use high-level programming languages instead of machine code?
3. What is JavaScript?
4. Is JavaScript the same as Java?
5. In what order does the computer execute code?
6. What happens when the JavaScript engine encounters your code?

**If you can answer these, you're ready to move forward!**

---

## Summary

In this lesson, you learned:
- ✅ A program is a set of instructions for a computer
- ✅ Computers are fast but need very specific instructions
- ✅ High-level languages (like JavaScript) are easier for humans to write
- ✅ The browser's JavaScript engine translates your code into machine code
- ✅ Code executes from top to bottom, one instruction at a time
- ✅ Programming requires patience, precision, and practice

### Next Lesson Preview:
In the next lesson, we'll learn about **how to read JavaScript code** - understanding functions, objects, and syntax before we start writing our own programs.

---

## A Note to Students

Programming might seem confusing at first. That's completely normal! Learning to code is like learning a new language. At first, everything feels strange and overwhelming. But with practice, it becomes more natural.

**Remember:**
- Everyone starts as a beginner
- Mistakes are how you learn
- Take breaks when you're frustrated
- Celebrate small victories
- Keep practicing, even when it's hard

You've got this! 🚀
