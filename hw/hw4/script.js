var oprat = ["+","-","*","%","/"];


var promp1 = prompt("Enter a number");
var promp2 = prompt("Enter an operator");
var promp3 = prompt("Enter another number");

if((Number(promp1) == Number()) && (String(promp2) == oprat.length) && (Number(promp3) == Number())){
  var opera = Number(promp1)+ String(promp2)+ Number(promp3);
document.querySelector(".oper").innerHTML = opera;
}else{
  var opera = "goodbye"
  document.querySelector(".oper").innerHTML = opera;
}