# html10 Study Guide: Site Quality and Publishing

Print this and keep it. It covers everything in html10: SEO, accessibility, proofreading, testing, troubleshooting, publishing, and the "how the web works" vocabulary that shows up on the certification exams.

## Table of Contents

1. [Vocabulary](#vocabulary)
   - [SEO terms](#seo-terms)
   - [Accessibility terms](#accessibility-terms)
   - [Quality and testing terms](#quality-and-testing-terms)
   - [Publishing terms](#publishing-terms)
   - [How the web works terms](#how-the-web-works-terms)
2. [SEO Cheat Sheet](#seo-cheat-sheet)
3. [Accessibility Cheat Sheet](#accessibility-cheat-sheet)
4. [Proofreading Checklist](#proofreading-checklist)
5. [Testing Cheat Sheet](#testing-cheat-sheet)
6. [Troubleshooting Methods](#troubleshooting-methods)
7. [Publishing with Firebase Hosting](#publishing-with-firebase-hosting)
8. [How a Web Page Reaches You](#how-a-web-page-reaches-you)
9. [Comparison Tables](#comparison-tables)
10. [SEO and Accessibility Work Together](#seo-and-accessibility-work-together)
11. [Ohio Competencies Covered](#ohio-competencies-covered)
12. [Practice Questions](#practice-questions)
13. [Answers to Practice Questions](#answers-to-practice-questions)

---

## Vocabulary

### SEO terms

| Term | Meaning |
|---|---|
| **SEO** | Search Engine Optimization. Building a page so search engines can find, understand, and rank it. |
| **Search engine** | Software that finds pages and returns results for a search (Google, Bing, DuckDuckGo). |
| **Crawler** | A program (like Googlebot) that visits pages, reads them, and follows their links to find more pages. |
| **Index** | The search engine's database of every page it has read. Only indexed pages show up in results. |
| **Rank** | A page's position in search results. Rank 1 is the top result. |
| **SERP** | Search Engine Results Page. The list of results you see after you search. |
| **Title tag** | `<title>` in the `<head>`. Shows as the headline in search results and on the browser tab. About 60 characters. |
| **Meta description** | `<meta name="description" content="...">`. The summary under the title in search results. About 150-160 characters. |
| **Heading hierarchy** | Headings in outline order: one `<h1>`, then `<h2>` for sections, `<h3>` inside those. No skipped levels. |
| **Alt text** | The `alt` attribute on `<img>`. Describes the image for search engines and screen readers. |
| **Keyword** | A word or phrase people type into a search engine. Use it naturally in titles, headings, and text. |
| **Keyword stuffing** | Repeating a keyword over and over to trick search engines. It hurts ranking. |
| **Organic traffic** | Visitors who come from search results, not from ads. |
| **Descriptive link text** | Link words that say where the link goes ("see our menu"), not "click here." |

### Accessibility terms

| Term | Meaning |
|---|---|
| **Accessibility** | Making a site usable by everyone, including people with disabilities (vision, hearing, movement, reading). |
| **ADA** | Americans with Disabilities Act. U.S. law protecting people with disabilities. Courts have applied it to websites. |
| **WCAG** | Web Content Accessibility Guidelines. The W3C's accessibility rules. Level AA is the normal target. |
| **Screen reader** | Software that reads a page aloud or sends it to a braille display. Examples: VoiceOver (Mac), NVDA and JAWS (Windows). |
| **Assistive technology** | Any tool that helps a person with a disability use a computer: screen readers, magnifiers, voice control, special keyboards. |
| **Semantic HTML** | Using tags that say what content is: `<header>`, `<nav>`, `<main>`, `<footer>`, `<button>`, `<a>`. The opposite is "div soup." |
| **Label** | `<label for="id">` connected to a form input with the matching `id`. Tells users what goes in the box. |
| **Keyboard navigation** | Using a site with only the keyboard: Tab, Shift + Tab, Enter, Space. |
| **Tab order** | The order Tab moves through links, buttons, and inputs. It follows the order of the HTML. |
| **Focus indicator** | The outline showing which element the keyboard is on. Never hide it. |
| **Color contrast** | The difference between text color and background color. Normal text needs 4.5 to 1 (WCAG AA). Large text needs 3 to 1. |
| **ARIA** | Accessible Rich Internet Applications. Attributes that give screen readers extra information. |
| **aria-label** | Gives a name to an element with no readable text, like an icon button: `<button aria-label="Close menu">×</button>`. The only ARIA attribute this course uses. |

### Quality and testing terms

| Term | Meaning |
|---|---|
| **Proofreading** | Reading content carefully to catch spelling, grammar, and fact mistakes before the public sees them. |
| **Web standards** | The official rules for how HTML and CSS should be written and displayed. |
| **W3C** | World Wide Web Consortium. The group that writes the HTML and CSS standards. |
| **Validator** | A tool that checks code against the standards. HTML: validator.w3.org. CSS: jigsaw.w3.org/css-validator. |
| **Cross-browser testing** | Checking a site in more than one browser (Chrome, Safari, Firefox, Edge). |
| **Cross-device testing** | Checking a site at different screen sizes (phone, tablet, laptop). A quick way: narrow the browser window. |
| **Usability** | How easy a site is to use. Tested by watching a real person use it. |
| **Usability checklist** | A list of things to check as a visitor: links work, nav is the same everywhere, text is readable, forms explain errors. |
| **Troubleshooting** | Finding and fixing the cause of a problem using a method, not guessing. |

### Publishing terms

| Term | Meaning |
|---|---|
| **Publish / deploy** | Put a site on a web server so anyone can visit it. |
| **Web server** | A computer that stores website files and sends them to browsers that ask. |
| **Client** | The device and browser that asks for and shows the page (your laptop or phone). |
| **Hosting / web host** | A service that runs the web server for you. |
| **Firebase Hosting** | Google's web host. Free for static sites like ours. Sites get a `web.app` address. |
| **CLI** | Command-line interface. A program you control by typing commands. We type three Firebase commands: `firebase login`, `firebase init hosting`, `firebase deploy --only hosting`. |
| **Repository (repo)** | A project folder tracked by Git and stored on GitHub. Ours is `htmlCssJavaScript`. |
| **Commit** | A saved snapshot of your changes, with a short summary message. |
| **Push** | Sending your commits from your computer up to GitHub ("Push origin" in GitHub Desktop). |
| **Relative path** | A path from the current file, like `images/cake.png`. Works on your computer and online. |
| **Absolute path** | A full path, like `/Users/jsmith/Desktop/cake.png`. Works only on that one computer. |
| **404 error** | "Not found." The server has no file at that address. Usually a typo or a capital letter mismatch. |

### How the web works terms

| Term | Meaning |
|---|---|
| **Protocol** | An agreed set of rules for how computers talk to each other. |
| **HTTP** | HyperText Transfer Protocol. The rules browsers and servers use to request and send web pages. Not encrypted. |
| **HTTPS** | HTTP Secure. HTTP with encryption. Shown by the lock icon. Use it for logins, forms, and payments. |
| **FTP** | File Transfer Protocol. An older way to upload and download files to a server. Not encrypted. SFTP is the secure version. |
| **TCP/IP** | Transmission Control Protocol / Internet Protocol. The base rules of the internet. TCP breaks data into packets and checks they arrive in order. IP addresses and routes the packets. |
| **Packet** | A small piece of data sent across the internet. Big files are split into many packets. |
| **IP address** | A number that identifies a device on the internet, like `140.82.112.3`. |
| **DNS** | Domain Name System. Turns a domain name into an IP address. The internet's phone book. |
| **Domain name** | The human-readable name of a site, like `github.com`. |
| **URL** | Uniform Resource Locator. The full address: `https://github.com/about`. |
| **Static site** | The server sends the same stored files to every visitor. HTML, CSS, JS only. Your site is static. |
| **Dynamic site** | The server builds pages for each visitor, often from a database. Instagram, Gmail, Amazon. |
| **Database** | An organized store of data that a dynamic site or CMS reads from and writes to. |
| **Bandwidth** | How much data can move per second. Measured in Mbps. |
| **Latency** | How long one round trip takes. Measured in milliseconds (ms). |
| **Browser plug-in** | Extra software a browser loaded to show content it could not show by itself (Adobe Flash, Java applets, Silverlight). Replaced by HTML5. Flash ended in 2020. |
| **Browser extension** | An add-on that gives the browser a new feature (ad blocker, password manager). What most people mean by "add-on" today. |
| **CMS** | Content Management System. Software for building and editing a site from a dashboard without writing HTML. Content in a database, look from a theme. Example: WordPress. |
| **Theme / template** | In a CMS, the design that controls how every page looks. |
| **Responsive website** | One site whose layout adjusts to any screen size (media queries). |
| **Web app** | A website that works like a program in the browser (Google Docs, Canva). |
| **Mobile app** | A program installed on a phone from an app store. |
| **Desktop app** | A program installed on a computer (Audacity, GitHub Desktop). |

---

## SEO Cheat Sheet

| Item | Do | Do not |
|---|---|---|
| Title | Unique per page, about 60 characters, page name + site name | "Home", "Document", the same title on every page |
| Meta description | Unique per page, 150-160 characters, says what the page offers | Leave it out or copy it to every page |
| Headings | One `<h1>`, then `<h2>`, `<h3>` in order | Skip levels, pick a heading for its size |
| Alt text | Short description of what is in the picture | "image", "photo", the file name, "picture of..." |
| Decorative images | `alt=""` | Leave out `alt` completely |
| Link text | Says where it goes | "click here", "link", "here" |
| Keywords | Natural use in title, h1, description, text | Stuffing the same phrase over and over |
| File names | `fresh-bread.png`, `about.html` | `IMG_4032.PNG`, `Page 2.html` |

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Unique title: page name + site name -->
  <title>Gallery - Sweet Crumb Bakery</title>
  <!-- Unique summary for search results -->
  <meta name="description" content="Photos of our fresh bread, pastries, and custom cakes from Sweet Crumb Bakery in Medina, Ohio.">
  <link rel="stylesheet" href="styles.css">
</head>
```

---

## Accessibility Cheat Sheet

| Item | Do | Do not |
|---|---|---|
| Structure | `<header>`, `<nav>`, `<main>`, `<footer>` | All `<div>` |
| Form inputs | `<label for="email">` + `<input id="email">` | Placeholder only, or a label with no `for` |
| Buttons | `<button>` | `<div onclick>` |
| Links | `<a href="page.html">` | `<span onclick>` |
| Focus | Visible outline on `:focus` | `outline: none` |
| Contrast | 4.5 to 1 for normal text, in light and dark mode | Light gray on white, yellow on white |
| Color | Color plus words or icons | Color as the only signal |
| Icon-only controls | `aria-label="What it does"` | An emoji with no name |

```css
/* Visible focus outline for keyboard users */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 3px solid #1a5fb4;  /* dark blue */
  outline-offset: 2px;         /* small gap around the element */
}
```

```html
<!-- Icon button with a name a screen reader can say -->
<button id="theme-toggle" aria-label="Switch dark mode on or off">🌙</button>
```

**Keyboard keys:** Tab = next, Shift + Tab = back, Enter = follow link or press button, Space = press button or check a box. In Safari on a Mac, Option + Tab reaches links.

---

## Proofreading Checklist

- [ ] Read every page out loud, slowly
- [ ] Spelling, capital letters, punctuation
- [ ] Common mix-ups: your/you're, their/there/they're, its/it's
- [ ] Names, prices, dates, phone numbers, emails are correct
- [ ] Site name spelled the same on every page
- [ ] No "Lorem ipsum", "TODO", or leftover template text
- [ ] A partner has read it

---

## Testing Cheat Sheet

**HTML validator:** https://validator.w3.org/ -> Validate by File Upload -> Check. Fix the first error, then check again.

**CSS validator:** https://jigsaw.w3.org/css-validator/ -> By file upload -> Check. Warnings about `var(--...)` custom properties are OK.

| Validator message | Usual cause |
|---|---|
| Element `title` must not be empty | Blank `<title></title>` |
| An `img` element must have an `alt` attribute | Missing `alt` |
| Duplicate ID | Two elements share one `id` |
| Stray end tag | Extra closing tag, or missing opening tag |
| The `for` attribute of the `label` element must refer to... | `for` does not match any `id` |

**Two browsers and a narrow window:** open the site in two browsers, click every link, check images, video, dark mode, and the form, then narrow the window to phone width.

**Usability checklist:**
- [ ] Clear what the site is about in 5 seconds
- [ ] Same nav in the same place on every page
- [ ] Every link works; no 404s
- [ ] Every image shows
- [ ] Text is easy to read
- [ ] Form explains what is wrong
- [ ] Works in a narrow window
- [ ] Works with only the keyboard

**Optional free checkers (if the school filter allows):** WAVE (wave.webaim.org) for accessibility and PageSpeed Insights (pagespeed.web.dev) for performance, accessibility, and SEO scores. Both need a live URL.

---

## Troubleshooting Methods

| Method | How it works | Example |
|---|---|---|
| **Top-down** | Start at the big picture, then narrow down. | Does the site load? The page? The CSS file? The one rule? |
| **Bottom-up** | Start at the smallest detail, then work up. | Check the CSS rule, then the `<link>`, then the page. |
| **Follow the path** | Trace each step the click or data takes. | Button click -> script loads -> function runs -> page changes. Where does it stop? |
| **Spot the differences** | Compare a working thing with a broken thing. | `about.html` is styled, `gallery.html` is not. Compare their `<head>` sections. |

Most common cause of "works on my computer, broken online": a wrong **file path** or **capital letters** that do not match.

---

## Publishing with Firebase Hosting

We publish with **Firebase Hosting** (free, from Google). The school network blocks GitHub Pages. You still commit and push to GitHub with GitHub Desktop. Firebase is what puts the site online.

**1. Commit and push (GitHub Desktop)**
1. Current repository: `htmlCssJavaScript`
2. Check the Changes list
3. Type a Summary
4. **Commit to main**
5. **Push origin**

**2. Make a Firebase project (browser)**
1. Go to **console.firebase.google.com** and sign in with your school Google account
2. **Add project**, named like `diywebsite-lastname`
3. Turn **off** Google Analytics, then **Create project**
4. Hosting on the free Spark plan is free. No credit card.

**3. Set up the computer (one time only)**
1. Open the `DiyWebsite_Lastname` folder in VS Code, then **Terminal > New Terminal** (it opens in that folder)
2. `node -v` (should show a version number)
3. `npm install -g firebase-tools`
4. `firebase login` (sign in with the same Google account)

**4. Connect the folder: `firebase init hosting`**

| Question | Answer |
|---|---|
| Project setup | **Use an existing project**, then pick yours |
| Public directory | `.` (a single period = "this folder") |
| Single-page app? | **No** |
| Automatic builds and deploys with GitHub? | **No** |
| Overwrite index.html? | **NO.** Yes replaces your Home page. |

This creates `firebase.json` and `.firebaserc`. That is normal. Commit them.

**5. Deploy: `firebase deploy --only hosting`**

It prints your **Hosting URL**:
```
https://diywebsite-lastname.web.app
```

**6. Updating later:** save, commit and push in GitHub Desktop, then run `firebase deploy --only hosting` again. Pushing alone does not update the live site.

**Rules:** Use relative paths. File name capitals must match exactly. Keep every file your site uses inside the `DiyWebsite_Lastname` folder.

**If something goes wrong**

| Problem | Fix |
|---|---|
| `firebase: command not found` | Tools not installed, or the terminal was open before you installed them. Open a new terminal and try again. |
| Permission error on `npm install -g` | Tell Mr. McMaster. |
| Wrong page or a Firebase "Welcome" page shows | Open `firebase.json`. `"public"` should be `"."`. If `index.html` was overwritten, discard that change in GitHub Desktop. Deploy again. |
| Old version still shows | Deploy again, then hard refresh (Cmd + Shift + R). |

---

## How a Web Page Reaches You

When you type `https://github.com` and press Enter:

1. **DNS** looks up the IP address for `github.com`.
2. **TCP/IP** opens a connection to that server and moves the data in packets.
3. The browser sends an **HTTPS** request (encrypted).
4. The **server** sends back the HTML, CSS, JavaScript, and images.
5. The browser reads the HTML, applies the CSS, runs the JavaScript, and shows the page.

How fast this feels depends on **bandwidth** (how much data per second) and **latency** (how long each trip takes).

---

## Comparison Tables

### HTTP vs HTTPS vs FTP

| | HTTP | HTTPS | FTP |
|---|---|---|---|
| Used for | Web pages | Web pages | Uploading files to a server |
| Encrypted? | No | Yes (lock icon) | No (SFTP is) |

### Static vs dynamic

| | Static | Dynamic |
|---|---|---|
| Content | Same for every visitor | Built per visitor |
| Needs a database? | No | Usually |
| Examples | Portfolio, small business site, your DIY site | Social media, email, online stores, CMS sites |
| Hosting | Any simple web host works (Firebase Hosting) | Needs a server that runs code |

### Bandwidth vs latency

| | Bandwidth | Latency |
|---|---|---|
| Means | How much data per second | How long one trip takes |
| Unit | Mbps | ms |
| Truck example | How much the truck carries | How long the drive is |
| Designer's fix | Smaller files (compress images) | Fewer files |

### Plug-in vs extension

| | Plug-in (old) | Extension (today) |
|---|---|---|
| Does | Lets the browser show a new kind of content | Adds a feature to the browser |
| Examples | Flash, Java applets, Silverlight | Ad blocker, password manager |
| Status | Replaced by HTML5; Flash ended 2020 | Common |

### Hand-coded site vs CMS

| | Hand-coded (static) | CMS (WordPress) |
|---|---|---|
| How you edit | Change HTML/CSS files | Dashboard, no code needed |
| Content stored in | Files | Database |
| Look comes from | Your CSS | A theme |
| Upkeep | Very little | Updates, backups, security patches |

### Ways to present data

| Way | What it is | Good because |
|---|---|---|
| Responsive website | One site that fits every screen | Cheapest way to reach every device |
| Web app | Program that runs in a browser | Nothing to install |
| Mobile app | Installed on a phone | Can use camera, GPS, notifications |
| Desktop app | Installed on a computer | Works offline, full power of the computer |

---

## SEO and Accessibility Work Together

| Practice | Helps SEO because... | Helps accessibility because... |
|---|---|---|
| Alt text | Search engines learn what images show | Screen readers describe images |
| Heading order | Search engines see the page outline | Screen reader users jump by heading |
| Semantic HTML | Search engines find the main content | Screen readers find regions |
| Descriptive link text | Search engines learn what the linked page is | Link lists make sense out loud |
| Clear title | Headline in search results | First thing a screen reader announces |

---

## Ohio Competencies Covered

| Code | What it means in this lesson |
|---|---|
| 6.5.14 | Search engine optimization: titles, meta descriptions, headings, alt, keywords, file names |
| 6.1.2 | Plan for accessibility (ADA) |
| 2.7.4 | Assistive technology such as screen readers |
| 6.1.4 | Proofread content |
| 6.5.10 | Usability testing |
| 6.5.11 | Cross-browser and cross-device testing, validators |
| 2.11 | Troubleshooting methods |
| 6.5.12 | Publish a site to a web server (Firebase Hosting) |
| 6.5.1 | Web standards and protocols: HTTP/HTTPS, FTP, TCP/IP, DNS, W3C |
| 2.7.8 | Static vs dynamic sites |
| 2.7.5 | Bandwidth and latency |
| 2.7.6 | Browser plug-ins |
| 6.5.4 | Content management systems (describe level) |
| 2.7.2 | Ways to present data: responsive site, mobile app, desktop app, web app |

---

## Practice Questions

1. What is the difference between a title tag and a meta description?
2. A page has an `<h1>` and then jumps to `<h3>`. What is wrong?
3. Write good alt text for a photo of a golden retriever catching a frisbee.
4. What alt should a decorative divider image have?
5. Rewrite this link: `To see our hours, <a href="hours.html">click here</a>.`
6. What law requires websites to be accessible in the U.S.? What are the guidelines called?
7. Write a label and input for a phone number that are correctly connected.
8. Why is `<div onclick="send()">Send</div>` bad? What should it be?
9. What does `outline: none` on `:focus` do to keyboard users?
10. What contrast ratio does normal text need?
11. When should you use `aria-label`?
12. Name the two W3C validators and what each checks.
13. Your site looks fine on your computer, but the images are missing on the live site. Name two likely causes.
14. Which troubleshooting method: "The About page is styled but the Gallery page is not, so I compared their heads."
15. What does DNS do? What does TCP do?
16. What is the difference between HTTP and HTTPS?
17. Is Gmail static or dynamic? Is your DIY site?
18. Bandwidth or latency: a huge video takes a long time to download.
19. What replaced browser plug-ins like Flash?
20. What is a CMS? Name one.
21. Name the four ways to present data from competency 2.7.2.
22. What command puts your site online (or updates it) with Firebase Hosting?

## Answers to Practice Questions

1. The title is the headline in search results and on the tab. The meta description is the summary under it.
2. It skips a level. It should go `<h1>` then `<h2>`.
3. Example: `alt="Golden retriever jumping to catch a frisbee"`.
4. `alt=""`
5. `See our <a href="hours.html">hours</a>.` (or any link text that says where it goes)
6. The ADA (Americans with Disabilities Act). WCAG (Web Content Accessibility Guidelines).
7. `<label for="phone">Phone</label> <input type="tel" id="phone" name="phone">`
8. A div cannot be reached with Tab or pressed with Enter, and screen readers do not call it a button. Use `<button>Send</button>`.
9. It hides where they are on the page.
10. 4.5 to 1.
11. When a link or button has no readable text, like an icon or emoji.
12. validator.w3.org checks HTML. jigsaw.w3.org/css-validator checks CSS.
13. A wrong file path, capital letters that do not match, the images are not inside the site folder, or you did not deploy again after adding them.
14. Spot the differences.
15. DNS turns a domain name into an IP address. TCP breaks data into packets and makes sure they all arrive in order.
16. HTTPS is encrypted. HTTP is not.
17. Gmail is dynamic (different for each user, from a database). The DIY site is static (same files for everyone).
18. Bandwidth.
19. HTML5 (built-in video, audio, and JavaScript features).
20. Software to build and edit a site from a dashboard, with content in a database. WordPress.
21. Responsive website, web app, mobile app, desktop app.
22. `firebase deploy --only hosting`
