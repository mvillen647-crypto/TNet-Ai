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
function createRipple(button) {
  const ripple = document.createElement("span");

  ripple.classList.add("ripple");

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = "50%";
  ripple.style.top = "50%";

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 500);
}
