const express = require('express')
const cors = require('cors')
const auth = require('./src/routes/auth')
const productos = require('./src/routes/productos.js')


require('dotenv').config()


const connect = require('./src/config/db')
const server = express()


server.use(cors())

server.use(express.json())

connect(process.env.MONGO_URL)
auth(server)
productos(server)

server.get('/',(req,res)=>{
    res.send("API V1.0")
})

server.listen(process.env.PORT,()=>{
 console.log("servidor iniciado en el puerto",process.env.PORT)
})


 
