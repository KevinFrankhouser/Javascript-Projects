function Game_Function() {
    var Game_Output;
    var Games = document.getElementById("Game_Input").value;
    var Game_String = " is a great game!!";
    switch(Games) {
        case "Zelda: Ocarina of Time":
            Game_Output = "Zelda: Ocarina of Time" + Game_String;
        break;
        case "Final Fantasy VII":
            Game_Output = "Final Fantasy VII" + Game_String;
        break;
        case "Super Mario Bros.":
            Game_Output = "Super Mario Bros." + Game_String;
        break;
        case "Metroid":
            Game_Output = "Metroid" + Game_String;
        break;
        case "Zelda: Majora's Mask":
            Game_Output = "Zelda: Majora's Mask" + Game_String;
        break;
        case "Super Smash Bros.":
            Game_Output = "Super Smash Bros." + Game_String;
        break;
        case "Halo 3":
            Game_Output = "Halo 3" + Game_String;
        break;
        default:
            Game_Output = "Please enter a game exactly as written in the list above.";

    }
    document.getElementById("Output").innerHTML = Game_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);