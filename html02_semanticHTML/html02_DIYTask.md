# Lesson 02 DIY (Do It Yourself) Task: Build Your Own Recipe Page

## Objective
Create a complete, well-structured recipe page from scratch using semantic HTML elements and multiple list types. This independent project demonstrates your mastery of semantic structure, text formatting, and lists.

---

## Requirements

### Content Requirements
You must include:

1. **A real recipe** (food, drink, or craft) with:
   - Recipe name and description
   - Prep and cook times
   - Yield/servings

2. **Semantic HTML structure:**
   - `<header>` with site/recipe title and tagline
   - `<nav>` with at least 3 navigation links
   - `<main>` wrapping primary content
   - `<section>` to group recipe sections
   - `<article>` for individual recipe components or variations (optional but recommended)
   - `<aside>` with related content (tips, substitutions, or links)
   - `<footer>` with copyright and contact info

3. **Text formatting:**
   - At least 3 uses of `<strong>` for important information
   - At least 2 uses of `<em>` for emphasis
   - No `<b>` or `<i>` tags

4. **List types (all four required):**
   - **Unordered list `<ul>`** — ingredients or items where order doesn't matter
   - **Ordered list `<ol>`** — step-by-step instructions
   - **Nested lists** — at least one list inside another list item
   - **Description list `<dl>`** — nutrition facts, measurements, timing, or other key-value pairs

5. **Valid HTML5:**
   - Proper DOCTYPE, html, head, and body tags
   - All tags properly closed
   - Passes validation at https://validator.w3.org/

---

## Suggested Recipes

Choose any recipe you like. Here are some ideas:

- **Food:** Pizza, brownies, tacos, pasta, smoothie bowl, salad, soup
- **Drink:** Coffee drink, cocktail, smoothie, tea specialty
- **Craft:** Homemade candle, slime, tie-dye, bath bomb
- **Other:** DIY cleaning solution, terrarium, plant propagation

---

## Step-by-Step Process

### 1. Plan Your Content
Before writing HTML, outline your recipe:
- Recipe name and description
- Ingredients (for unordered list)
- Instructions (for ordered list, with possible nesting)
- Nutrition or timing info (for description list)
- Related content for the aside

### 2. Create the HTML File
Create a new file called `html02_DIY_YourName.html` (replace "YourName" with your name or chosen title).

### 3. Build the Structure
Start with semantic elements:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Recipe Name</title>
</head>
<body>
  <header><!-- Site title --></header>
  <nav><!-- Navigation --></nav>
  <main>
    <section><!-- Recipe content --></section>
    <aside><!-- Related info --></aside>
  </main>
  <footer><!-- Copyright --></footer>
</body>
</html>
```

### 4. Add Content
Fill in each section with your recipe content.

### 5. Add Lists
- Use `<ul>` for ingredients or non-sequential items
- Use `<ol>` for numbered steps
- Nest at least one list (e.g., prep sub-steps within a main step)
- Use `<dl>`, `<dt>`, `<dd>` for timing or nutrition info

### 6. Add Text Formatting
- Use `<strong>` for important info (e.g., "Important: Use fresh ingredients")
- Use `<em>` for emphasis (e.g., "This step is critical")

### 7. Validate & Test
- Test in a browser
- Validate at https://validator.w3.org/
- Open DevTools (F12) and check for errors in the console
- If using a screen reader, test how the content is read aloud

---

## Rubric (Self-Assessment)

Use this to check your work:

| Criteria | Yes | Partial | No |
|----------|-----|---------|-----|
| HTML5 valid (passes validator.w3.org) | | | |
| Header with title and tagline | | | |
| Navigation menu with 3+ links | | | |
| Main element wraps primary content | | | |
| Section groups recipe content | | | |
| Unordered list (ul/li) present | | | |
| Ordered list (ol/li) present | | | |
| Nested list (list within list) present | | | |
| Description list (dl/dt/dd) present | | | |
| At least 3 uses of `<strong>` | | | |
| At least 2 uses of `<em>` | | | |
| No `<b>` or `<i>` tags used | | | |
| Aside with related content | | | |
| Footer with copyright and contact | | | |
| All HTML tags properly closed | | | |
| Page displays correctly in browser | | | |

---

## Common Mistakes to Avoid

1. **Forgetting semantic elements** — Make sure you use header, nav, main, section, aside, footer
2. **Using `<b>` and `<i>` instead of `<strong>` and `<em>`** — These are not semantic
3. **Incorrect nesting** — Nested lists must be inside `<li>` tags, not directly in `<ol>` or `<ul>`
4. **Unclosed tags** — Every opening tag must have a closing tag
5. **Wrong list types** — Use ordered lists only when order matters
6. **Missing description list** — All four list types are required

---

## Submission Checklist

Before submitting:

- [ ] File is named `html02_DIY_YourName.html`
- [ ] HTML validates at validator.w3.org with no errors
- [ ] All semantic elements are used (header, nav, main, section, aside, footer)
- [ ] All four list types are present (ul, ol, nested, dl)
- [ ] Strong and em text formatting is used
- [ ] No b or i tags are used
- [ ] File opens and displays properly in a web browser
- [ ] Recipe content is your own (or properly cited if adapted)

---

## Stretch Challenges (Optional)

Want to go further? Try these:

1. **Add multiple articles** — Use `<article>` tags for recipe variations or related recipes
2. **Multiple nested lists** — Create more complex hierarchies (e.g., ingredients nested by category)
3. **Add more description lists** — Include timing, servings, and substitutions as separate dl sections
4. **Semantic improvements** — Use `<figure>` and `<figcaption>` if you add images
5. **Accessibility testing** — Use a screen reader to test your page

---

## Next Steps

After completing this project:
1. Review the solution file (html02_DIYTask_Solutions.html) to see another example
2. Compare your structure and approach with the solution
3. Ask your instructor for feedback
4. Commit your work to GitHub and push to your personal repository

Good luck! Create something you're proud of.
