/* =====================================
   TNET - NAVIGATION ENGINE
===================================== */

import { navigate } from "./router.js";

/* ================================
   INIT NAVIGATION
================================ */

export function initNavigation() {
  const buttons = document.querySelectorAll(".nav-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Ripple effect
      createRipple(btn);

      // Navigate
      const page = btn.dataset.page;
      navigate(page);

    });
  });
}
