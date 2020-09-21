var hOne = document.createElement("h1")

function addNum() {
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansAdd = document.getElementById("answerAdd");
        ansAdd.value = val1 + val2;
}

function subNum() {
        var val3 = parseInt(document.getElementById("value3").value);
        var val4 = parseInt(document.getElementById("value4").value);
        var ansSub = document.getElementById("answerSub");
        ansSub.value = val3 - val4;
}

function mulNum() {
        var val5 = parseInt(document.getElementById("value5").value);
        var val6 = parseInt(document.getElementById("value6").value);
        var ansMul = document.getElementById("answerMul");
        ansMul.value = val5 * val6;
}