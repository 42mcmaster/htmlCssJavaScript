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
  - Responsive sizing

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

- **Responsive:** Test on mobile view—images should scale
- **Clean Layout:** Use CSS for spacing, colors, and alignment (optional but recommended)
- **Accessibility:** All images have alt text, table headers are clear, media has controls
- **Valid HTML5:** No errors in W3C validator

---

## Starter Tips

### Image URLs
- Use placeholder images from:
  - `https://via.placeholder.com/400x300?text=Product+Name`
  - Real product images from search (save locally or use URL)
  - Screenshots or photos you've taken

### Video URLs
- YouTube: Search for product demo or review, copy embed URL
- Sample royalty-free videos: `https://www.youtube.com/embed/9bZkp7q19f0`

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
- [ ] Images are responsive (work on mobile)
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

## Grading Rubric (20 points)

| Criteria | Points | Notes |
|----------|--------|-------|
| **HTML Structure** | 3 | Valid HTML5, semantic elements |
| **Images** | 4 | Alt text, captions, responsive, at least 3 images |
| **Media** | 4 | YouTube/video/audio embedded properly, controls visible |
| **Table** | 4 | Proper structure, headers, 4+ rows, colspan/rowspan used |
| **Design & Polish** | 3 | Clean layout, spacing, readability, professional appearance |
| **Functionality** | 2 | All media works, no broken links, responsive design |

---

## Extension Challenges

Want to go further? Try these:

1. **Add CSS Styling**
   - Custom colors, fonts, grid layout
   - Hover effects on images
   - Dark mode toggle

2. **Add Interactivity (JavaScript)**
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
- **Mobile test failing?** Add `max-width: 100%; height: auto;` to img CSS

Good luck! This is a real portfolio-ready project.

