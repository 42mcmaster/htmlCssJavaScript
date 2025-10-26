# Lesson B3 Tasks: Navigation & Layout Components Practice

---

## Task 1: GUIDED EXAMPLE - Basic Navbar

**Follow these steps to create your first Bootstrap navbar.**

### Step 1: Create the HTML
Create a file called `basic-navbar.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Navbar</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <!-- Brand/Logo -->
            <a class="navbar-brand" href="#">MyWebsite</a>
            
            <!-- Hamburger Menu Button (for mobile) -->
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Navigation Links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Page Content -->
    <div class="container mt-5">
        <h1>Welcome to My Website</h1>
        <p>This is a simple page with a responsive navbar.</p>
        <p>Try resizing your browser window to see the navbar collapse into a hamburger menu!</p>
    </div>
    
    <!-- Bootstrap JavaScript - REQUIRED for navbar to work! -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Step 2: Test It
1. Open the file in your browser
2. You should see a blue navbar with your site name and links
3. Press F12 to open DevTools
4. Click the device toolbar icon
5. Resize to mobile width (375px)

### Step 3: Observe Mobile Behavior
- **Desktop:** Links appear horizontally on the right
- **Mobile:** Hamburger menu (☰) appears
- Click the hamburger to expand/collapse the menu

### Step 4: Experiment
Try these changes:
1. Change `bg-primary` to `bg-dark`
2. Change `ms-auto` to `mx-auto` (centers the links)
3. Add a fifth link (Portfolio)
4. Change "MyWebsite" to your own name

**Checkpoint:** Navbar should collapse on mobile and expand on desktop!

---

## Task 2: Business Website Navbar

**Goal:** Create a professional navbar for a business website.

### Instructions:
1. Create a file called `business-navbar.html`
2. Create a navbar with:
   - Company name as the brand
   - Links: Home, Services, About Us, Pricing, Contact
   - Light gray background (`bg-light`)
   - Links aligned to the right
   - "Home" should be the active page

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Site</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">TechSolutions Inc.</a>
            
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#businessNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="businessNav">
                <!-- Add navigation links here -->
                <!-- Remember to use ms-auto to align right -->
                
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Welcome to TechSolutions</h1>
        <p>Your technology partner for success.</p>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ Light gray navbar (`navbar-light bg-light`)
- ✅ Brand name on the left
- ✅ 5 navigation links on the right
- ✅ Home link has `active` class
- ✅ Collapses to hamburger menu on mobile

**💡 Hint:** Use `ms-auto` on the `navbar-nav` to push links to the right.

---

## Task 3: Navbar with Dropdown Menu

**Goal:** Add a dropdown menu to your navigation.

### Instructions:
1. Create a file called `dropdown-navbar.html`
2. Create a navbar with:
   - Regular links: Home, About, Contact
   - A "Products" dropdown with 4 product categories
   - Dark navbar (`bg-dark`)

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Navbar</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">ShopHub</a>
            
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#dropdownNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="dropdownNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    
                    <!-- Products Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" 
                           id="productsDropdown" role="button" 
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                            <li><a class="dropdown-item" href="#">Electronics</a></li>
                            <!-- Add 3 more dropdown items here -->
                            
                        </ul>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Welcome to ShopHub</h1>
        <p>Browse our product categories using the dropdown menu.</p>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Suggested Dropdown Items:
- Electronics
- Clothing
- Home & Garden
- Sports & Outdoors

### Requirements:
- ✅ Dark navbar with light text
- ✅ Products dropdown with 4 categories
- ✅ Other regular links work normally
- ✅ Dropdown opens when clicked
- ✅ Mobile-responsive

**💡 Testing:** Make sure the dropdown works on both desktop AND mobile views!

---

## Task 4: E-commerce Navbar with Search

**Goal:** Create a shopping site navbar with a search bar and cart button.

### Instructions:
1. Create a file called `ecommerce-navbar.html`
2. Include:
   - Brand/logo on the left
   - Search bar in the middle/right
   - Shopping cart button with badge showing item count
   - Login link

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Navbar</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ShopMart</a>
            
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#shopNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="shopNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Deals</a>
                    </li>
                </ul>
                
                <!-- Search Form -->
                <form class="d-flex me-3" role="search">
                    <input class="form-control me-2" type="search" 
                           placeholder="Search products" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
                
                <!-- Cart and Login -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            🛒 Cart <span class="badge bg-danger">3</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Welcome to ShopMart</h1>
        <div class="row mt-4">
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">$29.99</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text">$39.99</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Product 3</h5>
                        <p class="card-text">$19.99</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ Search bar with input and button
- ✅ Cart link with item count badge
- ✅ Shop and Deals links on left side
- ✅ Login link on right side
- ✅ Product cards below navbar
- ✅ Everything responsive

**💡 Bonus:** Try changing the badge number when you click "Add to Cart" (you'll need JavaScript for this, but just try clicking to see the current behavior).

---

## Task 5: Fixed Top Navbar with Page Sections

**Goal:** Create a fixed navbar that stays at the top while scrolling.

### Instructions:
1. Create a file called `fixed-navbar.html`
2. Create a navbar that:
   - Stays fixed at the top while scrolling
   - Has links to different page sections
   - Page has enough content to scroll
3. Add proper padding to body so content doesn't hide behind navbar

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Navbar</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        body {
            padding-top: 56px; /* Height of navbar */
        }
        section {
            padding: 60px 0;
            min-height: 400px;
        }
        .section-home {
            background-color: #e3f2fd;
        }
        .section-about {
            background-color: #f3e5f5;
        }
        .section-services {
            background-color: #fff3e0;
        }
        .section-contact {
            background-color: #e8f5e9;
        }
    </style>
</head>
<body>
    <!-- Fixed Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">MyPortfolio</a>
            
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#fixedNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="fixedNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Home Section -->
    <section id="home" class="section-home">
        <div class="container">
            <h1 class="display-4">Welcome to My Portfolio</h1>
            <p class="lead">Scroll down to see the fixed navbar in action!</p>
            <p>Notice how the navbar stays at the top as you scroll.</p>
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="section-about">
        <div class="container">
            <h2>About Me</h2>
            <p>I'm a web developer passionate about creating beautiful websites.</p>
            <p>Add more content here about yourself...</p>
        </div>
    </section>
    
    <!-- Services Section -->
    <section id="services" class="section-services">
        <div class="container">
            <h2>My Services</h2>
            <div class="row">
                <div class="col-md-4">
                    <h4>Web Design</h4>
                    <p>Beautiful, responsive websites</p>
                </div>
                <div class="col-md-4">
                    <h4>Development</h4>
                    <p>Clean, efficient code</p>
                </div>
                <div class="col-md-4">
                    <h4>Consulting</h4>
                    <p>Technical advice and strategy</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="section-contact">
        <div class="container">
            <h2>Contact Me</h2>
            <p>Email: hello@myportfolio.com</p>
            <p>Phone: (555) 123-4567</p>
        </div>
    </section>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Testing:
1. Open the page and scroll down
2. Notice the navbar stays at the top
3. Click the navbar links to jump to sections
4. Test on mobile - navbar should still be fixed

### Requirements:
- ✅ Navbar uses `fixed-top` class
- ✅ Body has `padding-top` to prevent content hiding
- ✅ Links jump to page sections using IDs
- ✅ At least 4 sections with different background colors
- ✅ Page has enough content to scroll

**💡 Observe:** The navbar "covers" content as you scroll - that's why we need the padding!

---

## Task 6: Navbar with Multiple Dropdowns

**Goal:** Create a complex navbar with multiple dropdown menus.

### Instructions:
1. Create a file called `multi-dropdown-navbar.html`
2. Create a navbar with:
   - Home link
   - "Services" dropdown with 3 items
   - "Products" dropdown with 4 items (including a divider)
   - "Resources" dropdown with 3 items
   - Contact link

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Dropdowns</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">BusinessCorp</a>
            
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#multiNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="multiNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    
                    <!-- Services Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" 
                           id="servicesDropdown" data-bs-toggle="dropdown">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Web Development</a></li>
                            <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
                            <li><a class="dropdown-item" href="#">Cloud Solutions</a></li>
                        </ul>
                    </li>
                    
                    <!-- Products Dropdown (add this) -->
                    <!-- Should have: Hardware, Software, (divider), Enterprise Solutions, Custom Tools -->
                    
                    
                    <!-- Resources Dropdown (add this) -->
                    <!-- Should have: Documentation, Tutorials, Support -->
                    
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Welcome to BusinessCorp</h1>
        <p>Explore our services, products, and resources using the dropdown menus.</p>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ 3 separate dropdown menus
- ✅ Services dropdown: 3 items
- ✅ Products dropdown: 4 items with a divider after item 2
- ✅ Resources dropdown: 3 items
- ✅ All dropdowns work properly
- ✅ Mobile responsive

**💡 Hint:** Use `<hr class="dropdown-divider">` to add a divider line in the Products dropdown.

---

## Task 7: Debug the Navbar

**Goal:** Find and fix errors in this navbar code.

### Instructions:
1. Create a file called `debug-navbar.html`
2. Copy this code (it has 6 errors!):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debug Navbar</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Error 1: Wrong color combination -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">BuggyNav</a>
            
            <!-- Error 2: Wrong data-bs-target -->
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#wrongID">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Error 3: ID doesn't match button target -->
            <div class="collapse navbar-collapse" id="navbarBuggy">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    
                    <!-- Error 4: Missing dropdown class on li -->
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="#" 
                           id="productsDropdown" data-bs-toggle="dropdown">
                            Products
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Item 1</a></li>
                            <li><a class="dropdown-item" href="#">Item 2</a></li>
                        </ul>
                    </li>
                    
                    <!-- Error 5: Missing nav-link class -->
                    <li class="nav-item">
                        <a href="#">About</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Debug This Navbar!</h1>
        <p>Find and fix all 6 errors.</p>
    </div>
    
    <!-- Error 6: Missing Bootstrap JavaScript -->
</body>
</html>
```

### Errors to Find:
1. ❌ Wrong navbar color combination (dark text on light background)
2. ❌ Button `data-bs-target` doesn't match collapse ID
3. ❌ Collapse div ID doesn't match button target
4. ❌ Dropdown missing `dropdown` class on `<li>`
5. ❌ About link missing `nav-link` class
6. ❌ Missing Bootstrap JavaScript at the end

### Success Criteria:
- Navbar colors look correct
- Hamburger menu works on mobile
- Dropdown menu works
- All links styled properly
- No console errors

---

## Task 8: Complete Website with Navbar

**Goal:** Build a complete single-page website with navigation.

### Instructions:
1. Create a file called `complete-site.html`
2. Build a website with:
   - Fixed navbar with logo and 4+ links
   - Hero section with title, subtitle, and CTA button
   - Features section with 3 cards
   - About section with 2-column layout
   - Contact section with centered content
   - Footer

### Starter Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Website</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        body {
            padding-top: 56px;
        }
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 0;
        }
        .section {
            padding: 60px 0;
        }
    </style>
</head>
<body>
    <!-- Navbar (add fixed-top) -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <!-- Add your navbar here -->
    </nav>
    
    <!-- Hero Section -->
    <div class="hero">
        <div class="container text-center">
            <h1 class="display-3">Welcome to Our Platform</h1>
            <p class="lead mb-4">Building amazing web experiences</p>
            <button class="btn btn-light btn-lg">Get Started</button>
        </div>
    </div>
    
    <!-- Features Section -->
    <section class="section">
        <div class="container">
            <h2 class="text-center mb-5">Our Features</h2>
            <div class="row">
                <!-- Add 3 feature cards here -->
            </div>
        </div>
    </section>
    
    <!-- About Section -->
    <section class="section bg-light">
        <div class="container">
            <h2 class="text-center mb-5">About Us</h2>
            <div class="row">
                <div class="col-md-6">
                    <!-- About content -->
                </div>
                <div class="col-md-6">
                    <!-- Image or additional content -->
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2 class="text-center mb-4">Contact Us</h2>
                    <!-- Add contact info or form -->
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p class="mb-0">© 2025 Your Company. All rights reserved.</p>
        </div>
    </footer>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements Checklist:
- ✅ Fixed navbar at top
- ✅ Logo/brand on left, links on right
- ✅ Hero section with gradient background
- ✅ 3 feature cards in responsive grid
- ✅ About section with 2-column layout
- ✅ Contact section centered
- ✅ Footer at bottom
- ✅ All sections have proper spacing
- ✅ Fully responsive on all screen sizes

**💡 Bonus Challenges:**
- Add a dropdown menu to the navbar
- Add a search bar to the navbar
- Include testimonials section
- Add smooth scrolling to section links
- Include social media icons in footer

---

## Challenge Task: Restaurant Website

**Goal:** Create a complete restaurant website with advanced navbar features.

### Instructions:
1. Create `restaurant-site.html`
2. Build a restaurant website including:

**Navbar Requirements:**
- Restaurant name/logo
- Links: Home, Menu (dropdown), About, Reservations, Contact
- Menu dropdown should have: Appetizers, Main Courses, Desserts, Drinks
- Include a "Order Online" button
- Use a custom color scheme (not default Bootstrap colors)

**Page Sections:**
1. **Hero**: Large image/gradient with restaurant name and tagline
2. **Featured Dishes**: 4 cards in responsive grid
3. **About**: 2-column with text and image placeholder
4. **Hours & Location**: Centered information
5. **Footer**: Contact info and social media

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Name</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        body {
            padding-top: 56px;
        }
        /* Custom navbar color */
        .navbar-custom {
            background-color: #2c3e50;
        }
        .hero {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('restaurant-bg.jpg') center/cover;
            color: white;
            padding: 150px 0;
            text-align: center;
        }
        .section {
            padding: 60px 0;
        }
        .dish-card {
            transition: transform 0.3s;
        }
        .dish-card:hover {
            transform: translateY(-5px);
        }
    </style>
</head>
<body>
    <!-- Build your restaurant navbar here -->
    
    
    <!-- Build your page sections here -->
    
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Detailed Requirements:

**Navbar:**
- ✅ Custom dark color (not bg-dark)
- ✅ Restaurant name with nice font
- ✅ Menu dropdown with 4 categories
- ✅ "Order Online" button in primary color
- ✅ All links right-aligned
- ✅ Fixed to top

**Featured Dishes Section:**
- ✅ 4 dish cards
- ✅ Each card: dish name, description, price badge, order button
- ✅ Responsive: 1/2/4 columns (mobile/tablet/desktop)
- ✅ Hover effect (card lifts up)

**About Section:**
- ✅ Left column: Restaurant story and description
- ✅ Right column: Image placeholder (colored div)
- ✅ Stacks on mobile

**Hours & Location:**
- ✅ Centered content
- ✅ Opening hours in a nice format
- ✅ Address information
- ✅ Phone and email

**Footer:**
- ✅ Dark background
- ✅ Social media links (use emojis or text)
- ✅ Copyright information
- ✅ Centered text

### Testing Requirements:
- [ ] Navbar collapses properly on mobile
- [ ] Menu dropdown works on all screen sizes
- [ ] All sections look good on mobile (375px)
- [ ] All sections look good on tablet (768px)
- [ ] All sections look good on desktop (1200px+)
- [ ] No horizontal scrolling at any size
- [ ] Buttons and links are easy to click
- [ ] Color scheme looks professional

### Bonus Features:
- ✨ Add a special "Chef's Special" banner
- ✨ Include customer testimonials section
- ✨ Add an image gallery section
- ✨ Include a reservation form
- ✨ Add nutrition badges to dishes
- ✨ Include a Google Maps embed placeholder
- ✨ Add "scroll to top" button
- ✨ Include promotional alert at top of page

**Success:** Your restaurant website should look professional, be fully responsive, and showcase all the Bootstrap navbar techniques you've learned!

---

## Tips for Navbar Success

1. **Always Include Bootstrap JS**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```
   Without this, collapse and dropdowns won't work!

2. **Match Your IDs**
   ```html
   data-bs-target="#navbarNav"  <!-- Must match ID below -->
   <div id="navbarNav">
   ```

3. **Choose the Right Colors**
   - Light background → `navbar-light`
   - Dark background → `navbar-dark`

4. **Test on Mobile**
   - Always test hamburger menu
   - Make sure dropdowns work
   - Check link spacing

5. **Use Fixed Carefully**
   - Add `padding-top` to body
   - Test with content underneath

---

## Common Navbar Mistakes

❌ **Forgetting Bootstrap JavaScript**
```html
<!-- Won't work without JS! -->
```

❌ **Mismatched IDs**
```html
<button data-bs-target="#nav1"></button>
<div id="nav2"></div>  <!-- IDs don't match! -->
```

❌ **Wrong color combination**
```html
<nav class="navbar-dark bg-light">  <!-- Hard to read! -->
```

❌ **Missing container**
```html
<nav class="navbar">
    <a class="navbar-brand">Logo</a>  <!-- Should be in container -->
</nav>
```

❌ **Not testing mobile**
- Hamburger doesn't appear
- Menu doesn't expand
- Links too small to tap

---

## Quick Reference: Key Navbar Classes

| Class | Purpose |
|-------|---------|
| `navbar` | Required base class |
| `navbar-expand-lg` | Collapse on large screens |
| `navbar-light` / `navbar-dark` | Text color |
| `navbar-brand` | Logo/site name |
| `navbar-toggler` | Hamburger button |
| `navbar-collapse` | Collapsible section |
| `navbar-nav` | Navigation list |
| `nav-item` | List item |
| `nav-link` | Link styling |
| `dropdown` | Dropdown container |
| `dropdown-toggle` | Dropdown trigger |
| `dropdown-menu` | Dropdown content |
| `ms-auto` | Push to right |
| `fixed-top` | Fix to top |
| `active` | Highlight current page |

---

## Answer Key for Task 7 (Debug the Navbar)

Here's the corrected code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debug Navbar - Fixed</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- FIX 1: Changed to navbar-light (correct for bg-light) -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">BuggyNav</a>
            
            <!-- FIX 2: Changed data-bs-target to match ID below -->
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarBuggy">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- FIX 3: ID now matches button target -->
            <div class="collapse navbar-collapse" id="navbarBuggy">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    
                    <!-- FIX 4: Added dropdown class to li -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" 
                           id="productsDropdown" data-bs-toggle="dropdown">
                            Products
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Item 1</a></li>
                            <li><a class="dropdown-item" href="#">Item 2</a></li>
                        </ul>
                    </li>
                    
                    <!-- FIX 5: Added nav-link class -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Debug This Navbar!</h1>
        <p>All errors have been fixed!</p>
    </div>
    
    <!-- FIX 6: Added Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Corrections Made:**
1. Changed `navbar-dark` to `navbar-light` (for light background)
2. Changed `data-bs-target="#wrongID"` to `data-bs-target="#navbarBuggy"`
3. ID already correct, just needed to match target
4. Added `dropdown` class to the Products `<li>`
5. Added `nav-link` class to About link
6. Added Bootstrap JavaScript `<script>` tag at end of body
