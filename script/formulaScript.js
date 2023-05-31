// Background Music
var backgroundMusic = document.getElementById("backgroundMusic");
window.addEventListener("click", function() {
    backgroundMusic.play();
});
// End

// Changing of background
var images = [
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png"
];
var currentIndex = 0;
var backgroundSlider = document.querySelector(".background-slider");
function changeBackground() {
    backgroundSlider.style.backgroundImage = "url(" + images[currentIndex] + ")";
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackground, 2000);
// End