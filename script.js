document.addEventListener("DOMContentLoaded", () => {
  const secretBtn = document.querySelector(".secret-btn") || document.getElementById("secret-btn");
  if (secretBtn) {
    secretBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "secret.html";
    });
  }

  // скролл к якорям #buy
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href").slice(1);
      if (!targetId) return;
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });


  const form = document.getElementById("buy-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const required = form.querySelectorAll("[required]");
      let ok = true;
      required.forEach((inp) => {
        if (!inp.checkValidity()) {
          inp.classList.add("invalid");
          ok = false;
        } else {
          inp.classList.remove("invalid");
        }
      });
      if (!ok) {
        e.preventDefault();
        alert("Проверьте правильность заполнения полей.");
      }
    });

    // маска пробелов для номера карты 
    const card = form.querySelector('input[name="card"]');
    if (card) {
      card.addEventListener("input", () => {
        const digits = card.value.replace(/\D/g, "").slice(0, 19);
        card.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
      });
    }
  }
});
