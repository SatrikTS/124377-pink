var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  event.preventDefault();
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none';
  switchMenu.classList.add("main-nav__toogle--hide");
});
