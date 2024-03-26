document.addEventListener("DOMContentLoaded", function () {
  var jobItems = document.querySelectorAll(".jobs");

  jobItems.forEach(function (jobItem) {
    jobItem.addEventListener("click", function () {
      jobItems.forEach(function (item) {
        item.classList.remove("job-clicked");
      });

      jobItem.classList.add("job-clicked");
    });
  });
});

// Add these functions to your existing JavaScript file
function openModal() {
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("postJobModal");
  overlay.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("postJobModal");
  overlay.style.display = "none";
  modal.style.display = "none";
}

function submitJobForm() {
  // Add your form submission logic here
  closeModal(); // Close the modal after submitting the form
}
