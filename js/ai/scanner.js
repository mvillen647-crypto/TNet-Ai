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
