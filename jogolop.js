function setup() {
  createCanvas(1080, 540); // determina o tamanho da tela do jogo
  // @pjs 

/* @pjs preload="amazonia.jpg"; */
  PImage f;
f = loadImage("amazonia.jpg");
background(f);
//  determina a cor de fundo do jogo
}

function draw() {
noFill();
stroke(0, 0, 255);
ellipse(200, 100, 120, 60);
noStroke();
fill(255, 0, 0);
rect(200, 200, 80, 80);
stroke(60, 150, 60);
strokeWeight(3);
line(100, 300, 400, 400);
}