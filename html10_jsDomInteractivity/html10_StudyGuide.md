# HTML10 Study Guide: JS DOM & Interactivity

## Key Vocabulary

### DOM & Selection
- **DOM (Document Object Model)**: A tree structure representing your HTML page. JavaScript uses it to access and modify elements.
- **document**: The global object in JavaScript that gives access to the entire page.
- **getElementById()**: Method to select an element by its ID attribute (fastest method).
- **querySelector()**: Method to select the first element matching a CSS selector.
- **querySelectorAll()**: Method to select ALL elements matching a CSS selector (returns a list).

### Content & Style Manipulation
- **innerHTML**: Property to read/write HTML content inside an element (includes tags).
- **textContent**: Property to read/write plain text content inside an element (no tags).
- **style property**: JavaScript object that controls inline CSS styles.

### Events
- **event**: Something that happens on a page (click, hover, type, submit, etc.).
- **event listener**: Code that "listens" for an event and runs a function when it happens.
- **addEventListener()**: Method to attach an event listener to an element.
- **click event**: Fires when user clicks an element.
- **mouseover**: Fires when mouse enters an element.
- **mouseout**: Fires when mouse leaves an element.
- **submit event**: Fires when a form is submitted.
- **preventDefault()**: Method to stop the default behavior of an event (e.g., prevent form from actually submitting).

### Form Validation
- **form validation**: Checking that user input is valid before processing it.
- **classList**: Property to manage CSS classes on an element without replacing existing classes.
- **add()**: classList method to add a class.
- **remove()**: classList method to remove a class.
- **toggle()**: classList method to add/remove a class.

---

## Quick Reference Cheat Sheet

### Select an Element
```javascript
// By ID
const element = document.getElementById('myId');

// By selector
const element = document.querySelector('.myClass');
const allElements = document.querySelectorAll('p');
```

### Change Content
```javascript
element.innerHTML = '<strong>New HTML</strong>';
element.textContent = 'Just text';
```

### Change Styles
```javascript
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.display = 'none'; // Hide
element.style.display = 'block'; // Show
```

### Add Event Listener
```javascript
element.addEventListener('click', function() {
  console.log('Element was clicked');
});

element.addEventListener('mouseover', function() {
  console.log('Mouse is over element');
});

element.addEventListener('submit', function(event) {
  event.preventDefault(); // Don't actually submit
  // Validate form here
});
```

### Manage Classes
```javascript
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('open');
```

### Simple Validation
```javascript
const email = document.getElementById('email').value;

if (email === '') {
  // Show error
  return false;
}

if (!email.includes('@')) {
  // Not a valid email
  return false;
}
```

---

## ODE Competencies

This lesson covers:

- **6.2.7**: Develop web pages using hover and mouseover effects
- **6.4.7**: Use scripting to interact with data and forms
- **6.3.1**: Use scripting languages to develop web pages

---

## Student Learning Objectives

By the end of this lesson, students can:
1. Select HTML elements using JavaScript
2. Modify element content and styles with JavaScript
3. Respond to user events with event listeners
4. Validate form input before submission
5. Create hover and mouseover effects
6. Build interactive page elements like accordions

---

## Common Mistakes to Avoid

- Forgetting quotes around selector strings: `getElementById("id")` not `getElementById(id)`
- Using `=` instead of `===` in comparisons: `value === ''` not `value = ''`
- Trying to access elements before the page loads
- Not using `event.preventDefault()` when you need to stop default behavior
- Forgetting to use `addEventListener()` and instead trying inline event handlers
- Confusing `innerHTML` (which parses HTML) with `textContent` (which doesn't)

---

## Practice Questions

1. What is the difference between `getElementById()` and `querySelector()`?
2. When would you use `innerHTML` vs `textContent`?
3. What does `event.preventDefault()` do?
4. How do you check if a string contains the "@" symbol?
5. What's the difference between `mouseover` and `click`?
6. How do you hide an element with JavaScript?
7. What does `classList.toggle()` do?
