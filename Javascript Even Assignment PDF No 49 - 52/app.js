// Events Assignment //


// let btn = document.querySelector("#btn");


// btn.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     let div = document.createElement("div");
//     div.classList.add("div");
//     document.body.append(div)

//     div.innerHTML = `
//     Name : ${input1.value} <br>
//     Email : ${input2.value} <br>
//     Password : ${input3.value} <br  >
//     `
// })

// Task No : 2

// let readmore = document.querySelector("#readmore");
// let h1 = document.querySelector("#h1");
// h1.style.display = "none";

// readmore.addEventListener("click", function () {
//     if (h1.style.display === "none") {
//         h1.style.display = "block";
//         readmore.innerText = "less More"
//     }
//     else {
//         h1.style.display = "none";
//         readmore.innerText = "Read More"
//     }

// })

// let inp1 = document.querySelector("#inp1");
// let inp2 = document.querySelector("#inp2");
// let inp3 = document.querySelector("#inp3");
// let inp4 = document.querySelector("#inp4");
// let inp5 = document.querySelector("#inp5");

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function (event) {

//     event.preventDefault();

//     let div = document.createElement("div");
//     div.classList.add("div");
//     div.innerHTML = `
//     <p>Name : ${inp1.value}</p>
//     <p>Father'sName : ${inp2.value}</p>
//     <p>Email : ${inp3.value}</p>
//     <p>Phone Number : ${inp4.value}</p>
//     <p>Roll Number : ${inp5.value}</p>
//     `
//     document.body.appendChild(div);
// })



let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let inp3 = document.querySelector("#inp3");
let inp4 = document.querySelector("#inp4");
let inp5 = document.querySelector("#inp5");

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let div = document.createElement("div");
    div.classList.add("div");

    div.innerHTML = `
        <p>sName : ${inp1.value}
        <button class = "del">Del</button>
        <button class = "edit">Edit</button>
        </p>
        <p>Father's Name : ${inp2.value}
        <button class = "del">Del</button>
        <button class = "edit">Edit</button>
        </p>
        <p>Email : ${inp3.value}
        <button class = "del">Del</button>
        <button class = "edit">Edit</button>
        </p>
        <p>Phone Number : ${inp4.value}
        <button class = "del">Del</button>
        <button class = "edit">Edit</button>
        </p>
        <p>Phone Number : ${inp5.value}
        <button class = "del">Del</button>
        <button class = "edit">Edit</button>
        </p>

    `;
    document.body.appendChild(div);


    div.addEventListener("click", function (e) {
        if (e.target.classList.contains("del")) {
            let item = e.target.parentElement;
            item.remove();
        }

        if (e.target.classList.contains("edit")) {
            let getitem = e.target.parentElement;
            console.log(getitem.innerText);

        }
    })
});


