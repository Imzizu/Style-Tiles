// Auto-detect when design page is embedded inside catalog preview iframe
(function () {
  try {
    if (window.self !== window.top || window.location.search.indexOf("preview") !== -1) {
      document.documentElement.classList.add("is-preview", "in-iframe");
      if (document.body) {
        document.body.classList.add("is-preview", "in-iframe");
      } else {
        document.addEventListener("DOMContentLoaded", function () {
          if (document.body) document.body.classList.add("is-preview", "in-iframe");
        });
      }
    }
  } catch (e) {
    document.documentElement.classList.add("is-preview", "in-iframe");
  }
})();
