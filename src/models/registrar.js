const mongoose =require('mongoose')

const registroSchema = new mongoose.Schema(
    {
        name:String,
        lastname:String,
        email:String,
        password:String

        
    }
)

const  Registro = mongoose.model('registro',registroSchema)

module.exports = Registro
