window.open("build", "_top");

checkScreenSize();

function onResize() {

	checkScreenSize();

}

var action;
var desktop;
function checkScreenSize() {

	if (window.screen.width <= 600) {
		desktop = false;
	} else {
		desktop = true;
	}

}
