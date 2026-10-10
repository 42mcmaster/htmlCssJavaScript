# html10 DIY Task: Check, Fix, and Publish Your Website

This is the finish line for the website you have been building since Lesson 03. You will go through every page of your `DiyWebsite_Lastname` site and make it easy to find, easy for everyone to use, and free of mistakes. Then you will publish it with Firebase Hosting so anyone can visit it, and turn in the live link.

This is the one graded item for html10. `html10_Task.html` is practice for everything you do here.

You are not adding new pages. You are cleaning up what you have:

1. SEO pass
2. Accessibility pass
3. Proofread
4. Validate every page
5. Test in two browsers and a narrow window
6. Publish with Firebase Hosting
7. Write a short test log and turn in the live URL

**Order:** do Parts 1 to 5 on your computer first. Publish (Part 6) once the fixes are pushed. Keep your test log open the whole time and write down what you check and fix as you go.

---

## Where Everything Goes

Your site stays in the same folder at the top of your `htmlCssJavaScript` repo. The only new file is the test log.

```
htmlCssJavaScript/
└── DiyWebsite_Lastname/
    ├── index.html      <- Home (promo video)        : SEO + accessibility fixes
    ├── about.html      <- About (table)             : SEO + accessibility fixes
    ├── gallery.html    <- Gallery (photos)          : SEO + alt text check
    ├── contact.html    <- Contact (form)            : SEO + label check
    ├── template.html   <- your starting template    : title + meta description too
    ├── styles.css      <- contrast and focus fixes go here
    ├── script.js       <- dark mode + form validation (should not need changes)
    ├── images/         <- rename any bad file names (and update the src)
    ├── media/          <- promo video
    └── test-log.md     <- NEW: your test log (Part 7)
```

| Page | What to check |
|---|---|
| Every page | Unique `<title>`, unique meta description, one `<h1>`, headings in order, link text, spelling, passes the validator |
| `index.html` | Video has `controls`. Dark mode button has a name a screen reader can read. |
| `about.html` | Table has a `<caption>` and `<th>` headers. |
| `gallery.html` | Every photo has real alt text. |
| `contact.html` | Every input has a connected label. Submit is a real `<button>`. |
| `styles.css` | Text contrast passes in light AND dark mode. Focus outline is visible. |

---

## Part 1: SEO Pass

Do this on **every page**.

### 1a. Title

Each page gets its own title: page name + site name, about 60 characters or less.

```html
<!-- index.html -->
<title>Home - Sweet Crumb Bakery</title>

<!-- about.html -->
<title>About Us and Prices - Sweet Crumb Bakery</title>
```

No two pages may have the same title. No page may be titled just "Home" or "Document".

### 1b. Meta description

Add one right under the title on every page. One or two sentences, about 150 to 160 characters, different on each page.

```html
<meta name="description" content="Compare our bread, pastry, and cake prices by size. Sweet Crumb Bakery in Medina, Ohio bakes everything fresh every morning.">
```

### 1c. Headings

- Exactly one `<h1>` per page.
- Sections are `<h2>`. Parts inside a section are `<h3>`.
- No skipped levels. No heading picked just because of its size.

### 1d. Alt text and file names

- Every `<img>` has an `alt` that says what is in the picture. No "image", no "photo", no file names.
- Decorative images get `alt=""`.
- File names: lowercase, no spaces, hyphens between words. If you rename a file in `images/`, change every `src` that uses it.

### 1e. Link text

Search every page for "click here", "here", or "link". Change the words so the link says where it goes.

### 1f. Keywords

Pick 2 or 3 phrases someone would type to find a site like yours. Make sure they appear naturally in your titles, `<h1>`, meta descriptions, and page text. Do not repeat them over and over.

---

## Part 2: Accessibility Pass

### 2a. Labels (contact.html)

Every input and textarea has a `<label>` whose `for` matches the input's `id`. A placeholder does not count as a label.

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

### 2b. Real buttons and links

- Anything that goes to a page is an `<a href>`.
- Anything that does something (submit, dark mode) is a `<button>`.
- No `<div onclick>` or `<span onclick>`.

### 2c. aria-label for icon-only buttons and links

If your dark mode button (or any link) shows only an icon or emoji with no words, give it an `aria-label`:

```html
<button id="theme-toggle" aria-label="Switch dark mode on or off">🌙</button>
```

If it already has words like "Dark Mode", you do not need one.

### 2d. Keyboard tab-through

On every page:
1. Click in the address bar, then press **Tab** again and again.
2. You should reach every nav link, every button, and every form field, in a sensible order.
3. You should **see** an outline each time.
4. Press **Enter** on a link and on the dark mode button. Both should work.

(Safari on a Mac: press **Option + Tab** to reach links, or use Chrome.)

If you cannot see the outline, add this to `styles.css`:

```css
/* Clear outline for keyboard users */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 3px solid #1a5fb4;
  outline-offset: 2px;
}
```

In dark mode, pick an outline color that shows up on your dark background too.

### 2e. Color contrast

Check your main text color, link color, button colors, and nav colors at https://webaim.org/resources/contrastchecker/

- Normal text needs **4.5 to 1** or better.
- Check **both** light mode and dark mode. Your custom properties (like `--text-color` and `--bg-color`) make this easy: fix the color in one place.
- Do not use color as the only signal (for example, "required fields are red"). Add words too.

---

## Part 3: Proofread

1. Read each page **out loud**, slowly.
2. Fix spelling, capital letters, and punctuation.
3. Check every name, price, date, phone number, and email.
4. The site name is spelled the same on every page.
5. No leftover "Lorem ipsum", "TODO", or template text.
6. Trade with a partner. Each of you reads the other's site and writes down anything that looks wrong.

---

## Part 4: Validate Every Page

1. Go to https://validator.w3.org/ and use **Validate by File Upload**.
2. Check `index.html`, `about.html`, `gallery.html`, `contact.html`, and `template.html`.
3. Fix every **error**. Fix the first error, then check again.
4. Check `styles.css` at https://jigsaw.w3.org/css-validator/ (**By file upload**). Fix any errors. Warnings about custom properties like `var(--bg-color)` are fine.
5. Keep going until every page shows no errors.

---

## Part 5: Test in Two Browsers and a Narrow Window

1. Open your site in **two browsers** (for example Chrome and Safari).
2. In each one, click every nav link on every page (header and footer).
3. Check that every image shows, the video plays with sound, dark mode works, and the form shows your error messages when you submit it empty.
4. Narrow the window to phone width. Your media query should change the layout. Nothing should run off the side.
5. Open each page with **Live Preview** in VS Code, click the **Developer Tools** button, and check the **Console** tab. Fix any red errors. Then click the **device toolbar** button (phone-and-tablet icon) and check each page at a phone width.
6. Go through the usability checklist in `html10_Walkthrough.md` (Part 4).
7. Write down anything that looked different or broken, and what you did about it.

---

## Part 6: Publish with Firebase Hosting

The full steps, with more detail, are in `html10_Walkthrough.md` Part 6. Here is the short version.

### 6a. Push your fixes

In **GitHub Desktop**: check the Changes list, type a Summary like `html10: SEO, accessibility, and validation fixes`, click **Commit to main**, then **Push origin**.

### 6b. Make a Firebase project

1. Go to **console.firebase.google.com** and sign in with your **school Google account**.
2. Click **Add project**. Name it `diywebsite-lastname` (your last name).
3. Turn **off** Google Analytics. Click **Create project**.

Hosting on the free Spark plan is free. Do not add a credit card.

### 6c. Set up the computer (one time only)

1. Open your `DiyWebsite_Lastname` folder in VS Code. Click **Terminal > New Terminal**. The terminal opens inside your site folder.
2. Type `node -v` and press Enter. You should see a version number. If not, tell Mr. McMaster.
3. Type `npm install -g firebase-tools` and press Enter. Wait for it to finish.
4. Type `firebase login` and press Enter. Sign in with the same school Google account in the browser window that opens.

### 6d. Connect your folder to Firebase

Type `firebase init hosting` and answer the questions:

1. **Use an existing project** → pick your `diywebsite-lastname` project.
2. Public directory → type `.` (a single period, meaning "this folder").
3. Configure as a single-page app → **No**.
4. Set up automatic builds and deploys with GitHub → **No**.
5. File ./index.html already exists. Overwrite? → **No**.

> **WARNING: Answer No to "Overwrite index.html?"** Yes replaces your Home page with a Firebase sample page.

This makes two new files, `firebase.json` and `.firebaserc`. That is normal. Commit them with your site.

### 6e. Deploy

Type `firebase deploy --only hosting`. When it finishes, it prints your **Hosting URL**:

```
https://diywebsite-lastname.web.app
```

Copy it. That is your live site.

**Updating later:** save, commit and push in GitHub Desktop, then run `firebase deploy --only hosting` again. Pushing to GitHub does not update the live site. Deploying does.

### 6f. Test the live site

Do a quick version of Part 5 again on the **live** site. Files that work on your computer can break online if a file name's capital letters do not match the `src` or `href`.

### 6g. Optional free checkers

If the school filter allows them, paste your live URL into:
- **WAVE**: https://wave.webaim.org (accessibility problems marked on your page)
- **PageSpeed Insights**: https://pagespeed.web.dev (scores for Performance, Accessibility, Best Practices, and SEO)

Fix anything real they find and write it in your test log. These are optional.

---

## Part 7: Test Log and Turn In

Make a file named `test-log.md` inside your `DiyWebsite_Lastname` folder. Copy this and fill it in. Short answers are fine.

```markdown
# Test Log - DiyWebsite_Lastname

Live URL: https://diywebsite-lastname.web.app

## SEO
- Titles and meta descriptions added or changed on: (list pages)
- Heading fixes:
- Alt text fixes:
- Link text fixes:
- My keywords:

## Accessibility
- Labels checked on contact.html: yes / fixed (what)
- Keyboard tab-through: every page works? What did I fix?
- Contrast: colors I checked and the ratios (light mode and dark mode)
- aria-label added to:

## Proofreading
- Mistakes I found (and who helped me):

## Validation
- HTML errors on first check (per page):
- HTML errors now: 0 on every page? 
- CSS errors:

## Browsers and screen sizes
- Browsers used:
- Narrow window: what I checked, what I fixed:
- Anything different between browsers:

## Live site
- Everything works online? What broke and how I fixed it:
- (Optional) WAVE or PageSpeed results:
```

Commit and push `test-log.md` with GitHub Desktop. Then **turn in your live URL** in Google Classroom.

---

## Checklist

**SEO**
- [ ] Unique `<title>` on every page, about 60 characters or less
- [ ] Unique meta description on every page
- [ ] One `<h1>` per page, headings in order
- [ ] Real alt text on every image; `alt=""` on decorative ones
- [ ] File names lowercase with no spaces
- [ ] No "click here" links

**Accessibility**
- [ ] Every form input has a connected label (`for` matches `id`)
- [ ] Real `<button>` and `<a href>` elements, no clickable divs
- [ ] Icon-only buttons and links have an `aria-label`
- [ ] Tab reaches everything on every page, with a visible outline
- [ ] Text contrast passes 4.5 to 1 in light and dark mode

**Quality**
- [ ] Every page proofread (and read by a partner)
- [ ] Every HTML page passes the W3C validator with no errors
- [ ] `styles.css` passes the CSS validator (custom property warnings are OK)
- [ ] Tested in two browsers and a narrow window

**Publish**
- [ ] Fixes committed and pushed with GitHub Desktop
- [ ] Firebase project made and `firebase init hosting` done (index.html NOT overwritten)
- [ ] `firebase deploy --only hosting` run after the last change
- [ ] `firebase.json` and `.firebaserc` committed and pushed
- [ ] Live site works: every link, image, video, dark mode, form
- [ ] `test-log.md` filled in and pushed
- [ ] Live URL turned in on Google Classroom

---

## Grading

| Criteria | Looking for |
|---|---|
| **SEO** | Every page has its own clear title and meta description, one h1, headings in order, real alt text, descriptive link text |
| **Accessibility** | Connected labels, real buttons and links, visible focus outline, readable contrast in both modes, aria-label where an icon has no words |
| **Clean and correct** | Proofread, every page passes the validator, no leftover template text |
| **Tested** | Two browsers and a narrow window checked; problems found were fixed |
| **Published** | Live Firebase Hosting link (`web.app`) works, with all pages, images, video, dark mode, and form working online |
| **Test log** | Filled in honestly with what was checked and what was fixed |

**Full credit:** all six rows are done, with only a small thing or two missing.
**Most of the way:** the site is live and mostly cleaned up, but several items above are missing or only partly done.
**Partial:** the site is live, but little of the SEO, accessibility, or validation work was done, or there is no test log.
**Not yet:** no live URL turned in.

---

## If something goes wrong

- **`firebase: command not found`:** the Firebase tools are not installed, or the terminal was open before you installed them. Close the terminal, open a new one (Terminal > New Terminal), and try again.
- **Permission error when running `npm install -g firebase-tools`:** the computer will not let you install it. Tell Mr. McMaster.
- **Wrong page or a Firebase "Welcome" page shows:** open `firebase.json`. The `"public"` line should say `"."`. If `index.html` was overwritten, get it back in GitHub Desktop (right-click it in Changes, choose Discard changes). Then deploy again.
- **Live site has no styles:** the `<link href="styles.css">` path or the file name's capitals do not match.
- **Images or video missing online but fine on your computer:** same thing. `Photo.JPG` and `photo.jpg` are different files online. Also check the files are inside your `DiyWebsite_Lastname` folder.
- **Old version still shows online:** run `firebase deploy --only hosting` again, then hard refresh with Cmd + Shift + R.
- **Validator shows 30 errors:** fix only the first one and check again. One missing closing tag can cause many errors below it.
- **"Duplicate ID" error:** two elements on the same page share an `id`. Change one.
- **Label error from the validator:** the `for` does not exactly match the input's `id` (capitals and hyphens count).
- **Tab skips links in Safari:** press Option + Tab, or turn on Safari > Settings > Advanced > "Press Tab to highlight each item on a webpage."
- **Contrast passes in light mode but fails in dark mode:** change the dark mode custom property values, not every rule.
- **WAVE or PageSpeed will not load:** the school filter may block them. They are optional. Skip them.
- **Not sure where a problem is:** use a troubleshooting method from the walkthrough. Compare a page that works with one that does not (spot the differences).
