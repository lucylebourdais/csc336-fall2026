// cmd + / = toggle comment

// 1. Vanilla function
function sayHello() {
    return "Hello from sayHello!";
}


console.log(sayHello());

// 2. Func as variable
let getMessage = function() {
    return "Hello from getMessage!";
}
console.log(getMessage());

// 2.5

// function getExcited(str) {
//     return str + "!!!";
// }
// console.log(getExcited("Hello"));

// let getExcited = function(str) { return str + "!!!"; }
// console.log(getExcited("Hello"));

// 3. Arrow function
let getExcited = (str) => {return str + "!!!";}
console.log(getExcited("Hello"));

// 3.5 Minimized arrow function. One argument, one line of code
let getExcitedMin = str => str + "!!!";
console.log(getExcitedMin("Hello"));



let rootDiv = document.querySelector("body");
let button = document.createElement("button");
button.innerHTML = "Click Me!";
rootDiv.append(button);

// 1.
// function clicked(){
//     console.log("Button clicked!");
// }
// button.addEventListener("click", clicked);

// 2.
// let clicked = function() {console.log("Button clicked!");}
// button.addEventListener("click", clicked);

// 3. Anonymous func
// button.addEventListener("click", function() {console.log("Button clicked!");});
// 3. Anonymous arrow function
// button.addEventListener("click", (event)=>{console.log("Button clicked!");});
// 3.5 Minimized arrow func
// button.addEventListener("click", event => console.log("Button clicked!"));

// To use more than 1 line of code
// button.addEventListener("click", event => {
//     // This is code body of event handler
//     let rand = Math.floor(Math.random() * 5);
//     button.innerHTML = rand;
// });


let numbers = [10, 4, 6, 7, 3, -1]
console.log(numbers); 

// numbers.sort((a,b) => {
//     if (a > b) {
//         return 1;
//     } else if (b > a) {
//         return -1;
//     }
//     return 0;
// });

// ^ in one line -->

numbers.sort((a,b) => a - b);
console.log(numbers);

// let doubledNumbers = numbers.map(function(element) {
//     return element * 2;
// });

let doubledNumbers = numbers.map(element => element * 2);
console.log(doubledNumbers);

// loop through numbers array
let i = 0
// 1. While loop
// while(i < numbers.length) {
//     let number = numbers[i];
//    console.log(number);
//     i++;
// }

// 2. For loop
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }

// 3. For...of loop
// of in JavaScript = in in Python
// for (let number of numbers) {
//     console.log(number);
// }

// 4. Arraw function
numbers.forEach(element => console.log(element));
