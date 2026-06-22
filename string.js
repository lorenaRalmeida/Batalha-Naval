
let pontos = 0;
let vidas = 5;
let barcosEncontrados = 0;
let bombasEncontradas = 0;
let jogoEncerrado = false;

function jogarBN(){
let itens = [];
// criamos um vetor vazio
// adicionamos todos os elementos que ficarão na matriz
for(let i=0;i<10;i++){
    itens.push("barco1");
}

for(let i=0;i<10;i++){
    itens.push("barco2");
}

for(let i=0;i<10;i++){
    itens.push("barco3");
}

for(let i=0;i<25;i++){
    itens.push("bomba");
}

for(let i=0;i<45;i++){
    itens.push("agua");
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
let matriz = [];
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

        celula.innerHTML = `<img src = "img/mar.png" width = "50" height = "50">`;
        let imgCorrespondente = matriz[i][j];
        celula.addEventListener("click", function() {
            if(jogoEncerrado){
                return;
            }

            if(celula.dataset.aberta === "sim"){
                return;
            }

            celula.dataset.aberta = "sim";

            celula.innerHTML =`<img src="img/${imgCorrespondente}.jpeg" width="50" height="50">`;

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

            else if(imgCorrespondente === "agua"){
                pontos += 0;
            }

            else if(imgCorrespondente === "bomba"){
                pontos -= 10;
                bombasEncontradas++;
                if(bombasEncontradas>=3){
                    vidas--;
                    bombasEncontradas=0;
                }
    
            }
            document.getElementById("pontos").innerHTML = pontos;
            document.getElementById("barcos").innerHTML = barcosEncontrados;

            if(barcosEncontrados === 30){
            jogoEncerrado = true;
            mostrarFimJogo("Você venceu!");
            }else if(vidas <= 0){

                jogoEncerrado = true;
                mostrarFimJogo("Game Over!");
            }
        });

        linha.appendChild(celula);
    }
    tabela.appendChild(linha);
}

}

function mostrarFimJogo(msg){

    document.getElementById("textoFinal")
    .innerHTML = msg;

    document.getElementById("overlay")
    .style.display = "block";
}

function novoJogo(){
    pontos = 0;
    vidas = 5;
    barcosEncontrados = 0;
    jogoEncerrado = false;
    bombasEncontradas = 0;
    document.getElementById("overlay").style.display = "none";
    document.getElementById("pontos").innerHTML = 0;
    document.getElementById("barcos").innerHTML = 0;
    jogarBN();
}

