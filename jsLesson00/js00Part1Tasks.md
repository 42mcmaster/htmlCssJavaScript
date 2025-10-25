# Lesson 00 Tasks: Understanding Programming Foundations

These tasks will help you understand programming concepts before you start writing code. Some tasks are hands-on, others are thinking exercises.

---

## Task 1: The Algorithm Challenge (No Computer Needed!)

**Goal:** Understand that programming is about giving precise, step-by-step instructions.

### Instructions:
1. Get a piece of paper and a pencil
2. Write **exact instructions** for making a peanut butter and jelly sandwich
3. Be as specific as possible - assume the person following your instructions has never made a sandwich before
4. Include every single step, no matter how obvious

### Example Start:
```
1. Walk to the kitchen counter
2. Pick up the bread bag with your right hand
3. Open the twist tie on the bread bag
4. Remove two slices of bread
5. Place the bread slices on the counter...
```

### Challenge:
- Trade instructions with a classmate
- Try to follow their instructions EXACTLY as written
- Can you make the sandwich if they forgot a step?
- Did they specify which hand to use? How much peanut butter?

### Reflection:
Write 2-3 sentences about what this taught you about how computers need instructions.

**💡 Key Lesson:** Computers are even pickier than humans! If you forget a step or aren't specific enough, the program won't work.

---

## Task 2: Code Order Prediction

**Goal:** Understand that code executes from top to bottom.

### Instructions:
Look at each example below and predict what order the messages will appear in. Write your predictions on paper, then move to Task 3 where you'll test them.

#### Example A:
```javascript
alert('A');
alert('B');
alert('C');
```
**Your prediction:** What order will the alerts appear?

#### Example B:
```javascript
alert('Third');
alert('First');  
alert('Second');
```
**Your prediction:** What order will the alerts appear?

#### Example C:
```javascript
console.log('Starting');
alert('Middle');
console.log('Ending');
```
**Your prediction:** 
- What appears first?
- What appears last?
- Where do you need to look to see console messages?

#### Example D:
```javascript
document.write('Welcome');
alert('to');
document.write('JavaScript!');
```
**Your prediction:** What do you think will happen?

**Keep these predictions!** You'll test them in the next task.

---

## Task 3: Testing Your Predictions

**Goal:** See how code executes in real-time and verify your predictions from Task 2.

### Instructions:

1. Create a file called `order-test.html`
2. Set up a basic HTML structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Testing Code Order</title>
</head>
<body>
    <h1>Code Order Test</h1>
    
    <script>
        // Test Example A here
    </script>
</body>
</html>
```

3. Copy Example A from Task 2 into the script tags
4. Open the file in your browser
5. Record what actually happened - were your predictions correct?
6. Repeat for Examples B, C, and D (one at a time)

### Reflection Questions:
Write down your answers:
1. Did the code always execute from top to bottom?
2. Were any of your predictions wrong? Why?
3. What happened when you mixed `alert()`, `console.log()`, and `document.write()`?
4. Why did you need to press F12 for some messages but not others?

---

## Task 4: High-Level vs Low-Level Translation

**Goal:** Understand how high-level languages make programming easier.

### Part A: The Hard Way (Low-Level)
Imagine you had to tell a computer how to display "Hello!" on screen using only basic commands:

```
1. Set pixel at position (100, 50) to black
2. Set pixel at position (101, 50) to black
3. Set pixel at position (100, 51) to black
4. Set pixel at position (100, 52) to black
5. Set pixel at position (100, 53) to black
... (hundreds more lines to draw one letter!)
```

### Part B: The Easy Way (High-Level)
Now look at how JavaScript does the same thing:
```javascript
document.write('Hello!');
```

One simple line!

### Your Task:
Write a short paragraph (3-5 sentences) explaining:
- Why high-level languages like JavaScript are better for programmers
- What work the JavaScript engine does for you behind the scenes
- Why someone still needs to write low-level code (hint: who writes the JavaScript engine?)

---

## Task 5: Vocabulary Matching

**Goal:** Make sure you understand the key terms.

### Instructions:
Match each term with its correct definition by writing the letter next to the number.

**Terms:**
1. Program
2. JavaScript Engine
3. High-Level Language
4. Execute
5. Syntax
6. Machine Code
7. Method

**Definitions:**
A. The rules for how to write code in a programming language
B. When the computer runs/performs your code
C. A set of instructions that tells a computer what to do
D. The part of the browser that translates JavaScript into machine code
E. Instructions made of 1s and 0s that the computer understands directly
F. A programming language that's easier for humans to read and write
G. A function that belongs to an object

**Bonus:** Write a sentence using three of these terms correctly.

---

## Task 6: Spot the Language Level

**Goal:** Practice identifying high-level vs low-level code.

### Instructions:
Look at each code example below. Decide if it's HIGH-LEVEL or LOW-LEVEL.

#### Example 1:
```javascript
alert('Welcome!');
```
**Your answer:** High or Low?  
**Why?**

#### Example 2:
```
MOV AX, 15
ADD AX, 10  
INT 21h
```
**Your answer:** High or Low?  
**Why?**

#### Example 3:
```javascript
let age = 25;
console.log(age);
```
**Your answer:** High or Low?  
**Why?**

#### Example 4:
```
01001000 01100101 01101100 01101100 01101111
```
**Your answer:** High or Low?  
**Why?**

---

## Task 7: Real-World Programming Examples

**Goal:** Connect programming concepts to things you use every day.

### Instructions:
For each example below, explain what instructions the program might include:

#### Example 1: Calculator App
When you press "2 + 2 =" on a calculator, what instructions might the program execute?

**Write at least 3 steps:**
1. 
2. 
3. 

#### Example 2: Instagram "Like" Button
When you tap the heart icon, what instructions might the program execute?

**Write at least 3 steps:**
1. 
2. 
3. 

#### Example 3: Google Search
When you type something and press Enter, what instructions might the program execute?

**Write at least 4 steps:**
1. 
2. 
3. 
4. 

**Reflection:** Are you surprised by how many steps might be happening behind the scenes for simple actions?

---

## Task 8: Predicting Errors

**Goal:** Start thinking about what could go wrong in code.

### Instructions:
For each scenario, predict what might happen and why.

#### Scenario 1:
```javascript
alert('Hello)
```
**What do you think will happen?**  
**Why?**

#### Scenario 2:
```javascript
alrt('Hello');
```
**What do you think will happen?**  
**Why?**

#### Scenario 3:
```javascript
Alert('Hello');
```
**What do you think will happen?**  
**Why? (Remember: JavaScript is case-sensitive!)**

#### Scenario 4:
```javascript
alert('First');
alert('Second')
alert('Third');
```
**What do you think will happen?**  
**Why?**

**Don't test these yet!** Just practice predicting. You'll learn about debugging errors in future lessons.

---

## Challenge Task: The Programmer's Mindset

**Goal:** Reflect on what you've learned about thinking like a programmer.

### Instructions:
Answer these reflection questions in complete sentences:

1. **Precision:** Why is it important to be extremely specific when writing code?

2. **Logic:** Give an example of something you do every day that follows step-by-step logic (like getting ready for school).

3. **Problem-Solving:** What should you do when your code doesn't work the first time?

4. **Learning:** What's one thing you learned about how computers work that surprised you?

5. **Future Goals:** What's one thing you're excited to build with JavaScript?

**Bonus:** Write about a time when you had to give someone very specific instructions for something. How is that similar to programming?

---

## Reflection and Self-Check

Before moving to the next lesson, make sure you can answer YES to these questions:

- [ ] I understand that programs are sets of instructions for computers
- [ ] I know why high-level languages are easier than machine code
- [ ] I understand that JavaScript is a high-level programming language
- [ ] I know that code executes from top to bottom (usually)
- [ ] I understand that the JavaScript engine translates code for the computer
- [ ] I'm developing patience for learning something new
- [ ] I know that making mistakes is part of learning to code

---

## Tips for These Tasks

1. **Take your time** - These are thinking exercises, not races
2. **Write things down** - It helps your brain process the concepts
3. **Discuss with classmates** - Explaining concepts helps you learn them
4. **Ask questions** - If something doesn't make sense, ask!
5. **Make connections** - Relate programming to things you already know

---

## Need Help?

**If you're stuck:**
- Re-read the relevant section in the lesson
- Talk through the problem out loud
- Draw a picture or diagram
- Ask yourself: "What is the computer being asked to do?"
- Remember: You're learning a new way of thinking, and that takes time!

**Remember:** These foundational concepts are the building blocks for everything else you'll learn. Take the time to really understand them!
