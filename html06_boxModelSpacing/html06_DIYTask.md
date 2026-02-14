# HTML06 DIY Task: Independent Project

## Objective
Apply your knowledge of the box model, display, and positioning properties to build a **styled card component** AND a **page layout with header/content/footer**.

---

## Project Overview

You will create a complete web page that demonstrates:

1. **Card Component**: A reusable, styled card with proper spacing (padding, margin, border)
2. **Page Layout**: A professional page layout with:
   - Fixed header with navigation
   - Main content area with multiple cards
   - Sidebar (optional)
   - Fixed footer

---

## Requirements

### Part 1: Card Component

Your card must include:

- [ ] **HTML Structure**: A `<div>` or `<article>` with:
  - An `<h2>` or `<h3>` for the title
  - A `<p>` for the description/body text
  - An optional `<button>` for a call-to-action

- [ ] **Styling Requirements**:
  - Width: 280-320px (fixed)
  - Padding: 15-25px (interior space)
  - Border: 1-2px solid (color of your choice)
  - Margin: 15-20px (exterior space)
  - Background color: Light color (#f5f5f5, #fff, #f9f9f9, etc.)
  - Border-radius: 4-8px (rounded corners)
  - Box-shadow: Optional but recommended for depth
  - Use `box-sizing: border-box;` to prevent width issues

- [ ] **Spacing Details**:
  - Title should have no top margin (margin-top: 0)
  - Title should have a bottom border or padding separator
  - Body text should have appropriate line-height (1.4-1.6)
  - Button (if included) should span the card width with padding

- [ ] **Multiple Cards**: Display at least 3 cards on your page using inline-block or flex display

### Part 2: Page Layout

Your page must include:

- [ ] **Header**:
  - `position: fixed;` at the top
  - Width: 100%
  - Height: 50-70px
  - Background color: Dark color (#1565c0, #333, etc.)
  - Contains an `<h1>` with page title
  - Z-index high enough to stay on top (100 or higher)

- [ ] **Main Content Area**:
  - `margin-top` or `padding-top` to avoid overlap with fixed header
  - Contains your card components
  - Padding for breathing room

- [ ] **Footer**:
  - `position: fixed;` at the bottom
  - Width: 100%
  - Height: 50-70px
  - Background color: Dark color
  - Contains copyright or site information
  - Z-index high enough to stay on top (100 or higher)

- [ ] **Optional Sidebar**:
  - If included, use `display: inline-block;` or `display: flex;`
  - Width: 20-30% of content area
  - Contains navigation links or additional info

### Part 3: CSS Properties Must Use

- [ ] `box-sizing: border-box;` on universal selector
- [ ] `padding` (multiple values)
- [ ] `margin` (multiple values)
- [ ] `border` and `border-radius`
- [ ] `width` and `height`
- [ ] `display: block;`, `inline-block;`, or `flex;`
- [ ] `position: fixed;` for header/footer
- [ ] `z-index` for layering
- [ ] `background-color` and `color`
- [ ] At least one hover effect (e.g., button or card on hover)

---

## Challenge (Optional Enhancements)

Take your project further with these options:

1. **Advanced Styling**:
   - Add a gradient background to the header/footer
   - Use CSS transitions for smooth hover effects
   - Add a box shadow to cards for depth
   - Create a hover effect that scales or lifts the card

2. **Responsive Design**:
   - Add media queries to stack cards vertically on mobile
   - Adjust header height on smaller screens
   - Make sidebar hide on mobile (display: none)

3. **Content Variation**:
   - Create different card styles (alternate border colors, different padding, etc.)
   - Add an "featured" card with slightly different styling
   - Include icon placeholders in cards

4. **Interactive Elements**:
   - Style form inputs with proper padding/margin
   - Create a working navigation menu in the header
   - Add active link styling in navigation

---

## Layout Example (ASCII Diagram)

```
┌────────────────────────────────────────────┐
│          FIXED HEADER (height: 70px)       │
├────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────────┐   │
│  │   SIDEBAR    │  │  MAIN CONTENT    │   │
│  │ (optional)   │  │  (Cards, cards)  │   │
│  │ 20-30% width │  │ 70-80% width     │   │
│  │              │  │                  │   │
│  └──────────────┘  └──────────────────┘   │
├────────────────────────────────────────────┤
│          FIXED FOOTER (height: 70px)       │
└────────────────────────────────────────────┘
```

---

## Deliverables

Submit TWO files:

1. **html06_DIYTask_Submission.html** — Your complete HTML file
   - Can use inline CSS (`<style>` tag) or linked external stylesheet
   - All semantic HTML5 elements
   - Proper indentation and comments

2. **html06_DIYTask_Submission.css** (if using external stylesheet)
   - Clear, organized CSS with comments
   - Proper formatting and indentation
   - All styling rules

---

## Grading Rubric

| Category | Points | Criteria |
|----------|--------|----------|
| **HTML Structure** | 20 | Proper semantic HTML5, valid markup, comments |
| **Card Component** | 25 | Proper padding/margin/border, width, multiple cards displayed |
| **Page Layout** | 25 | Fixed header/footer, content spacing, z-index management |
| **CSS Properties** | 20 | Uses all required properties correctly |
| **Visual Design** | 10 | Clean, professional appearance, colors, spacing consistency |
| **Total** | 100 | |

---

## Helpful Tips

1. **Start Simple**: Build the basic structure first (header, footer, cards)
2. **Use DevTools**: Right-click elements and inspect box model to verify spacing
3. **Comment Your Code**: Explain what each CSS rule does
4. **Test Scrolling**: Make sure header/footer stay fixed when scrolling
5. **Mobile View**: Test on smaller browser widths (or use DevTools device emulation)
6. **Color Palette**: Choose 2-3 main colors and stick with them
7. **Consistent Spacing**: Use multiples of 5-10 for padding/margin (e.g., 5px, 10px, 15px, 20px)

---

## Resources

- **MDN Box Model Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model
- **CSS Display Property**: https://developer.mozilla.org/en-US/docs/Web/CSS/display
- **CSS Position Property**: https://developer.mozilla.org/en-US/docs/Web/CSS/position
- **Using DevTools**: Open DevTools (F12), right-click an element, select "Inspect"

---

## Example Card Structure

```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-body">Description text goes here.</p>
  <button class="card-button">Call to Action</button>
</div>
```

```css
.card {
  width: 300px;
  padding: 20px;
  margin: 15px;
  border: 2px solid #1976d2;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  vertical-align: top;
}
```

---

## Due Date

Complete this project by [INSERT DATE]. Submit both files to [INSERT SUBMISSION METHOD].

Good luck! Remember to use DevTools to inspect and debug your layout.
