var TelaInicial;
var tela = 1;
var tempo = 0;

function preload(){
  TelaInicial = loadImage('background.png'); // carrega uma imagem
  font = loadFont('mainfont.TTF'); // carrega uma fonte
  font2 = loadFont('textsfont.ttf'); //fonte para os textos de diálogo
  frameRate(30); //frequencia de quadros do jogo

}
function setup() {
  createCanvas(1080, 540); // determina o tamanho da tela do jogo

}

function draw() { 
  if (tela == 1){ //tela inicial
    image(TelaInicial, 10, 20); // a imagem carregada é colocada na primeira tela
    textFont(font, 55); //determina uma fonte 
    fill(206, 63, 59);
    text("Corrida Ambiental", 200, 200); // alert o texto com suas coordenadas
    textSize(30); //muda só o tamanho do texto
    text("Aperte ENTER", 350, 450); 
  }
  if (keyIsDown(ENTER) ) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
    tela = 2;  
  } 
  if (tela == 2){
    background(TelaInicial);
   // ellipse(500, 270, 800, 500);
    textFont(font2, 40);
    text("Olá, jogador. Eu sou o Jõao Verde, será que você pode me ajudar a ", 50, 200);
    text("aprender mais sobre meio ambiente?", 50, 250);

  }

}