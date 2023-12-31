// import cards from '../data/data.json';
import allEventMarkers from './markers';
import geoLocation from './constant';
// import { filterCards } from './filter';

export const ymaps = window.ymaps;

// Функция отрисовки карты

export function renderMap(arr) {
	const allFilterButton = Array.from(
		document.querySelectorAll('.scrollable-content__button')
	);
	const activeGeoLocation = geoLocation.find(
		(el) => el.city === sessionStorage.getItem('city')
	);

	let map = new ymaps.Map('map', {
		center: [activeGeoLocation.latitude, activeGeoLocation.longitude],
		zoom: 11,
	});

	function eventDate(card) {
		const newDate = new Date(card.date).toLocaleString('default', {
			day: 'numeric',
			month: 'long',
		});
		return newDate;
	}

	// Функция отрисовки маркеров карты
	function doPlacemarks(card) {
		let placemark = new ymaps.Placemark(
			[card.coordinates.latitude, card.coordinates.longitude],
			{
				balloonContent: `
            <div class="bubble">
            <p class="bubble__event-type text text_color_grey text_size_secondary">${
	card.type
}</p>
            <div class="bubble__event-about">
              <h4 class="bubble__event-name title_size_s">${card.title}</h4>
              <p class="bubble__event-date text text_color_black text_size_secondary">${eventDate(
		card
	)}, ${card.timestart}-${card.timeend}</p>
            </div>
            <div class="bubble__address">
              <p class="bubble__event-address text text_color_grey text_size_secondary">${
	card.address
}</p>
              <p class="text text_color_grey text_size_secondary">+3</p>
            </div>
            <button class="bubble__button button button_color_violet">
              <p class="text text_color_white">подробнее</p>
            </button>
          </div>
            `,
			},
			{
				iconLayout: 'default#image',
				iconImageHref: `${allEventMarkers[0].link}`,
				iconImageSize: [36, 36],
				iconImageOffset: [0, 0],
			}
		);

		map.geoObjects.add(placemark);
	}

	arr.forEach((el) => {
		doPlacemarks(el);
	});

	document.querySelector('.button-list').addEventListener('click', () => {
		map.destroy();
	});

	allFilterButton.forEach((el) => {
		el.addEventListener('click', () => {
			map.destroy();
		});
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
