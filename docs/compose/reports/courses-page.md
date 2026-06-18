---
feature: courses-page
status: delivered
specs: []
plans:
  - docs/compose/plans/2026-06-18-courses-page.md
branch: main
commits: pending
---

# Courses Page — Final Report

## What Was Built

A new static page (`courses.html`) for the Matters Lab website, presenting English pronunciation courses for children and teenagers. The page follows the existing design system with hero section, course cards, CTA, and footer with contact form.

Two course categories are featured:
- **For Kids (7-12 years):** Cambridge Exam Prep (Starters, Movers, Flyers)
- **For Teens (13-17 years):** Cambridge Exam Prep (KET, PET, FCE, CAE)

Each course includes description, features list, and call-to-action button.

## Architecture

Single HTML page with page-specific CSS, reusing existing design components:

```
courses.html
├── Header (reused from index.html, with Courses link active)
├── Hero section (custom title "Courses for Kids & Teens")
├── Kids courses section
│   └── Course card with age badge, description, features
├── Teens courses section
│   └── Course card with age badge, description, features
├── CTA section (reused inspiring block)
└── Footer (reused from index.html)

src/styles/pages/courses.css
├── .kids-courses__* styles
└── .teens-courses__* styles
```

### Design Decisions

- **Separate CSS file:** Kept page-specific styles in `src/styles/pages/courses.css` to avoid bloating main.css with one-off styles
- **BEM naming:** Followed existing convention (`block__element--modifier`)
- **Age badges:** Used colored badges (green for kids, dark for teens) to visually distinguish age groups
- **Responsive:** Mobile-first approach matching existing breakpoints (768px, 1280px)

## Usage

1. Open `courses.html` directly in browser, or
2. Run `npm start` / `npx live-server --port=3000` and navigate to `http://localhost:3000/courses.html`
3. Navigation: Header links to Home (`index.html`) and Courses (`courses.html`)

## Verification

- [x] `courses.html` exists and is valid HTML
- [x] `src/styles/pages/courses.css` exists with all required styles
- [x] `index.html` navigation updated with Courses link
- [x] Page structure matches design spec (hero, kids section, teens section, CTA, footer)
- [x] Responsive styles included for mobile/tablet/desktop

## Journey Log

- Initial brainstorm identified need for kids and teens courses
- User specified Cambridge Exam Prep for both age groups
- Page kept independent (no nav links from main page initially per user request)

## Source Materials

| File | Role | Notes |
|------|------|-------|
| `docs/compose/plans/2026-06-18-courses-page.md` | Implementation plan | Complete |
