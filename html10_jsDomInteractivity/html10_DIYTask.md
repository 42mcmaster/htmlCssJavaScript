# HTML10 DIY Project: Interactive FAQ & Form Validation

This is your chance to build something cool! In this project, you'll create both an interactive FAQ accordion AND a contact form with validation.

## Project Overview

You will build a single web page that includes:

1. **FAQ Accordion** - Click questions to show/hide answers
2. **Contact Form with Validation** - Validate form input before submission
3. **Hover Effects** - Add visual feedback to interactive elements

This combines everything you've learned in lessons 10a and 10b!

---

## Requirements

### Part 1: FAQ Accordion

- [ ] Create a section with 4-5 frequently asked questions
- [ ] Each question should be clickable
- [ ] When clicked, the answer slides or toggles visible/hidden
- [ ] Only one answer can be open at a time (optional - more advanced)
- [ ] Visual feedback: change button color or add an arrow that rotates
- [ ] Use JavaScript event listeners (click events)

**HTML Structure Example:**
```html
<div class="faq-container">
    <div class="faq-item">
        <button class="faq-question">What is Web Design?</button>
        <div class="faq-answer hidden">
            <p>Web design is the process of creating websites...</p>
        </div>
    </div>
    <!-- More items... -->
</div>
```

**CSS:**
- Questions should look like buttons (cursor pointer, hover effect)
- Answers should be hidden by default
- Use `.hidden { display: none; }` class
- Add transitions for smooth show/hide effect
- Color scheme should be professional and consistent

**JavaScript:**
- Add `click` event listener to each question
- Toggle the `hidden` class on the answer
- Optional: Change button background color when open/closed

---

### Part 2: Contact Form with Validation

- [ ] Create a form with these fields:
  - Name (required)
  - Email (required, must contain @)
  - Phone (optional)
  - Subject (required)
  - Message (required, at least 10 characters)

- [ ] Form validation:
  - Check that all required fields are filled
  - Check that email contains @
  - Check that message is at least 10 characters long
  - Show specific error messages for each validation failure
  - Clear error messages when fields are corrected

- [ ] On successful submission:
  - Show a success message
  - Clear all form fields
  - Hide error messages

- [ ] Use JavaScript:
  - `addEventListener('submit', function(event) { event.preventDefault(); })` to prevent actual submission
  - Get form values with `getElementById().value`
  - Show/hide error messages using `classList.add()` and `classList.remove()`

---

### Part 3: Hover Effects

- [ ] Add hover effects to:
  - FAQ question buttons (change color, background, or shadow)
  - Submit button (change color, add cursor: pointer)
  - Form input fields (border color change on focus)

- [ ] Use either CSS (`:hover`) or JavaScript (`addEventListener('mouseover')`)
- [ ] Keep effects subtle and professional

---

## File Structure

Create these files in the `html10/` folder:

```
html10_DIYTask_Solutions.html
html10_DIYTask_Solutions.css
html10_DIYTask_Solutions.js
```

All CSS and JavaScript should be properly commented!

---

## Grading Rubric

| Criteria | Points | Details |
|----------|--------|---------|
| **FAQ Accordion** | 25 | Questions clickable, answers toggle, professional styling |
| **Form Validation** | 25 | All validations work, error messages display correctly |
| **Hover Effects** | 15 | Smooth transitions, visual feedback on interactive elements |
| **Code Quality** | 20 | Proper comments, clean structure, no console errors |
| **Functionality** | 15 | All features work, no bugs, responsive and user-friendly |
| **TOTAL** | 100 | |

---

## Tips for Success

1. **Start Simple** - Get the basic HTML structure right first, then add CSS, then JavaScript
2. **Test Often** - Open your page in a browser and test each feature as you build it
3. **Use Console** - Check the browser console for errors (F12 > Console tab)
4. **Comment Your Code** - Every function and complex line should have a comment
5. **Be Consistent** - Use the same color scheme, fonts, and spacing throughout
6. **Use Classes** - Use `.hidden`, `.active`, etc. to manage state with classList

### Sample JavaScript Pattern

```javascript
// Get elements
const questions = document.querySelectorAll('.faq-question');

// Add listeners
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        // Toggle the answer visibility
        const answer = this.nextElementSibling;
        answer.classList.toggle('hidden');
    });
}
```

---

## Stretch Goals (Extra Credit)

- [ ] Only allow one FAQ answer open at a time (close others when one opens)
- [ ] Add animation/transition effects for smooth opening/closing
- [ ] Add a "Copy email" button in the success message
- [ ] Use localStorage to save form data if page is refreshed
- [ ] Add a "Reset Form" button
- [ ] Show the character count remaining in the message field
- [ ] Add more complex validation (phone number format, domain validation)

---

## Submission

Save all files in `/sessions/youthful-brave-edison/mnt/htmlCssJavaScriptForGitHub/html10/` and make sure they are named:
- `html10_DIYTask_Solutions.html`
- `html10_DIYTask_Solutions.css`
- `html10_DIYTask_Solutions.js`

Open the HTML file in a browser and test all features before submitting!
