class DadosCarrossel {
    static dados = [
        {
            imagem: 'img/imagem_1.jpg',
            texto: 'Esta é a Ranger Ford 2022. Verifique novidades 2022',
            url: 'lancamentos.html'
        },
        {
            imagem: 'img/imagem_2.jpg',
            texto: 'ford nossa historia',
            url: '#'
        },
        {
            imagem: 'img/imagem_3.jpg',
            texto: 'Esta é a nova Ford Bronco 2022',
            url: 'lancamentos.html'
        }
    ];
}

let indiceAtual = 0;
let autoRolagemInterval;
let intervaloPausa;

function mudarImagemAtiva(direcao) {
    indiceAtual = (indiceAtual + direcao + DadosCarrossel.dados.length) % DadosCarrossel.dados.length;
    atualizarCarrossel();
    pararAutoRolagem();
    reiniciarAutoRolagemComPausa();
}

function atualizarCarrossel() {
    const imagemContainer = document.querySelector('.imagem');
    const descricao = document.querySelector('.descricao');
    const indicadores = document.querySelectorAll('.indicador');

    imagemContainer.src = DadosCarrossel.dados[indiceAtual].imagem;

    const texto = DadosCarrossel.dados[indiceAtual].texto;
    const palavras = texto.split(" ");
    const ultimaPalavra = palavras.pop();
    const textoComLink = palavras.join(" ") + " <a href='" + DadosCarrossel.dados[indiceAtual].url + "' class='link-ultima-palavra'>" + ultimaPalavra + "</a>";

    descricao.innerHTML = textoComLink;

    indicadores.forEach((indicador, index) => {
        if (index === indiceAtual) {
            indicador.classList.add('active');
        } else {
            indicador.classList.remove('active');
        }
    });
}

function mudarImagem(indice) {
    indiceAtual = indice;
    atualizarCarrossel();
    pararAutoRolagem();
    reiniciarAutoRolagemComPausa();
}

function iniciarAutoRolagem() {
    autoRolagemInterval = setInterval(() => {
        indiceAtual = (indiceAtual + 1) % DadosCarrossel.dados.length;
        atualizarCarrossel();
    }, 3000);
}

function pararAutoRolagem() {
    clearInterval(autoRolagemInterval);
}

function reiniciarAutoRolagemComPausa() {
    clearInterval(intervaloPausa);

    intervaloPausa = setTimeout(() => {
        iniciarAutoRolagem();
    }, 7000);
}

atualizarCarrossel();
iniciarAutoRolagem();



