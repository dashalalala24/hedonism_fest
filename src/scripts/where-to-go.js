console.log('Куда пойти');
import('../pages/index.css');
import init from '../components/map.js';
import { linkMarkers } from '../components/constant.js';

ymaps.ready(init);

const buttonMap = document.querySelector('.button-map');
const buttonList = document.querySelector('.button-list');
const map = document.querySelector('.cards__map');
const list = document.querySelector('.cards__page-without-card');

buttonMap.addEventListener('click', () => {
    map.classList.add('cards__map_opened');
    list.classList.remove('cards__page-without-card_opened');
});

buttonList.addEventListener('click', () => {
    map.classList.remove('cards__map_opened');
    list.classList.add('cards__page-without-card_opened');
});