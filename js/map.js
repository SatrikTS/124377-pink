ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("contacts-map", {
        center: [59.9393,30.3236],
        zoom: 15
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Academy!",
        balloonContent: "ул. Большая Конюшенная, 19/8"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [35, 35],
      iconImageOffset: [-18, -10]
    }
  );

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}
