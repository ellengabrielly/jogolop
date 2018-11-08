/*o jogo está sendo feito e atualizado no git: https://github.com/lucasboot/jogolop
 As etapas serão implementadas no arquivo do git futuramente, pois elas são um dos mini-games do jogo.
*/

var x, y, n;
var tirox = [], tiroy = [], tirosBS = [], tirosAV = 2, municao = 2;
var ye = [];
var xe = [];
var resolucao;
var aux;
var lion, parot, monkey, uni, personagem;
var naTela = true;
var i, j, k;
var tempoTiro = -1;
var vida;

function preload(){
    lion = loadImage('leao.png');
    parot = loadImage('parot.png');
    uni = loadImage('rand.png');
    monkey = loadImage('macaco.png');
    personagem = loadImage('personagem.png')
}

function setup() {
	createCanvas(1080, 520);
    frameRate(30);
    vida=3;
    x = 20;
    y = 360;
    resolucao = 50;
    for ( i = 0; i < tirosAV; i++) {
		tirox[i] = -50;
		tirosBS[i] = false;  
		tiroy [i] = -100; 
    }

    for (i = 0; i <= 3; i++){
        if (i == 0){
            ye[i] = random(20, 100);
            xe[i] = random(1000,1200);
        }
        if ( i == 1){
            ye[i] = random(150, 350);
            xe[i] = random(1080,1200);
        }
        if(i == 2){
            ye[i] = random(400, 435);
            xe[i] = random(1080,1200);
        }
        if (i == 3){
            ye[i] = 455;
            xe[i] = random(1080,1200);
        }
    
    }
}

function draw() {
    background('#fae');
    fill(0, 0, 255);
    image(personagem, x, y, [70], [70]);
    textSize(20);
    text('Vidas: '+vida, 20, 20);
    text('Munição: ' + municao, 20, 40)
    if (keyIsDown(UP_ARROW)){
        if(y >= 20){
            y = y - 10;
        }
    }
    if (keyIsDown(DOWN_ARROW)){ 
        if(y < 440){
            y = y +10;
        }
    }
    //tiro
    if (keyIsDown(32) && tempoTiro < 0){
        tempoTiro = 5;
        for ( i = 0; i < tirosAV; i++) {
            if ( tirosBS[i] ==  false ) {
              tirosBS[i] = true;
              municao -=1;
              tirox[i] = 100;
              tiroy[i] = y;
              break; 
                
            } 
        }
    }
    tempoTiro--; 

//colisao do tiro com o inimigo
    //tiro1
    if (dist(tirox[0], tiroy[0], xe[0], ye[0]) < (25)) {
        xe[0] = 1080 + random(100, 800);
        ye[0] = random (30, 480);  
        tirox[0] = 1180;	  
    }
    if (dist(tirox[0], tiroy[0], xe[1], ye[1]) < (25)) {
        xe[1] = 1080 + random(100, 800);
        ye[1] = random (30, 480);  
        tirox[0] = 1180;	  
    }
    if (dist(tirox[0], tiroy[0], xe[2], ye[2]) < (25)) {
        xe[2] = 1080 + random(100, 800);
        ye[2] = random (30, 480);  
        tirox[0] = 1180;	  
    }
    if (dist(tirox[0], tiroy[0], xe[3], ye[3]) < (25)) {
        xe[3] = 1080 + random(100, 800);
        ye[3] = random (30, 480);  
        tirox[0] = 1180;	  
    }

    //tiro2
    if (dist(tirox[1], tiroy[1], xe[0], ye[0]) < (25)) {
        xe[0] = 1080 + random(100, 800);
        ye[0] = random (30, 480);  
        tirox[1] = 1180;	  
    }
    if (dist(tirox[1], tiroy[1], xe[1], ye[1]) < (25)) {
        xe[1] = 1080 + random(100, 800);
        ye[1] = random (30, 480);  
        tirox[1] = 1180;	  
    }
    if (dist(tirox[1], tiroy[1], xe[2], ye[2]) < (25)) {
        xe[2] = 1080 + random(100, 800);
        ye[2] = random (30, 480);  
        tirox[1] = 1180;	  
    }
    if (dist(tirox[1], tiroy[1], xe[3], ye[3]) < (25)) {
        xe[3] = 1080 + random(100, 800);
        ye[3] = random (30, 480);  
        tirox[1] = 1180;	  
    }

//colisao inimigo com o personagem
    if (dist(x, y, xe[0], ye[0]) < (30)) {
        vida = vida - 1;
        xe[0] = 1080 + parseInt(random(0,1000));
    }
    if (dist(x, y, xe[1], ye[1]) < (30)) {
        vida = vida - 1;
        xe[1] = 1080 + parseInt(random(0,1000));
    }
    if (dist(x, y, xe[2], ye[2]) < (30)) {
        vida = vida - 1;
        xe[2] = 1080 + parseInt(random(0,1000));
    }
    if (dist(x, y, xe[3], ye[3]) < (30)) {
        vida = vida - 1;
        xe[3] = 1080 + parseInt(random(0,1000));
    }
    //checar tiros
    for ( i = 0; i < tirosAV; i++) {
        if ( tirosBS[i] ) {
          ellipse(tirox[i], tiroy[i] + 35, 15, 15 );		    
          tirox[i] += 20; 
          if (tirox[i] > width) {
              tirosBS[i] = false; 
              municao+=1;
          }
        } 
       
    }

    //movimentação das figuras
    for (j = 0; j<= 3; j++){
        xe[j] = xe[j] - 5;
    }


    //setando a posição dos animais
    for (i = 0; i<= 3; i++){
        if(i == 0){
            image(lion, xe[i], ye[i], [resolucao], [resolucao]);
        }
        if (i == 1){
            image(monkey, xe[i], ye[i], [resolucao], [resolucao]);
        }
        if(i == 2){
            image(parot, xe[i], ye[i], [resolucao], [resolucao]);
        }
        if (i == 3){
            image(uni, xe[i], ye[i], [resolucao], [resolucao]);
        }
    }
    //reaparecimento dos animais
    for (k = 0; k<=3; k++){
        if (xe[k] < 0){
            xe[k] = 1080 + parseInt(random(0,1000));
            ye[k] = random(40, 430);
        }
    }
} //draw 

