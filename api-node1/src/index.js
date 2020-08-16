const express = require ('express')
const app = express()
const cors = require('cors')
const routesUsers = require('../src/routes/routesUsers')

app.use(cors())
app.use(express.json())
app.use(routesUsers)

app.listen(5000)
console.log('app OK em http://localhost:5000/users')