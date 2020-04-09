class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this

    constructor({
        tela
    }) {
        this.tela = tela

        this.heroisIniciais = [
            // relativo ao index.html pois será carregado lá
            {
                img: './arquivos/batman.png',
                nome: 'batman'
            },
            {
                img: './arquivos/aranha1.png',
                nome: 'aranha1'
            },
            {
                img: './arquivos/aranha2.png',
                nome: 'aranha2'
            },
            {
                img: './arquivos/meme1.png',
                nome: 'meme1'
            },
            {
                img: './arquivos/meme2.png',
                nome: 'meme2'
            },
            {
                img: './arquivos/meme3.png',
                nome: 'meme3'
            },
            {
                img: './arquivos/deadpool.png',
                nome: 'deadpool'
            },
            {
                img: './arquivos/demolidor.png',
                nome: 'demolidor'
            },
            {
                img: './arquivos/frank.png',
                nome: 'frank'
            },
            {
                img: './arquivos/grunt.png',
                nome: 'grunt'
            },
            {
                img: './arquivos/hulk.png',
                nome: 'hulk'
            },
            {
                img: './arquivos/mulhermaravilha.png',
                nome: 'mulhermaravilha'
            },
            {
                img: './arquivos/wolverine.png',
                nome: 'wolverine'
            },
            {
                img: './arquivos/nick.png',
                nome: 'nick'
            },
            {
                img: './arquivos/default.png',
                nome: 'default'
            },
            {
                img: './arquivos/hulk2.png',
                nome: 'hulk2'
            }

        ]

    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        // 2o - vamos precisar importar a tela para fazer alterações nela
        // 3o - chamar a funcao de tela apara atualizar as imagens
        this.tela.atualizarImagens(this.heroisIniciais)
    }

}