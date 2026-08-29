---
marp: true
theme: default
class: invert
paginate: true
---

# Sprint 04: Troubleshooting, QA & Project Management
## Exam Prep for CTE Web Design

---

<!-- _header: "Sprint 04a — Systematic Troubleshooting" -->

## Why Systematic Troubleshooting Matters

**The Problem:** Random guessing wastes time and misses the real issue.

**The Solution:** Follow a logical method to find problems faster.

### Key Principle
- Start with what you know
- Narrow down systematically
- Document what you find
- Verify your fix works

**Outcome 2.11:** Troubleshoot web applications using logical methods

---

## Method 1: Top-Down Troubleshooting

**Start with the BIG PICTURE, narrow down to details**

```
Does the site load at all?
    ↓ YES → Does a specific page load?
    ↓ NO  → Check server/hosting
              Check internet connection
    ↓ YES → Does a specific element display?
    ↓ NO  → Check CSS/layout
              Check HTML structure
    ↓ YES → Is the element functioning?
    ↓ NO  → Check JavaScript logic
```

**Best For:** General site problems, "nothing works"
**Time:** Fast initial diagnosis

---

## Method 2: Bottom-Up Troubleshooting

**Start with SMALLEST DETAILS, work up to big picture**

```
Check syntax (valid HTML/CSS/JS?)
    ↓
Check individual element (displays correctly?)
    ↓
Check page (all elements work together?)
    ↓
Check entire site (all pages function?)
```

**Best For:** Code-level problems, finding bugs
**Time:** More thorough, catches small issues

---

## Method 3: Follow the Path Troubleshooting

**Trace the DATA FLOW from start to finish**

```
User clicks button
    ↓
JavaScript event listener fires
    ↓
Function executes (check logic, variables)
    ↓
DOM updates (check selectors, changes)
    ↓
Element displays (check CSS, layout)
```

**Best For:** Interactive features, buttons/forms not working
**Time:** Systematic but focused

---

## Method 4: Spot the Differences

**Compare WORKING vs BROKEN version**

### Questions to Ask:
- What changed between versions?
- Did I edit HTML, CSS, or JavaScript?
- Are file paths correct?
- Are IDs and classes matching?
- Is there a typo in selectors?

**Best For:** After changes broke something, comparing pages
**Time:** Very fast if you know what changed

---

## When to Use Each Method

| Method | Start Point | Best For | Example |
|--------|------------|----------|---------|
| **Top-Down** | Big picture | Whole site broken | Site won't load |
| **Bottom-Up** | Code details | Finding specific bugs | Button doesn't click |
| **Follow the Path** | User action | Interactive features | Form not submitting |
| **Spot Differences** | Comparison | After changes | Navbar missing on one page |

**Pro Tip:** Use Top-Down first to identify the problem area, then switch to another method for details.

---

<!-- _header: "Sprint 04b — Testing & Quality Assurance" -->

## What is QA (Quality Assurance)?

**Definition:** Formal, systematic testing BEFORE launching a website

### Why QA Matters:
- Catches bugs before users find them
- Ensures all features work correctly
- Tests on multiple browsers and devices
- Prevents bad user experience
- Saves money (fixing bugs later = expensive)

**Outcome 2.12:** Conduct QA testing and create test cases

### QA vs "Just Testing"
- **QA:** Documented, organized, follows a plan
- **Just Testing:** Random clicking, hoping for the best

---

## Test Cases: What & How to Write Them

### What is a Test Case?
A detailed instruction for testing ONE feature or scenario

### Test Case Template:
```
Test ID:           TC-001
Description:       Login with valid credentials
Steps:             1. Open login page
                   2. Enter username
                   3. Enter password
                   4. Click Submit
Expected Result:   User logged in, redirected to dashboard
Actual Result:     [What REALLY happened during testing]
Pass/Fail:         [PASS or FAIL]
```

### Good Test Cases Are:
- Clear and specific (no confusion)
- Repeatable (same steps = same result)
- Independent (don't depend on other tests)
- Documented (for team reference)

---

## Usability Testing & UAT

### Usability Testing
**Real users test the site** (not the developers)
- Users don't know how you built it
- They find problems you missed
- They think differently than you

### UAT (User Acceptance Testing)
**Client/stakeholder signs off:** "Yes, this meets our needs"

### Key Difference:
- **QA Testing:** Does it work technically?
- **Usability Testing:** Can users use it? Do they like it?
- **UAT:** Does it meet business goals?

**Example:** Website calculates correctly (QA ✓) but users can't find the button (Usability ✗)

---

## Acceptance Criteria

**Definition:** The conditions that MUST be true for a project to be approved

### Example Acceptance Criteria:
- Site loads in under 3 seconds
- Works on Chrome, Firefox, Safari, Edge
- Mobile responsive (320px to 2560px)
- All forms submit without errors
- Client can edit homepage content
- Passes WCAG accessibility standards

### Why They Matter:
- Clear finish line (when are we done?)
- Client knows what to expect
- Prevents scope creep
- Test cases are built from these

---

<!-- _header: "Sprint 04c — Project Management Basics" -->

## Project Scope

**Definition:** What's INCLUDED and NOT INCLUDED in the project

### Scope Includes:
- Number of pages
- Features (forms, search, shopping cart)
- Design requirements
- Browser/device support
- Content (text, images, videos)

### Scope Does NOT Include:
- "Nice to have" features
- Features for "future updates"
- Things beyond the budget
- Work outside the timeline

### Why Scope Matters:
- Prevents scope creep (project keeps getting bigger)
- Clear expectations for everyone
- Realistic timelines and budgets
- Team knows what to build

---

## Stakeholders, Target Audience & Design Brief

### Stakeholders
**People invested in the project's success**
- Client/business owner
- End users
- Project manager
- Design/development team

### Target Audience
**WHO will use the website?**
- Age, location, tech level
- What problems does it solve for them?
- How do they interact with it?

**Example:** E-commerce site for college students = mobile-first, simple checkout, trendy design

---

## Design Brief

**One-page summary of the entire project**

### Design Brief Includes:
- **Project Name & Goal:** What's the website for?
- **Target Audience:** Who uses it?
- **Scope:** What pages/features?
- **Timeline:** When's it due?
- **Budget:** How much money?
- **Success Metrics:** How do we know it works?

### Real-World Example:
```
Client: Green Gardens Nursery
Goal: Online plant sales + customer education
Target: Homeowners 25-65, gardening enthusiasts
Pages: Home, Shop, Blog, Contact, About
Timeline: 6 weeks
Budget: $2,500
```

---

## Timeline, Milestones & Critical Path

### Timeline
**When will the project be completed?**
- Start date, end date
- Major phases

### Milestones
**Key checkpoints in the project**
```
Week 1: Design approved
Week 2: Homepage coded
Week 3: All pages coded
Week 4: QA testing begins
Week 5: Client review & fixes
Week 6: Launch
```

### Critical Path
**The longest sequence of tasks = minimum project time**

**Example:**
```
Client approval (3 days)
    → Design (5 days)
    → Development (10 days)  ← CRITICAL PATH (18 days total)
    → QA (3 days)
    → Launch (1 day)
```

Tasks on critical path = cannot be delayed or project is late

---

## Key Takeaways

### Troubleshooting (Outcome 2.11)
- Use logical methods, not random guessing
- Choose the right method for the problem
- Document what you find

### QA (Outcome 2.12)
- Test systematically with test cases
- Real users find different problems
- Get client sign-off with acceptance criteria

### Project Management (Outcome 2.9)
- Define scope clearly (what IS and ISN'T included)
- Know your audience and stakeholders
- Break work into milestones
- Identify the critical path

**Remember:** Good planning prevents problems. Good troubleshooting fixes them. Good QA catches them first.

---
