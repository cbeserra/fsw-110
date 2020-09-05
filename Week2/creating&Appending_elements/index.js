var newH = document.createElement("H1")
newH.textContent = "Welcome to my JS site"
document.body.prepend(newH)


var newP = document.createElement("P")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)


var newLi = document.createElement("li")
newLi.textContent = "poodle"
var myLists = document.getElementById("lists")
myLists.append(newLi)