# TODO — Neighborhood Hacks Website

## Critical (Before Launch)

- [ ] Replace all `[placeholder]` values in branding.md copy with real data (dates, prizes, URLs)
- [ ] Set real Discord invite URL in Navbar, Footer, Timeline, FAQ, Register, and Home page
- [ ] Set real Devpost event URL in Navbar, Footer, Home page, and Register page
- [ ] Set real social media URLs (Instagram, etc.) in Footer
- [ ] Fill in Code of Conduct page with actual policy content
- [ ] Fill in AI tools policy for FAQ answer
- [ ] Update `hello@neighborhoodhacks.org` contact email (or create the address)
- [ ] Add `<Head>` / metadata for SEO (title, description, OG image, favicon)
- [ ] Create and add a favicon (32x32 house/bracket logo per branding guide)
- [ ] Add OG/Twitter social share image

## High Priority

- [ ] Add scroll-to-top button for long pages (FAQ, Timeline)
- [ ] Add page transition animations (fade-in or slide-up on scroll)
- [ ] Add loading skeleton / splash screen while fonts load
- [ ] Make the hero background animated (subtle floating shapes or particles)
- [ ] Add a "Back to top" link in the footer
- [ ] Add proper meta descriptions per page for SEO
- [ ] Set up Vercel Analytics (free tier)
- [ ] Add Google Search Console verification

## Medium Priority

- [ ] Add a newsletter / email signup form (for updates before registration opens)
- [ ] Add a "Meet the Team" / "Organizers" page (Caleb, Kian, etc.)
- [ ] Add sponsor logos once confirmed — replace placeholder grids
- [ ] Add a "Past Events" or "Blog" section for future years
- [ ] Create an SVG version of the house/bracket logo (currently inline SVG)
- [ ] Add dark mode toggle (or confirm site is dark-only by design)
- [ ] Add keyboard navigation support for FAQ accordion
- [ ] Add a "Share on social" button on the homepage

## Low Priority / Nice to Have

- [ ] Add a countdown timer to the event on the homepage
- [ ] Add a "Who's参加ing" section showing participant count or map
- [ ] Add multilingual support (or at least a note about future i18n)
- [ ] Add a "Resources" page (workshops, mentor info, tools list)
- [ ] Add animated statistics on scroll (participants, countries, projects)
- [ ] Add a "Sponsor" form (Google Form or Typeform embed)
- [ ] Create a printable "Hackathon Guide" PDF for participants
- [ ] Add accessibility audit (axe-core or Lighthouse score > 90)

## Code Quality

- [ ] Set up ESLint config (currently using defaults from `next lint`)
- [ ] Add proper TypeScript strict mode
- [ ] Add unit tests for FAQ accordion toggle behavior
- [ ] Add E2E tests (Playwright) for critical user flows (register, nav links)
- [ ] Run Lighthouse audit and fix any performance/accessibility issues
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Add proper 404 page styling (currently uses Next.js default)

## Design Polish

- [ ] Review mobile nav — ensure it closes on route change
- [ ] Review all breakpoints — test on 320px, 768px, 1024px, 1440px
- [ ] Add hover states to all interactive elements
- [ ] Add focus-visible outlines for keyboard users
- [ ] Ensure consistent spacing/padding across all pages
- [ ] Add subtle animations to card hover states
- [ ] Test grain overlay performance on low-end devices

## Content

- [ ] Write real "Who we started this" story (currently placeholder from branding.md)
- [ ] Confirm all track descriptions are final
- [ ] Add real participant testimonials (after first event)
- [ ] Add press/media mentions section (after launch)
