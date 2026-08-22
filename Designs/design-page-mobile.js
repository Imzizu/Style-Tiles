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
