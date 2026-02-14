---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 13: Testing, Protocols & Publishing

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 13a — Web Protocols" -->

# Web Protocols & How The Web Works

## What Happens When You Visit a Website?

1. **You type a URL** → Browser sends a request
2. **DNS looks up the IP address** → Finds the server
3. **HTTP/HTTPS transfers the data** → Server sends files
4. **Browser renders the HTML/CSS/JS** → You see the page

---

<!-- _header: "13a — Web Protocols (continued)" -->

# Key Protocols Explained

| Protocol | Purpose | Example |
|----------|---------|---------|
| **HTTP** | Transfer web data (unsecure) | Plain text, vulnerable |
| **HTTPS** | Transfer web data (secure/encrypted) | Modern standard, uses SSL/TLS |
| **FTP** | Upload/download files | Old method, rarely used now |
| **TCP/IP** | Send data in packets over networks | Foundation of internet |
| **DNS** | Translate domain names to IP addresses | google.com → 142.251.32.14 |

**Best practice:** Always use HTTPS for websites (lock icon in browser address bar).

---

<!-- _header: "13a — Websites: Static vs Dynamic" -->

# Static Sites vs. Dynamic Sites

## Static Sites
- Same content for every visitor
- HTML/CSS/JS served as-is
- Example: Portfolio, blog, landing pages
- Faster, cheaper, simple to deploy

## Dynamic Sites
- Content changes based on user or database
- Uses server-side languages (PHP, Node.js, Python)
- Example: Facebook, Gmail, Netflix
- More complex, requires server resources

**GitHub Pages** → Perfect for static sites!

---

<!-- _header: "Sub-Lesson 13b — Testing & Validation" -->

# Browser Rendering & Cross-Browser Testing

## How Browsers Render Pages
1. Parse HTML (builds DOM tree)
2. Parse CSS (applies styles)
3. Execute JavaScript (adds interactivity)
4. Display the final page

## Why Test Multiple Browsers?
- Chrome, Firefox, Safari, Edge render slightly differently
- Some old browsers don't support new CSS/JS features
- Mobile browsers behave differently than desktop

**DevTools** in every browser help you debug!

---

<!-- _header: "13b — Validation & Testing Tools" -->

# W3C Validators & Testing Checklist

## W3C Validators (Official Standards)
- **HTML Validator:** https://validator.w3.org/
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- Checks code against official web standards

## DevTools (Built into Your Browser)
- Inspect elements, debug CSS
- Test responsiveness (mobile view)
- Check console for JavaScript errors

## Testing Checklist
✓ No HTML/CSS errors (validators)
✓ Works in Chrome, Firefox, Safari
✓ Responsive on desktop and mobile
✓ Links work, images load
✓ No console errors

---

<!-- _header: "Sub-Lesson 13c — Publishing to the Web" -->

# Git Basics (For Deployment)

## What is Git?
- **Version control system** — tracks changes to files
- Save snapshots of your code
- Easy to roll back if something breaks
- Essential for professional developers

## Four Key Git Commands
```
git init          # Start tracking a folder
git add .         # Stage files to save
git commit -m "message"  # Create a snapshot
git push          # Upload to GitHub
```

That's it! (For beginners)

---

<!-- _header: "13c — GitHub Pages Deployment" -->

# Deploying to GitHub Pages (Step-by-Step)

1. **Create a GitHub repository** (username.github.io)
2. **Clone it locally** (or git init)
3. **Add your project files** to the folder
4. **git add, git commit, git push** → Upload to GitHub
5. **Enable GitHub Pages** in repo settings
6. **Wait ~2 minutes** → Your site is LIVE!
7. **Visit** https://username.github.io

## The Result
Your website is now live on the internet!
No hosting fees. No server configuration.
Just push code and it's live.

---

<!-- _header: "13c — Domain Names & CMS Platforms" -->

# Beyond GitHub Pages

## Custom Domains
- Point yourname.com → github.io URL
- Requires DNS configuration (advanced)
- We'll cover basics, not setup today

## Content Management Systems (CMS)
- **WordPress, Wix, Squarespace** — drag-and-drop builders
- Great for non-coders
- Less control than custom HTML/CSS
- Know they exist, but we're learning **real web dev**

---

# Summary

## The Full Workflow
1. **Code** your HTML/CSS/JS
2. **Validate** with W3C validators
3. **Test** in multiple browsers
4. **Deploy** via git → GitHub Pages
5. **Share** your live URL

## What You've Learned
- How the web actually works (protocols, DNS, rendering)
- How to validate and test code
- How to deploy live projects
- Git basics for version control

**You're now ready to be a web developer!**
