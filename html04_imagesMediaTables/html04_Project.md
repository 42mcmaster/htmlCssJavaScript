# Lesson 04 Project: Photos, a Promo Video, and a Table

Add three things to the 3-page mini-site you built in the Lesson 03 DIY task. This is the one graded item for Lesson 04. The a/b/c tasks are practice.

1. A photo gallery on a **new page**, `gallery.html`
2. A 20-second promo video you make yourself (Lego figures, your voice, Canva), on your **Home page**
3. A comparison table on your **About page**

Then validate and push. **No CSS.** Don't add `style` attributes or `<style>` blocks. In Lesson 05 you will write one stylesheet that styles every page of this site, so keep the HTML clean.

**Order:** start the video early. Recording slots and shooting take time. Do the gallery and table whenever the matching a/b/c task is done. Everything is pushed by Friday.

---

## Where Everything Goes

Work in the same folder as your Lesson 03 site (the folder with `index.html`, `about.html`, and `contact.html`). When you're done, it should look like this:

```
your-site-folder/
├── index.html      <- Home: add the promo video (Part 2)
├── about.html      <- About: add the comparison table (Part 3)
├── contact.html    <- Contact: only the nav changes
├── gallery.html    <- NEW page: photo gallery (Part 1)
├── images/         <- NEW folder: your 3+ photos
└── media/          <- NEW folder: promo-lastname.mp4
```

| Page | What changes |
|---|---|
| `index.html` | Add "Gallery" to both navs. Add a `promo` section with the video. Add a link that jumps to it. |
| `about.html` | Add "Gallery" to both navs. Add a `compare` section with the table. |
| `contact.html` | Add "Gallery" to both navs. Nothing else. |
| `gallery.html` | New page. Same header, nav, and footer as the others. Photos go here. |

---

## Part 1: Photo Gallery (gallery.html)

### 1a. Make the new page

1. Make a copy of `index.html` and rename the copy `gallery.html`. This gives you the same header, nav, and footer with no retyping.
2. In `gallery.html`, change the `<title>` to `Your Site Name - Gallery` and delete everything inside `<main>`.
3. Add a Gallery link to the **header nav and the footer nav on all 4 pages**. That's 8 navs. Every nav should now look like this:

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="gallery.html">Gallery</a>
  <a href="contact.html">Contact</a>
</nav>
```

4. Open each page in the browser and click every nav link to make sure they all work.

### 1b. Add the photos

1. Make a folder named `images` next to your HTML files.
2. Put at least **3 photos** that fit your topic in it. Use short file names with no spaces, like `latte.jpg` or `band-stage.jpg`.
3. Inside `<main>` on `gallery.html`, add a section with a figure for each photo:

```html
<section id="photos">
  <h2>Photo Gallery</h2>

  <figure>
    <img src="images/latte.jpg" alt="Latte with a leaf drawn in the foam" width="400" height="300">
    <figcaption>Our house latte</figcaption>
  </figure>

  <!-- Two or more figures just like the one above -->

</section>
```

4. Every photo needs: `alt` text (short phrase describing the picture), `width` and `height`, a `<figure>` around it, and a `<figcaption>` under it.
5. Photos you didn't take need a credit, either in the caption or in a credits line at the bottom of the page. Free sources: Wikimedia Commons, Unsplash, Pexels, Pixabay. Download the file, don't link to the site. See `images/CREDITS.md` for the format.

---

## Part 2: Promo Video (index.html)

A 20-second ad for your site, acted out by Lego figures. You are not on camera.

**Work with a partner.** Pair up for the video. You help each other time the script, run the mic, move the figures, and figure out Audacity and Canva. Give each other ideas. But **each of you makes your own video** for your own site. Two people, two videos.

**Hard limits:** 20 seconds max. Under 10 MB. Canva's built-in music only. School-appropriate: Mr. McMaster and your parents could watch it.

### 2a. Script (on paper first)

| Seconds | What happens |
|---|---|
| 0–4 | The problem or the hook |
| 4–14 | The site and 2 or 3 things on it |
| 14–20 | Closing line with the site name |

- About 45 words. Two characters max. Say the site name at the end.
- Read it out loud a few times while your partner times you. Over 17 seconds? Cut some words.
- Write a shot (picture/photo) list: one line per picture you'll take.
- **Show Mr. McMaster the timed script before you record.**

### 2b. Record the voice (Audacity, on the Mac(s))

Go with your partner: one records, the other runs Audacity, then switch. Shoot your pictures while you wait.

1. Open Audacity. Mr. McMaster can assist with setup.
2. Have the mic about ten inches from you and speak at a normal volume, and speak CLEARLY.
3. Record one test line. The waveform should reach about half to two-thirds of the track height. If it's too small: move closer. If it hits the top: back off of the mic a little.
4. Record the whole script. Mess up? Pause, say the line again, keep going.
5. Cut mistakes: cut at the beginning and end of the bad part(s) and press Delete. Drag the audio that remains back together. Trim dead air at both ends.
6. Optional: Select All, then **Effect > Volume and Compression > Normalize**, Apply.
7. **File > Export Audio** as MP3, named `promo-voice-lastname` or something similar, to the Documents folder. Also Save Project to Documents.
8. Log in to Google Drive (your account) and drop your MP3 into it. You can now get it from your computer and add the file to Canva.

### 2c. Shoot the pictures (phone)

Stop motion: lots of still pictures played fast. Use **2 pictures per second** (about 40 pictures) or **3 per second** (about 60) if you want it smoother.

- Small set on a desk, plain background, one or two props.
- Phone must not move between shots. Prop it against books, tape it down, or rig up a stand. One partner moves the figures, the other takes the pictures, then switch for the second video.
- Steady light, no flash. **Landscape**, every picture.
- Take a picture, move the figure a tiny bit, take another. Small moves look smooth, big moves look like teleporting.
- Take a few extra of the last pose to hold while the site name is said.
- Get them to Canva with the Canva phone app (Uploads), email them to yourself, or put them in Google Drive (school account) from your phone.

### 2d. Build it in Canva

PLEASE TAKE NOTES IF THESE STEPS ARE OFF, and report to Mr. M

1. Create a design > **Video** (landscape, 1920 x 1080).
2. Upload the voice MP3 and the pictures.
3. Drag the MP3 onto the timeline first. That sets the length.
4. Add a page per picture, stretched to fill. Select all pages, set timing to **0.5 s** (2 per second) or **0.3 s** (3 per second).
5. Play it. Drag pages so the right pictures are up while each line is said.
6. Add the site name as text on the last few pages. Big, one font.
7. Add music from **Elements > Audio**. Turn it down to about 15–20% so the voice wins.
8. Length at the bottom of the screen must be **20.0 s or less**. Over? Cut pictures, not words.

**Getting creative (optional).** Mr. McMaster prefers that you get creative, as long as there is time and you've met the base requirements.
- Click the voice track and change its **speed** in Canva. Faster makes it shorter and higher, so a longer script can fit. Slower makes it deeper. If your partner can't repeat the site name back after hearing it, it's too fast.
- Canva sound effects (a door, a ding) where something happens on screen, quieter than the voice.

### 2e. Export and put it on your Home page

1. **Share > Download**, MP4, **720p** (not 1080p). Rename it `promo-lastname.mp4` (use your real last name, all lowercase, no spaces).
2. Check the file size: **under 10 MB**. Too big? Export again at lower quality.
3. Make a folder named `media` next to your HTML files and put the MP4 in it.
4. Open `index.html`. Inside `<main>`, add this section. Put it right after your first section so visitors see it near the top. Change `lastname` to match your file name exactly.

```html
<section id="promo">
  <h2>Watch the Promo</h2>
  <video width="640" height="360" controls>
    <source src="media/promo-lastname.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
</section>
```

5. Add a page anchor on `index.html` that jumps to the video, the same way you did in Lesson 03. Put it near the top of `<main>`:

```html
<p><a href="#promo">Watch our 20-second promo</a></p>
```

If the video isn't done yet, put the section in now with the file name you plan to use. It will start working as soon as the file is in the `media` folder.

---

## Part 3: Comparison Table (about.html)

Your About page is where visitors learn what your site offers, so the table goes there. Compare **3 or more things** from your topic. Some ideas:

| Site topic | Table idea |
|---|---|
| Coffee shop | Drinks, with prices for small, medium, and large |
| Band | Tour dates: city, venue, date, ticket price |
| Pet care | Services: dog, cat, and small pet prices |
| Fitness studio | Class types: day, time, length, level |
| Tech blog / portfolio | Tools or projects: what it is, language used, year |

### What the table needs

1. It goes inside a new section on `about.html` with `id="compare"`.
2. A `<caption>` that says what the table compares.
3. A header row using `<th>`.
4. At least 4 data rows.
5. At least one `colspan` or `rowspan` that does a real job. The two easiest ones, both from the 04c task:
   - **colspan note row:** a last row with one cell stretched across the whole table, like "Prices include tax."
   - **rowspan label:** one cell stretched down beside rows that belong together, like "Hot Drinks" beside two coffee rows.

### Example (coffee shop, colspan note row)

```html
<section id="compare">
  <h2>Our Drinks</h2>
  <table>
    <caption>Drink Prices by Size</caption>
    <tr>
      <th>Drink</th>
      <th>Small</th>
      <th>Medium</th>
      <th>Large</th>
    </tr>
    <tr>
      <td>Latte</td>
      <td>$3.50</td>
      <td>$4.25</td>
      <td>$5.00</td>
    </tr>
    <!-- 3 or more data rows just like the one above -->
    <tr>
      <td colspan="4">Prices include tax. Oat milk is 50 cents extra.</td>
    </tr>
  </table>
</section>
```

Use your own topic and your own data. Don't copy the coffee example unless your site really is a coffee shop.

**Borders:** your table will have no lines around the cells. That's expected. The 04b and 04c tasks had a `<style>` block that drew the borders. Leave it out here. You will add table borders yourself in Lesson 05.

---

## Part 4: Finish and Push

1. Open all 4 pages. Click every nav link on every page (header and footer).
2. On `index.html`, click the promo link and play the video with sound on.
3. On `gallery.html`, check that every photo shows up.
4. Run each page through https://validator.w3.org/ and fix the errors.
5. Commit and push. Check on github.com that `gallery.html`, the `images` folder, and the `media` folder all made it.

---

## Checklist

**Site and nav**
- [ ] `gallery.html` made from a copy of `index.html`
- [ ] Gallery link in the header nav and footer nav on all 4 pages
- [ ] No `style` attributes or `<style>` blocks anywhere

**Gallery (gallery.html)**
- [ ] 3+ photos in the `images` folder
- [ ] Each photo has alt, width, height, figure, figcaption
- [ ] Credits for any photo you didn't take

**Video (index.html)**
- [ ] Partner picked; script timed at 17 s or under and approved by Mr. McMaster
- [ ] Voice recorded in Audacity, exported as MP3
- [ ] 40–60 landscape pictures, camera didn't move
- [ ] Canva video: voice, pictures, site name on screen, music under the voice, 20 s or less
- [ ] MP4, 720p, under 10 MB, named `promo-lastname.mp4`, in the `media` folder
- [ ] `promo` section on `index.html` with `<video controls>`, plays with sound
- [ ] Page anchor on `index.html` that jumps to `#promo`

**Table (about.html)**
- [ ] In a section with `id="compare"`
- [ ] Caption, `<th>` header row, 4+ data rows
- [ ] At least one colspan or rowspan that does a real job

**Finish**
- [ ] Every link works on every page
- [ ] All 4 pages pass the validator
- [ ] Pushed to GitHub with `gallery.html`, `images`, and `media`

---

## Grading

| Criteria | Looking for |
|---|---|
| **Gallery** | `gallery.html` with 3+ photos, alt, width/height, figure/figcaption, credits where needed |
| **Video** | Your own 20-second Lego promo (not your partner's), your own voice, MP4 under 10 MB, on `index.html` with controls, plays with sound, anchor link to it |
| **Table** | On `about.html`: caption, headers, 4+ rows, colspan/rowspan used for a reason |
| **Site still works** | All 4 pages have the same header, nav, and footer; every link works; nothing broken |
| **Valid HTML** | All 4 pages pass the W3C validator, no inline CSS |
| **Pushed** | On GitHub with `gallery.html`, `images`, and `media` |

---

## If something goes wrong

- **Image or video won't show:** it's the path. File name in `src` must match exactly, including capital letters and the extension, and the file must be in the right folder.
- **Gallery link works on one page but not another:** you missed a nav. There are 8 of them (header and footer on 4 pages).
- **Audacity shows a flat line:** wrong input selected. Check the mic dropdown, and System Settings > Privacy & Security > Microphone.
- **Voice sounds far away:** get closer. **Pops on P and B:** talk across the mic, not into it.
- **Stop motion looks jumpy:** moves were too big or the camera moved.
- **Pictures are sideways in Canva:** shot in portrait. Rotate them or reshoot.
- **Video over 20 seconds:** delete pictures, not the voice.
- **MP4 over 10 MB:** export at 720p. Still too big? It's probably over 20 seconds.
- **No sound on the site:** the voice track volume is 0 in Canva, or your computer is muted.
- **Table has no lines:** that's normal without CSS. Borders come in Lesson 05.
- **Colspan confused:** draw the table on paper and count the columns in each row. Every row has to add up the same.
