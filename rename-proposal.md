# Style Tile Rename Proposal

> **Status:** Proposal Document (No code or filesystem changes applied)  
> **Target Audience:** Design System Maintainers & Curators  
> **Catalog Scope:** Full evaluation of all 60 design style tiles  
> **Naming Philosophy:** Evocative & Archetypal (replacing technical jargon, category labels, and slashes with punchy, character-driven titles)

---

## 1. Executive Summary & Strategy

The current catalog of 60 style tiles has evolved over time, resulting in many names that sound like **internal architectural specs, dry academic classifications, or buzzword soup**:
- **Slashes & Multiple Subtitles:** e.g., `System 07 // Monolithic Hyper-Editorial`, `Dark Tactical Editorial / Cyber-Gothic`
- **Corporate & Category Jargon:** e.g., `Neo-FinTech`, `HealthTech`, `Developer Tooling & Web3 Infrastructure`, `Folder-Tab System`
- **Redundant Suffixes:** e.g., `Skybound Design System`, `Greenwrap Design System`
- **Adjective Overload:** e.g., `Vintage-Modern Editorial & Quirky Neo-Brutalism`, `Modern Hyper-Vibrant Geometric`

### The Renaming Philosophy: Evocative & Archetypal
Rather than merely describing UI widgets, great style tile names evoke **materiality, setting, mood, or a distinct design persona**.
- **Materiality & Tactility:** `Ink & Vellum`, `Raw Foundry`, `Chalk & Tab`, `Ceramicist Atelier`
- **Character Archetypes:** `The Draftsman`, `The Chronicler`, `The Sartorialist`, `The Letterpress`
- **Atmospheric Worlds:** `Obsidian Vault`, `Dune Outpost`, `Fjord & Flora`, `Acid Sunset`
- **Decisive Conviction:** A single, authoritative proposed name and matching slug per tile for clear decision-making.

### Summary of Triage
- **Total Tiles in Catalog:** 60
- **Tiles Flagged for Rename (Part 1):** 45 tiles (75%)
- **Tiles Retained as Strong (Part 2):** 15 tiles (25%)

---

## 2. Master Comparison Matrix (Quick Reference)

| # | Current Name | Current Slug | Proposed Name | Proposed Slug | Badge / Vibe |
|---|---|---|---|---|---|
| 1 | `System 07 // Monolithic Hyper-Editorial` | `monolithic-hyper-editorial` | **The Monolith** | `the-monolith` | Editorial & Archival |
| 2 | `CryptoVista Neo-FinTech` | `cryptovista` | **CryptoVista** | `cryptovista` | Minimalist & Monastic |
| 3 | `Greenwrap Design System` | `greenwrap` | **Greenwrap** | `greenwrap` | Quiet Luxury |
| 4 | `Dark Tactical Editorial / Cyber-Gothic` | `dark-tactical-editorial` | **Cyber Gothic** | `cyber-gothic` | Editorial & Archival |
| 5 | `Skybound Design System` | `skybound` | **Skybound** | `skybound` | Quiet Luxury |
| 6 | `Industrial Blueprint HUD` | `blueprint-hud` | **The Draftsman** | `the-draftsman` | Cyber & Blueprint |
| 7 | `Fluid Bento // Soft SaaS` | `fluid-bento-saas` | **Velvet Bento** | `velvet-bento` | Minimalist & Monastic |
| 8 | `Transform9+ // Neo-Brutalist HealthTech` | `transform9-healthtech` | **Pulse Matrix** | `pulse-matrix` | Neo-Brutalism |
| 9 | `Neo-Brutalist Tech // Developer Tooling & Web3 Infrastructure` | `neo-brutalist-tech` | **Raw Foundry** | `raw-foundry` | Neo-Brutalism |
| 10 | `The Editorial Letterpress // Neo-Brutalist Craft Print` | `editorial-letterpress` | **The Letterpress** | `the-letterpress` | Editorial & Archival |
| 11 | `Modern Hyper-Vibrant Geometric` | `hyper-vibrant-geometric` | **Prism Pop** | `prism-pop` | Playful & Pop |
| 12 | `Architectural Brutalism & Editorial Modernism` | `architectural-brutalism` | **Concrete Gazette** | `concrete-gazette` | Neo-Brutalism |
| 13 | `Bio-Clinical Technical Editorial` | `bio-clinical-editorial` | **Clinical Sage** | `clinical-sage` | Editorial & Archival |
| 14 | `Neo-Dark Tactile FinTech / SaaS` | `neo-dark-tactile-fintech` | **Obsidian Vault** | `obsidian-vault` | Cyber & Blueprint |
| 15 | `Editorial Chromatic Block` | `editorial-chromatic-block` | **Chromatic Gazette** | `chromatic-gazette` | Editorial & Archival |
| 16 | `Retro-Postal Modernist` | `retro-postal-modernist` | **Airmail Modern** | `airmail-modern` | Editorial & Archival |
| 17 | `Editorial High-Contrast Minimalist` | `editorial-high-contrast` | **Ink & Vellum** | `ink-and-vellum` | Minimalist & Monastic |
| 18 | `Industrial Acid // Neo-Grunge` | `industrial-acid-neo-grunge` | **Acid Foundry** | `acid-foundry` | Neo-Brutalism |
| 19 | `Nordic Botanical Tech` | `nordic-botanical-tech` | **Fjord & Flora** | `fjord-and-flora` | Quiet Luxury |
| 20 | `Organic Luxe` | `organic-luxe` | **Verdant Silk** | `verdant-silk` | Quiet Luxury |
| 21 | `Crimson Radiance / Lumina Tech` | `crimson-radiance` | **Crimson Radiance** | `crimson-radiance` | Cyber & Blueprint |
| 22 | `Lab-01 / Industrial Ghost System` | `industrial-ghost-system` | **Ghost Protocol** | `ghost-protocol` | Cyber & Blueprint |
| 23 | `Editorial Neo-Humanist / Impact Refined` | `editorial-neo-humanist` | **The Chronicler** | `the-chronicler` | Editorial & Archival |
| 24 | `Vintage-Modern Editorial & Quirky Neo-Brutalism` | `vintage-modern-quirky-brutalism` | **Paper Tiger** | `paper-tiger` | Neo-Brutalism |
| 25 | `Tactical Hyper-Light` | `tactical-hyper-light` | **Aero Tactical** | `aero-tactical` | Cyber & Blueprint |
| 26 | `ELEnRN Design System` | `elenrn-design-system` | **Nocturne Atelier** | `nocturne-atelier` | Quiet Luxury |
| 27 | `Neo-Obsidian & Acid Sunset` | `neo-obsidian-acid-sunset` | **Acid Sunset** | `acid-sunset` | Cyber & Blueprint |
| 28 | `Luxe Maritime Cybernetic` | `luxe-maritime-cybernetic` | **Abyssal Yacht** | `abyssal-yacht` | Cyber & Blueprint |
| 29 | `Neo-Editorial / Poster Brutalism` | `neo-editorial-poster-brutalism` | **The Broadside** | `the-broadside` | Neo-Brutalism |
| 30 | `Neo-Pop Playful Grotesque` | `neo-pop-playful-grotesque` | **Bubblegum Pop** | `bubblegum-pop` | Playful & Pop |
| 31 | `Earthen Minimalist / Tactical Retro` | `earthen-minimalist-tactical-retro` | **Dune Outpost** | `dune-outpost` | Minimalist & Monastic |
| 32 | `Humanist Warm-Minimalism` | `humanist-warm-minimalism` | **Hearth & Stone** | `hearth-and-stone` | Minimalist & Monastic |
| 33 | `Warm Botanical & Solar Terracotta` | `warm-botanical-solar-terracotta` | **Solar Terracotta** | `solar-terracotta` | Quiet Luxury |
| 34 | `Dramatic Chromatic Editorial` | `dramatic-chromatic-editorial` | **Chromatic Noir** | `chromatic-noir` | Editorial & Archival |
| 35 | `Sartorial Editorial Modernism` | `sartorial-editorial-modernism` | **The Sartorialist** | `the-sartorialist` | Quiet Luxury |
| 36 | `Warm Organic Bento` | `warm-organic-bento` | **Earth Bento** | `earth-bento` | Minimalist & Monastic |
| 37 | `Warm Earth Wellness` | `warm-earth-wellness` | **Sandstone Spa** | `sandstone-spa` | Quiet Luxury |
| 38 | `Luxe Editorial` | `luxe-editorial` | **The Folio** | `the-folio` | Editorial & Archival |
| 39 | `Aurora Dark / Glass-Collab` | `aurora-glass-collab` | **Aurora Glass** | `aurora-glass` | Quiet Luxury |
| 40 | `Neo-Brutalist Tech & Folder-Tab System` | `neo-brutalist-folder-tab` | **Chalk & Tab** | `chalk-and-tab` | Neo-Brutalism |
| 41 | `Artisanal Minimal / Ceramicist Modern` | `artisanal-minimal` | **Ceramicist Atelier** | `ceramicist-atelier` | Minimalist & Monastic |
| 42 | `Botanical Heritage & Press` | `botanical-heritage-press` | **Botanical Press** | `botanical-press` | Editorial & Archival |
| 43 | `Neo-Swiss Editorial` | `neo-swiss-editorial` | **Swiss Vermilion** | `swiss-vermilion` | Editorial & Archival |
| 44 | `Autonomous Tech Dark` | `autonomous-tech-dark` | **Kinetic Carbon** | `kinetic-carbon` | Minimalist & Monastic |
| 45 | `Modern Clinical Editorial` | `modern-clinical-editorial` | **Sage Apothecary** | `sage-apothecary` | Editorial & Archival |

---

## 3. Part 1: Detailed Rename Proposals (45 Tiles)

Each proposal below diagnoses the specific jargon issue in the current title, establishes the design's aesthetic anchors (fonts, colors, and textures), and presents the rationale for the new evocative archetype.

### 1. The Monolith

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `System 07 // Monolithic Hyper-Editorial` | **The Monolith** |
| **URL / File Slug** | `monolithic-hyper-editorial` | `the-monolith` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Fraunces • **Sans:** Space Grotesk • **Mono:** Fragment Mono |
| **Key Palette** | \- | Absolute Carbon (#050505), Anodized Basalt (#0E0F0E), Milled Cold-Steel (#1E201E), Bleached Vellum (#FBF9F3) |

> **Jargon Diagnosis:**  
> Heavy slash syntax (//), numbered code prefix ('System 07'), and textbook design buzzwords ('Monolithic Hyper-Editorial').

> **Archetypal Rationale:**  
> Echoes the 1970s Swiss archival monolith—grounded in Absolute Carbon and Bleached Vellum with high-contrast Fraunces serifs.

**Design Essence:** *Physical-digital convergence with 1970s Swiss archival typography, brutalist industrial telemetry, cold-steel hairlines, high-ion chartreuse actuators, and 1-bit solid offset geometry.*

---

### 2. CryptoVista

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `CryptoVista Neo-FinTech` | **CryptoVista** |
| **URL / File Slug** | `cryptovista` | `cryptovista` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Cabinet Grotesk • **Sans:** Plus Jakarta Sans • **Mono:** Space Grotesk |
| **Key Palette** | \- | Canvas Base (#FFFFFF), Surface Neutral (#F5F6F8), Surface Inverted (#0F1115), Text Primary (#0A0B0D) |

> **Jargon Diagnosis:**  
> Tacked-on 'Neo-FinTech' subtitle feels like a corporate industry pitch deck rather than a design personality.

> **Archetypal Rationale:**  
> Drops the corporate jargon while preserving the clean, modern identity. The single brand name feels established and confident.

**Design Essence:** *High-contrast Neo-FinTech minimal architecture with tactile parametric clay surfaces, precision 1.*

---

### 3. Greenwrap

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Greenwrap Design System` | **Greenwrap** |
| **URL / File Slug** | `greenwrap` | `greenwrap` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Deep Charcoal (#121414), Deep Pine (#063826), Fresh Sage (#9BC89E), Subdued Dark (#1E2121) |

> **Jargon Diagnosis:**  
> Redundant 'Design System' suffix; in a catalog of style tiles, stating 'Design System' adds clutter without flavor.

> **Archetypal Rationale:**  
> Greenwrap stands strong alone, evoking sustainable logistics, deep pine enclosures, and organic closed-loop elegance.

**Design Essence:** *Modern eco-brutalist and neo-editorial design system for closed-loop supply chains, organic sustainable logistics, and high-contrast dark mode interfaces.*

---

### 4. Cyber Gothic

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Dark Tactical Editorial / Cyber-Gothic` | **Cyber Gothic** |
| **URL / File Slug** | `dark-tactical-editorial` | `cyber-gothic` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Base (#0A0A0C), Canvas Subtle (#121216), Surface Card (#18181D), Surface Elevated (#22222A) |

> **Jargon Diagnosis:**  
> Unwieldy compound name with slash syntax combining tactical, editorial, and cyber-gothic into a mouthful.

> **Archetypal Rationale:**  
> Sharp, punchy pairing that crystallizes the dark, high-contrast gothic serif typography with technical cyber-hud discipline.

**Design Essence:** *High-contrast dark tactical cyber-gothic design system featuring deep obsidian black surfaces, ambient blackletter calligraphy watermarks, 237° tactical telemetry, perspective dashed orbital ground stages, and razor-sharp engineered brutalism.*

---

### 5. Skybound

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Skybound Design System` | **Skybound** |
| **URL / File Slug** | `skybound` | `skybound` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Inter • **Mono:** Plus Jakarta Sans |
| **Key Palette** | \- | Brand Dark (#0E0F12), Electric Lime (#EDF947), Canvas Alabaster (#F5F6F8), Surface Pure (#FFFFFF) |

> **Jargon Diagnosis:**  
> Appended 'Design System' label dilutes an otherwise airy, premium brand name.

> **Archetypal Rationale:**  
> Clean, aspirational, and memorable. Pairs naturally with the high-altitude cloud gradients and quiet luxury feel.

**Design Essence:** *High-utility visual architecture for modern air travel, aviation hospitality, and luxury destination discovery.*

---

### 6. The Draftsman

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Industrial Blueprint HUD` | **The Draftsman** |
| **URL / File Slug** | `blueprint-hud` | `the-draftsman` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Big Shoulders Display • **Sans:** IBM Plex Sans • **Mono:** IBM Plex Mono |
| **Key Palette** | \- | Prussian Night (#062033), Cyanotype Paper (#0A3D5C), Drawing Frame (#114E72), Ivory Vector (#EEF4F8) |

> **Jargon Diagnosis:**  
> 'HUD' (Heads-Up Display) is video game/UI jargon; 'Industrial Blueprint' is purely descriptive.

> **Archetypal Rationale:**  
> Archetypal persona evoking the meticulous creator behind technical schematics, cyanotype blueprints, and hairline precision.

**Design Essence:** *A drawing sheet that became an interface: Prussian cyanotype paper, ivory construction ink, ISO title blocks, brass revision stamps, and a thin instrument overlay — not neon HUD chrome.*

---

### 7. Velvet Bento

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Fluid Bento // Soft SaaS` | **Velvet Bento** |
| **URL / File Slug** | `fluid-bento-saas` | `velvet-bento` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Surface-0 (#ECEFF2), Surface-1 (#FFFFFF), Surface-2 (#F6F8FA), Surface-Dark (#111315) |

> **Jargon Diagnosis:**  
> Slashes (//) and B2B buzzword ('Soft SaaS') sound like a venture capital marketing slide.

> **Archetypal Rationale:**  
> Tactile and sensory. 'Velvet' evokes the pillowy soft shadows and smooth curves, while 'Bento' grounds the modular card layout.

**Design Essence:** *High-precision soft SaaS interface with warm slate canvas, pure white bento surfaces, 24px outer radii, 9999px pills, tabular figures, and tactical berry pink momentum accents.*

---

### 8. Pulse Matrix

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Transform9+ // Neo-Brutalist HealthTech` | **Pulse Matrix** |
| **URL / File Slug** | `transform9-healthtech` | `pulse-matrix` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Dark (#090A0C), Canvas Light (#FFFFFF), Surface Dark (#12141A), Electric Lime (#A8F33A) |

> **Jargon Diagnosis:**  
> Arbitrary numbered brand tag ('Transform9+') coupled with slashes and industry jargon ('HealthTech').

> **Archetypal Rationale:**  
> Evokes vitality, biometric rhythm, and the high-energy neon chartreuse brutalist grid without clinical cliches.

**Design Essence:** *High-contrast precision dark mode with deep onyx canvas, stark white spotlight cards, electric lime actuators, sequential blue telemetry stack, and 0px brutalist sharp geometry.*

---

### 9. Raw Foundry

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Brutalist Tech // Developer Tooling & Web3 Infrastructure` | **Raw Foundry** |
| **URL / File Slug** | `neo-brutalist-tech` | `raw-foundry` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Space Grotesk • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Ground (#FAFAFA), Surface Card (#F4F4F5), Surface Inset (#E4E4E7), Core Ink (#09090B) |

> **Jargon Diagnosis:**  
> Severe buzzword overload: 'Developer Tooling & Web3 Infrastructure' with double slashes.

> **Archetypal Rationale:**  
> Powerful industrial archetype. 'Foundry' honors code generation and brutalist steel; 'Raw' speaks to zero-radius borders and high-contrast yellow.

**Design Essence:** *High-density monochrome canvas with hyper-volt lime actuators, ultramarine blue cryptographic links, rigid 0px brutalist geometry, and tactile 3px hardball ink offset shadows.*

---

### 10. The Letterpress

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `The Editorial Letterpress // Neo-Brutalist Craft Print` | **The Letterpress** |
| **URL / File Slug** | `editorial-letterpress` | `the-letterpress` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Fraunces • **Sans:** Plus Jakarta Sans • **Mono:** IBM Plex Mono |
| **Key Palette** | \- | Paper Base (#F0E2C4), Cream Surface (#FBF4E3), Prime Ink (#1A140E), Oxblood Prime (#8E2A1B) |

> **Jargon Diagnosis:**  
> Clunky double-slash subtitle ('Neo-Brutalist Craft Print') overexplains the medium.

> **Archetypal Rationale:**  
> Timeless, artisanal archetype honoring relief printing, debossed cotton paper, and rich black intaglio ink.

**Design Essence:** *High-tactility print-shop aesthetic blending historical editorial typography (Fraunces & IBM Plex Mono) with neo-brutalist structure, fibrous paper washes, and mechanical depress states.*

---

### 11. Prism Pop

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Modern Hyper-Vibrant Geometric` | **Prism Pop** |
| **URL / File Slug** | `hyper-vibrant-geometric` | `prism-pop` |
| **Vibe Badge** | Playful & Pop | Playful & Pop |
| **Core Aesthetics** | \- | **Display:** THICCCBOI • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Electric Iris Base (#614DFF), Deep Focus Hover (#4E37F0), High-Press Active (#3C24DF), Lavender Tint Subtle (#EDE9FE) |

> **Jargon Diagnosis:**  
> A generic three-adjective description ('Modern Hyper-Vibrant Geometric') with zero distinct identity.

> **Archetypal Rationale:**  
> Short, punchy, and vivid. 'Prism' captures the saturated chromatic spectrum; 'Pop' conveys energetic Memphis movement.

**Design Essence:** *Electric iris foundations (#614DFF), pure white canvas planes, squircle continuous flow radii (6px to 32px), filleted rotational petal geometry, technical blueprint scaffolding, and snappy elastic physics.*

---

### 12. Concrete Gazette

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Architectural Brutalism & Editorial Modernism` | **Concrete Gazette** |
| **URL / File Slug** | `architectural-brutalism` | `concrete-gazette` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Vermilion Red Core (#D7261E), Deep Signal Red (#B51D16), Ink Black Contrast (#121212), Architectural Cream (#F6F4EE) |

> **Jargon Diagnosis:**  
> Sounds like a university thesis title ('Architectural Brutalism & Editorial Modernism').

> **Archetypal Rationale:**  
> Captures the collision between heavyweight architectural form and rigorous editorial publishing.

**Design Essence:** *Swiss International meets Constructivist Editorial: Vermilion Red (#D7261E), Ink Black (#121212), Architectural Cream (#F6F4EE), strict zero-radius geometry, 14°-18° diagonal architectural cuts, and monumental typographic contrast.*

---

### 13. Clinical Sage

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Bio-Clinical Technical Editorial` | **Clinical Sage** |
| **URL / File Slug** | `bio-clinical-editorial` | `clinical-sage` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Neue Haas Grotesk • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Base (#F7F8F1), Surface Card (#FFFFFF), Primary Deep (#21361D), Olive Mid (#60714E) |

> **Jargon Diagnosis:**  
> Cold, clinical adjective salad ('Bio-Clinical Technical Editorial').

> **Archetypal Rationale:**  
> Pairs the disciplined precision of modern medical research with the organic serenity of botanical sage.

**Design Essence:** *Bio-Clinical Technical Editorial: Warm bio-ivory (#F7F8F1), coniferous pine (#21361D), radiant matcha chartreuse (#DBE8B8), flat Swiss minimalist layering, and monospace clinical telemetry.*

---

### 14. Obsidian Vault

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Dark Tactile FinTech / SaaS` | **Obsidian Vault** |
| **URL / File Slug** | `neo-dark-tactile-fintech` | `obsidian-vault` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Ground Canvas (#08090A), Elevated Card (#121316), Electric Lime (#D8F878), Warm Amber (#F7A832) |

> **Jargon Diagnosis:**  
> Extreme jargon mashup ('Neo-Dark Tactile FinTech / SaaS') with slash syntax.

> **Archetypal Rationale:**  
> An impenetrable, high-security archetype. Evokes deep dark glass, tactile controls, and high-worth institutional finance.

**Design Essence:** *Neo-Dark Tactile FinTech / SaaS: Ultra-deep void canvas (#08090A), frosted glass overlays, pinned hardware micro-plates with metallic rivets, atmospheric aura underglows, and high-energy electric chartreuse CTAs (#D8F878 → #AEE63A).*

---

### 15. Chromatic Gazette

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Editorial Chromatic Block` | **Chromatic Gazette** |
| **URL / File Slug** | `editorial-chromatic-block` | `chromatic-gazette` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Cabinet Grotesk • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Parchment Warm (#FAF8EE), Indigo Deep (#2D265C), Vermilion Vivid (#FF5338), Indigo Muted (#A59EC2) |

> **Jargon Diagnosis:**  
> Descriptive design jargon ('Chromatic Block') lacking narrative appeal.

> **Archetypal Rationale:**  
> Celebrates the bold, full-bleed color blocking of avant-garde print broadsheets and cultural journalism.

**Design Essence:** *Editorial Chromatic Block: Tri-tone asymmetric editorial UI featuring high-contrast deep indigo (#2D265C) anchor rail, warm parchment (#FAF8EE) center stage, and vivid vermilion (#FF5338) navigation rail with compressed heavy typography.*

---

### 16. Airmail Modern

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Retro-Postal Modernist` | **Airmail Modern** |
| **URL / File Slug** | `retro-postal-modernist` | `airmail-modern` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Bebas Neue • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Parchment Bg (#F5ECE1), Paper White (#FFFFFF), Electric Blue (#0062FF), Bubblegum Pink (#FF66B2) |

> **Jargon Diagnosis:**  
> Stiff and slightly academic compound ('Retro-Postal Modernist').

> **Archetypal Rationale:**  
> Instantly conjures vintage par avion borders, international stamp franking, and mid-century transatlantic optimism.

**Design Essence:** *Retro-Postal Modernist: Tactile philatelic design system featuring unbleached newsprint parchment (#F5ECE1), high-chroma electric cobalt (#0062FF) and bubblegum rose (#FF66B2), scalloped stamp perforations, airmail duotones, and condensed headline typography.*

---

### 17. Ink & Vellum

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Editorial High-Contrast Minimalist` | **Ink & Vellum** |
| **URL / File Slug** | `editorial-high-contrast` | `ink-and-vellum` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Inter • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Primary (#FFFFFF), Canvas Secondary (#F6F6F6), Surface Dark (#0A0A0A), Text Primary (#111111) |

> **Jargon Diagnosis:**  
> Technical design descriptor ('Editorial High-Contrast Minimalist') rather than a distinctive name.

> **Archetypal Rationale:**  
> Tactile material pairing that honors pure carbon black on archival rag paper, Didone typography, and zero-compromise contrast.

**Design Essence:** *Editorial High-Contrast Minimalist: Razor-sharp modern commerce design system combining pure white gallery canvases (#FFFFFF), studio off-white section contrast (#F6F6F6), jet pitch black split backdrops (#0A0A0A), ultra-light 200 hairline vs.*

---

### 18. Acid Foundry

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Industrial Acid // Neo-Grunge` | **Acid Foundry** |
| **URL / File Slug** | `industrial-acid-neo-grunge` | `acid-foundry` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Space Grotesk • **Mono:** Space Mono |
| **Key Palette** | \- | Void Base (#080808), Surface Panel (#121212), Neon Accent (#FF2A85), Hot Accent (#E60067) |

> **Jargon Diagnosis:**  
> Double slash and genre mashup ('Industrial Acid // Neo-Grunge').

> **Archetypal Rationale:**  
> Combines high-voltage toxic chartreuse hazard accents with heavy-gauge industrial machinery and distressed steel.

**Design Essence:** *Industrial Acid // Neo-Grunge: High-voltage underground brutalist design system combining pitch-black void canvases (#080808), electric neon magenta (#FF2A85), dense redaction tape blocks, distorted glitch typography, 8-bit checkerboard pixel dividers, zero-radius geometry, and 0ms instant 1-to-1 inversion hover physics.*

---

### 19. Fjord & Flora

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Nordic Botanical Tech` | **Fjord & Flora** |
| **URL / File Slug** | `nordic-botanical-tech` | `fjord-and-flora` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Deep Alpine Pine (#0F3B32), Muted Evergreen (#164E43), Warm Linen / Ecru (#F8F3E8), Midnight Pine (#0B2B24) |

> **Jargon Diagnosis:**  
> Clunky three-way portmanteau ('Nordic Botanical Tech').

> **Archetypal Rationale:**  
> Evocative, poetic alliteration that anchors clean Scandinavian minimalism with fresh alpine botanical elegance.

**Design Essence:** *Nordic Botanical Tech: A high-contrast, editorial aesthetic pairing deep organic alpine pine (#0F3B32) and warm linen cards (#F8F3E8) with high-voltage acid chartreuse accents (#D4E825), asymmetric geometric surface layouts (28px 28px 0px 28px), 12-point scalloped seal badges, and precision bio-canopy telemetry.*

---

### 20. Verdant Silk

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Organic Luxe` | **Verdant Silk** |
| **URL / File Slug** | `organic-luxe` | `verdant-silk` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Bebas Neue • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Deep Espresso Cacao (#2B1810), Bittersweet Chocolate (#3D2318), Soft Oat Milk / Bone (#F8F5F0), Cloud Mist Slate (#E6ECF0) |

> **Jargon Diagnosis:**  
> Generic marketing luxury speak ('Organic Luxe') that blurs into hundreds of spa brands.

> **Archetypal Rationale:**  
> Specific, sensory, and opulent. Evokes rich botanical greenery woven with smooth champagne luxury.

**Design Essence:** *Organic Luxe: An opulent, sensory-driven design system uniting deep roasted cacao (#2B1810) and soft oat milk (#F8F5F0) surfaces with liquid caramel-gold accents (#D9822B), fluid molten bezier contours, condensed monolithic display typography ('Bebas Neue'), and handwritten expressive accents ('Caveat Brush').*

---

### 21. Crimson Radiance

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Crimson Radiance / Lumina Tech` | **Crimson Radiance** |
| **URL / File Slug** | `crimson-radiance` | `crimson-radiance` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Obsidian Canvas (#080202), Kinetic Crimson (#B50D00), Solar Orange (#FF6B00), Electric Amber (#FFAE00) |

> **Jargon Diagnosis:**  
> Tacked-on tech sub-brand ('/ Lumina Tech') with unnecessary slash.

> **Archetypal Rationale:**  
> Sheds the corporate tech moniker to let the glowing, high-intensity red-shift atmosphere shine on its own.

**Design Essence:** *Crimson Radiance / Lumina Tech: A hyper-saturated, luminescent dark design system uniting ultra-deep obsidian black (#080202) with kinetic red (#B50D00), solar orange (#FF6B00), and electric amber glows (#FFAE00), multi-tiered glass surfaces, and multi-strand telemetry waveforms.*

---

### 22. Ghost Protocol

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Lab-01 / Industrial Ghost System` | **Ghost Protocol** |
| **URL / File Slug** | `industrial-ghost-system` | `ghost-protocol` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Instrument Sans • **Sans:** Inter • **Mono:** Geist Mono |
| **Key Palette** | \- | Cool Lab Gray (#E8EBEF), Secondary Wash (#F2F3F5), Solid UI White (#FFFFFF), Metallic Highlight (#DDE0E4) |

> **Jargon Diagnosis:**  
> Lab numbering prefix ('Lab-01') and 'System' suffix clutter the identity.

> **Archetypal Rationale:**  
> Stealth, translucent, and cinematic. Perfectly matches the frosted glass, invisible hairline boundaries, and silent telemetry.

**Design Essence:** *Lab-01 / Industrial Ghost System: An ultra-refined achromatic design architecture synthesized from Swiss laboratory precision, future instrumentation telemetry, and soft brutalist geometry.*

---

### 23. The Chronicler

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Editorial Neo-Humanist / Impact Refined` | **The Chronicler** |
| **URL / File Slug** | `editorial-neo-humanist` | `the-chronicler` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Bebas Neue • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Surface Canvas (#EFECE6), Surface Raised (#E5E1D8), Surface Card (#FFFFFF), Surface Inverted (#121212) |

> **Jargon Diagnosis:**  
> Dense art-school terminology ('Editorial Neo-Humanist / Impact Refined').

> **Archetypal Rationale:**  
> A distinguished literary persona. Evokes investigative depth, human warmth, and serious longform journalism.

**Design Essence:** *Editorial Neo-Humanist / Impact Refined: A high-craft editorial design architecture blending compressed, high-impact headline typography (Bebas Neue / Oswald) with warm oat parchment surfaces (#EFECE6), pure solid ink, and vibrant emerald jade accents (#2E9E6B).*

---

### 24. Paper Tiger

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Vintage-Modern Editorial & Quirky Neo-Brutalism` | **Paper Tiger** |
| **URL / File Slug** | `vintage-modern-quirky-brutalism` | `paper-tiger` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Plus Jakarta Sans • **Mono:** Space Mono |
| **Key Palette** | \- | Base Canvas (#FAF7EE), Grid Micro-Line (#EBE5D8), Clean White (#FFFFFF), Deep Ink (#240A18) |

> **Jargon Diagnosis:**  
> Six-word phrase salad ('Vintage-Modern Editorial & Quirky Neo-Brutalism').

> **Archetypal Rationale:**  
> Playful, memorable, and cheeky. Captures the tactile paper collage, quirky retro illustrations, and bold brutalist lines.

**Design Essence:** *Vintage-Modern Editorial & Quirky Neo-Brutalism: A tactile, high-personality editorial design architecture fusing newsprint cream papercraft (#FAF7EE) with razor-sharp 0px brutalist geometry, rich plum deep ink (#240A18), high-energy tangerine (#FA6A1C), periwinkle blue, two-tone forest pine checkerboard ribbons, and serrated starburst decals.*

---

### 25. Aero Tactical

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Tactical Hyper-Light` | **Aero Tactical** |
| **URL / File Slug** | `tactical-hyper-light` | `aero-tactical` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Bebas Neue • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Aero Slate (#F1F5F9), Ghost Slate (#E2E8F0), Abyss Navy (#051226), Deep Void (#0A1D38) |

> **Jargon Diagnosis:**  
> 'Tactical Hyper-Light' feels like a synthetic gear spec sheet.

> **Archetypal Rationale:**  
> Aerospace-inspired and razor sharp. Matches the ultra-clean HUD telemetry, neon cyan indicators, and featherweight structure.

**Design Essence:** *Tactical Hyper-Light: A high-performance design architecture fusing the kinetic precision of esport telemetry HUDs with the compositional clarity of editorial modernism.*

---

### 26. Nocturne Atelier

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `ELEnRN Design System` | **Nocturne Atelier** |
| **URL / File Slug** | `elenrn-design-system` | `nocturne-atelier` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Avenir Serif Display • **Sans:** Poppins Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Off-White Cream (#FDFBF6), Deep Forest Emerald (#1A4F4F), Warm Terracotta-Rust (#C86B39), Darkened Emerald (#143F3F) |

> **Jargon Diagnosis:**  
> Cryptic camelCase acronym ('ELEnRN') combined with redundant 'Design System'.

> **Archetypal Rationale:**  
> Sophisticated and mysterious. Captures the moody midnight canvas, lavender mist, and bespoke haute couture craft.

**Design Essence:** *ELEnRN Design System: Sophisticated Heritage meets Modern Clarity.*

---

### 27. Acid Sunset

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Obsidian & Acid Sunset` | **Acid Sunset** |
| **URL / File Slug** | `neo-obsidian-acid-sunset` | `acid-sunset` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Surface (#0D1111), Card Default (#141918), Card Elevated (#1A211F), Amber Gold (#F59E0B) |

> **Jargon Diagnosis:**  
> Wordy multi-part phrase ('Neo-Obsidian & Acid Sunset').

> **Archetypal Rationale:**  
> Punchy and unforgettable. Immediately evokes the glowing neon horizon burning against an obsidian night sky.

**Design Essence:** *Neo-Obsidian & Acid Sunset: High-Contrast Dark Surface UI with Warm-to-Acid Kinetic Data Layer.*

---

### 28. Abyssal Yacht

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Luxe Maritime Cybernetic` | **Abyssal Yacht** |
| **URL / File Slug** | `luxe-maritime-cybernetic` | `abyssal-yacht` |
| **Vibe Badge** | Cyber & Blueprint | Cyber & Blueprint |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Abyss Void Primary (#030B12), Deep Sea Navy (#081624), Crimson Hull Core (#E52521), Crimson Shadow Deep (#9E1311) |

> **Jargon Diagnosis:**  
> Three conflicting buzzwords glued together ('Luxe Maritime Cybernetic').

> **Archetypal Rationale:**  
> Striking juxtaposition of nautical luxury and deep oceanic abyss with neon underwater sonar instrumentation.

**Design Essence:** *Luxe Maritime Cybernetic: Cinematic Dark Glass Design System.*

---

### 29. The Broadside

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Editorial / Poster Brutalism` | **The Broadside** |
| **URL / File Slug** | `neo-editorial-poster-brutalism` | `the-broadside` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Bebas Neue • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Concrete Paper Base (#E1E1E1), Deep Carbon Black (#111111), Acid Coral Burst (#FF505F), Electric Chartreuse (#D9FF38) |

> **Jargon Diagnosis:**  
> Category labels separated by a slash ('Neo-Editorial / Poster Brutalism').

> **Archetypal Rationale:**  
> Historical print term for large-format single-sheet posters and radical manifestos. Perfect for giant woodblock type.

**Design Essence:** *Neo-Editorial Poster Brutalism: High-contrast, hyper-condensed typography, acid-pop vector overlays, utilitarian 0px grid geometry, and zine-inspired collage layering.*

---

### 30. Bubblegum Pop

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Pop Playful Grotesque` | **Bubblegum Pop** |
| **URL / File Slug** | `neo-pop-playful-grotesque` | `bubblegum-pop` |
| **Vibe Badge** | Playful & Pop | Playful & Pop |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Pure Cream Base (#F8F9FA), Charcoal Void (#111215), Electric Lime (#E0FA53), Soft Lilac (#D0B8FF) |

> **Jargon Diagnosis:**  
> Uses typography classification jargon ('Playful Grotesque') that alienates non-designers.

> **Archetypal Rationale:**  
> Instant nostalgia, cheerful rounded geometry, candy colors, and toy-like micro-interactions.

**Design Essence:** *Neo-Pop Playful Grotesque: Gen-Z Vibe-Driven, High-Contrast Neo-Brutalist Soft UI.*

---

### 31. Dune Outpost

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Earthen Minimalist / Tactical Retro` | **Dune Outpost** |
| **URL / File Slug** | `earthen-minimalist-tactical-retro` | `dune-outpost` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Anton • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Warm Bone Base (#F3EFE0), Soft Parchment Card (#FAF7EE), Olive Drab / Deep Moss (#4B4F36), Electric Mustard Accent (#EBE53B) |

> **Jargon Diagnosis:**  
> Four disconnected buzzwords with a slash ('Earthen Minimalist / Tactical Retro').

> **Archetypal Rationale:**  
> Immersive desert expedition archetype. Evokes sun-baked terracotta dust, rugged utilitarian field gear, and field telemetry.

**Design Essence:** *Earthen Minimalist / Tactical Retro: High-contrast utilitarian design system founded on flat surface nesting, muted military olive (#4B4F36), warm bone parchment (#F3EFE0), electric mustard (#EBE53B), ultra-bold condensed Anton display type, and tactile matte micro-depth.*

---

### 32. Hearth & Stone

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Humanist Warm-Minimalism` | **Hearth & Stone** |
| **URL / File Slug** | `humanist-warm-minimalism` | `hearth-and-stone` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Warm Oat Canvas (#F7F2EA), Pure Surface Card (#FFFFFF), Muted Subtle Container (#EFE9DF), Honey Caramel Primary (#CC7827) |

> **Jargon Diagnosis:**  
> Hyphenated design textbook category ('Humanist Warm-Minimalism').

> **Archetypal Rationale:**  
> Warm, architectural, and tactile. Evokes natural clay plaster, limestone boulders, and welcoming human warmth.

**Design Essence:** *Humanist Warm-Minimalism (Editorial Tech): Serene warm oat canvas (#F7F2EA), pure white cards, rich honey caramel accents (#CC7827), pitch obsidian typography (#111111), 28px bento radii, hatched progress tracks, and ultra-soft diffused ambient illumination.*

---

### 33. Solar Terracotta

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Warm Botanical & Solar Terracotta` | **Solar Terracotta** |
| **URL / File Slug** | `warm-botanical-solar-terracotta` | `solar-terracotta` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Sun-Baked Terracotta (#B84E29), Radiant Marigold Gold (#FAB833), Deep Carbon Black (#141414), Sunlit Linen Cream (#EEDCB9) |

> **Jargon Diagnosis:**  
> Overly descriptive compound name with too many adjectives.

> **Archetypal Rationale:**  
> Warm, resonant, and Mediterranean. Captures the sun-baked clay tiles, olive groves, and golden hour light.

**Design Essence:** *Warm Botanical & Solar Terracotta: Grounded sun-baked terracotta (#B84E29), radiant marigold gold (#FAB833), frosted ambient glass overlays, 36px container geometry, 45° leader wire diagram nodes, and a luminous restorative apothecary aesthetic.*

---

### 34. Chromatic Noir

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Dramatic Chromatic Editorial` | **Chromatic Noir** |
| **URL / File Slug** | `dramatic-chromatic-editorial` | `chromatic-noir` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Playfair Display • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Parisian Crimson / Carmine (#9E0D12), Deep Wine Vignette (#7D080C), Dark Oxblood Silhouette (#1E0204), Pure Editorial White (#FFFFFF) |

> **Jargon Diagnosis:**  
> Rhyming descriptor ('Dramatic Chromatic') that sounds synthetic.

> **Archetypal Rationale:**  
> High-drama runway aesthetic where deep velvety blacks are pierced by radiant spectrum light beams.

**Design Essence:** *Luxury Editorial / Dramatic Chromatic Minimalism: Saturated Parisian crimson (#9E0D12), deep wine (#7D080C), dark oxblood Didone watermark letterforms bleeding off-screen, pure white micro-metadata, and razor-sharp architectural 0-2px geometry.*

---

### 35. The Sartorialist

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Sartorial Editorial Modernism` | **The Sartorialist** |
| **URL / File Slug** | `sartorial-editorial-modernism` | `the-sartorialist` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Fraunces • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Warm Bone Antique Ivory (#F5EFEB), Deep Oxblood Burgundy (#5C1013), Charcoal Noir (#12100E), Neutral Stone Parchment (#EBE4DC) |

> **Jargon Diagnosis:**  
> Clunky academic triple descriptor ('Sartorial Editorial Modernism').

> **Archetypal Rationale:**  
> Personified fashion authority. Evokes bespoke Savile Row tailoring, crisp linen folds, and high-fashion editorial rigor.

**Design Essence:** *Sartorial Editorial Modernism: High-fashion atelier precision blending warm bone antique ivory (#F5EFEB), deep oxblood burgundy (#5C1013), charcoal noir pill buttons (#12100E), deconstructed bento mosaic tiles, and 1px sandstone hairline dividers.*

---

### 36. Earth Bento

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Warm Organic Bento` | **Earth Bento** |
| **URL / File Slug** | `warm-organic-bento` | `earth-bento` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Oat Canvas (#F7F5EE), White Card (#FFFFFF), Sunburst Orange (#F38D3C), Apricot Tint (#FDF1E6) |

> **Jargon Diagnosis:**  
> Stack of soft descriptive modifiers ('Warm Organic Bento').

> **Archetypal Rationale:**  
> Concise, grounding, and modern. Ties Japanese modular bento layouts to warm ceramic and woodgrain textures.

**Design Essence:** *Warm, tactile SaaS bento on oat canvas #F7F5EE with 24px modules, sunburst orange #F38D3C, pastel categorical chips, and a signature vertical 4px dot-matrix chart.*

---

### 37. Sandstone Spa

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Warm Earth Wellness` | **Sandstone Spa** |
| **URL / File Slug** | `warm-earth-wellness` | `sandstone-spa` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Sandstone (#C5A58E), Ceramic White (#FFFFFF), Oat Milk (#F5EEE8), Espresso (#32231D) |

> **Jargon Diagnosis:**  
> Generic wellness marketing phrase ('Warm Earth Wellness').

> **Archetypal Rationale:**  
> Evokes serene luxury resorts carved into desert canyons, warm mineral pools, and tactile earthenware.

**Design Essence:** *Hospitality wellness language on warm sandstone #C5A58E with ceramic-white surfaces, espresso #32231D type, and white pill CTAs that invert on hover.*

---

### 38. The Folio

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Luxe Editorial` | **The Folio** |
| **URL / File Slug** | `luxe-editorial` | `the-folio` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Bodoni Moda • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Paper White (#FFFFFF), Editorial Black (#0A0A0A), Muted Grey (#6E6E73), Hairline (#E5E5E5) |

> **Jargon Diagnosis:**  
> Vague, generic category descriptor ('Luxe Editorial').

> **Archetypal Rationale:**  
> Classic publishing archetype. Evokes high-end oversized art monographs, Bodoni typography, and museum-grade paper.

**Design Essence:** *High-contrast monochrome fashion editorial: stark white canvas, Bodoni Moda as the hero voice, giant watermark type, 4px glass overlays, and black/white pill inversion.*

---

### 39. Aurora Glass

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Aurora Dark / Glass-Collab` | **Aurora Glass** |
| **URL / File Slug** | `aurora-glass-collab` | `aurora-glass` |
| **Vibe Badge** | Quiet Luxury | Quiet Luxury |
| **Core Aesthetics** | \- | **Display:** Plus Jakarta Sans • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Pitch Canvas (#07070A), Glass Primary (rgba(255, 255, 255, 0.08)), Electric Lime (#B8F64B), Magenta Pulse (#E12B7C) |

> **Jargon Diagnosis:**  
> Slash syntax and corporate jargon ('Glass-Collab').

> **Archetypal Rationale:**  
> Streamlined and luminous. Highlights the 32px frosted glass surfaces glowing with ambient polar auroras.

**Design Essence:** *High-end spatial collaboration system on pitch black #07070A canvas with 32px frosted glass surfaces, multi-spectral aurora mesh glow, high-energy electric lime CTAs, and warm amber multiplayer presence.*

---

### 40. Chalk & Tab

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Brutalist Tech & Folder-Tab System` | **Chalk & Tab** |
| **URL / File Slug** | `neo-brutalist-folder-tab` | `chalk-and-tab` |
| **Vibe Badge** | Neo-Brutalism | Neo-Brutalism |
| **Core Aesthetics** | \- | **Display:** Syne • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Base (#EAEAE4), Surface White (#FFFFFF), Surface Subtle (#F4F4F0), Surface Inverse (#0C0C0C) |

> **Jargon Diagnosis:**  
> Technical UI component jargon ('Folder-Tab System') plus 'Neo-Brutalist Tech'.

> **Archetypal Rationale:**  
> Tactile material pairing. 'Chalk' references the muted pale paper surfaces; 'Tab' captures the iconic physical filing tabs.

**Design Essence:** *Tactile neo-brutalist engineering system on muted warm chalk #EAEAE4 with asymmetric folder-tab cards, flame orange #FF4405 CTAs that invert on hover, electric cobalt #3438F5 focal tiles, and axonometric wireframes.*

---

### 41. Ceramicist Atelier

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Artisanal Minimal / Ceramicist Modern` | **Ceramicist Atelier** |
| **URL / File Slug** | `artisanal-minimal` | `ceramicist-atelier` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Caveat • **Sans:** Plus Jakarta Sans • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Deep Cobalt (#27477D), Powder Sky (#D8ECF8), Chalk White (#FFFFFF), Porcelain White (#F8FAFC) |

> **Jargon Diagnosis:**  
> Clunky dual subtitle with slash ('Artisanal Minimal / Ceramicist Modern').

> **Archetypal Rationale:**  
> Evokes the studio of a master potter—raw bisque terracotta, powder blue glazes, cobalt ink, and handcrafted grace.

**Design Essence:** *Ceramicist craft minimalism on bright chalk white #FFFFFF with deep cobalt #27477D ink, soft powder sky glaze halos #D8ECF8, raw bisque terracotta warmth #F9E7DD, and fluid script display typography.*

---

### 42. Botanical Press

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Botanical Heritage & Press` | **Botanical Press** |
| **URL / File Slug** | `botanical-heritage-press` | `botanical-press` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Libre Baskerville • **Sans:** Plus Jakarta Sans • **Mono:** Plus Jakarta Sans |
| **Key Palette** | \- | Pale Sage Canvas (#CCD7D1), Paper Card Sheet (#DCE4DF), Paper Muted Recess (#BFCCC5), Intaglio Spruce Primary (#1D352B) |

> **Jargon Diagnosis:**  
> Compound phrase with redundant connective words ('Heritage & Press').

> **Archetypal Rationale:**  
> Crisp, dignified, and archival. Evokes pressed flower specimens, intaglio spruce ink, and botanical ledgers.

**Design Essence:** *Botanical Heritage & Press: 19th-century naturalist ledger aesthetic constructed on mineral-washed rag paper (#CCD7D1) and elevated specimen sheets (#DCE4DF), printed with intaglio spruce ink (#1D352B), double ledger rules, and stamped cinnabar pressmarks (#E75B54).*

---

### 43. Swiss Vermilion

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Neo-Swiss Editorial` | **Swiss Vermilion** |
| **URL / File Slug** | `neo-swiss-editorial` | `swiss-vermilion` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Inter • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Primary (#FFFFFF), Canvas Secondary (#E5E5E7), Ink Primary (#0A0A0A), Ink Secondary (#9E9EA3) |

> **Jargon Diagnosis:**  
> Academic design history classification ('Neo-Swiss Editorial').

> **Archetypal Rationale:**  
> Highlights the signature contrast: uncompromising Swiss grid discipline electrified by piercing vermilion accents.

**Design Essence:** *Neo-Swiss Editorial: High-density modernist monochrome system on dual white and cool stone canvases (#FFFFFF / #E5E5E7) with ultra-rationalist Swiss grotesk typography, flat zero-elevation planar contrast, hairline rules, and vivid vermilion signal accents (#FF2800).*

---

### 44. Kinetic Carbon

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Autonomous Tech Dark` | **Kinetic Carbon** |
| **URL / File Slug** | `autonomous-tech-dark` | `kinetic-carbon` |
| **Vibe Badge** | Minimalist & Monastic | Minimalist & Monastic |
| **Core Aesthetics** | \- | **Display:** Inter • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Base (#0A0B0D), Surface Layer 1 (#121417), Surface Layer 2 (#181B1F), Content Primary (#F4F4F6) |

> **Jargon Diagnosis:**  
> Dry B2B software marketing speak ('Autonomous Tech Dark').

> **Archetypal Rationale:**  
> High-performance materiality. Deep carbon weave surfaces animated by glowing kinetic-green status pulses.

**Design Essence:** *Autonomous Tech Dark: High-density technical minimalism on deep carbon surfaces (#0A0B0D / #121417 / #181B1F) with diffuse translucent occlusion, hairline boundaries, disciplined Inter typography, and vivid kinetic-green focus accents (#34D399).*

---

### 45. Sage Apothecary

| Field | Current Specification | Proposed Specification |
|---|---|---|
| **Display Name** | `Modern Clinical Editorial` | **Sage Apothecary** |
| **URL / File Slug** | `modern-clinical-editorial` | `sage-apothecary` |
| **Vibe Badge** | Editorial & Archival | Editorial & Archival |
| **Core Aesthetics** | \- | **Display:** Sofia Sans • **Sans:** Inter • **Mono:** JetBrains Mono |
| **Key Palette** | \- | Canvas Warm (#FAF9F5), Container Warm (#F5F4EE), Container Tinted (#DFE7E2), Text Primary (#1A1A18) |

> **Jargon Diagnosis:**  
> Cold and antiseptic combination ('Modern Clinical Editorial').

> **Archetypal Rationale:**  
> Transforms sterile clinical tones into an artisanal, holistic healing space with muted sage and warm linen.

**Design Essence:** *Modern Clinical Editorial: Approachable, serene clinical minimalism built on warm linen and ecru surfaces (#FAF9F5 / #F5F4EE) with mineral sage bands (#DFE7E2), precise charcoal typography (#1A1A18), editorial terracotta accents (#C36746), and botanical green badging (#196941).*

---

## 4. Part 2: Retained Designs (15 Tiles)

These 15 style tiles already feature strong, memorable, and evocative names that avoid tech jargon and successfully communicate personality. They are recommended to be **retained as-is**.

| # | Name | Slug | Vibe Badge | Core Strengths |
|---|---|---|---|---|
| 1 | **Editorial Vintage Chic** | `editorial-vintage-chic` | Editorial & Archival | Effortlessly communicative and balanced. Bridges high-fashion Didone typography with nostalgic peach and terracotta warmth. |
| 2 | **Healthy Pets, Happy Hearts** | `healthy-pets` | Playful & Pop | Warm, empathetic, and consumer-friendly. Radiates approachable care without resorting to clinical jargon. |
| 3 | **Warm Wabi-Sabi Ledger** | `warm-wabisabi` | Minimalist & Monastic | Deeply evocative and tactile. 'Wabi-Sabi' and 'Ledger' beautifully ground the weathered Japanese paper aesthetic. |
| 4 | **Retro-Pop Sunset** | `retro-pop-sunset` | Playful & Pop | Instant mood setter. Pairs golden-hour 70s nostalgia with playful California groove. |
| 5 | **Cyber-Kinetic Motorsport** | `cyber-kinetic-motorsport` | Cyber & Blueprint | High-octane, vivid, and unmistakable. Captures speed, telemetry, neon tire tracks, and aerodynamic energy. |
| 6 | **Luminous Midnight** | `luminous-midnight` | Quiet Luxury | Poetic and atmospheric. Paints an immediate picture of bioluminescent neon glowing in pitch darkness. |
| 7 | **Editorial Noir** | `editorial-noir` | Editorial & Archival | Classic, punchy, and cinematic. Evokes high-contrast shadows, hardboiled journalism, and timeless mystery. |
| 8 | **Lavender Minimal** | `lavender-minimal` | Minimalist & Monastic | Gentle, understated, and memorable. Two words communicate color and philosophy with complete clarity. |
| 9 | **Ethos Void** | `ethos-void` | Quiet Luxury | Distinctive, mysterious, and philosophical. Sounds like an elite luxury design studio or space architecture lab. |
| 10 | **Cobalt & Concrete** | `cobalt-concrete` | Neo-Brutalism | Superb material pairing. Contrasts the heavy industrial brutality of poured concrete with electric cobalt ink. |
| 11 | **Obsidian Kinetic** | `obsidian-kinetic` | Quiet Luxury | Sleek, tactile, and premium. Captures the deep void glass physics and high-end automotive luxury. |
| 12 | **Aero-Aquatic** | `aero-aquatic` | Quiet Luxury | Uniquely memorable and vivid. Perfect harmony of sky gradients, hydrated glass, and marine athletics. |
| 13 | **Industrial Dynamo** | `industrial-dynamo` | Cyber & Blueprint | Energetic and mechanical. Conjures rotating turbines, high-voltage safety orange, and raw electrical power. |
| 14 | **Tuscan Nostalgia** | `tuscan-nostalgia` | Editorial & Archival | Rich, romantic, and sensory. Transports the user directly to sun-drenched Italian hills, olive groves, and parchment. |
| 15 | **Curated Field Guide** | `curated-field-guide` | Minimalist & Monastic | Tactile, bookish, and expedition-ready. Evokes a dog-eared Moleskine notebook filled with meticulous field notes. |

### Strengths Breakdown of Retained Titles

#### 1. Editorial Vintage Chic (`editorial-vintage-chic`)
- **Badge:** Editorial & Archival
- **Why it works:** Effortlessly communicative and balanced. Bridges high-fashion Didone typography with nostalgic peach and terracotta warmth.
- **Visual Anchor:** *Warm Alabaster Linen • Deep Carbon Ink • Vivid Terracotta • Dusty Salmon Ribbon • Playfair Display Serif • Tilted Marquee Tape • 0px Editorial Discipline*

#### 2. Healthy Pets, Happy Hearts (`healthy-pets`)
- **Badge:** Playful & Pop
- **Why it works:** Warm, empathetic, and consumer-friendly. Radiates approachable care without resorting to clinical jargon.
- **Visual Anchor:** *Playful Neo-Retro • Organic Warmth • High-Contrast Editorial*

#### 3. Warm Wabi-Sabi Ledger (`warm-wabisabi`)
- **Badge:** Minimalist & Monastic
- **Why it works:** Deeply evocative and tactile. 'Wabi-Sabi' and 'Ledger' beautifully ground the weathered Japanese paper aesthetic.
- **Visual Anchor:** *Organic Minimalism • Tactile Craft • Serene Editorial*

#### 4. Retro-Pop Sunset (`retro-pop-sunset`)
- **Badge:** Playful & Pop
- **Why it works:** Instant mood setter. Pairs golden-hour 70s nostalgia with playful California groove.
- **Visual Anchor:** *DTC High-Energy • 1970s Sunset Wave • Brand Crimson & Citrus Orange • Bubbly Display & Tactile Sticker Badges*

#### 5. Cyber-Kinetic Motorsport (`cyber-kinetic-motorsport`)
- **Badge:** Cyber & Blueprint
- **Why it works:** High-octane, vivid, and unmistakable. Captures speed, telemetry, neon tire tracks, and aerodynamic energy.
- **Visual Anchor:** *Hyper-Volt Neon Green • Atmospheric Void • 45° Chamfered Geometry • Electric Hypercar Telemetry • Chakra Petch Display • Share Tech Mono HUD • High-Performance Brutalism*

#### 6. Luminous Midnight (`luminous-midnight`)
- **Badge:** Quiet Luxury
- **Why it works:** Poetic and atmospheric. Paints an immediate picture of bioluminescent neon glowing in pitch darkness.
- **Visual Anchor:** *Deep Obsidian Void • Electric Indigo & Royal Violet Mesh • Frosted Glass Capsules • Plus Jakarta Sans & Instrument Serif • Editorial SaaS • Ambient Depth*

#### 7. Editorial Noir (`editorial-noir`)
- **Badge:** Editorial & Archival
- **Why it works:** Classic, punchy, and cinematic. Evokes high-contrast shadows, hardboiled journalism, and timeless mystery.
- **Visual Anchor:** *Deep Obsidian Backdrop • High-Voltage Electric Vermilion • Dual Sans & Serif Italic • 28px Bento Geometry • White Disc CTA Icon • Monochrome Neo-Agency*

#### 8. Lavender Minimal (`lavender-minimal`)
- **Badge:** Minimalist & Monastic
- **Why it works:** Gentle, understated, and memorable. Two words communicate color and philosophy with complete clarity.
- **Visual Anchor:** *Airy Periwinkle SaaS • Cool Slate Analytics • 20px Cards • 9999px Pills*

#### 9. Ethos Void (`ethos-void`)
- **Badge:** Quiet Luxury
- **Why it works:** Distinctive, mysterious, and philosophical. Sounds like an elite luxury design studio or space architecture lab.
- **Visual Anchor:** *Abyss Black • Ice-Cyan Volumetric Light • Frost Glass • Syne Display • Quiet Atmosphere*

#### 10. Cobalt & Concrete (`cobalt-concrete`)
- **Badge:** Neo-Brutalism
- **Why it works:** Superb material pairing. Contrasts the heavy industrial brutality of poured concrete with electric cobalt ink.
- **Visual Anchor:** *Industrial Concrete • Electric Cobalt • 0px Modular Tiles • Optical Flatness • Swiss Grotesk*

#### 11. Obsidian Kinetic (`obsidian-kinetic`)
- **Badge:** Quiet Luxury
- **Why it works:** Sleek, tactile, and premium. Captures the deep void glass physics and high-end automotive luxury.
- **Visual Anchor:** *Deep Void • Gloss White Pills • Neon Mint Status • 24px Modules • Tactile Dark Luxury*

#### 12. Aero-Aquatic (`aero-aquatic`)
- **Badge:** Quiet Luxury
- **Why it works:** Uniquely memorable and vivid. Perfect harmony of sky gradients, hydrated glass, and marine athletics.
- **Visual Anchor:** *Sky Gradient • Hydrated Glass • Bebas Condensed • Navy Punch CTAs • Liquid Droplets*

#### 13. Industrial Dynamo (`industrial-dynamo`)
- **Badge:** Cyber & Blueprint
- **Why it works:** Energetic and mechanical. Conjures rotating turbines, high-voltage safety orange, and raw electrical power.
- **Visual Anchor:** *Deep Obsidian Slate • Electric Safety Orange • High-Vis Neon Lime • 9999px Floating Nav Island • High-Voltage Energy Motifs*

#### 14. Tuscan Nostalgia (`tuscan-nostalgia`)
- **Badge:** Editorial & Archival
- **Why it works:** Rich, romantic, and sensory. Transports the user directly to sun-drenched Italian hills, olive groves, and parchment.
- **Visual Anchor:** *Sun-Drenched Mediterranean • Heavy Editorial Typography • Impasto Oil-Paint • Sharp Geometric Diagonals • Rich Heritage Warm-Earth*

#### 15. Curated Field Guide (`curated-field-guide`)
- **Badge:** Minimalist & Monastic
- **Why it works:** Tactile, bookish, and expedition-ready. Evokes a dog-eared Moleskine notebook filled with meticulous field notes.
- **Visual Anchor:** *Warm Linen Parchment • Utilitarian Modern Moleskine • Geometric Sans Numbers • Burnt Terracotta • Saffron Amber Callouts • Flat Paper Baseline*


---

## 5. Implementation Roadmap (When Ready to Execute)

When you decide to proceed with applying these changes, the execution can be handled in two phases to ensure zero disruption:

### Phase 1: Zero-Risk Catalog & Header Refresh (Immediate Visual Polish)
- Update `name` fields in `catalog-data.js` with the proposed display names.
- Update `<title>` and `<h1>` headers inside each individual file in `Designs/<slug>.html`.
- **Impact:** Instant user-facing transformation across catalog cards, search filters, and preview modals. No files are moved, so URLs and iframe embeds remain 100% stable.

### Phase 2: Full Slug & Asset Migration (Optional)
- Rename HTML files in `Designs/`: `Designs/<current-slug>.html` → `Designs/<proposed-slug>.html`.
- Update matching theme stylesheets in `themes/<slug>.css`.
- Update `slug` keys in `catalog-data.js`.
- Update internal anchor links and image paths.
- **Impact:** Clean, semantic file architecture matching display branding perfectly.

---
*Document generated by Antigravity CLI.*
