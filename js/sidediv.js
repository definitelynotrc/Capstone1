function toggleSideDiv() {
  const sideDiv = document.getElementById("sideDiv");
  if (sideDiv.style.right === "0px") {
    sideDiv.style.right = "-300px";
  } else {
    sideDiv.style.right = "0px";
  }
}
document.querySelectorAll("#viewSideDiv").forEach((el) => {
  el.addEventListener("click", toggleSideDiv);
});
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("sideDiv").style.right = "-300px";
});
