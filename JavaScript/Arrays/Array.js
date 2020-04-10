let aprovador = new Array('Bia','Carlos','Ana')
console.log(aprovador)

aprovador = ['Vitor','Jose','Joao']
console.log(aprovador)
console.log(aprovador[0])

aprovador[3] = 'Paulo'
console.log(aprovador)

aprovador.push('Bia')
console.log(aprovador)

aprovador.sort()
console.log(aprovador)

delete aprovador[3]
console.log(aprovador)

aprovador.splice(1, 1, 'Elemento1', 'Elemento2') //splice(à partir, deleta, insere, insere ...)
console.log(aprovador)