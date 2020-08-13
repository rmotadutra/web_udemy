const nome = "Rodrigo"

console.log(nome.charAt(4)) // Retorna a 4 letra da string. Obs: como no python, o JS começa no indice 0
console.log(nome.charAt(7)) // Quando não possui a letra no indice indicado, retorna vazio e não um erro
console.log(nome.indexOf('o')) // Retorna o indice do primeiro elemento indicado entre as ''

console.log(nome.substring(2)) // Inicia a string a partir do indice 2, incluindo o indice 2
console.log(nome.substring(0, 5)) // Inicia a string a partir do indice 0, incluindo o indice 0, e termina no indice 5, excluindo o indice 5

console.log('Nome: '.concat(nome))
console.log('Nome: ' + nome)
console.log(nome.replace('R', 'A'))

console.log('Ana,Maria,Pedro'.split(',')) // Retorna um array com os elementos separados de acordo com o parametro passado (',')

// Template String

const saudacao = `Olá, ${nome}`
console.log(saudacao)

const template = `   
    Olá,
    ${nome}
`
console.log(template) // template string permite a quebra de linha dentro da string

console.log(`1+1=${1+1}`) // Permite expressões matemáticas também

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) // Permite também chamar funções dentro da string