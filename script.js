// Identificando os elementos (números)
const dias_n = document.getElementById('dias_n');
const horas_n = document.getElementById('horas_n');
const minutos_n = document.getElementById('minutos_n');
const segundos_n = document.getElementById('segundos_n');

// data alvo pro contador
const data_importante = "30 Jun 2023";

// Função para encontrar quanto tempo falta até a data alvo
function contagem() {
    const data_convertida = new Date(data_importante);
    const data_atual = new Date();
    const total_segundos = (data_convertida - data_atual) / 1000;

    // Obtendo a diferença em dias, arredondado
    const dia = Math.floor(total_segundos / 3600 / 24);
    const horas = Math.floor(total_segundos / 3600) % 24;
    const minutos = Math.floor(total_segundos / 60) % 60;
    const segundos = Math.floor(total_segundos) % 60;

    // Mudando o elemento para o valor da variável
    dias_n.innerHTML = formata_tempo(dia);
    horas_n.innerHTML = formata_tempo(horas);
    minutos_n.innerHTML = formata_tempo(minutos);
    segundos_n.innerHTML = formata_tempo(segundos);

    // Fazendo os valores aparecerem no console "Print"
    console.log(dia, horas, minutos, segundos);
}

// formata os números para ficarem com duas casas
function formata_tempo(tempo) {
    // if de uma linha => condição ? true : false ;
    return tempo < 10 ? `0${tempo}` : tempo;
}

// inicia a função
contagem();

// chama a função de tempo em tempo
setInterval(contagem, 1000);
