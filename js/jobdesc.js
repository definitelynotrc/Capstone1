const mapContainer = document.getElementById("mapContainer");
const dropdownIcon = document.getElementById("openMap");

// Toggle map visibility on dropdown icon click
dropdownIcon.addEventListener("click", () => {
  mapContainer.classList.toggle("hidden");
});
