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
	}, function () { });

	$(window).scroll(function () {
		var sx = $(window).scrollTop();
		var ah1 = $('#a01').offset().top - 70;
		var ah2 = $('#a02').offset().top - 70;
		var ah3 = $('#a03').offset().top - 70;
		if (sx < ah1) {
			$(".b_m li a").removeClass('act');
			$(".b_m li:nth-of-type(1) a").addClass('act');
			$(".menu").removeClass('menubg')
		} else if (sx >= ah1 && sx < ah2) {
			$(".b_m li a").removeClass('act');
			$(".b_m li:nth-of-type(2) a").addClass('act');
			$(".menu").addClass('menubg')
		} else if (sx >= ah2 && sx < ah3) {
			$(".b_m li a").removeClass('act');
			$(".b_m li:nth-of-type(3) a").addClass('act');
			$(".menu").addClass('menubg')
		} else if (sx >= ah3) {
			$(".b_m li a").removeClass('act');
			$(".b_m li:nth-of-type(4) a").addClass('act');
			$(".menu").addClass('menubg')
		}
	})

	$('.hb a').on('click', function () {
		$(".hb a").toggleClass("change");
		// $(".m_m").slideToggle("slow");
		$(".m_m").stop(true, false).animate({ width: "toggle" }, 300);
	});


	GOTOP();
	MENU();

});

function MENU() {
	$(".b_m li:nth-of-type(1) a,.footer ul li:nth-of-type(1) a,.m_m ul li:nth-of-type(1) a").on("click", function () {
		$('html,body').stop().animate({ scrollTop: $("#a00").offset().top }, 800);
		$(".b_m li a").removeClass('act');
		$(".b_m li:nth-of-type(1) a").addClass('act');
		return false;
	});
	$(".b_m li:nth-of-type(2) a,.footer ul li:nth-of-type(2) a,.m_m ul li:nth-of-type(2) a").on("click", function () {
		$('html,body').stop().animate({ scrollTop: $("#a01").offset().top - 70 }, 800);
		$(".b_m li a").removeClass('act');
		$(".b_m li:nth-of-type(2) a").addClass('act');
		return false;
	});
	$(".b_m li:nth-of-type(3) a,.footer ul li:nth-of-type(3) a,.m_m ul li:nth-of-type(3) a").on("click", function () {
		$('html,body').stop().animate({ scrollTop: $("#a02").offset().top - 70 }, 800);
		$(".b_m li a").removeClass('act');
		$(".b_m li:nth-of-type(3) a").addClass('act');
		return false;
	});
	$(".b_m li:nth-of-type(4) a,.footer ul li:nth-of-type(4) a,.m_m ul li:nth-of-type(4) a").on("click", function () {
		$('html,body').stop().animate({ scrollTop: $("#a03").offset().top - 70 }, 800);
		$(".b_m li a").removeClass('act');
		$(".b_m li:nth-of-type(4) a").addClass('act');
		return false;
	});

}

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
