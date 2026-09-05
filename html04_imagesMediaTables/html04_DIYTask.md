# Lesson 04 DIY Task: Product Showcase Page

## Challenge Overview

Build a **complete Product Showcase page** that incorporates everything you've learned in Lesson 04:
- Images with alt text and captions
- Embedded media (video/audio or YouTube)
- A data table for comparison

This is a real-world project that combines HTML5 skills with creative design!

**Time:** 45-60 minutes
**Skill Level:** Intermediate

---

## Project Requirements

### 1. Choose a Product
Pick any product to showcase (real or fictional). Examples:
- Smartphone, laptop, or smartwatch
- Bicycle, skateboard, or sports equipment
- Coffee maker, blender, or kitchen gadget
- Camera, headphones, or gaming console
- Anything you're interested in!

### 2. Build Your Page Structure

Your page must include:

#### Section 1: Header
- Page title (product name)
- Brief tagline or description

#### Section 2: Image Gallery
- **At least 3 product images** with:
  - Descriptive alt text (2-5 words)
  - Use `<figure>` and `<figcaption>` elements
  - Different views (front, side, top, detail, etc.)
  - `width` and `height` attributes on every image

#### Section 3: Media (Choose One)
- **Option A:** Embedded YouTube video (e.g., product demo, review, unboxing)
  - Use proper `<iframe>` embed syntax
  - Include title and allowfullscreen attributes
- **Option B:** HTML5 `<video>` or `<audio>`
  - Provide at least 2 source formats for compatibility
  - Include controls attribute

#### Section 4: Feature Comparison Table
- Compare your product to 2-3 competitors OR compare different models/versions
- **Minimum 4 rows, 3+ columns**
- Must include:
  - `<caption>` element for table title
  - `<th>` header cells with descriptive labels
  - At least one use of `colspan` or `rowspan`
  - Proper `<tr>` and `<td>` structure

#### Section 5: Footer
- Basic footer with copyright or additional info

---

## Design Guidelines

- **Image size:** Every image has `width` and `height` attributes
- **No CSS required:** This project is graded on HTML. Styling comes in Lesson 05.
- **Accessibility:** All images have alt text, table headers are clear, media has controls
- **Valid HTML5:** No errors in W3C validator

---

## Starter Tips

### Image URLs
- Where to get images:
  - The `images/` folder in this unit has free photos you can use (see `images/CREDITS.md` for who took them)
  - Real product photos — download the file and save it in your own `images/` folder, then use a relative path
  - Screenshots or photos you've taken

### Video URLs
- YouTube: Search for product demo or review, copy embed URL
- Free Creative Commons sample video (Big Buck Bunny): `https://www.youtube.com/embed/aqz-KE-bpKQ`

### Sample Product Data for Table
```
Product X | Product Y | Product Z
Standard | Premium | Pro
Price: $99 | Price: $149 | Price: $249
Battery: 20hrs | Battery: 30hrs | Battery: 40hrs
Warranty: 1yr | Warranty: 2yrs | Warranty: 3yrs
```

---

## Checklist Before Submission

- [ ] Page has valid HTML5 structure (DOCTYPE, html, head, body)
- [ ] All images display with alt text
- [ ] Figure/figcaption used for at least 2 images
- [ ] Every image has width and height attributes
- [ ] Media (video/audio/YouTube) embeds and plays
- [ ] Table displays properly with headers and data
- [ ] Table includes colspan or rowspan usage
- [ ] No broken links or missing files
- [ ] Page has a header and footer
- [ ] Tested in W3C HTML Validator: https://validator.w3.org/

---

## Submission Instructions

1. Save your file as `product-showcase.html`
2. Upload to your course folder
3. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
4. Optional: Deploy to GitHub Pages or a web server for sharing

---

## Grading Rubric

| Criteria | Looking for |
|----------|-------------|
| **HTML Structure** | Valid HTML5, semantic elements |
| **Images** | Alt text, captions, width/height set, at least 3 images |
| **Media** | YouTube/video/audio embedded properly, controls visible |
| **Table** | Proper structure, headers, 4+ rows, colspan/rowspan used |
| **Organization** | Sections in a sensible order, headings used, easy to read |
| **Functionality** | All media works, no broken links |

---

## Extension Challenges

Want to go further? Try these:

1. **Add Interactivity (JavaScript)**
   - Image carousel/slider
   - Video playlist
   - Filter table rows

3. **SEO Optimization**
   - Add meta descriptions, keywords
   - Use semantic HTML (article, section, nav)
   - Proper heading hierarchy

4. **Additional Sections**
   - Customer testimonials
   - Specifications list
   - Price/availability info
   - Call-to-action button

---

## Questions? Tips?

- **Alt text stuck?** Describe what someone would see if the image didn't load
- **Table colspan confused?** Draw it out on paper first—sketch the grid!
- **Video won't embed?** Check you're using the EMBED URL, not the SHARE URL

Good luck! This is a real portfolio-ready project.

