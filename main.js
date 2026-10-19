import { listaCardapio } from "./funcoes/mostrarCardapio.js";
import { fazerPedido } from "./funcoes/FazerPedido.js";
import { historicoPedido } from "./funcoes/verHistorico.js";
import { CadastrarProduto } from "./funcoes/NovoProduto.js";

console.log(" ---- Bem Vindo a lanchonete do betinha ----");

do {
  var option = Number(
    prompt(
      "Escolha uma opção:\n" +
      "1 - Ver cardápio\n" +
      "2 - fazer pedido\n" +
      "3 - Pedidos\n" +
      "4 - Cadastrar produto\n" +
      "5 - Sair",
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
      CadastrarProduto();
      break;

    case 5:
      console.log("Obrigado por visitar a lanchonete do Betinha!");
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
} while (option !== 5);
