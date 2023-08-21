import('../pages/index.css');
import cards from '../data/data.json';
import { renderMap, ymaps } from '../components/map.js';
import {
	filterCards,
	renderFilterButton,
	renderFilterDateButton,
} from '../components/card.js';
import {
	getArrRange,
	openMapBlock,
	haveCardsBeenDetected,
} from '../components/utils';
import { renderNumberCards } from '../components/control-panel';

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
	// getArrRange(cards, 12, 1).forEach((el) => {
	//   renderCard(el);
	// });

	ymaps.ready(renderMap);

	renderNumberCards();

	uniqEvents.forEach((el) => {
		renderFilterButton(el);
	});

	getArrRange(uniqDateEvents, 12, 1).forEach((el) => {
		renderFilterDateButton(el);
	});

	filterCards();

	haveCardsBeenDetected();

	buttonMap.addEventListener('click', openMapBlock);

	buttonList.addEventListener('click', haveCardsBeenDetected);
}
