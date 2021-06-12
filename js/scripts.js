var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu_block");


hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});



