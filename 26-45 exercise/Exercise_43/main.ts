let magicians: string[] = ["jadugar1", "jadugar2", "jadugar3"];
function make_great(magicians: string[]): string[] {
  let great_Magicians = [];
  magicians.forEach((magician) => {
    great_Magicians.push(`${magician} the Great`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
let greatMagicians = make_great(magicians.slice()); 
console.log("Original magicians:");
show_magicians(magicians); 
console.log("Great magicians:");
show_magicians(greatMagicians);

              