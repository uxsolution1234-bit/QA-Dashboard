const ISSUE_STORAGE_KEY = "grid_r15_issue_rows";

function loadRows() {
  const raw = localStorage.getItem(ISSUE_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function saveRows(rows) {
  localStorage.setItem(ISSUE_STORAGE_KEY, JSON.stringify(rows));
}

const params = new URLSearchParams(window.location.search);
const rowKey = params.get("rowKey");
const form = document.getElementById("issueDetailForm");
const rows = loadRows();
const current = rows.find((r) => String(r.rowKey) === String(rowKey));

if (!current) {
  alert("Issue not found.");
  window.location.href = "./index.html#issueList";
}

form.elements.title.value = current.title || "";
form.elements.impactLevel.value = current.impactLevel || "Medium";
form.elements.issueStatus.value = current.issueStatus || "Open";
form.elements.platform.value = current.platform || "Dispatcher";
form.elements.occurrenceVersion.value = current.occurrenceVersion || "";
form.elements.modifiedVersion.value = current.modifiedVersion || "";
form.elements.description.value =
  current.description ||
  `+ Step :\n\n+ Actual Result :\n\n+ Expected Result :\n\n+ note :`;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fd = new FormData(form);
  const updated = rows.map((row) => {
    if (String(row.rowKey) !== String(rowKey)) return row;
    return {
      ...row,
      title: String(fd.get("title") || "").trim(),
      impactLevel: String(fd.get("impactLevel") || "Medium"),
      issueStatus: String(fd.get("issueStatus") || "Open"),
      platform: String(fd.get("platform") || "Dispatcher"),
      occurrenceVersion: String(fd.get("occurrenceVersion") || ""),
      modifiedVersion: String(fd.get("modifiedVersion") || ""),
      description: String(fd.get("description") || "").trim(),
      updatedAt: new Date().toISOString(),
    };
  });
  saveRows(updated);
  window.location.href = "./index.html#issueList";
});
