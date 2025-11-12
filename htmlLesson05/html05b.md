# Lesson: Building HTML Forms - Hands-On Practice

## Learning Objectives
By the end of this lesson, students will be able to:
- Code basic HTML forms from scratch
- Use common input types appropriately
- Connect labels to inputs for accessibility
- Apply HTML5 validation attributes
- Build a functional form that collects clean data

---

## Quick Reminder: The Form Pipeline

From the previous lesson, remember:
```
FORM → COLLECTION → STORAGE → ANALYSIS
```

Today, we're focusing on **coding the HTML form** that collects the data!

---

## Basic Form Syntax

Every HTML form needs three things:

```html
<form action="process.php" method="post">
    <!-- Your inputs go here -->
    <button type="submit">Submit</button>
</form>
```

1. **`<form>`** - Container for all form inputs
2. **`action`** - Where the data goes (usually a database)
3. **`method`** - How to send it (`get` or `post`)

### Comparison: GET vs POST

### ✅ Use **GET** for:
- **Search forms**: The query appears in the URL (like `?q=pizza`), which makes it easy to bookmark or share.
- **Filters or sorting options**: Used when you’re only changing what the user *sees*, not updating anything on the server.
- **Data that should be visible in the URL**: Helpful for navigation, pagination (`?page=3`), or analytics links.
- **Small, simple pieces of data**: GET requests have length limits, so keep data short.
- **Safe, repeatable actions**: Refreshing or sharing the link won’t accidentally change data on the server.

---

### ✅ Use **POST** for:
- **Login forms**: Keeps usernames and passwords out of the URL for better security.
- **Registration or updating information**: Any form that creates or saves something on the server.
- **Sending sensitive information**: Passwords, email addresses, payment details, etc. stay out of browser history.
- **Large amounts of data**: Big text inputs, file uploads, or long JSON payloads.
- **Actions that modify server data**: Creating, editing, or deleting information—POST tells the server to *make a change*.

---

## Essential Form Elements

### 1. Text Input (String Data)

```html
<label for="name">Full Name:</label>
<input type="text" id="name" name="name" required />
```

**Key Attributes:**
- `id` - Connects to label
- `name` - Identifies data when submitted
- `required` - Makes field mandatory

---

### 2. Email Input (Validated String)

```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required />
```

**What makes it special:** Automatically validates email format!

---

### 3. Number Input (Numeric Data)

```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="13" max="120" />
```

**What makes it special:** Only accepts numbers, can set min/max

---

### 4. Date Input

```html
<label for="birthday">Birth Date:</label>
<input type="date" id="birthday" name="birthday" />
```

**What makes it special:** Provides a date picker calendar!

---

### 5. Dropdown Menu (Category Data)

```html
<label for="size">T-Shirt Size:</label>
<select id="size" name="size" required>
    <option value="">-- Select Size --</option>
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
    <option value="xlarge">X-Large</option>
</select>
```

**Important:**
- First `<option>` is usually a placeholder
- Each option needs a `value` attribute
- The `value` is what gets submitted (not the text shown)

---

### 6. Radio Buttons (Single Choice)

```html
<p>Select your meal preference:</p>

<input type="radio" id="breakfast" name="meal" value="breakfast" />
<label for="breakfast">Breakfast</label>

<input type="radio" id="lunch" name="meal" value="lunch" />
<label for="lunch">Lunch</label>

<input type="radio" id="dinner" name="meal" value="dinner" checked />
<label for="dinner">Dinner</label>
```

**Critical Rules:**
- All radio buttons in a group must have the **same `name`**
- Each needs a unique `id`
- Use `checked` to pre-select one option
- Only one can be selected at a time

---

### 7. Checkboxes (Multiple Choices)

```html
<p>Select your interests:</p>

<input type="checkbox" id="sports" name="interests" value="sports" />
<label for="sports">Sports</label>

<input type="checkbox" id="music" name="interests" value="music" />
<label for="music">Music</label>

<input type="checkbox" id="reading" name="interests" value="reading" />
<label for="reading">Reading</label>
```

**Critical Rules:**
- All checkboxes can have the **same `name`** if they're related
- Multiple can be selected
- Use `checked` to pre-select options

---

### 8. Textarea (Multi-line Text)

```html
<label for="comments">Additional Comments:</label>
<textarea id="comments" name="comments" rows="4" cols="50"></textarea>
```

**Use textarea when:** You need more than one line of text (comments, messages, descriptions)

---

## HTML5 Validation Attributes

You can validate form data without JavaScript!

### Required Fields
```html
<input type="text" name="username" required />
```

### Minimum and Maximum Length
```html
<input type="text" name="username" minlength="3" maxlength="20" />
```

### Number Ranges
```html
<input type="number" name="age" min="13" max="120" />
```

### Pattern Matching (for phone numbers, etc.)
```html
<input 
    type="tel" 
    name="phone" 
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    placeholder="123-456-7890"
    title="Format: 123-456-7890"
/>
```

The `title` attribute shows a helpful message when validation fails!

---

## Organizing Forms with Fieldsets

Group related fields together:

```html
<form action="order.php" method="post">
    <fieldset>
        <legend>Customer Information</legend>
        
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
    </fieldset>
    
    <fieldset>
        <legend>Order Details</legend>
        
        <label for="item">Item:</label>
        <select id="item" name="item" required>
            <option value="">-- Choose --</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
        </select>
        
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" value="1" />
    </fieldset>
    
    <button type="submit">Place Order</button>
</form>
```

**Benefits:**
- Makes forms easier to read
- Groups related information
- Creates visual sections

---

## Complete Form Example: Restaurant Survey

Let's build a complete form that collects clean data!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Restaurant Survey</title>
</head>
<body>
    <h1>Restaurant Survey</h1>
    
    <form action="submit-survey.php" method="post">
        
        <fieldset>
            <legend>Your Information</legend>
            
            <p>
                <label for="custName">Name:</label><br />
                <input type="text" id="custName" name="name" required />
            </p>
            
            <p>
                <label for="custEmail">Email:</label><br />
                <input type="email" id="custEmail" name="email" required />
            </p>
        </fieldset>
        
        <fieldset>
            <legend>Restaurant Experience</legend>
            
            <p>
                <label for="restaurant">Which restaurant did you visit?</label><br />
                <select id="restaurant" name="restaurant" required>
                    <option value="">-- Select Restaurant --</option>
                    <option value="olive-garden">Olive Garden</option>
                    <option value="chipotle">Chipotle</option>
                    <option value="five-guys">Five Guys</option>
                    <option value="panera">Panera Bread</option>
                </select>
            </p>
            
            <p>
                <label for="visitDate">Date of Visit:</label><br />
                <input type="date" id="visitDate" name="date" required />
            </p>
            
            <p>
                <label for="rating">Overall Rating:</label><br />
                <select id="rating" name="rating" required>
                    <option value="">-- Rate 1-5 --</option>
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Average</option>
                    <option value="2">2 - Poor</option>
                    <option value="1">1 - Terrible</option>
                </select>
            </p>
            
            <p>
                <label>How often do you eat there?</label><br />
                <input type="radio" id="freq-weekly" name="frequency" value="weekly" />
                <label for="freq-weekly">Weekly</label><br />
                
                <input type="radio" id="freq-monthly" name="frequency" value="monthly" />
                <label for="freq-monthly">Monthly</label><br />
                
                <input type="radio" id="freq-rarely" name="frequency" value="rarely" />
                <label for="freq-rarely">Rarely</label><br />
                
                <input type="radio" id="freq-first" name="frequency" value="first-time" checked />
                <label for="freq-first">First Time</label>
            </p>
            
            <p>
                <label for="comments">Additional Comments:</label><br />
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
            </p>
        </fieldset>
        
        <p>
            <button type="submit">Submit Survey</button>
        </p>
        
    </form>
</body>
</html>
```

---

## Critical Rules for Clean Data

### ✅ DO:
- Always use `<form>` element
- Always add `name` attributes (or data won't submit!)
- Always connect labels to inputs with `for` and `id`
- Use the right input type for the data type
- Use `required` for mandatory fields
- Use dropdowns/radio buttons for fixed choices

### ❌ DON'T:
- Forget `name` attributes
- Use text input for everything
- Skip labels
- Forget to test your form

---

## Common Mistakes to Avoid

### Mistake #1: Missing Name Attribute
```html
<!-- WRONG - data won't be submitted -->
<input type="text" id="username" />

<!-- CORRECT -->
<input type="text" id="username" name="username" />
```

---

### Mistake #2: Label Not Connected
```html
<!-- WRONG - clicking label doesn't focus input -->
<label>Username</label>
<input type="text" name="username" />

<!-- CORRECT -->
<label for="username">Username</label>
<input type="text" id="username" name="username" />
```

---

### Mistake #3: Radio Buttons with Different Names
```html
<!-- WRONG - all can be selected at once -->
<input type="radio" name="size-small" value="S" />
<input type="radio" name="size-large" value="L" />

<!-- CORRECT - only one can be selected -->
<input type="radio" name="size" value="S" />
<input type="radio" name="size" value="L" />
```

---

## Class Activity: Build a Form Together

**Scenario:** You're creating a lunch order form for a food truck.

**Requirements:**
1. Customer name (required)
2. Email (required, validated)
3. Menu item dropdown (at least 4 items)
4. Quantity (number, 1-10)
5. Spice level (radio buttons: mild, medium, hot)
6. Special instructions (textarea)
7. Submit button

**We'll code this together step by step!**

---

## Testing Your Forms

### Before Moving On:
1. ✅ Fill out and submit the form
2. ✅ Try submitting with empty required fields
3. ✅ Try invalid email addresses
4. ✅ Try clicking labels (should focus inputs)
5. ✅ Test radio buttons (only one should select)
6. ✅ Navigate with Tab key only

---

## Key Takeaways

✅ **Forms need `<form>`, `action`, and `method`**

✅ **Every input MUST have a `name` attribute**

✅ **Labels make forms accessible** - use `for` and `id`

✅ **Choose the right input type** for the data type

✅ **HTML5 validation** works without JavaScript

✅ **Radio buttons** = same name, single choice

✅ **Checkboxes** = multiple choices allowed

✅ **Good forms = clean data** for analysis

---

## What's Next?

In upcoming lessons, you'll:
- Style forms with CSS and Bootstrap
- Add JavaScript validation for better user experience
- Connect forms to actual databases
- Build complete web applications

**For now, focus on building HTML forms that collect clean, analyzable data!**
