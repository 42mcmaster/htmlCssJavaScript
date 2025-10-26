# Lesson 07 Tasks: Form Validation

---

## Task 1: GUIDED EXAMPLE - Login Form with Validation

**Follow these steps to create a login form with complete validation.**

### Step 1: Create the HTML File
Create a file called `login-form.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .login-container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        input:focus {
            outline: none;
            border-color: #2196f3;
        }
        button {
            width: 100%;
            padding: 15px;
            background-color: #2196f3;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }
        button:hover {
            background-color: #1976d2;
        }
        .message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            display: none;
        }
        .error {
            background-color: #ffcdd2;
            color: #c62828;
        }
        .success {
            background-color: #c8e6c9;
            color: #2e7d32;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter username">
        </div>
        
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password">
        </div>
        
        <button id="loginBtn">Login</button>
        
        <div class="message" id="message"></div>
    </div>
    
    <script>
        // Select elements
        let usernameInput = document.getElementById('username');
        let passwordInput = document.getElementById('password');
        let loginBtn = document.getElementById('loginBtn');
        let message = document.getElementById('message');
        
        // Add click event listener
        loginBtn.addEventListener('click', function() {
            // Get values from inputs
            let username = usernameInput.value;
            let password = passwordInput.value;
            
            // Hide previous message
            message.style.display = 'none';
            message.className = 'message';
            
            // VALIDATION STEP 1: Check if username is empty
            if (username === '') {
                message.textContent = 'Username is required!';
                message.className = 'message error';
                message.style.display = 'block';
                return;  // Stop here if error
            }
            
            // VALIDATION STEP 2: Check username length
            if (username.length < 3) {
                message.textContent = 'Username must be at least 3 characters';
                message.className = 'message error';
                message.style.display = 'block';
                return;
            }
            
            // VALIDATION STEP 3: Check if password is empty
            if (password === '') {
                message.textContent = 'Password is required!';
                message.className = 'message error';
                message.style.display = 'block';
                return;
            }
            
            // VALIDATION STEP 4: Check password length
            if (password.length < 6) {
                message.textContent = 'Password must be at least 6 characters';
                message.className = 'message error';
                message.style.display = 'block';
                return;
            }
            
            // ALL VALIDATION PASSED!
            message.textContent = 'Login successful! Welcome, ' + username + '!';
            message.className = 'message success';
            message.style.display = 'block';
            
            // Log the successful login (in real app, would send to server)
            console.log('Login attempt:', username);
        });
    </script>
</body>
</html>
```

### Step 2: Test the Form
1. Open the file in your browser
2. Try clicking "Login" with empty fields → Should show "Username is required!"
3. Type "ab" as username → Should show "Username must be at least 3 characters"
4. Type valid username but no password → Should show "Password is required!"
5. Type password less than 6 characters → Should show error
6. Fill both correctly → Should show success message

**✅ Checkpoint:** Each validation should trigger at the right time with the correct error message.

**Key Concepts in This Example:**
- **Get values first** - Always retrieve input values at the start
- **Validate in order** - Check most basic things first (empty, then length)
- **Use return** - Stop execution after showing an error
- **Clear messages** - Hide previous messages before showing new ones
- **Specific errors** - Tell users exactly what's wrong

---

## Task 2: Email Subscription Form

**Goal:** Practice email validation with clear error messages.

### Instructions:
1. Create a file called `email-subscription.html`
2. Create a form with email input and "Subscribe" button
3. Validate that:
   - Email is not empty
   - Email contains `@` symbol
   - Email contains `.` (dot)
   - @ comes before the dot
4. Show specific error for each validation failure

### Starter Code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Newsletter Subscription</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #e8f5e9;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #2e7d32;
        }
        input {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            margin-bottom: 15px;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            padding: 15px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
        }
        #message {
            margin-top: 15px;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📧 Subscribe to Our Newsletter</h1>
        <p style="text-align: center;">Get weekly updates delivered to your inbox</p>
        
        <input type="text" id="emailInput" placeholder="Enter your email address">
        <button id="subscribeBtn">Subscribe</button>
        
        <div id="message"></div>
    </div>
    
    <script>
        let emailInput = document.getElementById('emailInput');
        let subscribeBtn = document.getElementById('subscribeBtn');
        let message = document.getElementById('message');
        
        subscribeBtn.addEventListener('click', function() {
            let email = emailInput.value;
            
            // Reset message
            message.textContent = '';
            message.style.backgroundColor = '';
            message.style.color = '';
            
            // STEP 1: Check if email is empty
            // Your code here
            
            // STEP 2: Check if email contains @
            // Your code here
            
            // STEP 3: Check if email contains .
            // Your code here
            
            // STEP 4: Check if @ comes before .
            // Hint: use email.indexOf('@') and email.lastIndexOf('.')
            
            // STEP 5: If all validation passes, show success
            // Your code here
        });
    </script>
</body>
</html>
```

### Expected Behavior:
- Input: `` (empty) → "Email is required!"
- Input: `userexample.com` → "Email must contain @ symbol"
- Input: `user@examplecom` → "Email must contain a domain (e.g., .com)"
- Input: `user.example@com` → "Invalid email format"
- Input: `user@example.com` → "Thank you for subscribing! ✓"

**💡 Hints:**
- Use `email.includes('@')` to check for @
- Use `email.includes('.')` to check for dot
- Use `email.indexOf('@') < email.lastIndexOf('.')` to check order

---

## Task 3: Age Verification System

**Goal:** Practice number validation with range checking.

### Instructions:
1. Create a file called `age-verification.html`
2. Create a form asking for user's age
3. Validate that:
   - Age is not empty
   - Age is a valid number (convert with `Number()`)
   - Age is between 13 and 120
4. Show different messages for different age ranges:
   - Under 13: "Sorry, you must be at least 13 to use this service"
   - 13-17: "Access granted (parental supervision required)"
   - 18+: "Full access granted! Welcome!"
   - Over 120: "Please enter a valid age"

### Starter Code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Age Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff3e0;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #e65100;
        }
        input {
            width: 100%;
            padding: 15px;
            font-size: 18px;
            border: 2px solid #ddd;
            border-radius: 5px;
            margin: 15px 0;
            box-sizing: border-box;
            text-align: center;
        }
        button {
            width: 100%;
            padding: 15px;
            background-color: #ff9800;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
        }
        #result {
            margin-top: 20px;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔒 Age Verification</h1>
        <p style="text-align: center;">Please verify your age to continue</p>
        
        <input type="number" id="ageInput" placeholder="Enter your age">
        <button id="verifyBtn">Verify Age</button>
        
        <div id="result"></div>
    </div>
    
    <script>
        let ageInput = document.getElementById('ageInput');
        let verifyBtn = document.getElementById('verifyBtn');
        let result = document.getElementById('result');
        
        verifyBtn.addEventListener('click', function() {
            // Get age and convert to number
            let age = Number(ageInput.value);
            
            // Reset result
            result.textContent = '';
            result.style.backgroundColor = '';
            result.style.color = '';
            
            // Check if empty
            if (ageInput.value === '') {
                result.textContent = 'Please enter your age';
                result.style.backgroundColor = '#ffcdd2';
                result.style.color = '#c62828';
            }
            // Check if under 13
            else if (age < 13) {
                // Your code here - show red message
            }
            // Check if 13-17
            else if (age >= 13 && age < 18) {
                // Your code here - show yellow message
            }
            // Check if over 120
            else if (age > 120) {
                // Your code here - show red message
            }
            // Must be 18-120 (valid adult)
            else {
                // Your code here - show green message
            }
        });
    </script>
</body>
</html>
```

### Test Cases:
- Age: `` (empty) → "Please enter your age"
- Age: `10` → "Sorry, you must be at least 13..."
- Age: `15` → "Access granted (parental supervision required)"
- Age: `25` → "Full access granted! Welcome!"
- Age: `150` → "Please enter a valid age"

**💡 Hint:** Remember to use `Number()` to convert the input value to a number!

---

## Task 4: Password Confirmation Form

**Goal:** Practice matching fields validation.

### Instructions:
1. Create a file called `password-setup.html`
2. Create a form with:
   - Password input
   - Confirm password input
   - "Set Password" button
3. Validate that:
   - Both fields are not empty
   - Password is at least 8 characters
   - Both passwords match exactly
4. Show specific error for each case

### Starter Code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Set New Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 450px;
            margin: 50px auto;
            padding: 20px;
            background-color: #e1f5fe;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #01579b;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .hint {
            font-size: 13px;
            color: #777;
            margin-top: 5px;
        }
        button {
            width: 100%;
            padding: 15px;
            background-color: #2196f3;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
        }
        #message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔐 Create New Password</h1>
        
        <div class="form-group">
            <label for="password">New Password</label>
            <input type="password" id="password" placeholder="Enter new password">
            <div class="hint">Must be at least 8 characters</div>
        </div>
        
        <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Re-enter password">
        </div>
        
        <button id="setPasswordBtn">Set Password</button>
        
        <div id="message"></div>
    </div>
    
    <script>
        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirmPassword');
        let setPasswordBtn = document.getElementById('setPasswordBtn');
        let message = document.getElementById('message');
        
        setPasswordBtn.addEventListener('click', function() {
            // Get both password values
            let password = passwordInput.value;
            let confirmPassword = confirmPasswordInput.value;
            
            // Clear previous message
            message.textContent = '';
            message.style.backgroundColor = '';
            message.style.color = '';
            
            // Validation Step 1: Check if password is empty
            // Your code here
            
            // Validation Step 2: Check if confirm password is empty
            // Your code here
            
            // Validation Step 3: Check password length (at least 8)
            // Your code here
            
            // Validation Step 4: Check if passwords match
            // Your code here
            
            // If all pass: Show success message
            // Your code here
        });
    </script>
</body>
</html>
```

### Expected Behavior:
- Empty password → "Password is required!"
- Empty confirm → "Please confirm your password"
- Password `"short"` → "Password must be at least 8 characters"
- Password `"password123"`, Confirm `"password456"` → "Passwords do not match!"
- Both `"password123"` → "Password set successfully! ✓"

**💡 Hint:** Use the `!==` operator to check if passwords don't match.

---

## Task 5: CHALLENGE - Complete Contact Form

**Goal:** Combine all validation techniques in one comprehensive form.

### Instructions:
Create a complete contact form with the following fields and validations:

**Form Fields:**
1. **Name** (required, 2-50 characters)
2. **Email** (required, must be valid email format)
3. **Phone** (required, must be exactly 10 digits)
4. **Age** (optional, but if provided must be 18-100)
5. **Message** (required, 10-500 characters)
6. **Terms checkbox** (must be checked)

**Validation Requirements:**
- Validate each field in order
- Show ONE specific error at a time
- Display success message only if ALL validations pass
- Clear previous messages before showing new ones

### Starter Template:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .form-container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }
        input, textarea {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        textarea {
            resize: vertical;
            min-height: 120px;
        }
        .hint {
            font-size: 13px;
            color: #777;
            margin-top: 5px;
        }
        .checkbox-group {
            margin: 20px 0;
        }
        .checkbox-group input {
            width: auto;
            margin-right: 10px;
        }
        button {
            width: 100%;
            padding: 15px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
        }
        button:hover {
            background-color: #45a049;
        }
        .message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            display: none;
        }
        .error {
            background-color: #ffcdd2;
            color: #c62828;
        }
        .success {
            background-color: #c8e6c9;
            color: #2e7d32;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>📬 Contact Us</h1>
        
        <div class="form-group">
            <label for="name">Full Name *</label>
            <input type="text" id="name" placeholder="Enter your full name">
            <div class="hint">2-50 characters</div>
        </div>
        
        <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="text" id="email" placeholder="your@email.com">
        </div>
        
        <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input type="text" id="phone" placeholder="1234567890">
            <div class="hint">10 digits, no spaces or dashes</div>
        </div>
        
        <div class="form-group">
            <label for="age">Age (optional)</label>
            <input type="number" id="age" placeholder="Enter your age">
            <div class="hint">If provided, must be 18-100</div>
        </div>
        
        <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" placeholder="Enter your message (10-500 characters)"></textarea>
        </div>
        
        <div class="checkbox-group">
            <input type="checkbox" id="terms">
            <label for="terms">I agree to the Terms and Conditions *</label>
        </div>
        
        <button id="submitBtn">Send Message</button>
        
        <div class="message" id="messageBox"></div>
    </div>
    
    <script>
        // Select all form elements
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let phoneInput = document.getElementById('phone');
        let ageInput = document.getElementById('age');
        let messageTextarea = document.getElementById('message');
        let termsCheckbox = document.getElementById('terms');
        let submitBtn = document.getElementById('submitBtn');
        let messageBox = document.getElementById('messageBox');
        
        submitBtn.addEventListener('click', function() {
            // Get all values
            // Add your code here
            
            // Hide previous messages
            messageBox.style.display = 'none';
            messageBox.className = 'message';
            
            // VALIDATE NAME
            // - Check if empty
            // - Check length (2-50)
            
            // VALIDATE EMAIL
            // - Check if empty
            // - Check contains @ and .
            // - Check @ before .
            
            // VALIDATE PHONE
            // - Check if empty
            // - Check if exactly 10 characters
            // - Bonus: Check if all digits
            
            // VALIDATE AGE (only if provided)
            // - If not empty, check range 18-100
            
            // VALIDATE MESSAGE
            // - Check if empty
            // - Check length (10-500)
            
            // VALIDATE TERMS
            // - Check if checked
            
            // IF ALL PASS
            // - Show success message
            // - Log the data to console
        });
    </script>
</body>
</html>
```

### Test Scenarios:
1. Submit empty form → Should show "Full name is required!"
2. Name: `"A"` → "Name must be 2-50 characters"
3. Valid name, invalid email → Show email error
4. Valid name/email, phone: `"123"` → "Phone must be exactly 10 digits"
5. All valid except terms → "You must agree to terms"
6. All valid → "Message sent successfully! We'll be in touch soon."

**💡 Bonus Challenge:** 
- Check if phone contains only numbers: `phone.length === 10 && !isNaN(phone)`
- Count characters as user types and display remaining: `500 - message.length`

---

## Tips for Success

### 1. Always Validate in a Logical Order
```javascript
// ✅ Good order
if (field === '') { }           // 1. Check empty first
else if (field.length < 5) { }  // 2. Check length
else if (!field.includes('@')) { } // 3. Check format

// ❌ Bad order - will check format on empty field
if (!field.includes('@')) { }   // Fails if empty!
```

### 2. Use return to Stop After Errors
```javascript
if (username === '') {
    showError('Username required');
    return;  // Stop here, don't check more
}

// This only runs if username is NOT empty
if (username.length < 3) {
    showError('Username too short');
    return;
}
```

### 3. Convert Number Inputs
```javascript
// Always convert to number
let age = Number(ageInput.value);

// Check if empty BEFORE converting
if (ageInput.value === '') {
    // Empty
}
else if (Number(ageInput.value) < 18) {
    // Too young
}
```

### 4. Clear Messages Before Showing New Ones
```javascript
// Reset first
errorMsg.style.display = 'none';
successMsg.style.display = 'none';

// Then show appropriate one
if (error) {
    errorMsg.style.display = 'block';
}
```

### 5. Be Specific with Error Messages
```javascript
// ❌ Vague
"Invalid input"

// ✅ Specific
"Username must be 3-20 characters"
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Not Converting to Number
```javascript
let age = document.getElementById('age').value; // String!
if (age > 18) { }  // String comparison - unreliable
```

### ✅ Correct:
```javascript
let age = Number(document.getElementById('age').value);
if (age > 18) { }  // Number comparison - reliable
```

---

### ❌ Mistake 2: Using = Instead of ===
```javascript
if (username = '') { }  // Assignment, not comparison!
```

### ✅ Correct:
```javascript
if (username === '') { }  // Comparison
```

---

### ❌ Mistake 3: Checking Length Before Empty
```javascript
if (password.length < 8) { }  // Error if password is empty
if (password === '') { }      // Never reached
```

### ✅ Correct:
```javascript
if (password === '') { 
    return; 
}
if (password.length < 8) { }  // Safe now
```

---

### ❌ Mistake 4: Not Using return
```javascript
if (username === '') {
    errorMsg.textContent = 'Username required';
}
if (username.length < 3) {
    errorMsg.textContent = 'Too short';  // Overwrites!
}
```

### ✅ Correct:
```javascript
if (username === '') {
    errorMsg.textContent = 'Username required';
    return;  // Stop here
}
if (username.length < 3) {
    errorMsg.textContent = 'Too short';
}
```

---

### ❌ Mistake 5: Wrong includes() Logic
```javascript
// ❌ This is backwards
if (email.includes('@') === false) { }

// ❌ Confusing
if (!email.includes('@') === true) { }
```

### ✅ Correct:
```javascript
// Check if email does NOT include @
if (!email.includes('@')) { }

// Or be explicit
if (email.includes('@') === false) { }
```

---

## Validation Patterns Quick Reference

### Required Field
```javascript
if (field === '') {
    // Error: field is required
    return;
}
```

### Length Check
```javascript
if (field.length < minLength) {
    // Error: too short
    return;
}
if (field.length > maxLength) {
    // Error: too long
    return;
}
```

### Number Range
```javascript
let num = Number(field.value);

if (field.value === '') {
    // Error: required
    return;
}
if (num < min || num > max) {
    // Error: out of range
    return;
}
```

### Email Format
```javascript
if (!email.includes('@') || !email.includes('.')) {
    // Error: invalid format
    return;
}
if (email.indexOf('@') > email.lastIndexOf('.')) {
    // Error: @ must come before .
    return;
}
```

### Matching Fields
```javascript
if (password !== confirmPassword) {
    // Error: fields don't match
    return;
}
```

### Checkbox
```javascript
if (!checkbox.checked) {
    // Error: must agree
    return;
}
```

---

## Testing Checklist

For each form you build, test these scenarios:

- [ ] Submit with all fields empty
- [ ] Submit with one field empty at a time
- [ ] Test minimum length violations
- [ ] Test maximum length violations
- [ ] Test invalid formats (email, phone, etc.)
- [ ] Test number ranges (too low, too high)
- [ ] Test matching fields with mismatched data
- [ ] Test unchecked required checkboxes
- [ ] Submit with all valid data
- [ ] Check that success message appears correctly

---

## Debugging Tips

### If validation isn't working:

1. **Check the console** (F12) for errors
2. **Add console.log()** to see values:
   ```javascript
   let username = usernameInput.value;
   console.log('Username:', username);
   console.log('Length:', username.length);
   ```

3. **Check if you converted to number:**
   ```javascript
   console.log(typeof age);  // Should be 'number' not 'string'
   ```

4. **Verify element IDs match:**
   ```javascript
   console.log(usernameInput);  // Should not be null
   ```

5. **Test one validation at a time** - Comment out others while debugging

---

## Next Steps

Once you complete these tasks, you'll have mastered basic form validation! You can now:
- ✅ Build login forms
- ✅ Create registration pages
- ✅ Validate user input
- ✅ Show helpful error messages
- ✅ Guide users to correct mistakes