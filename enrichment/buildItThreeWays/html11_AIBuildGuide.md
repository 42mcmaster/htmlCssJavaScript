# html11c — The AI Build

## The rule that makes this a lesson

You are the **director**, not a spectator. "Make me a website for a diner" produces generic junk. Your job is to specify — using the vocabulary you've earned all semester and the Bootstrap component menu.

## Step 1: Know the component menu

Skim the Bootstrap study guide in `enrichment/bootstrapBasics/`. You are not learning to *write* Bootstrap — you're learning to *name its parts*: navbar, hero/jumbotron, card grid, carousel, badge, alert, accordion, footer columns, breadcrumb. These names are how professionals talk about page furniture.

## Step 2: Direct the build

Give your AI a spec that names, at minimum:

- The client and audience (from your proposal — reuse it!)
- The pages and their nav structure
- **Which Bootstrap components go where** ("a navbar that collapses on mobile, a hero with the diner's name, a 3-column card grid for menu categories, a carousel of historical photos")
- Content requirements: your table, your form, real headings
- Non-negotiables: semantic HTML5 elements, alt text on every image, external CSS

Save the full conversation (or a prompt log) — it's a graded artifact.

## Step 3: The critique (the graded heart of this segment)

Read the generated code. In `html11_AICritique_lastname.md`, document at least **five specific findings**, each with: the line/section, what's wrong or questionable, and what you'd change. Hunt for the classics:

- div soup where semantic elements belong
- missing or useless alt text ("image.png")
- inline styles that belong in the stylesheet
- fake headings (styled text instead of h-tags)
- form inputs without labels
- heading hierarchy that skips levels

If the AI's code is genuinely clean in one area, say so and prove it — "no finding" claims need evidence too.

## Step 4: One revision round

Send your top three findings back to the AI as fix instructions. Verify it actually fixed them. Note in the critique which fixes worked.

## What to commit

The AI-built site (own folder), the prompt log, and the critique file.
