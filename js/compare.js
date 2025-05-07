function verificarCarros() {
    const carrosSelecionados = document.querySelectorAll('input[name="carro"]:checked');
    const tabelaCarros = document.getElementById('carros-selecionados');

    tabelaCarros.innerHTML = '';

    if (carrosSelecionados.length == 2) {

        carrosSelecionados.forEach(carro => {
            const trCarro = document.createElement('tr');
            const tdCarro = document.createElement('td');
            tdCarro.classList.add('carro-info');

            const img = document.createElement('img');
            img.src = carro.closest('figure').querySelector('img').src;
            img.alt = carro.value;
            img.style.width = '130px';
            tdCarro.appendChild(img);

            const nomeCarro = document.createElement('h3');
            nomeCarro.textContent = carro.value;
            tdCarro.appendChild(nomeCarro);


            const infoCarro = document.createElement('p');
            infoCarro.innerHTML =
                `

                <br><strong>Altura da Caçamba (mm):</strong>  ${carro.getAttribute('alturaCacamba')} <br>
                <strong>Altura do Veículo (mm):</strong>  ${carro.getAttribute('alturaVeiculo')} <br>
                <strong>Altura do Solo (mm):</strong>  ${carro.getAttribute('alturaSolo')} <br>
                <strong>Capacidade de Carga (Kg):</strong>  ${carro.getAttribute('capacidadeCarga')} <br>
                <strong>Motor:</strong>  ${carro.getAttribute('motor')} <br>
                <strong>Potência (cv):</strong>  ${carro.getAttribute('potencia')} <br>
                <strong>Volume da Caçamba (L):</strong>  ${carro.getAttribute('volumeCacamba')} <br>
                <strong>Roda:</strong>  ${carro.getAttribute('roda')} <br>
                <strong>Preço:</strong>  ${carro.getAttribute('preco')} <br>
            `;
            tdCarro.appendChild(infoCarro);

            trCarro.appendChild(tdCarro);
            tabelaCarros.appendChild(trCarro);



        });

        document.getElementById('modal').classList.add('visible');
    } else if (carrosSelecionados.length < 2 && carrosSelecionados.length > 0 || carrosSelecionados.length > 2) {
        alert("Selecione 2 carros!");
    } else if (carrosSelecionados.length == 0) {
        alert("Nenhum carro selecionado!");
    }
}

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('visible');
});
