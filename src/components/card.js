import cards from '../data/data.json';
import { getWeekDay } from './utils';
import { openCardPopup } from './modal';
import { haveCardsBeenDetected, checkActiveButton } from './utils';
import { filterCards } from './filter';
import { ymaps, renderMap } from './map';

// функция создания карточки
function createCard(source) {
	const card = document.querySelector('#card').content.cloneNode(true);
	const imageEvent = card.querySelector('.card__image');
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

	imageEvent.addEventListener('click', () => {
		openCardPopup(source.title);
	});

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
	} else {
		buttonLike.classList.add('button_state_active-like');
		source.isLiked = true;
	}
}

// функция рендера карточки
export function renderCard(source, selector = '.cards__page-with-card') {
	const cardStorage = document.querySelector(selector);
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
		.querySelector('#filter-event-button')
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

// Функция вешателя слушателя на кнопки фильтров по датам
export function setDateEventsListeners() {
	const place = document.querySelector('#filter-event-date');
	const button = Array.from(
		place.querySelectorAll('.scrollable-content__button')
	);
	button.forEach((el) => {
		const text = el.querySelector('.text');
		el.addEventListener('click', () => {
			if (!el.classList.contains('scrollable-content__button_active')) {
				const activeButton = place.querySelector(
					'.scrollable-content__button_active'
				);
				activeButton.classList.remove('scrollable-content__button_active');
				activeButton.classList.remove('button_color_violet');
				activeButton.classList.add('button_color_none');
				activeButton.classList.add('button_border_black');
				activeButton.classList.add('button_state_filter-unchecked');
				activeButton.querySelector('.text').classList.add('text_color_black');
				activeButton
					.querySelector('.text')
					.classList.remove('text_color_white');
				activeButton.removeAttribute('disabled');

				el.classList.add('scrollable-content__button_active');
				el.classList.add('button_color_violet');
				el.classList.remove('button_color_none');
				el.classList.remove('button_border_black');
				el.classList.remove('button_state_filter-unchecked');
				el.setAttribute('disabled', 'disabled');
				text.classList.add('text_color_white');
				text.classList.remove('text_color_black');
				// console.log(filterCards(cards));
				deleteCard();
				filterCards(cards).forEach((el) => {
					renderCard(el);
				});
				haveCardsBeenDetected(filterCards(cards));
				ymaps.ready(() => {
					renderMap(filterCards(cards));
				});
			}
		});
	});
}

// Функция вешателя слушателя на кнопки фильтров по типу событий
export function setTypeEventsListeners() {
	const place = document.querySelector('#filter-event-type');
	const button = Array.from(
		place.querySelectorAll('.scrollable-content__button')
	);
	button.forEach((el) => {
		const text = el.querySelector('.text');
		const crossButton = el.querySelector('.scrollable-content__button-cross');
		const allEvent = place.querySelector('#all-event-button');
		el.addEventListener('click', () => {
			if (!el.classList.contains('scrollable-content__button_active')) {
				el.classList.add('scrollable-content__button_active');
				el.classList.add('button_color_violet');
				el.classList.remove('button_color_none');
				el.classList.remove('button_border_black');
				el.classList.remove('button_state_filter-unchecked');
				text.classList.add('text_color_white');
				text.classList.remove('text_color_black');
				if (crossButton) {
					crossButton.classList.add('scrollable-content__button-cross_active');
				}
				deleteCard();
				filterCards(cards).forEach((el) => {
					renderCard(el);
				});
				haveCardsBeenDetected(filterCards(cards));
				ymaps.ready(() => {
					renderMap(filterCards(cards));
				});
			} else {
				if (el.classList.contains('scrollable-content__button_active')) {
					el.classList.remove('scrollable-content__button_active');
					el.classList.remove('button_color_violet');
					el.classList.add('button_color_none');
					el.classList.add('button_border_black');
					el.classList.add('button_state_filter-unchecked');
					text.classList.add('text_color_black');
					text.classList.remove('text_color_white');
					if (crossButton) {
						crossButton.classList.remove(
							'scrollable-content__button-cross_active'
						);
					}
					deleteCard();
					filterCards(cards).forEach((el) => {
						renderCard(el);
					});
					haveCardsBeenDetected(filterCards(cards));
					ymaps.ready(() => {
						renderMap(filterCards(cards));
					});
				}
			}
			if (!checkActiveButton(place)[0]) {
				console.log(text);
				allEvent.classList.add('scrollable-content__button_active');
				allEvent.classList.add('button_color_violet');
				allEvent.classList.remove('button_color_none');
				allEvent.classList.remove('button_border_black');
				allEvent.querySelector('.text').classList.remove('text_color_black');
				allEvent.querySelector('.text').classList.add('text_color_white');
				allEvent.classList.remove('button_state_filter-unchecked');
				allEvent.setAttribute('disabled', 'disabled');
				text.classList.remove('text_color_white');
				text.classList.add('text_color_black');
				if (crossButton) {
					crossButton.classList.add('scrollable-content__button-cross_active');
				}
				deleteCard();
				filterCards(cards).forEach((el) => {
					renderCard(el);
				});
				haveCardsBeenDetected(filterCards(cards));
				ymaps.ready(() => {
					renderMap(filterCards(cards));
				});
			} else {
				allEvent.removeAttribute('disabled');
			}
		});
	});
}
