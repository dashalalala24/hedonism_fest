import cards from '../data/data.json';
import linkMarkers from '../components/constant.js';

// Функция отрисовки карты

export default function init() {
  let map = new ymaps.Map('map', {
    center: [55.75241870157769, 37.62364760667579],
    zoom: 13,
  });

  // Функция отрисовки маркеров карты
  function doPlacemarks(card) {
    let placemark = new ymaps.Placemark(
      [card.coordinates.latitude, card.coordinates.longitude],
      {
        balloonContent: `
            <div class="bubble">
            <p class="bubble__event-type text text_color_grey text_size_secondary">лекция</p>
            <div class="bubble__event-about">
              <h4 class="bubble__event-name title_size_s">идентичность: почему нам сложно меняться?</h4>
              <p class="bubble__event-date text text_color_black text_size_secondary">1 мая, 12:30-13:50</p>
            </div>
            <div class="bubble__address">
              <p class="bubble__event-address text text_color_grey text_size_secondary">улица Блохина, 22</p>
              <p class="text text_color_grey text_size_secondary">+3</p>
            </div>
            <button class="bubble__button button button_color_violet">
              <p class="text text_color_white">подробнее</p>
            </button>
          </div>
            `,
      },
      {
        // iconLayout: 'default#image',
        // iconImageHref: ``,
        // iconImageSize: [36, 36],
        // iconImageOffset: [0, 0]
      }
    );

    map.geoObjects.add(placemark);
  }

  cards.forEach((el) => {
    doPlacemarks(el);
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
