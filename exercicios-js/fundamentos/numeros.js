const peso1 = 1.0
const peso2 = Number('2.0') // outra forma de declarar um number numa constante

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // fixando o valor obtido em apenas 2 casa decimais
console.log(media.toString()) // convertendo o tipo de média de number para string
console.log(media.toString(2)) // convertendo o valor de média para binário

// Alguns cuidados com o tipo Number

console.log(7 / 0) // Divisão por zero tem resultado infinito
console.log("10" / 2) // Caso o conteúdo da string tenha formato de numero, o js consegue executar a operação
console.log("3" + 2) // Como o + possui um significado de concatenação, o resultado será 32
console.log("show" / 2) // Resulta em NaN, ou seja, não é possível fazer esse tipo de operação
console.log(0.7 + 0.1) // Apresenta imprecisão no resultado
console.log((10.345).toFixed(2)) // O número passado entre () é conhecido como uma "função"