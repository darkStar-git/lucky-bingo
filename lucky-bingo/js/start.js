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
}