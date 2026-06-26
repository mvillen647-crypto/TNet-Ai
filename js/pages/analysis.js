/* =====================================
   TNET - ANALYSIS PAGE
===================================== */

import { getState } from "../state.js";

export function renderAnalysis(view) {
  const state = getState();
  const data = state.lastAnalysis;

  if (!data) {
    view.innerHTML = `
      <div class="card">
        <h2>Analysis</h2>
        <p class="text-muted">No scan data available yet.</p>
      </div>
    `;
    return;
  }

  const a = data.analysis;

  view.innerHTML = `
    <div class="analysis">

      <!-- VERDICT CARD -->
      <div class="card verdict">
        <h2>AI Verdict</h2>
        <h1>${a.verdict}</h1>

        <p class="text-muted">
          Risk Score: ${(a.riskScore * 100).toFixed(0)}%
        </p>
      </div>

      <!-- SCORE BREAKDOWN -->
      <div class="card">
        <h3>AI Breakdown</h3>

        <div class="metric">
          <p>AI Generated Probability</p>
          <strong>${(a.aiProbability * 100).toFixed(0)}%</strong>
        </div>

        <div class="metric">
          <p>Deepfake Score</p>
          <strong>${(a.deepfakeScore * 100).toFixed(0)}%</strong>
        </div>

        <div class="metric">
          <p>Faces Detected</p>
          <strong>${a.faceCount}</strong>
        </div>
      </div>

      <!-- RISK BAR -->
      <div class="card">
        <h3>Risk Level</h3>

        <div class="risk-bar">
          <div class="risk-fill" style="width:${a.riskScore * 100}%"></div>
        </div>
      </div>

      <!-- RAW DATA -->
      <div class="card">
        <h3>Technical Data</h3>
        <p class="text-muted">
          AI analysis completed using Sightengine models.
        </p>
      </div>

    </div>
  `;
}
