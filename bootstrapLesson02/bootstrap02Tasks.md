# Lesson B2 Tasks: Grid System & Responsive Design Practice

---

## Task 1: GUIDED EXAMPLE - Two-Column Responsive Layout

**Follow these steps to create a simple responsive layout.**

### Step 1: Create the HTML
Create a file called `two-column.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two Column Layout</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .content-box {
            background-color: #e3f2fd;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 5px;
        }
        .sidebar-box {
            background-color: #fff3e0;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">My Responsive Page</h1>
        
        <div class="row">
            <!-- Main Content: Full width on mobile, 2/3 on desktop -->
            <div class="col-12 col-lg-8">
                <div class="content-box">
                    <h2>Main Content</h2>
                    <p>This is the main content area. On mobile devices, 
                       it takes the full width. On large screens (desktops), 
                       it takes up 8 out of 12 columns (about 2/3 of the width).</p>
                    <p>Try resizing your browser window to see it change!</p>
                </div>
            </div>
            
            <!-- Sidebar: Full width on mobile, 1/3 on desktop -->
            <div class="col-12 col-lg-4">
                <div class="sidebar-box">
                    <h3>Sidebar</h3>
                    <p>This sidebar also takes full width on mobile, 
                       but only 4 out of 12 columns on desktop (about 1/3).</p>
                    <p>On mobile, it appears below the main content.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### Step 2: Test It
1. Open the file in your browser
2. Press F12 to open DevTools
3. Click the device toolbar icon (phone/tablet icon)
4. Test these widths:
   - 375px (mobile)
   - 768px (tablet)
   - 1200px (desktop)

### Step 3: Observe the Changes
- **Mobile:** Boxes stack vertically (full width)
- **Desktop:** Boxes sit side-by-side (8-4 split)

### Step 4: Experiment
Try changing the column classes:
- Change `col-lg-8` to `col-lg-6` on main content
- Change `col-lg-4` to `col-lg-6` on sidebar
- What happens? (They should now split 50/50)

**Checkpoint:** You should see the layout change when you resize the browser!

---

## Task 2: Three-Column Card Grid

**Goal:** Create a responsive grid of product cards.

### Instructions:
1. Create a file called `product-grid.html`
2. Create 6 product cards that display:
   - **Mobile (xs):** 1 card per row (full width)
   - **Tablet (md):** 2 cards per row
   - **Desktop (lg):** 3 cards per row

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Grid</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Our Products</h1>
        
        <div class="row">
            <!-- Product Card 1 -->
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">Description of product 1.</p>
                        <span class="badge bg-success">$29.99</span>
                        <button class="btn btn-primary btn-sm mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
            
            <!-- Product Card 2 -->
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text">Description of product 2.</p>
                        <span class="badge bg-success">$39.99</span>
                        <button class="btn btn-primary btn-sm mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
            
            <!-- Add 4 more product cards here (Products 3-6) -->
            
        </div>
    </div>
</body>
</html>
```

### Requirements:
- ✅ Total of 6 product cards
- ✅ Each card has: title, description, price badge, and button
- ✅ Responsive: 1 column on mobile, 2 on tablet, 3 on desktop
- ✅ Use `h-100` class on cards so they're equal height
- ✅ Use `mb-4` for spacing between rows

### Testing:
- **375px:** Should see 1 card per row (6 rows total)
- **768px:** Should see 2 cards per row (3 rows total)
- **1200px:** Should see 3 cards per row (2 rows total)

**💡 Hint:** All cards should use the same column classes: `col-12 col-md-6 col-lg-4`

---

## Task 3: Team Member Grid

**Goal:** Create a team page with different layouts at different screen sizes.

### Instructions:
1. Create a file called `team.html`
2. Create 4 team member cards with:
   - Photo placeholder (use background color instead of image)
   - Name
   - Job title badge
   - Short bio
   - Contact button

3. Layout requirements:
   - **Mobile:** 1 per row (stacked)
   - **Tablet:** 2 per row
   - **Desktop:** 4 per row (all in one line)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .photo-placeholder {
            height: 200px;
            background-color: #6c757d;
            border-radius: 5px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Meet Our Team</h1>
        
        <div class="row">
            <!-- Team Member 1 -->
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <div class="card h-100 text-center">
                    <div class="card-body">
                        <div class="photo-placeholder"></div>
                        <h5 class="card-title">Alex Johnson</h5>
                        <span class="badge bg-primary mb-2">CEO</span>
                        <p class="card-text">Leading the company with vision and passion.</p>
                        <button class="btn btn-outline-primary btn-sm">Contact</button>
                    </div>
                </div>
            </div>
            
            <!-- Add 3 more team members here -->
            <!-- Use different job titles and bios -->
            
        </div>
    </div>
</body>
</html>
```

### Suggested Team Members:
- Member 2: "Sarah Lee" - "CTO" (Technical Officer)
- Member 3: "Mike Chen" - "Designer" 
- Member 4: "Emma Davis" - "Developer"

### Requirements:
- ✅ 4 team member cards total
- ✅ Each has: photo placeholder, name, job title badge, bio, button
- ✅ Cards are centered with text using `text-center`
- ✅ Different badge colors for each job title
- ✅ Equal height cards using `h-100`

**💡 Challenge:** Make the photo placeholders different colors for each person!

---

## Task 4: Blog Post Layout

**Goal:** Create a blog layout with main content and a sidebar.

### Instructions:
1. Create a file called `blog-post.html`
2. Create a layout with:
   - Main article area (left side on desktop)
   - Sidebar with "Related Articles" (right side on desktop)
   - On mobile, sidebar should appear BELOW the article

3. The article should be wider than the sidebar (8-4 split)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Post</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <!-- Main Article (hint: use col-12 col-lg-8) -->
            
                <h1>My Amazing Blog Post</h1>
                <p class="text-muted">Published on October 25, 2025</p>
                
                <p>This is the first paragraph of the blog post. 
                   It contains interesting information about the topic.</p>
                
                <p>This is the second paragraph with more details and examples.</p>
                
                <p>This is the third paragraph wrapping up the main points.</p>
                
                <div class="alert alert-info mt-4">
                    <strong>Key Takeaway:</strong> This article taught you something important!
                </div>
            
            
            <!-- Sidebar (hint: use col-12 col-lg-4) -->
            
                <div class="card">
                    <div class="card-header">
                        <h5>Related Articles</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="#">Article 1 Title</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Article 2 Title</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Article 3 Title</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="card mt-3">
                    <div class="card-header">
                        <h5>About the Author</h5>
                    </div>
                    <div class="card-body">
                        <p><strong>Jane Doe</strong></p>
                        <p class="text-muted">Web developer and writer</p>
                    </div>
                </div>
            
        </div>
    </div>
</body>
</html>
```

### Requirements:
- ✅ Main article takes 8 columns on desktop
- ✅ Sidebar takes 4 columns on desktop
- ✅ Both take full width (12 columns) on mobile
- ✅ Sidebar appears below article on mobile
- ✅ At least 2 cards in the sidebar

**💡 Testing:** At mobile width, you should scroll past the entire article before seeing the sidebar!

---

## Task 5: Centered Content with Offset

**Goal:** Practice centering content using column offsets.

### Instructions:
1. Create a file called `centered-content.html`
2. Create a login/signup form that is:
   - Centered on the page
   - 6 columns wide on desktop
   - Full width on mobile

3. Use `offset` classes to center it

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Form</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <!-- Hint: col-12 col-md-6 offset-md-3 -->
            <div class="___">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Sign Up</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Username</label>
                                <input type="text" class="form-control" placeholder="Enter username">
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Enter email">
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="Enter password">
                            </div>
                            
                            <button type="submit" class="btn btn-primary w-100">Create Account</button>
                        </form>
                        
                        <p class="text-center text-muted mt-3">
                            Already have an account? <a href="#">Log in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### Requirements:
- ✅ Form is centered on desktop using offset
- ✅ Form takes 6 columns on tablet/desktop (offset by 3)
- ✅ Form takes full width on mobile (no offset needed)
- ✅ All form inputs have proper spacing
- ✅ Submit button is full width using `w-100`

**The Math:**
- 3 columns empty (offset) + 6 columns content + 3 columns empty = 12 total
- This centers the 6-column content perfectly!

---

## Task 6: Nested Grid Layout

**Goal:** Practice nesting rows inside columns.

### Instructions:
1. Create a file called `nested-grid.html`
2. Create a layout with:
   - Header section (full width)
   - Main content area (8 columns)
     - Inside main: Two sub-sections side-by-side (nested grid!)
   - Sidebar (4 columns)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested Grid</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .section {
            background-color: #e3f2fd;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 5px;
        }
        .nested-section {
            background-color: #fff3e0;
            padding: 15px;
            border-radius: 5px;
        }
        .sidebar-section {
            background-color: #f3e5f5;
            padding: 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <!-- Header Row -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="section">
                    <h1 class="text-center">Website Header</h1>
                </div>
            </div>
        </div>
        
        <!-- Main Content + Sidebar Row -->
        <div class="row">
            <!-- Main Content Area -->
            <div class="col-12 col-lg-8">
                <div class="section">
                    <h2>Main Content Area</h2>
                    <p>This section contains nested content below.</p>
                    
                    <!-- NESTED ROW inside the main column -->
                    <div class="row mt-3">
                        <div class="col-12 col-md-6 mb-3">
                            <div class="nested-section">
                                <h4>Sub-section 1</h4>
                                <p>This is nested inside the main content.</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <div class="nested-section">
                                <h4>Sub-section 2</h4>
                                <p>This is also nested inside the main content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Sidebar -->
            <div class="col-12 col-lg-4">
                <div class="sidebar-section">
                    <h3>Sidebar</h3>
                    <p>This is the sidebar content.</p>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### Understanding Nested Grids:
- The **main content column** (8 columns wide) contains its own row
- Inside that nested row, you can create a NEW 12-column grid
- The nested columns split the main content area (not the whole page)

### Testing:
- **Desktop:** Header full width, main (8) + sidebar (4), two nested sections side-by-side
- **Mobile:** Everything stacks vertically

**💡 Key Concept:** When you nest a row inside a column, that row gets its own 12-column grid system!

---

## Task 7: Debug the Grid Layout

**Goal:** Find and fix grid system errors.

### Instructions:
1. Create a file called `debug-grid.html`
2. Copy this code (it has errors!):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debug Grid</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .box { 
            background-color: lightblue; 
            padding: 20px; 
            margin-bottom: 10px;
            border: 2px solid blue;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1>Debug This Grid!</h1>
        
        <!-- Problem 1: Missing row wrapper -->
        <div class="col-6">Box 1</div>
        <div class="col-6">Box 2</div>
        
        <!-- Problem 2: Columns add up to more than 12 -->
        <div class="row">
            <div class="col-8">Box A</div>
            <div class="col-8">Box B</div>
        </div>
        
        <!-- Problem 3: Content directly in row -->
        <div class="row">
            This text shouldn't be directly in the row!
        </div>
        
        <!-- Problem 4: Wrong responsive class -->
        <div class="row">
            <div class="col-12 col-large-6">Box X</div>
            <div class="col-12 col-large-6">Box Y</div>
        </div>
        
        <!-- Problem 5: Offset math doesn't work -->
        <div class="row">
            <div class="col-8 offset-6">Centered?</div>
        </div>
    </div>
</body>
</html>
```

3. Find and fix ALL 5 problems

### Problems to Find:
1. ❌ Columns without a row wrapper
2. ❌ Columns exceeding 12 in a row
3. ❌ Content directly in row (should be in column)
4. ❌ Invalid responsive breakpoint name
5. ❌ Offset math incorrect (8 + 6 = 14, exceeds 12)

### Debugging Checklist:
- [ ] All columns are inside rows?
- [ ] All rows are inside container?
- [ ] Column numbers add up to 12 or less?
- [ ] Content is inside columns, not directly in rows?
- [ ] Responsive class names are valid? (xs, sm, md, lg, xl)
- [ ] Offset + column width ≤ 12?

**Success:** When fixed, page should display neatly with no layout overflow or awkward spacing.

---

## Task 8: Responsive Feature Showcase

**Goal:** Create a complex responsive layout with multiple breakpoints.

### Instructions:
1. Create a file called `features.html`
2. Create 8 feature cards that display:
   - **Mobile (< 576px):** 1 per row (stacked)
   - **Small tablet (≥ 576px):** 2 per row
   - **Tablet (≥ 768px):** 4 per row
   - **Desktop (≥ 992px):** 4 per row (same as tablet)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feature Showcase</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-5">Platform Features</h1>
        
        <div class="row g-3">
            <!-- Feature 1 -->
            <div class="col-12 col-sm-6 col-md-3">
                <div class="card text-center h-100">
                    <div class="card-body">
                        <div class="display-4 text-primary">🚀</div>
                        <h5 class="card-title mt-3">Fast</h5>
                        <p class="card-text">Lightning-fast performance.</p>
                    </div>
                </div>
            </div>
            
            <!-- Add 7 more features here -->
            <!-- Use different emojis and descriptions -->
            
        </div>
    </div>
</body>
</html>
```

### Suggested Features:
- Feature 2: 🔒 "Secure" - "Bank-level security"
- Feature 3: 📱 "Mobile" - "Works on any device"
- Feature 4: ☁️ "Cloud" - "Access anywhere"
- Feature 5: 🎨 "Beautiful" - "Stunning design"
- Feature 6: 💡 "Smart" - "AI-powered features"
- Feature 7: 🌍 "Global" - "Worldwide reach"
- Feature 8: 💼 "Professional" - "Enterprise ready"

### Requirements:
- ✅ 8 feature cards total
- ✅ Uses 3 breakpoints: col-12, col-sm-6, col-md-3
- ✅ Each card has an emoji, title, and description
- ✅ Cards are centered with `text-center`
- ✅ Equal height cards using `h-100`
- ✅ Spacing between cards using `g-3` on the row

### Testing Breakpoints:
Test these widths in DevTools:
- 375px: Should see 1 per row (8 rows)
- 576px: Should see 2 per row (4 rows)
- 768px: Should see 4 per row (2 rows)

---

## Challenge Task: Complete Responsive Landing Page

**Goal:** Build a full landing page using everything you've learned.

### Instructions:
1. Create `landing-page.html`
2. Your page must include these sections:

**Section 1: Hero Section**
- Full-width centered heading
- Centered call-to-action button
- Use offset to center content (6 columns wide)

**Section 2: Three Benefits**
- 3 cards showing product benefits
- Layout: 1 column mobile, 3 columns desktop
- Each with icon/emoji, title, description

**Section 3: Two-Column About Section**
- Left: "About Us" text content (7 columns)
- Right: Key stats with badges (5 columns)
- Stacked on mobile

**Section 4: Team Grid**
- 6 team member cards
- Layout: 1 column mobile, 2 columns tablet, 3 columns desktop

**Section 5: Contact Section**
- Centered form (6 columns, offset by 3)
- Form with name, email, message fields
- Submit button

### Starter Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 0;
            margin-bottom: 50px;
        }
        .section-title {
            margin-top: 50px;
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <div class="hero">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2 text-center">
                    <h1 class="display-3 mb-4">Welcome to Our Platform</h1>
                    <p class="lead mb-4">The best solution for your business needs</p>
                    <button class="btn btn-light btn-lg">Get Started</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Benefits Section -->
    <div class="container">
        <h2 class="section-title text-center">Why Choose Us?</h2>
        <div class="row">
            <!-- Add 3 benefit cards here -->
        </div>
    </div>
    
    <!-- About Section -->
    <div class="container">
        <h2 class="section-title text-center">About Our Company</h2>
        <div class="row">
            <!-- Add two-column about section here -->
        </div>
    </div>
    
    <!-- Team Section -->
    <div class="container">
        <h2 class="section-title text-center">Meet the Team</h2>
        <div class="row">
            <!-- Add 6 team member cards here -->
        </div>
    </div>
    
    <!-- Contact Section -->
    <div class="container mb-5">
        <h2 class="section-title text-center">Get In Touch</h2>
        <div class="row">
            <!-- Add centered contact form here -->
        </div>
    </div>
</body>
</html>
```

### Requirements Checklist:
- ✅ Hero section with gradient background
- ✅ At least 3 benefit cards (responsive 1/3 split)
- ✅ Two-column about section (7-5 split on desktop)
- ✅ 6 team member cards (responsive 1/2/3 layout)
- ✅ Centered contact form (6 columns with offset)
- ✅ Proper spacing using Bootstrap spacing utilities
- ✅ All sections respond properly to screen size changes
- ✅ Uses at least 5 different Bootstrap components (cards, buttons, forms, badges, etc.)

### Bonus Challenges:
- ✨ Add a footer with social media links
- ✨ Include testimonials section with 2 cards
- ✨ Add pricing cards (3 tiers)
- ✨ Include alert messages for updates/news
- ✨ Use different color schemes for each section
- ✨ Add hover effects on cards using custom CSS

### Testing Requirements:
Test at all breakpoints:
- 375px (mobile)
- 576px (small)
- 768px (tablet)
- 992px (desktop)
- 1200px (large desktop)

**Success Criteria:**
- Page looks professional and organized
- Layout makes sense at all screen sizes
- Content doesn't overflow or get cut off
- Spacing is consistent throughout
- All interactive elements (buttons, forms) work
- No horizontal scrolling on any screen size

---

## Tips for Grid Success

1. **Start Mobile-First**
   - Begin with `col-12` (full width)
   - Add larger breakpoints as needed
   - Example: `col-12 col-md-6 col-lg-4`

2. **Math Matters**
   - Columns in a row should add to 12 (or less)
   - For offset: column + offset ≤ 12
   - Example: `col-6 offset-3` = 3 + 6 + 3 = 12 ✓

3. **Use DevTools**
   - Press F12 to test responsive layouts
   - Use device toolbar to preview different sizes
   - Check both portrait and landscape orientations

4. **Common Patterns to Remember**
   - Equal columns: `col` or `col-4` (for 3 across)
   - Sidebar layout: `col-lg-8` and `col-lg-4`
   - Centered content: `col-6 offset-3`
   - Product grid: `col-12 col-md-6 col-lg-4`

5. **Testing Checklist**
   - [ ] Looks good on phone (375px)
   - [ ] Looks good on tablet (768px)
   - [ ] Looks good on desktop (1200px)
   - [ ] No horizontal scrolling
   - [ ] Text is readable at all sizes
   - [ ] Buttons are tap-friendly on mobile

---

## Common Grid Mistakes to Avoid

❌ **Forgetting the container**
```html
<div class="row">...</div>  <!-- Missing container wrapper! -->
```

✅ **Always wrap rows in a container**
```html
<div class="container">
    <div class="row">...</div>
</div>
```

❌ **Columns exceeding 12**
```html
<div class="row">
    <div class="col-8">...</div>
    <div class="col-6">...</div>  <!-- 8 + 6 = 14! -->
</div>
```

✅ **Keep column sum ≤ 12**
```html
<div class="row">
    <div class="col-8">...</div>
    <div class="col-4">...</div>  <!-- 8 + 4 = 12 ✓ -->
</div>
```

❌ **Content directly in row**
```html
<div class="row">
    This text is loose!
</div>
```

✅ **Always put content in columns**
```html
<div class="row">
    <div class="col">
        This text is properly contained!
    </div>
</div>
```

❌ **Not testing on mobile**
```html
<div class="col-md-4">
    <!-- This is full width on mobile! Did you intend that? -->
</div>
```

✅ **Explicit mobile sizing**
```html
<div class="col-12 col-md-4">
    <!-- Clear: full width mobile, 1/3 width tablet+ -->
</div>
```

---

## Answer Key for Task 7 (Debug the Grid)

Here's the corrected code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debug Grid - Fixed</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .box { 
            background-color: lightblue; 
            padding: 20px; 
            margin-bottom: 10px;
            border: 2px solid blue;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1>Debug This Grid!</h1>
        
        <!-- FIX 1: Added row wrapper -->
        <div class="row">
            <div class="col-6"><div class="box">Box 1</div></div>
            <div class="col-6"><div class="box">Box 2</div></div>
        </div>
        
        <!-- FIX 2: Changed to col-6 so they add to 12 -->
        <div class="row">
            <div class="col-6"><div class="box">Box A</div></div>
            <div class="col-6"><div class="box">Box B</div></div>
        </div>
        
        <!-- FIX 3: Wrapped content in a column -->
        <div class="row">
            <div class="col-12">
                <div class="box">This text is now properly in a column!</div>
            </div>
        </div>
        
        <!-- FIX 4: Changed col-large-6 to col-lg-6 -->
        <div class="row">
            <div class="col-12 col-lg-6"><div class="box">Box X</div></div>
            <div class="col-12 col-lg-6"><div class="box">Box Y</div></div>
        </div>
        
        <!-- FIX 5: Changed to col-6 offset-3 (3+6+3=12) -->
        <div class="row">
            <div class="col-6 offset-3"><div class="box">Centered!</div></div>
        </div>
    </div>
</body>
</html>
```

**Corrections Made:**
1. Added `<div class="row">` wrapper around first two columns
2. Changed `col-8` + `col-8` to `col-6` + `col-6` (adds to 12)
3. Wrapped text content in a column div
4. Changed `col-large-6` to `col-lg-6` (correct breakpoint name)
5. Changed `col-8 offset-6` to `col-6 offset-3` (now adds to 12)

---

## Quick Reference: Grid Classes

| Purpose | Class Example | What It Does |
|---------|---------------|--------------|
| Container (fixed) | `container` | Centers content with max-width |
| Container (fluid) | `container-fluid` | Full-width container |
| Row | `row` | Wraps columns |
| Auto-width column | `col` | Equal width columns |
| Fixed-width column | `col-6` | Takes 6/12 (50%) of row |
| Responsive column | `col-12 col-md-6` | Full on mobile, half on tablet+ |
| Offset | `offset-3` | Adds 3 columns of empty space before |
| Responsive offset | `offset-md-2` | Offset only on medium screens+ |
| No gutters | `g-0` | Removes spacing between columns |
| Custom gutters | `g-3` | Medium spacing (default) |
| Vertical gutters | `gy-4` | Spacing between rows |
| Horizontal gutters | `gx-2` | Spacing between columns only |

**Remember:** 
- Always container → row → column
- Column numbers add to 12 (or less)
- Mobile-first: start with smallest breakpoint
- Test on multiple screen sizes!
