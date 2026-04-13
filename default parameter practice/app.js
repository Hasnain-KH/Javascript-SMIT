// The practice of detault values in javascript

function greet(name = "hasnain"){
    console.log(name);
}
greet();

function greet(name = "hasnain"){
    console.log(name);
}
greet("kashif");

function createprofile({name = "hasnain", age = 20, country = "pakistan"}){
    console.log(`${name} is ${age} years old from ${country}`);
}
createprofile({age: 30});