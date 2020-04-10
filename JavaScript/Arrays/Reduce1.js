//Agrega valores da array, percorrendo o índice
//Caso não seja passado valor inicial, o índice 0 será o mesmo

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 9.8, bolsista: true},
    {nome: 'Roberto', nota: 6.2, bolsista: true},
    {nome: 'Carol', nota: 7, bolsista: false},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado2)