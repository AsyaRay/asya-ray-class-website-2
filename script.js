function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");

    // Get the image text
    var imgText = document.getElementById("imgtext");

    // Use the clicked image as the expanded image
    expandImg.src = imgs.src;

    // Display the image's alt text
    imgText.innerHTML = imgs.alt;

    // Show the expanded image container
    expandImg.parentElement.style.display = "block";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
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

    selectedAlbum.src = img.src;
    albumTitle.textContent = img.alt;
    albumYear.textContent = img.dataset.year;
    albumGenre.textContent = "Genres: " + img.dataset.genre;
    albumTracks.textContent = "Recommended tracks: " + img.dataset.track;
}