import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import notFoundHandler from './middlewares/notFoundHandler.js'
import errorHandler from './middlewares/errorHandler.js'
import indexRouter from './router/indexRouter.js'

const server = express()
server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.get('/', (req, res, next)=>{
    res.status(200).json({
        response: 'Bienvenido a la API desde /',
        error: false,
        success: true
    })
})

server.use(notFoundHandler)

server.use(errorHandler)

server.listen(process.env.PORT, ()=>{
    console.log('Servidor Corriendo en Puerto: ' + process.env.PORT)
})