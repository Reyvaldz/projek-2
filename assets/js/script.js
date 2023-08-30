const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const accordion = document.querySelector(".accordion");
const arrowOpen = document.querySelector(". 	arrowOpen");

hamburgerMenu.addEventListener("click", () => {
	navLinks.classList.toggle("isActive");
});

arrowOpen.addEventListener("cick", () => {
	accordion.classList.toggle("open");
});
