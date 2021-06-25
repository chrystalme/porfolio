const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const linkedIn = document.querySelector("#linkedin-link");
const projects = document.querySelector("#projects-link");
const contact = document.querySelector("#contact-link");
const blog = document.querySelector("#blog-link");

mobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

linkClicked = () => {
  console.log("clicked");
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);
linkedIn.addEventListener("click", linkClicked);
projects.addEventListener("click", linkClicked);
contact.addEventListener("click", linkClicked);
blog.addEventListener("click", linkClicked);
