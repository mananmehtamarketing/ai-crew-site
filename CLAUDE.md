# AI Crew Website — Project Memory

## What This Is
A static multi-page marketing website for **AI Crew** — the AI studio for founders and professionals. From the makers of MarketinCrew.

**Owner:** Manan Mehta (manan.mehta@marketincrew.com)
**GitHub:** https://github.com/mananmehtamarketing/ai-crew-site
**Live URL:** ai-crew-marketing.vercel.app
**Vercel Project ID:** prj_vO3ZMiIWzuLikFc1VO4vGH8k56TU

## Latest Major Update (2026-05-05)

**Full v2 redesign:** dark theme → white/light theme. New positioning, mega menu, hero accordion, magnetic buttons, logo cloud, industries page, testimonial wall, footer SVG effect, discovery qualifier form. ICP expanded from founders-only to founders + lawyers + doctors + CAs + architects + agency owners + advisors.

**Tagline:** "The AI Studio for Founders & Professionals"
**Hero line:** "We step inside your universe and rebuild it with AI."

---

## Site Structure

| File | URL | Purpose |
|------|-----|---------|
| index.html | / | Homepage with hero accordion, 3 pillars, industries strip, testimonial wall |
| how-we-work.html | /how-we-work | 3-week engagement + 3 pillar deep dives |
| industries.html | /industries | 8 industries with stock photo per industry |
| case-studies.html | /case-studies | Featured case + 14 testimonial covers + 300+ wall |
| about.html | /about | Manan's story, photo, universe logos, testimonial wall, Built-with-AI section, IG CTA |
| book-demo.html | /book-demo | 5-step qualifier form (role → size → leaks → maturity+budget → contact) |
| web-dev.html | /web-dev | AI Websites service page (Pillar 03 sub) |
| content-studio.html | /content-studio | AI Content Studio service page (Pillar 02 sub) |
| outreach.html | /outreach | AI Outreach service page (Pillar 02 sub) |
| automations.html | /automations | AI Automations service page (Pillar 02 sub) |
| built-with-ai.html | /built-with-ai | **DEPRECATED** — redirects to /about (meta refresh + Vercel rule) |

---

## Tech Stack

- **HTML/CSS/JS** — pure static, no build step
- **Tailwind CSS** — loaded via CDN, custom config inline per page
- **Google Fonts** — Plus Jakarta Sans (headings), Inter (body), Instrument Serif (italic accent)
- **Material Symbols Outlined** — icon font
- **AOS** — Animate on Scroll, loaded from unpkg
- **simple-icons.org** — AI tool logos for the cloud runner

---

## Design System (white theme)

```js
colors: {
  "bg": "#FFFFFF",          // page background
  "bg-soft": "#F8F9FB",     // soft sections
  "bg-mute": "#F1F4FA",     // hover states
  "ink": "#0B1326",         // primary text + buttons
  "ink-soft": "#3A4256",    // secondary text
  "ink-mute": "#6B7280",    // muted labels
  "border": "#E5E7EB",
  "border-soft": "#F0F2F5"
}

// Gradient (used as accent on text + select buttons + logo)
linear-gradient(135deg, #aec6ff 0%, #6ad9c3 50%, #ffbe2e 100%)
```

### Key CSS classes
- `.grad-text` — gradient text fill (logo, key headlines)
- `.grad-bg` — gradient background (CTAs, accents)
- `.glass-light` — translucent white glass with blur (nav, overlays)
- `.glass-card` — white card with hover lift + gradient border
- `.mag-btn` — magnetic button (transforms toward cursor on hover)
- `.testi-card` — testimonial cover hover lift
- `.industry-tile` — industry image with gradient overlay + scale on hover
- `.footer-svg-grad` — gradient SVG text outline (footer floating "AI CREW")

---

## Navigation (consistent across all pages)

Desktop nav:
1. **AI Services** (mega menu trigger) — opens panel with 3 pillars + sub-services + industries + featured case
2. Industries → /industries
3. Case Studies → /case-studies
4. About → /about
5. **Book a Call** → /book-demo (CTA button, dark fill)

Mobile nav: hamburger triggers slide-down panel.

---

## Image Assets (in /images/)

- **stock/** (10 photos, ~150KB each) — Indian-context business photos
  - hero.jpg, founder.jpg, team.jpg, professional.jpg, tech.jpg, healthcare.jpg, legal.jpg, finance.jpg, architect.jpg, creative.jpg
- **testimonials/** (14 covers, ~70KB each) — MarketinCrew client work covers
  - dr-sheths, ls-chemicals, yoga, coffee-with-strangers, inventure, rolling-pin, silla, rm, ceque, debs, debs-street-food, elam-vital, gut-health, we-do-things
- **universe/** (5 logos) — MarketinCrew + Studio + Podcast + Lyon Marketing
- **me/** (1 photo) — manan.jpg

All compressed (originals were 122MB, now 3.6MB).

---

## Deployment

```bash
cd "/Users/mananmehta/Desktop/Claude/MMM Brain/AI Crew/03-Website-Dev/ai-crew-site"
find .git -name "*.lock" -delete
git add -A
git commit -m "describe changes"
git push origin main
```

Vercel auto-deploys from GitHub if linked, OR run `npx vercel --prod` to deploy directly from the folder.

---

## Open items for v3

- Wire each testimonial cover to its individual Instagram post URL (currently all link to Manan's profile as placeholder)
- Connect book-demo form backend (Formspree, HubSpot, or webhook to CRM)
- Real Calendly link in book-demo success state (currently shows email auto-reply message)
- Add geo pages (/india, /europe, /us) when ready to localise
- Insights/Blog stub for SEO content engine
- Real client logos in nav mega menu featured slot
