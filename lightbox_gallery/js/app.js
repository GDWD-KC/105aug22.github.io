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
let coffeeImage = document.getElementById("coffeeImage");

// Image Click Event
coffeeImage.onclick = openLightbox;

// Function to Close Lightbox
function closeLightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

// Close Lightbox Events
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;





