function multiplyBy(){
	var x=document.getElementById("firstNumber").value;
	var y=document.getElementById("secondNumber").value;
	var z =x * y;
	document.getElementById("result").innerHTML =z;
}
function divideBy(){
	var x=document.getElementById("firstNumber").value;
	var y=document.getElementById("secondNumber").value;
	var z =x / y;
	document.getElementById("result").innerHTML =z;
}
function tempCalculation(){
	var cal=document.getElementById("Celsius").value;
	var result=cal * 9 / 5 + 32
	document.getElementById("Fahrenheit").innerHTML =result;
	
}
function alert_gen(){
	var x=document.getElementById("number").value;
	
	if (x%2==0) {
		alert("its devisble by 2");
	}
	else if (x%3==0) {
		alert("its devisble by 3");	
	}
	else {
		alert("its not devisble by 2 and 3");
	}

}
