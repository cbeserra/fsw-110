
for (var i = 0; i < 10; i++) {
    var h1tag = document.createElement("H1");
    h1tag.setAttribute("id", "h1Txt");
    h1tag.textContent = "Hello World";
    document.body.appendChild(h1tag);
    h1tag.style.color = "red";
    h1tag.style.border = "thick solid #0000ff";
    h1tag.style.backgroundColor = "green";
}


var element = document.createElement("ul");
    element.textContent = "List of Names"; 
    element.setAttribute("id", "constNames"); 
    document.body.append(element); 
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (var i = 0; i < names.length; i++) {
    var list = document.getElementById("constNames"); 
    list.innerHTML += "<li>" + names[i] + "</li>" 
}