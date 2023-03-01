function plusFive(num) {
    return num + 5; //Fill in the blank
}

// Increase Winning Number by 5
function increaseLargerNumber(x, y) {
    // Save variable for result
    let larger;
    if(x >= y) {
        larger = x;
    } else {
        larger = y;
    }// Return larger number plus five
    return plusFive(larger);
}

console.log(increaseLargerNumber(35, 34));









