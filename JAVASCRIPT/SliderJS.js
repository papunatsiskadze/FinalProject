var slides = document.querySelectorAll('.slide');
var bubbles = document.querySelectorAll('.bubble');
let currentSlide = 1;

// Manual slide code

var manualSlide = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

    bubbles.forEach((bubble) => {
        bubble.classList.remove('active');
    });
});
    slides[manual].classList.add('active');
    bubbles[manual].classList.add('active');
}
bubbles.forEach((bubble, i) => {
    bubble.addEventListener("click", () => {
        manualSlide(i);
        currentSlide = i;
    });
});


//  Auto Slider
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    i = 1;
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            });

            slides[i].classList.add('active');
            bubbles[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}
repeat();