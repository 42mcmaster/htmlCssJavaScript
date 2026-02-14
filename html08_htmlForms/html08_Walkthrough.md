# HTML Forms Walkthrough: Building a Contact Form

## Goal
Build a functional, styled contact form step by step. By the end, you'll have a complete form with text inputs, email, textarea, and styled buttons.

---

## Step 1: Create the Basic HTML Structure

Create a new file called `contact-form.html` and start with this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <link rel="stylesheet" href="contact-form.css">
</head>
<body>
  <h1>Contact Us</h1>

  <!-- The form starts here -->
  <form action="/submit-contact" method="POST">

    <!-- We'll add form controls here -->

  </form>

</body>
</html>
```

**What we have:**
- DOCTYPE declaration
- meta tags for character and viewport
- External CSS link (we'll create this next)
- A `<form>` tag with `action` and `method` attributes

---

## Step 2: Add Text Input Fields with Labels

Inside the `<form>` tag, add this section:

```html
<!-- Contact Information Section -->
<fieldset>
  <legend>Your Information</legend>

  <!-- First Name Field -->
  <label for="firstName">First Name:</label>
  <input
    id="firstName"
    name="firstName"
    type="text"
    placeholder="John"
    required
  >

  <!-- Last Name Field -->
  <label for="lastName">Last Name:</label>
  <input
    id="lastName"
    name="lastName"
    type="text"
    placeholder="Smith"
    required
  >

  <!-- Email Field -->
  <label for="email">Email Address:</label>
  <input
    id="email"
    name="email"
    type="email"
    placeholder="john@example.com"
    required
  >

  <!-- Phone Field -->
  <label for="phone">Phone Number:</label>
  <input
    id="phone"
    name="phone"
    type="tel"
    placeholder="(555) 123-4567"
  >

</fieldset>
```

**Try This #1:**
Add a new input field for a website/URL. Use `type="url"` and include a placeholder.
```html
<label for="___">___:</label>
<input
  id="___"
  name="___"
  type="___"
  placeholder="https://example.com"
>
```

---

## Step 3: Add a Textarea for Message

Still inside the `<form>`, after the first `</fieldset>`, add:

```html
<!-- Message Section -->
<fieldset>
  <legend>Your Message</legend>

  <label for="message">Message:</label>
  <textarea
    id="message"
    name="message"
    rows="6"
    cols="50"
    placeholder="Please type your message here..."
    required
  ></textarea>

</fieldset>
```

**Try This #2:**
What's the difference between `rows` and `cols`? Try changing them and see what happens.
- Increase `rows` to ___
- Decrease `cols` to ___

---

## Step 4: Add Radio Buttons for Contact Preference

After the message `</fieldset>`, add:

```html
<!-- Contact Preference -->
<fieldset>
  <legend>How should we contact you?</legend>

  <label>
    <input type="radio" name="contactMethod" value="email">
    Email
  </label>

  <label>
    <input type="radio" name="contactMethod" value="phone">
    Phone
  </label>

  <label>
    <input type="radio" name="contactMethod" value="text">
    Text Message
  </label>

</fieldset>
```

**Key Point:** All three radio buttons have the same `name` attribute (`contactMethod`), which groups them together. User can only pick ONE.

**Try This #3:**
Add another radio button option for "Contact at specified time". Give it an appropriate `value`:
```html
<label>
  <input type="radio" name="___" value="___">
  ___
</label>
```

---

## Step 5: Add Checkboxes

Add this before the closing `</form>` tag:

```html
<!-- Newsletter Signup -->
<fieldset>
  <legend>Subscribe</legend>

  <label>
    <input type="checkbox" name="subscribe" value="yes">
    Subscribe to our newsletter
  </label>

  <label>
    <input type="checkbox" name="follow" value="yes">
    Follow us on social media
  </label>

</fieldset>
```

**Key Difference:** Checkboxes allow MULTIPLE selections (unlike radio buttons which only allow one).

**Try This #4:**
Add a checkbox for "Send me special offers". Use appropriate `name` and `value`:
```html
<label>
  <input type="checkbox" name="___" value="___">
  ___
</label>
```

---

## Step 6: Add Submit and Reset Buttons

At the very end, before the closing `</form>` tag, add:

```html
<!-- Buttons -->
<div class="button-group">
  <button type="submit">Send Message</button>
  <button type="reset">Clear Form</button>
</div>
```

**Try This #5:**
What's the difference between `type="submit"` and `type="reset"`?
- submit: ___
- reset: ___

---

## Step 7: Create the CSS File

Create a new file called `contact-form.css` and add this styling:

```css
/* General form styling */
body {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
}

/* Form styling */
form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Fieldset styling */
fieldset {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  background-color: #fafafa;
}

legend {
  font-weight: bold;
  font-size: 1.1em;
  color: #333;
  padding: 0 10px;
}

/* Label styling */
label {
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

/* Input and textarea styling */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

/* Focus state for inputs */
input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

/* Radio and checkbox styling */
input[type="radio"],
input[type="checkbox"] {
  margin-right: 8px;
  cursor: pointer;
}

input[type="radio"] + label,
input[type="checkbox"] + label {
  display: inline;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: normal;
  margin-right: 20px;
}

/* Button styling */
button {
  padding: 12px 25px;
  margin-right: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

button[type="reset"] {
  background-color: #6c757d;
  color: white;
}

button[type="reset"]:hover {
  background-color: #545b62;
}

.button-group {
  margin-top: 30px;
  text-align: center;
}

/* Responsive design */
@media (max-width: 600px) {
  body {
    margin: 10px;
    padding: 10px;
  }

  form {
    padding: 15px;
  }

  fieldset {
    padding: 15px;
    margin: 15px 0;
  }

  button {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
}
```

---

## Step 8: Test Your Form

1. Open `contact-form.html` in your browser
2. Fill in the form:
   - Type in the text inputs
   - Type an email
   - Type a phone number
   - Click a radio button (notice: can only pick one)
   - Click multiple checkboxes (notice: can pick many)
   - Type a message in the textarea
   - Click "Send Message" (nothing happens yet, but form validates required fields)
   - Click "Clear Form" (all fields empty)

3. Try clicking Tab repeatedly—notice the focus order
4. Try leaving required fields empty and clicking Send—browser shows an error

**Try This #6:**
Resize your browser window to be narrower. The CSS media query should make buttons full width. Try changing the breakpoint:
```css
@media (max-width: ___px) {
  /* rules here apply when screen is narrower */
}
```

---

## Checklist: Do You Have Everything?

- [ ] HTML file with valid `<!DOCTYPE html>` declaration
- [ ] `<form>` tag with `action` and `method` attributes
- [ ] Multiple text inputs with `<label>` tags connected via `for/id`
- [ ] At least one `type="email"` input
- [ ] At least one `type="tel"` input
- [ ] A `<textarea>` with `rows` and `cols`
- [ ] A group of radio buttons (all same `name`)
- [ ] A group of checkboxes (all same `name`)
- [ ] Submit and Reset buttons
- [ ] `<fieldset>` and `<legend>` grouping related fields
- [ ] External CSS file linked in `<head>`
- [ ] Form controls styled (padding, borders, colors)
- [ ] Hover effects on buttons
- [ ] Form works on mobile (responsive CSS)

---

## Key Takeaways

1. **Forms are containers** — Use `<form>` to wrap all form controls
2. **Labels are essential** — Connect them with `for/id` for accessibility
3. **Input types matter** — Use `type="email"`, `type="tel"`, etc. for validation
4. **Radio = one choice, Checkboxes = many choices**
5. **Fieldsets organize** — Group related fields with `<fieldset>` and `<legend>`
6. **CSS makes forms pretty** — Target inputs, labels, buttons with selectors
7. **Test on mobile** — Use media queries to make forms responsive
8. **Required fields help** — Use the `required` attribute for mandatory fields

Great job! You've built a complete, functional contact form from scratch.
