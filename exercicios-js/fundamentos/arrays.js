const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])  // Como nao existe o elemento no indice 4, ao ser consultado nao apresentará erro, mas sim será definido como "undefined"

// Adicionando o elemento com indice 4 ao array valores
valores[4] = 10
console.log(valores)
console.log(valores.length)

// No js é possivel combinar diferente tipos de dados num mesmo array, parecido com o tipo de lista no python
// A função push adiciona valores ao final do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// A função pop pega o valor do último elemento do array e tira do array
console.log(valores.pop())
// deletando o elemento de indice 0 do array
delete valores [0]
console.log(valores)

console.log(typeof valores)