/*o jogo está sendo feito e atualizado no git: https://github.com/lucasboot/jogolop
 As etapas serão implementadas no arquivo do git futuramente, pois elas são um dos mini-games do jogo.
*/

var x, y, n;
var tirox = [],
    tiroy = [],
    tirosBS = [],
    tirosAV = 2,
    municao = 2;
var ye = [];
var xe = [];
var resolucao, resolucaojaula, pontuacao;
var aux;
var lion, parot, monkey, uni, personagem;
var naTela = true;
var i, j, k;
var tempoTiro = -1;
var vida;
var jaulax = [],
    jaulay = [];
var jaulaon = true;


var TelaInicial;
var tela = 1;
var tempo = 0;

function preload() {
    lion = loadImage('arara.png');
    parot = loadImage('tartaruga.png');
    uni = loadImage('mico.png');
    monkey = loadImage('baleia.png');
    personagem = loadImage('personagem.png');
    scenario = loadImage('scenario.jpg');

    TelaInicial = loadImage('background.png'); // carrega uma imagem
    font = loadFont('mainfont.TTF'); // carrega uma fonte
    font2 = loadFont('textsfont.ttf'); //fonte para os textos de diálogo
}

function setup() {
    createCanvas(1080, 500);
    frameRate(30);
    vida = 3;
    x = 20;
    y = 360;
    resolucao = 45;
    resolucaojaula = 55;
    pontuacao = 0;
    for (i = 0; i < tirosAV; i++) {
        tirox[i] = -50;
        tirosBS[i] = false;
        tiroy[i] = -100;
    }

    for (i = 0; i <= 3; i++) {
        if (i == 0) {
            ye[i] = random(20, 150);
            xe[i] = random(1000, 1200);
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }
        if (i == 1) {
            ye[i] = random(190, 260);
            xe[i] = parseInt(random(1080, 1200));
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }
        if (i == 2) {
            ye[i] = parseInt(random(300, 390));
            xe[i] = parseInt(random(1080, 1200));
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }
        if (i == 3) {
            ye[i] = random(400, 460);
            xe[i] = random(1080, 1200);
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }

    }
}

function draw() {
    //basics
    //colisao do tiro com o inimigo
    //tiro1
    if (dist(tirox[0], tiroy[0], xe[0], ye[0]) < (25)) {
        jaulax[0] = 100000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[0], tiroy[0], xe[1], ye[1]) < (25)) {
        jaulax[1] = 100000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[0], tiroy[0], xe[2], ye[2]) < (25)) {
        jaulax[2] = 100000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[0], tiroy[0], xe[3], ye[3]) < (25)) {
        jaulax[3] = 100000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }

    //tiro2
    if (dist(tirox[1], tiroy[1], xe[0], ye[0]) < (25)) {
        jaulax[0] = 100000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[1], tiroy[1], xe[1], ye[1]) < (25)) {
        jaulax[1] = 100000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[1], tiroy[1], xe[2], ye[2]) < (25)) {
        jaulax[2] = 100000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[1], tiroy[1], xe[3], ye[3]) < (25)) {
        jaulax[3] = 100000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }

    //colisao inimigo com o personagem
    if (dist(x, y, xe[0], ye[0]) < (30) && jaulax[0] < width) {
        vida = vida - 1;
        xe[0] = 1080 + parseInt(random(0, 1000));
    }
    if (dist(x, y, xe[1], ye[1]) < (30) && jaulax[1] < width) {
        vida = vida - 1;
        xe[1] = 1080 + parseInt(random(0, 1000));
    }
    if (dist(x, y, xe[2], ye[2]) < (30) && jaulax[2] < width) {
        vida = vida - 1;
        xe[2] = 1080 + parseInt(random(0, 1000));
    }
    if (dist(x, y, xe[3], ye[3]) < (30) && jaulax[3] < width) {
        vida = vida - 1;
        xe[3] = 1080 + parseInt(random(0, 1000));
    }

    //reaparecimento dos animais
    for (k = 0; k <= 3; k++) {
        if (xe[k] < 0) {
            xe[k] = 1080 + parseInt(random(0, 2000));
            ye[k] = parseInt(random(40, 420));
            jaulax[k] = xe[k];
            jaulay[k] = ye[k];
        }
    }
    if (tela == 1) { //tela inicial
        image(TelaInicial, 10, 20); // a imagem carregada é colocada na primeira tela
        textFont(font, 60); //determina uma fonte 
        fill(206, 63, 59); //escolhe a cor do texto
        text("Corrida Ambiental", 150, 220); // alert o texto com suas coordenadas
        textSize(30); //muda só o tamanho do texto
        text("Aperte ENTER", 350, 400);
        if (keyIsDown(ENTER)) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
            tela = 2;
        }

    }

    if (tela == 2) {
        background(TelaInicial);
        // ellipse(500, 270, 800, 500);
        textFont(font2, 40);
        text("Olá, jogador. Eu sou o Jõao Verde, será que você pode me ajudar a ", 50, 200);
        text("aprender mais sobre os animais brasileiros em grande risco de extinção?", 50, 250);
        text("Aperte a seta para direita para continuar...", 600, 450);
        if (keyIsDown(RIGHT_ARROW)) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
            tela = 3;
        }
    }
    if (tela == 3) {
        background(TelaInicial);
        // ellipse(500, 270, 800, 500);
        textFont(font2, 40);
        text("As regras são simples: ", 520, 100);
        text("A cada nível, precisaremos retirar uma quantidade de animais de certa espécie da jaula.", 50, 250);
        text("Aperte ENTER para continuar...", 720, 450);
        if (keyIsDown(ENTER)) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
            tela = 4;

        }
    }
    if (tela == 4) {
        background(scenario);
        fill(0, 0, 255);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Munição: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }

        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 5;
            jaulax[j] = jaulax[j] - 5;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                ellipse(tirox[i], tiroy[i] + 35, 15, 15);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(lion, xe[i], ye[i], [resolucao], [resolucao]);
        }
        // }
        /*
        if (i == 1) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], 40, 40);
            image(monkey, xe[i], ye[i], [resolucao], [resolucao]);

        }
        if (i == 2) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], 40, 40);
            image(parot, xe[i], ye[i], [resolucao], [resolucao]);

        }
        if (i == 3) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], 40, 40);
            image(uni, xe[i], ye[i], [resolucao], [resolucao]);

        }
        */
        if (pontuacao > 100) {
            tela = 5;
        }
    }
    if (tela == 5) {
        background(scenario);
        fill(0, 0, 255);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 8;
            jaulax[j] = jaulax[j] - 8;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                ellipse(tirox[i], tiroy[i] + 35, 15, 15);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(monkey, xe[i], ye[i], [resolucao], [resolucao]);
        }
        //mudando dificuldade e animal
        if (pontuacao > 200) {
            tela = 6;
        }
    }
    if (tela == 6) {
        background(scenario);
        fill(0, 0, 255);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 11;
            jaulax[j] = jaulax[j] - 11;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                ellipse(tirox[i], tiroy[i] + 35, 15, 15);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(parot, xe[i], ye[i], [resolucao], [resolucao]);
        }
        //mudando dificuldade e animal
        if (pontuacao > 300) {
            tela = 7;
        }
    }
    if (tela == 7) {
        background(scenario);
        fill(0, 0, 255);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 13;
            jaulax[j] = jaulax[j] - 13;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                ellipse(tirox[i], tiroy[i] + 35, 15, 15);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(uni, xe[i], ye[i], [resolucao], [resolucao]);
        }
        //mudando dificuldade e animal

        if (pontuacao > 600) {
            tela = 8;
        }

    }
    if (tela == 8) {
        background(scenario);
        fill(0, 0, 255);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 18;
            jaulax[j] = jaulax[j] - 18;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                ellipse(tirox[i], tiroy[i] + 35, 15, 15);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            if (i == 0) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(lion, xe[i], ye[i], [resolucao], [resolucao]);
            }

            if (i == 1) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i],resolucaojaula, resolucaojaula);
                image(monkey, xe[i], ye[i], [resolucao], [resolucao]);

            }
            if (i == 2) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(parot, xe[i], ye[i], [resolucao], [resolucao]);

            }
            if (i == 3) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(uni, xe[i], ye[i], [resolucao], [resolucao]);

            }
        }
        //mudando dificuldade e animal
        /*
        if (pontuacao > 600) {
            tela = 8;
        }
        */
    }
} //draw

/*

- Música
- Imagem da chave
- Tela de win e lose
- Objeto pra ganhar vida extra
- Telas educativas sobre os animais
- Telas diferentes para os animais

*/