const modulaA = require('../../ModuloA')
console.log(modulaA.ola)

const http = require('http') //Modulo Node.js
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) //Porta