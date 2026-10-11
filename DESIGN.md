---
name: ICS – Integrated Care Solutions
description: Owner-led back-office services (data entry, accounting, backend processing), presented as a precise, ordered corporate services site.
colors:
  crimson: "#a3162d"
  crimson-dark: "#84101f"
  crimson-tint: "#fbeef0"
  ink: "#16181d"
  ink-2: "#3a3e46"
  muted: "#5b606a"
  line: "#e3e2dd"
  line-strong: "#cfcdc6"
  surface: "#f5f4f0"
  white: "#ffffff"
  charcoal: "#17191f"
  charcoal-2: "#23262e"
  on-dark: "#f3f2ee"
  on-dark-muted: "#b4b6bd"
  ok: "#1f7a4a"
  ok-tint: "#e7f3ec"
  whatsapp: "#1fa855"
typography:
  display:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 3.6vw, 4.25rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.028em"
  title:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.35
  data:
    fontFamily: "'Archivo Variable', Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.35
    fontFeature: "tnum"
rounded:
  xs: "4px"
  sm: "8px"
  tab: "10px"
  md: "12px"
  frame: "14px"
  lg: "16px"
  pill: "999px"
spacing:
  gutter-mobile: "16px"
  gutter: "32px"
  container: "1240px"
  section-y: "clamp(4.5rem, 9vw, 8rem)"
  section-head-gap: "clamp(2.5rem, 5vw, 4rem)"
  header-h-mobile: "72px"
  header-h: "84px"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.crimson-dark}"
    textColor: "{colors.white}"
  button-primary-lg:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.7rem"
    height: "56px"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.crimson}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.4rem"
  button-white-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1rem"
    height: "52px"
  service-tab-active:
    backgroundColor: "{colors.crimson-tint}"
    textColor: "{colors.crimson}"
    rounded: "{rounded.tab}"
    padding: "1rem 1.1rem"
  pill-verified:
    backgroundColor: "{colors.ok-tint}"
    textColor: "{colors.ok}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.55rem"
  chip-sector:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "clamp(2rem, 4vw, 3.5rem)"
  band-dark:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-dark}"
  band-cta:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.white}"
---

# Design System: ICS – Integrated Care Solutions

## Overview

**Creative North Star: "The Letterhead, Kept Straight"**

ICS is the category standard for a corporate services site, played without quirk at the craft level of Infosys BPM and Wipro. Authority comes from order: a white ground, charcoal ink, a single crimson drawn from the company letterhead, a grotesque used for every word, and structure doing the work that invented proof would do elsewhere. The page reads like a well-kept business document: a thin crimson rule under the header and over the footer, sections stacked in a predictable rhythm, numbers set in tabular figures.

Density is moderate and calm. Sections breathe on a fluid vertical rhythm, content sits in a 1240px container, and the composition alternates white, warm off-white surface, one deep charcoal band (process) and one crimson band (call to action). Depth is soft and ambient, reserved for the objects that matter (the hero register, the enquiry form, primary buttons). Motion is one authored grammar, an exponential ease-out, spent on a few meaningful moments rather than sprinkled on scroll.

The logo is a fixed brand asset recreated from the letterhead, not a typographic choice: traced vector paths for the heavy condensed ICS, a thin dark-red rule, and "Integrated / Care / Solutions" stacked in Archivo at 88% width.

**Key Characteristics:**
- White ground, charcoal ink, one crimson used sparingly and meaningfully.
- One family (Archivo Variable, with width axis) for all text, tight negative tracking on headings.
- Thin crimson rules as the letterhead echo: header bottom, footer top, scroll progress, process rail.
- Soft, ambient shadows; flat everywhere else, separated by 1px warm hairlines.
- One authored line-icon set on a 24px grid, single stroke, rendered in ink or muted.
- Exponential ease-out motion with reduced-motion fully respected.

## Colors

A restrained corporate palette: warm-neutral greys and charcoal carry the page, one letterhead crimson carries the brand, and a single green carries verification.

### Primary
- **Letterhead Crimson** (crimson): the brand mark, primary actions, active service tab, text links and arrow links, the focus ring, text selection, and the letterhead rules (header bottom border, footer top border, scroll progress bar, process rail fill and reached step dots). Also the full-bleed CTA band.
- **Oxblood** (crimson-dark): the logo's vertical rule and the hover state of primary buttons.
- **Crimson Blush** (crimson-tint): the sliding marker behind the active service tab only.

### Secondary
- **Ledger Green** (ok): verified and success states only (Verified pills, the live "Processing" pulse, check marks in service inclusions, form-sent confirmation).
- **Ledger Green Tint** (ok-tint): the background of verified pills and the success icon disc.
- **WhatsApp Green** (whatsapp): the floating WhatsApp button only; it is a third-party brand color, not a system accent.

### Neutral
- **Charcoal Ink** (ink): headings, body text on light, outline-button hover border, accordion glyph strokes, decorative icons in tiles.
- **Graphite** (ink-2): navigation links, hero lede, secondary body copy, service tab text at rest.
- **Slate Muted** (muted): ledes, supporting text, labels, metadata, decorative icons in lists and controls.
- **Warm Hairline** (line): 1px dividers, card and panel borders, list separators.
- **Warm Hairline Strong** (line-strong): input and outline-button borders, contact list dividers, table header rule.
- **Paper Stone** (surface): alternate section ground (contact), service detail panel, icon tiles, sector chips, register header bar.
- **White** (white): primary page ground and raised objects.
- **Night Charcoal** (charcoal) and **Charcoal Raised** (charcoal-2): the utility bar and the process band.
- **On-Dark** (on-dark) and **On-Dark Muted** (on-dark-muted): text and secondary text on charcoal.

### Named Rules
**The Reserved Crimson Rule.** Crimson means brand, action, active, link or letterhead rule. It never decorates an icon, a bullet or a background texture. Decorative icons are ink or muted.

**The Green Means Verified Rule.** Success and verification use Ledger Green, never crimson. Crimson is not a status color for "done".

## Typography

**Display Font:** Archivo Variable (self-hosted via @fontsource-variable/archivo with the wdth axis), falling back to Archivo, system-ui, Segoe UI, Roboto, Arial.
**Body Font:** the same family.

**Character:** a single sturdy grotesque used at every level, made authoritative by weight (400 to 750) and tight negative tracking on headings rather than by a second face. Numbers in registers, contacts and the footer use tabular figures.

### Hierarchy
- **Display** (750, clamp 2.6rem to 4.25rem, 1.02): the hero headline only; one phrase may be set in crimson.
- **Headline** (700, clamp 2rem to 3.25rem, 1.08): section titles and the CTA band title, balanced wrapping.
- **Title Large** (700, clamp 1.75rem to 2.5rem, 1.1): the active service's title in the detail panel.
- **Title** (650, 1.25rem to 1.3rem, 1.25 to 1.3): process steps, Why ICS points, sector block heading.
- **Lede** (400, clamp 1.0625rem to 1.2rem, 1.6): section ledes in muted, max 62ch; the hero lede runs larger (to 1.3rem) in graphite.
- **Body** (400, 1.0625rem, 1.6): running text, max 52 to 56ch in content blocks.
- **Label** (600, 0.75rem to 0.9375rem): form labels, contact list terms, table headers, register labels. Sentence case, no tracking, no uppercase.
- **Data** (400 to 600, 0.75rem to 0.8125rem, tabular figures): register references and amounts, phone numbers, footer base line.

### Named Rules
**The One Family Rule.** Every word on the site is Archivo. Weight and tracking create hierarchy; no second display face. The logo is an asset, not a type style.

**The Sentence-Case Label Rule.** Labels are sentence case at 600 weight. There are no uppercase tracked labels above headings.

## Layout

A centered container (1240px max) with a 16px gutter on mobile, 32px from 720px. Sections use a fluid vertical rhythm (section-y) and open with a section head capped at 760px, followed by a fluid gap before content. The header is sticky at 72px mobile, 84px from 720px, under a 38px charcoal utility bar (address hides below 640px).

Responsive structure is two-column at desktop and single-column mobile-first: hero splits copy 1fr to visual 1.15fr from 1024px; Why ICS and Contact split roughly 0.95/1.05 and 0.9/1.1 from 960px with a sticky left column; services become a sticky 340px tab list beside a detail panel from 960px and an accordion below; the process becomes a four-column horizontal rail from 900px and a vertical rail below; the footer runs 1, 2 then 4 columns (720px, 1024px).

Section grounds alternate in a fixed order: white hero and services, charcoal process, white Why ICS, crimson CTA band, Paper Stone contact, white footer.

## Elevation & Depth

Flat by default, with soft ambient shadows reserved for objects a visitor should treat as real: the hero register and the enquiry form (large shadow), service icon tiles (standard shadow), primary buttons (a crimson-tinted shadow) and the header once scrolled. Everything else separates by 1px warm hairlines and tonal grounds (white against Paper Stone against charcoal). Shadows are always diffuse, negatively spread and low opacity; never hard or offset.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 1px 2px rgba(22, 24, 29, 0.06), 0 12px 32px -12px rgba(22, 24, 29, 0.18)`): small raised tiles such as the service detail icon.
- **Ambient Large** (`box-shadow: 0 2px 4px rgba(22, 24, 29, 0.05), 0 30px 60px -24px rgba(22, 24, 29, 0.3)`): the hero register and the enquiry form card.
- **Crimson Lift** (`box-shadow: 0 1px 2px rgba(132, 16, 31, 0.3), 0 8px 20px -10px rgba(163, 22, 45, 0.7)`): primary buttons; deepens on hover.
- **Header Scrolled** (`box-shadow: 0 10px 30px -18px rgba(22, 24, 29, 0.35)`): sticky header after scroll.

### Named Rules
**The Earned Shadow Rule.** Only the register, the form, primary buttons, icon tiles and the scrolled header cast shadows. Panels, cards and lists stay flat with hairlines.

## Shapes

Gently rounded throughout, scaled by object size: 8px for buttons, inputs, menu toggle and register documents; 10px for service tabs; 12px for contact cards and icon tiles; 14px for the hero register frame and large icon tiles; 16px for the service panel, sector block and form card; full pills for status pills and sector chips; circles for step dots, the contact monogram and the WhatsApp button. Borders are 1px hairlines on containers and 1.5px on interactive controls. The hero strip uses small ink diamonds (7px squares rotated 45 degrees) as list markers.

## Components

### Buttons
Confident and solid, never decorated.
- **Shape:** gently rounded (8px), 48px minimum height, 56px for the large variant, 600 weight, icon leading with a 0.55rem gap.
- **Primary:** crimson ground, white text, Crimson Lift shadow; hover to Oxblood with a deeper shadow; press nudges down 1px.
- **Outline:** white ground, ink text, 1.5px strong hairline border; hover darkens the border to ink.
- **On crimson band:** a white button with crimson text (hover inverts to ink ground, white text) and a ghost button with a 55% white border (hover adds a 12% white wash).
- **Transitions:** 0.25s on the shared ease.

### Links
- **Arrow link:** crimson, 600 weight, arrow icon slides 4px right on hover.
- **Inline links:** inherit color, gain crimson and an underline at 3px offset on hover.
- **Navigation links:** graphite, 500 weight; a 2px crimson underline wipes in from the left on hover and out to the right.

### Chips and Pills
- **Verified pill:** Ledger Green on its tint, full pill, 0.75rem 600, leading check icon; springs in when a row verifies.
- **Waiting pill:** dashed strong hairline border, muted text ("Entering", "Checking").
- **Sector chip:** Paper Stone ground, 1px hairline, full pill, 500 weight.

### Cards / Containers
- **Corner Style:** 12px to 16px by size.
- **Background:** white for raised objects, Paper Stone for panels and tiles.
- **Shadow Strategy:** see Elevation; most containers are flat.
- **Border:** 1px Warm Hairline.
- **Internal Padding:** fluid, clamp(1.5rem to 3.5rem) for panels and the form card.

### Inputs / Fields
- **Style:** white ground, 1.5px strong hairline, 8px radius, 52px minimum height (textarea 120px), 600-weight label above.
- **Hover:** border darkens one step.
- **Focus:** border turns crimson with a 4px crimson halo at 14% opacity.
- **Error:** crimson border, faint warm fill, crimson message at 0.875rem 500.
- **Select:** custom chevron drawn as a 2px ink corner.

### Navigation
Utility bar in charcoal (address, phone, WhatsApp) above a sticky white header with the logo left, text links right and a primary "Get a quote" button. Below 960px the links collapse to a 48px bordered toggle that opens a full-height white menu with 1.5rem 600 links divided by hairlines and stacked actions.

### Signature: Work Register
The hero's one authored moment: a framed register (14px radius, Ambient Large) with a Paper Stone title bar and a green pulsing "Processing" indicator. An "Incoming" document queue feeds a table whose new rows flash a faint crimson wash, type the party name in by a linear clip, move from Entering to Checking and spring a Verified pill. A thin crimson progress bar fills beneath, captioned "Sample data for illustration". Under reduced motion it renders as a static, fully verified table.

### Signature: Services Explorer
At desktop a sticky vertical tablist with a Crimson Blush marker that slides between tabs (shared layout) and a detail panel that crossfades with a slight rise and blur (0.4s). Below 960px it becomes an accordion with a plus that rotates to minus. Full arrow-key, Home and End support.

### Signature: Process Rail
Four numbered steps on the charcoal band joined by a 2px rail. The crimson fill draws along the rail with scroll (spring-smoothed), and each step dot fills crimson as it is reached. Horizontal from 900px, vertical below; fully drawn under reduced motion.

### Motion
- **Ease:** exponential ease-out, cubic-bezier(0.16, 1, 0.3, 1), shared by CSS and motion components.
- **Entrances:** hero copy rises 24px in sequence (0.9s); the register reveals with a clip from 8%. Content below the fold is visible by default; no scroll-triggered fade-ins.
- **Reduced motion:** all transitions and animations collapse, smooth scroll is disabled, and every signature component shows its finished state.

## Do's and Don'ts

### Do:
- **Do** keep crimson to brand mark, primary action, active state, links and the letterhead rules (header bottom, footer top, scroll progress, process rail).
- **Do** use Ledger Green for verified and success states.
- **Do** draw icons from the one authored line set (24px grid, single stroke, round joins) and render decorative icons in ink or muted.
- **Do** use the logo component and its traced paths exactly as built; the favicon reuses the same paths.
- **Do** set numbers in tabular figures wherever they align or update.
- **Do** use the shared exponential ease-out and honor reduced motion with a finished, static state.

### Don't:
- **Don't** add section-number counters or numbered section prefixes.
- **Don't** add decorative grid, line or dot textures to grounds.
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** introduce a second display typeface or redraw the logo in live type.
- **Don't** use hard or offset shadows; depth stays soft and ambient.
- **Don't** show invented proof as design elements (stat counters, client logo strips, testimonial cards).
