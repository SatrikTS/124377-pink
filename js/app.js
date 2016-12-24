var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none';
  switchMenu.classList.toggle("main-nav__toogle--hide");
});

var filtersIco = document.querySelectorAll(".filters__ico");
var filtersBtn = document.querySelectorAll(".filters__btn");

for (var i=0; i<filtersBtn.length; i++){
  filtersBtn[i].addEventListener("click", function(event){
    event.preventDefault();
    console.log(121);
    for (var j=0; j<filtersIco.length; j++){
      filtersIco[j].classList.toggle ("filters__ico--active");
    }
  })
}

var showPopup = document.querySelector(".form__button");
var errorPopup = document.querySelector(".popup--error");
var successPopup = document.querySelector(".popup--success");
