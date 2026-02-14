# Lesson 13 Walkthrough: Testing, Protocols & Publishing

**Duration:** 40-50 minutes
**Objective:** Understand web protocols, validate an HTML page, test in multiple browsers, and deploy to GitHub Pages.

---

## Part 1: Understanding Web Protocols (Conceptual) — 10 minutes

### What Happens When You Visit a Website?

Let's trace the journey of visiting **https://www.google.com**:

1. **You type the URL** into the address bar
2. **Your browser sends a request** to the internet
3. **DNS looks up google.com** and finds its IP address (142.251.32.14)
4. **Your browser connects to Google's server** at that IP address
5. **Google's server sends back HTML, CSS, and images**
6. **Your browser renders the page** (parses HTML, applies CSS, runs JavaScript)
7. **You see the Google search page**

### Try This
Answer these questions about the process above:

- What would happen if DNS couldn't find an IP address for google.com?
  ___

- Why is HTTPS better than HTTP for logging into your email?
  ___

- Is Google's homepage a static site or dynamic site? Why?
  ___

### Key Takeaway
The web is built on layers:
- **DNS** finds the server
- **HTTPS** (or HTTP) transfers data securely
- **TCP/IP** breaks data into packets for delivery
- **Browser rendering** turns code into a visible page

---

## Part 2: Validating HTML Code — 15 minutes

Now let's test code quality. You'll validate an HTML page using the W3C Validator.

### Step 1: Create a Test HTML File

Create a file called `test.html` with this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Test Page</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="Sample image">
    <p><a href="https://www.example.com">Visit Example</a></p>
</body>
</html>
```

### Step 2: Validate HTML

1. Open **https://validator.w3.org/** in your browser
2. Choose **"Direct Input"** tab
3. Copy and paste your `test.html` code into the text area
4. Click **"Check"**

### Try This
Take a screenshot of the validation results and answer:

- Does your HTML pass validation? (Yes / No)
  ___

- If there are errors, list them:
  ___

- What do HTML errors mean for how the page displays?
  ___

### Step 3: Validate CSS

1. Go to **https://jigsaw.w3.org/css-validator/**
2. Choose **"Direct Input"** tab
3. Copy the CSS from inside the `<style>` tag of your HTML
4. Click **"Check"**

### Try This
Answer:

- Does your CSS pass validation?
  ___

- What is the difference between an error and a warning?
  ___

### Key Takeaway
Validation catches mistakes that can break functionality in certain browsers. Always validate before deploying!

---

## Part 3: Cross-Browser Testing — 10 minutes

### Why Multiple Browsers Matter

Modern browsers (Chrome, Firefox, Safari, Edge) handle HTML/CSS slightly differently. What works in Chrome might break in Firefox.

### Step 1: Test Your Page in Multiple Browsers

1. Save your `test.html` file locally
2. Open it in **Chrome** (how does it look?)
3. Open the same file in **Firefox** (same result?)
4. If you have access to **Safari** or **Edge**, test there too

### Try This
Fill out this testing checklist:

- [ ] Page loads in Chrome
- [ ] Page loads in Firefox
- [ ] Links work in all browsers
- [ ] Images display in all browsers
- [ ] CSS styles apply in all browsers
- [ ] No errors in the browser console (open with F12)

### Step 2: Use DevTools

Press **F12** (or **Ctrl+Shift+I** on Windows, **Cmd+Option+I** on Mac) to open Developer Tools.

### Try This
- Click on the **Inspector/Elements** tab
- Hover over elements on the page to see the HTML structure
- Go to the **Console** tab
- Are there any errors listed in red?
  ___

### Key Takeaway
DevTools is your best friend. Inspect elements, check console errors, and test responsive design (mobile view button).

---

## Part 4: Deploying to GitHub Pages — 20 minutes

Now for the exciting part: making your site LIVE on the internet!

### Prerequisites
- GitHub account (free at https://github.com)
- Git installed on your computer (or use GitHub Desktop)
- Your HTML/CSS/JS project ready to deploy

### Step 1: Create a GitHub Repository

1. Log in to **https://github.com**
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: **`username.github.io`** (replace `username` with your GitHub username)
   - Example: `jane-smith.github.io`
4. Set to **Public** (required for GitHub Pages)
5. Click **"Create repository"**

### Try This
What is your GitHub username? ___

What will your repository name be? ___

### Step 2: Clone the Repository (or Initialize Git)

Open your terminal/command prompt and run:

```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

### Try This
Did you successfully clone the repository? (Y / N) ___

### Step 3: Add Your Project Files

1. Copy your HTML, CSS, and image files into the folder
2. Make sure you have at least an **`index.html`** file (the homepage)

```
username.github.io/
├── index.html          (main page)
├── style.css           (your stylesheet)
├── images/             (folder with images)
└── ...other files
```

### Try This
List the files you're adding:

- ___
- ___
- ___

### Step 4: Stage and Commit Your Files

In the terminal, run:

```bash
git add .
git commit -m "Initial commit: Add website files"
```

### Try This
What message should you write in the commit? (Something descriptive)

"___"

### Step 5: Push to GitHub

```bash
git push origin main
```

(If prompted for a password, use your GitHub personal access token, not your password)

### Try This
Did the push succeed? (Y / N) ___

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under "Source," select **main** branch
5. Click **Save**

### Try This
Screenshot the Pages settings showing that your site is enabled.

### Step 7: Wait for Deployment

GitHub needs **1-2 minutes** to build and deploy your site.

### Step 8: Visit Your Live Website!

Your site is now live at:

```
https://username.github.io
```

### Try This
Visit your live site! Does it work? (Y / N) ___

What is your live URL?

___

### Key Takeaway
You just deployed a real website to the real internet with just a few git commands! This is how modern web developers work.

---

## Summary Checklist

- [ ] I understand how the web works (DNS, HTTPS, rendering)
- [ ] I validated my HTML and CSS code
- [ ] I tested my site in multiple browsers
- [ ] I deployed my site to GitHub Pages
- [ ] My site is now live at a public URL
- [ ] I understand git basics (add, commit, push)

## What's Next?

- Add a custom domain (optional, requires DNS setup)
- Learn about dynamic sites and databases
- Explore Node.js, Python, or other backend languages
- Keep building projects and sharing them!

---

## Troubleshooting

**My site doesn't appear after deployment**
- Wait 5 minutes (GitHub can be slow)
- Check that repository name is `username.github.io`
- Verify your `index.html` is in the root folder
- Check Settings → Pages to confirm it's enabled

**Git push asks for password**
- Use a GitHub Personal Access Token (Settings → Developer settings → Personal access tokens)
- Do NOT use your regular password

**My CSS/images don't show up**
- Check file paths in your HTML (should be relative, not absolute)
- Example: `<link rel="stylesheet" href="style.css">` (not `C:/users/...`)
- Example: `<img src="images/photo.jpg">` (not full file paths)

**My site looks different on mobile**
- Check that you have the viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test DevTools responsive mode (device toolbar button)
