# AI Crew Website — Project Memory

## What This Is
A static multi-page marketing website for **AI Crew**, a service arm of **Marketing Crew** (marketincrew.com). It showcases four AI-powered services and funnels all visitors to a free strategy call booking page.

**Owner:** Manan Mehta (manan.mehta@marketincrew.com)
**GitHub:** https://github.com/mananmehtamarketing/ai-crew-site
**Live URL:** Deployed on Vercel via mananmehta-7507's-projects team
**Vercel Project ID:** prj_K2gJwAUBY6EfofN7bkDOct0bMJ8r

---

## Site Structure

| File | URL | Purpose |
|------|-----|---------|
| index.html | / | Homepage |
| web-dev.html | /web-dev | AI Website Development service page |
| content-studio.html | /content-studio | AI Content Creation service page |
| automations.html | /automations | AI Automations service page |
| outreach.html | /outreach | AI Outreach service page |
| book-demo.html | /book-demo | Free Strategy Call booking page (main CTA target) |

Clean URLs are enabled via `vercel.json` (`cleanUrls: true`, `trailingSlash: false`) — no rewrites needed, Vercel serves `.html` files as clean paths automatically.

---

## Tech Stack

- **HTML/CSS/JS** — pure static, no build step
- **Tailwind CSS** — loaded via CDN (Play CDN), custom config inline in each page
- **Google Fonts** — Plus Jakarta Sans (headings) + Inter (body)
- **Material Symbols Outlined** — icon font
- **AOS (Animate on Scroll)** — loaded from unpkg CDN
- **No framework, no npm, no bundler** — edit HTML files directly and push

---

## Design System

### Colors (custom Tailwind config in every page)
```js
colors: {
  background: '#0b1326',      // dark navy — page background
  primary: '#aec6ff',         // periwinkle blue — headlines, accents
  secondary: '#ffbe2e',       // gold — highlights, badges
  tertiary: '#6ad9c3',        // teal — gradient accents
  surface: '#1a2340',         // card backgrounds
  'on-surface': '#e8ecf4',    // body text
  'on-surface-variant': '#8e909a', // muted text
}
```

### Key CSS Patterns
- `.glass-panel` — glassmorphism cards: `rgba(45,52,73,0.4)` background + `backdrop-filter: blur(12px)`
- `.ghost-border` — subtle card borders: `rgba(142,144,154,0.15)`
- Gradient text: `bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-transparent`

### Interactive Effects (on every page)
- **Cursor glow** — fixed radial gradient div that follows mouse via `requestAnimationFrame`
- **Canvas arrow animation** (index.html only) — draws dashed bezier curve from cursor to hero CTA button
- **AOS animations** — `data-aos="fade-up"` on most section elements, `duration: 800, once: true`

---

## Navigation (consistent across all pages)

Desktop nav links (in order):
1. AI Website Dev → /web-dev
2. AI Content Studio → /content-studio
3. AI Automations → /automations
4. AI Outreach → /outreach
5. Contact Us → mailto:hello@marketincrew.com
6. **Book a Demo** → /book-demo (primary CTA button, periwinkle fill)

Mobile nav: hamburger icon (hidden on desktop), `.mobile-nav` div toggled open/closed via JS. CSS is inline in each page's `<style>` block.

---

## Key Decisions Made

### Content & Messaging
- All tech jargon removed ("Neural Protocol", "Initialize Architecture", "Autonomic Growth Engine", etc.)
- Every CTA button funnels to `/book-demo` — one conversion goal
- Brand referred to as "AI Crew · An arm of Marketing Crew" throughout
- Copyright: © 2025 AI Crew · An arm of Marketing Crew
- Contact email: hello@marketincrew.com

### What Was Fixed (production polish commit)
- **Escaped quote bug** — all files had `\"` instead of `"` in HTML attributes, silently breaking Tailwind classes and AOS animations. Fixed with `sed -i 's/\\"/"/g'`
- Removed fake placeholder content: fake consultant bios (Dr. Elias Vance, Sarah Chen, Marcus Thorne), gray placeholder logo boxes, fictional testimonial from "Marcus Thorne, NeuraLink Systems"
- All dead CTA links (`href="#"`) replaced with real destinations
- "Marketin Crew" typo corrected to "Marketing Crew" across all pages
- Footer fixed site-wide with real service links and company links

### book-demo.html
- Hero: "Free Strategy Call" — 30 min, free, audit of marketing setup
- Form fields: First Name, Last Name, Work Email, Company, Service Interest (dropdown), Monthly Budget (dropdown)
- No real form backend yet — form submit has simulated 1.5s delay + success state
- Fake consultant section replaced with real stats (10×, 3.4×, 72%, 48h) + James S. testimonial

### automations.html (new page, created from scratch)
- Covers: Lead Capture → CRM, Email/SMS nurture, Social scheduling, Reporting dashboards
- Tech stack pills: Zapier, Make, n8n, HubSpot, ActiveCampaign, Airtable, OpenAI, Notion, Slack, Google Sheets, Mailchimp, Pipedrive
- 3-step process: Discovery & Mapping → Build & Connect → Monitor & Optimise

---

## Deployment Workflow

1. Edit HTML files directly in this folder
2. `git add . && git commit -m "description" && git push`
3. Vercel auto-deploys from GitHub (connected via mananmehta-7507's-projects team)
4. No build step — changes go live in ~30 seconds

**To check deployment status:** Use the Vercel MCP tools or visit https://vercel.com/mananmehta-7507s-projects/ai-crew-site

---

## What's Not Done Yet (potential next steps)
- Form backend for book-demo.html (Formspree, Netlify Forms, or webhook to CRM)
- Custom domain setup on Vercel
- Real client logos/testimonials in the trust section
- SEO meta tags beyond basic description (Open Graph, Twitter cards, structured data)
- Analytics (Google Analytics or Plausible)
- Privacy Policy / Terms of Service pages if required
