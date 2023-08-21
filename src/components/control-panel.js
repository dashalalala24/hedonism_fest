import cards from '../data/data.json';

const numberCards = document.querySelector('.control-panel__card-number');

// функция отрисовки актуального номера и кол-ва карточек на вверхней панели
export function renderNumberCards() {
	const firstNumber = 1;
	const lastNumber = 12;
	numberCards.textContent = `показано ${firstNumber}-${lastNumber} из ${cards.length}`;
}
