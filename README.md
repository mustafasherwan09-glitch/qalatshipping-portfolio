# Qalat Shipping — قەڵات شیپینگ

**Shop SHEIN, delivered by Qalat.** Static multi-page website for Qalat Shipping, an independent personal-shopping and shipping service in Erbil (not affiliated with SHEIN).

- Languages: Kurdish Sorani (default, RTL), Arabic (RTL), English (LTR). Switcher on every page, saved in `localStorage`, or link with `?lang=ku|ar|en`.
- Plain HTML/CSS/JS, no build step. Works on Cloudflare Pages, Netlify or GitHub Pages.
- No analytics, no cookies, no tracking pixels.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, trust strip, steps, price calculator, delivery fees, size guide, feedback, FAQ, Stay safe, location |
| `about.html` · `how-it-works.html` · `contact.html` | About us · How it works + SHEIN app guide · Contact (+ WhatsApp form, map) |
| `privacy.html` · `terms.html` · `shipping.html` · `returns.html` | Legal pages (permanent URLs, table of contents, print-friendly) |
| `404.html` | Not-found page |
| `assets/config.js` | **All business information** (phone, email, address, hours, rate, fees, prepayment rule, …) + size chart |
| `assets/i18n.js` | **All text** in ku / ar / en, including the full legal pages |
| `assets/main.js` | Language switching, calculator, WhatsApp links, legal-page rendering, map, animations |
| `assets/style.css` | Design |
| `robots.txt` · `sitemap.xml` | SEO |

## Things to do before going live

1. **Meta domain verification:** in every `.html` file, replace `PASTE_CODE_FROM_META` in `<meta name="facebook-domain-verification" …>` with your code from Meta Business Settings → Brand safety → Domains.
2. **Customer feedback:** the 3 cards on the home page are clearly marked placeholders (`fb.text`, `fb.name`, `fb.city` in `assets/i18n.js`). Replace them with real reviews only.

## Editing

- Change a number (rate, fee, hours, phone…) once in `assets/config.js` → every page and language updates.
- Change wording in `assets/i18n.js` (same key in `ku`, `ar` and `en`). Legal pages are the `"legal.privacy"`, `"legal.terms"`, `"legal.shipping"`, `"legal.returns"` objects; sections are numbered automatically.
- In texts, `{tokens}` such as `{rate}`, `{feeKRG}`, `{waLink}` are filled automatically from `config.js`.

## Hosting notes

- Canonical URLs use `https://www.qalatshipping.com/` with clean paths (`/privacy`, `/terms`, …). Cloudflare Pages, Netlify and GitHub Pages all serve `privacy.html` at `/privacy`.
- `CNAME` is only used by GitHub Pages. It currently contains `qalatshipping.com`; if you host on GitHub Pages and want `www` as the main address, change it to `www.qalatshipping.com`.

---

Qalat Shipping is an independent shopping and shipping service. We are not affiliated with, endorsed by, or partnered with SHEIN. SHEIN is a trademark of its respective owner.
