# HTML10 Walkthrough: Building Interactive Elements

In this walkthrough, you'll learn how to select HTML elements and make them interactive using JavaScript.

## Part 1: Selecting and Changing Content

### Step 1: Select an element by ID

```javascript
// Get the element with id="greeting"
const greetingElement = ___('greeting');

// Change its text content
greetingElement.___ = 'Hello, Web Developer!';
```

**What happens:**
- `getElementById()` finds the element
- `textContent` replaces the text inside it

---

## Part 2: Changing Styles with JavaScript

### Step 2: Change element colors and styles

```javascript
// Get the element
const box = document.___('myBox');

// Change its color
box.style.___ = 'blue';

// Change its background color
box.style.___ = 'yellow';

// Hide it
box.style.___ = 'none';
```

**Key Points:**
- CSS properties use hyphens (`background-color`)
- JavaScript uses camelCase (`backgroundColor`)
- Common style properties: `color`, `backgroundColor`, `display`, `fontSize`, `padding`

---

## Part 3: Responding to Clicks with Event Listeners

### Step 3: Make a button interactive

```javascript
// Get the button element
const button = document.getElementById('myButton');

// Listen for a click event
button.___ ('click', function() {
  // This code runs when button is clicked
  console.log('Button was clicked!');

  // Change the button's color
  button.style.backgroundColor = 'green';
});
```

**What you're learning:**
- `addEventListener()` waits for an event
- The second parameter is a function that runs when the event happens
- The function is called a "callback"

---

## Part 4: Toggling Visibility

### Step 4: Build a toggle button

```javascript
// Get elements
const toggleButton = document.getElementById('toggleBtn');
const hiddenBox = document.getElementById('hiddenBox');

// Set initial state
hiddenBox.style.display = 'none';

// Listen for clicks
toggleButton.addEventListener('click', function() {
  // Check current display value
  if (hiddenBox.style.display === '___') {
    // Show the box
    hiddenBox.style.___ = 'block';
  } else {
    // Hide the box
    hiddenBox.style.___ = '___';
  }
});
```

**This creates a toggle effect:**
- First click: shows the box
- Second click: hides the box
- Third click: shows it again, etc.

---

## Part 5: Hover Effects with JavaScript

### Step 5: Add hover effects to navigation links

```javascript
// Get all nav links
const navLinks = document.___('nav a');

// Loop through each link
for (let i = 0; i < navLinks.length; i++) {
  const link = navLinks[i];

  // When mouse enters (mouseover)
  link.addEventListener('___', function() {
    link.style.color = '___';
    link.style.fontWeight = 'bold';
  });

  // When mouse leaves (mouseout)
  link.addEventListener('___', function() {
    link.style.color = '___';
    link.style.fontWeight = 'normal';
  });
}
```

**What happens:**
- `mouseover`: When user hovers over a link
- `mouseout`: When user moves away
- You can change any style property

---

## Part 6: Using classList for Show/Hide

### Step 6: Cleaner visibility management

```javascript
// HTML has a class: <div id="message" class="hidden"></div>
// CSS defines: .hidden { display: none; }

const message = document.getElementById('message');
const showButton = document.getElementById('showBtn');
const hideButton = document.getElementById('hideBtn');

showButton.addEventListener('click', function() {
  // Remove the 'hidden' class to show it
  message.classList.___('hidden');
});

hideButton.addEventListener('click', function() {
  // Add the 'hidden' class to hide it
  message.classList.___('hidden');
});

// Or toggle it on and off:
// message.classList.___('hidden');
```

**Why use classList?**
- Keeps styling in CSS files
- More maintainable than changing styles directly
- Easy to add multiple classes

---

## Part 7: Putting It All Together

### Step 7: Simple interactive FAQ

```javascript
// HTML structure:
// <div class="faq-item">
//   <button class="question">What is HTML?</button>
//   <div class="answer hidden">HTML is...</div>
// </div>

// Get all question buttons
const questions = document.___('button.question');

// Add listener to each
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
    // Get the answer that comes right after the button
    const answer = this.___('div.answer');

    // Toggle visibility
    answer.classList.___('hidden');
  });
}
```

**How this works:**
- User clicks a question button
- The next `<div class="answer">` appears/disappears
- `this` refers to the button that was clicked
- `nextElementSibling` gets the next element

---

## Try This!

Complete the code blanks by referring back to the examples above. Create a simple page with:

1. A heading with an ID
2. A button that changes the heading's color
3. A paragraph that can be hidden/shown
4. A couple navigation links with hover effects

Use the code snippets from this walkthrough as your guide!

---

## Common Patterns to Remember

| Task | Code |
|------|------|
| Select by ID | `document.getElementById('id')` |
| Select by class | `document.querySelector('.class')` or `querySelectorAll('.class')` |
| Change text | `element.textContent = 'new text'` |
| Change style | `element.style.property = 'value'` |
| Add listener | `element.addEventListener('event', function() { })` |
| Add class | `element.classList.add('className')` |
| Remove class | `element.classList.remove('className')` |
| Toggle class | `element.classList.toggle('className')` |
