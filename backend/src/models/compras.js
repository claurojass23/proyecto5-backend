const mongoose =require('mongoose')

const comprasSchema = new mongoose.Schema(
    {
      producto:{productoID: {type: mongoose.ObjectId, ref:'productos'}},
      cantidad:Number,
      preciototal:Number,
      mododeentrega:String

    }
    
)

const  Compras = mongoose.model('compra',comprasSchema)

module.exports = Compras 