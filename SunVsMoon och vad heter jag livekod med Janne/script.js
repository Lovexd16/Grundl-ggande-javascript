console.log("Hej Love");

let sunvsmoon = document.getElementById("sunvsmoon");
let myText = document.getElementById("myText");
let saveTextBtn = document.getElementById("saveTextBtn");


sunvsmoon.addEventListener("click", () => {

    if (sunvsmoon.getAttribute("src") == "sun.jpg") {

        sunvsmoon.setAttribute("src", "moon.jpg")
    } else {
        sunvsmoon.setAttribute("src", "sun.jpg")
    }
})

saveTextBtn.addEventListener("click", () => {
    console.log("Innehållet i input efter click", myText.value);

    localStorage.setItem("myText", myText.value);
})

if (localStorage.getItem("myText")) {
    console.log("Det finns en nyckel med myText");
    myText.value = localStorage.getItem("myText");
}

let person = {
    id: 100,
    name: "Love",
    age: 21,
    boy: true,
}

console.log("person", person.age); //ändra person.X för att få ut olika

localStorage.setItem("person", JSON.stringify(person));

let getPerson = JSON.parse(localStorage.getItem("person"));
console.log("getPerson", getPerson);
console.log("getPerson", getPerson.name); //ändra person.X för att få ut olika
