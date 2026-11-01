---
marp: true
title: Web Colors Review: RGB and Hex
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;800&family=JetBrains+Mono:wght@500;700&display=swap');

  /* Palette */
  :root {
    --dark: #1F2933;
    --light: #F7F6F2;
    --light2: #E9EEF2;
    --accent: #2457C5;
    --muted: #4A5563;
    --red: #C81E1E;
    --green: #15803D;
    --blue: #2457C5;
  }

  section {
    background: var(--light);
    color: var(--dark);
    font-family: 'Public Sans', Arial, sans-serif;
    font-size: 30px;
    padding: 64px 72px;
    justify-content: flex-start;
  }
  h1 { font-size: 64px; font-weight: 800; line-height: 1.05; color: inherit; }
  h2 { font-size: 46px; font-weight: 800; line-height: 1.1; color: var(--dark); margin-top: 0; }
  code, .mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }
  code { background: transparent; color: inherit; }
  p, li { color: inherit; }
  .note { color: var(--muted); font-size: 26px; }
  .eyebrow {
    font-size: 20px; font-weight: 600; color: var(--accent);
    text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;
  }

  /* Tables */
  table { display: table; font-size: 26px; border-collapse: collapse; width: 100%; }
  th { background: var(--dark); color: var(--light); text-align: left; }
  td, th { padding: 8px 16px; border: 1px solid #CBD2D9; }
  tr:nth-child(even) td { background: #FFFFFF; }

  /* Cards */
  .cards { display: flex; gap: 20px; margin-top: 20px; }
  .card {
    flex: 1; background: #FFFFFF; border: 1px solid #DDE2E7;
    border-radius: 12px; padding: 18px 22px; font-size: 26px;
  }

  /* Color swatches */
  .swatch {
    display: inline-block; width: 44px; height: 44px; border-radius: 8px;
    border: 1px solid #CBD2D9; vertical-align: middle; margin-right: 14px;
  }
  .bar { display: inline-block; width: 120px; height: 34px; border-radius: 6px; margin-right: 12px; }
  .r { color: var(--red); } .g { color: var(--green); } .b { color: var(--blue); }

  /* Big code line */
  .big { font-family: 'JetBrains Mono', 'Courier New', monospace; font-weight: 700; }

  /* Code box */
  .codebox {
    background: var(--dark); color: #E6EDF3; border-radius: 12px;
    padding: 20px 28px; font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 26px; line-height: 1.6;
  }
  .codebox .val { color: #F2B866; }

  /* Slide styles */
  section.dark { background: var(--dark); color: var(--light); }
  section.dark h1, section.dark h2 { color: var(--light); }
  section.dark .sub { color: #C9D6E2; font-size: 34px; }
  section.dark .eyebrow { color: #9DB4C8; }
  section.dark table td { background: #2A3642; color: #E6EDF3; }
  section.dark table th { background: #3B4A59; }
  section.alt { background: var(--light2); }
  section.accent { background: var(--accent); color: var(--light); }
  section.accent h2 { color: var(--light); }
  section.cover { justify-content: space-between; }
---

<!-- _class: dark cover -->
<!-- _paginate: false -->

<div class="eyebrow">Web Design Exam Review</div>

# Web Colors:<br>RGB and Hex Codes

<p class="sub">How a computer describes a color with numbers</p>

<span class="bar" style="background:#FF0000"></span><span class="bar" style="background:#00FF00"></span><span class="bar" style="background:#0000FF"></span>

<!--
Three short videos today: Khan Academy (RGB color model, 2:49), GoDaddy Developer (hex and RGB, 4:25), PolyMatter (hex in 60 seconds, 1:00). Slides after each video restate the main points.
-->

---

<div class="eyebrow">Video 1 · RGB color model</div>

## Screens make color by mixing red, green, and blue light

| Light mixed | Color you see |
|---|---|
| Red + Green | <span class="swatch" style="background:#FFFF00"></span>Yellow |
| Red + Blue | <span class="swatch" style="background:#FF00FF"></span>Magenta |
| Green + Blue | <span class="swatch" style="background:#00FFFF"></span>Cyan |
| Red + Green + Blue (all full) | <span class="swatch" style="background:#FFFFFF"></span>White |
| No light at all | <span class="swatch" style="background:#000000"></span>Black |

<p class="note">This is called <b>additive</b> color: adding more light makes the color brighter. Paint and printers work the opposite way.</p>

<!--
Point back to the Khan Academy video: each pixel has a red, green, and blue part. Turning all three up gives white; turning all three off gives black.
-->

---

<div class="eyebrow">Video 2 · RGB values</div>

## Each color gets a number from 0 to 255

<p class="big" style="font-size:52px">rgb(<span class="r">red</span>, <span class="g">green</span>, <span class="b">blue</span>)</p>

<div class="cards">
<div class="card"><b>0</b> = none of that color<br><b>255</b> = full amount<br>256 levels per color</div>
<div class="card mono">rgb(255, 0, 0) = red<br>rgb(0, 0, 0) = black<br>rgb(255, 255, 255) = white</div>
</div>

<p class="note">256 × 256 × 256 = about <b>16.7 million</b> possible colors.</p>

<!--
Why 255? Each color uses one byte (8 bits), which holds 256 values: 0 through 255.
-->

---

<div class="eyebrow">Video 2 · Hex codes</div>

## A hex code is the same three numbers, written in pairs

<p class="big" style="font-size:110px; margin:10px 0">#<span class="r">FF</span><span class="g">88</span><span class="b">00</span></p>

<div class="cards">
<div class="card"><b>#</b> starts every hex code</div>
<div class="card"><b>6 digits</b>: 2 for red, 2 for green, 2 for blue</div>
<div class="card">Order is always <b>RR GG BB</b></div>
</div>

<!--
#FF8800 = red FF (full), green 88 (about half), blue 00 (none). That mix is orange.
-->

---

<!-- _class: alt -->

<div class="eyebrow">Video 2 · Counting in hex</div>

## Hex counts to 15 with one digit, using letters

<p class="big" style="font-size:44px; letter-spacing:4px">0 1 2 3 4 5 6 7 8 9 <span class="b">A B C D E F</span></p>

| Hex pair | Normal number | Meaning |
|---|---|---|
| 00 | 0 | None |
| 80 | 128 | About half |
| FF | 255 | Full |

<p class="note">Hex is <b>base 16</b> (hexadecimal). A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.</p>

<!--
Students do not need to convert every pair on the exam. They need to know 00 is none, FF is full, and higher letters mean more of that color.
-->

---

<!-- _class: alt -->

<div class="eyebrow">Video 2 · Reading a hex code</div>

## Look for the biggest pair

<div class="cards" style="flex-wrap:wrap">
<div class="card mono" style="flex:1 1 40%"><span class="swatch" style="background:#FF0000"></span>#FF0000 → all red</div>
<div class="card mono" style="flex:1 1 40%"><span class="swatch" style="background:#0000FF"></span>#0000FF → all blue</div>
<div class="card mono" style="flex:1 1 40%"><span class="swatch" style="background:#808080"></span>#808080 → equal = gray</div>
<div class="card mono" style="flex:1 1 40%"><span class="swatch" style="background:#FFFF00"></span>#FFFF00 → red + green = yellow</div>
</div>

<p class="note">When all three pairs are equal, the color is a gray: low = dark, high = light.</p>

<!--
Ask the class before revealing: what color is #00FF00? (green) #FFFFFF? (white) #000000? (black)
-->

---

<div class="eyebrow">Video 3 · Recap</div>

## One color, three ways to write it

| Name | Hex | RGB |
|---|---|---|
| <span class="swatch" style="background:#FF0000"></span>red | `#FF0000` | `rgb(255, 0, 0)` |
| <span class="swatch" style="background:#00FF00"></span>lime | `#00FF00` | `rgb(0, 255, 0)` |
| <span class="swatch" style="background:#0000FF"></span>blue | `#0000FF` | `rgb(0, 0, 255)` |
| <span class="swatch" style="background:#FFFFFF"></span>white | `#FFFFFF` | `rgb(255, 255, 255)` |
| <span class="swatch" style="background:#000000"></span>black | `#000000` | `rgb(0, 0, 0)` |
| <span class="swatch" style="background:#808080"></span>gray | `#808080` | `rgb(128, 128, 128)` |

<!--
In CSS, the color name for pure #00FF00 is lime. The name green is darker: #008000. This shows up as a trick question sometimes.
-->

---

## Writing colors in CSS

<div class="codebox">
h1 { color: <span class="val">navy</span>; }<br>
p { color: <span class="val">#333333</span>; }<br>
body { background-color: <span class="val">rgb(240, 248, 255)</span>; }<br>
.box { background-color: <span class="val">rgba(0, 0, 255, 0.5)</span>; }
</div>

<div class="cards">
<div class="card"><b>color</b> = text color<br><b>background-color</b> = the box behind it</div>
<div class="card"><b>rgba</b> adds a 4th number for see-through: 0 = clear, 1 = solid</div>
<div class="card"><b>Short hex</b>: #F00 is the same as #FF0000</div>
</div>

<!--
Tie back to the students' own styles.css: they have already used hex codes for their site colors. Contrast matters too: dark text on a light background (or the reverse) so everyone can read it.
-->

---

<!-- _class: accent -->

## Practice: what color is it?

<div class="mono" style="display:grid; grid-template-columns:1fr 1fr; gap:18px 60px; font-size:40px; margin-top:30px">
<div>1. #00FF00</div><div>5. rgb(0, 0, 0)</div>
<div>2. #FFFFFF</div><div>6. rgb(255, 0, 255)</div>
<div>3. #FF0000</div><div>7. #333333</div>
<div>4. #FFFF00</div><div>8. Write blue in hex</div>
</div>

<!--
Answers: 1 green (lime), 2 white, 3 red, 4 yellow, 5 black, 6 magenta (red + blue), 7 dark gray, 8 #0000FF.
-->

---

<!-- _class: dark -->

## For the exam

| If the question says… | Remember |
|---|---|
| Hex code | # then 6 digits, RR GG BB |
| Hexadecimal | Base 16: 0–9 and A–F |
| RGB range | 0 to 255 for each color |
| White / Black | #FFFFFF / #000000 |
| Equal pairs | A shade of gray |
| RGB stands for | Red, Green, Blue |

<!--
Gimkit next: Colors set.
-->
