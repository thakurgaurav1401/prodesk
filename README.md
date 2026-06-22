# Prodesk IT — Sprint 01 Landing Page

A professional, fully responsive landing page built for the Prodesk IT digital marketing wing as part of Sprint 01.

---

##  Live URL
> (https://landingpage-it.vercel.app/)  

## 📸 Screenshot!
![Prodesk IT Landing Page](images/Screenshot%202026-06-22%20130916.png)

## 📋 Project Overview

| Item | Detail |
|------|--------|
| Sprint | Sprint 01 |
| Type | Static Landing Page |
| Stack | HTML5, CSS3, Vanilla JavaScript |
| Responsive | Yes — Mobile & Desktop |
| Deployed On | Vercel  |
---

##  Features Built

### Phase 1 — Base MVP 
- Responsive Navbar with logo (left) and nav links (right)
- Hamburger menu collapse on mobile (vanilla JS toggle)
- Hero Section with headline, sub-headline, and CTA button
- Services Section — 3 cards (SEO, Web Dev, Marketing) in a CSS Grid layout
- Footer with copyright text and social media icons
- Built entirely with raw CSS (Flexbox + Grid) — no Bootstrap or Tailwind

### Phase 2 — UI/UX Enhancements 
Dark / Light mode toggle using CSS custom properties (`--variables`) and a `dark-mode` class on `<body>`
 Micro-interactions — hover scale + color shift on CTA button; lift effect (`translateY + box-shadow`) on service cards
Sticky Navbar — stays fixed at top using `position: sticky`


## File Structure
prodesk-it/
├── index.html       → Page structure (Navbar, Hero, Services, Footer)
├── styles.css       → All styling (CSS variables, Flexbox, Grid, media queries)
├── script.js        → Hamburger menu toggle + Dark/Light mode toggle
├── README.md        → This file
└── images/
    └── Screenshot 2026-06-22 130916.png  → Site screenshot

👤 Author
Gaurav Singh
Sprint 01 — Prodesk IT Internship Program