---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 08: HTML Forms

## Web Design
### Medina County Career Center

---

# What We Are Doing This Lesson

- **Walkthrough:** build a practice sign-up form, step by step
- **Practice task:** `html08_Task.html`, a coding camp registration form
- **DIY:** add a styled contact form to `contact.html` on your own website

About 3 class days.

---

# The `<form>` Tag

- A form collects answers from a visitor
- `action`: **where** the answers are sent
- `method`: **how** they are sent

```html
<form id="contact-form" action="#" method="get">
  <!-- labels, inputs, and buttons go here -->
</form>
```

- A real site sends to a program on a server: `action="https://example.com/contact"`
- **We have no server yet**, so `action="#"` sends back to the same page

---

# GET vs POST

| Method | Where the answers go | Use it for |
|---|---|---|
| `get` | In the address bar, after a `?` | Searches, filters |
| `post` | Hidden in the request | Passwords, personal info, saving data |

After a `get` submit you will see:

```
contact.html?name=Ana&email=ana%40example.com#
```

Each piece is `name=value`. **No `name` = not sent.**

---

# Labels and Inputs

```html
<!-- for on the label matches id on the input -->
<label for="email">Email:</label>
<input type="email" id="email" name="email"
       placeholder="you@example.com" required>
```

- `id`: unique on the page; the label's `for` matches it
- `name`: sent with the answer
- `placeholder`: gray hint text (not a label)
- `required`: can't submit while empty

Click the label and the cursor jumps into the box.

---

# Input Types

| type | What it's for |
|---|---|
| `text` | Any short text |
| `email` | Checks for an @ and a domain |
| `password` | Hides the letters |
| `tel` | Phone number (number keypad on phones) |
| `number` | Numbers only; `min` and `max` set the range |
| `date` | Date picker |
| `url` | Web address |

Limits: `minlength="8"`, `maxlength="20"`

---

# Radio Buttons and Checkboxes

**Radio = pick ONE.** Same `name`, different `value`.

```html
<label><input type="radio" name="size" value="small" required> Small</label>
<label><input type="radio" name="size" value="large"> Large</label>
```

**Checkbox = pick ANY.** Same `name`, different `value`.

```html
<label><input type="checkbox" name="topics" value="html"> HTML</label>
<label><input type="checkbox" name="topics" value="python"> Python</label>
```

Input inside the label = tied together, no `for`/`id` needed.

---

# Dropdowns and Textarea

```html
<label for="grade">Grade:</label>
<select id="grade" name="grade" required>
  <option value="">-- Choose one --</option>
  <option value="11">Junior</option>
  <option value="12">Senior</option>
</select>

<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="40"></textarea>
```

- Text between `<option>` tags is shown; `value` is sent
- `rows` = lines tall, `cols` = characters wide

---

# Fieldset and Legend

```html
<fieldset>
  <legend>About You</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
</fieldset>

<fieldset>
  <legend>T-Shirt Size</legend>
  <!-- radio buttons here -->
</fieldset>
```

- `<fieldset>` draws a box around related controls
- `<legend>` is the title of the box
- Best way to label a radio or checkbox group

---

# Submit and Reset Buttons

```html
<div class="button-group">
  <button type="submit">Send Message</button>
  <button type="reset">Clear Form</button>
</div>
```

| type | What it does |
|---|---|
| `submit` | Checks required fields, then sends the form |
| `reset` | Clears the form; nothing is sent |
| `button` | Nothing by itself; JavaScript gives it a job (Lesson 09) |

Older style: `<input type="submit" value="Send">`

---

# Tab Order and tabindex

- **Tab** moves to the next control, **Shift+Tab** goes back
- Tab follows the order of your HTML. Good HTML order = no tabindex needed.

| Value | What it does |
|---|---|
| `tabindex="0"` | Lets Tab reach something that normally can't be focused |
| `tabindex="-1"` | Tab skips it |
| `tabindex="1"`, `"2"`... | Tab goes there first. **Avoid:** it makes the order confusing. |

---

# Styling Forms

```css
label {
  display: block;              /* own line, above the box */
  font-weight: bold;
}

input[type="text"], input[type="email"], select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;      /* width includes padding */
}

input:focus, textarea:focus {  /* the box the cursor is in */
  outline: none;
  border-color: #007bff;       /* always replace the outline */
}

button:hover { background-color: #0056b3; }
```

---

# Your DIY: Contact Form

On `contact.html` in `DiyWebsite_Lastname`, below your mailto link:

- `<form id="contact-form" action="#" method="get">`
- Ids `name`, `email`, `message` (Lesson 09 JavaScript uses them)
- Text, email, tel or number, radio group, checkboxes, select, textarea
- Labels, `required`, `placeholder`, fieldsets with legends
- Submit and reset buttons
- Styled in your `styles.css`, in your site's colors

Test it, validate it, push it with GitHub Desktop.
