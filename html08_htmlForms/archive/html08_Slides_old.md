---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 08: HTML Forms

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 08a — Form Basics" -->

# Form Basics: The `<form>` Tag

## What is a form?
- Collects data from users
- Sends data to a server (action attribute)
- Uses the `<form>` tag as a container

```html
<form action="/submit" method="POST">
  <!-- form controls go here -->
</form>
```

## Key Attributes
- **action**: Where form data goes
- **method**: How to send (GET or POST)

---

<!-- _header: "Sub-Lesson 08a — Form Basics" -->

# Text Inputs & Labels

## The `<input>` tag
- Text, email, password, number, date, etc.
- `type` attribute determines the input type
- `name` attribute identifies the data

## Labels Make Forms Accessible
- `<label>` wraps or pairs with input
- `for` attribute connects label to input ID

```html
<label for="username">Username:</label>
<input id="username" name="username" type="text" placeholder="Enter your name">

<label for="email">Email:</label>
<input id="email" name="email" type="email" required>
```

---

<!-- _header: "Sub-Lesson 08a — Form Basics" -->

# Input Types & Attributes

## Common Input Types
- `text`: Basic text
- `email`: Email validation
- `password`: Hidden characters
- `number`: Numeric only
- `date`: Date picker
- `tel`: Telephone format

## Helpful Attributes
- `placeholder`: Hint text (grayed out)
- `required`: Field must be filled
- `maxlength`: Limit characters

```html
<input type="password" name="pwd" required>
<input type="number" name="age" placeholder="18+">
```

---

<!-- _header: "Sub-Lesson 08b — Form Controls" -->

# Radio Buttons & Checkboxes

## Radio Buttons
- One choice only
- Same `name`, different `value`
- User picks ONE

```html
<label><input type="radio" name="size" value="small"> Small</label>
<label><input type="radio" name="size" value="large"> Large</label>
```

## Checkboxes
- Multiple choices allowed
- Same `name`, different `value`
- User picks MANY

```html
<label><input type="checkbox" name="interests" value="sports"> Sports</label>
<label><input type="checkbox" name="interests" value="music"> Music</label>
```

---

<!-- _header: "Sub-Lesson 08b — Form Controls" -->

# Dropdowns & Textarea

## The `<select>` Element
- Dropdown list
- `<option>` tags for choices
- User picks ONE

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">-- Select --</option>
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
</select>
```

## The `<textarea>` Element
- Multi-line text input
- `rows` and `cols` for size

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="40"></textarea>
```

---

<!-- _header: "Sub-Lesson 08b — Form Controls" -->

# Fieldset & Legend

## Organizing Form Sections
- `<fieldset>`: Groups related controls
- `<legend>`: Labels the group

```html
<fieldset>
  <legend>Contact Information</legend>
  <label for="fname">First Name:</label>
  <input id="fname" name="fname" type="text">

  <label for="phone">Phone:</label>
  <input id="phone" name="phone" type="tel">
</fieldset>

<fieldset>
  <legend>Preferences</legend>
  <label><input type="checkbox" name="subscribe"> Subscribe</label>
</fieldset>
```

---

<!-- _header: "Sub-Lesson 08c — Form Submission & Styling" -->

# Submit & Reset Buttons

## Button Types
- `<button type="submit">`: Submits the form
- `<button type="reset">`: Clears all fields
- `<button type="button">`: Does nothing by itself (uses JavaScript)

```html
<button type="submit">Send Form</button>
<button type="reset">Clear</button>

<!-- Also <input> style: -->
<input type="submit" value="Send Form">
<input type="reset" value="Clear">
```

## Tabindex
- `tabindex="1"`, `tabindex="2"`: Order of focus
- Higher numbers = later in tab order

```html
<input tabindex="1" type="text" name="first">
<input tabindex="2" type="text" name="last">
```

---

<!-- _header: "Sub-Lesson 08c — Form Submission & Styling" -->

# Styling Forms with CSS

## Common Styling Targets
```css
/* Style inputs */
input, select, textarea {
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Style labels */
label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

/* Style fieldsets */
fieldset {
  border: 1px solid #999;
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
}

/* Style buttons */
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

---

<!-- _header: "Sub-Lesson 08c — Form Submission & Styling" -->

# Form Layout Best Practices

## Key Tips
- Stack labels above inputs (display: block)
- Use consistent spacing (margin, padding)
- Make buttons visually distinct
- Use `<fieldset>` to group related fields
- Test on mobile (forms must be responsive)

```html
<form action="/submit" method="POST">
  <fieldset>
    <legend>Your Information</legend>

    <label for="name">Name:</label>
    <input id="name" name="name" type="text" required>

    <label for="email">Email:</label>
    <input id="email" name="email" type="email" required>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </fieldset>
</form>
```
