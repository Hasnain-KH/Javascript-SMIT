var arr = [
    [0, 1, 2, 3]
    [1, 0, 1, 2]
    [2, 1, 0, 1]
]
console.log(arr);

for (var i = 1; i <= 10; i++) {
    document.write([i] + "<br>")
};


var table = +prompt("Enter what you want the table");
var tablelength = + prompt("Enter your table length")

for (var i = 1; i <= tablelength; i++) {
    document.write(table + '*' + i + '=' + (table * i) + "<br>")
}

var things = new
    Array("apple", "banana", "mango", "orange", "strawberry");
for (i = 0; i < things.length; i++) {
    document.write(things[i] + "<br />")
}



document.write("<b>" + "Series" + "</b>" + "<br><br>")
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

document.write("<b>" + "revers" + "</b>" + "<br><br>")
var i;
for (i = 10; i >= 1; i--) {
    document.write(i + "<br>")
}

document.write("<b>" + "even" + "</b>" + "<br><br>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i)
    }
}


//question no 7
var items =["cake", "apple", "cookie", "chips", "patties"];
var user = prompt("which item do you want");
var found = false;

for (var i = 0; i < items.length; i++){
    if (items[i] === user){
        found = true;
        break;
    }
}

if (found){
    alert(user + "is found in the list")
}else{
    alert(user + "is not found in the list")
}

// //question no 8

var arr =[24, 53, 78, 91, 12];
var largest = arr[0]
for (i = 1; i < arr.length; i++){
    if (arr[i > largest]){
        largest = arr[i]
    }
}
document.write("largest number is + arr")

var A = [24,53,78,91,12]
var smallest = A[0]
for (var i = 1; i < A.length; i++){
    if(A[i] < smallest){
        smallest = A[i]
    }
}
document.write("The smallest number is" + smallest)


// quesrtion no 10
for (i = 1; i <= 100; i++){
    if(i % 5 ===0){
        document.write([i] + "<br>")
    }
}
    







