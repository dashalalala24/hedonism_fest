import('../pages/about.css');
import { openDonateForm } from '../components/modal';

console.log('О фестивале');

if (document.getElementById('about-page')) {
	const arrowTop = document.querySelector('.about-content__arrow');

	arrowTop.onclick = () => {
		window.scrollTo(scrollY, 0);
	};

	window.addEventListener('scroll', function () {
		arrowTop.hidden = this.scrollY < document.documentElement.clientHeight;
	});

	document
		.querySelector('.about-content__support-button')
		.addEventListener('click', openDonateForm);
}
