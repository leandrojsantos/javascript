const { Router } = require ('express')
const routesUsers = Router()

const users = ['t1', 't2', 't3', 't4', 't5']

routesUsers.use((req, res, next)=>{
  console.time('Resquest');
  console.log(`Metodo: ${req.method} || URL: ${req.url}`)

  next()

  console.timeEnd('Resquest')
})

function userName(req, res, next) {

  if(!req.body.name){
    return res.status(400).json({ error: 'user name is required'})
  }

  return next()
}

function userArray(req, res, next) {

  if(!users[req.params.index]){
    return res.status(400).json({ error: 'user not exists'})
  }

  return next()
}

routesUsers.get('/users',(req, res)=>{
  return res.json(users)
})

routesUsers.get('/users', (req, res)=>{
  const { name } = req.params

  return res.json({ message: `nao contava com minha atucia ${name}`})
})

routesUsers.get('/users/:index', userArray, (req, res)=>{
  const { index } = req.params 

  return res.json(users[index])
})

routesUsers.post('/users', userName, (req, res)=>{
  const { name } = req.body

  users.push(name)

  return res.json(users)
})

routesUsers.put('/users/:index', userName, userArray, (req, res) =>{
  const { index } = req.params 
  const { name } = req.body

  users[index] = name

  return res.json({message: "edit sucess"})
})

routesUsers.delete('/users/:index', userArray, (req, res)=>{
  const { index } = req.params

  users.splice(index, 1)

  return res.json({message: "del sucess"})
})

module.exports = routesUsers