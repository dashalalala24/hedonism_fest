import('../pages/index.css');
import('./where-to-go');
import('./about');
import('./join');

console.log('HedonismFest');

const dropdownMenu = document.querySelector('.header__menu-list');

const activeCity = localStorage.getItem('city') || false;

function openDropdownLocation() {
	dropdownMenu.classList.toggle('header__menu-list_show');
}

function closeDropdownLocation() {
	dropdownMenu.classList.remove('header__menu-list_show');
}

const buttonDropdown = document.querySelector('#button-dropdown');
buttonDropdown.addEventListener('click', openDropdownLocation);
const headerItems = document.querySelectorAll('.header__list-item');

const removeActive = () => {
	headerItems.forEach((item) => {
		item
			.querySelector('.header__checked-mark')
			.classList.remove('header__checked-mark_checked');
	});
};

const setSelectedElement = (element) => {
	removeActive();
	element
		.querySelector('.header__checked-mark')
		.classList.toggle('header__checked-mark_checked');
	buttonDropdown.querySelector('p').textContent =
		element.querySelector('label').textContent;
};

if (activeCity) {
	headerItems.forEach((item) => {
		if (item.querySelector(`#${activeCity}`)) {
			setSelectedElement(item);
		}
	});
}

headerItems.forEach((item) => {
	item.addEventListener('click', function () {
		localStorage.setItem(
			'city',
			this.querySelector('input').getAttribute('id')
		);
		setSelectedElement(this);
	});
});

// function closeDropdownOutside() {}

function handleClickOutside(element, callback) {
	function handleClick(event) {
		if (!element.contains(event.target) && element !== event.target) {
			callback();
		}
	}

	document.addEventListener('click', handleClick);
}

handleClickOutside(buttonDropdown, closeDropdownLocation);

buttonDropdown.addEventListener('click', openDropdownLocation);
