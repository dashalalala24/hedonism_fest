import { getWeekDay } from './utils';

export function filterCards(arr) {
	let arrCards = [];
	const filterEventPlace = document.querySelector('#filter-event-type');
	const wantEventButton = filterEventPlace.querySelector('#want-button');
	// const allEventButton = filterEventPlace.querySelector('#all-event-button');
	const filterDatePlace = document.querySelector('#filter-event-date');
	const allDateButton = filterDatePlace.querySelector('#all-date-button');
	const allActiveDateButton = Array.from(
		filterDatePlace.querySelectorAll('.scrollable-content__button_active')
	);
	let arrDateCards = [];

	if (wantEventButton.classList.contains('scrollable-content__button_active')) {
		arrCards = arr.filter((el) => el.isLiked === true);
	} else {
		arrCards = arr;
	}

	if (!allDateButton.classList.contains('scrollable-content__button_active')) {
		if (allActiveDateButton[0]) {
			allActiveDateButton.forEach((evt) => {
				// arrDateCards = arrCards.map((el) => {

				//     const day = getWeekDay(new Date(el.date));
				//     const shortDate = new Date(el.date).toLocaleString('default', {
				//         day: 'numeric',
				//         month: 'short',
				//     });
				//     const filterDay = `${day}, ${shortDate}`;

				//     if (evt.querySelector('.scrollable-content__button-text').textContent === filterDay) {
				//         return true;
				//     } else {
				//         return false;
				//     }
				// });

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
					} else {
						// console.log('Искомое' + evt.querySelector('.scrollable-content__button-text').textContent);
						// console.log('Искатель' + filterDay);
					}
				});
			});

			return arrDateCards;
		}
	}

	// if (allEventButton.classList.contains('scrollable-content__button_active')) {
	//     return arrCards
	// } else {}
	return arrCards;
}
