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
});
