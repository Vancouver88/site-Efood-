const subMenuSlider = new Swiper('.slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 5,
	loop: true,
	pagination: {
		el: '.submenu-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.submenu-btn-prev',
		prevEl: '.submenu-btn-next',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 5,
		},
		// // when window width is >= 640px
		// 640: {
		// 	slidesPerView: 4,
		// 	spaceBetween: 40
		// }
	}
});