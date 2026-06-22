const texto =
"Olá, aventureiro! Eu sou Peter Pan! "
+ "Bem-vindo à Terra do Nunca e ao jogo Batalha Naval. "
+ "Neste jogo, você terá um tabuleiro aonde tem barco, bombas e água. "
+ "Em cada rodada você escolhe uma coordenada. "
+ "Pode encontrar um barco, uma bomba ou apenas água. "
+ "O objetivo é localizar e afundar todos os navios. "
+ "Use estratégia, atenção e muita coragem. "
+ "Boa sorte marinheiro(a)!";

const velocidade = 40;
const campoFala = document.getElementById("fala");

let indice = 0;

function escreverTexto(){
    if(indice < texto.length){
        campoFala.innerHTML += texto.charAt(indice);
        indice++;
        setTimeout(escreverTexto, velocidade);
    }
}

function iniciar(){
    campoFala.innerHTML = "";
    indice = 0;

    escreverTexto();

}

function reiniciar(){
    speechSynthesis.cancel();
    iniciar();
}

window.onload = () => {

    if(speechSynthesis.getVoices().length === 0){
        speechSynthesis.onvoiceschanged = iniciar;
    }else{
        iniciar();
    }

};
