---
marp: true
theme: default
class: invert
paginate: true
---

# Exam Review: Everything You Need to Know

**Sprint 05 - Final 2-Hour Exam Prep Session**

Medina County Career Center - CTE Web Design

*Comprehensive review of ALL sprint topics + state exam essentials*

---

# Bootstrap Quick Review

**Bootstrap Grid System:**
- 12 equal columns in a row
- `container` → `row` → `col` (or `col-*` for responsive)

**Responsive Breakpoints:**
| Breakpoint | Screen Size |
|-----------|------------|
| xs | < 576px |
| sm | ≥ 576px |
| md | ≥ 768px |
| lg | ≥ 992px |
| xl | ≥ 1200px |
| xxl | ≥ 1400px |

**Basic Structure:**
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Content</div>
    <div class="col-md-6">Content</div>
  </div>
</div>
```

---

# Bootstrap Components & Utilities

**Common Components:**
- **Navbar:** Navigation bar with responsive collapse
- **Cards:** Container for grouped content
- **Buttons:** Styled with `.btn` classes (primary, success, danger, etc.)
- **Alerts:** Bootstrap contextual classes (info, warning, danger, success)

**Utility Classes:**
- **Spacing:** `m-*` (margin), `p-*` (padding) where * = 0,1,2,3,4,5
- **Colors:** Text (`text-primary`, `text-danger`) and Background (`bg-light`, `bg-dark`)
- **Visibility:** `d-none`, `d-block`, `d-flex`, responsive like `d-md-none`
- **Text:** `text-center`, `text-end`, `fw-bold`, `fs-3`

---

# HTML Forms Review

**Form Fundamentals:**
```html
<form action="process.php" method="POST">
  <!-- form elements here -->
</form>
```

**Key Attributes:**
- `action` - URL where form data is sent
- `method` - GET or POST (default is GET)
- `name` - Identifies the form

**GET vs POST:**
| GET | POST |
|-----|------|
| Data in URL | Data in body |
| Visible to user | Hidden from user |
| Length limited (~2000 chars) | No practical limit |
| Bookmarkable | Not bookmarkable |
| Less secure | More secure |

---

# Forms Part 2: Input Types & Structure

**Radio vs Checkbox:**
- **Radio:** Only ONE can be selected (same `name` attribute)
- **Checkbox:** Multiple CAN be selected (same `name` or different)

**Form Structure Best Practices:**
```html
<fieldset>
  <legend>Personal Info</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
</fieldset>
```

**Common Input Types:**
- `text`, `email`, `password`, `number`, `tel`, `url`, `date`
- `select` (dropdown), `textarea`, `submit`, `reset`, `button`

**Labels Matter:** Always use `<label>` with `for` attribute matching input `id`

---

# SEO Essentials

**Critical SEO Elements:**
1. **Title Tag** - Unique, 50-60 chars, includes main keyword
2. **Meta Description** - 150-160 chars, compelling summary
3. **Heading Hierarchy** - One H1 per page, H2/H3 for structure
4. **Alt Text** - Descriptive text for ALL images
5. **Keywords** - Natural placement, not stuffing

**Page Structure:**
```html
<head>
  <title>Unique Title - Include Keyword</title>
  <meta name="description" content="150-160 char description">
</head>
<body>
  <h1>Main Topic</h1>
  <img src="pic.jpg" alt="Descriptive text">
</body>
```

**On-Page Checklist:** H1 tag ✓ Keywords ✓ Meta tags ✓ Internal links ✓

---

# Accessibility (ADA & WCAG)

**Legal & Standards:**
- **ADA** - Americans with Disabilities Act (LAW in USA)
- **WCAG** - Web Content Accessibility Guidelines (AA standard = industry norm)

**WCAG Principles (POUR):**
- **P**erceivable - Users can see/hear content
- **O**perable - Keyboard navigation, no traps
- **U**nderstandable - Clear language, logical structure
- **R**obust - Works with assistive tech (screen readers, ARIA)

**Key Techniques:**
- Color contrast: 4.5:1 for text, 3:1 for graphics
- Alt text for images
- Keyboard-accessible buttons (tab, Enter, Space)
- ARIA labels: `aria-label`, `aria-describedby`, `role` attributes
- Skip-to-content links

---

# Web Protocols & Security

**Protocol Comparison Table:**

| Protocol | Purpose | Security | Use |
|----------|---------|----------|-----|
| **HTTP** | Web transfer | None | Legacy only |
| **HTTPS** | Web transfer + SSL | Encrypted | All websites NOW |
| **FTP** | File transfer | None (use SFTP) | Legacy |
| **TCP/IP** | Internet foundation | Base layer | All internet |
| **DNS** | Domain to IP | Not encrypted | Domain lookups |

**Important Concepts:**
- **SSL/TLS** - Encryption protocol (enables HTTPS)
- **Certificate** - Proves site identity, required for HTTPS
- Every website MUST use HTTPS today for security & SEO

---

# Testing & Deployment

**Validation & Testing:**
- **W3C Validators** - HTML (validator.w3.org) & CSS (jigsaw.w3.org)
- **Cross-browser Testing** - Chrome, Firefox, Safari, Edge
- **Responsive Testing** - Dev Tools device toolbar, multiple screen sizes
- **Accessibility Testing** - WAVE, Lighthouse, manual testing

**Git Workflow (Quick):**
```bash
git add .              # Stage changes
git commit -m "msg"    # Commit locally
git push origin main   # Push to GitHub
```

**GitHub Pages (Static Site Hosting):**
1. Push code to GitHub repo
2. Settings → Pages → Select branch
3. Site published at `username.github.io/repo-name`

---

# Troubleshooting Methods

**4 Systematic Approaches:**

1. **Top-Down:** Start at highest level, work down (macro → micro)
   - Check HTML structure first, then CSS, then JavaScript

2. **Bottom-Up:** Start with specific error, trace up
   - Console error → Find function → Find caller

3. **Follow the Path:** Trace data flow
   - Form input → Handler → Database → Output

4. **Spot the Differences:** Compare working vs broken
   - Use browser inspector, check CSS differences
   - Git diff to see what changed

**Tools:**
- Browser DevTools (inspect, console, network)
- W3C Validators
- Git history (`git log`, `git diff`)

---

# Business & Ethics Quick Hits

**Intellectual Property:**
- **Copyright** - Automatic, protects original works
- **Trademark** - Brand names & logos (®, ™)
- **Fair Use** - Limited use for education, comment, parody
- **Licensing** - Check before using images/fonts (Creative Commons, etc.)

**ADA Compliance:**
- Legal requirement, not optional
- Website accessibility = ADA compliance
- Business risk if non-compliant

**Project Management Basics:**
- **Scope** - What's included/excluded
- **Stakeholders** - Who cares about this project
- **Timeline** - When things happen
- **Design Brief** - Project requirements document

**Employability Skills:**
- Portfolio (showcase best work)
- Resume (clear, targeted)
- Feedback (accept constructively)
- Professional communication

---

# Exam Tips & What to Expect

**Format:**
- Multiple choice questions covering ALL topics
- Mix of conceptual and practical questions
- Weighted toward recent sprints + common skills

**Study Strategy:**
- Review this deck multiple times
- Complete the practice exam
- Focus on areas you're weak in
- Use the Master Study Guide as reference

**Time Management:**
- Read questions carefully
- If stuck, skip and come back
- Don't overthink—first instinct often right
- Check your answers at end if time

**What You Know:**
- Bootstrap grid and components
- HTML forms with proper structure
- SEO and accessibility basics
- Protocols and deployment
- Troubleshooting and testing methods
- Business and ethics concepts

**YOU'VE GOT THIS!** 🚀
