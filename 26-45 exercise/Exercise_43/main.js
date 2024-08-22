var magicians = ["jadugar1", "jadugar2", "jadugar3"];
function make_great(magicians) {
    var great_Magicians = [];
    magicians.forEach(function (magician) {
        great_Magicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);
