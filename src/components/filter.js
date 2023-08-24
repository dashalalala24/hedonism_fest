import { getWeekDay } from './utils';

// функция фильтрации карточек
export function filterCards(arr) {
	let arrCards = [];
	const filterEventPlace = document.querySelector('#filter-event-type');
	const wantEventButton = filterEventPlace.querySelector('#want-button');
	const allEventButton = filterEventPlace.querySelector('#all-event-button');
	const filterDatePlace = document.querySelector('#filter-event-date');
	const allDateButton = filterDatePlace.querySelector('#all-date-button');
	const allActiveDateButton = Array.from(
		filterDatePlace.querySelectorAll('.scrollable-content__button_active')
	);
	const allActiveEventButton = Array.from(
		filterEventPlace.querySelectorAll('.scrollable-content__button_active')
	);
	let arrDateCards = [];
	let arrEventCards = [];

	if (wantEventButton.classList.contains('scrollable-content__button_active')) {
		arrCards = arr.filter((el) => el.isLiked === true);
	} else {
		arrCards = arr;
	}

	if (allDateButton.classList.contains('scrollable-content__button_active')) {
		arrDateCards = arrCards;
	} else if (allActiveDateButton[0]) {
		allActiveDateButton.forEach((evt) => {
			arrCards.forEach((el) => {
				const day = getWeekDay(new Date(el.date));
				const shortDate = new Date(el.date).toLocaleString('default', {
					day: 'numeric',
					month: 'short',
				});
				const filterDay = `${day}, ${shortDate}`;

				if (
					filterDay ===
					evt.querySelector('.scrollable-content__button-text').textContent
				) {
					arrDateCards.push(el);
				}
			});
		});
	}

	if (allEventButton.classList.contains('scrollable-content__button_active')) {
		arrEventCards = arrDateCards;
	} else if (allActiveEventButton[0]) {
		allActiveEventButton.forEach((evt) => {
			if (
				wantEventButton.classList.contains('scrollable-content__button_active')
			) {
				arrEventCards = arrDateCards;
			} else {
				arrDateCards.forEach((el) => {
					if (
						el.type ===
						evt.querySelector('.scrollable-content__button-text').textContent
					) {
						arrEventCards.push(el);
					}
				});
			}
		});
	}

	console.log(arrEventCards);
	return arrEventCards;

	// console.log(arrDateCards);
	// return arrDateCards;
}
