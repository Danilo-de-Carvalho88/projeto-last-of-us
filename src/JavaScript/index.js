// Passo 1 => Pegar os elementos HTML dos botões:
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll ('.imagem');

// Passo 2 => Identificar clique do usuário no botão:
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Passo 3 => Desmarcar o botão selecionado anterior.
        desativarBotaoSelecionado();

        // Passo 4 => Marcar o botão clicado como se estivesse
        selecionarBotaoCarrosel(botao);

        // Passo 5 - Esconder a imagem ativa do fundo anterior
        esconderImagemAtiva();

        // Passo 6 - Fazer aparecer a imagem de acordo com o botão clicado
        mostrarImagemDeFundo(indice);
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
