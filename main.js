import { listaCardapio } from "./funcoes.js";
import { fazerPedido } from "./funcoes.js";
import { historicoPedido } from "./funcoes.js";

console.log(" ---- Bem Vindo a lanchonete do betão ----");

do {
  var option = Number(
    prompt(
      "Escolha uma opção:\n" +
      "1 - Ver cardápio\n" +
      "2 - fazer pedido\n" +
      "3 - Pedidos\n" +
      "4 - Sair",
    ),
  );

  switch (option) {
    case 1:
      listaCardapio();
      break;
    case 2:
      fazerPedido();
      break;
    case 3:
      historicoPedido();
      break;

    case 4:
      console.log("Obrigado por visitar a lanchonete do Betão!");
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
} while (option !== 4);
