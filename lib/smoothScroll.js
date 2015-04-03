var easingPattern = require('./easingPattern');

function smoothScroll(element, options) {
	var startLocation = window.pageYOffset;
	var timeLapsed = 0;
	var percentage = 0;
	var position;

	// Options
	options = options || {};
	var duration = options.duration || 800,
		centerScroll = options.center || false,
		offset = centerScroll ?  Math.floor( window.innerHeight / 4.5 ) : ( options.offset || 0 ),
		cutAt = options.cutAt || null,
		easing = options.easing || 'easeInOutQuart';

	// Calculate how far to scroll
	var getEndLocation = function (element) {
		var location = 0;
		if (element.offsetParent) {
			do {
				location += element.offsetTop;
				element = element.offsetParent;
			} while (element);
		}
		location = Math.max(location - offset, 0);
		return location;
	};

	var endLocation = getEndLocation(element);
	var distance = endLocation - startLocation;

	// Stop the scrolling animation when the anchor is reached (or at the top/bottom of the page)
	var stopAnimation = function () {
		var currentLocation = window.pageYOffset;
		if ( position === endLocation || currentLocation === endLocation || ( (window.innerHeight + currentLocation) >= document.body.scrollHeight ) ) {
			end();
		}
	};

	var preprocessed = [];
	var interval = 16;

	do {
		percentage = timeLapsed / duration;
		percentage = (percentage > 1) ? 1 : percentage;
		timeLapsed += interval;

		preprocessed.push({ 
			position: startLocation + ( distance * easingPattern(easing, percentage)), 
			percentage: percentage,
		});

	} while ( percentage < 1 );

	// Scroll the page by an increment, and check if it's time to stop
	var thisItem;
	
	var animateScroll = function () {
		thisItem = preprocessed.shift();
		percentage = thisItem.percentage;
		position = thisItem.position;

		window.scrollTo(0, position);
		stopAnimation();
		if ( cutAt && percentage >= cutAt ) {
			end();
		}
	};

	function end() {
		clearInterval(runAnimation);
		
		if ( options.callback ) {
			options.callback();
		}
	}

	// Init
	var runAnimation = setInterval(animateScroll, interval);
}

module.exports = smoothScroll;
