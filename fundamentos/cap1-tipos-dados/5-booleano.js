/**
 * false => false, 0, [], "", '', null, undefined, NaN, tudo que na inteccao de 'ou'
 * 
 * true => true, 1, -1, 0.5, "0"
 */
const podeDirigirCarro = false
if (podeDirigirCarro) {
  console.log('ela pode dirigir carro')
}

const podeDirigirMoto = true
if (podeDirigirMoto) {
  console.log('ela pode dirigir moto')
}

//! => usado para trocar true para false ou contario 
const saldoConta = 0
if (!saldoConta) {
  console.log('nao tem saldo')
}

const saldoConta2 = 1
if (!saldoConta2) {
  console.log('nao tem saldo2')
}

/**
!! => duplo forca o valor da variavel a se torna true ou false sendo :

false => false, 0, [], "", '', null, undefined, NaN, tudo que na inteccao de 'ou'

true => true, 1, -1, 0.5, "0"
*/
const boolString = "test"
console.log('boolString', !!boolString)


//obs => se houver expressao entre () fazer elas primeiro
console.log(!(!!boolString))
