# HTML Forms Walkthrough (html08)

In this walkthrough you build one practice form, step by step. You will use every form skill that is graded in this lesson. When you finish, you will do the practice task (`html08_Task.html`) and then add a real form to the Contact page of your own website (`html08_DIYTask.md`).

**Files you make:** `form-practice.html` and `form-practice.css`, saved together in one folder.

## Table of Contents

1. [What a Form Is](#1-what-a-form-is)
2. [The form Tag: action and method](#2-the-form-tag-action-and-method)
3. [Labels and Text Inputs](#3-labels-and-text-inputs)
4. [Other Input Types](#4-other-input-types)
5. [Radio Buttons](#5-radio-buttons)
6. [Checkboxes](#6-checkboxes)
7. [Dropdown Menus with select](#7-dropdown-menus-with-select)
8. [Textarea for Longer Messages](#8-textarea-for-longer-messages)
9. [Grouping with fieldset and legend](#9-grouping-with-fieldset-and-legend)
10. [Submit and Reset Buttons](#10-submit-and-reset-buttons)
11. [Tab Order and tabindex](#11-tab-order-and-tabindex)
12. [Styling the Form with CSS](#12-styling-the-form-with-css)
13. [Test Your Form](#13-test-your-form)
14. [Checklist](#14-checklist)
15. [Summary](#15-summary)

---

## 1. What a Form Is

A **form** is the part of a web page where a visitor types or picks information: a login box, a sign-up page, a search bar, an order page. The form collects the answers and sends them somewhere when the visitor clicks a button.

Every form is made of:

- The **`<form>`** tag, which wraps everything.
- **Controls**: the boxes, buttons, and lists people fill in (`<input>`, `<select>`, `<textarea>`).
- **Labels** that say what each control is for.
- A **submit button** that sends the answers.

---

## 2. The form Tag: action and method

Make `form-practice.html` and start with this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Practice</title>
  <!-- Link the stylesheet you will write in step 12 -->
  <link rel="stylesheet" href="form-practice.css">
</head>
<body>
  <h1>Club Sign-Up</h1>

  <!-- id: a name for this form (JavaScript will use it in Lesson 09)
       action: WHERE the answers are sent
       method: HOW the answers are sent (get or post) -->
  <form id="signup-form" action="#" method="get">

    <!-- Everything in steps 3-10 goes in here -->

  </form>
</body>
</html>
```

### action: where the answers go

On a real website, `action` is the address of a program on a **server** that receives the answers. It might save them in a database or email them to the owner. For example: `action="https://example.com/signup"`.

**We do not have a server yet.** Our sites are plain HTML files. So we use `action="#"`, which means "send it back to this same page." Nothing is saved. That is fine for learning. In Lesson 09, JavaScript will check the form before it is sent.

### method: how the answers travel

| Method | What it does | Use it for |
|---|---|---|
| `get` | Puts the answers in the address bar, after a `?` | Searches, filters, anything that is fine to see or bookmark |
| `post` | Sends the answers hidden inside the request, not in the address bar | Passwords, personal info, anything that saves or changes data |

Real sign-up and contact forms use `post`, with a server to receive the data. We use `get` for now so you can **see** what your form sends. After you submit, look at the address bar. You will see something like:

```
form-practice.html?fullName=Ana+Lopez&email=ana%40example.com#
```

Each piece is a `name=value` pair. That is why every control needs a `name`.

---

## 3. Labels and Text Inputs

An `<input>` is a one-line box. A `<label>` is the text that tells people what goes in the box.

Put this inside the `<form>`:

```html
<!-- for="fullName" on the label matches id="fullName" on the input.
     That ties them together. Clicking the label now puts the cursor in the box,
     and screen readers read the label out loud. -->
<label for="fullName">Full Name:</label>
<input type="text"
       id="fullName"
       name="fullName"
       placeholder="First and last name"
       required>
```

What each attribute does:

| Attribute | What it does |
|---|---|
| `type="text"` | A plain one-line text box |
| `id` | A unique name on the page. The label's `for` must match it exactly. |
| `name` | The name sent with the answer (`fullName=Ana+Lopez`). Without a name, the answer is not sent. |
| `placeholder` | Gray hint text inside the box. It disappears when you type. It is **not** a replacement for a label. |
| `required` | The browser will not submit the form while this box is empty. |

**Try it:** Save and open the page. Click the words "Full Name:". The cursor should jump into the box. If it does not, your `for` and `id` do not match.

---

## 4. Other Input Types

Changing `type` changes what the box accepts and what the browser shows. Add these under the Full Name box:

```html
<!-- email: the browser checks for an @ sign and a domain before it submits -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="you@example.com" required>

<!-- password: hides the letters as you type.
     minlength: the browser will not submit fewer than 8 characters -->
<label for="password">Password:</label>
<input type="password" id="password" name="password" minlength="8" required>

<!-- tel: a phone number. On a phone, this opens the number keypad. -->
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" placeholder="330-555-0100">

<!-- number: numbers only. min and max set the allowed range. -->
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="13" max="19">

<!-- date: shows a date picker -->
<label for="startDate">Start Date:</label>
<input type="date" id="startDate" name="startDate">

<!-- url: a web address. The browser checks that it starts with http:// or https:// -->
<label for="website">Your Website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com">

<!-- maxlength: the box will not let you type more than 20 characters -->
<label for="nickname">Nickname:</label>
<input type="text" id="nickname" name="nickname" maxlength="20">
```

**Try it:**
1. Type `ana` (no @ sign) in Email and click away. Nothing happens yet. When you add the submit button in step 10, the browser will stop you and show a message.
2. Type letters into Age. The number box will not keep them.
3. Type a long nickname. It stops at 20 characters.

---

## 5. Radio Buttons

**Radio buttons let the visitor pick exactly ONE choice** from a group.

```html
<p>Meeting time:</p>

<!-- All three have the SAME name, so they form one group.
     Picking one un-picks the others.
     Each one has a DIFFERENT value. The value is what gets sent. -->
<label>
  <input type="radio" name="meetingTime" value="before" required>
  Before school
</label>
<label>
  <input type="radio" name="meetingTime" value="lunch">
  Lunch
</label>
<label>
  <input type="radio" name="meetingTime" value="after">
  After school
</label>
```

Here the `<input>` is **inside** the `<label>`. That also ties them together, so you don't need `for` and `id`. Clicking the words picks the button. Both ways (for/id, or wrapping) are correct.

Putting `required` on one radio button in a group makes the whole group required.

**Try it:** Give one of the radio buttons a different `name`. Now you can pick two at once. Put the name back.

---

## 6. Checkboxes

**Checkboxes let the visitor pick as MANY as they want**, or none.

```html
<p>What do you want to learn? (Pick any)</p>

<!-- Same name for the group, different value for each box.
     If two are checked, both are sent:
     interests=html&interests=games -->
<label>
  <input type="checkbox" name="interests" value="html">
  HTML and CSS
</label>
<label>
  <input type="checkbox" name="interests" value="javascript">
  JavaScript
</label>
<label>
  <input type="checkbox" name="interests" value="games">
  Game design
</label>
```

| | Radio buttons | Checkboxes |
|---|---|---|
| How many can be picked | One | Any number |
| Shape | Circle | Square |
| Example | T-shirt size | Toppings |

---

## 7. Dropdown Menus with select

A `<select>` is a dropdown list. Each choice is an `<option>`. Use it when there are several choices and a list of radio buttons would take up too much room.

```html
<label for="grade">Grade:</label>
<!-- The label's for matches the select's id, just like an input -->
<select id="grade" name="grade" required>
  <!-- An empty value on the first option makes it a "pick one" prompt.
       With required on the select, the browser won't accept this option. -->
  <option value="">-- Choose one --</option>
  <option value="11">Junior (11th)</option>
  <option value="12">Senior (12th)</option>
  <option value="other">Other</option>
</select>
```

The text between the tags ("Junior (11th)") is what the visitor sees. The `value` ("11") is what gets sent.

---

## 8. Textarea for Longer Messages

A `<textarea>` is a box for several lines of text, like a message.

```html
<label for="message">Why do you want to join?</label>
<!-- rows = how many lines tall, cols = about how many characters wide.
     textarea has a closing tag. Leave nothing between the tags,
     or that text shows up inside the box. -->
<textarea id="message" name="message" rows="5" cols="40"
          placeholder="Tell us a little about yourself"></textarea>
```

**Try it:** Change `rows` to 10 and look. Change it back. (Later, CSS `width: 100%` will control the width, so `cols` matters less.)

---

## 9. Grouping with fieldset and legend

A long form is easier to read in sections. `<fieldset>` draws a box around related controls. `<legend>` is the title of that box.

Wrap your controls into groups like this:

```html
<form id="signup-form" action="#" method="get">

  <fieldset>
    <legend>About You</legend>
    <!-- name, email, password, phone, age, date, website, nickname go here -->
  </fieldset>

  <fieldset>
    <legend>Meeting Time</legend>
    <!-- the radio buttons go here (you can delete the <p> above them;
         the legend now says what the group is) -->
  </fieldset>

  <fieldset>
    <legend>Interests</legend>
    <!-- the checkboxes go here -->
  </fieldset>

  <fieldset>
    <legend>A Little More</legend>
    <!-- the grade dropdown and the textarea go here -->
  </fieldset>

  <!-- buttons go here (step 10) -->

</form>
```

A fieldset + legend is the best way to label a group of radio buttons or checkboxes. Screen readers read the legend before each choice.

---

## 10. Submit and Reset Buttons

Put these after the last `</fieldset>`, still inside the `<form>`:

```html
<!-- A div so we can style the buttons as a group -->
<div class="button-group">
  <!-- submit: checks required fields, then sends the form to the action -->
  <button type="submit">Sign Up</button>
  <!-- reset: clears every box back to how it started -->
  <button type="reset">Clear Form</button>
</div>
```

| Button | What it does |
|---|---|
| `type="submit"` | Checks the form (required, email, min/max, minlength), then sends it |
| `type="reset"` | Empties the form. Nothing is sent. |
| `type="button"` | Does nothing by itself. JavaScript gives it a job (Lesson 09). |

You may also see the older style: `<input type="submit" value="Sign Up">`. It works the same way. We use `<button>` because it is easier to style.

**Try it:**
1. Click Sign Up with everything empty. The browser stops you at the first required box.
2. Fill in the required boxes and click Sign Up. Look at the address bar. Find each `name=value` pair.
3. Change `method="get"` to `method="post"` and submit again. The answers are no longer in the address bar. Change it back to `get`.

---

## 11. Tab Order and tabindex

Many people fill in forms with the keyboard. The **Tab** key moves to the next control. **Shift+Tab** moves back. Space checks a checkbox. The arrow keys move between radio buttons.

The browser tabs through controls **in the order they appear in your HTML.** If your HTML is in a sensible order, the tab order is already correct. You don't need to add anything.

The `tabindex` attribute changes this. The Ohio web design standards list it (competency 6.4.6), so know what it does:

| Value | What it does | Should you use it? |
|---|---|---|
| `tabindex="0"` | Lets Tab land on something that normally can't be focused, like a `<div>` | Only if that item is clickable |
| `tabindex="-1"` | Tab skips it | Rarely |
| `tabindex="1"`, `"2"`, ... | Tab goes to these first, before everything else | **Almost never.** It usually makes the order confusing. |

```html
<!-- BAD: Tab jumps to the button first, before any boxes are filled in -->
<button type="submit" tabindex="1">Sign Up</button>

<!-- GOOD: no tabindex. Tab reaches the button last, because it is last in the HTML. -->
<button type="submit">Sign Up</button>
```

**Try it:** Click in the Full Name box. Press Tab over and over. Every control should get a highlight, top to bottom. Then add `tabindex="1"` to the Sign Up button and try again. See the jump? Take it back out.

---

## 12. Styling the Form with CSS

Make `form-practice.css` next to your HTML file. This uses skills from Lessons 05-07: colors, the box model, `:hover`, and a media query. It adds three new things:

- **Attribute selectors**, like `input[type="email"]`, which pick inputs by their type.
- **`:focus`**, which styles the box the cursor is in.
- **`box-sizing: border-box`**, so `width: 100%` includes the padding and border and the boxes don't stick out.

```css
/* The page */
body {
  font-family: Arial, sans-serif;
  max-width: 600px;            /* keeps the form from getting too wide */
  margin: 0 auto;              /* centers it */
  padding: 20px;
  background-color: #f5f5f5;
}

/* The form: a white card */
form {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Each section box */
fieldset {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
}

/* Section titles */
legend {
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 8px;
}

/* Labels on their own line, above the box */
label {
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
}

/* The text-style boxes, the dropdown, and the textarea.
   Radio buttons and checkboxes are NOT in this list,
   because we don't want them 100% wide. */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="number"],
input[type="date"],
input[type="url"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;        /* textarea uses a different font unless you set this */
  box-sizing: border-box;      /* width includes padding and border */
}

/* The box the cursor is in */
input:focus,
select:focus,
textarea:focus {
  outline: none;               /* remove the browser's default outline... */
  border-color: #007bff;       /* ...and replace it with our own, so it is still easy to see */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
}

/* Buttons */
.button-group {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 12px 20px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;             /* hand pointer, so it looks clickable */
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Make the reset button look less important than submit */
button[type="reset"] {
  background-color: #6c757d;
}

button[type="reset"]:hover {
  background-color: #545b62;
}

/* Small screens: buttons full width */
@media (max-width: 600px) {
  button {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
}
```

The radio buttons and checkboxes are inside labels that are `display: block`, so each choice gets its own line. They are bold because of the `label` rule. To make the choices plain, you can add `class="choice"` to those labels and this rule:

```css
/* Radio and checkbox labels: normal weight */
.choice {
  font-weight: normal;
}
```

**Never remove the focus outline without adding your own focus style.** Keyboard users need to see where they are.

---

## 13. Test Your Form

1. Click each label. The cursor or check should go to the right control.
2. Click Sign Up with the form empty. The browser should stop you.
3. Type a bad email. The browser should stop you.
4. Pick two radio buttons. Only one should stay picked.
5. Check two checkboxes. Both should stay checked.
6. Fill it in and submit. Read the answers in the address bar.
7. Click Clear Form. Everything empties.
8. Tab through the whole form. The order goes top to bottom, and you can always see which box you're in.
9. Make the browser window narrow. The buttons should go full width.
10. Run the page through https://validator.w3.org/ and fix any errors.

---

## 14. Checklist

- [ ] `<form>` with `id`, `action`, and `method`
- [ ] Every text-style input has a `<label>` with a `for` that matches its `id`
- [ ] Every control has a `name`
- [ ] Input types used: text, email, password, tel, number, date, url
- [ ] `placeholder` and `required` used where they make sense
- [ ] `minlength`, `maxlength`, `min`, and `max` tried
- [ ] One radio group (same name, different values)
- [ ] One checkbox group (same name, different values)
- [ ] One `<select>` with a "Choose one" first option
- [ ] One `<textarea>` with `rows` and `cols`
- [ ] Four `<fieldset>` sections, each with a `<legend>`
- [ ] Submit and reset buttons
- [ ] Tab order goes top to bottom, with no positive `tabindex`
- [ ] Stylesheet styles labels, boxes, `:focus`, buttons, `:hover`, and has a media query

---

## 15. Summary

- `<form>` wraps the whole form. `action` is where the answers go. `method` is how (`get` = in the address bar, `post` = hidden).
- We have no server yet, so we use `action="#"`.
- Every input needs a label (`for` matches `id`) and a `name`.
- The `type` decides what the input accepts: text, email, password, tel, number, date, url, radio, checkbox.
- Radio = pick one. Checkbox = pick any. Same `name` makes a group. `value` is what gets sent.
- `<select>` = dropdown. `<textarea>` = long text.
- `<fieldset>` + `<legend>` split a form into titled sections.
- `required`, `type="email"`, `min`/`max`, and `minlength` let the browser check answers with no JavaScript.
- Keep HTML in a sensible order and the Tab key works without `tabindex`.
- Style forms with `display: block` labels, `width: 100%` + `box-sizing: border-box` boxes, and a visible `:focus` style.
