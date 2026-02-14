# HTML 12: SEO & Accessibility Study Guide

## Vocabulary (20 terms)

### SEO Terms
1. **SEO** — Search Engine Optimization; the practice of making websites easier for search engines to find, understand, and rank.

2. **Search Engine** — Software that crawls the web, indexes pages, and returns results based on search queries (Google, Bing, DuckDuckGo).

3. **Crawl/Crawler** — Automated bot (like Googlebot) that visits web pages, reads content, and follows links to discover new pages.

4. **Index** — A database of all pages a search engine has discovered and processed. Indexed pages can appear in search results.

5. **Rank** — The position of a page in search results. Rank 1 = top result. Determined by relevance and quality signals.

6. **Title Tag** — HTML tag that defines the title of a page; appears in browser tabs and search result headlines. Example: `<title>Page Title</title>`

7. **Meta Description** — HTML tag providing a short summary of page content; appears under the title in search results. Example: `<meta name="description" content="Summary here">`

8. **Heading Hierarchy** — The structured order of headings (h1, h2, h3, etc.); one h1 per page, with h2s for main sections and h3s for subsections. Helps search engines understand content structure.

9. **Alt Text** — Alternative text for images; describes what an image shows. Helps search engines understand images and helps visually impaired users with screen readers.

10. **Keyword** — A word or phrase that users search for; used naturally in titles, headings, and content to help search engines understand page topic.

11. **Organic Traffic** — Website visitors who arrive via search engine results (not ads, not direct links). Indicates good SEO performance.

12. **SERP** — Search Engine Results Page; the list of results Google (or other search engine) returns for a query.

### Accessibility Terms
13. **ADA** — Americans with Disabilities Act; U.S. law requiring websites to be accessible to people with disabilities.

14. **WCAG** — Web Content Accessibility Guidelines; international standard for web accessibility. Level AA is the industry standard.

15. **Accessibility** — The practice of designing websites usable by everyone, including people with disabilities (vision, hearing, motor, cognitive).

16. **Screen Reader** — Software that reads web content aloud for blind or low-vision users. Examples: NVDA, JAWS, VoiceOver. Users navigate with keyboard (Tab, Enter, arrows).

17. **Color Contrast** — The difference in brightness/color between text and background. WCAG AA requires 4.5:1 ratio for normal text to ensure readability for color-blind users.

18. **ARIA** — Accessible Rich Internet Applications; HTML attributes that provide additional information to screen readers. Examples: `aria-label`, `aria-describedby`, `role`.

19. **Aria-Label** — ARIA attribute that provides a label for an element when visual text isn't present. Example: `<button aria-label="Close menu">×</button>`

20. **Aria-Describedby** — ARIA attribute that links an element to a description elsewhere on the page. Example: `<img aria-describedby="img-description">`

21. **Keyboard Navigation** — Ability to use a website with keyboard only (Tab, Shift+Tab, Enter, Arrow keys). All interactive elements must be reachable via keyboard.

22. **Focus Indicator** — Visual indicator (usually an outline) showing which element currently has keyboard focus. Must be visible, not hidden.

23. **Semantic HTML** — Using proper HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`, `<a>`) to clearly indicate the meaning of content. Opposite of "div soup."

---

## Cheat Sheet: SEO Best Practices

| Element | Best Practice | Example |
|---------|---------------|---------|
| **Title Tag** | Unique, under 60 chars, keyword-rich, compelling | `<title>How to Bake Sourdough | The Bread Institute</title>` |
| **Meta Description** | 150-160 chars, compelling, clear call-to-action | `<meta name="description" content="Learn professional sourdough techniques. Free guide + 10 video lessons. Start today!">` |
| **H1 (Page Title)** | One per page, should match or relate to title tag | `<h1>How to Bake the Perfect Sourdough Bread</h1>` |
| **H2, H3, H4** | Logical hierarchy, no skipping levels | `<h2>Ingredients</h2> <h3>For the Starter</h3>` |
| **Alt Text** | Descriptive, 100-125 chars, no "image of..." | `<img alt="crusty sourdough loaf cooling on wire rack">` |
| **URL** | Short, descriptive, lowercase, hyphens not underscores | `/blog/how-to-bake-sourdough-bread` not `/blog/post_123` |
| **Keywords** | Natural placement in title, h1, first 100 words, alt text | Don't overuse (keyword stuffing = penalty) |
| **Content** | Unique, useful, answer user's search query | 300+ words for better ranking chances |

---

## Cheat Sheet: Accessibility Best Practices

| Element | Best Practice | Example |
|---------|---------------|---------|
| **Alt Text** | Descriptive, meaningful, not generic | `<img alt="blue ceramic coffee mug with steam">` |
| **Form Labels** | Connected to input via `for` attribute | `<label for="email">Email:</label> <input id="email">` |
| **Button vs Div** | Use `<button>` for actions, not div with onclick | `<button>Submit</button>` |
| **Link Text** | Descriptive, not "click here" | `<a href="/about">Learn about us</a>` |
| **Color Contrast** | 4.5:1 ratio (text to background) | Dark text (#333) on light background (#fff) |
| **Focus Styles** | Always visible, not removed | `button:focus { outline: 2px solid blue; }` |
| **Heading Hierarchy** | One h1, logical h2/h3 flow | h1 → h2 → h3 (never skip: h1 → h3) |
| **Semantic HTML** | Use proper tags not divs | `<nav>`, `<main>`, `<article>`, `<header>` |
| **Keyboard Nav** | Tab through entire page logically | Tab order follows visual left-to-right, top-to-bottom |
| **ARIA Labels** | Use for icons or unclear elements | `<button aria-label="Close menu">×</button>` |

---

## Ohio Department of Education (ODE) Competencies

### **6.5.14 — Search Engine Optimization**
- Understand how search engines crawl, index, and rank web pages
- Implement SEO best practices: title tags, meta descriptions, semantic HTML, heading hierarchy
- Write descriptive alt text for images
- Create clean, keyword-friendly URLs
- Understand the relationship between content quality and search rankings

### **6.1.2 — Plan with Accessibility in Mind (ADA)**
- Design and develop websites with ADA compliance and accessibility as a core requirement, not an afterthought
- Understand WCAG guidelines and Level AA standards
- Plan for keyboard navigation, screen reader support, and color contrast from the start

### **6.1.4 — Proofreading & Quality Assurance**
- Review websites for SEO and accessibility issues
- Test with keyboard navigation and screen readers
- Audit heading hierarchy, alt text, color contrast
- Fix issues systematically before launch

### **6.5.10 — Usability Testing**
- Test websites for accessibility (color contrast, keyboard nav, screen reader support)
- Audit SEO implementation (title tags, meta descriptions, heading hierarchy, alt text)
- Gather feedback and iterate on improvements
- Document findings and changes

---

## Key Connections: SEO + Accessibility

**They overlap!**

| Practice | Helps Search Engines | Helps Users |
|----------|---------------------|------------|
| **Semantic HTML** | Understand page structure | Navigate logically with screen readers |
| **Alt Text** | Index images, understand page | See what images contain |
| **Heading Hierarchy** | Understand content organization | Scan page structure quickly |
| **Clean URLs** | Understand page topic | Remember and share URLs |
| **Form Labels** | Parse forms | Understand form fields |
| **Link Text** | Index pages, understand relationships | Know where links go |

**Bottom line:** Building for accessibility makes your site better for *everyone*, including search engines.

---

## Quick Review Questions

1. What are the two HTML elements that search engines look at first on a page?
2. How long should a title tag be?
3. Why is heading hierarchy important for SEO?
4. What does alt text do?
5. What does ARIA stand for?
6. What is the WCAG contrast ratio standard for normal text?
7. What is a screen reader?
8. How do you test keyboard navigation on your site?
9. Why should you use semantic HTML instead of divs?
10. What is the difference between a title tag and a meta description?

---

## Additional Resources

- **SEO:**
  - Google Search Central: https://developers.google.com/search
  - Moz Beginner's Guide to SEO: https://moz.com/beginners-guide-to-seo

- **Accessibility:**
  - WebAIM: https://webaim.org
  - WCAG 2.1 Overview: https://www.w3.org/WAI/WCAG21/overview
  - ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg

- **Tools:**
  - Google Lighthouse (browser audit tool, free)
  - WAVE (accessibility checker, free)
  - WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker
  - NVDA Screen Reader (free, Windows): https://www.nvaccess.org
