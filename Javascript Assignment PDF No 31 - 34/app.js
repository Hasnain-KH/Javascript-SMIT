// QUESTION NO: 1

// var time = new Date();
// document.write(time);

// QUESTION NO: 2
// var date = new Date();

// var month  = ["january", "Febuary", "March", "April", "May", "June", "July" , "Agust", "September", "Octuber", "November", "Decembet"];

// alert("\"The Current Mnth is\"" + month[date.getMonth()]);

// QUESTION NO: 3


// var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];

// var date = new Date();

// var take = date.getDay();

// var leleteHain = take.slice(0,3);

// alert(weekNames[take]);

// QUESTION NO: 4

// var today = new Date();

// var day = today.toString().slice(0,  3);

// if (day === "Sat" || day === "Sun"){
//     alert("\"Today is fun day\"");
// };


// QUESTION NO: 5

// var today = new Date();
// var date = today.getDate();
// if (date < 16){
//     alert("\"First fifteen days of the month\"");
// }else{
//     alert("\"Last fifteen days of the month\"");
// };

// QUESTION NO: 6

// now = new Date();

// millisecond = now.getTime();

// minutes = millisecond / 1000 * 60;

// alert("Minutes since jan 1 1970 : "  +  Math.floor(minutes));

// QUESTION NO: 7

// var today = new Date();
// var hour = today.getHours();
// if (hour < 12){
//     alert("\"It's AM\"");
// }else{
//     alert("\"It's PM\"");
// };

// QUESTION NO: 8

// var date = new Date(2020, 11, 31);
// console.log(date);


// var today = new Date();
// var date = today.getHours();
// if (date < 12){
//     document.write("It's a morning now")
// }else{
//     document.write("It's a not morning now")
// };

// nQUESTION NO: 9

// var RamadanStart = new Date("june 18 2025");
// var today = new Date();
// var diff = today - RamadanStart;
// var oneDay = 1000 * 60 * 60 * 24;
// var daysPassed =  Math.floor(diff / oneDay);
// alert(oneDay + "days have passed since 1st Ramadan");

// QUESTION NO: 10;

// var user = new Date();
// var getmillisecond = user.getTime();
// var old_date = new Date("january, 1, 2015");
// var oldmillisecond = old_date.getTime();
// var difference = getmillisecond - old_date;
// var differenceSecond = difference / 1000;
// alert(differenceSecond);

//QUESTION NO: 11;

// var CurrentDate = new Date();
// var CurrentHour =  CurrentDate.getHours();
// CurrentDate.setHours(CurrentHour + 1);
// alert(CurrentDate);

// QUESTION NO: 12

// var todayDate = new Date();
// var year = todayDate.getFullYear();
// todayDate.setFullYear(year - 100);
// alert(todayDate);


// QUESTION NO: 13

// var user = prompt("How old are you?");
// var userage =  new Date().getFullYear()
// birthday = (userage - user);
// alert(birthday);

// QUESTION NO:14

// var customerName = prompt("\"Enter your name\"");
// var monthName = prompt("\"Enter month name\"");
// var units = +prompt("\"Enter here units\"");
// var chargesPerUnit = +prompt("\"Enter what is charges of each unit\"");

// var latepayment  =  500;

// var netAmount  = chargesPerUnit * units;

// var groosAmount = netAmount + latepayment;

// console.log("Customer name is Muhammad Hasnain" + " " + customerName);


// console.log("Month is " + " " +  monthName);


// console.log(units + " " +  "Units is used");;


// console.log("The price of one unit is " + " " + chargesPerUnit);

// console.log("Total Amount is " + " " + netAmount);

// console.log("This is the charges of late payment" + latepayment)

// console.log("It's your totally amount that you will have pay" + groosAmount);






