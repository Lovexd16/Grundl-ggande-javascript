function turnToCapitalLetters() {
    var input = document.getElementById("textInput"); //Få input elementet med hjälp av ID och gör till variabeln input

    var userInput = input.value; //Få vad användaren skrev och gör till variabeln userInput

    var capitalizedText = userInput.toUpperCase(); //Gör om userInput till stora bokstäver och sparas i ny variabel

    input.value = capitalizedText; //Byter ut inputen till samma text men med stora bokstäver
}