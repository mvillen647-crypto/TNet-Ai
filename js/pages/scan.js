/* =====================================
   TNET - SCAN PAGE
===================================== */

import { validateImage, createImagePreview } from "../utils.js";

export function renderScan(view) {
  view.innerHTML = `
    <div class="scan">

      <!-- UPLOAD CARD -->
      <div class="card">
        <h2>Image Scan</h2>
        <p class="text-muted">
          Upload image to analyze authenticity & detect manipulation.
        </p>

        <input type="file" id="imageInput" accept="image/*" hidden />

        <button class="btn btn-primary" id="uploadBtn">
          <i class="fa-solid fa-cloud-arrow-up"></i>
          Upload Image
        </button>

        <div id="previewContainer" class="preview"></div>
      </div>

      <!-- ACTION -->
      <button class="btn btn-primary full" id="startScanBtn">
        <i class="fa-solid fa-brain"></i>
        Start AI Scan
      </button>

      <!-- STATUS -->
      <div class="card" id="statusBox">
        <p class="text-muted">Waiting for image...</p>
      </div>

    </div>
  `;

  initScanEvents();
}
let selectedFile = null;

function initScanEvents() {
  const input = document.getElementById("imageInput");
  const uploadBtn = document.getElementById("uploadBtn");
  const startBtn = document.getElementById("startScanBtn");
  const preview = document.getElementById("previewContainer");
  const statusBox = document.getElementById("statusBox");

  // Open file picker
  uploadBtn.addEventListener("click", () => {
    input.click();
  });

  // File selected
  input.addEventListener("change", (e) => {
    const file = e.target.files[0];

    const validation = validateImage(file);

    if (!validation.valid) {
      statusBox.innerHTML = `<p style="color:red">${validation.error}</p>`;
      return;
    }

    selectedFile = file;

    const imgURL = createImagePreview(file);

    preview.innerHTML = `
      <img src="${imgURL}" style="width:100%; border-radius:16px; margin-top:10px;" />
    `;

    statusBox.innerHTML = `<p style="color:lime">Image ready for scan</p>`;
  });

  // Start scan
  startBtn.addEventListener("click", async () => {
    if (!selectedFile) {
      statusBox.innerHTML = `<p style="color:red">Please upload image first</p>`;
      return;
    }

    statusBox.innerHTML = `<p>Scanning image with AI...</p>`;

    // Simulated scan (real API later)
    setTimeout(() => {
      statusBox.innerHTML = `
        <p style="color:orange">
          AI Result: Image analysis ready (API coming next sprint)
        </p>
      `;
    }, 2000);
  });
}
