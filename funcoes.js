import { produtos } from "./dados/dados.js";

var total = 0;
var historico = [];

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
export const listaCardapio = () => {
  console.log("Lista de itens");

  for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
    console.log(produtos[i].preco);
    console.log(produtos[i].tipo);
    console.log("--------");
  }
};
export const historicoPedido = () => {
  console.log(" ---- Histórico de pedidos ----");
  if (historico.length > 0) {
    for (let i = 0; i < historico.length; i++) {
      console.log("Produto: " + historico[i].produto);
      console.log("Quantidade: " + historico[i].quantidade);
      console.log("Preço unitário: R$ " + historico[i].preco.toFixed(2));
      console.log("Subtotal: R$ " + historico[i].subtotal.toFixed(2));
      console.log("Status: " + historico[i].status);
      console.log("--------");
    }
  } else {
    console.log("Nenhum pedido registrado");
  }
};
