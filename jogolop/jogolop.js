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
  createCanvas(1080, 600); // determina o tamanho da tela do jogo

}

function draw() { 
    //Math.floor(Math.random() * 3)+1; código para o dado
  
  if (tela == 1){ //tela inicial
    image(TelaInicial, 10, 20); // a imagem carregada é colocada na primeira tela
    textFont(font, 60); //determina uma fonte 
    fill(206, 63, 59); //escolhe a cor do texto
    text("Corrida Ambiental", 150, 220); // alert o texto com suas coordenadas
    textSize(30); //muda só o tamanho do texto
    text("Aperte ENTER", 350, 400); 
  }
  if (keyIsDown(ENTER) ) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
    tela = 2;  
  } 
  if (tela == 2){
    background(TelaInicial);
   // ellipse(500, 270, 800, 500);
    textFont(font2, 40);
    text("Olá, jogador. Eu sou o Jõao Verde, será que você pode me ajudar a ", 50, 200);
    text("aprender mais sobre o meio ambiente?", 50, 250);
    text("Aperte ENTER para continuar...",720, 450 )
    if (keyIsDown(ENTER) ) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
      tela = 3;  
    } 
  if(tela == 3){
// tela explicando as regras e objetivos do jogo




  }
    
  }
}