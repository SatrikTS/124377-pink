var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none';
  switchMenu.classList.toggle("main-nav__toogle--hide");
});

var showPopup = document.querySelector(".form__button");
var errorPopup = document.querySelector(".popup--error");
var successPopup = document.querySelector(".popup--success");
