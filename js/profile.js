const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

// Toggle dropdown visibility on profile button click
profileBtn.addEventListener("click", () => {
  profileDropdown.classList.toggle("hidden");
});

// Hide dropdown when clicking outside of it
document.addEventListener("click", (e) => {
  if (!profileDropdown.contains(e.target) && e.target !== profileBtn) {
    profileDropdown.classList.add("hidden");
  }
});
