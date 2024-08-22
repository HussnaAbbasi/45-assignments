var guest = ["zaira", "Zarmeen", "Huria"];
var unable = guest.splice(0, 1)[0];
//console.log(`${unable}`,"will not be able to come")
guest.push("komal");
//let message : string = "will you join me for dinner?"
//console.log(`${guest[0]}`,`${message}`)
//console.log(`${guest[1]}`,`${message}`)
//console.log(`${guest[2]}`,`${message}`)
console.log("everybody I just found a bigger table!");
guest.unshift("dua");
guest.splice(guest.length / 1, 2, ("bisma"));
guest.push("arshia");
guest.forEach(function (guest) {
    console.log("".concat(guest, ", Please join me for dinner"));
});
