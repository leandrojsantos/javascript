/**
 * Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Como a maioria das pessoas consomem promisses já criadas, este guia explicará o consumo de promisses devolvidas antes de explicar como criá-las.

Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
 */

const readfile = require('readline')
const terminal = readfile.createInterface({
    input: process.stdin,
    output: process.stdout
})

//**ver callbak
// terminal.question('Qual é seu nome?\n', nome => {
//     terminal.question('Qual é seu telefone?\n', telefone => {
//         console.log(`Nome: ${nome}, Telefone: ${telefone}`)
//         terminal.close()
//     })
// })

//**ver promise 
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ''
let telefone = ''

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome?'))
    .then(resposta => {
        if (!resposta) {
            throw new Error('Nome vazio!')
        }
        nome = resposta
    })
    .then(() => questionAsync('Qual é o seu telefone?'))
    .then((resposta) => {
        if (!resposta) {
            throw new Error('Telefone vazio!')
        }
        telefone = resposta
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.log('Deu ruim****', error.stack)
    })
    .finally(() => terminal.close())

    //obs1 => cada .then herdar valor do anterior