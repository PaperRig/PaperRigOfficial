// Flag to track if the API is downloaded or not
let isApiDownloaded = false;

function downloadApi() {
  // Start downloading the API
  window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-api.jar';
  
  // After downloading, mark the API as downloaded
  isApiDownloaded = true;

  // Close the modal
  closeModal();
  
  // Optionally, show a message like "API downloaded, now download mod versions."
  alert("API downloaded! Now you can download v1 or v2.");
}

function downloadV1() {
  if (!isApiDownloaded) {
    // If the API isn't downloaded, show the modal
    openModal();
  } else {
    // If API is downloaded, download v1
    window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-v1.jar';
  }
}

function downloadV2() {
  if (!isApiDownloaded) {
    // If the API isn't downloaded, show the modal
    openModal();
  } else {
    // If API is downloaded, download v2
    window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-v2.jar';
  }
}

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
