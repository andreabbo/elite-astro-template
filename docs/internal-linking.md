# Internal Linking Convention

Guide for pipeline agents generating per-site content using the elite-astro-template.

## Goal

Every page should have 2–4 contextually relevant internal links. Internal linking:
- Distributes PageRank across the site
- Improves crawlability for search bots
- Increases time-on-site by surfacing related content

## Rules

### Volume
- Static pages (home, chi-siamo, contatti, faq, galleria): 2–3 links
- Blog articles: 2–4 links to other articles or relevant static pages
- Never exceed 4 per page — avoid link stuffing

### Placement
- Prefer links within natural prose (inline anchors)
- Acceptable alternative: a small "related" note at the bottom of the article body, before the footer nav
- Never add a bullet-list of links with no prose context

### Anchor text
- Use descriptive, varied anchor text
- Never repeat the same anchor text across multiple links on the same page
- Avoid: "clicca qui", "leggi qui", "questo articolo"
- Prefer: title fragment, thematic phrase, or article topic paraphrase
  - Good: «come abbiamo analizzato nella [composizione di classe contemporanea](/blog/03-...)»
  - Bad: «[leggi qui](/blog/03-...)»

### Cross-linking logic (same-category articles)
Articles in the same `categoria` front-matter field should cross-link to each other.
When two articles share a thematic concept (even across categories), they may link bidirectionally.

Example mapping:
```
Storia ↔ Storia        (always cross-link within category)
Teoria ↔ Sociologia    (link when topic is class/labour)
Attualità ↔ Teoria     (link when topic is capital/value)
Ideologia ↔ any        (ideological critique links broadly)
```

### Static page targets
- chi-siamo: link to `/blog/`, `/galleria/`, one representative article
- faq: link to `/chi-siamo/`, `/contatti/`
- contatti: link to `/chi-siamo/`
- galleria: no outbound prose links needed (images are self-contained)
- home page: contextual prose links to `/chi-siamo/`, `/galleria/`, `/faq/`, `/contatti/` — placed in the "La rivista" teaser section

### Markdown syntax (in .md articles)
```markdown
Come abbiamo argomentato nell'analisi sulla [composizione di classe contemporanea](/blog/03-classe-operaia-21-secolo/), ...
```

### Astro syntax (in .astro pages)
```astro
<a href="/chi-siamo" class="text-accent hover:underline">leggi la nostra storia</a>
```

## Pipeline agent checklist

When generating content for a new site:

1. After writing all articles, build a cross-reference matrix: list each article's `categoria` and 2–3 thematic keywords.
2. For each article, identify 2–4 articles with overlapping categories or keywords.
3. Add a linking note at the bottom of each article body. Use `---` divider then an italic paragraph.
4. Add 2–3 static-page internal links following the rules above.
5. Verify: no link targets a non-existent slug. Check slugs against the `slug` field in front-matter.
6. Verify: anchor text is varied — no two links on the same page use identical text.
