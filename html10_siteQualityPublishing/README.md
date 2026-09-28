# html10: Site Quality and Publishing

The last content lesson before exam prep. Students learn SEO, accessibility, proofreading, testing, and troubleshooting, publish their `DiyWebsite_Lastname` site with Firebase Hosting, and learn the "how the web works" vocabulary that appears on the certification exams. The DIY is the finish line for the running website.

## Files

| File | What it is |
|---|---|
| `html10_Walkthrough.md` | The one walkthrough. SEO, accessibility, proofreading, testing, troubleshooting methods, publishing, and web vocabulary. Linked table of contents, commented code. |
| `html10_Slides.md` | Marp slide deck for the lesson (about 24 slides). |
| `html10_StudyGuide.md` | Printable study guide: full vocabulary tables, cheat sheets, comparison tables, competencies, practice questions with answers. |
| `html10_Task.html` | Practice task. A bakery page with 22 numbered TODOs (SEO, accessibility, proofreading, validator errors), testing steps, and 11 written vocabulary questions in a comment at the bottom. Uses the `images/` folder. |
| `html10_DIYTask.md` | Graded task. SEO pass, accessibility pass, proofread, validate, two-browser and narrow-window test, publish with Firebase Hosting, `test-log.md`, turn in the live URL. |
| `images/` | Three placeholder photos used by `html10_Task.html`. |
| `teacher/html10_Task_Solutions.html` | Fixed bakery page. Each fix marked `FIX n` to match `TODO n`. Expected validator results and the vocabulary answer key are at the bottom. |
| `teacher/html10_GoogleQuiz.csv` | 40 multiple-choice questions for Google Forms (trimmed to the most-tested SEO, accessibility, testing, publishing, and web vocabulary items). |
| `teacher/html10_Gimkit.csv` | The same 40 questions in Gimkit format. |
| `archive/` | Old files from before the trim (two walkthroughs, three slide decks, two study guides, five a-e tasks, two DIYs, the extension task, the unit guide, and all old teacher files in `archive/teacher/`). Kept for reference. Not for students. |

## Suggested Days (about 3-4 class days)

| Day | Class time |
|---|---|
| 1 | Slides and walkthrough Parts 1-3 (SEO, accessibility, proofreading). Keyboard tab-through and screen reader demo (VoiceOver: Cmd + F5). Start `html10_Task.html` TODOs. |
| 2 | Walkthrough Parts 4-5 (validators, two-browser testing, troubleshooting methods). Finish the task TODOs and testing steps. Start the DIY SEO and accessibility passes. |
| 3 | Walkthrough Parts 6-7 (publishing, web vocabulary). Task vocabulary questions. DIY: proofread, validate, test, then publish with Firebase Hosting (`firebase init hosting`, `firebase deploy --only hosting`). |
| 4 | DIY: test the live site, write `test-log.md`, turn in the live URL. Gimkit review. Google Quiz. |

Strong classes can do this in 3 days by assigning the task vocabulary questions as homework.

## Ohio Competencies

| Code | Topic | Where |
|---|---|---|
| 6.5.14 | Search engine optimization | Walkthrough Part 1, Task TODOs 1-2, 7, 12-17, DIY Part 1 |
| 6.1.2 | Plan for accessibility (ADA) | Walkthrough Part 2, Task, DIY Part 2 |
| 2.7.4 | Assistive technology (screen readers) | Walkthrough Part 2 |
| 6.1.4 | Proofreading | Walkthrough Part 3, Task TODO 11, DIY Part 3 |
| 6.5.10 | Usability testing | Walkthrough Part 4, DIY Part 5 |
| 6.5.11 | Cross-browser/device testing, validators | Walkthrough Part 4, Task testing steps, DIY Parts 4-5 |
| 2.11 | Troubleshooting methods (introduced) | Walkthrough Part 5 |
| 6.5.12 | Publish to a web server | Walkthrough Part 6, DIY Part 6 |
| 6.5.1 | Standards and protocols (HTTP/HTTPS, FTP, TCP/IP, DNS, W3C) | Walkthrough Part 7, Task questions 1-4, 10 |
| 2.7.8 | Static vs dynamic sites | Walkthrough Part 7, Task question 5 |
| 2.7.5 | Bandwidth and latency | Walkthrough Part 7, Task question 6 |
| 2.7.6 | Browser plug-ins | Walkthrough Part 7, Task question 7 |
| 6.5.4 | Content management systems (describe level) | Walkthrough Part 7, Task question 8 |
| 2.7.2 | Ways to present data | Walkthrough Part 7, Task question 9 |

## Scope Decisions

- **One lesson, one task, one DIY.** The old a-e tasks were merged into `html10_Task.html`. There is no extension task.
- **No command-line git.** Students commit and push with GitHub Desktop only. The one exception to typing commands is Firebase: students type three Firebase commands (`firebase login`, `firebase init hosting`, `firebase deploy --only hosting`) in the VS Code terminal. Git stays in GitHub Desktop.
- **Publishing uses Firebase Hosting, not GitHub Pages.** The school network blocks GitHub Pages. The site folder `DiyWebsite_Lastname` stays in the `htmlCssJavaScript` repo and is still pushed to GitHub with GitHub Desktop. Each student makes a Firebase project (like `diywebsite-lastname`) and deploys that folder with the Firebase CLI. The public directory is `.` (the site folder itself). The live site is at `https://PROJECT-ID.web.app`. The repo does not need to be public for publishing. `firebase init` adds `firebase.json` and `.firebaserc` to the folder; students commit them.
- **Firebase deploys are manual.** Pushing to GitHub does not update the live site. Students run `firebase deploy --only hosting` after every change. Automatic GitHub builds are turned off during `firebase init`.
- **Teacher check before the lesson:**
  - (a) School Google accounts can open console.firebase.google.com and create a project. A Workspace admin may need to allow Firebase for student accounts.
  - (b) Node.js and npm are installed on student machines, or can be installed (`node -v` shows a version).
  - (c) `npm install -g firebase-tools` works without admin rights. If not, Mr. McMaster may need to run the install once per machine.
  - Hosting on the free Spark plan needs no credit card. Students should not change plans.
- **ARIA is `aria-label` only.** The rest of the ARIA catalog is beyond both exams.
- **CMS is describe level.** What a CMS is, static vs CMS-driven, WordPress as the example. Students do not install or configure one.
- **No dev tools.** Dev tools are disabled on student machines, so testing uses the W3C validators, two browsers, a narrowed window, and the keyboard. WAVE (wave.webaim.org) and PageSpeed Insights (pagespeed.web.dev) are optional, only if the school filter allows them.
- **Troubleshooting methods are introduced here** (top-down, bottom-up, follow the path, spot the differences) and reviewed in exam prep.
