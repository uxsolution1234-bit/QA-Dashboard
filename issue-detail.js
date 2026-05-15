const dataStore = window.QADataStore;
const params = new URLSearchParams(window.location.search);
const projectFromQuery = String(params.get("project") || "").trim();
const currentProject = projectFromQuery || dataStore.getCurrentProject();
dataStore.setCurrentProject(currentProject);

function buildBackToListUrl() {
  return `./index.html?project=${encodeURIComponent(currentProject)}#issueList`;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
}

const rowKey = params.get("rowKey");
const issueId = params.get("issueId");
const form = document.getElementById("issueDetailForm");
const editToggleBtn = document.getElementById("editToggleBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const backBtns = document.querySelectorAll('a[href="./index.html#issueList"]');
const descriptionPreview = document.getElementById("descriptionPreview");
const attachmentPreviewList = document.getElementById("attachmentPreviewList");
const detailAttachmentInput = document.getElementById("detailAttachmentInput");
const detailAttachmentHint = document.getElementById("detailAttachmentHint");
const commentInput = document.getElementById("commentInput");
const commentAddBtn = document.getElementById("commentAddBtn");
const commentList = document.getElementById("commentList");

backBtns.forEach((btn) => {
  btn.href = buildBackToListUrl();
});

let rows = [];
let current = null;
let workingAttachments = [];
let workingComments = [];
let isEditMode = false;
let lastRemoteUpdatedAt = null;
const EDITOR_NAME_KEY = "grid_editor_name";

function parseStatuses(raw) {
  return String(raw || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function normalizeIssueStatus(raw) {
  const statuses = parseStatuses(raw).map((s) => s.toLowerCase());
  if (statuses.includes("open")) return "Open";
  if (statuses.includes("in progress") || statuses.includes("inprogress") || statuses.includes("in-progress")) return "In Progress";
  if (statuses.includes("closed")) return "Closed";
  if (statuses.includes("resolved")) return "Resolved";
  return "Open";
}

function getEditorName() {
  const saved = String(localStorage.getItem(EDITOR_NAME_KEY) || "").trim();
  return saved || "Unknown User";
}

function buildStatusHistoryComment(beforeStatus, afterStatus, editorName) {
  return {
    text: `[History] Issue Status changed: ${beforeStatus} -> ${afterStatus} (by ${editorName})`,
    createdAt: new Date().toISOString().slice(0, 16).replace("T", " "),
    system: true,
  };
}

function applyStatusSelectClass(selectEl) {
  if (!selectEl) return;
  const status = String(selectEl.value || "Open").toLowerCase();
  selectEl.classList.remove("status-open", "status-in-progress", "status-closed", "status-resolved");
  if (status === "in progress") selectEl.classList.add("status-in-progress");
  else if (status === "closed") selectEl.classList.add("status-closed");
  else if (status === "resolved") selectEl.classList.add("status-resolved");
  else selectEl.classList.add("status-open");
}

async function saveAllRows(nextRows) {
  rows = nextRows;
  await dataStore.saveRows(rows, currentProject);
}

function setFormMode(editMode) {
  isEditMode = Boolean(editMode);
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
  cancelBtn.href = buildBackToListUrl();
  attachmentPreviewList.classList.toggle("edit-mode", isEditMode);
  detailAttachmentInput.classList.toggle("hidden", !isEditMode);
  detailAttachmentHint.classList.toggle("hidden", !isEditMode);
  if (!isEditMode) detailAttachmentHint.textContent = "";
}

function renderComments() {
  if (!workingComments.length) {
    commentList.innerHTML = '<p class="attachment-empty">No comments yet.</p>';
    return;
  }
  commentList.innerHTML = workingComments
    .map((comment, idx) => {
      const actionButtons = comment?.system
        ? ""
        : `
          <div class="comment-actions">
            <button type="button" class="entry-btn secondary comment-edit-btn" data-comment-idx="${idx}">Edit</button>
            <button type="button" class="entry-btn danger-btn comment-delete-btn" data-comment-idx="${idx}">Delete</button>
          </div>
        `;
      return `
        <article class="comment-item">
          <p class="comment-meta">${escapeHtml(comment.createdAt || "")}</p>
          <p class="comment-body">${escapeHtml(comment.text || "")}</p>
          ${actionButtons}
        </article>
      `;
    })
    .join("");
}

function renderDescriptionPreview() {
  descriptionPreview.textContent = form.elements.description.value || "-";
}

function renderAttachmentPreview() {
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
          <p class="attachment-title">${escapeHtml(name)}</p>
          ${media}
          <div class="attachment-actions">
            <a class="entry-btn secondary attachment-download" href="${src}" download="${escapeHtml(name)}">Download</a>
            <button class="entry-btn danger-btn attachment-remove-btn" type="button" data-attachment-idx="${idx}">Delete</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function bindCurrentToForm() {
  form.elements.title.value = current.title || "";
  form.elements.impactLevel.value = current.impactLevel || "Medium";
  form.elements.platform.value = current.platform || "Dispatcher";
  form.elements.issueStatus.value = normalizeIssueStatus(current.issueStatus || "Open");
  form.elements.occurrenceVersion.value = current.occurrenceVersion || "";
  form.elements.modifiedVersion.value = current.modifiedVersion || "";
  form.elements.description.value =
    current.description ||
    `+ Step :\n\n+ Actual Result :\n\n+ Expected Result :\n\n+ note :`;

  applyStatusSelectClass(form.elements.issueStatus);

  workingAttachments = Array.isArray(current.attachments) ? [...current.attachments] : [];
  workingComments = Array.isArray(current.comments) ? [...current.comments] : [];
}

async function persistComments() {
  const nextRows = rows.map((r) => {
    if (String(r.rowKey || "") !== String(current.rowKey || "")) return r;
    return {
      ...r,
      comments: [...workingComments],
      updatedAt: new Date().toISOString(),
    };
  });
  await saveAllRows(nextRows);
}

async function bootstrap() {
  rows = await dataStore.loadRows(currentProject);
  current =
    rows.find((r) => String(r.issueId || "") === String(issueId || "")) ||
    rows.find((r) => String(r.rowKey || "") === String(rowKey || ""));

  if (!current) {
    alert("Issue not found.");
    window.location.href = buildBackToListUrl();
    return;
  }

  bindCurrentToForm();
  renderDescriptionPreview();
  renderAttachmentPreview();
  renderComments();
  setFormMode(false);
  lastRemoteUpdatedAt = await dataStore.getRemoteUpdatedAt(currentProject);
}

async function refreshFromRemoteIfNeeded() {
  if (!dataStore.isCollabEnabled() || isEditMode) return;
  const remoteUpdatedAt = await dataStore.getRemoteUpdatedAt(currentProject);
  if (!remoteUpdatedAt || !lastRemoteUpdatedAt || remoteUpdatedAt === lastRemoteUpdatedAt) return;
  lastRemoteUpdatedAt = remoteUpdatedAt;

  rows = await dataStore.loadRows(currentProject);
  current =
    rows.find((r) => String(r.issueId || "") === String(issueId || "")) ||
    rows.find((r) => String(r.rowKey || "") === String(rowKey || ""));
  if (!current) return;
  bindCurrentToForm();
  renderDescriptionPreview();
  renderAttachmentPreview();
  renderComments();
  setFormMode(false);
}

editToggleBtn.addEventListener("click", () => {
  setFormMode(true);
});

form.elements.issueStatus.addEventListener("change", () => {
  applyStatusSelectClass(form.elements.issueStatus);
});

attachmentPreviewList.addEventListener("click", (event) => {
  const btn = event.target.closest(".attachment-remove-btn");
  if (!btn) return;
  const idx = Number(btn.dataset.attachmentIdx);
  if (Number.isNaN(idx)) return;
  workingAttachments = workingAttachments.filter((_, i) => i !== idx);
  renderAttachmentPreview();
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
  renderAttachmentPreview();
});

commentAddBtn.addEventListener("click", async () => {
  const text = String(commentInput.value || "").trim();
  if (!text) return;
  workingComments.unshift({
    text,
    createdAt: new Date().toISOString().slice(0, 16).replace("T", " "),
  });
  commentInput.value = "";
  renderComments();
  await persistComments();
});

commentList.addEventListener("click", async (event) => {
  const editBtn = event.target.closest(".comment-edit-btn");
  if (editBtn) {
    const idx = Number(editBtn.dataset.commentIdx);
    if (Number.isNaN(idx) || !workingComments[idx]) return;
    if (workingComments[idx]?.system) return;
    const next = window.prompt("Edit comment", workingComments[idx].text || "");
    if (next === null) return;
    const text = String(next).trim();
    if (!text) return;
    workingComments[idx] = { ...workingComments[idx], text };
    renderComments();
    await persistComments();
    return;
  }

  const deleteBtn = event.target.closest(".comment-delete-btn");
  if (deleteBtn) {
    const idx = Number(deleteBtn.dataset.commentIdx);
    if (Number.isNaN(idx)) return;
    if (workingComments[idx]?.system) return;
    workingComments = workingComments.filter((_, i) => i !== idx);
    renderComments();
    await persistComments();
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fd = new FormData(form);
  const nextStatus = normalizeIssueStatus(String(fd.get("issueStatus") || "Open"));
  const beforeStatus = normalizeIssueStatus(current.issueStatus || "Open");
  let nextComments = [...workingComments];
  if (beforeStatus !== nextStatus) {
    const editorName = getEditorName();
    nextComments.unshift(buildStatusHistoryComment(beforeStatus, nextStatus, editorName));
    workingComments = [...nextComments];
    renderComments();
  }

  const nextRows = rows.map((row) => {
    if (String(row.rowKey || "") !== String(current.rowKey || "")) return row;
    return {
      ...row,
      title: String(fd.get("title") || "").trim(),
      impactLevel: String(fd.get("impactLevel") || "Medium"),
      issueStatus: nextStatus,
      platform: String(fd.get("platform") || "Dispatcher"),
      occurrenceVersion: String(fd.get("occurrenceVersion") || ""),
      modifiedVersion: String(fd.get("modifiedVersion") || ""),
      description: String(fd.get("description") || "").trim(),
      attachments: workingAttachments,
      comments: nextComments,
      updatedAt: new Date().toISOString(),
    };
  });

  await saveAllRows(nextRows);
  const nextIssueId = String(current.issueId || issueId || "");
  if (nextIssueId) {
    window.location.href = `./issue-detail.html?issueId=${encodeURIComponent(nextIssueId)}&project=${encodeURIComponent(currentProject)}`;
  } else {
    window.location.href = `./issue-detail.html?rowKey=${encodeURIComponent(String(rowKey || ""))}&project=${encodeURIComponent(currentProject)}`;
  }
});

bootstrap();

window.setInterval(async () => {
  await refreshFromRemoteIfNeeded();
}, 10000);
