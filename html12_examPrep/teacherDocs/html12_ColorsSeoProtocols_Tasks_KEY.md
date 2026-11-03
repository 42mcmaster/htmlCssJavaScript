# Answer Key — Tasks 12a, 12b, 12c

Accept answers in the student's own words. Open-ended items (marked *open*) are graded on whether the answer is reasonable and uses the right idea.

---

## 12a — Web Colors (RGB and Hex)

**a.** Magenta. Mixing light adds brightness: more light = brighter, and all three full = white.

**b.** Not right. Both have 256 choices per color (RGB 0–255; hex 00–FF, 16 × 16 = 256), so both make 256 × 256 × 256 ≈ 16.7 million colors. Hex is shorter because each hex digit has 16 options instead of 10.

**c.** `#FF00FF` magenta · `#00FFFF` cyan · `#FFFF00` yellow · `#CCCCCC` light gray (all pairs equal and high) · `#1A1A1A` very dark gray (all pairs equal and low).

**d.** `9F` (green) is the biggest pair, so it is a green. (3C = 60, 9F = 159, 12 = 18.)

**e.** lime = `#00FF00`; green = `#008000`.

**f.** `rgb(255, 255, 0)` = `#FFFF00` · `#0000FF` = `rgb(0, 0, 255)` · `rgb(0, 0, 0)` = `#000000` · `#FFFFFF` = `rgb(255, 255, 255)`.

**g.** C0 = 12 × 16 + 0 = **192**.

**h.** `#FF8800`.

**i.** Example (either color can use either format):
```css
h1 {
  color: rgb(255, 0, 0);
}
body {
  background-color: #FFFFFF;
}
```

**j.**
```css
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
```
The 4th number (0.5) controls see-through: 0 = clear, 1 = solid.

**k.** Too little contrast; it is hard to read. Use dark text on a light background (or light text on a dark background).

**l.** *Open.* The hex code should be # plus 6 digits, and the explanation should match the pairs (for example, "high red, low green and blue = a red").

---

## 12b — SEO

**a.** 1 Crawl: crawlers/spiders follow links to find pages. 2 Index: the search engine stores what each page is about. 3 Rank: it sorts matching pages and shows the most useful first.

**b.** Crawlers find pages by following links. With no links pointing to it, crawlers may never reach it.

**c.** The two Sponsored results are paid (ads/PPC). The others are organic. SEO helps the organic results.

**d.** *Open.* Examples: organic traffic is free; paid ads stop when the money stops; people trust organic results.

**e.** *Open.* Must have a descriptive `<title>` (not "Home"), `<meta name="description" content="...">` with a 1–2 sentence summary, and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, all inside `<head>`.

**f.** Title: the browser tab and the blue link in search results. Meta description: often the gray text under the link in search results. Neither shows on the page itself.

**g.** Example:
```html
<img src="chocolate-cake.jpg" alt="Chocolate layer cake on a white plate">
<a href="menu.html">See our menu</a>
```
Needs: descriptive alt text, readable file names, link text that says where it goes.

**h.** A page should have only one `<h1>` (the main page title). The others should be lower levels (`<h2>`, `<h3>`) in order, or not headings at all.

**i.** Keyword stuffing. Search engines treat it as spam and rank the page lower (or remove it). Rewrite *open*: one or two normal sentences, for example "Affordable shoes for the whole family. Shop sneakers, boots, and sandals online or in store."

**j.** Any two: alt text (screen readers + image search), heading order (screen readers + search engines read the outline), clear link text (everyone knows where a link goes), mobile-friendly (easier to use + ranks better).

**k.** *Open.* Check that the title and description are in their real `index.html` and pushed.

---

## 12c — Internet Protocols

**a.** DNS · FTP (SFTP also acceptable) · HTTPS · HTTP · TCP · IP · SFTP.

**b.** A set of rules computers agree to follow so they can communicate. Everyday example *open* (speaking the same language, traffic rules, a handshake).

**c.** `192.168.0.1` valid · `10.0.300.5` not valid (300 is over 255) · `172.16.4` not valid (only 3 numbers; needs 4) · `8.8.8.8` valid.

**d.** People look up a name to find a number. DNS looks up a domain name to find its IP address.

**e.** Packets can arrive out of order and get put back together in the right order. TCP notices packet 5 is missing and asks for it to be sent again.

**f.** 200 · 404 · 500.

**g.** The login information is sent as plain text that someone could intercept and read. The browser shows "Not secure" instead of a padlock.

**h.** HTTPS uses SSL/TLS to encrypt the data. TLS is the newer, safer version. (A certificate proves the site is who it says it is.)

**i.** Uploading a website's files (HTML, CSS, images) to a web server. Plain FTP is not encrypted; SFTP is secure.

**j.** URL 1: `https://` · `www` · `medinapets` · `.com` · `/dogs/` · `grooming.html`.
URL 2: `http://` · `library` · `example` · `.edu` · `/books/` · `index.html`.

**k.** No. It uses `http://`, not `https://`.

**l.** 5 browser draws the page · 1 DNS · 3 HTTPS request · 2 TCP/IP connection · 4 server sends packets.

**m.** Before anyone visits: FTP puts the website's files onto the server.
