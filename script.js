const EMAILJS_PUBLIC_KEY = "cluc337kuFowxIqyG";
const EMAILJS_SERVICE_ID = "email-service-personal";
const EMAILJS_TEMPLATE_ID = "template_5co9ax8";

const contactForm = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");
const submitButton = contactForm.querySelector('button[type="submit"]');
const header = document.querySelector(".header");
const menuToggle = document.querySelector("#open-menu");
const navigationLinks = document.querySelectorAll(".header__nav a");

const updateHeaderOnScroll = () => {
  header.classList.toggle("header--scrolled", window.scrollY > 10);
};

updateHeaderOnScroll();
window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  submitButton.disabled = true;
  statusMessage.textContent = "Enviando mensaje...";
  statusMessage.className = "form__status";

  try {
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);
    contactForm.reset();
    statusMessage.textContent = "¡Gracias! Tu mensaje fue enviado correctamente.";
    statusMessage.classList.add("form__status--success");
  } catch (error) {
    console.error("No fue posible enviar el mensaje:", error);
    statusMessage.textContent = "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.";
    statusMessage.classList.add("form__status--error");
  } finally {
    submitButton.disabled = false;
  }
});
