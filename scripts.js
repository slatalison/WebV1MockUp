//cup frame
let w = window.innerWidth * 0.95;
let h = window.innerHeight * 0.8;
let cupWidth = 90;
let cupHeight = 180;
// let cupInterval = 15;


//bubbles
let gravity;
let drops = [];
// let gravitySlider;
// let sizeSlider;
// let tensionSlider;
// let frictionSlider;

let data;



for (i = 0; i < 7; i++) {
    $('#cupCanvas').append('<div class = cups id="cup' + i + '" />');
}
$('.cups')
    .width(cupWidth)

for (i = 0; i < 7; i++) {
    $('#cup' + i).prepend('<img class="theImg" src="day' + i + '.png" />')

}