import { produtos } from "../dados/dados.js";

export const listaCardapio = () => {
    console.log("Lista de itens");

    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i].nome);
        console.log(produtos[i].preco);
        console.log(produtos[i].tipo);
        console.log("--------");
    }
};