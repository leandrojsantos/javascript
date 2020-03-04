/**
 * contexto de escopo
 */
console.log()//usado para retorna algo no terminal
console.log('keys' , Object.keys({ nome: 'rock balboa'}))//retorna chaves do objeto
console.log('values', Object.values({ nome: 'rock balboa'}))//retorna valor do objeto
console.log('now', Date.now())//retorna data em milisegundos de hoje ate 1970, que quando linux foi lancado 
console.log('random', Math.random())//retorna um numero aleratorio

/**
 * contexto de global (this) funcoes do node.js
 */
console.log('global', global)//retorna todas as funcoes do pre-criadas node 