# **Lesson 4 Tasks: Images and Media**

## **Setup Instructions**

1. Create a new folder called `html-lesson4`
2. Create an `images` subfolder inside it
3. Gather or download 5-10 images for practice (use free stock photo sites)
4. Initialize as Git repository
5. Test all images display correctly
6. Push to GitHub when complete

---

## **Task 1: Photo Gallery Page**

**Objective:** Practice adding multiple images with proper attributes.

**Create:** `gallery.html`

**Requirements:**

1. Proper HTML5 structure with metadata
2. H1: "My Photo Gallery"
3. Brief introduction paragraph
4. At least 6 images organized in sections:
   - Nature (2 images)
   - Technology (2 images)
   - People (2 images)

**Each image must have:**
- Proper `src` path to images folder
- Descriptive `alt` text (10+ words)
- `width` and `height` attributes
- H3 heading above each section

**Bonus:**
- Add a `<figure>` with `<figcaption>` for at least 2 images
- Make images different sizes
- Add horizontal rules between sections

---

## **Task 2: Product Showcase**

**Objective:** Create a professional product page with images.

**Create:** `products.html`

**Content:**
Create a page showcasing 3 fictional products (electronics, clothing, food, etc.)

**For each product:**
- H2 with product name
- Product image (200x200 pixels)
- Price paragraph
- Description paragraph (3-4 sentences)
- "Add to Cart" link (href="#" for now)

**Image requirements:**
- All images in `images/products/` subfolder
- Consistent sizing (all 200x200)
- Descriptive alt text including product name
- Use `<figure>` and `<figcaption>` for each

**Example structure:**
```html
<article>
  <h2>Widget Pro 3000</h2>
  <figure>
    <img src="images/products/widget.jpg" 
         alt="Widget Pro 3000 in silver finish" 
         width="200" height="200" />
    <figcaption>Our best-selling widget</figcaption>
  </figure>
  <p><strong>Price: $49.99</strong></p>
  <p>Description goes here...</p>
  <p><a href="#">Add to Cart</a></p>
</article>
```

---

## **Task 3: Image Links Practice**

**Objective:** Make images clickable and understand image links.

**Create:** `thumbnail-gallery.html`

**Requirements:**

1. Create a page with 6 small thumbnail images (150x150)
2. Each thumbnail links to a larger version of the same image
3. Use descriptive alt text that works as a link
4. Include "back" link on each page

**File structure needed:**
```
html-lesson4/
├── thumbnail-gallery.html
├── full-image-1.html
├── full-image-2.html
├── images/
│   ├── thumbs/
│   │   ├── thumb1.jpg
│   │   └── thumb2.jpg
│   └── full/
│       ├── full1.jpg
│       └── full2.jpg
```

**Each full image page should have:**
- Large version of image (600x400)
- Caption explaining what it is
- "Back to Gallery" link

---

## **Task 4: About Us Page with Team Photos**

**Objective:** Combine images with semantic HTML.

**Create:** `about-team.html`

**Structure:**
```html
<header>
  <img src="images/logo.png" alt="Company logo" />
  <h1>About Our Team</h1>
</header>

<main>
  <section id="company">
    <h2>Our Company</h2>
    <p>Company description...</p>
  </section>
  
  <section id="team">
    <h2>Meet the Team</h2>
    
    <!-- Team member 1 -->
    <article>
      <h3>John Smith - CEO</h3>
      <img src="images/team/john.jpg" 
           alt="John Smith, CEO" 
           width="200" height="200" />
      <p>Bio paragraph...</p>
    </article>
    
    <!-- Repeat for 3 more team members -->
  </section>
</main>
```

**Requirements:**
- At least 4 team members with photos
- Each photo 200x200
- Descriptive bios (3-4 sentences each)
- Proper semantic structure
- Logo at top linking to index.html

---

## **Task 5: Multi-Page Site with Consistent Images**

**Objective:** Use same images across multiple pages.

**Create 3 pages:**
1. `index.html` - Homepage
2. `services.html` - Services page
3. `contact.html` - Contact page

**Requirements:**

**All pages must have:**
- Same logo at top (linking to index.html)
- Same navigation menu
- Same footer with social media icons
- Consistent styling

**Homepage:**
- Hero/banner image (800x400)
- Welcome heading and text
- 3 service preview images (300x200 each) linking to services page

**Services page:**
- 3 service sections
- Icon or image for each service
- Description paragraphs

**Contact page:**
- Location map image (600x400)
- Contact form placeholder (just text for now)
- Email and phone icons

**Image organization:**
```
images/
├── logo.png
├── banner.jpg
├── icons/
│   ├── email.png
│   ├── phone.png
│   └── location.png
└── services/
    ├── service1.jpg
    ├── service2.jpg
    └── service3.jpg
```

---

## **Task 6: Image Formats Comparison**

**Objective:** Understand different image formats.

**Create:** `formats.html`

**Requirements:**

1. Create a page explaining image formats
2. Include example of each format:
   - JPEG photo
   - PNG logo with transparency
   - GIF animation (optional)
   - SVG icon

**Structure:**
```html
<h1>Image Format Comparison</h1>

<section>
  <h2>JPEG - Best for Photos</h2>
  <img src="images/photo.jpg" alt="Sample JPEG photo" />
  <p>File size: ___KB</p>
  <p>Best for: Photographs with many colors</p>
</section>

<section>
  <h2>PNG - Best for Graphics</h2>
  <img src="images/logo.png" alt="Sample PNG logo" />
  <p>File size: ___KB</p>
  <p>Best for: Logos, icons, graphics with transparency</p>
</section>

<!-- Continue for other formats -->
```

---

## **Task 7: Debugging Exercise**

**Objective:** Fix broken image code.

**Create:** `debug-images.html`

**Copy and fix this broken code:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Image Debugging</title>
</head>
<body>
    <h1>Image Gallery</h1>
    
    <!-- Error 1: Missing alt -->
    <img src="images/photo1.jpg" />
    
    <!-- Error 2: Wrong path -->
    <img src="photo2.jpg" alt="Photo 2" />
    
    <!-- Error 3: Unclosed figure -->
    <figure>
        <img src="images/photo3.jpg" alt="Photo 3" />
        <figcaption>Beautiful sunset
    </figure>
    
    <!-- Error 4: Wrong attribute name -->
    <img source="images/photo4.jpg" alt="Photo 4" />
    
    <!-- Error 5: Distorted aspect ratio -->
    <img src="images/photo5.jpg" alt="Photo 5" 
         width="400" height="200" />
    
    <!-- Error 6: Missing closing bracket -->
    <img src="images/photo6.jpg" alt="Photo 6" width="300"
    
    <!-- Error 7: Bad alt text -->
    <img src="images/photo7.jpg" alt="image" />
    
    <!-- Error 8: Missing figcaption -->
    <figure>
        <img src="images/photo8.jpg" alt="Photo 8" />
    
    <!-- Error 9: Wrong element for caption -->
    <figure>
        <img src="images/photo9.jpg" alt="Photo 9" />
        <caption>This is a photo</caption>
    </figure>
    
    <!-- Error 10: Image link broken -->
    <a href="large.html">
        <img="images/thumb.jpg" alt="View larger" />
    </a>
</body>
</html>
```

**Find and fix all 10 errors! Document what each error was.**

---

## **GitHub Requirements**

Repository name: `html-lesson4`

**Required files:**
- gallery.html
- products.html
- thumbnail-gallery.html
- about-team.html
- index.html, services.html, contact.html
- formats.html
- debug-images.html
- images/ folder with all images
- README.md

**README should include:**
- Your name
- Description of each page
- Where you got images (credit sources!)
- What you learned about images

---

## **Self-Assessment Checklist**

- [ ] All images have alt attributes
- [ ] Alt text is descriptive (not just "image")
- [ ] Images are in organized folders
- [ ] File paths are correct
- [ ] Images display properly in browser
- [ ] Used figure/figcaption appropriately
- [ ] Images are optimized (reasonable file sizes)
- [ ] Respected image copyright
- [ ] Code is well-commented
- [ ] All links work

---

## **Common Mistakes to Avoid**

1. Forgetting alt attribute
2. Using "image" or "photo" as alt text
3. Wrong file paths
4. Not organizing images in folders
5. Using huge unoptimized images
6. Distorting images (wrong width/height ratio)
7. Using copyrighted images without permission
8. Putting alt text in figcaption and vice versa

---

## **Free Stock Photo Sources**

Safe sites for practice images:
- Unsplash.com
- Pexels.com
- Pixabay.com
- Freepik.com (some free)

**Always check the license!**

---

## **Extension Activities**

If you finish early:

1. **Photo Blog** - Create a blog with multiple posts, each with featured image
2. **Recipe Site** - Create recipe pages with food photos
3. **Portfolio** - Create a personal portfolio with project screenshots
4. **Before/After** - Create comparison page with before/after images

---

## **Next Lesson Preview**

Next we'll learn about **Lists** (ordered, unordered, and description lists) to organize information effectively!
