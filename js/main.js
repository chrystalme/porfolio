const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contact = document.querySelector(".nav-link");

mobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

linkClicked = () => {
  console.log(clicked);
  navMenu.classList.toggle("active");
};
hamburger.addEventListener("click", mobileMenu);
contact.addEventListener("click", linkClicked);
