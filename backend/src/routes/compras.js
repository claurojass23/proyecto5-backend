const{Router} = require('express')
const compra = require('../controllers/compras')

function compra(app){
    const router = Router()
    app.use('/compra',router)

    router.get('/',(req,res)=>{
      return res.json({
         success:true
      })
    })
}

module.exports = compra