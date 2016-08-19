/**
 * @copyright 2016 Can Designs
 * @name 	Admina
 * @author 	http://candesigns.de
 * @version	1.0
 */
var Site = function() {
	this.run = function() {
		$('.before-run').show();

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
