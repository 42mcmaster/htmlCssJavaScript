# Independent Project: Restyle Your "About Me" Page (html05)

## Overview

In this independent project, you'll take your "About Me" page from **html01** and restyle it completely using an **external stylesheet**. This is a real-world application of CSS fundamentals!

---

## Requirements

### 1. HTML Structure (Minimal Changes)
- Start with your **html01 "About Me" page** (or use the example provided)
- Keep the HTML clean and unchanged
- Add **one `<link>` tag** in the `<head>` to connect your external stylesheet
- Do **not** add inline styles

### 2. External Stylesheet (New File)
- Create a file called **`styles.css`** in the same folder as your HTML
- Write **at least 10 CSS rules** covering the following categories:
  - **At least 2 element selectors** (e.g., `body`, `p`, `h1`)
  - **At least 2 class selectors** (e.g., `.highlight`, `.intro`)
  - **At least 1 ID selector** (e.g., `#header`, `#footer`)

### 3. CSS Properties to Include

Use at least one property from **each** of these categories:

#### Colors
```css
color: blue;
background-color: yellow;
```

#### Fonts
```css
font-family: 'Arial', sans-serif;
font-size: 18px;
font-weight: bold;
```

#### Text Properties
```css
text-align: center;
line-height: 1.6;
text-decoration: underline;
letter-spacing: 2px;
```

### 4. Nice-to-Have Additions
- Use **Google Fonts** for at least one element
- Use **hex color codes** for at least 3 colors
- Use **rgb() color format** for at least 1 color
- Add **padding** or **margin** to create spacing
- Add **border** to highlight important elements

---

## Step-by-Step Instructions

### Step 1: Start with Your HTML
Copy your "About Me" page from html01. It should have content like:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me</title>
  <!-- TODO: Add <link> to styles.css here -->
</head>
<body>
  <h1>About Me</h1>
  <p>I'm a student at Medina County Career Center...</p>
  <p>My interests include...</p>
  <!-- More content -->
</body>
</html>
```

### Step 2: Link Your Stylesheet
In the `<head>`, add the link tag:
```html
<link rel="stylesheet" href="styles.css">
```

### Step 3: Plan Your CSS
Before writing CSS, plan what you want to style:
- What should the **body** look like? (background, font)
- What should **headings** look like? (size, color, alignment)
- What should **paragraphs** look like? (spacing, color)
- Do you want to **highlight** certain text with classes?
- Do you want a **special footer or header** with an ID?

### Step 4: Write Your CSS
Create a `styles.css` file with at least 10 rules:

```css
/* Example structure */

/* Element selectors */
body {
  /* ... styles ... */
}

h1 {
  /* ... styles ... */
}

p {
  /* ... styles ... */
}

/* Class selectors */
.highlight {
  /* ... styles ... */
}

.intro {
  /* ... styles ... */
}

/* ID selector */
#footer {
  /* ... styles ... */
}

/* More rules to reach 10+ */
```

### Step 5: Test Your Work
- Open your HTML in a browser
- Verify that all styles are applied
- Check that colors, fonts, and text properties look good
- Make sure the page is readable and professional-looking

---

## Example Project

**Note:** This is just an example to show you what's possible. Your project should reflect your own "About Me" content!

### Example HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="header">
    <h1>About Me</h1>
    <p class="intro">Welcome to my web page!</p>
  </div>

  <h2>Who I Am</h2>
  <p>I'm a high school student passionate about web design and technology.</p>

  <h2>My Interests</h2>
  <p>I love building websites, learning new technologies, and creating digital art.</p>
  <p class="highlight">In the future, I want to become a web developer!</p>

  <h2>My Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript (learning)</li>
  </ul>

  <div id="footer">
    <p>© 2024 My Name. All rights reserved.</p>
  </div>
</body>
</html>
```

### Example CSS
```css
/* Body and page styles */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f0f0f0;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
}

/* Headings */
h1 {
  color: #2c3e50;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
}

h2 {
  color: #34495e;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

/* Paragraphs */
p {
  font-size: 16px;
  margin-bottom: 15px;
}

/* Class: intro */
.intro {
  font-size: 20px;
  font-style: italic;
  color: #7f8c8d;
}

/* Class: highlight */
.highlight {
  background-color: #fff3cd;
  color: #856404;
  padding: 10px;
  border-left: 4px solid #ffc107;
  font-weight: bold;
}

/* ID: header */
#header {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: center;
}

/* ID: footer */
#footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  border-top: 3px solid #3498db;
}

/* List items */
li {
  margin-bottom: 8px;
}
```

---

## Checklist Before Submitting

- [ ] HTML file is clean (no inline styles)
- [ ] External `styles.css` file is created and linked
- [ ] At least 10 CSS rules are written
- [ ] At least 2 element selectors
- [ ] At least 2 class selectors
- [ ] At least 1 ID selector
- [ ] Uses colors (at least 3 hex colors, 1 rgb color)
- [ ] Uses fonts (font-family, font-size, font-weight)
- [ ] Uses text properties (text-align, line-height, text-decoration)
- [ ] Page looks professional and is readable
- [ ] HTML and CSS are valid

---

## Bonus Challenges

1. **Add Google Fonts** — Find a professional font at fonts.google.com and integrate it
2. **Use 3+ Hex Colors** — Create a cohesive color scheme (use a color picker online)
3. **Add Hover Effects** — Use `a:hover` to add styling when hovering over links
4. **Responsive Design** — Adjust padding/font-size for mobile devices
5. **Advanced Selectors** — Use `p:first-child` or `h2:nth-of-type(2)` selectors
6. **Add Animations** — Use `transition` to create smooth effects (optional)

---

## Submission

Submit:
1. **`aboutMe.html`** — Your styled About Me page
2. **`styles.css`** — Your external stylesheet

Both files should be in the same folder and work together without errors.

Good luck! You now have the skills to build professional-looking web pages with CSS!
