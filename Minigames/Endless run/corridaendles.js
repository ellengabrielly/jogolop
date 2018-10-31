var xi, yi, yp;
var jump = false;
function preload(){
    personagem = loadImage('personagem.png')
}

function setup() {
	createCanvas(1080, 520);
    frameRate(30);
    background(0);
    
}

function draw() {
    image(personagem, 20, 470, [50], [50])


}