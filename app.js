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
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
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
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
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
    categories: ["minimalist"],
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
    id: "TILE-004",
    slug: "greenwrap",
    name: "Greenwrap Design System",
    vibe: "Modern Eco-Brutalist • Neo-Editorial • Organic Dark Mode",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
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
    categories: ["playful"],
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
    id: "TILE-006",
    slug: "healthy-pets",
    name: "Healthy Pets, Happy Hearts",
    vibe: "Playful Neo-Retro • Organic Warmth • High-Contrast Editorial",
    vibeBadge: "Playful & Pop",
    categories: ["playful"],
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
  Code: TILE-006
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
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
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
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
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
    id: "TILE-009",
    slug: "warm-wabisabi",
    name: "Warm Wabi-Sabi Ledger",
    vibe: "Organic Minimalism • Tactile Craft • Serene Editorial",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
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
  STYLE TILE: WARM WABI-SABI LEDGER (TILE-009)
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
    id: "TILE-010",
    slug: "blueprint-hud",
    name: "Industrial Blueprint HUD",
    vibe: "Architectural Cyanotype • CAD Precision • Aerospace Telemetry",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
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
  },
  {
    id: "TILE-011",
    slug: "fluid-bento-saas",
    name: "Fluid Bento // Soft SaaS",
    vibe: "Soft SaaS • Fluid Bento Architecture • Berry Accent",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Surface-0", hex: "#ECEFF2" },
      { name: "Surface-1", hex: "#FFFFFF" },
      { name: "Surface-2", hex: "#F6F8FA" },
      { name: "Surface-Dark", hex: "#111315" },
      { name: "Berry Pink", hex: "#DE2454" },
      { name: "Metric Alert", hex: "#E42A58" },
      { name: "Chart Accent", hex: "#E83D6D" }
    ],
    description: "High-precision soft SaaS interface with warm slate canvas, pure white bento surfaces, 24px outer radii, 9999px pills, tabular figures, and tactical berry pink momentum accents.",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE: "FLUID BENTO / SOFT SAAS"
================================================================================

1. COLOR ROLES & PALETTE
--------------------------------------------------------------------------------
• Canvas / Neutral Backgrounds:
  - Surface-0 (App Background)  : #ECEFF2  /* Soft warm slate canvas */
  - Surface-1 (Card / Bento Tile): #FFFFFF  /* Pure white base cards */
  - Surface-2 (Nested Container): #F6F8FA  /* Sub-card & input fill */
  - Surface-Dark (Card Accent)  : #111315  /* High-contrast feature card */

• Brand & Semantic Accents:
  - Primary Accent (Berry Pink) : #DE2454  /* Active nav, pills, high-priority CTA */
  - Primary Accent Soft         : #FCE8EE  /* Light berry badge background */
  - Metric Alert / Secondary    : #E42A58  /* Delta / negative / spotlight tags */
  - Chart Accent Line           : #E83D6D  /* Dynamic trendline stroke */

• Typography Colors:
  - Text-Primary (Headers/Data) : #111315  /* Near black, high contrast */
  - Text-Secondary (Subheaders) : #6B7280  /* Neutral slate */
  - Text-Muted (Decimals/Units) : #9CA3AF  /* Light gray auxiliary text */
  - Text-On-Dark (Inverted)     : #FFFFFF  /* Pure white */
  - Text-Accent (Active Item)   : #DE2454  /* Highlighted link / active menu */

• Data / Integration Palette:
  - Dribbble : #EA4C89 | Behance : #0057FF | Google : #4285F4 | IG : #E1306C


2. TYPOGRAPHY SYSTEM
--------------------------------------------------------------------------------
• Primary Font Family: "Plus Jakarta Sans", "Inter", or "SF Pro Display", sans-serif
• Tabular Data: Lining Figures enabled (\`font-variant-numeric: tabular-nums\`)

• Type Hierarchy:
  - Display Title  : 28px / Line Height: 34px | SemiBold (600) | Tracking: -0.02em
  - Metric Large   : 24px / Line Height: 30px | Bold (700)     | Tracking: -0.03em
    ↳ Sub-decimals : 18px / Line Height: 30px | SemiBold (600) | Color: Text-Muted
  - Section Header : 16px / Line Height: 22px | SemiBold (600) | Tracking: -0.01em
  - Body Regular   : 13px / Line Height: 18px | Medium (500)   | Tracking: 0em
  - Label / Badge  : 11px / Line Height: 14px | SemiBold (600) | Tracking: +0.01em
  - Micro / Meta   : 10px / Line Height: 12px | Regular (400)  | Tracking: +0.02em


3. CORNER GEOMETRY (BORDER RADII)
--------------------------------------------------------------------------------
• Radius-Pill (Full) : 9999px  /* Search bar, segmented pills, badge chips, avatars */
• Radius-Outer (XL)  : 24px    /* Primary Bento grid card containers */
• Radius-Medium (MD) : 16px    /* Nested metric tiles, drop-downs, secondary cards */
• Radius-Inner (SM)  : 10px    /* Interactive buttons, filter pills, small badges */


4. ELEVATION & DEPTH (SHADOWS & LAYERING)
--------------------------------------------------------------------------------
• Elevation-0 (Flat Base):
  - Canvas background separation via background color contrast (#ECEFF2 vs #FFFFFF).

• Elevation-1 (Bento Tile):
  - \`box-shadow: 0 4px 20px -2px rgba(17, 19, 21, 0.04), 0 2px 6px -1px rgba(17, 19, 21, 0.02);\`

• Elevation-2 (Floating Chips & Popovers):
  - \`box-shadow: 0 10px 30px -4px rgba(17, 19, 21, 0.08), 0 4px 12px -2px rgba(17, 19, 21, 0.03);\`

• Depth Structure:
  - Outer Canvas (Layer 0) ➔ Bento Surface (Layer 1) ➔ Inset Wells / Nested Pods (Layer 0.5 Inset)


5. SPACING & SPATIAL SCALE
--------------------------------------------------------------------------------
• Base Grid: 4px / 8px spatial step

• Spacing Scale:
  - Gap-XS (Micro/Tags)     : 4px - 6px
  - Gap-SM (Pill padding)   : 8px - 10px
  - Gap-MD (Card gutter)    : 12px - 16px
  - Gap-LG (Bento layout)   : 20px - 24px
  - Card Internal Padding   : 20px (Comfortable), 16px (Compact nested)


6. BORDERS & DIVIDERS
--------------------------------------------------------------------------------
• Micro Borders:
  - Standard Surface Stroke : \`1px solid rgba(17, 19, 21, 0.04)\`
  - Active / Focus Stroke   : \`1.5px solid #111315\`
  - Input / Chip Stroke     : \`1px solid #E5E7EB\`

• Tree-View & Hierarchy Connectors:
  - Sidebar Tree Lines      : \`1px solid #D1D5DB\` (90° elbow turns at sub-levels)


7. ICONOGRAPHY LANGUAGE
--------------------------------------------------------------------------------
• Visual Grammar: Minimalist, geometric, rounded line style (Lucide / Phosphor Icons).
• Stroke Width  : 1.75px fixed; Rounded caps & joins (\`stroke-linecap="round"\`).
• Icon Sizing   : 14px (Micro inline), 18px (Standard action), 22px (Nav Rail).
• Icon Treatment:
  - Monochromatic slate icons for neutral actions (\`#6B7280\`).
  - Circular badge-contained icons for integration hubs (\`#FFFFFF\` background).
  - Native emoji integration within filter chips (e.g., "Top sales 💡", "Streak ⚡").


8. INTERACTION & FEEDBACK RULES
--------------------------------------------------------------------------------
• States:
  - Default Nav/Pill : Background transparent or \`#F3F4F6\`, Text \`#6B7280\`.
  - Active Nav Item  : Berry pink text (\`#DE2454\`) + subtle pink node marker.
  - Active Segment   : Solid \`#111315\` pill fill, \`#FFFFFF\` text, instant visual anchor.
  - Interactive Hover: \`transform: translateY(-1px)\`, background \`rgba(0, 0, 0, 0.03)\`.

• Motion & Transitions:
  - Curve            : \`cubic-bezier(0.16, 1, 0.3, 1)\` (Fluid spring / ease-out).
  - Duration         : Fast micro-interactions at \`150ms - 200ms\`.
================================================================================`
  },
  {
    id: "TILE-012",
    slug: "transform9-healthtech",
    name: "Transform9+ // Neo-Brutalist HealthTech",
    vibe: "High-Contrast Dark Mode • Precision HealthTech • Electric Lime & Cobalt",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Dark", hex: "#090A0C" },
      { name: "Canvas Light", hex: "#FFFFFF" },
      { name: "Surface Dark", hex: "#12141A" },
      { name: "Electric Lime", hex: "#A8F33A" },
      { name: "Cobalt Primary", hex: "#1A52EE" },
      { name: "Sequential Blue", hex: "#06164A" }
    ],
    description: "High-contrast precision dark mode with deep onyx canvas, stark white spotlight cards, electric lime actuators, sequential blue telemetry stack, and 0px brutalist sharp geometry.",
    markdownSpec: `# ==============================================================================
# STYLE TILE: TRANSFORM9+ DESIGN SYSTEM
# Archetype: Neo-Brutalist HealthTech / High-Contrast Precision Dark Mode
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. COLOR ROLES & PALETTE
# ------------------------------------------------------------------------------
color_palette:
  canvas_and_surfaces:
    canvas_dark_base:       "#090A0C"   # Deep onyx background for high-contrast presentation
    canvas_light_base:      "#FFFFFF"   # Stark pure white for modular spotlight cards
    surface_dark_elevated:  "#12141A"   # Secondary panel dark surface
    surface_dark_subtle:    "#181B22"   # Inset cards and hover states
    surface_inverse:        "#FFFFFF"   # Selected item fill / high-contrast card background

  accents_and_brand:
    electric_lime:          "#A8F33A"   # High-energy conversion/action color (CTAs, highlight spans)
    electric_lime_hover:    "#B9FA55"   # Brighter active state
    cobalt_primary:         "#1A52EE"   # Core brand & trust accent (hero spans, active badges)
    cobalt_vivid:           "#0D3ED4"   # Secondary interactive blue

  sequential_blues_data_scale:
    # Used for vertical accordion/stack hierarchy
    level_01:               "#1A52EE"   # Top/Active layer (100% saturation)
    level_02:               "#123EBE"   # 80% intensity
    level_03:               "#0C2E94"   # 60% intensity
    level_04:               "#09216B"   # 40% intensity
    level_05:               "#06164A"   # 20% deepest navy base

  typography_and_ink:
    text_primary_dark:      "#FFFFFF"   # 100% white on dark surfaces
    text_secondary_dark:    "#8E95A5"   # Muted descriptions & metadata
    text_tertiary_dark:     "#4E5463"   # Subdued indices and disabled labels
    text_primary_light:     "#090A0C"   # Heavy black on white cards
    text_secondary_light:   "#5A6170"   # Gray subtext on white cards

  atmospheric_gradients:
    ambient_glow_blue:      "radial-gradient(circle, rgba(26,82,238,0.28) 0%, rgba(9,10,12,0) 70%)"
    pixel_mosaic_overlay:   "linear-gradient(135deg, #A8F33A 0%, #1A52EE 50%, #06164A 100%)"

# ------------------------------------------------------------------------------
# 2. TYPOGRAPHY SYSTEM
# ------------------------------------------------------------------------------
typography:
  font_families:
    primary_sans:           "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
    technical_mono:         "'JetBrains Mono', 'Space Mono', monospace"

  hierarchy:
    display_xl:
      font_size:            "48px"
      line_height:          "1.05"
      font_weight:          "800"
      letter_spacing:       "-0.035em"
      use_case:             "Primary landing titles (e.g., 'Skip the Hold Music.')"

    heading_lg:
      font_size:            "32px"
      line_height:          "1.15"
      font_weight:          "700"
      letter_spacing:       "-0.025em"
      use_case:             "Section headlines & modular card titles"

    heading_md:
      font_size:            "24px"
      line_height:          "1.25"
      font_weight:          "700"
      letter_spacing:       "-0.015em"
      use_case:             "Feature block titles (e.g., 'Outreach Agent')"

    metric_value:
      font_size:            "40px"
      line_height:          "1.0"
      font_weight:          "800"
      letter_spacing:       "-0.03em"
      use_case:             "Stat numbers (e.g., '2,000+ providers')"

    body_base:
      font_size:            "15px"
      line_height:          "1.50"
      font_weight:          "400"
      letter_spacing:       "-0.005em"
      use_case:             "Main descriptive copy and body text"

    interactive_label:
      font_size:            "14px"
      line_height:          "1.20"
      font_weight:          "600"
      letter_spacing:       "0.00em"
      use_case:             "Menu lists, tab triggers, specialty options"

    technical_index:
      font_family:          "technical_mono"
      font_size:            "12px"
      line_height:          "1.0"
      font_weight:          "500"
      letter_spacing:       "0.05em"
      use_case:             "Numerical tags (e.g., '#4', '01', '02', '03')"

# ------------------------------------------------------------------------------
# 3. CORNER GEOMETRY (BORDER RADII)
# ------------------------------------------------------------------------------
border_radius:
  sharp_block:              "0px"     # High-impact brutalist buttons, stacked full-width rows
  subtle_card:              "4px"     # Floating light cards, modal cards, nested containers
  interactive_control:      "2px"     # Text input fields, toggle indicators
  pill_badge:               "9999px"  # Specialty status pills, category chips

# ------------------------------------------------------------------------------
# 4. ELEVATION & DEPTH (SHADOWS & ATMOSPHERE)
# ------------------------------------------------------------------------------
elevation:
  flat_contrast:
    box_shadow:             "none"
    border_treatment:       "Strict high-contrast color bounding"

  ambient_back_glow:
    box_shadow:             "0 0 80px -20px rgba(26, 82, 238, 0.45)"
    use_case:               "Behind security shield & hero tech visuals"

  elevated_card_floating:
    box_shadow:             "0 20px 40px -10px rgba(0, 0, 0, 0.5)"
    backdrop_filter:        "blur(12px)"

  glass_header:
    background:             "rgba(9, 10, 12, 0.85)"
    backdrop_filter:        "blur(16px)"
    border_bottom:          "1px solid rgba(255, 255, 255, 0.08)"

# ------------------------------------------------------------------------------
# 5. SPACING & SPATIAL SCALE (8pt Baseline Grid)
# ------------------------------------------------------------------------------
spacing_system:
  base_unit:                "4px"
  space_1:                  "4px"     # Micro badge gaps, tight icon offsets
  space_2:                  "8px"     # Element inner padding, inline tags
  space_3:                  "12px"    # Compact list padding
  space_4:                  "16px"    # Standard container padding, form field inset
  space_6:                  "24px"    # Card interior gutters, stack row separation
  space_8:                  "32px"    # Section separation
  space_12:                 "48px"    # Hero block vertical gutters
  space_16:                 "64px"    # Major module break

# ------------------------------------------------------------------------------
# 6. BORDERS & DIVIDERS
# ------------------------------------------------------------------------------
borders:
  divider_hairline:         "1px solid rgba(255, 255, 255, 0.12)" # List row separators
  divider_hairline_light:   "1px solid rgba(0, 0, 0, 0.08)"       # White card sub-dividers
  card_outline:             "1px solid rgba(255, 255, 255, 0.18)" # Standalone dark module borders
  active_input_outline:     "1.5px solid #FFFFFF"                  # Phone/text field focus state

# ------------------------------------------------------------------------------
# 7. ICONOGRAPHY & GRAPHIC MOTIFS
# ------------------------------------------------------------------------------
iconography:
  style:                    "Geometric Line + Modular Pixel Matrix"
  stroke_width:             "1.75px"
  corner_cap:               "Square / Flat"
  key_motifs:
    - pixel_grid:           "4x4 and 8x8 pixel cluster mosaics (accenting cards & icons)"
    - tech_shield:          "Geometric badge with digital pixel checkmark core"
    - minimalist_nav:       "2-line hamburger bar (24px width, 1.5px stroke)"
    - calendar_pixel:       "Grid-accented digital scheduler badge"
interaction_states:
  buttons:
    primary_cta (Lime):
      default:              "bg: #A8F33A | text: #090A0C | border: none | radius: 0px"
      hover:                "bg: #B9FA55 | transform: translateY(-1px)"
      active:               "bg: #98E02E | transform: translateY(0)"

    inline_link_cta:
      default:              "text: #1A52EE | text-decoration: underline (1.5px offset)"
      hover:                "text: #FFFFFF | text-decoration: underline"

  specialty_list_rows:
    default:
      bg:                   "transparent"
      text:                 "#FFFFFF"
      border_bottom:        "1px solid rgba(255, 255, 255, 0.12)"
    active_selected:
      bg:                   "#FFFFFF"
      text:                 "#090A0C"
      font_weight:          "700"
      border_radius:        "0px"
      transition:           "all 180ms ease-out"

  accordion_stack_panels:
    default_state:          "Progressive step background colors (#1A52EE -> #06164A)"
    hover_state:            "brightness(1.15) | padding-left: +4px transition"
    timing_function:        "cubic-bezier(0.16, 1, 0.3, 1)"`
  },
  {
    id: "TILE-013",
    slug: "neo-brutalist-tech",
    name: "Neo-Brutalist Tech // Developer Tooling & Web3 Infrastructure",
    vibe: "Developer Tooling • Web3 Infrastructure • High-Voltage Accents",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Space Grotesk",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Ground", hex: "#FAFAFA" },
      { name: "Surface Card", hex: "#F4F4F5" },
      { name: "Surface Inset", hex: "#E4E4E7" },
      { name: "Core Ink", hex: "#09090B" },
      { name: "Hyper-Volt Lime", hex: "#CCFF00" },
      { name: "Ultramarine Blue", hex: "#1D4ED8" }
    ],
    description: "High-density monochrome canvas with hyper-volt lime actuators, ultramarine blue cryptographic links, rigid 0px brutalist geometry, and tactile 3px hardball ink offset shadows.",
    markdownSpec: `================================================================================
  Aesthetic: Neo-Brutalist Tech • Developer Tooling • Web3 Infrastructure
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Neo-Brutalist Tech is a high-density, hyper-tactile design system engineered for developer platforms, Web3 infrastructure, and modern fintech architecture. It fuses architectural monochrome surfaces (Starch White #FAFAFA, Clean Slate #F4F4F5, Concrete 200 #E4E4E7) with high-voltage kinetic accents (Hyper-Volt Lime #CCFF00, Ultramarine Blue #1D4ED8) and rigid 0px brutalist geometry. Hardball zero-blur ink drop shadows create physical mechanical elevation, while monoline technical glyphs and strict typographical hierarchy provide unmatched clarity for complex telemetry and cryptographic workflows.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & TOKEN PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surface & Canvas Tokens */
  --bg-canvas:              #FAFAFA; /* Starch White - Global viewport root & base canvas */
  --bg-card:                #F4F4F5; /* Clean Slate - Modular panels, tables, card bodies */
  --bg-inset:               #E4E4E7; /* Concrete 200 - Code wells, search bars, nested trays */
  --bg-dark:                #09090B; /* Carbon Heavy - Inverted terminal and command surfaces */

  /* Inks & Monochromes */
  --ink-primary:            #09090B; /* Carbon Heavy - 100% text, 2px structural borders, shadows */
  --ink-muted:              #52525B; /* Zinc 600 - Secondary labels, timestamps, metadata */
  --ink-inverse:            #FAFAFA; /* Starch White - High-contrast text on dark badges/buttons */

  /* Kinetic Accents */
  --accent-volt:            #CCFF00; /* Hyper-Volt Lime - Primary CTA, active build, main trigger */
  --accent-volt-hover:      #B8E600; /* Deep Lime - Focus-visible states, subtle hover wash */
  --accent-ultramarine:     #1D4ED8; /* Ultramarine Blue - RPC nodes, cryptographic data, links */

  /* Semantic Signal Matrix */
  --signal-ok:              #CCFF00; /* Hyper-Volt Lime - Mainnet Live, Validated Block, Tests 100% */
  --signal-warn:            #FACC15; /* Hazard Ochre - Gas Spike, Rate-Limit Warning, Mempool Lag */
  --signal-crit:            #FF334B; /* Radical Vermilion - Reverted Tx, Compile Failure, Auth Error */
  --signal-exec:            #1D4ED8; /* Ultramarine Blue - Mining, Query Executing, Syncing Shard */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
--font-body:    "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono:    "JetBrains Mono", SFMono-Regular, Menlo, monospace;

/* Type Scale Hierarchy */
--text-display: 32px     / 1.15  var(--font-display); /* Weight: 700 | Tracking: -0.04em | Hero metrics, product heads */
--text-h1:      32px     / 1.15  var(--font-display); /* Weight: 700 | Tracking: -0.04em | Hero metrics, main titles */
--text-h2:      22px     / 1.25  var(--font-display); /* Weight: 700 | Tracking: -0.03em | Card headers, modal titles */
--text-h3:      16px     / 1.35  var(--font-display); /* Weight: 700 | Tracking: -0.02em | Sub-panels, drawer titles */
--text-body-lg: 15px     / 1.50  var(--font-body);    /* Weight: 500 | Tracking: -0.01em | Primary narrative & prompts */
--text-body:    14px     / 1.50  var(--font-body);    /* Weight: 500 | Tracking:  0.00em | Form inputs, table cells */
--text-code:    12px     / 1.60  var(--font-mono);    /* Weight: 400 | Tracking: +0.04em | Logs, payloads, byte code */
--text-meta:    11px     / 1.20  var(--font-mono);    /* Weight: 600 | Tracking: +0.08em | UPPERCASE status chips, KPIs */

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-sharp:   0px;    /* Universal default for tables, structural frames, code blocks, cards */
--radius-subtle:  2px;    /* Permitted exclusively on interactive elements (buttons, inputs, status tags) */
--radius-pill:    0px;    /* STRICTLY PROHIBITED (No pill badges, no rounded modals) */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION, HARDBALL SHADOWS & PROJECTION LAYERS
 * -------------------------------------------------------------------------- */
/* Principle: Pure offset, 0% blur, 100% opacity ink shadows */
--shadow-none:        none;
--shadow-interactive: 3px 3px 0px #09090B; /* Standard buttons, actionable cards, input fields */
--shadow-card:        5px 5px 0px #09090B; /* KPI stat cards, hovering inspector panels */
--shadow-modal:       8px 8px 0px #09090B; /* Dialogue modals, command palettes (Cmd+K) */
--shadow-accent-blue: 3px 3px 0px #1D4ED8; /* Ultramarine blue focus/active secondary elements */

/* -----------------------------------------------------------------------------
 * 6. SPACING SCALE (4PX / 8PX RIGID BASE)
 * -------------------------------------------------------------------------- */
--space-1:  4px;  /* Micro-offsets, tight tag paddings, icon-text gap */
--space-2:  8px;  /* Badge paddings, input internal Y-padding, sub-grid gaps */
--space-3: 12px;  /* Compact button Y-padding, table cell padding */
--space-4: 16px;  /* Button X-padding, standard panel padding, container gap */
--space-6: 24px;  /* Card internal padding, desktop dashboard grid gap */
--space-8: 32px;  /* Section vertical rhythm, header margins */
--space-12:48px;  /* Page container separation */

/* -----------------------------------------------------------------------------
 * 7. BORDERS, DIVIDERS & TECHNICAL GRIDLINES
 * -------------------------------------------------------------------------- */
--border-core:          2px solid #09090B; /* Primary structural boundary for buttons, cards, modals */
--border-hairline:      1px solid #09090B; /* Internal table cell dividers, secondary nested grids */
--border-blueprint-sub: 1px dashed #D4D4D8; /* Background monoline coordinate grids */
--decorative-crosshair: "+" markers positioned at intersecting card corners [ top-left / bottom-right ]
--grid-background:      High-contrast monochrome background grid (16px x 16px dots or 32px square vector grid)

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE & TECHNICAL GLYPHS
 * -------------------------------------------------------------------------- */
--icon-stroke-width: 2.0px;
--icon-line-cap:     square;
--icon-line-join:    miter;

/* Direct ASCII/Unicode technical glyphs for UI metadata:
   [+] NEW NODE    [>] EXEC    [#] HASH    [*] SYNC    [!] WARN    [//] COMMENT    [x] TERMINATE */

/* -----------------------------------------------------------------------------
 * 9. COMPONENT ARCHETYPES & INTERACTION PHYSICS
 * -------------------------------------------------------------------------- */
- **Tactile Click-Down Physics**: Buttons and actionable cards exist on a physical 45° plane.
  - Resting: translate(0px, 0px) with 3px 3px 0px #09090B shadow
  - Hover: translate(-1px, -1px) with 4px 4px 0px #09090B shadow + subtle luminance boost
  - Active (Pressed): translate(3px, 3px) with 0px 0px 0px #09090B (None)
  - Focus-Visible: outline: 2px solid #1D4ED8
  - Transition: 80ms cubic-bezier(0, 0, 0.2, 1)
- **Primary Volt Button**: bg: #CCFF00 | color: #09090B | border: 2px solid #09090B | font: Space Grotesk 700 14px | shadow: 3px 3px 0px #09090B
- **Ghost-Invert Button**: bg: #FAFAFA | color: #09090B | border: 2px solid #09090B | font: JetBrains Mono 600 12px | shadow: 3px 3px 0px #09090B
- **KPI Telemetry Cards**: bg: #F4F4F5 | border: 2px solid #09090B | shadow: 5px 5px 0px #09090B | Header: Space Grotesk 700 | Stat: Space Grotesk 700 28px | Meta: JetBrains Mono 11px
- **Terminal Prompt**: bg: #09090B | color: #CCFF00 | border: 2px solid #09090B | font: JetBrains Mono 12px | Header: [CLI // zsh] ... [SH]

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- STRICTLY PROHIBITED: Soft, diffuse, or blurred drop shadows (only 0% blur, 100% opacity hardball ink shadows).
- STRICTLY PROHIBITED: Pill radii or rounded modals/cards (>2px radius is prohibited; default is 0px).
- STRICTLY PROHIBITED: Pastel or low-contrast borders (all primary borders are 2px solid #09090B).
- STRICTLY PROHIBITED: Gradient text fills or purple/violet dark-mode tropes.
- STRICTLY PROHIBITED: Textureless surfaces or generic dashboard placeholder fluff.`
  },
  {
    id: "TILE-014",
    slug: "editorial-letterpress",
    name: "The Editorial Letterpress // Neo-Brutalist Craft Print",
    vibe: "Letterpress Craft • Historical Serif • High-Tactility Mechanical Depress",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Fraunces",
      sans: "Plus Jakarta Sans",
      mono: "IBM Plex Mono"
    },
    palette: [
      { name: "Paper Base", hex: "#F0E2C4" },
      { name: "Cream Surface", hex: "#FBF4E3" },
      { name: "Prime Ink", hex: "#1A140E" },
      { name: "Oxblood Prime", hex: "#8E2A1B" },
      { name: "Mustard Gold", hex: "#C9A227" },
      { name: "Forest Press", hex: "#1F3D32" }
    ],
    description: "High-tactility print-shop aesthetic blending historical editorial typography (Fraunces & IBM Plex Mono) with neo-brutalist structure, fibrous paper washes, and mechanical depress states.",
    markdownSpec: `================================================================================
  Aesthetic: The Editorial Letterpress • Neo-Brutalist Craft Print • Archival Inks
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
The Editorial Letterpress is a high-tactility, print-shop aesthetic blending historical editorial typography (Fraunces & IBM Plex Mono) with bold neo-brutalist structure. High-contrast inked linework (#1A140E), warm fibrous paper textures (#F0E2C4, #FBF4E3), tactile mechanical depress states, and offset flat-drop shadow geometry create a physical, artisanal artifact feel for editorial platforms, publishing tools, design archives, and craft computing tools.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Paper Base */
  --paper-base:             #F0E2C4; /* Primary body canvas background */
  --paper-deep:             #E3CF9F; /* Hover states, secondary backdrop fills */
  --cream-surface:          #FBF4E3; /* Elevated card, modal, and panel canvas */
  --warm-field:             #F8EFD8; /* Inset inputs, code containers, text areas */
  --ink-plate:              #1A140E; /* Inverted contrast containers */

  /* Ink & Contrast */
  --ink-prime:              #1A140E; /* High-contrast structural borders, deep headings, shadows */
  --ink-soft:               #3D3428; /* Primary reading body text, secondary headings */
  --lead-muted:             #6B5D4A; /* Captions, folios, counters, placeholder hints */
  --ink-inverted:           #FBF4E3; /* Contrast text on prime ink containers */

  /* Accents & Functional Semantics */
  --oxblood-prime:          #8E2A1B; /* Primary actions, brand marks, destructive/error highlights */
  --oxblood-deep:           #6C1D12; /* Primary button active/hover state */
  --mustard-gold:           #C9A227; /* Focus rings, status badges, text selection highlight */
  --terracotta:             #C45C26; /* Secondary warm accents, alert notes */
  --forest-press:           #1F3D32; /* Success states, active toggles, completed steps */

  /* Atmospheric Textures */
  --paper-wash: radial-gradient(1200px 700px at 8% -10%, rgba(201,162,39,0.28), transparent 55%), radial-gradient(900px 600px at 110% 8%, rgba(142,42,27,0.16), transparent 50%), linear-gradient(180deg, #F6EAD0 0%, #F0E2C4 38%, #E8D4A6 100%);
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display: "Fraunces", "Iowan Old Style", "Palatino Linotype", Georgia, serif;
--font-sans:    "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono:    "IBM Plex Mono", "Consolas", monospace;

/* Type Scale */
--text-display: clamp(48px, 6vw, 86px) / 1.10 var(--font-display); /* Weight: 800 | Tracking: -0.03em */
--text-h1:      clamp(34px, 4vw, 48px) / 1.12 var(--font-display); /* Weight: 800 | Tracking: -0.03em */
--text-h2:      clamp(26px, 3vw, 34px) / 1.15 var(--font-display); /* Weight: 700 | Tracking: -0.02em */
--text-h3:      20px                   / 1.25 var(--font-display); /* Weight: 700 | Tracking: -0.01em */
--text-lede:    17px – 18px            / 1.55 var(--font-sans);    /* Weight: 400 | Tracking: normal */
--text-body:    15px – 17px            / 1.55 var(--font-sans);    /* Weight: 400 | Tracking: normal */
--text-body-em: 15px – 17px            / 1.55 var(--font-sans);    /* Weight: 600 | Tracking: normal */
--text-cta:     12px – 13px            / 1.00 var(--font-sans);    /* Weight: 700 | Tracking: +0.05em | UPPERCASE */
--text-folio:   11px – 13px            / 1.00 var(--font-mono);    /* Weight: 600 | Tracking: +0.15em | UPPERCASE */
--text-code:    13px – 14px            / 1.50 var(--font-mono);    /* Weight: 400 | Tracking: normal */
--text-stamp:   10px – 11px            / 1.00 var(--font-mono);    /* Weight: 600 | Tracking: +0.12em | UPPERCASE */

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY & ELEVATION
 * -------------------------------------------------------------------------- */
--radius-sharp:       0px;      /* Panels, modals, headers, floating dock */
--radius-default:     2px;      /* Standard cards, inputs, buttons, badge stamps */
--radius-pill:        50%;      /* Radio buttons, round indices, indicator dots */

/* Elevation & Shadows (Hard Flat-Offset Shadows, Pure #1A140E, No Blur) */
--shadow-base:        0px 0px 0 #1A140E;                /* Flat inline fields */
--shadow-sm:          4px 4px 0 #1A140E;                /* Buttons, interactive cards, pills */
--shadow-panel:       6px 6px 0 #1A140E;                /* Content cards, main panels, hero items */
--shadow-modal:       10px 10px 0 #1A140E;              /* Floating dialogs, elevated modals */
--shadow-status:      5px 5px 0 #C9A227;                /* Toast popups (Mustard accent shadow) */
--shadow-error:       6px 6px 0 #8E2A1B;                /* Card error state offset */
--shadow-inset:       inset 4px 4px 0 rgba(26,20,14,0.06); /* Textareas, text inputs */

/* -----------------------------------------------------------------------------
 * 5. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-heavy:       3px solid #1A140E; /* Outer frame boundaries, modal borders, dock rules */
--border-sub:         2px solid #1A140E; /* Inner sub-components, choice tiles, badge chips */
--border-hairline:    1px solid #1A140E; /* Monospace table lines, subtle dividers */
--border-focus:       3px solid #C9A227; /* Mustard focus enclosure with 2px offset */

/* Corner Registration Marks */
12px × 12px exposed registration bracket overlays on structural card perimeters.

/* -----------------------------------------------------------------------------
 * 6. COMPONENT ARCHETYPES & INTERACTION RULES
 * -------------------------------------------------------------------------- */
- **Buttons (Tactile Mechanical Depress)**:
  Idle: transform: translate(0, 0); box-shadow: 4px 4px 0 #1A140E;
  Hover: background: #E3CF9F; (or #6C1D12 for oxblood);
  Active: transform: translate(4px, 4px); box-shadow: 0px 0px 0 transparent;
  Focus: outline: 3px solid #C9A227; outline-offset: 2px;
- **Choice Cards & Radios**:
  Default: Background #F8EFD8, border 2px solid #1A140E.
  Checked: Inverted high-contrast canvas (Background #1A140E, Text #FBF4E3).
- **Floating Labels & Inputs**:
  Idle: Label sits inside field at font-size 15px, color #6B5D4A.
  Filled/Focused: Label elevates to top: 4px; font-size: 11px; uppercase monospace, color #8E2A1B.
- **Error & Validation States**:
  Card Error: Border & shadow flip to Oxblood (#8E2A1B) with 6px 6px 0 #8E2A1B offset.
  Error Text: IBM Plex Mono, bold, 14px, #8E2A1B with [!] ERROR: kicker prefix.
- **System Motion (Print-Press Strip Loader)**:
  Rolling press sweep animation across progress bars; snappy mechanical cuts on user trigger.

/* -----------------------------------------------------------------------------
 * 7. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- No soft blurry box shadows or glowing colored neon halos.
- No rounded pill-shaped bento containers (only 0px or 2px micro-radii).
- No gradient text fills on display headlines.
- No cold blue-gray or dark-mode OLED cyber backdrops.
- No unbordered floating cards without tactile ink linework.
================================================================================`
  },
  {
    id: "TILE-015",
    slug: "hyper-vibrant-geometric",
    name: "Modern Hyper-Vibrant Geometric",
    vibe: "Electric Iris • Blueprint Scaffolding • Squircle Flow & Rotational Geometry",
    vibeBadge: "Playful & Pop",
    categories: ["playful"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "THICCCBOI",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Electric Iris Base", hex: "#614DFF" },
      { name: "Deep Focus Hover", hex: "#4E37F0" },
      { name: "High-Press Active", hex: "#3C24DF" },
      { name: "Lavender Tint Subtle", hex: "#EDE9FE" },
      { name: "Pure Canvas White", hex: "#FFFFFF" },
      { name: "Cool Foundation Tint", hex: "#F7F7FD" },
      { name: "High-Contrast Carbon", hex: "#0E0E12" }
    ],
    description: "Electric iris foundations (#614DFF), pure white canvas planes, squircle continuous flow radii (6px to 32px), filleted rotational petal geometry, technical blueprint scaffolding, and snappy elastic physics.",
    markdownSpec: `================================================================================
  Aesthetic: Modern Hyper-Vibrant Geometric • Electric Iris • Curved Squircle Flow
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Modern Hyper-Vibrant Geometric is an electric, high-precision digital design language blending Signature Electric Iris violet foundations (#614DFF), pure white canvas planes (#FFFFFF), and soft lavender tinted surfaces (#EDE9FE). Grounded by technical blueprint scaffolding lines, subtle crosshairs (✕), continuous squircle corner geometry (6px to 32px), rotational petal motifs with filleted vertices, and snappy elastic micro-interactions, this language brings luminous precision, modern pop energy, and kinetic depth to next-generation software products.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Brand */
  --color-primary-base:        #614DFF; /* Signature electric iris / violet-blue */
  --color-primary-hover:       #4E37F0; /* Deepened optical focus state */
  --color-primary-active:      #3C24DF; /* High-press interaction */
  --color-primary-subtle:      #EDE9FE; /* Tinted surface background */
  --color-primary-glow:        rgba(97, 77, 255, 0.28);

  /* Surface & Backgrounds */
  --color-surface-canvas:      #FFFFFF; /* Pure clean white */
  --color-surface-subtle:      #F7F7FD; /* Cool ultra-light foundation tint */
  --color-surface-brand:       #614DFF; /* Full-bleed primary surface */
  --color-surface-overlay:     #0D0B1A; /* Solid backdrop / modal scrim */

  /* Content & Typography */
  --color-text-primary:        #0E0E12; /* High-contrast deep carbon */
  --color-text-secondary:      #6A6C7A; /* Mid-tone neutral for secondary body */
  --color-text-muted:          #9E9EB2; /* Low-contrast captions and meta */
  --color-text-inverse:        #FFFFFF; /* High-contrast against primary/dark */
  --color-text-inverse-subtle: rgba(255, 255, 255, 0.72);

  /* Grid & Construction */
  --color-blueprint-line:      rgba(255, 255, 255, 0.35); /* White grid lines on purple */
  --color-blueprint-light:     rgba(97, 77, 255, 0.15);   /* Purple grid lines on white */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
Primary Typeface:
  --font-family:              "THICCCBOI", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
  --font-render:              antialiased; -webkit-font-smoothing: antialiased;

Hierarchy Scale:
  Display (Hero / Brand):
    size: 64px (4.00rem)  | weight: 900 (Black)     | line-height: 1.05 | tracking: -0.04em
  Heading 1 (Sections):
    size: 40px (2.50rem)  | weight: 800 (ExtraBold) | line-height: 1.15 | tracking: -0.03em
  Heading 2 (Card Titles):
    size: 28px (1.75rem)  | weight: 700 (Bold)      | line-height: 1.20 | tracking: -0.02em
  Heading 3 (Sub-sections):
    size: 20px (1.25rem)  | weight: 600 (SemiBold)  | line-height: 1.30 | tracking: -0.01em
  Body Large (Lead Copy):
    size: 18px (1.125rem) | weight: 400 (Regular)   | line-height: 1.50 | tracking: 0.00em
  Body Medium (Standard):
    size: 15px (0.9375rem)| weight: 400 (Regular)   | line-height: 1.55 | tracking: 0.00em
  Caption / Overline:
    size: 12px (0.75rem)  | weight: 600 (SemiBold)  | line-height: 1.40 | tracking: +0.08em (Uppercase)

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
Rules: "Curved Squircle Continuous Flow"
  --radius-xs:    6px     // Micro badges, tags, inner inputs
  --radius-sm:   10px     // Buttons, utility controls
  --radius-md:   16px     // Nested child elements, internal card sections
  --radius-lg:   24px     // Standard content cards
  --radius-xl:   32px     // Master layout containers & feature canvas blocks
  --radius-pill: 9999px   // Action pills, round avatar nodes, floating indicators

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERING)
 * -------------------------------------------------------------------------- */
Surfaces: Crisp, flat color planes accented with soft, high-diffusion ambient glows.

  --elevation-low (Cards/Tiles):
    box-shadow: 0 4px 12px -2px rgba(14, 14, 18, 0.04),
                0 2px 6px -1px rgba(14, 14, 18, 0.02);

  --elevation-medium (Hovered Cards / Popovers):
    box-shadow: 0 12px 28px -6px rgba(14, 14, 18, 0.08),
                0 4px 12px -2px rgba(14, 14, 18, 0.03);

  --elevation-brand-glow (Primary CTA Hover):
    box-shadow: 0 8px 24px -4px rgba(97, 77, 255, 0.40);

  --elevation-floating-stack (Physical Depth / Mockups):
    box-shadow: -10px 14px 32px -4px rgba(20, 15, 60, 0.18),
                0 2px 4px 0 rgba(0, 0, 0, 0.04);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE
 * -------------------------------------------------------------------------- */
Grid Unit: 4px base / 8px progressive cadence

  --space-2xs:    4px
  --space-xs:     8px
  --space-sm:    12px
  --space-md:    16px     // Compact element gutters
  --space-lg:    24px     // Standard card padding
  --space-xl:    32px     // Outer card margins & section gutters
  --space-2xl:   48px     // Layout gaps
  --space-3xl:   64px     // Major section padding
  --space-4xl:   96px     // Hero spacing

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
Separators & Construction Frames:
  --border-light:          1px solid rgba(14, 14, 18, 0.06)  // Muted light borders
  --border-brand-tint:     1.5px solid rgba(97, 77, 255, 0.20) // Primary accent border
  --border-inverse-grid:   1px solid rgba(255, 255, 255, 0.25) // Blueprint scaffolding lines
  --border-focus-ring:     3px solid rgba(97, 77, 255, 0.35)  // Accessibility outline

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY & GRAPHIC MOTIF LANGUAGE
 * -------------------------------------------------------------------------- */
Visual Motifs:
  * Geometry: Pure rotational symmetry, segmented petals, and rounded triangles.
  * Filleted Vertices: Inner and outer triangle apexes have rounded smooth caps.
  * Line Construction: Technical "Blueprint" style framing with subtle alignment
    crosshairs (✕) and bounding guides.
  * Stroke Standards:
      - Line Width: 2px uniform stroke (at 24x24 box)
      - End Caps: Round (stroke-linecap: round)
      - Joins: Round (stroke-linejoin: round)
  * Solid Icons: Organic, silhouette fills using --color-primary-base or --color-surface-canvas.

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
Transitions & Physics:
  --ease-elastic:    cubic-bezier(0.16, 1, 0.3, 1)   // Smooth snappy response
  --ease-out:        cubic-bezier(0, 0, 0.2, 1)
  --duration-fast:   150ms
  --duration-normal: 250ms

States:
  * Primary Button Hover:
      transform: translateY(-2px);
      background-color: var(--color-primary-hover);
      box-shadow: var(--elevation-brand-glow);

  * Card / Surface Hover:
      transform: translateY(-4px);
      box-shadow: var(--elevation-medium);
      border-color: var(--color-primary-subtle);

  * Active / Tap Feedback:
      transform: scale(0.98);
      transition-duration: 80ms;

  * Blueprint Grid Effects:
      Subtle opacity pulsation (0.25 -> 0.45) on interactive hero containers.

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO muddy desaturated dull grays or murky gradients.
- NO sharp unfilleted 0px brutalist corners (must use squircle continuous flow 6px/10px/16px/24px/32px/9999px).
- NO chaotic icon-stuffed bento boxes without clear geometric alignment.
- NO heavy skeuomorphic 3D bevels or black zero-blur drop shadows.
- NO low-contrast illegible text on purple surfaces.
================================================================================`
  },
  {
    id: "TILE-016",
    slug: "architectural-brutalism",
    name: "Architectural Brutalism & Editorial Modernism",
    vibe: "Swiss International • Constructivist Tension • Vermilion & Ink Contrast",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Syne",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Vermilion Red Core", hex: "#D7261E" },
      { name: "Deep Signal Red", hex: "#B51D16" },
      { name: "Ink Black Contrast", hex: "#121212" },
      { name: "Architectural Cream", hex: "#F6F4EE" },
      { name: "Muted Slate Grey", hex: "#8A8D8F" },
      { name: "Pure White", hex: "#FFFFFF" }
    ],
    description: "Swiss International meets Constructivist Editorial: Vermilion Red (#D7261E), Ink Black (#121212), Architectural Cream (#F6F4EE), strict zero-radius geometry, 14°-18° diagonal architectural cuts, and monumental typographic contrast.",
    markdownSpec: `================================================================================
  STYLE TILE // ARCHITECTURAL BRUTALISM & EDITORIAL MODERNISM (TILE-016)
================================================================================

[ 01. DESIGN ETHOS & MOOD ]
--------------------------------------------------------------------------------
  * Aesthetic: Swiss International meets Constructivist Editorial
  * Vibe: High-impact, stark architectural contrast, precise, unapologetic
  * Visual Rhythm: Massive typographic scale colliding with strict grid structures,
                    hard diagonal silhouettes, and high-contrast duotone imagery.

[ 02. COLOR ROLES & PALETTE ]
--------------------------------------------------------------------------------
:root {
  /* Primary & Accent */
  --color-vermilion:         #D7261E; /* Brand Core: Primary visual anchor, high-impact hero backgrounds, active states */
  --color-vermilion-dark:    #B51D16; /* Deep Signal Red: Hover states on red, deep emphasis */
  --color-vermilion-subtle:  rgba(215, 38, 30, 0.08); /* Faint highlight tint */

  /* Monochrome & Neutrals */
  --color-ink-black:         #121212; /* High Contrast: Primary typography, dominant utility bars, stark surface contrast */
  --color-canvas-cream:      #F6F4EE; /* Architectural Cream: Primary page background, editorial breathing room */
  --color-slate-grey:        #8A8D8F; /* Muted Slate Grey: Secondary captions, inactive controls, building texture balance */
  --color-pure-white:        #FFFFFF; /* Pure White: Inverted typography on black/red blocks, crisp UI elements */
  --color-white-translucent: rgba(255, 255, 255, 0.88);

  /* Status Tokens */
  --color-status-active:     #D7261E;
  --color-status-muted:      #8A8D8F;
  --color-status-success:    #2E6F40;
  --color-status-warning:    #D97706;
}

[ 03. TYPOGRAPHY SYSTEM ]
--------------------------------------------------------------------------------
/* Font Stacks */
--font-display: "Syne", "Monument Extended", sans-serif;
--font-sans:    "Inter", -apple-system, "Neue Haas Grotesk", sans-serif;
--font-mono:    "JetBrains Mono", "Space Mono", monospace;

/* Hierarchy & Tokens */
--text-display:   clamp(4.5rem, 10vw, 10rem) / 0.85 var(--font-display); /* 120px–180px | Weight: 700/800 | UPPERCASE | Tracking: -0.04em */
--text-title-xl:  clamp(2.5rem, 5.5vw, 5.5rem) / 0.95 var(--font-display); /* 64px–96px | Weight: 600/700 | UPPERCASE | Tracking: -0.02em */
--text-subhead-l: clamp(1.25rem, 2vw, 1.75rem) / 1.20 var(--font-display); /* 24px–32px | Weight: 500/600 | UPPERCASE | Tracking: +0.02em */
--text-body-reg:  0.9375rem / 1.45 var(--font-sans); /* 14px–16px | Weight: 400 | Sentence case | Tracking: 0.00em */
--text-micro-ui:  0.6875rem / 1.00 var(--font-mono); /* 10px–12px | Weight: 600 | UPPERCASE | Tracking: +0.12em */

[ 04. CORNER GEOMETRY (BORDER RADII) ]
--------------------------------------------------------------------------------
* Strategy: Strict Zero-Radius (Radical Rectilinear)
* Tokens:
  --radius-none: 0px; /* Global buttons, inputs, cards, toolbars, badges */
  --radius-sm:   0px;
  --radius-lg:   0px;

* Architectural Cuts: Hard diagonal mask angles (14°–18° slope) for hero image
  containers, accent ribbons, and content sectional dividers (clip-path polygons).

[ 05. ELEVATION & DEPTH (SHADOWS & LAYERS) ]
--------------------------------------------------------------------------------
* Strategy: Flat Editorial Stacking (Zero blur-shadows, pure z-axis overlap)
* Tokens:
  --shadow-none:           none;
  --shadow-hard:           4px 4px 0px #121212; /* Hard brutalist offset, used sparingly */
  --shadow-hard-vermilion: 4px 4px 0px #D7261E;

* Layering Hierarchy:
  Z-0 : Architectural Cream Base Canvas (#F6F4EE)
  Z-1 : Monochromatic / Duotone Architectural Image Layers
  Z-2 : Bold Color Blocks (Vermilion Red #D7261E with angled cutouts)
  Z-3 : Overlapping Typography (Large display text interacting across seams)
  Z-4 : Fixed Utility/Navigation Toolbars (Deep Ink Black #121212)

[ 06. SPACING & SPATIAL SCALE ]
--------------------------------------------------------------------------------
* Grid System: 12-Column Responsive Grid | Gutters: 0px or 16px (Flush edge-to-edge)
* Base Unit: 4px / 8px scale
  --space-2xs: 4px;
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  80px;
  --space-2xl: 120px;

[ 07. BORDERS & DIVIDERS ]
--------------------------------------------------------------------------------
* Style: Hairline Minimalist
* Tokens:
  --border-hairline-dark:  1px solid rgba(18, 18, 18, 0.15);
  --border-hairline-light: 1px solid rgba(255, 255, 255, 0.20);
  --border-heavy-accent:   2px solid #121212;
  --border-vermilion-bold: 2px solid #D7261E;

[ 08. ICONOGRAPHY LANGUAGE ]
--------------------------------------------------------------------------------
* Style: Ultra-thin, geometric hairline glyphs
* Stroke Width: 1.25px–1.5px (Matches typography weight)
* Corner Join: Miter / Sharp (stroke-linecap: square; stroke-linejoin: miter)
* Visuals: Minimalist downward chevrons, geometric search loupes, strict directional arrows.

[ 09. INTERACTION & FEEDBACK RULES ]
--------------------------------------------------------------------------------
* Motion Curve: cubic-bezier(0.16, 1, 0.3, 1) [Fast, sharp, mechanical]
* Duration: 120ms – 200ms (Instantaneous tactile feel)
* Hover Behaviors:
  - Text Links: Instant color inversion (Ink Black -> Vermilion Red) or underline draw.
  - Black Bar Modules: Background shift from #121212 -> #D7261E on active focus.
  - Filter Dropdowns: Subtle 1px border highlight with instantaneous chevron rotation.
  - Image Interactions: Greyscale to subtle high-contrast sharpen/color bleed on hover.

[ 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS ]
--------------------------------------------------------------------------------
- NO rounded corners or pill-shaped buttons (Strict 0px radius everywhere).
- NO diffuse blurred drop shadows or neon glows.
- NO purple/violet dark theme or generic tech gradients.
- NO floating unanchored cards without structural grid alignment.
- NO soft pastel colors (strictly Vermilion, Ink Black, Architectural Cream, Slate Grey, Pure White).
================================================================================`
  },
  {
    id: "TILE-017",
    slug: "bio-clinical-editorial",
    name: "Bio-Clinical Technical Editorial",
    vibe: "Warm Bio-Ivory & Olive • Monospace Telemetry • Flat Swiss Minimalist • High-Density Clinical Architecture",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Neue Haas Grotesk",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Base", hex: "#F7F8F1" },
      { name: "Surface Card", hex: "#FFFFFF" },
      { name: "Primary Deep", hex: "#21361D" },
      { name: "Olive Mid", hex: "#60714E" },
      { name: "Accent Chartreuse", hex: "#DBE8B8" },
      { name: "Ink Primary", hex: "#121610" }
    ],
    description: "Bio-Clinical Technical Editorial: Warm bio-ivory (#F7F8F1), coniferous pine (#21361D), radiant matcha chartreuse (#DBE8B8), flat Swiss minimalist layering, and monospace clinical telemetry.",
    markdownSpec: `================================================================================
  STYLE TILE // BIO-CLINICAL TECHNICAL EDITORIAL (TILE-017)
================================================================================

[ 01. DESIGN ETHOS & MOOD ]
--------------------------------------------------------------------------------
  * Aesthetic: Bio-Clinical Technical Editorial
  * Vibe: Sterile yet organic, Swiss International layout discipline, clinical telemetry
  * Visual Rhythm: High-density clinical data grids, bio-ivory parchment base,
                    coniferous pine inks (#21361D), radiant matcha chartreuse alerts (#DBE8B8).
  * Elevation Philosophy: Completely Flat / Swiss Minimalist (Zero blurred drop-shadows)
  * Depth Method: Tonal layering, explicit line nesting, and high-contrast bounding boxes.

[ 02. COLOR ROLES & PALETTE ]
--------------------------------------------------------------------------------
:root {
  /* Canvas & Neutrals */
  --color-canvas-base:       #F7F8F1; /* Warm parchment / bio-ivory background */
  --color-surface-card:      #FFFFFF; /* Pure crisp white for primary modules */
  --color-surface-tint:      #F0F3E7; /* Soft tinted container layer */
  --color-surface-muted:     #E5ECD8; /* Mid-tone sage background */

  /* Deep Accents & Brand */
  --color-primary-deep:      #21361D; /* Deep coniferous / dark olive green */
  --color-primary-hover:     #182914; /* High-contrast active dark green */
  --color-olive-mid:         #60714E; /* Muted secondary olive */
  --color-olive-light:       #8A9E75; /* Tertiary density tone */

  /* Highlights & Functional States */
  --color-accent-chartreuse: #DBE8B8; /* Radiant matcha / high-visibility alert */
  --color-accent-lime-soft:  #E8F0CD; /* Low-friction status tint */
  --color-neutral-empty:     #EDF1E4; /* Unfilled matrix / slot placeholder */

  /* Text & Data Inks */
  --color-ink-primary:       #121610; /* Deep near-black pine ink */
  --color-ink-secondary:     #525E4B; /* Mid-contrast technical olive-grey */
  --color-ink-inverse:       #F7F8F1; /* Inverse parchment ink on deep surfaces */

  /* Status Tokens */
  --color-status-success:    #21361D;
  --color-status-warning:    #8A9E75;
  --color-status-alert:      #DBE8B8;
}

[ 03. TYPOGRAPHY SYSTEM ]
--------------------------------------------------------------------------------
/* Font Stacks */
--font-primary-display: "Neue Haas Grotesk", "PP Neue Montreal", "Plus Jakarta Sans", sans-serif;
--font-secondary-tech:  "PP Supply Mono", "JetBrains Mono", monospace;

/* Hierarchy & Tokens */
Display Heading:
  font-family:    var(--font-primary-display)
  font-size:      38px
  line-height:    1.08
  font-weight:    500
  letter-spacing: -0.03em
  text-transform: none

Metric / Data Stat:
  font-family:    var(--font-primary-display)
  font-size:      44px
  line-height:    1.0
  font-weight:    400
  letter-spacing: -0.04em
  font-variant-numeric: tabular-nums

Section Label / Kicker:
  font-family:    var(--font-secondary-tech)
  font-size:      11px
  line-height:    1.2
  font-weight:    700
  letter-spacing: 0.08em
  text-transform: uppercase

Data Row / Actionable Item:
  font-family:    var(--font-secondary-tech)
  font-size:      12px
  line-height:    1.4
  font-weight:    500
  letter-spacing: 0.04em
  text-transform: uppercase

Body Secondary:
  font-family:    var(--font-primary-display)
  font-size:      14px
  line-height:    1.45
  font-weight:    400
  letter-spacing: -0.01em

[ 04. CORNER GEOMETRY (BORDER RADII) ]
--------------------------------------------------------------------------------
--radius-xs:    2px;   /* Micro markers, data heat-map cells */
--radius-sm:    6px;   /* Input fields, utility pills, mini action tiles */
--radius-md:   12px;   /* Nav buttons, secondary nested modules */
--radius-lg:   20px;   /* Primary container cards, high-level dashboards */
--radius-pill: 9999px; /* Standalone badges, status trackers */

[ 05. ELEVATION & DEPTH (SHADOWS & LAYERS) ]
--------------------------------------------------------------------------------
* Philosophy: Completely Flat / Swiss Minimalist (Zero blurred drop-shadows)
* Depth Method: Tonal layering, explicit line nesting, and high-contrast bounding boxes.
* Layer Stack:
  Layer 0 (Canvas):        --color-canvas-base (#F7F8F1)
  Layer 1 (Card Frame):    --color-surface-card (#FFFFFF) + 1px solid/dashed border
  Layer 2 (Internal Pill): --color-surface-tint (#F0F3E7) or --color-primary-deep (#21361D)
  Layer 3 (Overlay Focus): Accent fills (#DBE8B8) without elevation shift

[ 06. SPACING & SPATIAL SCALE ]
--------------------------------------------------------------------------------
* Base Unit: 4px / 8pt Geometric Modular Scale
  --space-2xs: 4px;
  --space-xs:  8px;
  --space-sm:  12px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;

* Layout Density:
  Card Padding (Internal): 20px 24px
  Grid Gap:                16px horizontal / 16px vertical
  Data Row Height:         32px fixed baseline with hairline delimiter

[ 07. BORDERS & DIVIDERS ]
--------------------------------------------------------------------------------
--border-hairline: 1px solid rgba(33, 54, 29, 0.25);
--border-solid:    1px solid var(--color-primary-deep);
--border-dashed:   1px dashed rgba(33, 54, 29, 0.45);
--border-dotted:   1px dotted rgba(33, 54, 29, 0.50);

* Divider Application:
  - Top Utility Headers: Enclosed in 1px dashed/dotted bounds
  - Internal Card Dividers: 1px solid horizontal lines anchoring category labels
  - Data Lists: Full-width hairline bottom strokes between consecutive records

[ 08. ICONOGRAPHY LANGUAGE ]
--------------------------------------------------------------------------------
* Paradigm: Utilitarian Monospace Glyphs & Technical Vector Primitives
* Stroke Weight: 1.25px - 1.5px constant geometric stroke
* Corner Treatment: Sharp or 0.5px micro-radius
* Key Glyph Patterns:
  - Bracketed Affordances: [VIEW ↗], [+], [−], [x], [RUN ASSAY ↗]
  - Metric Indicators: ↗, →, ↓
  - Matrix Elements: ○, ● and modular rectangular grids

[ 09. INTERACTION & FEEDBACK RULES ]
--------------------------------------------------------------------------------
* Default Transition: 150ms cubic-bezier(0.16, 1, 0.3, 1) (Ease-Out Fast)
* Interactive Hover:
  - Text Links / Brackets: Background fill transitions to --color-accent-chartreuse (#DBE8B8)
  - Inverted Cards: Shift background from #21361D to #182914
  - Standard Card Hover: Outline shifts from --border-hairline to --border-solid
* Selection / Active:
  - Selected Pill: Full flood fill --color-primary-deep with --color-ink-inverse
  - Alert Highlight: Persistent block-band fill of --color-accent-chartreuse
* Focus State:
  - 2px outline-offset, 1px solid var(--color-primary-deep)

[ 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS ]
--------------------------------------------------------------------------------
- NO blurred drop shadows or skeuomorphic bevels (Strict flat tonal layering).
- NO purple/violet dark theme or generic neon cyberspace glows.
- NO high-saturation rainbow badges; stick strictly to pine, sage, chartreuse, olive.
- NO floating unanchored cards without structural hairline bounds.
- NO rounded biscuit headline pills with pulsing dots.
================================================================================`
  },
  {
    id: "TILE-018",
    slug: "neo-dark-tactile-fintech",
    name: "Neo-Dark Tactile FinTech / SaaS",
    vibe: "Ultra-Deep Void Black • Pinned Tactile Hardware • Ambient Aura Blends • Electric Chartreuse & Warm Ochre",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Ground Canvas", hex: "#08090A" },
      { name: "Elevated Card", hex: "#121316" },
      { name: "Electric Lime", hex: "#D8F878" },
      { name: "Warm Amber", hex: "#F7A832" },
      { name: "Accent Cyan", hex: "#1FD5C9" },
      { name: "Text Primary", hex: "#F4F5F6" }
    ],
    description: "Neo-Dark Tactile FinTech / SaaS: Ultra-deep void canvas (#08090A), frosted glass overlays, pinned hardware micro-plates with metallic rivets, atmospheric aura underglows, and high-energy electric chartreuse CTAs (#D8F878 → #AEE63A).",
    markdownSpec: `================================================================================
  STYLE TILE: NEO-DARK TACTILE FINTECH / SAAS (TILE-018)
  Design Language & Machine-Readable Token Specification
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Neo-Dark Tactile FinTech / SaaS merges ultra-deep void canvas surfaces (#08090A) with high-density engineered glassmorphism, hardware-pinned micro-plates, and high-energy electric chartreuse CTAs (#D8F878 -> #AEE63A). Driven by atmospheric aura glows, 1px luminous edge strokes, and industrial micro-fasteners, this system delivers uncompromising tactile feedback and precision financial telemetry.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Canvas & Base Surfaces */
  --surface-ground:         #08090A; /* Ultra-deep void black, base background */
  --surface-elevated:       #121316; /* Card base & floating surface tone */
  --surface-glass:          rgba(22, 24, 28, 0.75); /* Frosted glass overlay */
  --surface-subtle:         rgba(255, 255, 255, 0.03); /* Hover wells / chip base */

  /* Typography & Foreground */
  --text-primary:           #F4F5F6; /* Pure crisp high-contrast off-white */
  --text-secondary:         #8F94A0; /* Muted cool slate grey for body/descriptions */
  --text-tertiary:          #525660; /* Low-emphasis micro labels and metadata */
  --text-inverse:           #0B0D0E; /* Deep charcoal text for high-contrast CTA */

  /* Brand Accents & Gradients */
  --brand-primary-lime:     #D8F878; /* High-energy electric chartreuse start */
  --brand-primary-lime-end: #AEE63A; /* High-energy electric chartreuse end */
  --brand-warm-amber:       #F7A832; /* Signature brand warm ochre / gold */
  --accent-cyan:            #1FD5C9; /* Electric teal micro-accent */
  --accent-violet:          #8B3DFF; /* Deep atmospheric violet glow */

  /* Ambient Aura Blends (Underglow & Lighting) */
  --aura-gradient-primary:  linear-gradient(135deg, #7A22E5 0%, #1FD5C9 50%, #F7A832 100%);
  --aura-cta-gradient:      linear-gradient(180deg, #D4F97E 0%, #A4E834 100%);
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display: "Plus Jakarta Sans", "Inter Display", -apple-system, sans-serif;
--font-sans:    "Plus Jakarta Sans", -apple-system, sans-serif;
--font-mono:    "JetBrains Mono", "SF Mono", monospace;

/* Scale & Hierarchy */
Hero Display:   64px (4.0rem)   | Line-height: 1.05 | Tracking: -0.035em | Weight: 500/Medium
Heading 1:      40px (2.5rem)   | Line-height: 1.15 | Tracking: -0.025em | Weight: 500/Medium
Heading 2:      20px (1.25rem)  | Line-height: 1.30 | Tracking: -0.015em | Weight: 600/SemiBold
Body Large:     16px (1.0rem)   | Line-height: 1.55 | Tracking: -0.010em | Weight: 400/Regular
Body Regular:   14px (0.875rem) | Line-height: 1.50 | Tracking: normal   | Weight: 400/Regular
Micro / Meta:   11px (0.6875rem)| Line-height: 1.40 | Tracking: +0.020em | Weight: 500/Medium

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-pill: 9999px;        /* Pill CTAs, header buttons, active state chips */
--radius-xl:   30px;          /* 28px – 32px: Hero media containers, key feature blocks */
--radius-lg:   18px;          /* 16px – 20px: Floating data cards, modals, contextual widgets */
--radius-md:   11px;          /* 10px – 12px: Tactile micro-plates, status modules */
--radius-sm:   7px;           /* 6px – 8px: Form controls, tooltips, nested status tags */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERING)
 * -------------------------------------------------------------------------- */
- Layer 0 (Canvas):   Static dot-matrix grid (24px x 24px, 2px dot @ 8% opacity) with scattered luminous nodes (#1FD5C9, #F7A832, #D8F878)
- Layer 1 (Aura):     Soft radial backdrop blur [filter: blur(80px)] for vibrant halos
- Layer 2 (Base):     Main media hero container with 1px luminous edge (rgba(255, 255, 255, 0.08))
- Layer 3 (Overlay):  Floating glass morphism dialogs & data modules
- Layer 4 (Tactile):  Hardware-styled pinned micro-plates with inner drop shadow

--shadow-floating: 0 24px 48px -12px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(255, 255, 255, 0.08);
--shadow-plate:    0 12px 24px -6px rgba(0, 0, 0, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.25);
--shadow-ambient:  0 0 80px 20px rgba(122, 34, 229, 0.18);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE
 * -------------------------------------------------------------------------- */
--space-2xs: 4px;
--space-xs:  8px;
--space-sm:  12px;
--space-md:  16px;
--space-lg:  24px;
--space-xl:  32px;
--space-2xl: 48px;
--space-3xl: 64px;

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-luminous: 1px solid rgba(255, 255, 255, 0.08);
--border-active:   1px solid rgba(216, 248, 120, 0.40);
--border-subtle:   1px solid rgba(255, 255, 255, 0.05);
--border-chisel:   inset 0 1px 0 0 rgba(255, 255, 255, 0.15);

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY & INDUSTRIAL ACCENTS
 * -------------------------------------------------------------------------- */
- Bounding Box: 20px / 24px optical grid
- Stroke Weight: 1.75px uniform, rounded caps & joins
- Treatment: Duo-tone or subtle monochrome with geometric framing
- Hardware Motifs:
  • Corner Rivets: Micro 4-corner metallic fasteners (3px circles with recessed inset shadow)
  • Status Indicators: 2px vertical pill bars (Green = Active/Past, Amber = Pending/Future)

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
- Primary Lime Plate: Scale(0.98) on click | Box-shadow bloom on hover: 0 0 24px rgba(216, 248, 120, 0.35)
- Secondary Text Links: Opacity shift 0.70 -> 1.00 with smooth 150ms cubic-bezier transition
- Floating Card Parallax: Subtle +4px Y-axis translation with dampening on viewport hover
- Transition Curve: cubic-bezier(0.16, 1, 0.3, 1)

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS
 * -------------------------------------------------------------------------- */
- NO generic purple-on-dark dashboard clichés with low-contrast violet text.
- NO unbordered floating cards that bleed into void backgrounds.
- NO headline biscuit pills with pulsating dots.
- NO generic rainbow gradient keyword text fills.
- NO zero-depth flat buttons lacking tactile feedback and luminous bloom.
================================================================================`
  },
  {
    id: "TILE-019",
    slug: "editorial-chromatic-block",
    name: "Editorial Chromatic Block",
    vibe: "Tri-Tone Asymmetric Layout • Deep Indigo Anchor & Vivid Vermilion Rail • Warm Parchment Stage • Compressed Heavy Display Type",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Cabinet Grotesk",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Parchment Warm", hex: "#FAF8EE" },
      { name: "Indigo Deep", hex: "#2D265C" },
      { name: "Vermilion Vivid", hex: "#FF5338" },
      { name: "Indigo Muted", hex: "#A59EC2" },
      { name: "Ink Primary", hex: "#1C1A24" },
      { name: "Focus Goldenrod", hex: "#FFD027" }
    ],
    description: "Editorial Chromatic Block: Tri-tone asymmetric editorial UI featuring high-contrast deep indigo (#2D265C) anchor rail, warm parchment (#FAF8EE) center stage, and vivid vermilion (#FF5338) navigation rail with compressed heavy typography.",
    markdownSpec: `# ==============================================================================
# DESIGN SYSTEM STYLE TILE: "EDITORIAL CHROMATIC BLOCK"
# Visual Identity Spec: Tri-Tone Asymmetric Editorial UI
# ==============================================================================

1. COLOR ROLES & PALETTE
--------------------------------------------------------------------------------
  --palette-indigo-deep:      #2D265C  /* Left rail background, high-contrast anchor */
  --palette-indigo-muted:     #A59EC2  /* Secondary text / metadata on dark canvas */
  --palette-parchment-warm:   #FAF8EE  /* Primary center stage background */
  --palette-vermilion-vivid:  #FF5338  /* Right rail background & focal display type */
  --palette-vermilion-soft:   #FFE5E0  /* Light tint for vermilion hover states */
  --palette-ink-primary:      #1C1A24  /* High-contrast body copy on parchment */
  --palette-ink-secondary:    #636070  /* Author/metadata subtext on light stage */
  --palette-pure-white:       #FFFFFF  /* Primary headers on dark rail, card canvas */

  Semantic Mappings:
    • Surface.Primary:        var(--palette-parchment-warm)
    • Surface.Sidebar.Dark:   var(--palette-indigo-deep)
    • Surface.Sidebar.Accent: var(--palette-vermilion-vivid)
    • Surface.Card:           var(--palette-pure-white)
    • Text.Primary.Dark:      var(--palette-pure-white)
    • Text.Secondary.Dark:    var(--palette-indigo-muted)
    • Text.Primary.Light:     var(--palette-ink-primary)
    • Text.Secondary.Light:   var(--palette-ink-secondary)
    • Text.Accent:            var(--palette-vermilion-vivid)
    • Interactive.Focus:      #FFD027 (High-vis goldenrod for a11y focus rings)

2. TYPOGRAPHY SYSTEM
--------------------------------------------------------------------------------
  Font Families:
    • Display / Impact:       "Druk Condensed", "Cabinet Grotesk", sans-serif
    • Body / Interface:       "Inter", "Satoshi", "Helvetica Neue", sans-serif
    • Monospace / Meta:       "JetBrains Mono", monospace

  Type Hierarchy:
    • Display XXL (Review Count):
        Font-Family:          var(--font-display)
        Size / Line-Height:   72px / 0.88
        Weight:               900 (Compressed Heavy)
        Letter-Spacing:       -0.02em
        Transform:            Uppercase

    • Display XL (Section Headers):
        Font-Family:          var(--font-body)
        Size / Line-Height:   28px / 1.15
        Weight:               700 (Bold)
        Letter-Spacing:       -0.015em

    • Card Title (Book Titles):
        Font-Family:          var(--font-body)
        Size / Line-Height:   16px / 1.25
        Weight:               700 (Bold)
        Letter-Spacing:       -0.01em
        Color:                var(--palette-vermilion-vivid)

    • Category / Nav Label (Right Sidebar):
        Font-Family:          var(--font-body)
        Size / Line-Height:   13px / 1.8
        Weight:               500 (Medium)
        Letter-Spacing:       0.04em
        Transform:            Capitalize / Tracking Expanded

    • Micro Tracked Caps (Awards/Footer):
        Font-Family:          var(--font-body)
        Size / Line-Height:   11px / 1.4
        Weight:               700 (Bold)
        Letter-Spacing:       0.12em
        Transform:            Uppercase

    • Body Text (Bio / Paragraphs):
        Font-Family:          var(--font-body)
        Size / Line-Height:   13px / 1.6
        Weight:               400 (Regular)
        Letter-Spacing:       0.005em

3. CORNER GEOMETRY (BORDER RADII)
--------------------------------------------------------------------------------
  • Radius.None:              0px       /* Structural panels, color-block seams */
  • Radius.Subtle:            3px       /* Book covers, media cards */
  • Radius.Interactive:       6px       /* Buttons, pill tags, search inputs */
  • Radius.Frame:             28px      /* Main viewport/application boundary */
  • Radius.Full:              9999px    /* Profile avatars, status indicators */

4. ELEVATION & DEPTH (SHADOWS & LAYERS)
--------------------------------------------------------------------------------
  Approach: Hard Flat Aesthetic with Ambient Micro-Depth on Media

  • Elevation 0 (Canvas Level):
      Shadow:                  none (Pure flush color-blocking)
  • Elevation 1 (Resting Media / Book Cover):
      Shadow:                  0 4px 14px -2px rgba(45, 38, 92, 0.08)
  • Elevation 2 (Hovered Media / Floating Badge):
      Shadow:                  0 12px 28px -4px rgba(45, 38, 92, 0.16)
  • Layer Z-Index Index:
      - Deep Base (Rails):    z-index: 10
      - Main Content:         z-index: 20
      - Overlays / Kinetic:   z-index: 30
      - Navigation / Modals:  z-index: 100

5. SPACING & SPATIAL SCALE
--------------------------------------------------------------------------------
  Base Unit: 4px / 8px Grid Scale

  • Space.2xs:                4px
  • Space.xs:                 8px
  • Space.sm:                 12px
  • Space.md:                 16px
  • Space.lg:                 24px
  • Space.xl:                 32px
  • Space.2xl:                48px
  • Space.3xl:                64px

  Layout Dimensions:
    • Viewport Margins:       16px (Outer frame padding)
    • Left Rail Width:        320px (Fixed or 26vw)
    • Main Stage Width:       Flexible (1fr / ~56vw)
    • Right Rail Width:       220px (Fixed or 18vw)
    • Media Card Grid:        Repeat(3, minmax(140px, 1fr)) | Gap: 32px 24px

6. BORDERS & DIVIDERS
--------------------------------------------------------------------------------
  • Column Transitions:       0px (Zero-gap chromatic boundary, clean vertical seam)
  • Contrast Divider (Dark):  1px solid rgba(255, 255, 255, 0.08)
  • Contrast Divider (Light): 1px solid rgba(45, 38, 92, 0.06)
  • Outline Rings:            2px solid var(--palette-vermilion-vivid)

7. ICONOGRAPHY LANGUAGE
--------------------------------------------------------------------------------
  • Style:                    Geometric Minimalist / Mono-weight Stroke
  • Stroke Weight:            1.5px to 1.75px uniform
  • Corner Cap / Join:        Round caps, crisp miters
  • Default Bounding Box:     16x16px (Nav/Inline), 20x20px (Controls)
  • Color Dynamic:            Inherits current section text token (currentColor)

8. INTERACTION & FEEDBACK RULES
--------------------------------------------------------------------------------
  Motion Curves:
    • Standard Transition:    200ms cubic-bezier(0.2, 0, 0, 1)
    • Transform / Lift:       350ms cubic-bezier(0.16, 1, 0.3, 1)

  Interactive States:
    • Media Cover Hover:
        - Transform:          translateY(-6px) scale(1.02)
        - Shadow:             var(--Elevation-2)
        - Duration:           var(--motion-lift)
    • Genre Links (Right Rail):
        - Default:            color: rgba(255, 255, 255, 0.82)
        - Hover:              color: #FFFFFF; font-weight: 700; transform: translateX(4px)
    • Interactive Kinetic Graphic (Badge/Globe):
        - Continuous Subtle:  Slow rotational drift (30s linear infinite)
        - Cursor Drag/Hover:  Interactive rotational displacement with friction
    • Focus Visibility:
        - Box-Shadow:         0 0 0 3px var(--palette-indigo-deep), 0 0 0 5px #FFD027`
  },
  {
    id: "TILE-020",
    slug: "retro-postal-modernist",
    name: "Retro-Postal Modernist",
    vibe: "Philatelic Editorial • Scallop Punch-Out Perforations • Cobalt & Bubblegum Airmail Duotones • Condensed Poster Display & Grotesque Body",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Bebas Neue",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Parchment Bg", hex: "#F5ECE1" },
      { name: "Paper White", hex: "#FFFFFF" },
      { name: "Electric Blue", hex: "#0062FF" },
      { name: "Bubblegum Pink", hex: "#FF66B2" },
      { name: "Cyan Sky", hex: "#38BDF8" },
      { name: "Carbon Black", hex: "#0A0A0C" }
    ],
    description: "Retro-Postal Modernist: Tactile philatelic design system featuring unbleached newsprint parchment (#F5ECE1), high-chroma electric cobalt (#0062FF) and bubblegum rose (#FF66B2), scalloped stamp perforations, airmail duotones, and condensed headline typography.",
    markdownSpec: `# ==============================================================================
# DESIGN SYSTEM STYLE TILE: RETRO-POSTAL MODERNIST (PHILATELIC EDITORIAL)
# ==============================================================================

01. COLOR ROLES & PALETTE
────────────────────────────────────────────────────────────────────────────────
Canvas & Surfaces:
  • canvas-bg-parchment   : #F5ECE1  /* Warm newsprint / unbleached ecru */
  • surface-card-white    : #FFFFFF  /* Pure paper white (stamps & inputs) */
  • surface-subtle-tint   : #EDE3D5  /* Recessed container fill */

Brand & Accents:
  • accent-electric-blue  : #0062FF  /* High-chroma postal cobalt */
  • accent-bubblegum-pink : #FF66B2  /* Vibrant stamp magenta / rose */
  • accent-cyan-sky       : #38BDF8  /* Airmail gradient highlight */

Typography & Inks:
  • text-primary          : #0A0A0C  /* Deep carbon black (high contrast) */
  • text-secondary        : #4A4844  /* Warm graphite for body copy */
  • text-subtle           : #8A857D  /* Muted captions, placeholders */
  • text-inverse          : #FFFFFF  /* Crisp white on saturated fills */

Illustrative Duotones (Gradient Scales):
  • gradient-blue-dusk    : linear-gradient(180deg, #0045B5 0%, #0077FF 60%, #60A5FA 100%)
  • gradient-pink-dawn    : linear-gradient(180deg, #FF458F 0%, #FF6FB5 55%, #FDE2ED 100%)


02. TYPOGRAPHY SYSTEM
────────────────────────────────────────────────────────────────────────────────
Font Families:
  • $font-display : 'Bebas Neue', 'Druk Wide', 'Impact', sans-serif-condensed
  • $font-body    : 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif

Type Scale & Hierarchy:
  • Display Hero  : 64px–88px | Condensed Bold (700) | Line-Height: 0.92  | Tracking: -0.01em | UPPERCASE
  • Display Sub   : 28px–36px | Condensed Bold (700) | Line-Height: 1.05  | Tracking: 0.00em  | UPPERCASE
  • Title / Label : 14px–16px | Condensed Semi (600) | Line-Height: 1.20  | Tracking: +0.06em | UPPERCASE
  • Body Regular  : 14px–15px | Grotesque Regular(400)| Line-Height: 1.55  | Tracking: -0.01em | Sentence
  • Stat Number   : 36px–44px | Condensed Bold (700) | Line-Height: 1.00  | Tracking: 0.00em  | Normal
  • Micro Metric  : 11px–12px | Grotesque Medium(500)| Line-Height: 1.30  | Tracking: +0.02em | Title Case


03. CORNER GEOMETRY (BORDER RADII)
────────────────────────────────────────────────────────────────────────────────
  • radius-sharp   : 2px   /* Stamp inner frame corners, stamp outer substrate */
  • radius-input   : 6px   /* UI search modules, input containers */
  • radius-button  : 8px   /* Action triggers, standalone buttons */
  • radius-pill    : 999px /* Inline graphic pills, floating decorative shapes */
  • radius-cross   : 4px   /* Inline plus (+) and asterisk glyph rounded caps */


04. ELEVATION & DEPTH (SHADOWS & LAYERS)
────────────────────────────────────────────────────────────────────────────────
Tactile Paper Aesthetic:
  • shadow-flat    : none
  • shadow-input   : 0px 1px 3px rgba(10, 10, 12, 0.05)
  • shadow-stamp   : 0px 10px 24px -4px rgba(45, 35, 20, 0.14),
                     0px 2px 6px -1px rgba(45, 35, 20, 0.08)
  • shadow-lifted  : 0px 18px 36px -6px rgba(45, 35, 20, 0.22),
                     0px 4px 10px -2px rgba(45, 35, 20, 0.10)

Layering & Transforms:
  • Stack Tiers    : Canvas (z:0) -> Accents (z:1) -> Cards/Stamps (z:10) -> Overlays (z:50)
  • Postal Angles  : Randomized tilt on interactive items (e.g., -3deg, +3.5deg, +1.5deg)


05. SPACING & SPATIAL SCALE
────────────────────────────────────────────────────────────────────────────────
Base Unit: 4px Grid
  • space-2xs : 4px    /* Inner badge padding, tight icon margins */
  • space-xs  : 8px    /* Stamp inner image padding */
  • space-sm  : 12px   /* Input internal padding, card gap minimal */
  • space-md  : 16px   /* Standard component padding */
  • space-lg  : 24px   /* Inter-card spacing in perforated series */
  • space-xl  : 40px   /* Sectional row gaps */
  • space-2xl : 64px+  /* Hero margin and macro layouts */


06. BORDERS, DIVIDERS & PERFORATIONS
────────────────────────────────────────────────────────────────────────────────
Perforation Rules:
  • Scallop Punch-Out:
    Mask / CSS Radial: 6px circular cutout repeating every 14px on outer stamp margins.
  • Sheet Tears (Dividers):
    Dotted hairline rule: 2px dots, 6px pitch, Color: rgba(0, 0, 0, 0.25).

Structural Dividers:
  • border-hairline   : 1px solid rgba(10, 10, 12, 0.08) (Input internal dividers)
  • border-contrast   : 1.5px solid #0A0A0C (High-contrast graphic badges)
  • border-stamp-rim  : 8px solid #FFFFFF (White paper margin framing stamp art)


07. ICONOGRAPHY & GRAPHIC LANGUAGE
────────────────────────────────────────────────────────────────────────────────
Visual Motifs:
  • Inline Editorial Accents: Bold geometric shapes inserted directly within typography 
    (solid blue pills, fuchsia plus signs, 8-point heavy asterisks ✱).
  • Stamp Perforation Dots  : Vertical/horizontal connector rows between linked cards.
  • Graphic Coinage/Badges  : Floating circular micro-stamps with currency symbols (£, $, ¥).
  • Stroke Weight           : Consistent 1.75px–2px uniform line width for UI icons.
  • Icon Style              : Minimalist, clean geometric line art paired with solid fills.


08. INTERACTION & FEEDBACK RULES
────────────────────────────────────────────────────────────────────────────────
Card & Stamp Interactions:
  • Default State  : Natural rotational tilt (-3deg to +4deg), shadow-stamp.
  • Hover State    : Transform to \`translateY(-8px) rotate(0deg) scale(1.02)\`, transition
                     to \`shadow-lifted\` (Duration: 220ms, Timing: cubic-bezier(0.34, 1.56, 0.64, 1)).
  • Active / Press : \`scale(0.98)\`, shadow resets to base.

Control Elements (Buttons & Inputs):
  • Primary Button : Background \`#0062FF\` -> Hover: \`#004EDB\` (Brightness: 95%), Active: \`scale(0.96)\`.
  • Form Fields    : Clean white pill containers with crisp slate input text, no drop-shadow glow;
                     uses internal border shift on focus (\`1.5px solid #0062FF\`).
  • Transitions    : All micro-interactions use \`180ms ease-out\` for snappy editorial feel.

09. FORBIDDEN CLICHÉS & ANTI-PATTERNS
────────────────────────────────────────────────────────────────────────────────
  - NO purple neon on dark backgrounds.
  - NO untracked giant typefaces without optical balance.
  - NO 32px over-nested rounded bubble cards.
  - NO headline biscuit pills with pulsating dots.
  - NO generic rainbow gradient keyword text fills.
  - NO textureless plastic flat surfaces without paper fiber or tactile depth.
================================================================================`
  },
  {
    id: "TILE-021",
    slug: "retro-pop-sunset",
    name: "Retro-Pop Sunset",
    vibe: "DTC High-Energy • 1970s Sunset Wave • Brand Crimson & Citrus Orange • Bubbly Display & Tactile Sticker Badges",
    vibeBadge: "Playful & Pop",
    categories: ["playful"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Shrikhand",
      sans: "Cabinet Grotesk",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Peach Canvas", hex: "#FEE7DA" },
      { name: "Cream Neutral", hex: "#FFF5ED" },
      { name: "Brand Crimson", hex: "#E51928" },
      { name: "Citrus Orange", hex: "#F77100" },
      { name: "Bolt Yellow", hex: "#FFC820" },
      { name: "Carbon Black", hex: "#141414" }
    ],
    description: "Retro-Pop Sunset: High-energy DTC design system featuring sun-drenched 1970s nostalgia, warm Peach Canvas (#FEE7DA), Brand Crimson (#E51928), Citrus Orange (#F77100), Bolt Yellow (#FFC820), bubbly display typography, and springy tactile physics.",
    markdownSpec: `================================================================================
  STYLE TILE: RETRO-POP SUNSET (DTC / PLAYFUL HIGH-ENERGY SYSTEM)
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Retro-Pop Sunset is a high-energy, direct-to-consumer visual system celebrating 
sun-drenched 1970s pop nostalgia, playful tactile geometry, and modern kinetic DTC 
commerce. Built on vibrant Brand Crimson (#E51928), Citrus Orange (#F77100), and Bolt 
Yellow (#FFC820) set against warm Peach Canvas (#FEE7DA) and Cream surfaces (#FFF5ED), 
it merges plump bubble display typography, pill-rounded geometry, organic wave dividers, 
and springy tactile physics for an unforgettable, joyful brand presence.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Backgrounds */
  --color-peach-canvas:     #FEE7DA; /* App/Page Background Canvas */
  --color-cream-neutral:    #FFF5ED; /* Surface / Card Fill */
  --color-cream-tint:       #FCE0D0; /* Recessed container / well */
  --color-carbon-black:     #141414; /* Primary Text / Heavy UI */
  --color-pure-white:       #FFFFFF; /* Sticker Strokes / Card Highlights */

  /* Primary & Accents */
  --color-brand-crimson:    #E51928; /* Primary CTA / Pop Action */
  --color-brand-hover:      #C81422; /* Primary Pressed / Hover state */
  --color-citrus-orange:    #F77100; /* Secondary Accent / Highlight */
  --color-citrus-hover:     #DE6500; /* Citrus Hover state */
  --color-bolt-yellow:      #FFC820; /* Highlight / Micro-badge / Spark */
  --color-bolt-hover:       #E6B218; /* Bolt Hover state */

  /* Typography & Inks */
  --color-text-primary:     #141414; /* Carbon Black Primary Reading */
  --color-text-secondary:   #5A453D; /* Warm graphite secondary */
  --color-text-muted:       #8C7368; /* Low contrast captions & placeholders */
  --color-text-inverse:     #FFFFFF; /* White on saturated buttons */
  --color-text-highlight:   #F77100; /* Citrus Orange Highlight Text */

  /* Semantic Status Tokens */
  --status-success:         #00B67A; /* All-natural / Fresh Badge */
  --status-warning:         #F77100; /* Low Stock / Fast Selling */
  --status-danger:          #E51928; /* Sold Out / Urgent */
  --status-info:            #FFC820; /* New Drop / Flavor Alert */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display-bubble: "Shrikhand", "Titan One", "Cooper Black Rounded", cursive, sans-serif;
--font-display-sans:   "Cabinet Grotesk", "Plus Jakarta Sans", "Syne", sans-serif;
--font-body:           "Plus Jakarta Sans", "DM Sans", -apple-system, sans-serif;
--font-mono:           "JetBrains Mono", monospace;

/* Type Scale */
--text-display-01: clamp(4.5rem, 10vw, 10.5rem) / 0.90 var(--font-display-bubble); /* Tracking: -0.04em | Extra Bold */
--text-display-02: clamp(2.75rem, 5.5vw, 4.25rem) / 0.95 var(--font-display-bubble); /* Tracking: -0.03em | Heavy / 900 */
--text-heading-01: clamp(1.75rem, 3.5vw, 2.5rem) / 1.10 var(--font-display-sans);   /* Tracking: -0.02em | Bold / 800 */
--text-heading-02: 1.5rem / 1.20 var(--font-display-sans);                          /* Tracking: -0.01em | Bold / 700 */
--text-body:       1.0625rem / 1.40 var(--font-body);                               /* Tracking: 0.00em  | Medium / 500 */
--text-body-sm:    0.9375rem / 1.45 var(--font-body);                               /* Tracking: 0.00em  | Regular / 400 */
--text-badge:      0.75rem / 1.00 var(--font-body);                                 /* Tracking: +0.12em | Bold / 700 (UPPERCASE) */
--text-kpi:        1.5rem / 1.00 var(--font-display-sans);                          /* Tracking: +0.08em | Heavy / 900 */

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-pill: 9999px; /* Buttons, announcement badges, status tags, stickers */
--radius-card: 24px;   /* Surface panels, media containers, modal dialogs */
--radius-sm:   8px;    /* Inputs, tooltips, micro-interactions */
--radius-wave: Bezier-curved masks (S-curve organic bottom section dividers)

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERING)
 * -------------------------------------------------------------------------- */
/* Layering Hierarchy */
z-0:  Base Gradient Mesh (Peach to Light Melon Warmth)
z-10: Background Graphic Typography (Oversized clipping elements)
z-20: Hero Focal Product Object (Centralized floating layer)
z-30: Sticker Badges & Floating Flavor Pills
z-40: Sticky Header & Persistent CTA Navigation

/* Shadow Tokens */
--shadow-floating: 0px 28px 48px -12px rgba(229, 25, 40, 0.18), 0px 12px 24px -6px rgba(20, 20, 20, 0.08);
--shadow-sticker:  0px 4px 0px rgba(20, 20, 20, 0.12); /* Hard retro drop */
--shadow-btn-hover: 0px 8px 16px -4px rgba(229, 25, 40, 0.40);
--shadow-card:     0px 16px 36px -8px rgba(229, 25, 40, 0.08), 0px 4px 12px 0px rgba(20, 20, 20, 0.04);
--shadow-pressed:  0px 2px 4px rgba(20, 20, 20, 0.10);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (BASE: 8px)
 * -------------------------------------------------------------------------- */
--space-2xs: 4px;   /* Icon to label padding */
--space-xs:  8px;   /* Tag internal vertical padding */
--space-sm:  16px;  /* Button horizontal padding, inline gap */
--space-md:  24px;  /* Card padding, element stacking */
--space-lg:  32px;  /* Component rhythm */
--space-xl:  48px;  /* Section internal gutter */
--space-2xl: 64px;  /* Hero section margins, billboard spacing */

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-sticker:  2px solid #FFFFFF;              /* Applied to floating organic badges */
--border-outline:  2px solid #141414;              /* Secondary Pill CTA outline */
--border-micro:    1px solid rgba(20, 20, 20, 0.10);/* Recessed card dividers */
--divider-wave:    Seamless S-curve wave boundary (mask-image / SVG wave)

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
- Style: Playful 70s Pop / Chunky Geometric Strokes (2.5px stroke weight)
- Motifs:
  • Retro Sparkle / Starburst: 4-point star (✦) for highlights and accents
  • Bolt: Lightning glyph (⚡) for new drops and high-energy callouts
  • Navigation Arrows: Monoline rounded directional arrows (→)
  • Cart / Meta: Minimalist round-joint stroke glyphs

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
- Primary Button: Solid crimson fill (#E51928), white text, pill radius.
  • Hover:  translateY(-2px) scale(1.02) with punchy shadow expansion.
  • Active: translateY(1px) scale(0.98) with reduced shadow.
- Secondary Button: 2px solid #141414 border, cream fill.
  • Hover: Invert fill (#141414 fill, #FFF5ED text).
- Motion Physics:
  • Transition Timing: cubic-bezier(0.34, 1.56, 0.64, 1) (Bouncy spring)
  • Transition Duration: 180ms – 240ms
- Marquee Ticker: Infinite horizontal scroll @ 25s linear loop for bottom banner text.

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO generic purple neon or violet accents on dark backgrounds.
- NO cold corporate dashboard tables or monochrome sterile layouts.
- NO untracked giant typefaces without optical leading and kerning.
- NO textureless flat grey surfaces; embrace warm peach canvas and sun-drenched inks.
- NO over-nested cards with 3+ inside layers.
- NO headline biscuit pills with pulsing dots.
================================================================================`
  },
  {
    id: "TILE-022",
    slug: "editorial-high-contrast",
    name: "Editorial High-Contrast Minimalist",
    vibe: "Modern Commerce • International Safety Orange • Hairline Split Grids • Editorial Typographic Mashup • Stark Minimalist Monastic",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Inter",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Primary", hex: "#FFFFFF" },
      { name: "Canvas Secondary", hex: "#F6F6F6" },
      { name: "Surface Dark", hex: "#0A0A0A" },
      { name: "Text Primary", hex: "#111111" },
      { name: "Text Secondary", hex: "#707070" },
      { name: "Brand Accent", hex: "#FF4800" },
      { name: "Stroke Subtle", hex: "#E2E2E2" }
    ],
    description: "Editorial High-Contrast Minimalist: Razor-sharp modern commerce design system combining pure white gallery canvases (#FFFFFF), studio off-white section contrast (#F6F6F6), jet pitch black split backdrops (#0A0A0A), ultra-light 200 hairline vs. heavy 900 black typography mashups, and high-impact International Safety Orange (#FF4800) conversion triggers.",
    markdownSpec: `================================================================================
  STYLE TILE: EDITORIAL HIGH-CONTRAST MINIMALIST / MODERN COMMERCE (TILE-022)
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Editorial High-Contrast Minimalist is a razor-sharp modern commerce design language 
combining pure white gallery canvases, soft studio off-white section rhythms, jet pitch 
black split panels, and international safety orange (#FF4800) call-to-action triggers. 
It merges ultra-light 200 hairline sans typography with heavy 900 black headers and fluid 
expressive script accents, creating an unforgettable tension between editorial sophistication 
and functional industrial precision.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Canvas & Surfaces */
  --color-canvas-primary:       #FFFFFF; /* Pure White background / Card canvas */
  --color-canvas-secondary:     #F6F6F6; /* Soft Studio Off-White for section contrast */
  --color-surface-dark:         #0A0A0A; /* Jet Pitch Black for bold panels & split backdrops */

  /* Inks & Reading Typography */
  --color-text-primary:         #111111; /* Deep Onyx for ultra-high legibility */
  --color-text-secondary:       #707070; /* Cool Mid-Gray for secondary labels & metadata */
  --color-text-inverted:        #FFFFFF; /* Inverted white text on dark/colored surfaces */

  /* Signature Brand Accents */
  --color-brand-accent:         #FF4800; /* International Safety Orange (vivid call-to-action) */
  --color-brand-accent-hover:   #E03E00; /* Deep vermilion for interaction feedback */

  /* Hairlines & Boundaries */
  --color-stroke-subtle:        #E2E2E2; /* Hairline divider / pill border */
  --color-stroke-dark:          #111111; /* Hard contrast borders & active outlines */
  --grid-split-divider:         #ECECEC; /* Modular section separators */

  /* Semantic Status Tokens */
  --status-success:             #00875A;
  --status-warning:             #FF4800;
  --status-danger:              #D93800;
  --status-info:                #111111;
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-sans:    "Inter", "PP Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-script:  "Reenie Beanie", "Caveat", cursive;
--font-mono:    "JetBrains Mono", "Space Mono", monospace;

/* Type Scale Hierarchy */
--text-display-massive: 4.5rem – 6.0rem / 0.95 var(--font-sans); /* Weight: 200 (Ultra Light) | Letter-spacing: -0.04em */
--text-headline-sans:   2.75rem – 3.5rem / 1.05 var(--font-sans); /* Primary Term 200 Hairline / Impact Term 900 Black */
--text-headline-script: 3.0rem – 3.75rem / 1.00 var(--font-script); /* Emotive Term 400 Fluid Script */
--text-h2:              1.75rem / 1.20 var(--font-sans); /* Weight: 800 | Letter-spacing: -0.03em */
--text-body-regular:    0.9375rem – 1.0rem / 1.50 var(--font-sans); /* Weight: 400 | Color: #707070 */
--text-capsule-tag:     0.75rem – 0.8125rem / 1.20 var(--font-sans); /* Weight: 500 | sentence-case */
--text-micro-counter:   1.125rem – 1.375rem / 1.00 var(--font-mono); /* Weight: 300 | Letter-spacing: +0.05em */

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-pill:        9999px; /* Primary rule for interactive buttons, nav pills, tags, & icon badges */
--radius-card:           0px; /* Editorial grid cards & module containers remain starkly sharp */
--radius-floating:       4px; /* Micro-radius reserved exclusively for floating utility badges */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SPATIAL ARCHITECTURE)
 * -------------------------------------------------------------------------- */
/* UI Surface Elevation:
 * 2D Flat Construction: Zero drop-shadows on core UI components (buttons, cards, banners).
 * Spatial depth is established strictly through stark black/white geometric split backgrounds.
 */
--shadow-ui:          none;

/* Product / Visual Asset Elevation: */
--shadow-ambient:     0 24px 48px -12px rgba(0, 0, 0, 0.28);
--shadow-contact:     0 4px 8px 0 rgba(0, 0, 0, 0.40);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (BASE GRID: 8px)
 * -------------------------------------------------------------------------- */
--space-xxs:   4px;
--space-xs:    8px;   /* Inner button padding (vertical) */
--space-sm:   12px;   /* Inner tag padding (horizontal) */
--space-md:   16px;   /* Nav pill padding / icon offsets */
--space-lg:   24px;   /* Internal grid gutters */
--space-xl:   40px;   /* Section gaps */
--space-2xl:  64px+;  /* Editorial whitespace & asymmetric margins */

/* -----------------------------------------------------------------------------
 * 7. BORDERS & GRAPHIC DIVIDERS
 * -------------------------------------------------------------------------- */
--border-hairline:    1px solid var(--color-stroke-subtle); /* Outlined pill tabs & nav wrappers */
--border-dark:        1px solid var(--color-stroke-dark);   /* Active pill filters & button frames */
--grid-split-divider: 1px solid #ECECEC;                   /* Modular section separators */

Graphic Typographic Dividers:
- Triple Forward Slash: "///" rendered in light weight for rhythmic separation
- Superscript Accent:   "*" rendered in Brand Orange (#FF4800) as a visual anchor

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
- Stroke Weight: 1.25px – 1.5px (Hairline/Linear)
- Style: Geometric, minimalist, monoline
- Enclosure: Always hosted inside circular (36px/44px) or pill-shaped containers
- Core Glyphs:
  • Navigation: ← / → (Thin monoline arrows inside circular pills)
  • Action Trigger: ↗ (Diagonal external arrow in circular button)
  • Utility: Shopping tote outline, micro +, numeric fractional indicators (1/3)

/* -----------------------------------------------------------------------------
 * 9. COMPONENT ARCHETYPES & INTERACTION RULES
 * -------------------------------------------------------------------------- */
- Capsule Pill: Transparent or White background + 1px subtle gray stroke + black text.
  • Hover: 1px dark stroke border transition (#111111) + scale(1.02) micro-spring transform (150ms ease-out).
  • Active: Background fills with #FF4800, border transparent, text #FFFFFF.
- Accent CTA Button: Circular or pill container filled with #FF4800 containing white text/icon.
  • Hover: Background #E03E00, icon translates 2px on 45° axis (translate(2px, -2px)).
- Editorial Split Panels: Stark 2-column layout (Pure White studio left, Jet Pitch Black right).

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO generic purple neon or violet accents on dark backgrounds.
- NO soft multi-layered drop shadows on standard UI cards or buttons.
- NO 12px – 24px rounded card corners (cards must remain strictly 0px sharp).
- NO bloated gradient text fills across headline keywords.
- NO cluttered dashboard widgets or unrelated bento icon spam.
- NO headline biscuit pills with pulsing dots.
================================================================================`
  },
  {
    id: "TILE-023",
    slug: "industrial-acid-neo-grunge",
    name: "Industrial Acid // Neo-Grunge",
    vibe: "Acid Industrialism • Neo-Grunge Glitch • Redaction Tape • 8-Bit Checkerboards • High-Voltage Brutalism",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Syne",
      sans: "Space Grotesk",
      mono: "Space Mono"
    },
    palette: [
      { name: "Void Base", hex: "#080808" },
      { name: "Surface Panel", hex: "#121212" },
      { name: "Neon Accent", hex: "#FF2A85" },
      { name: "Hot Accent", hex: "#E60067" },
      { name: "Pure Ink Text", hex: "#FFFFFF" },
      { name: "Muted Text", hex: "#8F8F8F" },
      { name: "Subtle Border", hex: "#242424" }
    ],
    description: "Industrial Acid // Neo-Grunge: High-voltage underground brutalist design system combining pitch-black void canvases (#080808), electric neon magenta (#FF2A85), dense redaction tape blocks, distorted glitch typography, 8-bit checkerboard pixel dividers, zero-radius geometry, and 0ms instant 1-to-1 inversion hover physics.",
    markdownSpec: `================================================================================
                    STYLE TILE // SPECIFICATION MATRIX
                   THEME: INDUSTRIAL ACID / NEO-GRUNGE
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Industrial Acid / Neo-Grunge is a high-voltage brutalist design language engineered 
for underground audio engines, counter-culture subversion, and uncompromising digital 
hardware interfaces. It pairs an absolute pitch-black void (#080808) with high-octane 
electric neon magenta (#FF2A85), dense redaction tape blocks, distorted glitch typography, 
8-bit checkerboard pixel dividers, zero-radius geometry, and 0ms instant 1-to-1 inversion hover physics.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE TOKENS
 * -------------------------------------------------------------------------- */
:root {
  /* Canvas & Base Surfaces */
  --color-bg-base:              #080808; /* Primary canvas & void backdrops */
  --color-bg-surface:           #121212; /* Card containers & sub-modules */
  --color-bg-surface-alt:       #181818; /* Secondary panels, wells, sidebars */
  --color-bg-surface-elevated:  #202020; /* High-contrast module layers */

  /* Signature Electric Accents */
  --color-accent-neon:          #FF2A85; /* Primary electric highlight & duotone tint */
  --color-accent-hot:           #E60067; /* Pressed states, dense tape fills */
  --color-tape-fill:            #FF2A85; /* Solid high-contrast text blocks */

  /* Inks & Typography */
  --color-text-primary:         #FFFFFF; /* High-legibility technical text */
  --color-text-muted:           #8F8F8F; /* Metadata, footnotes, labels */
  --color-text-inverted:        #080808; /* Contrast ink on neon tape fills */

  /* Borders & Gridlines */
  --color-border-subtle:        #242424; /* Structural gridlines & framing */
  --color-border-accent:        #FF2A85; /* Active states / focal cards */

  /* Semantic Status Signals */
  --status-success:             #00FF66; /* Acid terminal green */
  --status-warning:             #FFE600; /* Hazard yellow */
  --status-danger:              #FF2A85; /* High-voltage neon magenta */
  --status-info:                #00F0FF; /* Electric cyan */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display: "Syne", "Rubik Glitch", "Barlow Condensed", sans-serif;
--font-glitch:  "Rubik Glitch", "Syne", sans-serif;
--font-header:  "Barlow Condensed", "Syne", sans-serif;
--font-mono:    "Space Mono", "VT323", "Courier Prime", monospace;
--font-sans:    "Space Grotesk", "Inter", -apple-system, sans-serif;

/* Type Scale Hierarchy */
--text-display:       4.0rem – 6.0rem / 0.90 var(--font-display); /* Weight: 800-900 | Letter-spacing: -0.03em | UPPERCASE */
--text-section-head:  1.75rem – 2.5rem / 1.10 var(--font-header);  /* Weight: 700-800 | Letter-spacing: +0.05em | UPPERCASE */
--text-tape-label:    1.125rem – 1.5rem / 1.00 var(--font-header);  /* Weight: 900 Black | Letter-spacing: +0.02em | UPPERCASE */
--text-body:          0.9375rem – 1.0rem / 1.50 var(--font-sans);   /* Weight: 400 | Letter-spacing: Normal | Sentence */
--text-body-sm:       0.875rem / 1.45 var(--font-sans);             /* Weight: 400 | Letter-spacing: Normal */
--text-meta-mono:     0.75rem – 0.8125rem / 1.40 var(--font-mono);  /* Weight: 500 Med | Letter-spacing: +0.12em | UPPERCASE */

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-none:        0px; /* All cards, interactive buttons, modal frames, inputs */
--radius-tape:        0px; /* Blocky redaction tape backgrounds & imagery */
* Strict Brutalist Rule: Complete absence of rounded corners (0px universally).

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
 * -------------------------------------------------------------------------- */
Level 0 (Canvas):   background: #080808; Pitch-black void layer
Level 1 (Textures): mix-blend-mode: screen; opacity: 0.18 Duotone grain / dither noise
Level 2 (Panels):   border: 1px solid var(--color-border-subtle); Zero-blur flat graphic depth
Level 3 (Pop/Hero): box-shadow: 4px 4px 0px #FF2A85; Hard offset brutalist shadow
Overlays:           filter: grayscale(100%) contrast(180%); mix-blend-mode: screen (#FF2A85 base) High-contrast bitmapped two-tone photo threshold

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (4px GRID)
 * -------------------------------------------------------------------------- */
--space-2xs:  4px;   /* Tight metadata tags, badge padding */
--space-xs:   8px;   /* Inline tag gaps, icon-to-text spacing */
--space-sm:  12px;   /* Tape label internal padding */
--space-md:  16px;   /* Standard cell padding, field gaps */
--space-lg:  24px;   /* Component margins, structural gutters */
--space-xl:  48px;   /* Section breaks, layout spacing */
--space-2xl: 80px;   /* Hero viewport margins */

/* -----------------------------------------------------------------------------
 * 7. BORDERS & PATTERN DIVIDERS
 * -------------------------------------------------------------------------- */
--border-hairline:    1px solid var(--color-border-subtle); /* #242424 Wireframe matrix */
--border-accent:      1px solid var(--color-accent-neon);   /* #FF2A85 Active states / focal cards */
--border-thick:       2px solid var(--color-accent-neon);
Pattern Dividers:     8px checkerboard pixel stripe (8-bit alternating neon #FF2A85 / black #080808 tiles)
Redaction Tape:       Solid fill blocks (#FF2A85) wrapped tightly around text elements

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE & KEY MOTIFS
 * -------------------------------------------------------------------------- */
- Aesthetic Style: Pixelated 8-bit glyphs, alchemical/runic markers, industrial vectors
- Checkerboard Micro-Grids (2x4, 3x3 pixel block matrices)
- Distorted Crosshairs & Reticles (+, [ + ], ✕, [ ✕ ])
- Directional Technical Arrows (->, ↳, ■, ➔, ▲, ▼)
- Solid Geometric Glyphs (Diamond ◆, Solid Square ■, Slash //, Triple Bar ≡)
- Stroke Weight: 1.5px hard geometric or raw 1-bit pixel scale

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
- Default: Black canvas / muted border / Neon typography & tape accents
- Hover: Instant 1-to-1 Color Inversion (0ms / step-end transition)
  • Background: Inverts from #080808 -> #FF2A85
  • Typography: Inverts from #FF2A85 / #FFFFFF -> #080808
- Active / Press: Transform: translate(2px, 2px); hard shadow collapses to 0px (or 2px 2px).
- Focus (Keyboard): 2px solid #FFFFFF with 2px offset; high-contrast accessibility outline.
- Image Hover: CSS Filter Shift: Duotone Neon -> High-Contrast Inverted Glitch Flash.

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO rounded corners anywhere (0px strictly enforced).
- NO soft blur drop shadows or ambient glow halos.
- NO pastel or low-contrast washed-out tones.
- NO slow easing curves (interactions must be instant 0ms or snap snappy).
- NO generic corporate SaaS illustration fluff or happy vector characters.
- NO bloated gradient text fills across headline keywords.
================================================================================`
  },
  {
    id: "TILE-024",
    slug: "nordic-botanical-tech",
    name: "Nordic Botanical Tech",
    vibe: "Deep Alpine Pine • Warm Linen • Acid Chartreuse • Asymmetric Geometry • Phyto-Genomic Telemetry",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Deep Alpine Pine", hex: "#0F3B32" },
      { name: "Muted Evergreen", hex: "#164E43" },
      { name: "Warm Linen / Ecru", hex: "#F8F3E8" },
      { name: "Midnight Pine", hex: "#0B2B24" },
      { name: "Acid Chartreuse", hex: "#D4E825" },
      { name: "Desaturated Sage", hex: "#74A99C" },
      { name: "Pitch Onyx", hex: "#111614" }
    ],
    description: "Nordic Botanical Tech: A high-contrast, editorial aesthetic pairing deep organic alpine pine (#0F3B32) and warm linen cards (#F8F3E8) with high-voltage acid chartreuse accents (#D4E825), asymmetric geometric surface layouts (28px 28px 0px 28px), 12-point scalloped seal badges, and precision bio-canopy telemetry.",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE // "NORDIC BOTANICAL TECH" (TILE-024)
  A high-contrast, editorial aesthetic pairing deep organic tones with 
  hyper-modern acid accents and asymmetric geometric surface layouts.
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Nordic Botanical Tech is a high-contrast, editorial design language uniting the 
pristine serenity of sub-arctic evergreen flora with high-voltage acid chartreuse 
telemetry and asymmetric geometric surface architecture. Developed for sustainable 
luxury, phyto-biotech telemetry, precision ecological instrumentation, and modern 
canopy science platforms.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Backgrounds */
  --color-canvas-base:       #0F3B32; /* Deep Alpine Pine (Primary Dark Surface) */
  --color-canvas-subtle:     #164E43; /* Muted Evergreen (Depth / Container base) */
  --color-surface-warm:      #F8F3E8; /* Warm Linen / Ecru (High-contrast Card) */
  --color-surface-dark:      #0B2B24; /* Midnight Pine (Recessed areas) */

  /* Signature Accents */
  --color-accent-electric:   #D4E825; /* Acid Chartreuse / High-voltage Highlight */
  --color-accent-mint:       #74A99C; /* Desaturated Sage (Secondary indicator) */

  /* Inks & Typography */
  --color-text-on-dark:      #FFFFFF; /* Pure White (High-emphasis Dark Mode) */
  --color-text-on-dark-sub:  #A4C3BA; /* Sage Gray (Medium-emphasis Dark Mode) */
  --color-text-on-light:     #0F3830; /* Forest Ink (High-emphasis Light Surface) */
  --color-text-on-light-sub: #5C7871; /* Olive Smoke (Medium-emphasis Light) */

  /* Special Seals */
  --color-badge-black:       #111614; /* Pitch Onyx (Floating Starburst Badges) */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
Primary Font Family:   "Plus Jakarta Sans", "Satoshi", system-ui, sans-serif
Secondary / Mono:      "JetBrains Mono", monospace (Micro-specs & Metrics)

[Type Hierarchy]
* Hero Display:        font-size: clamp(3.25rem, 6vw, 5.5rem) | weight: 800
                       line-height: 0.96                      | tracking: -0.035em
* Display Stat Lg:     font-size: 3.5rem                      | weight: 800
                       line-height: 1.00                      | tracking: -0.03em
* Section Title / H2:  font-size: 2.0rem                      | weight: 700
                       line-height: 1.15                      | tracking: -0.02em
* Subheading / H3:     font-size: 1.25rem                     | weight: 600
                       line-height: 1.30                      | tracking: -0.01em
* Body Text:           font-size: 0.95rem                     | weight: 400
                       line-height: 1.55                      | tracking: 0.00em
* Button / Nav Action: font-size: 0.875rem                    | weight: 600
                       line-height: 1.00                      | tracking: 0.01em
* Micro / Metadata:    font-size: 0.75rem                     | weight: 500
                       line-height: 1.40                      | tracking: 0.02em

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-pill:         9999px;              /* CTA buttons, pills, search bars */
--radius-circle:       50%;                 /* Floating media triggers & icons */
--radius-surface-lg:   28px;                /* Floating high-contrast cards */
--radius-surface-md:   16px;                /* Inner modules, small media slots */
--radius-asymmetric:   28px 28px 0px 28px;  /* Stylized structural anchor cards */
--radius-sharp:        0px;                 /* Pixel-grid accents & mosaic cuts */
--shape-badge-badge:   polygon(scalloped 12-point starburst / organic seal)

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
 * -------------------------------------------------------------------------- */
[Z-Index Architecture]
* Base Plane (z-0):    Deep alpine green canvas with flat lighting
* Structural (z-10):   Solid flat cards (Warm Linen & Acid Yellow)
* Overlay Cut (z-20):  Extruded subjects breaking boundary boxes (3D cutouts)
* Interaction (z-30):  Floating pill controls, play heads, and dynamic badges

[Shadow System]
--shadow-glow-accent:  0 12px 32px -8px rgba(212, 232, 37, 0.35);
--shadow-card-ambient: 0 20px 48px -12px rgba(0, 0, 0, 0.35);
--shadow-pill-float:   0 8px 20px -4px rgba(0, 0, 0, 0.20);
--shadow-inset-bevel:  inset 0 1px 1px rgba(255, 255, 255, 0.15);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE
 * -------------------------------------------------------------------------- */
Base Multiplier: 4px | Core Scale: 8pt Grid

--space-xxs:           4px;
--space-xs:            8px;
--space-sm:            16px;
--space-md:            24px;
--space-lg:            32px;
--space-xl:            48px;
--space-2xl:           64px;
--space-3xl:           96px;

[Compositional Rules]
* Card Inner Padding:  28px to 36px (Generous breathing room)
* Grid Gap:            32px horizontal / 40px vertical
* Overhang / Bleed:    -24px to -48px (Hero assets break past container bounds)

/* -----------------------------------------------------------------------------
 * 7. BORDERS & ACCENT DIVIDERS
 * -------------------------------------------------------------------------- */
--border-subtle-dark:  1px solid rgba(255, 255, 255, 0.12);
--border-hairline:     1px solid rgba(15, 56, 48, 0.15);
--border-active-pill:  2px solid rgba(255, 255, 255, 0.90);

[Graphic Accent Motifs]
* Pixel Mosaic Motif:  12px geometric step-down grid tiles placed in corner docks
* Underscore Accents:  3px high by 16px wide pill bars beneath active nav tabs

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
* Style:               Minimal, geometric, neo-lineal
* Stroke Weight:       1.75px uniform outline with rounded joins and terminals
* Sizing Scale:        16px (Inline/Action), 24px (Navigation), 40px (Hero trigger)
* Containers:          Inverted circular buttons (--color-surface-warm fill with
                       centered solid geometric glyphs)
* Play Indicators:     Crisp solid triangle glyph enclosed in floating 50% circle

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
--transition-snappy:   180ms cubic-bezier(0.16, 1, 0.3, 1);
--transition-smooth:   320ms cubic-bezier(0.25, 0.8, 0.25, 1);

[Interactive States]
* Pill Button (Default): 
  - Background: #FFFFFF | Color: #0F3830 | Transform: translateY(0)
* Pill Button (Hover):   
  - Background: #D4E825 | Color: #0B2B24 | Transform: translateY(-2px)
  - Box Shadow: var(--shadow-glow-accent)
* Floating Media Trigger (Hover):
  - Scale: 1.08 | Opacity: 1.0 | Transition: var(--transition-snappy)
* Card Image Cutouts (Scroll/Hover):
  - Subtle parallax micro-tilt (±3deg 3D perspective shift)
* Active Nav Indicator:
  - Slide-in underline bar in --color-accent-electric with subtle glow

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO generic purple neon or violet accents on dark backgrounds.
- NO cluttered dashboard widget spam without clear editorial whitespace.
- NO unanchored cards without precise radii or borders.
- NO bloated gradient text fills across headline keywords.
- NO headline biscuit pills with pulsing dots right above the main headline.
- NO 3D cartoon/vector illustrations (prefer authentic organic botanical vectors).
================================================================================`
  },
  {
    id: "TILE-025",
    slug: "organic-luxe",
    name: "Organic Luxe",
    vibe: "Deep Roasted Cacao • Soft Oat Milk • Caramel Gold • Molten Fluid Geometry • Artisanal Confectionery",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Bebas Neue",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Deep Espresso Cacao", hex: "#2B1810" },
      { name: "Bittersweet Chocolate", hex: "#3D2318" },
      { name: "Soft Oat Milk / Bone", hex: "#F8F5F0" },
      { name: "Cloud Mist Slate", hex: "#E6ECF0" },
      { name: "Caramel Gold", hex: "#D9822B" },
      { name: "Warm Ochre", hex: "#B8621B" },
      { name: "Metallic Gold Leaf", hex: "#ECC880" },
      { name: "Pure Floating White", hex: "#FFFFFF" }
    ],
    description: "Organic Luxe: An opulent, sensory-driven design system uniting deep roasted cacao (#2B1810) and soft oat milk (#F8F5F0) surfaces with liquid caramel-gold accents (#D9822B), fluid molten bezier contours, condensed monolithic display typography ('Bebas Neue'), and handwritten expressive accents ('Caveat Brush').",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE // "ORGANIC LUXE" (TILE-025)
  A decadent, tactile design system uniting rich roasted cacao and soft oat milk 
  surfaces with liquid caramel-gold accents, organic fluid contours, and luxury typography.
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Organic Luxe is an opulent, sensory-driven design system engineered for artisanal 
gastronomy, luxury botanicals, single-origin cacao wellness, and sustainable prestige goods. 
It balances heavy espresso and warm bittersweet chocolate surfaces with velvety oat-milk 
canvases, fluid molten caramel-gold interactions, handwritten organic script annotations, 
and condensed monolithic display headlines.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Brand & Surfaces */
  --surface-dark-primary:     #2B1810; /* Deep Espresso / Rich Roasted Cacao */
  --surface-dark-secondary:   #3D2318; /* Warm Bittersweet Chocolate */
  --surface-light-primary:    #F8F5F0; /* Soft Oat Milk / Warm Bone */
  --surface-light-cool:       #E6ECF0; /* Cloud Mist / Slate Accent Canvas */
  --surface-overlay-card:     #FFFFFF; /* Pure Floating White */

  /* Accents & Energetics */
  --accent-caramel-gold:      #D9822B; /* Roasted Toffee / Dynamic Accent */
  --accent-warm-ochre:        #B8621B; /* Deep Amber / Interactive Active */
  --accent-metallic-foil:     linear-gradient(135deg, #ECC880 0%, #A86B24 50%, #F5DEAA 100%);

  /* Content & Readability */
  --text-light-high:          #FFFFFF; /* Primary text on dark surfaces */
  --text-light-muted:         #D1C5BD; /* Secondary metadata on dark */
  --text-dark-high:           #1F120B; /* Primary typography on light */
  --text-dark-muted:          #786D66; /* Secondary labels / nutritional specs */
  --border-subtle-dark:       rgba(255, 255, 255, 0.18);
  --border-subtle-light:      rgba(43, 24, 16, 0.15);

  /* Status Tokens */
  --status-success:           #4A7C59; /* Botanical Herb */
  --status-warning:           #D9822B; /* Warm Caramel */
  --status-danger:            #A8382B; /* Roasted Hibiscus */
  --status-info:              #5C788D; /* Slate Mist */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display-condensed:     'Bebas Neue', 'Druk Wide', sans-serif;
--font-accent-hand:           'Caveat Brush', 'Permanent Marker', cursive;
--font-body-ui:               'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;

/* Type Hierarchy Tokens */
--type-display-mega:          72px / 0.95 / 0.04em / All-Caps (Bebas Neue);
--type-display-section:       44px / 1.05 / 0.02em / All-Caps (Bebas Neue);
--type-accent-hand:           28px / 1.10 / 0.00em / Organic Tilt -4deg (Caveat Brush);
--type-stat-numeric:          36px / 1.00 / -0.01em / Heavy Condensed (Bebas Neue);
--type-data-label:            11px / 1.40 / 0.12em / Bold Monospaced Uppercase (Plus Jakarta Sans);
--type-body-regular:          14px / 1.55 / -0.01em / Regular 400 (Plus Jakarta Sans);
--type-button-label:          13px / 1.00 / 0.08em / Bold Uppercase (Plus Jakarta Sans);

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-pill:                9999px;              /* Navigation chips, Action buttons, Badges */
--radius-card-sm:             12px;                /* Micro-containers, Steppers, Modals */
--radius-card-lg:             24px;                /* Floating product plates, Info panels */
--radius-diagram-node:        100px;               /* Interactive cluster badges & pills */

/* Organic Contours */
--mask-organic-drip:          path("M0,0 C150,90 350,-40 500,60 C650,160 900,20 1200,80 L1200,0 Z");
--divider-fluid-wave:         Continuous 2-phase S-curve separating espresso and oat-milk zones

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
 * -------------------------------------------------------------------------- */
/* Spatial Layer Stacking */
Layer 0 (Base Canvas)   : Solid or dual-tone organic split background
Layer 1 (Surface UI)    : Flat pill containers, data tables, line vectors
Layer 2 (Elevated UI)   : Floating navigation bars, active drop-downs
Layer 3 (Hero Heroics)  : Suspended packshots & dynamic debris

/* Shadow Profiles */
--shadow-card-subtle:         0px 4px 16px rgba(43, 24, 16, 0.06);
--shadow-floating-asset:      0px 24px 48px -12px rgba(35, 18, 11, 0.45),
                              0px 8px 16px -4px rgba(35, 18, 11, 0.25);
--shadow-action-pressed:      0px 2px 6px rgba(43, 24, 16, 0.20);
--text-shadow-metallic:       0px 1px 2px rgba(0, 0, 0, 0.35);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (4px / 8px Grid Engine)
 * -------------------------------------------------------------------------- */
--space-xxs: 4px;   --space-sm: 12px;  --space-xl: 32px;  --space-3xl: 64px;
--space-xs:  8px;   --space-md: 16px;  --space-2xl: 48px; --space-4xl: 96px;

Content Max-Width       : 1240px
Mobile Padding Inset    : 20px
Desktop Section Gaps    : 80px – 120px
Component Stack Gap     : 8px (Tight data), 24px (Cards), 40px (Hero groups)

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-hairline-table  : 1px solid rgba(43, 24, 16, 0.12); /* Clean data row lines */
--border-interactive-pill: 1px solid rgba(255, 255, 255, 0.35);
--border-diagram-link   : 1px solid #786D66 with 4px circular junction nodes;
--divider-fluid-edge    : Smooth vector masks blending dark espresso into warm cream;

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
* Geometry              : Minimalist, clean geometric wireframe
* Stroke Weight         : 1.5px consistent stroke (Round cap, Round join)
* Grid Canvas           : 20x20px viewport with 2px internal safe padding
* Optical Alignment     : Center-aligned within pill/circle badges
* Rating Glyphs         : Filled 5-point star micro-cluster (10px size)
* Dynamic Accents       : Asymmetric splatter dots, splash arcs, fluid drop decals

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
--easing-spring         : cubic-bezier(0.34, 1.56, 0.64, 1);
--transition-speed-fast : 220ms (Hover states);
--transition-speed-slow : 450ms (Layer reveals);

* Primary Button (Drip)  : Normal: Caramel-Gold fill -> Hover: translateY(-2px) + Expand Drop
* Secondary Button (Pill): Normal: Transparent + Border -> Hover: Invert fill to White/Dark
* Interactive Nodes      : Normal: Neutral outline -> Hover: Gold fill + Scale(1.08)
* Hero Asset Parallax    : Mouse-aware inertia tilt (-3deg to +3deg) with floating debris

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO purple or neon violet accents on dark cacao backgrounds.
- NO cold corporate SaaS gradients or sterile grey dashboards.
- NO untracked giant headers or generic sans-serif placeholders.
- NO rigid 90-degree square boxes everywhere without organic curve balancing.
- NO generic stock 3D cartoon icons or bloated icon-stuffed bento grids.
- NO headline biscuit pills with pulsing dots right above the main headline.
================================================================================`
  },
  {
    id: "TILE-026",
    slug: "crimson-radiance",
    name: "Crimson Radiance / Lumina Tech",
    vibe: "Ultra-Deep Obsidian Canvas • Kinetic Crimson & Solar Orange Glows • Specular Glassmorphism • Multi-Strand Telemetry Waveforms",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Syne",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Obsidian Canvas", hex: "#080202" },
      { name: "Kinetic Crimson", hex: "#B50D00" },
      { name: "Solar Orange", hex: "#FF6B00" },
      { name: "Electric Amber", hex: "#FFAE00" },
      { name: "Pure White CTA", hex: "#FFFFFF" },
      { name: "Luminous Accent", hex: "#FF4D00" },
      { name: "Text Gold", hex: "#FFB800" },
      { name: "Emerald Lock", hex: "#00E599" }
    ],
    description: "Crimson Radiance / Lumina Tech: A hyper-saturated, luminescent dark design system uniting ultra-deep obsidian black (#080202) with kinetic red (#B50D00), solar orange (#FF6B00), and electric amber glows (#FFAE00), multi-tiered glass surfaces, and multi-strand telemetry waveforms.",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE // "CRIMSON RADIANCE / LUMINA TECH" (TILE-026)
  Aesthetic: Hyper-saturated editorial glassmorphism & luminescent dark UI
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Crimson Radiance / Lumina Tech is a hyper-saturated, luminescent dark design system
engineered for telemetry synthesizers, high-frequency kinetic media, photonics computing,
and futuristic editorial technology platforms. It pairs an ultra-deep obsidian black canvas
(#080202) with kinetic crimson (#B50D00), solar orange (#FF6B00), and electric amber (#FFAE00)
atmospheric underglows, hyper-refined glassmorphism, monoline iconography with 3x3 dot matrix
accents, and heavy tracking typography.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Background & Canvas */
  --canvas-base:             #080202; /* Ultra-deep obsidian black */
  --canvas-glow-crimson:     #B50D00; /* Deep kinetic red */
  --canvas-glow-amber:       #FF6B00; /* Vibrant solar orange */
  --canvas-glow-gold:        #FFAE00; /* Bright electric amber */

  /* Glass Surfaces */
  --surface-glass-low:       rgba(255, 255, 255, 0.04); /* Subtle floating panels */
  --surface-glass-med:       rgba(255, 255, 255, 0.08); /* Active interactive cards */
  --surface-glass-high:      rgba(255, 255, 255, 0.14); /* Hover states / Nav pills */
  --surface-dark-tint:       rgba(18, 5, 4, 0.55);      /* Grounded data modules */

  /* Typography & Foreground */
  --text-primary:            #FFFFFF; /* 100% pure white */
  --text-secondary:          rgba(255, 255, 255, 0.72); /* Muted body copy */
  --text-tertiary:           rgba(255, 255, 255, 0.44); /* Metadata, captions */
  --text-accent-gold:        #FFB800; /* Data callouts & indicators */

  /* Brand Accent & Accents */
  --accent-primary:          #FFFFFF; /* High-contrast solid action CTA */
  --accent-luminous:         #FF4D00; /* Energy lines / waveforms / glows */
  --accent-ring:             rgba(255, 255, 255, 0.85); /* Specular focus rings */

  /* Status Tokens */
  --status-success:          #00E599; /* Radiant Emerald */
  --status-warning:          #FFAE00; /* Solar Amber */
  --status-danger:           #FF2A1A; /* Laser Crimson */
  --status-info:             #FF6B00; /* Plasma Orange */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display:              "Syne", "Clash Display", "Plus Jakarta Sans", sans-serif;
--font-sans:                 "Plus Jakarta Sans", "Inter", -apple-system, sans-serif;
--font-mono:                 "JetBrains Mono", ui-monospace, monospace;

/* Scale & Hierarchy */
--type-display-mega:         font-size: 76px | line-height: 0.92 | tracking: -0.04em | weight: 700 | uppercase;
--type-heading-xl:           font-size: 28px | line-height: 1.15 | tracking: -0.02em | weight: 600;
--type-heading-sm:           font-size: 16px | line-height: 1.30 | tracking: -0.01em | weight: 600;
--type-body-regular:         font-size: 13px | line-height: 1.50 | tracking:  0.00em | weight: 400;
--type-caption-meta:         font-size: 11px | line-height: 1.40 | tracking: +0.02em | weight: 500;
--type-nav-pill:             font-size: 12px | line-height: 1.00 | tracking: +0.03em | weight: 500;

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-full:               9999px; /* Floating navbars, pill buttons, micro-badges */
--radius-xl:                 24px;   /* Main modular data cards, content containers */
--radius-lg:                 16px;   /* Nested sub-cards, status containers */
--radius-md:                 10px;   /* Input fields, embedded media windows */
--radius-circle:             50%;    /* Concentric play/trigger controls */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION, DEPTH & BLURS
 * -------------------------------------------------------------------------- */
/* Backdrop Filter Blurs */
--blur-subtle:               backdrop-filter: blur(8px) saturate(140%);
--blur-glass:                backdrop-filter: blur(24px) saturate(180%);
--blur-heavy:                backdrop-filter: blur(40px) saturate(200%);

/* Shadows & Specular Highlights */
--elevation-card:
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 0 20px 0 rgba(255, 255, 255, 0.03),
    0 24px 48px -12px rgba(0, 0, 0, 0.45);

--elevation-glow-cta:
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.6),
    0 0 35px 4px rgba(255, 110, 0, 0.45);

--elevation-play-disc:
  box-shadow:
    0 0 0 8px rgba(255, 255, 255, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.4),
    0 10px 30px rgba(0, 0, 0, 0.5);

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (8pt Base Grid)
 * -------------------------------------------------------------------------- */
--space-2xs: 4px;   --space-xs:  8px;   --space-sm: 12px;
--space-md:  16px;  --space-lg:  24px;  --space-xl: 32px;
--space-2xl: 48px;  --space-3xl: 64px;  --space-4xl: 96px;

/* Card Internal Padding */
--pad-compact:               12px 16px; /* Navbars, pill tags */
--pad-standard:              20px 24px; /* Data panels, metric widgets */
--pad-hero:                  48px 64px; /* Major responsive gutters */

/* -----------------------------------------------------------------------------
 * 7. BORDERS & STROKES
 * -------------------------------------------------------------------------- */
--border-glass-subtle:       1px solid rgba(255, 255, 255, 0.10);
--border-glass-focus:        1px solid rgba(255, 255, 255, 0.25);
--border-gradient-edge:      linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.02) 100%);
--divider-translucent:       1px solid rgba(255, 255, 255, 0.06);

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY & DATA VISUALIZATION LANGUAGE
 * -------------------------------------------------------------------------- */
- Stroke-width:              1.5px / Monoline
- Corner caps:               Round / Semi-sharp aesthetic
- Color:                     rgba(255, 255, 255, 0.85) default, #FF6B00 accent
- Micro-accents:             3x3 dot matrix grid patterns, diagonal link arrows (↗)
- Ambient Waveforms:         Multi-strand overlapping sine waves with gradient fills
- Glow Ratios:               Luminous scalar rings (40% to 100% opacity gradient arcs)
- Status Nodes:              Glowing pill badges containing centered micro-text

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & MOTION DYNAMICS
 * -------------------------------------------------------------------------- */
--transition-snap:           150ms cubic-bezier(0.4, 0.0, 0.2, 1);
--transition-smooth:         300ms cubic-bezier(0.16, 1, 0.3, 1);
--transition-elastic:        500ms cubic-bezier(0.34, 1.56, 0.64, 1);

- Primary Button Hover:
    scale: 1.02; filter: brightness(1.1); box-shadow: 0 0 25px rgba(255,255,255,0.4);
- Glass Card Hover:
    border-color: rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.10);
    transform: translateY(-2px);
- Play / Action Trigger Hover:
    concentric halo pulse expansion: scale(1.08) with 0.8s looping breathe.

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO generic purple on dark violet neon gradients.
- NO untracked massive headlines.
- NO flat textureless surfaces without specular inset highlights or saturated backdrop blurs.
- NO generic 0px brutalist sharp harsh blocks without glass refraction.
- NO icon-stuffed bento boxes or generic corporate stock illustrations.
- NO headline biscuit pills with pulsing dots right above the main headline.
================================================================================`
  },
  {
    id: "TILE-027",
    slug: "industrial-ghost-system",
    name: "Lab-01 / Industrial Ghost System",
    vibe: "Swiss Lab Metrology • Achromatic 90/10 Ratio • Ghost Blueprint Coordinate Frames • Tactile Floating Hardware Instruments",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Instrument Sans",
      sans: "Inter",
      mono: "Geist Mono"
    },
    palette: [
      { name: "Cool Lab Gray", hex: "#E8EBEF" },
      { name: "Secondary Wash", hex: "#F2F3F5" },
      { name: "Solid UI White", hex: "#FFFFFF" },
      { name: "Metallic Highlight", hex: "#DDE0E4" },
      { name: "Primary Ink", hex: "#0E0F10" },
      { name: "Secondary Ink", hex: "#7C8088" },
      { name: "Ghost Blueprint", hex: "#A9ADB4" }
    ],
    description: "Lab-01 / Industrial Ghost System: An ultra-refined achromatic design architecture synthesized from Swiss laboratory precision, future instrumentation telemetry, and soft brutalist geometry. Grounded in a cool lab gray canvas (#E8EBEF), ghost washes, hairline blueprint coordinate frames, and tactile floating brushed-aluminum hardware modules.",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE // "LAB-01 / INDUSTRIAL GHOST SYSTEM" (TILE-027)
  Aesthetic: Swiss Lab • Future Instrument • Soft Brutalism • Achromatic Ghost
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Lab-01 / Industrial Ghost System is an ultra-refined, achromatic design architecture
synthesized from Swiss laboratory instrumentation, future metrology consoles, and soft
brutalist geometry. Grounded in a cool lab gray canvas (#E8EBEF), secondary ghost washes,
hairline blueprint coordinate frames, and floating brushed-aluminum hardware modules, it
delivers extreme clarity and tactile precision. Contrast is generated purely through
scale, shadow, and negative space rather than saturated hue.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Backgrounds */
  --bg-canvas:              #E8EBEF; /* Main page, cool lab gray */
  --bg-wash:                #F2F3F5; /* Secondary wash, ghost blocks */
  --surface-0:              #FFFFFF; /* Solid UI, buttons, cards */
  --surface-1:              #DDE0E4; /* Metallic highlight */
  --surface-metal:          linear-gradient(180deg, #F6F7F8 0%, #C8CDD3 100%); /* Brushed aluminum */

  /* Inks & Typography */
  --ink-primary:            #0E0F10; /* Headlines, primary reading text (16:1) */
  --ink-secondary:          #7C8088; /* Nav, captions, inactive states */
  --ink-tertiary:           #A9ADB4; /* Ghost blueprint vector lines */
  --ink-inverted:           #FFFFFF; /* Inverted text on dark active states */

  /* Lines & Specular Glows */
  --line-hairline:          rgba(14, 15, 16, 0.10); /* Hairline coordinate grid */
  --line-strong:            rgba(14, 15, 16, 0.18); /* Structural borders */
  --accent-glow:            rgba(255, 255, 255, 0.90); /* Knob ring / focus halo */

  /* Status Tokens (Monochrome / High Contrast) */
  --status-active:          #0E0F10;
  --status-muted:           #7C8088;
  --status-blueprint:       #A9ADB4;
}

/* Palette Ratio: 90% Achromatic (grays + white + black) | 10% Material (brushed aluminum) */
/* No saturated color. Contrast comes from scale & shadow, not hue. */

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display:             "Instrument Sans", "Neue Haas Grotesk Display", "PP Neue Montreal", sans-serif;
--font-mono:                "Geist Mono", "Suisse Int'l Mono", monospace;
--font-sans:                "Inter", "Suisse Int'l", -apple-system, sans-serif;
--font-jp:                  "IBM Plex Sans JP", sans-serif;

/* Type Scale & Hierarchy */
--type-display-mega:        font-size: clamp(4.5rem, 9vw, 8rem) | line-height: 0.88 | tracking: -0.04em | weight: 800 | uppercase;
--type-display-hero:        font-size: clamp(3.0rem, 6vw, 5.5rem) | line-height: 0.90 | tracking: -0.04em | weight: 700 | uppercase;
--type-heading-xl:          font-size: 28px | line-height: 1.15 | tracking: -0.02em | weight: 700 | uppercase;
--type-heading-sm:          font-size: 16px | line-height: 1.30 | tracking: -0.01em | weight: 600;
--type-ui-mono:             font-size: 11px | line-height: 1.20 | tracking: +0.08em | weight: 500 | uppercase;
--type-body-regular:        font-size: 12px | line-height: 1.60 | tracking: +0.01em | weight: 400 | max-width: 32ch;
--type-secondary-jp:        font-size: 18px | line-height: 1.40 | tracking:  0.00em | weight: 400 | opacity: 0.8;

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--r-none:                   0px;    /* Hero headlines, blueprint frames - brutalist cut */
--r-xs:                     4px;    /* Small tags, TRY NOW / EXPLORE GEAR */
--r-sm:                     8px;    /* Inputs, secondary buttons */
--r-md:                     16px;   /* Product cards, image wells */
--r-lg:                     24px;   /* Large floating hardware container */
--r-pill:                   999px;  /* Shop Now, navigation pills (01, 05) */

/* Strict Rule: Hardware = r-lg, UI = r-xs, Navigation = r-pill. Never mix. */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
 * -------------------------------------------------------------------------- */
--layer-0:                  0 0 0 1px var(--line-hairline) inset; /* Ghost blueprint strokes */
--layer-1:                  0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
--layer-float:              0 20px 50px rgba(14,15,16,0.10), 0 2px 8px rgba(14,15,16,0.06);
--layer-float-soft:         0 40px 80px -20px rgba(14,15,16,0.18);
--glow-ring:                0 0 0 1px rgba(255,255,255,0.8), 0 0 24px rgba(255,255,255,0.6);

/* Depth Stack:
 * Background: ghost outline shapes (20% opacity, no shadow)
 * Mid: canvas + hairline grid
 * Fore: floating object with layer-float + glow-ring on active edge
 */

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (4px Base Grid)
 * -------------------------------------------------------------------------- */
Base: 4px | Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192
--space-page-gutter:        32px (desktop) / 16px (mobile);
--space-section:            96px;
--space-cluster:            24px;
--space-stack:              16px;

/* Layout Logic: Extreme air. Hero type bleeds left gutter, product floats right with 40% overlap. Negative space as a shape. */

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-hairline:          1px solid var(--line-hairline);
--border-blueprint:         1px dashed rgba(14, 15, 16, 0.12); /* Ghost guides */
--border-focus:             1px solid var(--ink-primary);
--divider-L:                L-shaped corner mark (12px x 12px, 1px stroke);

/* Optical anchors: Use L-corners, not full heavy boxes. Keep dividers low contrast. */

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
- Style:                    Dot-matrix + Minimal line
- Grid Logo:                3x3 dots, 4px dot, 3px gap, rounded 50%
- Stroke:                   1.25px, rounded cap, 90deg corners
- Arrows:                   ↗ (North-East) 11px, no circle, appears on hover
- Rule:                     Monochrome only. Never filled. Built from dots, lines, and tiny rectangles.

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
--ease-lab:                 cubic-bezier(0.16, 1, 0.3, 1); /* Smooth industrial */
--duration-fast:            150ms;
--duration-med:             350ms;
--duration-slow:            700ms; /* Floating product parallax */

- Button Hover:             surface-0 -> ink-primary, text inverts, ↗ shifts 2px up-right
- Product Hover:            lift 8px, shadow layer-float-soft, glow-ring intensity +20%
- Nav Link Hover:           opacity 0.4 -> 1.0 + underline hairline grows left -> right
- Focus State:              1px solid ink + 8px outer glow-ring, 2px offset
- Active / Pressed:         Scale 0.98, shadow collapses to layer-1
- Motion Principle:         Objects float slowly (700ms). UI controls snap instantly (150ms).

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO saturated colors or chromatic gradients (strictly 90% achromatic + 10% metal).
- NO purple on dark backgrounds or neon glow tropes.
- NO drop shadows with hard black edges or high-opacity blurs.
- NO rounded hero typography (must be strict brutalist condensed uppercase).
- NO mixing radii rules (Hardware = 24px, UI = 4px, Navigation = 999px).
- NO icon-stuffed bento boxes or generic stock 3D illustrations.
- NO headline biscuit pills with pulsing dots placed above the main headline.
================================================================================`
  },
  {
    id: "TILE-028",
    slug: "editorial-neo-humanist",
    name: "Editorial Neo-Humanist / Impact Refined",
    vibe: "Warm Oat Parchment • High-Impact Compressed Display • Vibrant Emerald Jade • Documentary Stacking • Subtle Tonal Shifts",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Bebas Neue",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Surface Canvas", hex: "#EFECE6" },
      { name: "Surface Raised", hex: "#E5E1D8" },
      { name: "Surface Card", hex: "#FFFFFF" },
      { name: "Surface Inverted", hex: "#121212" },
      { name: "Primary Ink", hex: "#121212" },
      { name: "Secondary Ink", hex: "#5C5851" },
      { name: "Emerald Jade", hex: "#2E9E6B" },
      { name: "Terracotta Accent", hex: "#E4633B" }
    ],
    description: "Editorial Neo-Humanist / Impact Refined: A high-craft editorial design architecture blending compressed, high-impact headline typography (Bebas Neue / Oswald) with warm oat parchment surfaces (#EFECE6), pure solid ink, and vibrant emerald jade accents (#2E9E6B). Flat editorial depth relying on subtle tonal shifts rather than heavy drop shadows, multi-image vertical stacking, and refined neo-humanist ergonomics.",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE // "EDITORIAL NEO-HUMANIST / IMPACT REFINED" (TILE-028)
  Aesthetic: Editorial Neo-Humanist • Impact Refined • Warm Oat Parchment • Emerald Jade
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Editorial Neo-Humanist / Impact Refined is a high-craft editorial design architecture
blending compressed, high-impact headline typography with warm oat parchment surfaces,
pure solid ink, and vibrant emerald jade accents. Built on subtle tonal shifts rather
than heavy drop shadows, it pairs documentary visual storytelling and multi-image
vertical stacking with refined neo-humanist interface ergonomics for premier publishing,
cultural institutes, architecture journals, and impact-driven venture platforms.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Backgrounds */
  --surface-canvas:         #EFECE6; /* Warm oat / parchment background */
  --surface-raised:         #E5E1D8; /* Muted secondary containers & pills */
  --surface-card:           #FFFFFF; /* Clean contrast cards (when needed) */
  --surface-inverted:       #121212; /* Deep charcoal / near-black */
  --surface-subtle:         #F7F5F0; /* Soft parchment highlight / well */

  /* Content & Typography */
  --text-primary:           #121212; /* High-contrast solid ink */
  --text-secondary:         #5C5851; /* Warm slate body & subtext */
  --text-muted:             #8C877E; /* Captions, subtle labels & disabled */
  --text-on-accent:         #FFFFFF; /* Pure white on saturated buttons */
  --text-inverted:          #FFFFFF; /* Inverted reading text */

  /* Brand & Accents */
  --accent-primary:         #2E9E6B; /* Vibrant emerald jade */
  --accent-primary-hover:   #258459; /* Deep emerald hover */
  --accent-primary-active:  #1D6B47; /* Darkened jade press */
  --accent-warm:            #E4633B; /* Terracotta / rating stars */
  --accent-primary-soft:    #EAF6F0; /* Soft emerald badge wash */
  --accent-warm-soft:       #FDF2EE; /* Soft terracotta badge wash */

  /* Status Tokens */
  --status-success:         #2E9E6B;
  --status-warning:         #E4633B;
  --status-info:            #2E7D9E;
  --status-danger:          #D9383A;
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display:             "Bebas Neue", "Oswald", "PP Right Grotesk", sans-serif;
--font-sans:                "Plus Jakarta Sans", "Inter", -apple-system, sans-serif;
--font-mono:                "JetBrains Mono", "SF Mono", monospace;

/* Type Scale & Styles */
• Display / Hero:
    Font Family:    var(--font-display)
    Weight:         700 (Bold / Compressed)
    Transform:      UPPERCASE
    Letter-Spacing: -0.01em
    Line-Height:    0.95 – 1.05
    Size:           clamp(2.75rem, 6vw, 4.5rem)

• Heading 1 / 2:
    Font Family:    var(--font-display)
    Weight:         700
    Transform:      UPPERCASE
    Letter-Spacing: -0.02em
    Line-Height:    1.15
    Size:           1.75rem – 2.5rem

• Heading 3 / Subhead:
    Font Family:    var(--font-sans)
    Weight:         600 (SemiBold)
    Letter-Spacing: -0.01em
    Line-Height:    1.30
    Size:           1.25rem

• Navigation & Buttons:
    Font Family:    var(--font-sans)
    Weight:         500 / 600 (Medium/SemiBold)
    Letter-Spacing: -0.01em
    Line-Height:    1.20
    Size:           0.9375rem (15px)

• Body / Paragraph:
    Font Family:    var(--font-sans)
    Weight:         400 (Regular)
    Letter-Spacing: -0.01em
    Line-Height:    1.55
    Size:           1.0rem (16px)

• Micro / Metadata:
    Font Family:    var(--font-sans)
    Weight:         500 (Medium)
    Letter-Spacing: +0.01em
    Line-Height:    1.40
    Size:           0.8125rem (13px)

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-xs:                4px;       /* Badges, micro tooltips */
--radius-sm:                8px;       /* Small inputs, tags */
--radius-md:                12px;      /* Standard buttons & interactive pills */
--radius-lg:                18px;      /* Media containers, feature cards */
--radius-xl:                24px;      /* Large modal sheets, hero image modules */
--radius-full:              9999px;    /* Circular avatars, icon chips */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
 * -------------------------------------------------------------------------- */
Design Principle: Flat editorial layout relying on subtle tonal shifts rather than heavy drop shadows.

--elevation-flat:           none;
--elevation-ambient:        0 2px 8px rgba(18, 18, 18, 0.04);
--elevation-floating:       0 8px 24px -4px rgba(18, 18, 18, 0.08);
--elevation-popover:        0 16px 32px -8px rgba(18, 18, 18, 0.12);
--layer-treatment:          Multi-image vertical stacking with 12px-16px gap;

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (4px / 8px Grid)
 * -------------------------------------------------------------------------- */
--space-2xs:                4px;
--space-xs:                 8px;
--space-sm:                 12px;
--space-md:                 16px;
--space-lg:                 24px;
--space-xl:                 32px;
--space-2xl:                48px;
--space-3xl:                64px;
--space-4xl:                96px;

Layout Density:
• Button Padding:           12px 22px (Primary & Secondary)
• Nav Link Spacing:         28px – 36px inline gap
• Hero Grid Split:          45% Text Content / 55% Media Showcase Stack

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-width-hairline:    1px;
--border-width-focus:       2px;
--border-subtle:            rgba(18, 18, 18, 0.08);    /* Inactive borders/dividers */
--border-interactive:       rgba(18, 18, 18, 0.22);    /* Secondary ghost buttons */
--border-avatar-overlap:    2px solid #EFECE6;         /* Overlapping avatar rings */

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
• Style:                    Minimal, geometric, monoline line art
• Stroke Weight:            1.75px – 2.0px
• Corner Caps:              Round / Smooth
• Key Metaphors:
    - Trailing arrows:      45° upward-right angled arrow (↗) for actions/links
    - Rating:               Solid filled 5-point stars with micro rounding (#E4633B)
    - Social / Trust:       Stacked circular avatars with clipping masks and overlap border

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
--transition-fast:          150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth:        240ms cubic-bezier(0.16, 1, 0.3, 1);

Interactive Component Specs:
• Primary Button:
    Background:             var(--accent-primary)
    Color:                  var(--text-on-accent)
    Border:                 none
    Hover State:            Transform translateY(-1px) + var(--accent-primary-hover)
    Active State:           Transform scale(0.98) + var(--accent-primary-active)

• Secondary / Ghost Button:
    Background:             transparent
    Color:                  var(--text-primary)
    Border:                 1px solid var(--border-interactive)
    Hover State:            Background rgba(18, 18, 18, 0.04) + border opacity 40%

• Navigation Links:
    Color:                  var(--text-primary)
    Hover State:            Color shift to var(--accent-primary) (Opacity 100% -> 80%)

• Image Tiles / Media:
    Tone:                   Documentary / high-contrast desaturated imagery
    Corners:                Smooth continuous rounded rectangle (var(--radius-lg))
    Hover Micro-action:     Scale transform 1.015 with overflow hidden

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO generic purple or neon gradients on dark backgrounds.
- NO heavy murky black drop shadows (rely on subtle tonal shifts and flat editorial borders).
- NO untracked compressed headlines (enforce exact letter-spacing: -0.01em to -0.02em).
- NO icon-stuffed bento boxes or generic stock 3D illustrations.
- NO headline biscuit pills with pulsing dots placed above the main headline.
- NO flat textureless surfaces without crisp surface contrast (#EFECE6 canvas vs #FFFFFF cards vs #E5E1D8 raised wells).
================================================================================`
  },
  {
    id: "TILE-029",
    slug: "vintage-modern-quirky-brutalism",
    name: "Vintage-Modern Editorial & Quirky Neo-Brutalism",
    vibe: "Warm Vanilla Newsprint • High-Energy Tangerine • Checkerboard Ribbons • Serrated Starbursts • 0px Razor Geometry • Playful Line Mascots",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Syne",
      sans: "Plus Jakarta Sans",
      mono: "Space Mono"
    },
    palette: [
      { name: "Base Canvas", hex: "#FAF7EE" },
      { name: "Grid Micro-Line", hex: "#EBE5D8" },
      { name: "Clean White", hex: "#FFFFFF" },
      { name: "Deep Ink", hex: "#240A18" },
      { name: "Muted Plum", hex: "#4A3542" },
      { name: "Action Tangerine", hex: "#FA6A1C" },
      { name: "Periwinkle Blue", hex: "#6B8CFE" },
      { name: "Forest Pine", hex: "#1C5443" }
    ],
    description: "Vintage-Modern Editorial & Quirky Neo-Brutalism: A tactile, high-personality editorial design architecture fusing newsprint cream papercraft (#FAF7EE) with razor-sharp 0px brutalist geometry, rich plum deep ink (#240A18), high-energy tangerine (#FA6A1C), periwinkle blue, two-tone forest pine checkerboard ribbons, and serrated starburst decals.",
    markdownSpec: `================================================================================
  DESIGN SYSTEM STYLE TILE // "VINTAGE-MODERN EDITORIAL & QUIRKY NEO-BRUTALISM" (TILE-029)
  Aesthetic: Vintage-Modern Editorial • Quirky Neo-Brutalism • Warm Vanilla • Tangerine • Deep Ink
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Vintage-Modern Editorial & Quirky Neo-Brutalism is a high-personality design language
that fuses the tactile warmth of newsprint editorial with the bold, unapologetic geometry
of Neo-Brutalism. Built on a warm vanilla canvas (#FAF7EE) etched with a faint 24px micro-grid,
it pairs rich dark blackcurrant ink (#240A18) with a vibrant decal spectrum of tangerine (#FA6A1C),
periwinkle blue (#6B8CFE), dusty petal pink (#F7ADC2), and forest pine (#1C5443).
With razor-sharp 0px structural geometry, hard zero-blur offset shadows, dynamic serrated starbursts,
checkerboard ribbon trims, and playful continuous-line character art, it delivers an eccentric,
memorable editorial atmosphere for modern publishing, creative agencies, cultural zines,
and avant-garde SaaS products.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Backgrounds */
  --bg-canvas:              #FAF7EE; /* Warm Vanilla / Newsprint Cream */
  --bg-grid-line:           #EBE5D8; /* Faint Graph Grid, 1px on 24px tile */
  --bg-surface-clean:       #FFFFFF; /* Pristine Paper for nav bars/callouts */
  --bg-surface-alt:         #F3EDE0; /* Recessed paper well / warm tint */
  --bg-surface-dark:        #240A18; /* Inverted containers / Deep Ink */

  /* Inks & Typography */
  --ink-primary:            #240A18; /* Deep Ink (Very Dark Blackcurrant / Rich Plum) */
  --ink-body:               #4A3542; /* Muted Plum for body paragraphs */
  --ink-subtle:             #7E6B77; /* Soft plum captions, placeholders */
  --ink-inverted:           #FAF7EE; /* Warm vanilla on dark surfaces */
  --ink-white:              #FFFFFF; /* Crisp white on saturated fills */

  /* Accent & Decal Spectrum */
  --accent-action:          #FA6A1C; /* Action Primary: Tangerine / High-Energy Orange */
  --accent-action-hover:    #240A18; /* Button hover state tone */
  --accent-periwinkle:      #6B8CFE; /* Electric Slate Sky */
  --accent-pink:            #F7ADC2; /* Soft Petal Pink / Dusty Carnation */
  --accent-pine:            #1C5443; /* Forest Pine / Deep Botanical Racing Green */
  --accent-amber:           #F28C28; /* Marigold Amber / Warm Ochre */

  /* Status Tokens */
  --status-success:         #1C5443; /* Forest Pine */
  --status-warning:         #F28C28; /* Marigold Amber */
  --status-danger:          #E63946; /* Crimson Red */
  --status-info:            #6B8CFE; /* Periwinkle Blue */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display:             "Syne", "Fraunces", "Clash Display", sans-serif;
--font-sans:                "Plus Jakarta Sans", "Inter", -apple-system, sans-serif;
--font-header:              "Space Grotesk", "Syne", "Cabinet Grotesk", sans-serif;
--font-mono:                "Space Mono", "JetBrains Mono", monospace;

/* Type Scale & Styles */
• Display / Hero Title:
    Font Family:    var(--font-display)
    Weight:         800 / 900 (ExtraBold / Black)
    Transform:      UPPERCASE
    Letter-Spacing: -0.03em
    Line-Height:    0.95 – 1.05
    Size:           clamp(3.0rem, 6.5vw, 5.5rem)

• Navigation & Action Headers:
    Font Family:    var(--font-header)
    Weight:         700 / 800 (Bold / Heavy)
    Transform:      UPPERCASE
    Letter-Spacing: +0.06em
    Line-Height:    1.0
    Size:           14px – 16px (0.875rem – 1.0rem)

• Section & Card Headings (H2 / H3):
    Font Family:    var(--font-display)
    Weight:         700 / 800
    Letter-Spacing: -0.02em
    Line-Height:    1.15
    Size:           1.5rem – 2.25rem

• Body & Narrative:
    Font Family:    var(--font-sans)
    Weight:         400 (Regular) / 500 (Medium)
    Letter-Spacing: 0em
    Line-Height:    1.55
    Size:           16px – 18px (1.0rem – 1.125rem)

• Badge & Sticker Labels:
    Font Family:    var(--font-mono)
    Weight:         700 (Ultra-Bold)
    Transform:      UPPERCASE
    Letter-Spacing: +0.08em
    Line-Height:    1.0
    Size:           10px – 12px (0.625rem – 0.75rem)

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-structural:        0px;       /* Strict, razor-sharp brutalist edges for all cards, containers, buttons */
--radius-badge-pill:        9999px;    /* Pill capsule for select sub-labels and chips */
--shape-starburst-12:       polygon(50% 0%, 63% 13%, 80% 6%, 85% 24%, 100% 29%, 94% 47%, 100% 65%, 85% 71%, 80% 89%, 63% 82%, 50% 95%, 37% 82%, 20% 89%, 15% 71%, 0% 65%, 6% 47%, 0% 29%, 15% 24%, 20% 6%, 37% 13%);
--shape-starburst-16:       polygon(50% 0%, 59% 10%, 71% 4%, 77% 16%, 90% 14%, 92% 27%, 100% 33%, 97% 46%, 100% 60%, 92% 67%, 90% 80%, 77% 78%, 71% 90%, 59% 84%, 50% 94%, 41% 84%, 29% 90%, 23% 78%, 10% 80%, 8% 67%, 0% 60%, 3% 46%, 0% 33%, 8% 27%, 10% 14%, 23% 16%, 29% 4%, 41% 10%);
--shape-scallop-stamp:      radial-gradient(circle at 10px 10px, transparent 4px, #FAF7EE 4.5px);

/* -----------------------------------------------------------------------------
 * 5. ELEVATION & DEPTH (SHADOWS & LAYERS)
 * Flat Physical Collage / 2D Z-Index Layering
 * -------------------------------------------------------------------------- */
--elevation-level-0:        #FAF7EE canvas with faint 24px micro-grid;
--elevation-level-1:        Flat layout containers & structural frames (0px radii);
--elevation-level-2:        Line-art illustrative characters overlapping type;
--elevation-level-3:        "Stickers" & "Decals" floating over headings (Rotated: -8deg, +4deg, +12deg);

/* Shadows */
--shadow-none:              none;
--shadow-hard-offset:       2px 2px 0px #240A18;
--shadow-hard-hover:        3px 3px 0px #240A18;
--shadow-hard-pressed:      0px 0px 0px #240A18;

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (8-Point Grid)
 * -------------------------------------------------------------------------- */
--space-8:                  8px;
--space-16:                 16px;
--space-24:                 24px;
--space-32:                 32px;
--space-48:                 48px;
--space-64:                 64px;
--space-96:                 96px;

--canvas-grid-size:         24px;      /* 24px × 24px faint grid mesh overlay */
--typography-tension:       Ultra-tight line heights paired with 64px+ negative margins;

/* -----------------------------------------------------------------------------
 * 7. BORDERS & DIVIDERS
 * -------------------------------------------------------------------------- */
--border-hairline:          1px solid #240A18; /* Crisp box segmenting on nav & modules */
--border-thick:             2px solid #240A18; /* High-contrast card & hero frames */
--border-heavy:             3px solid #240A18; /* Outer layout boundaries */
--ribbon-checkerboard:      conic-gradient(#1C5443 90deg, #FAF7EE 90deg 180deg, #1C5443 180deg 270deg, #FAF7EE 270deg); /* 16px high ribbon */
--illustration-stroke:      2.5px;             /* Uniform stroke for line illustrations */

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY & GRAPHIC ACCENTS
 * -------------------------------------------------------------------------- */
• Accent Motifs:            4-Point Retro Sparkles (✦), 8-Point Twinkle Stars (✴), Daisy/Floral Stamps (✿), Circular Rosettes, Die-Cut Stamp Perforations
• Navigation Glyphs:        Monoline Directional Vectors (→, ⌄, ↗, ←)
• Illustration Voice:       Playful continuous-line character art rendered in solid #240A18 stroke with minimal flat color blocking

/* -----------------------------------------------------------------------------
 * 9. COMPONENT ARCHETYPES & INTERACTION RULES
 * -------------------------------------------------------------------------- */
• Primary CTA Button:
    Background:             #FA6A1C (Tangerine)
    Color:                  #FFFFFF
    Border:                 1px solid #240A18
    Radius:                 0px (Strict brutalist edge)
    Typography:             var(--font-header), 800 weight, UPPERCASE, +0.06em
    Hover State:            Background: #240A18 | Color: #FAF7EE | Transform: translateX(4px)
    Active State:           Transform: scale(0.98)

• Interactive Stickers / Badges:
    Default:                Angled static rotation (transform: rotate(-6deg) or +4deg)
    Hover State:            Transform: rotate(0deg) scale(1.12) | Cursor: pointer | Transition: 200ms cubic-bezier(0.34, 1.56, 0.64, 1)

• Navigation Items:
    Default:                Transparent background | Color: #240A18
    Hover State:            Color: #FA6A1C with a 2px solid bottom underline tick

• Cards & Structural Panels:
    Default:                Background: #FFFFFF or #FAF7EE | Border: 1px solid #240A18 | Radius: 0px
    Hover State:            Box-Shadow: 3px 3px 0px #240A18 | Transform: translateY(-2px)

• Inputs & Form Controls:
    Default:                Background: #FFFFFF | Border: 1px solid #240A18 | Color: #240A18 | Radius: 0px | Font-Size: >= 16px
    Focus State:            Background: #FAF7EE | Outline: none | Box-Shadow: 2px 2px 0px #FA6A1C

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO rounded card corners on structural containers (strictly 0px brutalist edges).
- NO purple on dark themes or generic neon violet accents.
- NO Gaussian blurred drop shadows (strictly flat or hard 0-blur offset shadows).
- NO textureless digital flat surfaces without the warm vanilla #FAF7EE canvas & 24px micro-grid.
- NO headline biscuit pills with pulsing dots placed above the main headline.
- NO gradient text fills across headline keywords.
- NO icon-stuffed bento boxes with generic 3D glyphs.
================================================================================`
  },
  {
    id: "TILE-030",
    slug: "tactical-hyper-light",
    name: "Tactical Hyper-Light",
    vibe: "High-Performance Esport • Editorial Modernist • Aero Slate Canvas • Pulse Cyan Vector • 24px Media Frames • L4 Drag Controller",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Bebas Neue",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Aero Slate", hex: "#F1F5F9" },
      { name: "Ghost Slate", hex: "#E2E8F0" },
      { name: "Abyss Navy", hex: "#051226" },
      { name: "Deep Void", hex: "#0A1D38" },
      { name: "Pulse Cyan", hex: "#00F0FF" },
      { name: "Hyper Cyan", hex: "#33F3FF" },
      { name: "Slate Core", hex: "#334155" },
      { name: "Trust Green", hex: "#00B67A" },
      { name: "Review Amber", hex: "#FF5A00" }
    ],
    description: "Tactical Hyper-Light: A high-performance design architecture fusing the kinetic precision of esport telemetry HUDs with the compositional clarity of editorial modernism. Built on an Aero Slate canvas (#F1F5F9) with Abyss Navy structural anchors (#051226), electric Pulse Cyan vector ink (#00F0FF), 24px media cards, segmented compass rulers, and floating L4 draggable tokens.",
    markdownSpec: `================================================================================
  STYLE TILE // SPECIFICATION SYSTEM: "TACTICAL HYPER-LIGHT" (TILE-030)
  Aesthetic: High-Performance Esport / Editorial Modernist UI
================================================================================

/* -----------------------------------------------------------------------------
 * 1. DESIGN STATEMENT & VIBE SUMMARY
 * -------------------------------------------------------------------------- */
Tactical Hyper-Light is a high-performance design architecture that synthesizes the razor-sharp
telemetry and velocity of professional esport HUDs with the compositional restraint of editorial modernism.
Built upon an "Aero Slate" canvas (#F1F5F9) layered beneath deep "Abyss Navy" structural anchors (#051226),
the system deploys electric "Pulse Cyan" (#00F0FF) as high-energy kinetic vector ink.
With 24px rounded media frames, segmented compass rulers, floating L4 draggable tokens,
geometric micro-star ratings, and crisp L0–L5 depth stacking, it creates an elite, competitive,
and tactile digital atmosphere engineered for gaming platforms, telemetry dashboards, sports media,
and high-velocity developer tools.

/* -----------------------------------------------------------------------------
 * 2. COLOR ROLES & TOKEN PALETTE
 * -------------------------------------------------------------------------- */
:root {
  /* Surfaces & Substrates */
  --bg-canvas:              #F1F5F9; /* "Aero Slate" — Primary page background */
  --bg-ghost:               #E2E8F0; /* "Ghost Slate" — Oversized background watermarks */
  --bg-surface-dark:        #051226; /* "Abyss Navy" — Navigation bars, input backgrounds */
  --bg-surface-elevated:    #0A1D38; /* "Deep Void" — Card overlays, active wells */
  --bg-surface-white:       #FFFFFF; /* "Pure Light" — High-contrast container surface */
  --bg-surface-alt:         #E8EEF5; /* Recessed tactical wells & telemetry strips */

  /* Kinetic Brand Accents */
  --brand-electric:         #00F0FF; /* "Pulse Cyan" — Primary CTA, drag pills, reticles */
  --brand-electric-hover:   #33F3FF; /* "Hyper Cyan" — Hover & active glow states */
  --brand-electric-glow:    rgba(0, 240, 255, 0.45); /* Phosphor luminescent spread */

  /* Inks & Typography */
  --text-primary:           #051226; /* "Abyss Navy" — Hero headlines, high-emphasis text */
  --text-secondary:         #334155; /* "Slate Core" — Body copy, descriptions */
  --text-inverse:           #FFFFFF; /* "Pure White" — Text on dark containers & imagery */
  --text-muted:             #64748B; /* "Muted Steel" — Input placeholders, metadata */

  /* Semantic & Ratings */
  --semantic-success:       #00B67A; /* "Trust Green" — Verification badges & Trustpilot */
  --semantic-warning:       #FF5A00; /* "Review Amber" — Star ratings & review badges */
  --semantic-danger:        #FF2A55; /* "Apex Red" — Critical alerts & elimination flags */

  /* Tactical Borders & Dividers */
  --border-subtle:          rgba(5, 18, 38, 0.08); /* "Navy Hairline" — Structural dividers */
  --border-dark:            #051226;               /* Solid 1px flush container border */
  --border-electric:        rgba(0, 240, 255, 0.35);/* Cyan vector guide outline */
}

/* -----------------------------------------------------------------------------
 * 3. TYPOGRAPHY SYSTEM
 * -------------------------------------------------------------------------- */
/* Font Stacks */
--font-display:             "Bebas Neue", "Space Grotesk", sans-serif;
--font-sans:                "Plus Jakarta Sans", "Inter", -apple-system, sans-serif;
--font-hud:                 "Space Grotesk", "Plus Jakarta Sans", sans-serif;
--font-mono:                "JetBrains Mono", "Chivo Mono", monospace;

/* Type Scale Ladder */
• Display-XL:
    Font Family:            var(--font-display)
    Weight:                 900
    Size:                   clamp(4.0rem, 7.5vw, 6.0rem) (72px - 96px)
    Line-Height:            0.92
    Letter-Spacing:         +0.02em
    Transform:              UPPERCASE

• Display-MD:
    Font Family:            var(--font-display)
    Weight:                 800
    Size:                   clamp(2.25rem, 4.0vw, 3.0rem) (36px - 48px)
    Line-Height:            1.00
    Letter-Spacing:         +0.01em
    Transform:              UPPERCASE

• Nav Link:
    Font Family:            var(--font-hud)
    Weight:                 700
    Size:                   13px – 14px
    Line-Height:            1.20
    Letter-Spacing:         +0.06em
    Transform:              UPPERCASE

• Body-Lead:
    Font Family:            var(--font-sans)
    Weight:                 600
    Size:                   18px – 20px
    Line-Height:            1.40
    Letter-Spacing:         -0.01em
    Transform:              Sentence

• Body-Base:
    Font Family:            var(--font-sans)
    Weight:                 400
    Size:                   15px – 16px
    Line-Height:            1.50
    Letter-Spacing:         +0.00em
    Transform:              Sentence

• HUD / Ticks:
    Font Family:            var(--font-mono)
    Weight:                 700
    Size:                   10px – 11px
    Line-Height:            1.00
    Letter-Spacing:         +0.12em
    Transform:              UPPERCASE

• Button / Pill:
    Font Family:            var(--font-display)
    Weight:                 700
    Size:                   14px – 16px
    Line-Height:            1.00
    Letter-Spacing:         +0.08em
    Transform:              UPPERCASE

/* -----------------------------------------------------------------------------
 * 4. CORNER GEOMETRY (BORDER RADII)
 * -------------------------------------------------------------------------- */
--radius-xs:                2px;    /* Technical compass ticks, sub-pixel indicators */
--radius-sm:                4px;    /* Search button append, tag chips */
--radius-md:                8px;    /* Input containers, dropdown menus */
--radius-xl:                24px;   /* Primary media cards, showcase carousel frames */
--radius-pill:              9999px; /* Floating drag token, primary action buttons, badges */

/* -----------------------------------------------------------------------------
 * 5. ELEVATION, DEPTH & LAYERING
 * -------------------------------------------------------------------------- */
• L0 (Base Canvas):         z-0   Solid #F1F5F9 canvas.
• L1 (Watermark):           z-1   Oversized Display typography, repeated, 4% opacity navy (#051226).
• L2 (Content):             z-10  Standard layout elements, text blocks, inputs.
• L3 (Cards):               z-20  box-shadow: 0 16px 36px -12px rgba(5, 18, 38, 0.25);
                                  Card image with top-to-bottom dark gradient vignette.
• L4 (Floating Token):      z-30  box-shadow: 0 0 24px rgba(0, 240, 255, 0.45),
                                              0 8px 16px rgba(5, 18, 38, 0.20);
• L5 (Overlays & Headers):  z-50  Modals, navigation sticky headers, global tooltips.

/* -----------------------------------------------------------------------------
 * 6. SPACING & SPATIAL SCALE (8-Point Fluid Spatial Metric)
 * -------------------------------------------------------------------------- */
--space-2:                  4px;    /* Icon-to-text spacing, HUD tick intervals */
--space-4:                  8px;    /* Tight internal chip padding, rating star gaps */
--space-6:                  12px;   /* Standard form element padding (inline) */
--space-8:                  16px;   /* Card row gaps, input field block padding */
--space-12:                 24px;   /* Section intra-item margins */
--space-16:                 32px;   /* Horizontal card carousel gutters */
--space-24:                 48px;   /* Hero container vertical stacking rhythm */
--space-32:                 64px+;  /* Macro section separation blocks */

/* -----------------------------------------------------------------------------
 * 7. BORDERS & TACTICAL DIVIDERS
 * -------------------------------------------------------------------------- */
• Input Shell:              Solid 1px #051226 flush border with integrated action button.
• Compass/HUD Ruler:        1px hairline border with segmented tick markers (2px x 6px)
                            and coordinate labels ("N", "NE", "E", "SE", "S") positioned on macro scale.
• Section Directional:      Center-aligned geometric chevron caret (▼) acting as visual gravity anchor
                            toward interactive showcase components.

/* -----------------------------------------------------------------------------
 * 8. ICONOGRAPHY LANGUAGE
 * -------------------------------------------------------------------------- */
• Style:                    Geometric, 2.0px stroke, sharp corners with subtle optical rounding.
• Search Icon:              Minimalist line-drawn magnifying glass centered in Cyan block.
• Tactical / Nav:           Dual-direction chevrons (‹ DRAG ›) encased in circular pills.
• Ratings:                  Solid filled geometric micro-stars with uniform 4px kerning.
• Scale:                    16px (micro UI), 20px (inputs), 24px (action buttons).

/* -----------------------------------------------------------------------------
 * 9. INTERACTION & FEEDBACK RULES
 * -------------------------------------------------------------------------- */
• Hover Media Cards:        Scale 1.03x; brightness +10%; transition cubic-bezier(0.16, 1, 0.3, 1) 300ms.
• Hover Cyan Actions:       Background #33F3FF; box-shadow glow expands from 24px to 32px spread.
• Focus-Visible Inputs:     2px solid #00F0FF outline offset by 2px.
• Active / Drag Pill:       Cursor shifts to 'grabbing'; scale compresses to 0.95x; subtle radial ripple emitted.
• Idle Motion:              Continuous subtle horizontal parallax glide on mouse movement across X-axis.

/* -----------------------------------------------------------------------------
 * 10. FORBIDDEN CLICHÉS & ANTI-PATTERNS FOR THIS STYLE
 * -------------------------------------------------------------------------- */
- NO generic purple or violet gradients on dark themes.
- NO unbordered floating cards lacking the sharp 24px radius vignette or solid structure.
- NO headline biscuit pills with pulsing dots placed above the main headline.
- NO icon-stuffed bento boxes with arbitrary symbols.
- NO muddy, low-contrast grayscale without the stark #051226 / #00F0FF / #F1F5F9 tension.
- NO blurry uncalibrated drop shadows; strictly L3/L4 luminescent phosphor spreads.
================================================================================`
  }
];

// App State
let currentCategory = "all";
let currentSearchQuery = "";
let currentLayoutMode = "grid"; // 'grid' or 'split'
let userToggledCompact = false;
const isMobileViewport = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
let isCompactMode = isMobileViewport(); // Default OFF on desktop (> 768px), default ON on mobile (<= 768px)
const CATALOG_PAGE_SIZE = 15;
let catalogVisibleCount = CATALOG_PAGE_SIZE;
const CATALOG_STATE_KEY = "styleTiles.catalogState.v1";
let persistCatalogScrollTimer = null;

function getCatalogScrollY() {
  return window.pageYOffset || document.documentElement.scrollTop || 0;
}

function readCatalogState() {
  try {
    const raw = sessionStorage.getItem(CATALOG_STATE_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw);
    return state && typeof state === "object" ? state : null;
  } catch (err) {
    return null;
  }
}

function persistCatalogState() {
  try {
    sessionStorage.setItem(CATALOG_STATE_KEY, JSON.stringify({
      category: currentCategory,
      search: currentSearchQuery,
      layout: currentLayoutMode,
      compact: isCompactMode,
      userToggledCompact,
      visibleCount: catalogVisibleCount,
      scrollY: getCatalogScrollY()
    }));
  } catch (err) {
    // sessionStorage can be unavailable in private mode
  }
}

function schedulePersistCatalogState() {
  if (persistCatalogScrollTimer) return;
  persistCatalogScrollTimer = window.setTimeout(() => {
    persistCatalogScrollTimer = null;
    persistCatalogState();
  }, 150);
}

function applyRestoredCatalogState(state) {
  if (!state) return false;

  if (typeof state.category === "string" && state.category) {
    currentCategory = state.category;
  }
  if (typeof state.search === "string") {
    currentSearchQuery = state.search;
  }
  if (state.layout === "split" || state.layout === "grid") {
    currentLayoutMode = state.layout;
  }
  if (typeof state.compact === "boolean") {
    isCompactMode = state.compact;
    userToggledCompact = !!state.userToggledCompact;
  }
  if (typeof state.visibleCount === "number" && Number.isFinite(state.visibleCount)) {
    catalogVisibleCount = Math.max(CATALOG_PAGE_SIZE, Math.round(state.visibleCount));
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = currentSearchQuery;

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-cat") === currentCategory);
  });

  return true;
}

function restoreCatalogScroll(scrollY) {
  if (typeof scrollY !== "number" || !Number.isFinite(scrollY) || scrollY <= 0) return;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const root = document.documentElement;
  const prevBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const apply = () => window.scrollTo(0, scrollY);
  apply();
  requestAnimationFrame(() => {
    apply();
    requestAnimationFrame(() => {
      apply();
      root.style.scrollBehavior = prevBehavior;
    });
  });
  setTimeout(apply, 60);
  setTimeout(apply, 200);
}

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
function getFilteredTiles() {
  return STYLE_TILES_DATA.filter(tile => {
    const matchesCat = currentCategory === "all" || tile.vibeBadge === currentCategory;
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
}

function renderTileCard(tile) {
  return `
    <article class="design-card" data-id="${tile.id}">
      <!-- Card Header with Vibe Filter Option Badge -->
      <div class="card-header-bar">
        <span class="card-code">${tile.id}</span>
        <span class="card-vibe-badge" title="Filter by ${tile.vibeBadge}" onclick="setCategory('${tile.vibeBadge}')">
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
  `;
}

function updateDisplayedCount(visibleCount, totalFiltered) {
  const totalCountEl = document.getElementById("displayed-count");
  if (!totalCountEl) return;
  if (visibleCount < totalFiltered) {
    totalCountEl.textContent = `${visibleCount} / ${totalFiltered} SPECS`;
  } else {
    totalCountEl.textContent = `${totalFiltered} SPECS`;
  }
}

function updateShowMoreBar(totalFiltered) {
  const bar = document.getElementById("catalog-show-more");
  if (!bar) return;

  const remaining = Math.max(0, totalFiltered - catalogVisibleCount);
  if (remaining === 0) {
    bar.hidden = true;
    bar.innerHTML = "";
    return;
  }

  const nextBatch = Math.min(CATALOG_PAGE_SIZE, remaining);
  bar.hidden = false;
  bar.innerHTML = `
    <span class="catalog-show-more-rule" aria-hidden="true"></span>
    <button type="button" class="btn btn-primary catalog-show-more-btn" onclick="showMoreTiles()" title="Load the next ${nextBatch} design preview${nextBatch === 1 ? "" : "s"}">
      Show More
      <span class="show-more-count">+${nextBatch} of ${remaining} remaining</span>
    </button>
    <span class="catalog-show-more-rule" aria-hidden="true"></span>
  `;
}

function renderCatalog(options = {}) {
  const gridContainer = document.getElementById("catalog-grid");
  if (!gridContainer) return;

  const filtered = getFilteredTiles();
  if (!options.preserveVisibleCount) {
    catalogVisibleCount = CATALOG_PAGE_SIZE;
  }
  catalogVisibleCount = filtered.length
    ? Math.min(Math.max(catalogVisibleCount, 0), filtered.length)
    : CATALOG_PAGE_SIZE;

  updateDisplayedCount(Math.min(catalogVisibleCount, filtered.length), filtered.length);

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; text-align: center; background: var(--surface-sheet); border: var(--border-core); box-shadow: var(--shadow-base);">
        <p class="font-mono text-h3" style="margin-bottom: 8px;">NO DRAFT SPECIFICATIONS FOUND</p>
        <p class="text-body-sm" style="color: var(--ink-muted);">No Style Tiles match "${currentSearchQuery}". Try clearing search query or filter tags.</p>
        <button class="btn btn-mustard btn-sm" style="margin-top: 16px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    updateShowMoreBar(0);
    if (!options.skipPersist) persistCatalogState();
    return;
  }

  const visibleTiles = filtered.slice(0, catalogVisibleCount);
  gridContainer.innerHTML = visibleTiles.map(renderTileCard).join("");
  updateShowMoreBar(filtered.length);

  requestAnimationFrame(resizeCardIframes);
  setTimeout(resizeCardIframes, 100);
  if (!options.skipPersist) persistCatalogState();
}

function showMoreTiles() {
  const gridContainer = document.getElementById("catalog-grid");
  if (!gridContainer) return;

  const filtered = getFilteredTiles();
  const alreadyRendered = gridContainer.querySelectorAll(".design-card").length;
  const nextVisible = Math.min(alreadyRendered + CATALOG_PAGE_SIZE, filtered.length);
  const nextBatch = filtered.slice(alreadyRendered, nextVisible);

  if (!nextBatch.length) {
    catalogVisibleCount = filtered.length;
    updateDisplayedCount(filtered.length, filtered.length);
    updateShowMoreBar(filtered.length);
    persistCatalogState();
    return;
  }

  const staging = document.createElement("div");
  staging.innerHTML = nextBatch.map(renderTileCard).join("");
  const fragment = document.createDocumentFragment();
  while (staging.firstChild) fragment.appendChild(staging.firstChild);
  gridContainer.appendChild(fragment);

  catalogVisibleCount = nextVisible;
  updateDisplayedCount(catalogVisibleCount, filtered.length);
  updateShowMoreBar(filtered.length);
  persistCatalogState();

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
  persistCatalogState();
}

function toggleCompactMode() {
  userToggledCompact = true;
  const anchor = getFocalCardAnchor();
  isCompactMode = !isCompactMode;
  applyViewSettings();
  if (anchor) {
    restoreFocalAnchor(anchor);
  }
  persistCatalogState();
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

  const fullPrompt = `Implement this website using the following Style Tile as the design system:\n\n${tile.markdownSpec}`;

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
      const count = STYLE_TILES_DATA.filter(t => t.vibeBadge === cat).length;
      countEl.textContent = count;
    }
  });
}

// -----------------------------------------------------------------------------
// INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const savedCatalogState = readCatalogState();
  const restoredCatalog = applyRestoredCatalogState(savedCatalogState);

  applyViewSettings();
  renderCatalog({
    preserveVisibleCount: restoredCatalog,
    skipPersist: true
  });
  updateFilterChipCounts();
  updateDraftingClock();
  setInterval(updateDraftingClock, 1000);

  if (restoredCatalog && savedCatalogState && savedCatalogState.scrollY > 0) {
    restoreCatalogScroll(savedCatalogState.scrollY);
    requestAnimationFrame(() => {
      persistCatalogState();
      document.documentElement.classList.remove("catalog-restoring");
    });
  } else {
    persistCatalogState();
    document.documentElement.classList.remove("catalog-restoring");
  }

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

  // Responsive default for compact mode (switches between desktop default and mobile default if user hasn't explicitly toggled)
  const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
  const handleViewportChange = (e) => {
    if (!userToggledCompact) {
      const shouldBeCompact = e.matches;
      if (isCompactMode !== shouldBeCompact) {
        isCompactMode = shouldBeCompact;
        applyViewSettings();
      }
    }
  };
  if (mobileMediaQuery.addEventListener) {
    mobileMediaQuery.addEventListener("change", handleViewportChange);
  } else if (mobileMediaQuery.addListener) {
    mobileMediaQuery.addListener(handleViewportChange);
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

  // Keep catalog place (scroll + expanded Show More batch) across design-page trips
  window.addEventListener("scroll", schedulePersistCatalogState, { passive: true });
  window.addEventListener("pagehide", persistCatalogState);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") persistCatalogState();
  });
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (/Designs\/[^/]+\.html/i.test(href)) persistCatalogState();
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
