import cards from '../data/data.json';

const map = document.querySelector('.cards__map');
const list = document.querySelector('.cards__page-without-card');
const cardList = document.querySelector('.cards__page-with-card');

export function getArrRange(array, range, part) {
	const start = range * (part - 1);
	const end = range * part;
	return array.slice(start, end);
}

export function openMapBlock() {
	map.classList.add('cards__map_opened');
	list.classList.remove('cards__page-without-card_opened');
	cardList.classList.remove('cards__page-with-card_opened');
}

export function openListBlock() {
	map.classList.remove('cards__map_opened');
	haveCardsBeenDetected();
}

export function getWeekDay(date) {
	const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	return dayOfWeek[date.getDay()];
}

export function haveCardsBeenDetected() {
	if (cards.find((el) => el.isLiked === true)) {
		cardList.classList.add('cards__page-with-card_opened');
		list.classList.remove('cards__page-without-card_opened');
	} else {
		cardList.classList.remove('cards__page-with-card_opened');
		list.classList.list('cards__page-without-card_opened');
	}
}
