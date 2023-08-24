import cards from '../data/data.json';
import { getWeekDay } from './utils';
import { haveCardsBeenDetected } from './utils';
import { filterCards } from './filter';

// функция создания карточки
function createCard(source) {
	const card = document.querySelector('#card').content.cloneNode(true);
	// const imageEvent = card.querySelector('.card__image');
	const buttonLike = card.querySelector('.button_type_like');
	const typeEvent = card.querySelector('.card__event-type');
	const dateEvent = card.querySelector('.card__event-date');
	const nameEvent = card.querySelector('.card__event-name');
	const descriptionEvent = card.querySelector('.card__event-description');
	const addressEvent = card.querySelector('.card__event-address');
	const newDate = new Date(source.date).toLocaleString('default', {
		day: 'numeric',
		month: 'short',
	});

	// imageEvent.style.backgroundImage = `url(${source.url})`;
	typeEvent.textContent = source.type;
	dateEvent.textContent = `${newDate}, ${source.timestart}-${source.timeend}`;
	nameEvent.textContent = source.title;
	descriptionEvent.textContent = source.description;
	addressEvent.textContent = source.address;

	if (source.isLiked === true) {
		buttonLike.classList.add('button_state_active-like');
	}

	buttonLike.addEventListener('click', () => {
		putAndLike(buttonLike, source);
	});

	return card;
}

// Функция лайка карточки

function putAndLike(buttonLike, source) {
	if (buttonLike.classList.contains('button_state_active-like')) {
		buttonLike.classList.remove('button_state_active-like');
		source.isLiked = false;
		haveCardsBeenDetected(cards);
	} else {
		buttonLike.classList.add('button_state_active-like');
		source.isLiked = true;
		haveCardsBeenDetected(cards);
	}
}

// функция рендера карточки
export function renderCard(source) {
	const cardStorage = document.querySelector('.cards__page-with-card');
	const fullCard = createCard(source);
	cardStorage.append(fullCard);
}
// Функция удаления карточек
export function deleteCard() {
	const card = Array.from(document.querySelectorAll('.card'));
	card.forEach((el) => {
		el.remove();
	});
}

// функция создния кнопки фильтра мероприятий
function filterButton(source) {
	const buttonToFilter = document
		.querySelector('#filter-button')
		.content.cloneNode(true);
	buttonToFilter.querySelector('.scrollable-content__button-text').textContent =
		source;
	return buttonToFilter;
}

// функция рендера кнопки фильтра мероприятий
export function renderFilterButton(source) {
	const eventFilter = document.querySelector('#filter-event-type');
	eventFilter.append(filterButton(source));
}

// функция создния кнопки фильтра дат мероприятий
function filterDateButton(source) {
	const buttonToFilter = document
		.querySelector('#filter-button')
		.content.cloneNode(true);
	const date = new Date(source).toLocaleString('default', {
		day: 'numeric',
		month: 'short',
	});
	const day = getWeekDay(new Date(source));
	buttonToFilter.querySelector(
		'.scrollable-content__button-text'
	).textContent = `${day}, ${date}`;

	return buttonToFilter;
}

// функция рендера кнопки фильтра дат мероприятий
export function renderFilterDateButton(source) {
	const dateFilter = document.querySelector('#filter-event-date');
	const button = filterDateButton(source);

	dateFilter.append(button);
}

// Функция вешателя слушателя на кнопки фильтров
export function setEventsListeners() {
	const button = Array.from(
		document.querySelectorAll('.scrollable-content__button')
	);
	button.forEach((el) => {
		const text = el.querySelector('.text');
		el.addEventListener('click', () => {
			if (el.classList.contains('scrollable-content__button_active')) {
				el.classList.remove('scrollable-content__button_active');
				el.classList.remove('button_color_violet');
				el.classList.add('button_color_none');
				el.classList.add('button_border_black');
				text.classList.add('text_color_black');
				text.classList.remove('text_color_white');
				// console.log(filterCards(cards));
				deleteCard();
				filterCards(cards).forEach((el) => {
					renderCard(el);
				});
			} else {
				el.classList.add('scrollable-content__button_active');
				el.classList.add('button_color_violet');
				el.classList.remove('button_color_none');
				el.classList.remove('button_border_black');
				text.classList.add('text_color_white');
				text.classList.remove('text_color_black');
				// console.log(filterCards(cards));
				deleteCard();
				filterCards(cards).forEach((el) => {
					renderCard(el);
				});
			}
		});
	});
}

// function findTimeDifference() {
//     let firstDate = '11:43';
//     let secondDate = '13:14';

//     let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
//     let different = (getDate(cards[0].timeend) - getDate(cards[0].timestart));

//     let hours = Math.floor((different % 86400000) / 3600000);
//     let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
//     let result = hours + ':' + minutes;

//     console.log(result);
// }
