var student = Array();

var userName = new Array();

var string = ["Banana", "Apple", "Orange"];

var num = [1,2,3,4,5];

var bol = [true, true, false, false];

var mix = ["Banana", "Apple", 1,2,3,4,5, true,false];

document.write("qualification")
var qualification = ["SSC, HSC, BCS, BS, BCOM, MS, M.Phil, phD"];
document.write(qualification);

var students = ["ayan", "sufyan", "hasnain"];
var score = [200, 300, 400];
var totalMarks = 500;
var cal = (200 / totalMarks * 100);
var cal2 = (300 / totalMarks * 100);
var cal3 = (400 / totalMarks * 100);

document.write("Score of Ayan is" + " " + cal + "%" + "<br />")
document.write("Score of sufyan is" + " " + cal2 + "%" + "<br />");
document.write("Score of hasnain is" + " " + cal3 + "%" + "<br />");

// Question No 9

var color = ["Blue", "Green", "Yellow"];
document.write(color + "<br /><br />");
var user = prompt("Please enter a color name");
color.unshift(user);
document.write(color + "<br /><br />");

// var color = ["Blue", "Green", "Yellow"];
// document.write(color + "<br /><br />");
var endColor = prompt("Enter for end color");
color.push(endColor);
document.write(color + "<br><br>");

color.unshift("White", "Purple");
document.write(color + "<br /><br />");

color.shift();
document.write("deleting the first color from the start" + " " + color + "<br /><br />");

color.pop("delete the last color name now" + color + "<br /><br />");
document.write("delete the last color name now" + color + "<br><br>");

var addIndex = prompt("which index you wants to add the color");
var addColor = prompt("write the name of color");

color.splice(addIndex, 0, addColor);
document.write("<b> after adding color at index: </b>" + color + "<br><br>");

var indexDelete = prompt("\"From where you wants to delete index\"");
var deleteCount = prompt("\"how many colours do want to delete\"");

color.splice(indexDelete, deleteCount);
document.write(color + "<br><br>");

// Question No 10

var students = [300, 200, 800, 400];
document.write("This is the origional value" + students + "<br><br>");
students.sort();
document.write(students);

var cityName = ["Karachi", "Lahore", "Islamabad", "Queta", "Peshawar"];
document.write("This is the origional value" + cityName + "<br><br>");
var cityList = cityName.slice(1, 3)
document.write(cityList);

var arr = ["This", "is", "my", "cat"];
document.write(arr.join(" "));

var arr = [];
arr.push("Ayan");
arr.push("Sufyan");
arr.push("Hasnain");
document.write(arr + "<br><br>");

var remved1 = arr.pop();
document.write("removed1:" + remved1 + "<br><br>");
var remved2 = arr.pop();
document.write("removed2:" + remved2 + "<br><br>");
var remved3 = arr.pop();
document.write("removed3:" + remved3 + "<br><br>");


document.write("<b>arr after removing all items:</b>" + arr);

var thingsName = [];
thingsName.push("Banana");
thingsName.push("Apple");
thingsName.push("Orange");
document.write("These are the names :" + "  " + thingsName + "<br><br>");

var firstItem = thingsName.shift();
document.write("Ater .shift Banana was out from the array :" + "  " + firstItem + "<br><br>");
document.write("And now this is the remain Names :" + "  " + thingsName);


var names = ["Apple", "sumsing", "motorola", "Nokia", "Sony", "Haiet"];
document.write("<select>");



for (i = 0; i < names.length; i++) {
    document.write("<option>" + names[i] + "</option>")
}

document.write("</select>")
























