 const img1 = document.querySelector(".nivel1"); 
 const img2 = document.querySelector(".nivel2");
 const img3 = document.querySelector(".nivel3"); 

 /*Uso de querySelector para pegar o que tem na class nivel1, nivel2 e nivel3 */

 /* Uso de parâmetros: ?nivel=...; para especificar o nível do jogo */

    img1.addEventListener("click", function(){ // Adiciona um evento de click no botão
        window.location.href = "../html/index.html?nivel=facil"; // Quando o botão for clicado, ele vai redirecionar para a página do jogo
    });
 
    img2.addEventListener("click", function(){
        window.location.href = "../html/index.html?nivel=medio"; 
    });

    img3.addEventListener("click", function(){
        window.location.href = "../html/index.html?nivel=dificil"; 
    });