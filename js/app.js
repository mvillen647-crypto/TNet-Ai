/* =====================================
   TNET - APP ORCHESTRATOR
===================================== */

import { initState } from "./state.js";
import { initRouter } from "./router.js";
import { initNavigation } from "./navigation.js";
import { CONFIG } from "./config.js";
export function initApp() {
  console.log(`🚀 Starting ${CONFIG.APP_NAME} v${CONFIG.VERSION}`);

  // 1. Initialize State (memory system)
  initState();

  // 2. Initialize Router (pages system)
  initRouter();

  // 3. Initialize Navigation (UX system)
  initNavigation();

  // 4. Boot sequence complete
  bootComplete();
}
function bootComplete() {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.3s ease";

    setTimeout(() => {
      loader.style.display = "none";
      app.classList.remove("hidden");
    }, 300);

  }, CONFIG.UI.LOADER_DELAY);
}
window.addEventListener("error", (event) => {
  console.error("TNET GLOBAL ERROR:", event.error);
});
export function retryInit() {
  console.log("🔄 Retrying TNET initialization...");
  initApp();
}

