# HTML11: Bootstrap Basics — DIY Task

## Project: Responsive Business Landing Page

### Objective
Design and build a professional, responsive landing page for a fictional business using Bootstrap. This is your opportunity to apply all Bootstrap concepts: grid system, components, and utilities.

### Time: 45–60 minutes

---

## Requirements

Your landing page **must include:**

1. **Navbar** (responsive with collapsible menu)
   - Brand name
   - At least 3 navigation links
   - Dark background (`bg-dark`)
   - Collapses into hamburger menu on mobile

2. **Hero Section** (full-width banner)
   - Eye-catching heading
   - Tagline or subheading
   - Call-to-action button
   - Background color or contrast (`bg-primary`, `bg-success`, etc.)

3. **Grid Layout with Cards** (at least 4 cards)
   - Responsive columns: full width on mobile, 2 per row on tablet, 4 on desktop
   - Use classes: `col-12 col-md-6 col-lg-3`
   - Each card includes:
     - Title (`card-title`)
     - Description (`card-text`)
     - Button (`btn btn-primary` or another style)

4. **Features/Services Section**
   - At least 3 items describing what your business offers
   - Can be cards, text blocks, or a combination
   - Use responsive grid

5. **Call-to-Action with Form**
   - Heading like "Contact Us" or "Sign Up"
   - Form with at least 3 fields:
     - Text input
     - Email input
     - Textarea
   - Submit button (`btn btn-success`)

6. **Alert Component**
   - At least one alert (info, warning, success, or danger)
   - Can be dismissible

7. **Footer**
   - Dark background
   - Copyright text
   - Links (privacy, terms, contact, social media, etc.)
   - Centered text

8. **Spacing & Typography Utilities**
   - Use margin utilities: `m-`, `mx-`, `my-`, `mt-`, `mb-`, `ms-`, `me-`
   - Use padding utilities: `p-`, `px-`, `py-`, `pt-`, `pb-`, `ps-`, `pe-`
   - Use text utilities: `text-center`, `text-start`, `text-end`, `text-white`
   - Use color utilities: `bg-primary`, `text-danger`, `bg-light`, etc.

9. **Responsiveness**
   - Test on mobile (< 576px), tablet (768px), and desktop (992px+)
   - All content should be readable and well-spaced on all screen sizes
   - Navbar should collapse on mobile
   - Cards should stack on mobile, 2 per row on tablet, 4 on desktop

10. **Valid HTML5**
    - Proper semantic structure
    - All required Bootstrap CDN links
    - No errors in browser console

---

## Business Ideas (Choose One or Create Your Own)

- **Coffee Shop** — Menu highlights, location, hours, reservations
- **Fitness Gym** — Classes, pricing, trainer profiles, membership signup
- **Freelance Designer** — Portfolio, services, testimonials, contact
- **Tech Startup** — Product features, pricing plans, team, newsletter signup
- **Tutoring Service** — Subjects, schedules, success stories, enrollment
- **Restaurant** — Menu, about, photos, reservation form
- **E-Commerce** — Featured products, categories, reviews, cart preview
- **Salon/Spa** — Services, pricing, appointment booking, specials
- **Digital Marketing Agency** — Services, case studies, team, quote request
- **Travel Agency** — Destinations, tour packages, testimonials, booking

---

## Getting Started

1. **Create your HTML file:** `myBusinessLandingPage.html`

2. **Include Bootstrap CDN links:**
   - CSS in `<head>`
   - JS bundle before `</head>`

3. **Plan your layout:**
   ```
   <body>
     <navbar></navbar>
     <hero></hero>
     <services></services>
     <features></features>
     <contact form></contact>
     <alert></alert>
     <footer></footer>
   </body>
   ```

4. **Build section by section:**
   - Start with navbar (copy from solution if needed)
   - Add hero section
   - Build grid with cards
   - Add form
   - Add footer

5. **Add spacing and utilities:**
   - Use `py-5` for section vertical padding
   - Use `mb-4` for card spacing
   - Use `text-center` for alignment
   - Use `bg-light`, `bg-info`, etc., for colors

6. **Test responsiveness:**
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test at: mobile, tablet, desktop
   - Resize and verify layout changes

7. **Polish and refine:**
   - Check colors and contrast
   - Adjust spacing if needed
   - Test all buttons and links
   - Verify form inputs work

---

## Grading Checklist

- [ ] Navbar with brand and 3+ links, responsive collapse
- [ ] Hero section with heading, tagline, button
- [ ] 4+ cards in responsive grid (col-12 col-md-6 col-lg-3)
- [ ] Features/services section with content
- [ ] Contact form with text, email, textarea inputs
- [ ] Submit button
- [ ] At least one alert component
- [ ] Footer with copyright and links
- [ ] Spacing utilities used throughout (m-, p-, etc.)
- [ ] Text and color utilities used
- [ ] Responsive on mobile, tablet, desktop
- [ ] Valid HTML5 with Bootstrap CDN
- [ ] No console errors
- [ ] Professional appearance and organization

---

## Tips for Success

1. **Start with the walkthrough solution** — Use it as a template and modify for your business
2. **Keep it simple** — Focus on layout and components, not custom CSS
3. **Use Bootstrap utilities first** — Don't write custom CSS unless Bootstrap doesn't provide it
4. **Test early** — Check responsiveness while building, not just at the end
5. **Consistent spacing** — Use the same spacing utilities throughout (mb-4, p-3, etc.)
6. **Color palette** — Use Bootstrap's built-in colors (primary, success, danger, etc.)
7. **Real content** — Write meaningful text for your business, not placeholder text
8. **Mobile-first thinking** — Design for mobile first, then enhance for larger screens

---

## Bootstrap Classes You'll Likely Need

| Class | Purpose |
|-------|---------|
| `container`, `container-fluid` | Content wrapper |
| `row`, `col-*`, `col-md-*`, `col-lg-*` | Grid system |
| `navbar`, `navbar-expand-lg`, `bg-dark` | Navigation |
| `card`, `card-body`, `card-title` | Cards |
| `btn`, `btn-primary`, `btn-success` | Buttons |
| `alert`, `alert-info`, `alert-warning` | Alerts |
| `form-label`, `form-control` | Forms |
| `m-*`, `p-*`, `mb-*`, `mt-*` | Spacing |
| `text-center`, `text-white` | Text utilities |
| `bg-primary`, `bg-light` | Color utilities |
| `py-5`, `px-3` | Padding shortcuts |

---

## Examples & Inspiration

**View the solutions provided:**
- `html11_Walkthrough_Solutions.html` — Full example landing page
- `html11b_Task_Solutions.html` — Component usage reference

Adapt these examples to your chosen business!

---

## Troubleshooting

**Navbar doesn't collapse on mobile**
- Ensure Bootstrap JS CDN is included
- Check that you have `data-bs-toggle="collapse"` and `data-bs-target="#navbarNav"`

**Cards don't stack on mobile**
- Verify `col-12` is used (not just `col-md-6`)
- Check browser responsiveness mode (F12 → device toolbar)

**Nothing is styled**
- Verify Bootstrap CSS CDN link is in `<head>`
- Clear cache and refresh browser

**Form inputs not styled**
- Use `form-label` for labels and `form-control` for inputs
- Wrap in `mb-3` for spacing

**Colors look wrong**
- Use correct class names: `bg-primary`, not `bg-blue`
- Remember: `bg-` for background, `text-` for text color

---

## Submission

Save your file as: **`myBusinessLandingPage.html`**

Include:
1. Complete HTML with all Bootstrap CDN links
2. All required components (navbar, hero, cards, form, footer)
3. Responsive grid that works on mobile/tablet/desktop
4. Code comments explaining key Bootstrap classes
5. Valid HTML5 with no console errors

---

## Bonus Challenges

If you finish early and want to challenge yourself:

1. **Add custom.css** — Create a small CSS file for custom colors or fonts (keep it minimal)
2. **Add images** — Use Bootstrap image utilities (`img-fluid` for responsive images)
3. **Add carousel** — Include a Bootstrap carousel for featured items
4. **Style buttons differently** — Use `btn-outline-primary`, `btn-lg`, etc.
5. **Add toast notifications** — JavaScript-powered notifications
6. **Create pricing table** — Use tables with Bootstrap styling
7. **Add testimonials** — Customer quotes in a carousel or grid
8. **Advanced grid** — Mix column sizes (6-6 on tablet, 4-4-4 on desktop, etc.)

---

## Next Steps

After completing this task, you'll have:
- A complete, professional landing page
- Practice with Bootstrap grid system
- Experience with responsive design
- Knowledge of Bootstrap components
- Understanding of utilities and spacing

Use this as a template for future projects!
