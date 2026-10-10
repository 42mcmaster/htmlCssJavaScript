# html10 Walkthrough: Site Quality and Publishing

This is the last content lesson. You will learn how to make a site easy to find (SEO), easy for everyone to use (accessibility), free of mistakes (proofreading, validating, testing), and live on the internet (Firebase Hosting). You will also learn the vocabulary the certification exams ask about: how the web moves data, static vs dynamic sites, and more.

Read this with Mr. McMaster's demo. Then do `html10_Task.html` (practice) and `html10_DIYTask.md` (your website).

## Table of Contents

1. [Part 1: SEO (Search Engine Optimization)](#part-1-seo-search-engine-optimization)
   - [Title tag](#title-tag)
   - [Meta description](#meta-description)
   - [Headings in order](#headings-in-order)
   - [Alt text](#alt-text)
   - [Descriptive link text](#descriptive-link-text)
   - [Keywords](#keywords)
   - [File names](#file-names)
2. [Part 2: Accessibility](#part-2-accessibility)
   - [Why it matters: the ADA](#why-it-matters-the-ada)
   - [Screen readers](#screen-readers)
   - [Labels on form inputs](#labels-on-form-inputs)
   - [Real buttons and real links](#real-buttons-and-real-links)
   - [Keyboard navigation and tab order](#keyboard-navigation-and-tab-order)
   - [Color contrast](#color-contrast)
   - [aria-label](#aria-label)
3. [Part 3: Proofreading](#part-3-proofreading)
4. [Part 4: Testing](#part-4-testing)
   - [W3C HTML validator](#w3c-html-validator)
   - [W3C CSS validator](#w3c-css-validator)
   - [Testing in two browsers and a narrow window](#testing-in-two-browsers-and-a-narrow-window)
   - [Usability checklist](#usability-checklist)
   - [Optional free checkers](#optional-free-checkers)
5. [Part 5: Troubleshooting Methods](#part-5-troubleshooting-methods)
6. [Part 6: Publishing with Firebase Hosting](#part-6-publishing-with-firebase-hosting)
7. [Part 7: How the Web Works (Vocabulary)](#part-7-how-the-web-works-vocabulary)
   - [HTTP and HTTPS](#http-and-https)
   - [FTP](#ftp)
   - [TCP/IP](#tcpip)
   - [DNS](#dns)
   - [W3C and web standards](#w3c-and-web-standards)
   - [Static vs dynamic sites](#static-vs-dynamic-sites)
   - [Bandwidth vs latency](#bandwidth-vs-latency)
   - [Browser plug-ins](#browser-plug-ins)
   - [CMS (Content Management System)](#cms-content-management-system)
   - [Ways to present data](#ways-to-present-data)
8. [Quick Review](#quick-review)

---

## Part 1: SEO (Search Engine Optimization)

**SEO** means building a page so search engines (Google, Bing) understand it and show it to the right people. A search engine sends a program called a **crawler** to read pages. It stores what it finds in an **index**. When someone searches, it **ranks** the pages in the index. Visitors who come from search results (not ads) are called **organic traffic**.

Most SEO you control lives in your HTML.

### Title tag

The `<title>` is the blue headline in search results and the text on the browser tab. Every page gets its **own** title.

```html
<head>
  <!-- BAD: every page says the same vague thing -->
  <title>Home</title>

  <!-- GOOD: page name + site name, under about 60 characters -->
  <title>Menu and Prices - Sweet Crumb Bakery</title>
</head>
```

Rules:
- Unique on every page. `index.html`, `about.html`, and `contact.html` should not share a title.
- About 60 characters or less. Longer titles get cut off with "...".
- Put the most important words first.

### Meta description

The meta description is the short summary under the title in search results. It goes in the `<head>`.

```html
<!-- One or two sentences, about 150-160 characters, unique to this page -->
<meta name="description" content="Fresh bread, pastries, and custom cakes baked daily in Medina, Ohio. See our menu and prices, then order ahead online.">
```

Search engines do not use it to rank the page, but a clear one makes people more likely to click.

### Headings in order

Headings are an outline of the page. Search engines and screen readers both use them.

```html
<!-- ONE h1 per page: the main topic -->
<h1>Sweet Crumb Bakery</h1>

  <!-- h2 = main sections -->
  <h2>Our Menu</h2>
    <!-- h3 = parts inside a section -->
    <h3>Breads</h3>
    <h3>Pastries</h3>

  <h2>Contact Us</h2>
```

Rules:
- Exactly one `<h1>`.
- Do not skip levels (`h1` then `h3` is wrong).
- Do not pick a heading because of its size. Use CSS to change size.

### Alt text

`alt` describes an image for search engines and for people who cannot see it.

```html
<!-- BAD: missing alt, or useless alt -->
<img src="images/pastries.png">
<img src="images/pastries.png" alt="image">

<!-- GOOD: says what is in the picture, short -->
<img src="images/pastries.png" alt="Tray of croissants and cinnamon rolls" width="400" height="300">

<!-- Decorative image (a divider line, a background swirl): empty alt so screen readers skip it -->
<img src="images/divider.png" alt="">
```

Do not start alt text with "Picture of" or "Image of". The screen reader already says "image."

### Descriptive link text

Link text should make sense by itself. Screen reader users often jump from link to link and hear only the link text. Search engines also read it.

```html
<!-- BAD: "click here" tells no one where the link goes -->
<p>To see our prices, <a href="menu.html">click here</a>.</p>

<!-- GOOD: the link text says where it goes -->
<p>See our <a href="menu.html">menu and prices</a>.</p>
```

### Keywords

A **keyword** is a word or phrase people type into a search engine, like "custom cakes Medina." Use your real keywords naturally in the title, the `<h1>`, the meta description, and the page text.

- **Keyword stuffing** (repeating a keyword over and over) hurts your ranking. Write for people first.
- The old `<meta name="keywords">` tag is ignored by Google. You do not need it.

### File names

File and folder names show up in the web address (URL). Good names help people and search engines.

| Bad | Good |
|---|---|
| `IMG_4032.png` | `fresh-bread.png` |
| `Page 2.html` | `about.html` |
| `My Photos/` | `images/` |

Rules: all lowercase, no spaces, use hyphens between words, describe what is in the file.

---

## Part 2: Accessibility

**Accessibility** means everyone can use your site, including people who are blind or have low vision, are deaf, cannot use a mouse, or have trouble reading. Good accessibility also helps SEO, because both depend on clean, meaningful HTML.

### Why it matters: the ADA

The **ADA (Americans with Disabilities Act)** is a U.S. law that protects people with disabilities. Courts have applied it to websites, and businesses have been sued over sites people could not use. **WCAG (Web Content Accessibility Guidelines)** is the W3C's list of rules for accessible sites. Level **AA** is the normal target.

About 1 in 4 U.S. adults has some kind of disability. That is a lot of visitors to leave out.

### Screen readers

A **screen reader** is software that reads a page out loud (or sends it to a braille display). Examples: VoiceOver (built into Macs, Cmd + F5), NVDA and JAWS (Windows).

A screen reader uses your HTML to explain the page:
- Headings let the user jump around the page.
- `alt` text describes images.
- `<nav>`, `<main>`, `<header>`, and `<footer>` let the user skip to a region.
- Labels tell the user what each form box is for.

If you build with `<div>` for everything, the screen reader has nothing to go on.

### Labels on form inputs

Every input needs a `<label>`. The label's `for` must match the input's `id`.

```html
<!-- BAD: the label is not connected. A placeholder is not a label. -->
<label>Email:</label>
<input type="email" placeholder="Your email">

<!-- GOOD: for="email" matches id="email" -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

Bonus: clicking a connected label puts the cursor in the box.

### Real buttons and real links

Use the element that matches the job.

```html
<!-- BAD: a div is not focusable with Tab and a screen reader does not call it a button -->
<div onclick="sendForm()">Send</div>

<!-- GOOD: a real button works with Tab, Enter, and Space for free -->
<button type="submit">Send</button>

<!-- Links that go somewhere are <a href>, not a div or a span -->
<a href="gallery.html">Gallery</a>
```

Rule of thumb: goes to a page = `<a href>`. Does something on this page = `<button>`.

### Keyboard navigation and tab order

Some people cannot use a mouse. They use the keyboard:

| Key | What it does |
|---|---|
| Tab | Move to the next link, button, or input |
| Shift + Tab | Move back |
| Enter | Follow a link or press a button |
| Space | Press a button or check a box |

**Tab order** is the order Tab moves through the page. It follows the order of the HTML, so put your HTML in a sensible order (header, nav, main, footer).

**Focus indicator:** the outline that shows which element is selected. Never remove it.

```css
/* BAD: hides where the keyboard user is */
a:focus, button:focus {
  outline: none;
}

/* GOOD: a clear, thick outline when an element has keyboard focus */
a:focus, button:focus, input:focus {
  outline: 3px solid #1a5fb4;   /* dark blue, easy to see */
  outline-offset: 2px;          /* small gap between element and outline */
}
```

**Mac note:** Safari skips links when you press Tab unless you turn it on (Safari > Settings > Advanced > "Press Tab to highlight each item on a webpage"), or press Option + Tab. Chrome and Firefox tab through links normally.

### Color contrast

**Color contrast** is the difference between text color and background color. Light gray text on white is hard to read for many people, and impossible on a phone in sunlight.

WCAG AA rules:
- Normal text: contrast ratio of at least **4.5 to 1**.
- Large text (about 1.5rem and up, or bold 1.2rem and up): at least **3 to 1**.

Check any pair of colors at the **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/

```css
/* BAD: #aaaaaa on white is about 2.3 to 1 - fails */
p { color: #aaaaaa; background-color: #ffffff; }

/* GOOD: #333333 on white is about 12.6 to 1 - passes */
p { color: #333333; background-color: #ffffff; }
```

Do not use color as the **only** signal. "Required fields are in red" fails for a color-blind user. Add text: "Required".

Remember your **dark mode**: check contrast in both light and dark.

### aria-label

**ARIA** stands for Accessible Rich Internet Applications. It is a set of attributes that give extra information to screen readers. In this course we use only one: `aria-label`.

Use `aria-label` when a link or button has **no readable text**, like an icon or an emoji.

```html
<!-- BAD: the screen reader just says "link" or reads the emoji name -->
<a href="https://instagram.com/sweetcrumb">📷</a>

<!-- GOOD: aria-label gives it a name -->
<a href="https://instagram.com/sweetcrumb" aria-label="Sweet Crumb Bakery on Instagram">📷</a>

<!-- Your dark mode button, if it only shows an icon -->
<button id="theme-toggle" aria-label="Switch dark mode on or off">🌙</button>
```

If the element already has visible text, you do not need `aria-label`. Real HTML first, ARIA only to fill a gap.

---

## Part 3: Proofreading

**Proofreading** means reading your content slowly to catch mistakes before the public sees them. Spelling errors make a business look careless.

How to proofread a page:
1. Read the page **out loud**, slowly. Your ear catches what your eyes skip.
2. Check spelling, capital letters, and punctuation.
3. Check names, dates, prices, phone numbers, and email addresses. Wrong facts are worse than typos.
4. Check that every page uses the same site name spelled the same way.
5. Look for leftover placeholder text like "Lorem ipsum" or "TODO."
6. Have a partner read it. A fresh pair of eyes finds more.

Tip: copy your page text into a Google Doc to use its spell check. Do not paste your code, just the words.

---

## Part 4: Testing

### W3C HTML validator

The **W3C Markup Validation Service** checks your HTML against the official rules.

1. Go to https://validator.w3.org/
2. Click the **Validate by File Upload** tab and choose your `.html` file (or use **Validate by Direct Input** and paste the code).
3. Click **Check**.
4. Fix every **Error**. Read the **Warnings** and fix them if they make sense.
5. Check again until it says "No errors or warnings to show" (or only warnings you understand).

Common errors:

| Message says | What it usually means |
|---|---|
| "Element `title` must not be empty" | You left `<title></title>` blank |
| "An `img` element must have an `alt` attribute" | Missing `alt` |
| "Duplicate ID" | Two elements share the same `id`. Each `id` is used once per page. |
| "Stray end tag `div`" | An extra closing tag, or a missing opening tag |
| "The `for` attribute of the `label` element must refer to..." | The label's `for` does not match any input `id` |

Tip: fix the **first** error, then check again. One missing tag can cause ten errors below it.

### W3C CSS validator

1. Go to https://jigsaw.w3.org/css-validator/
2. Use **By file upload** and choose `styles.css` (or **By direct input** and paste it).
3. Click **Check** and fix the errors (usually a typo in a property name or a missing `;` or `}`).

Note: the CSS validator may show warnings about custom properties like `var(--bg-color)`. Those are fine.

### Testing in two browsers and a narrow window

Different browsers can show the same page a little differently. **Cross-browser testing** means checking your site in more than one browser. **Cross-device testing** means checking it at different screen sizes.

1. Open your site in **two browsers** (for example Chrome and Safari, or Chrome and Firefox).
2. In each one, click through every page and every link.
3. **Narrow the window:** drag the edge of the browser window until it is about as narrow as a phone. Your media query should kick in. Check that nothing runs off the side and the text is still readable.
4. **Check the Console:** open each page with **Live Preview** in VS Code, click the **Developer Tools** button, and click the **Console** tab. There should be no red errors. A red error means something in `script.js` is broken, and it gives you the line number. While Developer Tools is open, you can also click the **device toolbar** button (phone-and-tablet icon) to see each page at a phone width.
5. Write down anything that looks different or broken.

### Usability checklist

**Usability** means how easy the site is to use. Test it like a visitor would:

- [ ] I can tell what the site is about in 5 seconds.
- [ ] The nav is on every page, in the same place, with the same links.
- [ ] Every link works. No dead links, no 404 pages.
- [ ] Every image shows up.
- [ ] Text is easy to read (size, contrast, not too wide).
- [ ] The form tells me when I leave something out.
- [ ] The dark mode button works and everything is still readable.
- [ ] The video plays.
- [ ] It still works in a narrow window.
- [ ] I can use the whole site with only the keyboard.

Best test: ask a partner to use your site without you helping. Watch where they get stuck.

### Optional free checkers

These websites test a live page for you. They are optional. Use them **if the school filter allows them**.

- **WAVE** (https://wave.webaim.org) - paste your live URL. It marks accessibility problems right on your page: missing alt, missing labels, low contrast.
- **PageSpeed Insights** (https://pagespeed.web.dev) - paste your live URL. It gives scores for Performance, Accessibility, Best Practices, and SEO, with a list of what to fix.

Both need the site to be live, so use them after Part 6.

---

## Part 5: Troubleshooting Methods

When something is broken, do not change random things. Use a method. Here are four common ones.

| Method | How it works | Example |
|---|---|---|
| **Top-down** | Start at the big picture and work toward the details. | Is the site up? Does the page load? Does the CSS load? Is the one rule right? |
| **Bottom-up** | Start at the smallest detail and work up. | Check the one line of CSS first, then the file link, then the page. |
| **Follow the path** | Trace the path the data or the click takes, one step at a time. | Click button -> does `script.js` load? -> does the function run? -> does it change the page? |
| **Spot the differences** | Compare something that works with something that does not. | `about.html` has styles but `gallery.html` does not. Compare their `<head>` sections line by line. |

Most common cause of "it works on my computer but not online": a **file path** that is wrong, or a file name with the wrong capital letters. Web servers care about capitals: `Images/Logo.png` and `images/logo.png` are different files.

---

## Part 6: Publishing with Firebase Hosting

**Publishing** (or **deploying**) means putting your site on a web server so anyone can visit it. A **web host** is a company that runs those servers for you.

We use **Firebase Hosting**, a free web host from Google. (The school network blocks GitHub Pages, so we do not use it.) Your site gets a free address like `https://diywebsite-lastname.web.app`.

You will still commit and push to GitHub with GitHub Desktop, just like always. GitHub keeps your code safe. Firebase puts the site online.

To publish, you type three **Firebase commands** in the terminal. This is the one time in this course you type commands. Git still stays in GitHub Desktop.

A **CLI** (command-line interface) is a program you control by typing commands instead of clicking buttons. The **Firebase CLI** is the Firebase tool we type into.

### Step 1: Commit and push your latest work (GitHub Desktop)

1. Open **GitHub Desktop**. Make sure the current repository is `htmlCssJavaScript`.
2. Look at the **Changes** list on the left. Your changed files should be there.
3. Type a **Summary** at the bottom left, like `html10: SEO and accessibility fixes`.
4. Click **Commit to main**.
5. Click **Push origin** at the top.

### Step 2: Make a Firebase project (web browser)

1. Go to **console.firebase.google.com**.
2. Sign in with your **school Google account**.
3. Click **Add project** (it may say **Create a project**).
4. Name it like `diywebsite-lastname` (use your last name). Firebase turns this into your **project ID**.
5. Turn **off** Google Analytics. You do not need it.
6. Click **Create project**. Wait for it to finish, then click **Continue**.

Hosting on the free **Spark plan** is free. Do not add a credit card or change plans.

### Step 3: Set up the computer (one time only)

You only do this step once per computer.

1. Open your `DiyWebsite_Lastname` folder in VS Code (**File > Open Folder**).
2. Click **Terminal > New Terminal**. A terminal opens at the bottom of VS Code, already inside your site folder.
3. Check that Node.js is installed. Type this and press Enter:
   ```
   node -v
   ```
   You should see a version number like `v20.11.0`. If you see "command not found," tell Mr. McMaster.
4. Install the Firebase tools. Type this and press Enter:
   ```
   npm install -g firebase-tools
   ```
   Wait until it finishes. It can take a minute or two.
5. Log in to Firebase. Type this and press Enter:
   ```
   firebase login
   ```
   If it asks about sending usage info, you can answer **No**. A browser window opens. Sign in with the **same school Google account**. When it says you are logged in, go back to VS Code.

### Step 4: Connect your folder to your Firebase project

In the VS Code terminal (still in your `DiyWebsite_Lastname` folder), type:

```
firebase init hosting
```

It asks you questions. Use the arrow keys and Enter to pick answers. Answer them like this:

| Question | Your answer |
|---|---|
| Project setup | **Use an existing project** |
| Select a default Firebase project | Pick your `diywebsite-lastname` project |
| What do you want to use as your public directory? | Type `.` (a single period). It means "this folder." |
| Configure as a single-page app? | **No** |
| Set up automatic builds and deploys with GitHub? | **No** |
| File ./index.html already exists. Overwrite? | **No** |

> **WARNING: Answer No to "Overwrite index.html?"** If you answer Yes, Firebase replaces your Home page with its own sample page. Your work would be gone from that file.

When it finishes, it says "Firebase initialization complete!" It made two new files in your folder: `firebase.json` and `.firebaserc`. That is normal. Leave them there and commit them with the rest of your site.

### Step 5: Deploy the site

Type:

```
firebase deploy --only hosting
```

When it finishes, it prints a **Hosting URL**, like:

```
Hosting URL: https://diywebsite-lastname.web.app
```

That is your live site. Copy it. This is the address you turn in.

### Step 6: Check the live site

Open the address. Click every link, check every image, play the video, try dark mode, and submit the form empty to see your validation.

### Updating later

Every time you change your site:

1. Save your files.
2. Commit and push in GitHub Desktop, as usual.
3. In the VS Code terminal (in your `DiyWebsite_Lastname` folder), run `firebase deploy --only hosting` again.

The live site does **not** update when you push to GitHub. It updates only when you deploy.

### If something goes wrong

| Problem | Likely fix |
|---|---|
| `firebase: command not found` | The Firebase tools are not installed, or the terminal was open before you installed them. Close the terminal, open a new one (**Terminal > New Terminal**), and try again. If it still fails, run `npm install -g firebase-tools` again. |
| Permission error (EACCES) when running `npm install -g` | The computer will not let you install it. Tell Mr. McMaster. |
| The wrong page shows, or a Firebase "Welcome" page shows | The public directory is wrong, or `index.html` was overwritten. Open `firebase.json`. The `"public"` line should say `"."`. Fix it, save, and deploy again. If your `index.html` was replaced, get it back in GitHub Desktop (right-click the file in **Changes** and choose **Discard changes**). |
| The old version still shows | Did you deploy after your change? Run `firebase deploy --only hosting` again. Then do a hard refresh (Cmd + Shift + R). |
| Page shows but no styles | Your `<link href="...">` path is wrong or the file name's capitals do not match. |
| Images missing online but fine on your computer | Same thing: path or capitals. Also check the image file is inside your `DiyWebsite_Lastname` folder. |

Always use **relative paths** like `images/cake.png` or `styles.css`. An **absolute path** to your own computer, like `/Users/jsmith/Desktop/cake.png`, works only on your computer.

---

## Part 7: How the Web Works (Vocabulary)

The exams ask about these terms. Know what each one is and what it does.

### HTTP and HTTPS

- **HTTP** (HyperText Transfer Protocol): the rules a browser and a web server use to ask for and send web pages.
- **HTTPS** (HTTP Secure): HTTP with **encryption**. Nobody in the middle can read the data. The lock icon in the address bar means HTTPS. Use it for anything with passwords or payment. Firebase Hosting uses HTTPS for you.
- A **protocol** is an agreed set of rules for how computers talk.

### FTP

**FTP** (File Transfer Protocol): an older way to upload files to a web server. You would connect with an FTP program and drag files up. Today many developers publish with a command-line tool instead, like we do with Firebase. Plain FTP is not encrypted. **SFTP** is the secure version.

### TCP/IP

**TCP/IP** (Transmission Control Protocol / Internet Protocol): the base rules of the internet.
- **IP** gives every device an **IP address** (like `140.82.112.3`) and moves data toward it.
- **TCP** breaks data into small **packets**, sends them, checks they all arrived, and puts them back in order.

HTTP runs on top of TCP/IP.

### DNS

**DNS** (Domain Name System): the internet's phone book. It turns a **domain name** (`github.com`) into an IP address the computer can use.

What happens when you type `https://github.com` and press Enter:
1. **DNS** looks up the IP address for `github.com`.
2. **TCP/IP** opens a connection to that server.
3. The browser sends an **HTTPS** request for the page.
4. The server sends back HTML, CSS, JavaScript, and images.
5. The browser reads the HTML, applies the CSS, runs the JavaScript, and shows the page.

A **URL** is the full address, including the protocol and path: `https://github.com/about`.

### W3C and web standards

The **W3C** (World Wide Web Consortium) is the group that writes the standards for HTML and CSS. **Web standards** are the official rules for how code should be written and how browsers should display it. Following them means your site works in every browser, now and later. That is why we validate.

### Static vs dynamic sites

| Static site | Dynamic site |
|---|---|
| The server sends files exactly as they are stored | The server builds the page when you ask for it, often from a database |
| Every visitor sees the same page | Pages can be different for each visitor |
| HTML, CSS, JS files only | Also uses a server language (PHP, Python) and a database |
| Examples: portfolio, restaurant menu site, **your site** | Examples: Instagram feed, Gmail inbox, Amazon |
| Fast, cheap, simple, hard to hack | Can do logins, shopping carts, search |

Your JavaScript makes your page **interactive** (dark mode, form checking), but the site is still **static**, because the server sends the same files to everyone. Firebase Hosting is built for static sites like yours.

### Bandwidth vs latency

Two different reasons a page loads slowly:
- **Bandwidth:** how **much** data can move per second. Measured in Mbps (megabits per second). Think: how wide the pipe is.
- **Latency:** how **long** one trip takes, there and back. Measured in ms (milliseconds). Think: how long the pipe is.

Truck example: bandwidth is how much one truck can carry. Latency is how long the drive takes. Bigger trucks do not make the drive shorter.

Why designers care: big images and video use up bandwidth. Every separate file adds another trip (latency). Keep images small (compress them) and do not load files you do not need. Video is much bigger than images, and images are much bigger than text. Phones on cell data often have less bandwidth and more latency.

### Browser plug-ins

A **plug-in** is extra software a browser loads to show content it cannot handle by itself. Old examples: **Adobe Flash** (animations and games), Java applets, Microsoft Silverlight.

HTML5 added built-in `<video>`, `<audio>`, and JavaScript features, so plug-ins were no longer needed. Flash ended in 2020. Today most browsers do not run plug-ins at all. The add-ons you install now (ad blockers, password managers) are called **extensions**. They add features to the browser, not new kinds of content to the page.

### CMS (Content Management System)

A **CMS** is software that lets people build and update a website from a dashboard, without writing HTML. The content is stored in a **database**, and the CMS builds each page from a **theme** (template).

- **WordPress** is the biggest example. It runs a large share of all websites (roughly 40%). Others: Drupal, Joomla. Wix and Squarespace are hosted site builders that work in a similar way.
- Setting one up means: get hosting with a database, install the CMS, create the admin account, pick a theme, then add pages and menus.
- Good: non-coders can update the site. Bad: needs a server, updates, and security patches.
- A CMS site is **dynamic**. Your hand-coded site is **static**.

### Ways to present data

The same information can reach people in different ways:

| Way | What it is | Example |
|---|---|---|
| **Responsive website** | One site that changes its layout to fit any screen | Your DIY site (media query) |
| **Web app** | A website that works like a program, in the browser | Google Docs, Canva |
| **Mobile app** | Installed from the App Store or Google Play onto a phone | Instagram app |
| **Desktop app** | Installed on a computer | Audacity, GitHub Desktop |

A responsive site is the cheapest way to reach every device. An app costs more to build but can use phone features like the camera and notifications.

---

## Quick Review

1. What two things in the `<head>` show up in search results?
2. How many `<h1>` elements should a page have?
3. What should the `alt` be for a decorative image?
4. How do you connect a `<label>` to an `<input>`?
5. What keys does a keyboard user press to move forward and back?
6. What contrast ratio does normal text need?
7. When should you use `aria-label`?
8. What two W3C validators did you use, and what does each check?
9. Name the four troubleshooting methods.
10. What is the address of a site in the `DiyWebsite_Lastname` folder of the `htmlCssJavaScript` repo?
11. What does DNS do? What does TCP do?
12. Is your DIY site static or dynamic? Why?
13. Bandwidth or latency: "the page waits a long time before anything starts to arrive."
14. What replaced browser plug-ins like Flash?
15. What is a CMS? Name one.
