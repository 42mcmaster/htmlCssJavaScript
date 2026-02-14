# Lesson 02 Walkthrough: Building a Recipe Page

## Objective
Create a well-structured recipe page using semantic HTML elements and multiple list types. This guided lab will walk you through building a complete page with proper structure, text formatting, and lists.

---

## Part 1: Page Structure Setup

### Step 1: Create the HTML Shell
Start with a basic HTML5 document. Add the DOCTYPE, html, head, and body tags.

**Try This:** Write the HTML5 boilerplate code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>___</title>
</head>
<body>

</body>
</html>
```

**What to fill in:** The page title (e.g., "Chocolate Chip Cookie Recipe")

---

## Part 2: Add Semantic Header and Navigation

### Step 2: Create a Header
The `<header>` element contains the site title and introductory content.

**Try This:** Inside the `<body>`, add a `<header>` with:
- An `<h1>` tag with your site name (e.g., "Jessica's Recipes")
- A brief tagline using `<p>`

```html
<header>
  <h1>___</h1>
  <p>___</p>
</header>
```

**What to fill in:**
- h1: A site name (e.g., "Jessica's Recipes")
- p: A tagline (e.g., "Easy, delicious recipes for home cooks")

### Step 3: Add Navigation
The `<nav>` element contains links to main sections of the site.

**Try This:** After the `<header>`, add a `<nav>` with links:

```html
<nav>
  <a href="#">___</a> |
  <a href="#">___</a> |
  <a href="#">___</a>
</nav>
```

**What to fill in:** Navigation text (e.g., "Home", "Recipes", "About", "Contact")

---

## Part 3: Main Content Area

### Step 4: Open Main and Create First Section
The `<main>` element wraps the primary page content. Use `<section>` to group related content.

**Try This:** After the `<nav>`, add:

```html
<main>
  <section>
    <h2>Recipe: ___</h2>
    <p>___</p>
  </section>
</main>
```

**What to fill in:**
- h2: Recipe name (e.g., "Classic Chocolate Chip Cookies")
- p: A brief description (e.g., "Soft, chewy cookies loaded with chocolate. Makes 24 cookies.")

---

## Part 4: Ingredients List (Unordered List)

### Step 5: Add Unordered List for Ingredients
Ingredients are best shown as a bulleted list because order doesn't matter.

**Try This:** Still inside the `<section>`, add:

```html
<h3>Ingredients</h3>
<ul>
  <li>___</li>
  <li>___</li>
  <li>___</li>
  <li>___</li>
  <li>___</li>
</ul>
```

**What to fill in:** At least 5 ingredients (e.g., "2 cups all-purpose flour", "1 cup butter", "1 cup sugar", "2 eggs", "1 tsp vanilla extract")

---

## Part 5: Instructions List (Ordered List)

### Step 6: Add Ordered List for Instructions
Instructions need to be numbered because order matters!

**Try This:** After the ingredients list, add:

```html
<h3>Instructions</h3>
<ol>
  <li>___</li>
  <li>___</li>
  <li>___</li>
  <li>___</li>
  <li>___</li>
</ol>
```

**What to fill in:** Step-by-step instructions (e.g., "Preheat oven to 350°F", "Cream butter and sugar together", etc.)

---

## Part 6: Nested Lists (Prep Steps)

### Step 7: Add a Nested List
You can nest lists to show sub-steps within a main step.

**Try This:** Modify step 1 (or another step) to include a nested unordered list:

```html
<ol>
  <li>Prepare the ingredients
    <ul>
      <li>___</li>
      <li>___</li>
      <li>___</li>
    </ul>
  </li>
  <li>___</li>
  <li>___</li>
  <!-- ... rest of steps ... -->
</ol>
```

**What to fill in:** Sub-items for that step (e.g., "Measure flour, sugar, and butter", "Crack eggs into a bowl", "Preheat oven to 350°F")

---

## Part 7: Nutrition Information (Description List)

### Step 8: Add a Description List
Use `<dl>` for key-value pairs like nutrition facts.

**Try This:** After the instructions, add:

```html
<h3>Nutrition Information (per cookie)</h3>
<dl>
  <dt>Calories</dt>
  <dd>___</dd>
  <dt>Protein</dt>
  <dd>___</dd>
  <dt>Fat</dt>
  <dd>___</dd>
  <dt>Carbohydrates</dt>
  <dd>___</dd>
</dl>
```

**What to fill in:** Realistic nutrition values (e.g., "180 calories", "2g protein", "9g fat", "24g carbohydrates")

---

## Part 8: Text Formatting with Strong and Em

### Step 9: Add Emphasized and Important Text
Use `<strong>` for important information and `<em>` for emphasis.

**Try This:** In the recipe description (near the top), modify the text:

```html
<p>
  <strong>Prep time:</strong> 15 minutes |
  <strong>Bake time:</strong> 10 minutes |
  <strong>Makes:</strong> 24 cookies
</p>

<p>
  These cookies are <em>best enjoyed</em> warm from the oven.
  The chocolate chips should be <strong>high-quality</strong> for best results.
</p>
```

This adds semantic meaning to important and emphasized content.

---

## Part 9: Add an Aside for Related Links

### Step 10: Add a Sidebar
The `<aside>` element contains tangentially related content.

**Try This:** Before the closing `</main>` tag, add:

```html
<aside>
  <h3>Related Recipes</h3>
  <ul>
    <li><a href="#">___</a></li>
    <li><a href="#">___</a></li>
    <li><a href="#">___</a></li>
  </ul>
</aside>
```

**What to fill in:** Related recipe names (e.g., "Oatmeal Raisin Cookies", "Brownies", "Sugar Cookies")

---

## Part 10: Add Footer

### Step 11: Close with Footer
The `<footer>` contains copyright info, contact details, or other closing content.

**Try This:** After the closing `</main>` tag, add:

```html
<footer>
  <p>&copy; 2024 ___. All rights reserved.</p>
  <p>Contact: <a href="mailto:___">___</a></p>
</footer>
```

**What to fill in:**
- Site name or your name
- Email address

---

## Checklist: Did You Use All the Right Tags?

Review your page:

- [ ] `<header>` contains site title and tagline
- [ ] `<nav>` contains navigation links
- [ ] `<main>` wraps all primary content
- [ ] `<section>` groups the recipe information
- [ ] `<h2>` and `<h3>` tags structure the content
- [ ] Ingredients use `<ul>` (unordered list)
- [ ] Instructions use `<ol>` (ordered list)
- [ ] At least one list is nested inside another
- [ ] Nutrition info uses `<dl>`, `<dt>`, `<dd>`
- [ ] `<strong>` is used for important info
- [ ] `<em>` is used for emphasized text
- [ ] `<aside>` contains related links
- [ ] `<footer>` has copyright and contact info
- [ ] All tags are properly closed
- [ ] No `<b>` or `<i>` tags (use semantic alternatives)

---

## Validation & Testing

1. **Validate your HTML** at https://validator.w3.org/
2. **Open in a browser** to see how it looks
3. **Use a screen reader** (like NVDA or your browser's built-in tools) to test how it sounds
4. **Check mobile view** — does the layout make sense on a small screen?

---

## Next Steps

When complete, review the solution file (html02_Walkthrough_Solutions.html) to compare your work. Then move on to the guided tasks in html02a_Task.html and html02b_Task.html.
