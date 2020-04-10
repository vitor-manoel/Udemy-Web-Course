const aprovados = ['Vitor','Gui M','Tonho','Gui N', 'Carol']

aprovados.forEach(function(nome, indice, array){ //3 (três) parâmetros base
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)