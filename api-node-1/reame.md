# Api node

Obs e comentario sobre o projeto:

>No arquivo index.js:

1. App, server ou nome que deseje dar = a instancia do express

        const express = require ('express')

2. app.use = a plugin da aplicao 

        app.use(express.json())

3. app.listen = a porta app e executado

        app.listen(5000)

>No arquivo routesUsers.js

1. Toda funcao de rotas recebe dois paramentos req, res ou requise, responde para :
 * nao deixa o front em loop
 * fazer algo que na rota pode 
 * toda res tem que em formato .json para navegadot entenda

2. Rotas sao Metodos http: get/put/post/delete 

    Tipos de parametros usados nesses metodos: 
 
 * Query params = ?test=1 => usado em get atraves de request.query (geralmente para filtros/ordenacao/paginacao etc...)
  
 * Route params = /users/1 => usado em put/delete atraves de request.params (identificar um recurso para sua alteracao ou remocao)
 
 * Body = {"nome":"chapolin", "poder": "marreta-bionica"} => usado em post/put atraves de request.body (sao dados para criacao ou alteracao de um registro)

 3. Usar isomnia ou postman para ver resultados 

 4. Users e usando dessa maneira pois nao ha database conectado

         const users = ['t1', 't2', 't3', 't4', 't5']

5. Consumindo middlewares como rota gobal e a usando para retorna o metodo e rota 

    obs => sem next ele fica travado nessa rota 

        routesUsers.use((req, res, next)=>{
        console.time('Resquest');
        console.log(`Metodo: ${req.method} || URL: ${req.url}`)

        next()

        console.timeEnd('Resquest')
        })

6. Consumindo middlewares como rota local no caso ele testa existe o name para requisicoes que sao necessaria 

        function userName(req, res, next) {

        if(!req.body.name){
          return res.status(400).json({ error: 'user name is required'})
        }

        return next()
        }

7. Consumindo middlewares como rota local no caso ele testa existe o index no array de users para requisicoes que sao necessaria 

        function userArray(req, res, next) {

        if(!users[req.params.index]){
          return res.status(400).json({ error: 'user not exists'})
        }

        return next()
        }

8. Consumido rota normal

        routesUsers.get('/users',(req, res)=>{
          return res.json(users)
        })

9. Consumido rota params = `${nome_da_variavel}` no lugar da variavel usar que deseja retornar = http://localhost:5000/users?nome=chapolin

      routesUsers.get('/users', (req, res)=>{
        const { name } = req.params

        return res.json({ message: `nao contava com minha atucia ${name}`})
        })

10. Consumido rota routesUsers = apos o endereco da rota normal e obrigatorio /:nome_da_variavel = http://localhost:5000/users/3

        routesUsers.get('/users/:index', userArray, (req, res)=>{
          const { index } = req.params 

          return res.json(users[index])
          })

11. Consumido rota body = para criacao no corpo da rota envia as informacoes desejada

    obs=> nesse exemplo pode ser add com push pois os users nao estao em um database

        routesUsers.post('/users', userName, (req, res)=>{
          const { name } = req.body

          users.push(name)

          return res.json(users)
        })

12. Splice = percorre todo array e retorna 

        routesUsers.delete('/users/:index', userArray, (req, res)=>{
          const { index } = req.params

          users.splice(index, 1)

          return res.json({message: "del sucess"})
        })

13. module.exports = exporta rotas

        module.exports = routesUsers

>Para iniciar o projeto:

1. Clone a pasta do projeto javascript-basico pelo terminal use o comando, no local onde deseja que pasta seja clonada

        git clone https://github.com/leandrojsantos/javascript-basico.git

2. Istalacao das bibliotecas usadas usando o terminal navegue ate a pasta api-node-1 e use o comando

        yarn

3. Start no projeto usar comando

        yarn dev
