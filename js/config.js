/* =====================================
   TNET - CONFIG ENGINE
===================================== */

export const CONFIG = {
  APP_NAME: "TNET AI",
  VERSION: "1.0.0",

  // API SETTINGS
  API: {
    BASE_URL: "/api",
    SCAN_ENDPOINT: "/api/scan",
    REPORT_ENDPOINT: "/api/report"
  },

  // AI SETTINGS
  AI: {
    PROVIDER: "sightengine",
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    SUPPORTED_TYPES: ["image/jpeg", "image/png", "image/webp"]
  },

  // UI SETTINGS
  UI: {
    THEME: "dark",
    LOADER_DELAY: 800,
    TOAST_DURATION: 3000
  }
};
export const ENV = {
  SIGHTENGINE_USER: null,
  SIGHTENGINE_SECRET: null
};
export const CONSTANTS = {
  SCAN_STATUS: {
    IDLE: "idle",
    PROCESSING: "processing",
    SUCCESS: "success",
    ERROR: "error"
  },

  PAGES: {
    HOME: "home",
    SCAN: "scan",
    ANALYSIS: "analysis",
    FEED: "feed",
    PROFILE: "profile"
  }
};
export const FEATURES = {
  VIDEO_SCAN: false,
  LIVE_CAMERA: false,
  CLOUD_SYNC: false,
  AI_CHAT: false
};
