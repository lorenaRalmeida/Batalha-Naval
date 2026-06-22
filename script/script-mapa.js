 const botao1 = document.querySelector(".nivel1"); // Uso de querySelector para pegar o que tem na class nivel1

        botao1.addEventListener("mouseover", function(){ // Ele adiciona um evento e tem um "sensor" que vai verificar quando o mouse passar no botão
            botao1.style.backgroundColor = "#FBEBDC"; // Uso de style no script, para não precisar ir para o css
        })

        botao1.addEventListener("mouseout", function(){ // A mesma coisa que o de cima, mas esse é quando o mouse é retirado do botão
            botao1.style.backgroundColor = "#D69F3F";   // A função usada é genérica, podendo ser usada mais de uma vez
        })

        const botao2 = document.querySelector(".nivel2");

        botao2.addEventListener("mouseover", function(){
            botao2.style.backgroundColor = "#FBEBDC";
        })

        botao2.addEventListener("mouseout", function(){
            botao2.style.backgroundColor = "#D69F3F";
        })

        const botao3 = document.querySelector(".nivel3");

        botao3.addEventListener("mouseover", function(){
            botao3.style.backgroundColor = "#FBEBDC";
        })

        botao3.addEventListener("mouseout", function(){
            botao3.style.backgroundColor = "#D69F3F";
        })