---
marp: true
theme: default
paginate: true
---

# HTML Lesson 4
## Images and Media

### Web Design
Medina County Career Center

---

## Today's Learning Objectives

By the end of this lesson, you will be able to:

- Add images to web pages using the `<img>` tag
- Use proper image attributes (src, alt, width, height)
- Understand image file formats
- Use figure and figcaption elements
- Make images accessible
- Understand responsive image concepts

---

## Why Images Matter

**Images make websites:**
- More engaging and visually appealing
- Easier to understand (visual communication)
- More memorable
- Professional-looking

**But:** Images must be used properly!
- File size affects loading speed
- Accessibility requires proper markup
- Copyright must be respected

---

## The `<img>` Tag

The `<img>` tag adds images to your page:

```html
<img src="photo.jpg" alt="Description of photo" />
```

**Key points:**
- It's an **empty element** (self-closing)
- Has no closing tag
- **Must have** `src` and `alt` attributes
- Goes in the `<body>` section

---

## The `src` Attribute

**`src` = source** - tells browser where the image file is

```html
<!-- Same folder as HTML file -->
<img src="logo.png" alt="Company logo" />

<!-- In images subfolder -->
<img src="images/photo.jpg" alt="Photo" />

<!-- In parent folder -->
<img src="../banner.jpg" alt="Banner" />

<!-- External URL -->
<img src="https://example.com/image.jpg" alt="Image" />
```

**Uses same path rules as links!**

---

## The `alt` Attribute

**`alt` = alternative text** - describes the image

```html
<img src="sunset.jpg" alt="Golden sunset over mountain lake" />
```

**Why alt text matters:**
1. **Accessibility** - Screen readers read alt text aloud
2. **SEO** - Search engines use alt text
3. **Fallback** - Shows if image doesn't load
4. **Context** - Explains image purpose

**ALWAYS include meaningful alt text!**

---

## Writing Good Alt Text

**Good alt text:**
```html
<img src="dog.jpg" alt="Golden retriever puppy playing with tennis ball" />
<img src="chart.jpg" alt="Bar chart showing sales increased 40% in Q2" />
<img src="logo.jpg" alt="Acme Corporation logo" />
```

**Bad alt text:**
```html
<img src="dog.jpg" alt="dog" />
<img src="chart.jpg" alt="image" />
<img src="logo.jpg" alt="picture" />
```

**Be descriptive but concise!**

---

## When to Use Empty Alt Text

**Use `alt=""` for decorative images:**

```html
<!-- Decorative border -->
<img src="decorative-line.png" alt="" />

<!-- Icon next to text that explains it -->
<p><img src="icon-email.png" alt="" /> Contact: info@example.com</p>
```

**If image is purely decorative and adds no information, use empty alt!**

**Never omit the alt attribute completely!**

---

## Width and Height Attributes

**Control image dimensions:**

```html
<img src="photo.jpg" alt="Photo" width="300" height="200" />
```

**Values are in pixels**

**Benefits:**
- Browser reserves space before image loads
- Page doesn't "jump" while loading
- Can resize images (but use correct size when possible)

---

## Image Sizing Best Practices

**Option 1: Use actual image size**
```html
<!-- Image is 400x300 pixels -->
<img src="photo.jpg" alt="Photo" width="400" height="300" />
```

**Option 2: Resize proportionally**
```html
<!-- Set width, browser calculates height automatically -->
<img src="photo.jpg" alt="Photo" width="300" />
```

**⚠️ Don't distort images** - maintain aspect ratio!

---

## Image File Formats

### **JPEG (.jpg, .jpeg)**
- Best for: Photographs
- Supports millions of colors
- Compressed (smaller file size)
- No transparency
- **Most common for photos**

### **PNG (.png)**
- Best for: Graphics, logos, icons
- Supports transparency
- Larger file size than JPEG
- Better quality for text/graphics

---

## Image File Formats (continued)

### **GIF (.gif)**
- Best for: Simple animations
- Limited colors (256)
- Supports transparency
- Small file size
- Older format

### **SVG (.svg)**
- Best for: Logos, icons, simple graphics
- Vector format (scales perfectly)
- Very small file size
- Can be styled with CSS
- **Modern best choice for logos!**

---

## The `<figure>` Element

**Use `<figure>` for images with captions:**

```html
<figure>
  <img src="sunset.jpg" alt="Golden sunset over lake" />
  <figcaption>Sunset at Lake Superior, July 2024</figcaption>
</figure>
```

**Benefits:**
- Semantic HTML
- Associates caption with image
- Better for accessibility
- Better styling options with CSS

---

## Images as Links

**Make images clickable:**

```html
<a href="products.html">
  <img src="product-thumb.jpg" alt="View our products" />
</a>
```

**Common uses:**
- Logo linking to homepage
- Thumbnail linking to full image
- Banner ads
- Image galleries

---

## Image Accessibility Checklist

✅ **Always include alt attribute**  
✅ **Write descriptive alt text**  
✅ **Use empty alt for decorative images**  
✅ **Don't put important text in images**  
✅ **Ensure good color contrast**  
✅ **Use figures with captions when appropriate**  

---

## Questions?

Before we start coding:
- Img tag syntax clear?
- Alt text importance understood?
- File formats make sense?
- Figure element understood?

---

## Let's Build!

**Time to add images to web pages! 🖼️**
