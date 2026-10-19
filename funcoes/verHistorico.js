import { historico } from "./FazerPedido.js"

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