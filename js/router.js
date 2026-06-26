/* =====================================
   TNET - ROUTER ENGINE
===================================== */

import { renderHome } from "./pages/home.js";
import { renderScan } from "./pages/scan.js";
import { renderAnalysis } from "./pages/analysis.js";
import { renderFeed } from "./pages/feed.js";
import { renderProfile } from "./pages/profile.js";

/* ================================
   ROUTES MAP
================================ */

const routes = {
  home: renderHome,
  scan: renderScan,
  analysis: renderAnalysis,
  feed: renderFeed,
  profile: renderProfile
};

/* ================================
   CURRENT STATE
================================ */

let currentPage = "home";

/* ================================
   NAVIGATE FUNCTION
================================ */

export function navigate(page) {
  const view = document.getElementById("view");

  if (!routes[page]) {
    console.error(`Route not found: ${page}`);
    return;
  }

  currentPage = page;

  // Clear view
  view.innerHTML = "";

  // Render new page
  routes[page](view);

  // Update active nav
  updateActiveNav(page);
}

/* ================================
   ACTIVE NAV UPDATE
================================ */

function updateActiveNav(page) {
  const buttons = document.querySelectorAll(".nav-item");

  buttons.forEach(btn => {
    btn.classList.remove("active");

    if (btn.dataset.page === page) {
      btn.classList.add("active");
    }
  });
}

/* ================================
   INIT ROUTER
================================ */

export function initRouter() {
  // Default page
  navigate("home");

  // Listen navigation clicks
  const buttons = document.querySelectorAll(".nav-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      navigate(page);
    });
  });
}
