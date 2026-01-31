const downloadCounts = {
  api: 0,
  v1: 153912,
  v2: 94102
};

function startDownload(type) {
  if (type !== "api") {
    // If API not downloaded, show popup
    showPopup();
    return;
  }

  downloadFile("api");
}

function downloadFile(type) {
  const links = {
    api: "downloads/paperrig-api.jar",
    v1: "downloads/paperrig-v1.jar",
    v2: "downloads/paperrig-v2.jar"
  };

  const link = document.createElement("a");
  link.href = links[type];
  link.download = links[type].split("/").pop();
  document.body.appendChild(link);
  link.click();
  link.remove();

  if (type === "v1" || type === "v2") {
    downloadCounts[type]++;
  }
}

function showPopup() {
  document.getElementById("api-popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("api-popup").classList.add("hidden");
}

function downloadApi() {
  closePopup();
  downloadFile("api");
}

