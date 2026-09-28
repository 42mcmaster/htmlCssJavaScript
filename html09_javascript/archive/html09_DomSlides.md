---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 10: JS DOM & Interactivity

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 10a — DOM Manipulation" -->

# What is the DOM?

- **DOM** = Document Object Model
- A tree structure representing your HTML
- JavaScript can access and modify it
- Changes happen in real-time on the page

```javascript
// JavaScript can interact with HTML elements
document.getElementById('myButton').innerHTML = 'Clicked!';
```

---

# Selecting Elements

**Three main ways to select elements:**

```javascript
// By ID (fastest)
const element = document.getElementById('header');

// By class or complex selectors
const items = document.querySelector('.item');
const allItems = document.querySelectorAll('.item');

// By tag name
const links = document.getElementsByTagName('a');
```

---

# Changing Content & Styles

```javascript
// Change text content
element.textContent = 'New text here';

// Change HTML (be careful!)
element.innerHTML = '<strong>Bold text</strong>';

// Change inline styles
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
element.style.display = 'none'; // Hide element
```

---

<!-- _header: "Sub-Lesson 10b — Events & Validation" -->

# What are Events?

**Events** = things that happen on a page
- Click, hover, type, submit, load, etc.

```javascript
// Add an event listener (best practice)
const button = document.getElementById('myBtn');
button.addEventListener('click', function() {
  console.log('Button was clicked!');
});

// Can also use inline (not recommended)
// <button onclick="doSomething()">Click Me</button>
```

---

# Common Events

| Event | When it happens |
|-------|-----------------|
| `click` | User clicks element |
| `mouseover` | Mouse enters element |
| `mouseout` | Mouse leaves element |
| `submit` | Form is submitted |
| `change` | Input value changes |
| `keydown` | Key is pressed |

---

# Simple Form Validation

```javascript
// Get form input value
const email = document.getElementById('email').value;

// Check if empty
if (email === '') {
  alert('Email is required!');
  return; // Stop form submission
}

// Check for @ symbol (simple email check)
if (!email.includes('@')) {
  alert('Please enter a valid email!');
  return;
}
```

---

# Show/Hide Error Messages with JS

```javascript
// HTML: <p id="errorMsg" class="hidden">Error!</p>

// Hide message (CSS: .hidden { display: none; })
document.getElementById('errorMsg').classList.add('hidden');

// Show message
document.getElementById('errorMsg').classList.remove('hidden');

// Toggle on/off
document.getElementById('errorMsg').classList.toggle('hidden');
```

---

# Hover Effects: CSS vs JS

**CSS (simpler):**
```css
button:hover {
  background-color: darkblue;
}
```

**JavaScript (more control):**
```javascript
const button = document.getElementById('btn');
button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'darkblue';
});
button.addEventListener('mouseout', function() {
  button.style.backgroundColor = 'blue';
});
```

---

# Building an Interactive Element

```javascript
// FAQ Accordion example
const question = document.getElementById('q1');
question.addEventListener('click', function() {
  const answer = document.getElementById('a1');

  // Toggle visibility
  if (answer.style.display === 'none') {
    answer.style.display = 'block';
  } else {
    answer.style.display = 'none';
  }
});
```

---

# Key Takeaways

- Use `getElementById()`, `querySelector()` to select elements
- Change content with `innerHTML` or `textContent`
- Modify styles with `element.style.property`
- Use `addEventListener()` to respond to events
- Validate forms BEFORE submitting
- Use `classList` to manage visibility and styling
