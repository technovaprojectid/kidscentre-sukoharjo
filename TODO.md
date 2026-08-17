# Multi-Program Website Refactoring — Task Tracker

## Goal
Transform the single-page Kids Centre AHE site into a multi-program educational website:

```
Kids Centre Sukoharjo (Main Website)
├── index.html        (NEW — official homepage)
├── kids-centre.html  (existing page, preserved + nav integration)
├── mea-edu.html      (NEW — MEA Edu landing page)
└── style.css, script.js, assets/ (reused)
```

## Steps
- [x] 1. Extend `style.css` with modular components (breadcrumb, program cards, why-us grid, CTA, about grid)
- [x] 2. Safely update `script.js` smooth-scroll so cross-page `.html` links navigate normally
- [x] 3. Create `kids-centre.html` (renamed existing page + nav/breadcrumb/links updates)
- [x] 4. Create NEW `index.html` (Kids Centre Sukoharjo homepage)
- [x] 5. Create NEW `mea-edu.html` (MEA Edu landing page)
- [x] 6. Update `sitemap.xml` with all three URLs
- [x] 7. Verify all pages, links, forms, WhatsApp buttons, responsive layout

