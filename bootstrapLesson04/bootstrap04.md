# Lesson B4: Bootstrap Forms & Validation

## Why are we learning this?

Forms are everywhere on the web - login pages, contact forms, checkout pages, surveys. Bootstrap makes it easy to create beautiful, professional-looking forms. Even better, you can combine Bootstrap's styling with the JavaScript validation you learned in js07 to create forms that look amazing AND work perfectly!

---

## What Are Bootstrap Forms?

Bootstrap provides pre-styled form components that look professional without writing CSS. Instead of plain, boring HTML form inputs, Bootstrap gives you:

- **Styled inputs** - Clean borders, proper spacing, focus effects
- **Labels** - Properly positioned and styled
- **Validation feedback** - Visual indicators for valid/invalid fields
- **Layouts** - Vertical, horizontal, or inline forms
- **Input groups** - Add icons, buttons, or text to inputs

---

## Basic Form Structure

Every Bootstrap form starts with basic HTML form elements wrapped in Bootstrap classes:

### Simple Contact Form

```html
<form>
    <div class="mb-3">
        <label for="nameInput" class="form-label">Name</label>
        <input type="text" class="form-control" id="nameInput" placeholder="Enter your name">
    </div>
    
    <div class="mb-3">
        <label for="emailInput" class="form-label">Email</label>
        <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
    </div>
    
    <div class="mb-3">
        <label for="messageInput" class="form-label">Message</label>
        <textarea class="form-control" id="messageInput" rows="3"></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Key Classes Explained

| Class | Purpose |
|-------|---------|
| `form-label` | Styles the label text |
| `form-control` | Styles text inputs, selects, and textareas |
| `mb-3` | Adds bottom margin for spacing |
| `form-check` | Styles checkboxes and radio buttons |
| `form-select` | Styles dropdown select menus |

---

## Form Controls

### Text Inputs

```html
<div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username" placeholder="Choose a username">
</div>
```

### Email Input

```html
<div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
    <div class="form-text">We'll never share your email with anyone.</div>
</div>
```

**The `form-text` class** adds small helper text below the input.

### Password Input

```html
<div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
</div>
```

### Textarea

```html
<div class="mb-3">
    <label for="comments" class="form-label">Comments</label>
    <textarea class="form-control" id="comments" rows="4"></textarea>
</div>
```

### Select Dropdown

```html
<div class="mb-3">
    <label for="country" class="form-label">Country</label>
    <select class="form-select" id="country">
        <option selected>Choose...</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="mx">Mexico</option>
    </select>
</div>
```

---

## Checkboxes and Radio Buttons

### Checkboxes

```html
<div class="mb-3">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="terms">
        <label class="form-check-label" for="terms">
            I agree to the terms and conditions
        </label>
    </div>
</div>
```

### Multiple Checkboxes

```html
<div class="mb-3">
    <label class="form-label">Select your interests:</label>
    
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="sports" value="sports">
        <label class="form-check-label" for="sports">Sports</label>
    </div>
    
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="music" value="music">
        <label class="form-check-label" for="music">Music</label>
    </div>
    
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="tech" value="tech">
        <label class="form-check-label" for="tech">Technology</label>
    </div>
</div>
```

### Radio Buttons

```html
<div class="mb-3">
    <label class="form-label">Choose your size:</label>
    
    <div class="form-check">
        <input class="form-check-input" type="radio" name="size" id="sizeSmall" value="small">
        <label class="form-check-label" for="sizeSmall">Small</label>
    </div>
    
    <div class="form-check">
        <input class="form-check-input" type="radio" name="size" id="sizeMedium" value="medium">
        <label class="form-check-label" for="sizeMedium">Medium</label>
    </div>
    
    <div class="form-check">
        <input class="form-check-input" type="radio" name="size" id="sizeLarge" value="large">
        <label class="form-check-label" for="sizeLarge">Large</label>
    </div>
</div>
```

**Important:** Radio buttons with the same `name` attribute create a group where only one can be selected.

### Inline Checkboxes/Radios

```html
<div class="mb-3">
    <label class="form-label">Gender:</label>
    
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gender" id="male" value="male">
        <label class="form-check-label" for="male">Male</label>
    </div>
    
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gender" id="female" value="female">
        <label class="form-check-label" for="female">Female</label>
    </div>
    
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gender" id="other" value="other">
        <label class="form-check-label" for="other">Other</label>
    </div>
</div>
```

**The `form-check-inline` class** makes checkboxes/radios appear side-by-side instead of stacked.

---

## Input Sizes

Bootstrap provides different input sizes:

### Default Size

```html
<input type="text" class="form-control" placeholder="Default size">
```

### Large Input

```html
<input type="text" class="form-control form-control-lg" placeholder="Large input">
```

### Small Input

```html
<input type="text" class="form-control form-control-sm" placeholder="Small input">
```

---

## Disabled and Readonly

### Disabled Input

```html
<input type="text" class="form-control" placeholder="Disabled input" disabled>
```

**Effect:** Grayed out, can't be edited or submitted

### Readonly Input

```html
<input type="text" class="form-control" value="Readonly value" readonly>
```

**Effect:** Can be seen and copied, but not edited. Value WILL be submitted.

---

## Input Groups (Adding Icons/Buttons)

Input groups let you add text, icons, or buttons to inputs:

### Text Addon

```html
<div class="input-group mb-3">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username">
</div>
```

### Button Addon

```html
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search">
    <button class="btn btn-primary" type="button">Search</button>
</div>
```

### Both Sides

```html
<div class="input-group mb-3">
    <span class="input-group-text">$</span>
    <input type="text" class="form-control" placeholder="Amount">
    <span class="input-group-text">.00</span>
</div>
```

### Dropdown in Input Group

```html
<div class="input-group mb-3">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" 
            data-bs-toggle="dropdown">Category</button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Electronics</a></li>
        <li><a class="dropdown-item" href="#">Clothing</a></li>
        <li><a class="dropdown-item" href="#">Books</a></li>
    </ul>
    <input type="text" class="form-control" placeholder="Search">
</div>
```

---

## Form Validation States

Bootstrap provides visual feedback for form validation:

### Valid Input

```html
<div class="mb-3">
    <label for="validInput" class="form-label">Valid Input</label>
    <input type="text" class="form-control is-valid" id="validInput" value="Looks good!">
    <div class="valid-feedback">
        Great! This looks good.
    </div>
</div>
```

### Invalid Input

```html
<div class="mb-3">
    <label for="invalidInput" class="form-label">Invalid Input</label>
    <input type="text" class="form-control is-invalid" id="invalidInput" value="Bad data">
    <div class="invalid-feedback">
        Please provide a valid value.
    </div>
</div>
```

### Key Validation Classes:

| Class | Purpose |
|-------|---------|
| `is-valid` | Shows green border and checkmark |
| `is-invalid` | Shows red border and X mark |
| `valid-feedback` | Green success message |
| `invalid-feedback` | Red error message |

---

## Connecting to JavaScript Validation (js07)

Here's how to combine Bootstrap styling with your JavaScript validation from js07:

### HTML Form with Bootstrap Classes

```html
<form id="signupForm">
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" required>
        <div class="invalid-feedback">
            Username must be at least 3 characters.
        </div>
    </div>
    
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required>
        <div class="invalid-feedback">
            Please enter a valid email address.
        </div>
    </div>
    
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" required>
        <div class="invalid-feedback">
            Password must be at least 8 characters.
        </div>
    </div>
    
    <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
```

### JavaScript Validation (from js07 concepts)

```html
<script>
    const form = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Validate username
        if (username.value.length < 3) {
            username.classList.add('is-invalid');
            username.classList.remove('is-valid');
            isValid = false;
        } else {
            username.classList.add('is-valid');
            username.classList.remove('is-invalid');
        }
        
        // Validate email
        if (!email.value.includes('@')) {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }
        
        // Validate password
        if (password.value.length < 8) {
            password.classList.add('is-invalid');
            password.classList.remove('is-valid');
            isValid = false;
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
        
        // If all valid, submit (or show success message)
        if (isValid) {
            alert('Form submitted successfully!');
            // form.submit(); // Uncomment to actually submit
        }
    });
</script>
```

**How it works:**
1. When form is submitted, JavaScript checks each field
2. JavaScript adds `is-valid` or `is-invalid` classes
3. Bootstrap automatically shows the appropriate feedback message
4. Form only submits if all validations pass

---

## Form Layouts

### Vertical Form (Default)

```html
<form>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name">
    </div>
    
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Horizontal Form

Labels and inputs side-by-side using the grid system:

```html
<form>
    <div class="row mb-3">
        <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="firstName">
        </div>
    </div>
    
    <div class="row mb-3">
        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="lastName">
        </div>
    </div>
    
    <div class="row">
        <div class="col-sm-10 offset-sm-2">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>
```

**Note:** `col-form-label` aligns the label with the input height.

### Inline Form

All elements on one line (typically used for simple forms like search):

```html
<form class="row row-cols-auto g-3 align-items-center">
    <div class="col">
        <label class="visually-hidden" for="inlineEmail">Email</label>
        <input type="email" class="form-control" id="inlineEmail" placeholder="Email">
    </div>
    
    <div class="col">
        <label class="visually-hidden" for="inlinePassword">Password</label>
        <input type="password" class="form-control" id="inlinePassword" placeholder="Password">
    </div>
    
    <div class="col">
        <button type="submit" class="btn btn-primary">Login</button>
    </div>
</form>
```

**The `visually-hidden` class** hides labels visually but keeps them for screen readers.

---

## Form Grid

Use Bootstrap's grid system to create multi-column forms:

### Two-Column Form

```html
<form>
    <div class="row mb-3">
        <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName">
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName">
        </div>
    </div>
    
    <div class="row mb-3">
        <div class="col-md-6">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city">
        </div>
        <div class="col-md-4">
            <label for="state" class="form-label">State</label>
            <select class="form-select" id="state">
                <option>Choose...</option>
                <option>CA</option>
                <option>TX</option>
                <option>NY</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="zip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="zip">
        </div>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## Floating Labels

Bootstrap 5 supports floating labels (labels that move up when you type):

### Basic Floating Label

```html
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
    <label for="floatingEmail">Email address</label>
</div>

<div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
</div>
```

**Important:** With floating labels:
1. Input must come BEFORE label in HTML
2. Input must have a `placeholder` attribute
3. Use `form-floating` wrapper

### Floating Label Textarea

```html
<div class="form-floating mb-3">
    <textarea class="form-control" placeholder="Leave a comment" id="floatingTextarea" style="height: 100px"></textarea>
    <label for="floatingTextarea">Comments</label>
</div>
```

### Floating Label Select

```html
<div class="form-floating mb-3">
    <select class="form-select" id="floatingSelect">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Works with selects</label>
</div>
```

---

## Complete Form Examples

### Example 1: Contact Form

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">
                        <h3>Contact Us</h3>
                    </div>
                    <div class="card-body">
                        <form id="contactForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" required>
                                <div class="form-text">We'll never share your email.</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <select class="form-select" id="subject">
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Sales</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                            </div>
                            
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="newsletter">
                                <label class="form-check-label" for="newsletter">
                                    Subscribe to our newsletter
                                </label>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Example 2: Registration Form with Validation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h3>Create Account</h3>
                    </div>
                    <div class="card-body">
                        <form id="registrationForm">
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username">
                                <div class="invalid-feedback">
                                    Username must be at least 3 characters.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email">
                                <div class="invalid-feedback">
                                    Please enter a valid email.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password">
                                <div class="invalid-feedback">
                                    Password must be at least 8 characters.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword">
                                <div class="invalid-feedback">
                                    Passwords do not match.
                                </div>
                            </div>
                            
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="terms">
                                <label class="form-check-label" for="terms">
                                    I agree to the terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree to the terms.
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        const form = document.getElementById('registrationForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const terms = document.getElementById('terms');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            
            // Validate username
            if (username.value.length < 3) {
                username.classList.add('is-invalid');
                username.classList.remove('is-valid');
                isValid = false;
            } else {
                username.classList.add('is-valid');
                username.classList.remove('is-invalid');
            }
            
            // Validate email
            if (!email.value.includes('@') || !email.value.includes('.')) {
                email.classList.add('is-invalid');
                email.classList.remove('is-valid');
                isValid = false;
            } else {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }
            
            // Validate password
            if (password.value.length < 8) {
                password.classList.add('is-invalid');
                password.classList.remove('is-valid');
                isValid = false;
            } else {
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }
            
            // Validate password match
            if (confirmPassword.value !== password.value) {
                confirmPassword.classList.add('is-invalid');
                confirmPassword.classList.remove('is-valid');
                isValid = false;
            } else {
                confirmPassword.classList.add('is-valid');
                confirmPassword.classList.remove('is-invalid');
            }
            
            // Validate terms checkbox
            if (!terms.checked) {
                terms.classList.add('is-invalid');
                terms.classList.remove('is-valid');
                isValid = false;
            } else {
                terms.classList.add('is-valid');
                terms.classList.remove('is-invalid');
            }
            
            // If everything is valid
            if (isValid) {
                alert('Registration successful!');
                form.reset();
                // Remove validation classes
                [username, email, password, confirmPassword, terms].forEach(field => {
                    field.classList.remove('is-valid', 'is-invalid');
                });
            }
        });
    </script>
</body>
</html>
```

---

## Quick Reference: Form Classes

| Class | Purpose |
|-------|---------|
| `form-label` | Styles labels |
| `form-control` | Styles text inputs, selects, textareas |
| `form-select` | Styles dropdown selects |
| `form-check` | Container for checkbox/radio |
| `form-check-input` | Styles checkbox/radio input |
| `form-check-label` | Styles checkbox/radio label |
| `form-check-inline` | Makes checkboxes/radios inline |
| `form-text` | Helper text below input |
| `form-control-lg` | Large input |
| `form-control-sm` | Small input |
| `is-valid` | Green valid state |
| `is-invalid` | Red invalid state |
| `valid-feedback` | Success message |
| `invalid-feedback` | Error message |
| `input-group` | Groups input with addons |
| `input-group-text` | Text addon for input group |
| `form-floating` | Enables floating labels |
| `col-form-label` | Label for horizontal forms |

---

## Common Form Mistakes

### ❌ Forgetting `for` and `id` Connection

```html
<!-- Wrong - label not connected to input -->
<label class="form-label">Name</label>
<input type="text" class="form-control">
```

```html
<!-- Correct - label and input connected -->
<label for="nameInput" class="form-label">Name</label>
<input type="text" class="form-control" id="nameInput">
```

### ❌ Missing `form-control` on Inputs

```html
<!-- Wrong - input not styled -->
<input type="text">
```

```html
<!-- Correct - input styled with Bootstrap -->
<input type="text" class="form-control">
```

### ❌ Wrong Class on Select

```html
<!-- Wrong - using form-control on select -->
<select class="form-control">
```

```html
<!-- Correct - using form-select -->
<select class="form-select">
```

### ❌ Incorrect Checkbox/Radio Structure

```html
<!-- Wrong - missing form-check wrapper -->
<input type="checkbox" class="form-check-input" id="check1">
<label for="check1">Option</label>
```

```html
<!-- Correct - properly wrapped -->
<div class="form-check">
    <input type="checkbox" class="form-check-input" id="check1">
    <label class="form-check-label" for="check1">Option</label>
</div>
```

---

## Summary

In this lesson, you learned:
- ✅ Bootstrap form structure and classes
- ✅ Styling all form controls (inputs, selects, textareas, checkboxes, radios)
- ✅ Creating input groups with addons
- ✅ Adding validation states (is-valid, is-invalid)
- ✅ Connecting Bootstrap styling with JavaScript validation
- ✅ Different form layouts (vertical, horizontal, inline)
- ✅ Using the grid system for multi-column forms
- ✅ Floating labels
- ✅ Complete form examples with validation

### Connecting to Previous Learning:
Your js07 JavaScript validation + Bootstrap form styling = Professional, validated forms!

---

## Key Terms
- **Form Control**: Input, select, or textarea element
- **Form Label**: Text describing what the input is for
- **Validation State**: Visual indicator showing if input is valid or invalid
- **Input Group**: Input combined with text, button, or icon
- **Form Layout**: How form elements are arranged (vertical, horizontal, inline)
- **Floating Label**: Label that animates up when input is focused
- **Helper Text**: Small text providing additional information about a field
- **Form Feedback**: Success or error message shown during validation
