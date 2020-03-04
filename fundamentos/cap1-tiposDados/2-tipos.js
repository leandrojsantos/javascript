/**
 * string => tudo que esta entre '', "", ``, caso um number estaja entre algum sera interptrado com sting n como number por ex "10"
 * 
 * number => numeros sem aspas por ex 10, 0.4, 10.10, 0.00001
 */


/**
 * nesse exemplo a variavel salarioAmigo e do tipo number, mas a variavel salarioMeu e do tipo string 
 */

let salarioAmigo = 1000
let salarioMeu = "3000"

let salarioMeuCorrigido = Number(salarioMeu)
let salarioAmigoCorrigido = Number(salarioAmigo)
let total = salarioMeuCorrigido + salarioAmigoCorrigido

console.log(salarioAmigoCorrigido + salarioMeuCorrigido )

console.log(typeof (salarioAmigo), salarioAmigo)
console.log(typeof (salarioMeu), salarioMeu)

salarioMeuCorrigido = "2a"
console.log(isNaN(salarioMeuCorrigido))

salarioMeuCorrigido = "4500"
console.log(isNaN(salarioMeuCorrigido))


let stringInicio = "test1"
let stringfim = "test2"
console.log(`salario 1 => ${stringInicio} + salario 2 => ${stringfim} = ${total}`);

/**
 * obs1 => com tipos diferentes ele junta as variaveis ao inves de somar 
 * 
 * obs2 => typeof e usado para ver tipo da variavel 
 * 
 * obs3 => para prevecao de tipos diferente, cria-se uma nova variavel e coloca a forca ser do tipo NUMBER por ex: let salarioMeuCorrigido = Number(salarioMeu)
 * 
 * obs4 => NaN not a number que ele nao consegue reconhecer ou tipo por ex: "222abc" usa-se isNaN retorno booleano
 * 
 * obs5 => a forma mais pratica de nao se perder e testar com isNaN e apos converter para number
 * 
 * obs6 => null e underfined : undefined é um valor e tipo de valor usado no Javascript para informar que o dado não existe ou não foi definido, enquanto o valor de null é usado para informar que uma variável nasceu sem valor 
 * 
 * obs6.1 => Quando uma variável em javascript é criada como `let podeViajar = null`, qual é o tipo de `podeViajar` ? object
 * 
 * obs6.2 => Quando uma variável em javascript é criada como `let podeViajar`, qual é o valor de `podeViajar` ? undefined
 * 
 */