
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 9.8, bolsista: true},
    {nome: 'Roberto', nota: 6.2, bolsista: true},
    {nome: 'Carol', nota: 7, bolsista: false},
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))