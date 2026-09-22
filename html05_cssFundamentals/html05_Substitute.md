# Lesson 05 Substitute Day: Intro to CSS (Video Lesson)

Mr. McMaster is out today. You'll learn the basics of CSS from a video, take a quiz on it, and then style a web page with what you learned. **This is graded.**

**Video:** [Learn CSS in 20 Minutes – Web Dev Simplified](https://www.youtube.com/watch?v=1PnVor36_40) (about 20 minutes)

**Still have html04 work?** Finish and push the html04 Project first, then start this.

---

## Part 1: Video and Quiz (about 30 minutes)

1. Watch the video with the class.
2. Take the **html05 Substitute Quiz** in Google Classroom. You can open it while the video plays and answer as you go.
3. You can re-watch any part of the video on your own computer. Use headphones or turn on captions.

**Two notes about the video:**

- He uses a VS Code add-on called Live Server so the page updates by itself. You don't need it. Open your HTML file in Chrome and refresh after you save.
- In the box model part, he right-clicks and uses **Inspect**. That is turned off on our computers. Just watch that part.

---

## Part 2: Style the Page (about 45 minutes)

1. Open `html05_Substitute.html` in VS Code. It's a page of notes from the video.
2. Create a new file named `html05_Substitute.css` in the same folder.
3. Do **Steps 1–13**. Each step is a TODO comment in the HTML file, right next to the part of the page it styles.
4. Put a comment above each rule in your CSS with its step number, like `/* Step 3: body */`.
5. Every step is shown in the video. Go back to it when you get stuck.

---

## Part 3: Finish and Push

1. Check your HTML: there should be **no** `<style>` tag and **no** `style=""` attributes. All your CSS goes in the `.css` file.
2. Commit and push **both** files. Check on github.com that `html05_Substitute.css` made it.

Done early? Go back to your html04 Project or any other unfinished work. Not done at the end of class? Push what you have.

---

## Checklist

- [ ] Quiz submitted in Google Classroom
- [ ] `html05_Substitute.css` created and linked with `<link>`
- [ ] Steps 1–13 done, each with a step-number comment
- [ ] Comments written for Step 10 (box) and Step 12 (which color won)
- [ ] Name in the footer
- [ ] No `<style>` tag and no inline styles
- [ ] Both files pushed to GitHub

---

## Grading

| Part | Looking for |
|---|---|
| **Quiz** | Graded automatically in Google Forms |
| **Stylesheet linked** | External `.css` file connected with `<link>`, no inline or `<style>` CSS |
| **Selectors** | `*`, element, class, id, comma, no-space, and space rules all working |
| **Colors and boxes** | Hex, rgb(), rgba(), and hsl() used; box, half-width box, and buttons styled |
| **Explanations** | Step 10 and Step 12 comments explain what happened and why |
| **Pushed** | Both files on GitHub |

---

## If something goes wrong

- **None of your CSS shows up:** check the `<link>` tag. The `href` must match the file name exactly, including capital letters and `.css`. Both files must be in the same folder. Make sure you saved the CSS file.
- **One rule doesn't work:** look for a missing `;` at the end of a line or a missing `}`. One missing bracket can break every rule below it.
- **A class rule doesn't work:** the CSS needs the dot (`.note`). The HTML does not (`class="note"`).
- **An id rule doesn't work:** the CSS needs the `#` (`#page-title`). The HTML does not (`id="page-title"`).
- **The p.highlight rule changed the div too:** you put a space in it. `p.highlight` has no space.
- **Colors look wrong:** hex needs the `#`. rgb() and rgba() need commas between the numbers. hsl() needs `%` on the last two numbers: `hsl(210, 100%, 50%)`.
