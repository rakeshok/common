let easingPattern = require('./easingPattern');

export default function smoothScroll(element, options) {
	let startLocation = window.pageYOffset;
	let timeLapsed = 0;
	let percentage = 0;
	let position;

	// Options
	options = options || {};
	let duration = options.duration || 800,
		centerScroll = options.center || false,
		offset = centerScroll ?  Math.floor( window.innerHeight / 4.5 ) : ( options.offset || 0 ),
		cutAt = options.cutAt || null,
		easing = options.easing || 'easeInOutQuart';

	// Calculate how far to scroll
	let getEndLocation = function (element) {
		let location = 0;
		if (element.offsetParent) {
			do {
				location += element.offsetTop;
				element = element.offsetParent;
			} while (element);
		}
		location = Math.max(location - offset, 0);
		return location;
	};

	let endLocation = getEndLocation(element);
	let distance = endLocation - startLocation;

	// Stop the scrolling animation when the anchor is reached (or at the top/bottom of the page)
	let stopAnimation = function () {
		let currentLocation = window.pageYOffset;
		if ( position === endLocation || currentLocation === endLocation || ( (window.innerHeight + currentLocation) >= document.body.scrollHeight ) ) {
			end();
		}
	};

	let preprocessed = [];
	let interval = 16;

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
	let thisItem;

	let animateScroll = function () {
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
	let runAnimation = setInterval(animateScroll, interval);
}
