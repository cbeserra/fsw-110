function addition()
{
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var ansA = document.getElementById("resultAdd");
        ansA.value = num1+num2;
}

function subtraction() 
{ 
        num1 = document.getElementById("firstNumberB").value;
        num2 = document.getElementById("secondNumberB").value;
        document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = document.getElementById("firstNumberC").value;
        num2 = document.getElementById("secondNumberC").value;
        document.getElementById("result").innerHTML = num1 * num2;
}