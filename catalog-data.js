const STYLE_TILES_DATA = [
  {
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
    slug: "the-monolith",
    name: "The Monolith",
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
    slug: "cryptovista",
    name: "CryptoVista",
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
    slug: "greenwrap",
    name: "Greenwrap",
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
    slug: "skybound",
    name: "Skybound",
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
    slug: "the-draftsman",
    name: "The Draftsman",
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
    slug: "velvet-bento",
    name: "Velvet Bento",
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
    slug: "pulse-matrix",
    name: "Pulse Matrix",
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
    slug: "raw-foundry",
    name: "Raw Foundry",
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
    slug: "the-letterpress",
    name: "The Letterpress",
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
    slug: "prism-pop",
    name: "Prism Pop",
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
    slug: "concrete-gazette",
    name: "Concrete Gazette",
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
    slug: "clinical-sage",
    name: "Clinical Sage",
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
    slug: "obsidian-vault",
    name: "Obsidian Vault",
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
    slug: "chromatic-gazette",
    name: "Chromatic Gazette",
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
    slug: "airmail-modern",
    name: "Airmail Modern",
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
    slug: "ink-and-vellum",
    name: "Ink & Vellum",
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
    slug: "acid-foundry",
    name: "Acid Foundry",
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
    slug: "fjord-and-flora",
    name: "Fjord & Flora",
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
    slug: "verdant-silk",
    name: "Verdant Silk",
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
    slug: "crimson-radiance",
    name: "Crimson Radiance",
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
    slug: "ghost-protocol",
    name: "Ghost Protocol",
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
    slug: "the-chronicler",
    name: "The Chronicler",
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
    slug: "paper-tiger",
    name: "Paper Tiger",
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
    slug: "aero-tactical",
    name: "Aero Tactical",
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
    slug: "nocturne-atelier",
    name: "Nocturne Atelier",
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
    slug: "acid-sunset",
    name: "Acid Sunset",
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
    slug: "abyssal-yacht",
    name: "Abyssal Yacht",
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
    slug: "the-broadside",
    name: "The Broadside",
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
    slug: "bubblegum-pop",
    name: "Bubblegum Pop",
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
    slug: "dune-outpost",
    name: "Dune Outpost",
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
    slug: "hearth-and-stone",
    name: "Hearth & Stone",
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
    slug: "solar-terracotta",
    name: "Solar Terracotta",
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
    slug: "chromatic-noir",
    name: "Chromatic Noir",
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
    slug: "the-sartorialist",
    name: "The Sartorialist",
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
    slug: "earth-bento",
    name: "Earth Bento",
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
    slug: "sandstone-spa",
    name: "Sandstone Spa",
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
    slug: "the-folio",
    name: "The Folio",
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
  },
  {
    slug: "aurora-glass",
    name: "Aurora Glass",
    vibe: "Pitch Black #07070A • Frosted Glass 32px • Ambient Aurora Mesh • Electric Lime CTA • Warm Amber Multiplayer Presence",
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
      {
        name: "Pitch Canvas",
        hex: "#07070A"
      },
      {
        name: "Glass Primary",
        hex: "rgba(255, 255, 255, 0.08)"
      },
      {
        name: "Electric Lime",
        hex: "#B8F64B"
      },
      {
        name: "Magenta Pulse",
        hex: "#E12B7C"
      },
      {
        name: "Hyper Teal",
        hex: "#00E5FF"
      },
      {
        name: "Warm Amber",
        hex: "#FFC72C"
      },
      {
        name: "Coral Red",
        hex: "#FF4D4D"
      }
    ],
    description: "High-end spatial collaboration system on pitch black #07070A canvas with 32px frosted glass surfaces, multi-spectral aurora mesh glow, high-energy electric lime CTAs, and warm amber multiplayer presence.",
    markdownSpec: null
  },
  {
    slug: "chalk-and-tab",
    name: "Chalk & Tab",
    vibe: "Warm Chalk #EAEAE4 • Asymmetric Folder Tabs • Flame Orange & Cobalt • Flat Planar Slabs • Mechanical Snap",
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
      { name: "Canvas Base", hex: "#EAEAE4" },
      { name: "Surface White", hex: "#FFFFFF" },
      { name: "Surface Subtle", hex: "#F4F4F0" },
      { name: "Surface Inverse", hex: "#0C0C0C" },
      { name: "Accent Flame", hex: "#FF4405" },
      { name: "Accent Cobalt", hex: "#3438F5" },
      { name: "Accent Acid", hex: "#E8F754" },
      { name: "Accent Peach", hex: "#FFE7DE" },
      { name: "Ink Primary", hex: "#0F0F0F" }
    ],
    description: "Tactile neo-brutalist engineering system on muted warm chalk #EAEAE4 with asymmetric folder-tab cards, flame orange #FF4405 CTAs that invert on hover, electric cobalt #3438F5 focal tiles, and axonometric wireframes.",
    markdownSpec: null
  },
  {
    slug: "ceramicist-atelier",
    name: "Ceramicist Atelier",
    vibe: "Chalk White Canvas • Deep Cobalt #27477D • Soft Glaze Halo #D8ECF8 • Raw Bisque Warmth • Hand-Drawn Script",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Caveat",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Deep Cobalt", hex: "#27477D" },
      { name: "Powder Sky", hex: "#D8ECF8" },
      { name: "Chalk White", hex: "#FFFFFF" },
      { name: "Porcelain White", hex: "#F8FAFC" },
      { name: "Raw Bisque", hex: "#F9E7DD" },
      { name: "Graphite Charcoal", hex: "#2A2E35" },
      { name: "Washed Slate", hex: "#6F83A3" }
    ],
    description: "Ceramicist craft minimalism on bright chalk white #FFFFFF with deep cobalt #27477D ink, soft powder sky glaze halos #D8ECF8, raw bisque terracotta warmth #F9E7DD, and fluid script display typography.",
    markdownSpec: null
  },
  {
    slug: "industrial-dynamo",
    name: "Industrial Dynamo",
    vibe: "Deep Obsidian Slate • Electric Safety Orange • High-Vis Neon Lime • 9999px Floating Nav Island • High-Voltage Energy Motifs",
    vibeBadge: "Cyber & Blueprint",
    categories: ["cyber"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Syne",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Night Slate Canvas", hex: "#111622" },
      { name: "Floating Tinted Slate", hex: "#1A2232" },
      { name: "Elevated Neutral Slate", hex: "#232D42" },
      { name: "Recessed Well", hex: "#0C0F17" },
      { name: "Electric Safety Orange", hex: "#FF4D1C" },
      { name: "High-Vis Neon Lime", hex: "#C8F532" },
      { name: "Pure White Text", hex: "#FFFFFF" },
      { name: "Soft Slate Subcopy", hex: "#A0ABC0" },
      { name: "Utility Muted Slate", hex: "#6B7A90" }
    ],
    description: "Industrial Dynamo: High-energy modern utility design language built on deep obsidian night slate (#111622) with electric safety orange (#FF4D1C) vector backdrops, high-visibility neon lime (#C8F532) pill CTAs, 9999px floating island navigation, and dynamic circular stamp badges.",
    markdownSpec: null
  },

  {
    slug: "tuscan-nostalgia",
    name: "Tuscan Nostalgia",
    vibe: "Sun-Drenched Mediterranean • Heavy Editorial Typography • Impasto Oil-Paint • Sharp Geometric Diagonals • Rich Heritage Warm-Earth",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Syne / Antique Olive",
      sans: "Montserrat / Futura PT",
      mono: "Space Mono"
    },
    palette: [
      { name: "Tuscan Cream", hex: "#EDE8DC" },
      { name: "Parchment Base", hex: "#F5F2EA" },
      { name: "Warm Alabaster", hex: "#E3DDD0" },
      { name: "Deep Cypress Olive", hex: "#2B3828" },
      { name: "Terracotta Leather", hex: "#A85C3A" },
      { name: "Sunlit Ochre", hex: "#D99A4E" },
      { name: "Warm Sepia Shadow", hex: "#382921" },
      { name: "Canvas Backdrop", hex: "#181C16" }
    ],
    description: "Tuscan Nostalgia: Sun-drenched Mediterranean vintage travel editorial on parchment and Tuscan cream (#EDE8DC, #F5F2EA) framed by deep cypress-olive (#2B3828) borders, terracotta leather (#A85C3A) focal warmth, kinetic -26deg railway diagonals, and bold poster typography.",
    markdownSpec: null
  },
  {
    slug: "editorial-luxe",
    name: "Editorial Luxe",
    vibe: "High-Fashion Didone • Frosted Glass HUD • Electric Lavender • 0px Precision • Intelligent Minimalism",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Cormorant Garamond",
      sans: "Plus Jakarta Sans",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Absolute Black Ink", hex: "#0A0A0A" },
      { name: "Pure White Canvas", hex: "#FFFFFF" },
      { name: "Electric Lavender", hex: "#6C5CE7" },
      { name: "Accent Tint Wash", hex: "#F1EEFF" },
      { name: "Soft Muted Charcoal", hex: "#4A4A4A" },
      { name: "Faded Ghost Grey", hex: "#B5B5B5" },
      { name: "Hairline Grey", hex: "#E6E6E6" },
      { name: "Dark Frost", hex: "#1A1A1A" }
    ],
    description: "High-fashion editorial Didone typography with dual-tone contrast, frosted glass HUD overlays with 20px blur, electric lavender cyber-intelligence triggers, razor-sharp 0px rectangular CTAs, and pure white architectural space.",
    markdownSpec: null
  },

  {
    slug: "botanical-press",
    name: "Botanical Press",
    vibe: "19th-Century Naturalist Ledger • Intaglio Spruce Ink • Mineral Rag Paper • Letterpress Deboss",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Libre Baskerville",
      sans: "Plus Jakarta Sans",
      mono: "Plus Jakarta Sans"
    },
    palette: [
      { name: "Pale Sage Canvas", hex: "#CCD7D1" },
      { name: "Paper Card Sheet", hex: "#DCE4DF" },
      { name: "Paper Muted Recess", hex: "#BFCCC5" },
      { name: "Intaglio Spruce Primary", hex: "#1D352B" },
      { name: "Deep Pine Moss", hex: "#2C4B3E" },
      { name: "Diluted Spruce Line", hex: "#506E62" },
      { name: "Ghost Ink Watermark", hex: "#8A9F96" },
      { name: "Stamped Cinnabar Press", hex: "#E75B54" },
      { name: "Washed Coral Tint", hex: "#F29792" }
    ],
    description: "Botanical Heritage & Press: 19th-century naturalist ledger aesthetic constructed on mineral-washed rag paper (#CCD7D1) and elevated specimen sheets (#DCE4DF), printed with intaglio spruce ink (#1D352B), double ledger rules, and stamped cinnabar pressmarks (#E75B54).",
    markdownSpec: null
  },
  {
    slug: "swiss-vermilion",
    name: "Swiss Vermilion",
    vibe: "Modernist Monochrome • Swiss Grotesk • Planar Split • Signal Vermilion",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Inter",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Primary", hex: "#FFFFFF" },
      { name: "Canvas Secondary", hex: "#E5E5E7" },
      { name: "Ink Primary", hex: "#0A0A0A" },
      { name: "Ink Secondary", hex: "#9E9EA3" },
      { name: "Ink Tertiary", hex: "#6B7280" },
      { name: "Accent Vermilion", hex: "#FF2800" },
      { name: "Accent Forest", hex: "#204739" },
      { name: "Stroke Subtle", hex: "#D8D8DC" },
      { name: "Stroke Prominent", hex: "#0A0A0A" }
    ],
    description: "Neo-Swiss Editorial: High-density modernist monochrome system on dual white and cool stone canvases (#FFFFFF / #E5E5E7) with ultra-rationalist Swiss grotesk typography, flat zero-elevation planar contrast, hairline rules, and vivid vermilion signal accents (#FF2800).",
  },
  {
    slug: "kinetic-carbon",
    name: "Kinetic Carbon",
    vibe: "Technical Minimalism • Dark Surface • Precision B2B • Kinetic Green",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Inter",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Base", hex: "#0A0B0D" },
      { name: "Surface Layer 1", hex: "#121417" },
      { name: "Surface Layer 2", hex: "#181B1F" },
      { name: "Content Primary", hex: "#F4F4F6" },
      { name: "Content Secondary", hex: "#8B8F9A" },
      { name: "Content Tertiary", hex: "#4F535E" },
      { name: "Kinetic Green", hex: "#34D399" },
      { name: "Tag Cyan", hex: "#38BDF8" },
      { name: "Tag Violet", hex: "#C084FC" },
      { name: "Tag Amber", hex: "#FB923C" }
    ],
    description: "Autonomous Tech Dark: High-density technical minimalism on deep carbon surfaces (#0A0B0D / #121417 / #181B1F) with diffuse translucent occlusion, hairline boundaries, disciplined Inter typography, and vivid kinetic-green focus accents (#34D399).",
    markdownSpec: null
  },
  {
    slug: "sage-apothecary",
    name: "Sage Apothecary",
    vibe: "Warm Minimalism • Clinical Tactile • Botanical Accents",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Sofia Sans",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Canvas Warm", hex: "#FAF9F5" },
      { name: "Container Warm", hex: "#F5F4EE" },
      { name: "Container Tinted", hex: "#DFE7E2" },
      { name: "Text Primary", hex: "#1A1A18" },
      { name: "Text Secondary", hex: "#6E6D66" },
      { name: "Terracotta", hex: "#C36746" },
      { name: "Sage Green", hex: "#196941" },
      { name: "Warm Amber", hex: "#C88A38" },
      { name: "Slate Blue", hex: "#4D6B82" }
    ],
    description: "Modern Clinical Editorial: Approachable, serene clinical minimalism built on warm linen and ecru surfaces (#FAF9F5 / #F5F4EE) with mineral sage bands (#DFE7E2), precise charcoal typography (#1A1A18), editorial terracotta accents (#C36746), and botanical green badging (#196941).",
    markdownSpec: null
  },
  {
    slug: "academic-lilac",
    name: "Academic Lilac",
    vibe: "Modern Editorial • Atmospheric Lilac • Deep Indigo • Planar Tactile",
    vibeBadge: "Editorial & Archival",
    categories: ["editorial"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Newsreader",
      sans: "Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Primary Surface", hex: "#F4F3F8" },
      { name: "Container Base", hex: "#FAF9FD" },
      { name: "Display Indigo", hex: "#382D6B" },
      { name: "Body Charcoal", hex: "#2D2C34" },
      { name: "Ash Mauve", hex: "#6D6B78" },
      { name: "Royal Iris", hex: "#5C48A2" },
      { name: "Deep Iris", hex: "#4A3886" },
      { name: "Optical White", hex: "#FFFFFF" },
      { name: "Midnight Icon", hex: "#1F1E24" }
    ],
    description: "Academic Lilac / Modern Editorial: Atmospheric cool lavender-tinted wash surfaces (#F4F3F8 / #FAF9FD) paired with regal twilight indigo display typography (#382D6B), high-contrast charcoal body text (#2D2C34), royal iris violet interactive actions (#5C48A2), and planar, tactile, print-inspired depth.",
    markdownSpec: null
  },
  {
    slug: "curated-field-guide",
    name: "Curated Field Guide",
    vibe: "Warm Linen Parchment • Utilitarian Modern Moleskine • Geometric Sans Numbers • Burnt Terracotta • Saffron Amber Callouts • Flat Paper Baseline",
    vibeBadge: "Minimalist & Monastic",
    categories: ["minimalist"],
    theme: "Light",
    hasPage: true,
    fonts: {
      display: "Satoshi / General Sans",
      sans: "Plus Jakarta Sans / Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Warm Linen Canvas", hex: "#FAF8F5" },
      { name: "Deeper Sand Surface", hex: "#F2EFEB" },
      { name: "Matte Charcoal Inverse", hex: "#121212" },
      { name: "Deep Charcoal Ink", hex: "#141413" },
      { name: "Warm Graphite Stone", hex: "#7A746B" },
      { name: "Burnt Terracotta", hex: "#DE5333" },
      { name: "Warm Saffron Amber", hex: "#E5A42E" },
      { name: "Ghost Ochre", hex: "#DCD6CA" },
      { name: "Hairline Divider", hex: "#EAE5DC" }
    ],
    description: "Curated Field Guide: Tactile minimalist and utilitarian modern Moleskine design system built on warm linen parchment (#FAF8F5) with subtle sand cards (#F2EFEB), high-contrast matte charcoal floating pill CTAs (#121212), bold 32px geometric step numerals, warm saffron amber callouts (#E5A42E), and burnt terracotta accent indicators (#DE5333).",
    markdownSpec: null
  },
  {
    slug: "aethel-sculptural-noir",
    name: "Aethel / Sculptural Noir",
    vibe: "High-End Editorial • Atmospheric Dark Luxury • Sculptural Depth • Neo-Classical Elegance • Obsidian Plum • Vivid Magenta Orchid",
    vibeBadge: "Quiet Luxury",
    categories: ["luxury"],
    theme: "Dark",
    hasPage: true,
    fonts: {
      display: "Playfair Display / Editorial New",
      sans: "Plus Jakarta Sans / Inter",
      mono: "JetBrains Mono"
    },
    palette: [
      { name: "Midnight Plum Canvas", hex: "#1B0B13" },
      { name: "Elevated Dark Cherry", hex: "#25121C" },
      { name: "Porcelain Blush", hex: "#F6E3EB" },
      { name: "Vivid Magenta Orchid", hex: "#D4568C" },
      { name: "Deep Shaded Berry", hex: "#8E2F5B" },
      { name: "Luminous Soft Rose", hex: "#F597C0" },
      { name: "Pure Optical White", hex: "#FFFFFF" },
      { name: "Dusty Mauve Lavender", hex: "#B3A2AC" }
    ],
    description: "Aethel / Sculptural Noir: Atmospheric dark luxury and neo-classical editorial elegance constructed on deep midnight plum (#1B0B13) and elevated dark cherry surfaces (#25121C), warm porcelain blush contrast planes (#F6E3EB), vivid magenta orchid focal accents (#D4568C), and sculptural 28px curvature.",
    markdownSpec: null
  }

  // === AGENT_APPEND_TILE_HERE ===
  // Paste the next catalog object ABOVE this comment.
  // Add a comma after the previous entry's closing `}`.
  // Schema and vibeBadge table: Agent/agent.md §0 and §3.
  // Do not set `id`. Set hasPage: true. Do not register Agent/style-tile-skeleton.html.
];
if (typeof window !== 'undefined') window.STYLE_TILES_DATA = STYLE_TILES_DATA;
