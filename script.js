function downloadV1() {
  window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-v1.jar';
}

function downloadV2() {
  window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-v2.jar';
}

function downloadApi() {
  window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-api.jar';
  closeModal(); // Close the modal once the API is downloaded
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
