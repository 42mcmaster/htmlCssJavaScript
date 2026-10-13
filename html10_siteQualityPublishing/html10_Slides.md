---
marp: true
theme: default
paginate: true
---

# html10: Site Quality and Publishing

SEO, accessibility, testing, and putting your site online

Medina County Career Center - Software Engineering

---

# What We Are Doing

- Make the site easy to **find** (SEO)
- Make the site easy for **everyone to use** (accessibility)
- Make the site **correct** (proofread, validate, test)
- Put the site **online** (Firebase Hosting)
- Learn the **vocabulary** the exams ask about

Practice: `html10_Task.html` (bakery page)
Graded: `html10_DIYTask.md` (your website)

---

# What Is SEO?

**SEO = Search Engine Optimization**

- A **crawler** reads your page
- The search engine stores it in an **index**
- It **ranks** pages when someone searches
- Visitors from search results = **organic traffic**

Most of the SEO you control is in your HTML.

---

# Title and Meta Description

```html
<title>Menu and Prices - Sweet Crumb Bakery</title>
<meta name="description" content="Fresh bread, pastries, and
custom cakes baked daily in Medina, Ohio.">
```

- **Title:** the headline in search results and the tab text. About 60 characters.
- **Meta description:** the summary under the title. About 150-160 characters.
- **Different on every page.**

---

# Headings, Alt Text, Link Text

- **One `<h1>`** per page. Then `<h2>`, then `<h3>`. Do not skip levels.
- **Alt text** says what is in the picture: `alt="Tray of croissants"`
  - Decorative image: `alt=""`
- **Link text** says where it goes:
  - Bad: `click here`
  - Good: `see our menu and prices`

---

# Keywords and File Names

- **Keyword:** what people type to find you ("custom cakes Medina")
- Use it in the title, h1, description, and text. **Do not stuff it.**
- File names: lowercase, no spaces, hyphens

| Bad | Good |
|---|---|
| `IMG_4032.png` | `fresh-bread.png` |
| `Page 2.html` | `about.html` |

---

# What Is Accessibility?

Everyone can use the site, including people who:
- are blind or have low vision
- cannot use a mouse
- are color blind or have trouble reading

**ADA** (Americans with Disabilities Act): U.S. law, applied to websites
**WCAG** (Web Content Accessibility Guidelines): the rules. Target: **Level AA**

---

# Screen Readers

Software that reads the page out loud (VoiceOver, NVDA, JAWS).

It depends on your HTML:
- headings to jump around
- `alt` to describe images
- `<nav>`, `<main>`, `<header>`, `<footer>` to find regions
- labels to explain form boxes

A page made of `<div>`s gives it nothing to work with.

---

# Labels, Buttons, and Links

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">

<button type="submit">Send</button>   <!-- not <div onclick> -->
<a href="gallery.html">Gallery</a>    <!-- not <span onclick> -->
```

- `for` must match `id`. A placeholder is not a label.
- Goes somewhere = `<a href>`. Does something = `<button>`.

---

# Keyboard Navigation

| Key | Does |
|---|---|
| Tab / Shift + Tab | Next / previous item |
| Enter | Follow link, press button |
| Space | Press button, check box |

- **Tab order** follows the HTML order
- **Never** use `outline: none` on focus
- Safari: Option + Tab to reach links

---

# Color Contrast and aria-label

- Normal text: **4.5 to 1** or better (large text 3 to 1)
- Check at webaim.org/resources/contrastchecker
- Check **light and dark mode**
- Do not use color as the only signal

```html
<button aria-label="Switch dark mode on or off">🌙</button>
```

`aria-label` = a name for an icon that has no words. That is the only ARIA we use.

---

# Proofreading

1. Read it **out loud**
2. Spelling, capitals, punctuation
3. Names, prices, dates, phone, email
4. Same site name everywhere
5. No "Lorem ipsum" or "TODO"
6. Trade with a partner

---

# Validators

**W3C** (World Wide Web Consortium) writes the HTML and CSS standards.

- HTML: **validator.w3.org** - Validate by File Upload
- CSS: **jigsaw.w3.org/css-validator**

Fix the **first** error, then check again.

---

# Cross-Browser and Device Testing

- Open the site in **two browsers**
- Click every link on every page
- **Narrow the window** to phone width. Does the layout adjust?
- **Live Preview → Developer Tools → Console:** no red errors
- Usability: can a partner use it without your help?

Optional (if the filter allows): **WAVE** and **PageSpeed Insights**

---

# Troubleshooting Methods

| Method | Idea |
|---|---|
| Top-down | Big picture first, then details |
| Bottom-up | Smallest detail first, then up |
| Follow the path | Trace each step the click or data takes |
| Spot the differences | Compare what works with what does not |

Most common "works here, broken online" cause: **file path or capital letters**.

---

# Publish with Firebase Hosting

**Firebase Hosting** = free web host from Google
(The school network blocks GitHub Pages.)

1. GitHub Desktop: **Commit to main**, then **Push origin** (same as always)
2. **console.firebase.google.com**: school Google account, **Add project** `diywebsite-lastname`, Analytics **off**
3. Site folder in VS Code: **Terminal > New Terminal**

Your site: `https://diywebsite-lastname.web.app`

---

# Firebase: One-Time Computer Setup

A **CLI** (command-line interface) is a tool you control by typing.

```
node -v
npm install -g firebase-tools
firebase login
```

- `node -v` shows a version number? Good. If not, tell Mr. McMaster.
- `firebase login` opens a browser. Use the same school Google account.

---

# Firebase: Connect and Deploy

```
firebase init hosting
```

- **Use an existing project** → your project
- Public directory: `.` (a single period = "this folder")
- Single-page app: **No**
- Automatic builds with GitHub: **No**
- Overwrite index.html: **NO** (Yes replaces your Home page!)

```
firebase deploy --only hosting
```

Copy the **Hosting URL**. After every change: save, commit, push, **deploy again**.

---

# How a Page Gets to You

1. **DNS** turns `github.com` into an IP address
2. **TCP/IP** connects and moves data in **packets**
3. **HTTPS** asks for the page (encrypted; HTTP is not)
4. Browser reads HTML, applies CSS, runs JS

**FTP:** older way to upload files to a server (SFTP is the secure one)

---

# Static vs Dynamic

| Static | Dynamic |
|---|---|
| Same files for every visitor | Page built per visitor |
| HTML, CSS, JS | Plus server language + database |
| Portfolio, menu site, **your site** | Instagram, Gmail, Amazon |

Firebase Hosting is built for **static** sites like yours.

---

# Bandwidth vs Latency

- **Bandwidth:** how **much** data per second (Mbps). Pipe width.
- **Latency:** how **long** one trip takes (ms). Pipe length.

Big images and video use bandwidth. Every extra file adds a trip.
**Compress images. Load only what you need.**

---

# Plug-ins and CMS

**Plug-in:** extra software a browser loaded for content HTML could not show (Flash, Java applets). HTML5 replaced them. Flash ended in 2020. Today's add-ons are **extensions**.

**CMS (Content Management System):** edit a site from a dashboard; content in a database, look from a theme. **WordPress** is the biggest. A CMS site is dynamic.

---

# Ways to Present Data

| Way | Example |
|---|---|
| Responsive website | Your DIY site |
| Web app | Google Docs, Canva |
| Mobile app | Instagram app |
| Desktop app | Audacity, GitHub Desktop |

---

# Your Turn

1. `html10_Task.html` - fix the bakery page (22 TODOs + vocabulary)
2. `html10_DIYTask.md` - check, fix, and publish your site
3. Turn in your **live URL** and your **test log**
