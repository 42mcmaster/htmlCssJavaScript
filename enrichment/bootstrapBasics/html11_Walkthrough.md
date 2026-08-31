# HTML11: Bootstrap Basics — Walkthrough

## Objective
Learn Bootstrap by building a responsive landing page with grid, navbar, cards, buttons, and utilities.

## Time: 30–40 minutes

---

## Step 1: Set Up the HTML File

Create a new file called `myBootstrapPage.html` and add this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>___________</title>
    <!-- Bootstrap CSS from CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- We'll build the page content here -->

    <!-- Bootstrap JS Bundle from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Your task:** Fill in the `<title>` tag with a title for your page (e.g., "My Coffee Shop").

---

## Step 2: Add a Navbar

Inside the `<body>`, add a navbar at the top. Replace the blanks:

```html
<body>
    <!-- Navbar with dark background and brand -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <!-- Brand/logo text -->
            <a class="navbar-brand" href="#">___________</a>
            <!-- Hamburger menu button for mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navigation links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#">___________</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">___________</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">___________</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Rest of page will go here -->
</body>
```

**Your task:**
- Add a brand name (first blank)
- Add three navigation link names (the other blanks)

---

## Step 3: Create a Hero Section with Grid

After the navbar, add a hero section and a grid layout with cards:

```html
    <!-- Hero section with centered text -->
    <section class="bg-primary text-white text-center py-5">
        <div class="container">
            <h1>Welcome to ___________</h1>
            <p class="lead">___________</p>
            <button class="btn btn-light">Learn More</button>
        </div>
    </section>

    <!-- Main content: Grid with cards -->
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">___________</h2>

            <!-- Row with 3 responsive columns -->
            <div class="row">
                <!-- Card 1 -->
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">___________</h5>
                            <p class="card-text">___________</p>
                            <button class="btn btn-primary btn-sm">___________</button>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">___________</h5>
                            <p class="card-text">___________</p>
                            <button class="btn btn-primary btn-sm">___________</button>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">___________</h5>
                            <p class="card-text">___________</p>
                            <button class="btn btn-primary btn-sm">___________</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

**Your task:**
- Fill in the hero section title and tagline
- Create three cards with titles, descriptions, and button text

**Responsive Breakdown:**
- `col-12` = full width on mobile
- `col-md-6` = 50% width on tablets
- `col-lg-4` = ~33% width on desktops

---

## Step 4: Add an Alert & Form Section

Add a call-to-action with an alert and form:

```html
    <!-- Alert section -->
    <section class="bg-light py-5">
        <div class="container">
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <strong>FYI:</strong> This is an informational message. Click the X to close.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>

            <!-- Contact form -->
            <h2 class="text-center mb-4">Contact Us</h2>
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name:</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message:</label>
                            <textarea class="form-control" id="message" rows="4" placeholder="Your message here"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
```

**Key Bootstrap features here:**
- `alert` & `alert-info` = styled message box
- `form-label` & `form-control` = styled form elements
- `mb-3` = margin-bottom for spacing
- `w-100` = width 100% (full width)
- `justify-content-center` = centers the column

---

## Step 5: Add a Footer

At the end of the body (before the closing `</body>`), add:

```html
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
        <div class="container">
            <p>&copy; 2024 ___________. All rights reserved.</p>
            <div class="mt-3">
                <a href="#" class="text-white text-decoration-none me-3">Privacy</a>
                <a href="#" class="text-white text-decoration-none">Contact</a>
            </div>
        </div>
    </footer>
```

**Your task:** Fill in the copyright text.

---

## Step 6: Test Responsiveness

Save your file and open it in a browser:

1. **Resize the window** — Watch how the layout changes at different sizes
2. **Check mobile view** — Press `F12` → toggle device toolbar → select "Mobile"
3. **Test the navbar** — On mobile, click the hamburger menu
4. **Test the alert** — Click the X on the alert to dismiss it

---

## Complete Page Structure

```
<html>
  <head>
    <title>Your Site</title>
    <link href="bootstrap CSS CDN">
  </head>
  <body>
    <!-- Navbar -->
    <!-- Hero section -->
    <!-- Cards section with grid -->
    <!-- Alert & Form section -->
    <!-- Footer -->

    <script src="bootstrap JS bundle CDN">
  </body>
</html>
```

---

## Bootstrap Classes Used in This Walkthrough

| Class | Purpose |
|-------|---------|
| `navbar`, `navbar-expand-lg` | Navigation bar, responsive |
| `bg-dark`, `bg-primary`, `bg-light` | Background colors |
| `text-white`, `text-center` | Text color & alignment |
| `container`, `container-fluid` | Width-constrained wrapper |
| `row` | Horizontal line |
| `col-12`, `col-md-6`, `col-lg-4` | Responsive columns |
| `card`, `card-body`, `card-title` | Card component |
| `btn`, `btn-primary`, `btn-success` | Buttons |
| `alert`, `alert-info` | Alert message |
| `form-label`, `form-control` | Form elements |
| `mb-3`, `py-5`, `mt-5` | Spacing utilities |
| `h-100` | Height 100% of parent |
| `d-none`, `d-block` | Display utilities |

---

## Troubleshooting

**Problem: Navbar doesn't collapse on mobile**
- Make sure Bootstrap JS CDN is included before `</body>`

**Problem: Cards don't stack on mobile**
- Check that you have `col-12` in your card classes

**Problem: Nothing is styled**
- Verify the Bootstrap CSS CDN link is in the `<head>`
- Check browser console (F12) for errors

**Problem: Colors don't show**
- Make sure you're using correct class names (e.g., `bg-primary`, not `bg-blue`)

---

## Next Steps

Now that you understand the basics, try:
- Changing colors (e.g., `bg-success`, `bg-warning`)
- Adding more cards
- Testing on your phone
- Changing button styles (`btn-danger`, `btn-outline-primary`)
- Adjusting spacing with `m-` and `p-` utilities
