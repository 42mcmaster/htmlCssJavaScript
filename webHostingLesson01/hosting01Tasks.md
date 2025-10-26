# Lesson H1 Tasks: Publishing & Hosting Practice

---

## Task 1: GUIDED EXAMPLE - Publish to GitHub Pages

**Goal:** Get your first website live on the internet!

### Step-by-Step Instructions:

**Part 1: Prepare Your Site**

1. Create a simple test website:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Published Site</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5 text-center">
        <h1>🎉 My Website is Live!</h1>
        <p class="lead">This site is hosted on GitHub Pages</p>
        <p>Published on: <span id="date"></span></p>
        
        <div class="mt-5">
            <h2>About Me</h2>
            <p>I'm learning web development and this is my first published site!</p>
        </div>
    </div>
    
    <script>
        document.getElementById('date').textContent = new Date().toLocaleDateString();
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Part 2: Create GitHub Account & Repository**

1. Go to https://github.com/signup
2. Create a free account
3. Verify your email
4. Click "Create Repository" (green button)
5. Name it: `your-username.github.io` (use YOUR actual username!)
6. Select "Public"
7. Check "Add a README file"
8. Click "Create repository"

**Part 3: Upload Your Files**

1. Click "Add file" → "Upload files"
2. Drag your `index.html` file
3. Commit message: "My first website"
4. Click "Commit changes"

**Part 4: Enable GitHub Pages**

1. Go to "Settings" (top of repository)
2. Click "Pages" in left sidebar
3. Under "Source":
   - Branch: Select "main"
   - Folder: Select "/ (root)"
4. Click "Save"

**Part 5: Visit Your Site!**

1. Wait 1-2 minutes
2. Visit: `https://your-username.github.io`
3. Your site is live! 🎉

**Checkpoint:** Share your URL with the class!

---

## Task 2: Multi-Page Site Deployment

**Goal:** Publish a complete multi-page website.

### Instructions:

1. Create a small website with these files:
   - `index.html` (homepage)
   - `about.html` (about page)
   - `contact.html` (contact page)

2. Create a `css` folder with `style.css`

3. Create an `images` folder with at least 1 image

4. Upload entire project to GitHub Pages

### File Structure:
```
your-repo/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
└── images/
    └── logo.png
```

### Homepage Starter:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | My Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">My Site</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Welcome to My Website</h1>
        <p>This is a multi-page site hosted on GitHub Pages.</p>
        <img src="images/logo.png" alt="Site logo" class="img-fluid">
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ All 3 pages uploaded
- ✅ Navigation links work between pages
- ✅ CSS file linked correctly
- ✅ Image loads properly
- ✅ Site accessible at your GitHub Pages URL

**💡 Testing:** After uploading, click through all navigation links to verify everything works!

---

## Task 3: Deploy to Netlify (Alternative Method)

**Goal:** Learn another deployment method using drag-and-drop.

### Instructions:

**Part 1: Create a Simple Site**

1. Create a folder called `netlify-test`
2. Add `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netlify Deployment Test</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container text-center mt-5">
        <h1 class="text-primary">🚀 Deployed on Netlify!</h1>
        <p class="lead">This site was deployed in under 30 seconds</p>
        <div class="alert alert-success">
            Netlify makes deployment super easy!
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Part 2: Deploy to Netlify**

1. Go to https://app.netlify.com/signup
2. Sign up (can use GitHub account)
3. Click "Add new site" → "Deploy manually"
4. Drag your entire `netlify-test` folder into the upload area
5. Wait 30 seconds
6. Your site is live at a random URL like `random-name-12345.netlify.app`

**Part 3: Customize URL**

1. Go to "Site settings"
2. Click "Change site name"
3. Enter: `your-name-test` (must be unique)
4. Your site is now at: `your-name-test.netlify.app`

**Checkpoint:** You now know TWO deployment methods! 🎉

---

## Task 4: Fix Deployment Issues

**Goal:** Learn to troubleshoot common deployment problems.

### Instructions:

1. Create this intentionally broken site:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Broken Site</title>
    <!-- Problem 1: Wrong path to Bootstrap -->
    <link href="bootstrap.css" rel="stylesheet">
    <!-- Problem 2: Wrong path to custom CSS -->
    <link rel="stylesheet" href="Style.css">
</head>
<body>
    <h1>My Site</h1>
    <!-- Problem 3: Absolute path to image -->
    <img src="C:/Users/Student/Desktop/images/logo.png" alt="Logo">
    
    <!-- Problem 4: Wrong case in link -->
    <a href="About.html">About Page</a>
    
    <!-- Problem 5: Missing Bootstrap JS -->
</body>
</html>
```

2. Deploy this broken site
3. Identify all 5 problems
4. Fix them
5. Redeploy the working version

### Problems to Find:
1. ❌ Bootstrap CSS path wrong
2. ❌ Custom CSS filename case doesn't match
3. ❌ Image uses absolute path
4. ❌ Link uses wrong case (About.html vs about.html)
5. ❌ Missing Bootstrap JavaScript

---

## Task 5: Complete Portfolio Deployment

**Goal:** Deploy a real portfolio site.

### Instructions:

Create and deploy a complete portfolio with:

**Required Pages:**
- Homepage (`index.html`)
- About page
- Projects page
- Contact page

**Required Content:**
- Navigation on all pages
- Bootstrap styling
- At least 3 images
- Working internal links
- Contact information

**File Structure:**
```
portfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
└── images/
    ├── profile.jpg
    ├── project1.jpg
    └── project2.jpg
```

### Requirements:
- ✅ Deployed to GitHub Pages OR Netlify
- ✅ All pages accessible
- ✅ Navigation works between all pages
- ✅ All images load
- ✅ Bootstrap styling applied
- ✅ Mobile-responsive
- ✅ Share working URL

**💡 Bonus:** Add a footer with your GitHub profile link!

---

## Practical Deployment Checklist

Use this before every deployment:

### Pre-Deployment
- [ ] All files use lowercase names
- [ ] Homepage named `index.html`
- [ ] No spaces in filenames
- [ ] All paths are relative (no C:/ or absolute paths)
- [ ] All images compressed/optimized
- [ ] Test site locally first

### File Paths to Check
- [ ] CSS: `<link href="css/style.css">`
- [ ] Images: `<img src="images/photo.jpg">`
- [ ] Internal links: `<a href="about.html">`
- [ ] Bootstrap: Using CDN links

### After Deployment
- [ ] Visit your live URL
- [ ] Click all navigation links
- [ ] Check all images load
- [ ] Test on mobile (browser dev tools)
- [ ] Verify forms work (if applicable)
- [ ] Check browser console for errors (F12)

---

## Common Deployment Mistakes

### ❌ Problem: Homepage Not Working

**Wrong:**
```
Files: home.html, styles.css, logo.PNG
```

**Correct:**
```
Files: index.html, styles.css, logo.png
```

### ❌ Problem: Images Not Loading

**Wrong:**
```html
<img src="C:/Users/Me/Website/images/photo.jpg">
```

**Correct:**
```html
<img src="images/photo.jpg">
```

### ❌ Problem: CSS Not Applying

**Wrong:**
```html
<!-- If CSS is in a folder -->
<link rel="stylesheet" href="style.css">
```

**Correct:**
```html
<link rel="stylesheet" href="css/style.css">
```

### ❌ Problem: Case Sensitivity

**Wrong:**
```html
<!-- File is about.html but link says: -->
<a href="About.html">About</a>
```

**Correct:**
```html
<!-- Match exactly, including case -->
<a href="about.html">About</a>
```

---

## Update Your Live Site

### On GitHub Pages:

**Method 1: GitHub Website**
1. Go to your repository
2. Click on file to edit
3. Click pencil icon (edit)
4. Make changes
5. Commit changes
6. Wait 1-2 minutes - site updates automatically

**Method 2: Upload New Files**
1. Click "Upload files"
2. Upload updated files (replaces old ones)
3. Commit changes
4. Site updates in 1-2 minutes

### On Netlify:

**Method 1: Drag and Drop Update**
1. Go to Deploys tab
2. Drag updated folder
3. New version deploys in 30 seconds

**Method 2: GitHub Integration (Advanced)**
- Push changes to GitHub
- Netlify automatically deploys

---

## Challenge: Custom Domain Setup

**Goal:** Connect a real domain name (if you have one).

### If You Have a Domain:

**For GitHub Pages:**
1. Repository Settings → Pages
2. Custom domain: Enter your domain
3. In your domain registrar:
   - Add A records:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
4. Wait 24 hours for DNS propagation

**For Netlify:**
1. Site Settings → Domain management
2. Add custom domain
3. Follow Netlify's DNS instructions
4. Update nameservers at your registrar
5. Wait 24 hours

### Free Domain Alternatives:
- `your-name.github.io` (GitHub Pages)
- `your-site.netlify.app` (Netlify)
- `your-project.vercel.app` (Vercel)

---

## Quick Reference

### GitHub Pages Steps:
1. Create account at github.com
2. Create repository: `username.github.io`
3. Upload files (index.html required)
4. Settings → Pages → Enable
5. Visit: `https://username.github.io`

### Netlify Steps:
1. Create account at netlify.com
2. Add new site → Deploy manually
3. Drag folder
4. Site live at random URL
5. Change site name in settings

### File Requirements:
- Homepage: `index.html` (lowercase, exactly)
- Paths: Relative (images/photo.jpg)
- Names: Lowercase, no spaces
- Test: Locally before deploying

---

## Summary

You've learned:
- ✅ How to publish to GitHub Pages
- ✅ Alternative deployment with Netlify
- ✅ Proper file structure for deployment
- ✅ Using relative vs absolute paths
- ✅ Common deployment issues and fixes
- ✅ How to update your live site
- ✅ Custom domain basics

**Most Important:** Your website is now accessible to ANYONE in the world with internet! Share your URL and show off your work! 🎉
