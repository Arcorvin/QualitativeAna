var prompt1 = prompt("Enter the amount of your bill");

var tax1 = Number(prompt1) * .07;

var tax2 = (Number(tax1)+ Number(prompt1)) * .05;

var total = Number(tax2)+ Number(tax1) + Number(prompt1);

var prib = "Your total bill is $" + total;

document.querySelector(".bill").innerHTML = prib;