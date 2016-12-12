var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  event.preventDefault();
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none'
});

var sliderElement = document.querySelectorAll(".reviews__item");
var leftControl = document.querySelector(".reviews__controller--left");
var rightControl = document.querySelector(".reviews__controller--right");


leftControl.addEventListener("click", function(event){
  event.preventDefault();
  for (var i=0; i<sliderElement.length; i++){

      sliderElement[i].classList.remove("reviews__item--show");
      sliderElement[i=i+1].classList.add("reviews__item--show");
}

});

rightControl.addEventListener("click", function(event){
  event.preventDefault();
  for (var i=0; i<sliderElement.length; i++){
      sliderElement[i].classList.remove("reviews__item--show");
      sliderElement[i=i-1].classList.add("reviews__item--show");
}

});
