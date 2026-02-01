function downloadApi() {
  window.location.href = "https://github.com/PaperRig/PaperRigOfficial/raw/refs/heads/main/downloads/paperrig-api.jar";
  closeModal(); // Close the modal when the API is downloaded
}

function downloadV1() {
  window.location.href = "downloads/paperrig-v1.zip";
}

function downloadV2() {
  window.location.href = "downloads/paperrig-v2.zip";
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
