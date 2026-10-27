# Lesson 09a DIY Task: Add a Script to Your Contact Page

Add your first JavaScript file to the website in your `DiyWebsite_Lastname` folder. This is the graded item for Lesson 09a. The walkthrough gets you ready for it.

You will:

1. Make an **external script file**, `script.js`, and link it on your contact page
2. Make a few **variables** and print them in the **Console**
3. Write **comments** that explain your code and what a real website does with your contact form's data

The script goes on `contact.html` only, because the comments in it are about that page's form. No JavaScript inside your HTML pages, and no `alert()` pop-ups.

---

## Where Everything Goes

Work in your `DiyWebsite_Lastname` folder at the top of your `htmlCssJavaScript` repo. When you're done, it should look like this:

```
DiyWebsite_Lastname/
├── index.html
├── about.html
├── contact.html    <- link script.js here
├── gallery.html
├── template.html
├── images/
├── media/
├── styles.css
└── script.js       <- NEW file: your JavaScript
```

| File | What changes |
|---|---|
| `script.js` | New file. A comment block, a few variables, `console.log()` lines, and a comment about form data. |
| `contact.html` | One new line right before `</body>` that links `script.js`, with an HTML comment above it. |

No other files change.

---

## Part 1: Make script.js and Link It

1. In VS Code, make a new file in your `DiyWebsite_Lastname` folder named `script.js`. All lowercase, no spaces.
2. Open `contact.html`. Add these two lines right before `</body>`:

```html
  <!-- Link the external JavaScript file for this page -->
  <script src="script.js"></script>
</body>
```

3. In `script.js`, add one line to test the link:

```js
console.log('script.js is linked and running.');
```

4. Open `contact.html` with **Live Preview**. Click the **Developer Tools** button in the preview's toolbar, then the **Console** tab. You should see the message.

If the message doesn't show up, check that the file is named `script.js` exactly and is in the same folder as `contact.html`. Save both files and refresh the preview.

---

## Part 2: Comment Block at the Top

At the very top of `script.js`, above your test line, add a multi-line comment with:

- The file name
- Your name
- One sentence saying what this file is for

```js
/*
  script.js
  Name: Your Name
  JavaScript for the contact page of my website.
*/
```

---

## Part 3: Variables and the Console

Below your test line, add a one-line comment, then make **at least four variables** about your website. Use at least one of each:

| Kind | Example |
|---|---|
| A `const` holding a **string** | `const siteName = 'Medina Bike Shop';` |
| A `let` holding a **number** | `let pageCount = 5;` |
| A `let` holding a **boolean** | `let isPublished = false;` |
| One more of your choice | `const ownerName = 'Jordan';` |

Use your own site's name and details, not the examples.

Then:

1. Print each variable with `console.log()`.
2. Print **one sentence** that joins at least two variables with `+`. For example:

```js
console.log('Welcome to ' + siteName + '. This site has ' + pageCount + ' pages.');
```

3. Put a short comment above each group of lines saying what it does.
4. Check the Console. Every line should print with no red errors.

---

## Part 4: What Happens to the Form Data

Your contact form doesn't actually send anything. On a real website it would. At the bottom of `script.js`, write a comment of **3 or 4 sentences** in your own words that explains what happens to your contact form's data after the visitor clicks Submit.

Use all of these words: **server**, **check it again**, **database**, **web service**.

Here is an example about a different form. Don't copy it. Write about your own contact form.

```js
/*
  What happens to the sign-up form data on a real site:
  When the visitor clicks Submit, the browser sends the data to a web server.
  The server checks it again, because a user can get around JavaScript.
  Then the server saves the new account in a database
  and uses a web service to send a welcome email.
*/
```

---

## Part 5: Finish and Push

1. Open `contact.html` in Live Preview one more time and check the Console. Everything prints, no red.
2. Click through your other pages. They should all still work the same as before.
3. Run `contact.html` through https://validator.w3.org/ and fix any errors.
4. In GitHub Desktop, commit with a message like `html09a: script.js on contact page`, then Push.
5. Check on github.com that `script.js` is in your `DiyWebsite_Lastname` folder.

---

## Checklist

**Linking**
- [ ] `script.js` is in the `DiyWebsite_Lastname` folder
- [ ] `contact.html` links it with `<script src="script.js"></script>` right before `</body>`
- [ ] An HTML comment `<!-- -->` above the script tag
- [ ] No JavaScript inside the HTML pages, no `alert()`

**script.js**
- [ ] Multi-line comment block at the top with the file name, your name, and what the file is for
- [ ] At least 4 variables: a `const` string, a `let` number, a `let` boolean, and one more
- [ ] Variables are about your own website, named in camelCase
- [ ] Each variable printed with `console.log()`
- [ ] One sentence that joins at least two variables with `+`
- [ ] A one-line comment above each group of lines
- [ ] Console shows every line with no red errors

**Form data comment**
- [ ] 3 or 4 sentences in your own words about your contact form
- [ ] Uses the words server, check it again, database, and web service

**Finish**
- [ ] All pages still work
- [ ] `contact.html` passes the validator
- [ ] Pushed to GitHub with GitHub Desktop

---

## Grading

| Criteria | Looking for |
|---|---|
| **script.js linked** | One external `script.js`, linked at the end of the body on `contact.html`, with an HTML comment above the tag |
| **Variables and output** | At least 4 variables using `let` and `const` and all three data types; each printed; one joined sentence; runs with no errors |
| **Comments** | Comment block at the top, a comment above each group of lines, both comment styles (`//` and `/* */`) used |
| **Form data comment** | 3 or 4 sentences about the student's own contact form, using server, check it again, database, and web service |
| **Pushed** | On GitHub with `script.js` in the `DiyWebsite_Lastname` folder; the rest of the site still works |

Mostly done with only a few things missing is full credit. Several things missing is one step down. Missing work gets no credit.

---

## If something goes wrong

- **Nothing shows in the Console:** the script isn't linked. Check that the file name in `src` is spelled `script.js` exactly, that `script.js` is in the same folder as `contact.html`, and that you are previewing `contact.html`, not another page.
- **Some lines print, then they stop:** there is a mistake on the line after the last one that printed. Look for red in the Console. It gives the line number.
- **Red error about a `const`:** you tried to give a `const` a new value. Use `let` for that variable instead.
- **Red error that a name "is not defined":** the variable name is spelled differently in two places. Names must match exactly, including capital letters (`siteName` and `sitename` are different).
- **Your sentence prints with words stuck together:** add a space inside the quotes. `'Welcome to' + siteName` prints `Welcome toMedina Bike Shop`.
- **Your comment shows up as an error:** a `/*` comment must end with `*/`. A `//` comment only lasts one line, so each line of a long note needs its own `//`.
- **Old messages still show after you change the code:** save the file and refresh the preview.
- **Still stuck:** ask a classmate to read your code out loud with you, then ask Mr. McMaster.
