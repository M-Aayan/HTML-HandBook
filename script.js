// Ask for the visitor's name and personalize the welcome message.
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("welcomeOverlay");
  const form = document.getElementById("welcomeForm");
  const nameInput = document.getElementById("visitorName");
  const greeting = document.getElementById("personalGreeting");

  if (!overlay || !form || !nameInput || !greeting) return;

  // Prefill the name from this browser if the visitor has used the site before.
  const savedName = localStorage.getItem("htmlHandbookVisitorName") || "";
  nameInput.value = savedName;
  nameInput.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.focus();
      return;
    }

    localStorage.setItem("htmlHandbookVisitorName", name);
    greeting.textContent = `Welcome, ${name}!`;
    overlay.classList.add("is-hidden");
    document.body.classList.remove("modal-open");
  });

  // Keep the page behind the welcome dialog from scrolling.
  document.body.classList.add("modal-open");
});
