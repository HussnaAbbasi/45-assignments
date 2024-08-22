let guest : string[] = ["Zaira","Zarmeen","Huria"]
let unable = guest.splice(0,1)[0]
//console.log(`${unable}`,"will not be able to come")
guest.push("Komal")
//let message : string = "will you join me for dinner?"
//console.log(`${guest[0]}`,`${message}`)
//console.log(`${guest[1]}`,`${message}`)
//console.log(`${guest[2]}`,`${message}`)

console.log("Everybody I just found a bigger table!")
guest.unshift("Dua")
guest.splice(guest.length / 1,2, ("Bisma"))
guest.push("Arshia")
guest.forEach(guest => {
    console.log(`${guest}, Please join me for dinner`)
})


