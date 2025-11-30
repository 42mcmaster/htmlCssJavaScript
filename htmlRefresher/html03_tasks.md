# **Lesson 3 Tasks: Links and Navigation**

## **Setup Instructions**

1. Create a new folder called `html-lesson3`
2. Initialize as Git repository
3. Create the following files for your multi-page website
4. Test all links work correctly
5. Push to GitHub when complete

---

## **Task 1: Three-Page Personal Website**

**Objective:** Create a connected multi-page website with working navigation.

**Files to create:**
1. `index.html` - Home page
2. `about.html` - About page
3. `contact.html` - Contact page

**Requirements for EACH page:**
- Proper HTML5 structure
- Same navigation menu on all pages
- Consistent header and footer
- Comment block at top

**Navigation menu (on ALL pages):**
```html
<nav>
  <a href="index.html">Home</a> |
  <a href="about.html">About</a> |
  <a href="contact.html">Contact</a>
</nav>
```

**index.html content:**
- H1: "Welcome to My Website"
- 2-3 paragraphs introducing yourself
- Link to your about page
- Link to external site (your school, favorite website, etc.)

**about.html content:**
- H1: "About Me"
- Sections with IDs: education, interests, goals
- Navigation links to jump to sections
- At least 3 paragraphs

**contact.html content:**
- H1: "Get In Touch"
- Email link: `mailto:your@email.com`
- Phone link (fake number is okay): `tel:+14405551234`
- Links to social media (can be fake for practice)

---

## **Task 2: Anchor Link Practice**

**Objective:** Create a one-page site with internal navigation.

**Create:** `resources.html`

**Content Structure:**
1. Navigation at top with anchor links
2. Five sections with IDs
3. "Back to top" link in each section

**Required sections:**
- HTML Resources (#html)
- CSS Resources (#css)  
- JavaScript Resources (#javascript)
- Tools (#tools)
- Books (#books)

**Each section needs:**
- H2 heading with ID
- 2-3 paragraphs of content
- At least 2 external links to real resources
- "Back to top" anchor link

**Example:**
```html
<nav>
  <a href="#html">HTML</a> |
  <a href="#css">CSS</a> |
  <a href="#javascript">JavaScript</a> |
  <a href="#tools">Tools</a> |
  <a href="#books">Books</a>
</nav>

<section id="html">
  <h2>HTML Resources</h2>
  <p>Content...</p>
  <p><a href="https://www.w3schools.com" target="_blank">W3Schools</a></p>
  <p><a href="#top">Back to Top</a></p>
</section>
```

---

## **Task 3: Business Website**

**Objective:** Create a professional multi-page site structure.

**Files to create:**
1. `home.html`
2. `services.html`
3. `team.html`
4. `contact-us.html`

**Business:** Choose any fictional business (restaurant, shop, tech company, etc.)

**Requirements:**

**home.html:**
- Company name and tagline
- Brief description
- Links to all other pages
- "Call us" phone link
- "Email us" email link

**services.html:**
- H1: "Our Services"
- Three service sections with H2 headings
- Anchor links to jump to each service
- Link back to home

**team.html:**
- H1: "Meet the Team"
- Three team member bios
- Email link for each person
- Link back to home

**contact-us.html:**
- H1: "Contact Us"
- Email link
- Phone link
- Address (use paragraph with `<br />` for line breaks)
- Link to open Google Maps (external, new tab)
- Links back to all other pages

---

## **Task 4: Link Testing and Debugging**

**Objective:** Fix broken links and test navigation.

**Create:** `debug-links.html`

**Copy this broken code and fix it:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Link Debugging</title>
</head>
<body>
    <h1>Test Your Links</h1>
    
    <nav>
        <a href="home.html>Home</a>
        <a href=about.html">About</a>
        <a href="contact.html">Contact
    </nav>
    
    <h2>External Links</h2>
    <a href="www.google.com">Google</a>
    <a href="https://github.com" target="_blank>GitHub</a>
    
    <h2>Email and Phone</h2>
    <a href="mailto:test@example.com>Email Us</a>
    <a href="tel:4405551234">Call Us</a>
    
    <h2>Anchor Links</h2>
    <a href="section1">Go to Section 1</a>
    
    <section id="section1">
        <h3>Section 1</h3>
        <p>Content here</p>
        <a href="">Back to top</a>
    </section>
</body>
</html>
```

**Find and fix 10 errors!**

---

## **GitHub Submission**

**Repository name:** `html-lesson3`

**Required files:**
- index.html
- about.html
- contact.html
- resources.html
- home.html
- services.html
- team.html
- contact-us.html
- debug-links.html
- README.md

**README.md should include:**
- Your name
- Description of each page
- What you learned about links

---

## **Self-Assessment Checklist**

- [ ] All internal links work correctly
- [ ] External links open (and use target="_blank" appropriately)
- [ ] Email links open email program
- [ ] Phone links work on mobile
- [ ] Anchor links jump to correct sections
- [ ] Navigation is consistent across pages
- [ ] No broken links
- [ ] Link text is descriptive
- [ ] All code is properly formatted and commented

---

## **Common Mistakes to Avoid**

1. Forgetting quotes around href values
2. Misspelling file names (case sensitive!)
3. Forgetting `#` for anchor links
4. Missing `mailto:` or `tel:` for email/phone
5. Forgetting `https://` for external links
6. Not closing `</a>` tags
7. Putting navigation inside anchor tags
