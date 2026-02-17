# Sprint 04 Study Guide: Troubleshooting, QA & Project Management

## Vocabulary (25 Terms)

### Troubleshooting (8 terms)
1. **Troubleshooting** - A systematic process of identifying and fixing problems in a website or application
2. **Top-Down Troubleshooting** - Starting with the big picture and narrowing down to specific details
3. **Bottom-Up Troubleshooting** - Starting with small code details and working up to the big picture
4. **Follow the Path** - Tracing data flow from a user action through functions to display
5. **Spot the Differences** - Comparing a working version to a broken version to identify changes
6. **Systematic Approach** - Following a logical, organized method rather than random guessing
7. **Root Cause** - The underlying reason why a problem occurs
8. **Debugging** - The process of finding and fixing errors in code

### Quality Assurance (8 terms)
9. **Quality Assurance (QA)** - Formal, systematic testing before launching a website to ensure it works correctly
10. **Test Case** - A detailed instruction documenting how to test one specific feature, including expected results
11. **Usability Testing** - Testing by real users to see if they can use the site effectively
12. **UAT (User Acceptance Testing)** - Final testing where the client/stakeholders approve the project
13. **Acceptance Criteria** - Conditions that must be met for a project to be approved
14. **Cross-Browser Testing** - Testing a website in multiple browsers (Chrome, Firefox, Safari, Edge)
15. **Regression Testing** - Testing to ensure that new changes don't break existing features
16. **Bug Report** - A documented record of a problem, including how to reproduce it and its impact

### Project Management (9 terms)
17. **Project Scope** - What is included and NOT included in the project
18. **Stakeholder** - A person who has an interest in the project's success (client, team member, user)
19. **Target Audience** - The specific group of people who will use the website
20. **Design Brief** - A one-page summary of the project's goal, scope, timeline, and budget
21. **Budget** - The amount of money allocated for the project
22. **Timeline** - The schedule showing when the project starts, ends, and key phases
23. **Milestone** - A key checkpoint or deliverable in the project timeline
24. **Critical Path** - The longest sequence of tasks that determines the minimum project duration
25. **Deliverable** - A final product or output that must be completed (webpage, design file, test report)

---

## Cheat Sheets

### Troubleshooting Methods Comparison Table

| Method | Start Point | Best For | Example |
|--------|------------|----------|---------|
| **Top-Down** | Big picture (whole site) | General problems, "nothing works" | Website won't load at all |
| **Bottom-Up** | Small details (code) | Finding specific bugs, syntax errors | Button click doesn't trigger |
| **Follow the Path** | User action (click/form) | Interactive features not working | Form doesn't submit |
| **Spot the Differences** | Comparison (before/after) | After recent changes | Navbar disappeared after update |

**Quick Decision Guide:**
- Site completely broken? → Top-Down
- Can't find the bug? → Bottom-Up
- Feature doesn't work? → Follow the Path
- Something changed? → Spot the Differences

---

### Test Case Template

```
Test ID:              TC-001
Description:          Brief description of what is being tested
Steps:                1. [First action]
                      2. [Second action]
                      3. [Continue until feature complete]
Expected Result:      What SHOULD happen if working correctly
Actual Result:        What ACTUALLY happened during testing
Pass/Fail:            PASS or FAIL
Notes:                Any additional information
```

**Example:**
```
Test ID:              TC-003
Description:          Submit contact form with valid data
Steps:                1. Navigate to Contact page
                      2. Enter "John Smith" in Name field
                      3. Enter "john@email.com" in Email field
                      4. Enter "Question about services" in Message
                      5. Click Submit button
Expected Result:      Form submits, confirmation message appears
Actual Result:        Form submits, confirmation message appears
Pass/Fail:            PASS
```

---

### Project Planning Checklist

- [ ] **Scope Defined:** What IS and ISN'T included?
- [ ] **Stakeholders Identified:** Who's involved? Who needs to approve?
- [ ] **Target Audience Defined:** Who uses this site?
- [ ] **Design Brief Created:** One-page summary completed?
- [ ] **Budget Set:** Total cost determined?
- [ ] **Timeline Created:** Start and end dates set?
- [ ] **Milestones Listed:** Key checkpoints identified?
- [ ] **Critical Path Identified:** Which tasks can't be delayed?
- [ ] **Acceptance Criteria Written:** What does "done" look like?
- [ ] **Team Assigned:** Who builds what?

---

## ODE Competencies Covered

### Outcome 2.9: Project Management
Students will demonstrate the ability to plan, organize, and manage a web design project from initial concept through completion.

### Outcome 2.11: Troubleshooting
Students will systematically identify and resolve problems in websites using logical, documented methods.

### Outcome 2.12: Quality Assurance
Students will conduct formal testing using test cases and acceptance criteria to ensure websites meet requirements.

---

## 5 Common Exam Mistakes

### Mistake 1: Random Guessing Instead of Systematic Troubleshooting
**Wrong:** "The button doesn't work. Let me change random things until it works."
**Right:** "The button doesn't work. I'll use Follow the Path to trace: user click → event → function → DOM."

### Mistake 2: Confusing QA Testing with Usability Testing
**Wrong:** QA and usability testing are the same thing.
**Right:** QA tests if it *works technically*. Usability tests if *users can use it*.

### Mistake 3: Not Writing Test Cases
**Wrong:** "I'll just test everything in my head."
**Right:** Document test cases with Test ID, Steps, Expected Result, Actual Result.

### Mistake 4: Forgetting "What's NOT in Scope"
**Wrong:** Scope is only what you're building.
**Right:** Scope includes what you're NOT building (prevents scope creep).

### Mistake 5: No Milestones or Timeline
**Wrong:** "We'll start building and finish when it's done."
**Right:** Break into milestones (Week 1: Design, Week 2: Development, Week 3: QA, etc.)

---

## Practice Questions (15 Questions with Answers)

### Question 1
A developer's website displays correctly in Chrome but shows layout problems in Safari. Which troubleshooting method would be MOST appropriate?

a) Top-Down (start with whole site)
b) Bottom-Up (start with code)
c) Follow the Path (trace user action)
d) Spot the Differences (compare working vs broken)

**Answer: d) Spot the Differences** - You're comparing the same site in two different browsers. Spot the Differences directly compares working vs broken versions.

---

### Question 2
A student's form submission button doesn't trigger the JavaScript function. Which troubleshooting method would BEST help trace the problem?

a) Top-Down
b) Bottom-Up
c) Follow the Path
d) Spot the Differences

**Answer: c) Follow the Path** - This is an interactive feature. Follow the Path traces: user click → event listener → function → result.

---

### Question 3
An entire website fails to load. Which troubleshooting method should you use FIRST?

a) Bottom-Up (check syntax)
b) Top-Down (check if site loads)
c) Follow the Path (trace the button)
d) Spot the Differences (compare versions)

**Answer: b) Top-Down** - A completely broken site requires starting with the big picture: Is the server running? Is the internet working? Does anything load?

---

### Question 4
Which of the following is the PRIMARY difference between QA testing and usability testing?

a) QA is faster than usability testing
b) QA tests if it works; usability tests if users can use it
c) Usability testing is optional; QA is required
d) They test the same thing with different names

**Answer: b) QA tests if it works; usability testing if users can use it** - QA = technical correctness. Usability = user experience.

---

### Question 5
What is the main purpose of a test case in QA?

a) To write down your feelings about the website
b) To document exactly how to test one feature with expected results
c) To replace the need for a Design Brief
d) To speed up development

**Answer: b) To document exactly how to test one feature with expected results** - Test cases provide step-by-step instructions and expected outcomes for reproducible testing.

---

### Question 6
A test case documents that a login form should submit and show a "Success" message. During testing, the form submits but NO message appears. What should be marked in the Actual Result field?

a) PASS (because it submitted)
b) FAIL (because message didn't appear)
c) UNKNOWN (not sure what happened)
d) SKIP (test the next one instead)

**Answer: b) FAIL** - The expected result was not met. The test case is marked FAIL and the actual result is documented.

---

### Question 7
What is UAT (User Acceptance Testing)?

a) Automated testing by computers
b) Testing by the development team before launch
c) Final testing where the client/stakeholders approve the project
d) Testing on mobile devices only

**Answer: c) Final testing where the client/stakeholders approve the project** - UAT is when the actual users or clients test and sign off: "Yes, this meets our needs."

---

### Question 8
Which of the following is an example of acceptance criteria?

a) "The website should look nice"
b) "The website must load in under 3 seconds on all tested browsers"
c) "Students will really like this website"
d) "We'll know it's done when we say so"

**Answer: b) "The website must load in under 3 seconds on all tested browsers"** - Acceptance criteria are specific, measurable conditions. "Look nice" is too vague; "know it's done when we say" is not specific.

---

### Question 9
What is "project scope"?

a) How much the project costs
b) How long the project takes
c) What IS and ISN'T included in the project
d) Who will use the website

**Answer: c) What IS and ISN'T included in the project** - Scope defines boundaries. "We WILL build 5 pages" and "We WON'T add a shopping cart."

---

### Question 10
A client asks for features that aren't in the original agreement. This is an example of:

a) Good project management
b) Scope creep (uncontrolled growth)
c) Normal development
d) Acceptance criteria

**Answer: b) Scope creep** - When features keep getting added beyond the original scope, it's called scope creep. It causes delays and budget problems.

---

### Question 11
What is a "stakeholder" in a web design project?

a) A person who cuts down trees
b) Someone with an interest in the project's success
c) Only the person paying for the project
d) Only the person building the project

**Answer: b) Someone with an interest in the project's success** - Stakeholders include clients, team members, end users, and managers—anyone invested in the outcome.

---

### Question 12
Which of the following best describes "target audience"?

a) People who will see an advertisement
b) The specific group of people who will use the website
c) Anyone with an internet connection
d) The people building the website

**Answer: b) The specific group of people who will use the website** - Target audience defines WHO the site is for (age, location, tech level, needs).

---

### Question 13
A Design Brief should include ALL of the following EXCEPT:

a) Project goal and target audience
b) Scope (pages and features)
c) Timeline and budget
d) The developer's favorite color

**Answer: d) The developer's favorite color** - Design Briefs include project info, scope, timeline, budget, and success metrics—not personal preferences.

---

### Question 14
What is a "milestone" in project timeline?

a) A type of road marker
b) A key checkpoint or deliverable in the project
c) The amount of money spent
d) A browser update

**Answer: b) A key checkpoint or deliverable in the project** - Milestones mark progress: "Week 1: Design done," "Week 2: Code done," "Week 3: QA done."

---

### Question 15
Which tasks are on the "critical path" in a project?

a) The easiest tasks
b) The most expensive tasks
c) The longest sequence of tasks that determines minimum project time
d) The tasks you like doing most

**Answer: c) The longest sequence of tasks that determines minimum project time** - Critical path tasks cannot be delayed without delaying the entire project.

---

## Quick Reference: Exam Tips

**For Troubleshooting Questions:**
- Look for clues: "one browser only?" = Spot Differences; "whole site broken?" = Top-Down; "button click fails?" = Follow the Path
- Remember: Systematic > random guessing

**For QA Questions:**
- QA = technical correctness with test cases
- Usability = real users testing
- UAT = client approval
- Acceptance Criteria = the "done" definition

**For Project Management Questions:**
- Scope = what IS and ISN'T included
- Stakeholders = anyone invested
- Timeline = broken into milestones
- Critical Path = what can't be delayed
