(function () {
  const CURRENT_PROJECT_KEY = "grid_current_project";
  const DEFAULT_PROJECT = "GRID R15";
  const PROJECT_STORAGE_KEYS = {
    "GRID R15": "grid_r15_issue_rows",
    "Compact 고도화": "compact_advanced_issue_rows",
  };

  const config = window.QA_SUPABASE_CONFIG || {};
  const tableName = String(config.table || "qa_issue_projects");
  let client = null;
  let ready = false;
  let status = "local";

  function getStorageKey(project) {
    return PROJECT_STORAGE_KEYS[project] || `project_rows_${encodeURIComponent(project)}`;
  }

  function getCurrentProject() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = String(params.get("project") || "").trim();
    const fromStorage = String(localStorage.getItem(CURRENT_PROJECT_KEY) || "").trim();
    return fromQuery || fromStorage || DEFAULT_PROJECT;
  }

  function setCurrentProject(project) {
    localStorage.setItem(CURRENT_PROJECT_KEY, String(project || DEFAULT_PROJECT));
  }

  function parseRows(raw) {
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function loadRowsLocal(project) {
    return parseRows(localStorage.getItem(getStorageKey(project)));
  }

  function saveRowsLocal(project, rows) {
    localStorage.setItem(getStorageKey(project), JSON.stringify(Array.isArray(rows) ? rows : []));
  }

  function hasSupabaseConfig() {
    return (
      typeof config.url === "string" &&
      config.url.trim() &&
      typeof config.anonKey === "string" &&
      config.anonKey.trim()
    );
  }

  async function ensureReady() {
    if (ready) return;
    ready = true;
    if (!hasSupabaseConfig() || !window.supabase || typeof window.supabase.createClient !== "function") {
      status = "local";
      return;
    }
    try {
      client = window.supabase.createClient(config.url, config.anonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      status = "supabase";
    } catch (_) {
      client = null;
      status = "local";
    }
  }

  async function readRemoteRecord(project) {
    const { data, error } = await client
      .from(tableName)
      .select("project,rows,updated_at")
      .eq("project", project)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  }

  async function writeRemoteRows(project, rows) {
    const payload = {
      project,
      rows: Array.isArray(rows) ? rows : [],
      updated_at: new Date().toISOString(),
    };
    const { error } = await client.from(tableName).upsert(payload, { onConflict: "project" });
    if (error) throw error;
  }

  async function loadRows(project = getCurrentProject()) {
    await ensureReady();

    if (!client || status !== "supabase") {
      return loadRowsLocal(project);
    }

    try {
      const remote = await readRemoteRecord(project);
      if (remote && Array.isArray(remote.rows)) {
        saveRowsLocal(project, remote.rows);
        return remote.rows;
      }

      const localRows = loadRowsLocal(project);
      await writeRemoteRows(project, localRows);
      return localRows;
    } catch (_) {
      status = "local";
      return loadRowsLocal(project);
    }
  }

  async function saveRows(rows, project = getCurrentProject()) {
    await ensureReady();
    const safeRows = Array.isArray(rows) ? rows : [];
    saveRowsLocal(project, safeRows);

    if (!client || status !== "supabase") return;

    try {
      await writeRemoteRows(project, safeRows);
    } catch (_) {
      status = "local";
    }
  }

  async function getRemoteUpdatedAt(project = getCurrentProject()) {
    await ensureReady();
    if (!client || status !== "supabase") return null;
    try {
      const remote = await readRemoteRecord(project);
      return remote?.updated_at || null;
    } catch (_) {
      return null;
    }
  }

  window.QADataStore = {
    DEFAULT_PROJECT,
    CURRENT_PROJECT_KEY,
    getCurrentProject,
    setCurrentProject,
    getStorageKey,
    loadRows,
    saveRows,
    loadRowsLocal,
    saveRowsLocal,
    isCollabEnabled() {
      return status === "supabase";
    },
    async init() {
      await ensureReady();
      return status;
    },
    async getRemoteUpdatedAt(project) {
      return getRemoteUpdatedAt(project);
    },
    getMode() {
      return status;
    },
  };
})();
