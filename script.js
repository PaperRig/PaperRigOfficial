// Flag to track if the API is downloaded or not
let isApiDownloaded = false;

// Function to start downloading the API
function downloadApi() {
  // Start downloading the API
  window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-api.jar';
  
  // After starting the download, mark the API as downloaded
  isApiDownloaded = true;

  // Close the modal after downloading the API
  closeModal();
  
  // Optionally, show a message like "API downloaded, now download v1 or v2."
  alert("API downloaded! Now you can download v1 or v2.");
}

// Function to download v1
function downloadV1() {
  if (!isApiDownloaded) {
    // If the API isn't downloaded, show the modal
    openModal();
  } else {
    // If API is downloaded, download v1
    window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-v1.jar';
  }
}

// Function to download v2
function downloadV2() {
  if (!isApiDownloaded) {
    // If the API isn't downloaded, show the modal
    openModal();
  } else {
    // If API is downloaded, download v2
    window.location.href = 'https://github.com/PaperRig/PaperRigOfficial/raw/main/downloads/paperrig-v2.jar';
  }
}

// Function to open the modal
function openModal() {
  // Show the modal when the user tries to download v1 or v2 without the API
  document.getElementById('modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  // Hide the modal
  document.getElementById('modal').style.display = 'none';
}
