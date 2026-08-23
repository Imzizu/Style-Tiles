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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
  },
  {
    id: "TILE-010",
    slug: "blueprint-hud",
    name: "Industrial Blueprint HUD",
    vibe: "Prussian Cyanotype • Ivory Vector Ink • ISO Title Block",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Big Shoulders Display",
      sans: "IBM Plex Sans",
      mono: "IBM Plex Mono"
    },
    palette: [
      { name: "Prussian Night", hex: "#062033" },
      { name: "Cyanotype Paper", hex: "#0A3D5C" },
      { name: "Drawing Frame", hex: "#114E72" },
      { name: "Ivory Vector", hex: "#EEF4F8" },
      { name: "Sun-Bleach Cyan", hex: "#9ED8EA" },
      { name: "Revision Brass", hex: "#C9A44A" },
      { name: "Calibration Seafoam", hex: "#6FC9B0" },
      { name: "Red Pencil", hex: "#E25B4A" }
    ],
    description: "A drawing sheet that became an interface: Prussian cyanotype paper, ivory construction ink, ISO title blocks, brass revision stamps, and a thin instrument overlay — not neon HUD chrome.",
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
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
    markdownSpec: null
  },
  {
    id: "TILE-031",
    slug: "elenrn-design-system",
    name: "ELEnRN Design System",
    vibe: "Sophisticated Heritage • Modern Clarity • Deep Forest Emerald • Warm Terracotta • 30px Card Geometry • Pill Controls",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Avenir Serif Display",
      sans: "Poppins Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Off-White Cream", hex: "#FDFBF6" },
      { name: "Deep Forest Emerald", hex: "#1A4F4F" },
      { name: "Warm Terracotta-Rust", hex: "#C86B39" },
      { name: "Darkened Emerald", hex: "#143F3F" },
      { name: "Off-Black", hex: "#2A2A2A" },
      { name: "Mid-Gray", hex: "#5A5A5A" }
    ],
    description: "ELEnRN Design System: Sophisticated Heritage meets Modern Clarity. Built on an Off-White Cream foundation (#FDFBF6) with Deep Forest Emerald structural elements (#1A4F4F), Warm Terracotta-Rust accents (#C86B39), 30px soft card geometry, full 5000px pill buttons, and calligraphic Avenir Display serifs.",
    markdownSpec: null
  },
  {
    id: "TILE-032",
    slug: "neo-obsidian-acid-sunset",
    name: "Neo-Obsidian & Acid Sunset",
    vibe: "High-Contrast Dark Surface • Warm-to-Acid Kinetic Spectrum • Obsidian Canvas • 32px Squircle Shell • Micro-Precision Telemetry",
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
      { name: "Canvas Surface", hex: "#0D1111" },
      { name: "Card Default", hex: "#141918" },
      { name: "Card Elevated", hex: "#1A211F" },
      { name: "Amber Gold", hex: "#F59E0B" },
      { name: "Chartreuse Mid", hex: "#C4E041" },
      { name: "Acid Lime", hex: "#8CE452" },
      { name: "CTA Orange", hex: "#F38C38" },
      { name: "Accent Mint", hex: "#3CD070" },
      { name: "Accent Coral", hex: "#F87171" },
      { name: "Accent Cyan", hex: "#38BDF8" }
    ],
    description: "Neo-Obsidian & Acid Sunset: High-Contrast Dark Surface UI with Warm-to-Acid Kinetic Data Layer. Built on an obsidian canvas (#0D1111) with L1/L2 dark surface cards, continuous 32px squircle shell framing, 108° multi-stop kinetic spectrum (#F59E0B → #C4E041 → #8CE452), and surgical numeric monospace typography.",
    markdownSpec: null
  },
  {
    id: "TILE-033",
    slug: "luxe-maritime-cybernetic",
    name: "Luxe Maritime Cybernetic",
    vibe: "Cinematic Dark Glass • Deep Oceanic Abyss • Frosted Ice Pills • Crimson Hull Anchor • Electric Azure Halo • Titanium Chrome Display",
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
      { name: "Abyss Void Primary", hex: "#030B12" },
      { name: "Deep Sea Navy", hex: "#081624" },
      { name: "Crimson Hull Core", hex: "#E52521" },
      { name: "Crimson Shadow Deep", hex: "#9E1311" },
      { name: "Oceanic Azure", hex: "#2488CE" },
      { name: "Frosted Ice Pill", hex: "#D2E6F5" },
      { name: "Muted Glacial Steel", hex: "#8FA5B8" },
      { name: "Subdued Label", hex: "#4B6375" }
    ],
    description: "Luxe Maritime Cybernetic: Cinematic Dark Glass Design System. Engineered on deep oceanic void black (#030B12) with translucent 24px blur glass HUD modules, frosted ice pills (#D2E6F5), high-intensity crimson hull anchors (#E52521), electric azure halos (#2488CE), and brushed titanium chrome typography.",
    markdownSpec: null
  },
  {
    id: "TILE-034",
    slug: "neo-editorial-poster-brutalism",
    name: "Neo-Editorial / Poster Brutalism",
    vibe: "High-Contrast Condensed Display • Acid-Pop Vector Overlays • Utilitarian 0px Grid • Zine-Inspired Collage • Concrete Paper",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Bebas Neue",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Concrete Paper Base", hex: "#E1E1E1" },
      { name: "Deep Carbon Black", hex: "#111111" },
      { name: "Acid Coral Burst", hex: "#FF505F" },
      { name: "Electric Chartreuse", hex: "#D9FF38" },
      { name: "Deep Electric Violet", hex: "#481A66" },
      { name: "Pure Paper White", hex: "#FFFFFF" }
    ],
    description: "Neo-Editorial Poster Brutalism: High-contrast, hyper-condensed typography, acid-pop vector overlays, utilitarian 0px grid geometry, and zine-inspired collage layering. Built on an unbleached concrete paper base (#E1E1E1) with carbon black (#111111), acid coral starbursts (#FF505F), and chartreuse organic blobs (#D9FF38).",
    markdownSpec: null
  },
  {
    id: "TILE-035",
    slug: "neo-pop-playful-grotesque",
    name: "Neo-Pop Playful Grotesque",
    vibe: "Gen-Z Vibe • Soft Neo-Brutalist UI • Electric Lime • Soft Lilac • Bubblegum Pink • Spring Physics • 32px Squircle",
    vibeBadge: "Playful & Pop",
    categories: ["playful"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Pure Cream Base", hex: "#F8F9FA" },
      { name: "Charcoal Void", hex: "#111215" },
      { name: "Electric Lime", hex: "#E0FA53" },
      { name: "Soft Lilac", hex: "#D0B8FF" },
      { name: "Bubblegum Pink", hex: "#FCAFD2" },
      { name: "Mint Sherbet", hex: "#C5F7DC" },
      { name: "Card White", hex: "#FFFFFF" }
    ],
    description: "Neo-Pop Playful Grotesque: Gen-Z Vibe-Driven, High-Contrast Neo-Brutalist Soft UI. Built on pure cream canvas (#F8F9FA) with charcoal void typography (#111215), energetic electric lime (#E0FA53), soft lilac (#D0B8FF), bubblegum pink (#FCAFD2), mint sherbet (#C5F7DC), tactile spring physics, and pastel aura gradients.",
    markdownSpec: null
  },
  {
    id: "TILE-036",
    slug: "earthen-minimalist-tactical-retro",
    name: "Earthen Minimalist / Tactical Retro",
    vibe: "Warm Bone Canvas • Military Olive • Electric Mustard • Flat Surface Nesting • Anton Condensed • Tactile Matte Micro-Depth",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Anton",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Warm Bone Base", hex: "#F3EFE0" },
      { name: "Soft Parchment Card", hex: "#FAF7EE" },
      { name: "Olive Drab / Deep Moss", hex: "#4B4F36" },
      { name: "Electric Mustard Accent", hex: "#EBE53B" },
      { name: "Deep Forest Ink", hex: "#25281C" },
      { name: "Lichen Gray Secondary", hex: "#666952" },
      { name: "Parchment Stroke", hex: "#E4DEC9" }
    ],
    description: "Earthen Minimalist / Tactical Retro: High-contrast utilitarian design system founded on flat surface nesting, muted military olive (#4B4F36), warm bone parchment (#F3EFE0), electric mustard (#EBE53B), ultra-bold condensed Anton display type, and tactile matte micro-depth.",
    markdownSpec: null
  },
  {
    id: "TILE-037",
    slug: "cyber-kinetic-motorsport",
    name: "Cyber-Kinetic Motorsport",
    vibe: "Hyper-Volt Neon Green • Atmospheric Void • 45° Chamfered Geometry • Electric Hypercar Telemetry • Chakra Petch Display • Share Tech Mono HUD • High-Performance Brutalism",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Chakra Petch",
      sans: "Inter",
      mono: "Share Tech Mono"
    },
    palette: [
      { name: "Electric Hyper-Volt", hex: "#9AE600" },
      { name: "Luminescent Glow", hex: "#B8FF00" },
      { name: "Deep Racing Olive", hex: "#70821E" },
      { name: "Atmospheric Void", hex: "#070E07" },
      { name: "Frosted Acid Glass", hex: "#809430" },
      { name: "Titanium Frosted", hex: "#D7DED7" },
      { name: "Stark White", hex: "#FFFFFF" },
      { name: "Obsidian Deep", hex: "#0A0F0A" }
    ],
    description: "Cyber-Kinetic Motorsport & High-Performance Brutalism: High-voltage electric hypercar telemetry HUD with acid-volt neon green (#9AE600), atmospheric void (#070E07), 45° chamfer geometry, Chakra Petch display type, and rapid cockpit telemetry feedback.",
    markdownSpec: null
  },
  {
    id: "TILE-038",
    slug: "humanist-warm-minimalism",
    name: "Humanist Warm-Minimalism",
    vibe: "Warm Oat Canvas • Rich Honey Caramel • Pitch Obsidian Type • Editorial Tech • 28px Bento Radii • Hatched Data Tracks • Plus Jakarta Sans & Syne • Ambient Diffused Lighting",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Warm Oat Canvas", hex: "#F7F2EA" },
      { name: "Pure Surface Card", hex: "#FFFFFF" },
      { name: "Muted Subtle Container", hex: "#EFE9DF" },
      { name: "Honey Caramel Primary", hex: "#CC7827" },
      { name: "Deep Caramel Hover", hex: "#B8691E" },
      { name: "Pitch Obsidian Ink", hex: "#111111" },
      { name: "Warm Slate Body", hex: "#65625D" },
      { name: "Emerald Trend Indicator", hex: "#1FA24C" }
    ],
    description: "Humanist Warm-Minimalism (Editorial Tech): Serene warm oat canvas (#F7F2EA), pure white cards, rich honey caramel accents (#CC7827), pitch obsidian typography (#111111), 28px bento radii, hatched progress tracks, and ultra-soft diffused ambient illumination.",
    markdownSpec: null
  },
  {
    id: "TILE-039",
    slug: "warm-botanical-solar-terracotta",
    name: "Warm Botanical & Solar Terracotta",
    vibe: "Sun-Baked Terracotta • Radiant Marigold Gold • Frosted Ambient Glass • Deep Carbon Black • Sunlit Linen Cream • 36px Geometry • Plus Jakarta Sans & Inter • Solar Maceration HUD",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Sun-Baked Terracotta", hex: "#B84E29" },
      { name: "Radiant Marigold Gold", hex: "#FAB833" },
      { name: "Deep Carbon Black", hex: "#141414" },
      { name: "Sunlit Linen Cream", hex: "#EEDCB9" },
      { name: "Apricot Sunburst", hex: "#F58A42" },
      { name: "Frosted Ambient Glass", hex: "rgba(255, 255, 255, 0.12)" },
      { name: "Espresso Dark Ink", hex: "#1F1A17" },
      { name: "Muted Olive Bark", hex: "#5C5346" }
    ],
    description: "Warm Botanical & Solar Terracotta: Grounded sun-baked terracotta (#B84E29), radiant marigold gold (#FAB833), frosted ambient glass overlays, 36px container geometry, 45° leader wire diagram nodes, and a luminous restorative apothecary aesthetic.",
    markdownSpec: null
  },
  {
    id: "TILE-040",
    slug: "luminous-midnight",
    name: "Luminous Midnight",
    vibe: "Deep Obsidian Void • Electric Indigo & Royal Violet Mesh • Frosted Glass Capsules • Plus Jakarta Sans & Instrument Serif • Editorial SaaS • Ambient Depth",
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
      { name: "Deep Obsidian Void", hex: "#06060C" },
      { name: "Electric Indigo Glow", hex: "#4A21E8" },
      { name: "Royal Violet Ambient", hex: "#7434F8" },
      { name: "Primary CTA Fill", hex: "#4B32DF" },
      { name: "Light Violet Text", hex: "#8F7CFF" },
      { name: "Frosted Glass Surface", hex: "rgba(255, 255, 255, 0.04)" },
      { name: "Crisp Solid White", hex: "#FFFFFF" },
      { name: "Deep Purple Bloom", hex: "#2D1577" }
    ],
    description: "Luminous Midnight / Editorial SaaS: Pitch obsidian void (#06060C) paired with intense electric indigo (#4A21E8) and royal violet ambient mesh gradients, frosted floating glass capsules, and refined Instrument Serif italic accents.",
    markdownSpec: null
  },
  {
    id: "TILE-041",
    slug: "dramatic-chromatic-editorial",
    name: "Dramatic Chromatic Editorial",
    vibe: "Parisian Crimson • Deep Wine • Dark Oxblood Silhouette • High-Contrast Didone Display • Bleeding Typographic Layers • Strict 0px Parisian Fashion Tension",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Playfair Display",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Parisian Crimson / Carmine", hex: "#9E0D12" },
      { name: "Deep Wine Vignette", hex: "#7D080C" },
      { name: "Dark Oxblood Silhouette", hex: "#1E0204" },
      { name: "Pure Editorial White", hex: "#FFFFFF" },
      { name: "Soft Alabaster", hex: "#F5E8E8" },
      { name: "Vibrant Scarlet Vermilion", hex: "#D81B24" },
      { name: "Dark Oxblood Overlay", hex: "rgba(30, 2, 4, 0.65)" },
      { name: "Light Hairline Overlay", hex: "rgba(255, 255, 255, 0.08)" }
    ],
    description: "Luxury Editorial / Dramatic Chromatic Minimalism: Saturated Parisian crimson (#9E0D12), deep wine (#7D080C), dark oxblood Didone watermark letterforms bleeding off-screen, pure white micro-metadata, and razor-sharp architectural 0-2px geometry.",
    markdownSpec: null
  },
  {
    id: "TILE-042",
    slug: "editorial-vintage-chic",
    name: "Editorial Vintage Chic",
    vibe: "Warm Alabaster Linen • Deep Carbon Ink • Vivid Terracotta • Dusty Salmon Ribbon • Playfair Display Serif • Tilted Marquee Tape • 0px Editorial Discipline",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Playfair Display",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Warm Alabaster Linen", hex: "#FBF9F6" },
      { name: "Deep Carbon Ink Black", hex: "#141312" },
      { name: "Vivid Terracotta Badge", hex: "#EE582B" },
      { name: "Dusty Salmon Ribbon", hex: "#F5BAA7" },
      { name: "Diffused Peach Glow", hex: "#F5DDD2" },
      { name: "Warm Beige Secondary", hex: "#F3EFEA" },
      { name: "Muted Warm Slate Body", hex: "#6B6661" },
      { name: "Faded Clay Overlay", hex: "#EAD6CD" }
    ],
    description: "Editorial Vintage Chic: Warm alabaster linen background (#FBF9F6), deep carbon ink black (#141312), vivid terracotta accents (#EE582B), and dusty salmon tilted marquee tape (-3.2deg), framed by high-contrast Didone serifs and strict 0px rectangular geometry.",
    markdownSpec: null
  },
  {
    id: "TILE-043",
    slug: "sartorial-editorial-modernism",
    name: "Sartorial Editorial Modernism",
    vibe: "Warm Bone & Antique Ivory • Deep Oxblood Burgundy • Charcoal Noir • Editorial Serif Display • Deconstructed Bento Mosaic • Sandstone Hairline Grid",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Fraunces",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Warm Bone Antique Ivory", hex: "#F5EFEB" },
      { name: "Deep Oxblood Burgundy", hex: "#5C1013" },
      { name: "Charcoal Noir", hex: "#12100E" },
      { name: "Neutral Stone Parchment", hex: "#EBE4DC" },
      { name: "Vibrant Carmine Crimson", hex: "#7A161A" },
      { name: "High-Contrast Espresso", hex: "#1F1A17" },
      { name: "Muted Camel-Taupe", hex: "#7D756D" },
      { name: "Sandstone Grid Border", hex: "#DFD7CE" }
    ],
    description: "Sartorial Editorial Modernism: High-fashion atelier precision blending warm bone antique ivory (#F5EFEB), deep oxblood burgundy (#5C1013), charcoal noir pill buttons (#12100E), deconstructed bento mosaic tiles, and 1px sandstone hairline dividers.",
    markdownSpec: null
  },
  {
    id: "TILE-044",
    slug: "editorial-noir",
    name: "Editorial Noir",
    vibe: "Deep Obsidian Backdrop • High-Voltage Electric Vermilion • Dual Sans & Serif Italic • 28px Bento Geometry • White Disc CTA Icon • Monochrome Neo-Agency",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Plus Jakarta Sans",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Deep Obsidian Backdrop", hex: "#080808" },
      { name: "High-Voltage Electric Vermilion", hex: "#FF3823" },
      { name: "Elevated Card Fill", hex: "#18181B" },
      { name: "Fluid Silk Ambient", hex: "#121214" },
      { name: "Crisp Pure White", hex: "#FFFFFF" },
      { name: "Muted Zinc Body", hex: "#A1A1AA" },
      { name: "Low-Emphasis Zinc", hex: "#52525B" },
      { name: "Frosted Glass Overlay", hex: "rgba(255, 255, 255, 0.04)" }
    ],
    description: "Editorial Noir / Monochrome Neo-Agency: Deep obsidian canvas (#080808) with high-voltage electric vermilion (#FF3823), dual typography (heavy 800 sans paired with Instrument Serif italics), 28px bento cards, and high-contrast white circular CTA discs.",
    markdownSpec: null
  },
  {
    id: "TILE-045",
    slug: "lavender-minimal",
    name: "Lavender Minimal",
    vibe: "Airy Periwinkle SaaS • Cool Slate Analytics • 20px Cards • 9999px Pills",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
          "display": "Plus Jakarta Sans",
          "sans": "Plus Jakarta Sans",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Cool Canvas",
                "hex": "#F6F7FA"
          },
          {
                "name": "Pure Surface",
                "hex": "#FFFFFF"
          },
          {
                "name": "Periwinkle",
                "hex": "#7B6EF6"
          },
          {
                "name": "Lavender Tint",
                "hex": "#ECE9FE"
          },
          {
                "name": "Comparison Cyan",
                "hex": "#00B2FF"
          },
          {
                "name": "Slate Ink",
                "hex": "#0F172A"
          }
    ],
    description: "Luminous, monastic analytics language: cool off-white canvas #F6F7FA, 20px white cards, hairline #EDEFF5 strokes, and periwinkle #7B6EF6 as the only saturated brand voice. Ideal for price trackers, ops consoles, and airy SaaS dashboards.",
    markdownSpec: null
  },
  {
    id: "TILE-046",
    slug: "ethos-void",
    name: "Ethos Void",
    vibe: "Abyss Black • Ice-Cyan Volumetric Light • Frost Glass • Syne Display • Quiet Atmosphere",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
          "display": "Syne",
          "sans": "Inter",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Abyss",
                "hex": "#000000"
          },
          {
                "name": "Pure White",
                "hex": "#FFFFFF"
          },
          {
                "name": "Ice Cyan",
                "hex": "#3A6E8C"
          },
          {
                "name": "Aurora Mid",
                "hex": "#3A7899"
          },
          {
                "name": "Falloff",
                "hex": "#0D1821"
          },
          {
                "name": "Muted Gray",
                "hex": "#5A5A5A"
          }
    ],
    description: "Cinematic dark language of abyss black, frost glass, and ice-cyan volumetric top-light. High-contrast white headlines, Syne 800 display, Inter 300 body, and screen-blended aurora — quiet luxury engineered as atmosphere.",
    markdownSpec: null
  },
  {
    id: "TILE-047",
    slug: "warm-organic-bento",
    name: "Warm Organic Bento",
    vibe: "Warm Oat Canvas • Sunburst Orange • 24px Bento • Dot-Matrix Charts • Pastel Chips",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
          "display": "Plus Jakarta Sans",
          "sans": "Plus Jakarta Sans",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Oat Canvas",
                "hex": "#F7F5EE"
          },
          {
                "name": "White Card",
                "hex": "#FFFFFF"
          },
          {
                "name": "Sunburst Orange",
                "hex": "#F38D3C"
          },
          {
                "name": "Apricot Tint",
                "hex": "#FDF1E6"
          },
          {
                "name": "Near Black",
                "hex": "#18181B"
          },
          {
                "name": "Emerald",
                "hex": "#10B981"
          }
    ],
    description: "Warm, tactile SaaS bento on oat canvas #F7F5EE with 24px modules, sunburst orange #F38D3C, pastel categorical chips, and a signature vertical 4px dot-matrix chart. Selected nav is a solid near-black pill — never orange.",
    markdownSpec: null
  },
  {
    id: "TILE-048",
    slug: "cobalt-concrete",
    name: "Cobalt & Concrete",
    vibe: "Industrial Concrete • Electric Cobalt • 0px Modular Tiles • Optical Flatness • Swiss Grotesk",
    vibeBadge: "Neo-Brutalism",
    categories: ["brutalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
          "display": "Inter",
          "sans": "Inter",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Concrete",
                "hex": "#D8D8D8"
          },
          {
                "name": "Mid Gray Tile",
                "hex": "#C2C2C2"
          },
          {
                "name": "Electric Cobalt",
                "hex": "#0022FF"
          },
          {
                "name": "Midnight Ink",
                "hex": "#030519"
          },
          {
                "name": "Carbon",
                "hex": "#0A0A0A"
          },
          {
                "name": "White",
                "hex": "#FFFFFF"
          }
    ],
    description: "Digital Editorial Modernism: industrial concrete #D8D8D8 field, electric cobalt #0022FF current, 0px flush tiles, 24px dot matrix, and zero drop shadows. Hard geometry and optical flatness — voltage, not atmosphere.",
    markdownSpec: null
  },
  {
    id: "TILE-049",
    slug: "warm-earth-wellness",
    name: "Warm Earth Wellness",
    vibe: "Sandstone Canvas • Ceramic White • Espresso Ink • Pill CTAs • Botanical Seals",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
          "display": "Syne",
          "sans": "Plus Jakarta Sans",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Sandstone",
                "hex": "#C5A58E"
          },
          {
                "name": "Ceramic White",
                "hex": "#FFFFFF"
          },
          {
                "name": "Oat Milk",
                "hex": "#F5EEE8"
          },
          {
                "name": "Espresso",
                "hex": "#32231D"
          },
          {
                "name": "Walnut",
                "hex": "#614D43"
          },
          {
                "name": "Soft Clay",
                "hex": "#8C776C"
          }
    ],
    description: "Hospitality wellness language on warm sandstone #C5A58E with ceramic-white surfaces, espresso #32231D type, and white pill CTAs that invert on hover. Botanical circular seals, uppercase Syne, and expansive editorial air.",
    markdownSpec: null
  },
  {
    id: "TILE-050",
    slug: "obsidian-kinetic",
    name: "Obsidian Kinetic",
    vibe: "Deep Void • Gloss White Pills • Neon Mint Status • 24px Modules • Tactile Dark Luxury",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
          "display": "Inter",
          "sans": "Inter",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Void",
                "hex": "#060709"
          },
          {
                "name": "Panel",
                "hex": "#0E1013"
          },
          {
                "name": "Elevated",
                "hex": "#14171C"
          },
          {
                "name": "Neon Mint",
                "hex": "#00E599"
          },
          {
                "name": "Cyan Glow",
                "hex": "#00F2FE"
          },
          {
                "name": "Gloss White",
                "hex": "#FFFFFF"
          }
    ],
    description: "Tactile dark luxury dashboard: void #060709, 16–24px modules, gloss white active pills with specular glow, and mint/cyan as status — never HUD chrome. Recessed segmented tracks, inset edge light, expensive motion.",
    markdownSpec: null
  },
  {
    id: "TILE-051",
    slug: "luxe-editorial",
    name: "Luxe Editorial",
    vibe: "Paper White • Bodoni Display • High-Contrast Monochrome • Frosted Glass Overlays • Fashion Folio",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
          "display": "Bodoni Moda",
          "sans": "Inter",
          "mono": "JetBrains Mono"
    },
    palette: [
          {
                "name": "Paper White",
                "hex": "#FFFFFF"
          },
          {
                "name": "Editorial Black",
                "hex": "#0A0A0A"
          },
          {
                "name": "Muted Grey",
                "hex": "#6E6E73"
          },
          {
                "name": "Hairline",
                "hex": "#E5E5E5"
          },
          {
                "name": "Pill Outline",
                "hex": "#C7C7C7"
          },
          {
                "name": "Inverse",
                "hex": "#FFFFFF"
          }
    ],
    description: "High-contrast monochrome fashion editorial: stark white canvas, Bodoni Moda as the hero voice, giant watermark type, 4px glass overlays, and black/white pill inversion. Magazine energy — not a SaaS dashboard.",
    markdownSpec: null
  },
  {
    id: "TILE-052",
    slug: "aero-aquatic",
    name: "Aero-Aquatic",
    vibe: "Sky Gradient • Hydrated Glass • Bebas Condensed • Navy Punch CTAs • Liquid Droplets",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
          "display": "Bebas Neue",
          "sans": "Inter",
          "mono": "Space Mono"
    },
    palette: [
          {
                "name": "Sky Canvas",
                "hex": "#BFE3FD"
          },
          {
                "name": "Ice White",
                "hex": "#FFFFFF"
          },
          {
                "name": "Deep Navy",
                "hex": "#0B2B63"
          },
          {
                "name": "Navy Hover",
                "hex": "#071D44"
          },
          {
                "name": "Clinical Slate",
                "hex": "#6C87A3"
          },
          {
                "name": "Badge Mist",
                "hex": "#7D9BB6"
          }
    ],
    description: "Hydrated glassminimalism: high-key sky gradient #BFE3FD, liquid glass nav, gigantic condensed white Bebas display, and navy #0B2B63 punch CTAs with white-circle arrow badges. Ethereal wellness product — not Memphis play.",
    markdownSpec: null
  }
];

// App State
let currentCategory = "all";
let currentSearchQuery = "";
let currentLayoutMode = "grid"; // 'grid' or 'split'
let userToggledCompact = false;
const isMobileViewport = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
let isCompactMode = isMobileViewport(); // Default OFF on desktop (> 768px), default ON on mobile (<= 768px)
let isMobilePreviewMode = false; // Toggle for 2:3 mobile viewport preview (OFF by default)
let isLuckyMode = false;
let luckyTiles = [];
const CATALOG_PAGE_SIZE = 15;
let catalogVisibleCount = CATALOG_PAGE_SIZE;
const CATALOG_STATE_KEY = "styleTiles.catalogState.v1";
let persistCatalogScrollTimer = null;
const markdownSpecCache = new Map();
const PREVIEW_LOAD_MAX = 4;
let previewLoadActive = 0;
const previewLoadQueue = [];
let previewObserver = null;

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
      mobilePreview: isMobilePreviewMode,
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
  if (typeof state.mobilePreview === "boolean") {
    isMobilePreviewMode = state.mobilePreview;
  }
  if (typeof state.visibleCount === "number" && Number.isFinite(state.visibleCount)) {
    catalogVisibleCount = Math.max(CATALOG_PAGE_SIZE, Math.round(state.visibleCount));
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = currentSearchQuery;

  document.querySelectorAll(".filter-chip").forEach(chip => {
    const chipCat = chip.getAttribute("data-cat");
    const isActive = chipCat === currentCategory || (chipCat && currentCategory && chipCat.toLowerCase() === currentCategory.toLowerCase());
    chip.classList.toggle("active", isActive);
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
function getTilePosterColor(tile) {
  const swatch = (tile.palette || []).find((s) => {
    const hex = s && s.hex;
    return typeof hex === "string" && (hex.charAt(0) === "#" || hex.indexOf("rgb") === 0);
  });
  return swatch ? swatch.hex : "#FAF7F2";
}

function hideIframeHeader(iframe) {
  if (!iframe) return;
  try {
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc) return;
    if (doc.documentElement) doc.documentElement.classList.add("is-preview", "in-iframe");
    if (doc.body) doc.body.classList.add("is-preview", "in-iframe");
  } catch (err) {
    // Unloaded or restricted frame
  }
}

function scalePreviewIframe(container) {
  if (!container) return;
  const iframe = container.querySelector(".card-preview-iframe");
  if (!iframe) return;
  const width = container.offsetWidth;
  if (width <= 0) return;
  const baseWidth = isMobilePreviewMode ? 390 : 1280;
  iframe.style.transform = "scale(" + (width / baseWidth) + ")";
}

function resizeCardIframes() {
  document.querySelectorAll(".card-preview-live").forEach(scalePreviewIframe);
}

function onPreviewIframeLoad(iframe) {
  previewLoadActive = Math.max(0, previewLoadActive - 1);
  if (iframe && iframe.isConnected) {
    hideIframeHeader(iframe);
    iframe.classList.add("is-loaded");
    const wrap = iframe.closest(".card-preview-live");
    if (wrap) {
      wrap.classList.add("is-ready");
      scalePreviewIframe(wrap);
    }
  }
  pumpPreviewQueue();
}

function pumpPreviewQueue() {
  while (previewLoadActive < PREVIEW_LOAD_MAX && previewLoadQueue.length) {
    const iframe = previewLoadQueue.shift();
    if (!iframe || !iframe.isConnected || iframe.getAttribute("src")) continue;
    const src = iframe.getAttribute("data-src");
    if (!src) continue;
    previewLoadActive += 1;
    iframe.addEventListener("load", function () {
      onPreviewIframeLoad(iframe);
    }, { once: true });
    iframe.src = src;
  }
}

function enqueuePreviewIframe(iframe) {
  if (!iframe || iframe.getAttribute("data-queued") === "1") return;
  iframe.setAttribute("data-queued", "1");
  previewLoadQueue.push(iframe);
  pumpPreviewQueue();
}

function ensurePreviewObserver() {
  if (previewObserver || typeof IntersectionObserver === "undefined") return previewObserver;
  previewObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const iframe = entry.target.querySelector(".card-preview-iframe[data-src]");
      if (iframe) enqueuePreviewIframe(iframe);
      previewObserver.unobserve(entry.target);
    });
  }, { root: null, rootMargin: "800px 0px", threshold: 0.01 });
  return previewObserver;
}

function observePreviewCards(root) {
  const scope = root || document;
  const observer = ensurePreviewObserver();
  const cards = scope.querySelectorAll ? scope.querySelectorAll(".card-preview-live") : [];
  cards.forEach(function (card) {
    if (observer) observer.observe(card);
    else enqueuePreviewIframe(card.querySelector(".card-preview-iframe[data-src]"));
  });
}

function afterCatalogPaint() {
  observePreviewCards(document.getElementById("catalog-grid"));
  requestAnimationFrame(resizeCardIframes);
}

function extractMarkdownFromHtml(html) {
  const startToken = '<script id="style-tile-markdown" type="text/markdown">';
  const start = html.indexOf(startToken);
  if (start < 0) return "";
  const from = start + startToken.length;
  const end = html.indexOf("</script>", from);
  if (end < 0) return "";
  return html.slice(from, end).trim();
}

function getMarkdownSpec(tile) {
  if (!tile) return Promise.resolve("");
  if (typeof tile.markdownSpec === "string" && tile.markdownSpec.trim()) {
    return Promise.resolve(tile.markdownSpec.trim());
  }
  if (markdownSpecCache.has(tile.slug)) {
    return Promise.resolve(markdownSpecCache.get(tile.slug));
  }
  if (!tile.hasPage || !tile.slug) return Promise.resolve("");
  return fetch("Designs/" + tile.slug + ".html", { credentials: "same-origin" })
    .then(function (res) {
      if (!res.ok) throw new Error("spec fetch failed");
      return res.text();
    })
    .then(function (html) {
      const spec = extractMarkdownFromHtml(html);
      markdownSpecCache.set(tile.slug, spec);
      tile.markdownSpec = spec;
      return spec;
    });
}

function renderCardPreview(tile) {
  if (tile.hasPage) {
    const poster = getTilePosterColor(tile);
    return `
      <div class="card-preview-live" data-slug="${tile.slug}" style="--preview-poster: ${poster};" title="${tile.name} (Live Design Preview)">
        <div class="card-preview-poster" aria-hidden="true"></div>
        <iframe data-src="Designs/${tile.slug}.html?preview=1" class="card-preview-iframe" title="${tile.name} Live Preview" loading="lazy" tabindex="-1" scrolling="no" fetchpriority="low"></iframe>
        <a href="Designs/${tile.slug}.html" class="preview-overlay" title="Open ${tile.name}">
          <span class="preview-open-badge">Open Design Page ↗</span>
        </a>
      </div>
    `;
  }

  return `
    <div class="skeleton-screen-wrapper" title="${tile.name} (16:9 Skeleton Screen)">
      <div class="skeleton-screen">
        <div class="wireframe-nav">
          <div class="wireframe-nav-left"></div>
          <div class="wireframe-nav-right">
            <div class="wireframe-nav-dot"></div>
            <div class="wireframe-nav-dot"></div>
            <div class="wireframe-nav-dot"></div>
          </div>
        </div>
        <div class="wireframe-body">
          <div class="wireframe-hero-col">
            <div class="wireframe-h1-bar"></div>
            <div class="wireframe-p-bar"></div>
            <div class="wireframe-p-bar-short"></div>
            <div class="wireframe-btn-box"></div>
          </div>
          <div class="wireframe-art-col"></div>
        </div>
        <div class="wireframe-footer-grid">
          <div class="wireframe-card-cell"></div>
          <div class="wireframe-card-cell"></div>
          <div class="wireframe-card-cell"></div>
        </div>
        <div class="skeleton-stamp">
          <span class="skeleton-stamp-title">16:9 SKELETON</span>
          <span class="skeleton-stamp-sub">Designs/${tile.slug}.html</span>
        </div>
      </div>
    </div>
  `;
}

function getFilteredTiles() {
  return STYLE_TILES_DATA.filter(tile => {
    let matchesCat = false;
    if (!currentCategory || currentCategory === "all") {
      matchesCat = true;
    } else if (currentCategory.toLowerCase() === "dark") {
      matchesCat = !!(tile.theme && tile.theme.toLowerCase().includes("dark"));
    } else if (currentCategory.toLowerCase() === "light") {
      matchesCat = !!(tile.theme && tile.theme.toLowerCase().includes("light"));
    } else {
      matchesCat = tile.vibeBadge === currentCategory;
    }

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
  const themeVal = tile.theme || "Light";
  const isDualTheme = themeVal === "Dark/Light";
  const targetTheme = isDualTheme
    ? (currentCategory && currentCategory.toLowerCase() === "dark" ? "Light" : "Dark")
    : themeVal;
  const themeLabel = isDualTheme
    ? "◐◑ Dark/Light"
    : (themeVal === "Dark" ? "◐ Dark" : "◑ Light");
  const themeTooltip = isDualTheme
    ? "Filter by Dark or Light theme"
    : `Filter by ${themeVal} theme`;

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
            <span class="badge badge-theme-${themeVal.toLowerCase().replace('/', '-')} badge-clickable" role="button" tabindex="0" title="${themeTooltip}" onclick="setCategory('${targetTheme}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();setCategory('${targetTheme}');}" aria-label="${themeTooltip}">
              ${themeLabel}
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
  if (isLuckyMode) {
    totalCountEl.textContent = `2 LUCKY SPECS`;
  } else if (visibleCount < totalFiltered) {
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

  if (isLuckyMode && luckyTiles && luckyTiles.length === 2) {
    previewLoadQueue.length = 0;
    if (previewObserver) previewObserver.disconnect();
    gridContainer.innerHTML = luckyTiles.map(renderTileCard).join("");
    updateDisplayedCount(2, 2);
    updateShowMoreBar(0);
    afterCatalogPaint();
    if (!options.skipPersist) persistCatalogState();
    return;
  }

  const filtered = getFilteredTiles();
  if (!options.preserveVisibleCount) {
    catalogVisibleCount = CATALOG_PAGE_SIZE;
  }
  catalogVisibleCount = filtered.length
    ? Math.min(Math.max(catalogVisibleCount, 0), filtered.length)
    : CATALOG_PAGE_SIZE;

  updateDisplayedCount(Math.min(catalogVisibleCount, filtered.length), filtered.length);

  if (filtered.length === 0) {
    previewLoadQueue.length = 0;
    if (previewObserver) previewObserver.disconnect();
    const queryDesc = currentSearchQuery ? `"${currentSearchQuery}"` : (currentCategory !== "all" ? `the "${currentCategory}" filter` : "the selected filters");
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; text-align: center; background: var(--surface-sheet); border: var(--border-core); box-shadow: var(--shadow-base);">
        <p class="font-mono text-h3" style="margin-bottom: 8px;">NO DRAFT SPECIFICATIONS FOUND</p>
        <p class="text-body-sm" style="color: var(--ink-muted);">No Style Tiles match ${queryDesc}. Try clearing search query or filter tags.</p>
        <button class="btn btn-mustard btn-sm" style="margin-top: 16px;" onclick="resetCatalog()">Reset All Filters</button>
      </div>
    `;
    updateShowMoreBar(0);
    if (!options.skipPersist) persistCatalogState();
    return;
  }

  const visibleTiles = filtered.slice(0, catalogVisibleCount);
  previewLoadQueue.length = 0;
  if (previewObserver) previewObserver.disconnect();
  gridContainer.innerHTML = visibleTiles.map(renderTileCard).join("");
  updateShowMoreBar(filtered.length);

  afterCatalogPaint();
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

  afterCatalogPaint();
}

// -----------------------------------------------------------------------------
// FILTER & SEARCH ACTIONS
// -----------------------------------------------------------------------------
function setCategory(category) {
  isLuckyMode = false;
  luckyTiles = [];
  currentCategory = category;

  document.querySelectorAll(".filter-chip").forEach(chip => {
    const chipCat = chip.getAttribute("data-cat");
    const isActive = chipCat === category || (chipCat && category && chipCat.toLowerCase() === category.toLowerCase());
    chip.classList.toggle("active", isActive);
  });

  applyViewSettings();
  renderCatalog();
}

function handleSearchInput(e) {
  isLuckyMode = false;
  luckyTiles = [];
  currentSearchQuery = e.target.value;
  applyViewSettings();
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
    const isSplit = isLuckyMode || (currentLayoutMode === "split");
    grid.classList.toggle("view-split", isSplit);
    grid.classList.toggle("view-editorial", isSplit);
    grid.classList.toggle("is-compact", isCompactMode);
    grid.classList.toggle("view-compact", isCompactMode);
    grid.classList.toggle("is-mobile-preview", isMobilePreviewMode);
    grid.classList.toggle("preview-mobile", isMobilePreviewMode);
  }

  // Update layout mode buttons in catalog controls (Grid / Split)
  // Note: Lucky mode renders in split view without toggling the split mode button active state
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

  // Update header mobile preview toggle button
  const mobileBtn = document.getElementById("header-mobile-toggle");
  if (mobileBtn) {
    mobileBtn.classList.toggle("active", isMobilePreviewMode);
    mobileBtn.setAttribute("aria-pressed", isMobilePreviewMode ? "true" : "false");
  }

  syncThemeToggle();

  requestAnimationFrame(resizeCardIframes);
}

function setViewMode(mode) {
  const wasLucky = isLuckyMode;
  const anchor = getFocalCardAnchor();
  isLuckyMode = false;
  luckyTiles = [];
  currentLayoutMode = (mode === "split" || mode === "editorial") ? "split" : "grid";
  applyViewSettings();
  if (wasLucky) {
    renderCatalog();
  }
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

function toggleMobilePreviewMode() {
  const anchor = getFocalCardAnchor();
  isMobilePreviewMode = !isMobilePreviewMode;
  applyViewSettings();
  if (anchor) {
    restoreFocalAnchor(anchor);
  }
  persistCatalogState();
  showToast(
    isMobilePreviewMode ? "Mobile Viewport Preview: ON (2:3 Ratio)" : "Mobile Viewport Preview: OFF (16:9 Ratio)",
    isMobilePreviewMode ? "📱" : "💻"
  );
}

const CATALOG_THEME_STORE_KEY = "styleTiles.catalogTheme.v2";
const LEGACY_THEME_STORE_KEY = "styleTiles.theme";

function defaultCatalogThemeState() {
  const defaults = window.CATALOG_THEME_DEFAULTS || { light: "archival-drafting", dark: "monolithic-hyper-editorial" };
  return {
    mode: "light",
    themes: {
      light: defaults.light,
      dark: defaults.dark
    },
    explicit: false
  };
}

function readCatalogThemeState() {
  const fallback = defaultCatalogThemeState();
  try {
    const raw = localStorage.getItem(CATALOG_THEME_STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && (parsed.mode === "light" || parsed.mode === "dark")) {
        fallback.mode = parsed.mode;
        fallback.explicit = !!parsed.explicit;
        if (parsed.themes && typeof parsed.themes === "object") {
          if (parsed.themes.light) fallback.themes.light = parsed.themes.light;
          if (parsed.themes.dark) fallback.themes.dark = parsed.themes.dark;
        }
        return fallback;
      }
    }
    const v1 = localStorage.getItem(LEGACY_THEME_STORE_KEY);
    if (v1 === "dark" || v1 === "light") {
      fallback.mode = v1;
      fallback.explicit = true;
      return fallback;
    }
  } catch (err) {}
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    fallback.mode = "dark";
  }
  return fallback;
}

function persistCatalogThemeState(state) {
  try {
    localStorage.setItem(CATALOG_THEME_STORE_KEY, JSON.stringify({
      mode: state.mode,
      themes: {
        light: state.themes.light,
        dark: state.themes.dark
      },
      explicit: !!state.explicit
    }));
  } catch (err) {}
}

function resolveThemeIdForMode(state, mode) {
  const wanted = mode === "dark" ? "dark" : "light";
  const storedId = state && state.themes ? state.themes[wanted] : null;
  const stored = typeof getCatalogThemeById === "function" ? getCatalogThemeById(storedId) : null;
  if (stored && stored.mode === wanted) return stored.id;
  return typeof getDefaultCatalogThemeId === "function"
    ? getDefaultCatalogThemeId(wanted)
    : (wanted === "dark" ? "monolithic-hyper-editorial" : "archival-drafting");
}

function pickRandomThemeId(mode, excludeId) {
  const wanted = mode === "dark" ? "dark" : "light";
  const pool = (typeof getCatalogThemesByMode === "function" ? getCatalogThemesByMode(wanted) : [])
    .map((theme) => theme && theme.id)
    .filter(Boolean);
  if (!pool.length) {
    return typeof getDefaultCatalogThemeId === "function" ? getDefaultCatalogThemeId(wanted) : null;
  }
  const candidates = (excludeId && pool.length > 1)
    ? pool.filter((id) => id !== excludeId)
    : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function paintThemeSwatch(container, swatches) {
  if (!container) return;
  const colors = Array.isArray(swatches) && swatches.length ? swatches.slice(0, 4) : ["#F4EFEA", "#FAF7F2", "#000000", "#FF6B4A"];
  while (colors.length < 4) colors.push(colors[colors.length - 1]);
  container.innerHTML = colors.map((hex) => `<span style="background:${hex}"></span>`).join("");
}

function closeThemePicker() {
  const panel = document.getElementById("theme-picker-panel");
  const btn = document.getElementById("header-theme-picker");
  if (panel) panel.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function renderThemePicker() {
  const panel = document.getElementById("theme-picker-panel");
  if (!panel) return;
  const themes = window.CATALOG_THEMES || [];
  const activeId = document.documentElement.getAttribute("data-theme");
  const groups = [
    { mode: "light", label: "Light board" },
    { mode: "dark", label: "Dark board" }
  ];
  panel.innerHTML = groups.map((group) => {
    const items = themes.filter((theme) => theme.mode === group.mode);
    if (!items.length) return "";
    return `
      <div class="theme-picker-group">
        <p class="theme-picker-group-label">${group.label}</p>
        ${items.map((theme) => `
          <button type="button" class="theme-picker-option${theme.id === activeId ? " is-active" : ""}" data-theme-id="${theme.id}">
            <span class="theme-swatch-stack" aria-hidden="true">${(theme.swatches || []).slice(0, 4).map((hex) => `<span style="background:${hex}"></span>`).join("")}</span>
            <span class="theme-picker-option-copy">
              <strong>${theme.shortName || theme.id}</strong>
              <span>${theme.label || theme.shortName || theme.id}</span>
            </span>
          </button>
        `).join("")}
      </div>
    `;
  }).join("");
}

function toggleThemePicker(event) {
  if (event) event.stopPropagation();
  const panel = document.getElementById("theme-picker-panel");
  const btn = document.getElementById("header-theme-picker");
  if (!panel) return;
  const willOpen = panel.hidden;
  if (willOpen) renderThemePicker();
  panel.hidden = !willOpen;
  if (btn) btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
}

function syncThemeToggle() {
  const mode = document.documentElement.getAttribute("data-mode") === "dark" ? "dark" : "light";
  const themeId = document.documentElement.getAttribute("data-theme");
  const theme = typeof getCatalogThemeById === "function" ? getCatalogThemeById(themeId) : null;
  const isDark = mode === "dark";

  const modeBtn = document.getElementById("header-theme-toggle");
  if (modeBtn) {
    modeBtn.classList.toggle("active", isDark);
    modeBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
    modeBtn.setAttribute("title", isDark ? "Roll a random light theme" : "Roll a random dark theme");
    modeBtn.setAttribute("aria-label", isDark ? "Apply a random light theme" : "Apply a random dark theme");
  }

  const pickerBtn = document.getElementById("header-theme-picker");
  const pickerLabel = document.getElementById("header-theme-picker-label");
  if (pickerLabel) pickerLabel.textContent = (theme && theme.shortName) || "Theme";
  if (pickerBtn) {
    pickerBtn.setAttribute("title", `Catalog theme: ${(theme && theme.label) || themeId || "Theme"}`);
    pickerBtn.classList.toggle("active", false);
  }
  paintThemeSwatch(document.getElementById("header-theme-swatch"), theme && theme.swatches);

  const themeColor = document.getElementById("theme-color-meta");
  if (themeColor) {
    themeColor.setAttribute("content", (theme && theme.themeColor) || (isDark ? "#1E1A16" : "#FAF7F2"));
  }

  const panel = document.getElementById("theme-picker-panel");
  if (panel && !panel.hidden) renderThemePicker();
}

function applyCatalogTheme(themeId, options = {}) {
  const theme = typeof getCatalogThemeById === "function" ? getCatalogThemeById(themeId) : null;
  const mode = theme ? theme.mode : (options.mode === "dark" ? "dark" : "light");
  const id = theme ? theme.id : resolveThemeIdForMode(readCatalogThemeState(), mode);
  const resolved = typeof getCatalogThemeById === "function" ? getCatalogThemeById(id) : null;
  const nextMode = resolved ? resolved.mode : mode;
  const nextId = resolved ? resolved.id : id;

  document.documentElement.setAttribute("data-mode", nextMode);
  document.documentElement.setAttribute("data-theme", nextId);
  document.documentElement.style.colorScheme = nextMode;
  document.documentElement.classList.add("theme-ready");

  if (options.persist !== false) {
    const state = readCatalogThemeState();
    state.mode = nextMode;
    state.themes[nextMode] = nextId;
    state.explicit = options.explicit !== false;
    persistCatalogThemeState(state);
  }

  syncThemeToggle();
}

function selectCatalogTheme(themeId) {
  applyCatalogTheme(themeId);
  closeThemePicker();
  const theme = typeof getCatalogThemeById === "function" ? getCatalogThemeById(themeId) : null;
  showToast(
    `Theme: ${(theme && theme.label) || themeId}`,
    theme && theme.mode === "dark" ? "☾" : "☼"
  );
}

function toggleSiteThemeMode() {
  const current = document.documentElement.getAttribute("data-mode") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  const state = readCatalogThemeState();
  const lastInNextPool = state.themes && state.themes[next];
  const nextId = pickRandomThemeId(next, lastInNextPool);
  applyCatalogTheme(nextId);
  closeThemePicker();
  const theme = typeof getCatalogThemeById === "function" ? getCatalogThemeById(nextId) : null;
  showToast(
    next === "dark"
      ? `Dark: ${(theme && theme.shortName) || nextId}`
      : `Light: ${(theme && theme.shortName) || nextId}`,
    next === "dark" ? "☾" : "☼"
  );
}

function toggleSiteTheme() {
  toggleSiteThemeMode();
}

function initSiteTheme() {
  const state = readCatalogThemeState();
  const themeId = resolveThemeIdForMode(state, state.mode);
  applyCatalogTheme(themeId, { persist: false, mode: state.mode });
  renderThemePicker();
  closeThemePicker();

  const pickerPanel = document.getElementById("theme-picker-panel");
  if (pickerPanel) {
    pickerPanel.addEventListener("click", (event) => {
      const option = event.target.closest("[data-theme-id]");
      if (!option) return;
      event.stopPropagation();
      selectCatalogTheme(option.getAttribute("data-theme-id"));
    });
  }

  document.addEventListener("click", (event) => {
    const picker = document.getElementById("theme-picker");
    if (picker && !picker.contains(event.target)) closeThemePicker();
  });

  if (!window.matchMedia) return;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemThemeChange = (event) => {
    const current = readCatalogThemeState();
    if (current.explicit) return;
    const nextMode = event.matches ? "dark" : "light";
    applyCatalogTheme(resolveThemeIdForMode(current, nextMode), { persist: false, explicit: false });
  };
  if (media.addEventListener) {
    media.addEventListener("change", onSystemThemeChange);
  } else if (media.addListener) {
    media.addListener(onSystemThemeChange);
  }
}

function triggerFeelingLucky() {
  if (!STYLE_TILES_DATA || STYLE_TILES_DATA.length < 2) return;

  isLuckyMode = true;

  // Pick 2 distinct random tiles
  const idx1 = Math.floor(Math.random() * STYLE_TILES_DATA.length);
  let idx2 = Math.floor(Math.random() * (STYLE_TILES_DATA.length - 1));
  if (idx2 >= idx1) idx2++;
  luckyTiles = [STYLE_TILES_DATA[idx1], STYLE_TILES_DATA[idx2]];

  // Clear search input text
  currentSearchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  // Reset category filter chip active state to All Specs
  currentCategory = "all";
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-cat") === "all");
  });

  // Apply view settings (forces split 2-col presentation on grid container without toggling active layout mode button)
  applyViewSettings();
  renderCatalog();

  // Smoothly scroll to catalog controls if out of view
  const controls = document.getElementById("catalog-controls");
  if (controls) {
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 78;
    const rect = controls.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = Math.max(0, rect.top + scrollTop - headerHeight - 16);

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  }

  showToast(`Feeling Lucky: ${luckyTiles[0].name} & ${luckyTiles[1].name}`, "✦");
}

function resetCatalog() {
  isLuckyMode = false;
  luckyTiles = [];
  currentCategory = "all";
  currentSearchQuery = "";
  catalogVisibleCount = CATALOG_PAGE_SIZE;

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-cat") === "all");
  });

  applyViewSettings();
  renderCatalog();
  showToast("Catalog reset", "↺");
}

function resetFilters() {
  resetCatalog();
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

  showToast(`Preparing ${tile.name} Style Tile…`, "…");
  getMarkdownSpec(tile).then((spec) => {
    if (!spec) {
      showToast(`Could not load ${tile.name} specification`, "!");
      return;
    }
    const fullPrompt = `Implement this website using the following Style Tile as the design system:\n\n${spec}`;
    return navigator.clipboard.writeText(fullPrompt).then(() => {
      showToast(`Copied ${tile.name} Style Tile to clipboard!`);
    });
  }).catch((err) => {
    console.error("Clipboard error", err);
    showToast(`Could not copy ${tile.name} specification`, "!");
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
  const codeEl = document.getElementById("modal-markdown-content");
  if (codeEl) codeEl.textContent = "Loading specification…";

  const backdrop = document.getElementById("spec-modal-backdrop");
  if (backdrop) backdrop.classList.add("open");
  document.body.style.overflow = "hidden";

  getMarkdownSpec(tile).then((spec) => {
    if (activeModalTile !== tile) return;
    if (codeEl) codeEl.textContent = spec || "Specification unavailable.";
  }).catch(() => {
    if (activeModalTile !== tile) return;
    if (codeEl) codeEl.textContent = "Could not load this specification.";
    showToast(`Could not load ${tile.name} specification`, "!");
  });
}

function closeSpecModal() {
  const backdrop = document.getElementById("spec-modal-backdrop");
  if (backdrop) backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function copyModalSpec() {
  if (!activeModalTile) return;
  getMarkdownSpec(activeModalTile).then((spec) => {
    if (!spec) {
      showToast("Specification still loading — try again in a moment", "…");
      return;
    }
    return navigator.clipboard.writeText(spec).then(() => {
      showToast(`Copied ${activeModalTile.name} specification!`);
    });
  }).catch(() => {
    showToast("Could not copy specification", "!");
  });
}

function downloadModalSpec() {
  if (!activeModalTile) return;
  const tile = activeModalTile;
  getMarkdownSpec(tile).then((spec) => {
    if (!spec) {
      showToast("Specification still loading — try again in a moment", "…");
      return;
    }
    const blob = new Blob([spec], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `style-tile-${tile.slug}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloaded style-tile-${tile.slug}.md!`);
  }).catch(() => {
    showToast("Could not download specification", "!");
  });
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
    } else if (cat && cat.toLowerCase() === "dark") {
      countEl.textContent = STYLE_TILES_DATA.filter(t => t.theme && t.theme.toLowerCase().includes("dark")).length;
    } else if (cat && cat.toLowerCase() === "light") {
      countEl.textContent = STYLE_TILES_DATA.filter(t => t.theme && t.theme.toLowerCase().includes("light")).length;
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
  initSiteTheme();

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
  }
  persistCatalogState();
  document.documentElement.classList.remove("catalog-restoring");

  window.addEventListener("pageshow", (event) => {
    document.documentElement.classList.remove("catalog-restoring");
    if (event.persisted) {
      afterCatalogPaint();
    }
  });

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
      const pickerPanel = document.getElementById("theme-picker-panel");
      if (pickerPanel && !pickerPanel.hidden) {
        closeThemePicker();
        return;
      }
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
