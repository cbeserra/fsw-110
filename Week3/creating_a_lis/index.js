
for (var i = 0; i < 10; i++) {
    var h1tag = document.createElement("H1");
    h1tag.setAttribute("id", "h1Txt");
    h1tag.textContent = "Hello World";
    document.body.appendChild(h1tag);
    h1tag.style.color = "red";
    h1tag.style.border = "thick solid #0000ff";
    h1tag.style.backgroundColor = "green";
}


//cannot figure out what I am doing wrong.

const arr = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

const cont = document.getElementById("container");
const ul = document.createElement("ul");

ul.setAttribute("id", "theList");
for (i = 0; i <= arr.length - 1; i++) {
    
    const li = document.createElement("li");	
    
    li.innerHTML = arr[i];	                        
    ul.appendChild(li);	
}
cont.appendChild(ul);		