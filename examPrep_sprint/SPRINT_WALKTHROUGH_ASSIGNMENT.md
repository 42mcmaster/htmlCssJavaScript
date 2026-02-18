# Exam Prep Sprint: Student Walkthrough Project

**Software Engineering** | **Medina County Career Center**

---

## The Big Idea

You're going to teach the class. Each team will create a **markdown walkthrough** for your assigned topic — a step-by-step guide that the whole class follows along with, live, on Mr. McMaster's computer. Think of it like a coding tutorial where everyone types along with you.

Your walkthrough should be **simple, clear, and introductory**. You're not writing a textbook — you're writing a "follow along and build this with me" guide. Lots of small code chunks, lots of explanation, zero assumptions that people already know this stuff.

---

## Teams & Topics

| Team | Topic | Sprint Folder |
|------|-------|---------------|
| **Team 1** (3 students) | Bootstrap Basics | `sprint01_bootstrap` |
| **Team 2** (3 students) | HTML Forms & Validation | `sprint02_forms` |
| **Team 3** (3 students) | SEO, Accessibility & Deployment | `sprint03_seoDeployment` |
| **Team 4** (4 students) | Troubleshooting, QA & Dev Tools | `sprint04_troubleshootingQA` |

---

## What You're Delivering

Each team produces **one markdown file**: `sprint##_Walkthrough.md`

This file should guide the class through **3–4 short walkthrough examples** that demonstrate your topic. The class will follow along in VS Code in real time.

**Your walkthrough must include:**

- A short intro explaining what the topic is and why it matters (2–3 sentences, max)
- 3–4 mini-walkthroughs, each building a small example from scratch
- Every code chunk should be complete and copy-pasteable — no missing pieces
- Plain-English explanations before and after each code chunk ("Here's what we're doing..." / "What just happened...")
- A "What to look for" note after each example pointing out the key concept
- A quick summary at the end listing the 5–6 most important things to remember for the exam

---

## How to Split the Work (Within Your Team)

This is a team project, but you need to divide it up so everyone contributes. Here's the recommended split:

### For 3-person teams:

| Person | Role | What They Do |
|--------|------|-------------|
| **Person A** | Walkthrough Writer #1 | Writes the first 1–2 mini-walkthroughs. Tests that the code actually works in a browser. |
| **Person B** | Walkthrough Writer #2 | Writes the next 1–2 mini-walkthroughs. Tests that the code actually works in a browser. |
| **Person C** | Editor & Presenter Lead | Writes the intro and summary. Combines A and B's walkthroughs into one clean file. Makes sure the explanations make sense and the formatting is consistent. Leads the live presentation. |

### For the 4-person team (Team 4):

| Person | Role | What They Do |
|--------|------|-------------|
| **Person A** | Walkthrough: Troubleshooting | Writes 1–2 walkthroughs on finding and fixing bugs using DevTools |
| **Person B** | Walkthrough: QA & Testing | Writes 1–2 walkthroughs on validation, cross-browser testing, and test cases |
| **Person C** | Walkthrough: Project Management | Writes 1 walkthrough on scoping a project and creating a brief |
| **Person D** | Editor & Presenter Lead | Writes intro/summary, combines everything, ensures consistency, leads presentation |

**Important:** Everyone should review the final file before presentation day. If the code doesn't work, the walkthrough fails.

---

## What Makes a Good Walkthrough

Look at `html08_Walkthrough.md` or `html11_Walkthrough.md` in our course files for examples of the format. Notice how they:

- Start with a blank file and build up piece by piece
- Give you the exact code to type
- Explain what each piece does in plain English
- Keep each step small (never dump 50 lines of code at once)
- Have "fill in the blank" spots where students complete something themselves

Your walkthroughs should follow this same pattern. Keep it simple. If a classmate who has never seen Bootstrap (or forms, or SEO, etc.) can follow your guide and end up with a working example, you've done it right.

---

## Presentation Day: How It Works

1. Your team comes up to Mr. McMaster's computer (projected to the class)
2. You open your walkthrough markdown file
3. You walk the class through it step by step — everyone follows along on their own machines
4. You type the code, explain what's happening, and make sure everyone keeps up
5. Each team gets about **20–25 minutes**
6. The class should have working examples on their screens when you're done

**Tips:**
- Go slow. Slower than you think you need to.
- After each code chunk, say "Does everyone have this?" before moving on.
- If something breaks, use it as a teaching moment — that's literally what Sprint 04 is about.
- Have one teammate watching the class while another presents, to catch people who fall behind.

---

## Grading

| Criteria | Points |
|----------|--------|
| Walkthrough file is complete and follows the template | 25 |
| Code examples actually work when followed step-by-step | 25 |
| Explanations are clear and helpful (a beginner could follow) | 20 |
| Live presentation is organized and the class can follow along | 20 |
| Team collaboration (everyone contributed) | 10 |
| **Total** | **100** |

---

# Team Topic Guides

Below is a specific guide for each team with what to cover, how to break it down, and where to find good information.

---

## Team 1: Bootstrap Basics

### What to Cover

Your job is to show the class how to use Bootstrap to build responsive pages quickly. Focus on the grid system and a few key components.

### Suggested Walkthrough Breakdown

**Walkthrough 1 — Getting Started + Grid**
- Set up an HTML file with the Bootstrap CDN link
- Build a simple 2-column layout using `container`, `row`, and `col`
- Show how `col-md-6` vs `col-lg-4` changes the layout at different screen sizes
- Have the class resize their browser to see it respond

**Walkthrough 2 — Navbar**
- Add a Bootstrap navbar with a brand name and 3 links
- Show the hamburger menu by resizing the browser to mobile width
- Explain `navbar-expand-lg`, `navbar-dark`, `bg-dark`

**Walkthrough 3 — Cards and Buttons**
- Create 3 Bootstrap cards in a row (image, title, text, button)
- Show different button styles (`btn-primary`, `btn-outline-secondary`, etc.)
- Use utility classes for spacing (`mt-3`, `p-4`, `text-center`)

### Key Vocabulary to Explain
Bootstrap, CDN, container, row, col, grid system, breakpoint, responsive design, navbar, card, utility class

### Where to Find Information

**Start here (best for beginners):**
- **Bootstrap Official Docs — Getting Started:** https://getbootstrap.com/docs/5.3/getting-started/introduction/
  - This is your #1 resource. Bootstrap's docs have copy-paste examples for everything.
- **W3Schools Bootstrap 5 Tutorial:** https://www.w3schools.com/bootstrap5/
  - Step-by-step lessons with "Try It Yourself" editors. Great for understanding each component.

**Video walkthroughs:**
- **Net Ninja Bootstrap 5 Crash Course (YouTube):** Search "Net Ninja Bootstrap 5" — he builds a real page step by step
- **Traversy Media Bootstrap 5 Crash Course (YouTube):** 90-minute complete walkthrough, very clear

**Reference when building:**
- **Bootstrap Examples page:** https://getbootstrap.com/docs/5.3/examples/
  - Full page templates you can look at for inspiration (don't copy these, just see how they structure things)

---

## Team 2: HTML Forms & Validation

### What to Cover

Your job is to show the class how to build HTML forms from scratch — inputs, labels, different field types, and basic form structure.

### Suggested Walkthrough Breakdown

**Walkthrough 1 — Basic Form + Text Inputs**
- Create an HTML file with a `<form>` tag (explain `action` and `method`)
- Add labeled text inputs for first name, last name, and email
- Show `placeholder`, `required`, and `type="email"`
- Explain why `<label for="">` matters (accessibility)

**Walkthrough 2 — Choices: Radios, Checkboxes, Dropdowns**
- Add radio buttons for a single-choice question (e.g., "Favorite subject?")
- Add checkboxes for multi-choice (e.g., "What languages do you know?")
- Add a `<select>` dropdown with `<option>` elements
- Explain the `name` attribute and why radio buttons share the same name

**Walkthrough 3 — Putting It All Together**
- Add a `<textarea>` for comments
- Wrap related fields in `<fieldset>` and `<legend>`
- Add submit and reset buttons
- Add some basic CSS to make the form look decent (width, padding, labels on their own lines)

### Key Vocabulary to Explain
Form, action, method, GET, POST, input, type, label, for/id connection, placeholder, required, radio, checkbox, select, option, textarea, fieldset, legend, submit

### Where to Find Information

**Start here (best for beginners):**
- **MDN Web Docs — HTML Forms Guide:** https://developer.mozilla.org/en-US/docs/Learn/Forms
  - The best overall reference. Start with "Your first form" and "How to structure a form."
- **W3Schools HTML Forms Tutorial:** https://www.w3schools.com/html/html_forms.asp
  - Simple explanations with interactive "Try It" editors for every form element.

**Video walkthroughs:**
- **CS50 Web (Harvard) — HTML & Forms section:** Search "CS50 Web Programming HTML Forms" on YouTube
  - Brian Yu explains forms clearly with live coding examples
- **Web Dev Simplified — Learn HTML Forms In 25 Minutes (YouTube):** Quick, focused, beginner-friendly

**Reference when building:**
- **MDN `<input>` reference:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  - Shows every input type with examples (text, email, password, number, date, etc.)

---

## Team 3: SEO, Accessibility & Deployment

### What to Cover

This is a big topic area, so keep each section short and practical. Show the class how to make a page search-engine friendly, accessible, and how to get it live on the internet.

### Suggested Walkthrough Breakdown

**Walkthrough 1 — SEO Basics**
- Start with a bare HTML page that has bad SEO (no title, no meta, generic headings)
- Fix it step by step: add a proper `<title>`, add `<meta name="description">`, fix the heading hierarchy (h1 → h2 → h3), add `alt` text to images
- Show a before/after and explain why search engines care about each change

**Walkthrough 2 — Accessibility Quick Wins**
- Take the same page and improve accessibility
- Add `alt` text, fix color contrast (show a contrast checker tool), add `aria-label` to a nav element
- Show what a screen reader sees using the browser's accessibility inspector (DevTools → Accessibility tab)
- Add keyboard navigation (show `tabindex`, focus styles)

**Walkthrough 3 — Deploy to GitHub Pages**
- Walk through creating a repo on GitHub (or use an existing one)
- Show `git add`, `git commit`, `git push` from the command line (or GitHub Desktop)
- Enable GitHub Pages in repo settings
- Show the live URL — the page is now on the internet

### Key Vocabulary to Explain
SEO, title tag, meta description, heading hierarchy, alt text, accessibility, ADA, WCAG, screen reader, color contrast, ARIA, HTTP/HTTPS, DNS, Git, GitHub Pages, static site

### Where to Find Information

**Start here (best for beginners):**
- **Google's SEO Starter Guide:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
  - Straight from Google. Short, clear, tells you exactly what matters.
- **WebAIM Introduction to Accessibility:** https://webaim.org/intro/
  - The best beginner-friendly accessibility resource. Plain English, real examples.
- **GitHub Pages Quickstart:** https://docs.github.com/en/pages/quickstart
  - Step-by-step guide to deploying your first site on GitHub Pages.

**Video walkthroughs:**
- **CS50 Web — HTML, CSS & Git lectures:** Search "CS50 Web Programming" on YouTube
  - David Malan / Brian Yu cover Git and deployment beautifully
- **The Coding Train — GitHub Pages (YouTube):** Short, fun, easy to follow
- **WebAIM Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
  - Live tool your walkthrough can reference

**Reference when building:**
- **MDN Accessibility Guide:** https://developer.mozilla.org/en-US/docs/Learn/Accessibility
- **W3Schools Git Tutorial:** https://www.w3schools.com/git/

---

## Team 4: Troubleshooting, QA & Dev Tools

### What to Cover

Your job is to show the class how to find and fix problems in web code. This is the most hands-on sprint — you'll want to intentionally break things and then fix them live.

### Suggested Walkthrough Breakdown

**Walkthrough 1 — DevTools Inspector Basics**
- Open a page in Chrome, right-click → Inspect
- Show the Elements panel: highlight elements, see the HTML structure
- Show the Styles panel: see what CSS is applied, toggle styles on/off
- Edit HTML and CSS live in DevTools (explain it doesn't save permanently)

**Walkthrough 2 — Finding and Fixing Common Bugs**
- Provide a short HTML file with 4–5 intentional bugs:
  - Missing closing tag
  - Broken image path
  - CSS selector typo (`.contaner` instead of `.container`)
  - Link with wrong `href`
  - Missing `alt` attribute
- Walk the class through finding each bug using DevTools and the W3C Validator
- Fix each one and explain the debugging thought process

**Walkthrough 3 — Validation and Cross-Browser Testing**
- Run a page through the W3C HTML Validator (https://validator.w3.org/)
- Show how to read validation errors and fix them
- Open the same page in Chrome and Firefox — point out any differences
- Show the responsive design mode in DevTools (phone/tablet preview)

**Walkthrough 4 — Writing a Simple Test Case** (since you have 4 people)
- Show what a test case looks like (a checklist: "Click the Submit button → Expected: form submits and shows confirmation")
- Write 3–4 test cases for a simple form page
- Run through them as a class

### Key Vocabulary to Explain
Troubleshooting, debugging, DevTools, Elements panel, Styles panel, Console, W3C Validator, cross-browser testing, test case, QA, bug report, root cause

### Where to Find Information

**Start here (best for beginners):**
- **Chrome DevTools Docs — Overview:** https://developer.chrome.com/docs/devtools/overview
  - Google's official guide to DevTools. Start with "Open DevTools" and "Inspect and Edit Pages."
- **W3C Markup Validator:** https://validator.w3.org/
  - The tool itself — paste in your HTML and see errors. Use this in your walkthrough.
- **W3Schools How To — Debugging HTML:** https://www.w3schools.com/html/html_validation.asp

**Video walkthroughs:**
- **Google Chrome Developers — DevTools Tips (YouTube playlist):** Short, focused videos on specific DevTools features
- **Traversy Media — Chrome DevTools Crash Course (YouTube):** Covers all the panels in about 30 minutes
- **CS50 Web — Testing & CI/CD lecture:** Search "CS50 Web Testing" — covers testing concepts clearly

**Reference when building:**
- **MDN — Browser Developer Tools:** https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
- **CSS-Tricks — Debugging CSS:** https://css-tricks.com/debugging-css/

---

## Timeline

| When | What |
|------|------|
| **Day 1 (Assignment Day)** | Get into teams, read this guide, claim your topic, start researching |
| **Day 2** | Research and start writing your walkthroughs. Test your code examples. |
| **Day 3** | Combine walkthroughs, edit for clarity, practice presenting |
| **Day 4** | Presentations (all 4 teams, ~20–25 min each) |

---

## Quick Reference: Resources at a Glance

| Resource | URL | Best For |
|----------|-----|----------|
| W3Schools | https://www.w3schools.com | Beginner tutorials with "Try It" editors |
| MDN Web Docs | https://developer.mozilla.org | Detailed reference for HTML/CSS/JS |
| Bootstrap Docs | https://getbootstrap.com/docs/5.3/ | Official Bootstrap components & examples |
| CS50 Web (Harvard) | YouTube: search "CS50 Web Programming" | Excellent video lectures on web fundamentals |
| The Odin Project | https://www.theodinproject.com | Free full web dev curriculum (good for deep dives) |
| freeCodeCamp | https://www.freecodecamp.org | Interactive coding lessons (forms, accessibility, etc.) |
| WebAIM | https://webaim.org | Accessibility testing and guides |
| W3C Validator | https://validator.w3.org | HTML validation tool |
| Chrome DevTools | https://developer.chrome.com/docs/devtools/ | Official DevTools documentation |
| GitHub Pages Docs | https://docs.github.com/en/pages | Deployment guide |

---

**Questions?** Ask Mr. McMaster. Good luck — you're the teachers now.
