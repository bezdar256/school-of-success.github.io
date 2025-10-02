document.addEventListener("DOMContentLoaded", () => {
  const secretBtn = document.getElementById("secret-btn");
  if (secretBtn) {
    secretBtn.addEventListener("click", () => {
      window.location.href = "secret.html";
    });
  }
});
