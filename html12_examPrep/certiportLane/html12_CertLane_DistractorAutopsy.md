# html12 Cert Lane — Distractor Autopsy Worksheet

**Opt-in Certiport lane, day 3. Works with the mock quiz in `certiportStudyGuidesForGitHub/Certiport_HTML_CSS_StudyGuide.md` (Module 13).**

## The method

Answering a question tests you once. Explaining why each WRONG answer is wrong tests you three times. For every mock-quiz question:

1. Answer it (no notes).
2. Check against the guide.
3. For each wrong option, write ONE sentence: *why would a test-writer include this, and why is it wrong?*
4. Tag the question: **knew it / guessed it / missed it.** Guessed counts as missed — re-study those modules.

## Worked example

*Question: Which CSS has the highest specificity?* a) `p` b) `.intro` c) `#main` d) `p.intro`

- **Answer: c** — an ID outranks any combination of classes and elements.
- a) wrong: a bare element selector is the WEAKEST — included to catch students who think "first = strongest."
- b) wrong: a class beats an element but loses to an ID — catches students who stopped memorizing halfway up the ladder.
- d) wrong: element+class (0,1,1) still loses to an ID (1,0,0) — the trap is that d LOOKS more specific because it's longer. **Length is not specificity.**

That last sentence is the kind of insight this method produces and nothing else does.

## Your autopsy

For each of the guide's 12 mock questions, use this block:

```
Q#: ___   My answer: ___   Correct: ___   knew / guessed / missed
Wrong option 1 — why it's tempting, why it's wrong:
Wrong option 2 —
Wrong option 3 —
```

## Commit

`html12_Autopsy_lastname.md` — all 12 blocks + a final line: which two modules you're re-reading tonight, based on your guessed/missed tags.
