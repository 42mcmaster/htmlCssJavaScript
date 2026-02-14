# HTML14 Capstone Implementation Guide

## Quick Start for Instructors

### Week 1 (Sessions 1-2): Planning & HTML Structure

**Session 1: Project Planning (2 hours)**
- Introduce capstone project overview (html14_CapstoneSpec.md)
- Students choose theme from 10 suggestions or propose their own
- Students complete html14_PlanningTemplate.md
- Draw wireframes on paper for all 4 pages
- Verify teacher approval of planning before proceeding

**Session 2: HTML Structure (2 hours)**
- Students create 4 HTML files (index, about, services, contact)
- Add proper semantic structure and meta tags
- Implement navigation menu across all pages
- Add placeholder content and images
- Share example solution (html14_ExampleSolution_*.html) as reference
- Teacher checkpoint: Validate all HTML files

### Week 2 (Sessions 3-4): CSS & JavaScript

**Session 3: CSS & Responsive Design (2 hours)**
- Students create external styles.css file
- Apply Google Fonts (reference example solution)
- Implement mobile-first CSS with media queries
- Test responsiveness on desktop, tablet, mobile
- Create hamburger menu for mobile
- Reference html14_ExampleSolution_styles.css (~1,099 lines)
- Teacher checkpoint: Check media queries are working

**Session 4: JavaScript & Forms (2 hours)**
- Students create script.js file
- Implement form validation (5 fields minimum)
- Add error messaging and success feedback
- Optional: Add additional interactivity
- Reference html14_ExampleSolution_script.js for patterns
- Test form validation with edge cases
- Teacher checkpoint: Form validation works correctly

### Week 3 (Sessions 5-6): Testing & Deployment

**Session 5: Testing & Validation (1 hour)**
- Students validate HTML with W3C Validator
- Students validate CSS with W3C Validator
- Test in 2+ different browsers
- Run Lighthouse audit (target 80+)
- Fix accessibility issues
- Test all links and forms
- Teacher checkpoint: All files pass validation

**Session 6: Deployment & Finalization (1 hour)**
- Create GitHub repository (public)
- Deploy to GitHub Pages
- Create README.md for repo
- Complete html14_SelfAssessment.md
- Final polish and testing
- Submit URLs to instructor
- Teacher checkpoint: Site is live on GitHub Pages

---

## File Organization by Purpose

### For Instructors

| File | Purpose | Size | When to Use |
|------|---------|------|-----------|
| html14_CapstoneSpec.md | Full project brief | 321 lines | Before project starts |
| html14_Rubric.md | Grading criteria | 165 lines | Use for grading |
| README.md | Overview document | ~200 lines | Project introduction |
| Example Solution Files | Reference/modeling | 1,740 lines | Throughout project |

### For Students

| File | Purpose | Size | When to Use |
|------|---------|------|-----------|
| html14_PlanningTemplate.md | Planning worksheet | 360 lines | Before coding (Session 1) |
| html14_CapstoneSpec.md | Project requirements | 321 lines | Entire project (reference) |
| Example Solution Files | Code reference | 1,740 lines | When stuck (Sessions 2-4) |
| html14_SelfAssessment.md | Self-evaluation | 204 lines | Before submission (Session 6) |

---

## Example Solution Breakdown

The example website demonstrates all requirements:

### Mountain View Coffee Co. - Home Page
**File**: html14_ExampleSolution_index.html (183 lines)
- ✅ Semantic HTML5 structure
- ✅ Navigation menu (links to all 4 pages)
- ✅ Hero section with CTA button
- ✅ Feature cards in CSS grid
- ✅ Product showcase
- ✅ Testimonials section
- ✅ Footer with links

### Mountain View Coffee Co. - About Page
**File**: html14_ExampleSolution_about.html (231 lines)
- ✅ Company history and story
- ✅ Team member profiles (4 members)
- ✅ Mission statement
- ✅ Core values section
- ✅ Timeline of company milestones
- ✅ Multiple images with alt text

### Mountain View Coffee Co. - Menu Page
**File**: html14_ExampleSolution_menu.html (311 lines)
- ✅ Product categories (espresso, cold, pastries, specialty)
- ✅ **REQUIRED TABLE**: Coffee comparison guide
  - 6 columns: Drink Name, Espresso, Milk, Foam, Strength, Best For
  - 6 rows of data
  - Styled with borders, colors, hover effects
- ✅ Menu items with descriptions and prices
- ✅ Multiple article sections

### Mountain View Coffee Co. - Contact Page
**File**: html14_ExampleSolution_contact.html (214 lines)
- ✅ Contact information cards
- ✅ **REQUIRED FORM**: Contact form with
  - Name field (text input)
  - Email field (email input)
  - Phone field (tel input)
  - Subject dropdown (6 options)
  - Message textarea
  - Newsletter checkbox
  - Submit button
- ✅ Additional connection options
- ✅ Map placeholder image

### Stylesheet
**File**: html14_ExampleSolution_styles.css (1,099 lines)
- ✅ CSS Variables for colors, fonts, spacing
- ✅ Mobile-first approach
- ✅ Media queries:
  - Tablet: @media (max-width: 768px)
  - Mobile: @media (max-width: 480px)
- ✅ Responsive components:
  - Sticky header with hamburger menu
  - Flexible grid layouts
  - Responsive images
  - Mobile-friendly forms
- ✅ Professional styling:
  - Google Fonts (Montserrat, Merriweather)
  - Color palette (Brown #8B4513, Gold #D4AF37, Cream #E8DCC8)
  - Smooth transitions and hover effects
  - Accessibility-friendly contrast

### JavaScript
**File**: html14_ExampleSolution_script.js (347 lines)
- ✅ Form validation functions:
  - validateName(): 2+ characters
  - validateEmail(): regex pattern check
  - validatePhone(): 10+ digits (optional field)
  - validateSubject(): dropdown required
  - validateMessage(): 10+ characters
- ✅ Error message display
- ✅ Real-time validation (blur events)
- ✅ Success message and form reset
- ✅ Hamburger menu toggle
- ✅ Smooth scrolling for links
- ✅ Accessibility (Escape key handling)
- ✅ Fully commented code

---

## How to Present to Students

### Session 1 Opening (Capstone Introduction)
> "Over the next 5-6 weeks, you're going to build a complete website from start to finish. This is your capstone project—it brings together everything you've learned this semester. You'll plan it, design it, code it, test it, and deploy it live on the web. This website will be something you can show to colleges, employers, or clients. Let's look at what that means..."

### Showing the Example Solution
> "Here's an example of what an excellent capstone looks like. It's a website for a local coffee shop. Notice how it has 4 pages all linked together. The styling is professional. It works great on phones, tablets, and computers. The form validates your input before you submit. This is what I want you to aim for. But remember—you can use any theme you want. You could do a restaurant, a portfolio, a nonprofit, anything you're interested in. The example is just to show you the structure and how everything works together."

### Checkpoint Language
- **Session 1**: "Before you write any code, I need to see your plan. Show me you've thought through the structure, the design, and what content goes on each page."
- **Session 2**: "Your HTML should be clean, semantic, and valid. All pages should link together, and the navigation should work on every page."
- **Session 3**: "Your design should look professional. It should work great on phones and computers. Test it on actual devices, not just your desktop."
- **Session 4**: "Your form needs to validate input and give users feedback. Show me that you understand how JavaScript can interact with the DOM."
- **Session 5**: "Everything needs to validate and pass tests. Check for errors, test in different browsers, and fix any accessibility issues."
- **Session 6**: "Your website should be live on the web. Anyone should be able to visit your GitHub Pages URL and see your work."

---

## Grading Workflow

### Session 6 Submission
Students should submit:
1. GitHub Pages URL (live website)
2. GitHub Repository URL (public repo)
3. Completed html14_SelfAssessment.md
4. Completed html14_PlanningTemplate.md (proof of planning)

### Grading Checklist
```
□ HTML passes W3C validator (0 errors) - use html14_Rubric.md
□ CSS passes W3C validator (0 errors)
□ Website live on GitHub Pages
□ 4+ pages with navigation
□ Responsive design works (tested on mobile)
□ Form validation works
□ Table present with data
□ Images have alt text
□ Semantic HTML throughout
□ Custom CSS (not just Bootstrap)
□ JavaScript interactivity present
□ SEO basics (title, meta description)
□ Accessibility basics (contrast, keyboard nav)
□ Student self-assessment completed
□ README in GitHub repo
```

### Quick Scoring
- Use the rubric categories (20-20-15-15-10-10-10 = 100 points)
- Each category has clear descriptors (Excellent, Good, Satisfactory, Needs Work, Missing)
- Add notes for student feedback
- Allow extra credit for advanced features

---

## Common Student Questions

**Q: Can I use Bootstrap?**
A: Yes, but your project must include custom CSS that you wrote. Bootstrap can be supplementary, not your primary stylesheet.

**Q: Do I have to use the example theme (coffee shop)?**
A: No! The coffee shop is just an example. You can choose any of the 10 themes listed in the spec, or propose your own.

**Q: Does my form need to actually send emails?**
A: No. Your form just needs to validate input and show success/error messages. You don't need a backend.

**Q: How much content should I write?**
A: Write meaningful content that matches your theme. At least 2-3 paragraphs on About, descriptions for services, a real menu or portfolio.

**Q: What if I get stuck?**
A: Look at the example solution! It shows you how to structure HTML, style with CSS, and validate forms with JavaScript. The code is commented to help you understand.

**Q: What happens if my site doesn't validate?**
A: You'll get deductions on the rubric. Use the W3C validator (validator.w3.org) to find errors and fix them. Most errors are simple (missing closing tags, typos, etc.).

---

## Success Indicators

By the end of the project, students should:

1. **Understand website planning** - Can explain why planning comes before coding
2. **Build semantic HTML** - Can use semantic tags correctly and understand why they matter
3. **Write responsive CSS** - Can create designs that work on all screen sizes
4. **Implement form validation** - Can validate user input and provide feedback
5. **Test and debug** - Can use browser tools to find and fix problems
6. **Deploy to web** - Can use GitHub Pages to publish websites
7. **Practice accessibility** - Can explain why accessibility matters and implement basics
8. **Reflect on learning** - Can identify strengths and areas for growth in self-assessment

---

## Differentiation Ideas

### For Advanced Students
- Add multi-step form wizard
- Implement local storage to save form data
- Create image gallery or carousel
- Add dark mode toggle
- Use CSS Grid for advanced layouts
- Implement smooth scroll animations

### For Struggling Students
- Provide HTML structure template
- Offer pre-written CSS variables
- Simplify form to 3 fields instead of 5
- Allow simplified table (3 columns instead of 6)
- Pair with peer mentor
- Extended time for testing/validation

### For Different Interests
- **Artist**: Portfolio website
- **Musician**: Band/music website
- **Athlete**: Sports team website
- **Gamer**: Gaming community website
- **Entrepreneur**: Small business website
- **Activist**: Nonprofit/cause website

---

## Timing Notes

- **Total estimated time**: 10-12 hours of lab work
- **Compression**: Can be done in 5 sessions (cut testing/polish time slightly)
- **Extension**: Can be expanded to 8-10 sessions for more in-depth work
- **Realistic for** 16-18 year olds with 10 weeks of prerequisite learning

---

## Success Story Template

When students complete this project, they can say:

> "I planned and built a complete 4-page website that works on phones, tablets, and computers. My site has semantic HTML, custom CSS, and JavaScript form validation. I tested it in multiple browsers, validated the code, and deployed it live on the web using GitHub Pages. I can show my work to colleges or employers as a portfolio piece."

That's a genuinely impressive statement for a high school student!

---

Created for: Medina County Career Center, CTE Web Design
Last Updated: February 2024
