var fortunesList = ["Confidence is a flimsy shield.", "Welcome adversity.", "The early bird gets the worm, but the second mouse gets the cheese."];

function generateFortuneCookie() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(fortunesList);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}