var Drag = 10;
var play = 5;
var att = 0;


var promp = prompt("Enter the amount of times you want to attack");

for(var promp = 0; promp< 5; promp++){
  while(promp <= 5){
  if(promp > 5){
    att = 1;
  }else{
    amount = Math.random(Number(promp));
    document.querySelector(".ama").innerHTML = amount;
  }
  }
}