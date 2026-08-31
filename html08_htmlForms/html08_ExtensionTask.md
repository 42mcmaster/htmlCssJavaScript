# html08 Extension Task: Forms That Talk Back

**For fast finishers. Extra credit — no points, no rubric. Finish the regular html08 tasks first.**

## The task

Take your html08 form further in two directions — still zero JavaScript. The browser and CSS can do more than most people think.

**Part 1 — A sectioned form.** Rebuild or extend your form so it has at least three `<fieldset>` groups, each with a `<legend>` (e.g., Contact Info / Order Details / Preferences). Every input keeps a properly-connected `<label>`. Add sensible `required`, `min`/`max`, `maxlength`, and at least one `pattern` attribute (a phone number or ZIP code is classic).

**Part 2 — Styled validation states.** Use CSS pseudo-classes so the form gives live visual feedback:

```css
input:focus            { /* you're here */ }
input:valid            { /* looking good */ }
input:invalid          { /* not yet */ }
input:required         { /* mark these somehow */ }
```

One warning from the real world: a field can be `:invalid` before the user has even touched it, which feels hostile. Try `input:invalid:not(:placeholder-shown)` on fields with placeholders and note the difference.

## What to commit

- `html08_ExtensionForm_lastname.html` + its stylesheet

## Done when

- [ ] Three fieldsets with legends; every input labeled
- [ ] required/pattern/min/max used meaningfully
- [ ] Focus, valid, and invalid states visibly styled
- [ ] Zero JavaScript
- [ ] Pushed to GitHub
