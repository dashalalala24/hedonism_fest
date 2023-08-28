import cards from '../data/data.json';

const map = document.querySelector('.cards__map');
const list = document.querySelector('.cards__page-without-card');
const cardList = document.querySelector('.cards__page-with-card');

// Функция которая отфильтровывает массив по заданному диапозону
export function getArrRange(array, range, part) {
	const start = range * (part - 1);
	const end = range * part;
	return array.slice(start, end);
}

// Функция открывающая блок с картой
export function openMapBlock() {
	map.classList.add('cards__map_opened');
	list.classList.remove('cards__page-without-card_opened');
	cardList.classList.remove('cards__page-with-card_opened');
}

// Функция открывающая блок с карточками
export function openListBlock() {
	map.classList.remove('cards__map_opened');
	haveCardsBeenDetected(cards);
}

// Функция переводящяя день недели в сокращенный формат
export function getWeekDay(date) {
	const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	return dayOfWeek[date.getDay()];
}

// Функция определяющия наличие карт для отображения
export function haveCardsBeenDetected(source) {
	if (
		!document
			.querySelector('.cards__map')
			.classList.contains('cards__map_opened')
	) {
		if (source[0]) {
			cardList.classList.add('cards__page-with-card_opened');
			list.classList.remove('cards__page-without-card_opened');
		} else {
			cardList.classList.remove('cards__page-with-card_opened');
			list.classList.add('cards__page-without-card_opened');
		}
	}
}

export function checkActiveButton(block) {
	const actButton = Array.from(
		block.querySelectorAll('.scrollable-content__button_active')
	);

	return actButton;
}
