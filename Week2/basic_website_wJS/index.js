var navBar = document.createElement('nav');
document.body.appendChild(navBar);
console.dir(navBar);

var linkOne = document.createElement('A');
linkOne.setAttribute('href','/html');
var link1 = document.createTextNode('Home')

linkOne.appendChild(link1);

navBar.appendChild(linkOne);

var linkTwo = document.createElement('A');
linkTwo.setAttribute('href','/html');
var link2 = document.createTextNode('Links')
linkTwo.appendChild(link2);

navBar.appendChild(linkTwo);

var linkThree = document.createElement('A');
linkThree.setAttribute('href','/html');
var link3 = document.createTextNode('About');
linkThree.appendChild(link3);

navBar.appendChild(linkThree);

var headerTag = document.createElement('h1');
headerTag.setAttribute('id', 'header')
document.body.appendChild(headerTag);

console.dir(headerTag);

var h1Tag = document.getElementById('header').innerHTML = 'Welcome to my Javascript created Website!';

var pTag = document.createElement("p");
pTag.setAttribute('id', 'paragraph');
document.body.appendChild(pTag);

console.dir(pTag);

var story = document.getElementById('paragraph');
var words = document.createTextNode ('I must say this was pretty hard assignment, thank goodness for helping classmates and a lot of Youtube teachers who teach! Being in a basic and an advanced class the same time is very fustrating! Now that I am done I hear my beer calling my name!');

story.appendChild(words);

var listOne = document.createElement('ol');
listOne.setAttribute('id', 'ol1');
document.body.appendChild(listOne);

var item1 = document.createElement('li');
document.getElementById('ol1')
listOne.append(item1);

var item2 = document.createElement('li');
document.getElementById('ol1')
listOne.append(item2);

var item3 = document.createElement('li');
document.getElementById('oli')
listOne.append(item3);

console.dir(listOne);

item1.textContent = 'Corona Extra!'
listOne.append(item1);

item2.textContent = 'Bud Light!!'
listOne.append(item2);

item3.textContent = 'Good Times!!!'
listOne.append(item3);

var footerTag = document.createElement('f');
footerTag.setAttribute('id','footer')
document.body.appendChild(footerTag);

console.dir(footerTag);

var footTag = document.getElementById('footer').innerHTML = 'christopher.beserra@bryanuniversity.edu';