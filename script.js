window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("auth").classList.remove("hidden");
  }, 3000); // Splash длится 3 сек
};

function showRegister() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

let sentCode = "";

function sendCode(mode) {
  sentCode = Math.floor(10000 + Math.random() * 90000).toString(); // 5 цифр
  alert("Do not show anyone! Code:\n" + sentCode);

  if (mode === 'register') {
    document.getElementById("code-sent-msg").innerText = "Code sent. Check your messages.";
    document.getElementById("code-sent-msg").classList.remove("hidden");
    document.getElementById("reg-code").classList.remove("hidden");
    document.getElementById("verify-btn").classList.remove("hidden");
  } else {
    document.getElementById("login-code-msg").innerText = "Code sent. Check your messages.";
    document.getElementById("login-code-msg").classList.remove("hidden");
    document.getElementById("login-code").classList.remove("hidden");
    document.getElementById("login-verify-btn").classList.remove("hidden");
  }

  // Disable resend for 1 minute
  let resendButton = document.querySelector(`#${mode}-form button`);
  resendButton.disabled = true;
  setTimeout(() => resendButton.disabled = false, 60000);
}

function verifyCode(mode) {
  let inputCode = document.getElementById(mode === 'register' ? "reg-code" : "login-code").value;
  if (inputCode === sentCode) {
    alert("Welcome to Wave 🎉");
    window.location.href = "chat.html"; // сюда переходим после успеха
  } else {
    alert("Incorrect code. Try again.");
  }
}