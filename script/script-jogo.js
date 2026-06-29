const parametros = new URLSearchParams(window.location.search);
let nivel = parametros.get("nivel");

/* Uso da classe URLSearchParams e do evento window.location.search para identificar
o parâmetro usado no script do mapa */

let qtd_barco1;
let qtd_barco2;
let qtd_barco3;

let qtd_bombas;
let qtd_ondas;
let vidas;
let vidas_iniciais;
let pontos_perdidos;
let min_bombas;

/* Declaração de variáveis, para que sejam usadas no código todo */

if (nivel === "facil") 
{
    
    qtd_barco1 = 10;
    qtd_barco2 = 10;
    qtd_barco3 = 10;

    qtd_bombas = 10;
    qtd_ondas = 45;
    vidas = 7;
    vidas_iniciais = 7;
    pontos_perdidos = 5;
    min_bombas = 5;

}

/* Uso de if e else para identificar o níivel de dificuldade através do parâmetro na URL */

else if (nivel === "medio")
{

    qtd_barco1 = 10;
    qtd_barco2 = 10;
    qtd_barco3 = 10;

    qtd_bombas = 25;
    qtd_ondas = 45;
    vidas = 5;
    vidas_iniciais = 5;
    pontos_perdidos = 10;
    min_bombas = 3;

}

else
{
    qtd_barco1 = 5;
    qtd_barco2 = 5;
    qtd_barco3 = 5;

    qtd_bombas = 40;
    qtd_ondas = 45;
    vidas = 3;
    vidas_iniciais = 3;
    pontos_perdidos = 15;
    min_bombas = 1;
}

let pontos = 0;
let barcosEncontrados = 0;
let bombasEncontradas = 0;
let jogoEncerrado = false;
let matriz = [];
let jogadas = 0;

function jogarBN(){
let itens = [];
// criamos um vetor vazio
// adicionamos todos os elementos que ficarão na matriz
for(let i=0;i<qtd_barco1;i++){
    itens.push("barco1");
}

for(let i=0;i<qtd_barco2;i++){
    itens.push("barco2");
}

for(let i=0;i<qtd_barco3;i++){
    itens.push("barco3");
}

for(let i=0;i<qtd_bombas;i++){
    itens.push("bomba");
}

for(let i=0;i<qtd_ondas;i++){
    itens.push("x");
}
// embaralhamento dos itens do vetor
for(let i = itens.length - 1; i > 0; i--){
//itens.length = percorre o vetor e retorna com a quantidade de elementos dele, nesse caso, = a 100
    let j = Math.floor(Math.random() * (i + 1));
//Math.random = sorteia um número entre 0(inclusive) e 1(exclusive)
//Math.floor = função piso, ou seja, pega apenas a parte inteira do número
    let it = itens[i];
    itens[i] = itens[j];
    itens[j] = it;
// Há uma troca de elementos dos itens na posição i e j, onde i é a posição aleatória
}

// Transformação do vetor na matriz do tabuleiro
let l = 0;
for(let i=0;i<10;i++){
    matriz[i] = [];
    for(let j=0;j<10;j++){
        matriz[i][j] = itens[l];
        l++;
    }
}
// criação da tabela para mostrar o tabuleiro do jogo
// utilização de linguagem DOM
let tabela = document.getElementById("tabuleiro");
tabela.innerHTML = "";
for(let i = 0; i < 10; i++){
    let linha = document.createElement("tr");
    for(let j = 0; j < 10; j++){

        let celula = document.createElement("td");

        celula.innerHTML = `<img src = "../img/jogo/5.png">`;
        let imgCorrespondente = matriz[i][j];
        celula.id = "c" + i + "_" + j;
        celula.addEventListener("click", function() {
            if(jogoEncerrado){
                return;
            }

            if(celula.dataset.aberta === "sim"){
                return;
            }

            celula.dataset.aberta = "sim";
            jogadas++;
            document.getElementById("jogadas").innerHTML = jogadas;
            celula.innerHTML =`<img src="../img/jogo/${imgCorrespondente}.png">`;

            if(imgCorrespondente === "barco1"){
                pontos += 10;
                barcosEncontrados++;
                
            }

            else if(imgCorrespondente === "barco2"){
                pontos += 20;
                barcosEncontrados++;
            }

            else if(imgCorrespondente === "barco3"){
                pontos += 30;
                barcosEncontrados++;
            }

            else if(imgCorrespondente === "x"){
                pontos += 0;
            }

            else if(imgCorrespondente === "bomba"){
                pontos = Math.max(0, pontos - pontos_perdidos);
                bombasEncontradas++;
                if(bombasEncontradas >= min_bombas){
                    vidas--;
                    bombasEncontradas = 0;
                    atualizarVidas();
                }
            }
            document.getElementById("pontos").innerHTML = pontos;
            document.getElementById("barcos").innerHTML = barcosEncontrados;
            document.getElementById("restantes").innerHTML = (qtd_barco1 + qtd_barco2 + qtd_barco3) - barcosEncontrados;
            if(barcosEncontrados >= qtd_barco1 + qtd_barco2 + qtd_barco3){
                revelarTabuleiro();
            jogoEncerrado = true;
            mostrarFimJogo("Você venceu!");
            }else if(vidas <= 0){
                revelarTabuleiro();
                jogoEncerrado = true;
                mostrarFimJogo("Game Over!");
            }
        });

        linha.appendChild(celula);
    }
    tabela.appendChild(linha);
}
}
function criarTabelaVidas(){
    let areaV = document.getElementById("areaVidas");
    areaV.innerHTML = "";
    let tabelaV = document.createElement("table");
    tabelaV.id = "vidasTabela";

    let linhaV = document.createElement("tr");

    for(let i = 1; i <= vidas_iniciais; i++){

        let celulaV = document.createElement("td");

        let img = document.createElement("img");

        img.id = "vida" + i;
        img.src = "../img/jogo/vida.png";
        img.width = 40;
        img.height = 40;

        celulaV.appendChild(img);
        linhaV.appendChild(celulaV);
    }

    tabelaV.appendChild(linhaV);
    areaV.appendChild(tabelaV);
}

function atualizarVidas(){

    for(let i = 1; i <= vidas_iniciais; i++){

        let img = document.getElementById("vida" + i);

        if(!img){
            continue;
        }

        if(i <= vidas){
            img.src = "../img/jogo/vida.png";
        }

        else{
            img.src = "../img/jogo/morte.png";
        }
    }
}

function mostrarFimJogo(msg){

    document.getElementById("textoFinal").innerHTML = msg;
    setTimeout(function() {
        document.getElementById("overlay").style.display = "flex";
    }, 7000);
}

function revelarTabuleiro(){

    for(let i = 0; i < 10; i++){

        for(let j = 0; j < 10; j++){

            let celula =
            document.getElementById("c" + i + "_" + j);

            celula.innerHTML =
            `<img src="../img/jogo/${matriz[i][j]}.png">`;
        }
    }
}

function novoJogo(){
    pontos = 0;
    vidas = vidas_iniciais;
    barcosEncontrados = 0;
    jogoEncerrado = false;
    bombasEncontradas = 0;
    jogadas = 0;
    matriz = [];
    criarTabelaVidas();
    atualizarVidas();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("pontos").innerHTML = 0;
    document.getElementById("barcos").innerHTML = 0;
    document.getElementById("jogadas").innerHTML = 0;
    document.getElementById("restantes").innerHTML = qtd_barco1 + qtd_barco2 + qtd_barco3;
    jogarBN();
}
window.onload = function(){
    criarTabelaVidas();
    atualizarVidas();
    jogarBN();

}

