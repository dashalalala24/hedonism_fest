import('../pages/index.css');
import('./where-to-go');
import('./about');
import('./join');
import { tns } from '../../node_modules/tiny-slider';

console.log('HedonismFest');

const dropdownMenu = document.querySelector('.header__menu-list');

function openDropdown() {
	dropdownMenu.classList.toggle('header__menu-list_show');
}

const buttonDropdown = document.querySelector('#button-dropdown');
buttonDropdown.addEventListener('click', openDropdown);

// function closeDropdownOutside() {}

window.addEventListener('mousedown', (evt) => {
	if (
		dropdownMenu.classList.contains('header__menu-list_show') &&
		evt.target !== dropdownMenu
	) {
		openDropdown();
	}
});

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
