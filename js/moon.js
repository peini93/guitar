var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = 1;
} else {
	isMobile = 0;
}

$(function () {
		// $('body').jpreLoader({
		// 	splashID: "#jSplash",
		// 	loaderVPos: '50%',
		// 	splashVPos: '50%',
		// 	autoClose: true
		// }, function () { });

	$('.hb a').on('click', function () {
		$(".hb a").toggleClass("change");
		// $(".m_m").slideToggle("slow");
		$(".m_m").stop(true, false).animate({ width: "toggle" }, 300);
	});


	GOTOP();

});

function GOTOP() {
	$('.gotop,.logo').on("click", function () {
		$('html,body').animate({ scrollTop: 0 }, 500);
	});
	$(window).scroll(function () {
		var Y = $(window).scrollTop();
		if (Y > 800) {
			$(".gotop").stop(true, false).animate({ bottom: 3 + "%", opacity: 1 }, 500);
		} else {
			$(".gotop").stop(true, false).animate({ bottom: 0, opacity: 0 }, 500);
		}
	});
}
