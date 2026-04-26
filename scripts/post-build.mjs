import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Post-build step that aliases the Astro-generated `sitemap-index.xml`
 * to `sitemap.xml` so the canonical `/sitemap.xml` URL works.
 *
 * Both URLs return identical content (the sitemap index pointing to sitemap-0.xml).
 * `robots.txt` references `/sitemap.xml` as canonical.
 */

const root = resolve(import.meta.dirname, "..");
const indexPath = resolve(root, "dist/sitemap-index.xml");
const aliasPath = resolve(root, "dist/sitemap.xml");

if (!existsSync(indexPath)) {
  console.error(`✗ post-build: ${indexPath} not found — did @astrojs/sitemap run?`);
  process.exit(1);
}

copyFileSync(indexPath, aliasPath);
console.log(`✓ post-build: copied sitemap-index.xml → sitemap.xml (canonical alias)`);
