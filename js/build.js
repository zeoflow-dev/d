checkScreenSize();

function onResize() {

	checkScreenSize();

}

var desktop;
function checkScreenSize() {

	if (window.screen.width <= 600) {
		desktop = false;
	} else {
		desktop = true;
	}

}
