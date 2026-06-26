/* =====================================
   TNET - APP ENGINE (BOOT FILE)
===================================== */

import { initRouter } from "./js/router.js";
import { initNavigation } from "./js/navigation.js";
import { initState } from "./js/state.js";

/* ================================
   BOOT APP
================================ */

document.addEventListener("DOMContentLoaded", () => {

  // Initialize State
  initState();

  // Initialize Navigation
  initNavigation();

  // Initialize Router
  initRouter();

  // Hide Loader after startup
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  setTimeout(() => {
    loader.classList.add("hidden");
    app.classList.remove("hidden");
  }, 800);

});
