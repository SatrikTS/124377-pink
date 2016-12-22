var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none';
  switchMenu.classList.toggle("main-nav__toogle--hide");
});
