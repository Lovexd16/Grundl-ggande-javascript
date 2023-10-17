localStorage.setItem("userName", "Love");
localStorage.setItem("userLName", "Rumar"); //Lägger till ett item

let userName = localStorage.getItem("userName");
console.log(userName);

//localStorage.removeItem("userName"); //Tar bort userName
//localStorage.clear(); //Tar bort allt i localStorage

console.log(localStorage.getItem("userName"));

console.log(localStorage.getItem("userLName"));

//Local storage sparar bara strings. Om man vill spara annat får man göra på följande vis:

// JSON.Stringify()

// JSON.Parse()

let myZoo = ["Hund", "Katt", "Åsna", "Tupp"];
console.log(myZoo);

localStorage.setItem("myZoo", JSON.stringify(myZoo));

let getMyZoo = JSON.parse(localStorage.getItem("myZoo"));

getMyZoo.push("Ödla"); //Lägger till en ny

console.log("Get my zoo", getMyZoo);

localStorage.setItem("myZoo", JSON.stringify(getMyZoo));

//1. Hämta med parse
//2. Ändra (lägg till, radera, etc)
//3. Spara med stringify