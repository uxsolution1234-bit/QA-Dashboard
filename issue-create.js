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

attachmentInput.addEventListener("change", () => {
  const files = Array.from(attachmentInput.files || []);
  if (!files.length) {
    attachmentHint.textContent = "선택한 파일이 없어요.";
    return;
  }
  attachmentHint.textContent = `${files.length}개 파일 선택됨: ${files.map((f) => f.name).join(", ")}`;
});

document.getElementById("issueCreateForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const fd = new FormData(form);
  const rows = loadRows();
  const rowKey = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const files = Array.from(attachmentInput.files || []);
  const statuses = Array.from(form.querySelectorAll('input[name="issueStatusMulti"]:checked')).map((el) => el.value);
  if (!statuses.length) {
    alert("Issue Status를 최소 1개 선택해 주세요.");
    return;
  }
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
    issueStatus: statuses.join(", "),
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
  saveRows(resequenced);
  window.location.href = "./index.html#issueList";
});
