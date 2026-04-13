//     pdf    9 -11 

//var first = 10;
// document.write("The value of a is :10" + "<br>" + "<br>");
// first++;
// document.write("The value of ++a is: = ", first + "<br>" + "<br>");
// document.write("The value of a is: = ", first + "<br>" + "<br>");
// document.write("The value of ++a is: = ", first + "<br>" + "<br>");
// first++;
// document.write("Now the value of a is: = ", first + "<br>" + "<br>");
// document.write("The value of a-- is: = ", first + "<br>" + "<br>");
// first--;
// document.write("Now The value of a is: = ", first + "<br>" + "<br>");
// document.write("The value of a-- is: = ", first + "<br>" + "<br>");
// first--;
// document.write("Now The value of a is: = ", first + "<br>");

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("final b = " + a + "<br>");
// document.write("final a = " + b + "<br>");
// document.write("result = ", result + "<br>");

// var user = prompt("enter your name please !");
// document.write("hello " + user + " !wellcome ");


// var num = prompt("Enter a table  \"number\"")
// var num1 = 5
// if (num1 === 5) {
//     for (var i = 1; i <= 20; i++) {
//         document.write(num + "x" + i + "=" + (num * i) + "<br />")
//     }
// }
 

// var subject1 = prompt("\"Enter your first subject name\"");
// var subject2 = prompt("\"Enter your second subject name\"");
// var subject3 = prompt("\"Enter your third subject name\"");

// var total_marks = 100;

// var obtain1 = +prompt("Enter your obtain number for + subject1");
// var obtain2 = +prompt("Enter your obtain number for + subject2");
// var obtain3 = +prompt("Enter your obtain number for + subject3");

// var totalObtain = obtain1 + obtain2 + obtain3;
// var total_marks = total_marks * 3;
// var percentage = (totalObtain / total_marks) * 100;

// var city = prompt("Enter your \"city\" name please")
// if (city == "karachi") {
//     alert("\"Welcome to city of lights\"")
// }
// 

// var gender = prompt("Enter your \"gender\" please");
// if (gender == "male") {
//     alert("\"Good Morning Sir\"");
// } else if (gender == "female") {
//     alert("\"Hi Mam's\"");
// }

// var traffic_signals = prompt("Enter the Traffic any  light ")

// if (traffic_signals == "red") {
//     alert("\"Stop and Wait\"");
// }
// else if (traffic_signals == "green") {
//     alert("\"ready for go\"");
// }
// else if (traffic_signals == 'yellow') {
//     alert("\"GO\"  \"GO\"  \"GO\"")
// }

// qu 04 

// var fuel = prompt("Check your fuel tank please");
// if (fuel < 0.25) {
//     alert("please refill the fuel in your car")
// }

// q 05

//


// var subject1 = Number(prompt("Enter your Islamiat Marks"));
// var subject2 = Number(prompt("Enter your Math Marks"));
// var subject3 = Number(prompt("Enter your Math paper number"));

// var total_marks =

//     Number(prompt("Enter total marks"));

// var marksObtained = subject1 + subject2 + subject3;

// var percentage = (marksObtained / total_marks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good"
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "you need to improve"
// } else {
//     grade = "Fail";
//     remarks = "Sorry"
// }


// document.write("<h1>Marks Sheet</h1>");
// document.write("total marks: " + total_marks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remaks: " + remarks);

// var secret = 4;
// var number = +prompt("Enter number 1 to 10 any");
// if (number === secret) {
//     alert("Bingo! Correct answer")
// } else if (number + 1 === secret) {
//     alert("close enough to the correct answer")
// } else {
//     alert("try again")
// }


// var hassan = +prompt("enter the value")
// if (hassan % 3 === 0) {
//     alert("it is divisible by 3")
// } else {
//     alert("it is not divisible by 3")
// }o

// var guess = +prompt("Enter the any \"number\" what you wants");
// if (guess % 2 === 0) {
//     alert("it is a even number")
// } else {
//     alert("it is a odd number")
// }


// var weather = +prompt("Enter a weather number");
// if (weather > 40) {
//     alert("\"it is too hot outside,\"")
// } else if (weather > 30) {
//     alert("\"The weather today is normal.\"");
// } else if (weather > 20) {
//     alert("\"Today's Weather is cool.\"");
// } else if (weather > 10) {
//     alert("\"OMG! Today's weather is so Cool.\"");
// } else {
//     alert("we dont know yet")
// }

// var user = Number(prompt("\"Enter the first number.\""));
// var guess = Number(prompt("\"Enter the second number.\""));
// var operator = Number(prompt("\"Enter the operator number.\""));

// if (user + guess) {
//     console.log(user + guess);
// } 
// if (user * guess) {
//     console.log(user * guess);
// }
// if (user / guess) {
//     console.log(user / guess);
// } 
// if (user - guess) {
//     console.log(user - guess);
// }
// if (user % guess) {
//     console.log(user % guess);
// }
// pdf 12 - 13

// var ch = prompt("Enter a single character");
// var code = ch.charCodeAt(0);
// if (code >= 48 && code <= 57) {
//     alert("\"It is a number\"");
// }
// else if (code >= 65 && code <= 90) {
//     alert("\"It is a Capital Letters\"");
// }
// else if (code >= 97 && code <= 122) {
//     ;
//     alert("\"It is a Small Letters");
// }
// else {
//     alert("\"Invalid Character\"");
// }



// var client = +prompt("\"Enter a number\"");
// if (client > 0) {
//     alert("\"It is a Positive number\"");
// }
// else if (client < 0) {
//     alert("\"It is a Negative number\"");
// }
// else if (client == 0) {
//     alert("\"Either it's a positive nor negative\"");
// }


// var user = prompt("\"Enter a character\"");

// var has = "aeiou";

// if (user == "a" || user == "e" || user == "i" || user == "o" || user == "u") {
//     alert("true")
// }
// else if (user !== has) {
//     alert("false")
// }

// var password = 1234;
// var guess = +prompt("\"Enter your password\"");
// if (guess == " ") {
//     alert("\"Enter your password\"")
// }
// else if (guess == password) {
//     alert("\"Correct! The passsword you entered matches the original password\"");
// }
// else {
//     alert("\"Incorrect password\"")
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// var time = prompt("\"Enter the time what time is it now\"");

// time = Number(time);

// if (time > 0 && time < 1200) {
//     alert("Good Morning");
// }
// else if (time > 1200 && time < 1700) {
//     alert("Good Afternoon");
// }
// else if (time > 1700 && time < 2100) {
//     alert("Good Evening");
// }
// else if (time > 2100 && time < 2459) {
//     alert("Good Night");
// }