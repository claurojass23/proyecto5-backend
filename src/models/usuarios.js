const mongoose =require('mongoose')

const usuariosSchema = new mongoose.Schema(
    {
      usuario:String,
      password:{type:String,
        length:[6, 'maximo 6 caracteres']},
    }
)

const  Usuarios = mongoose.model('producto',usuariosSchema)

module.exports = Usuarios
