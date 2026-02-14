# Lesson 03 Walkthrough: Building Links & Navigation

## Overview
In this walkthrough, you will build a **3-page mini-site** with working navigation, page anchors, and contact links. We'll create:
- **index.html** — Home page with anchor links
- **about.html** — About page
- **contact.html** — Contact page with email link

## Part 1: Creating the Home Page (index.html)

### Step 1: Start with HTML5 Structure
Create a new file called `index.html` and type:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Travel Adventure - Home</title>
</head>
<body>

  <!-- Navigation in header -->
  <header id="top">
    <h1>Travel Adventure</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <!-- HOME PAGE CONTENT -->
  </main>

  <footer>
    <p>&copy; 2024 Travel Adventure. All rights reserved.</p>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </footer>

</body>
</html>
```

**Try This:** Create the home page structure above. Notice the navigation appears in both header and footer.

---

### Step 2: Add Content with Page Anchors

Now add content to the `<main>` section. Type this between the opening and closing `<main>` tags:

```html
  <main>
    <section id="featured">
      <h2>Featured Destinations</h2>
      <p>Explore the world's most beautiful places.</p>
    </section>

    <section id="packages">
      <h2>Our Packages</h2>
      <p>Choose from our curated travel packages designed for adventure seekers.</p>
    </section>

    <section id="testimonials">
      <h2>What Our Travelers Say</h2>
      <p>Join thousands of happy travelers who've explored with us.</p>
    </section>
  </main>
```

**Try This:** Replace the `<!-- HOME PAGE CONTENT -->` comment with the sections above.

---

### Step 3: Create a "Jump Navigation" Menu

Now let's add a special navigation menu at the top of the page that lets users jump to sections. Add this just after the opening `<main>` tag:

```html
  <main>
    <nav id="page-nav">
      <p>Jump to:</p>
      <ul>
        <li><a href="#featured">Featured Destinations</a></li>
        <li><a href="#packages">Our Packages</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#top">Back to Top</a></li>
      </ul>
    </nav>

    <!-- Rest of your content sections below -->
```

**Key Concept:** Notice each section has an `id` attribute. The jump navigation links to them using `#sectionName`.

---

### Step 4: Test Your Links

Now let's test what we have so far:

1. Save your `index.html` file
2. Open it in a browser
3. Click each link in the jump navigation
   - It should scroll to that section
   - The URL should show `index.html#featured`, `index.html#packages`, etc.

**Try This:** Click "Back to Top" at the bottom. The page should jump to the `<header id="top">` section.

---

## Part 2: Creating the About Page (about.html)

### Step 5: Create about.html

Create a new file called `about.html` with this content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Travel Adventure - About Us</title>
</head>
<body>

  <!-- Same navigation as index.html -->
  <header>
    <h1>Travel Adventure</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <h2>About Our Company</h2>
    <p>Travel Adventure was founded in 2015 with a mission to inspire wanderlust and create unforgettable experiences.</p>

    <section id="team">
      <h3>Our Team</h3>
      <p>Our team consists of experienced travel guides and adventure coordinators.</p>
    </section>

    <section id="mission">
      <h3>Our Mission</h3>
      <p>We believe travel transforms people. We're committed to sustainable and ethical travel practices.</p>
    </section>

    <!-- Jump links to sections on this page -->
    <nav>
      <a href="#team">Our Team</a>
      <a href="#mission">Our Mission</a>
      <a href="index.html">Back to Home</a>
    </nav>
  </main>

  <footer>
    <p>&copy; 2024 Travel Adventure. All rights reserved.</p>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </footer>

</body>
</html>
```

**Try This:** Create the `about.html` file with the content above. Save it in the same folder as `index.html`.

---

### Step 6: Test Navigation Between Pages

Now test the navigation:

1. Open `index.html` in your browser
2. Click "About Us" in the navigation menu
3. You should see the `about.html` page load
4. Click "Home" to return to `index.html`

**Key Concept:** The links use **relative paths** like `href="about.html"` because both files are in the same folder.

---

## Part 3: Creating the Contact Page (contact.html)

### Step 7: Create contact.html with Email Links

Create a new file called `contact.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Travel Adventure - Contact Us</title>
</head>
<body>

  <header>
    <h1>Travel Adventure</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <h2>Contact Us</h2>
    <p>Ready to book your adventure? Get in touch with us today!</p>

    <section id="contact-info">
      <h3>Contact Information</h3>

      <!-- Email link -->
      <p>Email: <a href="mailto:info@traveladventure.com">info@traveladventure.com</a></p>

      <!-- Email with subject -->
      <p>
        Have a question?
        <a href="mailto:support@traveladventure.com?subject=Travel%20Question">Send us an email</a>
      </p>

      <!-- Phone link (tel: protocol) -->
      <p>Phone: <a href="tel:+1-555-0123">(555) 012-3456</a></p>
    </section>

    <section id="booking">
      <h3>Booking Information</h3>
      <p>Download our brochure to see all available packages:</p>
      <!-- Download link -->
      <a href="brochure.pdf" download>Download Brochure (PDF)</a>
    </section>

    <!-- Navigation -->
    <nav>
      <a href="#contact-info">Contact Info</a>
      <a href="#booking">Booking Info</a>
      <a href="index.html">Back to Home</a>
    </nav>
  </main>

  <footer>
    <p>&copy; 2024 Travel Adventure. All rights reserved.</p>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </footer>

</body>
</html>
```

**Try This:** Create the `contact.html` file. Save it in the same folder as the other pages.

---

### Step 8: Test Email Links

Now test the email functionality:

1. Open `contact.html` in your browser
2. Click on the email link
   - Your default email client should open
   - The "To:" field should be pre-filled with the email address
3. You can type your message and send it (or just close it)

**Key Concept:** The `mailto:` protocol tells the browser to open an email application. It doesn't send emails automatically.

---

## Part 4: Review and Optimization

### Step 9: Test All Links

Create a checklist and test everything:

- **Navigation links:**
  - From index.html, can you reach about.html and contact.html?
  - From about.html, can you reach home and contact?
  - From contact.html, can you reach home and about?

- **Page anchors:**
  - Do the "Jump to" links on index.html work?
  - Do the section links on about.html and contact.html work?

- **Special links:**
  - Does the email link open your email client?
  - Does the "Back to Top" link work on index.html?

**Try This:** Open each HTML file and click through all the links. Make a list of any that don't work, and we'll fix them together.

---

### Step 10: Make Improvements

**Optional Enhancement:** Add external links

Try adding this line to your contact page (before the footer):

```html
    <p>
      Check out our partnership with
      <a href="https://www.adventureguides.com" target="_blank">Adventure Guides</a>
      for more resources.
    </p>
```

Notice the `target="_blank"` attribute. This opens the external link in a new tab, so users don't leave your site.

---

## Summary

You've successfully built a **3-page website** with:
- Absolute and relative links
- Page anchors and fragment identifiers
- Email links using `mailto:`
- Download links using the `download` attribute
- Consistent navigation across all pages

**Save all three files (index.html, about.html, contact.html) in the same folder.**

---

## Troubleshooting

**Q: Links aren't working. What should I check?**
A: Check the file names and paths. Make sure:
   - File names match exactly (case-sensitive on some systems)
   - Files are in the same folder
   - `id` attributes are spelled correctly

**Q: Email link doesn't open my email app**
A: Your computer may not have a default email client. That's okay! The link still works.

**Q: How do I link from a page in a subfolder?**
A: Use `../` to go up one folder level:
   ```html
   <a href="../index.html">Home</a>
   ```

---
