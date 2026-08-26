// Auto-detect when design page is embedded inside catalog preview iframe
(function () {
  var isPreview = false;
  try {
    isPreview = window.self !== window.top || window.location.search.indexOf("preview") !== -1;
  } catch (e) {
    isPreview = true;
  }
  if (!isPreview) return;

  document.documentElement.classList.add("is-preview", "in-iframe");

  var early = document.createElement("style");
  early.setAttribute("data-preview-early", "true");
  early.textContent = [
    "html.is-preview .style-tile-header{display:none!important;height:0!important;overflow:hidden!important}",
    "html.is-preview .modal-overlay,html.is-preview #spec-modal,html.is-preview .toast-popup{display:none!important}"
  ].join("");
  document.documentElement.appendChild(early);

  if (document.body) {
    document.body.classList.add("is-preview", "in-iframe");
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.body) document.body.classList.add("is-preview", "in-iframe");
    });
  }
})();

// Stamp the live catalog TILE-NNN from STYLE_TILES_DATA order in app.js.
// Header codes are never a permanent accession number — deleting or
// reordering a catalog entry compacts the sequence on the next load.
(function () {
  function currentSlug() {
    var path = window.location.pathname || "";
    var file = path.split("/").pop() || "";
    try { file = decodeURIComponent(file); } catch (e) {}
    return file.replace(/\.html?$/i, "");
  }

  function catalogScriptUrl() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src || scripts[i].getAttribute("src") || "";
      if (src.indexOf("design-page-mobile.js") !== -1) {
        try {
          return new URL("../app.js", scripts[i].src || src).href;
        } catch (e) {
          return "../app.js";
        }
      }
    }
    return "../app.js";
  }

  function extractCatalogSlugs(source) {
    var start = source.indexOf("const STYLE_TILES_DATA");
    if (start < 0) start = 0;
    var end = source.indexOf("\n];", start);
    var block = end < 0 ? source.slice(start) : source.slice(start, end);
    var slugs = [];
    var re = /slug:\s*"([^"]+)"/g;
    var match;
    while ((match = re.exec(block))) slugs.push(match[1]);
    return slugs;
  }

  function formatCatalogTileId(index) {
    var n = String(index + 1);
    while (n.length < 3) n = "0" + n;
    return "TILE-" + n;
  }

  function applyLiveTileCode(code) {
    if (!code) return;
    var headerCodes = document.querySelectorAll(".style-tile-header .design-code");
    for (var i = 0; i < headerCodes.length; i++) {
      headerCodes[i].textContent = code;
    }
    var stamps = document.querySelectorAll(".design-code, [data-live-tile-code]");
    for (var j = 0; j < stamps.length; j++) {
      var el = stamps[j];
      if (el.closest && el.closest(".style-tile-header")) continue;
      var text = (el.textContent || "").trim();
      if (el.hasAttribute("data-live-tile-code") || /^TILE-\d+$/i.test(text)) {
        el.textContent = code;
      }
    }
    if (document.title && /TILE-\d+/i.test(document.title)) {
      document.title = document.title.replace(/TILE-\d+/gi, code);
    }
  }

  function resolveLiveTileCode() {
    var slug = currentSlug();
    if (!slug) return;
    fetch(catalogScriptUrl(), { cache: "no-cache" })
      .then(function (res) { return res.ok ? res.text() : Promise.reject(new Error("catalog fetch failed")); })
      .then(function (source) {
        var slugs = extractCatalogSlugs(source);
        var index = slugs.indexOf(slug);
        if (index === -1) return;
        applyLiveTileCode(formatCatalogTileId(index));
      })
      .catch(function () {
        // Keep whatever placeholder or fallback is in the markup.
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", resolveLiveTileCode);
  } else {
    resolveLiveTileCode();
  }
})();
