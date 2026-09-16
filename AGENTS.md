# Me — Personal CV site — Rules

## Gold Rules

### Gold Rule 1 — One-page A4 print is the primary function
This repo exists to be the owner's online CV. Its **primary function** is that pressing `Ctrl+P` (print to PDF) produces a document that fills **exactly one A4 page** as well as possible: no clipping, no overflow to page 2, and no large empty gaps.

**Rules:**
- All print-specific tuning lives in `src/styles/print.css` (`@media only print`). Screen styles stay in `global.css`.
- After ANY content change that affects height (new roles, bullets, sections, longer text), verify the printed output still fits one A4 page before considering the task done.
- **Verification:** build (`npx astro build`), serve `dist/`, render in a browser, and export to PDF. It must be exactly 1 page. Estimate fit by applying the print stylesheet at 190mm (~719px) content width and comparing document height against the printable area (~1047px at 96dpi with 10mm page margins).
- To fit one page, prefer in this order: (1) tighten line-height / font-size / margins in `print.css`, (2) tighten spacing between sections, (3) shorten content — never clip content silently with `overflow: hidden`.
- If the page has slack, relax spacing/typography slightly so the page looks full rather than cramped at the top with an empty bottom.
- Keep `page-break-inside: avoid` on sections so nothing splits across pages.

### Gold Rule 1b — LinkedIn ↔ CV coherence
LinkedIn and this repo are two views of the same profile. **Whenever the agent modifies one, it must apply the equivalent change to the other** — no exceptions, no partial sync.

**Rules:**
- Changing LinkedIn (headline, about, experience, skills, dates, titles) → update this repo to match.
- Changing this repo (content, roles, descriptions, summary) → update LinkedIn to match (via the `polish` flow / browser automation).
- Same language, same dates, same role titles, same bullet content in both.
- After syncing, verify both sides: LinkedIn via the experience details page, this repo via the one-page A4 print check (Gold Rule 1).

### Gold Rule 2 — SEO matters
The site must stay discoverable and indexable as a professional CV.

**Rules:**
- Keep `<title>`, `meta description`, canonical URL, Open Graph, and Twitter Card tags in `src/layouts/Layout.astro` accurate and up to date with the headline/role.
- Keep `lang`, semantic HTML (`main`, `section`, headings hierarchy), and descriptive link text intact.
- When the role/headline changes, update `role` and `description` props in the Layout to match.
- Do not add `noindex`, `disallow`, or anything that blocks crawlers.

## Build

```bash
npx astro build   # outputs static site to dist/
npx astro dev     # local preview
```

Deployed to GitHub Pages (saliprandi.github.io).
