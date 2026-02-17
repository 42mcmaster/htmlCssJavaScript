# Sprint 02: HTML Forms & Validation — Study Guide

## Vocabulary (20 Terms)

1. **Form** — An HTML element that collects user input and sends data to a server
2. **Action** — The URL where form data is sent (attribute of `<form>`)
3. **Method** — The HTTP method used to send form data (GET or POST)
4. **GET** — HTTP method that appends data to the URL (visible, limited size)
5. **POST** — HTTP method that sends data in the request body (hidden, larger size)
6. **Input** — An HTML element that accepts user data (text, email, password, etc.)
7. **Type** — The attribute of `<input>` that specifies what kind of data to accept
8. **Label** — An HTML element that associates text with a form control for accessibility
9. **For** — An attribute of `<label>` that connects it to an input by ID
10. **ID** — A unique identifier for an element (must match the label's `for` attribute)
11. **Placeholder** — Hint text that appears in an input field before the user types
12. **Required** — An attribute that makes a form field mandatory before submission
13. **Radio** — Form control allowing users to select ONE option from multiple choices
14. **Checkbox** — Form control allowing users to select MULTIPLE options
15. **Select** — A dropdown list element (`<select>` with `<option>` children)
16. **Option** — A choice within a `<select>` dropdown
17. **Textarea** — A multi-line text input field
18. **Fieldset** — An HTML element that groups related form controls together
19. **Legend** — A label for a `<fieldset>` that describes the grouped controls
20. **Submit** — A button type that sends the form data to the server

---

## Cheat Sheet

### Form Structure

```html
<form action="process.php" method="POST">
  <!-- form controls go here -->
  <button type="submit">Submit</button>
</form>
```

### Label Connection Methods

**Method 1: Wrap the input**
```html
<label>
  First Name:
  <input type="text" name="fname">
</label>
```

**Method 2: Use `for` and `id` (BEST PRACTICE)**
```html
<label for="fname">First Name:</label>
<input type="text" id="fname" name="fname">
```

### Input Types Table

| Type | Example | Use Case |
|------|---------|----------|
| `text` | `<input type="text">` | Single line text |
| `email` | `<input type="email">` | Email validation |
| `password` | `<input type="password">` | Password (hidden) |
| `number` | `<input type="number" min="0" max="100">` | Numeric values |
| `date` | `<input type="date">` | Date picker |
| `tel` | `<input type="tel">` | Phone number |
| `checkbox` | `<input type="checkbox">` | Multiple selections |
| `radio` | `<input type="radio">` | Single selection |
| `submit` | `<input type="submit" value="Submit">` | Submit form |
| `reset` | `<input type="reset" value="Clear">` | Reset form |

### Radio Buttons vs Checkboxes

```html
<!-- RADIO: Pick ONE (same name) -->
<fieldset>
  <legend>Contact Method:</legend>

  <input type="radio" id="email" name="contact" value="email">
  <label for="email">Email</label>

  <input type="radio" id="phone" name="contact" value="phone">
  <label for="phone">Phone</label>
</fieldset>

<!-- CHECKBOX: Pick MULTIPLE (can have different names) -->
<fieldset>
  <legend>Interests:</legend>

  <input type="checkbox" id="sports" name="interests" value="sports">
  <label for="sports">Sports</label>

  <input type="checkbox" id="music" name="interests" value="music">
  <label for="music">Music</label>
</fieldset>
```

### GET vs POST Comparison Table

| Feature | GET | POST |
|---------|-----|------|
| **Data visibility** | Visible in URL | Hidden in request body |
| **Data size limit** | Small (2-4KB) | Large (no practical limit) |
| **Security** | Not secure (data exposed) | More secure |
| **Caching** | Cached by browsers | Not cached |
| **Bookmarking** | Can bookmark URL with data | Cannot bookmark |
| **Idempotent** | Yes (safe to repeat) | No (affects server) |
| **Best for** | Searches, filters, public data | Logins, payments, sensitive data |
| **Example** | `action="search.php" method="GET"` | `action="login.php" method="POST"` |

### Fieldset & Legend

```html
<form>
  <fieldset>
    <legend>Personal Information</legend>

    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname">

    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lname">
  </fieldset>

  <fieldset>
    <legend>Account Details</legend>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </fieldset>
</form>
```

### Dropdown (Select)

```html
<label for="grade">Grade Level:</label>
<select id="grade" name="grade">
  <option value="">-- Select One --</option>
  <option value="9">9th Grade</option>
  <option value="10">10th Grade</option>
  <option value="11">11th Grade</option>
  <option value="12">12th Grade</option>
</select>
```

### Textarea

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message..."></textarea>
```

### Common Form Attributes Table

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `name` | input, select, textarea | Identifies the field in form data |
| `id` | input, select, textarea | Unique identifier (for labels) |
| `placeholder` | input, textarea | Hint text inside the field |
| `required` | input, select, textarea | Makes field mandatory |
| `value` | input, radio, checkbox | Default value |
| `type` | input | Specifies input type |
| `rows` | textarea | Height in text lines |
| `cols` | textarea | Width in characters |
| `for` | label | Connects to input by ID |
| `action` | form | URL to send data to |
| `method` | form | GET or POST |

---

## ODE Competencies Covered

- **6.4.1** — Understand HTML form elements and structure
- **6.4.2** — Create form controls (inputs, labels, selects)
- **6.4.3** — Apply form attributes (name, id, type, required)
- **6.4.4** — Use GET vs POST appropriately
- **6.4.5** — Implement fieldset and legend for accessibility
- **6.4.6** — Validate and style forms with CSS
- **6.5.9** — Test form functionality

---

## Common Mistakes

### ❌ Mistake 1: Not Connecting Labels to Inputs
```html
<!-- WRONG -->
<label>Email:</label>
<input type="email">

<!-- RIGHT -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```
**Why it matters:** Labels without `for/id` connection fail accessibility tests and don't expand click area on mobile.

### ❌ Mistake 2: Using GET for Sensitive Data
```html
<!-- WRONG -->
<form action="login.php" method="GET">
  <input type="password" name="password">
</form>

<!-- RIGHT -->
<form action="login.php" method="POST">
  <input type="password" name="password">
</form>
```
**Why it matters:** GET sends passwords visible in the URL. Always use POST for logins and registration.

### ❌ Mistake 3: Mixing Up Radio Buttons and Checkboxes
```html
<!-- WRONG - Radio buttons with different names -->
<input type="radio" name="contact1" value="email">
<input type="radio" name="contact2" value="phone">

<!-- RIGHT - Radio buttons with same name -->
<input type="radio" name="contact" value="email">
<input type="radio" name="contact" value="phone">
```
**Why it matters:** Radio buttons MUST have the same `name` to function as a group.

### ❌ Mistake 4: Forgetting the `action` Attribute
```html
<!-- WRONG -->
<form method="POST">
  <!-- form controls -->
</form>

<!-- RIGHT -->
<form action="process.php" method="POST">
  <!-- form controls -->
</form>
```
**Why it matters:** Without `action`, form submission fails silently.

### ❌ Mistake 5: Not Using Fieldset for Related Controls
```html
<!-- WRONG - No organization -->
<form>
  <input type="radio" name="contact" value="email"> Email
  <input type="radio" name="contact" value="phone"> Phone
  <input type="checkbox" name="interests" value="sports"> Sports
</form>

<!-- RIGHT - Grouped with fieldset -->
<form>
  <fieldset>
    <legend>Contact Method:</legend>
    <input type="radio" name="contact" value="email"> Email
    <input type="radio" name="contact" value="phone"> Phone
  </fieldset>

  <fieldset>
    <legend>Interests:</legend>
    <input type="checkbox" name="interests" value="sports"> Sports
  </fieldset>
</form>
```
**Why it matters:** Fieldset improves accessibility, readability, and allows CSS grouping.

---

## Practice Questions (10 Questions with Answers)

### Question 1: GET vs POST — Login Form
**Q:** You're building a login form. Should you use `method="GET"` or `method="POST"`? Why?

**A:** Use `method="POST"`. Passwords and sensitive data should never be visible in the URL (which happens with GET). POST sends data in the request body, keeping it hidden from casual viewing.

---

### Question 2: Fieldset and Legend
**Q:** What is the purpose of `<fieldset>` and `<legend>` in an HTML form?

**A:** `<fieldset>` groups related form controls together, and `<legend>` provides a caption/title for that group. This improves accessibility (screen readers understand grouped controls) and allows better styling/organization.

---

### Question 3: Label Connection
**Q:** Write the correct HTML to connect a label to a text input for "Username".

**A:**
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```
The `for` attribute in the label matches the `id` of the input.

---

### Question 4: Radio vs Checkbox
**Q:** A form asks "Select your favorite color" with three options: Red, Green, Blue. Should you use radio buttons or checkboxes? Why?

**A:** Use **radio buttons** because the user can only pick ONE favorite color. If the question asked "Select all colors you like," use checkboxes to allow multiple selections.

---

### Question 5: Form Structure
**Q:** What two attributes MUST a `<form>` tag have to work correctly?

**A:**
1. `action` — the URL where the form data will be sent
2. `method` — GET or POST (specifies how to send the data)

Example: `<form action="process.php" method="POST">`

---

### Question 6: Input Types
**Q:** What input type would you use for collecting a birth date, and how would it differ from a text input?

**A:** Use `<input type="date">`. This provides a date picker UI, validates that the input is a valid date, and makes it easier for users on mobile devices. A text input would require users to type the date manually.

---

### Question 7: Dropdown Selection
**Q:** Write the HTML for a dropdown asking "Which grade are you in?" with options for grades 9-12.

**A:**
```html
<label for="grade">Which grade are you in?</label>
<select id="grade" name="grade">
  <option value="">-- Select --</option>
  <option value="9">9th Grade</option>
  <option value="10">10th Grade</option>
  <option value="11">11th Grade</option>
  <option value="12">12th Grade</option>
</select>
```

---

### Question 8: Required Attribute
**Q:** How would you make an email input field mandatory before form submission?

**A:**
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```
The `required` attribute prevents form submission if the field is empty.

---

### Question 9: POST vs GET Data Size
**Q:** Why would you use POST instead of GET when submitting a large file or long text?

**A:** GET appends data to the URL, which has a size limit (typically 2-4 KB). POST sends data in the request body with no practical size limit. For large data, files, or long text, use POST.

---

### Question 10: Name Attribute for Radio Buttons
**Q:** You have three radio buttons for "Contact Method": Email, Phone, Text. What attribute must they all share, and why?

**A:** They must all share the same `name` attribute (e.g., `name="contact"`). This tells the browser they are part of the same group, so only one can be selected at a time. If they have different names, the user could select multiple options, which defeats the purpose of radio buttons.

```html
<input type="radio" name="contact" value="email"> Email
<input type="radio" name="contact" value="phone"> Phone
<input type="radio" name="contact" value="text"> Text
```

---
