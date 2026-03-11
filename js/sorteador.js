import { obterLetra } from "./tabelaBingo.js";

export function sortear(numeros, sorteados, resultado, modo, listaHistorico) {
    if (sorteados.length === numeros.length) {
        alert("Todos os números já foram sorteados");
        return;
    }

    let numero;
    do {
        numero = numeros[Math.floor(Math.random() * numeros.length)];
    } while (sorteados.includes(numero));

    sorteados.push(numero);

    // Atualiza célula na tabela
    const celula = document.getElementById("n" + numero);
    if (celula) {
        celula.classList.add("sorteado");
        // força reiniciar animação
        celula.style.animation = "none";
        celula.offsetHeight; // trigger reflow
        celula.style.animation = null;
    }

    // Atualiza resultado com animação
    const letra = obterLetra(numero, parseInt(modo.value));
    resultado.innerText = `LETRA ${letra}, NÚMERO ${numero}`;
    resultado.classList.remove("animate");
    void resultado.offsetWidth; // trigger reflow
    resultado.classList.add("animate");

    // Adiciona ao histórico
    const span = document.createElement("span");
    span.innerText = `${letra}${numero}`;
    listaHistorico.appendChild(span);
}