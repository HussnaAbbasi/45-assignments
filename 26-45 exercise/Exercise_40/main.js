function make_album(artist, title, tracks) {
    var album = {
        atrist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Atif Aslam", "Jal Pari");
var album2 = make_album("Ali Zafar", "jhoom");
var album3 = make_album("Hassan Raheem", "joona", 5);
console.log(album1);
console.log(album2);
console.log(album3);
