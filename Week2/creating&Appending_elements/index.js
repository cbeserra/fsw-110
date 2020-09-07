var newH = document.createElement("H1")
newH.textContent = "Welcome to my JS site"
document.body.prepend(newH)

var newP = document.createElement("P")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

var list = document.createElement('ol');
list.setAttribute("id", "OL1")
document.body.appendChild(list);

var newLiOne = document.createElement("li");
document.getElementById("OL1")
list.append(newLiOne);

var newLiTwo = document.createElement("li");
document.getElementById("OL1")
list.append(newLiTwo);

var newLiThree = document.createElement("li");
document.getElementById("OL1")
list.append(newLiThree);
console.dir(list);

newLiOne.textContent = "Football season is near!"
list.append(newLiOne);

newLiTwo.textContent = "Ready for some NFL!!"
list.append(newLiTwo);

newLiThree.textContent = "Go Niners - Revenge tour!!"
list.append(newLiThree);