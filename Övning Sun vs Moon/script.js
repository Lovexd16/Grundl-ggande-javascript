const img = document.getElementById("images"); //Hämtar HTML element med ID och gör till variabel img

let toggle = true; //Används för att se om bilden som visas är solen eller månen

img.addEventListener("click", function() { //Lyssnar efter klick

    toggle =! toggle; //Ändrar värdet på toggle fö att byta mellan bilderna
    if (toggle) {
        img.src = "sun.jpg"; //Om toggle är true blir det sol

    } else {
        img.src ="moon.jpg"; //Om toggle är false blir det måne
    }

});