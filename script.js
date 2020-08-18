// let name =["Ahsan","Nadeem","haniya","sheeza","Sabiha"];
// for (let index = 0; index < name.length; index++) {
//     const element = name[index];
//     console.log("Hello Friends Chai Pelo "+element);
// }

// //In this loop collection of data will be pass & F function on foreach loop will be run for every elements of Array and i am printing the same thing with different Logics.

// /*Method One*/
// name.forEach(function f(element) {
//     console.log("Welcome to javascript "+element);
// });

// /*Method Two*/
// name.forEach(element => {
//     console.log("Welcome to javascript using for each " + element);
// });

// //This loop is also run for maximum collections of data
// for (const element of name) {
//     console.log("Welcome to javascript using for of " + element);
// }

// /*Object Creation*/
// let ash={
//     name:"Ahsan",
//     Sec:"B",
//     Age:19,
//     POB:"Karachi"
// }

// /*Iterating the values of objects using forin loop through this loop we can work on objects Iteration*/
// /*Method One*/
// for (const key in ash) {
//     if (ash.hasOwnProperty(key)) {
//         const element = ash[key];
//         console.log(`${key} is `+element);
//     }
// }

// /*Method Two*/
// for(key in ash){
//     console.log(`The ${key} is ${ash[key]}` );
// }

// let database =[
//     user1={
//         username:"ahsan",
//         password:123
//     },
//     user2={
//         username:"haniya",
//         password:234
//     }
// ];

// let newsfeed =[
//     user1 ={
//         username:"ahsan",
//         timeline:"HI ahsan"
//     },
//     user2 ={
//         username:"haniya",
//         password:"hi haniya"
//     },
//     user3 ={
//         username:"sheeza",
//         timeline:"hi sheeza"
//     }
// ];



// function isUservalid(user,pass){
//     for (let index = 0; index < database.length; index++) {
//         if (database[index].username===user &&
//             database[index].password===pass) {
//             return true;
//         }
//     }
//     return false;
// }

// function signin(user,pass){
//     if (isUservalid(user,pass)) {
//         console.log(newsfeed);        
//     }
//     else{
//         alert("Wrong");
//     }
// }
// let UserName = prompt("Whats your user name");
// let Password = prompt("Whats your password");

// signin(UserName,Number(Password));

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list=document.getElementsByTagName("li");

function inputlength() {
    return input.value.length;
}

function listlength() {
    return list.length;
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

function entering() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

function additems(event) {
    if (inputlength() > 0 ) {
        entering();
    }
}

function additem(event) {
    if (inputlength() > 0 && event.keyCode === 13) {
        entering();
    }
}

button.addEventListener("click", additems);
input.addEventListener("keypress", additem);

ul.onclick = function (event) {
    var target = event.target;
    target.classList.toggle("done");
}

function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    list[i].appendChild(btn);
    btn.onclick = removeParent;
}

for (i = 0; i < listlength(); i++) {
    deleteButton();
}