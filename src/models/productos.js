const mongoose =require('mongoose')

const prosuctoSchema = new mongoose.Schema(
    {
       /* img:String, */
       nombre:String,
       descripcion:String,
       precio:Number,
       existencias:Number,
       
    }
    
)

const  Producto = mongoose.model('producto',prosuctoSchema)

module.exports = Producto

