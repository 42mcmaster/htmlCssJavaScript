# HTML 08: Forms — Study Guide

## Vocabulary (20 terms)

1. **form** — Container element that collects user input; uses `<form>` tag
2. **action** — Attribute on `<form>` that specifies where data is sent
3. **method** — Attribute on `<form>` specifying how data is sent (GET or POST)
4. **GET** — HTTP method; sends data in URL (visible, limited size)
5. **POST** — HTTP method; sends data in message body (hidden, larger size)
6. **input** — Form control element for single-line text, numbers, dates, etc.
7. **type** — Attribute on `<input>` that defines what kind of data (text, email, password, etc.)
8. **text** — Input type for basic text entry
9. **email** — Input type with built-in email validation
10. **password** — Input type that hides characters as user types
11. **number** — Input type that only accepts numeric values
12. **date** — Input type that provides a date picker
13. **label** — Element that describes a form control; improves accessibility
14. **for** — Attribute on `<label>` that connects it to an input by ID
15. **placeholder** — Attribute showing hint text inside an input (disappears when user types)
16. **required** — Attribute making a field mandatory before form submission
17. **radio** — Input type allowing ONE choice from a group
18. **checkbox** — Input type allowing MULTIPLE choices from a group
19. **select** — Dropdown menu; paired with `<option>` elements
20. **option** — Individual choice within a `<select>` element
21. **textarea** — Form control for multi-line text input
22. **fieldset** — Element grouping related form controls together
23. **legend** — Element labeling a `<fieldset>` group
24. **submit** — Button type that sends form data to the action URL
25. **reset** — Button type that clears all form fields
26. **tabindex** — Attribute setting the order fields are focused when Tab is pressed

---

## Key Concepts

### Form Structure
```html
<form action="/submit-page" method="POST">
  <!-- Form controls go here -->
  <button type="submit">Send</button>
</form>
```

### Connecting Labels to Inputs
```html
<!-- Method 1: for/id pairing -->
<label for="username">Username:</label>
<input id="username" name="username" type="text">

<!-- Method 2: label wrapping -->
<label>
  <input type="checkbox" name="agree">
  I agree to terms
</label>
```

### Input Types Cheat Sheet
- `text` — Regular text
- `email` — Email with validation
- `password` — Hidden characters
- `number` — Numbers only
- `date` — Date picker
- `tel` — Telephone
- `url` — Website URL
- `search` — Search field

### Radio vs Checkbox
| Feature | Radio | Checkbox |
|---------|-------|----------|
| **Choices** | One only | Multiple |
| **Same name?** | Yes | Yes |
| **Visual** | Circle | Square |
| **Use case** | Size, Gender, Rating | Interests, Agree, Features |

### Form Styling Basics
```css
input, textarea, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

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

## Common Attributes Quick Reference

| Attribute | Used On | Purpose | Example |
|-----------|---------|---------|---------|
| `action` | `<form>` | Where to send data | `action="/submit"` |
| `method` | `<form>` | How to send (GET/POST) | `method="POST"` |
| `type` | `<input>` | Type of input | `type="email"` |
| `name` | Input controls | Identifies field in data | `name="email"` |
| `value` | Input controls | Data sent or default text | `value="default"` |
| `for` | `<label>` | Connects to input ID | `for="username"` |
| `placeholder` | `<input>`, `<textarea>` | Hint text | `placeholder="Enter email"` |
| `required` | Input controls | Field is mandatory | `required` |
| `id` | Any element | Unique identifier | `id="password"` |
| `rows` | `<textarea>` | Number of visible rows | `rows="5"` |
| `cols` | `<textarea>` | Number of visible columns | `cols="40"` |
| `tabindex` | Any focusable element | Tab order | `tabindex="1"` |

---

## ODE Competencies Covered

### 6.4.1 Design Forms from Specifications
- Create forms matching project requirements
- Identify appropriate input types for data
- Plan form layout and organization

### 6.4.2 Add Forms to Web Pages
- Insert `<form>` tags correctly
- Set action and method attributes
- Ensure forms are valid HTML5

### 6.4.3 Use Text Fields, Radios, Checkboxes, and Dropdowns
- Implement `<input type="text">`, `<input type="email">`, etc.
- Create radio button groups with proper naming
- Build checkbox groups for multiple selections
- Create dropdown menus with `<select>` and `<option>`

### 6.4.4 Apply Form Action Concept
- Understand form action attribute purpose
- Understand GET vs POST methods
- Recognize where form data is submitted

### 6.4.5 Create Submit and Reset Buttons
- Add submit buttons to trigger form submission
- Add reset buttons to clear form fields
- Use appropriate button types

### 6.4.6 Style Forms with CSS
- Apply padding and margins to form controls
- Style labels, inputs, buttons, and fieldsets
- Create visually appealing form layouts
- Ensure forms are responsive

### 6.5.9 Incorporate Forms into Web Pages
- Embed forms within page content
- Combine forms with other HTML elements
- Create multi-section forms using fieldsets

---

## Review Questions

1. What tag is used to create a form?
2. What does the `action` attribute do?
3. What's the difference between GET and POST?
4. How do you connect a label to an input?
5. What input types provide built-in validation?
6. How many choices can a user select from radio buttons? Checkboxes?
7. What's the purpose of the `placeholder` attribute?
8. Why use `<fieldset>` and `<legend>`?
9. What does the `required` attribute do?
10. How do you style a submit button with CSS?

---

## Key Takeaways

- **Forms collect user data** through various input types (text, email, radios, checkboxes, etc.)
- **Labels improve accessibility** and usability—always use them
- **Radio buttons = one choice; checkboxes = many choices**
- **action and method control where and how data is sent**
- **Styling forms requires CSS targeting inputs, labels, buttons, and fieldsets**
- **Accessibility matters**: Use `for/id`, proper labels, and semantic HTML
