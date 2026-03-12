import { obterLetra } from "./tabelaBingo.js";

export function sortear(numeros, sorteados, resultado, modo) {
    
    const total = parseInt(modo.value);
    const faixa = total / 5;
    
    if (sorteados.length === numeros.length) {
        alert("Todos os números já foram sorteados");
        return;
    }

    let numero;
    do {
        numero = numeros[Math.floor(Math.random() * numeros.length)];
    } while (sorteados.includes(numero));

    sorteados.push(numero);

    const restantes = document.getElementById("restantes");

    if (restantes) {
        const total = numeros.length;
        const faltam = total - sorteados.length;
        restantes.innerText = `Restantes: ${faltam}`;
    }

    // Atualiza célula na tabela
    const celula = document.getElementById("n" + numero);
    if (celula) {
        celula.classList.add("sorteado");
        if (numero <= faixa) {
            celula.classList.add("b");
        } else if (numero <= faixa * 2) {
            celula.classList.add("i");
        } else if (numero <= faixa * 3) {
            celula.classList.add("n");
        } else if (numero <= faixa * 4) {
            celula.classList.add("g");
        } else {
            celula.classList.add("o");
        }

        // força reiniciar animação
        celula.style.animation = "none";
        celula.offsetHeight; // trigger reflow
        celula.style.animation = null;
    }

    const letra = obterLetra(numero, parseInt(modo.value));
    
    // Animação de flash na tela cheia
    const telaCheia = document.getElementById("telaCheia");

    if (telaCheia) {

        const cores = {
            B: "#2563eb",
            I: "#059669",
            N: "#f1ac1b",
            G: "#ff3333",
            O: "#7e22ce"
        };

        telaCheia.style.setProperty("--flash-color", cores[letra]);

        telaCheia.classList.remove("flash");
        void telaCheia.offsetWidth;
        telaCheia.classList.add("flash");
    }
    // Atualiza resultado e número gigante
    resultado.innerText = `LETRA ${letra}, NÚMERO ${numero}`;
    const numeroGigante = document.getElementById("numeroGigante");
    if (numeroGigante) {
        numeroGigante.innerText = `${letra} ${numero}`;
    }
    
    const historico = document.getElementById("historicoGigante");

    if (historico) {

        const letraNumero = `${letra} ${numero}`;

        const item = document.createElement("div");
        item.classList.add("historico-item");
        item.innerText = letraNumero;

        historico.prepend(item);

        if (historico.children.length > 5) {
            historico.removeChild(historico.lastChild);
        }
    }

    // Atualiza resultado com animação
    resultado.classList.remove("animate");
    void resultado.offsetWidth; // trigger reflow
    resultado.classList.add("animate");
}
