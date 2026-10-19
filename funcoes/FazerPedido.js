import { produtos } from "../dados/dados.js";

export var historico = [];
export var total = 0;

export const fazerPedido = () => {
    var continuar = "sim";

    while (continuar.toLowerCase() !== "não") {
        var pedido = prompt("Digite o nome do produto:");
        var quantidade = Number(prompt("Quantidade"));

        var encontrado = false;

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nome.toLowerCase() === pedido.toLowerCase()) {
                var valorFinal = produtos[i].preco * quantidade;
                total += valorFinal;

                historico.push({
                    produto: produtos[i].nome,
                    quantidade: quantidade,
                    preco: produtos[i].preco,
                    subtotal: valorFinal,
                    status: "Confirmado",
                });

                console.log("Pedido cadastrado");
                console.log("Subtotal: R$ " + valorFinal.toFixed(2));

                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("Produto não encontrado");
        }

        continuar = prompt("DESEJA ADICIONAR OUTRO PRODUTO?\n SIM -- NÃO") || "não";
    }

    console.log("Total do pedido: R$ " + total.toFixed(2));
};