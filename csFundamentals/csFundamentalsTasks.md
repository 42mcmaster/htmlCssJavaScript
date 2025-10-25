# CS Fundamentals Tasks: Binary, ALU, and Registers

These hands-on tasks will help you understand how computers work at their most basic level. Some tasks use physical materials, others are thinking exercises, and some involve working with actual binary numbers.

---

## Task 1: Binary to Decimal Conversion Practice

**Goal:** Learn to convert binary numbers to decimal numbers.

### Instructions:
For each binary number, convert it to decimal. Show your work using the place value method.

#### Example (already done for you):
**Binary: 1011**
```
Place values:  8  |  4  |  2  |  1
Binary:        1  |  0  |  1  |  1
Values:        8  |  0  |  2  |  1
Sum: 8 + 0 + 2 + 1 = 11
```
**Answer: 11**

Now you try:

#### Problem 1: Binary 1001
```
Place values:  8  |  4  |  2  |  1
Binary:        
Values:        
Sum: 
```
**Your answer:**

#### Problem 2: Binary 1110
```
Place values:  8  |  4  |  2  |  1
Binary:        
Values:        
Sum: 
```
**Your answer:**

#### Problem 3: Binary 0101
```
Place values:  8  |  4  |  2  |  1
Binary:        
Values:        
Sum: 
```
**Your answer:**

#### Problem 4: Binary 1111
```
Place values:  8  |  4  |  2  |  1
Binary:        
Values:        
Sum: 
```
**Your answer:**

#### Challenge: Binary 10101
```
Place values:  16 |  8  |  4  |  2  |  1
Binary:        
Values:        
Sum: 
```
**Your answer:**

### Reflection:
Write 2-3 sentences explaining the process you used to convert binary to decimal. What pattern did you notice?

---

## Task 2: Decimal to Binary Conversion

**Goal:** Learn to convert decimal numbers to binary.

### Instructions:
Use the "subtraction method" to convert these decimal numbers to binary.

#### Example: Convert 13 to binary
```
Start with 13
- Largest power of 2 that fits: 8
- 13 - 8 = 5 remaining → Put a 1 in the 8s place
- Largest power of 2 that fits in 5: 4
- 5 - 4 = 1 remaining → Put a 1 in the 4s place
- Largest power of 2 that fits in 1: 1
- 1 - 1 = 0 remaining → Put a 1 in the 1s place
- Put 0s in unused places (2s)

Places:    8  4  2  1
Binary:    1  1  0  1

Answer: 1101
```

Now you try:

#### Problem 1: Convert 10 to binary
```
Start with 10
Show your work:




Answer in binary:
```

#### Problem 2: Convert 15 to binary
```
Start with 15
Show your work:




Answer in binary:
```

#### Problem 3: Convert 6 to binary
```
Start with 6
Show your work:




Answer in binary:
```

#### Challenge: Convert 25 to binary
```
Start with 25
Show your work:





Answer in binary:
```

### Verification:
Go back and convert your binary answers back to decimal to verify they're correct!

### Reflection:
Explain in your own words why we subtract powers of 2 to convert decimal to binary.

---

## Task 3: Binary Addition

**Goal:** Practice adding binary numbers just like the ALU does.

### Instructions:
Add these binary numbers. Remember the rules:
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 10 (write 0, carry 1)

#### Example (done for you):
```
   0101  (5 in decimal)
 + 0011  (3 in decimal)
  -----
   1000  (8 in decimal)
```

Now you try:

#### Problem 1:
```
   0110  (6 in decimal)
 + 0010  (2 in decimal)
  -----
   
```
**Your answer:**
**Check: What is this in decimal?**

#### Problem 2:
```
   0111  (7 in decimal)
 + 0001  (1 in decimal)
  -----
   
```
**Your answer:**
**Check: What is this in decimal?**

#### Problem 3:
```
   1010  (10 in decimal)
 + 0101  (5 in decimal)
  -----
   
```
**Your answer:**
**Check: What is this in decimal?**

#### Challenge:
```
   1111  (15 in decimal)
 + 0001  (1 in decimal)
  -----
   
```
**Your answer:**
**Check: What is this in decimal?**
**Note: This one is tricky! You'll need a 5th bit.**

### Reflection:
1. How is binary addition similar to decimal addition?
2. How is it different?
3. Why do you think the ALU can add binary numbers so quickly?

---

## Task 4: Build a Paper ALU

**Goal:** Create a physical model to understand how an ALU processes data.

### Materials Needed:
- 4 index cards or pieces of paper
- Markers or colored pencils
- Pencil and eraser

### Instructions:

#### Step 1: Create Input Registers (2 cards)
- Label one card "Register A"
- Label another card "Register B"
- Leave space to write numbers

#### Step 2: Create the ALU (1 card)
- Label it "ALU"
- Draw a large box in the center
- Write these operations in the box:
  - ADD (+)
  - SUBTRACT (-)
  - MULTIPLY (×)
  - COMPARE (>, <, =)

#### Step 3: Create Output Register (1 card)
- Label it "Register C (Result)"

#### Step 4: Arrange Your Components
Lay them out like this:
```
[Register A]    [Register B]
       ↓             ↓
         [   ALU    ]
              ↓
       [Register C]
```

#### Step 5: Test Your Paper ALU
Complete this table by writing values in the registers and performing operations:

| Register A | Register B | Operation | Register C (Answer) |
|------------|------------|-----------|---------------------|
| 8          | 2          | ADD       |                     |
| 10         | 4          | SUBTRACT  |                     |
| 6          | 3          | MULTIPLY  |                     |
| 12         | 5          | COMPARE > |                     |
| 7          | 7          | COMPARE = |                     |

#### Step 6: Try with Binary Numbers
Now try using BINARY numbers instead:

| Register A (Binary) | Register B (Binary) | Operation | Register C (Binary) | Check (Decimal) |
|---------------------|---------------------|-----------|---------------------|-----------------|
| 0101 (5)            | 0011 (3)            | ADD       |                     |                 |
| 1010 (10)           | 0101 (5)            | SUBTRACT  |                     |                 |
| 0100 (4)            | 0010 (2)            | MULTIPLY  |                     |                 |

### Reflection:
1. How does using physical cards help you understand what an ALU does?
2. Why do you think the ALU needs to get numbers from registers?
3. What would happen if you wanted to add three numbers together (like 5 + 3 + 2)? Explain the steps.

### Take a Photo:
Take a photo of your paper ALU setup with one of your completed calculations visible. You'll include this in your submission!

---

## Task 5: Trace a Complete Calculation

**Goal:** Follow the complete process of how registers and the ALU work together.

### Instructions:

For each problem, trace through every step of how the computer would perform the calculation. Show the data moving between registers and the ALU.

#### Example: Calculate 8 + 5
```
Step 1: Load 8 into Register A
        Register A now contains: 8 (binary: 1000)

Step 2: Load 5 into Register B
        Register B now contains: 5 (binary: 0101)

Step 3: ALU reads both registers
        Input A: 8 (1000)
        Input B: 5 (0101)

Step 4: ALU performs addition
        1000 + 0101 = 1101

Step 5: ALU stores result in Register C
        Register C now contains: 13 (binary: 1101)

Final Answer: 13
```

Now you trace these calculations:

#### Problem 1: Calculate 12 - 7
```
Step 1: Load ___ into Register A
        Register A now contains: ___ (binary: ____)

Step 2: Load ___ into Register B
        Register B now contains: ___ (binary: ____)

Step 3: ALU reads both registers
        Input A: ___ (____)
        Input B: ___ (____)

Step 4: ALU performs ___________
        Result in binary: ____

Step 5: ALU stores result in Register C
        Register C now contains: ___ (binary: ____)

Final Answer: ___
```

#### Problem 2: Calculate 9 + 6
```
Step 1:


Step 2:


Step 3:


Step 4:


Step 5:


Final Answer: ___
```

#### Problem 3: Calculate (4 + 3) × 2
This requires multiple steps because we need to do TWO operations!

```
Part 1: Calculate 4 + 3
Step 1: Load 4 into Register A
Step 2: Load 3 into Register B
Step 3: ALU reads both registers
Step 4: ALU performs addition
Step 5: Store result (___) in Register C

Intermediate result: ___

Part 2: Multiply result by 2
Step 6: Load result (___ ) into Register A
Step 7: Load 2 into Register B
Step 8: ALU reads both registers
Step 9: ALU performs multiplication
Step 10: Store final result in Register C

Final Answer: ___
```

### Create Your Own:
Design a calculation that requires at least THREE separate ALU operations:

**Your calculation:** _________________________

**Trace all the steps:**
```
Operation 1:




Operation 2:




Operation 3:




Final Answer: ___
```

### Reflection:
1. Why do complex calculations require multiple register operations?
2. What happens to intermediate results? Where are they stored?
3. Explain in your own words why computers need both registers AND an ALU.

---

## Summary and Self-Check

Before submitting your work, make sure you can confidently check YES to these statements:

- [ ] I can convert binary numbers to decimal
- [ ] I can convert decimal numbers to binary
- [ ] I can perform binary addition
- [ ] I understand what an ALU does and can name its operations
- [ ] I know what a register is and why registers are important
- [ ] I can trace through a calculation showing how registers and the ALU work together
- [ ] I understand how data flows between registers and the ALU
- [ ] I completed all five tasks with thoughtful answers and reflections

---

## Submission Guidelines

### What to Submit:

Edit this markdown file and ensure you do the following:

1. **All five completed tasks** with your answers filled in
2. **All reflection answers** - write complete sentences!
3. **Push to GitHub** in a subfolder called "csFundamentals" within you main "htmlCssJavaScript" repository


---

## Tips for Success

1. **Show your work** - Especially for conversions, showing steps helps you learn and helps me see your thinking
2. **Use the example** - Look at the completed examples when you get stuck
3. **Check your answers** - Convert back to verify binary/decimal conversions
4. **Be thorough in reflections** - These show your understanding beyond just calculations
6. **Ask questions** - If something doesn't make sense, ask before submitting!

---

## Need Help?

**If you're stuck:**

**For Binary Conversion:**
- Draw out the place values (16, 8, 4, 2, 1)
- Work right to left
- Check your answer by converting back

**For Binary Addition:**
- Remember: 1 + 1 = 10 (write 0, carry 1)
- Work right to left, just like decimal addition
- Verify by converting to decimal

**For ALU Operations:**
- Remember: ALU takes inputs from registers
- ALU performs one operation at a time
- ALU sends output to a register
- Draw boxes and arrows if it helps!

**For Tracing Calculations:**
- Take it one step at a time
- Show where each piece of data is at each step
- Remember registers hold the data while ALU does the work

**Remember:** These concepts are the foundation of ALL computing. Every device you use performs these operations billions of times per second. You're learning how computers actually work at the most fundamental level! 🚀