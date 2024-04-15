document.addEventListener("DOMContentLoaded", function () {
  const editProfileButton = document.getElementById("editProfileButton");
  const editProfileModal = document.getElementById("editProfileModal");
  const editProfileCloseBtn = document.querySelector(
    "#editProfileModal .close"
  );
  const notificationModal = document.getElementById("notificationModal");
  const notificationIcon = document.getElementById("notificationIcon");
  const notificationCloseBtn = document.querySelector(
    "#notificationModal .notif-close"
  );

  // Show notification modal when notification icon is clicked
  notificationIcon.onclick = function () {
    notificationModal.style.display = "block";
  };

  // Close notification modal when the close button is clicked
  notificationCloseBtn.onclick = function () {
    notificationModal.style.display = "none";
  };

  // Close notification modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target == notificationModal) {
      notificationModal.style.display = "none";
    }
  };
});

function contactus() {
  window.location.href = "contact-us.html";
}
function aboutus() {
  window.location.href = "about-us.html";
}
function logout() {
  window.location.href = "index.html";
}

function studprof() {
  window.location.href = "student-profile.html";
}
