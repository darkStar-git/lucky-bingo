export function gerarTabela(tabela, total) {
    tabela.innerHTML = ""; // Limpa corpo da tabela

    const colunas = 5;
    const faixa = total / colunas;

    for (let i = 0; i < faixa; i++) {
        const tr = document.createElement("tr");

        for (let c = 0; c < colunas; c++) {
            const numero = c * faixa + i + 1;
            const td = document.createElement("td");

            if (numero <= total) {
                td.id = "n" + numero;
                td.innerText = numero;
            }

            tr.appendChild(td);
        }

        tabela.appendChild(tr);
    }
}

export function obterLetra(numero, total) {
    const faixa = total / 5;

    if (numero <= faixa) return "B";
    if (numero <= faixa * 2) return "I";
    if (numero <= faixa * 3) return "N";
    if (numero <= faixa * 4) return "G";
    return "O";
}