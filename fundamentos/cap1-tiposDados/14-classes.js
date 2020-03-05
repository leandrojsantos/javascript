/**
 * classes sao usadas agrupar tudo o for entidade no mundo real uma pessoa, um cao etc... 
 */

//corpo de class 1 normal
class teste {
  ataca(){
    console.log('atacou!!!!!')
  }
  defende(){
    console.log('denfedeu####')
  }
}

//new => instancia classe ou seja cria add ao heroi1 tudo que esta na class teste
const heroi1 = new teste
heroi1.ataca()
heroi1.defende()


//corpo de classe 2 com constructor 
class teste2 {
  constructor (nome, idade){
    this.nome = nome
    this.idade = idade
  }

  ataca(){
    console.log(`${this.nome} atacou wins!!!`)
  }
}

//nesse caso o new instacia o constructor junto, assim conseguimos pegar que atacou
const heroi2 = new teste2('batman', 32)
heroi2.ataca()
//obs1 => nesse caso com constructor voce pode antes tudo declacar todos os valores da entidade e apos somente chamar as funcoes da class, assim evitando ainda mais codigo ducplicado

//corpo classe 3 tipos helpers 
class teste3 {
  static anoNascimento(idade){
    return 2020 - idade 
  }
}
const anoNascimento = teste3.anoNascimento(9)
console.log(`${anoNascimento}`)

//obs2 => class static sao tmb conhecidas como funcoes helpers ou utis pois somente retorna um a calculo e nao afeta o codigo

//obs3 => repara tmb que nao tem o new e sem pareteses para essa funcao

//obs4 => na duvida entre usar o com ou sem static use sem pois ele cria dentro da funcao e morre logo apos a funcao foi criada 