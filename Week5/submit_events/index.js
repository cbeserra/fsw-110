document.getElementById("myButt").addEventListener("click", function() {
    var alertOne = document.getElementById("firstName");
    var alertTwo = document.getElementById("lastName");
    var alertThree = document.getElementById("realAge");
    alert(alertOne.value + "" + " " +  alertTwo.value + "" + " is " + alertThree.value)
});