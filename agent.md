# Style Tiles — Agent Design Page Specification Guide (`agent.md`)

> **Purpose**: This document defines the strict architecture, aesthetic criteria, header requirements, catalog card preview mechanism, mobile layout rules, and Markdown Style Tile format for every design page created under the `Designs/` directory in the **Style Tiles** repository.
> 
> When creating a new design page, AI agents and developers **MUST** adhere to the rules, preview protocols, and template outlined below without exception.
>
> Catalog chrome theming is a **separate** system. Publishing a design page does **not** add it to the live theme pool on `index.html`. Only follow `theme-toggle.md` when the user explicitly asks to add a catalog theme (for example: “Read theme-toggle.md and add a new dark theme based on this style”).

---

## 1. Core Architecture & Philosophy

1. **Every page is dual-purpose — but the two halves have different jobs**:
   - **For Humans (the HTML page)**: It is a fully interactive, living, "vibe coded" showcase celebrating a singular, cohesive design aesthetic. Theatrical copy, fake telemetry, sample industry stories, and decorative meta are allowed **on the showcase page only**.
   - **For AI Agents (the Style Tile Markdown)**: It is a machine-readable **visual skin**. It is copied into other products. It must describe construction (color, type, geometry, motion) and must **never** dictate, invent, or replace the host site's content.

2. **Self-Contained & Zero-Build**:
   - Each design page lives as an individual HTML file inside the `Designs/` folder: `Designs/<design-slug>.html` (e.g. `Designs/cyber-terminal.html`, `Designs/editorial-brutalist.html`, `Designs/swiss-international.html`).
   - Use standard Vanilla HTML5, Vanilla CSS (in a `<style>` tag or paired stylesheet), and Vanilla JavaScript (in a `<script>` tag). No external bundlers or node build steps required.
   - Google Fonts may be imported via `<link>` or `@import`.
   - SVG icons should be inline or standard monoline glyphs.

3. **Showcase page content speaks about the design; the Markdown does not**:
   - The **HTML design page** is not a generic dummy page. Its written copy, typography specimens, color swatches, component archetypes, and interactive demos must explicitly **explain, demonstrate, and celebrate the design philosophy itself**.
   - The **Main `<h1>` Display Heading** on the showcase page must be the exact **Name of the Design**.
   - The **Style Tile Markdown** (`<script id="style-tile-markdown">`) is the opposite: it is a transferable visual language. It must not contain sample headlines, dummy nav, telemetry strings, ISO codes, industry stories, or "use it for [product type]" instructions. Those leak into client sites when an agent pastes the tile.

4. **Split of concerns (do not collapse these)**:
   - The catalog name (`TILE-NNN`, `System 07 // …`, a fictional brand) is **museum-label metadata**. `TILE-NNN` is assigned **live from catalog order** (see §2.1). The design **name** lives in the catalog card, the showcase `<h1>`, and the header title block.
   - It must **not** appear as required UI copy in the Markdown prompt. Agents applying the tile to a real site must restyle existing chrome, not print the tile's name in the header.

5. **Mandatory Live Preview on Catalog Cards**:
   - When a design page `Designs/<design-slug>.html` is published, its corresponding card in the main catalog (`index.html`) **MUST render a live, scaled 16:9 preview iframe of the actual design page** instead of a placeholder wireframe.
   - This ensures users and agents immediately see the true rendered typography, colors, borders, and vibe directly on the catalog grid.

---

## 2. Mandatory Header Bar Component

Every design page **MUST** include a persistent top navigation header containing the following four essential controls:

```html
<header class="style-tile-header">
  <!-- 1. Navigation Back -->
  <a href="../index.html" class="nav-back-link" title="Return to Style Tiles Catalog">
    <span class="icon">←</span> Catalog
  </a>

  <!-- 2. Design Title & Code -->
  <div class="header-title-block">
    <span class="design-code" data-live-tile-code>TILE</span>
    <span class="design-title">[Design Name]</span>
    <span class="design-vibe-tag">[Official vibeBadge — e.g. Neo-Brutalism]</span>
  </div>

  <!-- 3. Action Suite -->
  <div class="header-actions">
    <!-- Preview / Inspect Markdown Modal Button -->
    <button id="btn-preview-tile" class="btn-tile btn-preview" title="View formatted Markdown Style Tile">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      Preview Style Tile
    </button>

    <!-- Copy Raw Markdown to Clipboard Button -->
    <button id="btn-copy-tile" class="btn-tile btn-copy" title="Copy raw Markdown to clipboard for AI Prompt">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      Copy Style Tile
    </button>

    <!-- Download Markdown File Button -->
    <button id="btn-download-tile" class="btn-tile btn-download" title="Download [design-slug].md">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download Style Tile
    </button>
  </div>
</header>
```

### 2.1 Live catalog tile number — do not hardcode

`TILE-001`, `TILE-002`, … are **not accession codes you type**. They are computed from the order of entries in `STYLE_TILES_DATA` inside `app.js`:

- First catalog entry → `TILE-001`
- Second catalog entry → `TILE-002`
- Delete or reorder an entry, and every later tile **renumbers on the next load**. There are never gaps (`001, 002, 003, 004, 006` is a bug).

**Stable identity is `slug`** (`Designs/<slug>.html` and the `slug` field). That never changes when numbers compact.

When creating a design:

1. **Do not** set `id: "TILE-00X"` in `app.js`. Omit `id`. `assignCatalogTileNumbers()` stamps it at runtime.
2. **Do not** type `TILE-007` (or any frozen number) into the design-page header, `<title>`, or as a permanent stamp.
3. Put a placeholder in `.style-tile-header .design-code` (`TILE` is fine) with `data-live-tile-code`. `design-page-mobile.js` fetches catalog order and replaces it with the live `TILE-NNN` for this slug.
4. Append new designs to the **end** of `STYLE_TILES_DATA` unless the user asks for a specific catalog position. The new tile receives the next sequential number automatically.
5. Theatrical showcase copy may use the design **name**. It must not freeze a tile number as if it were a product SKU. Exact `TILE-###` stamps in `.design-code` or `[data-live-tile-code]` are overwritten live.

### Required Header JavaScript Logic
Every design page must embed the exact raw markdown of its style tile inside a `<script id="style-tile-markdown" type="text/markdown">` block and bind event listeners:

1. **`btn-copy-tile`**:
   - Reads `document.getElementById('style-tile-markdown').textContent.trim()`.
   - Executes `navigator.clipboard.writeText(...)`.
   - Triggers tactile visual feedback (e.g. changes button text to `"✓ Copied to Clipboard!"` for 2 seconds and displays a floating toast).
2. **`btn-download-tile`**:
   - Creates a `Blob([markdownText], { type: 'text/markdown;charset=utf-8' })`.
   - Generates a transient download anchor for `style-tile-[slug].md` and triggers `.click()`.
3. **`btn-preview-tile`**:
   - Toggles an on-screen modal or slide-over drawer displaying the formatted and syntax-highlighted Style Tile specification with a secondary quick-copy button.

---

## 3. Catalog Card & 16:9 Live Preview Integration (`app.js`)

When creating or publishing a design page in `Designs/<slug>.html`, the catalog entry in `STYLE_TILES_DATA` inside `app.js` **MUST** be updated to activate the live 16:9 preview and register its theme and vibe filter category:

### 1. Mandatory Schema for `STYLE_TILES_DATA` in `app.js`:
Every design entry MUST include `theme`, `vibeBadge`, `hasPage: true`, and complete font/palette metadata. **Do not include `id`.** Catalog order is the tile number (`tile.id` is assigned at runtime as `TILE-001`…`TILE-00N`).

```javascript
{
  slug: "my-design-slug",           // <-- STABLE identity; also the HTML filename
  name: "My Design Name",
  vibe: "Keyword 1 • Keyword 2 • Keyword 3",
  vibeBadge: "Editorial & Archival", // <-- MANDATORY: exactly ONE official filter name
  categories: ["editorial"],         // <-- MANDATORY: only the slug that maps to vibeBadge
  theme: "Dark", // <-- MANDATORY: Must be "Dark", "Light", or "Dark/Light"
  hasPage: true, // <-- CRITICAL: Enables live 16:9 design preview iframe
  fonts: { display: "...", sans: "...", mono: "..." },
  palette: [
    { name: "Surface", hex: "#..." },
    ...
  ],
  description: "...",
  markdownSpec: null                 // fetched live from the design page
}
```

#### Approved `vibeBadge` Filter Options:
The catalog **"Filter by vibe"** chips match `vibeBadge` exactly. Pick **exactly one**. The header `.design-vibe-tag` on the design page MUST use that same official string.

| `vibeBadge` | `categories` slug |
|---|---|
| `"Editorial & Archival"` | `["editorial"]` |
| `"Neo-Brutalism"` | `["brutalist"]` |
| `"Cyber & Blueprint"` | `["cyber"]` |
| `"Minimalist & Monastic"` | `["minimalist"]` |
| `"Playful & Pop"` | `["playful"]` |
| `"Retro & Y2K"` | `["retro"]` |
| `"Quiet Luxury"` | `["luxury"]` |

#### How to choose the vibe (judge the visual system, not the marketing copy)

Do **not** tag from adjectives in the name, blurb, or industry story ("eco-brutalist", "neo-editorial", "telemetry", "neo-retro"). Tag from **construction**: radii, shadows, borders, type role, palette energy, and material metaphor.

**`"Editorial & Archival"`** — The page *reads* like a magazine, gazette, journal, library index, or Swiss-international document.
- Signals: display serif as the hero voice; paper / vellum / ink; folios, pull quotes, issue numbers, columned layouts.
- Not this: a SaaS/fintech dashboard that happens to use a serif; a hospitality site; any page that only says "editorial" in copy.

**`"Neo-Brutalism"`** — Raw graphic construction. Hard geometry is the system.
- Signals: 0–2px radii; 2–3px high-contrast borders; hard **zero-blur** offset shadows (`4px 4px 0 #000`); stamp / sticker / risograph / die-cut chrome.
- Not this: 20–32px rounded bento cards, soft shadows, or pill-default UI that merely *calls itself* brutalist.

**`"Cyber & Blueprint"`** — HUD, CAD board, terminal, cyanotype, or instrument panel.
- Signals: monospaced coordinates; hairline grids; cyan / amber vector ink; reticles, dimension callouts, scanlines, live telemetry.
- Not this: any dark theme; a gothic/editorial magazine that mentions "telemetry"; luxury or brutalist pages with a single technical badge.

**`"Minimalist & Monastic"`** — Sparse, quiet, material. Large empty fields. Wabi-sabi / craft **or** precise neo-minimal product UI.
- Signals: linen / oat / sumi **or** stark white + one accent; lots of air; thin structural borders; 0–8px radii; no chunky shadows.
- Not this: dense industrial dashboards; maximal Memphis; gold-foil hospitality luxury.

**`"Playful & Pop"`** — Energy is the point: candy / spot inks, Memphis geometry, chunky 3D, stickers, cartoon warmth.
- Signals: bubblegum / cadmium / acid palettes; playful display type; stickers, waves, toy shapes.
- Not this: a luxury travel UI with one lime accent; a serious editorial that uses one bright badge.

**`"Retro & Y2K"`** — The **period reference is the system**: Y2K chrome/gel, 90s/2000s web, vaporwave, pixel/LCD, millennial gloss.
- Signals: chrome, gel buttons, aurora gradients, pixel fonts, 2000s cyan/magenta/silver.
- Not this: "neo-retro" marketing on a modern playful brand; 1980s Memphis (that is Playful & Pop); "vintage" paper (that is Editorial & Archival).

**`"Quiet Luxury"`** — Expensive and composed: hospitality, fashion, private travel, sustainable premium.
- Signals: alabaster + onyx, sage/pine premium, frosted glass, large soft radii, restrained motion, fashion/hospitality voice.
- Not this: rustic wabi-sabi craft (that is Minimalist & Monastic); eco copy pasted onto a brutalist or playful system.

#### Hard rules (do not violate)
1. **One `vibeBadge` only.** It is the catalog filter key. Hybrids still pick the *dominant construction*.
2. **`categories` is a single matching slug.** Do not add extra categories because the copy mentioned them. Extra categories used to dump tiles into the wrong vibe filters.
3. **Header `.design-vibe-tag` equals `vibeBadge`.** Flavor keywords belong in `vibe`, the hero narrative, and the Markdown spec — not on the filter tag.
4. If two buckets seem plausible, use the exclusion tests above. When still torn, prefer the construction signals (shadows, radii, borders) over the product story.

#### Approved `theme` Values:
- `"Dark"`: Dark background / night aesthetic (e.g. OLED black, obsidian, deep navy, carbon).
- `"Light"`: Light background / daylight aesthetic (e.g. bleached paper, warm parchment, linen, cream).
- `"Dark/Light"`: Explicitly supports both light and dark modes.

### 2. Live Preview Rendering Mechanics:
When `hasPage: true`, `app.js` renders the clean live 16:9 preview component:

```html
<div class="card-preview-live" data-slug="${tile.slug}" title="${tile.name} (Live 16:9 Design Preview)">
  <iframe src="Designs/${tile.slug}.html" class="card-preview-iframe" title="${tile.name} Live Preview" loading="lazy" tabindex="-1" scrolling="no"></iframe>
  <a href="Designs/${tile.slug}.html" class="preview-overlay" title="Open ${tile.name}">
    <span class="preview-open-badge">Open Design Page ↗</span>
  </a>
</div>
```

- **Dynamic Iframe Scaling**: `resizeCardIframes()` calculates `containerWidth / 1280` and applies `transform: scale(...)` to the 1280x720 iframe so that the live page renders crisply in 16:9 ratio across 3-column Grid, Compact Preview, and 2-column Editorial Spread views.
- **Click Overlay**: The transparent `.preview-overlay` captures pointer clicks to smoothly navigate to `Designs/<slug>.html` while revealing the `Open Design Page ↗` tactile badge on hover.

---

## 4. Standard Style Tile Markdown Schema

The Style Tile Markdown is a **visual-language prompt**. A professional pastes it into an AI and says "restyle my existing site with this." If the Markdown names a fake product, lists sample headlines, or describes "telemetry" chrome, the AI will inject that copy into a real interface. That is a failure of the tile.

### 4.1 What the Markdown is allowed to specify
- Color tokens, type stacks and scale, radii, shadows, borders, spacing, motion, icon stroke language.
- How **existing** buttons, cards, inputs, and nav should *look*.
- Visual anti-patterns (no gaussian shadows, no purple neon, no pills, etc.).

### 4.2 What the Markdown is forbidden to specify
- Sample UI copy, dummy labels, example headlines, pangrams-as-content.
- Thematic chrome the host site does not already have: `TELEMETRY`, `ISO: 0800_RAW`, `FREQ: 144.2 HZ`, issue codes, fake clocks, catalog tile IDs, "System 07" locks, decorative status readouts.
- Industry or product use-cases ("use it for veterinary sites / CAD consoles / healthtech / eco logistics"). Visual rules must transfer to a bakery, a bank, or a docs site without rewriting the business.
- Instructions to rename the product, change the information architecture, or add mascots/watermarks/system codes.
- The catalog title as required UI text. "Healthy Pets, Happy Hearts" and "CryptoVista" are showcase names, not brands to stamp on a client.

### 4.3 Title line
Lead with a **clean visual-language name** (construction), not a fictional product or "System XX" code.

```
Visual language: Monolithic Hyper-Editorial
Construction: carbon slabs • Swiss archival serif • 0px geometry • 1-bit offsets
```

Not: `Aesthetic: System 07 // Monolithic Hyper-Editorial • Industrial Telemetry • High-Frequency Physics`

The showcase page may still use the theatrical catalog name in its `<h1>` and header. The Markdown must not treat that name as copy to insert.

### 4.4 Visual statement (section 1)
2–4 sentences of **construction only**: materials, contrast, type voice, geometry, motion. No "ideal product use cases." No emotional fiction that implies new copy ("a study in archival isolation").

### 4.5 Component skin (section 6)
Describe visual treatment of the host's existing components. Always say, in effect: use the host's existing labels. Never give example strings (`"Book Now"`, `"Skip the Hold Music."`, `[ TELEMETRY ]`).

### 4.6 Required schema

When writing the Style Tile Markdown (both for embedding in the page script and for downloading), use this exact structural schema. Section **0 is mandatory** and must appear first after the title.

````markdown
================================================================================
  Visual language: [Clean aesthetic name — no fake product, no system code]
  Construction: [3–6 visual keywords: materials • geometry • type • palette energy]
================================================================================

/* -----------------------------------------------------------------------------
 * 0. APPLICATION CONTRACT — READ THIS FIRST
 * -------------------------------------------------------------------------- */
This document is a VISUAL LANGUAGE for restyling an existing interface.
It is not a content brief, brand story, product concept, or sample layout to reproduce.

HARD RULES:
1. Keep the host product's copy, labels, navigation, data, images, information architecture, and meaning exactly as they are. Restyle. Do not restory.
2. Do not print this tile's title, catalog name, construction tags, or vibe keywords anywhere in the host UI.
3. Do not invent thematic chrome: telemetry strings, ISO/FREQ/MODE codes, issue numbers, fake metadata, industrial jargon, decorative status lines, sample headlines, or dummy nav items taken from this file or from the Style Tiles catalog.
4. Map existing components onto the visual rules below (color, type, radius, border, shadow, motion). Keep the host's component types; change only their visual treatment.
5. If a decorative motif here would require new copy to make sense, omit the motif. Never add copy to justify a graphic.
6. Do not rename the product, rewrite marketing voice, swap the industry, or add mascots, watermarks, or "system codes" that the host site does not already have.

/* -----------------------------------------------------------------------------
 * 1. VISUAL STATEMENT
 * -------------------------------------------------------------------------- */
[2–4 sentences of visual construction only: surfaces, contrast, type voice, radii, shadows, motion. No industries. No sample strings.]

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Backgrounds */
  --bg-canvas:              #...; /* Primary application canvas */
  --bg-surface:             #...; /* Elevated cards and containers */
  --bg-surface-alt:         #...; /* Secondary panels, wells, sidebars */
  --bg-surface-dark:        #...; /* Inverted containers */

  /* Inks & Typography */
  --ink-primary:            #...; /* High-contrast primary reading text */
  --ink-secondary:          #...; /* Subtitles, secondary copy */
  --ink-muted:              #...; /* Captions, disabled text, borders */
  --ink-inverted:           #...; /* Inverted contrast text */

  /* Signature Accents */
  --accent-primary:         #...; /* Primary call-to-action color */
  --accent-primary-hover:   #...; /* Interactive hover tone */
  --accent-secondary:       #...; /* Supporting visual highlight */
  --accent-tertiary:        #...; /* Accent badges or energetic highlights */

  /* Status Tokens */
  --status-success:         #...;
  --status-warning:         #...;
  --status-danger:          #...;
  --status-info:            #...;
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display: "[Primary Display Font]", serif/sans-serif;
--font-sans:    "[Body Sans Font]", -apple-system, sans-serif;
--font-mono:    "[Mono Font]", monospace;

/* Type Scale */
--text-display: 3.5rem   / 1.05  var(--font-display); /* Letter-spacing: ... | Weight: ... */
--text-h1:      2.5rem   / 1.15  var(--font-display); /* Letter-spacing: ... | Weight: ... */
--text-h2:      1.75rem  / 1.25  var(--font-sans);    /* Letter-spacing: ... | Weight: ... */
--text-h3:      1.25rem  / 1.35  var(--font-sans);    /* Letter-spacing: ... | Weight: ... */
--text-body:     1.0rem   / 1.60  var(--font-sans);    /* Letter-spacing: ... | Weight: ... */
--text-body-sm:  0.875rem / 1.50  var(--font-sans);    /* Letter-spacing: ... | Weight: ... */
--text-meta:     0.75rem  / 1.40  var(--font-mono);    /* Letter-spacing: ... | UPPERCASE */

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY & ELEVATION
 * -------------------------------------------------------------------------- */
--radius-default: ...px;
--radius-subtle:  ...px;
--radius-pill:    9999px;

/* Elevation & Shadows */
--shadow-base:    ...;
--shadow-hover:   ...;
--shadow-active:  ...;

/* -----------------------------------------------------------------------------
 * 5. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-core:        ... solid var(...);
--border-hairline:    ... solid var(...);
--divider-style:      ...;

/* -----------------------------------------------------------------------------
 * 6. COMPONENT SKIN — APPLY TO EXISTING COMPONENTS
 * -------------------------------------------------------------------------- */
- **Buttons**: [Fill, radius, border, hover, active. Use the host's existing labels.]
- **Cards**: [Surface, border, padding, elevation. Do not add index codes or fake meta.]
- **Inputs**: [Wells, borders, focus. Font-size at least 16px.]
- **Navigation**: [Restyle existing items. Do not add catalog codes, fake clocks, or status readouts.]

/* -----------------------------------------------------------------------------
 * 7. FORBIDDEN CLICHÉS & ANTI-PATTERNS
 * -------------------------------------------------------------------------- */
- [Visual anti-patterns that ruin this specific aesthetic]
- Never inject this tile's name, construction tags, or showcase copy into the host interface.
````

---

## 5. Required Content Sections on Each Design Page

Every design page created in `Designs/<slug>.html` must render the following rich sections in the page body:

1. **Hero Display Banner**:
   - Massive `<h1>` featuring the exact Design Title styled in `--font-display`.
   - Vibe description badge, category chips, and mood narrative describing why this style feels the way it does.
   - Live interactive quick action ("Copy Prompt for Agent", "Test Interactive Elements").

2. **Color Swatches & Palette Matrix**:
   - Visual swatch cards for every color role (Canvas, Surfaces, Inks, Accents, Statuses).
   - Each swatch must display its Hex value, CSS variable name, and copy the value to clipboard when clicked.

3. **Typography & Typeface Specimen**:
   - Font pairings showcase (Display, Sans Body, Monospace).
   - Dynamic type scale hierarchy ladder (`Display`, `H1`, `H2`, `H3`, `Body`, `Meta`).
   - Pangram test / live editable text sample.

4. **Component Archetype Gallery**:
   - Primary, Secondary, Ghost, Danger, and Accent Buttons with live hover and active states.
   - Interactive Input Fields, Checkboxes, Toggle Switches, Radio Selectors, and Badges.
   - Content Cards, Feature Blocks, and Data Badges.

5. **Living Micro-Experience / Landing Demo**:
   - A fully functional mini-layout (e.g., an editorial article snippet, audio player, code inspector, or product showcase) that demonstrates how the design tokens work in concert.

6. **Style Tile Prompt Code Drawer**:
   - An accordion or visible code block containing the full Markdown Style Tile with a 1-click copy button, allowing agents to copy directly from the bottom of the page as well.
   - Populate it from `<script id="style-tile-markdown">` at runtime. Do **not** hardcode a second copy of the spec in the drawer — those copies go stale and leak old showcase copy into agent prompts.

---

## 6. Mandatory Mobile Layout

Every new design page **MUST** be usable on a phone. Desktop-only layouts are not acceptable. The aesthetic can stay bold; the structure must reflow.

1. **Include the shared mobile safety sheet** immediately after the page's own `<style>` block:

```html
<link rel="stylesheet" href="design-page-mobile.css">
<script src="design-page-mobile.js"></script>
```

   This file stacks the mandatory header, keeps the Catalog / Preview / Copy / Download controls on-screen, prevents the page from spilling sideways, and **stamps the live `TILE-NNN` from catalog order** onto `.style-tile-header .design-code`. It is a floor, not the whole job — each page must still write its own mobile rules for its unique hero, grids, specimens, and demo.

2. **Keep a proper viewport tag**:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

3. **At `max-width: 768px` the page itself MUST**:
   - Collapse multi-column grids (hero, swatches, type specimens, component galleries, living demo) to a **single column**.
   - Keep every heading, paragraph, badge, button, and card **fully inside the viewport**. No clipped words, no horizontal scroll, no elements hanging off the right edge.
   - Wrap or stack the `.style-tile-header` so the back link, title, and three action buttons remain tappable. Icon-only action buttons are allowed on small screens if `title` attributes stay in place.
   - Use fluid type (`clamp(...)`) so the main `<h1>` wraps onto multiple lines instead of overflowing.
   - Give inputs a `font-size` of at least `16px` so iOS does not zoom on focus.
   - Avoid hover-only actions. Touch users must be able to open, copy, and inspect without a hover state.

4. **Verify before publishing** at approximately **390×844** (phone) and **768×1024** (tablet), plus desktop. Confirm:
   - The header is fully visible and the Catalog link works.
   - Preview / Copy / Download still work.
   - Hero, palette, type, components, and the living demo can all be read and used without sideways scrolling.

---

## 7. Checklist for Publishing a New Design

When adding a new design:
- [ ] Create `Designs/<design-slug>.html` following all rules in this document.
- [ ] Link `Designs/design-page-mobile.css` and add page-specific `@media (max-width: 768px)` rules so the design is mobile-friendly.
- [ ] Ensure all 3 header buttons (`Preview`, `Copy Style Tile`, `Download Style Tile`) work seamlessly on both desktop and mobile.
- [ ] Embed the Style Tile Markdown in `<script id="style-tile-markdown" type="text/markdown">`. The HTML script tag is the source of truth (`app.js` `markdownSpec` may be `null` and will be fetched from the page).
- [ ] Markdown content-safety (Section 4) — a professional must be able to paste this onto an unrelated product:
  - [ ] Section 0 Application Contract is present verbatim.
  - [ ] Title is a clean visual-language name, not a fictional product or `System XX` code.
  - [ ] Visual statement has no industry use-cases and no sample headlines.
  - [ ] Component skin has no example labels (`TELEMETRY`, `Book Now`, ISO/FREQ/MODE strings, etc.).
  - [ ] Forbidden list includes: never inject this tile's name, construction tags, or showcase copy into the host interface.
- [ ] Update `app.js` `STYLE_TILES_DATA`:
  - [ ] Do **not** set `id: "TILE-00X"`. Omit `id`. Append the entry (unless the user specifies position); the catalog assigns `TILE-NNN` from array order.
  - [ ] Set `theme: "Dark" | "Light" | "Dark/Light"`.
  - [ ] Set exactly one `vibeBadge` using the classification guide in Section 3 (judge construction, not marketing copy). Set `categories` to only the matching slug. Set the page header `.design-vibe-tag` to that same official string.
  - [ ] Set `hasPage: true` to activate the live 16:9 scaled design preview iframe.
- [ ] Live tile number: header `.design-code` is a placeholder (`TILE`) with `data-live-tile-code`. Do not bake a frozen `TILE-007` into the header, `<title>`, or `app.js`. Confirm `design-page-mobile.js` is linked so the live number fills in.
- [ ] Verify that the live 16:9 Design Page Preview displays and scales cleanly on the catalog card in `index.html` (testing Grid, Compact, and Editorial Spread views).
- [ ] Test at phone (~390px), tablet (~768px), and desktop: no horizontal overflow, stacked layouts, readable type, and working header actions.
- [ ] Test color contrast and keyboard accessibility.
