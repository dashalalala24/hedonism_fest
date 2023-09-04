import cards from '../data/data.json';
import { findTimeDifference, closeCardPopup, closeDonateForm } from './utils';

// Функция открывающая попап с информацией из карточки
export function openCardPopup(name) {
	const popup = document.querySelector('.popup-card');
	// const popupImage = popup.querySelector('.popup-card__image');
	const popupCloseButton = popup.querySelector('.popup-card__button-cross');
	const popupTitle = popup.querySelector('.popup-card__title');
	const popupDescription = popup.querySelector('.popup-card__description');
	const popupType = popup.querySelector('.popup-card__type');
	const popupDate = popup.querySelector('.popup-card__time');
	const popupArr = cards.find((el) => el.title === name);
	const newDate = new Date(popupArr.date).toLocaleString('default', {
		day: 'numeric',
		month: 'short',
	});
	const timeDifference = findTimeDifference(
		popupArr.timestart,
		popupArr.timeend
	);
	const filterArr = cards.filter((el) => el.type === popupArr.type);

	const popupDuration = popup.querySelector('.popup-card__duration');
	const popupCost = popup.querySelector('.popup-card__cost');
	const popupArea = popup.querySelector('.popup-card__area');
	const popupAddress = popup.querySelector('.popup-card__address');
	const popupPhone = popup.querySelector('.popup-card__phone');
	const popupSocial = popup.querySelector('.popup-card__social');
	const popupAddressNumber = popup.querySelector('.popup-card__address-number');

	// popupImage.style.backgroundImage = `url(${popupArr.url})`;
	popupTitle.textContent = popupArr.title;
	popupDescription.textContent = popupArr.description;
	popupType.textContent = popupArr.type;
	popupDate.textContent = `${newDate}, ${popupArr.timestart}-${popupArr.timeend}`;
	popupDuration.textContent = timeDifference;
	popupCost.textContent = `${popupArr.price} ₽`;
	popupArea.textContent = popupArr.address;
	popupAddress.textContent = popupArr.address;
	popupPhone.textContent = popupArr.phonenumber;
	popupSocial.textContent = popupArr.socialnetwork;
	popupAddressNumber.textContent = `смотреть ещё ${filterArr.length}`;

	popupCloseButton.addEventListener('click', closeCardPopup);

	popup.classList.add('popup-card_opened');
}

// Функция открывающая форму с оплатой пожертвований
export function openDonateForm() {
	const donateForm = document.querySelector('#donate-form');
	donateForm.classList.add('donation-form_opened');

	const closeDonateButton = donateForm.querySelector(
		'.donation-form__button-close'
	);
	closeDonateButton.addEventListener('click', closeDonateForm);
}
