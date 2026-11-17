function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");

    var imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;

    imgText.innerHTML = imgs.alt;

    expandImg.parentElement.style.display = "block";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function showAlbum(img) {
    const selectedAlbum = document.getElementById("selected-album");
    const albumTitle = document.getElementById("album-title");
    const albumYear = document.getElementById("album-year");
    const albumGenre = document.getElementById("album-genre");
    const albumTracks = document.getElementById("album-tracks");
    const spotifyLink = document.getElementById("spotify-link");
    const appleLink = document.getElementById("apple-link");
    const soundcloudLink = document.getElementById("soundcloud-link");

selectedAlbum.src = img.src;
albumTitle.textContent = img.alt;
albumYear.textContent = img.dataset.year;
albumGenre.textContent = "Genres: " + img.dataset.genre;
albumTracks.textContent = "Recommended tracks: " + img.dataset.track;

const linkElements = [spotifyLink, appleLink, soundcloudLink];
const linkUrls = [img.dataset.spotify, img.dataset.applemusic, img.dataset.soundcloud];

for (let i = 0; i < linkElements.length; i++) {
    if (linkUrls[i]) {
        linkElements[i].href = linkUrls[i];
        linkElements[i].hidden = false;
    } else {
        linkElements[i].href = "#";
        linkElements[i].hidden = true;
    }
}
}