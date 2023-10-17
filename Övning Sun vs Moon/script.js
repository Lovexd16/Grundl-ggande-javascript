const img = document.getElementById("images");

let toggle = true;

img.addEventListener("click", function() {

    toggle =!toggle;
    if (toggle) {
        img.src = "sun.jpg";

    } else {
        img.src ="moon.jpg";
    }

});