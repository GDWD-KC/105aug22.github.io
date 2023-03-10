// Set initial image by saving it in a variable
let starter = document.getElementById("starter");

// Save rest of images in array
let heartArray = ["assets/Asset20.png", "assets/Asset21.png", "assets/Asset22.png", "assets/Asset23.png", "assets/Asset24.png", "assets/Asset25.png", "assets/Asset26.png", "assets/Asset27.png"];

// Set a counter variable
let count = 0;

// Declare animation function
function animate() {
    // Set starter image
    starter.src = heartArray[count];
    // Increment through array
    count++;
    // Increase count through full length of array
    if(heartArray.length == count){
        count = 0;
    }
}

setInterval(animate, 100)