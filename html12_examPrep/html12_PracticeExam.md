# html12 Practice Exam
## 40 Questions - Comprehensive Web Design Review

**Time Limit:** 60 minutes (45 minutes actual exam time)
**Passing Score:** 70% (28 out of 40 questions)

Instructions: Select the BEST answer for each question. Read carefully—some questions may have similar options.

---

## RESPONSIVE DESIGN & CSS LAYOUT (6 Questions)

**1. What is the purpose of the viewport meta tag?**
- a) It makes the page load faster on phones
- b) It tells mobile browsers to render the page at the device's width instead of pretending to be a desktop
- c) It enables CSS media queries
- d) It hides content on small screens

**2. In a mobile-first stylesheet, which media query correctly adds tablet styles?**
- a) `@media (max-width: 768px)`
- b) `@media (min-width: 768px)`
- c) `@media (tablet)`
- d) `@media screen and (device: tablet)`

**3. A flex container has `justify-content: space-between`. What does this control?**
- a) Spacing along the main axis
- b) Spacing along the cross axis
- c) The gap between lines of wrapped items
- d) The alignment of text inside each item

**4. What makes CSS Grid different from flexbox?**
- a) Grid is newer and replaces flexbox
- b) Grid lays out rows AND columns at once; flexbox works in one direction at a time
- c) Grid only works on desktop browsers
- d) Flexbox cannot center items

**5. Which CSS makes images scale down inside their container instead of overflowing?**
- a) `img { size: contain; }`
- b) `img { max-width: 100%; height: auto; }`
- c) `img { overflow: hidden; }`
- d) `img { width: fit; }`

**6. Why does responsive design matter for competency 2.7.2 ("describe ways to present data")?**
- a) It doesn't — they're unrelated
- b) A responsive website is one of the ways to deliver content, alongside mobile apps, desktop apps, and web apps
- c) Responsive design is only about SEO
- d) Because Bootstrap requires it

---

## HTML FORMS (6 Questions)

**7. In an HTML form, what does the `action` attribute specify?**
- a) The validation rules for form inputs
- b) The URL or script where form data is sent
- c) The styling of form elements
- d) The JavaScript function to execute on submit

**8. What is the main difference between GET and POST methods in HTML forms?**
- a) GET is faster, POST is slower
- b) GET sends data in URL, POST sends in message body
- c) GET is secure, POST is not secure
- d) GET uses JavaScript, POST uses HTML

**9. If you want a user to select ONLY ONE option from a group of choices, which input type should you use?**
- a) Checkbox
- b) Text
- c) Radio button
- d) Select dropdown (both radio and select work, but radio is traditional in groups)

**10. What is the purpose of the `<fieldset>` and `<legend>` elements in a form?**
- a) To create a border around the entire form
- b) To group related form controls and provide a title for the group
- c) To validate form inputs
- d) To hide form elements from the page

**11. What attribute must be included with every `<label>` element to properly associate it with an input?**
- a) `name`
- b) `id`
- c) `for` (matching the input's `id`)
- d) `value`

**12. Which HTML input type is best used for collecting an email address with built-in validation?**
- a) `type="text"`
- b) `type="email"`
- c) `type="mail"`
- d) `type="password"`

---

## SEO (5 Questions)

**13. What is the ideal character length for a page title tag to display fully in search results?**
- a) 30-40 characters
- b) 50-60 characters
- c) 100-120 characters
- d) 150+ characters

**14. What does the meta description tag control?**
- a) The browser tab title
- b) The page keywords for SEO
- c) The summary text shown in search results
- d) The page's mobile responsiveness

**15. How many H1 (heading level 1) tags should appear on a single page?**
- a) None (use H2 instead)
- b) One
- c) One per section
- d) As many as needed for the content

**16. Why should images always have alt text?**
- a) To improve CSS styling
- b) To load faster on mobile
- c) To help screen readers and improve SEO when images don't load
- d) To add tooltips to images

**17. Which of these practices is MOST important for SEO?**
- a) Using the word "SEO" multiple times
- b) Having a unique, descriptive title tag and meta description
- c) Making text very small so more fits on page
- d) Using many different fonts and colors

---

## ACCESSIBILITY (5 Questions)

**18. What does ADA stand for?**
- a) Advanced Digital Access
- b) Americans with Disabilities Act
- c) Accessible Design Association
- d) Application Data Architecture

**19. What is the correct contrast ratio for text to meet WCAG AA standards?**
- a) 1.5:1
- b) 3:1
- c) 4.5:1
- d) 7:1

**20. What is the main purpose of ARIA attributes in HTML?**
- a) To make websites faster
- b) To provide additional semantic information to assistive technologies
- c) To replace HTML semantic elements
- d) To style elements with accessibility in mind

**21. Which of the following is NOT a common accessibility barrier?**
- a) Images without alt text
- b) Forms without labels
- c) Using relative units like percentages
- d) Keyboard inaccessible buttons

**22. How should a website support users who cannot see?**
- a) By using only text (no images)
- b) By providing alt text for images and using a screen reader
- c) By making colors very bright
- d) By removing all interactive elements

---

## PROTOCOLS & DEPLOYMENT (4 Questions)

**23. What is the primary security advantage of HTTPS over HTTP?**
- a) HTTPS is faster
- b) HTTPS is free while HTTP costs money
- c) HTTPS encrypts data transmission with SSL/TLS
- d) HTTPS requires no certificates

**24. What does DNS (Domain Name System) do?**
- a) Encrypts website data
- b) Converts domain names to IP addresses
- c) Validates HTML code
- d) Backs up website files

**25. Where does a Git commit store changes?**
- a) Directly to GitHub's servers
- b) Locally on your computer's repository
- c) In a temporary cache only
- d) On the web server only

**26. After pushing code to GitHub and enabling GitHub Pages, what is the URL format for a project site?**
- a) `github.com/username/project-name`
- b) `username.github.io/project-name`
- c) `github-pages.com/username/project-name`
- d) `project-name.github.io`

---

## TESTING & DEPLOYMENT (4 Questions)

**27. What is the purpose of the W3C HTML Validator?**
- a) To check if a website is responsive
- b) To verify HTML code conforms to standards
- c) To test JavaScript functionality
- d) To check search engine rankings

**28. Which browser developer tool would you use to see network requests and response times?**
- a) Console tab
- b) Inspector tab
- c) Network tab
- d) Storage tab

**29. Before publishing a website, which of these should NOT be tested?**
- a) Different browsers (Chrome, Firefox, Safari, Edge)
- b) Mobile and desktop screen sizes
- c) The developer's personal favorites feature
- d) Keyboard navigation accessibility

**30. What does it mean if you get a 404 error?**
- a) The page loaded successfully
- b) The server is down
- c) The requested resource/file was not found
- d) The user's internet connection failed

---

## TROUBLESHOOTING METHODS (4 Questions)

**31. You have a JavaScript error in the console but need to identify where it's occurring. Which troubleshooting method is BEST?**
- a) Top-Down (start with overall structure)
- b) Bottom-Up (start with the error, trace up)
- c) Follow the Path (trace data flow)
- d) Spot the Differences (compare old vs new)

**32. Your form submits correctly, but data isn't saved to the database. Which troubleshooting method should you use?**
- a) Top-Down (check HTML, CSS, JS in order)
- b) Bottom-Up (check error messages first)
- c) Follow the Path (trace data from form → handler → database)
- d) Spot the Differences (compare form to similar working form)

**33. A button in your layout disappeared after you updated the CSS. Which troubleshooting method is BEST?**
- a) Top-Down
- b) Bottom-Up
- c) Follow the Path
- d) Spot the Differences (use Git diff to see CSS changes)

**34. Your page renders fine in Chrome but breaks in another browser. Which troubleshooting move comes FIRST?**
- a) Rewrite the page from scratch
- b) Identify and define the problem — exactly what breaks, where, and in which browser
- c) Add vendor prefixes to every CSS rule
- d) Tell users to switch browsers

---

## BUSINESS, ETHICS & PROFESSIONAL SKILLS (6 Questions)

**35. You want to use an image from Getty Images on your website. What should you do?**
- a) Use it anyway; images on the internet are free
- b) Check the licensing terms and either pay for license or use Creative Commons image instead
- c) Crop or resize it so it's technically different
- d) Use it but remove the watermark

**36. What legal consequence can a company face for not making their website accessible?**
- a) None—accessibility is optional
- b) Small fine ($100-500)
- c) Lawsuits and settlements that can exceed $50,000
- d) Automatic loss of domain name

**37. A client asks you to build a website but hasn't clearly defined what they want. What is the BEST first step?**
- a) Start building immediately to show progress
- b) Create a Design Brief to document requirements, scope, timeline, and stakeholders
- c) Build what you think they want
- d) Ask them to email you their ideas (informal is fine)

**38. What is included in a project's "scope"?**
- a) Only the budget
- b) What is included AND explicitly what is NOT included
- c) Only the timeline
- d) The color scheme of the website

**39. Your manager asks you to share a client's database password in a shared Google Doc so the team can access it. What should you do?**
- a) Share it in the document as requested
- b) Share it but make the document private first
- c) Refuse—sensitive credentials should NEVER be shared in documents; direct the person to input password themselves
- d) Share it in an encrypted format

**40. What is the PRIMARY purpose of having a professional portfolio?**
- a) To show off your best work and capabilities to potential employers
- b) To store old projects you're not proud of
- c) To prove you know HTML
- d) To replace a resume

---

---

# ANSWER KEY & EXPLANATIONS

## RESPONSIVE DESIGN & CSS LAYOUT

**1. b) It tells mobile browsers to render at device width**
- Without `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, phones render a zoomed-out desktop layout and your media queries never get a chance to work.

**2. b) `@media (min-width: 768px)`**
- Mobile-first means base styles are for phones and min-width queries ADD styles as screens grow. max-width queries are the desktop-first approach.

**3. a) Spacing along the main axis**
- justify-content distributes items along the main axis (row direction by default). align-items handles the cross axis.

**4. b) Grid does rows AND columns; flexbox is one direction**
- That's the whole distinction both exams want: Grid is two-dimensional, flexbox is one-dimensional.

**5. b) `max-width: 100%; height: auto;`**
- The standard responsive-image rule: never wider than the container, height scales to keep proportions.

**6. b) A responsive website is one way to present data among several**
- Competency 2.7.2 lists responsive web design alongside mobile apps, desktop apps, and web applications as delivery options.

## HTML FORMS

**7. b) The URL or script where form data is sent**
- The `action` attribute points to where the form submits. Example: `<form action="process.php">` sends to process.php.

**8. b) GET sends data in URL, POST sends in message body**
- This is the fundamental difference. GET is visible in URL (less secure, bookmarkable). POST is hidden (more secure, longer limits).

**9. c) Radio button**
- Radio buttons enforce single selection from a group. Checkboxes allow multiple. Select dropdowns also allow single but radio is traditional for grouped options.

**10. b) To group related form controls and provide a title for the group**
- `<fieldset>` groups related inputs, `<legend>` provides the title. Great for accessibility and organization.

**11. c) `for` (matching the input's `id`)**
- The label's `for` attribute must match the input's `id`. Example: `<label for="email">` paired with `<input id="email">`. This is crucial for accessibility.

**12. b) `type="email"`**
- type="email" provides built-in validation for email format and shows numeric keyboard on mobile. Better than plain text for this use case.

## SEO

**13. b) 50-60 characters**
- Google typically displays 50-60 characters of title tags in search results. Going over risks truncation.

**14. c) The summary text shown in search results**
- The meta description appears under the title in search results. Google may rewrite it but it's still important. Character limit: 150-160.

**15. b) One**
- Best practice is one H1 per page representing the main topic. Multiple H1s confuse screen readers and dilute SEO focus.

**16. c) To help screen readers and improve SEO when images don't load**
- Alt text serves two purposes: (1) Screen readers read it aloud for visually impaired users, (2) If image fails to load, alt text displays. Also helps SEO.

**17. b) Having a unique, descriptive title tag and meta description**
- These are foundational SEO elements that directly impact search results. Keyword stuffing, font tricks, and misleading titles violate search guidelines.

## ACCESSIBILITY

**18. b) Americans with Disabilities Act**
- ADA is the federal law requiring websites to be accessible to people with disabilities.

**19. c) 4.5:1**
- WCAG AA (industry standard) requires 4.5:1 contrast for normal text. AAA requires 7:1. Most websites should target AA.

**20. b) To provide additional semantic information to assistive technologies**
- ARIA = Accessible Rich Internet Applications. ARIA attributes help screen readers understand complex components like modals, dropdowns, and custom widgets.

**21. c) Using relative units like percentages**
- Percentages are actually good for accessibility (scalable, responsive). The other three are real barriers: missing alt text, missing labels, inaccessible buttons.

**22. b) By providing alt text for images and using a screen reader**
- Screen readers read alt text aloud. Images should be kept but must have proper alt descriptions. Text-only is not the solution.

## PROTOCOLS & DEPLOYMENT

**23. c) HTTPS encrypts data transmission with SSL/TLS**
- HTTPS = HTTP + SSL/TLS encryption. This protects sensitive data from being intercepted. Required for logins, payments, any sensitive data.

**24. b) Converts domain names to IP addresses**
- When you type example.com, DNS looks it up and returns the server's IP address (e.g., 192.0.2.1). It's like a phone book for the internet.

**25. b) Locally on your computer's repository**
- `git commit` saves changes to your LOCAL repo (.git folder). `git push` then uploads to GitHub. Commits aren't on the server until pushed.

**26. b) `username.github.io/project-name`**
- GitHub Pages format: `username.github.io` for user site (from repo named username.github.io), or `username.github.io/repo-name` for project sites.

## TESTING & DEPLOYMENT

**27. b) To verify HTML code conforms to standards**
- W3C HTML Validator (validator.w3.org) checks if your HTML is valid. W3C CSS Validator checks CSS. They help catch errors.

**28. c) Network tab**
- The Network tab shows HTTP requests, response status, file sizes, load times. Inspector shows HTML/CSS. Console shows errors/logs. Storage shows data.

**29. c) The developer's personal favorites feature**
- Wrong question. Should NOT be tested is "personal favorites" is not a standard feature. All others ARE important: browsers, screen sizes, accessibility, functionality.

**30. c) The requested resource/file was not found**
- 404 = Not Found. The server understood the request but can't find the file. Examples: broken link, deleted page, wrong filename.

## TROUBLESHOOTING METHODS

**31. b) Bottom-Up (start with the error, trace up)**
- You have a specific error in console. Start there and trace backward. This is textbook Bottom-Up troubleshooting.

**32. c) Follow the Path (trace data from form → handler → database)**
- Data flow issue: form → handler → database. Follow the path. Check: Does form submit? Does handler execute? Does database receive data? Follow data flow.

**33. d) Spot the Differences (use Git diff to see CSS changes)**
- Something just broke—perfect for Spot the Differences. `git diff` shows exactly what CSS changed. Inspector shows current styles vs expected.

**34. b) Identify and define the problem first**
- Every troubleshooting methodology (top-down, bottom-up, spot-the-differences) starts the same way: pin down exactly what the problem is before touching anything. That's competency 2.11.1.

## BUSINESS, ETHICS & PROFESSIONAL SKILLS

**35. b) Check the licensing terms and either pay for license or use Creative Commons image instead**
- All creative work is copyright-protected by default. Must check permissions. Getty Images requires payment. Use Creative Commons (free, with attribution) or licensed sources instead.

**36. c) Lawsuits and settlements that can exceed $50,000**
- ADA lawsuits are real and increasing. Settlements commonly range $35,000-$50,000+. It's also the right thing to do ethically.

**37. b) Create a Design Brief to document requirements, scope, timeline, and stakeholders**
- A Design Brief prevents misunderstandings. It documents what's included, timeline, stakeholders, and success criteria before work starts.

**38. b) What is included AND explicitly what is NOT included**
- Scope clarity prevents scope creep. "Include redesigned homepage" and "Exclude mobile app development" are both important.

**39. c) Refuse—sensitive credentials should NEVER be shared in documents**
- Passwords, API keys, database credentials should NEVER go in shared docs, email, or untrusted places. Direct people to input themselves or use secure credential management.

**40. a) To show off your best work and capabilities to potential employers**
- Your portfolio is your visual resume. It shows employers what you can do. Quality projects matter more than quantity.

---

## SCORE INTERPRETATION

- **36-40 (90-100%):** Excellent! You're ready for the exam.
- **32-35 (80-89%):** Good understanding. Review weak areas.
- **28-31 (70-79%):** Passing. Focus on areas scoring < 70%.
- **Below 28 (< 70%):** Study more. Review Master Study Guide and redo practice exam.

## Tips for Actual Exam

1. **Read questions twice** - Carefully read each question and all options
2. **Skip hard ones** - Don't waste time; come back if time permits
3. **Eliminate obvious wrong answers** - Narrows down choices
4. **Look for "NOT" and "BEST"** - These change the question
5. **Trust your knowledge** - You have built every one of these topics with your own hands this semester
6. **Manage time** - 60 questions in 60 minutes ≈ 1 minute per question

**Good luck! You've got this!**
