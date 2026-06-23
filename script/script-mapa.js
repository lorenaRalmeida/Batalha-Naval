 const botao1 = document.querySelector(".nivel1"); // Uso de querySelector para pegar o que tem na class nivel1

        botao1.addEventListener("mouseover", function(){ // Ele adiciona um evento e tem um "sensor" que vai verificar quando o mouse passar no botão
            botao1.style.backgroundColor = "#FBEBDC"; // Uso de style no script, para não precisar ir para o css
        })

        botao1.addEventListener("mouseout", function(){ // A mesma coisa que o de cima, mas esse é quando o mouse é retirado do botão
            botao1.style.backgroundColor = "#D69F3F";   // A função usada é genérica, podendo ser usada mais de uma vez
        })

        botao1.addEventListener("click", function(){ // Adiciona um evento de click no botão
            window.location.href = "../html/index.html"; // Quando o botão for clicado, ele vai redirecionar para a página do jogo
        });