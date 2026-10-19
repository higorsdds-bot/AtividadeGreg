import { produtos } from "../dados/dados.js";

export const CadastrarProduto = () => {
    var nome = prompt("Digite o nome do produto:")
    var preco = Number(prompt("Digite o preço do produto"))
    var tipo = prompt("Digite o tipo do produto")

    produtos.push({
        nome: nome,
        preco: preco,
        tipo: tipo
    })


}