// document.getElementById("btn").addEventListener("click", function() { //"Vanlig" version
//     console.log("Klick på knapp!");
// });

document.getElementById("btn").addEventListener("click", () => console.log("Klick på knapp!")); //Fat arrow version





// function sumAB(a, b) { //"Vanlig" version
//     return a+b;
// };

// console.log(sumAB(10,20));

let sumAB = (a, b) => a+b; //Fat arrow version

console.log(sumAB(10,20));






// function isPositive(a) { //Vanlig version
//     return a >= 0;
// };

// console.log(isPositive(5));

let isPositive = (a) => a >= 0; //Fat arrowversion

console.log(isPositive(5));






// function randomNumber() { //"Vanlig" version
//     return Math.random();
// };

// console.log(randomNumber());

let randomNumber = () => Math.random(); //Fat arrow version

console.log(randomNumber());