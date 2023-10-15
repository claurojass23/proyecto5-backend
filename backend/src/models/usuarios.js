const mongoose =require('mongoose')

const usuariosSchema = new mongoose.Schema(
    {
      usuario:String,
      password:String,
       
    }
)

const  Usuarios = mongoose.model('producto',usuariosSchema)

module.exports = Usuarios
