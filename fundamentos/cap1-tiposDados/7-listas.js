//cria uma lista vazia
const listaTeste = []

//ou cria ja com variaveis
const listaTarefas =[
  'a1',
  'b2',
  'c3'
]

console.log(listaTarefas[0])
console.log(listaTarefas[1])
//toda lista comeca no index [0], quando se chama um index e nao tiver valor vem undefined
console.log(listaTarefas[6])
console.log(listaTarefas[2])


//length => quantidade de itens na lista (array), atencao length diferente do index comeca a contagem no [1]
console.log('quantidade de itens =',listaTarefas.length)

//push => add item no fim 
listaTarefas.push('d4', 'e5', 'f6')
console.log(listaTarefas)

//pop => remove item do final
const removerUltimo = listaTarefas.pop()
console.log(removerUltimo, listaTarefas)

//shift => remove item do inicio
const removerPrimeiro = listaTarefas.shift()
console.log(listaTarefas)

//splice => remove item expeficico da lista, recebendo numero do item no index e apos a quantos itens eles vai remover 
console.log('quantidade de itens =',listaTarefas.length)
console.log(listaTarefas[2])
listaTarefas.slice(2, 1)
console.log(listaTarefas)

//verificar se e array de fato
const tipoVariados = [
  1, 'test', 0.22, false
]
console.log(Array.isArray(tipoVariados))

//ordenar 
const ordenar = [59,1,100,61,8,10,5,'a','z','b','g','f','c']
console.log(ordenar.sort())

//concat => juntar dois arrays
const listConcat = listaTarefas.concat(['g7','h8','i9'])
console.log(listConcat)

//join => junta arrays em uma string, usando separado de sua escolha
console.log(listConcat.join('|'))

//indeOf => retorna o valor do index um intem no array, atencao se ele nao encontra esse intem vai retorna '-1', se voce testa somente como booleano perigoso dar true ao inves de false 
const index = ordenar.indexOf('a')
console.log(index)
console.log(ordenar[index])