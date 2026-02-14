---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 02: Semantic HTML & Text Formatting

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 02a — Semantic HTML & Text Formatting" -->

## What is Semantic HTML?

Semantic HTML uses tags that describe the **meaning** of content, not just appearance.

- `<strong>` and `<em>` add meaning to text
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` structure pages logically
- Screen readers and search engines understand the content better
- Better accessibility for all users

```html
<!-- Non-semantic -->
<b>Bold text</b>  <i>Italic text</i>

<!-- Semantic -->
<strong>Important text</strong>  <em>Emphasized text</em>
```

---

<!-- _header: "Sub-Lesson 02a — Semantic HTML & Text Formatting" -->

## Text Formatting: `<strong>` vs `<b>`

**`<strong>`** = semantic, means importance
**`<b>`** = visual only, just bold

```html
<p>This is <strong>important</strong> information.</p>
<p>This word is <b>bold</b> for style.</p>
```

Screen readers emphasize `<strong>` but skip over `<b>`. Use `<strong>` in HTML.

---

<!-- _header: "Sub-Lesson 02a — Semantic HTML & Text Formatting" -->

## Text Formatting: `<em>` vs `<i>`

**`<em>`** = semantic, means emphasized
**`<i>`** = visual only, just italic

```html
<p>I <em>really</em> love web design!</p>
<p>Read the book <i>To Kill a Mockingbird</i>.</p>
```

Use `<em>` for emphasis, `<i>` for titles/foreign words. `<em>` is more semantic.

---

<!-- _header: "Sub-Lesson 02a — Semantic HTML & Text Formatting" -->

## Page Structure with Semantic Elements

Organize your page with meaningful sections:

```html
<header><!-- Logo, site title --></header>
<nav><!-- Navigation links --></nav>
<main>
  <article><!-- Blog post or main content --></article>
  <aside><!-- Sidebar, related links --></aside>
</main>
<footer><!-- Copyright, contact --></footer>
```

Each tag tells the browser and screen readers what that section does.

---

<!-- _header: "Sub-Lesson 02b — Lists" -->

## Ordered Lists: `<ol>`

Use for lists where **order matters** (steps, rankings, recipes).

```html
<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix ingredients in a bowl</li>
  <li>Pour into baking dish</li>
  <li>Bake for 25 minutes</li>
</ol>
```

`<li>` = list item. Each item shows a number automatically.

---

<!-- _header: "Sub-Lesson 02b — Lists" -->

## Unordered Lists: `<ul>`

Use for lists where **order doesn't matter** (shopping lists, features, ingredients).

```html
<ul>
  <li>Flour</li>
  <li>Sugar</li>
  <li>Eggs</li>
  <li>Butter</li>
</ul>
```

`<ul>` shows bullet points. Use when a numbered list doesn't make sense.

---

<!-- _header: "Sub-Lesson 02b — Lists" -->

## Nested Lists

Lists can contain other lists inside them.

```html
<ol>
  <li>Prep work
    <ul>
      <li>Gather ingredients</li>
      <li>Preheat oven</li>
    </ul>
  </li>
  <li>Mix and bake</li>
</ol>
```

Indent nested lists in your code. The browser handles the display automatically.

---

<!-- _header: "Sub-Lesson 02b — Lists" -->

## Description Lists: `<dl>`

Use for key-value pairs (glossaries, definitions, ingredient lists with amounts).

```html
<dl>
  <dt>Flour</dt>
  <dd>2 cups</dd>
  <dt>Sugar</dt>
  <dd>1 cup</dd>
</dl>
```

`<dt>` = term, `<dd>` = definition/description.

---

<!-- _header: "Sub-Lesson 02b — Lists" -->

## Accessibility & Screen Readers

Semantic HTML helps people using screen readers:

- `<strong>` is read with emphasis
- `<em>` is read with emphasis
- `<header>`, `<nav>`, `<main>`, `<footer>` help users navigate
- Lists are announced as lists ("3 items" or "list of 5")
- Search engines rank semantic HTML higher

**Build for everyone. Use semantic tags.**

---

<!-- _header: "Key Takeaways" -->

## What You Learned

1. Use `<strong>` and `<em>` for semantic text formatting
2. Structure pages with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
3. Use `<ol>` for ordered lists, `<ul>` for unordered lists
4. Nest lists when needed
5. Use `<dl>`, `<dt>`, `<dd>` for definitions
6. Semantic HTML improves accessibility and SEO

**Next: Build a recipe page combining all of this!**
