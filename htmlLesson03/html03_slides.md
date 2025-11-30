---
marp: true
theme: default
paginate: true
---

# HTML Lesson 3
## Links and Navigation

### Web Design
Medina County Career Center

---

## Today's Learning Objectives

By the end of this lesson, you will be able to:

- Create hyperlinks using the anchor tag
- Understand absolute vs. relative URLs
- Link to email addresses
- Create anchor links within a page
- Follow link best practices for usability
- Build basic navigation menus

---

## The Anchor Tag `<a>`

The anchor tag creates clickable links:

```html
<a href="destination.html">Click here</a>
```

**Three parts:**
1. Opening tag with `href` attribute
2. Link text (what users see and click)
3. Closing tag

**`href` = "hypertext reference"** (where the link goes)

---

## Basic Link Example

```html
<a href="about.html">About Us</a>
```

**What happens:**
- User sees: "About Us"
- Link is clickable
- Clicking goes to `about.html`

**Try it:** Let's create a simple link together!

---

## Absolute URLs

**Absolute URL** = Complete web address

```html
<a href="https://www.google.com">Go to Google</a>
<a href="https://www.github.com">Visit GitHub</a>
<a href="https://www.w3schools.com">W3Schools</a>
```

**Use absolute URLs for:**
- External websites
- Links to other domains
- Resources not on your server

**Always include:** `http://` or `https://`

---

## Relative URLs

**Relative URL** = Path relative to current file

```html
<!-- File in same folder -->
<a href="about.html">About</a>

<!-- File in subfolder -->
<a href="pages/contact.html">Contact</a>

<!-- File in parent folder -->
<a href="../index.html">Home</a>

<!-- File in different branch -->
<a href="../images/photo.jpg">Photo</a>
```

---

## Understanding Relative Paths

**Your website structure:**
```
website/
├── index.html
├── about.html
├── pages/
│   ├── contact.html
│   └── services.html
└── images/
    └── logo.png
```

**From `index.html`:**
- `about.html` (same folder)
- `pages/contact.html` (into subfolder)

**From `pages/contact.html`:**
- `../index.html` (up to parent)
- `../about.html` (up then to file)

---

## Relative Path Practice

**Where am I?** `website/pages/services.html`

**How do I link to:**
- Contact page? `contact.html` (same folder)
- Index page? `../index.html` (up one level)
- About page? `../about.html` (up one level)
- Logo image? `../images/logo.png` (up then down)

---

## When to Use Which?

**Absolute URLs:**
✅ External websites
✅ Resources on other domains
✅ CDN-hosted files

**Relative URLs:**
✅ Internal pages on your site
✅ Images and resources on your server
✅ Easier to move site between servers

---

## Email Links

Create clickable email links:

```html
<a href="mailto:info@example.com">Email Us</a>
```

**What happens:**
- Opens user's default email program
- Pre-fills the "To:" field
- User can send email

---

## Email Links with Subject Line

```html
<a href="mailto:info@example.com?subject=Website Question">
  Ask a Question
</a>
```

**Add more:**
```html
<a href="mailto:info@example.com?subject=Help&body=I need help with...">
  Get Support
</a>
```

**Note:** Use `&` to separate parameters

---

## Telephone Links (Mobile)

```html
<a href="tel:+14405551234">Call Us: (440) 555-1234</a>
```

**What happens:**
- On mobile: Opens phone dialer
- On desktop: May open calling app
- Always display readable number

**Format:** `tel:+1` (country code) then number

---

## Anchor Links (Page Sections)

Link to specific parts of the same page:

**Step 1: Create an ID**
```html
<h2 id="services">Our Services</h2>
```

**Step 2: Link to the ID**
```html
<a href="#services">Jump to Services</a>
```

**The `#` means "go to this ID on this page"**

---

## Anchor Link Example

```html
<!-- Navigation at top -->
<nav>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>

<!-- Content sections -->
<section id="about">
  <h2>About Us</h2>
  <p>Content here...</p>
</section>

<section id="services">
  <h2>Our Services</h2>
  <p>Content here...</p>
</section>
```

---

## Opening Links in New Tabs

```html
<a href="https://www.google.com" target="_blank">
  Open Google in New Tab
</a>
```

**`target="_blank"`** opens in new window/tab

**⚠️ Use sparingly!** Users can choose to open in new tab themselves (right-click)

**Best for:** External sites, PDFs, documentation

---

## Link Best Practices

**❌ DON'T:**
```html
<a href="page.html">Click here</a>
<a href="page.html">Read more</a>
<a href="page.html">Link</a>
```

**✅ DO:**
```html
<a href="page.html">Contact Information</a>
<a href="page.html">View our Services</a>
<a href="page.html">Download the PDF Guide</a>
```

**Make link text descriptive!**

---

## Why Descriptive Link Text Matters

**For Users:**
- Know where link goes before clicking
- Can scan page for relevant links
- Clearer, more professional

**For Accessibility:**
- Screen readers often list all links
- "Click here" means nothing out of context
- Descriptive text is helpful

**For SEO:**
- Search engines use link text
- Descriptive text improves rankings

---

## Creating a Navigation Menu

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="contact.html">Contact</a>
</nav>
```

**Later with CSS, we'll make this look professional!**

---

## File Download Links

```html
<!-- PDF file -->
<a href="menu.pdf">Download Our Menu (PDF)</a>

<!-- ZIP file -->
<a href="photos.zip">Download Photo Gallery (ZIP)</a>

<!-- Document -->
<a href="resume.docx">My Resume (Word Doc)</a>
```

**Good practice:** Include file type and size
```html
<a href="guide.pdf">User Guide (PDF, 2.5 MB)</a>
```

---

## Link States (Preview)

Links have different states:

- **Normal:** Unvisited link
- **Visited:** Already clicked link
- **Hover:** Mouse over link
- **Active:** Being clicked

**We'll style these with CSS soon!**

Default browser styles: blue unvisited, purple visited

---

## Common Link Mistakes

**1. Broken Links**
```html
<!-- Wrong file name or path -->
<a href="abot.html">About</a>  <!-- Should be about.html -->
```

**2. Missing Protocol**
```html
<!-- Missing https:// -->
<a href="www.google.com">Google</a>  <!-- Won't work! -->
```

**3. Not Closing Tag**
```html
<a href="page.html">Link  <!-- Missing </a> -->
```

---

## Testing Your Links

**Always test:**
1. Click every link
2. Make sure it goes to the right place
3. Check that back button works
4. Test on different browsers if possible

**Tools:**
- Browser's "Developer Tools" (F12)
- HTML validator (W3C)
- Link checker tools online

---

## Navigation Best Practices

**Keep navigation:**
- Consistent across all pages
- In a logical order
- Clear and descriptive
- Not too long (5-7 main items ideal)

**Include:**
- Home link
- Major section links
- Contact link

---

## Building a Complete Nav Example

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="services.html">Services</a> |
    <a href="contact.html">Contact</a>
  </nav>
</header>
```

**Note:** The `|` creates visual separators (we'll style this better with CSS!)

---

## Linking Within Multi-Page Sites

**Imagine this structure:**
```
mysite/
├── index.html
├── about.html
└── contact.html
```

**Every page should link to others:**
- Index → about, contact
- About → index, contact
- Contact → index, about

**This creates connected navigation!**

---

## Example: Complete Three-Page Site

**index.html:**
```html
<nav>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
```

**about.html:**
```html
<nav>
  <a href="index.html">Home</a>
  <a href="contact.html">Contact</a>
</nav>
```

---

## URL Fragments (Advanced)

Link to section on another page:

```html
<!-- Go to services section on about page -->
<a href="about.html#services">Our Services</a>
```

**This:**
1. Loads about.html
2. Scrolls to #services section
3. Useful for long pages!

---

## Accessibility and Links

**Do:**
- Use descriptive link text
- Make links keyboard accessible (they are by default)
- Ensure enough color contrast
- Don't rely on color alone to show links

**Don't:**
- Use "click here" or "read more"
- Make images-only links without alt text
- Create links that open many popups

---

## Quick Review: Link Syntax

```html
<!-- Basic link -->
<a href="page.html">Link Text</a>

<!-- External link -->
<a href="https://example.com">External Site</a>

<!-- Email link -->
<a href="mailto:email@example.com">Email</a>

<!-- Phone link -->
<a href="tel:+14405551234">Call</a>

<!-- Anchor link -->
<a href="#section">Jump to Section</a>

<!-- New tab -->
<a href="page.html" target="_blank">New Tab</a>
```

---

## Common Link Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Destination | `href="page.html"` |
| `target` | Where to open | `target="_blank"` |
| `title` | Tooltip text | `title="More info"` |
| `download` | Force download | `download` |

---

## Organizing Your Site Files

**Good structure:**
```
website/
├── index.html          (homepage)
├── about.html
├── css/
│   └── styles.css
├── images/
│   ├── logo.png
│   └── banner.jpg
└── pages/
    ├── services.html
    └── portfolio.html
```

**This makes linking easier and more organized!**

---

## Today's Tasks

You'll create a multi-page website with:

1. **Home page** with navigation
2. **About page** with internal links
3. **Contact page** with email/phone links
4. **All pages** connected with navigation

**Focus on:**
- Working links between pages
- Both absolute and relative URLs
- Email and anchor links

---

## Questions?

Before we start coding:
- Absolute vs. relative URLs?
- Email links?
- Anchor links to sections?
- Navigation structure?

---

## Let's Build!

Open VS Code and let's create your first multi-page website!

**Tips:**
- Test links frequently
- Keep file names simple (no spaces!)
- Use consistent naming
- Organize files in folders

**Ready? Let's go!**
