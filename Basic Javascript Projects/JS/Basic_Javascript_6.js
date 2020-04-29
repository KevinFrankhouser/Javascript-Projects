/*Write a function using HTML and JavaScript that utilizes a 
ternary operation using input from the browser.

Write a constructor function that uses the “new” and 
“this” keywords.

Create a function to display the results of the constructor 
function within an HTML element.

Write a nested function*/

let name = prompt("What color is the sky?");
let points = name === "Blue" ? "Woohoo! 10 points for the first question!":"0 points for the first question. Better luck next time! ";
document.write(points);

document.write("<br>")

let numOfContinents = prompt("How many continents are there?");
let morepoints = numOfContinents === "7" ? "That's right! 10 pts for question number 2!":"Nope! 0 points on the second question this time.";
document.write(morepoints);

document.write("<br>")

function Hero(name, age, weaponType, jobClass) {
    this.name = name;
    this.age = age;
    this.weaponType = weaponType;
    this.jobClass = jobClass;
}
var hero1 = new Hero("Ronin", "26", "2 Handed Sword", "Vanquisher");
var hero2 = new Hero("Cristina", "21", "1 or 2 Handed Spears", "Legionnaire");
var hero3 = new Hero("Trent", "23", "Daggers", "Cutpurse");

document.write(hero1.name + ", " + hero1.age + ", " + hero1.weaponType + ", " + hero1.jobClass);
document.write("<br>")
document.write(hero2.name + ", " + hero2.age + ", " + hero2.weaponType + ", " + hero2.jobClass);
document.write("<br>")
document.write(hero3.name + ", " + hero3.age + ", " + hero3.weaponType + ", " + hero3.jobClass);
document.write("<br>")


var name1 = "Ronin";

function change(t) {
    return "~~~" + t + "~~~";
}

document.write(change(name1));
document.write("<br>")
document.write(name1);
document.write("<br>")
document.write(change("Ronin with the same symbols"));
document.write("<br>")

function changeMore(t) {
    var a = change(t);
    return "<<<" + a + ">>>";
}

document.write(changeMore("Ronin with even more symbols!"));
