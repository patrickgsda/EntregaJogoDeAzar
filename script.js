let buttonAtualJogador = 0
let buttonAtualComputador = 0
let partidaAtual = 0

let arrayList_PPT_PCaux = [
    1,
    2,
    3
];

let arrayList_PPT_PC = [
    "botoesComputador__items--pedra",
    "botoesComputador__items--papel",
    "botoesComputador__items--tesoura"
]

const buttonPedra = document.getElementById("botoesJogador__items--pedra");
buttonPedra.addEventListener("click", function () {

    if(partidaAtual === 0){
    buttonAtualJogador = 1

    buttonPedra.classList.remove('desativarButton')
    buttonPedra.classList.add('ativarButton')

    buttonPapel.classList.remove('ativarButton')
    buttonPapel.classList.add('desativarButton')

    buttonTesoura.classList.remove('ativarButton')
    buttonTesoura.classList.add('desativarButton')
    }
});

const buttonPapel = document.getElementById("botoesJogador__items--papel");
buttonPapel.addEventListener("click", function () {

    if(partidaAtual === 0){
    buttonAtualJogador = 2

    buttonPapel.classList.remove('desativarButton')
    buttonPapel.classList.add('ativarButton')

    buttonPedra.classList.remove('ativarButton')
    buttonPedra.classList.add('desativarButton')

    buttonTesoura.classList.remove('ativarButton')
    buttonTesoura.classList.add('desativarButton')
    }
});

const buttonTesoura = document.getElementById("botoesJogador__items--tesoura");
buttonTesoura.addEventListener("click", function () {

    if(partidaAtual === 0){
    buttonAtualJogador = 3

    buttonTesoura.classList.remove('desativarButton')
    buttonTesoura.classList.add('ativarButton')

    buttonPapel.classList.remove('ativarButton')
    buttonPapel.classList.add('desativarButton')

    buttonPedra.classList.remove('ativarButton')
    buttonPedra.classList.add('desativarButton')
    }
});

let contador = 3
let buttonJogar = document.getElementById("jogar");
buttonJogar.addEventListener("click", function () {
    partidaAtual += 1
    if (buttonAtualJogador !== 0) {
        buttonJogar.disabled = true
        buttonPedra.disabled = true
        buttonPapel.disabled = true
        buttonTesoura.disabled = true
        buttonJogar.style.cursor = 'auto'
        let fight = setInterval(function () {
            buttonJogar.innerHTML = contador--
            if (contador === -1) {
                clearInterval(fight)
                buttonAtualComputador = Math.floor(Math.random() * 3 + 1)
                for (let i = 0; i < arrayList_PPT_PCaux.length; i++) {
                    if (buttonAtualComputador === arrayList_PPT_PCaux[i]) {
                        let buttonAtualPC = document.getElementById(arrayList_PPT_PC[i])
                        buttonAtualPC.classList.add('ativarButton')
                    }
                }
                ganhador()
                buttonResetar.style.display = 'block'
            }
        }, 1000)
    }
});

let buttonResetar = document.getElementById('botaoResetar');
buttonResetar.addEventListener("click", function () {
    location.reload()
})

function ganhador() {

    if (buttonAtualJogador === buttonAtualComputador) {
        buttonJogar.innerHTML = 'Você Empatou!!!'
        buttonJogar.classList.add('empatou')
    }
    if (buttonAtualJogador === 1 && buttonAtualComputador === 2) {
        buttonJogar.innerHTML = 'Você Perdeu!!!'
        buttonJogar.classList.add('perdeu')
    }
    if (buttonAtualJogador === 1 && buttonAtualComputador === 3) {
        buttonJogar.innerHTML = 'Você Ganhou!!!'
        buttonJogar.classList.add('ganhou')
    }

    if (buttonAtualJogador === 2 && buttonAtualComputador === 1) {
        buttonJogar.innerHTML = 'Você Ganhou!!!'
        buttonJogar.classList.add('ganhou')
    }

    if (buttonAtualJogador === 2 && buttonAtualComputador === 3) {
        buttonJogar.innerHTML = 'Você Perdeu!!!'
        buttonJogar.classList.add('perdeu')
    }

    if (buttonAtualJogador === 3 && buttonAtualComputador === 1) {
        buttonJogar.innerHTML = 'Você Perdeu!!!'
        buttonJogar.classList.add('perdeu')
    }

    if (buttonAtualJogador === 3 && buttonAtualComputador === 2) {
        buttonJogar.innerHTML = 'Você Ganhou!!!'
        buttonJogar.classList.add('ganhou')
    }
}