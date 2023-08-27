import('../pages/index.css');
import cards from '../data/data.json';
import { renderMap, ymaps } from '../components/map.js';
import {
	renderFilterButton,
	renderFilterDateButton,
	renderCard,
	setDateEventsListeners,
	setTypeEventsListeners,
} from '../components/card.js';
import {
	getArrRange,
	openMapBlock,
	openListBlock,
	haveCardsBeenDetected,
} from '../components/utils';
import { renderNumberCards } from '../components/control-panel';
import { filterCards } from '../components/filter';

const piter = document.querySelector('.piter');
const moscow = document.querySelector('.moscow');
const sochi = document.querySelector('.sochi');

const buttonMap = document.querySelector('.button-map');
const buttonList = document.querySelector('.button-list');
const uniqEvents = Array.from(
	new Set(
		cards
			.map((el) => {
				return el.type;
			})
			.sort()
	)
);

const uniqDateEvents = Array.from(
	new Set(
		cards.map((el) => {
			return el.date;
		})
	)
);

if (document.getElementById('map')) {
	if (!sessionStorage.getItem('city')) {
		sessionStorage.setItem('city', 'Saint-Petersburg');
		console.log('Теперь город появился');
	}

	piter.addEventListener('click', () => {
		sessionStorage.setItem('city', 'Saint-Petersburg');
	});

	moscow.addEventListener('click', () => {
		sessionStorage.setItem('city', 'Moscow');
	});

	sochi.addEventListener('click', () => {
		sessionStorage.setItem('city', 'Sochi');
	});
	// ymaps.ready(renderMap);

	renderNumberCards();

	uniqEvents.forEach((el) => {
		renderFilterButton(el);
	});

	getArrRange(uniqDateEvents, 12, 1).forEach((el) => {
		renderFilterDateButton(el);
	});

	haveCardsBeenDetected(cards);

	buttonMap.addEventListener('click', () => {
		ymaps.ready(() => {
			renderMap(filterCards(cards));
		});
		openMapBlock();
		buttonList.classList.add('button_state_disabled');
		buttonMap.classList.remove('button_state_disabled');
		buttonMap.setAttribute('disabled', 'disabled');
	});

	buttonList.addEventListener('click', () => {
		openListBlock();
		buttonList.classList.remove('button_state_disabled');
		buttonMap.classList.add('button_state_disabled');
		buttonMap.removeAttribute('disabled');
	});

	filterCards(cards).forEach((el) => {
		renderCard(el);
	});

	setDateEventsListeners();
	setTypeEventsListeners();
}
