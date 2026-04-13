// PDF No 20 - 26

// var Firstname = prompt("\"Enter your first name please\"");
// var Lastname = prompt("\"Enter your Last name please\"");
// var fullName = (Firstname + Lastname);
// console.log("Wellcome" + " " + fullName);

// Question No 2

// var user = prompt("\"Enter your favorite Mobile\"");
// var length = user.length;
// document.write("My favorite phone is:" + "  " + user + " " + " " + "Length of string is :" + length);

// / Question No 3

// var country = "pakistan";
// var user = country.indexOf("n");
// document.write("String:" + " " + "Pakistani Index of 'n' : " + user);

//  Question No 4

// var say = "Hello World";
// var find = say.lastIndexOf("l");
// document.write("String:" + say + " " + "Last Index of ' l ' is :" + find);

// / Question No 5

// var country = "pakistani";
// var guess = country.charAt(3);
// document.write("String : " + country + " "  + "Character at index 3 : "  + guess);

// / Question No 6

// var firstName = "Muhammad Hasnain";
// var LastName =  "Riaz";
// var fullName = firstName.concat(LastName);
// document.write(fullName);


// / Question No 7

// var city = ("Hyderabad");
// var change = city.replace("Hyderabad",  "Islamabad");
// document.write("City : " + city + " " +  "After Replacement : " + change)

// / Question No 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message + "<br /><br />");
// var change = message.replaceAll("and", "&");
// document.write(change);

// / Question No 9 

// var str = "472";
// var num = Number(str);
// document.write("Value" + " " + str + "<br>");
// document.write("Type of" + " " + typeof  str + "<br>");
// document.write("Value"+  " " + num + "<br>");
// document.write("Type of" + " " + typeof  num + "<br><br>");

// / Question No 10

// var user = prompt("\"Enter something\"");
// var capi = user.toUpperCase();
// document.write(capi);

// / Question No 11

// var text  = prompt("\"Enter anything here\"");
// var words = text.split(" ");
// var result = " ";
// for (var i = 0; i < words.length; i++){
//     result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
// }
// document.write(result);

// / Question No 12

var num = (35.36);
var str = num.toString();
var result = str.replace(".", "")

document.write("Value" + " " + num  + "<br>");
document.write("Type of " + " " + typeof num + "<br>");
document.write("Value" + " " + result + "<br>");
document.write("Type of" + " " + typeof result );









// / Question No 13

// var user = prompt("Enter anything please");

// var valid = "true";

// for (var i = 0; i < user.length; i++)/ Question No
//     var charcode = user.charCodeAt(i)

//     if (charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64){
//         valid = "false";
//         break;
//     }
// }

// if (!valid){
//     alert = ("Please enter a valid name and (no speacial symboles  @! , .)")
// }else{
//     alert("User name accepted" + " "  +  user)
// }

// / Question No 14

// var A = ["cake", "apple", "pie", "cookie", "chips", "patties"];

// var useritem = prompt("Enter somthing here");

// useritem = useritem.toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++){
//     if (A[i] === useritem){
//         found = true;
//         break;
//     }
    
// }

// if (found === true){
//     alert("\"Item found in the List\"")
// }else{
//     alert("\"Item is not found in the List");
// };


// / Question No 15

// var password = prompt("Enter the password here please");

// var hasAlphabets = false;
// var hasNumbers= false;

// if (password.length < 6){
//     alert("The password should be atleast 6 digit")
// }
// else {
//     for (var i = 0; i < password.length; i++){
//         var code = 
//         password.charCodeAt(i);
//         if (
//             (code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
//                 hasAlphabets = true;
//             }
//             if  (code >= 48 &&hasNumbers){
//                 alert("password is valid")
//             }else{
//                 alert("password must contain alphabets and numbers")
//             }

//     }
// }

// q 16

// var University = "University Of Karachi";
// var uniArray = University.split("");
// for(var i = 0; i < uniArray.length; i++){
//     document.write(uniArray[i] +  "<br / >")
// };


// q 17

// var user = prompt("\"Enter something here \"");
// var end = user.charAt(user.length -1);
// document.write(`The last letter is ${end}`);



// q 18
// var str = "The quike brown fox jumps over the lazy dog";

// var lowerStr =  str.toLowerCase();

// var words = lowerStr.split();

// var count = 0;
// for (var word of words){
//     if (word === "the"){
//         count++
//     }
// }

// console.log(count);









