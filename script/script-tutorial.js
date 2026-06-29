/* áudio */
const audio = document.getElementById("audio");

/* texto estilo Luffy */
const texto =
"Yo! Eu sou Monkey D. Luffy, o futuro Rei dos Piratas! "
+ "Escuta aqui, marinheiro! Vou te explicar como funciona a Batalha Naval! "
+ "O jogo acontece em uma matriz 10 por 10, cheia de posições escondidas no oceano! "
+ "Existem 30 barcos espalhados pelo mapa, então você vai precisar de coragem e estratégia pra encontrar todos eles! "
+ "Em cada rodada você escolhe uma coordenada para atacar. "
+ "Se acertar um barco... BOOM! Você causa dano no inimigo! "
+ "Mas cuidado! Às vezes você só encontra água. "
+ "E tem mais! O jogo possui 3 dificuldades diferentes: fácil, médio e difícil! "
+ "Quanto maior a dificuldade, mais complicado fica! "
+ "Seu objetivo é afundar todos os barcos antes que suas tentativas acabem! "
+ "Então prepare-se pra aventura e mostre que você tem espírito de pirata!";

/* velocidade da digitação */
const velocidade = 35;

/* campo do texto */
const campoFala = document.getElementById("fala");

/* índice */
let indice = 0;

/* controle do timeout */
let timeoutAtual;

/* escreve letra por letra */
function escreverTexto(){

    if(indice < texto.length){

        campoFala.innerHTML += texto.charAt(indice);

        indice++;

        timeoutAtual = setTimeout(escreverTexto, velocidade);
    }
}

/* inicia a fala */
function iniciar(){

    clearTimeout(timeoutAtual);

    campoFala.innerHTML = "";

    indice = 0;

    escreverTexto();
}

/* botão Ler Novamente */
function lerNovamente(){

    iniciar();

}

/* botão voltar */
function voltarPagina(){

    window.history.back();

}

/* tocar música */
function tocarMusica(){

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

}

/* inicia automaticamente */
iniciar();
