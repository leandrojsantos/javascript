
//obs1 => data em javascript e tudo milisegundo, a partir de 1970 que foi quando lancaram o linux

//obs2 => meses comecam no '0' 

//obs3 => se organiza assim: ano, meses, dias 


//jan => 0
const dataTeste = new Date(2020, 0, 31 )
console.log(dataTeste)

//data inicial 0
const primeiraDataDoJS = new Date(0)
console.log(primeiraDataDoJS.getTime())

const hoje = new Date()
//toString => formata para string
console.log(hoje.toString())

//toLocaleDateString => verifica local da sua maquina 
console.log(hoje.toLocaleDateString())

//formato global recomendamedo
console.log(hoje.toISOString())

//setDate => add dias
//setHours => add horas passando horas, minutos, segundo e quiser ate milisegundo
const dia = hoje.getDate()
hoje.setDate(dia + 5)
hoje.setHours(10, 30, 0)
console.log(hoje)

console.log(`
  Dia: ${hoje.getDate()},
  Mes: ${hoje.getMonth()},
  Ano: ${hoje.getFullYear()},
  Hora: ${hoje.getHours()},
  Minuto: ${hoje.getMinutes()},
  Segundo: ${hoje.getSeconds()} `
)

//comparacao de datas com operadores 
console.log(new Date(2020, 1, 20) < new Date(2011, 1, 1))

