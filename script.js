const API_KEY = "paperrig_api_downloaded";

function isApiDownloaded() {
  return localStorage.getItem(API_KEY) === "true";
}

function setApiDownloaded() {
  localStorage.setItem(API_KEY, "true");
}

function openModal() {
  document.getElementById("modal").classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

function downloadApi() {
  setApiDownloaded();
  window.location.href = "downloads/paperrig-api.jar";
}

function requireApi() {
  if (!isApiDownloaded()) {
    openModal();
    return false;
  }
  return true;
}

function downloadV1() {
  if (!requireApi()) return;
  window.location.href = "downloads/paperrig-v1.jar";
}

function downloadV2() {
  if (!requireApi()) return;
  window.location.href = "downloads/paperrig-v2.jar";
}
