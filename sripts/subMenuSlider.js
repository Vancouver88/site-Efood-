const subMenuSlider = new Swiper('.slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 5,
	loop: true,
	initialSlide: 0,
	centeredSlides: true,
	pagination: {
		el: '.submenu-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.submenu-btn-prev',
		prevEl: '.submenu-btn-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.35,
		},
		480: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 3.5,
		},
		950: {
			slidesPerView: 4.7,
		},
		1078: {
			slidesPerView: 5,
		}
	}
});