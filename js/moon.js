var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = 1;
} else {
	isMobile = 0;
}


$(function () {
		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function () { 

				var swiper = new Swiper('.swiper-container', {
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'progressbar',
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					autoplay: {
						delay: 7000,
						disableOnInteraction: false,
					}
				});

				var swiper = new Swiper('.swiper-container-a', {
					slidesPerView: 4,
					spaceBetween: 10,
					slidesPerGroup: 4,
					loop: true,
					loopFillGroupWithBlank: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				});

				var swiper = new Swiper('.swiper-container-b', {
					slidesPerView: 1,
					slidesPerGroup: 1,
					loop: true,
					loopFillGroupWithBlank: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				});
		});
	$('.hb a').on('click', function () {
		$(".hb a").toggleClass("change");
		// $(".m_m").slideToggle("slow");
		$(".m_m").stop(true, false).animate({ width: "toggle" }, 300);
	});
});

