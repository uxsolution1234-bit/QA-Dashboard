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

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const rowKey = params.get("rowKey");
const form = document.getElementById("issueDetailForm");
const editToggleBtn = document.getElementById("editToggleBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const descriptionPreview = document.getElementById("descriptionPreview");
const attachmentPreviewList = document.getElementById("attachmentPreviewList");
const detailAttachmentInput = document.getElementById("detailAttachmentInput");
const detailAttachmentHint = document.getElementById("detailAttachmentHint");
const commentInput = document.getElementById("commentInput");
const commentAddBtn = document.getElementById("commentAddBtn");
const commentList = document.getElementById("commentList");

const rows = loadRows();
const current = rows.find((r) => String(r.rowKey) === String(rowKey));

if (!current) {
  alert("Issue not found.");
  window.location.href = "./index.html#issueList";
}
let workingAttachments = Array.isArray(current.attachments) ? [...current.attachments] : [];
let workingComments = Array.isArray(current.comments) ? [...current.comments] : [];

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
    if (el.id === "commentInput" || el.id === "commentAddBtn") return;
    if (el.classList?.contains("comment-edit-btn") || el.classList?.contains("comment-delete-btn")) return;
    el.disabled = !isEditMode;
  });

  form.elements.description.classList.toggle("hidden", !isEditMode);
  descriptionPreview.classList.toggle("hidden", isEditMode);
  saveBtn.classList.toggle("hidden", !isEditMode);
  editToggleBtn.classList.toggle("hidden", isEditMode);
  cancelBtn.textContent = isEditMode ? "Cancel Edit" : "Back to List";
  attachmentPreviewList.classList.toggle("edit-mode", isEditMode);
  detailAttachmentInput.classList.toggle("hidden", !isEditMode);
  detailAttachmentHint.classList.toggle("hidden", !isEditMode);
  if (!isEditMode) detailAttachmentHint.textContent = "";

  const statusOptions = Array.from(form.querySelectorAll(".status-check-group .status-option"));
  statusOptions.forEach((label) => {
    const input = label.querySelector('input[name="issueStatusMulti"]');
    if (!input) return;
    label.classList.toggle("hidden", !isEditMode && !input.checked);
  });
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
}

function persistComments() {
  const target = rows.find((r) => String(r.rowKey) === String(rowKey));
  if (!target) return;
  target.comments = [...workingComments];
  target.updatedAt = new Date().toISOString();
  saveRows(rows);
}

function renderComments() {
  if (!workingComments.length) {
    commentList.innerHTML = '<p class="attachment-empty">No comments yet.</p>';
    return;
  }
  commentList.innerHTML = workingComments
    .map(
      (comment, idx) => `
        <article class="comment-item">
          <p class="comment-meta">${escapeHtml(comment.createdAt || "")}</p>
          <p class="comment-body">${escapeHtml(comment.text || "")}</p>
          <div class="comment-actions">
            <button type="button" class="entry-btn secondary comment-edit-btn" data-comment-idx="${idx}">Edit</button>
            <button type="button" class="entry-btn danger-btn comment-delete-btn" data-comment-idx="${idx}">Delete</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDescriptionPreview() {
  descriptionPreview.textContent = form.elements.description.value || "-";
}

function renderAttachmentPreview(row) {
  const files = Array.isArray(workingAttachments) ? workingAttachments : [];
  if (!files.length) {
    attachmentPreviewList.innerHTML = '<p class="attachment-empty">No attachment</p>';
    return;
  }

  attachmentPreviewList.innerHTML = files
    .map((file, idx) => {
      const isImage = String(file.type || "").startsWith("image/");
      const name = file.name || `attachment-${idx + 1}`;
      const src = file.dataUrl || "#";

      let media = '<div class="attachment-generic">Preview not available for this file type. Use download.</div>';
      if (isImage) media = `<img class="attachment-media" src="${src}" alt="${name}" />`;

      return `
        <article class="attachment-preview-item">
          <p class="attachment-title">${name}</p>
          ${media}
          <div class="attachment-actions">
            <a class="entry-btn secondary attachment-download" href="${src}" download="${name}">Download</a>
            <button class="entry-btn danger-btn attachment-remove-btn" type="button" data-attachment-idx="${idx}">Delete</button>
          </div>
        </article>
      `;
    })
    .join("");
}

editToggleBtn.addEventListener("click", () => {
  setFormMode(true);
});

attachmentPreviewList.addEventListener("click", (event) => {
  const btn = event.target.closest(".attachment-remove-btn");
  if (!btn) return;
  const idx = Number(btn.dataset.attachmentIdx);
  if (Number.isNaN(idx)) return;
  workingAttachments = workingAttachments.filter((_, i) => i !== idx);
  renderAttachmentPreview(current);
  if (!workingAttachments.length) attachmentPreviewList.classList.add("edit-mode");
});

detailAttachmentInput.addEventListener("change", async () => {
  const files = Array.from(detailAttachmentInput.files || []);
  if (!files.length) {
    detailAttachmentHint.textContent = "";
    return;
  }
  const next = await Promise.all(
    files.map(async (file) => ({
      name: file.name,
      type: file.type,
      dataUrl: await fileToDataUrl(file),
    })),
  );
  workingAttachments = [...workingAttachments, ...next];
  detailAttachmentHint.textContent = `${files.length} file(s) added`;
  detailAttachmentInput.value = "";
  renderAttachmentPreview(current);
  attachmentPreviewList.classList.add("edit-mode");
});

commentAddBtn.addEventListener("click", () => {
  const text = String(commentInput.value || "").trim();
  if (!text) return;
  workingComments.unshift({
    text,
    createdAt: new Date().toISOString().slice(0, 16).replace("T", " "),
  });
  commentInput.value = "";
  renderComments();
  persistComments();
});

commentList.addEventListener("click", (event) => {
  const editBtn = event.target.closest(".comment-edit-btn");
  if (editBtn) {
    const idx = Number(editBtn.dataset.commentIdx);
    if (Number.isNaN(idx) || !workingComments[idx]) return;
    const next = window.prompt("Edit comment", workingComments[idx].text || "");
    if (next === null) return;
    const text = String(next).trim();
    if (!text) return;
    workingComments[idx] = { ...workingComments[idx], text };
    renderComments();
    persistComments();
    return;
  }

  const deleteBtn = event.target.closest(".comment-delete-btn");
  if (deleteBtn) {
    const idx = Number(deleteBtn.dataset.commentIdx);
    if (Number.isNaN(idx)) return;
    workingComments = workingComments.filter((_, i) => i !== idx);
    renderComments();
    persistComments();
  }
});

renderDescriptionPreview();
renderAttachmentPreview(current);
renderComments();
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
      attachments: workingAttachments,
      comments: workingComments,
      updatedAt: new Date().toISOString(),
    };
  });

  saveRows(updated);
  window.location.href = `./issue-detail.html?rowKey=${encodeURIComponent(String(rowKey || ""))}&project=${encodeURIComponent(currentProject)}`;
});
