Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 5.75 }',
    '{ "nome": "Lapis", "preco": 1.20 }',
    '{ "nome": "Caneta", "preco": 2.15 }'
]

const precos = carrinho.map(function(e) {
    return JSON.parse(e).preco
})

console.log(precos)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)