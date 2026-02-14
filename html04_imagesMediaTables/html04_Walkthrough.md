# Lesson 04 Walkthrough: Building a Product Showcase Page

## Overview

In this guided walkthrough, you will build a **Product Showcase page** that includes:
- An image gallery with alt text and captions
- An embedded product video
- A comparison table of product features

**Time:** 30-35 minutes

---

## Part 1: Setting Up the HTML Structure

Start with a basic HTML5 document. Fill in the missing parts (marked with `___`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>___</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }
    th {
      background-color: #333;
      color: white;
    }
  </style>
</head>
<body>

  <header>
    <h1>___</h1>
    <p>Explore our premium product lineup</p>
  </header>

  <!-- You'll add image gallery here -->

  <!-- You'll add video here -->

  <!-- You'll add comparison table here -->

</body>
</html>
```

**FILL IN THE BLANKS:**
- Title tag: `Premium Wireless Headphones`
- Header h1: `Premium Wireless Headphones`

---

## Part 2: Adding an Image Gallery with Captions

Add this section inside the `<body>` (after `<header>`):

```html
<section id="gallery">
  <h2>Product Gallery</h2>

  <figure>
    <img src="https://via.placeholder.com/400x300?text=Product+View+1"
         alt="___">
    <figcaption>Front view of the wireless headphones</figcaption>
  </figure>

  <figure>
    <img src="https://via.placeholder.com/400x300?text=Product+View+2"
         alt="___">
    <figcaption>Side view showing ear cup design</figcaption>
  </figure>

  <figure>
    <img src="https://via.placeholder.com/400x300?text=Product+View+3"
         alt="___">
    <figcaption>Top view with control buttons visible</figcaption>
  </figure>
</section>
```

**FILL IN THE BLANKS:**
- Alt text for image 1: `Black wireless headphones with blue accent, front view`
- Alt text for image 2: `Wireless headphones showing padded ear cup with gold trim`
- Alt text for image 3: `Overhead view of headphones with labeled control buttons`

**Key concepts:**
- Use descriptive `alt` text for accessibility (screen readers, image fails to load)
- `<figure>` + `<figcaption>` keeps images and captions semantically related
- Images use placeholder URLs (students replace with their own later)

---

## Part 3: Embedding a Product Video

Add this section (after the gallery section):

```html
<section id="video">
  <h2>Watch the Product Demo</h2>

  <!-- Embedded YouTube video -->
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/___"
    title="Product Demo Video"
    allowfullscreen>
  </iframe>
</section>
```

**FILL IN THE BLANK:**
- YouTube video ID: `dQw4w9WgXcQ` (famous Rick Roll video for demo; students find a real product video)

**Key concepts:**
- `<iframe>` embeds external content (like YouTube)
- Use the **embed URL** (ends with `/embed/VIDEO_ID`), not the share URL
- `allowfullscreen` attribute lets users expand to full screen
- `title` improves accessibility

---

## Part 4: Creating a Feature Comparison Table

Add this section (after the video section):

```html
<section id="comparison">
  <h2>Product Comparison</h2>

  <table>
    <caption>Wireless Headphone Models Comparison</caption>
    <tr>
      <th>Feature</th>
      <th>___</th>
      <th>Premium Plus</th>
      <th>Professional</th>
    </tr>
    <tr>
      <td>Battery Life</td>
      <td>20 hours</td>
      <td>30 hours</td>
      <td>___</td>
    </tr>
    <tr>
      <td>Noise Cancellation</td>
      <td>Passive</td>
      <td>___</td>
      <td>Active (Adjustable)</td>
    </tr>
    <tr>
      <td>Bluetooth Range</td>
      <td>10m</td>
      <td>15m</td>
      <td>___</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>$99.99</td>
      <td>$149.99</td>
      <td>___</td>
    </tr>
  </table>
</section>
```

**FILL IN THE BLANKS:**
- Column 2 header (th): `Basic Model`
- Battery Life for Professional: `40 hours`
- Noise Cancellation for Premium Plus: `Active (Preset Modes)`
- Bluetooth Range for Professional: `20m`
- Price for Professional: `$249.99`

**Key concepts:**
- `<table>` organizes data into rows and columns
- `<th>` = header cells (bold, centered); `<td>` = data cells
- `<caption>` provides table title for accessibility
- Tables make complex comparisons easy to read

---

## CHALLENGE: Add colspan/rowspan

Modify the table to merge the header row. Replace the first `<tr>` with:

```html
<tr>
  <th colspan="___">Product Models</th>
  <th>Basic Model</th>
  <th>Premium Plus</th>
  <th>Professional</th>
</tr>
```

**FILL IN THE BLANK:**
- colspan value: `1` (spans just 1 column, the "Feature" column)

---

## Part 5: Testing & Validation

1. Save your file as `product-showcase.html`
2. Open it in a browser—verify:
   - All images load with proper alt text (use developer tools)
   - Video embeds and has controls
   - Table displays correctly with aligned columns
   - Page is responsive (test on mobile view)
3. Use the W3C HTML Validator: https://validator.w3.org/

---

## Summary

You've built a product showcase page with:
- ✓ Semantic image structure using `<figure>` and `<figcaption>`
- ✓ Descriptive alt text for accessibility
- ✓ Embedded external video via `<iframe>`
- ✓ Data-driven table with proper headers
- ✓ Responsive design

**Next:** Move to the individual tasks (04a, 04b, 04c) to practice each skill independently!

