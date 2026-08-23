# Catalog Theme Pool — Agent Guide (`theme-toggle.md`)

> Skins the **main Style Tiles registry** (`index.html`) with visual languages from the catalog.
> This is **not** how you publish a design page. Design pages follow `agent.md`.

---

## 0. When to run this file

Run this protocol **only** when the user asks to add a catalog chrome theme. Typical prompt:

```
Read theme-toggle.md and add a new dark theme based on this style:

{style tile markdown}
```

or the same with `light` instead of `dark`.

**Hard limits**

1. Add **exactly one** theme per request. Never fill the pool. Target size is about 10–12 skins (roughly half light, half dark).
2. Publishing `Designs/<slug>.html` does **not** register a catalog theme. Keep those jobs separate.
3. Do not one-shot a batch of tiles from the catalog. Wait for the user to paste a tile and name the mode.
4. Restyle catalog chrome only. Do not change copy, information architecture, catalog data, live iframe previews, or design pages.

If the prompt is ambiguous about light vs dark, use the user's word (`dark theme` / `light theme`). If they do not say, use the tile's own canvas: dark canvas → `dark`, light canvas → `light`.

---

## 1. What the system is

The catalog has a **mode** and a **skin**:

| Attribute | Values | Job |
|---|---|---|
| `html[data-mode]` | `light` \| `dark` | Which pool is active. Header Dark button flips this. |
| `html[data-theme]` | theme `id` | Which pack in that pool is painted. |

The **Dark** button flips pools and applies a **random** skin from the destination pool (never repeating the last skin in that pool when two or more exist). The header **theme picker** lists every registered skin so the user can force a specific one.

Seed skins (already shipped — do not recreate):

| id | mode | shortName |
|---|---|---|
| `archival-drafting` | light | Manila |
| `carbon-board` | dark | Carbon |

---

## 2. Files you may touch

| File | What you do |
|---|---|
| `themes/<id>.css` | **Create.** Token pack scoped to `html[data-theme="<id>"]`. |
| `index.html` | Add `<link rel="stylesheet" href="themes/<id>.css">` next to the other theme links. Append a Google Font family to the existing fonts `<link>` **only if** that family is not already listed. |
| `themes/registry.js` | Append one object to `CATALOG_THEMES`. |

**Do not edit** unless the user explicitly asks: `styles.css` layout, `app.js` catalog data, `themes/archival-drafting.css`, `themes/carbon-board.css`, `CATALOG_THEME_DEFAULTS`, the FOUC boot script, design pages.

The FOUC boot script in `index.html` hardcodes the default ids `archival-drafting` and `carbon-board`. Leave those defaults alone.

---

## 3. Procedure (one theme)

1. Choose `id`: kebab-case construction name, **not** a TILE code or fictional product (`obsidian-kinetic`, not `TILE-024` or `cryptovista`). Max ~32 chars. Must match the CSS filename and the registry `id`.
2. Confirm `id` is not already in `themes/registry.js`.
3. Create `themes/<id>.css` from the template in §6. Fill every token. Scope: `html[data-theme="<id>"]` only.
4. Map the pasted Style Tile onto catalog tokens using §5. Construction only. Do not invent telemetry chrome or sample copy.
5. Append the registry object (§4).
6. In `index.html`, add the theme stylesheet `<link>` next to the other `themes/*.css` links. Add missing font families to the catalog Google Fonts `<link>` only if needed.
7. Run the checklist in §8.

---

## 4. Registry object

Append to `window.CATALOG_THEMES` in `themes/registry.js`:

```javascript
{
  id: "your-theme-id",          // kebab-case, matches filename
  mode: "dark",                 // "light" or "dark" — the pool this skin belongs to
  shortName: "Obsidian",        // picker label, ≤16 chars, construction word, no TILE-00X
  label: "Obsidian Kinetic",    // slightly longer name for title/toast
  sourceTile: "obsidian-kinetic", // Designs/<slug>.html slug, or null if not from a tile
  themeColor: "#0B0A09",        // browser chrome / theme-color meta
  swatches: ["#0B0A09", "#161312", "#F4EFEA", "#D4FF00"], // 4 hexes: canvas, sheet, ink, accent
  fonts: { display: "Fraunces", sans: "Space Grotesk", mono: "Fragment Mono" }
}
```

`mode` is the pool, not a guess from the marketing copy. A dark tile goes in the dark pool even if it has one light card.

---

## 5. Style Tile → catalog tokens

Catalog chrome uses **catalog** variable names (already wired through `styles.css`). Translate the tile; do not rename catalog variables.

| Style Tile token | Catalog token |
|---|---|
| `--bg-canvas` | `--surface-canvas` |
| `--bg-surface` | `--surface-sheet` |
| `--bg-surface-alt` | `--surface-kraft` |
| `--bg-surface-dark` | `--surface-dark` |
| `--ink-primary` | `--ink-primary` |
| `--ink-secondary` | `--ink-secondary` |
| `--ink-muted` | `--ink-muted` |
| `--ink-inverted` | `--ink-inverted` |
| `--accent-primary` | `--accent-burnt-orange` |
| `--accent-primary-hover` | `--accent-orange-hover` |
| `--accent-secondary` | `--accent-mustard` |
| `--accent-tertiary` | `--accent-mustard-hover` (or a supporting highlight) |
| `--status-*` | `--status-*` |
| `--font-display / sans / mono` | `--font-display / sans / mono` |
| `--radius-default` | `--radius-sharp` (cards, buttons, inputs) |
| `--radius-subtle` | `--radius-tactile` |
| `--radius-pill` | `--radius-pill` |
| `--shadow-base / hover` | `--shadow-base` / `--shadow-md` |
| `--border-core / hairline` | `--border-core` / `--border-hairline` |

**Also set these catalog-only tokens** (derive them; do not leave seed values):

- `--surface-hover` — slightly lifted sheet (button hover well)
- `--ink-on-bright` — ink that sits on mustard/highlighter (almost always a dark charcoal, even in dark themes)
- `--ink-on-hot` — ink on the primary CTA (usually `#FFFFFF` if the CTA is saturated)
- `--ink-code` — secondary type on `--surface-dark` prompt wells
- `--shadow-ink` — solid offset shadow color (or the gaussian shadow color if the tile forbids 1-bit offsets)
- `--header-lip` — header under-edge (`0 4px 0 …`)
- `--border-ink` — the stroke used inside `--border-core`
- `--focus-ring` — usually `--border-ink`
- `--grid-line` — faint canvas grid (rgba of ink at ~3–6% opacity)
- `--badge-orange-*`, `--badge-mustard-*`, `--badge-success-bg` — tinted wells of the accents; **must keep readable contrast**
- `--chip-count-well`, `--chip-count-active`, `--show-more-count-bg`
- `--btn-dark-hover`, `--view-btn-active-hover`
- `--skeleton-*` — muted wireframe colors between kraft and ink. Recolor the drafting placeholder; do not copy tile marketing art.

Rebuild `--shadow-sm/base/md/lg/modal` from `--shadow-ink` using the tile's elevation language:

- 1-bit / brutalist tile → `2px 2px 0`, `4px 4px 0`, `6px 6px 0`, `8px 8px 0`, `12px 12px 0`
- Soft / luxury tile → gaussian stacks from the tile's `--shadow-base`
- Hairline / monastic tile → none or 1px hairline, not chunky offsets

Rebuild `--border-core` / `--border-hairline` / `--divider-*` from the tile's border width + `--border-ink`.

`--ink-inverted` is text **on `--surface-dark` wells** (masthead, modal header, prompt box). If `--surface-dark` stays a deep well, `--ink-inverted` stays a light ink even in dark themes.

---

## 6. CSS file template

Create `themes/<id>.css`. Replace the bracketed values. Keep the selector exactly `html[data-theme="<id>"]`.

```css
/* Catalog chrome theme: <id>
 * Mode: light|dark
 * Source: Designs/<slug>.html  (or "original construction, not a tile")
 */
html[data-theme="<id>"] {
  color-scheme: light; /* or dark */

  --surface-canvas:         #;
  --surface-sheet:          #;
  --surface-kraft:          #;
  --surface-dark:           #;
  --surface-hover:          #;

  --ink-primary:            #;
  --ink-secondary:          #;
  --ink-muted:              #;
  --ink-inverted:           #;
  --ink-on-bright:          #;
  --ink-on-hot:             #;
  --ink-code:               #;

  --accent-burnt-orange:    #;
  --accent-orange-hover:    #;
  --accent-mustard:         #;
  --accent-mustard-hover:   #;

  --status-success:         #;
  --status-warning:         #;
  --status-danger:          #;
  --status-info:            #;

  --font-display: "<Display>", <generic>;
  --font-sans:    "<Sans>", -apple-system, sans-serif;
  --font-mono:    "<Mono>", monospace;

  --radius-sharp:   px;
  --radius-tactile: px;
  --radius-stamp:   px;
  --radius-pill:    9999px;

  --shadow-ink:        #;
  --shadow-none:       0px 0px 0px transparent;
  --shadow-sm:         ;
  --shadow-base:       ;
  --shadow-md:         ;
  --shadow-lg:         ;
  --shadow-accent-hot: ;
  --shadow-accent-war: ;
  --shadow-modal:      ;
  --header-lip:        ;

  --border-ink:         #;
  --border-core:        ;
  --border-hairline:    ;
  --border-accent-hot:  ;
  --border-accent-warm: ;
  --divider-perforated: ;
  --divider-dotted:     ;
  --focus-ring:         ;
  --grid-line:          ;

  --badge-orange-bg:      #;
  --badge-orange-ink:     #;
  --badge-mustard-bg:     #;
  --badge-mustard-border: #;
  --badge-mustard-ink:    #;
  --badge-success-bg:     #;
  --chip-count-well:      ;
  --chip-count-active:    ;
  --show-more-count-bg:   ;
  --btn-dark-hover:       #;
  --view-btn-active-hover:#;

  --skeleton-board:       #;
  --skeleton-grid:        #;
  --skeleton-hatch:       ;
  --skeleton-ink:         ;
  --skeleton-nav:         #;
  --skeleton-nav-left:    #;
  --skeleton-dot:         #;
  --skeleton-h1:          #;
  --skeleton-p:           #;
  --skeleton-btn:         #;
  --skeleton-art:         #;
  --skeleton-art-ink:     ;
  --skeleton-cell:        #;
  --skeleton-line:        ;
  --skeleton-dash:        ;
  --skeleton-btn-border:  ;
}
```

Optional overrides **after** the token block, still scoped to `html[data-theme="<id>"]`, only when a tile rule cannot be expressed as a token (example: a theme that forbids uppercase labels). Do not restyle `.card-preview-iframe` or design-page chrome.

---

## 7. Visual rules

- Keep the catalog's components and copy. You are swapping materials, not rebuilding the page.
- Live 16:9 previews are iframes of design pages. Leave them alone.
- Do not print the tile title, `TILE-00X`, construction tags, or fake telemetry onto the catalog.
- `shortName` / `label` appear only in the picker, toast, and button title.
- Primary CTA (`.btn-primary`) uses `--accent-burnt-orange` + `--ink-on-hot`. Mustard actions use `--accent-mustard` + `--ink-on-bright`.
- `--ink-on-bright` must stay dark enough to read on mustard. Do not set it to cream in a dark theme.
- Buttons/inputs: `font-size` on inputs is already ≥16px on mobile. Do not shrink it.
- If the tile uses pill geometry, set `--radius-sharp` / `--radius-tactile` to the tile's control radii. Do not force 0px brutalist corners onto a luxury or bento tile.
- If the tile forbids offset shadows, do not keep `4px 4px 0 #000`. Honor the tile.

---

## 8. Checklist

- [ ] Exactly one new `themes/<id>.css` with every token filled (no leftover `#;` placeholders).
- [ ] Selector is `html[data-theme="<id>"]`. `color-scheme` matches `mode`.
- [ ] One new `<link rel="stylesheet" href="themes/<id>.css">` in `index.html` beside the other theme packs.
- [ ] One new object in `CATALOG_THEMES`. `id` / filename / selector match. `mode` is `light` or `dark`.
- [ ] `shortName` ≤16 chars, no catalog tile id.
- [ ] Fonts: CSS stacks set; Google Fonts `<link>` updated only if a family was missing.
- [ ] Contrast: body ink on canvas, primary button label on CTA, mustard label on mustard, hairlines visible on sheet.
- [ ] Did not edit design pages, `STYLE_TILES_DATA`, iframe preview CSS, or seed theme files.
- [ ] Verify: load `index.html`, open the header theme picker, select the new skin, confirm header / hero / cards / footer / modal. Click **Dark** — it should roll a random skin from the other pool (a different dark skin than last time if the dark pool has 2+). Picker still force-applies this skin. Check ~390px and desktop.

---

## 9. How the UI uses your pack

- **Dark button** — flips `data-mode` and applies a **random** skin from that pool. If the pool has more than one skin, it will not repeat the last skin used in that pool. Do not change this to “restore last used.”
- **Theme picker** — lists every `CATALOG_THEMES` entry. Choosing one force-applies that skin (sets `data-theme` + `data-mode`) and remembers it as the last used in that pool, so the next Dark roll can avoid it.
- Persistence key: `styleTiles.catalogTheme.v2` in `localStorage`. Do not invent a new key.
