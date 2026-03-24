const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach((item) => {
  revealObserver.observe(item);
});

document.addEventListener("mousemove", (event) => {
  document.documentElement.style.setProperty("--mouse-x", event.clientX + "px");
  document.documentElement.style.setProperty("--mouse-y", event.clientY + "px");
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
// 
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json"
      }
    });
// If email is sent correctly or incorrectly the messages send
    if (response.ok) {
      form.innerHTML = "<p>Thanks, your message has been sent.</p>";
    } else {
      form.innerHTML = "<p>Something went wrong. Please try again.</p>";
    }
  });
}