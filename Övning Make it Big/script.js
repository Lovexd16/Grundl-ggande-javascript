var convertToggleBtn = document.getElementById("convertToggleBtn");
var input = document.getElementById("textInput");

let toggle = true;

convertToggleBtn.addEventListener("click", function() {

    toggle =! toggle;
    if (toggle) {
        input.value = input.value.toLowerCase();

    } else {
        input.value = input.value.toUpperCase(); //Tar värdet av det använaren skrev och gör om det till stora bokstäver
    }
    
});
