# HTML14: Capstone Project — Multi-Page Responsive Website

## Project Overview

This is your **final project** for the 10-week Web Design course. You will design and build a complete, multi-page responsive website that demonstrates ALL of the skills you've learned this semester.

**Duration:** 5-6 class sessions (approximately 10-12 hours of lab work)
**Type:** Group or Individual Project (instructor determines)
**Deliverable:** Live website deployed to GitHub Pages + GitHub repository

### Project Goals

By completing this capstone, you will:

1. Plan and design a website using proper UX/UI principles (wireframes, sitemap, color/font strategy)
2. Write semantic, valid HTML5 code across multiple pages
3. Style websites with custom CSS (including responsive design techniques)
4. Add interactivity with JavaScript (form validation, dynamic features)
5. Ensure accessibility and SEO best practices
6. Test and validate your website
7. Deploy your work to the web using GitHub Pages
8. Reflect on your process and final product

---

## Project Requirements Checklist

Your website MUST include the following:

### Structure & Pages
- [ ] Minimum 4 pages: **Home**, **About**, **Services/Portfolio**, and **Contact**
- [ ] All pages linked via working navigation menu (consistent across all pages)
- [ ] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, etc.)
- [ ] Proper HTML document structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)

### Styling
- [ ] External CSS stylesheet (separate `.css` file, NOT inline styles)
- [ ] Custom styling (you must write your own CSS — Bootstrap is optional and supplementary)
- [ ] Consistent color palette (at least 3 colors throughout)
- [ ] At least 2 different fonts (one for headings, one for body text)
- [ ] Professional, cohesive visual design

### Responsive Design
- [ ] Website works on desktop (1024px+), tablet (600px-1024px), and mobile (< 600px)
- [ ] Either CSS media queries OR Bootstrap Grid system (or both)
- [ ] Responsive images (images scale with viewport or use `<picture>` element)
- [ ] Navigation adapts to smaller screens (hamburger menu, collapsible nav, or stacked layout)

### Forms & Interactivity
- [ ] At least one form (e.g., Contact form, Newsletter signup, Feedback form)
- [ ] Form has at least 3 input fields with appropriate types and labels
- [ ] JavaScript validates form before submission:
  - [ ] Required fields are not empty
  - [ ] Email format is valid (if email field exists)
  - [ ] At least one other validation rule (e.g., phone number format, minimum length)
- [ ] User receives feedback (alert, message, or DOM update) if validation fails or succeeds

### Content & Media
- [ ] At least one data table (e.g., pricing table, schedule, menu items, team members, etc.)
- [ ] All images have descriptive `alt` text
- [ ] All images are optimized (reasonable file size, appropriate format)
- [ ] Meaningful content for your site's theme (not placeholder text like "Lorem ipsum")
- [ ] At least 3-4 images across the site

### SEO & Accessibility
- [ ] Proper title tags on all pages (descriptive, under 60 characters)
- [ ] Meta descriptions on all pages (100-160 characters, explain page content)
- [ ] Heading hierarchy is correct (`<h1>` once per page, proper `<h2>`, `<h3>` structure)
- [ ] Color contrast meets WCAG AA standards (text is readable)
- [ ] Keyboard navigation works (all links/buttons reachable via Tab key)
- [ ] No accessibility warnings in DevTools Lighthouse audit

### Testing & Validation
- [ ] HTML passes W3C validation (https://validator.w3.org/) with NO errors
- [ ] CSS passes W3C validation (https://jigsaw.w3.org/css-validator/) with NO errors
- [ ] Tested in at least 2 different browsers (Chrome, Firefox, Safari, Edge, etc.)
- [ ] Lighthouse audit score of 80+ in all categories
- [ ] All links work (no 404 errors)

### Deployment
- [ ] Repository created on GitHub with descriptive name
- [ ] Website deployed to GitHub Pages (live, accessible link)
- [ ] GitHub repo is public and has a descriptive README.md
- [ ] All code is committed to GitHub with meaningful commit messages

---

## Project Ideas & Themes

Choose one of these themes or create your own:

1. **Small Business Website** (coffee shop, hair salon, fitness studio, photography, tutoring service)
2. **Portfolio Website** (showcase of creative work: art, design, music, writing, web design, photography)
3. **Nonprofit or School Organization** (club, community group, cause-driven organization)
4. **Restaurant or Cafe** (menu, hours, location, contact, reservations)
5. **Personal Brand / Resume** (about you, skills, projects, contact)
6. **Local Business Directory** (list of services in your area: plumbers, teachers, contractors)
7. **E-commerce Product Showcase** (display products with details, no actual checkout)
8. **Event or Conference Website** (agenda, speakers, registration, venue details)
9. **Blog or Resource Hub** (curated articles, tutorials, tips on a topic you care about)
10. **Game or Hobby Fansite** (rules, guides, community, contact)

---

## Timeline & Milestones

### Session 1: Planning (2 hours)
**Goal:** Define your project scope and create a roadmap

- [ ] Choose your website theme and identify your target audience
- [ ] Brainstorm 4 page ideas and what content belongs on each
- [ ] Create a sitemap (visual map of your pages and how they connect)
- [ ] Draw wireframes on paper for each page (layout sketch, not pixel-perfect)
- [ ] Choose your color palette (3-5 colors with hex codes)
- [ ] Choose 2 fonts (heading and body) from Google Fonts
- [ ] List the content (text, images, tables, forms) for each page
- [ ] Complete the **Planning Template** (html14_PlanningTemplate.md)

**Deliverable:** Completed planning template + hand-drawn wireframes

---

### Session 2: HTML Structure (2 hours)
**Goal:** Write semantic HTML for all 4 pages

- [ ] Create 4 HTML files: `index.html`, `about.html`, `services.html`, `contact.html`
- [ ] Write proper HTML5 boilerplate for each page (DOCTYPE, html, head, body tags)
- [ ] Add meta tags: `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] Add title and meta description tags to all pages
- [ ] Create semantic header with logo and navigation menu
- [ ] Create semantic footer (copyright, links, contact info)
- [ ] Add semantic section elements (`<section>`, `<article>`, `<aside>` where appropriate)
- [ ] Write all page content (text, headings, paragraphs)
- [ ] Add placeholder image tags with `alt` text (use Lorem Picsum or placeholder service)
- [ ] Create a table on one page (services or menu)
- [ ] Create a form on the contact page with appropriate input types
- [ ] Link all pages together via navigation menu

**Deliverable:** 4 valid HTML pages with working navigation

---

### Session 3: CSS & Responsive Design (2 hours)
**Goal:** Style all pages and make them responsive

- [ ] Create external `styles.css` file
- [ ] Import Google Fonts and apply to headings and body text
- [ ] Define color variables (CSS custom properties / variables)
- [ ] Style navigation bar (layout, colors, hover effects)
- [ ] Style main content areas (spacing, typography, alignment)
- [ ] Style footer
- [ ] Style table (borders, padding, alternating row colors)
- [ ] Style form elements (inputs, buttons, labels)
- [ ] Create responsive design:
  - [ ] Add CSS media queries for tablet (600px-1024px)
  - [ ] Add CSS media queries for mobile (< 600px)
  - [ ] Test on phone and tablet sizes
  - [ ] Navigation adapts (stacked menu, hamburger menu, or hidden nav)
  - [ ] Images scale and remain readable
  - [ ] Layout changes from multi-column to single column on mobile
- [ ] Add hover and active states to interactive elements
- [ ] Ensure color contrast is accessible

**Deliverable:** Styled website that looks great on all screen sizes

---

### Session 4: JavaScript & Interactivity (2 hours)
**Goal:** Add form validation and dynamic features

- [ ] Create external `script.js` file
- [ ] Add form validation:
  - [ ] Check that required fields are not empty
  - [ ] Validate email format (if email field exists)
  - [ ] Add at least 2 other validations (phone, number range, minimum length, etc.)
  - [ ] Show error messages if validation fails
  - [ ] Show success message if validation passes
  - [ ] Prevent form submission if validation fails
- [ ] Add at least one other interactive feature:
  - [ ] Smooth scrolling links
  - [ ] Toggle navigation menu (hamburger menu)
  - [ ] Image gallery or carousel
  - [ ] Modal popup
  - [ ] Scroll animations
  - [ ] Dynamic content switching
- [ ] Test JavaScript in console (no errors)

**Deliverable:** Working form validation + at least one interactive feature

---

### Session 5: Testing & Validation (1 hour)
**Goal:** Find and fix bugs, validate code

- [ ] Run W3C HTML Validator on all pages (fix all errors)
- [ ] Run W3C CSS Validator (fix all errors)
- [ ] Test in at least 2 different browsers:
  - [ ] Chrome, Firefox, Safari, or Edge
  - [ ] Check that everything looks and works the same
- [ ] Test on actual mobile device or use DevTools device emulation
- [ ] Check all links (no 404 errors, all navigation works)
- [ ] Test form validation with edge cases (empty fields, invalid email, etc.)
- [ ] Run Lighthouse audit in DevTools (aim for 80+ on all categories)
- [ ] Fix accessibility warnings (color contrast, alt text, etc.)
- [ ] Optimize images (compress file sizes)

**Deliverable:** Valid, tested, accessible website

---

### Session 6: Deployment & Polish (1 hour)
**Goal:** Deploy to GitHub Pages and finalize

- [ ] Create public GitHub repository with descriptive name
- [ ] Add README.md to your repo with:
  - [ ] Project title and description
  - [ ] Link to live website
  - [ ] List of features
  - [ ] Brief instructions on how to use the site
  - [ ] Credits (any resources, fonts, images used)
- [ ] Push all files to GitHub (HTML, CSS, JS, images)
- [ ] Enable GitHub Pages in repo settings (deploy from main branch)
- [ ] Test live website on GitHub Pages
- [ ] Make any final polish fixes (spacing, colors, content)
- [ ] Complete Self-Assessment (html14_SelfAssessment.md)

**Deliverable:** Live website, public GitHub repo, self-assessment

---

## Submission Requirements

Submit the following by the deadline:

1. **GitHub Repository URL** (public repo containing all your code)
2. **Live Website URL** (GitHub Pages link where your site is deployed)
3. **Self-Assessment** (completed html14_SelfAssessment.md file, committed to your repo)
4. **Planning Template** (html14_PlanningTemplate.md, showing your planning process)

### What to Include in Your GitHub Repo:
```
your-project-name/
├── index.html           (Home page)
├── about.html           (About page)
├── services.html        (Services/Portfolio page with table)
├── contact.html         (Contact page with form)
├── styles.css           (External stylesheet)
├── script.js            (JavaScript for validation and interactivity)
├── images/              (Folder for all images)
│   ├── logo.png
│   ├── hero.jpg
│   └── ... (other images)
├── README.md            (Project description and instructions)
├── html14_PlanningTemplate.md  (Your planning document)
└── html14_SelfAssessment.md    (Your self-assessment)
```

---

## Grading

Your project will be graded on a **100-point rubric** covering:

- **HTML Structure** (20 pts): Semantic elements, validity, proper setup
- **CSS Styling** (20 pts): Custom styles, color/font consistency, visual design
- **Responsive Design** (15 pts): Works on mobile, tablet, desktop
- **JavaScript & Forms** (15 pts): Form validation, interactivity, functionality
- **Content & Media** (10 pts): Images, table, meaningful content
- **SEO & Accessibility** (10 pts): Meta tags, heading hierarchy, color contrast, keyboard nav
- **Deployment & Testing** (10 pts): Live on GitHub Pages, validated, tested

See **html14_Rubric.md** for detailed point breakdowns.

---

## Tips for Success

1. **Plan first:** Don't skip the planning phase. Good planning makes coding faster.
2. **Mobile-first approach:** Write CSS for mobile first, then add media queries for larger screens.
3. **Test constantly:** Test your site in different browsers and screen sizes throughout development, not just at the end.
4. **Use DevTools:** Chrome DevTools is your best friend. Use the Console, Device Emulation, and Lighthouse tools.
5. **Accessibility matters:** Build accessibility in from the start (alt text, semantic HTML, color contrast).
6. **Commit often:** Make small, meaningful commits to GitHub as you work. This helps you track progress and recover if something breaks.
7. **Validate early:** Validate your HTML and CSS as you go, not just at the end. Errors are easier to fix when they're fresh.
8. **Ask for help:** Check the example solution (html14_ExampleSolution_*.html) if you get stuck.

---

## Resources

- **HTML Validation:** https://validator.w3.org/
- **CSS Validation:** https://jigsaw.w3.org/css-validator/
- **Google Fonts:** https://fonts.google.com/
- **Color Picker:** https://coolors.co/ or https://color.adobe.com/
- **Placeholder Images:** https://picsum.photos/ or https://placeholder.com/
- **Responsive Design Tester:** Chrome DevTools (F12, then Ctrl+Shift+M)
- **Lighthouse Audit:** Chrome DevTools (right-click > Inspect > Lighthouse tab)
- **MDN Web Docs:** https://developer.mozilla.org/
- **W3Schools Web Design:** https://www.w3schools.com/

---

## Academic Integrity

All work must be your own. You may:
- Use code from the course materials and example solutions as reference
- Use third-party libraries (Bootstrap, jQuery, etc.) with proper attribution
- Use stock images, fonts, and icons with proper licensing

You may NOT:
- Copy code from another student's project
- Use AI code generators to write your code for you
- Submit code that you do not understand

---

## Questions?

If you're stuck, refer to the **html14_ExampleSolution_*.html** files to see how a professional solution approaches each requirement.

Good luck! You've got this!
