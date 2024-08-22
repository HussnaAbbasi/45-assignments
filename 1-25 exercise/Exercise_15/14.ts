let guest : string[] = ["Zaira","Zarmeen","Huria"]
let unable = guest.splice(0,1)[0]
console.log(`${unable}`,"Will not be able to come.")
guest.push("komal")
guest.forEach(guest => {
    console.log(`${guest}, Will you join me for dinner?`)
})