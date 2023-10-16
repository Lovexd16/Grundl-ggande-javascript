console.log("Hej från JS!");

const header = document.getElementById("header");
const headerLogo = document.getElementById("logo");

const zooList = document.querySelectorAll(".zooList li");
const zoo = document.querySelector(".zooList")

const newAnimal = document.getElementById("newAnimal");
const newAnimalBtn = document.getElementById("newAnimalBtn");

console.log(zooList[1].textContent);

zoo.insertAdjacentHTML("afterend", "<li>Ödla</li>");

header.style.backgroundColor = "grey";
headerLogo.innerHTML = "Hej världen!";

newAnimalBtn.addEventListener("click", function() {
    console.log(newAnimal.value);
    zoo.insertAdjacentHTML("beforeend", "<li>" + newAnimal.value + "</li>");
});

header.addEventListener("click", function() {
    header.classList.toggle("border");
})

