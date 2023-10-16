document.addEventListener("DOMContentLoaded", function() { //Laddar DOM innan manipulation
    var h1Element = document.createElement("h1"); //Skapar h1 element

    var p1Element = document.createElement("p1"); //Skapar p1 element

    var items = ["Laga mat", "Köra bil", "League"] //Skapar items till lista
    var ul = document.createElement("ul"); //Skapar ul element

    for (var i = 0; i < items.length; i++) { //For loop för att loopa listan 
        var li = document.createElement("li"); //Skapar li element
        li.textContent = items[i];
        ul.appendChild(li);
    }


    h1Element.textContent = "Love Rumar Karlquist"; //Text innehåll av h1

    p1Element.textContent = "Hej! Jag är 21 år gammal och pluggar till Javautvecklare. På fritiden spenderar jag mycket tid på gymmet, lagar mat och umgås med familjen. AIK är en stor passion i mitt liv, och jag kollar alltid när de spelar!";

    document.body.appendChild(h1Element);

    document.body.appendChild(p1Element);

    document.body.appendChild(ul); //Lägger till elementet till body
});


console.log("Hello World");
