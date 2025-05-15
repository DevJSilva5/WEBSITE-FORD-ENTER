 var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
var rodape = document.querySelector('.rodape');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo') && rodape.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        rodape.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    } else {
        ul.classList.add('ativo');
        rodape.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }
});

document.querySelectorAll('.info-icon').forEach((icon) => {
    icon.addEventListener('click', function () {
        var infoText = this.closest('figure').querySelector('.hidden');

        if (infoText.style.maxHeight === "0px" || !infoText.style.maxHeight) {
            document.querySelectorAll('.hidden').forEach((el) => {
                el.style.maxHeight = "0px";
            });

            infoText.style.maxHeight = infoText.scrollHeight + "px";
        } else {
            infoText.style.maxHeight = "0px";
        }
    });
});

document.querySelectorAll('.saber-mais').forEach((icon) => {
    icon.addEventListener('click', function () {
        var saberMais = this.closest('figure').querySelector('.hidden');

        if (saberMais.style.maxHeight === "0px" || !saberMais.style.maxHeight) {
            document.querySelectorAll('.hidden').forEach((el) => {
                el.style.maxHeight = "0px";
            });

            saberMais.style.maxHeight = saberMais.scrollHeight + "px";
        } else {
            saberMais.style.maxHeight = "0px";
        }
    });
});

