const express = require("express")
const cors = require("cors")

const swaggerUI = require("swagger-ui-express")
const swaggerDoc = require('./swagger/swagger')
const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";


const app = express()
app.use(cors())
app.use(express.json())

const todoRoutes = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')

app.get('/', (req, res) => {
    res.send("hello from server")
})

app.use('/api/todos', todoRoutes)
app.use('/api/auth', userRoutes)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc,
    {
        customCss: '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
        customCssUrl: CSS_URL
    }
))

module.exports = app