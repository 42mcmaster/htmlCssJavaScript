# html09 — JavaScript · Unit Guide

**The merged JS unit (formerly html09 JavaScript Basics + html10 JS DOM & Interactivity), rebuilt per the v2 master plan. ODE competencies: 6.3.1, 6.3.2, 6.3.3, 6.4.7.**

## How this unit runs (≈5–6 class periods)

| Segment | Content | Materials |
|---|---|---|
| 09a–b | JS basics: script tag, console, variables, functions, comments. Mad Libs project. | html09_Slides, html09_Walkthrough, html09a/b_Task |
| 09c | DOM core: select an element, change content/styles, event listeners, classList.toggle | html09_DomSlides, html09_DomWalkthrough (Parts 1–4, 6), html09c_Task |
| 09d | **Feature day: dark mode toggle** on their real site | html09_FeatureDays_Walkthrough (Part 1) |
| 09e | **Feature day: mobile hamburger nav** on their real site | html09_FeatureDays_Walkthrough (Part 2) |
| 09f | Client-side form validation on the html08 form (the 6.4.7 carrier) + describe-level: what a server/database/web service does with submitted data | html09_DomWalkthrough validation section, html09d_Task, html09_FeaturesDIYTask |

## Scope decisions (from the master plan — don't drift)

- **Hover effects are CSS** (`:hover`, html06). The old JS-hover walkthrough part is retired; competency 6.2.7 is a CSS skill.
- **Template literals:** shown once, not drilled. Concatenation with `+` is the tested form.
- **The FAQ accordion** and other show/hide patterns moved to `html09_ExtensionTask.md` — same toolkit, optional reps.
- **No fetch, no APIs, no frameworks.** That's spring content.

## Why two feature days

Dark mode and the hamburger are the *same move* — `classList.toggle` — applied twice. Repetition on a small toolkit beats coverage of a big one. Both features stay on the student's real site and are required in the html11 hand-coded build.
