/**
 * no fim tudo e object no javascript
 */

const heroi = {
  nome: 'hulk',
  idade: '59',
  sexo: 'masculino'
}

console.log('nome', heroi.nome)
console.log('idade', heroi['idade'])

//assim como lista intem vazio ou nao existe retorna undefined
console.log('nao existe', heroi['nao existe'])

//add chave valor 
heroi.id = 0001
console.log(heroi)

//saber somente chaves
console.log(Object.keys(heroi))

//saber somente valores
console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
  tamanho: '1.8 m'
}
const novoObj = Object.assign(heroi, pessoa)
console.log(novoObj)

//delete => remove chave do objeto
delete novoObj.sexo
console.log(novoObj)

/**
 * obs => por padrao e conversao do javascript evitar altera um objeto que ja foi criado sempre tentar cria um novo 
 */