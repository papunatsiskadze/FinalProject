var slides = document.querySelectorAll('.slide');
var bubbles = document.querySelectorAll('.bubble');
let currentSlide = 1;

// Manual slide code

var manualSlide = function(manual){
    slides[manual].classList.add('active');
    bubbles[manual].classList.add('active');
}
bubbles.forEach((bubble, i) => {
    bubble.addEventListener("click", () => {
        manualSlide(i);
        currentSlide = i;
    })
})