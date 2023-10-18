console.log("Hej Love");

let newTodo = document.getElementById("newTodo");
let saveTodoBtn = document.getElementById("saveTodoBtn");
let todoList = document.getElementById("todoList");

let thingsToDo = ["Skriv ut lista", "Lägg till nytt", "Ta bort från listan", "Spara och gå hem"];

function printList() {

    todoList.innerHTML = ""; //Tömmer ul taggen på innehåll sen körs forloop

    for (item of thingsToDo) {
        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        li.addEventListener("click", (event) => {
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
    thingsToDo.push(newTodo.value);
    console.log("list after click", thingsToDo);
    newTodo.value = ""; //tömmer input boxen efter man tryckt spara
    printList();
})

printList();
