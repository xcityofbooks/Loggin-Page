const passViewBtn = document.querySelector(".password-view");
const passInput = document.getElementById("passonly");
const viewIcon = document.querySelector(".fa-sharp");
const loginBtn = document.getElementById("login-btn");
const signupLink = document.getElementById("signup-text");
const changeQuestion = document.querySelector(".text-change");
const mailContent = document.getElementById("mail-content");
const swapText = document.getElementById("log-sign");
const loginLink = document.getElementById("loginup-text");
const forgotQuest = document.getElementById("forgot-question");
console.log(signupLink);

passViewBtn.addEventListener("click", function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    viewIcon.classList.remove("fa-eye-slash");
    viewIcon.classList.add("fa-eye");
  } else {
    passInput.type = "password";
    viewIcon.classList.remove("fa-eye");
    viewIcon.classList.add("fa-eye-slash");
  }
});

signupLink.addEventListener("click", function () {
  changeQuestion.textContent = "Already have an account?";
  loginBtn.textContent = "Sign Up";
  mailContent.classList.remove("hidden");
  swapText.textContent = "Create your account";
  signupLink.classList.add("hidden");
  loginLink.classList.remove("hidden");
  forgotQuest.textContent = "";
});

loginLink.addEventListener("click", function () {
  changeQuestion.textContent = "Don't have an account?";
  loginBtn.textContent = "Log in";
  mailContent.classList.add("hidden");
  swapText.textContent = "Login to continue";
  signupLink.classList.remove("hidden");
  loginLink.classList.add("hidden");
  forgotQuest.textContent = "Forgot your password?";
});
