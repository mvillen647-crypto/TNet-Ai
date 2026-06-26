/* =====================================
   TNET - AI SCAN API (Vercel)
===================================== */

export default async function handler(req, res) {
  // Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: "No image provided"
      });
    }

    // Sightengine credentials (Vercel ENV)
    const user = process.env.SIGHTENGINE_USER;
    const secret = process.env.SIGHTENGINE_SECRET;

    const url = `https://api.sightengine.com/1.0/check.json`;

    const params = new URLSearchParams();
    params.append("url", imageUrl);
    params.append("models", "genai,deepfake,face,properties,offensive");

    params.append("api_user", user);
    params.append("api_secret", secret);

    // Call Sightengine API
    const response = await fetch(url, {
      method: "POST",
      body: params
    });

    const data = await response.json();

    // Return AI result
    return res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "AI scan failed",
      error: error.message
    });
  }
}
