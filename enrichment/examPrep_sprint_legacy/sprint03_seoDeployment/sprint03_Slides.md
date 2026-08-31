---
marp: true
theme: default
class: invert
paginate: true
---

# Sprint 03: SEO, Accessibility & Deployment
## Exam Prep Sprint (2 hours)
### Medina County Career Center - Web Design CTE

---

<!-- _header: "Sprint 03a — What is SEO?" -->

## Search Engine Optimization (SEO)

**SEO** = making your website visible in search engine results

### Why SEO Matters:
- **Organic traffic** = free visitors from Google, Bing, Yahoo
- 93% of web experience starts with a search engine
- Good SEO = more people find your site
- Works alongside paid ads but costs nothing

### The SEO Process:
1. **Crawl**: Search engine robot reads your HTML
2. **Index**: Robot stores your page in its database
3. **Rank**: Robot ranks your page based on quality signals

**Goal**: Get on page 1 of search results → more clicks → more business

---

<!-- _header: "Sprint 03b — Title Tags & Meta Descriptions" -->

## Title Tags & Meta Descriptions

### Title Tag (`<title>`)
```html
<head>
  <title>Fresh Sourdough Bread | Joe's Bakery</title>
</head>
```
- **Character limit**: 50-60 characters
- Appears as the **blue link** in search results
- Appears in browser tab
- Include keyword + brand name

### Meta Description (`<meta name="description">`)
```html
<meta name="description" content="Fresh baked sourdough bread delivered daily.
  Handmade with organic flour since 2015. Free shipping on orders over $50.">
```
- **Character limit**: 150-160 characters
- Appears below title in search results
- Often not ranked by Google, but affects **click-through rate**
- Call-to-action works here ("Free shipping", "Learn more")

**Pro Tip**: Make every page unique—no duplicate titles/descriptions!

---

<!-- _header: "Sprint 03c — Heading Hierarchy & Alt Text" -->

## Heading Hierarchy & Alt Text

### Heading Rules:
```html
<h1>Home Bakery</h1>  <!-- ONE h1 per page -->
<h2>Our Breads</h2>   <!-- Skip levels → accessibility error -->
<h3>Sourdough</h3>

<!-- WRONG: h1 → h3 skips h2! -->
```

- **One `<h1>` per page** = page topic
- **Don't skip levels** (h1 → h2 → h3, not h1 → h3)
- Screen readers rely on heading structure
- Headings = outline of your page

### Alt Text (`alt` attribute)
```html
<img src="sourdough.jpg" alt="Fresh loaf of sourdough bread on wooden board">
```

- **Descriptive**: Say what you see
- **Not**: "image.jpg", "photo", "click here"
- **Include relevant keywords** if natural
- **Empty alt for decorative images**: `alt=""`
- Screen readers read alt text aloud

---

<!-- _header: "Sprint 03d — What is Accessibility?" -->

## Accessibility Basics

**Accessibility** = designing for **all users**, including those with disabilities

### Who Benefits?
- Blind/low vision users (screen readers)
- Deaf/hard of hearing users (captions, transcripts)
- Motor impairment users (keyboard navigation)
- Cognitive disabilities (simple, clear language)

### Legal Requirements:
- **ADA** (Americans with Disabilities Act) = US law
- **WCAG 2.1** (Web Content Accessibility Guidelines) = international standard
- **Level AA** = minimum standard (our goal)

### Key Stats:
- 15-20% of web users have some disability
- 1 in 4 US adults = disability
- **Accessible = better UX for everyone**

---

<!-- _header: "Sprint 03e — Screen Readers, ARIA & Color Contrast" -->

## Accessibility Features

### Screen Readers
```html
<!-- Screen reader reads: "Home link" -->
<a href="/">Home</a>

<!-- Screen reader reads: "Search button" -->
<button>Search</button>
```
- Used by blind/low vision users
- Read HTML structure, text, alt text
- Test with NVDA (Windows) or VoiceOver (Mac)

### ARIA Labels
```html
<!-- Icon button needs label -->
<button aria-label="Close menu">×</button>

<input aria-label="Search bakery">
```

### Color Contrast
```
White text on white background = FAIL (1:1 ratio)
Dark text on white background = PASS (21:1 ratio)
```
- **Minimum 4.5:1 ratio** for normal text
- **Helps color-blind and low-vision users**
- Use online contrast checker: WebAIM

---

<!-- _header: "Sprint 03f — Web Protocols" -->

## Web Protocols (TCP/IP, HTTP, HTTPS, DNS, FTP)

| Protocol | Purpose | Secure? | Port |
|----------|---------|---------|------|
| **TCP/IP** | Data transmission foundation | Base | - |
| **DNS** | Domain name → IP address | ❌ | 53 |
| **HTTP** | Website communication | ❌ | 80 |
| **HTTPS** | Website + SSL encryption | ✅ | 443 |
| **FTP** | File transfer | ❌ | 21 |
| **SFTP** | File transfer + encryption | ✅ | 22 |

### Simple Analogy:
- **TCP/IP** = postal system
- **HTTP** = postcard (everyone can read)
- **HTTPS** = sealed envelope (private)
- **DNS** = address book

---

<!-- _header: "Sprint 03g — SSL & HTTPS Lock" -->

## SSL Certificates & HTTPS

### What's the Lock Icon? 🔒
```
https://google.com (lock icon visible)
```
- **HTTPS** = HTTP + SSL encryption
- **SSL Certificate** = proof of identity + encryption key
- Protects passwords, credit cards, personal data

### Why HTTPS Matters:
✅ Encrypts data in transit
✅ Prevents man-in-the-middle attacks
✅ Required by browsers (Chrome shows "Not Secure" for HTTP)
✅ Required for forms, login pages, payments
✅ Free from Let's Encrypt

### Where to Get SSL:
- **GitHub Pages**: FREE HTTPS (automatic)
- **Web hosting**: Often FREE included
- **Never trust HTTP for passwords/payments**

---

<!-- _header: "Sprint 03h — Static vs Dynamic" -->

## Static vs Dynamic Websites

### Static Sites
```
Browser → Server → HTML/CSS/JS files → Displays page
```
- **Same HTML for every user**
- Examples: GitHub Pages, portfolio sites, documentation
- **Fast, secure, cheap to host**
- No database needed
- Changes require redeploying code

### Dynamic Sites
```
Browser → Server → Database → Generates custom HTML → Displays page
```
- **Different HTML based on user/data**
- Examples: Gmail, Facebook, Twitter, Shopify
- More powerful but slower, more complex
- Requires database + backend server
- Changes happen in database (no redeploy)

**This course**: We're deploying **static sites** to GitHub Pages!

---

<!-- _header: "Sprint 03i — Deploying to GitHub Pages" -->

## Deploying to GitHub Pages

### Step 1: Create Git Repository
```bash
git init                    # Initialize git
git add .                   # Add all files
git commit -m "Initial commit"  # Save snapshot
```

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to Settings → Pages
2. Branch: `main`
3. Folder: `/ (root)`
4. Save
5. **Site available at**: `https://username.github.io/repo-name/`

### Step 4: Deploy Updates
```bash
# After making changes:
git add .
git commit -m "Fix SEO and accessibility"
git push
# GitHub Pages auto-updates in 1-2 minutes!
```

---

<!-- _header: "Sprint 03j — Key Takeaways" -->

## Key Takeaways

### SEO + Accessibility = Same Goal: **Clear Structure**

✅ **Use semantic HTML** (`<button>`, `<nav>`, `<main>`)
✅ **Write descriptive titles & alt text**
✅ **Use proper heading hierarchy**
✅ **Ensure color contrast**
✅ **Make keyboard navigation work**
✅ **Deploy with HTTPS**

### Remember:
- **SEO helps search engines understand your site**
- **Accessibility helps humans use your site**
- **Both use the same best practices!**
- **GitHub Pages gives you free HTTPS deployment**

### Next Steps:
1. Fix SEO/accessibility on your practice site
2. Deploy to GitHub Pages
3. Share your live URL in class

**Questions?** Ask your teacher or classmates!

---
