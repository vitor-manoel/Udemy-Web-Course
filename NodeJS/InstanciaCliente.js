const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor,contadorC.valor)