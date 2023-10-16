const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function() {
    console.log("Klick på vår knapp!");
});

const myZoo = document.getElementById("myZoo");

myZoo.addEventListener("click", function(evt) {

    console.log(evt.target.id);
})

const formBtn = document.getElementById("saveForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");

formBtn.addEventListener("click", function() {
    console.log("Du heter " + fName.value + " " + lName.value + ".");
});
