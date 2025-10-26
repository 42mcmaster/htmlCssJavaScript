# Lesson M1 Tasks: Multimedia Integration Practice

---

## Task 1: GUIDED EXAMPLE - Responsive Image Gallery

**Create a simple photo gallery with responsive images.**

### Instructions:
Create a file called `photo-gallery.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">My Photo Gallery</h1>
        
        <div class="row g-3">
            <!-- Photo 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/400/300?random=1" 
                     alt="Random photo 1" 
                     class="img-fluid">
            </div>
            
            <!-- Photo 2 -->
            <div class="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/400/300?random=2" 
                     alt="Random photo 2" 
                     class="img-fluid">
            </div>
            
            <!-- Photo 3 -->
            <div class="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/400/300?random=3" 
                     alt="Random photo 3" 
                     class="img-fluid">
            </div>
            
            <!-- Photo 4 -->
            <div class="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/400/300?random=4" 
                     alt="Random photo 4" 
                     class="img-fluid">
            </div>
            
            <!-- Photo 5 -->
            <div class="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/400/300?random=5" 
                     alt="Random photo 5" 
                     class="img-fluid">
            </div>
            
            <!-- Photo 6 -->
            <div class="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/400/300?random=6" 
                     alt="Random photo 6" 
                     class="img-fluid">
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Test It:
1. Open in browser - you should see 6 random images
2. Resize window - images should scale responsively
3. At mobile width: 1 image per row
4. At tablet width: 2 images per row
5. At desktop width: 3 images per row

**Note:** We're using Picsum.photos for placeholder images. In real projects, use your own images!

---

## Task 2: Video Embed Page

**Goal:** Embed a YouTube video and local HTML5 video.

### Instructions:
1. Create a file called `video-page.html`
2. Add a YouTube video embed (find any video, use the embed code)
3. Add an HTML5 video section (use placeholder if no video file)
4. Make both responsive using Bootstrap

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Demo</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-5">Video Gallery</h1>
        
        <!-- YouTube Video Section -->
        <section class="mb-5">
            <h2 class="mb-3">Featured YouTube Video</h2>
            <div class="ratio ratio-16x9">
                <!-- Add YouTube iframe here -->
                <!-- Go to any YouTube video, click Share > Embed, copy the code -->
            </div>
        </section>
        
        <!-- HTML5 Video Section -->
        <section class="mb-5">
            <h2 class="mb-3">HTML5 Video Player</h2>
            <div class="ratio ratio-16x9">
                <video controls>
                    <!-- If you have a video file, use it -->
                    <!-- Otherwise, use a sample from: https://sample-videos.com/ -->
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ YouTube video embedded in responsive wrapper
- ✅ HTML5 video with controls
- ✅ Both videos use `ratio ratio-16x9` for responsive sizing
- ✅ Section headings for organization

**💡 Tip:** To find a YouTube video's embed code, click Share → Embed on any YouTube video.

---

## Task 3: Card Gallery with Images

**Goal:** Create a card-based gallery with images, titles, and descriptions.

### Instructions:
1. Create a file called `card-gallery.html`
2. Create 6 cards with:
   - Image at top
   - Card title
   - Short description
   - "View More" button

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Gallery</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Portfolio Gallery</h1>
        
        <div class="row g-4">
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <img src="https://picsum.photos/400/250?random=10" 
                         class="card-img-top" 
                         alt="Project 1">
                    <div class="card-body">
                        <h5 class="card-title">Project Title 1</h5>
                        <p class="card-text">Short description of the project goes here.</p>
                        <a href="#" class="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>
            
            <!-- Add 5 more cards here -->
            <!-- Use different random numbers in Picsum URLs -->
            
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ 6 cards total
- ✅ Each card has: image, title, description, button
- ✅ Use `h-100` for equal height cards
- ✅ Responsive: 1/2/3 columns (mobile/tablet/desktop)
- ✅ Different placeholder images for each card

**💡 Challenge:** Add a badge to each card showing a category (like "Web Design", "Photography", "Development")

---

## Task 4: Hero Section with Background Image

**Goal:** Create a hero section with background image and overlay text.

### Instructions:
1. Create a file called `hero-section.html`
2. Create a hero section with:
   - Background image
   - Semi-transparent overlay
   - Centered heading and button
   - Responsive height

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hero Section</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .hero {
            background-image: url('https://picsum.photos/1920/1080?random=20');
            background-size: cover;
            background-position: center;
            height: 500px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="display-3 mb-4">Welcome to Our Website</h1>
            <p class="lead mb-4">We create amazing digital experiences</p>
            <button class="btn btn-primary btn-lg">Get Started</button>
        </div>
    </div>
    
    <div class="container mt-5">
        <h2>Content Below Hero</h2>
        <p>Your main page content continues here...</p>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Experiment:
1. Change the overlay opacity from `0.5` to `0.3` (lighter) or `0.7` (darker)
2. Change the hero height from `500px` to `100vh` (full screen)
3. Try different background-position values: `top`, `bottom`, `left`
4. Add a second button with `btn-outline-light` class

**💡 Tip:** Use high-quality, large images for hero backgrounds (at least 1920px wide)

---

## Task 5: Audio Player Page

**Goal:** Create a music/podcast player page with multiple audio tracks.

### Instructions:
1. Create a file called `audio-player.html`
2. Add 3 audio players in Bootstrap cards
3. Style them nicely with titles and descriptions

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Player</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-5">
            <i class="bi bi-music-note-beamed"></i> Podcast Playlist
        </h1>
        
        <div class="row">
            <!-- Audio Track 1 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">🎵 Episode 1: Introduction</h5>
                        <p class="card-text text-muted">Duration: 5:30</p>
                        <audio controls class="w-100">
                            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <p class="mt-3">Welcome to our first episode where we discuss...</p>
                    </div>
                </div>
            </div>
            
            <!-- Audio Track 2 - Add this -->
            
            
            <!-- Audio Track 3 - Add this -->
            
        </div>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements:
- ✅ 3 audio players in cards
- ✅ Each with title, duration, and description
- ✅ Audio controls span full width (`w-100`)
- ✅ Use icons from Bootstrap Icons
- ✅ Cards stack on mobile, 3 columns on desktop

**Sample Audio URLs:**
- https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
- https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3
- https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3

---

## Challenge Task: Complete Multimedia Portfolio Page

**Goal:** Create a comprehensive page showcasing all multimedia types.

### Instructions:
1. Create `multimedia-portfolio.html`
2. Include all of the following sections:

**Required Sections:**
1. **Hero Section** - Background image with overlay and call-to-action
2. **About Section** - Text content with profile image
3. **Image Gallery** - 6-9 images in responsive grid
4. **Video Showcase** - 2 videos (YouTube + HTML5 or two YouTube)
5. **Audio Section** - At least 2 audio players
6. **Skills Section** - Cards with icons showing skills/services

### Starter Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multimedia Portfolio</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <style>
        .hero {
            background-image: url('https://picsum.photos/1920/1080?random=50');
            background-size: cover;
            background-position: center;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
        
        section {
            padding: 60px 0;
        }
        
        .profile-img {
            border-radius: 50%;
            max-width: 250px;
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <div class="hero">
        <div class="text-center">
            <h1 class="display-2">Creative Portfolio</h1>
            <p class="lead">Photography • Video • Audio</p>
            <button class="btn btn-light btn-lg mt-3">View My Work</button>
        </div>
    </div>
    
    <!-- About Section -->
    <section class="bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="mb-4">About Me</h2>
                    <p class="lead">Professional multimedia creator...</p>
                    <p>Add your bio here...</p>
                </div>
                <div class="col-md-6 text-center">
                    <img src="https://picsum.photos/300/300?random=60" 
                         alt="Profile photo" 
                         class="profile-img img-fluid">
                </div>
            </div>
        </div>
    </section>
    
    <!-- Photo Gallery Section -->
    <section>
        <div class="container">
            <h2 class="text-center mb-5">
                <i class="bi bi-camera-fill"></i> Photo Gallery
            </h2>
            <!-- Add image gallery grid here -->
        </div>
    </section>
    
    <!-- Video Section -->
    <section class="bg-light">
        <div class="container">
            <h2 class="text-center mb-5">
                <i class="bi bi-play-circle-fill"></i> Video Work
            </h2>
            <!-- Add video embeds here -->
        </div>
    </section>
    
    <!-- Audio Section -->
    <section>
        <div class="container">
            <h2 class="text-center mb-5">
                <i class="bi bi-music-note-beamed"></i> Audio Projects
            </h2>
            <!-- Add audio players here -->
        </div>
    </section>
    
    <!-- Skills Section -->
    <section class="bg-light">
        <div class="container">
            <h2 class="text-center mb-5">What I Do</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card text-center h-100">
                        <div class="card-body">
                            <i class="bi bi-camera display-1 text-primary"></i>
                            <h5 class="card-title mt-3">Photography</h5>
                            <p class="card-text">Professional photo services</p>
                        </div>
                    </div>
                </div>
                <!-- Add more skill cards -->
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section>
        <div class="container text-center">
            <h2 class="mb-4">Get In Touch</h2>
            <p class="lead mb-4">Interested in working together?</p>
            <button class="btn btn-primary btn-lg">Contact Me</button>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p class="mb-0">© 2025 Your Name. All rights reserved.</p>
        </div>
    </footer>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Requirements Checklist:
- ✅ Hero section with background image
- ✅ About section with profile image and bio
- ✅ Photo gallery with 6-9 images (3 per row on desktop)
- ✅ 2 video embeds (responsive)
- ✅ 2-3 audio players in cards
- ✅ Skills section with at least 3 cards with icons
- ✅ Contact section
- ✅ Footer
- ✅ All sections responsive on mobile
- ✅ Proper use of Bootstrap Icons
- ✅ Professional styling and spacing

### Bonus Features:
- ✨ Add smooth scrolling to sections
- ✨ Include social media icon links in footer
- ✨ Add hover effects on gallery images
- ✨ Create a navbar with links to each section
- ✨ Add lazy loading to images (`loading="lazy"`)
- ✨ Include video controls customization
- ✨ Add download buttons for audio files

---

## Tips for Success

1. **Always Include Alt Text**
   ```html
   <img src="photo.jpg" alt="Descriptive text about the image">
   ```

2. **Use img-fluid for Responsive Images**
   ```html
   <img src="photo.jpg" class="img-fluid" alt="Description">
   ```

3. **Responsive Video Wrapper**
   ```html
   <div class="ratio ratio-16x9">
       <iframe src="video-url"></iframe>
   </div>
   ```

4. **Optimize Images Before Using**
   - Use tools like TinyPNG or Squoosh
   - Resize to appropriate dimensions
   - Keep file sizes under 200KB

5. **Test on Multiple Devices**
   - Check mobile view
   - Test video playback
   - Verify audio controls work

---

## Quick Reference

### Responsive Images
```html
<img src="photo.jpg" alt="Description" class="img-fluid">
```

### Responsive Video
```html
<div class="ratio ratio-16x9">
    <video controls>
        <source src="video.mp4" type="video/mp4">
    </video>
</div>
```

### Audio Player
```html
<audio controls class="w-100">
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

### Background Image Hero
```css
.hero {
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
}
```

### Bootstrap Icons
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">

<i class="bi bi-camera"></i>
<i class="bi bi-play-circle"></i>
<i class="bi bi-music-note"></i>
```

---

## Common Mistakes to Avoid

❌ **Forgetting alt text**
```html
<img src="photo.jpg">
```

✅ **Always include alt text**
```html
<img src="photo.jpg" alt="Team meeting photo">
```

❌ **Using huge, unoptimized images**
- 5MB file for a 400px display

✅ **Optimize before uploading**
- Resize and compress to under 200KB

❌ **Video not responsive**
```html
<video width="1920" height="1080">
```

✅ **Use responsive wrapper**
```html
<div class="ratio ratio-16x9">
    <video>
```

❌ **Autoplay video with sound**
```html
<video autoplay>  <!-- Browsers block this! -->
```

✅ **Mute if using autoplay**
```html
<video autoplay muted loop>
```
