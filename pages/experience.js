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
