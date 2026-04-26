# elite-astro-template

**Per-site template used by the elite-pipeline Stage 5 (Scaffold). Do not deploy this repo directly — it is the canonical source only.**

Built with Astro 6 + Tailwind 3 + TypeScript strict. Static output. Designed for Cloudflare Pages.

---

## How the pipeline consumes this template

1. Clone this repo into the new site's directory.
2. Overwrite `src/site.config.ts` with the client-specific configuration.
3. Inject content into `src/content/articoli/` (blog posts) and `src/content/pages/` (static pages) as Markdown files.
4. Replace favicons in `public/` and update `robots.txt` with the real domain.
5. Run `pnpm install && pnpm build`.
6. Deploy `dist/` to Cloudflare Pages.

---

## File structure

```
elite-astro-template/
├── src/
│   ├── site.config.ts          ← Pipeline overwrites this per-client
│   ├── content.config.ts       ← Astro 6 content collection schemas
│   ├── content/
│   │   ├── articoli/           ← Blog posts (Markdown)
│   │   └── pages/              ← Static pages: faq.md, chi-siamo.md
│   ├── lib/
│   │   ├── site-config.ts      ← SiteConfig interface + defineSiteConfig helper
│   │   ├── seo.ts              ← buildTitle, buildOgImage helpers
│   │   └── schema.ts           ← Schema.org JSON-LD generators
│   ├── components/
│   │   ├── Header.astro        ← Config-driven nav
│   │   ├── Footer.astro        ← NAP + social + mini-sitemap
│   │   ├── Hero.astro          ← 4 style variants
│   │   ├── ArticleCard.astro   ← Blog post card
│   │   ├── LeadForm.astro      ← mailto: contact form with honeypot
│   │   ├── WhatsAppButton.astro ← Sticky FAB (conditional)
│   │   ├── ClickToCall.astro   ← tel: link (conditional)
│   │   ├── CookieBanner.astro  ← GDPR cookie consent (conditional)
│   │   ├── ThemeToggle.astro   ← Dark/light toggle (conditional)
│   │   ├── SchemaJsonLd.astro  ← JSON-LD <script> emitter
│   │   ├── CTAStrip.astro      ← Full-width CTA band
│   │   └── Section.astro       ← Consistent vertical spacing wrapper
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← Root HTML, meta, OG, fonts, JSON-LD
│   │   ├── PageLayout.astro    ← Page wrapper with breadcrumb
│   │   └── ArticleLayout.astro ← Article body with schema + TOC slot
│   ├── pages/
│   │   ├── index.astro         ← Home: Hero + featured articles + CTA
│   │   ├── chi-siamo.astro
│   │   ├── galleria.astro
│   │   ├── faq.astro
│   │   ├── contatti.astro
│   │   ├── 404.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       ├── theme.css           ← CSS custom properties + style variants
│       └── global.css          ← Tailwind + base resets + article prose
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Config schema reference

See `src/lib/site-config.ts` for the full `SiteConfig` interface.

Key fields in `src/site.config.ts`:

| Field | Description |
|---|---|
| `name` | Brand name shown in header, footer, meta |
| `tagline` | Short subtitle shown in Hero |
| `description` | 1-2 sentence meta description |
| `domain` | Bare domain (`example.it`), no `https://` |
| `industry` | One of: `ristorazione`, `beauty`, `tech`, `servizi`, `ecommerce`, `turismo`, `salute`, `educazione`, `altro` |
| `language` | BCP 47 language code, default `"it"` |
| `address` | `{ street, city, postalCode?, country }` |
| `phone` | E.164 format, e.g. `"+39 02 1234567"` |
| `email` | Contact email |
| `whatsapp` | E.164 phone for WhatsApp FAB |
| `social` | `{ instagram?, facebook?, linkedin?, youtube?, twitter? }` |
| `design.style` | `"editorial"` \| `"modern"` \| `"elegant"` \| `"bold"` |
| `design.palette` | `{ primary, accent, background }` — hex values |
| `design.fontPairing` | `{ display, body }` — Google Font names |
| `design.darkMode` | `"auto"` (system) \| `"always"` \| `"never"` |
| `voice` | `{ tone: 1-5, traits, avoidWords?, brandKeywords? }` |
| `pages` | Enable/disable individual pages |
| `leadCapture` | `{ form, phone, whatsappButton }` |
| `gdpr.cookieBanner` | Show/hide cookie consent banner |

---

## Style variants

Set `design.style` in `site.config.ts` to one of:

- **`editorial`** — Narrow prose (720px max), drop caps on first article paragraph, large headline, no hero image on home.
- **`modern`** — Asymmetric two-column layout, tighter line-height (`1.5`), letter-spacing `-0.02em`, wider content max (900px).
- **`elegant`** — Centered serif typography, extra letter-spacing (`0.04em`), generous vertical padding, subtitle-centered layout.
- **`bold`** — Full-bleed hero image with overlay, widest content max (1100px), heavy font-weight (`font-black`) on headings.

The style attribute is set on `<html data-style="...">` by `BaseLayout.astro`. All CSS overrides live in `src/styles/theme.css`.

---

## Adding a new page

1. Create `src/pages/new-page.astro`.
2. Import `PageLayout` or `BaseLayout`.
3. Add the page slug to the `pages` key in `SiteConfig` in `src/lib/site-config.ts`.
4. Add the nav item logic in `src/layouts/BaseLayout.astro` where `navItems` is built.

If the page should be conditionally disabled:
```astro
if (!config.pages.myPage) {
  return Astro.redirect("/");
}
```

---

## Overriding a component per-site

Components are generic and config-driven. If a per-site repo needs a custom variant:

1. Copy the component file from the template into the per-site repo at the same path (`src/components/Header.astro`).
2. Modify it in isolation — it won't be affected by future template updates.
3. Keep the same props interface to stay compatible with the layouts.

---

## Extending Schema.org per industry

`src/lib/schema.ts` exports `organizationSchema()` which picks the correct `@type` based on `config.industry`:

| industry | Schema.org type |
|---|---|
| ristorazione | `["Restaurant", "LocalBusiness"]` |
| beauty | `["BeautySalon", "LocalBusiness"]` |
| salute | `["MedicalBusiness", "LocalBusiness"]` |
| educazione | `EducationalOrganization` |
| turismo | `TravelAgency` or `LodgingBusiness` (via `subCategory`) |
| tech, servizi, ecommerce, altro | `Organization` |

To add industry-specific schema properties:
1. Add a conditional block in `organizationSchema()` checking `config.industry`.
2. Merge the extra fields into the base object before returning.

---

## Disabled pages behavior

Pages that are disabled in `config.pages` call `Astro.redirect("/")` at the top of their frontmatter. The route still exists in the Astro source but redirects immediately — this avoids 404s from external links while keeping the pipeline's file structure consistent.

---

## Tailwind theme tokens

All design tokens map to CSS custom properties so they work without Tailwind:

```ts
// tailwind.config.ts
colors: {
  primary: "var(--color-primary)",
  accent:  "var(--color-accent)",
  fg:      "var(--color-fg)",
  muted:   "var(--color-muted)",
  divider: "var(--color-divider)",
}
```

To verify: change `design.palette.accent` in `site.config.ts` and rebuild. All accent-colored elements update automatically.
