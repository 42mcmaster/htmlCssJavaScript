# Lesson 04 DIY Task: Add Images, Media, and a Table to Your Mini-Site

## Overview

This week you add three things to the mini-site you built in Lesson 03:
- A photo gallery with alt text and captions
- A 20-second promo video you make yourself (Lego figures, your voice, Canva)
- A comparison table

You work on it a little each day, right after that day's task. By Friday it is finished and pushed to GitHub.

**This is the one thing graded for Lesson 04.** The a/b/c tasks are practice.

**No CSS.** This is graded on HTML. Styling starts in Lesson 05.

---

## Day 1 (Tuesday): Photo Gallery

Do this after `html04a_Task.html`.

1. Pick a page on your site for the gallery, or add a new page called `gallery.html` and link it in your nav.
2. Add **at least 3 photos** that fit your site's topic.
3. Every photo needs:
   - `alt` text that describes the photo (a short phrase, not a sentence)
   - `width` and `height` attributes
   - A `<figure>` around it and a `<figcaption>` under it
4. Save the photos in an `images` folder next to your HTML files and use a relative path (`images/photo.jpg`).

**Where to get photos:**
- Take your own, or use screenshots.
- Free photo sites: Wikimedia Commons (commons.wikimedia.org), Unsplash, Pexels, Pixabay. Download the file; do not link to the site.
- If you use someone else's photo, put the photographer's name in the `<figcaption>` or in a credits line at the bottom of the page. See `images/CREDITS.md` in this unit for an example.
- Photos must be school-appropriate.

---

## Day 2 (Wednesday): Media Section

Do this after `html04b_Task.html`.

Today is production day. You make a **20-second Lego promo video** for your site. The full instructions are in **`html04_MediaProduction.md`**: script, voice recording in Audacity, shooting the Lego figures, putting it together in Canva, exporting.

What ends up on your site:

1. A section on one of your pages for the promo.
2. Your exported `promo-lastname.mp4` in a `media` folder next to your HTML files.
3. A `<video>` tag with the `controls` attribute and one `<source>` pointing at the MP4. MP4 is the only format you need.

Most people will finish the video Wednesday and embed it Friday. If your video isn't exported yet, put in the `<video>` tag today with the file name you plan to use, so the HTML is ready when the file is.

---

## Day 3 (Thursday): Comparison Table

Do this after `html04c_Task.html`.

1. Add a table that compares 3 or more things related to your topic (products, teams, characters, plans, whatever fits).
2. Requirements:
   - A `<caption>` that says what the table compares
   - A header row using `<th>`
   - At least 4 data rows
   - At least one `colspan` or `rowspan` that does something useful (a title row across the top, a label down the side)
3. Keep the table on the same page as the thing it relates to.

---

## Day 4 (Friday): Finish and Push

After the Unit 1 quiz.

1. Finish and export your promo video if you didn't Wednesday. Check that the MP4 is **under 10 MB** before you put it in the `media` folder.
2. Open every page and check that all images, media, and links work. Play the video with sound on.
3. Run each page through the W3C validator: https://validator.w3.org/ and fix any errors.
4. Commit and push to GitHub. Check on github.com that the `images` and `media` folders are there.

---

## Checklist

- [ ] At least 3 photos, each with alt text, width, height, figure, and figcaption
- [ ] Photo credits included if you used someone else's photos
- [ ] Promo video (MP4, under 10 MB) embedded with `<video>` and `controls`, plays with sound
- [ ] Table has a caption, th header row, 4+ data rows, and a useful colspan or rowspan
- [ ] No broken images, media, or links
- [ ] All pages pass the W3C validator
- [ ] Pushed to GitHub, with the images and media folders included

---

## Grading Rubric

| Criteria | Looking for |
|----------|-------------|
| **Images** | 3+ photos, alt text, width/height, figure/figcaption, credits where needed |
| **Media** | 20-second Lego promo, MP4 under 10 MB, embedded with controls, plays with sound |
| **Table** | Caption, headers, 4+ rows, colspan/rowspan used for a reason |
| **Site still works** | Nav links work, nothing broken, new content fits the site |
| **Valid HTML** | Passes the W3C validator |
| **Pushed** | On GitHub with images and media folders |

---

## Stuck?

- **Alt text stuck?** Describe what someone would see if the image didn't load.
- **Image won't show?** It's almost always the path. Check the folder name and the file name, including capital letters and the file extension.
- **Colspan confused?** Draw the table on paper first and count the columns in each row. Every row has to add up to the same number.
- **Video won't play?** Check the file name in `src` matches the real file exactly, and that the file is in the `media` folder. More help in `html04_MediaProduction.md`.
