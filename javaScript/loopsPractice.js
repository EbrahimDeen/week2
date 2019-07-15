function result(){
    var num1=document.getElementById("number1");
    var num2=document.getElementById("number2");
    if (num1.value>num2.value) {
        document.getElementById("Result").innerHTML=num1.value;
    }
    else if (num1.value<num2.value) {
        document.getElementById("Result").innerHTML=num2.value;
    }
    else if (num1.value==num2.value) {
        document.getElementById("Result").innerHTML="Both Number are Equal";
    }

}
function looptask1(){
    var i=1;
    for(i;i<=15;i++){
        if (i%2==0) {
            console.log("this is Even: "+i);
        }
        else if (i%2 !=0){
            console.log("this is Odd: "+i);
        }
    }
}
// looptask1();
function looptask2(){
    var i=0;
    for(i;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log(i+"fizzBuzz")
        }
        else if(i%3==0){
            console.log(i+"fizz")
        }
        else if(i%5==0){
            console.log(i+"Buzz")
        }
    }
}
// looptask2();
