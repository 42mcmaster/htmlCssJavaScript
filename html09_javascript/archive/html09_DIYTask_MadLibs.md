# HTML09 DIY Task: Mad Libs Story Generator

## Project Overview

You will create a **Mad Libs** style page generator using JavaScript variables and functions. Mad Libs is a fun word game where you ask for random words, plug them into a story template, and create hilarious results!

Your page will:
- Store words in JavaScript variables
- Use a function to combine those words into a funny story
- Display the result on the HTML page (not just console.log)

## Learning Goals

By completing this project, you will:
- Use variables to store data of different types
- Write and call functions with parameters
- Use template literals to build multi-line strings
- Practice HTML and JavaScript integration
- Create an interactive, dynamic web page

---

## Requirements

### 1. HTML Structure
- Create a valid HTML5 page with proper `<!DOCTYPE>`, `<head>`, and `<body>`
- Add a title that describes your Mad Libs game
- Include instructions for the user explaining what your Mad Libs generator does
- Create a `<div>` or `<p>` element with an ID (like `id="storyOutput"`) where the story will display
- Link to an external JavaScript file (not inline)

### 2. JavaScript Variables
Create at least **8 variables** that store different types of words:
- At least **2 adjectives** (descriptive words like "purple," "sparkly")
- At least **2 nouns** (people, places, things like "elephant," "pizza")
- At least **2 verbs** (action words like "dance," "sing")
- At least **2 other words** (adverbs, colors, foods, numbers, etc.)

Example:
```javascript
let adjective1 = 'silly';
let adjective2 = 'mysterious';
let noun1 = 'penguin';
let noun2 = 'spaceship';
let verb1 = 'juggle';
let verb2 = 'explore';
let adverb = 'frantically';
let number = 42;
```

### 3. JavaScript Function
Write a function that:
- Has a name that describes what it does (like `generateMadLibsStory` or `createFunnyStory`)
- Takes **parameters** for at least 4 of your variables
- Uses a **template literal** to build a story string that combines all the parameters
- **Returns** the complete story as a string

Example structure:
```javascript
function generateMadLibsStory(adj1, noun1, verb1, adj2) {
  return `Once upon a time, a ${adj1} ${noun1} decided to ${verb1} in a very ${adj2} way!`;
}
```

### 4. Display the Story on the Page
- Call your function with your variables as arguments
- Capture the result in a variable
- Use `document.getElementById()` or similar DOM method to insert the story into your HTML element
- The story must **display on the page**, not just in the console

Example:
```javascript
let myStory = generateMadLibsStory(adjective1, noun1, verb1, adjective2);
document.getElementById('storyOutput').textContent = myStory;
```

### 5. Comments
- Add a comment explaining what each variable stores
- Add a comment above your function explaining what it does
- Add a comment explaining how the story is displayed

### 6. Code Quality
- Use **camelCase** for all variable and function names
- Use meaningful variable names (not `x`, `y`, or `a`, `b`)
- Indent your code properly for readability
- Make sure all HTML and JavaScript is valid

---

## Stretch Goals (Optional Enhancements)

Choose one or more to make your Mad Libs even better:

1. **Add a Button** — Create a button that generates a new story with different words each time it's clicked
   ```html
   <button onclick="generateNewStory()">Generate New Story</button>
   ```

2. **Multiple Stories** — Write multiple functions that each generate different stories, then randomly pick one to display

3. **User Input** — Ask the user for words using `prompt()` instead of storing them in variables
   ```javascript
   let userAdjective = prompt('Give me an adjective:');
   ```

4. **Style It** — Add CSS to make your story display beautifully (color, fonts, borders, etc.)

5. **HTML to Text** — Instead of using `textContent`, use `innerHTML` and add HTML formatting (paragraphs, bold text, line breaks, etc.)

6. **Story Variations** — Create a longer, more complex story with more than 8 variables

---

## Example Solution Overview

Your final page should:
- Have a title like "Mad Libs Story Generator"
- Show instructions: "This page creates silly stories using random words and JavaScript!"
- Have a clear area where the story appears
- Display a complete, funny sentence (at least 2-3 sentences long)
- Have well-commented JavaScript code

Example output might look like:
```
Once upon a time, a purple penguin decided to juggle while wearing mysterious pajamas!
The penguin sang 42 songs and danced with a sparkly robot.
Everyone laughed and clapped for the silly astronaut!
```

---

## Testing Checklist

Before you submit, verify:
- [ ] HTML file is valid and displays in a browser
- [ ] JavaScript file is linked correctly and loads
- [ ] Variables are declared with `let` or `const`
- [ ] Function takes parameters and uses a template literal
- [ ] Story displays on the page (not just console)
- [ ] No console errors (check F12 Developer Tools)
- [ ] Code is commented and uses camelCase
- [ ] Story makes sense and is funny/creative

---

## Deliverables

Submit two files:
1. **html09_DIYTask_[YourName].html** — Your HTML page
2. **html09_DIYTask_[YourName].js** — Your external JavaScript file

Or combine as:
- **html09_DIYTask_[YourName].html** — Single file with inline script (if preferred)

---

## Rubric

| Criterion | Points | Notes |
|-----------|--------|-------|
| HTML Structure (valid, proper tags, ID for output) | 20 | Must be valid HTML5 |
| Variables (8+ variables, multiple types) | 20 | Use let/const, meaningful names |
| Function (parameters, template literal, return) | 20 | Must take 4+ parameters |
| Display on Page (DOM manipulation) | 20 | Story must appear in HTML |
| Comments & Code Quality | 10 | camelCase, indentation, clarity |
| Creativity & Humor | 10 | Story is funny and engaging |
| **Total** | **100** | |

---

## Getting Started

1. Create an HTML file with a title, instructions, and an output area
2. Create a JavaScript file with variables for at least 8 words
3. Write a function that takes those words as parameters
4. Call the function and display the result on the page
5. Test in your browser
6. Enhance with stretch goals if desired

Happy coding! Have fun creating silly stories!
