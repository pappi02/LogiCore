# LogiCore Website TODO

Implementation tracker derived from the design spec and build requirements (Vite + React + TS).

## Foundation
- [ ] Install dependencies (npm install) and verify Node PATH.
- [ ] Configure ESLint/Prettier and run `npm run lint` once code is in place.
- [ ] Add base assets: favicon/logo placeholders, shared illustrations.

## Design System & Layout
- [ ] Define tokens (colors, typography, spacing, radii, shadows, breakpoints, motion durations) in a central file.
- [ ] Add global styles (reset, body background, container widths, section spacing, grid utilities, focus styles, reduced-motion handling).
- [ ] Create layout primitives: `PageShell`, `Header` (sticky, scroll background), `Footer`, `Section`, `Grid`, `CTAButton`, `Card`.
- [ ] Implement floating WhatsApp widget with configurable number/message and page-aware prefill.

## Navigation & Routing
- [ ] Set up React Router with pages: Home, About, Services, Portfolio, Why Us, Contact (and placeholders for future Blog/Testimonials/Team).
- [ ] Implement sticky header with active link styles, mobile menu (overlay/slide), primary CTA “WhatsApp Us”.
- [ ] Ensure footer links map to routes/sections.

## Pages (per spec)
- [ ] Home: Hero (headline, subtext, CTA, background), Services snapshot cards (3–5), Who We Serve grid, Why LogiCore highlights, CTA stripe.
- [ ] About: Company overview, Mission/Vision two-column, Our Approach stepper (Discovery→Support).
- [ ] Services: Reusable service blocks (title, description, problems solved, who it’s for, value delivered) with alternating layout.
- [ ] Portfolio/Case Studies: Cards/list with title, client type, challenge, solution, technologies, outcome; support demo/concept tag.
- [ ] Why Choose Us: Pillars (Client-Focused, Modern Tech, Clear Communication, Scalable Architecture, Long-Term Partnership) as icon+text blocks.
- [ ] Contact: Primary WhatsApp CTA, email/hours/region, optional contact form (name/email/message) with basic validation; reiterate WhatsApp-first.

## Content & Assets
- [ ] Seed all sections with meaningful placeholder copy aligned to the brand tone (modern, tech-driven, corporate).
- [ ] Add placeholder logo SVG and lightweight illustration/background shapes for hero/CTA bands.
- [ ] Wire WhatsApp number/message into a single config used by header/footer/floating widget/contact page.

## UX, Performance, SEO
- [ ] Mobile-first responsiveness for all grids/sections; verify touch targets and focus states.
- [ ] Add lazy loading where appropriate (non-critical imagery), code-split by route.
- [ ] Add meta titles/descriptions per route, Open Graph defaults, and semantic landmarks.
- [ ] Run a11y pass for color contrast and keyboard navigation basics.

## Testing & Delivery
- [ ] Run lint/build to ensure clean output.
- [ ] Document run/build instructions in README; note environment variables (WhatsApp number/message).
- [ ] Final review against design spec and TODO, then mark items done.

