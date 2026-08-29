# Task 13c: Publishing to GitHub Pages

**Duration:** 45-60 minutes
**Objective:** Deploy a validated web project to GitHub Pages and make it live on the internet.

---

## Prerequisites

Before starting, you need:

- [ ] GitHub account (free at https://github.com)
- [ ] Git installed on your computer
  - Windows: Download from https://git-scm.com/
  - Mac: `brew install git` or download from https://git-scm.com/
  - Linux: `sudo apt install git`
- [ ] A project ready to deploy (HTML, CSS, images)
- [ ] Project already validated (no major HTML/CSS errors)

**If you don't have any of these, set them up before continuing.**

---

## Part 1: Create a GitHub Repository

### Step 1: Log In to GitHub

1. Go to https://github.com/
2. Log in with your GitHub username and password
3. Click the **"+"** icon in the top right corner
4. Select **"New repository"**

### Step 2: Create Your Repository

Fill out the form:

**Repository Name:**
- Must be: **`username.github.io`**
- Replace `username` with your actual GitHub username
- Example: If your GitHub username is `jane-smith`, use `jane-smith.github.io`

**What is your GitHub username?**

___

**Repository name (must end in .github.io):**

___

**Description (optional):**
- Example: "My portfolio website" or "My first deployed project"

___

**Visibility:**
- **Select PUBLIC** (required for GitHub Pages to work)

**Initialize with:**
- Leave these unchecked (we'll add files manually)

### Step 3: Create Repository

Click **"Create repository"** button.

**After clicking, you should see a page with a link like:**
`https://github.com/username/username.github.io`

---

## Part 2: Set Up Git on Your Computer

### Option A: Clone the Repository (Recommended for Beginners)

**If you're starting fresh**, use this approach.

1. On the repository page, click the green **"Code"** button
2. Click **"Open with GitHub Desktop"** (or in GitHub Desktop: File > Clone repository)
3. Choose where to keep the project (Desktop works) and click Clone
5. Clone the repository:
   In GitHub Desktop: **File > Clone repository**, choose `username.github.io`, pick where to put it.
6. Enter the folder:
   ```bash
   cd username.github.io
   ```

**Did the clone succeed?** (Y / N) ___

### Option B: Initialize Git in Existing Folder

**If you already have a project folder**, use this approach.

1. In GitHub Desktop: **File > Add local repository** (if it isn't one yet, GitHub Desktop offers to create it)
2. **Repository > Repository settings > Remote** — confirm it points at your `username.github.io` repository (or publish it there with **Publish repository**)

**Did this succeed?** (Y / N) ___

---

## Part 3: Add Your Project Files

### Step 1: Copy Your Files to the Repository Folder

Move all your HTML, CSS, images, and other project files into the cloned/initialized folder.

**Important:** Make sure you have an **`index.html`** file in the root folder. This is your homepage.

### Example Folder Structure

```
username.github.io/
│
├── index.html              (REQUIRED - your main page)
├── style.css               (if separate file)
├── about.html              (other pages, optional)
├── images/
│   ├── logo.png
│   ├── photo1.jpg
│   └── ...
└── assets/
    └── ...
```

### Step 2: Verify Files Are There

Open the repository folder in File Explorer (in GitHub Desktop: **Repository > Show in Explorer**) and confirm all your files are present.

**On Mac/Linux:**
```bash
ls -la
```

You should see your files listed.

**Files you see listed:**

___

___

___

### Step 3: Check File Paths

**CRITICAL:** Make sure all links in your HTML use **relative paths**, not absolute paths.

**Correct (relative path):**
```html
<link rel="stylesheet" href="style.css">
<img src="images/photo.jpg" alt="Photo">
<a href="about.html">About</a>
```

**Incorrect (absolute path - won't work!):**
```html
<link rel="stylesheet" href="C:/Users/YourName/Documents/style.css">
<img src="/Users/name/Desktop/project/photo.jpg">
<a href="file:///C:/Users/YourName/index.html">
```

**Do all your links use relative paths?** (Y / N) ___

---

## Part 4: Commit Your Files

### Step 1: Review Changes in GitHub Desktop

Open GitHub Desktop — every file you added shows in the Changes list. Skim it: is everything there that should be? Anything there that shouldn't?

### Step 2: Create a Commit Message

Commit means "save a snapshot" of your code. Write a meaningful summary, like `Initial commit: Add portfolio website`.

**Better commit messages:**
- `"Add landing page and styling"`
- `"Deploy portfolio to GitHub Pages"`
- `"Initial commit: Restaurant project"`

**Worse commit messages:**
- `"update"` (too vague)
- `"stuff"` (meaningless)
- `"asdf"` (not helpful)

### Step 3: Write Your Commit Message

What summary will you use?

"___"


### Step 4: Push to GitHub

Send your code to GitHub:

Click **Push origin** in GitHub Desktop.

**Note:** If it asks you to sign in, use GitHub Desktop's browser sign-in (File > Options > Accounts).

**Did the push succeed?** (Y / N) ___

---

## Part 5: Enable GitHub Pages

### Step 1: Go to Repository Settings

1. On GitHub, go to your repository page
2. Click **"Settings"** (top right of the page)
3. Look for **"Pages"** in the left sidebar (or scroll down)

### Step 2: Configure Pages

Under "Source":
1. Select **"Deploy from a branch"**
2. Choose branch: **`main`** (or `master` if that's your default)
3. Choose folder: **`/ (root)`**
4. Click **"Save"**

### Step 3: Wait for Deployment

GitHub needs **1-2 minutes** to build and deploy your site.

You should see a message like:
```
Your site is live at https://username.github.io
```

**How long did it take?** About ___ minute(s)

---

## Part 6: Verify Your Live Website

### Step 1: Visit Your Live URL

Open your browser and go to:

```
https://username.github.io
```

(Replace `username` with your GitHub username)

### Step 2: Test Your Site

**Does your homepage load?** (Y / N) ___

**Do all your links work?** (Y / N) ___

**Do your images display?** (Y / N) ___

**Does the CSS styling look correct?** (Y / N) ___

**Are there any console errors?** (Open F12 → Console) (Y / N) ___

### Step 3: Share Your URL

**Your live website URL:**

```
https://___
```

**Congratulations! Your website is now live on the internet!**

---

## Part 7: Making Updates (For Later)

Once your site is deployed, you can update it anytime:

### To Make Changes:

1. Edit your files locally (HTML, CSS, images)
2. Test them locally to make sure they work
3. Commit your changes:
   ```bash
   In GitHub Desktop: commit with a summary like "Fix footer styling" (or whatever you changed)
   ```
4. Push to GitHub:
   ```bash
   Click Push origin
   ```
5. Wait 1-2 minutes
6. Your live site automatically updates!

### Try It Now (Optional)

1. Make a small change to your `index.html` (change a title or color)
2. Commit and push in GitHub Desktop
3. Refresh your live website (it should update in 2-5 minutes)

**Did your update appear on the live site?** (Y / N) ___

---

## Part 8: Deployment Checklist

- [ ] GitHub account created
- [ ] Repository named `username.github.io` and is PUBLIC
- [ ] Files cloned to my computer
- [ ] Project files copied to repository folder
- [ ] index.html exists in root folder
- [ ] All links use relative paths (not absolute)
- [ ] Committed in GitHub Desktop with a real summary message
- [ ] Pushed to GitHub (Push origin in GitHub Desktop)
- [ ] GitHub Pages enabled in Settings
- [ ] Site is live at https://username.github.io
- [ ] All pages, links, and images work on live site
- [ ] Console shows no errors

---

## Troubleshooting

### Problem: Site shows 404 error (page not found)

**Solution:**
- Check that your repository is named `username.github.io` exactly
- Wait 5 minutes (GitHub can be slow to deploy)
- Check GitHub Pages settings are enabled
- Make sure `index.html` is in the root folder, not in a subfolder

### Problem: Git asks for password and I don't know it

**Solution:**
- In GitHub Desktop, sign in again: **File > Options > Accounts** (sign out, sign back in with the browser flow)

### Problem: My CSS doesn't load (page looks unstyled)

**Solution:**
- Check file path in HTML: should be `<link rel="stylesheet" href="style.css">` (relative path)
- NOT: `<link rel="stylesheet" href="C:/Users/...">` (absolute path)
- Make sure style.css exists in the same folder as index.html

### Problem: Images don't show on live site but show locally

**Solution:**
- Same issue as CSS: check image paths
- Should be: `<img src="images/photo.jpg">` (relative)
- NOT: `<img src="C:/Users/...">` (absolute)
- Make sure image files are actually in the repository folder

### Problem: Push is rejected with "remote repository not found"

**Solution:**
- In GitHub Desktop: **Repository > Repository settings > Remote** — it should show your repository URL. If not, set it there (or use **Publish repository**).

### Problem: I made a mistake in a commit message

**Solution:**
- Don't sweat it — commit messages can't hurt the site. Just write a better one next commit. (Rewriting old commits is possible but not worth the risk at this stage.)

---

## Extra Credit

**Make your deployed site even better:**

1. **Add a custom domain**
   - Point yourname.com to username.github.io
   - Requires DNS setup (ask teacher for details)

2. **Add a README**
   - Create `README.md` in your repository
   - Describe your project
   - Show up on your GitHub profile

3. **Add more pages**
   - Create about.html, contact.html, etc.
   - Link them in your navigation
   - All automatically deploy

4. **Update frequently**
   - Make changes, commit, push
   - Your live site updates automatically

5. **Test edge cases**
   - Very slow internet (DevTools → Network throttling)
   - Very old browsers
   - Different screen sizes

---

## Summary

You've just:

1. ✓ Created a GitHub repository
2. ✓ Cloned it to your computer
3. ✓ Added your project files
4. ✓ Committed changes with git
5. ✓ Pushed to GitHub
6. ✓ Enabled GitHub Pages
7. ✓ Deployed a live website to the internet

**Your website is now live and accessible to anyone in the world!**

This is exactly how professional web developers work. Welcome to real web development!
