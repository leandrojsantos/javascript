/**
 * para trabalha com if (se) e else (senao) e necessario tipos booleanos, pois assim ele sabe se continua ou nao a condicao desejada
 * 
 */


//args => obter valor do terminal
const args = process.argv
const saldo = args[args.length -1]
console.log('args', args)
console.log('Saldo = ', saldo)
//obs1 => para iniciar passa nome do arquivo e apos o o nome para o paramentro(s) 

if(isNaN(saldo)){
  console.log('VALOR INVALIDO')
  return
}

let tipoCliente = ''
if(saldo <= 9){
  tipoCliente = 'Basic'
}
else if (saldo >= 10 && saldo <=50){
  tipoCliente = 'Gold'
}
else if (saldo > 100){
  tipoCliente = 'Premium'
}
else {
  tipoCliente  = null
}

//null, underfined, vazio, 0 === false
if(!tipoCliente){
  tipoCliente = 'Indefinido'
}

console.log('Cliente = ' , tipoCliente)

//if else numa linha so (ternario) => if vira ?, else vira :
const idade = 15
const resultado = idade >= 18 ? 
                  'Pode dirigir' :
                  'Nao pode digir'
console.log('Resultado = ', resultado)