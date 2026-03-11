import { iniciar } from "./start.js";

export function reiniciar(tabela, modo, numeros, sorteados, resultado) {
    iniciar(tabela, modo, numeros, sorteados);
    resultado.innerText = "Aguardando sorteio...";
}