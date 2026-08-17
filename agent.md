# Style Tiles — Agent Design Page Specification Guide (`agent.md`)

> **Purpose**: This document defines the strict architecture, aesthetic criteria, header requirements, catalog card preview mechanism, and Markdown Style Tile format for every design page created under the `Designs/` directory in the **Style Tiles** repository.
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
    <span class="design-vibe-tag">[Primary Vibe Tag]</span>
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
  vibeBadge: "Editorial & Archival", // <-- MANDATORY: Must match one of the search filter options!
  categories: ["editorial", "minimalist"],
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
The `vibeBadge` attached to the card MUST match one of the filter options in the search filter bar:
- `"Editorial & Archival"`
- `"Neo-Brutalism"`
- `"Cyber & Blueprint"`
- `"Minimalist & Monastic"`
- `"Playful & Pop"`
- `"Retro & Y2K"`
- `"Quiet Luxury"`

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

- **Dynamic Iframe Scaling**: `resizeCardIframes()` calculates `containerWidth / 1280` and applies `transform: scale(...)` to the 1280x720 iframe so that the live page renders crisply in 16:9 ratio across 3-column Grid, Compact Preview, 2-column Editorial Spread, and 1-column Ledger views.
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

## 6. Checklist for Publishing a New Design

When adding a new design:
- [ ] Create `Designs/<design-slug>.html` following all rules in this document.
- [ ] Ensure all 3 header buttons (`Preview`, `Copy Style Tile`, `Download Style Tile`) work seamlessly.
- [ ] Embed the exact Markdown in `<script id="style-tile-markdown" type="text/markdown">`.
- [ ] Update `app.js` `STYLE_TILES_DATA`:
  - [ ] Set `theme: "Dark" | "Light" | "Dark/Light"`.
  - [ ] Set `vibeBadge: "[Filter Option Name]"` (matching one of the search filter options, e.g. `"Editorial & Archival"`, `"Neo-Brutalism"`, `"Cyber & Blueprint"`, `"Minimalist & Monastic"`, `"Playful & Pop"`, `"Retro & Y2K"`, `"Quiet Luxury"`).
  - [ ] Set `hasPage: true` to activate the live 16:9 scaled design preview iframe.
  - [ ] Include the complete Markdown Style Tile in `markdownSpec`.
- [ ] Verify that the live 16:9 Design Page Preview displays and scales cleanly on the catalog card in `index.html` (testing Grid, Compact, Editorial Spread, and Ledger views).
- [ ] Test color contrast, responsiveness (mobile/tablet/desktop), and keyboard accessibility.
