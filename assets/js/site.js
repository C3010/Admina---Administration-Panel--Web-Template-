/*!
 * Admina v1.0
 * Copyright 2016 C3O
 */
var Site = function() {
	this.run = function() {
		$('.before-run').show();

		$(document).on('click', '[data-toggle="fullscreen"]', function() {
			if (screenfull.enabled) {
				screenfull.toggle();
			}

			return false;
		});

		if (screenfull.enabled) {
			document.addEventListener(screenfull.raw.fullscreenchange, function() {
				$('[data-toggle="fullscreen"]').toggleClass('active', screenfull.isFullscreen);
			});
		}

		// Animation
		$(".animsition").animsition({
			inClass: 'fade-in',
		    outClass: 'fade-out',
		    inDuration: 1500,
		    outDuration: 800,
		    linkElement: '.animsition-link',
		    loading: true,
		    loadingParentElement: 'body',
		    loadingClass: 'animsition-loading',
		    loadingInner: '',
		    timeout: true,
		    timeoutCountdown: 2000,
		    onLoadEvent: true,
		    browser: ['animation-duration', '-webkit-animation-duration'],
		    overlay : false,
		    overlayClass : 'animsition-overlay-slide',
		    overlayParentElement : 'body',
            transition: function(url) {
				window.location.href = url;
			}
		});
	};
};
