document.getElementById("box").addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
});
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 66)
        box.style.background = "blue";
});
document.getElementById("box").addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
});
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 82)
        box.style.background = "red";
});
document.getElementById("box").addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
});
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 89)
        box.style.background = "yellow";
});
document.getElementById("box").addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
});
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 71)
        box.style.background = "green";
});
window.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange"
});
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 79)
        box.style.background = "orange";
});