/**
 * funcoes sao usadas para melhor organiza o codigo, sendo que escreve uma unica funcao e todos os lugares em que tiver essa funcao sao alterados tambem
 *  
 */

//ex de corpo de funcao 1 normal
function nomeDafuncao1(parametro1) {
  //bloco de codigo
}

//ex de corpo funcao 2 declarativa
const nomeDafuncao2 = function(parametro1) {
  return `teste ${parametro1}`
}

//ex de corpo funcao 3 array
const nomeDafuncao3 = (parametro1) => {
  return `teste ${parametro1}`
}

//ex funcao traz o dia
function diaHoje() {
  const data = new Date()
  console.log(`hoje e dia => ${data.getDate()}`)
}

//para chamar a funcao so usa nome dela
diaHoje()

//funcao de soma
function somaDoisValores(valor1, valor2) {
  console.log(`A soma de ${valor1} + ${valor2} =>`, valor1 + valor2)
}

//obs1 => nao e boa pratica colocar valores das variaveis direto em funcoes 
somaDoisValores(5, 2)
somaDoisValores(10, 2.66)

//funcao de divicao
function divicaoDoisValores(valor1, valor2) {
  return valor1 / valor2
}

const a = 15
const b = 100
//nesse caso resultado recebe a chamada da funcao
const resultado = divicaoDoisValores(a, b)
console.log('resultado da divisao e =>', resultado)


//funcao desconto de salario
const funcionario1 = {
  nome: 'ze',
  desconto: 0.2,
  salarioBruto: 1000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'maria',
  desconto: 0.1,
  salarioBruto: 1000,
  salarioLiquido: 0
}

function calculoSalario(salarioBruto, desconto) {
  return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calculoSalario(funcionario1.salarioBruto, funcionario1.desconto)

funcionario2.salarioLiquido = calculoSalario(funcionario2
  .salarioBruto, funcionario2.desconto)

console.log(`
  Salario ${funcionario1.nome} => ${funcionario1.salarioLiquido}
  Salario ${funcionario2.nome} => ${funcionario2.salarioLiquido}`)