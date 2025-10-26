# **Lesson 5 Tasks: HTML Forms and Input Elements**

## **Setup Instructions**

Before starting these exercises:
1. Create a new folder called `html-lesson5` on your computer
2. Open your text editor
3. Save each exercise as a separate `.html` file
4. Open the files in your web browser to test them
5. Try submitting the forms to see how they work

---

## **Task 1: Basic Form Structure**

**Objective:** Create a simple form with action and method attributes.

**Instructions:**
1. Create a file called `basic-form.html`
2. Build a simple contact form with:
   - Form element with `action="thanks.html"` and `method="get"`
   - Name input field
   - Email input field
   - Submit button
3. Test by submitting and observing the URL

**Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Basic Form</title>
</head>
<body>
    <h1>Contact Form</h1>
    
    <form action="thanks.html" method="get">
        <!-- Add form fields here -->
    </form>
</body>
</html>
```

**Success Criteria:**
- Form has both action and method attributes
- At least 2 input fields with name attributes
- Submit button works
- When submitted, URL shows query string

**Challenge:** Change method to "post" and see how the URL changes when submitted.

---

## **Task 2: Understanding GET vs POST**

**Objective:** Explore the difference between GET and POST methods.

**Instructions:**
1. Create `search-form.html` with:
   - A search form using method="get"
   - Search input field named "q"
   - Category dropdown named "category"
   - Submit button labeled "Search"

2. Create `login-form.html` with:
   - A login form using method="post"
   - Email input named "email"
   - Password input named "password"
   - Submit button labeled "Log In"

**Search Form Template:**
```html
<form action="search.php" method="get">
    <label for="searchBox">Search:</label>
    <input type="text" id="searchBox" name="q" />
    
    <!-- Add category dropdown here -->
    
    <button type="submit">Search</button>
</form>
```

**Success Criteria:**
- Search form uses GET method
- Login form uses POST method
- All inputs have proper name attributes
- Can see search data in URL when submitted
- Login data is NOT visible in URL when submitted

---

## **Task 3: Input Types Exploration**

**Objective:** Practice using different HTML5 input types.

**Instructions:**

Create `input-types.html` with a form that includes:
- Text input
- Email input
- Password input
- Number input (min=1, max=10)
- Date input
- Time input
- Color input
- URL input
- Tel input
- Search input

**Example Structure:**
```html
<form>
    <p>
        <label for="fullName">Full Name:</label><br />
        <input type="text" id="fullName" name="fullName" />
    </p>
    
    <p>
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" />
    </p>
    
    <!-- Add remaining input types -->
    
    <button type="submit">Submit</button>
</form>
```

**Success Criteria:**
- At least 8 different input types used
- Each input has proper label with for attribute
- Each input has name attribute
- Form is well-organized with proper spacing

---

## **Task 4: Labels and Accessibility**

**Objective:** Create accessible forms with proper labels.

**Instructions:**

Create `accessible-form.html` with:
- A registration form
- Every input must have a properly connected label
- Use the `for` attribute on labels
- Use `id` attribute on inputs

**Required Fields:**
- Username
- Email
- Password
- Confirm Password
- First Name
- Last Name

**Example Pattern:**
```html
<p>
    <label for="username">Username:</label><br />
    <input type="text" id="username" name="username" />
</p>
```

**Success Criteria:**
- Every input has a label
- Labels use `for` attribute matching input `id`
- Clicking label focuses the input
- All inputs have `name` attributes
- Form is keyboard accessible

**Test:** Click on each label text and verify the input gets focus.

---

## **Task 5: Required Fields and Validation**

**Objective:** Use HTML5 validation attributes.

**Instructions:**

Create `validation-form.html` with the following validated fields:

1. **Username:** required, 3-20 characters
2. **Email:** required, valid email format
3. **Phone:** optional, pattern for (123) 456-7890 format
4. **Age:** required, number between 18-100
5. **Website:** optional, valid URL
6. **Password:** required, minimum 8 characters

**Example:**
```html
<p>
    <label for="username">Username (required):</label><br />
    <input 
        type="text" 
        id="username" 
        name="username" 
        required 
        minlength="3"
        maxlength="20"
    />
</p>

<p>
    <label for="phone">Phone:</label><br />
    <input 
        type="tel" 
        id="phone" 
        name="phone" 
        pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
        title="Format: (123) 456-7890"
        placeholder="(123) 456-7890"
    />
</p>
```

**Success Criteria:**
- All required fields have `required` attribute
- Fields with length requirements use minlength/maxlength
- Phone uses pattern validation
- Age input uses min/max
- Try submitting empty or invalid data to test validation

---

## **Task 6: Checkboxes and Radio Buttons**

**Objective:** Create forms with checkboxes and radio button groups.

**Instructions:**

Create `preferences-form.html` with two sections:

**Section 1: Pizza Order**
- Radio buttons for size (Small, Medium, Large) - name="size"
- Checkboxes for toppings (at least 5 options) - name="toppings"

**Section 2: Newsletter Preferences**
- Radio buttons for frequency (Daily, Weekly, Monthly) - name="frequency"
- Checkbox for terms agreement - name="terms"

**Radio Button Pattern:**
```html
<p>Choose size:</p>
<input type="radio" id="small" name="size" value="small" checked />
<label for="small">Small</label>
<br />

<input type="radio" id="medium" name="size" value="medium" />
<label for="medium">Medium</label>
<!-- Add more -->
```

**Checkbox Pattern:**
```html
<p>Select toppings:</p>
<input type="checkbox" id="cheese" name="toppings" value="cheese" />
<label for="cheese">Extra Cheese</label>
<br />
<!-- Add more -->
```

**Success Criteria:**
- Radio buttons with same name work as a group (only one selectable)
- Checkboxes allow multiple selections
- All inputs have labels with for attribute
- At least one radio button pre-selected with checked

---

## **Task 7: Select Dropdowns**

**Objective:** Create and use select elements.

**Instructions:**

Create `dropdown-form.html` with:

1. **Country dropdown** with at least 5 countries
2. **State dropdown** with grouped regions (use optgroup)
3. **Favorite foods** - multiple select (size=5)

**Country Dropdown:**
```html
<p>
    <label for="country">Country:</label><br />
    <select id="country" name="country" required>
        <option value="">-- Select Country --</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <!-- Add more -->
    </select>
</p>
```

**Grouped Dropdown:**
```html
<label for="state">State:</label><br />
<select id="state" name="state">
    <optgroup label="West Coast">
        <option value="ca">California</option>
        <option value="or">Oregon</option>
        <option value="wa">Washington</option>
    </optgroup>
    <optgroup label="East Coast">
        <option value="ny">New York</option>
        <option value="ma">Massachusetts</option>
    </optgroup>
</select>
```

**Success Criteria:**
- All select elements have labels
- Country dropdown includes default "Select" option
- State dropdown uses optgroup for organization
- Multiple select allows choosing several options
- All selects have name attributes

---

## **Task 8: Fieldsets and Legends**

**Objective:** Group related form fields with fieldsets.

**Instructions:**

Create `registration-fieldsets.html` with three fieldsets:

**Fieldset 1: Account Information**
- Username
- Email
- Password
- Confirm Password

**Fieldset 2: Personal Details**
- First Name
- Last Name
- Date of Birth
- Gender (radio buttons)

**Fieldset 3: Contact Information**
- Phone Number
- Address
- City
- Zip Code

**Template:**
```html
<form action="register.php" method="post">
    <fieldset>
        <legend>Account Information</legend>
        
        <p>
            <label for="username">Username:</label><br />
            <input type="text" id="username" name="username" required />
        </p>
        
        <!-- Add more fields -->
    </fieldset>
    
    <!-- Add more fieldsets -->
    
    <p>
        <button type="submit">Create Account</button>
    </p>
</form>
```

**Success Criteria:**
- Three distinct fieldsets with legends
- Each fieldset groups related information
- All inputs properly labeled
- Form looks organized with visual grouping
- Submit button outside fieldsets

---

## **Task 9: Textarea and Hidden Fields**

**Objective:** Use textarea elements and hidden inputs.

**Instructions:**

Create `feedback-form.html` with:
- Name (text input)
- Email (email input)
- Rating (radio buttons: Excellent, Good, Fair, Poor)
- Comments (textarea, 6 rows, 50 cols)
- Hidden field: formID with value "feedback-v1"
- Submit button

**Textarea Example:**
```html
<p>
    <label for="comments">Your Comments:</label><br />
    <textarea 
        id="comments" 
        name="comments" 
        rows="6" 
        cols="50"
        placeholder="Tell us what you think..."
        maxlength="500"
    ></textarea>
</p>
```

**Hidden Field:**
```html
<input type="hidden" name="formID" value="feedback-v1" />
```

**Success Criteria:**
- Textarea has proper size (rows and cols)
- Textarea has maxlength attribute
- Hidden field is not visible to user
- All visible fields have labels
- Rating uses radio buttons

---

## **Task 10: Complete Contact Form**

**Objective:** Build a comprehensive contact form.

**Instructions:**

Create `contact-complete.html` with:

**Page Structure:**
- Page header with title
- Main form section
- Footer

**Form Requirements:**
- Form uses POST method
- Action="submit-contact.php"

**Fieldset 1: Your Information**
- Name (required)
- Email (required, email validation)
- Phone (optional, pattern validation)

**Fieldset 2: Message Details**
- Subject dropdown (General, Support, Sales, Other)
- Priority (radio buttons: Low, Medium, High)
- Message (textarea, required, min 10 characters)

**Fieldset 3: Preferences**
- Contact method (radio: Email, Phone)
- Best time to call (if phone selected)
- Newsletter signup (checkbox)

**Buttons:**
- Submit button
- Reset button (optional)

**Success Criteria:**
- Proper semantic HTML structure
- All required fields marked
- Validation attributes applied
- Fieldsets organize content logically
- Form is accessible and keyboard-friendly
- Professional appearance

---

## **Task 11: Login and Registration Pages**

**Objective:** Create separate login and registration pages.

**Instructions:**

Create two files:

**1. login.html**
```html
<form action="login.php" method="post">
    <h2>Log In to Your Account</h2>
    
    <p>
        <label for="loginEmail">Email:</label><br />
        <input 
            type="email" 
            id="loginEmail" 
            name="email" 
            required 
            autocomplete="email"
        />
    </p>
    
    <p>
        <label for="loginPassword">Password:</label><br />
        <input 
            type="password" 
            id="loginPassword" 
            name="password" 
            required 
            autocomplete="current-password"
        />
    </p>
    
    <p>
        <input type="checkbox" id="remember" name="remember" value="yes" />
        <label for="remember">Remember me</label>
    </p>
    
    <p>
        <button type="submit">Log In</button>
    </p>
    
    <p>
        Don't have an account? <a href="register.html">Sign up</a>
    </p>
</form>
```

**2. register.html**
- Username (required, 3-20 chars, pattern: letters and numbers only)
- Email (required)
- Password (required, min 8 chars)
- Confirm Password (required)
- First Name (required)
- Last Name (required)
- Date of Birth (required, date input)
- Terms acceptance checkbox (required)

**Success Criteria:**
- Login form uses POST method
- Registration form uses POST method
- Password inputs use autocomplete attributes
- Registration validates password length
- Terms checkbox is required
- Forms link to each other
- Professional layout

---

## **Task 12: Restaurant Order Form**

**Objective:** Create a takeout order form.

**Instructions:**

Create `order-form.html` for Curbside Thai:

**Customer Information:**
- Name (required)
- Phone (required, pattern validated)
- Email (required)

**Order Details:**
- Dish selection (dropdown with at least 5 dishes and prices)
- Quantity (number input, 1-10)
- Spice level (radio buttons: Mild, Medium, Hot)
- Extra options (checkboxes: Extra Rice, Extra Vegetables, Extra Sauce)
- Special instructions (textarea)

**Pickup Information:**
- Pickup date (date input, today or later)
- Pickup time (time input)
- Payment method (radio: Cash, Credit Card)

**Example:**
```html
<fieldset>
    <legend>Order Details</legend>
    
    <p>
        <label for="dish">Select Dish:</label><br />
        <select id="dish" name="dish" required>
            <option value="">-- Choose Your Dish --</option>
            <option value="padthai">Pad Thai - $12.95</option>
            <option value="curry">Green Curry - $13.95</option>
            <!-- Add more dishes -->
        </select>
    </p>
    
    <p>
        <label for="quantity">Quantity:</label><br />
        <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            min="1" 
            max="10" 
            value="1"
            required 
        />
    </p>
    
    <!-- Add more fields -->
</fieldset>
```

**Success Criteria:**
- Form organized with fieldsets
- All required fields marked
- Number input has min/max
- Date input restricts to future dates
- Dropdown shows prices
- Professional and user-friendly

---

## **Task 13: Survey Form**

**Objective:** Create a multi-section survey.

**Instructions:**

Create `survey.html` with:

**Section 1: Demographics**
- Age range (dropdown: 18-24, 25-34, 35-44, 45-54, 55+)
- Gender (radio buttons including "Prefer not to say")
- Employment status (dropdown)

**Section 2: Product Feedback**
- Product rating (radio: 1-5 stars)
- Would recommend? (radio: Yes, No, Maybe)
- Best features (checkboxes, at least 5 options)
- Improvements needed (textarea)

**Section 3: Additional Comments**
- Overall satisfaction (dropdown: Very Satisfied to Very Dissatisfied)
- How did you hear about us? (dropdown)
- Additional feedback (textarea, optional)
- Email for follow-up (optional)

**Success Criteria:**
- Three clear sections with fieldsets
- Mix of input types
- Some required, some optional
- Logical flow from general to specific
- Submit button at the end

---

## **Task 14: Multi-Step Form (Single Page)**

**Objective:** Create the structure for a multi-step form.

**Instructions:**

Create `application-form.html` that appears as one long form with distinct steps:

**Step 1: Personal Information**
- Full name
- Date of birth
- Email
- Phone

**Step 2: Address Information**
- Street address
- Apartment/Suite (optional)
- City
- State (dropdown)
- Zip code (pattern: 5 digits)

**Step 3: Employment Information**
- Current employer
- Position
- Years employed (number, 0-50)
- Annual income (number)

**Step 4: Additional Information**
- How did you hear about us? (select)
- Additional comments (textarea)
- Agree to terms (required checkbox)

**Layout:**
```html
<form action="submit-application.php" method="post">
    <h1>Application Form</h1>
    
    <fieldset>
        <legend>Step 1: Personal Information</legend>
        <!-- Fields -->
    </fieldset>
    
    <fieldset>
        <legend>Step 2: Address Information</legend>
        <!-- Fields -->
    </fieldset>
    
    <!-- More steps -->
    
    <p>
        <button type="submit">Submit Application</button>
    </p>
</form>
```

**Success Criteria:**
- Clear visual separation between steps
- All fields properly validated
- Required fields marked
- Logical progression
- Professional appearance

---

## **Task 15: File Upload Form**

**Objective:** Create a form that handles file uploads.

**Instructions:**

Create `upload-form.html` for a job application:

**Requirements:**
- Form must use POST method
- Form must include `enctype="multipart/form-data"`
- Name (required)
- Email (required)
- Position applying for (dropdown)
- Resume upload (accept PDF only, required)
- Cover letter upload (accept PDF or DOC, optional)
- Portfolio website (URL input, optional)

**File Upload Pattern:**
```html
<form action="upload.php" method="post" enctype="multipart/form-data">
    <fieldset>
        <legend>Application Details</legend>
        
        <p>
            <label for="name">Full Name:</label><br />
            <input type="text" id="name" name="name" required />
        </p>
        
        <!-- More fields -->
        
        <p>
            <label for="resume">Resume (PDF):</label><br />
            <input 
                type="file" 
                id="resume" 
                name="resume" 
                accept=".pdf"
                required 
            />
        </p>
        
        <p>
            <label for="coverLetter">Cover Letter (PDF or DOC):</label><br />
            <input 
                type="file" 
                id="coverLetter" 
                name="coverLetter" 
                accept=".pdf,.doc,.docx"
            />
        </p>
    </fieldset>
    
    <p>
        <button type="submit">Submit Application</button>
    </p>
</form>
```

**Success Criteria:**
- Form has correct enctype for file uploads
- File inputs specify accepted formats with accept attribute
- Resume is required, cover letter is optional
- All non-file fields properly validated
- Professional layout

---

## **Task 16: Debugging Exercise**

**Objective:** Find and fix form errors.

**Instructions:**

Copy this code into `debug-forms.html` and fix all **12 errors**:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form method="post">
        <fieldset>
            <legend>Your Information
            
            <p>
                <label>Name:</label><br />
                <input type="text" id="name" required />
            </p>
            
            <p>
                <label for="email">Email:</label><br />
                <input type="email" name="email" required />
            </p>
            
            <p>
                <label for="phone">Phone:</label><br />
                <input type="phone" id="phone" name="phone" />
            </p>
        
        <fieldset>
            <legend>Message</legend>
            
            <p>
                <label for="subject">Subject:</label><br />
                <select id="subject">
                    <option>General</option>
                    <option>Support</option>
                    <option>Sales</option>
                </select>
            </p>
            
            <p>
                <label for="message">Message:</label><br />
                <textarea id="message" name="message" required>
            </p>
        </fieldset>
        
        <p>
            <input type="checkbox" id="newsletter" value="yes" />
            <label>Subscribe to newsletter</label>
        </p>
        
        <p>
            <input type="submit" value="Submit" />
        </p>
    </form>
</body>
</html>
```

**Errors to Find:**
1. Missing action attribute on form
2. Missing closing tag for first fieldset
3. Label without for attribute (name field)
4. Input missing name attribute (name field)
5. Wrong input type (should be "tel" not "phone")
6. Select missing name attribute
7. Options missing value attributes
8. Unclosed textarea tag
9. Checkbox label not connected with for attribute
10. Missing id attribute on email input to match label

**Questions:**
1. What happens if a form doesn't have an action attribute?
2. Why are name attributes important?
3. What's wrong with using type="phone"?
4. How should labels be connected to inputs?

---

## **Task 17: Accessible Form Challenge**

**Objective:** Create a fully accessible form.

**Instructions:**

Create `accessible-registration.html` following these accessibility requirements:

**Accessibility Checklist:**
- ✅ Every input has a label with proper for/id connection
- ✅ Related inputs grouped in fieldsets with legends
- ✅ Required fields clearly marked (visually and with required attribute)
- ✅ All validation has helpful title attributes
- ✅ Logical tab order
- ✅ Placeholder text provides examples
- ✅ Error messages will be clear (use title attribute)
- ✅ Button text is descriptive

**Form Content:**
Create a complete registration form with:
- Account section (username, email, password)
- Personal section (name, birthdate, gender)
- Preferences section (language, timezone, notifications)
- Terms agreement (required)

**Example of Accessible Field:**
```html
<p>
    <label for="username">
        Username <abbr title="required">*</abbr>
    </label>
    <br />
    <input 
        type="text" 
        id="username" 
        name="username" 
        required 
        minlength="3"
        maxlength="20"
        pattern="[A-Za-z0-9_]+"
        title="3-20 characters: letters, numbers, and underscores only"
        placeholder="john_doe_123"
        aria-required="true"
    />
</p>
```

**Success Criteria:**
- Passes all accessibility checks
- Can be navigated entirely with keyboard
- Screen reader friendly (test if possible)
- Clear visual indicators for required fields
- Helpful validation messages

---

## **Self-Assessment Checklist**

After completing these tasks, you should be able to:

- [ ] Create forms with action and method attributes
- [ ] Understand the difference between GET and POST
- [ ] Use various HTML5 input types appropriately
- [ ] Create accessible forms with proper labels
- [ ] Use HTML5 validation attributes (required, pattern, min/max)
- [ ] Organize forms with fieldsets and legends
- [ ] Create checkbox and radio button groups correctly
- [ ] Build select dropdowns with options
- [ ] Use textarea for multi-line input
- [ ] Handle file uploads properly
- [ ] Understand how form data is submitted
- [ ] Create forms that work without JavaScript
- [ ] Debug common form errors
- [ ] Follow accessibility best practices

---

## **Extension Activities**

Ready for more challenges?

1. **Multi-Language Form:** Create a form that submits language preference and displays confirmation in chosen language

2. **Form with Calculations:** Build an order form that calculates totals (hint: this will need JavaScript in future lessons)

3. **Progressive Disclosure:** Create a form where certain fields appear based on other selections (you'll enhance this with JavaScript later)

4. **Wizard Form:** Design a multi-page form wizard (3+ separate HTML pages) that passes data between pages

5. **Complex Validation:** Create a password field with a pattern that requires uppercase, lowercase, number, and special character

6. **International Form:** Build a form that handles international phone numbers, addresses, and date formats

---

## **Common Mistakes to Avoid**

**Form Structure:**
- Forgetting action attribute (form won't know where to submit)
- Missing method attribute (defaults to GET)
- Not using <form> element (fields won't submit)

**Inputs:**
- Missing name attributes (data won't be submitted)
- Missing id attributes (labels won't connect)
- Wrong input types (reduces functionality)

**Labels:**
- Labels without for attribute (not accessible)
- Missing labels entirely (terrible for accessibility)
- Using placeholder instead of label (placeholders disappear)

**Radio Buttons:**
- Different name attributes (won't work as group)
- Missing value attributes (submits "on" instead of meaningful value)

**Validation:**
- Relying only on JavaScript (HTML validation is first line of defense)
- Not providing helpful error messages with title attribute
- Making everything required (frustrates users)

**File Uploads:**
- Forgetting enctype="multipart/form-data"
- Not specifying accepted file types
- Missing method="post" (GET doesn't work for files)

---

## **Testing Your Forms**

### **Functionality Testing:**
1. Fill out and submit each form
2. Try submitting with empty required fields
3. Enter invalid data (wrong email format, etc.)
4. Test all radio button groups (only one should select)
5. Test checkboxes (multiple should work)
6. Try keyboard navigation (Tab key)
7. Click labels to verify they focus inputs

### **Validation Testing:**
1. Submit with missing required fields
2. Enter text that doesn't match patterns
3. Try numbers outside min/max range
4. Test email validation (no @, etc.)
5. Verify helpful error messages appear

### **Accessibility Testing:**
1. Navigate entire form with keyboard only
2. Verify logical tab order
3. Check that all inputs have labels
4. Ensure required fields are marked
5. Test with different browsers

---

## **Best Practices Review**

**Always:**
- ✓ Use <form> element with action and method
- ✓ Add name attribute to every input
- ✓ Connect labels to inputs with for/id
- ✓ Use appropriate input types
- ✓ Apply validation attributes (required, pattern, etc.)
- ✓ Group related fields with fieldsets
- ✓ Provide helpful title attributes for validation
- ✓ Use placeholders for examples, not instructions
- ✓ Make forms keyboard accessible
- ✓ Test your forms thoroughly

**Avoid:**
- ✗ Forms without action attribute
- ✗ Inputs without name attributes
- ✗ Labels without for attribute
- ✗ Using <div> instead of <form>
- ✗ Radio buttons with different names
- ✗ Validation only in JavaScript
- ✗ Confusing or missing error messages
- ✗ Reset buttons (users rarely want them)

---

## **Next Steps**

Once you've completed these exercises, you're ready to:
- Enhance forms with JavaScript validation (upcoming lessons)
- Style forms beautifully with CSS and Bootstrap
- Handle form submissions with server-side code
- Create dynamic forms that respond to user input
- Build complete web applications with forms

**Remember:** The forms you've built work entirely in HTML without JavaScript. In future lessons, you'll learn to enhance these forms with JavaScript for a better user experience!

---

## **Form Workflow Summary**

```
1. User fills out form
   ↓
2. User clicks Submit button
   ↓
3. Browser validates (HTML5 validation)
   ↓
4. If valid: Browser sends data to action URL
   If invalid: Shows error messages
   ↓
5. Server receives and processes data
   ↓
6. Server sends response (new page)
```

**In future lessons, you'll add:**
- JavaScript validation (before browser validation)
- AJAX submission (without page reload)
- Real-time validation feedback
- Custom error messages
- Dynamic form behavior
