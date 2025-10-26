# Lesson M1: Multimedia Integration for Web

## Why are we learning this?

Modern websites aren't just text - they include images, videos, audio, and interactive media. Learning to properly integrate multimedia makes your websites more engaging, professional, and user-friendly. You'll learn how to add media that loads fast, looks great, and works on all devices.

---

## Working with Images

### Image Formats for Web

Choose the right format for the job:

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| **JPG/JPEG** | Photos, complex images | Small file size, good quality | No transparency |
| **PNG** | Logos, graphics, transparency | Transparency support, sharp | Larger file size |
| **GIF** | Simple animations | Animation support | Limited colors (256) |
| **SVG** | Icons, logos, simple graphics | Scalable, tiny file size | Not good for photos |
| **WebP** | Modern web images | Best compression | Older browser support |

### Basic Image Tag

```html
<img src="photo.jpg" alt="Description of image">
```

**Critical:** Always include `alt` text for:
- Accessibility (screen readers)
- SEO (search engines)
- Fallback if image doesn't load

### Responsive Images

Images should adapt to different screen sizes:

#### Using CSS (Simple Method)

```html
<img src="photo.jpg" alt="Description" class="responsive-img">
```

```css
.responsive-img {
    max-width: 100%;
    height: auto;
}
```

**Bootstrap shortcut:**
```html
<img src="photo.jpg" alt="Description" class="img-fluid">
```

#### Using srcset (Advanced Method)

Serve different image sizes for different devices:

```html
<img src="image-800.jpg" 
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Responsive image">
```

**What this does:**
- Browser chooses the best image size based on screen width
- Saves bandwidth on mobile devices
- Provides crisp images on high-resolution displays

### Image Optimization

**Before uploading images:**
1. Resize to appropriate dimensions (don't use 4000px image if display is 800px)
2. Compress images (use tools like TinyPNG, Squoosh.app)
3. Use appropriate format (JPG for photos, PNG for logos)

**File size guidelines:**
- Hero images: Under 200KB
- Regular photos: Under 100KB
- Icons/logos: Under 20KB

---

## HTML5 Video

### Basic Video Element

```html
<video width="640" height="360" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

### Video Attributes

```html
<video controls autoplay muted loop poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
</video>
```

| Attribute | Purpose |
|-----------|---------|
| `controls` | Shows play/pause/volume controls |
| `autoplay` | Starts playing automatically |
| `muted` | Mutes audio (required for autoplay in most browsers) |
| `loop` | Loops video continuously |
| `poster` | Image shown before video plays |
| `preload` | How much to buffer: "none", "metadata", "auto" |

### Responsive Video

```html
<div class="video-container">
    <video controls>
        <source src="video.mp4" type="video/mp4">
    </video>
</div>
```

```css
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### Bootstrap Video Wrapper

```html
<div class="ratio ratio-16x9">
    <video controls>
        <source src="video.mp4" type="video/mp4">
    </video>
</div>
```

**Bootstrap ratio classes:**
- `ratio-1x1` - Square
- `ratio-4x3` - Old TV
- `ratio-16x9` - Widescreen (most common)
- `ratio-21x9` - Ultra-wide

---

## Embedding External Videos

### YouTube Videos

1. Go to YouTube video
2. Click "Share" → "Embed"
3. Copy the iframe code

```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Responsive YouTube Embed

```html
<div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
            title="Video title" 
            allowfullscreen>
    </iframe>
</div>
```

### Vimeo Videos

Similar to YouTube:

```html
<div class="ratio ratio-16x9">
    <iframe src="https://player.vimeo.com/video/VIDEO_ID" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen>
    </iframe>
</div>
```

---

## HTML5 Audio

### Basic Audio Element

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

### Audio Attributes

```html
<audio controls autoplay loop preload="auto">
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

### Styled Audio Player (Bootstrap)

```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">🎵 Now Playing: Song Title</h5>
        <audio controls class="w-100">
            <source src="song.mp3" type="audio/mpeg">
        </audio>
    </div>
</div>
```

---

## Image Galleries

### Simple Grid Gallery

```html
<div class="container">
    <div class="row g-3">
        <div class="col-12 col-md-4">
            <img src="photo1.jpg" alt="Photo 1" class="img-fluid">
        </div>
        <div class="col-12 col-md-4">
            <img src="photo2.jpg" alt="Photo 2" class="img-fluid">
        </div>
        <div class="col-12 col-md-4">
            <img src="photo3.jpg" alt="Photo 3" class="img-fluid">
        </div>
        <div class="col-12 col-md-4">
            <img src="photo4.jpg" alt="Photo 4" class="img-fluid">
        </div>
        <div class="col-12 col-md-4">
            <img src="photo5.jpg" alt="Photo 5" class="img-fluid">
        </div>
        <div class="col-12 col-md-4">
            <img src="photo6.jpg" alt="Photo 6" class="img-fluid">
        </div>
    </div>
</div>
```

### Card-Based Gallery

```html
<div class="container">
    <div class="row">
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="photo1.jpg" class="card-img-top" alt="Photo 1">
                <div class="card-body">
                    <h5 class="card-title">Image Title</h5>
                    <p class="card-text">Description of the image.</p>
                </div>
            </div>
        </div>
        <!-- Repeat for more images -->
    </div>
</div>
```

---

## Background Images

### CSS Background Image

```html
<div class="hero-section"></div>
```

```css
.hero-section {
    background-image: url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
}
```

### Background Image with Overlay

```html
<div class="hero-section">
    <div class="overlay">
        <h1>Hero Title</h1>
        <p>Hero description</p>
    </div>
</div>
```

```css
.hero-section {
    background-image: url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
```

---

## Icons and Icon Fonts

### Using Emojis

```html
<p>🏠 Home</p>
<p>📧 Contact</p>
<p>⭐ Favorite</p>
```

### Bootstrap Icons (Recommended)

Add to `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
```

Use in HTML:
```html
<i class="bi bi-house-fill"></i> Home
<i class="bi bi-envelope-fill"></i> Contact
<i class="bi bi-star-fill"></i> Favorite
```

With buttons:
```html
<button class="btn btn-primary">
    <i class="bi bi-download"></i> Download
</button>
```

### Font Awesome (Alternative)

Add to `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Use in HTML:
```html
<i class="fas fa-home"></i> Home
<i class="fas fa-envelope"></i> Contact
<i class="fas fa-star"></i> Favorite
```

---

## Accessibility Best Practices

### Images
```html
<!-- Good -->
<img src="logo.png" alt="Company Name Logo">

<!-- Bad -->
<img src="logo.png" alt="">
<img src="logo.png">
```

### Decorative Images
```html
<!-- If image is purely decorative, use empty alt -->
<img src="decorative-border.png" alt="">
```

### Video Accessibility
```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English">
    <track kind="captions" src="captions-en.vtt" srclang="en" label="English Captions">
</video>
```

### Audio Accessibility
- Provide transcripts for audio content
- Use clear labels and titles

---

## Performance Tips

### 1. Lazy Loading

Load images only when they're about to be visible:

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### 2. Optimize File Sizes

**Image Compression Tools:**
- TinyPNG (https://tinypng.com) - PNG/JPG compression
- Squoosh (https://squoosh.app) - Modern format conversion
- ImageOptim (Mac) - Batch optimization

### 3. Use CDNs for Large Files

Host videos on:
- YouTube (free, reliable)
- Vimeo (professional)
- Cloudinary (image optimization)

### 4. Provide Multiple Formats

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
</video>
```

---

## Complete Example: Multimedia Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multimedia Demo</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <style>
        .hero {
            background-image: url('hero-bg.jpg');
            background-size: cover;
            background-position: center;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
    </style>
</head>
<body>
    <!-- Hero Section with Background Image -->
    <section class="hero">
        <div class="text-center">
            <h1 class="display-3">Welcome to Our Site</h1>
            <p class="lead">Showcasing multimedia integration</p>
        </div>
    </section>
    
    <!-- Image Gallery -->
    <section class="container my-5">
        <h2 class="text-center mb-4">
            <i class="bi bi-images"></i> Photo Gallery
        </h2>
        <div class="row g-3">
            <div class="col-12 col-md-4">
                <img src="photo1.jpg" alt="Gallery photo 1" class="img-fluid" loading="lazy">
            </div>
            <div class="col-12 col-md-4">
                <img src="photo2.jpg" alt="Gallery photo 2" class="img-fluid" loading="lazy">
            </div>
            <div class="col-12 col-md-4">
                <img src="photo3.jpg" alt="Gallery photo 3" class="img-fluid" loading="lazy">
            </div>
        </div>
    </section>
    
    <!-- Video Section -->
    <section class="container my-5">
        <h2 class="text-center mb-4">
            <i class="bi bi-play-circle-fill"></i> Featured Video
        </h2>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Featured video" 
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Audio Section -->
    <section class="container my-5">
        <h2 class="text-center mb-4">
            <i class="bi bi-music-note-beamed"></i> Audio Player
        </h2>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">🎵 Now Playing</h5>
                        <audio controls class="w-100">
                            <source src="audio.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## Quick Reference

### Image Best Practices
- ✅ Always include `alt` text
- ✅ Use `img-fluid` or `max-width: 100%` for responsive
- ✅ Optimize file sizes before uploading
- ✅ Use appropriate format (JPG/PNG/SVG)
- ✅ Use `loading="lazy"` for below-the-fold images

### Video Best Practices
- ✅ Provide multiple formats (MP4, WebM)
- ✅ Use responsive wrappers (Bootstrap `ratio` classes)
- ✅ Include `controls` attribute
- ✅ Add `muted` if using `autoplay`
- ✅ Consider hosting on YouTube/Vimeo for large files

### Audio Best Practices
- ✅ Provide multiple formats (MP3, OGG)
- ✅ Include `controls` attribute
- ✅ Keep file sizes reasonable
- ✅ Consider providing transcripts

---

## Common Mistakes to Avoid

❌ **Using huge images**
```html
<!-- 5MB image displayed at 300px width -->
<img src="huge-photo.jpg" width="300">
```

✅ **Resize and optimize first**
```html
<!-- 50KB image at 300px width -->
<img src="optimized-photo.jpg" width="300" class="img-fluid">
```

❌ **Missing alt text**
```html
<img src="photo.jpg">
```

✅ **Include descriptive alt text**
```html
<img src="photo.jpg" alt="Team celebrating project launch">
```

❌ **Non-responsive video**
```html
<video width="1920" height="1080" controls>
```

✅ **Responsive video wrapper**
```html
<div class="ratio ratio-16x9">
    <video controls>
```

---

## Summary

In this lesson, you learned:
- ✅ Choosing the right image formats
- ✅ Making images responsive
- ✅ Optimizing images for web performance
- ✅ Adding HTML5 video and audio
- ✅ Embedding YouTube/Vimeo videos
- ✅ Creating image galleries
- ✅ Using background images
- ✅ Adding icons (Bootstrap Icons, Font Awesome)
- ✅ Accessibility best practices
- ✅ Performance optimization techniques

### Key Takeaway
Good multimedia integration enhances your site without slowing it down. Always optimize, always include alt text, and always make it responsive!

---

## Key Terms
- **Alt Text**: Description of image for accessibility and SEO
- **Responsive Image**: Image that scales to fit container
- **srcset**: HTML attribute for serving different image sizes
- **Lazy Loading**: Loading images only when needed
- **Aspect Ratio**: Width-to-height proportion (16:9, 4:3, etc.)
- **CDN**: Content Delivery Network for hosting files
- **Optimization**: Reducing file size without losing quality
- **Embed**: Including external content (YouTube, etc.)
