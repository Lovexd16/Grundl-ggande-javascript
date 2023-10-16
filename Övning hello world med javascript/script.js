document.addEventListener("DOMContentLoaded", function() { //Laddar DOM innan manipulation
    var titleMyName = document.createElement("h1"); //Skapar h1 element

    var description = document.createElement("p1"); //Skapar p1 element

    var listItems = ["Laga mat", "Köra bil", "League"] //Skapar items till lista
    var list = document.createElement("ul"); //Skapar ul element

    for (var i = 0; i < listItems.length; i++) { //For loop för att loopa listan 
        var li = document.createElement("li"); //Skapar li element
        li.textContent = listItems[i];
        list.appendChild(li);
    }


    titleMyName.textContent = "Love Rumar Karlquist"; //Text innehåll av h1

    description.textContent = "Hej! Jag är 21 år gammal och pluggar till Javautvecklare. På fritiden spenderar jag mycket tid på gymmet, lagar mat och umgås med familjen. AIK är en stor passion i mitt liv, och jag kollar alltid när de spelar!";

    document.body.appendChild(titleMyName);

    document.body.appendChild(description);

    document.body.appendChild(list); //Lägger till elementet till body
});


console.log("Hello World");
