const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

// for (let i = 0; i < produtos.length; i++) {
//     for (let j = 0; j < produtos[i].categoria.length; j++){
//         //console.log(produtos[i].categoria[j])
// }}

// for(const prod of produtos){
//     for(const lim of produtos.categoria)
//     console.log(lim)
// }

const produtosLimpeza = produtos.filter((produto) => {
    return produto.categoria === "limpeza"
}).map ((produto) => {
    return produto.nome
})
console.log(produtosLimpeza)