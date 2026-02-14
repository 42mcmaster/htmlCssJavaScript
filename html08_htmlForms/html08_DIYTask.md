# HTML Forms: Independent Project — Build a Multi-Section Survey

## Overview
Create a complete, professionally-styled survey form that demonstrates mastery of all form elements covered in Lesson 08. Your form should be interactive, accessible, and visually polished.

**Time Estimate:** 45-60 minutes
**Difficulty:** Intermediate

---

## Requirements

### Part 1: HTML Structure (25 points)

Your survey form MUST include:

1. **Form Container** (2 points)
   - `<form>` tag with `action="/submit-survey"` and `method="POST"`
   - Meaningful `<h1>` title

2. **Multiple Fieldsets** (5 points)
   - At least 4 `<fieldset>` elements
   - Each fieldset has a `<legend>` with a clear section name
   - Examples: Demographics, Preferences, Experience, Additional Info

3. **Text Inputs** (5 points)
   - Text input for name
   - Email input with validation
   - At least one other text input (city, company, etc.)
   - All with labels, placeholders, and appropriate `id/name` attributes

4. **Numeric/Date Inputs** (3 points)
   - At least one `type="number"` input
   - At least one `type="date"` input
   - Both with labels

5. **Radio Buttons** (3 points)
   - At least one group of 4+ radio buttons
   - Proper `name` grouping
   - Clear labels for each option

6. **Checkboxes** (3 points)
   - At least one group of 3+ checkboxes
   - Proper `name` grouping
   - Clear labels for each option

7. **Select Dropdown** (2 points)
   - At least one `<select>` with 4+ `<option>` elements
   - Placeholder option included

8. **Textarea** (2 points)
   - Multi-line text input with `rows` and `cols`
   - Placeholder text

### Part 2: CSS Styling (20 points)

1. **Page Layout** (3 points)
   - Responsive design (works on mobile and desktop)
   - Appropriate max-width (500-800px)
   - Centered with proper margins and padding
   - Clean background color or image

2. **Form Styling** (4 points)
   - White background (or light color)
   - Padding and rounded corners
   - Subtle shadow or border
   - Clear visual hierarchy

3. **Fieldset & Legend** (3 points)
   - Distinct styling for each fieldset
   - Clear, readable legend text
   - Proper spacing between sections

4. **Input Styling** (4 points)
   - Consistent padding and borders
   - Rounded corners
   - Full width (or appropriate width)
   - Focus state with color change or shadow
   - Distinct styling for different input types

5. **Label Styling** (2 points)
   - Bold font for standalone labels
   - Proper spacing above inputs
   - Clear association with inputs

6. **Button Styling** (2 points)
   - Submit button is visually prominent (different color)
   - Hover effects on buttons
   - Proper padding and font size
   - Optional: Reset button with different style

7. **Responsive Design** (2 points)
   - Uses media queries for mobile (max-width: 600px)
   - Buttons may stack on mobile
   - Text remains readable on all screens
   - Form controls scale appropriately

### Part 3: Accessibility & Usability (10 points)

1. **Accessibility** (5 points)
   - Every input has an associated `<label>`
   - Proper use of `for/id` attributes
   - Semantic HTML structure
   - `required` attribute on important fields

2. **User Experience** (5 points)
   - Clear, helpful placeholder text
   - Logical field order and grouping
   - Consistent spacing and alignment
   - Professional appearance

---

## Project Suggestions

Choose a survey topic that interests you:

- **Customer Satisfaction Survey** — Service feedback, product ratings, suggestions
- **Event Feedback Form** — Conference/workshop experience, sessions attended, suggestions
- **Product Interest Survey** — Product preferences, features, price point
- **Travel Survey** — Destination preferences, travel style, budget
- **Entertainment Survey** — Movie/music preferences, genres, recommendations
- **Health & Fitness Survey** — Exercise habits, dietary preferences, goals
- **Technology Survey** — Device preferences, software usage, tech interests
- **School/Course Survey** — Course feedback, learning preferences, suggestions

---

## Folder Structure

```
your-project/
  ├── index.html          (your survey form)
  ├── style.css           (external CSS stylesheet)
  └── README.md           (optional: brief description)
```

---

## Submission Checklist

- [ ] HTML file is valid (check with W3C Validator)
- [ ] External CSS file is linked correctly
- [ ] Form has all required elements (see Part 1 requirements)
- [ ] Form is styled professionally (see Part 2 requirements)
- [ ] Form is responsive (works on mobile and desktop)
- [ ] All inputs have associated labels
- [ ] Form looks clean and organized
- [ ] No console errors in browser developer tools
- [ ] Page title is descriptive
- [ ] Comments are included in code (optional but recommended)

---

## Code Quality Tips

1. **Use Comments** — Explain each section of your form
   ```html
   <!-- Contact Information Section -->
   <fieldset>
     <!-- fields here -->
   </fieldset>
   ```

2. **Proper Indentation** — Make code readable
   ```html
   <form>
     <fieldset>
       <label>Label text</label>
       <input type="text">
     </fieldset>
   </form>
   ```

3. **Descriptive IDs/Names** — Use clear, meaningful names
   ```html
   <input id="firstName" name="firstName">  <!-- Good -->
   <input id="f1" name="f1">               <!-- Bad -->
   ```

4. **CSS Organization** — Group related rules
   ```css
   /* Fieldset and legend */
   fieldset { ... }
   legend { ... }

   /* Inputs and controls */
   input { ... }
   textarea { ... }

   /* Buttons */
   button { ... }
   ```

---

## Grading Rubric (55 points total)

| Category | Points | Criteria |
|----------|--------|----------|
| **HTML Structure** | 25 | All form elements present, proper nesting, valid HTML5 |
| **CSS Styling** | 20 | Professional appearance, responsive, accessible |
| **Accessibility** | 5 | Labels, semantic HTML, required attributes |
| **User Experience** | 5 | Clear layout, logical grouping, helpful placeholders |

---

## Example Survey Structure

Here's a sample outline to inspire your project:

```
Survey Title

[Section 1: Demographics]
- Name (text)
- Email (email)
- Age (number)

[Section 2: Preferences]
- Choose all that apply (checkboxes)
- Select one (radio buttons)

[Section 3: Experience]
- Rate something (radios)
- Which type? (select)

[Section 4: Comments]
- Textarea for open feedback

[Buttons]
- Submit
- Reset
```

---

## Resources

- **Study Guide:** html08_StudyGuide.md (vocabulary and cheat sheet)
- **Example Solution:** html08_DIYTask_Solutions.html
- **Walkthrough:** html08_Walkthrough.md (step-by-step form building)

---

## Bonus Challenges (Optional)

- Add a `maxlength` attribute to text inputs to limit characters
- Use CSS to style required fields differently (red border or star)
- Add `tabindex` to control the tab order through your form
- Create a second page that "displays" submitted data (HTML page)
- Use CSS Grid or Flexbox for advanced form layout
- Add form validation with HTML5 attributes (pattern, min, max)

---

## Submission Instructions

1. Create a folder named `html08_DIYTask_YourName` (or similar)
2. Place your `index.html` and `style.css` files in the folder
3. Make sure all links are correct (CSS file references, etc.)
4. Test your form in a browser before submitting
5. Submit the folder/files to your teacher

---

Good luck! Have fun building your survey form.
