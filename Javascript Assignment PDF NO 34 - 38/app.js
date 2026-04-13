// q 1

// function has(a){
//     first = new Date();
//     console.log(first);
// }
// has();

// q 2

// function addTwoNames(){
//     var firstName  = "Muhammad";
//     var LastName = "Hasnain";
//     var FullName = firstName + " "  + LastName;
//     console.log(FullName);
// }
// addTwoNames();

// q 3

// function addNumbers(){
//     var user = +prompt("Enter here Two Numbers");
//     var user2 = +prompt("Enter here a second Number");
//     var total = user + user2;
//     console.log(total); 
// }
// addNumbers();

// q 4

// function calculator(num1, num2, operator ){
//     if(num === "+"){
//         return num1 + num2;
//     }
//     else if(operator === "-"){
//         return num1 - num2;
//     }
//     else if(operator === "*"){
//         return num1 * num2;
//     }else if(operator === "/"){
//         return num1 / num2;
//     }else{
//         return "Invalid operator"
//     }
// }
// result = calculator(2,2, "-");
// alert(result);

// q 5

// function square(num){
//     return num * num
// }
// var result = square(3)
// console.log(result);

// q 6

// function factorial(num){
//     result = 1;
//     for(var i = num ; i >= 1; i--){
//         result = result * i
//     }
//     return result;
// }

// var number = 5;

// console.log(factorial(number));

// function has(num){
//     number = 1;
//     for(var i = num; i >= 1; i--){
//         result = number * 1
//     }
//     return result
// }

// var ma = 9;
// alert(has(number));

// q 7

// function count(start, end){
//     for(var i = start; i <= end; i++){
//         console.log(i);
        
//     }
// }
// count(4,9);

// function has(start, end){
//     for(var i = start; i <= end; i++){
//         console.log(i);
        
//     }
// }
// has(1,3)

// q 8

// q 9

// function rectangular(width , height){
//     var area = width * height;
//     console.log("Area is " + " " + area);
// }
// rectangular(2, 2)

// q 10

function palindromeWords (word){
    var letter = word.split("");
    var reversed = letter.reverse();
    var jointhewords = reversed.join("")

if(word === reversed){
    console.log("Yes! It's a Palindrome Word");
}
else{
    console.log("No! It's not a Palindrome Word");
    }
}
palindromeWords("madam");
palindromeWords("hello");
palindromeWords("hello")