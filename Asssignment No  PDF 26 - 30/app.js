// Question No : 1

var user = prompt("\"Enter positive integers .\"");
console.log("Number" + " " + user);
console.log("ound off value" + " " +  Math.round(user));
console.log("flour value" + " " + Math.floor(user));
console.log("ceil value" + " " +  Math.ceil(user));

//  Question No : 2

var  user = prompt("\"Enter Negative integers . \"");
console.log("Number" + " " + user);
console.log("round off value" + " " + Math.round(user));
console.log("floor value" + " " + Math.floor(user));
console.log("ceil" + " " + Math.ceil(user));

//  Question No :  3

var dice = Math.floor(Math.random() * 4 + 1);
console.log(dice);
var dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

//  Question No  : 4

var num = -4;
console.log(num);
var result = Math.abs(num);
console.log(result);

//  Question No :  5

var toes = Math.floor(Math.random() * 2);
console.log(toes);
if(toes === 0){
    document.write("Heads");
}else{
    document.write("Tail");
}
 
//  Question No :  6

console.log("random number between 1 and 100" + ":" + 
Math.floor(Math.random() * 100 + 1));

//  Question No : 7

var weight = prompt("Enter your weight here");
var parsweight = parseFloat(weight);
document.write(parsweight + "kg");

//  Question No : 8


var secretNumber = Math.floor(Math.random() * 10 + 1);
var user = prompt("Enter her number between 1 - 10");
var user = Number(user);
if(user === secretNumber){
    alert("\"Welcome congratulate\"");
}else{
alert("Sorry! The secrete number was " + secretNumber);
};
