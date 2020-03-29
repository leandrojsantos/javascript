/**
 * Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido. 
 */

const readfile = require('readline')
const terminal = readfile.createInterface({
    input: process.stdin,
    output: process.stdout
})

// no async await
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, (msg) => {
            if(!msg) return reject(new Error('O campo não pode ser vazio!'))
            return resolve(msg)
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('Qual é seu nome?')
        const telefone = await questionAsync('Qual é seu telefone?')
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    } catch (error) {
        // primeiro!
        console.log('Deu ruim****', error.stack)
    } finally {
        terminal.close()
    }
}

main()
