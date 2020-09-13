for (var i = 0; i < 5; i++) {
    var team = document.createElement ('h1');
    team.setAttribute ('id', 'teamText');
    team.textContent = 'Go 49ers!';
    document.body.append (team);
    team.style.fontSize = '20px';
    team.style.fontFamily = 'sans-serif';
    team.style.color = 'cornflowerblue';
    team.classList.add('border');
}