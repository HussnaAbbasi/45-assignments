let guests : string[] = ["dua","zarmeen","huria","komal","bisma","arshia"]
console.log("I am extremely sorry to inform you that the bigger table won't arrive on time. I will only be able to invite 2 people.")

let guest2 : string[] = ["huria","komal","bisma","arshia"]
guest2.forEach(guest2=>{
    console.log(`${guest2}, Sorry I cannot invite you to the dinner.`)
})

guests.pop()
guests.pop()
guests.pop()
guests.pop()

guests.forEach(guests => {
    console.log(`dear ${guests} you are still invited for the dinner.`)
})

    guests.pop()
    guests.pop()

console.log(guests)