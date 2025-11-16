# **Lesson 2 Tasks: Text Formatting & Semantic Elements**

## **Setup Instructions**

Before starting these exercises:
1. Create a new folder called `html-lesson2` on your computer
2. Open your text editor (VS Code)
3. Initialize a Git repository in this folder
4. Save each exercise as a separate `.html` file
5. Open the files in your web browser to test them
6. Commit and push to GitHub when complete

---

## **Task 1: Recipe Page with Text Formatting**

**Objective:** Practice using text formatting tags and HTML entities.

**Instructions:**

Create a file called `recipe.html` with a recipe for your favorite food. Include:

**Required Elements:**
1. Proper HTML5 document structure with DOCTYPE
2. Character encoding (UTF-8)
3. Page title: "[Recipe Name] - My Recipe Collection"
4. Comment block at the top with your information

**Required Content:**
1. Main heading (h1): The recipe name
2. Subheading (h2): "Ingredients"
3. List the ingredients (we'll learn proper lists later, just use paragraphs for now)
   - Use `<strong>` for measurement amounts (e.g., **2 cups**)
4. Subheading (h2): "Instructions"
5. Number your steps using paragraphs (Step 1, Step 2, etc.)
   - Use `<em>` to emphasize important techniques
6. Subheading (h2): "Chef's Notes"
7. Add a paragraph with cooking tips
   - Use `<mark>` to highlight the most important tip
8. Footer section with:
   - Copyright symbol (&copy;) and current year
   - Prep time and cook time using subscript for units (e.g., 30min)

**Bonus Challenges:**
- Use `<del>` and `<ins>` to show a recipe modification
- Add a quote from a famous chef using appropriate formatting
- Use `<small>` for serving size information

**Example Structure:**
```html
<!DOCTYPE html>
<html>
<head>
    <!--
        Your name
        Date: [Today's Date]
        Filename: recipe.html
    -->
    <meta charset="utf-8" />
    <title>Chocolate Chip Cookies - My Recipe Collection</title>
</head>
<body>
    <h1>Grandma's Chocolate Chip Cookies</h1>
    
    <h2>Ingredients</h2>
    <!-- Your ingredients here with strong tags -->
    
    <h2>Instructions</h2>
    <!-- Your steps here with em tags -->
    
    <!-- Continue building your recipe... -->
</body>
</html>
```

**Success Criteria:**
- All required elements present
- At least 5 ingredients with measurements in bold
- At least 5 instruction steps with at least 2 emphasized phrases
- Proper use of HTML entities
- File opens correctly in browser and displays formatted recipe

---

## **Task 2: Blog Post with Semantic HTML**

**Objective:** Create a semantically structured blog post.

**Instructions:**

Create a file called `blog-post.html` with a blog post about your experience learning web development. 

**Required Semantic Structure:**
```
<header>
  - Blog title (h1)
  - Navigation menu with 3 links (we'll make them work later)
</header>

<main>
  <article>
    - Post title (h2)
    - Publication date
    - Post content (multiple paragraphs)
  </article>
  
  <aside>
    - "About the Author" section
    - Your bio (1-2 paragraphs)
  </aside>
</main>

<footer>
  - Copyright information
  - Contact info
</footer>
```

**Required Content Details:**

1. **Header Section:**
   - h1: "My Web Development Journey"
   - Nav with three placeholder links (Home, About, Archive)

2. **Article Section:**
   - h2: "Week 2: Learning HTML Text Formatting"
   - Publication date (e.g., "Posted on October 16, 2025")
   - At least 4 paragraphs about what you're learning
   - Use `<strong>` for important terms you've learned
   - Use `<em>` for emphasis
   - Include at least one `<blockquote>` with a quote about learning

3. **Aside Section:**
   - h3: "About the Author"
   - 1-2 paragraphs about yourself
   - Why you're learning web development

4. **Footer Section:**
   - Copyright symbol and year
   - "Contact: [your email]"
   - "Follow me on social media" (just text, no real links yet)

**Text Formatting Requirements:**
- Use `<mark>` to highlight one key learning point
- Use `<sup>` for at least one footnote reference¹
- Use `<small>` for the footer text
- Include a horizontal rule (`<hr />`) between the article and aside

**Example Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
    <!--
        Your name
        Date: [Today's Date]
        Filename: blog-post.html
        Description: Personal blog post about learning web development
    -->
    <meta charset="utf-8" />
    <title>Week 2: Learning HTML - My Dev Journey</title>
</head>
<body>
    <header>
        <h1>My Web Development Journey</h1>
        <nav>
            <!-- Navigation links here -->
        </nav>
    </header>
    
    <main>
        <article>
            <!-- Your article content here -->
        </article>
        
        <hr />
        
        <aside>
            <!-- About the author section -->
        </aside>
    </main>
    
    <footer>
        <!-- Footer content here -->
    </footer>
</body>
</html>
```

**Success Criteria:**
- Proper semantic HTML5 structure
- All required semantic elements present and properly nested
- At least 4 substantial paragraphs in the article
- Proper use of text formatting tags
- At least one blockquote
- Clean, indented code with comments
- Displays properly in browser

---

## **Task 3: "About Me" Page with All Elements**

**Objective:** Combine everything you've learned into one comprehensive page.

**Instructions:**

Create a file called `about-me.html` that showcases your knowledge of HTML structure, semantic elements, and text formatting.

**Required Structure:**
1. Proper HTML5 document structure
2. Complete head section with all metadata
3. Semantic body structure

**Required Content Sections:**

**Header:**
- Your name as h1
- Tagline (e.g., "Future Web Developer")
- Navigation placeholder (Home, Portfolio, Blog, Contact)

**Main Content:**

**Section 1: Introduction**
- h2: "About Me"
- 2-3 paragraphs introducing yourself
- Use text formatting appropriately

**Section 2: Skills**
- h2: "What I'm Learning"
- At least 5 items showing what you're learning in this class
- Use `<strong>` for skill names
- Use `<mark>` for your strongest skill

**Section 3: Goals**
- h2: "My Goals"
- Paragraph about your short-term goals (this semester)
- Paragraph about your long-term goals (career)
- Use `<em>` for emphasis on important goals

**Section 4: Favorite Quote**
- h2: "Words I Live By"
- A blockquote with your favorite quote about learning, technology, or success
- Attribution line (who said it)

**Aside:**
- h3: "Quick Facts"
- 4-5 quick facts about you (use paragraphs for now)
- Examples: "Hometown: _____", "Favorite Tech: _____"

**Footer:**
- Last updated date
- Copyright with symbol
- "Created as part of my Web Design class" in small text

**Bonus Challenges:**
- Add a "Fun Fact" section with something interesting about you
- Use subscript/superscript somewhere creatively
- Include deleted/inserted text to show an update you made
- Add multiple quotes in blockquotes

**Success Criteria:**
- All required sections present
- Semantic HTML throughout
- Variety of text formatting tags used appropriately
- At least 8 paragraphs of actual content
- Well-commented code
- Professional appearance when viewed in browser

---

## **Task 4: Error Correction Exercise**

**Objective:** Debug HTML code with text formatting and semantic errors.

**Instructions:**

Copy the following code into a file called `debug-blog.html` and fix ALL the errors. There are **10 errors** total.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My Blog Post
</head>
<body>
    <header>
        <h1>Welcome to My Blog<h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="about.html">About</a>
        <nav>
    </header>
    
    <main>
        <article>
            <h2>My First Week Learning HTML</h2>
            <p>I'm learning so much about <b>HTML tags</strong> and how they work.</p>
            
            <p>The most important thing I learned is that <em>semantic HTML helps with accessibility</i>.</p>
            
            <blockquote>
                "The best way to predict the future is to create it."
                - Abraham Lincoln
            
            <p>Here's a formula I need to remember: E=mc<sup>2<sup></p>
        </article>
        
        <aside>
            <h3>About Me
            <p>I'm a student at Medina County Career Center.</p>
        </aside>
    </main>
    
    <footer>
        <small><p>Copyright 2025 My Name</small></p>
    </footer>
</body>
</html>
```

**Your Task:**
1. Find and fix all 10 errors
2. Add comments explaining what each error was
3. Test the file in your browser to confirm it works

**Questions to answer in a comment at the bottom:**
1. What errors did you find?
2. Which error was hardest to spot?
3. What can you do to avoid these errors in the future?

---

## **GitHub Requirements**

For all tasks:

1. Create a repository called `html-lesson2`
2. Add all HTML files to the repository
3. Create a `README.md` file that includes:
   - Your name
   - Date
   - Brief description of each file
   - One thing you learned today

**Commit Messages Should Be Descriptive:**
```bash
git add recipe.html
git commit -m "Add recipe page with text formatting"

git add blog-post.html
git commit -m "Add semantic blog post structure"

git add about-me.html
git commit -m "Add comprehensive about me page"

git add debug-blog.html
git commit -m "Fix errors in blog debugging exercise"
```

---

## **Self-Assessment Checklist**

After completing these tasks, you should be able to:

- [ ] Use all six heading levels appropriately
- [ ] Apply text formatting tags (strong, em, mark, sub, sup, del, ins)
- [ ] Use HTML entities for special characters
- [ ] Create proper document structure with semantic elements
- [ ] Use header, nav, main, article, section, aside, and footer correctly
- [ ] Write clean, indented, well-commented HTML
- [ ] Debug common HTML errors
- [ ] Push work to GitHub with proper commit messages

---

## **Common Mistakes to Watch For**

1. **Forgetting closing tags** - Every `<tag>` needs a `</tag>`
2. **Mismatched tags** - `<strong></em>` is wrong!
3. **Using <br /> for spacing** - Use CSS instead (later)
4. **Skipping heading levels** - Don't go from h2 to h5
5. **Wrong semantic elements** - `<footer>` inside `<nav>` doesn't make sense
6. **Not using semantic HTML** - Using `<div>` for everything (we'll learn divs later)

---

## **Need Help?**

**Before asking for help:**
1. Check your browser's console for errors (F12)
2. Validate your HTML at https://validator.w3.org/
3. Review the slides from today's lesson
4. Look at the example code provided

**When asking for help:**
1. Explain what you're trying to do
2. Describe what's happening instead
3. Show your code
4. Mention what you've already tried

---

## **Extension Activities** (Optional)

If you finish early:

1. **News Article Page** - Create a realistic news article with proper structure
2. **Product Page** - Create a product description page for an online store
3. **Tutorial Page** - Write a tutorial teaching someone HTML basics
4. **Compare Pages** - Create two versions of the same content: one with no semantic HTML and one with proper semantic HTML

---

## **Next Lesson Preview**

Next class we'll learn about:
- Creating hyperlinks
- Absolute vs. relative URLs  
- Email links
- Linking to sections within a page
- Link best practices

**Prepare for next time by thinking about:**
- What websites have good navigation?
- What makes a link helpful vs. confusing?
