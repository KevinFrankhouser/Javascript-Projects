function my_Dictionary() {
    var vehicle = {
        Make: "Honda",
        Model: "Accord",
        Year: 1996,
        Color: "Green",
        Sound: "Vroom vroom",
        Type: "Automatic",
    };
    delete vehicle.Make;
document.getElementById("Dictionary").innerHTML = vehicle.Make;
}