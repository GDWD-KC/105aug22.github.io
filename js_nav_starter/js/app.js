const navButton = document.getElementById("nav-button");
const arrow = document.getElementById("arrow");
const dropdown = document.getElementById("dropdown");

function toggleDropdown(){
    dropdown.classList.toggle("reveal");
}

navButton.onclick = toggleDropdown;