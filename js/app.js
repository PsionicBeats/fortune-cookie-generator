console.log("hi");

var fortunesList = ["Confidence is a flimsy shield.", "Welcome adversity.", "The early bird gets the worm, but the second mouse gets the cheese."];
//if any fortunes are added to the list above, make sure to change "for loop" paramter one value (var i = " ";) and stats function at bottom
function generateFortuneCookie(){ //runs for the first time button is pressed
  var cloneList = fortunesList.slice(); //this will console all values within the array, allowing fortunesList to stay as a global variable

  //randomizer for fortunes
  var randomFortune = " ";
  for (var i = 2; i >= 0; i--){       
    randomFortune = cloneList.splice(Math.floor(Math.random() * (i + 1)), 1); 
    //(i + 1) 
    console.log(randomFortune);
    //temporarily stores random list
    var tempCache = document.getElementById("fortune-cache");
    var nodeone = document.createElement("DIV");
    nodeone.innerText = randomFortune;
    tempCache.appendChild(nodeone);
  }

  //changes button to prevent a new list of variables from being created
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "block";

  //appends last fortune from "fortune-cache" into "fortune-cookie-text"
  var cookieText = document.getElementById("fortune-cookie-text");
  var nodetwo = tempCache.lastChild;
  cookieText.appendChild(nodetwo);
