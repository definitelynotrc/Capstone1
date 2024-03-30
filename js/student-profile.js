document.addEventListener("DOMContentLoaded", function () {
  const editProfileButton = document.getElementById("editProfileButton");
  const editProfileModal = document.getElementById("editProfileModal");
  const closeModal = document.querySelector(".close");

  // Show modal when "Edit Profile" button is clicked
  editProfileButton.addEventListener("click", function () {
    editProfileModal.style.display = "block";
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    editProfileModal.style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === editProfileModal) {
      editProfileModal.style.display = "none";
    }
  });

  // Prevent the modal from closing when clicking inside the modal content
  editProfileModal.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
