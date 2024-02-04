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
