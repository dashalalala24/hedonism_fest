import cards from '../data/data.json';

const map = document.querySelector('.cards__map');
const list = document.querySelector('.cards__page-without-card');

export function getArrRange(array, range, part) {
	const start = range * (part - 1);
	const end = range * part;
	return array.slice(start, end);
}

export function openMapBlock() {
	map.classList.add('cards__map_opened');
	list.classList.remove('cards__page-without-card_opened');
}

export function openListBlock(clas) {
	map.classList.remove('cards__map_opened');
	list.classList.add(clas);
}

export function getWeekDay(date) {
	const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	return dayOfWeek[date.getDay()];
}

export function haveCardsBeenDetected() {
	if (cards.find((el) => el.isLiked === true)) {
		openMapBlock();
		console.log('есть лайки');
	} else {
		openListBlock();
		console.log('нет лайков');
	}
}
