# Page Design Spec (Desktop-first)

## Global Styles
- **Theme approach**: Tailwind `darkMode: 'class'`; dark theme is enabled by `document.documentElement.classList.add('dark')`.
- **Core tokens (from Tailwind config)**
  - Primary: `primary-500 #0ea5e9`, `primary-600 #0284c7`, `primary-700 #0369a1`
  - Dark surfaces: `dark-bg #0f172a`, `dark-card #1e293b`, text `dark-text #f1f5f9`
  - Font: `Inter` (sans)
- **Interaction states**
  - Buttons: solid primary gradient for primary CTA, subtle scale on hover/tap.
  - Links: slate → primary on hover.
- **Responsive behavior**
  - Desktop-first layout targets `max-w-7xl` container.
  - Breakpoints: stacked sections on mobile; navbar collapses to hamburger below `md`.

## Meta Information
- Title: `Quonain Ejaz | Full Stack Developer`
- Description: from `metadata.json` (“Professional portfolio…”) and/or existing page copy.
- Open Graph (SSR target): title/description + a share image (optional, keep existing if present).

---

## Page: Portfolio (Single Page, /)

### Layout
- **Primary layout system**: stacked vertical sections with consistent container width (`max-w-7xl`) and generous vertical spacing (`py-*`).
- **Navigation**: fixed top navbar (`position: fixed; z-index high`) with scroll progress indicator.

### Page Structure
1. Fixed Navbar
2. Main content sections:
   - Hero
   - About
   - Experience
   - Skills
   - Projects
   - Contact
3. Footer

### Sections & Components

#### 1) Navbar
- **Desktop**: inline nav links to anchors (`#about`, `#experience`, `#skills`, `#projects`, `#contact`), plus:
  - Theme toggle (moon/sun)
  - Resume action (download/print)
- **Mobile**: hamburger menu opens dropdown; same anchor links and resume action.
- **Scroll states**: transparent at top; adds blurred backdrop + border/shadow after scrolling.
- **SSR notes**: anchor scroll and `window.scrollTo` must run only after hydration (event-driven, client-only).

#### 2) Hero
- Full-width intro area emphasizing name/brand and primary role.
- Strong typographic hierarchy (large heading, supporting text, CTA-style elements if present).

#### 3) About
- Section anchor id: `about`.
- Card/stack layout for biography and highlights.

#### 4) Experience
- Section anchor id: `experience`.
- Timeline/cards describing roles, companies, durations, and key bullet achievements.

#### 5) Skills
- Section anchor id: `skills`.
- Grid/list of skill groups; consistent iconography and spacing.

#### 6) Projects
- Section anchor id: `projects`.
- Card grid showcasing projects with images from `/public/projects/*`.
- Hover states: subtle elevation/transform; maintain readability in dark mode.

#### 7) Contact
- Section anchor id: `contact`.
- Two-column on desktop:
  - Left: contact info cards (email/phone/location)
  - Right: contact form (name/email/subject/message) with validation + submit states.
- **SSR notes**: EmailJS runs only in the browser; on server render, form displays normally.

#### 8) Footer
- Simple closing area with secondary links/info.

---

## SSR-Specific UX Guidance (must preserve current UI)
- Ensure the SSR HTML matches the initial React tree to avoid hydration warnings.
- Prevent dark-mode flash by setting the theme class before hydration (inline script in template).
- Keep animations progressive-enhancement: server renders static layout; motion activates after hydration.
