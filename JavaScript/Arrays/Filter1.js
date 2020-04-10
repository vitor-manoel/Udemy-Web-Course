const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4880, fragil: true},
    {nome: 'Copo', preco: 2.50, fragil: true},
    {nome: 'Barra Metal', preco: 55.79, fragil: false},
    {nome: 'Coluna', preco: 889, fragil: false}
]

console.log(produto.filter(function(p){
    return p.preco < 2499
}))

console.log(produto.filter(function(p){
    return !p.fragil
}))

console.log(produto.filter(function(p){
    return (p.preco > 500 && p.fragil)
}))