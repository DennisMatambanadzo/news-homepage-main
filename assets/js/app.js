const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");
const navMenu = document.querySelector(".nav-menu");

iconMenu.addEventListener("click", () => {
  navMenu.classList.add('open')
});

iconClose.addEventListener("click", () => {
  navMenu.classList.toggle('open')
});

