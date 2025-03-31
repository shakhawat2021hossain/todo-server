const express = require("express")
const cors = require("cors")

const swaggerUI = require("swagger-ui-express")
const swaggerDoc = require('./swagger/swagger')

const app = express()
app.use(cors())
app.use(express.json())

const todoRoutes = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')

app.get('/', (req, res) =>{
    res.send("hello from server")
})

app.use('/api/todos', todoRoutes)
app.use('/api/auth', userRoutes)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

module.exports = app