const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const todoRoutes = require('./routes/todoRoutes')

app.get('/', (req, res) =>{
    res.send("hello from server")
})

app.use('/api/todos', todoRoutes)

module.exports = app