import { gerarTabela } from "./tabelaBingo.js";

export function iniciar(tabela, modo, numeros, sorteados) {

    tabela.innerHTML = "";
    sorteados.length = 0;

    const total = parseInt(modo.value);

    numeros.length = 0;
    for (let i = 1; i <= total; i++) {
        numeros.push(i);
    }

    gerarTabela(tabela, total);

    // Reset visual
    const restantes = document.getElementById("restantes");
    const resultado = document.getElementById("resultado");
    const numeroGigante = document.getElementById("numeroGigante");
    const historicoGigante = document.getElementById("historicoGigante");

    if (resultado) {
        resultado.innerText = "Aguardando sorteio...";
    }

    if (numeroGigante) {
        numeroGigante.innerText = "--";
    }

    if (historicoGigante) {
        historicoGigante.innerHTML = "";
    }

    if (restantes) {
        restantes.innerText = `Restantes: ${numeros.length}`;
    }
}
