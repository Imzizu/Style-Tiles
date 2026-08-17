/* ==============================================================================
   STYLE TILES — APPLICATION LOGIC (app.js)
   ============================================================================== */

// Catalog Data Definition for Style Tiles
const STYLE_TILES_DATA = [
  {
    id: "TILE-001",
    slug: "editorial-brutalist",
    name: "Editorial Brutalist Gazette",
    vibe: "Archival Drafting • Neo-Brutalism • Tactile Risograph",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial", "brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Fraunces",
      sans: "Space Grotesk",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas", hex: "#F4EFEA" },
      { name: "Sheet", hex: "#FAF7F2" },
      { name: "Dark", hex: "#141312" },
      { name: "Orange", hex: "#FF6B4A" },
      { name: "Mustard", hex: "#FFD166" }
    ],
    description: "High-contrast stark ink on warm Manila parchment with physical 4px zero-blur drop shadows, perforated tear lines, and editorial serifs.",
    markdownSpec: `================================================================================
  Aesthetic: Archival Drafting • Editorial Neo-Brutalism • Tactile Risograph
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. COLOR ROLES & PALETTE
   * -------------------------------------------------------------------------- */
  :root {
  /* Surfaces & Backgrounds */
  --surface-canvas:         #F4EFEA; /* Warm Manila parchment (Primary background) */
  --surface-sheet:          #FAF7F2; /* Bleached paper highlight (Elevated cards)  */
  --surface-kraft:          #EAE2D8; /* Aged chipboard (Muted panels, wells)      */
  --surface-dark:           #141312; /* Drafting charcoal (Inverted containers)    */
  
  /* Stark Ink & Monochromes */
  --ink-primary:            #000000; /* Pure stark ink (Text, borders, shadows)   */
  --ink-secondary:          #3D3A37; /* Diluted carbon (Secondary copy)           */
  --ink-muted:              #78726D; /* Pencil graphite (Captions, timestamps)    */
  --ink-inverted:           #F4EFEA; /* Parchment contrast for dark surfaces       */
  
  /* Signature Accents */
  --accent-burnt-orange:    #FF6B4A; /* Vintage stamp vermilion (Primary CTA/Hot) */
  --accent-orange-hover:    #FF522B; /* Saturated press tone                      */
  --accent-mustard:         #FFD166; /* Highlighter ochre (Badges, warm focus)    */
  --accent-mustard-hover:   #FFC53D; /* Deep ochre stamp                          */
  
  /* Contextual / System Tokens */
  --status-success:         #4D7C5D; /* Botanical archive green                   */
  --status-warning:         #FFD166; /* Mustard alert                             */
  --status-danger:          #FF6B4A; /* Burnt vermilion flag                      */
  --status-info:            #5B85AA; /* Blueprint cyan-slate                      */
  }
  
  /* -----------------------------------------------------------------------------
   * 2. TYPOGRAPHY SYSTEM
   * -------------------------------------------------------------------------- */
  /* Font Stacks */
  --font-display: "Fraunces", "Playfair Display", "Georgia", serif;
  --font-sans:    "Space Grotesk", "Inter", -apple-system, sans-serif;
  --font-mono:    "JetBrains Mono", "Courier Prime", monospace;
  
  /* Type Scale */
  --text-display: 3.5rem   / 1.05  var(--font-display); /* 56px | Letter-spacing: -0.03em | Weight: 800 */
  --text-h1:      2.5rem   / 1.15  var(--font-display); /* 40px | Letter-spacing: -0.02em | Weight: 700 */
  --text-h2:      1.75rem  / 1.25  var(--font-sans);    /* 28px | Letter-spacing: -0.02em | Weight: 700 */
  --text-h3:      1.25rem  / 1.35  var(--font-sans);    /* 20px | Letter-spacing: -0.01em | Weight: 600 */
  --text-body:     1.0rem   / 1.60  var(--font-sans);    /* 16px | Letter-spacing:  0.00em | Weight: 400 */
  --text-body-sm:  0.875rem / 1.50  var(--font-sans);    /* 14px | Letter-spacing:  0.00em | Weight: 400 */
  --text-meta:     0.75rem  / 1.40  var(--font-mono);    /* 12px | Letter-spacing: +0.06em | UPPERCASE   */
  
  /* -----------------------------------------------------------------------------
   * 3. CORNER GEOMETRY (BORDER RADII)
   * -------------------------------------------------------------------------- */
  --radius-sharp:  0px;    /* Canonical default (Cards, buttons, layout frames)     */
  --radius-tactile:2px;    /* Soft die-cut paper edge (Micro tags, chips)           */
  --radius-stamp:  4px;    /* Stamp & photo frame containers                        */
  --radius-pill:   9999px; /* Status pills & metadata capsules strictly             */
  
  /* -----------------------------------------------------------------------------
   * 4. ELEVATION & DEPTH (HARD SHADOWS & LAYERS)
   * -------------------------------------------------------------------------- */
  --shadow-none:       0px 0px 0px transparent;
  --shadow-sm:         2px 2px 0px #000000;          /* Micro tags, small inputs    */
  --shadow-base:       4px 4px 0px #000000;          /* Default buttons, cards      */
  --shadow-md:         6px 6px 0px #000000;          /* Hovered states, modal items */
  --shadow-lg:         8px 8px 0px #000000;          /* Floating sheets, drawers    */
  --shadow-accent-hot: 4px 4px 0px var(--accent-burnt-orange);
  --shadow-accent-war: 4px 4px 0px var(--accent-mustard);
  
  /* -----------------------------------------------------------------------------
   * 5. SPACING & SPATIAL SCALE (4px / 8px DRAFTING GRID)
   * -------------------------------------------------------------------------- */
  --space-1:   0.25rem; /*  4px | Micro spacers, tight gaps                         */
  --space-2:   0.50rem; /*  8px | Button inline gaps, icon padding                  */
  --space-3:   0.75rem; /* 12px | Compact cell padding                              */
  --space-4:   1.00rem; /* 16px | Standard component padding                        */
  --space-6:   1.50rem; /* 24px | Card & container internal padding                */
  --space-8:   2.00rem; /* 32px | Section gutter spacing                            */
  --space-12:  3.00rem; /* 48px | Large block separations                           */
  --space-16:  4.00rem; /* 64px | Page section vertical padding                    */
  
  /* -----------------------------------------------------------------------------
   * 6. BORDERS & DIVIDERS
   * -------------------------------------------------------------------------- */
  --border-core:        3px solid #000000; /* Primary bounding frame for all elements */
  --border-hairline:    1px solid #000000; /* Sub-grid lines, table interior rules   */
  --border-accent-hot:  3px solid var(--accent-burnt-orange);
  --border-accent-warm: 3px solid var(--accent-mustard);
  --divider-perforated: 2px dashed #000000; /* Tear-off slip / receipt cut line     */
  --divider-dotted:     2px dotted #000000; /* Ledger guide line                    */`
  },
  {
    id: "TILE-002",
    slug: "monolithic-hyper-editorial",
    name: "System 07 // Monolithic Hyper-Editorial",
    vibe: "1970s Swiss Archival • Industrial Telemetry • Tactile Physics",
    vibeBadge: "Neo-Brutalism",
    categories: ["editorial", "brutalist", "minimalist"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Fraunces",
      sans: "Space Grotesk",
      mono: "Fragment Mono"
    },
    palette: [
      { name: "Absolute Carbon", hex: "#050505" },
      { name: "Anodized Basalt", hex: "#0E0F0E" },
      { name: "Milled Cold-Steel", hex: "#1E201E" },
      { name: "Bleached Vellum", hex: "#FBF9F3" },
      { name: "Weathered Lead", hex: "#585B55" },
      { name: "High-Ion Chartreuse", hex: "#D4FF00" },
      { name: "Venetian Vermilion", hex: "#E83D1B" }
    ],
    description: "Physical-digital convergence with 1970s Swiss archival typography, brutalist industrial telemetry, cold-steel hairlines, high-ion chartreuse actuators, and 1-bit solid offset geometry.",
    markdownSpec: `================================================================================
  Aesthetic: System 07 // Monolithic Hyper-Editorial • 1970s Swiss Archival • Industrial Telemetry • High-Frequency Physics
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. DESIGN STATEMENT & VIBE SUMMARY
   * -------------------------------------------------------------------------- */
  A study in physical-digital convergence. Tension between 1970s Swiss archival typography, brutalist industrial telemetry, and high-frequency tactile physics. Absolute carbon (#050505) and anodized basalt (#0E0F0E) surfaces framed by cold-steel (#1E201E) 1px hairlines, pure signal bleached vellum (#FBF9F3) typography, high-ion chartreuse (#D4FF00) actuators, and venetian vermilion (#E83D1B) killswitches.
  
  /* -----------------------------------------------------------------------------
   * 2. CHROMATIC SPECTRUM & MATERIAL TOKENS
   * -------------------------------------------------------------------------- */
  :root {
  /* Surfaces & Viewport Base */
  --canvas-root:            #050505; /* Absolute Carbon — Primary viewport base */
  --surface-slab:           #0E0F0E; /* Anodized Basalt — Elevated planar containment (1.2:1) */
  --border-edge:            #1E201E; /* Milled Cold-Steel — Structural 1px precision hairline */
  
  /* Inks & Signal Typography */
  --ink-lead:               #FBF9F3; /* Bleached Vellum — Headline display / pure signal (19.1:1 AAA) */
  --ink-sub:                #585B55; /* Weathered Lead — Metadata, index tags, datestamps (4.5:1 AA) */
  
  /* Kinetic Accents & Telemetry Signals */
  --signal-kinetic:         #D4FF00; /* High-Ion Chartreuse — Primary tactile trigger & live reticle */
  --signal-oxide:           #E83D1B; /* Venetian Vermilion — Interrupts, system alerts, killswitches */
  
  /* Structural & Mapping Aliases */
  --bg-canvas:              var(--canvas-root);
  --bg-surface:             var(--surface-slab);
  --border-core:            1px solid var(--border-edge);
  --border-hairline:        1px solid var(--border-edge);
  --ink-primary:            var(--ink-lead);
  --ink-secondary:          var(--ink-sub);
  --accent-primary:         var(--signal-kinetic);
  --accent-danger:          var(--signal-oxide);
  }
  
  /* -----------------------------------------------------------------------------
   * 3. TYPOGRAPHIC ARCHITECTURE & VARIABLE AXES
   * -------------------------------------------------------------------------- */
  /* Display Archetype // Editorial Title */
  --font-display: "Fraunces", "GT Alpina Fine", serif;
  --font-display-settings: "opsz" 144, "wght" 350, "SOFT" 0;
  /* Properties: clamp(3.5rem, 8vw, 6.5rem) | Line-Height: 0.88 | Kerning: -0.05em */
  /* Nuance: Set alternating parenthetical descriptors in Fraunces 400 True Italic */
  
  /* Structural Interface // Grotesque */
  --font-sans: "Space Grotesk", "Söhne Mono", "Neue Haas Grotesk Display", "Inter", sans-serif;
  /* Properties: 13px | Weight: 450 | Line-Height: 1.35 | Tracking: -0.015em */
  
  /* System Telemetry // Archival Index */
  --font-mono: "Fragment Mono", "JetBrains Mono", monospace;
  /* Properties: 10px | Weight: 500 | Tracking: +0.12em | Transform: UPPERCASE */
  /* OpenType: font-feature-settings: "tnum" 1, "zero" 1, "ss02" 1, "ss07" 1 */
  
  /* Type Scale Hierarchy */
  --text-display: clamp(3.5rem, 8vw, 6.5rem) / 0.88 var(--font-display); /* Kerning: -0.05em | wght 350 */
  --text-h1:      2.75rem / 0.95 var(--font-display);                   /* Kerning: -0.04em | wght 350 */
  --text-h2:      1.75rem / 1.15 var(--font-display);                   /* Kerning: -0.03em | wght 400 */
  --text-h3:      1.125rem / 1.30 var(--font-sans);                     /* Kerning: -0.02em | Weight: 500 */
  --text-body:    13px / 1.35 var(--font-sans);                         /* Weight: 450 | Tracking: -0.015em */
  --text-meta:    10px / 1.40 var(--font-mono);                         /* Weight: 500 | Tracking: +0.12em | UPPERCASE */
  
  /* -----------------------------------------------------------------------------
   * 4. CORNER GEOMETRY & ELEVATION
   * -------------------------------------------------------------------------- */
  --radius-default: 0px; /* Monolithic 0px strict rectilinear geometry */
  --radius-subtle:  0px;
  --radius-pill:    0px;
  
  /* Elevation & Hard 1-Bit Solid Shadows */
  --shadow-none:      none;
  --shadow-kinetic:   3px 3px 0px var(--signal-kinetic);
  --shadow-oxide:     3px 3px 0px var(--signal-oxide);
  --shadow-coldsteel: 2px 2px 0px var(--border-edge);
  
  /* -----------------------------------------------------------------------------
   * 5. BORDERS & MATERIAL FINISHES
   * -------------------------------------------------------------------------- */
  --border-edge:      #1E201E;
  --border-hairline:  1px solid #1E201E;
  --border-kinetic:   1px solid #D4FF00;
  --border-oxide:     1px solid #E83D1B;
  
  /* Grid Framework: Modular baseline of 4px sub-units; 12-column asymmetrical layout */
  /* Raster Grain Filter: */
  /* backdrop-filter: contrast(110%) brightness(98%); */
  /* background-image: radial-gradient(#1E201E 0.75px, transparent 0.75px); background-size: 16px 16px; */
  
  /* -----------------------------------------------------------------------------
   * 6. COMPONENT ARCHETYPES & STRUCTURAL BLUEPRINT
   * -------------------------------------------------------------------------- */
  /* Primary Actuator (Button) */
  - Resting:      Background #D4FF00, Text #050505 (10px bold mono uppercase). Border: 0px.
  - Hover:        Background #FBF9F3, Text #050505. Translate: -1px, -1px.
  - Active/Press: Invert to #050505 with 1px solid #D4FF00 and text #D4FF00. Offset shadow: 3px 3px 0px #D4FF00.
  
  /* Split Index Header (Card Anchor) */
  - Geometry:     height: 24px, background transparent, bottom border: 1px solid #1E201E.
  - Left Anchor:  [ 01 // SPEC ] in --ink-sub (#585B55).
  - Right Anchor: Pulsing status marker (4px square in #D4FF00, step animation: blink 1.2s infinite steps(1)).
  
  /* Telemetry Parameter Panels */
  - 3-column / 4-column parameter blocks with [ PARAMETER ], [ TELEMETRY ], [ PROTOCOL ] headers.
  - ISO: 0800_RAW, FREQUENCY: 144.2 Hz, MODE: ISOLATED.
  
  /* Interactive Physics */
  - Linear state snapping (0ms ease) on color changes.
  - Structural shifts damp with high-tension springs (mass: 0.8, tension: 380, friction: 26).
  - Zero soft drop shadows; strict reliance on 1-bit solid offset geometry.
  
  /* -----------------------------------------------------------------------------
   * 7. FORBIDDEN CLICHÉS & ANTI-PATTERNS
   * -------------------------------------------------------------------------- */
  - NO rounded pill buttons or smooth soft border-radii (0px monolithic strict).
  - NO soft gaussian blurred drop shadows or diffuse lighting.
  - NO purple/violet accents on dark backgrounds (use High-Ion Chartreuse & Venetian Vermilion).
  - NO rainbow gradients or gradient keyword text fills.
  - NO floating unbordered cards or textureless empty containers.`
  },
  {
    id: "TILE-003",
    slug: "cryptovista",
    name: "CryptoVista Neo-FinTech",
    vibe: "Neo-FinTech Minimalist • Monochromatic Structured • Parametric Clay",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist", "editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Cabinet Grotesk",
      sans: "Plus Jakarta Sans",
      mono: "Space Grotesk"
    },
    palette: [
      { name: "Canvas Base", hex: "#FFFFFF" },
      { name: "Surface Neutral", hex: "#F5F6F8" },
      { name: "Surface Inverted", hex: "#0F1115" },
      { name: "Text Primary", hex: "#0A0B0D" },
      { name: "Neon Mint", hex: "#00E58F" },
      { name: "Mint Haze", hex: "#A7F3D0" },
      { name: "Trend Negative", hex: "#EF4444" }
    ],
    description: "High-contrast Neo-FinTech minimal architecture with tactile parametric clay surfaces, precision 1.5px structural borders, pill geometry, bento grid modularity, and vibrant Neon Mint momentum signals.",
    markdownSpec: `================================================================================
  CRYPTOVISTA — DESIGN SYSTEM STYLE TILE
  Aesthetic: Neo-FinTech Minimalist • Monochromatic Structured • Parametric Clay
  ================================================================================
  
  1. COLOR ROLES & PALETTE
  --------------------------------------------------------------------------------
  • Canvas & Surfaces:
  - Canvas Base (Background):     #FFFFFF (Pure Light)
  - Surface Neutral (Cards/Mod):  #F5F6F8 (Cool Off-White)
  - Surface Inverted (Badges):    #0F1115 (Deep Pitch Black)
  - Surface Glass:                rgba(255, 255, 255, 0.75) / backdrop-filter: blur(12px)
  
  • Content & Typography:
  - Text Primary:                 #0A0B0D (High-Contrast Black)
  - Text Secondary / Muted:       #6C727F (Neutral Slate)
  - Text Tertiary / Inactive:     #9DA4B0 (Light Gray Trackers)
  
  • Brand Accents & Semantics:
  - Accent Primary (Neon Mint):   #00E58F (Active Trend / Positive Momentum)
  - Accent Secondary (Mint Haze): #A7F3D0 (Pattern Fills / Secondary Bars)
  - Trend Negative:               #EF4444 (Soft Coral Red)
  - Trend Neutral:                #6B7280 (Muted Mid-Gray)
  
  
  2. TYPOGRAPHY SYSTEM
  --------------------------------------------------------------------------------
  • Primary Font Families:
  - Display / Headings:           "Aeonik" or "Cabinet Grotesk", sans-serif
  - Body & UI / Meta:             "Inter" or "Plus Jakarta Sans", sans-serif
  - Numeric & Tickers:            "Space Grotesk" or "JetBrains Mono", monospace
  
  • Typographic Scale & Hierarchy:
  - Hero Headline (H1):           48px – 64px | Line-Height: 1.05 | Weight: 700 | Tracking: -0.03em
  - Section Title (H2):           28px – 34px | Line-Height: 1.15 | Weight: 600 | Tracking: -0.02em
  - Card Metric / Values:         20px – 24px | Line-Height: 1.20 | Weight: 600 | Monospace Numeric
  - Nav & Micro-Labels:           11px – 13px | Line-Height: 1.00 | Weight: 600 | Text-Transform: UPPERCASE | Tracking: +0.08em
  - Body Copy (Paragraph):        14px – 15px | Line-Height: 1.50 | Weight: 400 | Tracking: -0.01em
  - Inline Badges / Symbols:      Aligned baseline, custom typographic lockups (e.g., "✦", "↗", "×")
  
  
  3. CORNER GEOMETRY (BORDER RADII)
  --------------------------------------------------------------------------------
  • Radius Scale:
  - radius-pill (Full):           9999px (Action buttons, floating tags, ticker chips, social anchors)
  - radius-card (Container):      28px – 32px (Bento outer grid & major feature panels)
  - radius-inner (Nested):        16px – 20px (Internal image cutouts, mini modules)
  - radius-sm (Micro):            8px (Data tooltips, input focus indicators)
  
  
  4. ELEVATION & DEPTH (SHADOWS & LAYERS)
  --------------------------------------------------------------------------------
  • Architectural Layering:
  - Flat Bento Construction: Separation achieved via structural 1px borders rather than heavy drop shadows.
  - 3D Dimensional Depth: High-contrast, tactile matte-white parametric renders (layered topographical clay textures).
  
  • Shadow Tokens:
  - Elevation Base (Cards):       0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.03)
  - Floating Elements (Pills):    0 8px 24px -4px rgba(0, 0, 0, 0.06), 0 0 0 1px #0A0B0D
  - Focus / Popover:              0 16px 32px -6px rgba(0, 0, 0, 0.10)
  
  
  5. SPACING & SPATIAL SCALE
  --------------------------------------------------------------------------------
  • Base Grid: 8pt Grid System (4px Micro-steps)
  - space-xs:                   4px  (Inline icon-to-label gaps)
  - space-sm:                   8px  (Badge internal padding, micro chips)
  - space-md:                   16px (Bento grid gutters, card padding)
  - space-lg:                   24px (Standard panel internal padding)
  - space-xl:                   32px – 40px (Section margins, headline offsets)
  - Bento Container Padding:      20px outer frame padding surrounding rounded sub-cards.
  
  
  6. BORDERS & DIVIDERS
  --------------------------------------------------------------------------------
  • Border Tokens:
  - Border Primary (Structural):  1.5px solid #0A0B0D (Primary buttons, hero badges, icon rings)
  - Border Subtle (Separators):   1px solid rgba(10, 11, 13, 0.12) (Grid dividers, light pills)
  - Border Active (Accent):       1.5px solid #00E58F (Active chart indicators, selected filters)
  - Inverted Pill Border:         1px solid #FFFFFF (On dark surfaces/badges)
  
  
  7. ICONOGRAPHY LANGUAGE
  --------------------------------------------------------------------------------
  • Visual Characteristics:
  - Stroke Style:                 Uniform 1.5px – 1.75px stroke width, geometric, monoline
  - Enclosure:                    Housed in circular 32px – 40px pill containers with centered glyphs
  - Terminal Ends:                Precise, rounded caps (stroke-linecap: round, stroke-linejoin: round)
  - Integrated Glyphs:            Inline arrow triggers (↗), brandmark nodes (✦), directional sparklines (〰)
  
  
  8. INTERACTION & FEEDBACK RULES
  --------------------------------------------------------------------------------
  • Button States (Pill Action Modules):
  - Default:                      White fill, 1.5px #0A0B0D border, black text + circular icon bubble
  - Hover:                        Invert target circle; arrow rotates 45° on axis; scale 1.02x (cubic-bezier(0.16, 1, 0.3, 1))
  - Active / Pressed:             Scale 0.98x; slight background tint #F0F2F5
  
  • Chart & Metric Micro-Interactions:
  - Chart Bars:                   Inactive bars = diagonal hatch / mint-outline; Active = solid #00E58F fill
  - Hover Focus:                  Active bar reveals floating tooltip with monospaced value; siblings dim to 40% opacity
  - Transition Curve:             transition: all 200ms cubic-bezier(0.2, 0, 0, 1)
  ================================================================================`
  },
  {
    id: "TILE-009",
    slug: "greenwrap",
    name: "Greenwrap Design System",
    vibe: "Modern Eco-Brutalist • Neo-Editorial • Organic Dark Mode",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist", "editorial", "luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Deep Charcoal", hex: "#121414" },
      { name: "Deep Pine", hex: "#063826" },
      { name: "Fresh Sage", hex: "#9BC89E" },
      { name: "Subdued Dark", hex: "#1E2121" },
      { name: "Leaf Mint", hex: "#A8E0AF" }
    ],
    description: "Modern eco-brutalist and neo-editorial design system for closed-loop supply chains, organic sustainable logistics, and high-contrast dark mode interfaces. Combines deep pine containers, fresh sage typographic tokens, inline serif italic pills, and linear guilloche wireframes.",
    markdownSpec: `================================================================================
  STYLE TILE: GREENWRAP DESIGN SYSTEM
  Vibe: Modern Eco-Brutalist • Neo-Editorial • Organic Dark Mode
  ================================================================================
  
  1. COLOR ROLES & PALETTE
  --------------------------------------------------------------------------------
  Core Canvas:
    --surface-canvas:        #121414 (Deep Charcoal / Black Canvas)
    --surface-card-dark:     #063826 (Deep Pine / Forest Green)
    --surface-card-light:    #9BC89E (Fresh Sage / Muted Mint)
    --surface-card-neutral:  #1E2121 (Subdued Container Dark)
    --surface-pill-gray:     #C4C8C5 (Light Muted Fog)
  
  Text & Content:
    --text-primary:          #FFFFFF (Pure White / Maximum Contrast)
    --text-on-light:         #0B2E1E (Deep Botanical Green)
    --text-muted:            #8B938E (Medium Mineral Grey)
    --text-accent:           #A8E0AF (Vibrant Leaf Mint)
  
  Accents & Functional:
    --accent-primary:        #A3D9A5 (Sage Tint - Highlights & Pill Accents)
    --accent-emerald:        #0A5C3C (Mid-tone Botanical)
    --accent-overlay:        rgba(255, 255, 255, 0.08) (Glass / Sheen)
    --border-subtle:         rgba(255, 255, 255, 0.12) (Translucent White Stroke)
    --border-accent:         #1A5038 (Deep Green Outline)
  
  --------------------------------------------------------------------------------
  2. TYPOGRAPHY SYSTEM
  --------------------------------------------------------------------------------
  Font Families:
    Primary Sans:   "Plus Jakarta Sans", "Satoshi", sans-serif
    Display Serif:  "Instrument Serif", "Playfair Display", serif (Editorial Accents)
    Utility / Mono: "JetBrains Mono", monospace (Labels & Metrics)
  
  Type Hierarchy:
    Display H1 (Hero):
      Font: Primary Sans | Size: 48px – 64px | Weight: 400 (Regular) | Line-height: 1.15
      Feature: Inline highlighted keywords switch to Display Serif (Italic/Regular) 
               housed in custom pill badges.
  
    H2 (Card Headers & Highlights):
      Font: Primary Sans | Size: 22px – 26px | Weight: 500 (Medium) | Line-height: 1.3
  
    Body Large (Mission Statements / Summaries):
      Font: Primary Sans | Size: 18px – 20px | Weight: 400 | Line-height: 1.4
  
    UI & Microcopy (Nav, Badges, Metrics):
      Font: Primary Sans / Utility | Size: 11px – 13px | Weight: 600 | Tracking: +0.06em
      Transform: Uppercase for status tags; Title Case for actions.
  
  --------------------------------------------------------------------------------
  3. CORNER GEOMETRY (BORDER RADII)
  --------------------------------------------------------------------------------
  --radius-pill:     9999px   (Buttons, Badges, Avatars, Nav Pods, Delivery Tags)
  --radius-card-lg:  32px     (Bento Grid Containers, Media Cards)
  --radius-card-sm:  20px     (Nested Cards, Metric Pods)
  --radius-control:  12px     (Input Fields, Utility Tooltips)
  
  --------------------------------------------------------------------------------
  4. ELEVATION & DEPTH (SHADOWS & LAYERS)
  --------------------------------------------------------------------------------
  Layering Strategy:
    • Multi-plane dark layering: Near-black canvas base with layered sage/forest surfaces.
    • Translucent Frosted Glass:
        backdrop-filter: blur(16px);
        background: rgba(30, 33, 33, 0.75);
    • Linear Guilloche Wireframes:
        Vector geometric overlapping circles/curves rendered with 0.15–0.3 opacity.
  
  Shadows:
    --shadow-floating:  0 12px 32px -8px rgba(0, 0, 0, 0.45)
    --shadow-subtle:    0 4px 16px -2px rgba(0, 0, 0, 0.25)
    --glow-sage:        0 0 24px -4px rgba(163, 217, 165, 0.2)
  
  --------------------------------------------------------------------------------
  5. SPACING & SPATIAL SCALE
  --------------------------------------------------------------------------------
  Base Unit: 4px Grid System
  
  Tokens:
    --space-xxs:  4px
    --space-xs:   8px
    --space-sm:   12px
    --space-md:   16px
    --space-lg:   24px
    --space-xl:   32px
    --space-2xl:  48px
  
  Layout Dimensions:
    • Bento Grid Gap: 16px – 20px
    • Hero Card Padding: 28px – 36px
    • Pill Badge Internal Padding: 8px 18px (H), 6px 12px (V)
    • Nav Bar Inset: 16px Top/Sides
  
  --------------------------------------------------------------------------------
  6. BORDERS & DIVIDERS
  --------------------------------------------------------------------------------
  • Card Outlines: 1px solid rgba(255, 255, 255, 0.08) (Subtle contrast isolation)
  • Highlight Rings: 1.5px solid #1E533B (Botanical pill ring)
  • Dark Inset Divider: 1px solid rgba(0, 0, 0, 0.15) (For light-card sub-elements)
  • Metric Level Indicators: Vertical rounded capsule bars with dynamic fill heights.
  
  --------------------------------------------------------------------------------
  7. ICONOGRAPHY LANGUAGE
  --------------------------------------------------------------------------------
  Style & Weight:
    • Fine stroke outline (1.5px – 1.75px uniform weight)
    • Rounded caps and joins (\`stroke-linecap: round; stroke-linejoin: round\`)
    • Size bounding box: 18x18px (Micro UI) | 24x24px (Standard Actions) | 48x48px (Hero Highlights)
  
  Motifs & Symbolism:
    • Circular-bound symbols: Sun, Globe/Latitude grid, Infinite Recycling arrows.
    • Geometric stamps: Rotated flower/quad-leaf logo icon, tilted paper airplane.
    • Circular avatar groups overlapping with a +2px dark canvas border mask.
  
  --------------------------------------------------------------------------------
  8. INTERACTION & FEEDBACK RULES
  --------------------------------------------------------------------------------
  Hover States:
    • Nav Pills & Action Tags:
        Background shifts from neutral dark (#222626) to pure white (#FFFFFF); 
        text transitions from white to canvas black (#121414).
    • Bento Media Cards:
        Image scale: transform: scale(1.03); filter: brightness(1.05);
        Duration: 400ms cubic-bezier(0.2, 0.8, 0.2, 1).
  
  Active & Press Feedback:
    • Scale down on press: transform: scale(0.97).
    • Tactile pill badges pop with subtle \`--glow-sage\` bloom.
  
  Transitions:
    • Standard: 250ms cubic-bezier(0.4, 0, 0.2, 1)
    • Spatial/Movement: 450ms cubic-bezier(0.16, 1, 0.3, 1)
  ================================================================================`
  },
  {
    id: "TILE-005",
    slug: "neo-memphis",
    name: "Neo-Memphis Risograph Pop",
    vibe: "Electric Halftone • Playful Geometry • Chunky 3D",
    vibeBadge: "Playful & Pop",
    categories: ["playful", "retro", "brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Clash Display",
      sans: "Plus Jakarta Sans",
      mono: "Space Mono"
    },
    palette: [
      { name: "Warm Paper", hex: "#FFFDF5" },
      { name: "Bubblegum Pink", hex: "#FFAAC8" },
      { name: "Graphic Ink", hex: "#1A1824" },
      { name: "Electric Cyan", hex: "#35A7FF" },
      { name: "Cadmium Sun", hex: "#FFE600" },
      { name: "Fluorescent Coral", hex: "#FF5964" },
      { name: "Acid Lime", hex: "#00E599" },
      { name: "Hyper Violet", hex: "#8B5CF6" }
    ],
    description: "Saturated risograph spot-ink explosions with pure multiply overlays, zero-blur hard offset drop shadows, authentic dual-drum misregistration, and high-energy playful brutalism.",
    markdownSpec: `================================================================================
  STYLE TILE: NEO-MEMPHIS RISOGRAPH POP (TILE-005)
  Aesthetic: Neo-Memphis Risograph Pop • Playful Brutalism • Geometric Joy
  Version: 1.0.0-production
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. DESIGN STATEMENT & VIBE SUMMARY
   * -------------------------------------------------------------------------- */
  High-energy playful brutalism fused with authentic risograph print shop aesthetics. 
  Built upon warm uncoated paper surfaces (#FFFDF5) and bubblegum pop accents (#FFAAC8),
  structured by ultra-bold carbon ink (#1A1824) borders and pure spot-ink overlays 
  (Electric Cyan, Cadmium Sun, Fluorescent Coral, Acid Lime, Hyper Violet). Features
  tactile zero-blur drop shadows, misregistered multi-layer riso shifts, chunky geometric
  motifs (4-point stars, squiggles, washi tape labels), and bouncy elastic spring physics.
  
  /* -----------------------------------------------------------------------------
   * 2. COLOR ROLES & PALETTE
   * -------------------------------------------------------------------------- */
  :root {
  /* Canvas & Base */
  --color-canvas-primary:      #FFFDF5; /* Warm Risograph Uncoated Paper */
  --color-canvas-secondary:    #FFAAC8; /* Bubblegum Pink / Pop Background */
  --color-canvas-inverse:      #1A1824; /* Deep Graphic Ink */
  --color-canvas-muted:        #F4EEDD; /* Muted Parchment for inactive zones */
  
  /* Ink & Typography */
  --color-ink-primary:         #1A1824; /* High-contrast Carbon Ink */
  --color-ink-secondary:       #4A475A; /* 70% Tint Body Ink */
  --color-ink-inverse:         #FFFDF5; /* Crisp Light Ink on Dark Surfaces */
  
  /* Brand & Joy Accents (Pure Riso Spot Inks) */
  --color-accent-cyan:         #35A7FF; /* Process Blue / Electric Cyan */
  --color-accent-sun:          #FFE600; /* Flat Cadmium Yellow */
  --color-accent-coral:        #FF5964; /* Fluorescent Coral Red */
  --color-accent-lime:         #00E599; /* Acid Pop Green (Functional Success) */
  --color-accent-purple:       #8B5CF6; /* Hyper Violet (Tertiary Utility) */
  
  /* Graphic Overlays & Risograph Simulation */
  --blend-riso-multiply:       multiply;
  --overlay-halftone:          radial-gradient(#1A1824 18%, transparent 19%);
  --overlay-dot-size:          8px 8px;
  
  /* ---------------------------------------------------------------------------
   * 3. TYPOGRAPHY SYSTEM
   * ------------------------------------------------------------------------ */
  /* Font Families */
  --font-display:              "Clash Display", "Syne", "Cabinet Grotesk", sans-serif;
  --font-body:                 "Plus Jakarta Sans", "Space Grotesk", sans-serif;
  --font-mono:                 "Space Mono", "JetBrains Mono", monospace;
  
  /* Type Scale & Metrics */
  --type-display-hero:         800 clamp(2.75rem, 6vw, 4.5rem) / 1.05 var(--font-display);
  --type-display-h1:           800 clamp(2.25rem, 4.5vw, 3.25rem) / 1.1 var(--font-display);
  --type-display-h2:           700 clamp(1.75rem, 3vw, 2.25rem) / 1.15 var(--font-display);
  --type-display-h3:           700 1.5rem / 1.2 var(--font-display);
  --type-body-lead:            500 1.25rem / 1.5 var(--font-body);
  --type-body-base:            400 1.00rem / 1.6 var(--font-body);
  --type-body-bold:            700 1.00rem / 1.6 var(--font-body);
  --type-caption:              600 0.8125rem / 1.4 var(--font-body);
  --type-badge-mono:           700 0.75rem / 1.0 var(--font-mono);
  
  /* Letter Spacing */
  --tracking-tight:            -0.03em;
  --tracking-normal:           -0.01em;
  --tracking-wide:              0.08em; /* Used for uppercase labels & badges */
  
  /* ---------------------------------------------------------------------------
   * 4. CORNER GEOMETRY (BORDER RADII)
   * ------------------------------------------------------------------------ */
  --radius-none:               0px;      /* Sharp Brutalist Cuts */
  --radius-badge:              4px;      /* Micro Labels / Tech Chips */
  --radius-card:               8px;      /* Standard Playful Brutalist Cards */
  --radius-container:          16px;     /* Floating Panels / Sheets */
  --radius-pill:               9999px;   /* Neo-Memphis Capsule Buttons & Badges */
  --radius-blob:               42% 58% 70% 30% / 45% 45% 55% 55%; /* Decorative Art Blobs */
  
  /* ---------------------------------------------------------------------------
   * 5. ELEVATION & DEPTH (ZERO-BLUR HARD SHADOWS)
   * ------------------------------------------------------------------------ */
  /* Hard Solid Drops (Offset X, Offset Y, Blur=0, Color) */
  --shadow-hard-xs:            2px 2px 0px var(--color-ink-primary);
  --shadow-hard-sm:            4px 4px 0px var(--color-ink-primary);
  --shadow-hard-dark:          6px 6px 0px var(--color-ink-primary);
  --shadow-hard-pink:          6px 6px 0px var(--color-canvas-secondary);
  --shadow-hard-cyan:          6px 6px 0px var(--color-accent-cyan);
  --shadow-hard-sun:           6px 6px 0px var(--color-accent-sun);
  --shadow-hard-coral:         6px 6px 0px var(--color-accent-coral);
  
  /* Misregistered Risograph Effect (Double Shift) */
  --shadow-riso-shift:         3px 3px 0px var(--color-accent-cyan), 
                               6px 6px 0px var(--color-accent-coral);
  --shadow-riso-inverted:     -4px 4px 0px var(--color-accent-sun),
                               4px -4px 0px var(--color-accent-cyan);
  
  /* ---------------------------------------------------------------------------
   * 6. SPACING & SPATIAL SCALE (4pt / 8pt Chunky Grid)
   * ------------------------------------------------------------------------ */
  --space-1:                   4px;
  --space-2:                   8px;
  --space-3:                   12px;
  --space-4:                   16px;
  --space-5:                   20px;
  --space-6:                   24px;
  --space-8:                   32px;
  --space-10:                  40px;
  --space-12:                  48px;
  --space-16:                  64px;
  --space-24:                  96px;
  
  /* Layout Paddings */
  --pad-btn-sm:                6px 14px;
  --pad-btn-md:                12px 24px;
  --pad-btn-lg:                16px 32px;
  --pad-card-sm:               16px;
  --pad-card-lg:               28px;
  
  /* ---------------------------------------------------------------------------
   * 7. BORDERS & DIVIDERS
   * ------------------------------------------------------------------------ */
  --border-hairline:           1.5px solid var(--color-ink-primary);
  --border-medium:             2.5px solid var(--color-ink-primary);
  --border-thick:              3.5px solid var(--color-ink-primary);
  --border-hero:               5.0px solid var(--color-ink-primary);
  
  /* Decorative Dividers */
  --divider-dashed:            3px dashed var(--color-ink-primary);
  --divider-dotted:            4px dotted var(--color-ink-primary);
  --divider-zigzag-svg:        url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6L6 0L18 12L24 6' stroke='%231A1824' stroke-width='3'/%3E%3C/svg%3E");
  
  /* ---------------------------------------------------------------------------
   * 8. ICONOGRAPHY & GRAPHIC ACCENTS
   * ------------------------------------------------------------------------ */
  --icon-stroke-width:         2.75px;
  --icon-stroke-cap:           round;
  --icon-stroke-join:          round;
  --icon-size-sm:              18px;
  --icon-size-md:              24px;
  --icon-size-lg:              36px;
  
  /* Memphis Primitives: 4-Point Stars, Zig-Zags, Halftone Badges, Wiggles */
  --motif-fill-behavior:       solid-with-offset-outline;
  --motif-accent-rotation:     -4deg, 3deg, -2deg, 6deg;
  
  /* ---------------------------------------------------------------------------
   * 9. INTERACTION & FEEDBACK (TACTILE "PRESS-DOWN" PHYSICS)
   * ------------------------------------------------------------------------ */
  /* Timing Curves */
  --ease-elastic:              cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-snap:                 cubic-bezier(0.16, 1, 0.3, 1);
  --duration-rapid:            100ms;
  --duration-pop:              200ms;
  
  /* ---------------------------------------------------------------------------
   * 10. COMPONENT FORMULAS & PATTERNS
   * ------------------------------------------------------------------------ */
  
  /* Primary Tactile Pop Button */
  .btn-primary-pop {
    font: var(--type-body-bold);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    background-color: var(--color-accent-sun);
    color: var(--color-ink-primary);
    border: var(--border-thick);
    border-radius: var(--radius-pill);
    padding: var(--pad-btn-md);
    box-shadow: var(--shadow-hard-dark);
    transition: transform var(--duration-pop) var(--ease-elastic),
                box-shadow var(--duration-pop) var(--ease-elastic),
                background-color var(--duration-rapid) ease;
    cursor: pointer;
  }
  
  .btn-primary-pop:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0px var(--color-ink-primary);
    background-color: var(--color-accent-coral);
    color: var(--color-canvas-primary);
  }
  
  .btn-primary-pop:active {
    transform: translate(6px, 6px);
    box-shadow: 0px 0px 0px var(--color-ink-primary);
  }
  
  /* Geometric Risograph Card */
  .card-neo-brutalist {
    background-color: var(--color-canvas-primary);
    border: var(--border-thick);
    border-radius: var(--radius-card);
    padding: var(--pad-card-lg);
    box-shadow: var(--shadow-hard-pink);
    position: relative;
  }
  
  .card-neo-brutalist::before {
    /* Decorative Tape / Badge Accent */
    content: "";
    position: absolute;
    top: -12px;
    left: 24px;
    width: 50px;
    height: 20px;
    background: var(--color-accent-cyan);
    border: var(--border-hairline);
    transform: rotate(-5deg);
  }
  
  /* Monospace Pill Badge */
  .badge-riso-tag {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    font: var(--type-badge-mono);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    background-color: var(--color-accent-cyan);
    color: var(--color-ink-primary);
    border: var(--border-medium);
    border-radius: var(--radius-pill);
    padding: 4px 10px;
    box-shadow: var(--shadow-hard-xs);
  }
  
  /* ---------------------------------------------------------------------------
   * 11. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
   * ------------------------------------------------------------------------ */
  - NO soft gaussian blurred drop shadows (strictly use zero-blur hard offset shadows).
  - NO muddy gradients or unbordered floating cards.
  - NO dull grayscale monotony — embrace high-contrast riso spot ink vibrancy.
  - NO thin weak 1px borders for main structural components (use 2.5px to 5px borders).
  - NO rigid boring static interactions (use bouncy elastic press-down physics and tactile feedback).`
  },
  {
    id: "TILE-010",
    slug: "healthy-pets",
    name: "Healthy Pets, Happy Hearts",
    vibe: "Playful Neo-Retro • Organic Warmth • High-Contrast Editorial",
    vibeBadge: "Playful & Pop",
    categories: ["playful", "editorial", "retro"],
    theme: "Dark/Light",
    hasPage: true,
    fonts: {
      display: "Bebas Neue",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Vivid Terracotta", hex: "#E05333" },
      { name: "Warm Butterscotch", hex: "#FED0A7" },
      { name: "Midnight Cocoa", hex: "#230C07" },
      { name: "Pure Snow White", hex: "#FFFFFF" },
      { name: "Muted Gold", hex: "#F4B258" }
    ],
    description: "Playful neo-retro and organic warmth veterinary design system. High-contrast editorial style with vivid terracotta canvas, butterscotch peachy display headers, midnight cocoa dark surfaces, organic wave dividers, and 2.5D flat layer overlaps.",
    markdownSpec: `================================================================================
  STYLE TILE: HEALTHY PETS, HAPPY HEARTS DESIGN SYSTEM
  Theme: Playful Neo-Retro / Organic Warmth / High-Contrast Editorial
  Code: TILE-010
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. COLOR ROLES & PALETTE
   * -------------------------------------------------------------------------- */
  --color-brand-primary:       #E05333; /* Vivid Terracotta / Warm Vermilion */
  --color-brand-secondary:     #FED0A7; /* Warm Butterscotch / Peachy Cream (Display Type) */
  --color-surface-dark:        #230C07; /* Deep Espresso Brown / Midnight Cocoa */
  --color-surface-light:       #FFFFFF; /* Pure Snow White */
  --color-surface-subtle:      #F7F3EE; /* Warm Off-White / Light Oatmeal */
  --color-accent-amber:        #F4B258; /* Muted Gold / Highlight Accent */
  --color-neutral-border:      #E8E1DA; /* Soft Sand Border */
  --color-text-muted:          #7D716A; /* Warm Charcoal Subtitle */
  
  Semantic Token Mapping:
  • Canvas Main:             var(--color-brand-primary)
  • Canvas Section Alt:      var(--color-surface-dark)
  • Surface Interactive:     var(--color-surface-light)
  • Typography Display:      var(--color-brand-secondary) on Primary; var(--color-surface-light) on Dark
  • Typography Body Dark:    var(--color-surface-dark) on Light
  • Typography Body Light:   var(--color-surface-subtle) on Primary/Dark
  
  /* -----------------------------------------------------------------------------
   * 2. TYPOGRAPHY SYSTEM
   * -------------------------------------------------------------------------- */
  Font Families:
  • Display / Headers:  "Bebas Neue", "Druk Wide Bold", "Anton", sans-serif
  • Body & Interface:   "Plus Jakarta Sans", "Inter", sans-serif
  
  Type Scale & Hierarchy:
  • Hero Display (H1):  96px / Line-height: 0.9  / Letter-spacing: 0.02em / ALL CAPS
  • Section Title (H2): 44px / Line-height: 1.05 / Letter-spacing: 0.03em / ALL CAPS
  • Category Title (H3):28px / Line-height: 1.1  / Letter-spacing: 0.02em / ALL CAPS
  • Accordion Label:    22px / Line-height: 1.2  / Weight: 700            / ALL CAPS
  • Body Regular:       14px / Line-height: 1.5  / Weight: 400
  • Body Small / Meta:  12px / Line-height: 1.4  / Weight: 500
  • Interactive / Pill: 13px / Line-height: 1.0  / Weight: 600-700
  
  /* -----------------------------------------------------------------------------
   * 3. CORNER GEOMETRY (BORDER RADII)
   * -------------------------------------------------------------------------- */
  --radius-xs:    6px;   /* Small badges & tooltips */
  --radius-sm:    12px;  /* Text inputs & form fields */
  --radius-md:    18px;  /* Compact content panels */
  --radius-lg:    28px;  /* Feature category cards & doctor profile portraits */
  --radius-full:  9999px;/* Buttons, date/time chips, segmented toggles */
  
  Organic Shapes:
  • Speech Bubbles: Asymmetrical curved blobs (e.g., border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%)
  • Section Dividers: Fluid, organic wave / scallop mask SVG curves separating rust & espresso blocks.
  
  /* -----------------------------------------------------------------------------
   * 4. ELEVATION & DEPTH (SHADOWS & LAYERING)
   * -------------------------------------------------------------------------- */
  Depth Philosophy: Flat Neo-Editorial / 2.5D Layer Overlap (No blurry drop shadows).
  
  Layering Rules:
  • Layer 0 (Base Canvas):   Solid brand background (Terracotta or Espresso)
  • Layer 1 (Masks):         Organic SVG wavy sections
  • Layer 2 (Cards):         High-contrast solid White or Espresso containers
  • Layer 3 (Foreground):    Character illustrations overflowing container bounds
  • Elevation Shadow:        none | 0 0 0 transparent (relies strictly on 1px-2px borders & contrast)
  
  /* -----------------------------------------------------------------------------
   * 5. SPACING & SPATIAL SCALE
   * -------------------------------------------------------------------------- */
  Base Unit: 4px / 8px Grid Scale
  • space-2xs: 4px
  • space-xs:  8px
  • space-sm:  12px
  • space-md:  16px
  • space-lg:  24px
  • space-xl:  32px
  • space-2xl: 48px
  • space-3xl: 64px
  
  Layout Specs:
  • Content Container Max-Width: 1200px
  • Grid Columns: 12-column desktop / 4-column mobile
  • Card Internal Padding: 24px (compact) to 32px (spacious)
  • Section Gutter: 24px
  
  /* -----------------------------------------------------------------------------
   * 6. BORDERS & DIVIDERS
   * -------------------------------------------------------------------------- */
  --border-subtle:     1px solid rgba(255, 255, 255, 0.15); /* Accordion row dividers */
  --border-input:      1px solid #E8E1DA;                    /* Form inputs inactive */
  --border-active:     2px solid #230C07;                    /* Active selections */
  --border-card-white: 1.5px solid #FFFFFF;                  /* Inset card borders */
  
  /* -----------------------------------------------------------------------------
   * 7. ICONOGRAPHY LANGUAGE
   * -------------------------------------------------------------------------- */
  Style: Minimalist, clean-line glyphs with rounded terminals (1.5px to 2px stroke).
  Treatment:
  • Social / Quick Links: Enclosed within solid dark/white circular badges (36px x 36px).
  • Pet Selector Icons:   Monoline glyphs enclosed in pill/card slots with radio indicators.
  • Accordion Toggles:    Crisp circular icon badges (+ / x or chevron up/down).
  
  /* -----------------------------------------------------------------------------
   * 8. INTERACTION & FEEDBACK RULES
   * -------------------------------------------------------------------------- */
  Hover & Focus States:
  • CTA Buttons (e.g., "Book Now"):
      Default:  Background: #FFFFFF | Text: #230C07
      Hover:    Background: #FED0A7 | Scale: 1.02 | Transition: 200ms ease-out
  • Accordion Row:
      Collapsed: Background: #E05333 | Text: #FFFFFF
      Expanded:  Background: #FFFFFF | Text: #230C07 | Border-radius: 18px
  • Selection Chips (Date/Time/Pet Type):
      Inactive: Background: #FFFFFF | Text: #7D716A | Border: 1px solid #E8E1DA
      Active:   Background: #230C07 | Text: #FFFFFF | Radio Dot: Filled White
  
  /* -----------------------------------------------------------------------------
   * 9. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
   * -------------------------------------------------------------------------- */
  - No blurry drop shadows or fuzzy box-shadows.
  - No purple or neon gradient fills on buttons or typography.
  - No generic rectangular stock containers lacking organic corner treatments.
  - No tiny untracked uppercase headers.
  - No grid particle mesh backgrounds.
  ================================================================================`
  },
  {
    id: "TILE-007",
    slug: "dark-tactical-editorial",
    name: "Dark Tactical Editorial / Cyber-Gothic",
    vibe: "Deep Obsidian • Cyber-Gothic Watermarks • 237° Telemetry • Engineered Brutalism",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber", "editorial", "brutalist"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Syne",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Base", hex: "#0A0A0C" },
      { name: "Canvas Subtle", hex: "#121216" },
      { name: "Surface Card", hex: "#18181D" },
      { name: "Surface Elevated", hex: "#22222A" },
      { name: "Text Primary", hex: "#F5F5F7" },
      { name: "Text Secondary", hex: "#9E9EA8" },
      { name: "Text Muted", hex: "#52525B" },
      { name: "Accent Solid", hex: "#FFFFFF" }
    ],
    description: "High-contrast dark tactical cyber-gothic design system featuring deep obsidian black surfaces, ambient blackletter calligraphy watermarks, 237° tactical telemetry, perspective dashed orbital ground stages, and razor-sharp engineered brutalism.",
    markdownSpec: `================================================================================
  STYLE TILE: "DARK TACTICAL EDITORIAL / CYBER-GOTHIC"
  Production-Ready Design System Specification (TILE-007)
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. DESIGN STATEMENT & VIBE SUMMARY
   * -------------------------------------------------------------------------- */
  A hyper-disciplined collision of high-fashion editorial brutalism, cybernetic aerospace telemetry, and monastic dark gothic calligraphy. Characterized by pitch-black obsidian planes (#0A0A0C), razor-sharp 0px angularity, atmospheric radial illumination, ambient ghost blackletter watermarks, 237° orbital perspective grids, and high-contrast stark white precision actuators.
  
  /* -----------------------------------------------------------------------------
   * 2. COLOR ROLES & PALETTE
   * -------------------------------------------------------------------------- */
  :root {
  /* Canvas & Base Layers */
  --canvas-base:            #0A0A0C; /* Deep obsidian black, primary viewport background */
  --canvas-subtle:          #121216; /* Slight atmospheric radial lift */
  --surface-card:           #18181D; /* Card / container baseline */
  --surface-elevated:       #22222A; /* Tooltips, popovers, elevated interactive surfaces */
  
  /* Inks & Signal Typography */
  --text-primary:           #F5F5F7; /* High-contrast pure white for titles & actions */
  --text-secondary:         #9E9EA8; /* Neutral cool grey for reading copy & paragraphs */
  --text-muted:             #52525B; /* Low-contrast metadata, index tags, unit coordinates */
  --text-watermark:         rgba(255, 255, 255, 0.035); /* Giant ambient blackletter calligraphy */
  
  /* Accents & Tactical Highlights */
  --accent-solid:           #FFFFFF; /* Sharp high-contrast micro-indicators & active borders */
  --accent-subtle:          rgba(255, 255, 255, 0.12); /* Dashed guides, crosshairs, stage grids */
  --state-focus:            rgba(255, 255, 255, 0.24); /* Active focal rings & targeting bounds */
  
  /* Structural Aliases */
  --bg-canvas:              var(--canvas-base);
  --bg-surface:             var(--surface-card);
  --bg-surface-elevated:    var(--surface-elevated);
  --ink-primary:            var(--text-primary);
  --ink-secondary:          var(--text-secondary);
  --ink-muted:              var(--text-muted);
  }
  
  /* -----------------------------------------------------------------------------
   * 3. TYPOGRAPHY SYSTEM
   * -------------------------------------------------------------------------- */
  /* Font Stacks */
  --font-display:   "Syne", "Monument Extended", "Druk Wide", -apple-system, sans-serif;
  --font-sans:      "Inter", "Aeonik", "Satoshi", -apple-system, sans-serif;
  --font-watermark: "UnifrakturMaguntia", "Old London", "Pirata One", cursive, serif;
  --font-mono:      "JetBrains Mono", "Space Mono", monospace;
  
  /* Type Scale & Typographic Metrics */
  --text-ambient-ghost:  220px  / 1.00  var(--font-watermark); /* Weight: 400 | Opacity: 0.035 */
  --text-hero-vertical:  96px   / 0.90  var(--font-display);   /* Weight: 900 | Tracking: -0.03em | Vertical (270deg) */
  --text-display:        3.5rem / 1.05  var(--font-display);   /* Weight: 800 | Tracking: -0.03em */
  --text-h1:             2.5rem / 1.15  var(--font-display);   /* Weight: 800 | Tracking: -0.02em */
  --text-h2:             1.5rem / 1.25  var(--font-display);   /* Weight: 700 | Tracking: -0.01em */
  --text-section-header: 13px   / 1.20  var(--font-display);   /* Weight: 800 | Tracking: 0.22em  | UPPERCASE */
  --text-nav-item:       12px   / 1.20  var(--font-display);   /* Weight: 700 | Tracking: 0.18em  | UPPERCASE */
  --text-cta-link:       13px   / 1.20  var(--font-display);   /* Weight: 800 | Tracking: 0.15em  | UPPERCASE */
  --text-badge-index:    18px   / 1.10  var(--font-display);   /* Weight: 800 | Tracking: -0.01em | Tabular figures (No.04) */
  --text-body:           14px   / 1.65  var(--font-sans);      /* Weight: 400 | Tracking: 0.01em  | Line-height: 1.65 */
  --text-micro-coord:    11px   / 1.30  var(--font-mono);      /* Weight: 600 | Tracking: 0.08em  | Monospaced (237°) */
  
  /* -----------------------------------------------------------------------------
   * 4. CORNER GEOMETRY (BORDER RADII)
   * -------------------------------------------------------------------------- */
  --radius-none:  0px;    /* Primary CTAs, cards, navigational frames */
  --radius-sm:    2px;    /* Badges, micro tags, chip indicators */
  --radius-full:  9999px; /* Circular orbital stage rings, radial markers */
  
  /* -----------------------------------------------------------------------------
   * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
   * -------------------------------------------------------------------------- */
  /* Optical Stacking Hierarchy (Back to Front):
   * Layer 0 (Backdrop):   Radial gradient: radial-gradient(circle at 50% 45%, #18181D 0%, #0A0A0C 85%)
   * Layer 1 (Ghost Text): Ambient blackletter graphic text positioned behind foreground subject
   * Layer 2 (Guides):     Perspective dashed ellipse stage base (0 deg tilt ground plane)
   * Layer 3 (Content):    HUD labels, floating text blocks, side rail navigation
   * Layer 4 (Overlays):   Global fixed header, hamburger trigger, coordinate markers
   */
  --backdrop-radial:    radial-gradient(circle at 50% 45%, #18181D 0%, #0A0A0C 85%);
  --depth-stage-glow:   0 0 120px rgba(0, 0, 0, 0.85);
  --depth-hover-subtle: 0 4px 20px rgba(0, 0, 0, 0.60);
  --depth-tooltip:      0 8px 32px rgba(0, 0, 0, 0.90), 0 0 0 1px rgba(255, 255, 255, 0.12);
  
  /* -----------------------------------------------------------------------------
   * 6. SPACING & SPATIAL SCALE (8-POINT SYSTEM)
   * -------------------------------------------------------------------------- */
  --space-2xs: 4px;   /* Icon-to-text micro gaps */
  --space-xs:  8px;   /* Tag internal padding, chevron offsets */
  --space-sm:  16px;  /* Header text margin bottom */
  --space-md:  24px;  /* Paragraph gap, navigation spacing */
  --space-lg:  40px;  /* Section module separation */
  --space-xl:  64px;  /* Viewport edge insets */
  --space-2xl: 96px;  /* Hero display separation */
  
  /* -----------------------------------------------------------------------------
   * 7. BORDERS & DIVIDERS
   * -------------------------------------------------------------------------- */
  --border-dashed: 1px dashed rgba(255, 255, 255, 0.18); /* Orbital floor rings */
  --border-solid:  1px solid rgba(255, 255, 255, 0.08);  /* Panel dividers */
  --border-accent: 1.5px solid #FFFFFF;                  /* Active markers */
  --divider-dash:  4px 6px;                              /* Dash 4px, Gap 6px */
  
  /* -----------------------------------------------------------------------------
   * 8. ICONOGRAPHY LANGUAGE
   * -------------------------------------------------------------------------- */
  - Style: Monoline, ultra-geometric, sharp terminal points (0px corner rounding).
  - Stroke Weight: 1.5px to 2.0px.
  - Standard Glyphs:
  - Navigation Menu: Two parallel horizontal bars (Width: 20px, Gap: 6px)
  - Directional Link: Square angled corner arrow (↳ / →)
  - Stepper / Pagination: Double chevron (») with 3px inner spacing
  - Spatial Orientation: Degree unit notation (237°) with monospaced font
  
  /* -----------------------------------------------------------------------------
   * 9. INTERACTION & FEEDBACK RULES
   * -------------------------------------------------------------------------- */
  - Nav Links: Hover -> letter-spacing: +0.03em; color: #FFFFFF; (Transition: 200ms ease-out)
  - Action CTA (↳ GET): Hover -> transform: translateX(4px); underline scale from left (0 to 100%)
  - Pagination (»): Hover -> Chevrons pulse rightwards by 2px in sequence
  - Stage Orbit: Hover -> Dashed ring opacity increases from 0.18 to 0.45
  - Cursor Dynamics:
  - Default: Minimalist custom dot cursor (6px #FFF)
  - Interactive Target: Expands to hollow targeting circle (28px border: 1px solid #FFF) with 0.15s lerp
  
  /* -----------------------------------------------------------------------------
   * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
   * -------------------------------------------------------------------------- */
  - NO generic purple/violet gradients on dark backgrounds (strict obsidian/neutral palette).
  - NO round pill buttons or soft rounded card corners (strictly 0px angularity; 2px for chips only).
  - NO blurry diffuse pastel shadows (rely on radial atmospheric contrast and crisp hairlines).
  - NO gradient keywords or rainbow accents.
  - NO floating cards without hairline borders or dark obsidian surface differentiation.`
  },
  {
    id: "TILE-008",
    slug: "skybound",
    name: "Skybound Design System",
    vibe: "Cool Alabaster • Electric Lemon Lime • Modern Travel",
    vibeBadge: "Playful & Pop",
    categories: ["playful", "luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Inter",
      mono: "Plus Jakarta Sans"
    },
    palette: [
      { name: "Brand Dark", hex: "#0E0F12" },
      { name: "Electric Lime", hex: "#EDF947" },
      { name: "Canvas Alabaster", hex: "#F5F6F8" },
      { name: "Surface Pure", hex: "#FFFFFF" },
      { name: "Slate Gray", hex: "#6C727F" }
    ],
    description: "High-utility visual architecture for modern air travel, aviation hospitality, and luxury destination discovery. Built on cool alabaster foundations, onyx typography, electric lemon-lime tactile triggers, and frosted floating glass.",
    markdownSpec: `================================================================================
                      SKYBOUND DESIGN SYSTEM // STYLE TILE                      
  ================================================================================
  
  [ 01. COLOR ROLES & PALETTE ]
  --------------------------------------------------------------------------------
  • Primary & Accents:
  - Brand Dark (Primary Text / Base CTA) : #0E0F12  (Deep Onyx Black)
  - Brand Accent (Interactive Highlight) : #EDF947  (Electric Lemon Lime)
  - Brand Accent Active / Press          : #D8E534  (Deep Lime)
  
  • Surfaces & Backgrounds:
  - Canvas / Page Background             : #F5F6F8  (Cool Alabaster)
  - Surface Pure (Cards / Floating Bars) : #FFFFFF  (Pure White)
  - Glass Surface (Frosted Overlays)     : rgba(255, 255, 255, 0.72)
  - Glass Border                         : rgba(255, 255, 255, 0.40)
  
  • Neutrals & Grayscale:
  - Text Primary                         : #0E0F12  (Onyx)
  - Text Secondary / Subtitles           : #6C727F  (Slate Gray)
  - Text Muted / Placeholders            : #9CA3AF  (Cool Gray)
  - Border Subdued / Divider             : #EAECEF  (Soft Gray)
  - Border Medium                        : #DDE1E6  (Outline Gray)
  
  • Micro-Badge & Tag Tints (Pastels):
  - Tag Gold (Top Rated)                 : BG: #FEF3C7 | Text: #78350F
  - Tag Pink (Trending)                  : BG: #FFE4E6 | Text: #9F1239
  - Tag Mint (Guest Favorite)            : BG: #D1FAE5 | Text: #065F46
  - Tag Sky (Location / Info)            : BG: #E0F2FE | Text: #0369A1
  
  
  [ 02. TYPOGRAPHY SYSTEM ]
  --------------------------------------------------------------------------------
  • Font Families:
  - Primary / Headings : "Plus Jakarta Sans", "Satoshi", system-ui, sans-serif
  - Body / Functional  : "Inter", "Plus Jakarta Sans", system-ui, sans-serif
  
  • Hierarchy Scale:
  - Display Hero     : 56px / 1.1 / 800 (ExtraBold)  - Tracking: -0.03em
  - Section Heading  : 28px / 1.2 / 700 (Bold)       - Tracking: -0.02em
  - Card Title       : 16px / 1.3 / 600 (SemiBold)   - Tracking: -0.01em
  - Subtitle / Hero  : 16px / 1.5 / 400 (Regular)    - Tracking:  0.00em
  - Body / Input     : 14px / 1.4 / 500 (Medium)     - Tracking:  0.00em
  - Micro / Meta     : 12px / 1.3 / 400 (Regular)    - Tracking: +0.01em
  - Tag Pill Label   : 11px / 1.0 / 600 (SemiBold)   - Tracking: +0.02em
  
  
  [ 03. CORNER GEOMETRY (BORDER RADII) ]
  --------------------------------------------------------------------------------
  • radius-pill  (Full Round) : 9999px  -> Buttons, Badges, Search Bar, Nav Pills
  • radius-3xl   (Hero Frame) : 36px    -> Master Page Container, Canvas Bounds
  • radius-2xl   (Cards)      : 24px    -> Floating Search Bar, Category Cards
  • radius-xl    (Overlays)   : 16px    -> Floating Mini-widgets, Popovers
  • radius-sm    (Micro Tags) : 8px     -> Metadata Pills, Tooltips
  
  
  [ 04. ELEVATION & DEPTH (SHADOWS & LAYERS) ]
  --------------------------------------------------------------------------------
  • Elevation Levels:
  - Level 0 (Flat)       : none
  - Level 1 (Card Rest)  : 0px 2px 8px -2px rgba(14, 15, 18, 0.04)
  - Level 2 (Floating)   : 0px 20px 40px -12px rgba(14, 15, 18, 0.08),
                           0px 1px 3px 0px rgba(14, 15, 18, 0.02)
  - Level 3 (Active Pop) : 0px 28px 64px -16px rgba(14, 15, 18, 0.14)
  
  • Glassmorphism Treatment:
  - Frosted Float : backdrop-filter: blur(20px) saturate(180%);
                    background: rgba(255, 255, 255, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.60);
  
  
  [ 05. SPACING & SPATIAL SCALE ]
  --------------------------------------------------------------------------------
  • Base Grid: 4px / 8px Baseline System
  • Spacing Tokens:
  - space-2xs :  4px  -> Icon-to-label gaps, tag inner padding
  - space-xs  :  8px  -> Input inner gaps, micro card padding
  - space-sm  : 12px  -> Button vertical padding, chip spacing
  - space-md  : 16px  -> Card padding horizontal/vertical
  - space-lg  : 24px  -> Category card padding, grid gutter
  - space-xl  : 32px  -> Section sub-spacing, search input groups
  - space-2xl : 48px  -> Section separation, Hero margin
  - space-3xl : 64px  -> Major layout division
  
  
  [ 06. BORDERS & DIVIDERS ]
  --------------------------------------------------------------------------------
  • Default Card Stroke   : 1px solid #EAECEF
  • Active / Hover Stroke : 1.5px solid #0E0F12
  • Search Divider        : 1px solid #EAECEF (Height: 32px, Vertical)
  • Focus Ring Token      : 2px solid #0E0F12, Offset: 2px
  
  
  [ 07. ICONOGRAPHY LANGUAGE ]
  --------------------------------------------------------------------------------
  • Style        : Clean Monoline / Architectural Line Art (1.5px - 1.75px stroke)
  • Endcaps      : Round (stroke-linecap: round; stroke-linejoin: round;)
  • Sizing       :
  - Action / Button Icons : 18px x 18px
  - Form & Search Icons   : 16px x 16px
  - Category Line Art     : 32px x 32px (Custom linear illustrations)
  • Color Rule   : Inherit text primary (#0E0F12) for categories and controls;
                 Muted (#9CA3AF) for placeholders and structural indicators.
  
  
  [ 08. INTERACTION & FEEDBACK RULES ]
  --------------------------------------------------------------------------------
  • Transitions:
  - Standard Curve  : cubic-bezier(0.16, 1, 0.3, 1) (Smooth spring ease-out)
  - Base Duration   : 200ms (Micro-interactions), 300ms (Card transforms)
  
  • Interactive Behaviors:
  - Navigation Pill : Background changes to #EDF947 with instant active weight.
  - Search CTA      : Circle button scale(1.05) on hover with deepened shadow.
  - Category Cards  : Hover brings -3px translateY lift and border #DDE1E6.
  - Arrow Controls  : Active click triggers scale(0.94); accent yellow indicates
                      directional pagination readiness.
  ================================================================================`
  },
  {
    id: "TILE-004",
    slug: "warm-wabisabi",
    name: "Warm Wabi-Sabi Ledger",
    vibe: "Organic Minimalism • Tactile Craft • Serene Editorial",
    vibeBadge: "Quiet Luxury",
    categories: ["minimalist", "luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Newsreader",
      sans: "Inter",
      mono: "Courier Prime"
    },
    palette: [
      { name: "Unbleached Linen", hex: "#F7F3EE" },
      { name: "Oat Slipboard", hex: "#EDE4D8" },
      { name: "Sumi Charcoal", hex: "#2E2A27" },
      { name: "Terracotta Seal", hex: "#A65B32" },
      { name: "Matcha Botanical", hex: "#6A7B66" },
      { name: "Chamomile Ochre", hex: "#C49A45" },
      { name: "Aizome Indigo", hex: "#3F4B5A" }
    ],
    description: "Raw unbleached linen textures, wood-fired sumi charcoal inks, terracotta pottery seals, and serene editorial typography with diffused resting shadows and subtle 2px craft radii.",
    markdownSpec: `================================================================================
  STYLE TILE: WARM WABI-SABI LEDGER (TILE-004)
  Aesthetic: Organic Minimalism • Tactile Craft • Serene Editorial • Quiet Luxury
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. COLOR ROLES & PALETTE
   * -------------------------------------------------------------------------- */
  :root {
  /* Canvas & Structural Surfaces */
  --bg-canvas:               #F7F3EE; /* Raw unbleached linen base */
  --bg-surface:              #EDE4D8; /* Oat slipboard / card background */
  --bg-surface-raised:       #F4ECE1; /* Floating card / elevated sheet */
  --bg-surface-sunken:       #E4DACB; /* Inset ledger / well */
  
  /* Inks & Contrast (Typographic Hierarchy) */
  --ink-primary:             #2E2A27; /* Wood-fired sumi charcoal */
  --ink-secondary:           #574F49; /* Weathered iron gall */
  --ink-muted:               #827870; /* Soft dried clay */
  --ink-faint:               #B8AFA6; /* Archival watermark */
  
  /* Accent Signifiers */
  --accent-warm:             #A65B32; /* Terracotta pottery seal / Primary CTA */
  --accent-warm-hover:       #8F4B26; /* Deep burnt sienna */
  --accent-earth:            #6A7B66; /* Muted botanical matcha / Success */
  --accent-ochre:            #C49A45; /* Dried chamomile / Warning-Accent */
  --accent-indigo:           #3F4B5A; /* Washed aizome indigo / Informational */
  
  
  /* ---------------------------------------------------------------------------
   * 2. TYPOGRAPHY SYSTEM
   * --------------------------------------------------------------------------- */
  /* Font Stacks */
  --font-display:            "Newsreader", "Playfair Display", "Garamond", Georgia, serif;
  --font-sans:               "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono:               "Courier Prime", "SF Mono", "Consolas", monospace;
  
  /* Type Scale: Scale factor ~1.25 (Major Third) */
  --text-display:            italic 400 3.25rem/1.15 var(--font-display);  /* letter-spacing: -0.02em */
  --text-h1:                 normal 500 2.25rem/1.25 var(--font-display);  /* letter-spacing: -0.01em */
  --text-h2:                 normal 500 1.75rem/1.30 var(--font-display);  /* letter-spacing: -0.005em */
  --text-h3:                 normal 600 1.25rem/1.40 var(--font-display);  /* letter-spacing: 0.00em */
  --text-body-lead:          normal 300 1.1875rem/1.80 var(--font-sans);   /* letter-spacing: 0.01em */
  --text-body:               normal 300 1.00rem/1.75 var(--font-sans);     /* letter-spacing: 0.01em */
  --text-caption:            normal 400 0.8125rem/1.50 var(--font-sans);   /* letter-spacing: 0.02em */
  --text-ledger-mono:        normal 400 0.8125rem/1.60 var(--font-mono);   /* letter-spacing: 0.05em; text-transform: uppercase */
  
  
  /* ---------------------------------------------------------------------------
   * 3. CORNER GEOMETRY (BORDER RADII)
   * --------------------------------------------------------------------------- */
  /* Intentional softness; avoids hyper-geometric rounded edges */
  --radius-none:             0px;
  --radius-subtle:           2px;       /* Sharp-tailored ledger inputs, stamps */
  --radius-surface:          4px;       /* Primary cards, containers, panels */
  --radius-pill:             9999px;    /* Status tags, pill filters */
  
  
  /* ---------------------------------------------------------------------------
   * 4. ELEVATION & DEPTH (DIFFUSED SHADOWS)
   * --------------------------------------------------------------------------- */
  /* Tinted ambient occlusion mimicking heavy paper resting on linen */
  --shadow-flat:             none;
  --shadow-resting:          0 1px 3px rgba(46, 42, 39, 0.04),
                             0 4px 12px rgba(46, 42, 39, 0.03);
  --shadow-raised:           0 4px 10px rgba(46, 42, 39, 0.05),
                             0 12px 28px rgba(46, 42, 39, 0.06);
  --shadow-lifted:           0 10px 24px rgba(46, 42, 39, 0.07),
                             0 24px 48px rgba(46, 42, 39, 0.08);
  --shadow-inset-ledger:     inset 0 1px 2px rgba(46, 42, 39, 0.07);
  
  
  /* ---------------------------------------------------------------------------
   * 5. SPACING & SPATIAL SCALE (8pt Baseline Grid)
   * --------------------------------------------------------------------------- */
  --space-2xs:               0.25rem;   /* 4px  - Hairline gap */
  --space-xs:                0.50rem;   /* 8px  - Compact elements */
  --space-sm:                0.75rem;   /* 12px - Input padding / badge margins */
  --space-md:                1.00rem;   /* 16px - Component gutters */
  --space-lg:                1.50rem;   /* 24px - Card internal padding */
  --space-xl:                2.50rem;   /* 40px - Section grouping */
  --space-2xl:               4.00rem;   /* 64px - Editorial rhythm bands */
  
  
  /* ---------------------------------------------------------------------------
   * 6. BORDERS & DIVIDERS
   * --------------------------------------------------------------------------- */
  --border-width:            1px;
  --border-subtle:           1px solid rgba(46, 42, 39, 0.09); /* Faint paper edge */
  --border-strong:           1px solid rgba(46, 42, 39, 0.22); /* Ledger frame */
  --border-stamp:            1.5px dashed var(--accent-warm);   /* Archival cutout */
  --divider-ledger:          1px dashed rgba(46, 42, 39, 0.14);
  
  
  /* ---------------------------------------------------------------------------
   * 7. ICONOGRAPHY LANGUAGE
   * --------------------------------------------------------------------------- */
  /*
   * Style: Monoline, open counters, rounded stroke terminals (match Courier/Newsreader).
   * Weight: 1.25px - 1.5px consistent stroke width.
   * Optical Size: 20px on 24px grid container.
   * Tone: Functional, organic, devoid of sharp geometric angles or filled badges.
   */
  --icon-stroke-width:       1.25px;
  --icon-size-sm:            16px;
  --icon-size-md:            20px;
  --icon-size-lg:            24px;
  
  
  /* ---------------------------------------------------------------------------
   * 8. INTERACTION & FEEDBACK RULES
   * --------------------------------------------------------------------------- */
  /* Physics: Gradual entry, graceful organic deceleration */
  --ease-craft:              cubic-bezier(0.25, 1, 0.5, 1);
  --duration-fast:           140ms;
  --duration-normal:         240ms;
  
  /* Focus Ring: Double-stroke paper cutout outline */
  --focus-ring:              0 0 0 1px var(--bg-canvas),
                             0 0 0 2.5px var(--accent-warm);
  }
  
  /* Base Component Rules */
  button.primary {
  font: var(--text-caption);
  font-weight: 500;
  color: var(--bg-canvas);
  background-color: var(--accent-warm);
  border: 1px solid transparent;
  border-radius: var(--radius-subtle);
  padding: var(--space-xs) var(--space-lg);
  box-shadow: var(--shadow-resting);
  transition: all var(--duration-normal) var(--ease-craft);
  }
  
  button.primary:hover {
  background-color: var(--accent-warm-hover);
  box-shadow: var(--shadow-raised);
  transform: translateY(-1px);
  }
  
  button.primary:active {
  transform: translateY(0px);
  box-shadow: var(--shadow-inset-ledger);
  }
  
  .ledger-card {
  background: var(--bg-surface);
  border: var(--border-subtle);
  border-radius: var(--radius-surface);
  box-shadow: var(--shadow-resting);
  padding: var(--space-lg);
  }
  
  /* -----------------------------------------------------------------------------
   * 9. FORBIDDEN CLICHÉS & ANTI-PATTERNS
   * -------------------------------------------------------------------------- */
  - NO harsh primary neon or neon violet/purple glows on dark backgrounds.
  - NO heavy 3D skeuomorphic bevels or harsh black drop shadows.
  - NO high-saturation rainbow gradients or gradient keyword text fills.
  - NO hyper-geometric rounded pill cards or excessive >16px card corners.
  - NO cluttered icon-stuffed dashboards; preserve open spatial serenity and organic quietude.`
  },
  {
    id: "TILE-006",
    slug: "blueprint-hud",
    name: "Industrial Blueprint HUD",
    vibe: "Architectural Cyanotype • CAD Precision • Aerospace Telemetry",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber", "editorial"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Orbitron",
      sans: "DM Sans",
      mono: "Chivo Mono"
    },
    palette: [
      { name: "Deep Void", hex: "#040B16" },
      { name: "Cyanotype Sheet", hex: "#081325" },
      { name: "Drawing Frame", hex: "#0E2445" },
      { name: "Electric Pen", hex: "#00E5FF" },
      { name: "Vector Secondary", hex: "#00B4D8" },
      { name: "Technical White", hex: "#E0F2FE" },
      { name: "Revision Amber", hex: "#FF9900" },
      { name: "Nominal Emerald", hex: "#00FFA3" },
      { name: "Load Crimson", hex: "#FF3366" }
    ],
    description: "Architectural CAD blueprint and cyanotype drafting board with electric cyan vector pen lines, 45° chamfered geometry, coordinate reticles, dimension callouts, and precision aerospace telemetry.",
    markdownSpec: `================================================================================
  Aesthetic: Industrial Blueprint HUD • Architectural Cyanotype • CAD Precision
  ================================================================================
  
  /* -----------------------------------------------------------------------------
   * 1. DESIGN STATEMENT & VIBE SUMMARY
   * -------------------------------------------------------------------------- */
  A high-precision technical CAD blueprint and architectural cyanotype aesthetic.
  Built for aerospace telemetry, spatial coordinate tracking, orthographic schematics,
  and instrument panels. Features electric cyan vector inks (#00E5FF) on deep structural
  cyanotype (#081325) and void substrates (#040B16), 45° chamfered corner geometry,
  phosphor back-luminescence, and amber delta stamps.
  
  /* -----------------------------------------------------------------------------
   * 2. COLOR ROLES & SEMANTIC PALETTE
   * -------------------------------------------------------------------------- */
  :root {
  /* Substrate / Canvas Tiers */
  --bg-deep-void:       #040B16; /* Deepest blueprint background / viewport void */
  --bg-cyanotype:       #081325; /* Primary architectural drawing sheet */
  --bg-cell:            #0E2445; /* Elevated drawing frame & structural panels */
  --bg-cell-hover:      #132F5A; /* Active cell scan / mouse focus */
  --bg-cell-active:     #183C72; /* Selected element / active drafting zone */
  
  /* Vector Inks & Technical Pen Lines */
  --ink-bright:         #00E5FF; /* Electric blueprint pen (vector focal points) */
  --ink-secondary:      #00B4D8; /* Secondary vector paths & dimension lines */
  --ink-rule:           rgba(0, 229, 255, 0.25); /* Hairline coordinate guides */
  --ink-rule-subtle:    rgba(0, 229, 255, 0.08); /* Background drafting grid */
  --ink-glow:           rgba(0, 229, 255, 0.45); /* Phosphor pen back-luminescence */
  
  /* Readout & Technical Typography */
  --ink-white:          #E0F2FE; /* Primary technical data & title blocks */
  --ink-muted:          #7DD3FC; /* Metadata, units, parameter keys */
  --ink-ghost:          #38658C; /* Disabled axes, inactive layers */
  
  /* HUD Overrides & CAD Revision Accents */
  --accent-amber:       #FF9900; /* Revision stamp / delta flag / cautionary note */
  --accent-amber-glow:  rgba(255, 153, 0, 0.35);
  --accent-crimson:     #FF3366; /* Critical structural warning / load violation */
  --accent-emerald:     #00FFA3; /* Verified dimension / nominal calibration */
  
  /* ---------------------------------------------------------------------------
   * 3. TYPOGRAPHY SYSTEM
   * ------------------------------------------------------------------------ */
  --font-display: "Orbitron", -apple-system, sans-serif;
  --font-sans:    "DM Sans", -apple-system, sans-serif;
  --font-mono:    "Chivo Mono", monospace;
  
  /* Font Scale & Metric Rhythms */
  --text-micro:   0.625rem;  /* 10px — Axis labels, coordinate subtexts, stamps */
  --text-meta:    0.75rem;   /* 12px — Monospace telemetry, revision tags */
  --text-body:    0.875rem;  /* 14px — Standard CAD annotations & parameters */
  --text-body-lg: 1.000rem;  /* 16px — High-readability technical summaries */
  --text-h3:      1.250rem;  /* 20px — Structural component group headings */
  --text-h2:      1.750rem;  /* 28px — Drawing sheet / viewport titles */
  --text-h1:      2.500rem;  /* 40px — System HUD callouts & focal numbers */
  
  /* Tracking & Letterspacing */
  --tracking-tight: -0.01em;
  --tracking-normal: 0.00em;
  --tracking-wide:   0.08em; /* Uppercase section labels */
  --tracking-cad:    0.15em; /* Monospace coordinate readouts & title blocks */
  
  /* ---------------------------------------------------------------------------
   * 4. CORNER GEOMETRY (BORDER RADII & CHAMFERS)
   * ------------------------------------------------------------------------ */
  --radius-none:     0px;     /* Core CAD philosophy: crisp orthogonal joins */
  --radius-micro:    1px;     /* Subtle precision rounding for tiny badges */
  --radius-subtle:   2px;     /* Button & panel default */
  
  /* Precision Clipped/Chamfered Corners (45° Drafting Notch) */
  --clip-chamfer-sm: polygon(
    0 0,
    calc(100% - 6px) 0, 100% 6px,
    100% 100%,
    6px 100%, 0 calc(100% - 6px)
  );
  --clip-chamfer-lg: polygon(
    0 0,
    calc(100% - 14px) 0, 100% 14px,
    100% calc(100% - 14px), calc(100% - 14px) 100%,
    0 100%
  );
  
  /* ---------------------------------------------------------------------------
   * 5. ELEVATION & DEPTH (OPTICAL STACKING & WIREFRAME GLOWS)
   * ------------------------------------------------------------------------ */
  --elevation-flat:    none;
  --elevation-sheet:   0 0 0 1px var(--ink-rule), inset 0 0 24px rgba(0, 229, 255, 0.03);
  --elevation-panel:   0 4px 20px rgba(4, 11, 22, 0.85), 0 0 0 1px var(--ink-rule);
  --elevation-hud:     0 0 16px var(--ink-glow), inset 0 0 12px rgba(0, 229, 255, 0.12);
  --elevation-modal:   0 12px 48px rgba(4, 11, 22, 0.95), 0 0 0 1.5px var(--ink-bright);
  --elevation-warning: 0 0 18px var(--accent-amber-glow), inset 0 0 8px rgba(255, 153, 0, 0.15);
  
  /* ---------------------------------------------------------------------------
   * 6. SPACING & SPATIAL CAD GRID
   * ------------------------------------------------------------------------ */
  --space-2xs:  2px;
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;  /* Matches 24px base drafting grid */
  --space-xl:   32px;
  --space-2xl:  48px;
  
  /* Architectural Grid Backgrounds */
  --grid-cad-major: 24px 24px linear-gradient(to right, var(--ink-rule-subtle) 1px, transparent 1px),
                    24px 24px linear-gradient(to bottom, var(--ink-rule-subtle) 1px, transparent 1px);
  --grid-cad-minor: 6px 6px linear-gradient(to right, rgba(0, 229, 255, 0.03) 1px, transparent 1px),
                    6px 6px linear-gradient(to bottom, rgba(0, 229, 255, 0.03) 1px, transparent 1px);
  
  /* ---------------------------------------------------------------------------
   * 7. BORDERS & TECHNICAL DIVIDERS
   * ------------------------------------------------------------------------ */
  --border-cad-hairline: 1px solid var(--ink-rule);
  --border-cad-primary:  1.5px solid var(--ink-bright);
  --border-cad-focus:    2px solid var(--ink-bright);
  --border-cad-dashed:   1px dashed var(--ink-rule);
  --border-cad-stamp:    1.5px solid var(--accent-amber);
  
  /* ---------------------------------------------------------------------------
   * 8. ICONOGRAPHY RULES
   * ------------------------------------------------------------------------ */
  --icon-size-sm:        14px;
  --icon-size-md:        18px;
  --icon-size-lg:        24px;
  --icon-stroke-width:   1.5px;      /* Strictly matches --border-cad-primary */
  --icon-stroke-linecap: square;     /* Technical drafting pen geometry */
  --icon-stroke-linejoin: miter;     /* Crisp angular intersections */
  
  /* ---------------------------------------------------------------------------
   * 9. INTERACTION & FEEDBACK RULES
   * ------------------------------------------------------------------------ */
  --transition-instant: 75ms cubic-bezier(0, 0, 0.2, 1);  /* Instrument snap */
  --transition-smooth:  150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* -----------------------------------------------------------------------------
   * 10. COMPONENT BLUEPRINTS & ARCHETYPES
   * -------------------------------------------------------------------------- */
  /* Base Viewport & Drafting Canvas */
  body, .blueprint-viewport {
  background-color: var(--bg-cyanotype);
  background-image: var(--grid-cad-major), var(--grid-cad-minor);
  color: var(--ink-white);
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  }
  
  /* Structural CAD Frame / Panel */
  .cad-panel {
  position: relative;
  background-color: var(--bg-cell);
  border: var(--border-cad-hairline);
  box-shadow: var(--elevation-panel);
  padding: var(--space-lg);
  border-radius: var(--radius-none);
  }
  
  /* Precision Corner Reticle Overlay on Panels */
  .cad-panel-reticle::before,
  .cad-panel-reticle::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-color: var(--ink-bright);
  pointer-events: none;
  }
  .cad-panel-reticle::before {
  top: -1px;
  left: -1px;
  border-top: 2px solid var(--ink-bright);
  border-left: 2px solid var(--ink-bright);
  }
  .cad-panel-reticle::after {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid var(--ink-bright);
  border-right: 2px solid var(--ink-bright);
  }
  
  /* Monospace Coordinate & Data Readout */
  .cad-telemetry {
  font-family: var(--font-mono);
  font-size: var(--text-meta);
  color: var(--ink-muted);
  letter-spacing: var(--tracking-cad);
  text-transform: uppercase;
  }
  
  .cad-telemetry-value {
  color: var(--ink-bright);
  font-weight: 600;
  }
  
  /* Primary Architectural Action Button */
  .cad-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background-color: rgba(0, 229, 255, 0.08);
  border: var(--border-cad-primary);
  color: var(--ink-bright);
  font-family: var(--font-display);
  font-size: var(--text-meta);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  clip-path: var(--clip-chamfer-sm);
  cursor: crosshair;
  transition: background-color var(--transition-instant),
              box-shadow var(--transition-instant),
              transform var(--transition-instant);
  }
  
  .cad-btn-primary:hover {
  background-color: var(--ink-bright);
  color: var(--bg-deep-void);
  box-shadow: var(--elevation-hud);
  }
  
  .cad-btn-primary:active {
  transform: scale(0.98);
  }
  
  /* CAD Revision / Warning Stamp */
  .cad-stamp-revision {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  border: var(--border-cad-stamp);
  background-color: rgba(255, 153, 0, 0.1);
  color: var(--accent-amber);
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  font-weight: 700;
  letter-spacing: var(--tracking-cad);
  text-transform: uppercase;
  box-shadow: var(--elevation-warning);
  }
  
  /* -----------------------------------------------------------------------------
   * 11. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
   * -------------------------------------------------------------------------- */
  - NO generic purple/violet gradients on dark backgrounds.
  - NO soft gaussian blurred drop shadows (strictly use wireframe reticles and phosphor glows).
  - NO large round pill buttons (>2px radius) or bloated padding.
  - NO floating cards without hairline grid borders or structural frames.
  - NO untracked typefaces without precise monospace readouts or technical metadata.`
  }
];

// App State
let currentCategory = "all";
let currentSearchQuery = "";
let currentLayoutMode = "grid"; // 'grid' or 'split'
let isCompactMode = true; // default ON

// -----------------------------------------------------------------------------
// TOAST SYSTEM
// -----------------------------------------------------------------------------
function showToast(message, icon = "✓") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 200);
  }, 2400);
}

// -----------------------------------------------------------------------------
// RENDER CARD PREVIEWS (16:9 Live Preview or Draft Skeleton)
// -----------------------------------------------------------------------------
function renderCardPreview(tile) {
  if (tile.hasPage) {
    return `
      <div class="card-preview-live" data-slug="${tile.slug}" title="${tile.name} (Live 16:9 Design Preview)">
        <iframe src="Designs/${tile.slug}.html" class="card-preview-iframe" title="${tile.name} Live Preview" loading="lazy" tabindex="-1" scrolling="no"></iframe>
        <a href="Designs/${tile.slug}.html" class="preview-overlay" title="Open ${tile.name}">
          <span class="preview-open-badge">Open Design Page ↗</span>
        </a>
      </div>
    `;
  }

  return `
    <div class="skeleton-screen-wrapper" title="${tile.name} (16:9 Skeleton Screen)">
      <div class="skeleton-screen">
        <!-- Wireframe Mock Nav Bar -->
        <div class="wireframe-nav">
          <div class="wireframe-nav-left"></div>
          <div class="wireframe-nav-right">
            <div class="wireframe-nav-dot"></div>
            <div class="wireframe-nav-dot"></div>
            <div class="wireframe-nav-dot"></div>
          </div>
        </div>

        <!-- Wireframe Mock Body -->
        <div class="wireframe-body">
          <div class="wireframe-hero-col">
            <div class="wireframe-h1-bar"></div>
            <div class="wireframe-p-bar"></div>
            <div class="wireframe-p-bar-short"></div>
            <div class="wireframe-btn-box"></div>
          </div>
          <div class="wireframe-art-col"></div>
        </div>

        <!-- Wireframe Mock Footer Grid -->
        <div class="wireframe-footer-grid">
          <div class="wireframe-card-cell"></div>
          <div class="wireframe-card-cell"></div>
          <div class="wireframe-card-cell"></div>
        </div>

        <!-- Rubber Stamp Overlay -->
        <div class="skeleton-stamp">
          <span class="skeleton-stamp-title">16:9 SKELETON</span>
          <span class="skeleton-stamp-sub">Designs/${tile.slug}.html</span>
        </div>
      </div>
    </div>
  `;
}

function resizeCardIframes() {
  document.querySelectorAll(".card-preview-live").forEach(container => {
    const iframe = container.querySelector(".card-preview-iframe");
    if (!iframe) return;
    const width = container.offsetWidth;
    if (width > 0) {
      const scale = width / 1280;
      iframe.style.transform = `scale(${scale})`;
    }
  });
}

// -----------------------------------------------------------------------------
// RENDER SKELETON & LIVE CATALOG CARDS
// -----------------------------------------------------------------------------
function renderCatalog() {
  const gridContainer = document.getElementById("catalog-grid");
  if (!gridContainer) return;

  const filtered = STYLE_TILES_DATA.filter(tile => {
    const matchesCat = currentCategory === "all" || tile.categories.includes(currentCategory);
    const q = currentSearchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      tile.name.toLowerCase().includes(q) ||
      tile.vibe.toLowerCase().includes(q) ||
      (tile.vibeBadge && tile.vibeBadge.toLowerCase().includes(q)) ||
      (tile.theme && tile.theme.toLowerCase().includes(q)) ||
      tile.description.toLowerCase().includes(q) ||
      tile.id.toLowerCase().includes(q) ||
      tile.fonts.display.toLowerCase().includes(q) ||
      tile.fonts.sans.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  // Update total counter in UI
  const totalCountEl = document.getElementById("displayed-count");
  if (totalCountEl) totalCountEl.textContent = `${filtered.length} SPECS`;

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; text-align: center; background: var(--surface-sheet); border: var(--border-core); box-shadow: var(--shadow-base);">
        <p class="font-mono text-h3" style="margin-bottom: 8px;">NO DRAFT SPECIFICATIONS FOUND</p>
        <p class="text-body-sm" style="color: var(--ink-muted);">No Style Tiles match "${currentSearchQuery}". Try clearing search query or filter tags.</p>
        <button class="btn btn-mustard btn-sm" style="margin-top: 16px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(tile => `
    <article class="design-card" data-id="${tile.id}">
      <!-- Card Header with Vibe Filter Option Badge -->
      <div class="card-header-bar">
        <span class="card-code">${tile.id}</span>
        <span class="card-vibe-badge" title="Filter by ${tile.vibeBadge}" onclick="setCategory('${tile.categories[0]}')">
          <span class="vibe-dot"></span>
          ${tile.vibeBadge}
        </span>
      </div>

      <!-- 16:9 Screen Container (Live if page published, Skeleton if draft) -->
      ${renderCardPreview(tile)}

      <!-- Card Body with Standardised Top and Bottom Blocks -->
      <div class="card-body">
        <div class="card-info-top">
          <div class="card-title-row">
            <h3 class="card-title">${tile.name}</h3>
          </div>
          <p class="card-desc">${tile.description}</p>
        </div>

        <!-- Standardised Bottom Section: Palette + Meta & Theme Tags -->
        <div class="card-info-bottom">
          <!-- Palette Preview Bar -->
          <div class="palette-preview-bar" title="Click swatch to copy hex code">
            ${tile.palette.map(sw => `
              <div class="swatch" style="background-color: ${sw.hex};" onclick="copySwatchHex('${sw.hex}', '${sw.name}')" title="${sw.name}: ${sw.hex}"></div>
            `).join('')}
          </div>

          <!-- Typography, category and theme metadata tags -->
          <div class="card-meta-tags">
            <span class="badge badge-theme-${tile.theme.toLowerCase().replace('/', '-')}">
              ${tile.theme === 'Dark' ? '◐ Dark' : tile.theme === 'Light' ? '◑ Light' : '◐◑ Dark/Light'}
            </span>
            <span class="badge badge-dark">Display: ${tile.fonts.display}</span>
            <span class="badge">Body: ${tile.fonts.sans}</span>
            <span class="badge badge-orange">#${tile.categories[0]}</span>
          </div>
        </div>
      </div>

      <!-- Card Action Footer -->
      <div class="card-actions-bar">
        <button class="btn btn-sm btn-mustard" onclick="openSpecModal('${tile.id}')" title="Inspect raw Markdown Style Tile">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Inspect Spec
        </button>
        <button class="btn btn-sm btn-primary" onclick="copyTilePrompt('${tile.id}')" title="Copy Markdown prompt for AI coding agent">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy Tile
        </button>
        <a href="Designs/${tile.slug}.html" class="btn btn-sm ${tile.hasPage ? 'btn-mustard' : ''}" title="Open ${tile.slug}.html">
          Page →
        </a>
      </div>
    </article>
  `).join('');

  requestAnimationFrame(resizeCardIframes);
  setTimeout(resizeCardIframes, 100);
}

// -----------------------------------------------------------------------------
// FILTER & SEARCH ACTIONS
// -----------------------------------------------------------------------------
function setCategory(category) {
  currentCategory = category;

  document.querySelectorAll(".filter-chip").forEach(chip => {
    if (chip.getAttribute("data-cat") === category) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  renderCatalog();
}

function handleSearchInput(e) {
  currentSearchQuery = e.target.value;
  renderCatalog();
}

// -----------------------------------------------------------------------------
// VIEWPORT ANCHOR TRACKING (SMOOTH & CLEAN VIEW MODE TRANSITIONS)
// -----------------------------------------------------------------------------
function getFocalCardAnchor() {
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 70;
  const viewportTop = headerHeight + 16;
  const viewportBottom = window.innerHeight;
  const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

  // If user is near top of page in hero section, maintain natural top scroll
  const hero = document.querySelector(".hero-section");
  if (hero) {
    const heroRect = hero.getBoundingClientRect();
    if (heroRect.bottom > window.innerHeight * 0.5 && currentScrollY < 200) {
      return null;
    }
  }

  // If controls panel is currently active in view, anchor to it
  const controls = document.getElementById("catalog-controls");
  if (controls) {
    const ctrlRect = controls.getBoundingClientRect();
    if (ctrlRect.top >= viewportTop - 50 && ctrlRect.bottom <= viewportBottom && currentScrollY < 650) {
      return {
        type: "controls",
        offsetFromViewportTop: ctrlRect.top - viewportTop
      };
    }
  }

  // Find the card that is currently focal in the viewport
  const cards = Array.from(document.querySelectorAll(".design-card"));
  if (!cards.length) return null;

  let bestCard = null;
  let minDistance = Infinity;

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    // Prefer cards intersecting the readable viewport
    if (rect.bottom > viewportTop && rect.top < viewportBottom) {
      const dist = Math.abs(rect.top - viewportTop);
      if (dist < minDistance) {
        minDistance = dist;
        bestCard = card;
      }
    }
  }

  // Fallback: find card closest to viewport top
  if (!bestCard) {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.top - viewportTop);
      if (dist < minDistance) {
        minDistance = dist;
        bestCard = card;
      }
    }
  }

  if (bestCard) {
    const rect = bestCard.getBoundingClientRect();
    return {
      type: "card",
      id: bestCard.getAttribute("data-id"),
      offsetFromViewportTop: rect.top - viewportTop
    };
  }

  return null;
}

function restoreFocalAnchor(anchor) {
  if (!anchor) return;

  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 70;
  const viewportTop = headerHeight + 16;
  const root = document.documentElement;

  // Temporarily disable CSS smooth scrolling to prevent conflict with layout reflow
  const prevBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const alignPosition = () => {
    let targetDocTop = null;

    if (anchor.type === "controls") {
      const controls = document.getElementById("catalog-controls");
      if (controls) {
        const rect = controls.getBoundingClientRect();
        targetDocTop = rect.top + (window.pageYOffset || root.scrollTop);
      }
    } else if (anchor.type === "card" && anchor.id) {
      const card = document.querySelector(`.design-card[data-id="${anchor.id}"]`);
      if (card) {
        const rect = card.getBoundingClientRect();
        targetDocTop = rect.top + (window.pageYOffset || root.scrollTop);
      }
    }

    if (targetDocTop !== null) {
      const targetScrollY = Math.max(0, targetDocTop - viewportTop - anchor.offsetFromViewportTop);
      window.scrollTo(0, targetScrollY);
    }
  };

  // 1. Immediate alignment
  alignPosition();

  // 2. Alignment pass after layout reflow and iframe resize
  requestAnimationFrame(() => {
    resizeCardIframes();
    alignPosition();
    requestAnimationFrame(() => {
      alignPosition();
      root.style.scrollBehavior = prevBehavior;
    });
  });

  // 3. Final safety check after short delay
  setTimeout(alignPosition, 60);
}

function applyViewSettings() {
  const grid = document.getElementById("catalog-grid");
  if (grid) {
    grid.classList.toggle("view-split", currentLayoutMode === "split");
    grid.classList.toggle("view-editorial", currentLayoutMode === "split");
    grid.classList.toggle("is-compact", isCompactMode);
    grid.classList.toggle("view-compact", isCompactMode);
  }

  // Update layout mode buttons in catalog controls (Grid / Split)
  document.querySelectorAll(".view-options .view-btn").forEach(btn => {
    const view = btn.getAttribute("data-view");
    const isActive = (view === currentLayoutMode) || (currentLayoutMode === "split" && view === "editorial");
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Update header compact toggle button
  const compactBtn = document.getElementById("header-compact-toggle");
  if (compactBtn) {
    compactBtn.classList.toggle("active", isCompactMode);
    compactBtn.setAttribute("aria-pressed", isCompactMode ? "true" : "false");
  }

  requestAnimationFrame(resizeCardIframes);
  setTimeout(resizeCardIframes, 100);
}

function setViewMode(mode) {
  const anchor = getFocalCardAnchor();
  currentLayoutMode = (mode === "split" || mode === "editorial") ? "split" : "grid";
  applyViewSettings();
  if (anchor) {
    restoreFocalAnchor(anchor);
  }
}

function toggleCompactMode() {
  const anchor = getFocalCardAnchor();
  isCompactMode = !isCompactMode;
  applyViewSettings();
  if (anchor) {
    restoreFocalAnchor(anchor);
  }
  showToast(
    isCompactMode ? "Compact Mode: ON (16:9 Previews Only)" : "Compact Mode: OFF (Full Specifications)",
    isCompactMode ? "⊞" : "⊟"
  );
}

function resetFilters() {
  currentCategory = "all";
  currentSearchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  setCategory("all");
}

function focusSearch(event) {
  if (event) event.preventDefault();
  const controlsPanel = document.getElementById("catalog-controls");
  const searchInput = document.getElementById("search-input");
  
  if (controlsPanel) {
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 78;
    const rect = controlsPanel.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = Math.max(0, rect.top + scrollTop - headerHeight - 16);

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  }

  setTimeout(() => {
    if (searchInput) {
      try {
        searchInput.focus({ preventScroll: true });
      } catch (err) {
        searchInput.focus();
      }
      searchInput.select();
    }
  }, 200);
}

// -----------------------------------------------------------------------------
// PROMPT & SPEC ACTIONS
// -----------------------------------------------------------------------------
function copyTilePrompt(tileId) {
  const tile = STYLE_TILES_DATA.find(t => t.id === tileId);
  if (!tile) return;

  const fullPrompt = `Implement/redesign this webpage using the following Style Tile design system however applicable:\n\n${tile.markdownSpec}`;

  navigator.clipboard.writeText(fullPrompt).then(() => {
    showToast(`Copied ${tile.name} Style Tile to clipboard!`);
  }).catch(err => {
    console.error("Clipboard error", err);
  });
}

function copyMasterPrompt() {
  const promptEl = document.getElementById("master-prompt-code");
  if (!promptEl) return;

  navigator.clipboard.writeText(promptEl.textContent.trim()).then(() => {
    showToast("Master AI Prompt template copied!");
  });
}

function copySwatchHex(hex, name) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Copied ${name} (${hex}) to clipboard!`);
  });
}

// -----------------------------------------------------------------------------
// MODAL SPEC INSPECTOR
// -----------------------------------------------------------------------------
let activeModalTile = null;

function openSpecModal(tileId) {
  const tile = STYLE_TILES_DATA.find(t => t.id === tileId);
  if (!tile) return;

  activeModalTile = tile;
  document.getElementById("modal-tile-code").textContent = tile.id;
  document.getElementById("modal-tile-title").textContent = tile.name;
  document.getElementById("modal-markdown-content").textContent = tile.markdownSpec;

  const backdrop = document.getElementById("spec-modal-backdrop");
  if (backdrop) backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSpecModal() {
  const backdrop = document.getElementById("spec-modal-backdrop");
  if (backdrop) backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function copyModalSpec() {
  if (!activeModalTile) return;
  navigator.clipboard.writeText(activeModalTile.markdownSpec).then(() => {
    showToast(`Copied ${activeModalTile.name} specification!`);
  });
}

function downloadModalSpec() {
  if (!activeModalTile) return;
  const blob = new Blob([activeModalTile.markdownSpec], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `style-tile-${activeModalTile.slug}.md`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(`Downloaded style-tile-${activeModalTile.slug}.md!`);
}

// -----------------------------------------------------------------------------
// REAL-TIME DRAFTING CLOCK
// -----------------------------------------------------------------------------
function updateDraftingClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;
  const now = new Date();
  const utcStr = now.toISOString().replace("T", " ").substring(0, 19) + " UTC";
  clockEl.textContent = utcStr;
}

function updateFilterChipCounts() {
  document.querySelectorAll(".filter-chip").forEach(chip => {
    const cat = chip.getAttribute("data-cat");
    const countEl = chip.querySelector(".chip-count");
    if (!countEl) return;
    if (cat === "all") {
      countEl.textContent = STYLE_TILES_DATA.length;
    } else {
      const count = STYLE_TILES_DATA.filter(t => t.categories && t.categories.includes(cat)).length;
      countEl.textContent = count;
    }
  });
}

// -----------------------------------------------------------------------------
// INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  applyViewSettings();
  renderCatalog();
  updateFilterChipCounts();
  updateDraftingClock();
  setInterval(updateDraftingClock, 1000);

  // Search input listener + viewport-aware placeholder
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);

    const syncSearchPlaceholder = () => {
      const mobile = searchInput.getAttribute("data-placeholder-mobile");
      const desktop = searchInput.getAttribute("data-placeholder-desktop");
      if (!mobile || !desktop) return;
      searchInput.placeholder = window.matchMedia("(max-width: 768px)").matches ? mobile : desktop;
    };
    syncSearchPlaceholder();
    window.addEventListener("resize", syncSearchPlaceholder);
  }

  // Keyboard shortcut: Escape closes modal, / focuses search
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSpecModal();
    } else if (e.key === "/" && document.activeElement !== searchInput) {
      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) return;
      e.preventDefault();
      focusSearch();
    }
  });

  // Window resize & ResizeObserver for dynamic 16:9 iframe scaling
  window.addEventListener("resize", () => {
    requestAnimationFrame(resizeCardIframes);
  });

  if (window.ResizeObserver) {
    const grid = document.getElementById("catalog-grid");
    if (grid) {
      new ResizeObserver(() => {
        requestAnimationFrame(resizeCardIframes);
      }).observe(grid);
    }
  }

  // Modal backdrop click to close
  const backdrop = document.getElementById("spec-modal-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeSpecModal();
    });
  }
});
