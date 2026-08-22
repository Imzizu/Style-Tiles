# Style Tiles — Agent Design Page Specification Guide (`agent.md`)

> **Purpose**: This document defines the strict architecture, aesthetic criteria, header requirements, catalog card preview mechanism, mobile layout rules, and Markdown Style Tile format for every design page created under the `Designs/` directory in the **Style Tiles** repository.
> 
> When creating a new design page, AI agents and developers **MUST** adhere to the rules, preview protocols, and template outlined below without exception.

---

## 1. Core Architecture & Philosophy

1. **Every page is dual-purpose**:
   - **For Humans**: It is a fully interactive, living, "vibe coded" showcase celebrating a singular, cohesive design aesthetic.
   - **For AI Agents**: It is a machine-readable token vault. It provides instant copy/download access to the exact Markdown design prompt used to replicate that visual style in any codebase.

2. **Self-Contained & Zero-Build**:
   - Each design page lives as an individual HTML file inside the `Designs/` folder: `Designs/<design-slug>.html` (e.g. `Designs/cyber-terminal.html`, `Designs/editorial-brutalist.html`, `Designs/swiss-international.html`).
   - Use standard Vanilla HTML5, Vanilla CSS (in a `<style>` tag or paired stylesheet), and Vanilla JavaScript (in a `<script>` tag). No external bundlers or node build steps required.
   - Google Fonts may be imported via `<link>` or `@import`.
   - SVG icons should be inline or standard monoline glyphs.

3. **Content Speaks About the Design**:
   - The design page is not a generic dummy page. Its written copy, typography specimens, color swatches, component archetypes, and interactive demos must explicitly **explain, demonstrate, and celebrate the design philosophy itself**.
   - The **Main `<h1>` Display Heading** must be the exact **Name of the Design**.

4. **Mandatory Live Preview on Catalog Cards**:
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
    <span class="design-code">TILE-00X</span>
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
Every design entry MUST include `theme`, `vibeBadge`, `hasPage: true`, and complete font/palette metadata:

```javascript
{
  id: "TILE-00X",
  slug: "my-design-slug",
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
  markdownSpec: `...`
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

When writing the Style Tile Markdown (both for embedding in the page script and for downloading), use this exact structural schema:

````markdown
================================================================================
  Aesthetic: [Design Name] • [Sub-genre] • [Atmosphere Keywords]
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
[2-3 sentences explaining the essence, emotional resonance, and ideal product use cases for this design language.]

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
 * 6. COMPONENT ARCHETYPES & INTERACTION RULES
 * -------------------------------------------------------------------------- */
- **Buttons**: [Describe hover states, active transforms, shadows, radii]
- **Cards**: [Describe background surfaces, border styling, padding scales]
- **Inputs**: [Describe borders, focus states, placeholder colors]
- **Navigation**: [Describe header styling, active links, backdrop blur or borders]

/* -----------------------------------------------------------------------------
 * 7. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- [Specify patterns that ruin this specific aesthetic]
- [e.g. No gradient text, no generic purple neon, no floating unbordered cards, etc.]
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

---

## 6. Mandatory Mobile Layout

Every new design page **MUST** be usable on a phone. Desktop-only layouts are not acceptable. The aesthetic can stay bold; the structure must reflow.

1. **Include the shared mobile safety sheet** immediately after the page's own `<style>` block:

```html
<link rel="stylesheet" href="design-page-mobile.css">
<script src="design-page-mobile.js"></script>
```

   This file stacks the mandatory header, keeps the Catalog / Preview / Copy / Download controls on-screen, and prevents the page from spilling sideways. It is a floor, not the whole job — each page must still write its own mobile rules for its unique hero, grids, specimens, and demo.

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
- [ ] Embed the exact Markdown in `<script id="style-tile-markdown" type="text/markdown">`.
- [ ] Update `app.js` `STYLE_TILES_DATA`:
  - [ ] Set `theme: "Dark" | "Light" | "Dark/Light"`.
  - [ ] Set exactly one `vibeBadge` using the classification guide in Section 3 (judge construction, not marketing copy). Set `categories` to only the matching slug. Set the page header `.design-vibe-tag` to that same official string.
  - [ ] Set `hasPage: true` to activate the live 16:9 scaled design preview iframe.
  - [ ] Include the complete Markdown Style Tile in `markdownSpec`.
- [ ] Verify that the live 16:9 Design Page Preview displays and scales cleanly on the catalog card in `index.html` (testing Grid, Compact, and Editorial Spread views).
- [ ] Test at phone (~390px), tablet (~768px), and desktop: no horizontal overflow, stacked layouts, readable type, and working header actions.
- [ ] Test color contrast and keyboard accessibility.
