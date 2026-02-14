# HTML 01 Walkthrough: Building Your First Page

## Overview
In this guided walkthrough, you will build your first HTML page from scratch. You'll learn the essential structure every HTML document needs, then add some basic content. This should take about 30 minutes.

**What you'll build:** A simple "Welcome" page with proper HTML structure, a title, headings, and paragraphs.

---

## Part 1: Setting Up Your Project

### Step 1: Create a Project Folder
1. On your computer, create a new folder called `html01_MyFirstPage`
2. Remember where you put it (Desktop is fine)

### Step 2: Open VS Code
1. Open Visual Studio Code
2. Click **File → Open Folder**
3. Select your new `html01_MyFirstPage` folder
4. Click **Open**

### Step 3: Create Your HTML File
1. In VS Code, look at the left sidebar (Explorer panel)
2. Click the **New File** icon (or right-click and select "New File")
3. Name it `index.html` and press Enter
4. You now have a blank file ready for HTML code

---

## Part 2: The HTML Skeleton

### Step 4: Type the DOCTYPE
Every HTML5 document starts with a declaration. Type this on the first line:

```html
<!DOCTYPE html>
```

This tells the browser, "Hey, I'm writing HTML5." Nothing fancy, just required.

### Step 5: Open the HTML Tag
Below the DOCTYPE, type:

```html
<html lang="en">
```

The `lang="en"` tells the browser this page is in English. The closing `</html>` comes at the very end.

### Step 6: Add the HEAD Section
Inside the `<html>` tag, add the head section. This is where we put information *about* the page:

```html
  <head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
  </head>
```

**What each part does:**
- `<meta charset="UTF-8">` — Tells the browser how to handle text (UTF-8 supports all languages)
- `<title>My First Web Page</title>` — This text appears in the browser tab

Notice the indentation? Each nested element is indented two spaces. This makes your code easier to read.

### Step 7: Add the BODY Section
After the closing `</head>`, add:

```html
  <body>
    <!-- Content will go here -->
  </body>
```

The `<body>` is where all visible page content lives.

### Step 8: Close the HTML Tag
At the very end, close the html tag:

```html
</html>
```

**Your complete skeleton should now look like this:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
  </head>
  <body>
    <!-- Content will go here -->
  </body>
</html>
```

Save your file (Ctrl+S or Cmd+S).

---

## Part 3: Adding Content with Headings and Paragraphs

### Step 9: Add a Main Heading
Inside the `<body>` tag, replace the comment with a heading:

```html
  <body>
    <h1>Welcome to My Web Page</h1>
  </body>
```

The `<h1>` tag creates the main heading. Use only one `<h1>` per page.

### Step 10: Add a Subheading
Below the `<h1>`, add a second-level heading:

```html
    <h2>About This Page</h2>
```

### Step 11: Add Some Paragraphs
Below the `<h2>`, add a couple of paragraphs:

```html
    <p>This is my first web page. I'm learning HTML!</p>
    <p>HTML helps me structure content for the web.</p>
```

### Step 12: Add a Line Break
Inside one of your paragraphs (or create a new one), use a line break:

```html
    <p>This is one line.<br>This is another line below it.</p>
```

The `<br>` tag creates a line break without starting a new paragraph.

**Your body should now look like:**

```html
  <body>
    <h1>Welcome to My Web Page</h1>
    <h2>About This Page</h2>
    <p>This is my first web page. I'm learning HTML!</p>
    <p>HTML helps me structure content for the web.</p>
    <p>This is one line.<br>This is another line below it.</p>
  </body>
```

Save your file again.

---

## Part 4: Adding Comments

### Step 13: Add a Developer Comment
Above the `<h1>` tag, add a comment to explain your content:

```html
    <!-- Main heading for the page -->
    <h1>Welcome to My Web Page</h1>
```

Comments are notes for developers. Users don't see them in the browser. They help you (and others) understand your code later.

Add a few more comments to sections of your page. For example:

```html
    <!-- About section -->
    <h2>About This Page</h2>
```

---

## Part 5: Testing Your Page

### Step 14: Open in the Browser

**Option A: Using Live Server (Recommended)**
1. Right-click on your `index.html` file in the Explorer panel
2. Select **Open with Live Server**
3. Your browser opens automatically and shows your page
4. Any time you save changes, the browser auto-refreshes

**Option B: Manual Open**
1. In File Explorer (Windows) or Finder (Mac), navigate to your project folder
2. Right-click `index.html` → **Open with** → **Your browser** (Chrome, Firefox, Edge, etc.)

### Step 15: View the Page Source
In your browser:
1. Right-click anywhere on the page
2. Select **Inspect** or **View Page Source**
3. You'll see your HTML code
4. This is handy for checking your work and debugging

---

## Part 6: Try This! Fill-In Practice

Now it's your turn. Edit your `index.html` file and complete these tasks:

### Task A: Change the Title
Change the `<title>` tag to something more personal. What should the browser tab say?

```html
<title>_________________________</title>
```

### Task B: Create a New Section
Add another subheading and paragraph about something you enjoy. Fill in the blanks:

```html
<h2>_________________________</h2>
<p>_________________________</p>
```

### Task C: Add a Line Break
In one of your paragraphs, add a `<br>` tag to split a sentence across two lines:

```html
<p>This is sentence one.<br>This is sentence two.</p>
```

Try it yourself by editing your paragraph to include a meaningful line break.

### Task D: Add a Comment
Before your last paragraph, add a comment explaining what it's about:

```html
<!-- ___________________________ -->
<p>Your paragraph text here.</p>
```

### Task E: Experiment with Headings
Add at least one `<h3>` subheading somewhere on your page to show a third level of importance:

```html
<h3>_________________________</h3>
```

---

## Finished!

When you complete this walkthrough, you should have:
- A valid HTML5 page with proper structure
- DOCTYPE, html, head, and body tags
- A title that shows in the browser tab
- Meta charset for proper text encoding
- At least one h1, some h2s, and a few paragraphs
- Comments explaining sections of your code
- A working page you can view in the browser

**Next:** Move on to the 01a and 01b tasks to practice building pages independently.

---
