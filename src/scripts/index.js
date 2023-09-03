import('../pages/index.css');
import('./where-to-go');
import('./about');
import('./join');

console.log('HedonismFest');

const dropdownMenu = document.querySelector('.header__menu-list');

function openDropdownLocation() {
	dropdownMenu.classList.toggle('header__menu-list_show');
}

const buttonDropdown = document.querySelector('#button-dropdown');
buttonDropdown.addEventListener('click', openDropdownLocation);

// function closeDropdownOutside() {}

window.addEventListener('mousedown', (evt) => {
	if (
		dropdownMenu.classList.contains('header__menu-list_show') &&
		evt.target !== dropdownMenu
	) {
		openDropdownLocation();
	}
});
