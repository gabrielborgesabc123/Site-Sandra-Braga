document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0; // Índice inicial (parte 1)
    const partes = document.querySelectorAll('.parte'); // Seleciona todas as partes
    const totalPartes = partes.length; // Quantidade de partes (seções)
    const containerSecoes = document.querySelector('.secoes'); // Seleciona a div que contém as partes

    // Função para mudar a seção visível
    function mudarSecao() {
        // Garantir que a classe 'active' seja removida de todas as seções
        partes.forEach((parte) => {
            parte.classList.remove('active');
        });

        // Adiciona a classe 'active' para a seção atual
        partes[currentIndex].classList.add('active');

        // Atualiza a transformação para a nova posição
        containerSecoes.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Função para avançar para a próxima parte
    function avancar() {
        // Atualiza o índice para a próxima seção (com loop)
        currentIndex = (currentIndex + 1) % totalPartes;
        mudarSecao(); // Chama a função para atualizar a seção
    }

    // Função para voltar para a parte anterior
    function voltar() {
        // Atualiza o índice para a seção anterior (com loop)
        currentIndex = (currentIndex - 1 + totalPartes) % totalPartes;
        mudarSecao(); // Chama a função para atualizar a seção
    }

    // Define os eventos de clique para os botões
    document.querySelector(".button-prev").onclick = voltar;
    document.querySelector(".button-next").onclick = avancar;

    // Chama a função inicial para mostrar a primeira seção corretamente
    mudarSecao();
})