const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const formData = new FormData(enquiryForm);
    const subject = `Edu-e-Lite enquiry: ${formData.get("programme")}`;
    const body = [
      `Name: ${formData.get("studentName")}`,
      `Email: ${formData.get("studentEmail")}`,
      `Programme: ${formData.get("programme")}`,
      "",
      "Enquiry:",
      formData.get("message")
    ].join("\n");

    const mailto = `mailto:eduelite.official2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const feedback = document.getElementById("formFeedback");
    if (feedback) feedback.textContent = "Opening your email application with the enquiry details...";
    window.location.href = mailto;
  });
}
