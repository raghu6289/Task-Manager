const express = require('express')
const mongoSetup = require('./app/database/connect')
const notFound = require('./app/middleware/notFound')
const errorHandler = require('./app/middleware/errorHandler')
const tasks = require('./app/routes/routes')
const app = express()
require('dotenv/config')


// Middlewares

// Convert unto Json data - Middleware
app.use(express.json())

// Loading Static files public - Middleware
app.use(express.static('./public'))

// Routing - Middleware
app.use('/api/v1/tasks', tasks);

// Error Handler - Middleware
app.use(notFound);
app.use(errorHandler);


// port
let port = 3000

// Start the Server as well as Passing Mongo Connection Url
const start = async () => {
  try {
    await mongoSetup(process.env.CONN)
    app.listen(port, () => console.log(`server is running at port ${port}`))

  } catch (err) {
    console.log(err);
  }
}

start()