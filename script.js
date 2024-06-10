let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarNumero() {
    let numeroDigitado = parseInt(document.getElementById("numero").value);
    tentativas++;

    let mensagem = document.getElementById("mensagem");

    if (numeroDigitado === numeroSecreto) {
        mensagem.innerHTML = `Acertou! O Bob Esponja escolheu o número ${numeroSecreto}. Você acertou em ${tentativas} tentativas!`;
        mensagem.style.color = "#008000"; // Verde do Bob Esponja
    } else if (numeroDigitado < numeroSecreto) {
        mensagem.innerHTML = "Oh não! O número secreto é maior! Tente novamente!";
        mensagem.style.color = "#ff0000"; // Vermelho da "Oh não!"
    } else {
        mensagem.innerHTML = "Oh não! O número secreto é menor! Tente novamente!";
        mensagem.style.color = "#ff0000"; // Vermelho da "Oh não!"
    }
}