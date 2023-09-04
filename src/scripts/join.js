// ELEMENTS
// flow selector
const eventTypeRadioButtons = document.getElementsByName('event-type');

// form
const formParticipant = document.querySelector('.content');

// drop-down list
const dropDownList = document.querySelector('.drop-down-list');
const cityDropDownListButton = document.querySelector(
	'.button_type_cities-list'
);
const cityDropDownListButtonLabel = document.querySelector(
	'.button_type_cities-list p'
);
const dropDownInputList = document.getElementById('city');

// input fields and error spans
const inputFieldsList = Array.from(document.querySelectorAll('.input-field'));
const eventDateInputField = document.querySelector(
	'.form__fields_type_event-date input'
);
const organizerPhoneInputField = document.querySelector(
	'.form__fields_type_organizer-phone input'
);
const placePhoneInputField = document.querySelector(
	'.form__fields_type_place-phone input'
);
const bookingPhoneInputField = document.querySelector(
	'.form__fields_type_booking-phone input'
);
const workingHoursInputField = document.querySelector(
	'.form__fields_type_working-hours input'
);
const eventHoursInputField = document.querySelector(
	'.form__fields_type_event-hours input'
);
const dateErrorSpan = document.querySelector('.event-date-error');

// CONTROLLER
const controllerBackCancelButton = document.querySelector(
	'.button_type_cancel-back'
);
const controllerBackCancelButtonText = document.querySelector(
	'.button_type_cancel-back .text'
);
const controllerNextButton = document.querySelector('.button_type_next');
const controllerNextButtonText = document.querySelector(
	'.button_type_next .text'
);

// SECTIONS
const introSection = document.querySelector('.intro');
const categorySelectionSection = document.querySelector('.category-selection');
const fillInFormSection = document.querySelector('.fill-in-form');
const contactsAndWorkingHoursSection = document.querySelector(
	'.contacts-and-working-hours'
);
const addPhotoSection = document.querySelector('.add-photo');

// STEP 1
const checkedTypeEventSpan = document.querySelector(
	'.fill-in-form .button .text'
);

// STEP 2
const onlineOfflineEventType = document.querySelector(
	'.form__fields_type_offline-online'
);
const cityEvent = document.querySelector('.form__fields_type_city');
const placeName = document.querySelector('.form__fields_type_place-name');
const eventName = document.querySelector('.form__fields_type_event-name');
const eventDate = document.querySelector('.form__fields_type_event-date');
const contactPerson = document.querySelector(
	'.form__fields_type_contact-person'
);
const phoneNumber = document.querySelector(
	'.form__fields_type_organizer-phone'
);
const openClosedEvent = document.querySelector(
	'.form__fields_type_opened-closed'
);
const eventDescription = document.querySelector(
	'.form__fields_type_menu-description'
);

// STEP 3
const workingHours = document.querySelector('.form__fields_type_working-hours');
const eventHours = document.querySelector('.form__fields_type_event-hours');
const eventAddress = document.querySelector('.form__fields_type_event-address');
const placeAddress = document.querySelector('.form__fields_type_place-address');
const placePhone = document.querySelector('.form__fields_type_place-phone');
const bookingPhone = document.querySelector('.form__fields_type_booking-phone');
const webSite = document.querySelector('.form__fields_type_web-site');
const socialNetwork = document.querySelector(
	'.form__fields_type_social-networks'
);
const eventPrice = document.querySelector('.form__fields_type_event-price');
const announcementPlace = document.querySelector(
	'.form__fields_type_announcement-place'
);
const announcementEvent = document.querySelector(
	'.form__fields_type_announcement-event'
);
const announcementMeeting = document.querySelector(
	'.form__fields_type_announcement-meeting'
);

// STEP 4
const fileInput = document.querySelector('.add-photo__input');
const dropZone = document.querySelector('.add-photo__drop-off-area');
const dropZoneLabel = document.querySelector('.add-photo__label');
const dropZoneCross = document.querySelector('.button_type_cross');

// КОНСТАНТЫ
let step = 0;
let fieldsToGetValidateState = null;
const webPage = '/join.html';

const controlInputFieldsDict = {
	0: {
		elements: {},
		controlButtons: {
			back: ['invisible', '', ''],
			forward: ['visible', 'заполнить форму', 'button'],
		},
	},
	1: {
		elements: {},
		controlButtons: {
			back: ['visible', 'отмена', 'reset'],
			forward: ['visible', 'далее', 'button'],
		},
	},
	2: {
		elements: {
			cafe: {
				changeValue: {
					element: checkedTypeEventSpan,
					value: 'кафе/бар/ресторан',
				},
				show: [
					cityEvent,
					placeName,
					contactPerson,
					phoneNumber,
					eventDescription,
				],
				hide: [onlineOfflineEventType, eventName, eventDate, openClosedEvent],
			},
			masterClass: {
				changeValue: {
					element: checkedTypeEventSpan,
					value: 'мастер-класс/лекция',
				},
				show: [
					cityEvent,
					onlineOfflineEventType,
					eventName,
					eventDate,
					contactPerson,
					phoneNumber,
				],
				hide: [placeName, openClosedEvent, eventDescription],
			},
			party: {
				changeValue: {
					element: checkedTypeEventSpan,
					value: 'посиделки/вечеринка',
				},
				show: [
					cityEvent,
					eventName,
					openClosedEvent,
					eventDate,
					contactPerson,
					phoneNumber,
				],
				hide: [onlineOfflineEventType, placeName, eventDescription],
			},
			other: {
				changeValue: {
					element: checkedTypeEventSpan,
					value: 'другое',
				},
				show: [
					onlineOfflineEventType,
					cityEvent,
					eventName,
					eventDate,
					contactPerson,
					phoneNumber,
				],
				hide: [openClosedEvent, placeName, eventDescription],
			},
		},
		controlButtons: {
			back: ['visible', 'назад', 'button'],
			forward: ['visible', 'далее', 'button'],
		},
	},

	3: {
		elements: {
			cafe: {
				changeValue: {},
				show: [
					workingHours,
					placeAddress,
					placePhone,
					webSite,
					socialNetwork,
					announcementPlace,
				],
				hide: [
					eventHours,
					eventAddress,
					bookingPhone,
					eventPrice,
					announcementEvent,
					announcementMeeting,
				],
			},
			masterClass: {
				changeValue: {},
				show: [
					eventHours,
					placeAddress,
					placePhone,
					eventPrice,
					announcementEvent,
				],
				hide: [
					workingHours,
					eventAddress,
					bookingPhone,
					webSite,
					socialNetwork,
					announcementPlace,
					announcementMeeting,
				],
			},
			party: {
				changeValue: {},
				show: [
					eventHours,
					placeAddress,
					placePhone,
					eventPrice,
					webSite,
					socialNetwork,
					announcementMeeting,
				],
				hide: [
					workingHours,
					eventAddress,
					bookingPhone,
					announcementEvent,
					announcementPlace,
				],
			},
			other: {
				changeValue: {},
				show: [
					eventHours,
					placeAddress,
					bookingPhone,
					eventPrice,
					announcementPlace,
				],
				hide: [
					eventAddress,
					webSite,
					placePhone,
					socialNetwork,
					workingHours,
					announcementEvent,
					announcementMeeting,
				],
			},
		},
		controlButtons: {
			back: ['visible', 'назад', 'button'],
			forward: ['visible', 'далее', 'button'],
		},
	},

	4: {
		elements: {
			cafe: {
				changeValue: {},
				show: [dropZoneLabel],
				hide: [],
			},
			masterClass: {
				changeValue: {},
				show: [dropZoneLabel],
				hide: [],
			},
			party: {
				changeValue: {},
				show: [dropZoneLabel],
				hide: [],
			},
			other: {
				changeValue: {},
				show: [dropZoneLabel],
				hide: [],
			},
		},
		controlButtons: {
			back: ['visible', 'назад', 'button'],
			forward: ['visible', 'завершить', 'submit'],
		},
	},
};

// PAGE'S ELEMENTS CONTROLLER
// get the value of selected button
function getCheckedValue(radioButtons) {
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			const selectedValue = radioButton.value;
			return selectedValue;
		}
	}
}

function showHideSection(step) {
	const sections = [
		introSection,
		categorySelectionSection,
		fillInFormSection,
		contactsAndWorkingHoursSection,
		addPhotoSection,
	];
	for (let i = 0; i < sections.length; i++) {
		if (step === i) {
			sections[i].classList.remove('section_state_invisible');
		} else {
			sections[i].classList.add('section_state_invisible');
		}
	}
}

function showHideFields(pageControl) {
	const eventType = getCheckedValue(eventTypeRadioButtons);
	const fieldsExists = Boolean(Object.keys(pageControl.elements).length);
	if (!fieldsExists) {
		return;
	}
	const fieldsToShow = pageControl.elements[eventType];
	const fieldsToChangeTextExists = Boolean(
		Object.keys(fieldsToShow.changeValue).length
	);
	if (fieldsToChangeTextExists) {
		fieldsToShow.changeValue.element.textContent =
			fieldsToShow.changeValue.value;
	}
	fieldsToShow.show.forEach((element) => {
		element.classList.remove('form__fields_state_invisible');
	});
	fieldsToShow.hide.forEach((element) => {
		element.classList.add('form__fields_state_invisible');
	});
}

function buttonsControl(pageControl) {
	if (pageControl.controlButtons.back[0] === 'visible') {
		controllerBackCancelButtonText.textContent =
			pageControl.controlButtons.back[1];
		controllerBackCancelButton.classList.remove('button_state_invisible');
	} else {
		controllerBackCancelButton.classList.add('button_state_invisible');
	}

	if (pageControl.controlButtons.forward[0] === 'visible') {
		controllerNextButtonText.textContent =
			pageControl.controlButtons.forward[1];
		controllerNextButton.classList.remove('button_state_invisible');
	} else {
		controllerNextButton.classList.add('button_state_invisible');
	}

	controllerBackCancelButton.type = pageControl.controlButtons.back[2];
	controllerNextButton.type = pageControl.controlButtons.forward[2];
}

function controlPage(step) {
	const pageControlDict = controlInputFieldsDict[step];
	showHideSection(step);
	showHideFields(pageControlDict);
	buttonsControl(pageControlDict);
}

function getSectionFieldElements() {
	const pageControlDict = controlInputFieldsDict[step];
	const eventType = getCheckedValue(eventTypeRadioButtons);
	const fieldsExists = Boolean(Object.keys(pageControlDict.elements).length);
	if (!fieldsExists) {
		return;
	}
	return {
		show: pageControlDict.elements[eventType].show,
		hide: pageControlDict.elements[eventType].hide,
	};
}

const hasInvalidInput = () => {
	if (!fieldsToGetValidateState) {
		return false;
	}
	fieldsToGetValidateState.forEach((element) => {
		console.log('hasInvalidInput', element.name, element.validity.valid);
	});
	console.log('------------------');

	return fieldsToGetValidateState.some((element) => {
		return !element.validity.valid;
	});
};

function handleToggleButton() {
	if (hasInvalidInput()) {
		disableButton(controllerNextButton, 'button_state_disabled');
	} else {
		enableButton(controllerNextButton, 'button_state_disabled');
	}
}

function getInputFieldsFromSectionFields(shownFields) {
	if (!shownFields) {
		return;
	}
	const fieldInputElements = Array.from(shownFields.show).map(
		(parentElement) => {
			return parentElement.querySelector('.input-field_type_to-validate');
		}
	);
	const nonNullFieldInputElements = fieldInputElements.filter(
		(element) => element !== null
	);
	return nonNullFieldInputElements;
}

function getInputFieldsToValidate() {
	const showFields = getSectionFieldElements();
	return getInputFieldsFromSectionFields(showFields);
}

function setToggleButtonEventListeners() {
	if (!fieldsToGetValidateState) {
		return;
	}
	fieldsToGetValidateState.forEach((field) => {
		field.addEventListener('input', handleToggleButton);
	});
}

function removeToggleButtonEventListeners() {
	if (!fieldsToGetValidateState) {
		return;
	}
	fieldsToGetValidateState.forEach((field) => {
		field.removeEventListener('input', handleToggleButton);
	});
}

function previousSection() {
	removeToggleButtonEventListeners();
	step -= 1;
	if (step >= 0) {
		fieldsToGetValidateState = getInputFieldsToValidate();
		controlPage(step);
		handleToggleButton();
	}
}

function nextSection() {
	step += 1;
	if (step <= 4) {
		fieldsToGetValidateState = getInputFieldsToValidate();
		controlPage(step);
		setToggleButtonEventListeners();
		handleToggleButton();
	}
}

function submitData(e) {
	e.preventDefault();
	const formData = {};
	for (const element of formParticipant.elements) {
		if (element.name) {
			if (element.type === 'radio' && !element.checked) {
				continue;
			} else if (element.type === 'checkbox') {
				formData[element.name] = element.checked;
			} else {
				formData[element.name] = element.value;
			}
		}
	}
	console.log('formData', formData);
	formParticipant.reset();
	window.location.href = './index.html';
}

// DROP-DOWN LIST
function showDropDownList() {
	dropDownList.classList.add('drop-down-list_state_visible');
}

console.log('window.location.pathname', window.location.pathname);
if (window.location.pathname === webPage) {
	cityDropDownListButton.addEventListener('mousedown', showDropDownList);

	window.addEventListener('mousedown', (e) => {
		if (e.target.classList.contains('drop-down-list__item')) {
			dropDownInputList.value = e.target.textContent;
			cityDropDownListButtonLabel.textContent = e.target.textContent;
			dropDownList.classList.remove('drop-down-list_state_visible');
		}
		handleToggleButton();
	});
}

// VALIDATION FUNCTIONS
function showInputError(inputField) {
	inputField.classList.add('input-field_type_warning');
	const errorSpan = document.querySelector(`.${inputField.id}-error`);
	errorSpan.textContent = inputField.validationMessage;
	errorSpan.classList.remove('text_type_invisible');
}

function hideInputError(inputField) {
	inputField.classList.remove('input-field_type_warning');
	const errorSpan = document.querySelector(`.${inputField.id}-error`);
	errorSpan.classList.add('text_type_invisible');
}

function disableButton(buttonElement, inactiveButtonClass) {
	buttonElement.disabled = true;
	buttonElement.classList.add(inactiveButtonClass);
}

function enableButton(buttonElement, inactiveButtonClass) {
	buttonElement.disabled = false;
	buttonElement.classList.remove(inactiveButtonClass);
}

function isValid(inputField) {
	if (inputField.validity.patternMismatch) {
		inputField.setCustomValidity(inputField.dataset.errorMessage);
	} else {
		inputField.setCustomValidity('');
	}
	if (!inputField.validity.valid) {
		showInputError(inputField);
	} else {
		hideInputError(inputField);
	}
}

const setValidationEventListeners = () => {
	inputFieldsList.forEach((inputField) => {
		inputField.addEventListener('input', () => {
			isValid(inputField);
		});
	});
};

// CUSTOM DATE VALIDATION
function validateDate(event) {
	const enteredDate = new Date(event.target.value);
	const today = new Date();

	if (enteredDate <= today) {
		eventDateInputField.setCustomValidity(
			'Введите значение позже сегодняшней даты'
		);
		dateErrorSpan.textContent = 'Введите значение позже сегодняшней даты';
		dateErrorSpan.classList.remove('text_type_invisible');
		showInputError(eventDateInputField);
	} else {
		hideInputError(eventDateInputField);
		dateErrorSpan.textContent = '';
		eventDateInputField.setCustomValidity('');
		dateErrorSpan.classList.add('text_type_invisible');
	}
	handleToggleButton();
}

// CUSTOM FIELD MASKING AND PHONE/HOURS FIELDS VALIDATION
function validateFieldBasedOnKeys(
	e,
	inputField,
	numberFunc,
	maskingFunc,
	maskToRemove,
	errorMessage
) {
	const keysDict = convertStringToList(inputField.value, maskToRemove);
	const keyCode = e.keyCode;
	e.preventDefault();
	if (setNumericFilter(keyCode)) {
		const numbersStorage = numberFunc(
			e,
			keyCode,
			inputField,
			keysDict,
			errorMessage
		);
		inputField.value = maskingFunc(numbersStorage);
	}
}

function setNumericFilter(keyCode) {
	const allowedKeys = [8, 46];
	return !(
		(keyCode < 48 || keyCode > 57) && // Check for non-numeric keys
		allowedKeys.indexOf(keyCode) === -1
	); // Check for allowed special keys
}

function convertStringToList(inputString, maskToRemove) {
	const cleanedString = inputString.replace(maskToRemove, '');
	const charList = cleanedString.split('');
	const keyCodesList = charList.map((char) => char.charCodeAt(0));
	return keyCodesList;
}

function phoneNumbersAccumulation(
	e,
	keyCode,
	inputField,
	keysDict,
	errorMessage
) {
	const allowedKeys = [8, 46];
	const errorSpan = document.querySelector(`.${inputField.id}-error`);
	if (
		!(allowedKeys.indexOf(keyCode) === 0 || keysDict.length >= 10) // phone number shall not consist of more than 10 digits
	) {
		keysDict.push(keyCode);
	} else if (keyCode === 8) {
		keysDict.pop();
	}
	if (keysDict.length < 10) {
		inputField.setCustomValidity(errorMessage);
		errorSpan.classList.remove('text_type_invisible');
		showInputError(inputField);
	} else {
		hideInputError(inputField);
		inputField.setCustomValidity('');
		errorSpan.classList.add('text_type_invisible');
	}
	handleToggleButton();
	return keysDict;
}

function hoursNumbersAccumulation(
	e,
	keyCode,
	inputField,
	keysDict,
	errorMessage
) {
	const allowedKeys = [8, 46];
	const inputNumber = Number(String.fromCharCode(keyCode));
	const prevNumber = Number(String.fromCharCode(keysDict[keysDict.length - 1]));
	const errorSpan = document.querySelector(`.${inputField.id}-error`);
	if (
		((keysDict.length % 4 === 0 && [0, 1, 2].includes(inputNumber)) ||
			(keysDict.length % 4 === 1 &&
				prevNumber === 2 &&
				[0, 1, 2, 3, 4].includes(inputNumber)) ||
			(keysDict.length % 4 === 1 && prevNumber !== 2) ||
			(keysDict.length % 4 === 2 && inputNumber <= 5) ||
			keysDict.length % 4 === 3) &&
		!allowedKeys.includes(keyCode)
	) {
		keysDict.push(keyCode);
	} else if (keyCode === 8) {
		keysDict.pop();
	}

	if (keysDict.length % 8 === 0 && checkTimeIntervals(keysDict)) {
		hideInputError(inputField);
		inputField.setCustomValidity('');
		errorSpan.classList.add('text_type_invisible');
	} else {
		inputField.setCustomValidity(errorMessage);
		errorSpan.classList.remove('text_type_invisible');
		showInputError(inputField);
	}
	handleToggleButton();
	console.log('hoursNumbersAccumulation - here!!!');
	return keysDict;
}

function phoneMasking(phoneDict) {
	let line = '';
	for (let i = 0; i < phoneDict.length; i++) {
		if (i === 0) {
			line = `+7 (${String.fromCharCode(phoneDict[i])}`;
		} else if (i === 2) {
			line += `${String.fromCharCode(phoneDict[i])}) `;
		} else if (i === 6 || i === 8) {
			line += `-${String.fromCharCode(phoneDict[i])}`;
		} else {
			line += `${String.fromCharCode(phoneDict[i])}`;
		}
	}
	return line;
}

function hoursMasking(phoneDict) {
	let line = '';
	for (let i = 0; i < phoneDict.length; i++) {
		if (i % 4 === 1) {
			line += `${String.fromCharCode(phoneDict[i])}:`;
		} else if (i % 8 === 3) {
			line += `${String.fromCharCode(phoneDict[i])}-`;
		} else if (i % 8 === 0 && i !== 0) {
			line += `, ${String.fromCharCode(phoneDict[i])}`;
		} else {
			line += `${String.fromCharCode(phoneDict[i])}`;
		}
	}
	return line;
}

function checkTimeIntervals(keysDict) {
	const boolArray = [];
	for (let i = 0; i < keysDict.length; i += 4) {
		const slice = keysDict.slice(i, i + 4);
		const toc = slice.map((x) => String.fromCharCode(x)).join('');
		boolArray.push(parseInt(toc));
	}
	for (let i = 1; i < boolArray.length; i += 2) {
		if (boolArray[i] <= boolArray[i - 1]) {
			return false;
		}
	}
	return true;
}

function phoneNumberListenerHandler(e) {
	const errorMessage = 'Введите 10 цифр номера телефона.';
	const maskToRemove = /^(\+7 )|[()\- ]/g;
	return validateFieldBasedOnKeys(
		e,
		this,
		phoneNumbersAccumulation,
		phoneMasking,
		maskToRemove,
		errorMessage
	);
}

function hoursListenerHandler(e) {
	console.log('hoursListenerHandler - QQQQ');
	const errorMessage = 'Ведите корректный временной интервал.';
	const maskToRemove = /[-:,\s]/g;
	return validateFieldBasedOnKeys(
		e,
		this,
		hoursNumbersAccumulation,
		hoursMasking,
		maskToRemove,
		errorMessage
	);
}

// PHOTO UPLOAD
if (window.location.pathname === webPage) {
	dropZone.addEventListener('dragover', (e) => {
		e.preventDefault();
		dropZone.classList.add('add-photo__drop-off-area_type_dragged-over');
	});

	dropZone.addEventListener('dragleave', () => {
		dropZone.classList.remove('add-photo__drop-off-area_type_dragged-over');
	});

	dropZone.addEventListener('drop', (e) => {
		e.preventDefault();
		dropZone.classList.remove('add-photo__drop-off-area_type_dragged-over');
		const file = e.dataTransfer.files[0];
		handleFile(file);
	});

	fileInput.addEventListener('change', () => {
		const file = fileInput.files[0];
		handleFile(file);
	});
}

function handleFile(file) {
	if (file.size > 5 * 1024 * 1024) {
		alert('Размер файла не может превышать 5МБ');
	}
	if (file && file.type.startsWith('image/')) {
		dropZoneLabel.classList.add('add-photo__label_type_invisible');
		dropZoneCross.classList.remove('button_type_invisible');
		const reader = new FileReader();

		reader.onload = (e) => {
			const imgDataUrl = e.target.result;
			dropZone.style.backgroundImage = `url('${imgDataUrl}')`;
		};
		reader.readAsDataURL(file);
	}
	fileInput.required = false;
	fileInput.setCustomValidity('');
	handleToggleButton();
}

if (window.location.pathname === webPage) {
	dropZoneCross.addEventListener('click', () => {
		dropZoneLabel.classList.remove('add-photo__label_type_invisible');
		dropZoneCross.classList.add('button_type_invisible');
		dropZone.style.backgroundImage = '';
		fileInput.required = true;
		fileInput.setCustomValidity('ERROR');
		fileInput.value = '';
		handleToggleButton();
	});
}

// EVENT LISTENERS
if (window.location.pathname === webPage) {
	controlPage(step);
	setValidationEventListeners();
	controllerBackCancelButton.addEventListener('click', previousSection);
	controllerNextButton.addEventListener('click', nextSection);
	formParticipant.addEventListener('submit', submitData);
	eventDateInputField.addEventListener('input', validateDate);
	organizerPhoneInputField.addEventListener(
		'keydown',
		phoneNumberListenerHandler
	);
	placePhoneInputField.addEventListener('keydown', phoneNumberListenerHandler);
	bookingPhoneInputField.addEventListener(
		'keydown',
		phoneNumberListenerHandler
	);
	workingHoursInputField.addEventListener('keydown', hoursListenerHandler);
	eventHoursInputField.addEventListener('keydown', hoursListenerHandler);
}
