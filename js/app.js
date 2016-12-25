//Меню
var switchMenu = document.querySelector(".main-nav__toogle");
var openMenu = document.querySelector(".main-nav__wrapper");

switchMenu.addEventListener("click", function (event) {
  openMenu.style.display = (openMenu.style.display == 'none') ? 'block' : 'none';
  switchMenu.classList.toggle("main-nav__toogle--hide");
});

//Фото-фильтр
var filtersIco = document.querySelectorAll(".filters__ico");
var filtersBtn = document.querySelectorAll(".filters__btn");
var filtersRange = document.querySelectorAll(".range__control")

for (var i=0; i<filtersBtn.length; i++){
  filtersBtn[i].addEventListener("click", function(event){
    event.preventDefault();

    for (var j=0; j<filtersIco.length; j++){
      filtersIco[j].classList.toggle ("filters__ico--active");
    }

    for (var k=0; k<filtersRange.length; k++){
      filtersRange[k].classList.toggle("range__control--active");
    }
  })
}
