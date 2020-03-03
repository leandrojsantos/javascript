/**
 * gets e sets => modificadores ou assessores do javascrit
 */

//_nome => onderline na frente da chave representa conteudo privado 
const pessoa = {
  _nome: '',
  _idade: 32,

  get nome () {
    return this._nome
  },

  set nome (valor) {
    this._nome = valor.toUpperCase()
  },
  
  get podeDirigir () {
    return this._idade > 18
  },

  set idade (valor) {
    this._idade = valor
  } 

}

pessoa.nome = 'bruce lee'
//pessoa.idade = 17
console.log(pessoa.nome)
console.log(pessoa.podeDirigir)