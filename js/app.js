console.log("hi");

var fortunesList = ["Confidence is a flimsy shield.", "Welcome adversity.", "The early bird gets the worm, but the second mouse gets the cheese."];
var text = "";
var i = Math.floor(Math.random() * 3);
	text = fortunesList[i];
	
function generateFortuneCookie() {
	document.getElementById('fortune-cookie-text').innerHTML = fortunesList[0];
}