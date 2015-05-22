
function openPopup(url, title) {
	var w = 650;
	var h = 540;

	// Fixes dual-screen position
	var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;

	var windowOptions = 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left;
	var newWindow = window.open(url, title, windowOptions);

	if (newWindow.focus)
		newWindow.focus();
}

module.exports = openPopup;
