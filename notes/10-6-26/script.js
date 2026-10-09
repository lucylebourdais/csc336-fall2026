let rootDiv = document.querySelector("#root");

let genreData = ["unknown","rock","jazz","classical","hip hop"];

let albums = [
    {
        artist: "Metallica",
        album: "Black Album",
        genre: "unknown"
    },
    {
        artist: "The Avalanches",
        album: "Since I Left You",
        genre: "unknown"
    },
    {
        artist: "Led Zeppelin",
        album: "IV",
        genre: "unknown"
    },
    {
        artist: "Stevie Wonder",
        album: "Innervisions",
        genre: "unknown"
    }
];

function renderAlbum(album){
    let albumDiv = document.createElement("div");
    albumDiv.classList.add("album");
    rootDiv.append(albumDiv);
    let artistH1 = document.createElement("h1");
    artistH1.innerHTML = album.artist;
    albumDiv.append(artistH1);
    let albumH2 = document.createElement("h2");
    albumH2.innerHTML = album.album;
    albumDiv.append(albumH2);

    let selectElement = document.createElement("select");
    albumDiv.append(selectElement);

    selectElement.addEventListener("change", (e)=> {
        console.log("Changed " + album.album + " from " + album.genre + " to " + selectElement.value);
        album.genre = selectElement.value;
    });

    for (let genre of genreData){
        let optionElement = document.createElement("option");
        optionElement.value = genre;
        optionElement.innerHTML = genre;
        selectElement.append(optionElement);
    }
}

for (let album of albums){
    renderAlbum(album);
}


