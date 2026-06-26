/* =====================================
   TNET - STATE MANAGER
===================================== */

let state = {
  currentPage: "home",
  isLoading: false,

  // Scan data
  currentScan: null,
  scanHistory: [],

  // AI data
  lastAnalysis: null,

  // UI state
  theme: "dark"
};
export function getState() {
  return state;
}
export function setState(updates) {
  state = {
    ...state,
    ...updates
  };

  // Debug (unaweza kuondoa production)
  console.log("STATE UPDATED:", state);
}
export function setCurrentPage(page) {
  state.currentPage = page;
}

export function setCurrentScan(scanData) {
  state.currentScan = scanData;
}

export function addScanHistory(result) {
  state.scanHistory.unshift(result);
}

export function setAnalysis(data) {
  state.lastAnalysis = data;
}
export function initState() {
  const saved = localStorage.getItem("tnet-state");

  if (saved) {
    state = JSON.parse(saved);
  }

  persistState();
}
export function persistState() {
  localStorage.setItem("tnet-state", JSON.stringify(state));
}
setInterval(() => {
  persistState();
}, 3000);
