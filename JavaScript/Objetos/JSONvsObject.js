const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //-> Texto

//console.log(JSON.parse("{ a: 1, b: 3, c: 2 }")) -> Erro
//console.log(JSON.parse("{'a': 1, 'b': 3, 'c': 2")) -> Erro

console.log(JSON.parse('{"a": 1, "b": 3, "c": 2}')) //-> Objeto
console.log(JSON.parse('{"a": 1.4, "b": "string", "c": true, "d": {}, "e": []}'))  //-> Objeto