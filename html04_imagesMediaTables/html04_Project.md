# Lesson 04 Project: Photos, a Promo Video, and a Table

Add three things to the mini-site you built in Lesson 03. This is the one graded item for Lesson 04. The a/b/c tasks are practice.

1. A photo gallery
2. A 20-second promo video you make yourself (Lego figures, your voice, Canva)
3. A comparison table

Then validate and push. **No CSS.** Styling starts in Lesson 05.

**Order:** start the video early. Recording slots and shooting take time. Do the gallery and table whenever the matching a/b/c task is done. Everything is pushed by Friday.

---

## Part 1: Photo Gallery

1. Put the gallery on an existing page or a new `gallery.html` linked in your nav.
2. At least **3 photos** that fit your topic, saved in an `images` folder, linked with a relative path (`images/photo.jpg`).
3. Every photo gets `alt` text (short phrase), `width` and `height`, a `<figure>` around it, and a `<figcaption>` under it.
4. Photos you didn't take need a credit in the caption or a credits line at the bottom of the page. Free sources: Wikimedia Commons, Unsplash, Pexels, Pixabay. Download the file, don't link to the site. See `images/CREDITS.md` for the format.

---

## Part 2: Promo Video

A 20-second ad for your site, acted out by Lego figures. You are not on camera.

**Hard limits:** 20 seconds max. Under 10 MB. Canva's built-in music only. School-appropriate: Mr. McMaster and your parents could watch it.

### 2a. Script (on paper first)

| Seconds | What happens |
|---|---|
| 0–4 | The problem or the hook |
| 4–14 | The site and 2 or 3 things on it |
| 14–20 | Closing line with the site name |

- About 45 words. Two characters max. Say the site name at the end.
- Read it out loud three times while a partner times you. Over 17 seconds? Cut words.
- Write a shot list: one line per picture you'll take.
- **Show Mr. McMaster the timed script before you record.**

### 2b. Record the voice (Audacity, on the Mac)

Sign up for a 4-minute slot on the board once your script is approved. Shoot your pictures while you wait.

1. Open Audacity. In the microphone dropdown, pick the condenser mic, not the built-in one.
2. Sit a hand's width from the mic and talk slightly across it.
3. Record one test line. The waveform should reach about half to two-thirds of the track height. Too small: move closer. Hits the top: back off.
4. Record the whole script. Mess up? Pause, say the line again, keep going.
5. Cut mistakes: drag across the bad part, press Delete. Trim dead air at both ends.
6. Select All, then **Effect > Volume and Compression > Normalize**, Apply.
7. **File > Export Audio** as MP3, named `promo-voice-lastname`, to the Desktop. Also Save Project.
8. Copy the MP3 to the class thumb drive. **Eject before you pull it.** Put it in your site's `media` folder.

### 2c. Shoot the pictures (phone)

Stop motion: lots of still pictures played fast. Use **2 pictures per second** (about 40 pictures) or **3 per second** (about 60) if you want it smoother.

- Small set on a desk, plain background, one or two props.
- Phone must not move between shots. Prop it against books or tape it down.
- Steady light, no flash. **Landscape**, every picture.
- Take a picture, move the figure a tiny bit, take another. Small moves look smooth, big moves look like teleporting.
- Take a few extra of the last pose to hold while the site name is said.
- Get them to Canva with the Canva phone app (Uploads), or email them to yourself.

Shortcut: shoot a short video clip of you moving the figure by hand and trim it in Canva. Less stop-motion feel. Ask Mr. McMaster first.

### 2d. Build it in Canva

1. Create a design > **Video** (landscape, 1920 x 1080).
2. Upload the voice MP3 and the pictures.
3. Drag the MP3 onto the timeline first. That sets the length.
4. Add a page per picture, stretched to fill. Select all pages, set timing to **0.5 s** (2 per second) or **0.3 s** (3 per second).
5. Play it. Drag pages so the right pictures are up while each line is said.
6. Add the site name as text on the last few pages. Big, one font.
7. Add music from **Elements > Audio**. Turn it down to about 15–20% so the voice wins.
8. Length at the bottom of the screen must be **20.0 s or less**. Over? Cut pictures, not words.

**Getting creative (optional).** Mr. McMaster doesn't mind if you get creative, as long as the hard limits hold:
- Click the voice track and change its **speed** in Canva. Faster makes it shorter and higher, so a longer script can fit. Slower makes it deeper. If a partner can't repeat the site name back after hearing it, it's too fast.
- Two characters at two speeds: export each voice as its own MP3 from Audacity.
- Canva sound effects (a door, a ding) where something happens on screen, quieter than the voice.

### 2e. Export and embed

1. **Share > Download**, MP4, **720p** (not 1080p). Rename it `promo-lastname.mp4`.
2. Check the file size: **under 10 MB**. Too big? Export again at lower quality.
3. Put it in your `media` folder and add this to a page:

```html
<section id="promo">
  <h2>Watch the Promo</h2>
  <video width="640" height="360" controls>
    <source src="media/promo-lastname.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
</section>
```

If the video isn't done yet, put the `<video>` tag in now with the file name you plan to use.

---

## Part 3: Comparison Table

1. A table comparing 3 or more things related to your topic, on the page it relates to.
2. A `<caption>` that says what it compares.
3. A header row using `<th>`.
4. At least 4 data rows.
5. At least one `colspan` or `rowspan` that does something useful (a title row across the top, a label down the side).

---

## Part 4: Finish and Push

1. Open every page. Check every image, link, and the video (sound on).
2. Run each page through https://validator.w3.org/ and fix the errors.
3. Commit and push. Check on github.com that the `images` and `media` folders made it.

---

## Checklist

- [ ] 3+ photos, each with alt, width, height, figure, figcaption; credits where needed
- [ ] Script timed at 17 s or under and approved by Mr. McMaster
- [ ] Voice recorded in Audacity, exported as MP3
- [ ] 40–60 landscape pictures, camera didn't move
- [ ] Canva video: voice, pictures, site name on screen, music under the voice, 20 s or less
- [ ] MP4, 720p, under 10 MB, named `promo-lastname.mp4`, embedded with `<video controls>`, plays with sound
- [ ] Table with caption, th header row, 4+ rows, useful colspan or rowspan
- [ ] Nothing broken, all pages pass the validator
- [ ] Pushed to GitHub with `images` and `media` folders

---

## Grading

| Criteria | Looking for |
|---|---|
| **Images** | 3+ photos, alt, width/height, figure/figcaption, credits where needed |
| **Video** | 20-second Lego promo, your own voice, MP4 under 10 MB, plays with controls and sound |
| **Table** | Caption, headers, 4+ rows, colspan/rowspan used for a reason |
| **Site still works** | Nav works, nothing broken, new content fits the site |
| **Valid HTML** | Passes the W3C validator |
| **Pushed** | On GitHub with images and media folders |

---

## If something goes wrong

- **Image or video won't show:** it's the path. File name in `src` must match exactly, including capital letters and the extension, and the file must be in the right folder.
- **Audacity shows a flat line:** wrong input selected. Check the mic dropdown, and System Settings > Privacy & Security > Microphone.
- **Voice sounds far away:** get closer. **Pops on P and B:** talk across the mic, not into it.
- **Stop motion looks jumpy:** moves were too big or the camera moved.
- **Pictures are sideways in Canva:** shot in portrait. Rotate them or reshoot.
- **Video over 20 seconds:** delete pictures, not the voice.
- **MP4 over 10 MB:** export at 720p. Still too big? It's probably over 20 seconds.
- **No sound on the site:** the voice track volume is 0 in Canva, or your computer is muted.
- **Colspan confused:** draw the table on paper and count the columns in each row. Every row has to add up the same.
