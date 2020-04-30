function Age_Check() {
    Age = document.getElementById("Age").value;
    if (Age >= 13 ) {
        Vote = "You are old enough to play this game!";
    }
    else {
        Vote = "You are not quite old enough to play this game.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote
}

var myName = "Kevin";
function nameOfWife() {
var wifeName = "Amanda";
}

document.write(myName);
document.write(wifeName);

/*Time_Function outlined in previous assignment*/

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}