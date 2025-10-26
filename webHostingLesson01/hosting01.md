# Lesson H1: Publishing & Hosting Your Website

## Why are we learning this?

You've built an amazing website - now it's time to share it with the world! This lesson covers how to take your HTML, CSS, and JavaScript files and make them accessible on the internet so anyone can visit your site.

---

## What is Web Hosting?

**Web Hosting** is a service that stores your website files on a server connected to the internet 24/7, making your site accessible to visitors worldwide.

### How Hosting Works

1. **You upload files** to a web server
2. **Server stores your files** (HTML, CSS, images, etc.)
3. **Server has an IP address** (like 192.168.1.1)
4. **Domain name points to that IP** (like yoursite.com → 192.168.1.1)
5. **Visitors type your domain** and see your website

---

## Free Hosting Options (Perfect for Learning!)

### GitHub Pages (⭐ Recommended for Students)

**Best for:** Portfolio sites, project demos, static websites

**Pros:**
- Completely free
- Easy to use
- Fast and reliable
- HTTPS included
- Version control with Git

**Cons:**
- Static sites only (no server-side code like PHP)
- Public repositories (unless you have Pro account)

#### How to Use GitHub Pages:

**Step 1: Create GitHub Account**
- Go to https://github.com
- Sign up for free account

**Step 2: Create a Repository**
- Click "New Repository"
- Name it: `your-username.github.io`
- Make it public
- Check "Add README"

**Step 3: Upload Your Files**
- Click "Add file" → "Upload files"
- Drag your HTML, CSS, JS, and image files
- Click "Commit changes"

**Step 4: Enable GitHub Pages**
- Go to repository Settings
- Scroll to "Pages" section
- Source: Select "main" branch
- Click Save

**Step 5: Visit Your Site!**
- Your site will be at: `https://your-username.github.io`
- Wait 1-2 minutes for first deployment

**Example:**
- Repository: `johndoe.github.io`
- Website URL: `https://johndoe.github.io`

---

### Netlify

**Best for:** Quick deployments, modern web apps

**Pros:**
- Drag-and-drop deployment
- Automatic HTTPS
- Forms support
- Very fast CDN
- Free custom domains

**Cons:**
- 100GB bandwidth limit (plenty for learning)

#### How to Use Netlify:

**Method 1: Drag and Drop**
1. Go to https://netlify.com
2. Sign up for free account
3. Click "Add new site" → "Deploy manually"
4. Drag your entire project folder
5. Site goes live instantly at random URL
6. Can change to custom name: `your-site.netlify.app`

**Method 2: Connect GitHub (Advanced)**
1. Push your code to GitHub
2. Connect Netlify to your GitHub account
3. Choose repository
4. Auto-deploys when you push changes

---

### Vercel

**Best for:** React apps, Next.js, modern frameworks

**Similar to Netlify:**
- Free hosting
- Drag-and-drop or GitHub integration
- Fast CDN
- Automatic HTTPS

**Steps:**
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Deploy automatically

---

## Domain Names

### What is a Domain Name?

Your website's address on the internet.

**Examples:**
- `google.com`
- `amazon.com`
- `yourportfolio.com`

### Free vs. Paid Domains

**Free Subdomain (Learning):**
- `yourname.github.io`
- `yoursite.netlify.app`
- `yourproject.vercel.app`

**Paid Custom Domain ($10-15/year):**
- `yourname.com`
- `mybusiness.net`
- `myportfolio.design`

### Where to Buy Domains

**Popular Registrars:**
- Namecheap (https://namecheap.com)
- Google Domains (https://domains.google)
- GoDaddy (https://godaddy.com)
- Cloudflare (https://cloudflare.com)

**Average Cost:** $10-15/year for .com domain

---

## Connecting a Custom Domain

### On GitHub Pages:

1. Buy domain from registrar
2. In GitHub repository settings → Pages
3. Add custom domain: `yourdomain.com`
4. In your domain registrar's DNS settings:
   - Add A records pointing to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or CNAME record: `your-username.github.io`
5. Wait 24-48 hours for DNS propagation

### On Netlify/Vercel:

1. Click "Add custom domain" in dashboard
2. Enter your domain name
3. Follow their DNS setup instructions
4. Usually just change nameservers at your registrar
5. Takes 24-48 hours to activate

---

## File Structure for Deployment

### Proper Organization

```
my-website/
├── index.html          (homepage - must be named index.html)
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   └── hero.jpg
└── README.md           (optional, describes your project)
```

### Important Rules:

**Homepage MUST be named `index.html`**
- This is the default file servers look for
- `home.html` won't work as homepage

**Use relative paths:**
```html
<!-- Good -->
<link rel="stylesheet" href="css/style.css">
<img src="images/logo.png" alt="Logo">

<!-- Bad - won't work when deployed -->
<link rel="stylesheet" href="C:/Users/YourName/Desktop/style.css">
```

**Use lowercase, no spaces:**
```
✅ about-us.html
✅ contact-form.html
❌ About Us.html
❌ contact form.html
```

---

## Publishing Workflow

### Simple Deployment Process:

**Step 1: Prepare Files**
- [ ] Test locally (open index.html in browser)
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test on different screen sizes
- [ ] Optimize images (compress large files)
- [ ] Remove test/debugging code

**Step 2: Choose Hosting**
- GitHub Pages (for portfolio)
- Netlify (for quick deploy)
- Vercel (for React apps)

**Step 3: Upload Files**
- GitHub: Push to repository
- Netlify/Vercel: Drag folder

**Step 4: Test Live Site**
- Click all links
- Test forms
- Check on mobile
- Try different browsers

**Step 5: Share Your URL!**
- Add to resume
- Share on social media
- Submit for class projects

---

## FTP/SFTP (Traditional Hosting)

If using traditional paid hosting (like Bluehost, HostGator):

### What is FTP?

**FTP (File Transfer Protocol)** - A way to upload files to a server.

### FTP Clients:

**FileZilla (Free, recommended)**
- Download: https://filezilla-project.org
- Available for Windows, Mac, Linux

**How to Use FTP:**

1. Get FTP credentials from hosting provider:
   - Host: `ftp.yoursite.com`
   - Username: `your_username`
   - Password: `your_password`
   - Port: Usually 21

2. Open FileZilla:
   - Enter host, username, password
   - Click "Quickconnect"

3. Upload Files:
   - Left side: Your computer
   - Right side: Server
   - Drag files from left to right
   - Upload to `public_html` or `www` folder

4. Visit Your Site:
   - Usually `http://yourdomain.com`

---

## HTTPS and SSL Certificates

### What is HTTPS?

The secure version of HTTP (lock icon in browser).

**HTTP:** `http://yoursite.com` (Not secure)  
**HTTPS:** `https://yoursite.com` (Secure) ✅

### Why HTTPS Matters:

- Security (encrypts data)
- Trust (visitors see lock icon)
- SEO (Google prefers HTTPS sites)
- Required for many features (geolocation, camera access)

### Getting HTTPS:

**Good News:** Free hosting services provide HTTPS automatically!
- GitHub Pages: ✅ Free HTTPS
- Netlify: ✅ Free HTTPS
- Vercel: ✅ Free HTTPS

**For Traditional Hosting:**
- Let's Encrypt (https://letsencrypt.org) - Free SSL certificates
- Most hosts now include free SSL

---

## Common Deployment Issues

### Issue 1: Homepage Not Loading

**Problem:** Site shows 404 or directory listing

**Solution:** 
- Ensure main file is named `index.html` (lowercase)
- Must be in root directory

### Issue 2: Images Not Loading

**Problem:** Images broken on live site but work locally

**Solution:**
```html
<!-- Bad (absolute path) -->
<img src="C:/Users/Me/Desktop/images/logo.png">

<!-- Bad (wrong case) -->
<img src="images/Logo.PNG">  <!-- If file is logo.png -->

<!-- Good (relative path, correct case) -->
<img src="images/logo.png">
```

### Issue 3: CSS Not Applying

**Problem:** Page has no styling

**Solution:**
```html
<!-- Check path is correct -->
<link rel="stylesheet" href="css/style.css">

<!-- Not -->
<link rel="stylesheet" href="style.css">  <!-- if CSS is in folder -->
```

### Issue 4: Links Don't Work

**Problem:** Clicking links gives 404

**Solution:**
```html
<!-- Use relative paths -->
<a href="about.html">About</a>
<a href="contact.html">Contact</a>

<!-- Not absolute paths -->
<a href="C:/Users/Me/Website/about.html">About</a>
```

---

## Pre-Deployment Checklist

Before uploading your site:

**Files & Folders:**
- [ ] `index.html` is main file
- [ ] All files use lowercase names
- [ ] No spaces in filenames
- [ ] All images optimized (compressed)
- [ ] All files present (no missing images/css)

**Links & Paths:**
- [ ] All links use relative paths
- [ ] Internal links work
- [ ] Images load with relative paths
- [ ] CSS and JS linked correctly

**Content:**
- [ ] All text checked for typos
- [ ] Contact info is correct
- [ ] All images have alt text
- [ ] Meta tags complete (title, description)
- [ ] Copyright year is current

**Testing:**
- [ ] Tested locally in browser
- [ ] Checked on mobile screen size
- [ ] All forms work (if applicable)
- [ ] No console errors (F12 → Console)

---

## Step-by-Step: Publishing to GitHub Pages

### Complete Tutorial:

**1. Create GitHub Account**
```
Go to: https://github.com/signup
Create free account
```

**2. Create Repository**
```
Click: New Repository (green button)
Name: yourusername.github.io
     (replace yourusername with YOUR GitHub username)
Public: Yes
Initialize with README: Yes
Click: Create Repository
```

**3. Upload Your Files**
```
Click: Add file → Upload files
Drag: All your website files
     - index.html
     - about.html
     - css folder
     - images folder
     - etc.
Commit message: "Initial website upload"
Click: Commit changes
```

**4. Enable GitHub Pages**
```
Click: Settings (top right)
Scroll: Find "Pages" in left menu
Source: Deploy from branch
Branch: main
Folder: / (root)
Click: Save
```

**5. Wait & Visit**
```
Wait: 2-3 minutes
Visit: https://yourusername.github.io
Your site is live! 🎉
```

**6. Update Your Site**
```
To update:
1. Edit files on GitHub
2. Or upload new files (replaces old ones)
3. Changes appear in 1-2 minutes
```

---

## Alternative: Publishing with Netlify (Drag & Drop)

### Easiest Method:

**1. Sign Up**
```
Go to: https://app.netlify.com/signup
Sign up: Free account
```

**2. Deploy Site**
```
Click: Add new site → Deploy manually
Drag: Your entire website folder
Drop: Into the upload area
Wait: 30 seconds
```

**3. Site is Live!**
```
Netlify gives you: random-name.netlify.app
You can change: Site settings → Change site name
Example: my-portfolio.netlify.app
```

**4. Update Site**
```
Go to: Deploys tab
Click: Drag and drop to update
Upload: New version of your site
```

---

## Summary

In this lesson, you learned:
- ✅ What web hosting is and how it works
- ✅ Free hosting options (GitHub Pages, Netlify, Vercel)
- ✅ How to publish to GitHub Pages
- ✅ Domain names and custom domains
- ✅ File structure for deployment
- ✅ FTP basics for traditional hosting
- ✅ HTTPS and SSL certificates
- ✅ Common deployment issues and solutions
- ✅ Pre-deployment checklist

### Key Takeaway
Publishing your site is easier than ever with free services like GitHub Pages and Netlify. No credit card, no complicated setup - just upload your files and share your URL!

---

## Quick Reference

### GitHub Pages URL Format
```
https://your-username.github.io
```

### Required Homepage Name
```
index.html  (must be exactly this, lowercase)
```

### Relative Paths (Use These!)
```html
<link href="css/style.css">
<img src="images/logo.png">
<a href="about.html">About</a>
```

### Free Hosting Services
- **GitHub Pages:** https://pages.github.com
- **Netlify:** https://netlify.com
- **Vercel:** https://vercel.com

---

## Key Terms
- **Web Hosting**: Service that stores website files on internet-connected server
- **Domain Name**: Website address (like google.com)
- **GitHub Pages**: Free hosting service from GitHub
- **FTP**: File Transfer Protocol for uploading files
- **SSL Certificate**: Enables HTTPS (secure connection)
- **DNS**: Domain Name System, connects domains to servers
- **Deployment**: Process of uploading site to server
- **CDN**: Content Delivery Network, fast file delivery
- **index.html**: Default homepage file name
