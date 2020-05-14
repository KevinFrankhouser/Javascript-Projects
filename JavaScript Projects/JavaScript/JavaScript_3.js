function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the main protagonist in " + character.innerHTML + " the video game!");
}