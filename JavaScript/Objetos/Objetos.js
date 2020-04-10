const produto = new Object
produto.nome = 'Cadeira'
produto['marcado produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 98888,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            lorgadouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    valorSeguro: function(){
        //....exemplo
    }
}

carro.proprietario.endereco.numero = 52
carro['proprietario']['endereco']['lorgadouro'] = 'Ministro'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.valorSeguro
console.log(carro)