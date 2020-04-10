Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Vitor','Gui M','Tonho','Gui N', 'Carol']

aprovados.forEach2(function(nome, indice, array){ //3 (três) parâmetros base
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})