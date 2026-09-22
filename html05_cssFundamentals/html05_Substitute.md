# Lesson 05 Substitute Day: Intro to CSS (Video Lesson)

Mr. McMaster is out today. You will learn the basics of CSS from a video, answer questions about it, and then use what you learned to style a page. **This is graded.**

**Video:** [Learn CSS in 20 Minutes – Web Dev Simplified](https://www.youtube.com/watch?v=1PnVor36_40) (about 20 minutes). Use headphones.

**Your files (in the `html05_cssFundamentals` folder):**

- `html05_Substitute.html` is the starter page. The questions are already on it. You type your answers into it.
- `html05_Substitute.css` is the stylesheet. You create this file in Part 2.

**Time:** Most people need about 75–80 minutes. If you finish early, work on your html04 Project or anything else you owe. If you don't finish, push what you have at the end of class and finish next class.

**If you still have html04 work to finish:** finish and push the html04 Project first, then start this.

---

## Part 1: Watch and Answer (about 40 minutes)

1. Open `html05_Substitute.html` in VS Code. Read the questions before you start the video so you know what to listen for.
2. Watch the video. Pause it when you get to an answer and type it in. The questions go in the same order as the video.
3. Replace each `___` with your answer. Leave the `<p class="answer">` tags alone.
4. Use your own words. It's fine to rewind and watch a part again.

**Two notes about the video:**

- He uses a VS Code add-on called Live Server so the page updates by itself. You don't need it. Open your HTML file in Chrome and refresh after you save.
- In the box model part, he right-clicks and uses **Inspect**. That is turned off on our computers. Just watch that part. You'll see the box model on your own page in Part 2.

---

## Part 2: Style the Page (about 40 minutes)

Now use the video to style your notes page. Everything you need is in the video. Go back to it when you get stuck.

**Setup:** In VS Code, create a new file named `html05_Substitute.css` in the same folder as the HTML file.

**Put a comment above each rule with its step number,** like this:

```css
/* Step 3: body */
body {
  background-color: lightyellow;
}
```

Pick your own colors and sizes. The page should still be easy to read.

### Linking and the whole page

| Step | What to do | Video topic |
|---|---|---|
| **1** | In the HTML `<head>`, add a `<link>` tag that connects `html05_Substitute.css`. Save and refresh. Nothing will change yet. | Three ways to add CSS |
| **2** | Use the **everything selector** (`*`) to set a `font-family` for the whole page. Example: `Arial, sans-serif`. | Selectors |
| **3** | Style the `body` with a `background-color` and a text `color`. Notice that all the text changes color. That is inheritance. | Which style wins |

### Selectors

| Step | What to do | Video topic |
|---|---|---|
| **4** | **Element selector:** style `h1`. Give it a `color` and a `font-size` in **rem** (example: `2.5rem`). | Selectors, units |
| **5** | **Comma:** write ONE rule that styles both `h2` and `h3` with the same `color`. | Combining selectors |
| **6** | **Class selector:** style `.answer`. Give it `padding: 10px;` and a see-through background using **rgba()**. Example: `rgba(0, 128, 255, 0.2)`. Your answers should now stand out from the questions. | Selectors, colors |
| **7** | **Combined, no space:** write a rule for `p.highlight` that gives it a `background-color`. Refresh. Only the paragraph should change. The div with the same class should not. | Combining selectors |
| **8** | **Descendant, with a space:** write a rule for `footer p` that makes the footer text smaller (`font-size`) and a different `color`. | Combining selectors |
| **9** | **Id selector:** style `#page-title` with a `background-color`, a text `color`, and `padding`. | Selectors |

### Colors and the buttons

| Step | What to do | Video topic |
|---|---|---|
| **10** | The buttons use **two classes each**, like the video's button example. Write a `.btn` rule for what all buttons share: `padding`, `font-size`, and `border`. Then write `.btn-red`, `.btn-green`, and `.btn-blue` rules that only set `background-color`. Use a **different color format** for each one: **hex** for red, **rgb()** for green, **hsl()** for blue. | Selectors, colors |

### Box model and units

| Step | What to do | Video topic |
|---|---|---|
| **11** | Build the box from the video. Style `.box` with `width: 100px;` `height: 100px;` `padding: 20px;` `margin: 50px;` `border: 10px solid black;` and a `background-color`. Save and look at it. Then change the margin to `10px`, save, and watch what moves. Answer **Q21** on your page. | Box model |
| **12** | Style `.half` with `width: 50%;` and a `background-color`. Make the browser window narrower and wider. The box should change size with it. | Units |

### Specificity test

| Step | What to do | Video topic |
|---|---|---|
| **13** | Add these three rules **at the bottom** of your CSS, in this order: | Which style wins |

```css
/* Step 13: specificity test */
#test {
  color: green;
}

.test-class {
  color: blue;
}

p {
  color: red;
}
```

Before you save, guess what color "Which color am I?" will be. Then save and refresh. Answer **Q20** on your page. The `p` rule is last, so why didn't it win?

**Heads up:** the `p` rule in Step 13 will also turn the other paragraphs red. That's fine. It's part of the test.

---

## Part 3: Finish and Push

1. Check that every `___` is replaced, including your name in the footer.
2. Check your HTML: there should be **no** `<style>` tag and **no** `style=""` attributes. All your CSS goes in the `.css` file.
3. Run the HTML through https://validator.w3.org/ and fix the errors.
4. Commit and push **both** files. Check on github.com that `html05_Substitute.css` made it.

Done early? Go back to your html04 Project or any other unfinished work.

---

## Checklist

- [ ] All 21 questions answered in your own words
- [ ] Name in the footer
- [ ] `html05_Substitute.css` created and linked with `<link>`
- [ ] Steps 1–13 done, each with a step-number comment
- [ ] Colors used: named, hex, rgb(), rgba(), and hsl()
- [ ] No `<style>` tag and no inline styles
- [ ] Both files pushed to GitHub

---

## Grading

| Criteria | Looking for |
|---|---|
| **Questions** | All 21 answered, correct, in your own words |
| **Stylesheet linked** | External `.css` file connected with `<link>`, no inline or `<style>` CSS |
| **Selectors** | `*`, element, class, id, combined, descendant, and comma rules all working |
| **Colors and box** | All five color formats used; box, half-width box, and buttons styled |
| **Specificity test** | Rules in place, Q20 explains why the id wins |
| **Pushed** | Both files on GitHub |

---

## If something goes wrong

- **None of your CSS shows up:** check the `<link>` tag. The `href` must match the file name exactly, including capital letters and `.css`. Both files must be in the same folder. Make sure you saved the CSS file.
- **One rule doesn't work:** look for a missing `;` at the end of a line or a missing `}`. One missing bracket can break every rule below it.
- **A class rule doesn't work:** the CSS needs the dot (`.answer`). The HTML does not (`class="answer"`).
- **An id rule doesn't work:** the CSS needs the `#` (`#page-title`). The HTML does not (`id="page-title"`).
- **The p.highlight rule changed the div too:** you put a space in it. `p.highlight` has no space.
- **Colors look wrong:** hex needs the `#`. rgb() and rgba() need commas between the numbers. hsl() needs `%` on the last two numbers: `hsl(210, 100%, 50%)`.
