---
marp: true
theme: default
paginate: true
---

# HTML Lesson 1
## Introduction to HTML and Document Structure

### Web Design
Medina County Career Center

---

## Today's Learning Objectives

By the end of this lesson, you will be able to:

- Understand what HTML is and its purpose
- Create a basic HTML5 document structure
- Use proper DOCTYPE declaration
- Work with the document head and metadata
- Add comments to HTML documents
- Set character encoding for your pages

---

## What is HTML?

**HTML = Hypertext Markup Language**

- A **markup language** (not a programming language!)
- Describes the **content and structure** of web documents
- Uses **tags** to identify different elements
- Forms the **foundation** of every web page

**Think of it as:** The skeleton and structure of a website

---

## HTML in Action

**You write this:**
```html
<h1>Welcome to My Website</h1>
<p>This is a paragraph of text.</p>
```

**Browser displays:**
# Welcome to My Website
This is a paragraph of text.

---

## A Brief History of HTML

- **1989**: Tim Berners-Lee and CERN researchers developed HTML and the World Wide Web
- **1995**: HTML 2.0 introduced interactive elements (web forms)
- **1999**: HTML 4.01 added support for style sheets and multimedia
- **2001**: XHTML 1.0 introduced stricter standards
- **2012**: HTML5 became the current standard

**We're learning HTML5 - the modern standard!**

---

## Who Maintains HTML Standards?

**W3C (World Wide Web Consortium)**
- Sets the standards for HTML
- Has no enforcement power
- Industry follows recommendations for consistency

**Fun fact:** The web works because everyone agrees to follow the same rules!

---

## HTML File Basics

**HTML files are text files that:**
- Can be created in **any text editor** (Notepad, VS Code, etc.)
- Are saved with **.html** file extension
- Are displayed by **web browsers** (Chrome, Firefox, Edge)
- Contain **markup tags** to structure content

**You don't need expensive software - just a text editor and a browser!**

---

## The Basic HTML5 Structure

Every HTML document needs this structure:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Document metadata goes here -->
</head>
<body>
    <!-- Visible page content goes here -->
</body>
</html>
```

**Let's break this down piece by piece...**

---

## 1. The DOCTYPE Declaration

```html
<!DOCTYPE html>
```

**What it does:**
- Tells the browser this is an HTML5 document
- Must be the **very first line** (before even `<html>`)
- Not case-sensitive (but lowercase is standard)
- Has no closing tag

**Why it matters:** Ensures browser displays page correctly

---

## 2. The `<html>` Tag

```html
<html>
    <!-- Everything else goes here -->
</html>
```

**What it does:**
- The **root element** containing all other elements
- Wraps the entire document
- Has opening `<html>` and closing `</html>` tags

**Think of it as:** The container for your entire webpage

---

## 3. The `<head>` Section

```html
<head>
    <!-- Metadata goes here -->
</head>
```

**Contains information ABOUT the page:**
- Page title
- Character encoding
- Links to CSS files
- Keywords for search engines
- **Not visible** in the browser window

---

## 4. The `<body>` Section

```html
<body>
    <!-- Visible content goes here -->
</body>
```

**Contains the ACTUAL page content:**
- Headings
- Paragraphs
- Images
- Links
- **Everything users see** on the page

---

## Understanding HTML Elements

**Two-Sided Tags** (most common):
```html
<tagname>content</tagname>
```

**Examples:**
```html
<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<strong>This is important!</strong>
```

**Every opening tag `<>` needs a closing tag `</>`**

---

## Empty Elements (Self-Closing)

**Empty elements** don't contain content:

```html
<br />
<hr />
<img src="photo.jpg" alt="A photo" />
<meta charset="utf-8" />
```

**Notice:**
- No closing tag needed
- Can use `/>` at the end (optional in HTML5)
- Cannot contain text or other elements

---

## HTML Attributes

**Attributes provide extra information:**

```html
<element attribute="value">content</element>
```

**Examples:**
```html
<img src="logo.png" alt="Company Logo" />
<a href="about.html">About Us</a>
<p class="highlight">Special text</p>
```

**Attributes always go in the opening tag!**

---

## Common HTML Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `src` | Source file location | `<img src="photo.jpg" />` |
| `href` | Hyperlink reference | `<a href="page.html">` |
| `alt` | Alternative text | `<img alt="Logo" />` |
| `class` | CSS class name | `<p class="red">` |
| `id` | Unique identifier | `<div id="header">` |

---

## Setting Up the Document Head

**Essential elements in `<head>`:**

```html
<head>
    <!-- Character encoding -->
    <meta charset="utf-8" />
    
    <!-- Page title (appears in browser tab) -->
    <title>About Curbside Thai</title>
    
    <!-- Keywords for search engines -->
    <meta name="keywords" content="Thai, restaurant, food" />
    
    <!-- Link to CSS stylesheet -->
    <link href="styles.css" rel="stylesheet" />
</head>
```

---

## Character Encoding: UTF-8

```html
<meta charset="utf-8" />
```

**Why UTF-8?**
- Supports **all languages** (English, Chinese, Arabic, etc.)
- Supports **special symbols** (©, ®, ™)
- Supports **emoji** 😊
- **Universal standard** - always use it!

**Put this in EVERY HTML document you create!**

---

## The Page Title

```html
<title>About Curbside Thai</title>
```

**The title appears in:**
- Browser tab/title bar
- Browser bookmarks
- Search engine results
- Browser history

**Make it descriptive and unique for each page!**

---

## Adding Comments to HTML

**Comments are notes for yourself (and other developers):**

```html
<!-- This is a comment -->
```

**Multi-line comments:**
```html
<!--
    New Perspectives on HTML5 and CSS3
    Tutorial 1
    Author: Your Name
    Date: November 16, 2025
    Filename: about.html
-->
```

**Comments don't appear in the browser!**

---

## Why Use Comments?

**Good uses for comments:**
- Document who created the file and when
- Explain complex code sections
- Temporarily disable code during testing
- Leave notes for future updates

**Example:**
```html
<!-- Navigation section starts here -->
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
</nav>
<!-- Navigation section ends here -->
```

---

## Standard Comment Block

**Always start your HTML files with:**

```html
<!--
    Project: Curbside Thai Website
    Author: Your Name
    Date: November 16, 2025
    Filename: about.html
    Description: About page for restaurant website
-->
```

**This helps you and others identify your files!**

---

## White Space in HTML

**HTML collapses white space:**

```html
<p>This    has    lots    of
   spaces   and   line
   breaks.</p>
```

**Displays as:**
```
This has lots of spaces and line breaks.
```

**Multiple spaces → Single space**
**Line breaks → Ignored**

---

## Use White Space for Readability!

**Bad (hard to read):**
```html
<html><head><title>My Page</title></head><body><h1>Hello</h1><p>Text</p></body></html>
```

**Good (easy to read):**
```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Text</p>
  </body>
</html>
```

---

## Indentation Best Practices

**Use consistent indentation:**
- 2 spaces per level (or 4 spaces)
- Keep parent/child relationships clear
- Line up opening and closing tags

```html
<html>
  <body>
    <header>
      <h1>Title</h1>
    </header>
  </body>
</html>
```

---

## Complete HTML5 Document Example

```html
<!DOCTYPE html>
<html>
<head>
    <!--
        Curbside Thai Website
        Author: Your Name
        Date: November 16, 2025
        Filename: about.html
    -->
    <meta charset="utf-8" />
    <meta name="keywords" content="Thai, restaurant, food" />
    <title>About Curbside Thai</title>
    <link href="styles.css" rel="stylesheet" />
</head>
```

---

## Complete Example (continued)

```html
<body>
    <header>
        <h1>Welcome to Curbside Thai</h1>
    </header>
    
    <main>
        <h2>About Our Restaurant</h2>
        <p>Authentic gourmet Thai food delivered to your door.</p>
        <p>Family owned and operated since 2015.</p>
    </main>
    
    <footer>
        <p>© 2025 Curbside Thai. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## Let's Build One Together!

**Open VS Code and follow along:**

1. Create a new file called `first-page.html`
2. Type the DOCTYPE declaration
3. Add `<html>` tags
4. Add `<head>` section with metadata
5. Add `<body>` section with content
6. Save and open in browser!

---

## Common Beginner Mistakes

**1. Forgetting DOCTYPE**
```html
<!-- Wrong -->
<html>

<!-- Right -->
<!DOCTYPE html>
<html>
```

**2. Forgetting to close tags**
```html
<!-- Wrong -->
<p>Text

<!-- Right -->
<p>Text</p>
```

---

## Common Mistakes (continued)

**3. Putting body content in head**
```html
<!-- Wrong -->
<head>
    <h1>Title</h1>
</head>

<!-- Right -->
<body>
    <h1>Title</h1>
</body>
```

**4. Forgetting character encoding**
```html
<!-- Wrong - missing charset -->
<head>
    <title>Page</title>
</head>

<!-- Right -->
<head>
    <meta charset="utf-8" />
    <title>Page</title>
</head>
```

---

## HTML Element Hierarchy

**Proper nesting matters!**

```html
<!-- Wrong - tags overlap -->
<p><strong>Bold text</p></strong>

<!-- Right - tags properly nested -->
<p><strong>Bold text</strong></p>
```

**Think of tags like parentheses - they must close in reverse order of opening!**

---

## Testing Your HTML

**Always test your pages:**
1. Save your file with `.html` extension
2. Open in a web browser
3. Check if everything displays correctly
4. Use browser's Developer Tools (F12)
5. Validate at https://validator.w3.org/

**Test early, test often!**

---

## What Browsers Do

**When you open an HTML file:**
1. Browser reads the HTML code
2. Parses the tags and structure
3. Applies default styles
4. Displays the formatted content

**Different browsers may display slightly differently!**

**Always test in multiple browsers:** Chrome, Firefox, Edge, Safari

---

## Quick Review: Document Structure

```html
<!DOCTYPE html>          <!-- 1. Declare HTML5 -->
<html>                   <!-- 2. Root element -->
  <head>                 <!-- 3. Metadata -->
    <meta charset="utf-8" />
    <title>Page Title</title>
  </head>
  <body>                 <!-- 4. Visible content -->
    <h1>Heading</h1>
    <p>Paragraph</p>
  </body>
</html>
```

---

## Quick Review: Key Concepts

✅ **HTML** = Hypertext Markup Language  
✅ **DOCTYPE** declares HTML5  
✅ **`<head>`** contains metadata (not visible)  
✅ **`<body>`** contains page content (visible)  
✅ **UTF-8** supports all languages  
✅ **Comments** start with `<!--` and end with `-->`  
✅ **White space** is collapsed  
✅ **Indentation** improves readability  

---

## Today's Tasks

You'll be creating several HTML documents:

1. Your first HTML page
2. About me page with metadata
3. Restaurant page with comments
4. White space experiment
5. Book review page
6. Complete coffee shop page
7. Debugging exercise

**All details in the tasks file!**

---

## Questions?

Before we start coding:
- HTML structure clear?
- DOCTYPE understood?
- Head vs. Body difference?
- How to add comments?
- Character encoding why?

---

## Let's Code!

**Open VS Code and let's build your first HTML pages!**

**Remember:**
- Start with DOCTYPE
- Use proper indentation
- Add comment block at top
- Include charset in head
- Test in browser frequently

**You've got this! 🚀**

---

## Homework Reminder

**For next class:**
- Complete all tasks
- Push to GitHub
- Be ready for quiz on document structure
- Think about: "What makes a well-structured HTML document?"

---

## Preview: Next Lesson

**Lesson 2: Text Formatting & Semantic Elements**

We'll learn:
- Heading tags (h1-h6)
- Text formatting (bold, italic, etc.)
- Semantic HTML elements
- Building better page structure

**Get excited - we're building real websites! 🎨**
