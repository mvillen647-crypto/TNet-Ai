/* =====================================
   TNET - HOME PAGE
===================================== */

export function renderHome(view) {
  view.innerHTML = `
    <div class="home">

      <!-- HERO SECTION -->
      <div class="card hero-card">
        <h2>Welcome to TNET AI</h2>
        <p class="text-muted">
          Detect fake images, deepfakes, and manipulated media instantly.
        </p>

        <button class="btn btn-primary" id="quickScanBtn">
          <i class="fa-solid fa-magnifying-glass"></i>
          Quick Scan
        </button>
      </div>

      <!-- STATS -->
      <div class="card">
        <h3>Overview</h3>

        <div class="stats">
          <div class="stat">
            <h4>0</h4>
            <p class="text-muted">Scans</p>
          </div>

          <div class="stat">
            <h4>0%</h4>
            <p class="text-muted">Risk</p>
          </div>

          <div class="stat">
            <h4>0</h4>
            <p class="text-muted">Alerts</p>
          </div>
        </div>
      </div>

      <!-- RECENT ACTIVITY -->
      <div class="card">
        <h3>Recent Activity</h3>
        <p class="text-muted">No scans yet. Start your first scan.</p>
      </div>

    </div>
  `;

  initHomeEvents();
}
function initHomeEvents() {
  const btn = document.getElementById("quickScanBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Scan feature will connect to Scan Page next sprint 🔍");
    });
  }
}
