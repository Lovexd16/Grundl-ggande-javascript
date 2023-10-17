var convertToggleBtn = document.getElementById("convertToggleBtn");
var input = document.getElementById("textInput");

let toggle = true;

convertToggleBtn.addEventListener("click", function() {

    toggle =! toggle; //Byter mellan true och false för att byta mellan lower och upper case
    if (toggle) {
        input.value = input.value.toLowerCase(); //gör om till lower case

    } else {
        input.value = input.value.toUpperCase(); //gör om till upper case
    }
    
});
