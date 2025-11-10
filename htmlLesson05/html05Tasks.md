# Lesson 5 Tasks: HTML Forms Practice

## Setup Instructions

Before starting these exercises:
1. Create a new folder called `html-lesson5` on your computer within your main htmlCssJavaScript folder that you publish to GitHub currently. 
2. Open VS Code
3. Save each exercise as a separate `.html` file
4. Open the files in your web browser to test them

---

## Task 1: Basic Contact Form

**Objective:** Create a simple contact form with the essential elements.

**Create:** `contact-form.html`

**Requirements:**
1. A form with `action="thanks.html"` and `method="post"`
2. Name field (text input, required)
3. Email field (email input, required)
4. Message field (textarea, required)
5. Submit button

**Starter Template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form action="thanks.html" method="post">
        <!-- Add your form fields here -->
        
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```

**Success Criteria:**
- [ ] Form has action and method attributes
- [ ] All inputs have name attributes
- [ ] All inputs have labels with proper for/id connection
- [ ] Required fields have the required attribute
- [ ] Textarea has rows and cols attributes

**Test:** Try submitting with empty fields - validation should stop you!

---

## Task 2: Restaurant Survey Form

**Objective:** Practice using different input types for different data types.

**Create:** `restaurant-survey.html`

**Requirements:**

Build a survey form with these sections:

**Your Information:**
- Name (text, required)
- Email (email, required)
- Age range (dropdown: Under 18, 18-24, 25-34, 35-44, 45+)

**Restaurant Experience:**
- Which restaurant? (dropdown with at least 4 restaurants)
- Date of visit (date input)
- Overall rating (dropdown: 1-5)
- Would you return? (radio buttons: Yes / No / Maybe)

**Additional Feedback:**
- Comments (textarea, optional)

**Example Structure:**
```html
<form action="submit-survey.php" method="post">
    <fieldset>
        <legend>Your Information</legend>
        
        <p>
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required />
        </p>
        
        <!-- Add more fields here -->
    </fieldset>
    
    <!-- Add more fieldsets here -->
    
    <button type="submit">Submit Survey</button>
</form>
```

**Success Criteria:**
- [ ] Uses at least 3 different input types
- [ ] Uses fieldsets to organize sections
- [ ] All required fields have validation
- [ ] Radio buttons work as a group (same name)
- [ ] Dropdowns have placeholder options

---

## Task 3: Pizza Order Form

**Objective:** Practice radio buttons and checkboxes correctly.

**Create:** `pizza-order.html`

**Requirements:**

Build an order form with:

**Customer Info:**
- Name (text, required)
- Phone (tel, required)

**Pizza Order:**
- Size (radio buttons: Small / Medium / Large / Extra Large)
- Crust (radio buttons: Thin / Regular / Thick)
- Toppings (checkboxes - at least 6 options)
- Quantity (number, min=1, max=10)
- Delivery date (date input)
- Delivery time (time input)
- Special instructions (textarea, optional)

**Remember:**
- Radio buttons in the same group need the **same name**
- Checkboxes can all have the **same name** if they're related
- Pre-select one option in each radio group with `checked`

**Success Criteria:**
- [ ] Size radio buttons allow only one selection
- [ ] Crust radio buttons allow only one selection
- [ ] Toppings checkboxes allow multiple selections
- [ ] One option pre-selected for each radio group
- [ ] Number input has min and max set
- [ ] All required fields marked with *

---

## Task 4: Job Application Form

**Objective:** Build a complete, organized form with validation.

**Create:** `job-application.html`

**Requirements:**

Create a professional job application form with these sections:

**Personal Information:**
- First name (text, required, 2-50 characters)
- Last name (text, required, 2-50 characters)
- Email (email, required)
- Phone (tel, pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}")
- Date of birth (date, required)

**Position Details:**
- Position applying for (dropdown with at least 4 jobs)
- Available start date (date, required)
- Desired salary range (dropdown: $30-40K, $40-50K, $50-60K, $60K+)
- Employment type (radio: Full-time / Part-time / Contract)

**Qualifications:**
- Years of experience (number, 0-50)
- Education level (dropdown: High School, Associate, Bachelor, Master, PhD)
- Skills (checkboxes with at least 5 skills)

**Additional Information:**
- Why do you want this position? (textarea, required, maxlength="500")
- Available for relocation? (radio: Yes / No)

**Agreement:**
- Checkbox: "I certify that the information provided is true and accurate" (required)

**Example Validation:**
```html
<p>
    <label for="firstName">First Name: *</label><br />
    <input 
        type="text" 
        id="firstName" 
        name="firstName" 
        required 
        minlength="2"
        maxlength="50"
    />
</p>

<p>
    <label for="phone">Phone: *</label><br />
    <input 
        type="tel" 
        id="phone" 
        name="phone" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        title="Format: 123-456-7890"
        required
    />
</p>
```

**Success Criteria:**
- [ ] Form organized with 4 fieldsets
- [ ] All required fields have * in label
- [ ] Phone number has pattern validation
- [ ] Text fields have min/max length
- [ ] Number input has min/max values
- [ ] Textarea has maxlength
- [ ] All inputs have proper labels
- [ ] Form is well-structured and easy to read

---

## Task 5: Fix the Broken Form

**Objective:** Debug common form errors.

**Create:** `debug-form.html`

**Instructions:** Copy this broken code and fix all the errors:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Broken Form</title>
</head>
<body>
    <h1>Newsletter Signup</h1>
    
    <form method="post">
        <fieldset>
            <legend>Your Information
            
            <p>
                <label>Name:</label><br />
                <input type="text" id="name" />
            </p>
            
            <p>
                <label for="email">Email:</label><br />
                <input type="text" name="email" required />
            </p>
            
            <p>
                <label for="age">Age:</label><br />
                <input type="text" id="age" name="age" />
            </p>
        
        <fieldset>
            <legend>Preferences</legend>
            
            <p>
                <label>Newsletter Frequency:</label><br />
                <input type="radio" id="daily" name="freq-daily" value="daily" />
                <label>Daily</label>
                
                <input type="radio" id="weekly" name="freq-weekly" value="weekly" />
                <label>Weekly</label>
            </p>
            
            <p>
                <label>Interests (select all that apply):</label><br />
                <input type="checkbox" name="tech" value="tech" />
                <label>Technology</label>
                
                <input type="checkbox" name="sports" value="sports" />
                <label>Sports</label>
            </p>
            
            <p>
                <input type="checkbox" id="terms" value="yes" />
                <label>I agree to the terms</label>
            </p>
        </fieldset>
        
        <p>
            <input type="submit" value="Sign Up" />
        </p>
    </form>
</body>
</html>
```

**Errors to Find and Fix:**

1. Missing `action` attribute on form
2. Missing closing `</legend>` tag (line 10)
3. Label for name field not connected (missing `for` attribute)
4. Name field missing `name` attribute
5. Email input should be `type="email"` not `type="text"`
6. Age input should be `type="number"` with min/max
7. Missing closing `</fieldset>` tag (line 21)
8. Radio buttons have different names (should all be `name="frequency"`)
9. Radio button labels not connected with `for` attribute
10. Checkbox labels not connected with `for` attribute
11. Checkbox interests should all have same name
12. Terms checkbox missing `name` attribute

**Success Criteria:**
- [ ] Found and fixed all 12 errors
- [ ] Form validates properly
- [ ] All labels connect to inputs
- [ ] Radio buttons work as a group

**Questions to Answer:**
1. What happens if a form doesn't have an action attribute?
2. Why is the name attribute so important?
3. Why do radio buttons need the same name?
4. How should labels be connected to inputs?

---

## Task 6: Build Your Own Form 

**Objective:** Apply everything you've learned to create a custom form.

**Create:** Choose one of these scenarios:

### Option A: Event Registration Form
Register people for a school event (dance, concert, sports event)
- Personal info
- Ticket type/quantity
- Meal preferences
- T-shirt size
- Special accommodations
- Emergency contact

### Option B: Product Order Form
Order form for a custom product (t-shirt, phone case, laptop)
- Customer info
- Product options (color, size, model)
- Customization options
- Quantity
- Shipping preferences
- Gift message option

### Option C: Student Survey Form
Survey about school experience
- Grade level
- Favorite subjects
- Clubs/activities
- School lunch rating
- Suggestions for improvement
- After-school interests

### Option D: You Pick, But Get My Approval

- You must come up with criteria similar to the examples above and get approval from Mr. M.


**Requirements:**
- At least 3 fieldsets
- At least 8 different inputs
- Mix of input types (text, email, number, date, dropdown, radio, checkboxes, textarea)
- Proper validation (required, min/max, pattern where appropriate)
- All labels properly connected
- Professional appearance and organization

**Success Criteria:**
- [ ] Form is well-organized with fieldsets
- [ ] Uses variety of input types appropriately
- [ ] All inputs have proper names and labels
- [ ] Required fields are marked and validated
- [ ] Radio buttons work correctly
- [ ] Form collects clean, analyzable data

---

## Self-Assessment Checklist

After completing these tasks, you should be able to:

- [ ] Create forms with action and method attributes
- [ ] Use text, email, number, date inputs appropriately
- [ ] Create dropdowns with select and option elements
- [ ] Build radio button groups correctly
- [ ] Add checkboxes for multiple selections
- [ ] Connect labels to inputs with for/id attributes
- [ ] Use HTML5 validation (required, min/max, pattern)
- [ ] Organize forms with fieldsets and legends
- [ ] Add textareas for multi-line input
- [ ] Debug common form errors
- [ ] Build forms that collect clean data

---

## Testing Your Forms

### For Each Form You Build:

**Functionality Testing:**
1. Fill out and submit the form
2. Try submitting with required fields empty
3. Enter invalid email format
4. Test number inputs with out-of-range values
5. Click all labels to verify they focus inputs
6. Test radio buttons (only one should select)
7. Test checkboxes (multiple should work)

**Keyboard Testing:**
1. Press Tab to navigate through form
2. Verify logical tab order
3. Ensure all inputs can be reached
4. Test submit button with Enter key

**Validation Testing:**
1. Leave required fields blank and submit
2. Test pattern validation (phone numbers)
3. Try invalid email formats
4. Test min/max on number inputs
5. Check that error messages are helpful

---

## Common Mistakes to Avoid

### Form Structure:
- ❌ Forgetting action attribute
- ❌ Not using `<form>` element
- ❌ Missing method attribute

### Inputs:
- ❌ **Missing name attributes** (most common - data won't submit!)
- ❌ Missing id attributes (labels won't connect)
- ❌ Using wrong input type for the data

### Labels:
- ❌ Labels without for attribute
- ❌ Missing labels entirely
- ❌ Using placeholder instead of label

### Radio Buttons:
- ❌ Different name attributes (won't work as group)
- ❌ Missing value attributes

### Validation:
- ❌ Not marking required fields
- ❌ Not providing helpful error messages

---

## Quick Reference: Input Types

| Data Type | HTML Input Type | Example |
|-----------|----------------|---------|
| Name, text | `type="text"` | Name, username |
| Email address | `type="email"` | Email field |
| Password | `type="password"` | Login password |
| Numbers | `type="number"` | Age, quantity |
| Phone | `type="tel"` | Phone number |
| Date | `type="date"` | Birth date, appointment |
| Time | `type="time"` | Appointment time |
| Dropdown choices | `<select>` | Country, state, size |
| Single choice | `type="radio"` | Gender, payment method |
| Multiple choices | `type="checkbox"` | Interests, toppings |
| Long text | `<textarea>` | Comments, description |
