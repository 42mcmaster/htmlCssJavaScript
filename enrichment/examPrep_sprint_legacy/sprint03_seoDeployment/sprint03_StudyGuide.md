# Sprint 03: SEO, Accessibility & Deployment — Study Guide

## Vocabulary (25 Terms)

### SEO Terms
1. **SEO** (Search Engine Optimization) — Making a website visible in search engine results through best practices
2. **Search Engine** — Tool that finds and ranks websites (Google, Bing, Yahoo)
3. **Crawler** (Spider) — Automated robot that reads HTML and follows links to index pages
4. **Index** — Database where search engines store pages they've crawled
5. **Rank** — Position of a page in search results (1st, 10th, 100th)
6. **Title Tag** — HTML element that appears as blue link in search results and browser tab
7. **Meta Description** — HTML element (150-160 chars) that appears below title in search results
8. **Heading Hierarchy** — Proper order of headings (h1 → h2 → h3) used for structure and accessibility
9. **Alt Text** — Description of an image for screen readers and when image fails to load
10. **Keyword** — Word or phrase users search for (e.g., "fresh sourdough bread")
11. **Organic Traffic** — Free visitors from search engines (unpaid)
12. **SERP** — Search Engine Results Page (what you see after searching)

### Accessibility Terms
13. **ADA** (Americans with Disabilities Act) — US federal law requiring equal access to digital content
14. **WCAG** (Web Content Accessibility Guidelines) — International standard for accessible web design (Level AA = minimum)
15. **Accessibility** — Designing for users with disabilities (visual, hearing, motor, cognitive)
16. **Screen Reader** — Software that reads web content aloud for blind/low vision users (NVDA, VoiceOver)
17. **Color Contrast** — Difference in brightness/color between text and background (4.5:1 minimum for normal text)
18. **ARIA** (Accessible Rich Internet Applications) — Attributes that provide extra information to screen readers
19. **Focus Indicator** — Visual outline showing which element is selected (important for keyboard users)
20. **Semantic HTML** — Using correct HTML elements (`<button>`, `<nav>`, `<main>`) instead of generic `<div>`

### Protocols & Deployment Terms
21. **HTTP** (HyperText Transfer Protocol) — Protocol for transferring website data (unencrypted)
22. **HTTPS** (HTTP Secure) — HTTP + SSL encryption (secure, required for sensitive data)
23. **FTP** (File Transfer Protocol) — Protocol for uploading/downloading files to servers
24. **TCP/IP** (Transmission Control Protocol/Internet Protocol) — Foundation protocols for all internet communication
25. **DNS** (Domain Name System) — Converts domain names to IP addresses (like an address book for the internet)
26. **SSL Certificate** — Digital certificate that enables HTTPS encryption (proves website identity)
27. **Static Site** — Website with fixed HTML (no database, fast, secure) - GitHub Pages example
28. **Dynamic Site** — Website that changes based on user data (uses database, requires backend server)
29. **Git** — Version control system for tracking code changes (required for GitHub)
30. **GitHub Pages** — Free service to host static websites from a GitHub repository (automatic HTTPS)

---

## Cheat Sheets

### SEO Best Practices
| Element | Best Practice | Max Length | Why |
|---------|---------------|-----------|-----|
| Title Tag | Include keyword + brand, descriptive | 50-60 chars | Appears in search results & browser tab |
| Meta Description | Call-to-action, descriptive | 150-160 chars | Affects click-through rate from search results |
| H1 Heading | One per page, main topic | N/A | Search engines use for page topic understanding |
| Headings (h2-h6) | Logical hierarchy, no skipped levels | N/A | Helps crawlers understand page structure |
| Alt Text | Describe image, natural keywords | N/A | Screen readers + SEO; shows if image breaks |
| URL | Short, descriptive, hyphens for spaces | N/A | More memorable, better for SEO |
| Internal Links | Descriptive anchor text (not "click here") | N/A | Helps crawlers find pages, improves UX |

### Accessibility Best Practices
| Component | Best Practice | Standard | Impact |
|-----------|---------------|----------|--------|
| Color Contrast | 4.5:1 minimum (text on background) | WCAG AA | Low-vision users can read text |
| Headings | One h1, logical h2-h6 order, no skipping | WCAG A | Screen reader users understand structure |
| Alt Text | Descriptive, not "image" or "photo" | WCAG A | Blind users understand images |
| Form Labels | Explicitly linked with `<label for="id">` | WCAG A | Screen readers associate labels with inputs |
| Buttons | Real `<button>` element (not `<div>`) | WCAG A | Keyboard users can activate with Enter/Space |
| Links | Descriptive text (not "click here") | WCAG A | All users know where link goes |
| ARIA Labels | `aria-label="description"` for icons | WCAG AAA | Screen readers understand icon buttons |
| Focus Indicator | Visible outline on focused elements | WCAG AA | Keyboard users know where they are |
| Semantic HTML | Use `<nav>`, `<main>`, `<button>` correctly | WCAG A | Screen readers understand page regions |

### Web Protocols Table
| Protocol | Layer | Purpose | Secure | Port |
|----------|-------|---------|--------|------|
| TCP/IP | Transport | All internet data transmission foundation | Base | - |
| DNS | Application | Domain name to IP address lookup | ❌ | 53 |
| HTTP | Application | Website transfer (unencrypted) | ❌ | 80 |
| HTTPS | Application | Website transfer + SSL encryption | ✅ | 443 |
| FTP | Application | File transfer (unencrypted) | ❌ | 21 |
| SFTP | Application | File transfer + encryption | ✅ | 22 |

### Git Commands (Deployment Workflow)
```bash
# Initial setup:
git init                                    # Create new git repo
git remote add origin https://github.com/username/repo.git  # Connect to GitHub

# Daily workflow:
git add .                                   # Stage all changes
git commit -m "Fix SEO and accessibility"  # Save snapshot with message
git push                                    # Upload to GitHub
git pull                                    # Download changes from GitHub

# Checking status:
git status                                  # See what changed
git log --oneline                          # See commit history
```

### GitHub Pages Deployment Checklist
- [ ] Code pushed to GitHub repository
- [ ] Repository is public (or you're on GitHub Pro)
- [ ] Go to Settings → Pages
- [ ] Select branch: `main`
- [ ] Select folder: `/ (root)`
- [ ] Click Save
- [ ] Wait 1-2 minutes for deployment
- [ ] Site live at: `https://username.github.io/repo-name/`
- [ ] Test HTTPS works (lock icon visible)

---

## SEO + Accessibility Overlap

**The secret**: Good SEO and good accessibility use the same techniques!

| Technique | Helps SEO | Helps Accessibility | Why It Matters |
|-----------|-----------|-------------------|----------------|
| Descriptive titles | Ranked in search | Screen readers know page topic | Users know what page is |
| Heading hierarchy | Crawlers understand structure | Screen readers navigate by headings | Clear page organization |
| Alt text | Images indexed, keyword signal | Screen readers describe images | Images are understood |
| Semantic HTML | Crawlers parse correctly | Screen readers know button/nav/main | HTML means what it says |
| Descriptive links | Keywords indexed | Screen readers know link purpose | Users trust where links go |
| Color contrast | Page readability | Low-vision users read text | Everyone sees the content |
| Clear language | Keyword relevance | Cognitive accessibility | Everyone understands |

---

## ODE Competencies

**This sprint addresses these Ohio Department of Education competencies:**

- **6.5.14** — Create a website that demonstrates understanding of SEO principles and best practices
- **6.1.2** — Demonstrate proper use of web markup for semantic structure (heading hierarchy, alt text)
- **6.5.1** — Apply web protocols and understand client-server communication
- **6.5.11** — Deploy a website using version control and hosting services
- **6.5.12** — Implement accessibility features compliant with WCAG standards

---

## 5 Common Mistakes

### 1. **Multiple H1 Tags**
❌ Wrong:
```html
<h1>Bakery</h1>
<h1>Fresh Bread</h1>
<h1>Today's Special</h1>
```
✅ Correct: One `<h1>` per page, rest are h2/h3

### 2. **Skipped Heading Levels**
❌ Wrong:
```html
<h1>Bakery</h1>
<h3>Sourdough</h3>  <!-- Skipped h2! -->
```
✅ Correct: h1 → h2 → h3 in order

### 3. **Vague Alt Text**
❌ Wrong: `alt="image"` or `alt="photo"` or `alt=""`
✅ Correct: `alt="Fresh sourdough loaf on wooden cutting board"`

### 4. **Missing Meta Description**
❌ Wrong: Website has title but no meta description
✅ Correct: Every page has unique 150-160 char meta description with CTA

### 5. **Using Div Instead of Button**
❌ Wrong:
```html
<div onclick="submitForm()">Submit</div>
```
✅ Correct:
```html
<button onclick="submitForm()">Submit</button>
```
Divs aren't keyboard accessible; buttons are

---

## 15 Practice Questions WITH Answers

### Question 1
**What does HTTPS protect that HTTP does not?**
- A) Server speed
- B) Data encryption
- C) Page loading time
- D) SEO ranking

**Answer: B** — HTTPS uses SSL encryption to protect data in transit. The "S" stands for Secure.

---

### Question 2
**Which heading hierarchy is correct?**
- A) h1, h2, h3, h4
- B) h1, h3, h2, h4
- C) h2, h3, h4, h1
- D) h1, h1, h2, h3

**Answer: A** — Headings must be in logical order without skipping levels.

---

### Question 3
**What is the minimum color contrast ratio for body text per WCAG AA?**
- A) 3:1
- B) 4.5:1
- C) 7:1
- D) 10:1

**Answer: B** — 4.5:1 is the minimum for normal text; 7:1 is for large text.

---

### Question 4
**Which is the best title tag?**
- A) "My Page"
- B) "Home"
- C) "Fresh Sourdough Bread | Joe's Bakery"
- D) "Welcome"

**Answer: C** — Best titles are descriptive, include keyword, and brand name (50-60 chars).

---

### Question 5
**What does alt text do?**
- A) Replace CSS styling
- B) Improve HTTPS encryption
- C) Help screen readers and show if image fails to load
- D) Increase page loading speed

**Answer: C** — Alt text is read aloud by screen readers and displays if image can't load.

---

### Question 6
**What does a crawler do?**
- A) Finds bugs in code
- B) Reads HTML and indexes pages for search engines
- C) Tracks user behavior
- D) Encrypts data

**Answer: B** — Crawlers are search engine robots that read HTML and add pages to the index.

---

### Question 7
**Which HTML element is most accessible for a clickable button?**
- A) `<div onclick="...">`
- B) `<a href="javascript:...">`
- C) `<button>`
- D) `<span onclick="...">`

**Answer: C** — `<button>` is semantic and keyboard accessible (works with Enter/Space keys).

---

### Question 8
**What is a meta description used for?**
- A) Improving page speed
- B) Describing page content in search results (150-160 chars)
- C) Encrypting passwords
- D) Storing user data

**Answer: B** — Meta descriptions appear below the title in search results and affect click-through rate.

---

### Question 9
**Which DNS statement is true?**
- A) DNS encrypts website data
- B) DNS converts domain names to IP addresses
- C) DNS improves page loading speed
- D) DNS is only needed for HTTPS

**Answer: B** — DNS (Domain Name System) works like an address book, converting "google.com" to an IP address.

---

### Question 10
**What is a static website?**
- A) A website that doesn't allow user interaction
- B) Fixed HTML files (no database) that load the same for every user
- C) A website that never updates
- D) A website without HTTPS

**Answer: B** — Static websites serve the same HTML files to all users and are fast and secure (GitHub Pages example).

---

### Question 11
**When should you use aria-label?**
- A) On all elements
- B) When visual labels aren't enough (like icon buttons)
- C) Only on images
- D) Never—it's deprecated

**Answer: B** — ARIA labels provide descriptions for screen readers when visual context isn't clear (e.g., `<button aria-label="Close menu">×</button>`).

---

### Question 12
**What is the first step to deploy to GitHub Pages?**
- A) Enable Pages in Settings
- B) Create a git repository and push code to GitHub
- C) Buy an SSL certificate
- D) Configure DNS settings

**Answer: B** — You must have a repository pushed to GitHub before you can enable Pages.

---

### Question 13
**Which of these is NOT a protocol?**
- A) HTTP
- B) FTP
- C) HTML
- D) HTTPS

**Answer: C** — HTML is a markup language, not a protocol. HTTP, FTP, HTTPS are protocols.

---

### Question 14
**What does "organic traffic" mean?**
- A) Traffic from social media
- B) Traffic from paid ads
- C) Free traffic from search engine results
- D) Traffic from email newsletters

**Answer: C** — Organic traffic is unpaid traffic from search engines (SEO success = more organic traffic).

---

### Question 15
**Which statement about accessibility is false?**
- A) WCAG is an international standard
- B) Accessibility only helps people with disabilities
- C) Semantic HTML improves accessibility
- D) ADA is US federal law

**Answer: B** — Accessibility helps everyone (captions help in noisy environments, clear language helps ESL learners, etc.).

---

## Study Tips for the Exam

1. **Flashcards**: Make cards for vocabulary terms (especially protocols)
2. **Practice code**: Write a page with correct heading hierarchy, alt text, and semantic HTML
3. **Test contrast**: Use WebAIM Contrast Checker on your own pages
4. **Deploy something**: Push a site to GitHub Pages to practice the workflow
5. **Read labels**: Look at real websites and ask: "Does this have aria-label?" "Is this color contrast enough?"

---

## Key Formulas to Remember

```
SEO Success = Descriptive Titles + Proper Headings + Alt Text + HTTPS

Accessibility Success = Semantic HTML + Color Contrast + Keyboard Navigation + Screen Reader Support

Deployment = git init → add → commit → push → GitHub Pages enabled → Live HTTPS site
```

---

**Good luck on the exam!** Remember: SEO and accessibility are the same thing—building clear, well-structured websites.
