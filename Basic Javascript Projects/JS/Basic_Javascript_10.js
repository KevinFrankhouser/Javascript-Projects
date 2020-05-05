/*How to make a loop in Javascript*/

function Call_Loop() {
    var text = "";
    var i = 0;

while (i < 10) {
    text += "<br>" + i;
    i++;
    }

document.getElementById("Loop").innerHTML = text;
}

/*This is how to perform a str.length function*/
function lengthFunction() {
    var nameLength = "How many characters long is this sentence?";
    var howManyCharacters = nameLength.length;
    document.getElementById("LengthOfSentence").innerHTML = howManyCharacters;
  }

  var Instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet", "Flute"];
  var Content = "";
  var Y;
  function for_Loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
          Content += Instruments[Y] + "<br>";
      }
      document.getElementById("List_of_Instruments").innerHTML = Content;
  }

  function cat_pics() {
      var Cat_Picture = [];
      Cat_Picture[0] = "sleeping";
      Cat_Picture[1] = "playing";
      Cat_Picture[2] = "eating";
      Cat_Picture[3] = "purring";
      document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
  }

  function constant_function() {
      const Video_Game = {type:"RPG", company:"Square Enix", console:"PS1"};
      Video_Game.console = "PS4";
      Video_Game.price = "$40";
      document.getElementById("Constant").innerHTML = "The cost of the " +
      Video_Game.type + ", even though being more expensive now, used to only be " + 
      Video_Game.price;
  }

  let X  = 10
  document.write(X);