---
marp: true
theme: default
class: invert
paginate: true
---

# Sprint 02: HTML Forms & Validation
## A Condensed Lesson on Form Essentials

---

<!-- _header: "Sprint 02a — What is a Form?" -->

## What is a Form?

A **form** is an HTML element that collects user input and sends it to a server.

```html
<form action="process.php" method="POST">
  <!-- form controls go here -->
</form>
```

**Key Attributes:**
- `action` — where to send the form data (URL)
- `method` — how to send data (GET or POST)

**Why forms?** Contact forms, registration, logins, surveys, searches

---

<!-- _header: "Sprint 02b — GET vs POST" -->

## GET vs POST: Know the Difference!

| **GET** | **POST** |
|---------|---------|
| Data in URL (visible) | Data in request body (hidden) |
| Limited data size | Larger data size |
| Not secure | More secure |
| Bookmarkable | Not bookmarkable |
| **Use for:** searches, filters | **Use for:** logins, sensitive data, registration |

```html
<!-- Search form - use GET -->
<form action="search.php" method="GET">
  <input type="text" name="query">
  <button type="submit">Search</button>
</form>

<!-- Login form - use POST -->
<form action="login.php" method="POST">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
```

---

<!-- _header: "Sprint 02c — Input Types & Labels" -->

## Input Types & Labels

**The `<label>` connection:**
```html
<label for="fname">First Name:</label>
<input type="text" id="fname" name="fname">
```

**Common Input Types:**
```html
<input type="text" placeholder="Enter text">
<input type="email" placeholder="user@example.com">
<input type="password" placeholder="Enter password">
<input type="number" min="0" max="100">
<input type="date">
<input type="tel" placeholder="555-1234">
```

**Why labels?**
- Accessibility (screen readers)
- Larger click area on mobile
- Better user experience

---

<!-- _header: "Sprint 02d — Radio Buttons vs Checkboxes" -->

## Radio Buttons vs Checkboxes

**Radio Buttons:** User picks **ONE**
```html
<fieldset>
  <legend>Contact Method:</legend>
  <input type="radio" id="email" name="contact" value="email">
  <label for="email">Email</label>

  <input type="radio" id="phone" name="contact" value="phone">
  <label for="phone">Phone</label>
</fieldset>
```

**Checkboxes:** User picks **MULTIPLE**
```html
<fieldset>
  <legend>Interests:</legend>
  <input type="checkbox" id="sports" name="interests" value="sports">
  <label for="sports">Sports</label>

  <input type="checkbox" id="music" name="interests" value="music">
  <label for="music">Music</label>
</fieldset>
```

**Key:** Same `name` for radio buttons; different names for separate checkbox groups.

---

<!-- _header: "Sprint 02e — Dropdowns & Textarea" -->

## Dropdowns & Textarea

**Select Dropdown:**
```html
<label for="grade">Grade Level:</label>
<select id="grade" name="grade">
  <option value="">-- Select --</option>
  <option value="9">9th Grade</option>
  <option value="10">10th Grade</option>
  <option value="11">11th Grade</option>
</select>
```

**Textarea (multi-line text):**
```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50">
</textarea>
```

---

<!-- _header: "Sprint 02f — Fieldset & Legend" -->

## Fieldset & Legend (Grouping Controls)

**Group related form controls together:**

```html
<form>
  <fieldset>
    <legend>Personal Info</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>

  <fieldset>
    <legend>Preferences</legend>
    <!-- more controls -->
  </fieldset>
</form>
```

**Benefits:**
- Improves accessibility
- Better organization visually
- Easier to style with CSS

---

<!-- _header: "Sprint 02g — Submit & Reset Buttons" -->

## Submit & Reset Buttons

```html
<button type="submit">Submit Form</button>
<button type="reset">Clear Form</button>
<button type="button">Do Something</button>
```

**Attributes:**
- `type="submit"` — sends form data
- `type="reset"` — clears all fields
- `type="button"` — custom behavior (needs JavaScript)
- `tabindex="1"` — set focus order (rarely used)

**Note:** `<input type="submit">` and `<button type="submit">` do the same thing.

---

<!-- _header: "Sprint 02h — Form Styling Basics" -->

## Form Styling Basics

```css
/* Target all form controls */
input, select, textarea {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Style labels */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

/* Group spacing */
fieldset {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
}

legend {
  font-weight: bold;
  color: #333;
}
```

---

<!-- _header: "Sprint 02i — Key Takeaways" -->

## Key Takeaways ✓

1. **Forms** collect user input via `<form>` tag with `action` and `method`
2. **GET** for public data (searches), **POST** for secure data (logins)
3. **Labels** connect to inputs using `for` and `id` attributes
4. **Radio buttons** = one choice, **checkboxes** = many choices
5. **Fieldset & legend** group related controls (accessibility + style)
6. **Input types** vary: text, email, password, number, date, tel, etc.
7. **Submit/Reset** buttons control form submission

**For your state exam:** Focus on GET vs POST, fieldset/legend, and label connections!

---
