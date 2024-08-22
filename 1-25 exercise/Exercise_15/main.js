var guest = ["zaira", "Zarmeen", "Huria"];
var unable = guest.splice(0, 1)[0];
console.log("".concat(unable), "will not be able to come");
guest.push("komal");
guest.forEach(function (guest) {
    console.log("".concat(guest, ", Will you join me for dinner?"));
});
