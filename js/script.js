import { sortear } from "./sorteador.js";
import { iniciar } from "./start.js";
import { reiniciar } from "./restart.js";

let numeros = [];
let sorteados = [];

const tabela = document.querySelector("#tabela tbody");
const resultado = document.getElementById("resultado");
const modo = document.getElementById("modo");
const listaHistorico = document.getElementById("listaHistorico");

// Atualiza tabela quando muda o modo
modo.addEventListener("change", () => iniciar(tabela, modo, numeros, sorteados));

// Funções globais para os botões HTML
window.sortearNumero = () => sortear(numeros, sorteados, resultado, modo, listaHistorico);
window.reiniciarJogo = () => {
    reiniciar(tabela, modo, numeros, sorteados, resultado);
    listaHistorico.innerHTML = ""; // limpa histórico ao reiniciar
};

// Inicializa tabela na primeira carga
iniciar(tabela, modo, numeros, sorteados);

// Funções para projeção em tela cheia
const telaCheia = document.getElementById("telaCheia");
const numeroGigante = document.getElementById("numeroGigante");

window.modoProjecao = () => {

    telaCheia.classList.add("ativa");

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
};

window.sairProjecao = () => {
    telaCheia.classList.remove("ativa");

    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
};

document.addEventListener("keydown", (e) => {

    if (e.code === "KeyS") {
        e.preventDefault();
        sortearNumero();
    }

    if (e.code === "KeyR") {
        reiniciarJogo();
    }

    if (e.code === "Escape") {
        sairProjecao();
    }

});
