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

// Функция закрывающая попап
export function closeCardPopup() {
	const popup = document.querySelector('.popup-card');
	const popupCloseButton = popup.querySelector('.popup-card__button-cross');
	popupCloseButton.removeEventListener('click', closeCardPopup);

	popup.classList.remove('popup-card_opened');
}

// Функция закрывающая форму пожертвования
export function closeDonateForm() {
	const form = document.querySelector('#donate-form');
	form.classList.remove('donation-form_opened');

	const closeButton = form.querySelector('.donation-form__button-close');
	closeButton.removeEventListener('click', closeDonateForm);
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

// Функция собирающая все активные кнопки фильтров в массив
export function checkActiveButton(block) {
	const actButton = Array.from(
		block.querySelectorAll('.scrollable-content__button_active')
	);

	return actButton;
}

// функция которая находит разницу во времени
export function findTimeDifference(firstDate, secondDate) {
	let getDate = (string) =>
		new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
	let different;
	if (firstDate < secondDate) {
		different = getDate(secondDate) - getDate(firstDate);
	} else {
		different = getDate(firstDate) - getDate(secondDate);
	}

	let hours = Math.floor((different % 86400000) / 3600000);

	if (hours > 12) {
		hours = hours - 12;
	}

	let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
	if (minutes === 0) {
		minutes = '00';
	}

	let result = `${hours} час ${minutes} минут`;

	if (hours === 0 || hours >= 5) {
		result = `${hours} часов ${minutes} минут`;
	} else if (hours >= 2 && hours <= 4) {
		result = `${hours} часа ${minutes} минут`;
	}

	return result;
}
