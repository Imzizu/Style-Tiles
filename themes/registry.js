/* Catalog chrome theme registry.
 * Add one object per pack. Do not invent themes here — see ../theme-toggle.md
 */
window.CATALOG_THEME_DEFAULTS = {
  light: "archival-drafting",
  dark: "monolithic-hyper-editorial"
};

window.CATALOG_THEMES = [
  {
    id: "archival-drafting",
    mode: "light",
    shortName: "Manila",
    label: "Archival Drafting",
    sourceTile: "editorial-brutalist",
    themeColor: "#FAF7F2",
    swatches: ["#F4EFEA", "#FAF7F2", "#000000", "#FF6B4A"],
    fonts: { display: "Fraunces", sans: "Space Grotesk", mono: "JetBrains Mono" }
  },
  {
    id: "monolithic-hyper-editorial",
    mode: "dark",
    shortName: "Monolith",
    label: "Monolithic Hyper-Editorial",
    sourceTile: "monolithic-hyper-editorial",
    themeColor: "#050505",
    swatches: ["#050505", "#0E0F0E", "#FBF9F3", "#D4FF00"],
    fonts: { display: "Fraunces", sans: "Space Grotesk", mono: "Fragment Mono" }
  },
  {
    id: "neo-editorial-poster-brutalism",
    mode: "light",
    shortName: "Poster",
    label: "Neo-Editorial Poster Brutalism",
    sourceTile: "neo-editorial-poster-brutalism",
    themeColor: "#E1E1E1",
    swatches: ["#E1E1E1", "#FFFFFF", "#111111", "#FF505F"],
    fonts: { display: "Bebas Neue", sans: "Inter", mono: "JetBrains Mono" }
  },
  {
    id: "editorial-noir",
    mode: "dark",
    shortName: "Noir",
    label: "Editorial Noir",
    sourceTile: "editorial-noir",
    themeColor: "#080808",
    swatches: ["#080808", "#18181B", "#FFFFFF", "#FF3823"],
    fonts: { display: "Plus Jakarta Sans", sans: "Plus Jakarta Sans", mono: "JetBrains Mono" }
  }
];

window.getCatalogThemeById = function getCatalogThemeById(id) {
  return (window.CATALOG_THEMES || []).find(function (theme) {
    return theme && theme.id === id;
  }) || null;
};

window.getCatalogThemesByMode = function getCatalogThemesByMode(mode) {
  const wanted = mode === "dark" ? "dark" : "light";
  return (window.CATALOG_THEMES || []).filter(function (theme) {
    return theme && theme.mode === wanted;
  });
};

window.getDefaultCatalogThemeId = function getDefaultCatalogThemeId(mode) {
  const defaults = window.CATALOG_THEME_DEFAULTS || {};
  const fallbackId = mode === "dark" ? defaults.dark : defaults.light;
  const match = window.getCatalogThemeById(fallbackId);
  if (match) return match.id;
  const pool = window.getCatalogThemesByMode(mode);
  return pool.length ? pool[0].id : (window.CATALOG_THEMES[0] && window.CATALOG_THEMES[0].id) || "archival-drafting";
};
