/* ==============================================================================
   STYLE TILES — APPLICATION LOGIC (app.js)
   ============================================================================== */

// Catalog Data Definition for Style Tiles
// Identity is `slug`. Do NOT hardcode TILE-NNN — numbers are stamped from array
// order by assignCatalogTileNumbers() so deleting or reordering a design
// always yields TILE-001…TILE-00N with no gaps.


function formatCatalogTileId(index) {
  return "TILE-" + String(index + 1).padStart(3, "0");
}

function assignCatalogTileNumbers(tiles) {
  tiles.forEach((tile, index) => {
    tile.id = formatCatalogTileId(index);
  });
  return tiles;
}

function findCatalogTile(key) {
  if (!key) return null;
  return STYLE_TILES_DATA.find((tile) => tile.slug === key || tile.id === key) || null;
}

assignCatalogTileNumbers(STYLE_TILES_DATA);

// App State
let currentCategory = "all";
let currentSearchQuery = "";
let currentLayoutMode = "grid"; // 'grid' or 'split'
let userToggledCompact = false;
const isMobileViewport = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
let isCompactMode = isMobileViewport(); // Default OFF on desktop (> 768px), default ON on mobile (<= 768px)
let isMobilePreviewMode = false; // Toggle for 2:3 mobile viewport preview (OFF by default)
const isCompactLocked = () => isMobilePreviewMode || isMobileViewport();
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
    <article class="design-card" data-id="${tile.slug}" data-tile-code="${tile.id}">
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
        <button class="btn btn-sm btn-mustard" onclick="openSpecModal('${tile.slug}')" title="Inspect raw Markdown Style Tile">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Inspect Spec
        </button>
        <button class="btn btn-sm btn-primary" onclick="copyTilePrompt('${tile.slug}')" title="Copy Markdown prompt for AI coding agent">
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
  const locked = isCompactLocked();
  const effectiveCompact = locked || isCompactMode;

  if (grid) {
    const isSplit = isLuckyMode || (currentLayoutMode === "split");
    grid.classList.toggle("view-split", isSplit);
    grid.classList.toggle("view-editorial", isSplit);
    grid.classList.toggle("is-compact", effectiveCompact);
    grid.classList.toggle("view-compact", effectiveCompact);
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
    compactBtn.classList.toggle("active", effectiveCompact);
    compactBtn.classList.toggle("is-locked", locked);
    compactBtn.setAttribute("aria-pressed", effectiveCompact ? "true" : "false");
    if (locked) {
      compactBtn.setAttribute("aria-disabled", "true");
      compactBtn.disabled = true;
      compactBtn.title = "Compact mode is locked ON in mobile view";
    } else {
      compactBtn.removeAttribute("aria-disabled");
      compactBtn.disabled = false;
      compactBtn.title = isCompactMode ? "Toggle Compact Mode (Hide details, show preview only)" : "Toggle Compact Mode (Show full specifications)";
    }
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
  if (isCompactLocked()) {
    showToast("Compact mode is required in mobile view", "ℹ");
    return;
  }
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
    isMobilePreviewMode ? "Mobile Viewport Preview: ON (2:3 Ratio • Compact)" : "Mobile Viewport Preview: OFF (16:9 Ratio)",
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
function copyTilePrompt(tileKey) {
  const tile = findCatalogTile(tileKey);
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
  const text = promptEl
    ? promptEl.textContent.trim()
    : "Implement this website using the following Style Tile as the design system:\n\n[PASTE_COPIED_STYLE_TILE_HERE]";

  navigator.clipboard.writeText(text).then(() => {
    showToast("Master AI Prompt template copied!");
  }).catch((err) => {
    console.error("Clipboard error", err);
    showToast("Could not copy master prompt", "!");
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

function openSpecModal(tileKey) {
  const tile = findCatalogTile(tileKey);
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

  const demoVideo = document.querySelector(".demo-video-player");
  if (demoVideo) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      demoVideo.removeAttribute("autoplay");
      demoVideo.pause();
    }

    const toggleDemoPlayback = () => {
      if (demoVideo.paused) demoVideo.play();
      else demoVideo.pause();
    };

    demoVideo.addEventListener("click", toggleDemoPlayback);
    demoVideo.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleDemoPlayback();
    });
  }

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

  // Responsive handling for compact mode when crossing the mobile/desktop viewport breakpoint
  const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
  const handleViewportChange = () => {
    applyViewSettings();
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

