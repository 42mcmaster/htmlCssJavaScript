# Intro to VS Code + Pushing Files to GitHub
### Software Engineering · Medina County Career Center

You already made your `github-desktop-test` repo yesterday. Today we slow down and actually learn **VS Code** (the editor you only opened for a second), then use it to create files, push them with **GitHub Desktop**, and watch your repo change online.

The loop we're building toward, all year:

- **edit → save → commit → push → refresh GitHub → it's there.**

---

## Part 1 — What is VS Code?

**VS Code** (Visual Studio Code) is a **code editor** — think of it as a really smart text editor built for writing code. It's where you *write*; **GitHub Desktop** is where you *save and sync* that work up to GitHub. Two different tools, two different jobs.

Open **VS Code** and get your bearings — here's the quick tour:

| Part of the screen | What it is |
|---|---|
| **Activity Bar** (far-left icons) | Jump between views: **Explorer** (your files), **Search**, **Source Control**, **Extensions** |
| **Explorer** | The list of files/folders you have open |
| **Editor** (the big middle area) | Where you actually type |
| **Tabs** (top) | Your open files. A **dot** on a tab means **unsaved** — save with **Ctrl+S** and the dot disappears |
| **Status Bar** (bottom) | Info + buttons (you'll use **Go Live** down here later) |
| **Command Palette** (**Ctrl+Shift+P**) | Do almost anything by typing its name |

## Part 2 — Install some extensions

Extensions add features to VS Code. Click the **Extensions** icon in the Activity Bar (four little squares) or press **Ctrl+Shift+X**. Search each name, click **Install**, and check the **publisher** so you get the right one.

| Extension | Publisher | What it's for |
|---|---|---|
| **Live Preview** | Microsoft | Preview web pages right inside VS Code |
| **Live Server** | Ritwick Dey | Opens your web page in a browser, auto-refreshes on save |
| **Convert Markdown to PDF** | Alvaro Orellana | Turns a markdown file into a PDF |


## Part 3 — Open your test repo in VS Code

We'll work in the **same test folder you made yesterday** — `github-desktop-test`.

1. Open **GitHub Desktop**. Make sure the **Current Repository** (top-left) is `github-desktop-test`.
2. Click **Open in Visual Studio Code** (right side of the window).
   - *If VS Code shows "Restricted Mode," click **Manage → Trust** — you made this folder.*
3. In the **Explorer**, you should see the files already in your repo from yesterday: `README.md` and `githubDesktopTest.md`.

> **Why open a folder, not a loose file?** VS Code works best when it has your whole project folder open — the Explorer shows everything in the repo, and Git can track it all.  You likely won't be able to even see individual files (it looks like your folder is empty, but it's not).

## Part 4 — Look at your GitHub repo *as it is right now* (the "before")

Before we change anything, let's take a snapshot of what's online.

1. In GitHub Desktop, click **View on GitHub** (or open your repo URL in a browser).
2. Notice the current state — you'll compare against it in a few minutes:
   - The **README** is shown (rendered) on the homepage.
   - Your files: `README.md`, `githubDesktopTest.md`.
   - The **commit count** near the top. Remember roughly what it says.

Leave that browser tab open. Now back to VS Code.

## Part 5 — Make new files in VS Code

### 5a. A markdown file

1. In the Explorer, make a **New File** (right-click → New File, or the new-file icon). Name it (class style — **lowerCamelCase**):

   ```
   myFirstMarkdown.md
   ```
2. Type some markdown:

      ## About Me

      My name is **[Your Name]** and I'm a student in this class.

      ### My Top 3 Songs

      1. **[Song]** — [Artist]
      2. **[Song]** — [Artist]
      3. **[Song]** — [Artist]

      ### My Favorites

      - **Favorite food:** [Your answer]
      - **Favorite movie or TV show:** [Your answer]
      - **Favorite game or hobby:** [Your answer]

      ### My Summer

      The best thing I did this summer was [your answer].

      ### If I Had a Free Day

      If I had a whole day off, I would [your answer].

      ### Something I Want to Learn

      This year, I would like to learn [your answer].

      ### One Goal

      One goal I have for this school year is **[your answer]**.

### Markdown Cheat Sheet

| Syntax        | Does          |
| ------------- | ------------- |
| `# Heading`   | Heading       |
| `**text**`    | **Bold**      |
| `*text*`      | *Italic*      |
| `- item`      | Bullet        |
| `1. item`     | Numbered list |
| `[text](URL)` | Link          |
| `---`         | Line          |



3. **Save** (**Ctrl+S**). Preview it with **Ctrl+Shift+V** to see it formatted next to your code.
   - *Optional:* export a PDF — **Ctrl+Shift+P** → type **Markdown PDF: Export (pdf)**.

### 5b. A "Hello World" HTML file

1. New file named (camelCase):

   ```
   helloWorld.html
   ```
2. Click into it, type an exclamation point `!` and press **Tab** — that's VS Code's **Emmet** shortcut, which auto-builds the whole HTML skeleton.
3. Inside the `<body>` tags, add:

   ```html
   <body>
     <h1>Hello, World!</h1>
     <p>This is my first web page.</p>
   </body>
   ```
4. **Save** (**Ctrl+S**).
5. **Preview it:** right-click the file → **Show Preview** (Live Preview), or click **Go Live** at the bottom (Live Server). Your page renders. 🎉
   - ℹ️ *That's **your computer** rendering the page. On GitHub it'll show the **code**, not the live page. (Making a repo into a real live website is **GitHub Pages** — a lesson for later.)*

## Part 6 — The status letters (U / M / A / D / R)

Look at your new files in the Explorer — they have a green **`U`** next to them. Those letters are Git telling you what it sees:

| Symbol | Meaning | Description |
|--------|---------|-------------|
| `U` | Untracked | New file that Git is not tracking yet |
| `M` | Modified | Existing file has been changed |
| `A` | Added | File has been added to the staging area |
| `D` | Deleted | File has been deleted |
| `R` | Renamed | File has been renamed |

Your new files are **`U` — Untracked**: Git sees them but isn't watching them yet. Once you commit, Git tracks them — and the next time you edit a tracked file, you'll see **`M` — Modified** instead.

## Part 7 — Push your new files with GitHub Desktop

1. Switch back to **GitHub Desktop**. The **Changes** tab now lists `myFirstMarkdown.md` and `helloWorld.html`, each with a green **➕** (brand-new files). The right side shows their contents highlighted green.
2. In the bottom-left, write a **commit message**:

   ```
   Add markdown and Hello World HTML files
   ```
3. Click **Commit to main**.
4. Your repo is **already on GitHub**, so the button at the top says **Push origin** (not "Publish"). Click **Push origin**.

## Part 8 — Look at your GitHub repo again (the "after")

1. Go back to your repo tab in the browser and **refresh**.
2. Compare to the "before" from Part 4:
   - The **commit count went up.**
   - Your **new files appear** in the file list.
   - Click **`myFirstMarkdown.md`** on GitHub — because it's markdown, GitHub **renders it** nicely.
   - `helloWorld.html` shows as **code** (that's expected — remember, GitHub Pages is what makes it a live page).

That before-and-after is the whole point: you created files on your computer, pushed them, and they showed up online.

## Part 9 (optional) — Update a file and watch it re-render

1. In VS Code, open **`README.md`**, add a line at the bottom, and **Save**. Notice the letter is now **`M` (Modified)** — because Git already tracks the README.
2. In GitHub Desktop: commit (`Update README`) → **Push origin**.
3. Refresh GitHub — the README on your homepage **re-renders** with your new text.

---

## ✅ You did it when…

- [ ] You can point to VS Code's **Explorer, Editor, Extensions,** and **Command Palette**
- [ ] Your extensions are installed
- [ ] You opened your **`github-desktop-test`** repo in VS Code and checked its **"before"** state on GitHub
- [ ] You created **`myFirstMarkdown.md`** and **`helloWorld.html`** and previewed each
- [ ] You understand the **U / M / A / D / R** letters
- [ ] You committed and **pushed**, then saw the **"after"** on GitHub (commit count up, new files there, markdown rendered)
- [ ] You can say the loop out loud: **edit → save → commit → push → refresh**
