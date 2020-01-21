const express = require ('express')

//app, server ou nome que deseje dar = a instancia do express
const app = express()

//.use = a plugin da aplicao 
app.use(express.json())

/**
 * toda funcao de rotas recebe dois paramentos req, res ou requise, responde para :
 * 1. nao deixa o front em loop
 * 2. fazer algo que na rota pode 
 * 3. toda res tem que em formato .json para navegadot entenda
 */

/**
 * Rotas sao Metodos http: get/put/post/delete 
 * Tipos de parametros usados nesses metodos: 
 * 
 * 1. Query params = ?test=1 => usado em get atraves de request.query (geralmente para filtros/ordenacao/paginacao etc...)
 * 
 * 2. Route params = /users/1 => usado em put/delete atraves de request.params (identificar um recurso para sua alteracao ou remocao)
 * 
 * 3. Body = {"nome":"chapolin", "poder": "marreta-bionica"} => usado em post/put atraves de request.body (sao dados para criacao ou alteracao de um registro)
 */

/**
 * usar isomnia ou postman para ver resultados 
 */

const users = ['t1', 't2', 't3', 't4', 't5']

//consumindo middlewares como rota gobal e a usando para retorna o metodo e rota 
//obs => sem next ele fica travado nessa rota 
app.use((req, res, next)=>{
  console.time('Resquest');
  console.log(`Metodo: ${req.method} || URL: ${req.url}`)

  next()

  console.timeEnd('Resquest')
})

//consumindo middlewares como rota local no caso ele testa existe o name para requisicoes que sao necessaria 
function userName(req, res, next) {

  if(!req.body.name){
    return res.status(400).json({ error: 'user name is required'})
  }

  return next()
}

//consumindo middlewares como rota local no caso ele testa existe o index no array de users para requisicoes que sao necessaria 
function userArray(req, res, next) {

  if(!users[req.params.index]){
    return res.status(400).json({ error: 'user not exists'})
  }

  return next()
}

//consumido rota normal
app.get('/users',(req, res)=>{
  return res.json(users)
})

//consumido rota params = `${nome_da_variavel}` no lugar da variavel usar que deseja retornar = http://localhost:5000/users?nome=chapolin
app.get('/users', (req, res)=>{
  const { name } = req.params

  return res.json({ message: `nao contava com minha atucia ${name}`})
})

//consumido rota routes = apos o endereco da rota normal e obrigatorio /:nome_da_variavel = http://localhost:5000/users/3
app.get('/users/:index', userArray, (req, res)=>{
  const { index } = req.params 

  return res.json(users[index])
})

//consumido rota body = para criacao no corpo da rota envia as informacoes desejada
//obs=> nesse exemplo pode ser add com push pois os users nao estao em um database
app.post('/users', userName, (req, res)=>{
  const { name } = req.body

  users.push(name)

  return res.json(users)
})

app.put('/users/:index', userName, userArray, (req, res) =>{
  const { index } = req.params 
  const { name } = req.body

  users[index] = name

  return res.json({message: "edit sucess"})
})

//splice = percorre todo array e retorna 
app.delete('/users/:index', userArray, (req, res)=>{
  const { index } = req.params

  users.splice(index, 1)

  return res.json({message: "del sucess"})
})


app.listen(5000)
console.log('app OK em http://localhost:5000/users')