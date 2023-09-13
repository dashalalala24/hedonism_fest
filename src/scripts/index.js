import('../pages/index.css');
import('./where-to-go');
import('./about');
import('./join');
import { renderCard } from '../components/card';
import cards from '../data/data.json';
import { tns } from '../../node_modules/tiny-slider';
import { openDonateForm } from '../components/modal';

console.log('HedonismFest');

const donateButton = document.querySelector('.header__donate-button');
const donateButtonBurger = document.querySelector(
	'.header__donate-button_burger'
);

// Выпадающее меню
const dropdownMenu = document.querySelector('.header__dropdown-menu');
const buttonDropdown = document.querySelector('.header__btn-dropdown');
const activeCity = localStorage.getItem('city') || false;
const headerItems = document.querySelectorAll('.header__list-item');
const buttonBurgerCity = document.querySelector('.header__btn-dropdown_burger');

// функция открытия выпадающего меню
function openDropdownLocation() {
	dropdownMenu.classList.add('header__dropdown-menu_opened');
}

// функция закрытия выпадающего меню
function closeDropdownLocation() {
	dropdownMenu.classList.remove('header__dropdown-menu_opened');
}

// функци очистки выбранного города
const removeActive = () => {
	headerItems.forEach((item) => {
		if (item.children[0].value !== localStorage.getItem('city')) {
			item
				.querySelector('.header__checked-mark')
				.classList.remove('header__checked-mark_checked');
		}
	});
};

// функция выбора города
const setSelectedElement = (element) => {
	removeActive();
	element
		.querySelector('.header__checked-mark')
		.classList.add('header__checked-mark_checked');
	buttonDropdown.querySelector('p').textContent =
		element.querySelector('label').textContent;
	buttonBurgerCity.querySelector('p').textContent =
		element.querySelector('label').textContent;
};

// поиск активного города
if (activeCity) {
	headerItems.forEach((item) => {
		if (item.children[0].value === activeCity) {
			setSelectedElement(item);
		}
	});
}

// запись активного города в localStorage
headerItems.forEach((item) => {
	item.addEventListener('click', function () {
		localStorage.setItem(
			'city',
			this.querySelector('input').getAttribute('value')
		);
		setSelectedElement(this);
	});
});

// открыть меню по клику
buttonDropdown.addEventListener('click', openDropdownLocation);

// закрытие выпадающего меню при клике вне меню
document.addEventListener('mousedown', (evt) => {
	if (evt.target === dropdownMenu) {
		closeDropdownLocation();
	}
});

// Бургерное меню
const burgerMenuContainer = document.querySelector(
	'.header__burger-menu-container'
);
const burgerMenu = document.querySelector('.header__burger-menu');
const burgerButtonBack = document.querySelector('.header__btn-back');
const headerButtonMenu = document.querySelector('.header__btn-menu');

// открытие бургерного меню
headerButtonMenu.addEventListener('click', function () {
	burgerMenuContainer.classList.toggle('header__burger-menu-container_opened');
});

// открытие выбора города в бургерном меню
buttonBurgerCity.addEventListener('click', function () {
	burgerMenu.classList.remove('header__burger-menu_close');
	burgerMenu.classList.add('header__burger-menu_open');
});

// возвращение на главную страницу бургерного меню
burgerButtonBack.addEventListener('click', function () {
	burgerMenu.classList.remove('header__burger-menu_open');
	burgerMenu.classList.add('header__burger-menu_close');
});

// открытие формы пожертвований
donateButton.addEventListener('click', openDonateForm);
donateButtonBurger.addEventListener('click', openDonateForm);

// Слайдер
const eventSlider = document.querySelector('.events__slider');

// добавление карточек в слайдер
if (eventSlider) cards.forEach((el) => renderCard(el, '.events__slider'));

if (document.getElementById('page')) {
	var slider = tns({
		container: '.photo__slider',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		navPosition: 'bottom',
		mouseDrag: true,
	});
}
