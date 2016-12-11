var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  event.preventDefault();
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none'
});

var sliderContainer = document.querySelector(".reviews__items");
var leftControl = document.querySelector(".reviews__controller--left");
var rightControl = document.querySelector(".reviews__controller--right");
var step = 100;

leftControl.addEventListener("click", function(event){
  event.preventDefault();
  sliderContainer.style.left= -step + "%";
});

rightControl.addEventListener("click", function(event){
  event.preventDefault();
  sliderContainer.style.left= step + "%";
});
