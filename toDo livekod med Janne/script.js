//UTAN LOCALSTORAGE

// console.log("Hej Love");

// let newTodo = document.getElementById("newTodo");
// let saveTodoBtn = document.getElementById("saveTodoBtn");
// let todoList = document.getElementById("todoList");

// let thingsToDo = ["Skriv ut lista", "Lägg till nytt", "Ta bort från listan", "Spara och gå hem"];

// function printList() {

//     todoList.innerHTML = ""; //Tömmer ul taggen på innehåll sen körs forloop

//     for (item of thingsToDo) {
//         let li = document.createElement("li");
//         li.innerText = item;
//         li.id = item;

//         li.addEventListener("click", (event) => {
//             console.log("event", event.target.id);
//             console.log("Klick på item");

//             thingsToDo.splice(thingsToDo.indexOf(event.target.id), 1) //indexOf letar upp indexsiffran för det vi klickar på. 1 är hur många steg vi ska ta bort
//             console.log("efter splice", thingsToDo);
//             printList();
//         })

//         todoList.appendChild(li);
//     }
// }

// saveTodoBtn.addEventListener("click", () => {
//     thingsToDo.push(newTodo.value);
//     console.log("list after click", thingsToDo);
//     newTodo.value = ""; //tömmer input boxen efter man tryckt spara
//     printList();
// })

// printList();

//------------------------------------------------------------------------------------------------------

//MED LOCAL STORAGE

console.log("Hej Love");

let newTodo = document.getElementById("newTodo");
let saveTodoBtn = document.getElementById("saveTodoBtn");
let todoList = document.getElementById("todoList");

if (localStorage.getItem("todos")) {
    console.log("LS existerar");
    // ANROPA FUNKTION FÖR INLOGGAD
} else {
    console.log("Skapar LS");
    let thingsToDo = ["Skriv ut lista", "Lägg till nytt", "Ta bort från listan", "Spara och gå hem"];
    //SPARA
    localStorage.setItem("todos", JSON.stringify(thingsToDo)) //1. vilken kaka vill vi spara? 2. vilket innehåll?
    // ANROPA FUNKTION FÖR EJ INLOGGAD
}

function printList() {

    todoList.innerHTML = ""; //Tömmer ul taggen på innehåll sen körs forloop

    //HÄMTA
    let thingsToDo = JSON.parse(localStorage.getItem("todos"));
    console.log("things from LS", thingsToDo);

    for (item of thingsToDo) {
        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        li.addEventListener("click", (event) => { //TA BORT FUNKTION

            //HÄMTA
            let thingsToDo = JSON.parse(localStorage.getItem("todos"));

            //ÄNDRA
            thingsToDo.splice(thingsToDo.indexOf(event.target.id), 1);

            //SPARA
            localStorage.setItem("todos", JSON.stringify(thingsToDo));

            console.log("event", event.target.id);
            console.log("Klick på item");

            thingsToDo.splice(thingsToDo.indexOf(event.target.id), 1) //indexOf letar upp indexsiffran för det vi klickar på. 1 är hur många steg vi ska ta bort
            console.log("efter splice", thingsToDo);
            printList();
        })

        todoList.appendChild(li);
    }
}

saveTodoBtn.addEventListener("click", () => {

    //HÄMTA
    let thingsToDo = JSON.parse(localStorage.getItem("todos"));

    //ÄNDRA
    thingsToDo.push(newTodo.value);

    //SPARA
    localStorage.setItem("todos", JSON.stringify(thingsToDo));

    console.log("list after click", thingsToDo);
    newTodo.value = ""; //tömmer input boxen efter man tryckt spara
    printList();
})

printList();
