var mainPhoto = document.getElementById("mainPhoto");
var fadedPhoto1 = document.getElementById("fadedPhoto1")
var fadedPhoto2 = document.getElementById("fadedPhoto2")

var backButton = document.getElementById("backButton");
var forwardButton = document.getElementById("forwardButton");

let photos = ["assets/photos/loris1.jpg", "assets/photos/loris2.jpg", "assets/photos/loris3_new.jpg", "assets/photos/loris4_new.jpg"];
let currentPhoto = 0;

forwardButton.addEventListener("click", function () {
    if (currentPhoto == photos.length - 1) {
        currentPhoto = 0;
    } else {
        currentPhoto++;
    }
    mainPhoto.src = photos[currentPhoto];
    let relatedPhotos = currentPhoto;
    fadedPhoto1.src = photos[relatedPhotos==0? photos.length-1 : relatedPhotos-1];
    fadedPhoto2.src = photos[relatedPhotos==photos.length-1? 0 : relatedPhotos+1];
    console.log(currentPhoto);
})

backButton.addEventListener("click", function () {
    if (currentPhoto == 0) {
        currentPhoto = photos.length - 1;
    } else {
        currentPhoto--;
    }
    mainPhoto.src = photos[currentPhoto];
    let relatedPhotos = currentPhoto;
    fadedPhoto1.src = photos[relatedPhotos==0? photos.length-1 : relatedPhotos-1];
    fadedPhoto2.src = photos[relatedPhotos==photos.length-1? 0 : relatedPhotos+1];
    // fadedPhoto1.src = photos[currentPhoto-1 || photos.length-1];
    // fadedPhoto2.src = photos[currentPhoto=photos.length-1? 0 : currentPhoto+1];
    // console.log(currentPhoto);
    // currentPhoto = currentPhoto + 1;
})