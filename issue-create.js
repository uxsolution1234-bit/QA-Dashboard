const dataStore = window.QADataStore;
const currentProject = dataStore.getCurrentProject();
dataStore.setCurrentProject(currentProject);
const backToListUrl = `./index.html?project=${encodeURIComponent(currentProject)}#issueList`;
document.querySelectorAll('a[href="./index.html#issueList"]').forEach((el) => {
  el.href = backToListUrl;
});

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const attachmentInput = document.getElementById("attachmentInput");
const attachmentHint = document.getElementById("attachmentHint");
const issueStatusSelect = document.querySelector('select[name="issueStatus"]');

function applyStatusSelectClass(selectEl) {
  if (!selectEl) return;
  const status = String(selectEl.value || "Open").toLowerCase();
  selectEl.classList.remove("status-open", "status-in-progress", "status-closed", "status-resolved");
  if (status === "in progress") selectEl.classList.add("status-in-progress");
  else if (status === "closed") selectEl.classList.add("status-closed");
  else if (status === "resolved") selectEl.classList.add("status-resolved");
  else selectEl.classList.add("status-open");
}

if (issueStatusSelect) {
  applyStatusSelectClass(issueStatusSelect);
  issueStatusSelect.addEventListener("change", () => applyStatusSelectClass(issueStatusSelect));
}

attachmentInput.addEventListener("change", () => {
  const files = Array.from(attachmentInput.files || []);
  if (!files.length) {
    if (attachmentHint) attachmentHint.textContent = "";
    return;
  }
  if (attachmentHint) attachmentHint.textContent = `${files.length} file(s): ${files.map((f) => f.name).join(", ")}`;
});

document.getElementById("issueCreateForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const fd = new FormData(form);
  const rows = await dataStore.loadRows(currentProject);
  const rowKey = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const files = Array.from(attachmentInput.files || []);
  const issueStatus = String(fd.get("issueStatus") || "Open");

  const attachments = await Promise.all(
    files.map(async (file) => ({
      name: file.name,
      type: file.type,
      dataUrl: await fileToDataUrl(file),
    })),
  );

  rows.unshift({
    rowKey,
    createdAt: new Date().toISOString(),
    no: 1,
    date: "",
    issueStatus,
    impactLevel: String(fd.get("impactLevel") || "Medium"),
    platform: String(fd.get("platform") || "Dispatcher"),
    occurrenceVersion: String(fd.get("occurrenceVersion") || ""),
    modifiedVersion: String(fd.get("modifiedVersion") || ""),
    title: String(fd.get("title") || "").trim(),
    description: String(fd.get("description") || "").trim(),
    issueUrl: "",
    attachments,
  });

  const resequenced = rows.map((row, idx) => ({
    ...row,
    no: idx + 1,
  }));

  await dataStore.saveRows(resequenced, currentProject);
  window.location.href = `./index.html?project=${encodeURIComponent(currentProject)}#issueList`;
});
