/**
 * @copyright 2016 Can Designs
 * @name 	Admina
 * @author 	http://candesigns.de
 * @version	1.0
 */
var Site = function() {
	this.run = function() {
		$('.before-run').show();

		$('.tooltip-right').tooltipster({
	        theme: 'tooltipster-theme',
	        position: 'right'
	    });

		$('.tooltip').tooltipster({
	        theme: 'tooltipster-theme',
	        position: 'bottom'
	    });

		$(document).on('click', '[data-toggle^="class"]', function(event) {
			event.preventDefault();
			var $this = $(event.target), $class, $target, $tmp, $classes, $targets;
			!$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));

			$class = $this.data()['toggle'];
			$target = $this.data('target') || $this.attr('href');

			$class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
			$target && ($targets = $target.split(','));
			$classes && $classes.length && $.each($targets, function(index, value){
				if($classes[index].indexOf('*') !== -1) {
					var patt = new RegExp('\\s'+$classes[index].
						replace(/\*/g,'[A-Za-z0-9-_]+').
						split(' ').
						join('\\s|\\s')+'\\s','g');

					$($this).each(function(i, it){
						var cn = ' '+ it.className + ' ';
						while(patt.test(cn)){
							cn = cn.replace(patt, ' ');
						}

						it.className = $.trim(cn);
					});
				}

				($targets[index] != '#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
			});

			$this.toggleClass('active');
		});

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
	};
};
