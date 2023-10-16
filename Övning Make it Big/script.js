function turnToCapitalLetters() {
    var input = document.getElementById("textInput"); //Få input elementet med hjälp av ID

    var userInput = input.value; //Få värdet av inputen

    var capitalizedText = userInput.toUpperCase(); //Gör om input till stora bokstäver

    input.value = capitalizedText; //Byter ut inputen till samma text men med stora bokstäver
}