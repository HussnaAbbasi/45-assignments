function make_album(artist:string, title:string, tracks?:number){
    let album : {atrist:String, title:String, tracks?: number} ={
        atrist : artist,
        title: title
    }
    if (tracks !== undefined) {
        album.tracks = tracks
    }
    return album
}
let album1 = make_album("Atif Aslam", "Jal Pari")
let album2 = make_album("Ali Zafar", "jhoom")
let album3 = make_album("Hassan Raheem", "joona", 5)

console.log(album1)
console.log(album2)
console.log(album3)