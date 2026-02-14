# Lesson 04 Study Guide: Images, Media & Tables

## Vocabulary

1. **img tag** — HTML element used to embed images on a web page
2. **src attribute** — Specifies the path or URL of the image file
3. **alt text (alt attribute)** — Descriptive text for accessibility and SEO; displays if image fails to load
4. **figure element** — Semantic container for images and related captions
5. **figcaption element** — Provides a caption or explanation for a figure
6. **JPG (JPEG)** — Compressed image format best for photos; smaller file size, lossy compression
7. **PNG** — Image format that supports transparency; lossless compression, larger than JPG
8. **SVG (Scalable Vector Graphics)** — Vector-based format for icons and scalable graphics; crisp at any size
9. **WebP** — Modern image format with better compression; smaller than JPG/PNG but newer browser support
10. **width attribute** — Specifies the width of an image in pixels
11. **height attribute** — Specifies the height of an image in pixels
12. **video tag** — HTML5 element for embedding video content
13. **audio tag** — HTML5 element for embedding audio content
14. **controls attribute** — Shows playback controls (play, pause, volume) for audio/video
15. **source tag** — Specifies media file format and path; multiple sources for browser compatibility
16. **iframe tag** — Embeds external content (e.g., YouTube videos) from another website
17. **table tag** — Container for structured tabular data
18. **tr tag** — Table row; contains table cells
19. **th tag** — Table header cell; typically bold and centered
20. **td tag** — Table data cell; normal cell content
21. **colspan attribute** — Merges a cell across multiple columns
22. **rowspan attribute** — Merges a cell across multiple rows
23. **caption tag** — Provides a title or description for a table

## Quick Reference: Code Snippets

### Images
```html
<!-- Basic image with alt text -->
<img src="images/photo.jpg" alt="Description of image">

<!-- Image with sizing -->
<img src="images/photo.jpg" alt="Description" width="400" height="300">

<!-- Responsive image -->
<img src="images/photo.jpg" alt="Description" style="max-width: 100%; height: auto;">

<!-- Figure with caption -->
<figure>
  <img src="images/product.jpg" alt="Product name">
  <figcaption>Product description here</figcaption>
</figure>
```

### Video & Audio
```html
<!-- HTML5 video -->
<video width="400" height="300" controls>
  <source src="video/demo.mp4" type="video/mp4">
  <source src="video/demo.webm" type="video/webm">
  Your browser does not support HTML5 video.
</video>

<!-- HTML5 audio -->
<audio controls>
  <source src="audio/song.mp3" type="audio/mpeg">
  Your browser does not support HTML5 audio.
</audio>

<!-- Embedded YouTube video -->
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video Title"
  allowfullscreen>
</iframe>
```

### Tables
```html
<!-- Simple table with headers -->
<table>
  <caption>Sales Data</caption>
  <tr>
    <th>Month</th>
    <th>Revenue</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$5,000</td>
  </tr>
</table>

<!-- Table with colspan/rowspan -->
<table>
  <tr>
    <th colspan="2">Header spanning 2 columns</th>
  </tr>
  <tr>
    <td rowspan="2">Spans 2 rows</td>
    <td>Cell 1</td>
  </tr>
  <tr>
    <td>Cell 2</td>
  </tr>
</table>

<!-- Accessible table headers -->
<table>
  <tr>
    <th scope="col">Product</th>
    <th scope="col">Price</th>
  </tr>
</table>
```

## ODE Competencies Covered

- **6.2.4** — Insert images, wrap text around images
- **6.2.5** — Resize images using width/height attributes and CSS
- **6.2.6** — Embed audio and video content
- **6.1.6** — Create tables with proper structure (rows, columns, headers)
- **6.5.9** — Incorporate media, forms, links, and tables into web pages

## Key Concepts to Remember

1. **Always use descriptive alt text** — Screen readers depend on it; it's also good for SEO
2. **Choose the right image format** — Photos = JPG, Graphics/logos = PNG, Icons = SVG, Modern = WebP
3. **Responsive images** — Use `max-width: 100%` and `height: auto` for mobile-friendly design
4. **Multiple media sources** — Provide fallback formats in `<video>` and `<audio>` for browser compatibility
5. **Semantic tables** — Use `<th>` for headers, `<caption>` for titles, `scope` for accessibility
6. **External media** — Use `<iframe>` for YouTube; embed URL differs from share URL

## Practice Questions

1. What's the difference between JPG and PNG?
2. Why is alt text important in images?
3. How do you make an image responsive?
4. What attribute allows you to span a cell across multiple columns?
5. What's the difference between `<video>` and `<iframe>` for embedding media?

