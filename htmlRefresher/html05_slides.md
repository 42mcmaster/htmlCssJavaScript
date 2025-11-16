---
marp: true
theme: default
paginate: true
---

# HTML Lesson 5
## Lists

### Web Design
Medina County Career Center

---

## Today's Learning Objectives

- Create unordered (bulleted) lists
- Create ordered (numbered) lists
- Create description lists
- Nest lists inside lists
- Use lists for navigation menus
- Follow list best practices

---

## Why Lists Matter

**Lists help organize information:**
- Break up long blocks of text
- Show relationships between items
- Improve readability
- Make content scannable
- Better for accessibility

**Most navigation menus are actually lists!**

---

## Unordered Lists

**Use `<ul>` for bulleted lists:**

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

**Displays as:**
- First item
- Second item
- Third item

---

## Ordered Lists

**Use `<ol>` for numbered lists:**

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

**Displays as:**
1. First step
2. Second step
3. Third step

---

## The `<li>` Tag

**`<li>` = List Item**

- Works in both `<ul>` and `<ol>`
- Must be inside a list element
- Can contain any HTML (text, images, links, even more lists!)

```html
<ul>
  <li>Simple text</li>
  <li><strong>Bold text</strong></li>
  <li><a href="page.html">Link text</a></li>
  <li><img src="icon.png" alt="Icon" /> Text with image</li>
</ul>
```

---

## When to Use Which List

**Unordered lists (<ul>):**
- Items in no particular order
- Shopping lists
- Features
- Benefits

**Ordered lists (<ol>):**
- Sequential steps
- Instructions
- Rankings
- Procedures

---

## Ordered List Types

**Change numbering style with `type` attribute:**

```html
<!-- Default numbers: 1, 2, 3 -->
<ol type="1">

<!-- Uppercase letters: A, B, C -->
<ol type="A">

<!-- Lowercase letters: a, b, c -->
<ol type="a">

<!-- Uppercase Roman: I, II, III -->
<ol type="I">

<!-- Lowercase Roman: i, ii, iii -->
<ol type="i">
```

---

## Starting at Different Numbers

```html
<ol start="5">
  <li>Fifth item</li>
  <li>Sixth item</li>
  <li>Seventh item</li>
</ol>
```

**Displays as:**
5. Fifth item
6. Sixth item
7. Seventh item

---

## Nested Lists

**Lists inside lists:**

```html
<ul>
  <li>Main item 1</li>
  <li>Main item 2
    <ul>
      <li>Sub-item 2a</li>
      <li>Sub-item 2b</li>
    </ul>
  </li>
  <li>Main item 3</li>
</ul>
```

**Nest the child list INSIDE the parent `<li>`!**

---

## Description Lists

**For term-definition pairs:**

```html
<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

- `<dl>` = Description List
- `<dt>` = Description Term
- `<dd>` = Description Definition

---

## Lists for Navigation

**Navigation menus are semantic lists:**

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

**We'll style these with CSS later to look like horizontal menus!**

---

## List Best Practices

✅ Use semantic list type  
✅ Keep list items parallel in structure  
✅ Don't mix content types unnecessarily  
✅ Use lists for navigation  
✅ Nest properly (child inside parent `<li>`)  

❌ Don't use lists just for indentation  
❌ Don't forget closing tags  

---

## Common Mistakes

**Wrong nesting:**
```html
<!-- Wrong -->
<ul>
  <li>Item</li>
  <ul><li>Subitem</li></ul>
</ul>

<!-- Right -->
<ul>
  <li>Item
    <ul><li>Subitem</li></ul>
  </li>
</ul>
```

---

## Quick Review

```html
<!-- Unordered -->
<ul>
  <li>Item</li>
</ul>

<!-- Ordered -->
<ol>
  <li>Item</li>
</ol>

<!-- Description -->
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

---

## Today's Tasks

Create pages with:
1. Shopping list
2. Recipe with steps
3. Navigation menu
4. Glossary with description list
5. Nested outline
6. Multi-page site with consistent navigation

---

## Let's Code! 📋
