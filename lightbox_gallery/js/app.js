//Lightbox variables
let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

// Write a function to open the lightbox aka to make it appear because it already exists
function openLightbox() {
    lightboxContainer.classList.add('display');
    lightbox.src = this.src;
}

// Image Variable
// let coffeeImage = document.getElementById("coffeeImage");
// let coffeeImage2 = document.getElementById("coffeeImage2");
// let coffeeImage3 = document.getElementById("coffeeImage3");
// let coffeeImage4 = document.getElementById("coffeeImage4");

// Image Group
let galleryImages = document.getElementsByClassName("galleryImage");

//Create a loop to iterate through all images that run openLightbox when clicked
for(let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

// Image Click Event
// coffeeImage.onclick = openLightbox;
// coffeeImage2.onclick = openLightbox;
// coffeeImage3.onclick = openLightbox;
// coffeeImage4.onclick = openLightbox;

// Function to Close Lightbox
function closeLightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

// Close Lightbox Events
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;





