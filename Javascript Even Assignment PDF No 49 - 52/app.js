// Events Assignment //


let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");

let btn = document.querySelector("#btn");


btn.addEventListener("click", function (ev) {
    ev.preventDefault();
    let div = document.createElement("div");
    div.classList.add("div");
    document.body.append(div)

    div.innerHTML = `
    Name : ${input1.value} <br>
    Email : ${input2.value} <br>
    Password : ${input3.value} <br  >
    `
})

// Task No : 2

let readmore = document.querySelector("#readmore");
let h1 = document.querySelector("#h1");
h1.style.display = "none";

readmore.addEventListener("click", function () {
    if (h1.style.display === "none") {
        h1.style.display = "block";
        readmore.innerText = "less More"
    }
    else {
        h1.style.display = "none";
        readmore.innerText = "Read More"
    }

})