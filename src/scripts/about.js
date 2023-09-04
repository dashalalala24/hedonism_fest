import('../pages/about.css');

console.log('О фестивале');

if (document.getElementById('about-page')) {
	const arrowTop = document.querySelector('.about-content__arrow');

	arrowTop.onclick = () => {
		window.scrollTo(scrollY, 0);
	};

	window.addEventListener('scroll', function () {
		arrowTop.hidden = this.scrollY < document.documentElement.clientHeight;
	});
}
