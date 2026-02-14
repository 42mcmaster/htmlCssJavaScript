---
marp: true
theme: default
class: invert
paginate: true
---

# Lesson 04: Images, Media & Tables

## Web Development
### Medina County Career Center

---

<!-- _header: "Sub-Lesson 04a — Images & Formats" -->

## The `<img>` Tag

- **Purpose:** Embed images in web pages
- **Syntax:** `<img src="path/to/image.jpg" alt="Description">`
- **Required attributes:** `src` (source) and `alt` (alternative text)
- **Why `alt`?** Accessibility for screen readers, SEO, fallback if image doesn't load

```html
<!-- Good practice: clear, descriptive alt text -->
<img src="images/sunset.jpg" alt="Orange sunset over mountains">
```

---

## Image Formats & File Types

| Format | Use Case | Pros | Cons |
|--------|----------|------|------|
| **JPG** | Photos, realistic images | Small file size | Lossy (some quality lost) |
| **PNG** | Graphics, logos, transparency | Lossless, transparent background | Larger than JPG |
| **SVG** | Icons, scalable graphics | Crisp at any size, vector-based | Not for photos |
| **WebP** | Modern web optimization | Smaller than JPG/PNG | Older browser support |

---

## Image Sizing & Responsive Design

```html
<!-- Fixed size with width/height attributes -->
<img src="images/photo.jpg" alt="Description" width="400" height="300">

<!-- CSS for responsive sizing -->
<img src="images/photo.jpg" alt="Description" style="max-width: 100%; height: auto;">

<!-- Container-based approach -->
<div style="max-width: 500px;">
  <img src="images/photo.jpg" alt="Description" style="width: 100%; height: auto;">
</div>
```

---

## Figure & Figcaption

- Semantic way to associate images with captions
- **`<figure>`:** Container for image and caption
- **`<figcaption>`:** Text describing the figure

```html
<figure>
  <img src="images/product.jpg" alt="Blue wireless headphones">
  <figcaption>Premium wireless headphones with 20-hour battery</figcaption>
</figure>
```

---

<!-- _header: "Sub-Lesson 04b — HTML5 Media" -->

## HTML5 `<video>` Tag

```html
<video width="400" height="300" controls>
  <source src="video/demo.mp4" type="video/mp4">
  <source src="video/demo.webm" type="video/webm">
  Your browser does not support HTML5 video.
</video>
```

- **`controls`** attribute: Shows play, pause, volume buttons
- **`<source>`** tags: Multiple formats for browser compatibility
- **Common formats:** MP4 (most compatible), WebM (modern)

---

## HTML5 `<audio>` Tag

```html
<audio controls>
  <source src="audio/podcast.mp3" type="audio/mpeg">
  <source src="audio/podcast.ogg" type="audio/ogg">
  Your browser does not support HTML5 audio.
</audio>
```

- **`controls`** attribute: Play, pause, volume, progress bar
- **Format: MP3** (most compatible), **OGG** (alternative)
- Lightweight alternative to video for voice/music

---

## Embedding External Media

```html
<!-- Embed YouTube video -->
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video Title"
  allowfullscreen>
</iframe>

<!-- Key attributes -->
<!-- src: embed URL (not share URL!) -->
<!-- allowfullscreen: enables full-screen capability -->
<!-- title: accessibility and clarity -->
```

---

<!-- _header: "Sub-Lesson 04c — Tables" -->

## Table Structure

```html
<table>
  <caption>Monthly Sales Report</caption>
  <tr>
    <th>Month</th>
    <th>Sales</th>
    <th>Growth</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$5,000</td>
    <td>+15%</td>
  </tr>
</table>
```

- **`<table>`:** Container
- **`<tr>`:** Table row
- **`<th>`:** Table header (bold, centered by default)
- **`<td>`:** Table data (normal cell)
- **`<caption>`:** Title for the table

---

## Advanced Table Features

```html
<!-- Merge columns with colspan -->
<tr>
  <th colspan="2">Contact Info</th>
</tr>

<!-- Merge rows with rowspan -->
<tr>
  <td rowspan="3">Group A</td>
  <td>Item 1</td>
</tr>
```

- **`colspan`:** Span across multiple columns
- **`rowspan`:** Span across multiple rows
- **Accessibility:** Always use `<th>` for headers, add `scope="col"` or `scope="row"`

```html
<th scope="col">Product</th>
<th scope="row">Item A</th>
```

---

## Key Takeaways

- Images: Use descriptive `alt` text, choose correct format (JPG, PNG, SVG, WebP)
- Media: HTML5 `<video>` and `<audio>` for local files, `<iframe>` for external (YouTube)
- Tables: Use semantic structure (`<th>`, `<td>`), leverage `colspan`/`rowspan`, add captions
- Accessibility: All content should be usable by everyone (including screen readers)

**Next:** Hands-on labs—build a Product Showcase page!

