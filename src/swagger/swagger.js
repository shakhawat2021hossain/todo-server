const swaggerJSdoc = require("swagger-jsdoc")
const path = require('path');

const swaggerOpt = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'To-Do API',
      version: '1.0.0',
      description: 'API to manage to-do items',
    },

  },
  apis: [
    path.join(__dirname, '../routes/todoRoutes.js'),
    path.join(__dirname, "../routes/userRoutes.js")
  ]
}

const swaggerDoc = swaggerJSdoc(swaggerOpt)
// console.log(swaggerDoc);

module.exports = swaggerDoc;