function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}

function toggleConfirmPasswordVisibility() {
  var confirmPasswordInput = document.getElementById("confirmpassword");
  var toggleButton = document.querySelector(".toggle-confirmpassword");

  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    confirmPasswordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}
