/* =====================================
   TNET - UTILITIES ENGINE
===================================== */

/* ================================
   ELEMENT SELECTOR
================================ */

export function $(selector) {
  return document.querySelector(selector);
}

export function $all(selector) {
  return document.querySelectorAll(selector);
}
export function validateImage(file) {
  if (!file) {
    return { valid: false, error: "No file selected" };
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "Invalid file type" };
  }

  const maxSize = 10 * 1024 * 1024; // 10MB

  if (file.size > maxSize) {
    return { valid: false, error: "File too large (max 10MB)" };
  }

  return { valid: true };
}
export function createImagePreview(file) {
  return URL.createObjectURL(file);
}
export function formatDate(date) {
  return new Date(date).toLocaleString();
}

export function formatScore(score) {
  return `${Math.round(score * 100)}%`;
}
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function handleError(error) {
  console.error("TNET ERROR:", error);

  return {
    success: false,
    message: error?.message || "Something went wrong"
  };
}
export function normalizeScore(value) {
  if (!value) return 0;
  return Math.min(Math.max(value, 0), 1);
}
