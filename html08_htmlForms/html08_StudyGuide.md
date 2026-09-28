# HTML 08: Forms Study Guide

## Table of Contents

1. [Vocabulary](#vocabulary)
2. [Form Structure](#form-structure)
3. [action and method (GET vs POST)](#action-and-method-get-vs-post)
4. [Connecting Labels to Inputs](#connecting-labels-to-inputs)
5. [Input Types](#input-types)
6. [Radio Buttons vs Checkboxes](#radio-buttons-vs-checkboxes)
7. [Dropdowns and Textarea](#dropdowns-and-textarea)
8. [Buttons](#buttons)
9. [Tab Order and tabindex](#tab-order-and-tabindex)
10. [Form Styling Basics](#form-styling-basics)
11. [Attribute Quick Reference](#attribute-quick-reference)
12. [ODE Competencies Covered](#ode-competencies-covered)
13. [Review Questions](#review-questions)
14. [Summary](#summary)

---

## Vocabulary

1. **form**: The element that holds all the parts of a form: `<form>`
2. **action**: Attribute on `<form>` that says where the answers are sent
3. **method**: Attribute on `<form>` that says how the answers are sent (`get` or `post`)
4. **GET**: Sends the answers in the address bar after a `?` (visible)
5. **POST**: Sends the answers hidden inside the request (not in the address bar)
6. **server**: A computer running a program that receives form answers and saves or emails them
7. **input**: A one-line form control: `<input>`
8. **type**: Attribute on `<input>` that sets what kind of data it takes (text, email, password, and so on)
9. **label**: Text that says what a control is for: `<label>`
10. **for**: Attribute on `<label>` that must match the `id` of its control
11. **id**: A unique name for one element on the page
12. **name**: The name sent with a control's answer (`name=value`)
13. **value**: What gets sent for a radio button, checkbox, or option
14. **placeholder**: Gray hint text inside a box that disappears when you type
15. **required**: The browser won't submit the form until this is filled in
16. **radio button**: Lets the visitor pick ONE choice from a group
17. **checkbox**: Lets the visitor pick ANY number of choices
18. **select**: A dropdown list: `<select>`
19. **option**: One choice in a dropdown: `<option>`
20. **textarea**: A box for several lines of text: `<textarea>`
21. **fieldset**: Draws a box around a group of related controls
22. **legend**: The title of a fieldset
23. **submit button**: Checks and sends the form: `<button type="submit">`
24. **reset button**: Clears the form: `<button type="reset">`
25. **tabindex**: Attribute that changes whether and when the Tab key reaches an element
26. **:focus**: CSS pseudo-class for the control the cursor is in

---

## Form Structure

```html
<!-- id names the form, action = where, method = how -->
<form id="contact-form" action="#" method="get">

  <fieldset>
    <legend>About You</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </fieldset>

  <button type="submit">Send</button>
  <button type="reset">Clear</button>
</form>
```

---

## action and method (GET vs POST)

- On a real site, `action` is the web address of a program on a **server**, like `action="https://example.com/contact"`.
- Our sites have **no server** yet, so we use `action="#"`. That sends the answers back to the same page. Nothing is saved.

| | GET | POST |
|---|---|---|
| Where the answers go | In the address bar, after `?` | Hidden inside the request |
| Can you see them? | Yes | No |
| Can you bookmark it? | Yes | No |
| Use for | Searches, filters | Passwords, personal info, anything that saves data |

A GET submit looks like this in the address bar:

```
contact.html?name=Ana+Lopez&email=ana%40example.com#
```

---

## Connecting Labels to Inputs

```html
<!-- Way 1: for/id. The for must match the id exactly. -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Way 2: put the input inside the label. Used for radio buttons and checkboxes. -->
<label>
  <input type="checkbox" name="news" value="yes">
  Send me the newsletter
</label>
```

Why labels matter:
- Clicking the label puts the cursor in the box (or checks the box).
- Screen readers read the label out loud.
- A placeholder is **not** a label. It disappears when you type.

---

## Input Types

| type | What it's for | Extra attributes |
|---|---|---|
| `text` | Short text | `maxlength`, `minlength` |
| `email` | Email address; browser checks for @ and a domain | |
| `password` | Hides the letters | `minlength` |
| `tel` | Phone number; opens number keypad on phones | |
| `number` | Numbers only | `min`, `max` |
| `date` | Date picker | |
| `url` | Web address starting with http:// or https:// | |
| `radio` | Pick one from a group | `name`, `value` |
| `checkbox` | Pick any from a group | `name`, `value` |

---

## Radio Buttons vs Checkboxes

| | Radio | Checkbox |
|---|---|---|
| How many can be picked | One | Any number |
| Same `name` in the group? | Yes | Yes |
| Different `value` for each? | Yes | Yes |
| Shape | Circle | Square |
| Example | T-shirt size, yes/no | Interests, toppings |

`required` on one radio button makes the whole group required.

---

## Dropdowns and Textarea

```html
<label for="size">Size:</label>
<select id="size" name="size" required>
  <!-- value="" + required = the visitor must pick a real option -->
  <option value="">-- Choose one --</option>
  <option value="s">Small</option>   <!-- "s" is sent, "Small" is shown -->
  <option value="l">Large</option>
</select>

<label for="message">Message:</label>
<!-- rows = lines tall, cols = characters wide. Nothing between the tags. -->
<textarea id="message" name="message" rows="5" cols="40"></textarea>
```

---

## Buttons

| Button | What it does |
|---|---|
| `<button type="submit">` | Checks the form, then sends it to the `action` |
| `<button type="reset">` | Clears every field. Nothing is sent. |
| `<button type="button">` | Nothing by itself. JavaScript gives it a job. |
| `<input type="submit" value="Send">` | Older way to make a submit button |

---

## Tab Order and tabindex

- Tab moves forward through controls, Shift+Tab moves back.
- Tab follows the order of your HTML. If the HTML is in order, you don't need `tabindex`.

| Value | Meaning |
|---|---|
| `tabindex="0"` | Tab can reach this element (for things that normally can't be focused) |
| `tabindex="-1"` | Tab skips this element |
| `tabindex="1"` or higher | Tab goes here first. Avoid it: it makes the order confusing. |

---

## Form Styling Basics

```css
/* Labels on their own line */
label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

/* Attribute selectors pick inputs by type. Leave out radio and checkbox. */
input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;       /* textarea matches the page font */
  box-sizing: border-box;     /* width includes padding and border */
}

/* The control the cursor is in. Always replace the outline if you remove it. */
input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
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

## Attribute Quick Reference

| Attribute | Used on | What it does | Example |
|---|---|---|---|
| `action` | `<form>` | Where to send the answers | `action="#"` |
| `method` | `<form>` | How to send them | `method="get"` |
| `type` | `<input>`, `<button>` | Kind of control | `type="email"` |
| `id` | Any element | Unique name on the page | `id="email"` |
| `for` | `<label>` | Matches a control's id | `for="email"` |
| `name` | Controls | Name sent with the answer | `name="email"` |
| `value` | Radio, checkbox, option | What gets sent | `value="small"` |
| `placeholder` | Text boxes, textarea | Gray hint text | `placeholder="you@example.com"` |
| `required` | Controls | Must be filled in | `required` |
| `minlength` / `maxlength` | Text boxes, textarea | Fewest / most characters | `minlength="8"` |
| `min` / `max` | `number`, `date` | Lowest / highest value | `min="13"` |
| `rows` / `cols` | `<textarea>` | Height / width | `rows="5"` |
| `tabindex` | Any element | Changes Tab order | `tabindex="0"` |

---

## ODE Competencies Covered

- **6.4.1 Design forms from specifications:** plan a form that fits a site and its visitors; pick the right control for each question.
- **6.4.2 Add a form to a web page:** write the `<form>` tag and its controls in valid HTML.
- **6.4.3 Text fields, radio buttons, checkboxes, and dropdowns:** `<input>` types, radio and checkbox groups, `<select>`, `<textarea>`.
- **6.4.4 Form action:** explain what `action` and `method` do, and the difference between GET and POST.
- **6.4.5 Submit and reset buttons:** add both and know what each does.
- **6.4.6 Style forms with CSS:** style labels, boxes, fieldsets, and buttons; know what `tabindex` does.

---

## Review Questions

1. What tag holds a whole form?
2. What does the `action` attribute do? Why do we use `action="#"` right now?
3. What is the difference between GET and POST?
4. How do you connect a label to an input?
5. What happens to a control's answer if it has no `name`?
6. How many radio buttons in a group can be picked? How many checkboxes?
7. What makes several radio buttons into one group?
8. What is the difference between an option's text and its `value`?
9. Why use `<fieldset>` and `<legend>`?
10. What does `required` do? Name two other attributes the browser checks before submitting.
11. What is the difference between a submit button and a reset button?
12. Why should you avoid `tabindex="1"`?
13. Why do form inputs need `box-sizing: border-box` when `width` is 100%?
14. Why must you add your own `:focus` style if you use `outline: none`?

---

## Summary

- `<form>` holds the form. `action` = where the answers go. `method` = how (`get` shows them, `post` hides them).
- No server yet, so `action="#"`.
- Every control needs a `name`. Every box needs a label whose `for` matches its `id`.
- Radio = pick one. Checkbox = pick any. Same `name` makes a group.
- `required`, `type="email"`, `minlength`, `min`, and `max` let the browser check answers with no JavaScript.
- `<fieldset>` + `<legend>` split a form into titled sections.
- Keep the HTML in order and Tab works without `tabindex`.
- Style with block labels, full-width boxes with `box-sizing: border-box`, and a visible `:focus`.
