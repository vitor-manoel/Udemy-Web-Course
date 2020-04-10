const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove último dado
console.log(pilotos)

pilotos.shift() //remove primeiro dado
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona dado no primeiro índice
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array indice 1 a 4