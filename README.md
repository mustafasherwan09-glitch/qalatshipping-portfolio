# Qalat Shipping — قەڵات شیپینگ

**Shop SHEIN, Delivered by Qalat** — landing site for Qalat Shipping, a SHEIN shopping & delivery service for all of Iraq and Kurdistan.

One self-contained `index.html` (HTML + CSS + vanilla JS, no build step). Languages: Kurdish Sorani (default, RTL), Arabic (RTL), English (LTR).

## Editing

| What | Where in `index.html` |
| --- | --- |
| Exchange rate, delivery days, phone, Instagram numbers, Google Maps link | `CONFIG` object at the very top |
| Size chart (cm) | `SIZE_CHART` right below `CONFIG` |
| Customer reviews (real ones only) | `REVIEWS` right below `SIZE_CHART`; the cards appear automatically once you add entries |
| All texts (ku / ar / en), offers, FAQ, WhatsApp messages | `I18N` object near the end of the file |

- Anything written in `[square brackets]` is a placeholder and is highlighted on the page — replace it with your real info.
- Map: paste your Google Maps share link into `CONFIG.mapLink`. For a live embedded map, also paste the `src` from Google Maps → Share → *Embed a map* into `CONFIG.mapEmbed`.
- Link to a specific language: `?lang=ku`, `?lang=ar`, `?lang=en`.

## Assets

- `assets/logo-192.jpg`: header logo and favicon
- `assets/logo-512.jpg`: structured-data logo
- `assets/og-image.jpg`: social sharing preview (1200×630)

## Deploy (GitHub Pages)

Settings → Pages → Source: *Deploy from a branch* → `main` / root.
Custom domain: `https://qalatshipping.com` (see `CNAME`).
If the domain changes, update the URLs in the `<head>` (canonical, hreflang, og:url, og:image, JSON-LD).

---

Qalat Shipping is an independent shipping service and is not affiliated with SHEIN.
