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

for(let i=0;i<35;i++){
    itens.push("bomba");
}

for(let i=0;i<35;i++){
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
let tabela = document.getElementById("tabuleiro");
tabela.innerHTML = "";
for(let i = 0; i < 10; i++){
    let linha = document.createElement("tr");
    for(let j = 0; j < 10; j++){

        let celula = document.createElement("td");

        celula.innerHTML = '<img src = "img/${matriz[i][j]}.jpeg">';

        linha.appendChild(celula);
    }
    tabela.appendChild(linha);
}


}



