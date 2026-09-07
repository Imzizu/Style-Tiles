/* ==============================================================================
   STYLE TILES — UPLOAD INTERFACE (upload.js)
   Curator Intake & Submission Desk
   ============================================================================== */

const CATALOG_THEME_STORE_KEY = "styleTiles.catalogTheme.v2";
const LEGACY_THEME_STORE_KEY = "styleTiles.theme";

// Toast notification helper
function showToast(message, icon = "✓") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2500);
}

// -----------------------------------------------------------------------------
// DRAFTING CLOCK
// -----------------------------------------------------------------------------
function updateDraftingClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;
  const now = new Date();
  const utcStr = now.toISOString().replace("T", " ").substring(0, 19) + " UTC";
  clockEl.textContent = utcStr;
}

// -----------------------------------------------------------------------------
// THEME SYSTEM (Synchronized with Catalog)
// -----------------------------------------------------------------------------
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
      if (parsed && typeof parsed === "object") {
        return {
          mode: parsed.mode === "dark" ? "dark" : "light",
          themes: {
            light: (parsed.themes && parsed.themes.light) || fallback.themes.light,
            dark: (parsed.themes && parsed.themes.dark) || fallback.themes.dark
          },
          explicit: !!parsed.explicit
        };
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

// -----------------------------------------------------------------------------
// CLIENT UPLOAD FORM CONTROLLER (Step 2)
// -----------------------------------------------------------------------------
const UPLOAD_STATES = {
  REST: "rest",
  FILE_CHOSEN: "file_chosen",
  SENDING: "sending",
  RECEIVED: "received",
  PROBLEM: "problem"
};

const MAX_UPLOAD_FILE_SIZE = 5 * 1024 * 1024; // 5 MB size cap

let currentUploadState = UPLOAD_STATES.REST;
let currentSelectedFile = null;
let uploadProgressInterval = null;

function formatFileSize(bytes) {
  if (typeof bytes !== "number" || isNaN(bytes) || bytes <= 0) return "0 B";
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function generateDocketId() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `ST-SUB-${y}${m}${d}-${rand}`;
}

function getFormattedUtcTimestamp() {
  const now = new Date();
  return now.toISOString().replace("T", " ").substring(0, 19) + " UTC";
}

function showProblemAlert(title, message) {
  const alertEl = document.getElementById("upload-problem-alert");
  const titleEl = document.getElementById("upload-alert-title");
  const messageEl = document.getElementById("upload-alert-message");
  if (!alertEl || !titleEl || !messageEl) return;

  titleEl.textContent = title || "Submission problem";
  messageEl.textContent = message || "Please review your design submission.";
  alertEl.hidden = false;
  currentUploadState = UPLOAD_STATES.PROBLEM;

  if (typeof alertEl.scrollIntoView === "function") {
    alertEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function hideProblemAlert() {
  const alertEl = document.getElementById("upload-problem-alert");
  if (alertEl) alertEl.hidden = true;
  if (currentUploadState === UPLOAD_STATES.PROBLEM) {
    currentUploadState = currentSelectedFile ? UPLOAD_STATES.FILE_CHOSEN : UPLOAD_STATES.REST;
  }
}

function validateFile(file) {
  if (!file) {
    return {
      valid: false,
      title: "No file chosen",
      message: "Choose an .html design file first."
    };
  }

  const name = (file.name || "").toLowerCase();
  const isHtmlExt = name.endsWith(".html") || name.endsWith(".htm");
  const isHtmlMime = file.type === "text/html" || file.type === "" || file.type === "application/xhtml+xml";

  if (!isHtmlExt) {
    return {
      valid: false,
      title: "Invalid file type",
      message: "Style Tiles only accepts standalone .html files in this first version."
    };
  }

  if (file.size > MAX_UPLOAD_FILE_SIZE) {
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    return {
      valid: false,
      title: "File too large",
      message: `That file is ${sizeMb} MB, which exceeds the 5 MB ceiling. Please send a self-contained HTML page.`
    };
  }

  return { valid: true };
}

function updateFileChosenView(file) {
  const restView = document.getElementById("dropzone-rest-view");
  const chosenView = document.getElementById("dropzone-chosen-view");
  const nameEl = document.getElementById("chosen-file-name");
  const metaEl = document.getElementById("chosen-file-meta");
  const dropzone = document.getElementById("upload-dropzone");

  if (!restView || !chosenView || !nameEl || !metaEl) return;

  nameEl.textContent = file.name;
  metaEl.textContent = `${formatFileSize(file.size)} • Standalone HTML Ready`;
  restView.hidden = true;
  chosenView.hidden = false;
  if (dropzone) dropzone.classList.add("has-file");
  currentUploadState = UPLOAD_STATES.FILE_CHOSEN;
}

function resetDropzoneView() {
  const restView = document.getElementById("dropzone-rest-view");
  const chosenView = document.getElementById("dropzone-chosen-view");
  const fileInput = document.getElementById("design-file-input");
  const dropzone = document.getElementById("upload-dropzone");

  if (fileInput) fileInput.value = "";
  currentSelectedFile = null;

  if (dropzone) dropzone.classList.remove("has-file");
  if (restView && chosenView) {
    chosenView.hidden = true;
    restView.hidden = false;
  }
  currentUploadState = UPLOAD_STATES.REST;
}

function handleFileSelection(file) {
  const result = validateFile(file);
  if (!result.valid) {
    showProblemAlert(result.title, result.message);
    resetDropzoneView();
    return false;
  }

  hideProblemAlert();
  currentSelectedFile = file;
  updateFileChosenView(file);
  return true;
}

function setFormControlsDisabled(disabled) {
  const form = document.getElementById("client-upload-form");
  if (!form) return;

  const elements = form.querySelectorAll("input, textarea, button");
  elements.forEach((el) => {
    el.disabled = !!disabled;
  });

  const dropzone = document.getElementById("upload-dropzone");
  if (dropzone) {
    if (disabled) {
      dropzone.style.pointerEvents = "none";
      dropzone.style.opacity = "0.7";
    } else {
      dropzone.style.pointerEvents = "";
      dropzone.style.opacity = "";
    }
  }
}

function setSendingProgress(percent) {
  const container = document.getElementById("upload-progress-container");
  const fill = document.getElementById("upload-progress-fill");
  const percentEl = document.getElementById("upload-progress-percent");
  const bar = document.getElementById("upload-progressbar");

  const clamped = Math.min(100, Math.max(0, percent));
  if (container) container.hidden = false;
  if (fill) fill.style.width = clamped + "%";
  if (percentEl) percentEl.textContent = Math.round(clamped) + "%";
  if (bar) bar.setAttribute("aria-valuenow", Math.round(clamped));
}

function renderReceipt(meta) {
  const receiptView = document.getElementById("upload-receipt-view");
  const form = document.getElementById("client-upload-form");
  const intakeIntro = document.getElementById("upload-intake-intro");
  const progressContainer = document.getElementById("upload-progress-container");

  if (!receiptView || !form) return;

  hideProblemAlert();
  if (progressContainer) progressContainer.hidden = true;
  form.hidden = true;
  if (intakeIntro) intakeIntro.hidden = true;

  const docketId = (meta && meta.docketId) || generateDocketId();
  const docketEl = document.getElementById("receipt-docket-id");
  const fileEl = document.getElementById("receipt-file-name");
  const sizeEl = document.getElementById("receipt-file-size");
  const designEl = document.getElementById("receipt-design-name");
  const authorEl = document.getElementById("receipt-author-name");
  const timeEl = document.getElementById("receipt-timestamp");
  const noteRow = document.getElementById("receipt-note-row");
  const noteEl = document.getElementById("receipt-curator-note");

  if (docketEl) {
    docketEl.textContent = `DOCKET #${docketId}`;
    docketEl.setAttribute("data-docket-id", docketId);
  }
  if (fileEl) fileEl.textContent = meta.file ? meta.file.name : "spec.html";
  if (sizeEl) sizeEl.textContent = meta.file ? formatFileSize(meta.file.size) : "0 B";
  if (designEl) designEl.textContent = (meta.designName && meta.designName.trim()) || "Untitled Specification";
  if (authorEl) authorEl.textContent = (meta.authorName && meta.authorName.trim()) || "Anonymous Contributor";
  if (timeEl) timeEl.textContent = getFormattedUtcTimestamp();

  if (noteRow && noteEl) {
    const note = meta.curatorNote && meta.curatorNote.trim();
    if (note) {
      noteEl.textContent = `"${note}"`;
      noteRow.hidden = false;
    } else {
      noteRow.hidden = true;
    }
  }

  receiptView.hidden = false;
  currentUploadState = UPLOAD_STATES.RECEIVED;

  const desk = document.getElementById("upload-desk");
  if (desk && typeof desk.scrollIntoView === "function") {
    desk.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showToast("Design received. Stamped into intake desk.", "✓");
}

function resetFormToRest() {
  if (uploadProgressInterval) {
    clearInterval(uploadProgressInterval);
    uploadProgressInterval = null;
  }

  const form = document.getElementById("client-upload-form");
  const receiptView = document.getElementById("upload-receipt-view");
  const intakeIntro = document.getElementById("upload-intake-intro");
  const progressContainer = document.getElementById("upload-progress-container");
  const submitBtn = document.getElementById("btn-submit-upload");
  const submitLabel = document.getElementById("btn-submit-label");

  if (form) {
    form.reset();
    form.hidden = false;
  }
  if (intakeIntro) intakeIntro.hidden = false;
  if (receiptView) receiptView.hidden = true;
  if (progressContainer) progressContainer.hidden = true;
  if (submitBtn) submitBtn.classList.remove("is-sending");
  if (submitLabel) submitLabel.textContent = "Send design";

  setFormControlsDisabled(false);
  resetDropzoneView();
  hideProblemAlert();
  currentUploadState = UPLOAD_STATES.REST;

  const desk = document.getElementById("upload-desk");
  if (desk && typeof desk.scrollIntoView === "function") {
    desk.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// -----------------------------------------------------------------------------
// VERCEL BLOB INTAKE CLIENT
// File goes to /api/upload. The Function writes to Blob with runtime OIDC.
// -----------------------------------------------------------------------------

function performDirectUpload(file, fields, onUploadProgress) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("name", fields.authorName || "");
    formData.append("authorName", fields.authorName || "");
    formData.append("designName", fields.designName || "");
    formData.append("note", fields.curatorNote || "");
    formData.append("curatorNote", fields.curatorNote || "");
    formData.append("passphrase", fields.passphrase || "");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload");

    if (xhr.upload && typeof onUploadProgress === "function") {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = Math.round((event.loaded / event.total) * 100);
          onUploadProgress({
            loaded: event.loaded,
            total: event.total,
            percentage
          });
        }
      };
    }

    xhr.onload = () => {
      let data = {};
      try {
        data = JSON.parse(xhr.responseText);
      } catch {}

      if (xhr.status >= 200 && xhr.status < 300 && data && data.ok) {
        resolve(data);
        return;
      }

      reject(new Error((data && data.error) || `Upload failed with status ${xhr.status}`));
    };

    xhr.onerror = () => {
      reject(new Error("Network error during file transmission."));
    };

    xhr.onabort = () => {
      reject(new Error("File upload aborted."));
    };

    xhr.send(formData);
  });
}

/**
 * Maps server and transmission errors onto human-readable problem alert UI
 */
function mapUploadErrorToAlert(err) {
  const rawMsg = (err && (err.message || err.error)) ? String(err.message || err.error) : (err ? String(err) : "");
  const lower = rawMsg.toLowerCase();

  if (lower.includes("passphrase") || lower.includes("unauthorized") || lower.includes("forbidden")) {
    showProblemAlert(
      "Passphrase required",
      "The submission passphrase is missing or incorrect. If you have an invite code, enter it below."
    );
  } else if (
    lower.includes("file type") ||
    lower.includes("html") ||
    lower.includes("extension") ||
    lower.includes("content type") ||
    lower.includes("content-type")
  ) {
    showProblemAlert(
      "Invalid file type",
      "Style Tiles only accepts standalone .html and .htm files in this version."
    );
  } else if (
    lower.includes("large") ||
    lower.includes("size") ||
    lower.includes("ceiling") ||
    lower.includes("5 mb") ||
    lower.includes("too large") ||
    lower.includes("maximumsize")
  ) {
    showProblemAlert(
      "File too large",
      "That file exceeds the 5 MB ceiling. Please send a self-contained HTML page."
    );
  } else if (
    lower.includes("network") ||
    lower.includes("fetch") ||
    lower.includes("failed to fetch") ||
    lower.includes("connect") ||
    lower.includes("offline") ||
    lower.includes("404") ||
    lower.includes("not found") ||
    lower.includes("server error") ||
    lower.includes("500") ||
    lower.includes("failed to retrieve") ||
    lower.includes("abort") ||
    !rawMsg
  ) {
    showProblemAlert(
      "Connection problem",
      "Could not connect to the intake desk or storage service. Please check your connection and try again."
    );
  } else {
    showProblemAlert(
      "Submission problem",
      rawMsg || "An unexpected error occurred while transmitting your design. Please try again."
    );
  }
}

/**
 * POSTs the HTML file to /api/upload. The Function stores it in Blob.
 */
async function executeUploadSubmission(submissionData) {
  const { file, authorName, designName, curatorNote, passphrase } = submissionData;

  currentUploadState = UPLOAD_STATES.SENDING;
  setFormControlsDisabled(true);

  const submitBtn = document.getElementById("btn-submit-upload");
  const submitLabel = document.getElementById("btn-submit-label");
  if (submitBtn) submitBtn.classList.add("is-sending");
  if (submitLabel) submitLabel.textContent = "Sending design…";

  setSendingProgress(0);

  try {
    const result = await performDirectUpload(
      file,
      { authorName, designName, curatorNote, passphrase },
      (progressEvent) => {
        if (progressEvent && typeof progressEvent.percentage === "number") {
          setSendingProgress(progressEvent.percentage);
        }
      }
    );

    setSendingProgress(100);
    if (submitBtn) submitBtn.classList.remove("is-sending");

    renderReceipt({
      file,
      authorName,
      designName,
      curatorNote,
      blob: result
    });
  } catch (err) {
    mapUploadErrorToAlert(err);
    setFormControlsDisabled(false);
    if (submitBtn) submitBtn.classList.remove("is-sending");
    if (submitLabel) submitLabel.textContent = "Send design";
    const progressContainer = document.getElementById("upload-progress-container");
    if (progressContainer) progressContainer.hidden = true;
  }
}

function initClientUploadForm() {
  const form = document.getElementById("client-upload-form");
  const fileInput = document.getElementById("design-file-input");
  const dropzone = document.getElementById("upload-dropzone");
  const btnBrowse = document.getElementById("btn-browse-file");
  const btnReplace = document.getElementById("btn-replace-file");
  const btnRemove = document.getElementById("btn-remove-file");
  const btnDismissAlert = document.getElementById("upload-alert-dismiss");
  const btnSendAnother = document.getElementById("btn-send-another");
  const btnCopyDocket = document.getElementById("btn-copy-docket");

  if (!form || !fileInput || !dropzone) return;

  // Copy Docket ID button
  if (btnCopyDocket) {
    btnCopyDocket.addEventListener("click", () => {
      const docketEl = document.getElementById("receipt-docket-id");
      const rawDocket = (docketEl && (docketEl.getAttribute("data-docket-id") || docketEl.textContent)) || "";
      const cleanDocket = rawDocket.replace(/^DOCKET\s*#?/, "").trim();
      if (cleanDocket && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        navigator.clipboard.writeText(cleanDocket).then(() => {
          showToast(`Copied docket #${cleanDocket}`, "✓");
        }).catch(() => {
          showToast(`Docket: ${cleanDocket}`, "ℹ");
        });
      } else if (cleanDocket) {
        showToast(`Docket: ${cleanDocket}`, "ℹ");
      }
    });
  }

  // File Input Change
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleFileSelection(file);
    }
  });

  // Browse buttons
  if (btnBrowse) {
    btnBrowse.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  if (btnReplace) {
    btnReplace.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  // Remove chosen file
  if (btnRemove) {
    btnRemove.addEventListener("click", (e) => {
      e.stopPropagation();
      resetDropzoneView();
    });
  }

  // Dismiss problem alert
  if (btnDismissAlert) {
    btnDismissAlert.addEventListener("click", () => {
      hideProblemAlert();
    });
  }

  // Reset from receipt view
  if (btnSendAnother) {
    btnSendAnother.addEventListener("click", () => {
      resetFormToRest();
    });
  }

  // Dropzone click & keyboard trigger
  dropzone.addEventListener("click", (e) => {
    // Only open file dialog if clicking rest view or background, not on action buttons
    if (e.target.closest("button") || e.target.closest("a")) return;
    if (!currentSelectedFile) {
      fileInput.click();
    }
  });

  dropzone.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  // Drag and drop handlers
  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("is-dragover");
    });
  });

  ["dragleave", "dragend"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("is-dragover");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove("is-dragover");

    const files = e.dataTransfer && e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelection(files[0]);
    }
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!currentSelectedFile) {
      showProblemAlert("No file selected", "Choose an .html design file first.");
      if (typeof dropzone.focus === "function") dropzone.focus();
      return;
    }

    const authorName = (document.getElementById("author-name") || {}).value || "";
    const designName = (document.getElementById("design-name") || {}).value || "";
    const curatorNote = (document.getElementById("curator-note") || {}).value || "";
    const passphrase = (document.getElementById("submission-passphrase") || {}).value || "";

    executeUploadSubmission({
      file: currentSelectedFile,
      authorName,
      designName,
      curatorNote,
      passphrase
    });
  });

  // Test helper exposed on window for automated verification of states
  window.setUploadState = function (stateName, customData) {
    switch (stateName) {
      case UPLOAD_STATES.REST:
        resetFormToRest();
        break;
      case UPLOAD_STATES.FILE_CHOSEN:
        const mockFile = (customData && customData.file) || new File(["<!DOCTYPE html><html><body>Test</body></html>"], "mineral-celadon.html", { type: "text/html" });
        handleFileSelection(mockFile);
        break;
      case UPLOAD_STATES.SENDING:
        const sendFile = (customData && customData.file) || currentSelectedFile || new File(["<!DOCTYPE html>"], "mineral-celadon.html", { type: "text/html" });
        currentSelectedFile = sendFile;
        updateFileChosenView(sendFile);
        currentUploadState = UPLOAD_STATES.SENDING;
        setFormControlsDisabled(true);
        const submitLabel = document.getElementById("btn-submit-label");
        if (submitLabel) submitLabel.textContent = "Sending design…";
        setSendingProgress((customData && customData.percent) || 45);
        break;
      case UPLOAD_STATES.RECEIVED:
        renderReceipt(customData || {
          file: currentSelectedFile || { name: "mineral-celadon.html", size: 145200 },
          authorName: "Elena Rostova",
          designName: "Mineral Celadon"
        });
        break;
      case UPLOAD_STATES.PROBLEM:
        showProblemAlert(
          (customData && customData.title) || "Submission problem",
          (customData && customData.message) || "That file is over 5 MB. Please send a self-contained HTML page."
        );
        break;
      default:
        console.warn("Unknown upload state:", stateName);
    }
  };

  window.getUploadState = function () {
    return {
      state: currentUploadState,
      file: currentSelectedFile ? { name: currentSelectedFile.name, size: currentSelectedFile.size } : null
    };
  };
}

// -----------------------------------------------------------------------------
// INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initSiteTheme();
  updateDraftingClock();
  setInterval(updateDraftingClock, 1000);
  initClientUploadForm();

  // Keyboard shortcut: Escape closes picker
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const pickerPanel = document.getElementById("theme-picker-panel");
      if (pickerPanel && !pickerPanel.hidden) {
        closeThemePicker();
      }
    }
  });
});

