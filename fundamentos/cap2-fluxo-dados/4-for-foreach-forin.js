/**
 * O for leva três instruções dentro dele:

let i = 0, que é executado antes do início do loop
i < 10, que é a condição para executar o bloco de código dentro do seu loop
i++, que é executado após cada iteração do seu loop
O resultado dessas três instruções é que o forloop executa o código dentro dele, o que é console.log(i). Nossos icomeça em 0, e enquanto i é menor do que 10, 
vamos executar o bloco de código. No entanto, após cada loop, adicionamos 1 ao nosso i, como mostra a terceira instrução i++
 */


const textoPar = "par"
const textoImpar = "impar"
// imprimir se é par ou impar até o 10
// nao precisa criar variavel externa
for(let index =0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar : textoImpar
    console.log(`O numero ${index} é: ${decisao}`)
}


const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder:'Veloz'
    },
    {
        id: Math.random(),
        nome: "Mariazinha",
        superPoder: "Super força"
    }
]

//for in
for(let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index]
    console.log(`
    id: ${item.id}
    Nome: ${item.nome},
    `)
}

// nao precisa do contador 
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log(`Nome`, item.nome)
}

// nao precisa criar o item for each
for(const item of minhaListaDeTarefas) {
    console.log('Nome item', item.nome)
}


/**
 * obs 1 => forEach mantém escopo da variável no bloco
A coisa boa forEaché que a função de retorno de chamada dentro dela permite manter essa variável dentro do forEachescopo da. 
Se você atribuiu uma variável fora e a reutiliza dentro de forEach, a variável externa retém seu valor
*
* obs 2 => Menor chance de erros acidentais com forEach
Ao usar o forEachmétodo, você está chamando o Array.prototypemétodo em relação à matriz diretamente. 
Quando você usa um forloop, precisa configurar uma variável para incrementar indece (i), uma condição a seguir e o incremento real em si.
*/