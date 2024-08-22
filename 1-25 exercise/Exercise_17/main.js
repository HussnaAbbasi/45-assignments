var guests = ["dua", "zarmeen", "huria", "komal", "bisma", "arshia"];
console.log("I am extremely sorry to inform you that the bigger table won't arrive on time. I will only be able to invite 2 people.");
var guest2 = ["huria", "komal", "bisma", "arshia"];
guest2.forEach(function (guest2) {
    console.log("".concat(guest2, ", Sorry I cannot invite you to the dinner."));
});
guests.pop();
guests.pop();
guests.pop();
guests.pop();
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, " you are still invited for the dinner."));
});
guests.pop();
guests.pop();
console.log(guests);
