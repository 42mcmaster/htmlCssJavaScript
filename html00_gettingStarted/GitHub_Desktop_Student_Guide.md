# GitHub Desktop 
### Software Engineering · Medina County Career Center

Reminder of key terms: 

- **Repository (repo)** — a project folder that GitHub tracks.
- **Commit** — a save point / snapshot of your files.
- **Push** — send your commits from your computer up to GitHub.

---
## Download Git
Go to https://git-scm.com/install/windows and download GIT for Windows and install using all default settings. 

## Open GitHub Desktop

Find the **GitHub Desktop** icon on your computer and open the app.

## Sign in to your GitHub account

*You sign in from inside the app — it opens a browser for you, so you don't type in github.com yourself.*

> **⚠️ Already signed in? Check whose account it is first.** On a shared/lab computer, someone else may still be logged in. Go to **File → Options → Accounts** (Windows):
> - If it shows **your** username → you're set. **Skip to "Create your test repository."**
> - If it's blank or shows **someone else's** name → click **Sign out**, then follow the steps below to sign in as yourself.
> - Also make sure the **browser** isn't logged into another GitHub account, or the Authorize step will grab the wrong one. Check the username on the Authorize screen before you click it.

1. In GitHub Desktop, go to **File → Options → Accounts** (Windows) 
2. Next to GitHub.com, click **Sign in**, then **Continue with browser**.
3. Your browser pops up — click **Authorize**, then come back to the app. 
You might also see something like "sign into electron" and say YES or approve. 
Your username should now show under Accounts. Close the options window.

## Create your test repository

1. On the GitHub Desktop start screen, click **Create a New Repository on your local drive** (or **File → New Repository**).
2. Fill it in exactly like this:
   - **Name:** `github-desktop-test`
   - **Description:** `Getting familiar with GitHub Desktop` (optional)
   - **Local path:** leave the default (usually Documents → GitHub).
   - **Check "Initialize this repository with a README."**
   - **Git ignore:** None · **License:** None
3. Click **Create Repository**. You now have the repo on your computer. (It's not on GitHub yet — that happens at the Publish step.)

## Open it in VS Code and make your test file

1. In GitHub Desktop, click **Open in Visual Studio Code** (right side of the window).
   - *If VS Code shows "Restricted Mode," click **Manage → Trust** so you can edit.*
2. In VS Code's left sidebar, **right-click (or find new file icon and click) → New File** and name it exactly:

   ```
   githubDesktopTest.md
   ```
3. Type a couple of lines inside it — anything, for example:

   ```markdown
   # GitHub Desktop Test
   This file was pushed with GitHub Desktop
   ```
4. **Save** the file (**Ctrl+S**)

### Common Git Status Symbols in VS Code
You'll notice next to the new file a `U` that is green, it has a meaning: 

| Symbol | Meaning | Description |
|--------|---------|-------------|
| `U` | Untracked | New file that Git is not tracking yet |
| `M` | Modified | Existing file has been changed |
| `A` | Added | File has been added to the staging area |
| `D` | Deleted | File has been deleted |
| `R` | Renamed | File has been renamed |

**Most common:**

- 🟢 `U` — **Untracked:** Git sees a new file but isn't tracking it yet.
- 🟡 `M` — **Modified:** An existing tracked file has been changed.
- 🟢 `A` — **Added:** The file has been staged and is ready to be committed.
- 🔴 `D` — **Deleted:** A tracked file has been deleted.

## Commit your change (make the save point)

1. Switch back to **GitHub Desktop**. On the left you'll now see your changes:
   - `githubDesktopTest.md` with a **green ➕** = a brand-new file.
   - The right side shows your added lines highlighted in **green**.
2. In the bottom-left, type a short **commit message**, like:

   ```
   Add GitHub Desktop test file
   ```
3. Click **Commit to main**.

## Publish (push) it to GitHub

1. At the top of GitHub Desktop, click the big **Publish repository** button.
2. In the popup:
   - Leave the name as `github-desktop-test`.
   - **Uncheck "Keep this code private"** so I can open your link. *(If your class rule is private repos, leave it checked and add me as a collaborator — I'll tell you how.)*
   - Click **Publish repository**.
3. That's it — your repo and file are now live on GitHub. (After the first publish, this button becomes **Push origin** for all future changes.)

## Get your link and turn it in

1. In GitHub Desktop, click **View on GitHub** (under the Repository menu, or the button on the right) — this opens your repo in the browser.
2. Copy the web address at the top. It looks like:

   ```
   https://github.com/YOUR-USERNAME/github-desktop-test
   ```
3. **Paste that link into the Google Classroom assignment and submit.** ✅ Done!

---

## Now explore

You'll be working in GitHub Desktop the rest of the year, so look around. See if you can find each of these and figure out what it does:

- [ ] **History tab** (top-left) — the list of every commit. Click your commit; who made it, when, and exactly what changed.
- [ ] The **Current Repository** dropdown (very top-left) — how you'll switch between projects later.
- [ ] The **Undo** button that appears right after you commit (before you push) — your safety net.
- [ ] **Fetch / Push origin** (top-right) — syncs your local repository with its GitHub repository. Use **Fetch** to check for changes on GitHub and **Push** to send your local commits to GitHub.
