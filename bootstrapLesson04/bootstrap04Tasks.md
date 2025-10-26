# Lesson B4 Tasks: Bootstrap Forms & Validation Practice

---

## Task 1: GUIDED EXAMPLE - Simple Contact Form

**Follow these steps to create a styled Bootstrap contact form.**

### Step 1: Create the HTML
Create a file called `contact-form.html`:

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
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h3>Contact Us</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <!-- Name Field -->
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" placeholder="John Doe">
                            </div>
                            
                            <!-- Email Field -->
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                <div class="form-text">We'll never share your email with anyone.</div>
                            </div>
                            
                            <!-- Message Field -->
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
                            </div>
                            
                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-primary w-100">Send Message</button>
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

### Step 2: Test It
1. Open the file in your browser
2. Notice how the inputs look clean and professional
3. Click in each field to see the focus effect (blue border)
4. Try resizing the window - form should look good on all sizes

### Step 3: Observe Bootstrap Styling
- Labels have proper spacing
- Inputs have nice borders and padding
- Helper text appears below email
- Submit button stretches full width (`w-100`)

### Step 4: Experiment
Try these changes:
1. Change the card header color from `bg-primary` to `bg-success`
2. Remove `w-100` from the button to see the difference
3. Add another field (like phone number)
4. Change the textarea `rows` from 4 to 6

**Checkpoint:** Your form should look professional with minimal CSS!

---

## Task 2: Registration Form with Checkboxes and Radio Buttons

**Goal:** Practice using checkboxes, radio buttons, and select dropdowns.

### Instructions:
1. Create a file called `registration-form.html`
2. Create a registration form with:
   - Username (text input)
   - Email (email input)
   - Country (select dropdown with 4+ options)
   - Gender (radio buttons: Male, Female, Other)
   - Interests (checkboxes: at least 3 options)
   - Terms agreement (single checkbox)
   - Submit button

### Starter Code:
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
                <h2 class="text-center mb-4">Create Account</h2>
                
                <form>
                    <!-- Username -->
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username">
                    </div>
                    
                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    
                    <!-- Country Select (add this) -->
                    <div class="mb-3">
                        <label for="country" class="form-label">Country</label>
                        <select class="form-select" id="country">
                            <option selected>Choose your country...</option>
                            <!-- Add at least 4 country options -->
                        </select>
                    </div>
                    
                    <!-- Gender Radio Buttons (add this) -->
                    <div class="mb-3">
                        <label class="form-label">Gender</label>
                        <!-- Add 3 radio buttons here -->
                    </div>
                    
                    <!-- Interests Checkboxes (add this) -->
                    <div class="mb-3">
                        <label class="form-label">Interests</label>
                        <!-- Add at least 3 checkboxes here -->
                    </div>
                    
                    <!-- Terms Checkbox -->
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="terms">
                        <label class="form-check-label" for="terms">
                            I agree to the terms and conditions
                        </label>
                    </div>
                    
                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-success w-100">Register</button>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ Username and email inputs styled with `form-control`
- ✅ Country select dropdown with at least 4 options
- ✅ Gender radio buttons (3 options, all with same `name` attribute)
- ✅ Interests checkboxes (at least 3 options)
- ✅ Terms checkbox at the bottom
- ✅ Submit button spans full width

**💡 Hint:** Remember radio buttons need the same `name` attribute to work as a group!

**Suggested Countries:** United States, Canada, United Kingdom, Australia  
**Suggested Interests:** Sports, Music, Technology, Reading, Travel

---

## Task 3: Form with Input Groups

**Goal:** Practice creating input groups with icons and addons.

### Instructions:
1. Create a file called `input-groups.html`
2. Create a form with these input groups:
   - Username with "@" symbol before it
   - Website URL with "https://" before it and ".com" after it
   - Price with "$" before and ".00" after
   - Search box with search button after it

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Groups</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Input Groups Demo</h2>
        
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <!-- Username with @ -->
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" id="username" placeholder="username">
                    </div>
                </div>
                
                <!-- Website URL (add this) -->
                <div class="mb-3">
                    <label for="website" class="form-label">Website</label>
                    <div class="input-group">
                        <!-- Add https:// before and .com after -->
                    </div>
                </div>
                
                <!-- Price (add this) -->
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <div class="input-group">
                        <!-- Add $ before and .00 after -->
                    </div>
                </div>
                
                <!-- Search with Button (add this) -->
                <div class="mb-3">
                    <label for="search" class="form-label">Search</label>
                    <div class="input-group">
                        <!-- Add input and button -->
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

### Requirements:
- ✅ Username input with "@" prefix
- ✅ Website input with "https://" prefix and ".com" suffix
- ✅ Price input with "$" prefix and ".00" suffix
- ✅ Search input with "Search" button
- ✅ All labels properly connected to inputs

**💡 Hint:** Use `<span class="input-group-text">` for text addons and `<button class="btn btn-primary">` for button addons.

---

## Task 4: Form Validation with Bootstrap Classes

**Goal:** Add visual validation feedback to a form.

### Instructions:
1. Create a file called `validated-form.html`
2. Create a login form with username and password
3. Add validation feedback messages
4. Style one field as valid, one as invalid (to see both states)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validated Form</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Login</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <!-- Valid Username -->
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control is-valid" id="username" value="john_doe">
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            
                            <!-- Invalid Password -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control is-invalid" id="password" value="123">
                                <div class="invalid-feedback">
                                    Password must be at least 8 characters.
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary w-100">Login</button>
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

### Observe:
- Green border on username field with checkmark
- Red border on password field with X
- Green "Looks good!" message
- Red error message

### Experiment:
1. Remove `is-valid` from username - what happens?
2. Change `is-invalid` to `is-valid` on password
3. Try adding both classes to same field (Bootstrap shows invalid by default)

**Key Learning:** The `is-valid` and `is-invalid` classes control the visual state. JavaScript will add/remove these based on validation logic.

---

## Task 5: Form with JavaScript Validation (Connecting to js07)

**Goal:** Combine Bootstrap styling with JavaScript validation.

### Instructions:
1. Create a file called `signup-validated.html`
2. Create a signup form with username, email, and password
3. Add JavaScript validation that:
   - Checks username is at least 3 characters
   - Checks email contains "@"
   - Checks password is at least 8 characters
   - Adds `is-valid` or `is-invalid` classes based on validation
   - Only submits if all fields are valid

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup with Validation</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2 class="text-center mb-4">Sign Up</h2>
                
                <form id="signupForm">
                    <!-- Username -->
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username">
                        <div class="invalid-feedback">
                            Username must be at least 3 characters.
                        </div>
                        <div class="valid-feedback">
                            Username looks good!
                        </div>
                    </div>
                    
                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email">
                        <div class="invalid-feedback">
                            Please enter a valid email address.
                        </div>
                        <div class="valid-feedback">
                            Email looks good!
                        </div>
                    </div>
                    
                    <!-- Password -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password">
                        <div class="invalid-feedback">
                            Password must be at least 8 characters.
                        </div>
                        <div class="valid-feedback">
                            Strong password!
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100">Create Account</button>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        const form = document.getElementById('signupForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            
            // Validate username (at least 3 characters)
            if (username.value.length < 3) {
                username.classList.add('is-invalid');
                username.classList.remove('is-valid');
                isValid = false;
            } else {
                username.classList.add('is-valid');
                username.classList.remove('is-invalid');
            }
            
            // Validate email (must contain @)
            // ADD YOUR VALIDATION CODE HERE
            
            
            // Validate password (at least 8 characters)
            // ADD YOUR VALIDATION CODE HERE
            
            
            // If all valid, show success message
            if (isValid) {
                alert('Account created successfully!');
                form.reset();
                // Remove all validation classes
                username.classList.remove('is-valid', 'is-invalid');
                email.classList.remove('is-valid', 'is-invalid');
                password.classList.remove('is-valid', 'is-invalid');
            }
        });
    </script>
</body>
</html>
```

### Requirements:
- ✅ Form validates on submit
- ✅ Username validation: minimum 3 characters
- ✅ Email validation: must contain "@"
- ✅ Password validation: minimum 8 characters
- ✅ Shows green checkmarks for valid fields
- ✅ Shows red X for invalid fields
- ✅ Shows appropriate feedback messages
- ✅ Only shows success alert if all fields valid

**💡 Hint:** Follow the pattern shown for username validation to complete email and password validation.

---

## Task 6: Multi-Column Form with Grid

**Goal:** Create a form using Bootstrap grid for layout.

### Instructions:
1. Create a file called `checkout-form.html`
2. Create a checkout form with:
   - Full name (full width)
   - First name and last name (two columns)
   - Address (full width)
   - City, State, Zip (three columns: 6-4-2 split)
   - Card number (full width)
   - Card expiry and CVV (two columns)
   - Submit button

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout Form</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h2 class="mb-4">Checkout</h2>
                
                <form>
                    <!-- Full Name (full width) -->
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName">
                    </div>
                    
                    <!-- First and Last Name (two columns) -->
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
                    
                    <!-- Address (full width) -->
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address">
                    </div>
                    
                    <!-- City, State, Zip (add this as 6-4-2 columns) -->
                    <div class="row mb-3">
                        <!-- Add City (6 columns) -->
                        
                        <!-- Add State (4 columns) -->
                        
                        <!-- Add Zip (2 columns) -->
                        
                    </div>
                    
                    <!-- Card Number (full width) -->
                    <div class="mb-3">
                        <label for="cardNumber" class="form-label">Card Number</label>
                        <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456">
                    </div>
                    
                    <!-- Card Expiry and CVV (add this as two columns) -->
                    <div class="row mb-3">
                        <!-- Add Expiry Date (8 columns) -->
                        
                        <!-- Add CVV (4 columns) -->
                        
                    </div>
                    
                    <button type="submit" class="btn btn-success btn-lg w-100">Complete Purchase</button>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ Full name field (full width)
- ✅ First and last name (50/50 split)
- ✅ Address field (full width)
- ✅ City, State, Zip (6-4-2 column split)
- ✅ Card number (full width)
- ✅ Expiry and CVV (two columns)
- ✅ All fields stack on mobile
- ✅ Large submit button

**💡 Testing:** Resize the window to see fields stack vertically on mobile!

---

## Task 7: Form with Floating Labels

**Goal:** Create a modern form using floating labels.

### Instructions:
1. Create a file called `floating-labels.html`
2. Create a contact form with floating labels for:
   - Name (text input)
   - Email (email input)
   - Subject (select dropdown)
   - Message (textarea)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Floating Labels</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2 class="text-center mb-4">Contact Form</h2>
                
                <form>
                    <!-- Name with Floating Label -->
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Your Name">
                        <label for="floatingName">Your Name</label>
                    </div>
                    
                    <!-- Email with Floating Label (add this) -->
                    
                    
                    <!-- Subject Select with Floating Label (add this) -->
                    <!-- Remember: select needs options -->
                    
                    
                    <!-- Message Textarea with Floating Label (add this) -->
                    <!-- Remember: set style="height: 100px" for textarea -->
                    
                    
                    <button type="submit" class="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ All fields use floating labels
- ✅ Input must come BEFORE label in HTML
- ✅ All inputs must have `placeholder` attribute
- ✅ Subject dropdown has at least 3 options
- ✅ Textarea height set to 100px

**💡 Watch:** Click in a field and type - the label animates upward!

**Floating Label Structure:**
```html
<div class="form-floating">
    <input class="form-control" placeholder="...">
    <label>Label Text</label>
</div>
```

---

## Task 8: Debug the Form

**Goal:** Find and fix form-related errors.

### Instructions:
1. Create a file called `debug-form.html`
2. Copy this code (it has 8 errors!):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debug Form</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Debug This Form!</h2>
        
        <form>
            <!-- Error 1: Label not connected to input -->
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            
            <!-- Error 2: Missing form-control class -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email">
            </div>
            
            <!-- Error 3: Wrong class on select -->
            <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <select class="form-control" id="country">
                    <option>USA</option>
                    <option>Canada</option>
                </select>
            </div>
            
            <!-- Error 4 & 5: Checkbox missing wrapper and wrong classes -->
            <input type="checkbox" id="terms">
            <label for="terms">I agree</label>
            
            <!-- Error 6 & 7: Radio buttons need same name attribute -->
            <div class="mb-3">
                <label class="form-label">Gender</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender1" id="male">
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender2" id="female">
                    <label class="form-check-label" for="female">Female</label>
                </div>
            </div>
            
            <!-- Error 8: Validation feedback outside form-control div -->
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control is-invalid" id="password">
            <div class="invalid-feedback">
                Password required.
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Errors to Find:
1. ❌ Label missing `for` attribute (not connected to input)
2. ❌ Email input missing `form-control` class
3. ❌ Select using `form-control` instead of `form-select`
4. ❌ Checkbox missing `form-check` wrapper div
5. ❌ Checkbox input and label missing proper classes
6. ❌ Radio buttons have different `name` attributes (should be same)
7. ❌ Radio button names should both be "gender" not "gender1" and "gender2"
8. ❌ Password field missing `mb-3` wrapper div around label, input, and feedback

**Success Criteria:**
- All labels properly connected to inputs
- All inputs styled correctly
- Checkboxes and radios properly structured
- Radio buttons work as a group
- Validation feedback displays correctly

---

## Task 9: Complete Survey Form

**Goal:** Build a comprehensive form using all learned concepts.

### Instructions:
1. Create a file called `survey-form.html`
2. Build a customer satisfaction survey with:
   - Personal info: Name, Email, Age (select: 18-25, 26-35, 36-50, 50+)
   - Rating: "How satisfied are you?" (radio: Very Satisfied → Very Unsatisfied, 5 options)
   - Features used: Checkboxes for 5 different features
   - Feedback: Textarea for comments
   - Subscribe: Checkbox for newsletter
   - Submit button

### Starter Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Survey</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header bg-info text-white">
                        <h3>Customer Satisfaction Survey</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <!-- Personal Information Section -->
                            <h5 class="mb-3">Personal Information</h5>
                            
                            <!-- Add Name field -->
                            
                            <!-- Add Email field -->
                            
                            <!-- Add Age Range select -->
                            
                            
                            <hr class="my-4">
                            
                            <!-- Satisfaction Rating Section -->
                            <h5 class="mb-3">How satisfied are you with our service?</h5>
                            
                            <!-- Add 5 radio buttons:
                                 Very Satisfied, Satisfied, Neutral, 
                                 Dissatisfied, Very Dissatisfied -->
                            
                            
                            <hr class="my-4">
                            
                            <!-- Features Section -->
                            <h5 class="mb-3">Which features have you used?</h5>
                            
                            <!-- Add 5 checkboxes for features -->
                            
                            
                            <hr class="my-4">
                            
                            <!-- Feedback Section -->
                            <h5 class="mb-3">Additional Feedback</h5>
                            
                            <!-- Add textarea for comments -->
                            
                            
                            <!-- Newsletter Checkbox -->
                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="newsletter">
                                <label class="form-check-label" for="newsletter">
                                    Send me updates and news
                                </label>
                            </div>
                            
                            <button type="submit" class="btn btn-info btn-lg w-100">Submit Survey</button>
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

### Requirements:
- ✅ Name and email text inputs
- ✅ Age range select with 4 options
- ✅ 5 satisfaction radio buttons (same name!)
- ✅ 5 feature checkboxes
- ✅ Comments textarea (at least 4 rows)
- ✅ Newsletter subscription checkbox
- ✅ Proper section headers with dividers
- ✅ All fields properly labeled
- ✅ Submit button at bottom

**💡 Bonus:** Add JavaScript validation to require all fields except the newsletter checkbox!

---

## Challenge Task: Complete Registration System

**Goal:** Build a full registration form with advanced validation.

### Instructions:
1. Create `advanced-registration.html`
2. Build a complete user registration form with:

**Form Fields:**
- Username (min 3 characters)
- Email (must contain @ and .)
- Password (min 8 characters)
- Confirm Password (must match password)
- Phone number (input group with country code dropdown)
- Date of birth (date input)
- Gender (radio buttons)
- Country (select dropdown)
- Bio (textarea, optional)
- Profile picture (file input)
- Interests (at least 5 checkboxes)
- Terms agreement (required checkbox)

**Validation Requirements:**
- All fields required except bio
- JavaScript validation on submit
- Show is-valid/is-invalid states
- Show appropriate error messages
- Only submit if all validations pass

**Layout Requirements:**
- Use grid for multi-column layout where appropriate
- Card wrapper around form
- Proper section headers
- Professional styling

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Registration</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h3>Create Your Account</h3>
                    </div>
                    <div class="card-body">
                        <form id="registrationForm">
                            <!-- Account Information -->
                            <h5 class="mb-3">Account Information</h5>
                            
                            <!-- Add all account fields here -->
                            
                            
                            <hr class="my-4">
                            
                            <!-- Personal Information -->
                            <h5 class="mb-3">Personal Information</h5>
                            
                            <!-- Add personal info fields here -->
                            
                            
                            <hr class="my-4">
                            
                            <!-- Interests and Profile -->
                            <h5 class="mb-3">Interests & Profile</h5>
                            
                            <!-- Add interests and profile fields here -->
                            
                            
                            <hr class="my-4">
                            
                            <!-- Terms -->
                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="terms">
                                <label class="form-check-label" for="terms">
                                    I agree to the <a href="#">Terms and Conditions</a>
                                </label>
                                <div class="invalid-feedback">
                                    You must agree to the terms.
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary btn-lg w-100">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Add your validation JavaScript here
        // Follow the pattern from Task 5
        
    </script>
</body>
</html>
```

### Detailed Requirements:

**Account Section:**
- ✅ Username: text input with validation (min 3 chars)
- ✅ Email: email input with @ and . validation
- ✅ Password: password input (min 8 chars)
- ✅ Confirm Password: must match password

**Personal Section:**
- ✅ Phone: input group with country code dropdown (+1, +44, +91, etc.)
- ✅ Date of Birth: date input
- ✅ Gender: radio buttons (Male, Female, Other, Prefer not to say)
- ✅ Country: select with at least 8 countries

**Profile Section:**
- ✅ Bio: textarea (optional, but validate max 500 chars if filled)
- ✅ Profile Picture: file input
- ✅ Interests: at least 5 checkboxes (Sports, Music, Tech, Reading, Travel, Gaming, Art, etc.)

**JavaScript Validation:**
```javascript
// Validate each field
// Add is-valid or is-invalid classes
// Check password match
// Validate terms checkbox is checked
// Show success message if all valid
// Prevent submission if invalid
```

### Bonus Features:
- ✨ Real-time validation (validate as user types, not just on submit)
- ✨ Password strength meter
- ✨ Show/hide password toggle button
- ✨ Character counter for bio field
- ✨ Preview selected profile picture
- ✨ Custom error messages based on specific validation failures
- ✨ Success page after submission

**Testing Checklist:**
- [ ] All required fields validate correctly
- [ ] Password confirmation works
- [ ] Terms checkbox must be checked
- [ ] Form shows validation states visually
- [ ] Form prevents invalid submission
- [ ] Layout responsive on mobile
- [ ] All labels connected to inputs
- [ ] Radio buttons work correctly
- [ ] Checkboxes work independently

---

## Tips for Form Success

1. **Always Connect Labels**
   ```html
   <label for="inputId">Label</label>
   <input id="inputId">
   ```

2. **Use Correct Classes**
   - Text inputs: `form-control`
   - Selects: `form-select`
   - Checkboxes/radios: `form-check-input`

3. **Structure Checkboxes/Radios**
   ```html
   <div class="form-check">
       <input class="form-check-input">
       <label class="form-check-label">
   </div>
   ```

4. **Add Validation Feedback**
   ```html
   <input class="form-control">
   <div class="invalid-feedback">Error</div>
   <div class="valid-feedback">Success</div>
   ```

5. **Test Validation**
   - Try valid inputs
   - Try invalid inputs
   - Check all edge cases

---

## Quick Reference: Form Classes

| Element | Class |
|---------|-------|
| Label | `form-label` |
| Text Input | `form-control` |
| Select | `form-select` |
| Textarea | `form-control` |
| Checkbox Container | `form-check` |
| Checkbox Input | `form-check-input` |
| Radio Input | `form-check-input` |
| Check/Radio Label | `form-check-label` |
| Input Group | `input-group` |
| Input Group Text | `input-group-text` |
| Valid State | `is-valid` |
| Invalid State | `is-invalid` |
| Valid Message | `valid-feedback` |
| Invalid Message | `invalid-feedback` |
| Helper Text | `form-text` |
| Floating Wrapper | `form-floating` |

---

## Answer Key for Task 8 (Debug the Form)

Here's the corrected code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debug Form - Fixed</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Debug This Form!</h2>
        
        <form>
            <!-- FIX 1: Added for="name" to label -->
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            
            <!-- FIX 2: Added form-control class -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            
            <!-- FIX 3: Changed form-control to form-select -->
            <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country">
                    <option>USA</option>
                    <option>Canada</option>
                </select>
            </div>
            
            <!-- FIX 4 & 5: Added form-check wrapper and proper classes -->
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="terms">
                <label class="form-check-label" for="terms">I agree</label>
            </div>
            
            <!-- FIX 6 & 7: Both radios now have name="gender" -->
            <div class="mb-3">
                <label class="form-label">Gender</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="male">
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="female">
                    <label class="form-check-label" for="female">Female</label>
                </div>
            </div>
            
            <!-- FIX 8: Wrapped in mb-3 div -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control is-invalid" id="password">
                <div class="invalid-feedback">
                    Password required.
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Corrections Made:**
1. Added `for="name"` to name label
2. Added `class="form-control"` to email input
3. Changed `form-control` to `form-select` on select element
4. Added `<div class="form-check">` wrapper around checkbox
5. Added `form-check-input` and `form-check-label` classes
6. Changed both radio `name` attributes to "gender"
7. Same as #6 (both radios need same name)
8. Wrapped password field in `<div class="mb-3">` container
