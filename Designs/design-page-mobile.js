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

// Stamp the live catalog TILE-NNN from STYLE_TILES_DATA order in catalog-data.js.
// Header codes are never a permanent accession number — deleting or
// reordering a catalog entry compacts the sequence on the next load.
(function () {
  function currentSlug() {
    var path = window.location.pathname || "";
    var file = path.split("/").pop() || "";
    try { file = decodeURIComponent(file); } catch (e) {}
    return file.replace(/\.html?$/i, "");
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
      if (el.hasAttribute("data-live-tile-code") || /^TILE-\d*$/i.test(text)) {
        el.textContent = code;
      }
    }
    if (document.title && /TILE-\d*/i.test(document.title)) {
      document.title = document.title.replace(/TILE-\d*/gi, code);
    }
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && /TILE-\d*/i.test(metaDesc.content)) {
      metaDesc.content = metaDesc.content.replace(/TILE-\d*/gi, code);
    }
  }

  function processCatalogData() {
    var slug = currentSlug();
    if (!slug || !window.STYLE_TILES_DATA) return;
    var index = window.STYLE_TILES_DATA.findIndex(function(t) { return t.slug === slug; });
    if (index === -1) return;
    applyLiveTileCode(formatCatalogTileId(index));
  }

  function resolveLiveTileCode() {
    if (window.STYLE_TILES_DATA) {
      processCatalogData();
      return;
    }
    var script = document.createElement("script");
    script.src = "../catalog-data.js";
    script.onload = function() {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", processCatalogData);
      } else {
        processCatalogData();
      }
    };
    document.head.appendChild(script);
  }

  resolveLiveTileCode();
})();
