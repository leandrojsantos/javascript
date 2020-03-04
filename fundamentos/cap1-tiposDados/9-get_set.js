/**
 * gets e sets => modificadores ou assessores do javascrit
 * 
 * obs1 => variaveis com underline na frente sao privadas
 * obs2 => get somente aponta para variavel, enquanto set a modifica 
 * obs3 =>
 * 
 */ 

//_nome => uderderline na frente da chave representa conteudo privado 
//toUpperCase => passa todo texto para caixa alta
const pessoa = {
  _nome: '',
  _idade: 32,

  get nome () {
    return this._nome
  },

  set nome (valor) {
    this._nome = valor.toUpperCase()
  },
  
  //ex de propriedade calculada pois verifica a idade e retorna um boolano
  get podeDirigir () {
    return this._idade > 18
  },

  set idade (valor) {
    this._idade = valor
  } 

}

pessoa.nome = 'bruce lee'
console.log(pessoa.nome)
//ate aqut ele podia dirigir a partir usamos set idade ele nao pode mais pois 
pessoa.idade = 17
console.log(pessoa.podeDirigir)
//somente criamos a variavel no set, por isso ele retorna undefined por que ele nao ter a funcao get 
console.log(pessoa.idade)