function concating() {
    var sent_1 = "Hey this is my ";
    var sent_2 = "first attempt at ";
    var sent_3 = "concatenating a sentence using JS.";
    var all_sentence = sent_1.concat(sent_2, sent_3);
    document.getElementById("Concatenate").innerHTML = all_sentence;
}


function how_To_Slice() {
	var FF7 = "FF7 is objectively the greatest game ever made!.";
    var a_Sentence = FF7.slice(22,41);
    document.getElementById("Slice").innerHTML = a_Sentence;
}

function make_Bigger() {
    var small_Text = "Now I'm upper case!";
    var big_Text = small_Text.toUpperCase();
    document.getElementById("large_Letters").innerHTML = big_Text;
  }

  function newSearchFunction() {
    var long_Sentence = "The main antagonist in the game Final Fantasy 7 goes by the name Sephiroth"; 
    var functionForSearching = long_Sentence.search("Sephiroth");
    document.getElementById("SearchMethod").innerHTML = functionForSearching;
  }

  function string_Method() {
      var X = 9999;
      document.getElementById("NumberToString").innerHTML = X.toString();
  }

  function precision_Method() {
      var Y = 9999.0147886;
      document.getElementById("Precision").innerHTML = Y.toPrecision(10);
  }

  function toFix_Method() {
    var num1 = 33.4597;
    var n = num1.toFixed(3);
    document.getElementById("FixIt").innerHTML = n;
  }

  function valueOf_Method() {
    var str = "This is another method I learned!";
    var result1 = str.valueOf();
    document.getElementById("ValueOfSomething").innerHTML = result1;
  }