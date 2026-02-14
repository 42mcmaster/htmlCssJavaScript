# HTML06: Box Model & Spacing

## Lesson Overview

This complete lesson covers the CSS Box Model and spacing properties, plus display and positioning concepts. Students learn how to control element spacing, layout, and positioning using CSS properties.

**ODE Competency:** 6.5.8 — Format Website Layout

**Duration:** 20-30 minutes instruction + activities

**Topics:**
- 06a: Box Model (margin, padding, border, width/height, box-sizing)
- 06b: Display & Positioning (block, inline, inline-block, position values)

---

## File Organization

### Instructional Materials
- **html06_Slides.md** — MARP presentation (10 slides with ASCII diagrams)
- **html06_StudyGuide.md** — Vocabulary, cheat sheet, debugging checklist
- **html06_Walkthrough.md** — Hands-on guided walkthrough (4 parts)

### Solutions & Examples
- **html06_Walkthrough_Solutions.html** + **.css** — Complete walkthrough demo
- **html06_DIYTask_Solutions.html** + **.css** — Professional example project

### Student Tasks

#### Task 06a: Box Model
- **html06a_Task.html** — Incomplete task (students fill in CSS)
- **html06a_Task_Solutions.html** + **.css** — Teacher solution

#### Task 06b: Display & Positioning
- **html06b_Task.html** — Incomplete task (students complete HTML & CSS)
- **html06b_Task_Solutions.html** + **.css** — Teacher solution

### Independent Project
- **html06_DIYTask.md** — Full project specification with rubric
- **html06_DIYTask_Solutions.html** + **.css** — Example solution

### Assessment
- **html06_Gimkit.csv** — 30 Gimkit quiz questions
- **html06_GoogleQuiz.csv** — 30 Google Quiz questions

---

## Teaching Flow

### 1. Introduction (10 minutes)
- Use html06_Slides.md with MARP
- Show box model diagram
- Explain padding vs margin conceptually

### 2. Guided Walkthrough (15 minutes)
- Work through html06_Walkthrough.md
- Have students open Walkthrough_Solutions.html
- Demonstrate DevTools box model inspection
- Complete "Try This" exercises together

### 3. Task 06a (15 minutes)
- Students complete html06a_Task.html
- Emphasize box-sizing: border-box
- Use DevTools to verify spacing
- Review with html06a_Task_Solutions

### 4. Task 06b (15 minutes)
- Students complete html06b_Task.html
- Focus on display and position properties
- Create fixed header/footer layout
- Review with html06b_Task_Solutions

### 5. Independent Project (1-2 class periods)
- Assign html06_DIYTask.md
- Students build card component + page layout
- Emphasize professional appearance
- Grade using provided rubric

### 6. Assessment
- Use Gimkit CSV for quick review game
- Use GoogleQuiz CSV for formal assessment
- Both files have 30 questions covering all content

---

## Learning Objectives

Students will be able to:
- [ ] Understand the four layers of the box model (content, padding, border, margin)
- [ ] Apply padding and margin properties correctly
- [ ] Use box-sizing: border-box to prevent width calculation issues
- [ ] Understand display property values (block, inline, inline-block, none)
- [ ] Understand position property values (static, relative, absolute, fixed)
- [ ] Create multi-column layouts using display and position
- [ ] Create fixed headers and footers
- [ ] Use DevTools to inspect and debug box model issues
- [ ] Build professional card components with proper spacing
- [ ] Design responsive page layouts

---

## Key Concepts

### Box Model
```
┌─ Margin (exterior) ──────┐
│ ┌─ Border ────────────┐  │
│ │ ┌─ Padding ──────┐  │  │
│ │ │  Content       │  │  │
│ │ └────────────────┘  │  │
│ └────────────────────┘  │
└──────────────────────────┘
```

### Display Values
- **block**: Full width, new line (div, p)
- **inline**: Flows with text, width/height ignored (span, a)
- **inline-block**: Inline flow + respects width/height
- **none**: Completely hidden

### Position Values
- **static**: Normal flow (default)
- **relative**: Relative to normal position, still in flow
- **absolute**: Relative to positioned parent, removed from flow
- **fixed**: Relative to viewport, stays when scrolling

---

## DevTools Tips

To inspect box model:
1. Right-click any element
2. Select "Inspect"
3. Look at Styles tab
4. Scroll to Box Model section
5. Colors show:
   - Blue = Content
   - Green = Padding
   - Yellow = Border
   - Orange = Margin

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Width too wide | Add `box-sizing: border-box;` to `*` |
| Header overlaps content | Add `margin-top` or `padding-top` to main |
| Position: absolute breaks layout | Parent must have `position: relative/absolute/fixed` |
| Can't see fixed element | Check `z-index` value |
| Margin not working | Check if parent has `display: flex` or `grid` |

---

## Assessment Questions

**Gimkit:** 30 questions (auto-format for Gimkit)
**GoogleQuiz:** 30 questions (auto-format for Google Forms)

Topics covered:
- Box model terminology
- Property purposes and values
- CSS calculations and formulas
- Display and position values
- DevTools usage
- Common misconceptions

---

## Extensions & Challenges

### Beginner
- Change padding/margin values and observe changes in DevTools
- Create cards with different color schemes
- Add hover effects to buttons

### Intermediate
- Build responsive layout with media queries
- Create gradient backgrounds
- Add CSS transitions and animations
- Build multi-level navigation

### Advanced
- Implement CSS Grid for card layouts
- Build complex dashboard with multiple sections
- Create sticky headers that scroll with content
- Implement CSS custom properties (variables)

---

## Resources

- **MDN Box Model:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model
- **MDN Display:** https://developer.mozilla.org/en-US/docs/Web/CSS/display
- **MDN Position:** https://developer.mozilla.org/en-US/docs/Web/CSS/position

---

## File Checklist

- [x] html06_Slides.md — Presentation
- [x] html06_StudyGuide.md — Study materials
- [x] html06_Walkthrough.md — Guided practice
- [x] html06_Walkthrough_Solutions.html + .css
- [x] html06a_Task.html + Solutions
- [x] html06b_Task.html + Solutions
- [x] html06_DIYTask.md + Solutions
- [x] html06_Gimkit.csv — 30 questions
- [x] html06_GoogleQuiz.csv — 30 questions

**Total: 16 files | 2,771 lines of content**

---

## Notes

All files use:
- Valid HTML5 and CSS3
- Semantic HTML elements
- `box-sizing: border-box;` for all projects
- Comprehensive code comments
- Professional styling practices
- Mobile-responsive design where applicable

No external dependencies required. All files are self-contained and ready to use.
