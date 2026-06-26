/* =====================================
   TNET - AI SCANNER BRIDGE
===================================== */

import { handleError } from "../utils.js";
import { CONFIG } from "../config.js";

export async function scanImage(file) {
  try {
    if (!file) {
      return {
        success: false,
        message: "No file provided"
      };
    }

    // Convert file to base64 (simple approach for v1)
    const base64 = await toBase64(file);

    // Call backend API
    const response = await fetch(CONFIG.API.SCAN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        imageUrl: base64
      })
    });

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Scan failed"
      };
    }

    // Format AI response
    return formatAIResponse(result.data);

  } catch (error) {
    return handleError(error);
  }
}
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
function formatAIResponse(data) {
  if (!data) {
    return {
      success: false,
      message: "No AI data received"
    };
  }

  // Extract useful signals
  const aiScore = data?.type?.ai_generated || 0;
  const deepfake = data?.deepfake || {};
  const faces = data?.faces || [];

  // Risk calculation (simple v1 logic)
  const riskScore = Math.min(
    1,
    aiScore +
    (deepfake?.prob || 0) +
    (faces.length > 1 ? 0.2 : 0)
  );

  return {
    success: true,
    analysis: {
      aiProbability: aiScore,
      deepfakeScore: deepfake?.prob || 0,
      faceCount: faces.length,
      riskScore: riskScore,
      verdict:
        riskScore > 0.7
          ? "High Risk (Possible Fake)"
          : riskScore > 0.4
          ? "Medium Risk"
          : "Likely Authentic"
    },
    raw: data
  };
                     }
