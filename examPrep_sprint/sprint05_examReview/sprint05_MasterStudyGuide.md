# Sprint 05: Master Study Guide
## Comprehensive Exam Preparation - Everything You Need to Know

---

## SECTION 1: Bootstrap & Responsive Design

### Key Terms (10)

1. **Bootstrap** - Popular open-source CSS framework for responsive web design
2. **Grid System** - 12-column flexible layout system for building responsive layouts
3. **Container** - Bootstrap wrapper that centers and pads content (`container`, `container-fluid`)
4. **Row** - Horizontal group of columns, must be inside container
5. **Column** - Individual unit in grid, defines width at different breakpoints
6. **Breakpoint** - Screen width threshold where layout changes (xs, sm, md, lg, xl, xxl)
7. **Responsive Design** - Web design that adapts to different screen sizes
8. **Class** - Bootstrap utility name applied to HTML elements (e.g., `col-md-6`)
9. **Utility Classes** - Pre-built CSS classes for common styling (margin, padding, color, display)
10. **Component** - Pre-designed Bootstrap element (navbar, card, button, alert, modal)

### Bootstrap Grid System Cheat Sheet

**Basic Structure:**
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Half width on medium+</div>
    <div class="col-md-6">Half width on medium+</div>
  </div>
</div>
```

**Column Classes:**
- `col` - Equal width, responsive
- `col-md-6` - 50% width on medium and up
- `col-md-4` - 33% width on medium and up
- `col-lg-3` - 25% width on large and up
- `col-sm-12` - Full width on small, stacks on mobile

**Offset & Order:**
```html
<div class="col-md-6 offset-md-3">Centered, 6 cols with 3 col offset</div>
<div class="col-md-6 order-md-2">Reorder on medium+</div>
```

### Breakpoints Table

| Breakpoint | Infix | Screen Size | Mobile First |
|-----------|-------|------------|--------------|
| **Extra Small** | (none) | < 576px | Default styles |
| **Small** | sm | ≥ 576px | Use `col-sm-*` |
| **Medium** | md | ≥ 768px | Use `col-md-*` |
| **Large** | lg | ≥ 992px | Use `col-lg-*` |
| **Extra Large** | xl | ≥ 1200px | Use `col-xl-*` |
| **XXL** | xxl | ≥ 1400px | Use `col-xxl-*` |

**Mobile-First Principle:** Design for mobile first, then add breakpoints for larger screens.

### Key Bootstrap Components List

| Component | Purpose | Class | Example |
|-----------|---------|-------|---------|
| **Navbar** | Navigation bar | `.navbar` | Logo, menu links, collapse |
| **Card** | Content container | `.card` | Image, title, text, button |
| **Button** | Clickable element | `.btn` | Primary, success, danger variants |
| **Alert** | Message box | `.alert` | Info, warning, success, danger |
| **Badge** | Small label | `.badge` | Status indicator |
| **Pagination** | Page numbers | `.pagination` | Next/previous links |
| **Modal** | Popup dialog | `.modal` | Form, confirmation, message |
| **Accordion** | Collapsible items | `.accordion` | FAQs, expandable sections |

**Common Utility Classes:**
- Spacing: `m-3`, `p-2`, `mt-4`, `pb-1` (margin/padding at different levels)
- Display: `d-flex`, `d-none`, `d-block`, `d-inline-block`
- Text: `text-center`, `text-end`, `fw-bold`, `fs-5`
- Colors: `text-primary`, `bg-light`, `border-danger`
- Borders: `border`, `border-top`, `rounded`

---

## SECTION 2: HTML Forms

### Key Terms (10)

1. **Form** - HTML element that collects user input (`<form>` tag)
2. **Action** - URL attribute where form data is sent
3. **Method** - HTTP method for sending data (GET or POST)
4. **Input** - Form control element for user entry (text, email, checkbox, radio, etc.)
5. **Label** - Text associated with form control for accessibility
6. **Fieldset** - Groups related form controls together
7. **Legend** - Title for fieldset, improves accessibility
8. **Radio Button** - Single-select control (only one in group can be selected)
9. **Checkbox** - Multi-select control (multiple can be selected)
10. **Submit Button** - Button that sends form data to server

### GET vs POST Comparison

| Feature | GET | POST |
|---------|-----|------|
| **Data Location** | URL query string | Message body |
| **Visibility** | Visible to user | Hidden from user |
| **Data Limit** | ~2000 characters | No practical limit |
| **Bookmarkable** | Yes | No |
| **Caching** | Often cached | Not cached by default |
| **Security** | Less secure (visible) | More secure (hidden) |
| **Use Case** | Searches, filters | Logins, sensitive data |
| **Idempotent** | Yes (safe to repeat) | No (side effects possible) |

### Radio Button vs Checkbox

| Feature | Radio | Checkbox |
|---------|-------|----------|
| **Selection** | One only | Multiple |
| **Same name?** | Yes (same `name`) | Can differ |
| **User Intent** | Either/or choice | Multiple selections |
| **Example** | Gender: M/F | Interests: Sports/Music/Art |
| **HTML** | `<input type="radio">` | `<input type="checkbox">` |

### Form Structure Best Practices

**Complete Example:**
```html
<form action="process.php" method="POST" name="contactForm">
  <fieldset>
    <legend>Contact Information</legend>

    <div class="form-group">
      <label for="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname" required>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
  </fieldset>

  <fieldset>
    <legend>Preferences</legend>

    <div class="form-group">
      <label>Contact Method:</label>
      <input type="radio" id="phone" name="contact" value="phone">
      <label for="phone">Phone</label>
      <input type="radio" id="email2" name="contact" value="email">
      <label for="email2">Email</label>
    </div>

    <div class="form-group">
      <label for="interests">Interests:</label>
      <input type="checkbox" id="sports" name="interests" value="sports">
      <label for="sports">Sports</label>
      <input type="checkbox" id="music" name="interests" value="music">
      <label for="music">Music</label>
    </div>
  </fieldset>

  <button type="submit">Submit</button>
  <button type="reset">Clear</button>
</form>
```

### Key Input Types Reference

- `text` - Single line text
- `email` - Email validation
- `password` - Masked input
- `number` - Numeric input with spinner
- `tel` - Telephone number
- `url` - Website URL
- `date` - Date picker
- `checkbox` - Multiple selection
- `radio` - Single selection
- `file` - File upload
- `submit` - Submit form
- `reset` - Clear form
- `button` - Generic button
- `hidden` - Not displayed

### Fieldset and Legend Example

```html
<fieldset>
  <legend>Shipping Address</legend>
  <!-- All inputs inside are grouped logically -->
  <label for="street">Street:</label>
  <input type="text" id="street" name="street">

  <label for="city">City:</label>
  <input type="text" id="city" name="city">
</fieldset>
```

**Why use fieldset/legend?**
- Groups related form controls
- Screen readers announce the group
- Improves visual organization
- Better form semantics

---

## SECTION 3: SEO & Accessibility

### Key Terms (12)

1. **SEO** - Search Engine Optimization, making sites visible in search results
2. **Title Tag** - Page title in browser tab and search results
3. **Meta Description** - Summary of page content shown in search results
4. **Heading Hierarchy** - H1, H2, H3 structure showing content importance
5. **Keyword** - Word/phrase users search for
6. **Alt Text** - Text description of images for accessibility
7. **ADA** - Americans with Disabilities Act (legal requirement)
8. **WCAG** - Web Content Accessibility Guidelines (standards)
9. **Accessibility** - Ability of site to be used by people with disabilities
10. **Screen Reader** - Software that reads page content aloud
11. **ARIA** - Accessible Rich Internet Applications (attributes for accessibility)
12. **Contrast Ratio** - Difference in brightness between text and background

### SEO Checklist

**Before Publishing:**
- [ ] Page title: Unique, 50-60 chars, includes main keyword
- [ ] Meta description: 150-160 chars, compelling, includes keyword
- [ ] H1 tag: One per page, clearly states main topic
- [ ] H2/H3 tags: Proper hierarchy, describe sections
- [ ] Keywords: Naturally placed in title, headings, first 100 words
- [ ] Alt text: All images have descriptive alt text
- [ ] Internal links: Link to related pages
- [ ] Mobile friendly: Responsive design implemented
- [ ] Site speed: Images optimized, minified CSS/JS
- [ ] URL: Descriptive, uses hyphens (example.com/web-design-tips)

**Example SEO-Optimized Page:**
```html
<head>
  <title>Web Design Tips for Beginners | Best Practices 2024</title>
  <meta name="description" content="Learn essential web design principles for beginners. Responsive layouts, color theory, typography tips, and accessibility best practices.">
</head>
<body>
  <h1>Complete Guide to Web Design for Beginners</h1>
  <h2>Understanding Responsive Design</h2>
  <p>Responsive design ensures your website looks good on all devices...</p>
  <img src="responsive-layout.jpg" alt="Example of responsive design on mobile and desktop">

  <h2>Color Theory in Web Design</h2>
  <p>Choosing the right colors affects user experience...</p>
</body>
```

### Accessibility Checklist

**WCAG Compliance (AA level):**
- [ ] Color contrast: Text 4.5:1, graphics 3:1 minimum
- [ ] Keyboard navigation: All functionality accessible via keyboard
- [ ] Alt text: All meaningful images have descriptive alt
- [ ] Form labels: Every input has associated label
- [ ] Heading hierarchy: Proper H1-H6 structure
- [ ] Skip links: Skip-to-content link at top
- [ ] ARIA labels: Use for icon buttons, aria-label, aria-describedby
- [ ] Error messages: Clear, specific, linked to fields
- [ ] Text alternatives: Captions for videos, transcripts for audio
- [ ] Focus indicators: Visible focus state on interactive elements
- [ ] No keyboard traps: Can navigate in and out of all elements
- [ ] Language: Specify page language in HTML tag

**Example Accessible Form:**
```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required
         aria-describedby="username-help">
  <small id="username-help">3-20 characters, alphanumeric only</small>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit" aria-label="Sign in to account">Sign In</button>
</form>
```

### WCAG Levels Explained

| Level | Conformance | Standard | Notes |
|-------|-----------|----------|-------|
| **A** | Minimal | Basic requirements | Foundation level |
| **AA** | Standard | Industry norm | Most laws require AA |
| **AAA** | Enhanced | Maximum compliance | Best-in-class accessibility |

**Compliance = Legal Requirement + Good Business**

### SEO and Accessibility Overlap

- **Alt text:** Benefits both screen readers and image SEO
- **Heading hierarchy:** Helps screen readers and SEO structure
- **Proper HTML:** Both require semantic markup
- **Keyboard navigation:** Accessibility + mobile-friendly = better SEO
- **Fast loading:** Accessibility (less cognitive load) + SEO ranking factor
- **Clear writing:** Accessibility + keyword optimization

---

## SECTION 4: Protocols & Deployment

### Key Terms (8)

1. **HTTP** - HyperText Transfer Protocol (unsecured web communication)
2. **HTTPS** - HTTP Secure (encrypted web communication)
3. **FTP** - File Transfer Protocol (file uploading, now replaced by SFTP)
4. **TCP/IP** - Transmission Control Protocol/Internet Protocol (foundation of internet)
5. **DNS** - Domain Name System (converts domains to IP addresses)
6. **SSL/TLS** - Secure Sockets Layer/Transport Layer Security (encryption)
7. **Certificate** - Digital file proving website identity for HTTPS
8. **Deployment** - Process of publishing website to live server

### Protocols Comparison Table

| Protocol | Full Name | Purpose | Security | Status |
|----------|-----------|---------|----------|--------|
| **HTTP** | HyperText Transfer Protocol | Web pages | None | Deprecated |
| **HTTPS** | HTTP Secure | Web pages | SSL/TLS encrypted | Required NOW |
| **FTP** | File Transfer Protocol | File transfer | None | Legacy |
| **SFTP** | SSH File Transfer | File transfer | SSH encrypted | Current |
| **TCP/IP** | Transmission Control/Internet | Internet foundation | Not encrypted | Always used |
| **DNS** | Domain Name System | Domain→IP lookup | Not encrypted | Always used |
| **SSL** | Secure Sockets Layer | Encryption | Encrypted | Replaced by TLS |
| **TLS** | Transport Layer Security | Encryption | Encrypted | Current standard |

### Protocol Details

**HTTP vs HTTPS:**
- HTTP sends data in plain text (anyone can read)
- HTTPS encrypts data with SSL/TLS certificate
- Every website MUST use HTTPS for:
  - Security (protects user data)
  - SEO ranking (Google ranks HTTPS higher)
  - Trust (users see lock icon)
  - Compliance (privacy laws require it)

**DNS (Domain Name System):**
- Converts domain name (example.com) to IP address (192.0.2.1)
- Works like a phone book for the internet
- Takes few seconds, then cached locally
- Not encrypted (limitation, but not critical)

**TCP/IP (Transmission Control Protocol/Internet Protocol):**
- Foundation of all internet communication
- TCP: Ensures data arrives correctly and in order
- IP: Routes data between computers
- Used by HTTP, HTTPS, FTP, email, everything

### Git Commands Cheat Sheet

**Configuration (do once):**
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

**Starting a Project:**
```bash
git init                          # Initialize new repo
git clone <url>                   # Clone existing repo
```

**Making Changes:**
```bash
git status                        # See what changed
git add <file>                    # Stage specific file
git add .                         # Stage all changes
git commit -m "Description"       # Save changes locally
```

**Pushing to GitHub:**
```bash
git remote add origin <url>       # Connect to GitHub
git push -u origin main           # Push to GitHub (first time)
git push                          # Push subsequent changes
```

**Pulling from GitHub:**
```bash
git pull                          # Download latest changes
git fetch                         # Download but don't merge
```

**Checking History:**
```bash
git log                           # See commit history
git diff                          # See changes not staged
git diff --staged                 # See staged changes
```

### GitHub Pages Deployment (Static Sites)

**Step-by-Step:**

1. **Create GitHub Repository**
   - Go to github.com, click "New repository"
   - Name it: `username.github.io` for user site, or any name for project site
   - Add README, .gitignore for Node
   - Clone to local computer

2. **Add Project Files**
   - Copy index.html, CSS, JavaScript to repo folder
   - Stage and commit: `git add .` then `git commit -m "Initial commit"`

3. **Push to GitHub**
   - `git push -u origin main`

4. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Under "Build and deployment", select "Deploy from a branch"
   - Select branch: `main` (or `gh-pages`)
   - Click Save

5. **Access Your Site**
   - User site: `https://username.github.io`
   - Project site: `https://username.github.io/repo-name`
   - Takes 1-2 minutes to publish

**Example:** If GitHub username is `jsmith` and repo is `portfolio`, site is at `https://jsmith.github.io/portfolio`

---

## SECTION 5: Troubleshooting & QA

### Key Terms (8)

1. **Bug** - Error or unexpected behavior in code
2. **Debugging** - Process of finding and fixing bugs
3. **Breakpoint** - Point in code where execution stops for inspection
4. **Console** - Browser tool showing errors and logs
5. **Inspector** - Browser tool showing HTML/CSS in real-time
6. **Test Case** - Specific scenario to verify functionality
7. **QA** - Quality Assurance, testing before release
8. **Regression** - Bug reintroduced after being fixed

### Four Troubleshooting Methods

**1. Top-Down (Start High, Go Low)**
- Start with overall page structure
- Check HTML validity first
- Then check CSS
- Finally check JavaScript
- Best for: Structure/layout issues

Example: Button not showing?
- Is HTML button tag there? (HTML)
- Is CSS display: none? (CSS)
- Is JavaScript hiding it? (JS)

**2. Bottom-Up (Start Low, Go High)**
- Start with error message
- Find the specific function with error
- Trace where it's called from
- Find what's calling that
- Best for: JavaScript errors

Example: TypeError in console?
- Find exact line in console
- Read the error message carefully
- Check that variable exists
- Check the function that creates it

**3. Follow the Path (Trace Data)**
- Start with user action (click, form submission)
- Trace data through handlers
- Check each transformation
- Verify database/server changes
- Trace back to output
- Best for: Data flow issues

Example: Form doesn't submit?
- Form submission event fires? (check console)
- Validation passes? (check form data)
- AJAX sends correctly? (check Network tab)
- Server responds? (check console)

**4. Spot the Differences (Compare)**
- Find working vs broken versions
- Use Git diff to see changes
- Use Inspector to compare HTML/CSS
- Look for recent changes
- Best for: Something just broke

Example: Layout broke after update?
- `git diff` to see changes
- Inspector to compare CSS
- Browser dev tools to check applied styles
- Revert recent changes to test

### Troubleshooting Tools

**Browser DevTools:**
- **Console Tab:** Shows errors, run JavaScript commands
- **Inspector Tab:** See HTML, hover to highlight, edit CSS live
- **Network Tab:** See HTTP requests, response times, failed requests
- **Sources Tab:** Set breakpoints, step through JavaScript
- **Application Tab:** See localStorage, cookies, cache

**External Tools:**
- **W3C HTML Validator:** validator.w3.org
- **W3C CSS Validator:** jigsaw.w3.org/css-validator
- **Git Diff:** `git diff` shows exact changes
- **Git Log:** `git log` shows commit history

### Test Case Template

```
Test Case ID: TC-001
Title: Login with valid credentials
Precondition: User is on login page
Steps:
  1. Enter valid email address
  2. Enter valid password
  3. Click "Sign In" button
Expected Result: User is logged in, redirected to dashboard
Actual Result: [To be completed during testing]
Status: PASS / FAIL
Notes: [Any observations]
```

### QA Checklist

**Functionality Testing:**
- [ ] All buttons/links work
- [ ] Forms submit correctly
- [ ] Navigation works
- [ ] Search works (if applicable)
- [ ] Filters/sorting work
- [ ] No broken links

**Compatibility Testing:**
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Works on iOS
- [ ] Works on Android

**Responsiveness Testing:**
- [ ] Mobile (< 576px)
- [ ] Tablet (768px)
- [ ] Desktop (992px+)
- [ ] No overlapping elements
- [ ] Text readable at all sizes
- [ ] Images scale properly

**Accessibility Testing:**
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Alt text on images
- [ ] Form labels present
- [ ] Error messages clear
- [ ] Focus indicators visible

**Performance Testing:**
- [ ] Page loads quickly (< 3 seconds)
- [ ] No broken images
- [ ] No console errors
- [ ] Optimized file sizes
- [ ] Smooth scrolling
- [ ] No lag on interactions

---

## SECTION 6: Business, Ethics & Professional Skills

### Intellectual Property

**Copyright:**
- Automatic protection of original creative works
- Lasts author's life + 70 years (US)
- Applies to text, code, images, music, video
- Do NOT use without permission
- Copyright symbol: © 2024 Your Name

**Trademarks:**
- Protects brand names and logos
- Requires registration (®)
- Examples: Google, Apple, Nike
- Do NOT use company logos without permission

**Fair Use:**
- Limited exception to copyright
- Allows use for education, criticism, commentary, parody
- NOT blanket permission—case-by-case basis
- Factors: Purpose, amount used, effect on original work's value
- Safer: Use Creative Commons or licensed content

**Licensing Options:**
- **All Rights Reserved:** Default copyright, nothing allowed
- **Creative Commons:** Author allows specific uses
  - CC-BY: Attribution required
  - CC-BY-SA: Attribution + Share-Alike
  - CC-BY-NC: Attribution + Non-Commercial
  - CC0: Public Domain, use freely
- **Open Source:** Code licensed for free use (MIT, GPL, Apache)
- **Royalty-Free:** Pay once, use indefinitely

**Best Practices:**
- Always cite original source
- Use Creative Commons images (Unsplash, Pexels)
- Use licensed fonts (Google Fonts, licensed from foundry)
- Use open-source code and libraries correctly
- Never screenshot copyrighted content
- When in doubt, ask permission

### ADA Compliance (It's the Law!)

**What is ADA?**
- Americans with Disabilities Act (1990)
- Federal law requiring equal access for people with disabilities
- Applies to websites (Title III)
- Business responsibility, not optional

**Legal Risk:**
- Lawsuits for non-compliance are increasing
- Department of Justice actively enforces
- Settlements average $50,000+
- Damage to company reputation
- Bad for business AND wrong ethically

**What Must Be Accessible?**
- Images (alt text)
- Videos (captions, transcripts)
- Forms (labels, clear error messages)
- Buttons (keyboard accessible, clear labels)
- Colors (not sole way to convey info)
- Navigation (logical, keyboard-friendly)

**Who Benefits?**
- Blind/low-vision users (screen readers)
- Deaf/hard-of-hearing users (captions)
- Motor disabilities (keyboard navigation)
- Cognitive disabilities (clear language)
- Everyone (captioned videos, large text options)

### WCAG Levels (A, AA, AAA)

**Level A (Minimum):**
- Basic requirements met
- Many accessibility features missing
- Bare minimum

**Level AA (Standard):**
- Industry-standard target
- Most laws reference AA
- Good for most websites
- Covers main accessibility concerns
- Example: 4.5:1 color contrast

**Level AAA (Enhanced):**
- Maximum compliance
- Highest standard (7:1 color contrast)
- Difficult/expensive to achieve
- Not required by law, but best-in-class

**Bottom Line:** Aim for AA compliance (legal + practical).

### Employability Skills

**Portfolio:**
- Showcase 3-5 best projects
- Include: Screenshots, description, tools used
- Links to live sites (GitHub Pages)
- Show variety (layout, functionality, design)
- Update regularly as skills improve
- Quality over quantity

**Resume:**
- One page (maybe two if very experienced)
- Relevant skills highlighted
- Projects with descriptions
- Education and certifications
- Contact information (email, GitHub, LinkedIn)
- Tailored to job description
- No typos or grammatical errors

**Feedback & Growth:**
- Accept constructive criticism gracefully
- Ask "How can I improve?"
- Implement feedback to improve
- Learn from mistakes
- Share your learning journey
- Help others—teach what you know

**Professionalism:**
- Respond to emails/messages within 24 hours
- Meet deadlines
- Communicate status regularly
- Ask clarifying questions
- Be honest about capabilities
- Admit when you don't know, offer to learn
- Dress appropriately for interviews
- Handshake etiquette, eye contact

### Project Management Basics

**Scope:**
- What's included in the project
- What's explicitly excluded
- Scope creep = adding features beyond original plan
- Define scope clearly upfront
- Document in Design Brief

**Stakeholders:**
- Anyone affected by or who cares about project
- Client/business owner
- End users
- Team members
- Managers/executives
- Get stakeholder buy-in early

**Timeline:**
- When project starts and ends
- Key milestone dates
- Deadline for deliverables
- Buffer time for unknowns
- Update regularly as work progresses

**Milestones:**
- Major checkpoint in project
- Examples: Design approval, development start, testing
- Helps track progress
- Celebrate milestones (team morale)

**Critical Path:**
- Sequence of tasks that determine minimum project duration
- Delays on critical path delay whole project
- Non-critical tasks have slack time
- Focus effort on critical path
- Example: Design → HTML → CSS → Test → Deploy

**Project Phases:**
1. **Planning:** Define scope, timeline, resources
2. **Design:** Wireframes, mockups, approval
3. **Development:** Code implementation
4. **Testing:** QA, bug fixes
5. **Deployment:** Launch to production
6. **Maintenance:** Monitor, fix issues, updates

### Design Brief Components

```
PROJECT TITLE
Version 1.0 | Date

1. CLIENT/STAKEHOLDER
   - Client name and contact
   - Project decision-maker

2. PROJECT OVERVIEW
   - What is this project?
   - Why are we doing it?

3. GOALS & OBJECTIVES
   - What should this achieve?
   - How will success be measured?

4. TARGET AUDIENCE
   - Who will use this?
   - Demographics, needs, preferences

5. SCOPE
   - What's included
   - What's NOT included
   - Features/requirements

6. DELIVERABLES
   - What will be delivered
   - Format and specifications

7. TIMELINE & MILESTONES
   - Start and end dates
   - Key milestones
   - Deadline for each phase

8. BUDGET (if applicable)
   - Total budget
   - Cost breakdown by phase

9. CONSTRAINTS & ASSUMPTIONS
   - Technical constraints
   - Browser/device requirements
   - Assumptions about content

10. SUCCESS CRITERIA
    - How will we know it's successful?
    - Metrics to measure
```

---

## SECTION 7: ODE Competency Map

### Ohio Department of Education Web Design Competencies

**Unit 1: HTML/CSS Fundamentals**
- **Competency 1.1:** Understand HTML structure and semantic elements
- **Competency 1.2:** Apply CSS styling and inheritance
- **Competency 1.3:** Implement responsive design basics
- Covered in: Sprint 01, Sprint 02

**Unit 2: Bootstrap & Components**
- **Competency 2.1:** Use Bootstrap grid system effectively
- **Competency 2.2:** Implement Bootstrap components (navbar, cards, buttons)
- **Competency 2.3:** Customize Bootstrap with CSS overrides
- Covered in: Sprint 02, Sprint 03

**Unit 3: Forms & User Input**
- **Competency 3.1:** Create accessible HTML forms
- **Competency 3.2:** Use proper input types and validation
- **Competency 3.3:** Understand form submission and data handling
- Covered in: Sprint 03

**Unit 4: JavaScript & Interactivity**
- **Competency 4.1:** Implement basic JavaScript functionality
- **Competency 4.2:** Handle events and user interactions
- **Competency 4.3:** Manipulate DOM elements
- Covered in: Sprint 04

**Unit 5: SEO & Accessibility**
- **Competency 5.1:** Optimize for search engines
- **Competency 5.2:** Implement accessibility standards (ADA/WCAG)
- **Competency 5.3:** Use semantic HTML for both SEO and accessibility
- Covered in: Sprint 02, Sprint 03, Sprint 05

**Unit 6: Web Technologies & Protocols**
- **Competency 6.1:** Understand HTTP/HTTPS and web security
- **Competency 6.2:** Know DNS and TCP/IP basics
- **Competency 6.3:** Understand FTP and file deployment
- Covered in: Sprint 01, Sprint 05

**Unit 7: Testing, Debugging & Deployment**
- **Competency 7.1:** Use browser developer tools
- **Competency 7.2:** Validate HTML and CSS with W3C validators
- **Competency 7.3:** Test across browsers and devices
- **Competency 7.4:** Use Git version control
- **Competency 7.5:** Deploy to GitHub Pages and web servers
- Covered in: All sprints, especially Sprint 04, Sprint 05

**Unit 8: Professional Development & Ethics**
- **Competency 8.1:** Understand intellectual property and licensing
- **Competency 8.2:** Practice ADA and WCAG compliance
- **Competency 8.3:** Apply project management principles
- **Competency 8.4:** Develop professional portfolio and resume
- **Competency 8.5:** Work with design briefs and stakeholders
- Covered in: Sprint 05 (final review)

---

## Quick Reference: Most Important Concepts for Exam

**Top 10 Things to Know:**

1. **Bootstrap Grid:** 12 columns, container→row→col structure, responsive breakpoints
2. **HTML Forms:** Proper labels, GET vs POST, fieldset for grouping
3. **SEO:** Title tag, meta description, H1, alt text, keywords
4. **Accessibility:** 4.5:1 contrast, alt text, keyboard nav, ARIA, ADA is law
5. **HTTPS:** Required for security, SEO, trust—use always
6. **Git & GitHub:** add, commit, push, deploy via GitHub Pages
7. **Troubleshooting:** Top-down, bottom-up, follow the path, spot differences
8. **Copyright:** Don't use without permission, Creative Commons, fair use is limited
9. **Responsive Design:** Mobile first, test all breakpoints
10. **Project Management:** Scope, stakeholders, timeline, milestones, critical path

---

## Final Review Reminders

- Bookmark this guide for reference during exam
- Do the practice exam multiple times
- Focus on areas where you score lowest
- Sleep well night before exam
- Read questions carefully—don't rush
- When stuck, skip and come back
- First instinct usually correct
- You've learned a lot—trust your knowledge

Good luck on the exam!
