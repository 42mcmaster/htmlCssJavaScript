---
marp: true
theme: default
paginate: true
---

<!-- _header: "html10 — New Topics" -->

# Three Topics the Exam Expects
## Bandwidth & Latency · Browser Plug-ins · CMS

---

# Bandwidth vs. Latency

Two different reasons a page feels slow:

- **Bandwidth** — how MUCH data moves per second (a wider pipe). Measured in Mbps.
- **Latency** — how LONG one round trip takes (a longer pipe). Measured in ms.

**The truck analogy:** bandwidth is how much the truck carries; latency is how long the drive takes. More trucks don't shorten the drive.

**Why web designers care:** big images eat bandwidth; every separate file adds round trips (latency). Optimizing = smaller files AND fewer of them.

---

# Data Transmission Volume

- More content = more data = slower load on low bandwidth
- Video ≫ images ≫ text (orders of magnitude)
- Mobile connections: less bandwidth, higher latency, data caps
- This is WHY we compress images before publishing

---

# Browser Plug-ins

- **What they were:** separate software the browser loaded to handle content HTML couldn't — Flash (animation/games), Java applets, Silverlight, PDF readers
- **What happened:** HTML5 gave the browser native audio, video, and interactivity → plug-ins died (Flash officially ended in 2020)
- **What the term means today:** browser **extensions** (ad blockers, password managers) — added *features*, not embedded *content*
- **Exam framing:** plug-ins extend what a browser can display; modern HTML5 replaced most of them

---

# Content Management System (CMS)

- **A CMS** stores content in a database and builds pages from templates — you edit content in a dashboard, not in HTML files
- **WordPress** powers roughly 40% of all websites. Others: Drupal, Joomla, Wix/Squarespace (hosted builders)
- **Static site** (what we build): files ARE the pages. Fast, simple, nothing to hack — but editing means editing code
- **CMS-driven site:** non-coders can update content; themes/templates control the look; needs hosting, updates, security care

---

# CMS: Install & Configure (describe level)

What "installing a CMS" involves:

1. Web server with a database (usually MySQL + PHP for WordPress)
2. Upload/install the CMS software
3. Run its setup: connect the database, create the admin account
4. Configure: pick a theme (template), set up pages/menus/users
5. Maintain: updates, backups, security patches

**You'll do the configure half for real in html11** — on WordPress.com, where the hosting and install are already done.

---

# The One-Slide Recap

- Slow page? Bandwidth (too much data) or latency (too many trips) — or both
- Plug-ins: the old way to extend browsers; HTML5 mostly replaced them
- CMS: database + templates + dashboard; WordPress is the giant
- Static vs dynamic is the axis all of this sits on
