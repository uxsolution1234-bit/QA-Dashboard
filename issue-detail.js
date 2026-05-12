const CURRENT_PROJECT_KEY = "grid_current_project";

const PROJECT_STORAGE_KEYS = {
  "GRID R15": "grid_r15_issue_rows",
  "Compact 고도화": "compact_advanced_issue_rows",
};

const params = new URLSearchParams(window.location.search);
const projectFromQuery = String(params.get("project") || "").trim();
const currentProject = projectFromQuery || String(localStorage.getItem(CURRENT_PROJECT_KEY) || "").trim() || "GRID R15";
localStorage.setItem(CURRENT_PROJECT_KEY, currentProject);

function getIssueStorageKey() {
  return PROJECT_STORAGE_KEYS[currentProject] || `project_rows_${encodeURIComponent(currentProject)}`;
}

function loadRows() {
  const raw = localStorage.getItem(getIssueStorageKey());
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function saveRows(rows) {
  localStorage.setItem(getIssueStorageKey(), JSON.stringify(rows));
}

const rowKey = params.get("rowKey");
const form = document.getElementById("issueDetailForm");
const editToggleBtn = document.getElementById("editToggleBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const descriptionPreview = document.getElementById("descriptionPreview");
const attachmentPreviewList = document.getElementById("attachmentPreviewList");

const rows = loadRows();
const current = rows.find((r) => String(r.rowKey) === String(rowKey));

if (!current) {
  alert("Issue not found.");
  window.location.href = "./index.html#issueList";
}

form.elements.title.value = current.title || "";
form.elements.impactLevel.value = current.impactLevel || "Medium";
form.elements.platform.value = current.platform || "Dispatcher";
form.elements.occurrenceVersion.value = current.occurrenceVersion || "";
form.elements.modifiedVersion.value = current.modifiedVersion || "";
form.elements.description.value =
  current.description ||
  `+ Step :\n\n+ Actual Result :\n\n+ Expected Result :\n\n+ note :`;

const statusSet = new Set(
  String(current.issueStatus || "Open")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
);
Array.from(form.querySelectorAll('input[name="issueStatusMulti"]')).forEach((el) => {
  el.checked = statusSet.has(el.value);
});

function setFormMode(isEditMode) {
  form.classList.toggle("detail-preview-mode", !isEditMode);

  Array.from(form.elements).forEach((el) => {
    if (el.name === "description") return;
    if (el.type === "submit") return;
    el.disabled = !isEditMode;
  });

  form.elements.description.classList.toggle("hidden", !isEditMode);
  descriptionPreview.classList.toggle("hidden", isEditMode);
  saveBtn.classList.toggle("hidden", !isEditMode);
  editToggleBtn.classList.toggle("hidden", isEditMode);
  cancelBtn.textContent = isEditMode ? "Cancel Edit" : "Back to List";

  const statusOptions = Array.from(form.querySelectorAll(".status-check-group .status-option"));
  statusOptions.forEach((label) => {
    const input = label.querySelector('input[name="issueStatusMulti"]');
    if (!input) return;
    label.classList.toggle("hidden", !isEditMode && !input.checked);
  });
}

function renderDescriptionPreview() {
  descriptionPreview.textContent = form.elements.description.value || "-";
}

function renderAttachmentPreview(row) {
  const files = Array.isArray(row.attachments) ? row.attachments : [];
  if (!files.length) {
    attachmentPreviewList.innerHTML = '<p class="attachment-empty">No attachment</p>';
    return;
  }

  attachmentPreviewList.innerHTML = files
    .map((file, idx) => {
      const isImage = String(file.type || "").startsWith("image/");
      const isVideo = String(file.type || "").startsWith("video/");
      const name = file.name || `attachment-${idx + 1}`;
      const src = file.dataUrl || "#";

      let media = '<div class="attachment-generic">Preview unavailable</div>';
      if (isImage) media = `<img class="attachment-media" src="${src}" alt="${name}" />`;
      if (isVideo) media = `<video class="attachment-media" src="${src}" controls preload="metadata"></video>`;

      return `
        <article class="attachment-preview-item">
          <p class="attachment-title">${name}</p>
          ${media}
          <a class="entry-btn secondary attachment-download" href="${src}" download="${name}">Download</a>
        </article>
      `;
    })
    .join("");
}

editToggleBtn.addEventListener("click", () => {
  setFormMode(true);
});

renderDescriptionPreview();
renderAttachmentPreview(current);
setFormMode(false);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fd = new FormData(form);
  const statuses = Array.from(form.querySelectorAll('input[name="issueStatusMulti"]:checked')).map((el) => el.value);
  if (!statuses.length) {
    alert("Please select at least one Issue Status.");
    return;
  }

  const updated = rows.map((row) => {
    if (String(row.rowKey) !== String(rowKey)) return row;
    return {
      ...row,
      title: String(fd.get("title") || "").trim(),
      impactLevel: String(fd.get("impactLevel") || "Medium"),
      issueStatus: statuses.join(", "),
      platform: String(fd.get("platform") || "Dispatcher"),
      occurrenceVersion: String(fd.get("occurrenceVersion") || ""),
      modifiedVersion: String(fd.get("modifiedVersion") || ""),
      description: String(fd.get("description") || "").trim(),
      updatedAt: new Date().toISOString(),
    };
  });

  saveRows(updated);
  window.location.href = `./issue-detail.html?rowKey=${encodeURIComponent(String(rowKey || ""))}&project=${encodeURIComponent(currentProject)}`;
});
