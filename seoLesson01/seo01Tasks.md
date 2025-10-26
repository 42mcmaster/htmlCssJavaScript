# Lesson S1 Tasks: SEO Basics Practice

---

## Task 1: GUIDED EXAMPLE - Optimizing Meta Tags

**Practice writing good title tags and meta descriptions.**

### Instructions:
Create a file called `seo-meta-tags.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Professional Wedding Photography | Capture Your Special Day | PhotoPro Columbus</title>
    <meta name="description" content="Award-winning wedding photography in Columbus, Ohio. Packages starting at $1,500. View our portfolio and book your free consultation today!">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Professional Wedding Photography in Columbus, Ohio</h1>
        
        <p class="lead">
            Preserve your special moments with stunning wedding photography that 
            tells your unique love story.
        </p>
        
        <div class="alert alert-info">
            <h4>SEO Analysis of This Page:</h4>
            <ul>
                <li><strong>Title:</strong> 79 characters - Includes main keyword, location, and brand</li>
                <li><strong>Description:</strong> 147 characters - Includes service, location, price point, and CTA</li>
                <li><strong>H1:</strong> Matches title theme with location keyword</li>
            </ul>
        </div>
        
        <h2>Our Services</h2>
        <p>We offer comprehensive wedding photography packages...</p>
        
        <h2>Portfolio</h2>
        <p>View our gallery of recent weddings...</p>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Analyze:
1. Count the title characters (should be 50-60, this one is 79 - a bit long)
2. Count the description characters (should be 150-160)
3. Does the H1 contain the main keyword?
4. Is the title descriptive and compelling?

**Checkpoint:** Your meta tags should make someone want to click in search results!

---

## Task 2: SEO Audit Challenge

**Goal:** Fix SEO problems in a poorly optimized page.

### Instructions:
1. Create a file called `seo-audit.html`
2. Copy the code below (it has 10 SEO problems!)
3. Find and fix ALL issues

### Code to Fix:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    
    <!-- Problem 1: Missing viewport meta tag -->
    
    <!-- Problem 2: Generic, non-descriptive title -->
    <title>Home</title>
    
    <!-- Problem 3: Missing meta description -->
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <!-- Problem 4: Using h2 before h1 -->
        <h2>Welcome</h2>
        
        <!-- Problem 5: Missing h1 entirely -->
        
        <p>We make websites.</p>
        
        <!-- Problem 6: Image with empty alt text -->
        <img src="logo.png" alt="" class="img-fluid">
        
        <!-- Problem 7: Image with generic filename -->
        <img src="IMG_1234.jpg" alt="Our team" class="img-fluid">
        
        <!-- Problem 8: Non-descriptive link text -->
        <p>For more information, <a href="/services">click here</a>.</p>
        
        <!-- Problem 9: Using h4 without h3 (skipping levels) -->
        <h4>What We Do</h4>
        <p>Web design and development</p>
        
        <!-- Problem 10: No semantic HTML structure -->
        <div>Copyright 2025</div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Problems to Find and Fix:

1. ❌ Missing viewport meta tag
2. ❌ Generic title ("Home" tells us nothing)
3. ❌ Missing meta description
4. ❌ Wrong heading order (h2 before h1)
5. ❌ No h1 on page
6. ❌ Image with empty alt text
7. ❌ Generic image filename
8. ❌ "Click here" link text
9. ❌ Skipping heading levels (h2 to h4)
10. ❌ No semantic HTML (no header, main, footer tags)

### Expected Fixed Version:

After fixing, page should have:
- ✅ Viewport meta tag
- ✅ Descriptive title with keywords
- ✅ Compelling meta description
- ✅ One h1 at the top
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ All images with descriptive alt text
- ✅ Descriptive link text (not "click here")
- ✅ Semantic HTML structure

---

## Task 3: Create SEO-Optimized Service Pages

**Goal:** Create 3 service pages with proper SEO optimization.

### Instructions:
1. Create 3 HTML files:
   - `service-web-design.html`
   - `service-seo.html`
   - `service-hosting.html`

2. Each page must have:
   - Unique, descriptive title tag
   - Unique meta description
   - Proper heading hierarchy
   - At least one image with good alt text
   - Internal links to other service pages
   - Contact CTA

### Starter Code for Web Design Service:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Add your SEO meta tags here -->
    <title>ADD DESCRIPTIVE TITLE HERE</title>
    <meta name="description" content="ADD COMPELLING DESCRIPTION HERE">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">WebPro</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="/service-web-design.html">Web Design</a></li>
                <li class="nav-item"><a class="nav-link" href="/service-seo.html">SEO Services</a></li>
                <li class="nav-item"><a class="nav-link" href="/service-hosting.html">Hosting</a></li>
                <li class="nav-item"><a class="nav-link" href="/contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <main>
        <div class="container mt-5">
            <!-- Add proper h1 here -->
            
            <p class="lead">
                Write a compelling introduction to your web design services...
            </p>
            
            <!-- Add an image with good alt text -->
            
            <!-- Add content sections with h2 headings -->
            <h2>Why Choose Our Web Design Services?</h2>
            <p>Content here...</p>
            
            <h2>Our Web Design Process</h2>
            <p>Content here...</p>
            
            <!-- Add internal links to other services -->
            <p>
                Looking for more? Check out our 
                <a href="/service-seo.html">SEO services</a> and 
                <a href="/service-hosting.html">web hosting</a>.
            </p>
            
            <!-- Add CTA -->
            <div class="text-center my-5">
                <h2>Ready to Get Started?</h2>
                <a href="/contact.html" class="btn btn-primary btn-lg">Get a Free Quote</a>
            </div>
        </div>
    </main>
    
    <footer class="bg-dark text-white py-4 mt-5">
        <div class="container text-center">
            <p class="mb-0">© 2025 WebPro Solutions. All rights reserved.</p>
        </div>
    </footer>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements for Each Page:
- ✅ Unique title tag (different for each service)
- ✅ Unique meta description
- ✅ One h1 with service keyword
- ✅ At least 2 h2 sections
- ✅ One image with descriptive alt text
- ✅ Internal links to other 2 service pages
- ✅ Contact CTA button
- ✅ Semantic HTML (nav, main, footer)

### Title/Description Examples:

**Web Design:**
- Title: "Custom Web Design Services | Responsive & Mobile-Friendly | WebPro"
- Description: "Professional web design services. Custom, responsive websites that look great on all devices. Free consultation available."

**SEO Services:**
- Title: "Professional SEO Services | Improve Your Rankings | WebPro"
- Description: "Expert SEO services to boost your search rankings. Keyword research, on-page optimization, and link building. Get results fast."

**Hosting:**
- Title: "Reliable Web Hosting | Fast & Secure Servers | WebPro"
- Description: "Professional web hosting with 99.9% uptime guarantee. Fast servers, daily backups, and 24/7 support. Plans starting at $9/month."

---

## Task 4: Image SEO Optimization

**Goal:** Practice proper image optimization for SEO.

### Instructions:
1. Create a file called `image-seo.html`
2. Add 6 images with:
   - Descriptive filenames (not IMG_1234.jpg)
   - Detailed alt text
   - Proper context around images
   - Responsive sizing

### Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Portfolio | Web Design Projects | WebPro Solutions</title>
    <meta name="description" content="View our portfolio of recent web design projects. Custom websites for restaurants, retail stores, and professional services.">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Our Recent Web Design Projects</h1>
        <p class="lead">Browse our portfolio of custom website designs for clients across various industries.</p>
        
        <div class="row g-4 mt-4">
            <!-- Good Example -->
            <div class="col-md-6">
                <h2>Italian Restaurant Website</h2>
                <img src="bella-italia-restaurant-website-design.jpg" 
                     alt="Bella Italia restaurant website design featuring online menu and reservation system" 
                     class="img-fluid">
                <p class="mt-2">
                    Custom website for Bella Italia featuring an interactive menu, 
                    online reservations, and photo gallery.
                </p>
            </div>
            
            <!-- Add 5 more project images here with similar structure -->
            <!-- Each should have:
                 - Descriptive filename
                 - Detailed alt text
                 - Context (h2 and paragraph)
            -->
            
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ 6 portfolio images
- ✅ Each image has descriptive filename (with hyphens)
- ✅ Each alt text describes the specific project
- ✅ Context provided with h2 and paragraph
- ✅ Images use img-fluid class
- ✅ Responsive grid layout

**💡 Project Ideas:**
- Restaurant website
- E-commerce clothing store
- Real estate agency site
- Fitness center website
- Law firm website
- Photography portfolio

---

## Task 5: Complete SEO-Optimized Page

**Goal:** Create a fully optimized business homepage.

### Instructions:
1. Create `optimized-homepage.html`
2. Build a complete homepage with perfect SEO including:
   - Excellent title and description
   - Proper semantic HTML
   - Heading hierarchy
   - Optimized images
   - Internal links
   - Contact information
   - Content organized logically

### Requirements Checklist:

**Technical SEO:**
- ✅ Title tag (50-60 chars) with keyword and brand
- ✅ Meta description (150-160 chars) with CTA
- ✅ Viewport meta tag
- ✅ Valid semantic HTML

**Content Structure:**
- ✅ One h1 at top with main keyword
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ At least 4 sections with h2 headings
- ✅ 300+ words of quality content
- ✅ Natural keyword usage (not stuffed)

**Images:**
- ✅ At least 3 images
- ✅ All with descriptive alt text
- ✅ Descriptive filenames
- ✅ Responsive (img-fluid)

**Links:**
- ✅ At least 3 internal links
- ✅ Descriptive anchor text (not "click here")
- ✅ Navigation menu

**User Experience:**
- ✅ Clear call-to-action
- ✅ Contact information in footer
- ✅ Mobile-responsive
- ✅ Fast loading (optimized images)

### Starter Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Write excellent SEO meta tags -->
    <title>YOUR TITLE HERE</title>
    <meta name="description" content="YOUR DESCRIPTION HERE">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- Add navigation -->
    </nav>
    
    <!-- Hero Section -->
    <header class="bg-primary text-white py-5">
        <div class="container text-center">
            <h1>YOUR H1 HERE WITH MAIN KEYWORD</h1>
            <p class="lead">Compelling subtitle</p>
            <a href="#contact" class="btn btn-light btn-lg">Get Started</a>
        </div>
    </header>
    
    <!-- Services Section -->
    <section class="py-5">
        <div class="container">
            <h2>Our Services</h2>
            <!-- Add service content -->
        </div>
    </section>
    
    <!-- Why Choose Us Section -->
    <section class="bg-light py-5">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <!-- Add benefits -->
        </div>
    </section>
    
    <!-- Portfolio/Work Section -->
    <section class="py-5">
        <div class="container">
            <h2>Recent Projects</h2>
            <!-- Add portfolio items with optimized images -->
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="bg-light py-5">
        <div class="container">
            <h2>Get In Touch</h2>
            <!-- Add contact form or info -->
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <address>
                <!-- Add business contact info -->
            </address>
        </div>
    </footer>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## Bonus Challenge: SEO Competitor Analysis

**Goal:** Analyze real websites to understand good SEO.

### Instructions:
1. Visit 3 websites in the same industry (e.g., 3 local pizza restaurants)
2. Create a document comparing their SEO
3. For each site, check:
   - Title tag (view page source or browser tab)
   - Meta description (view page source)
   - H1 content
   - Image alt text (inspect element)
   - Page speed (use PageSpeed Insights)

### Create Comparison Document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Analysis Report</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>SEO Competitor Analysis</h1>
        
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Element</th>
                    <th>Website 1</th>
                    <th>Website 2</th>
                    <th>Website 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Title Tag</strong></td>
                    <td>[Copy their title]</td>
                    <td>[Copy their title]</td>
                    <td>[Copy their title]</td>
                </tr>
                <tr>
                    <td><strong>Title Length</strong></td>
                    <td>[Count characters]</td>
                    <td>[Count characters]</td>
                    <td>[Count characters]</td>
                </tr>
                <tr>
                    <td><strong>Has Meta Description?</strong></td>
                    <td>[Yes/No]</td>
                    <td>[Yes/No]</td>
                    <td>[Yes/No]</td>
                </tr>
                <tr>
                    <td><strong>H1 Content</strong></td>
                    <td>[What's their H1?]</td>
                    <td>[What's their H1?]</td>
                    <td>[What's their H1?]</td>
                </tr>
                <tr>
                    <td><strong>Images Have Alt Text?</strong></td>
                    <td>[Yes/No/Some]</td>
                    <td>[Yes/No/Some]</td>
                    <td>[Yes/No/Some]</td>
                </tr>
                <tr>
                    <td><strong>Mobile Friendly?</strong></td>
                    <td>[Yes/No]</td>
                    <td>[Yes/No]</td>
                    <td>[Yes/No]</td>
                </tr>
                <tr>
                    <td><strong>PageSpeed Score</strong></td>
                    <td>[0-100]</td>
                    <td>[0-100]</td>
                    <td>[0-100]</td>
                </tr>
            </tbody>
        </table>
        
        <h2>Key Findings</h2>
        <ul>
            <li>Write observation 1</li>
            <li>Write observation 2</li>
            <li>Write observation 3</li>
        </ul>
        
        <h2>What I Learned</h2>
        <p>Write what you learned from analyzing these sites...</p>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Analysis Tips:
- View page source (Right-click → View Page Source)
- Inspect images (Right-click image → Inspect)
- Use Google PageSpeed Insights
- Check mobile friendliness
- Note what they do well and poorly

---

## Quick SEO Checklist

Use this for EVERY page you create:

### Meta Tags
- [ ] Title tag 50-60 characters
- [ ] Meta description 150-160 characters
- [ ] Viewport meta tag present

### Content Structure
- [ ] One H1 with main keyword
- [ ] Proper heading hierarchy (no skipping levels)
- [ ] Semantic HTML (header, main, footer, nav, article)
- [ ] Quality, original content

### Images
- [ ] All images have alt text
- [ ] Alt text is descriptive
- [ ] Filenames are descriptive
- [ ] Images are optimized/compressed

### Links
- [ ] Internal links have descriptive anchor text
- [ ] No "click here" links
- [ ] All links work (no 404s)

### Technical
- [ ] Mobile responsive
- [ ] Fast loading
- [ ] Valid HTML

---

## Common SEO Mistakes to Avoid

❌ **Generic title**
```html
<title>Home</title>
```

✅ **Descriptive title**
```html
<title>Professional Web Design Services | Columbus, OH | WebPro</title>
```

❌ **Empty alt text**
```html
<img src="team.jpg" alt="">
```

✅ **Descriptive alt text**
```html
<img src="team.jpg" alt="WebPro development team collaborating on new project">
```

❌ **"Click here" links**
```html
<a href="/services">Click here</a> to learn more.
```

✅ **Descriptive links**
```html
Learn more about our <a href="/services">web design services</a>.
```

❌ **Skipping heading levels**
```html
<h1>Title</h1>
<h4>Subsection</h4>
```

✅ **Proper hierarchy**
```html
<h1>Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```
