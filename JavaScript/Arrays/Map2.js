const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 5.75 }',
    '{ "nome": "Lapis", "preco": 1.20 }',
    '{ "nome": "Caneta", "preco": 2.15 }'
]

let precos = carrinho.map(function(e) {
    return JSON.parse(e).preco
})

console.log(precos)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)