/**
 * A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avalida depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.
 */


// enquanto ela nao mudar, nada para!
let termoDeParada = true
let contador = 0

while (termoDeParada) {
    termoDeParada = contador < 10
 
    if (contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    contador += 1
    
}

//roda a primeira vez e testa variavel depois
do {
    console.log('Vai executar uma vez! pois termoDeParada é', termoDeParada)
} while (termoDeParada);

while (termoDeParada) {
    console.log('Nao vai executar!')
}

//obs while e muito usa em jogos 