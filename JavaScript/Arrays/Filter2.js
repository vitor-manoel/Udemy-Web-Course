Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4880, fragil: true},
    {nome: 'Copo', preco: 2.50, fragil: true},
    {nome: 'Barra Metal', preco: 55.79, fragil: false},
    {nome: 'Coluna', preco: 889, fragil: false}
]

console.log(produto.filter2(function(p){
    return (p.preco > 500 && p.fragil)
}))