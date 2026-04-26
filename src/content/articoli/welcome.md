---
title: "Benvenuto nel tuo nuovo sito"
slug: "welcome"
date: "2026-04-25"
category: "Generale"
excerpt: "Questo è il primo articolo dimostrativo del template. Sostituiscilo con i tuoi contenuti reali una volta configurato il sito."
author: "Redazione"
readingTime: 3
tags: ["demo", "template", "guide"]
---

Benvenuto nel template Astro per siti multi-settore. Questo articolo è un segnaposto dimostrativo — verrà sostituito dai contenuti reali durante la fase di scaffolding del progetto.

## Come funziona il sistema dei contenuti

Gli articoli vivono nella cartella `src/content/articoli/` come file Markdown. Ogni file ha un frontmatter YAML che definisce i metadati:

- **title** — il titolo dell'articolo
- **date** — data di pubblicazione in formato ISO (YYYY-MM-DD)
- **category** — categoria principale
- **excerpt** — breve descrizione usata nelle anteprime e nei meta tag
- **tags** — elenco di tag per la classificazione

## Personalizzazione del sito

La configurazione del sito si trova in `src/site.config.ts`. Modifica questo file per cambiare:

- Nome e descrizione del brand
- Industria di riferimento (ristorazione, beauty, tech, servizi…)
- Palette colori e font
- Tono di voce
- Pagine abilitate

Il sistema di design si aggiorna automaticamente in base alle variabili CSS definite da `src/styles/theme.css`.

## Prossimi passi

1. Sostituisci `src/site.config.ts` con la configurazione del cliente
2. Aggiungi i contenuti reali in `src/content/articoli/` e `src/content/pages/`
3. Aggiorna le immagini nella cartella `public/`
4. Esegui `pnpm build` e verifica l'output in `dist/`

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
