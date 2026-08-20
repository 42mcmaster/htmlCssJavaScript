# Walkthrough: GitHub, GitHub Desktop & VS Code — Your First Push

**Week 1 · Follow along step by step. Check each box as you go.**
*By the end you'll have a GitHub account, a repository cloned to your computer, and your first change committed and pushed online.*

> **This matches the class videos.** We follow the same order the GitHub Desktop video shows: make the repo **on GitHub.com first**, then **clone** it down to your computer, then edit in VS Code, commit, and push. VS Code and GitHub Desktop are **already installed** on your machine — no downloads needed.
>
> **Naming:** every name uses our class standard — **lowerCamelCase** (no spaces, don't start with a capital, capitalize each new word: `myFirstSite`, `aboutMe.html`). The homepage file is the one exception: always lowercase `index.html`.

---

## Part A — Create your GitHub account

1. ☐ In a browser, go to **github.com** and click **Sign up**.
2. ☐ Enter your **email**, create a **password**, and choose a **username**. *Pick a username you'd show an employer* — your name or initials (e.g., `ryanMcMaster`), not a nickname.
3. ☐ Finish the prompts and solve the verification puzzle if it appears.
4. ☐ **Open the email from GitHub and click the verification link.** ⚠️ Required — you cannot create a repository until your email is verified. Check spam if you don't see it.

---

## Part B — Create a repository on GitHub.com

A **repository** ("repo") is your project on GitHub.

5. ☐ On your GitHub dashboard, click the **+** icon (top-right) → **New repository**.
6. ☐ **Repository name:** `myFirstSite` (camelCase). *Note: GitHub turns spaces into hyphens — another reason we don't use spaces.*
7. ☐ **Description** (optional): `My first website for class`.
8. ☐ **Visibility:** choose **Public**. (Your class work lives here as a portfolio — public is fine, and it makes it easy for Mr. McMaster to find your repo.)
9. ☐ Turn **Add a README file** to **ON** (this creates your first commit automatically).
10. ☐ Leave **.gitignore** = None and **License** = None.
11. ☐ Click **Create repository**. Wait a few seconds.

---

## Part C — Quick tour of the repo page (30 seconds)

Look, don't click. You'll see:
- ☐ Your **username / myFirstSite** at the top, marked **Public** or **Private**.
- ☐ A **main** dropdown — that's your **branch** (your version of the project; we stay on `main`).
- ☐ **1 commit** already, called **Initial commit** — GitHub made it when it added your README.
- ☐ Your files (`README.md`) and its contents shown below.

> A **commit** is a labeled snapshot of your project — a save point you can always go back to.

---

## Part D — Sign in to GitHub Desktop

GitHub Desktop is already installed — it does the Git work with buttons, no terminal.

12. ☐ Open **GitHub Desktop**.
13. ☐ Sign in: **File → Options → Accounts → Sign in to GitHub.com** → **Continue with browser**.
14. ☐ In the browser, confirm you're signed in as **your** username and click **Authorize GitHub Desktop**, then return to the app.

---

## Part E — Clone the repo to your computer

**Cloning** makes a copy of the GitHub repo on your computer so you can work on it.

15. ☐ Easiest way: back on your repo page in the browser, click the green **Code** button → **Open with GitHub Desktop**.
    *(Or, in GitHub Desktop: **File → Clone repository → GitHub.com** tab, find `myFirstSite` — click the sync icon if it's not listed yet — and select it.)*
16. ☐ Check the **Local path** (where it saves on your computer — by default a `GitHub` folder). That's fine.
17. ☐ Click **Clone**.

You now have two copies: the **remote** (on GitHub.com) and the **local** (on your computer). The **Fetch/Push** button keeps them in sync.

---

## Part F — Open in VS Code and make changes

18. ☐ In GitHub Desktop, click **Open in Visual Studio Code** (right side).
19. ☐ If VS Code shows **Restricted Mode**, click **Manage → Trust** (you made this folder, so you trust it).
20. ☐ In the Explorer sidebar, double-click **`README.md`** and add a couple of lines, e.g.:
    ```
    Testing out GitHub Desktop.
    This is my first repository.
    ```
21. ☐ Create a new file: click the **New File** icon (or right-click in the sidebar → **New File**). Name it **`index.html`** (lowercase homepage).
22. ☐ In `index.html`, type `!` then press **Tab** — VS Code's Emmet shortcut fills in the HTML skeleton. Add an `<h1>Hello, world!</h1>` inside the `<body>`.
23. ☐ Create one more file named **`aboutMe.html`** (camelCase) with `<h1>About Me</h1>` inside a `<body>`.
24. ☐ **Save everything** (Ctrl+S / Cmd+S). A saved file shows no dot in its tab.

> *Optional preview:* click **Go Live** in the bottom status bar (Live Server) to open your page in the browser; it auto-refreshes when you save.

---

## Part G — Commit your changes

25. ☐ Switch back to **GitHub Desktop** and click the **Changes** tab. You'll see `README.md` (yellow dot = modified) and `index.html` / `aboutMe.html` (green **+** = new).
26. ☐ The **checkboxes** let you choose what goes in this commit — leave them all checked for now.
27. ☐ In the bottom-left **Summary** box, write a clear message: **`Add homepage and about page`**.
28. ☐ Click **Commit to main**.

The snapshot is saved — but only on your computer so far.

---

## Part H — Push to GitHub (send it online)

29. ☐ Click **Push origin** (top of the window). It fetches and syncs.
30. ☐ Go back to the browser and **reload** your repo page. 🎉 Your files and your new commit are now online — the commit counter went up and your files appear.

---

## Part I — The loop you'll use all year: edit → commit → push

31. ☐ In VS Code, add a line to `index.html` and **save**.
32. ☐ In GitHub Desktop, the change appears in **Changes** → write a Summary → **Commit to main** → **Push origin**.
33. ☐ Reload GitHub — your update is there.

**Two steps to remember:** **Commit** saves the snapshot on your computer; **Push** sends it to GitHub. If your work isn't showing online, you probably committed but forgot to push.

---

## 🔧 If you make a mistake (from the video)
- **Before you commit:** right-click the file in **Changes → Discard changes** to undo edits.
- **After you commit but before you push:** use the **Undo** button (bottom of the Changes tab) to take back the last commit.
- **After you've already pushed:** right-click the commit in **History → Revert changes in commit**. This adds a *new* commit that reverses it (safer than deleting public history), then **Push origin**.

---

## ✅ You're done when…
- [ ] Your GitHub account is created and email verified
- [ ] `myFirstSite` exists on GitHub.com with a README
- [ ] GitHub Desktop is signed in and you **cloned** the repo to your computer
- [ ] `index.html` (lowercase) and `aboutMe.html` (camelCase) exist and are saved
- [ ] You committed and **pushed**, and your changes show on your GitHub profile
- [ ] You've done the edit → commit → push loop at least once

*Seniors: instead of making a new `myFirstSite`, use Part D–E to **clone last year's repositories** back down to your machine, then commit/push as normal.*

*Naming reminder: lowerCamelCase for files and folders — except `index.html` (lowercase) and image files (lowercase). Match your link spelling to the file name exactly.*
