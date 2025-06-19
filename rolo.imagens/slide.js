let cont = 1; // Controla o slide atual (começa no 1)

document.getElementById('radio1').checked = true; 
// Ativa o primeiro slide automaticamente ao carregar a página

setInterval(() => {
    proximaImg(); // Função chamada a cada 5 segundos
}, 5000); // Tempo de troca dos slides (5000 ms = 5 segundos)

function proximaImg() {
    cont++; // Avança para o próximo slide

    if (cont > 3) {
        cont = 1; // Reinicia para o primeiro slide após o último
    }

    document.getElementById('radio' + cont).checked = true;
    // Marca o botão de rádio correspondente ao slide atual
}
