const dashboardData = {
  browserTitle: "GRID R15",
  logoText: "GRID R15_QA Report",
  sprint: "GME 7.18.0",
  start: "2026-04-20",
  end: "2026-05-11",
  unit: "QA Part",
  views: {
    dashboard: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "Dashboard",
      totalIssues: 37,
      resolvedIssues: 37,
      criticalIssues: 6,
      env: [
        { label: "STG", value: 26, color: "#3f8cff" },
        { label: "Livetest", value: 11, color: "#f4a259" },
      ],
      qaStatus: [
        { label: "N/A", value: 25, color: "#30d58f" },
        { label: "STG Done", value: 11, color: "#3f8cff" },
        { label: "Live Done", value: 1, color: "#f7c948" },
      ],
      compareTarget: "GME 7.17.0",
      comparison: [
        { label: "Total Issues", value: 37, diff: "-63 fewer than last sprint", positive: true },
        { label: "Critical (Highest+High)", value: 6, diff: "-6 fewer than last sprint", positive: true },
        { label: "Hard to Detect", value: 2, diff: "+1 more than last sprint", positive: false },
        { label: "Found in Livetest", value: 11, diff: "-9 fewer than last sprint", positive: true },
      ],
      assignees: [
        { name: "Manish Adhikari", issues: 12, color: "#3f8cff", tags: ["High 1"] },
        { name: "JY", issues: 8, color: "#30d58f", tags: ["High 3", "Hard to detect 1"] },
        { name: "SE", issues: 6, color: "#f7c948", tags: ["High 1"] },
        { name: "IU", issues: 5, color: "#f4a259", tags: ["Live found 2"] },
        { name: "DK", issues: 3, color: "#9b8cff", tags: ["Minor 3"] },
      ],
    },
    issueList: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "Issue List",
      totalIssues: 44,
      resolvedIssues: 29,
      criticalIssues: 9,
      env: [
        { label: "STG", value: 30, color: "#3f8cff" },
        { label: "Livetest", value: 14, color: "#f4a259" },
      ],
      qaStatus: [
        { label: "Open", value: 15, color: "#ff6b6b" },
        { label: "In Progress", value: 17, color: "#f7c948" },
        { label: "Done", value: 12, color: "#30d58f" },
      ],
      compareTarget: "Backlog Snapshot",
      comparison: [
        { label: "Open", value: 15, diff: "+4 from yesterday", positive: false },
        { label: "Reopened", value: 3, diff: "+1 from yesterday", positive: false },
        { label: "Blocked", value: 4, diff: "-2 from yesterday", positive: true },
        { label: "Need Triage", value: 7, diff: "+2 from yesterday", positive: false },
      ],
      assignees: [
        { name: "Manish Adhikari", issues: 13, color: "#3f8cff", tags: ["Open 4", "High 2"] },
        { name: "JY", issues: 9, color: "#30d58f", tags: ["Open 3"] },
        { name: "SE", issues: 8, color: "#f7c948", tags: ["Need triage 2"] },
        { name: "IU", issues: 7, color: "#f4a259", tags: ["Blocked 1"] },
      ],
      issueRows: [
        {
          no: 1,
          impactLevel: "Highest",
          platform: "Android",
          issueStatus: "Open",
          occurrenceVersion: "R15.0.0",
          modifiedVersion: "R15.0.2",
          title: "Login session expires immediately after MFA",
        },
        {
          no: 2,
          impactLevel: "High",
          platform: "iOS",
          issueStatus: "In Progress",
          occurrenceVersion: "R15.0.1",
          modifiedVersion: "R15.0.3",
          title: "Push notification deep-link opens wrong screen",
        },
        {
          no: 3,
          impactLevel: "High",
          platform: "Web",
          issueStatus: "Reopened",
          occurrenceVersion: "R15.0.0",
          modifiedVersion: "R15.0.2",
          title: "Export CSV missing timezone conversion for KST",
        },
        {
          no: 4,
          impactLevel: "Medium",
          platform: "Android",
          issueStatus: "Done",
          occurrenceVersion: "R15.0.0",
          modifiedVersion: "R15.0.1",
          title: "Filter reset button not clearing assignee value",
        },
        {
          no: 5,
          impactLevel: "Low",
          platform: "Web",
          issueStatus: "Open",
          occurrenceVersion: "R15.0.2",
          modifiedVersion: "-",
          title: "Tooltip overlap on narrow layout in issue detail",
        },
      ],
    },
    analysis: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "Analysis",
      totalIssues: 37,
      resolvedIssues: 31,
      criticalIssues: 6,
      env: [
        { label: "API", value: 18, color: "#3f8cff" },
        { label: "Client", value: 12, color: "#30d58f" },
        { label: "Infra", value: 7, color: "#f4a259" },
      ],
      qaStatus: [
        { label: "Regression", value: 10, color: "#ff6b6b" },
        { label: "New Defect", value: 19, color: "#3f8cff" },
        { label: "Known Issue", value: 8, color: "#f7c948" },
      ],
      compareTarget: "Root Cause Trend",
      comparison: [
        { label: "Spec gap", value: 11, diff: "-3 than last sprint", positive: true },
        { label: "Data issue", value: 8, diff: "+2 than last sprint", positive: false },
        { label: "Timing issue", value: 6, diff: "-1 than last sprint", positive: true },
        { label: "3rd party", value: 4, diff: "same as last sprint", positive: true },
      ],
      assignees: [
        { name: "SE", issues: 10, color: "#f7c948", tags: ["Spec gap 4"] },
        { name: "JY", issues: 9, color: "#30d58f", tags: ["Regression 3"] },
        { name: "Manish Adhikari", issues: 7, color: "#3f8cff", tags: ["Data 2"] },
        { name: "IU", issues: 5, color: "#f4a259", tags: ["Timing 2"] },
      ],
    },
    qaOpinion: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "QA Opinion",
      totalIssues: 37,
      resolvedIssues: 34,
      criticalIssues: 4,
      env: [
        { label: "Ready", value: 29, color: "#30d58f" },
        { label: "Watchlist", value: 8, color: "#f7c948" },
      ],
      qaStatus: [
        { label: "Approved", value: 23, color: "#30d58f" },
        { label: "Conditional", value: 10, color: "#f7c948" },
        { label: "Not Ready", value: 4, color: "#ff6b6b" },
      ],
      compareTarget: "Release Readiness",
      comparison: [
        { label: "Approval Score", value: 86, diff: "+5 than last report", positive: true },
        { label: "Risk Score", value: 21, diff: "-7 than last report", positive: true },
        { label: "Go/No-go Blockers", value: 2, diff: "-1 than last report", positive: true },
        { label: "Pending Clarification", value: 5, diff: "+1 than last report", positive: false },
      ],
      assignees: [
        { name: "QA Team", issues: 14, color: "#30d58f", tags: ["Approved 10"] },
        { name: "Dev Team", issues: 10, color: "#3f8cff", tags: ["Conditional 6"] },
        { name: "PM", issues: 7, color: "#f7c948", tags: ["Pending 5"] },
        { name: "Ops", issues: 6, color: "#f4a259", tags: ["Risk 2"] },
      ],
    },
  },
};

let currentView = "dashboard";

function toKoreanDate(isoDate) {
  return isoDate.replaceAll("-", ".");
}

function calcPeriodDays(start, end) {
  const one = new Date(start);
  const two = new Date(end);
  const diff = Math.ceil((two - one) / (1000 * 60 * 60 * 24)) + 1;
  return `${diff}d`;
}

function makeDonut(el, data) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cursor = 0;
  const stops = data.map((item) => {
    const start = (cursor / total) * 100;
    cursor += item.value;
    const end = (cursor / total) * 100;
    return `${item.color} ${start}% ${end}%`;
  });
  el.style.background = `conic-gradient(${stops.join(", ")})`;
}

function renderLegend(el, data) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  el.innerHTML = data
    .map((item) => {
      const pct = Math.round((item.value / total) * 100);
      return `<li><span class="dot" style="background:${item.color}"></span>${item.label} - ${item.value} cases (${pct}%)</li>`;
    })
    .join("");
}

function renderComparison(el, data) {
  el.innerHTML = data
    .map(
      (item) => `
      <article class="mini-card">
        <p class="mini-label">${item.label}</p>
        <p class="mini-value">${item.value}</p>
        <p class="mini-diff ${item.positive ? "" : "bad"}">${item.diff}</p>
      </article>
    `,
    )
    .join("");
}

function renderAssignees(el, assignees) {
  const max = Math.max(...assignees.map((a) => a.issues));
  el.innerHTML = assignees
    .map((a) => {
      const width = Math.round((a.issues / max) * 100);
      const tags = a.tags
        .map((tag) => {
          const yellow = tag.toLowerCase().includes("hard") || tag.toLowerCase().includes("triage");
          return `<span class="tag ${yellow ? "yellow" : ""}">${tag}</span>`;
        })
        .join("");
      return `
      <article class="person">
        <div class="person-head"><span>${a.name}</span><span>${a.issues} issues</span></div>
        <div class="bar"><span style="width:${width}%;background:${a.color}"></span></div>
        <div class="tag-row">${tags}</div>
      </article>`;
    })
    .join("");
}

function renderIssueTable(rows) {
  const body = document.getElementById("issueTableBody");
  body.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.no}</td>
        <td>${row.impactLevel}</td>
        <td>${row.platform}</td>
        <td>${row.issueStatus}</td>
        <td>${row.occurrenceVersion}</td>
        <td>${row.modifiedVersion}</td>
        <td>${row.title}</td>
      </tr>
    `,
    )
    .join("");
  document.getElementById("issueTableCount").textContent = `${rows.length} items`;
}

function toggleSections(viewKey) {
  const isIssueList = viewKey === "issueList";
  document.getElementById("midGrid").classList.toggle("hidden", isIssueList);
  document.getElementById("bottomGrid").classList.toggle("hidden", isIssueList);
  document.getElementById("issueTableSection").classList.toggle("hidden", !isIssueList);
}

function setActiveMenu(selectedView) {
  const items = document.querySelectorAll("#menuNav .menu-item");
  items.forEach((item) => {
    const isActive = item.dataset.view === selectedView;
    item.classList.toggle("active", isActive);
  });
}

function renderDashboard(baseData, viewKey) {
  const data = baseData.views[viewKey];
  const startK = toKoreanDate(baseData.start);
  const endK = toKoreanDate(baseData.end);
  const resolveRate = Math.round((data.resolvedIssues / data.totalIssues) * 100);

  currentView = viewKey;
  document.title = baseData.browserTitle;
  document.getElementById("logoText").textContent = baseData.logoText;
  document.getElementById("sprintName").textContent = baseData.sprint;
  document.getElementById("sidebarPeriod").textContent = `${startK} - ${endK}`;
  document.getElementById("versionBadge").textContent = baseData.sprint;
  document.getElementById("title").textContent = data.reportTitle;
  document.getElementById("subtitle").textContent = `${startK} ~ ${endK} | ${baseData.unit} | ${data.subtitleSuffix}`;
  document.getElementById("kpiTotal").textContent = data.totalIssues;
  document.getElementById("kpiResolved").textContent = data.resolvedIssues;
  document.getElementById("kpiResolveRate").textContent = `${resolveRate}%`;
  document.getElementById("kpiCritical").textContent = data.criticalIssues;
  document.getElementById("kpiDays").textContent = calcPeriodDays(baseData.start, baseData.end);
  document.getElementById("periodStart").textContent = baseData.start;
  document.getElementById("periodEnd").textContent = baseData.end;
  document.getElementById("compareTarget").textContent = `vs ${data.compareTarget}`;

  makeDonut(document.getElementById("envDonut"), data.env);
  makeDonut(document.getElementById("qaDonut"), data.qaStatus);
  renderLegend(document.getElementById("envLegend"), data.env);
  renderLegend(document.getElementById("qaLegend"), data.qaStatus);
  renderComparison(document.getElementById("compareGrid"), data.comparison);
  renderAssignees(document.getElementById("assigneeList"), data.assignees);
  renderIssueTable(data.issueRows || []);
  toggleSections(viewKey);
  setActiveMenu(viewKey);
}

function setupMenu(baseData) {
  const nav = document.getElementById("menuNav");
  nav.addEventListener("click", (event) => {
    const button = event.target.closest(".menu-item");
    if (!button) return;
    const viewKey = button.dataset.view;
    if (!viewKey || viewKey === currentView) return;
    renderDashboard(baseData, viewKey);
  });
}

setupMenu(dashboardData);
renderDashboard(dashboardData, "dashboard");
