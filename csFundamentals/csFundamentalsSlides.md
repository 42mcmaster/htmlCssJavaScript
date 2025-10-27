---
marp: true
theme: uncover
class: invert
paginate: true
---

# Computer Science Fundamentals
## Binary, ALU, and Registers

Understanding How Computers Think

---

## Why Binary?

**Binary is the language of computers**

Every operation—calculations, images, sounds, games—comes down to **0s and 1s**

- **1** = Electricity ON (HIGH voltage)
- **0** = Electricity OFF (LOW voltage)

---

## The Light Switch Principle

Think of a light switch:
- Only **two states**: ON or OFF

Computers work the same way!

This is called **binary** - a number system with only two digits: 0 and 1

---

## Why Not Decimal (0-9)?

**Benefits of Binary:**
1. **Reliability** - Easy to detect ON or OFF
2. **Speed** - Two-state systems switch incredibly fast
3. **Simplicity** - Simpler circuits = faster, cheaper, more reliable


---

#### Why Binary Beats Base 10 for Computers
**Physical Reality:**

- Easy to detect: ON vs OFF is simple; distinguishing 10 different voltage levels is nearly impossible with electrical noise
- Huge error margins: Binary signals can drift significantly and still be recognized correctly
- Fast switching: Flipping between 2 states is instant; adjusting to 10 precise levels is slow

---
**Engineering Practicality:**

- Simple circuits: Binary logic gates need a few transistors; decimal would need 10-100x more components
- Cheaper manufacturing: Binary transistors are easy to produce consistently; multi-state transistors would have high defect rates
- Less heat & power: Fewer components = less energy wasted = smaller, cooler, more efficient chips

---

**Reliability:**- 

- Fewer errors: Clear distinction between 0 and 1 means virtually no mistakes
- Already tried: Engineers built decimal computers in the 1940s-50s - they were expensive, unreliable, and quickly abandoned

**The Truth:**
- Binary isn't "natural" to computers - it's the only practical way to build reliable, fast, affordable electronics at scale

---


## Understanding Binary Numbers

### 📺 Watch: Binary Explained
https://www.youtube.com/watch?v=zDNaUi2cjv4

---

## Counting in Binary

```
Decimal → Binary
0       → 0
1       → 1
2       → 10    (Ran out of digits! New column)
3       → 11
4       → 100
5       → 101
6       → 110
7       → 111
8       → 1000
```
---

## 0 is a Real Value

**0 in binary = the number zero**

- It's an actual number with meaning
- It represents a specific state: "OFF" or "FALSE"
- It carries information

**null/undefined = no value at all**

- Means "there's nothing here"
- Represents missing or unknown data
- No information present

---

### Binary 0 (has meaning):

```javascript
let lightsOn = 0;  // Lights are OFF (definite state)
let score = 0;     // You have zero points (real value)
let balance = 0;   // Account has $0 (you're broke, but it's a known amount!)
```

### Very different from Null (no value):

```javascript
let lightsOn = null;     // Don't know if lights are on or off
let score = null;        // Score hasn't been set yet
let balance = undefined; // Account doesn't exist
```

---

## Light Switch Analogy

**Binary 0:**
- Switch is in the DOWN position
- You checked it - it's definitely OFF
- That's useful information!

**Null:**
- You never looked at the switch
- Don't know if it's up or down
- No information at all

---

## In Binary Math
```
0 + 1 = 1   ← 0 participates in the calculation
null + 1 = error or NaN ← null can't do math
```

**Binary storage:**
```
Register: 0000  ← Four zeros (contains the number 0)
Register: ----  ← Empty/uninitialized (no value)
```

---

## Binary Place Values

**Decimal:**
```
Thousands | Hundreds | Tens | Ones
1000      | 100      | 10   | 1
```

**Binary:**
```
Eights | Fours | Twos | Ones
8      | 4     | 2    | 1
```

Powers of 2 instead of powers of 10!

---

## Converting Binary to Decimal

**Example: 1011**

```
Position:  8s | 4s | 2s | 1s
Binary:     1 |  0 |  1 |  1
Values:     8 |  0 |  2 |  1
```

**Add them up:** 8 + 0 + 2 + 1 = **11 in decimal**

---

Think of it like language translation:
```
┌─────────────┐
│   Human     │  Types: "100"
│             │  Sees:  "100" 
└─────────────┘
      ↕️ (automatic conversion)
┌─────────────┐
│  Computer   │  Stores: 1100100
│             │  Processes: 1100100
└─────────────┘
```

---

## Binary Finger Counting

Count to **31 on one hand**!

**Assign each finger a value:**
- Thumb = 1
- Index = 2
- Middle = 4
- Ring = 8
- Pinky = 16

---

**Example - Show 7:**
- 7 = 4 + 2 + 1
- Put up: Middle, Index, Thumb
- Binary: 0111

---

## Where does this computing all take place? 

---

## The CPU Architecture

```
+--------------------------------+
|           CPU                  |
|                                |
|  +--------------------------+  |
|  | Control Unit (CU)        |  |
|  +--------------------------+  |
|  | Arithmetic Logic Unit    |  |
|  | (ALU)                    |  |
|  +--------------------------+  |
|  | Registers (AX, BX, etc.) |  |
|  +--------------------------+  |
+--------------------------------+
```

---

Let's check out this fairly complicated but fascinating video that breaks down the computer components: 
https://www.youtube.com/watch?v=d86ws7mQYIg

---

## What is an ALU?

**ALU = Arithmetic Logic Unit**

The part of the CPU that performs all calculations and logical operations

Think of it as a **super-fast calculator** built into the computer's brain

---

## How fast is super-fast?

- The ALU operates at the same speed as the CPU clock — typically measured in gigahertz (GHz).

- 1 GHz = 1 billion cycles per second.

- So, a 3.5 GHz CPU means the ALU can perform up to **3.5 billion** basic operations per second per core.

---


### What Can an ALU Do?

**Arithmetic Operations (Math)**
- Addition: 5 + 3 = 8
- Subtraction: 10 - 4 = 6
- Multiplication & Division

**Logic Operations (True/False)**
- **AND**: Are BOTH conditions true?
- **OR**: Is AT LEAST ONE true?
- **NOT**: Flip the answer
- **Comparisons**: Greater than, Equal to, Less than

---

## How the ALU Works

```
    Input A    Input B
       ↓          ↓
  ┌──────────────────┐
  │       ALU        │
  │                  │
  │  - Does math     │
  │  - Makes decisions│
  │  - Compares values│
  └──────────────────┘
           ↓
     Result/Answer
```

The ALU does this **millions of times per second**!

---

## Binary Addition in the ALU

**Example: 5 + 3**

```
   0101  (5 in binary)
 + 0011  (3 in binary)
  -----
   1000  (8 in binary)
```

Just like decimal addition, but with carrying!
The ALU does this automatically using electronic circuits.

---

## BREAK

---

## What are Registers?

**Registers** = Incredibly small, incredibly fast storage built into the CPU

Think of them as the CPU's **personal workspace** - a desk where you keep things you're working with 
**RIGHT NOW**

---

## Types of Registers

**General Purpose Registers**
- Temporary storage for data -- **Specialized MEMORY**

**Accumulator**
- Stores results from the ALU

**Program Counter**
- Tracks which instruction to run next

---

## How Much Can a Register Hold?

It depends on **bit size**:

- **8-bit register**: 0 to 255
- **16-bit register**: 0 to 65,535
- **32-bit register**: 0 to 4,294,967,295
- **64-bit register**: 0 to 18,446,744,073,709,551,615

More bits = larger numbers!

---

## 🧮 8-Bit Register Example

| Bit # | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|:------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Value | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| Power of 2 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Binary:** `00110000`  
**Calculation:** 32 + 16 = **48**  
**Decimal Value:** `48`
NOTE: decimal value is just one example of how this binary can be read by a computer!!

---

## Gaming Console Evolution

| Bits   | Console       | Registers | Power              |
|--------|---------------|-----------|-------------------|
| 8-bit  | NES           | ~3–5      | Simple 2D         |
| 16-bit | SNES/Genesis  | ~8–12     | Richer visuals    |
| 32-bit | N64/PS1       | ~16–32    | 3D worlds         |
| 64-bit | Switch/PS5    | 32+       | Realistic graphics|

**More bits = more power, realism, and speed**

---

## The Desk Analogy

**Without Registers (Slow):**
1. Walk to filing cabinet, get book
2. Walk back to desk
3. Walk to cabinet, get calculator
4. Walk back to desk
5. Finally start working! 😴

---

**With Registers (Fast):**
1. Everything already on your desk
2. Within arm's reach
3. Work super fast! ⚡

---

## The CPU Architecture

```
+--------------------------------+
|           CPU                  |
|                                |
|  +--------------------------+  |
|  | Control Unit (CU)        |  |
|  +--------------------------+  |
|  | Arithmetic Logic Unit    |  |
|  | (ALU)                    |  |
|  +--------------------------+  |
|  | Registers (AX, BX, etc.) |  |
|  +--------------------------+  |
+--------------------------------+
```

---

## The Computer Stack

```
┌──────────────┐
│   Software   │  ← Your code
├──────────────┤
│     CPU      │  ← Computer's brain
│   └─ ALU     │  ← Math & logic
├──────────────┤
│  Registers   │  ← Ultra-fast storage
├──────────────┤
│ Cache / RAM  │  ← Short-term memory
├──────────────┤
│  Hard Drive  │  ← Long-term storage
└──────────────┘
```

---

## A Simple Calculation: 7 + 5

**Step 1: Load Data**
- Register A ← 7 (0111)
- Register B ← 5 (0101)

**Step 2: ALU Performs Addition**
- 0111 + 0101 = 1100

**Step 3: Store Result**
- Register C ← 12 (1100)

---

## Visual Process

```
┌──────────────┐     ┌──────────────┐
│  Register A  │────→│              │
│   (7/0111)   │     │              │
└──────────────┘     │              │
                     │     ALU      │───→  Result
┌──────────────┐     │   (Adds      │     (12/1100)
│  Register B  │────→│    them)     │
│   (5/0101)   │     │              │
└──────────────┘     └──────────────┘
```

---

## Complex Example: (5 + 3) × 2

```
Step 1: Load 5 into Register A
Step 2: Load 3 into Register B
Step 3: ALU adds A + B → 8 (Register C)
Step 4: Load 2 into Register D
Step 5: ALU multiplies C × D → 16 (Register E)
Step 6: Final answer: 16
```

Computers break complex operations into simple steps!

---

## Connecting to JavaScript

When you write:
```javascript
let sum = 5 + 3;
```

**Behind the scenes:**
1. Number 5 → loaded into register
2. Number 3 → loaded into another register
3. ALU performs addition
4. Result (8) → stored in memory for `sum`
5. All in **nanoseconds** (billionths of a second)!

---

## Why This Matters

Understanding binary, ALU, and registers helps you:

1. ✅ Understand how computers work fundamentally
2. ✅ Make sense of number limits in programming
3. ✅ Appreciate computer speed
4. ✅ Debug better
5. ✅ Write more efficient code

---

## Key Vocabulary

- **Binary**: Number system using 0 and 1
- **Bit**: One binary digit (smallest unit of data)
- **Byte**: 8 bits (0-255)
- **ALU**: Performs calculations and logic
- **Register**: Super-fast CPU storage
- **CPU**: The computer's "brain"
- **RAM**: Main memory (slower than registers)

---

## Test Your Understanding

Can you answer these?

1. Why do computers use binary?
2. What is 1010 in decimal?
3. What does ALU stand for?
4. What are two types of ALU operations?
5. Why are registers so fast?
6. How do registers, ALU, and binary work together?

---

## Summary

✅ Computers use binary (0 and 1) - reliable and fast
✅ Binary uses powers of 2 instead of powers of 10
✅ ALU performs all calculations and logic
✅ Registers = super-fast CPU storage
✅ Your code → binary operations → registers + ALU
✅ All computing breaks down to these simple operations

---

## Remember

- These concepts build on each other
- Binary feels strange at first - that's normal!
- Practice makes perfect
- Every computer operation uses these principles
- **You're learning how computers think!**

---

## **Questions?**
