const Router = require('express')
const {getUser, crateUser, updateUser, deleteUser} = require('../controllers/usuarios')

function usuario(app){
    const router = Router()
    app.use('/user',router)

    router.get('/',getUser)

    router.post('/',crateUser)

    router.put('/:id',updateUser)

    router.delete('/:id',deleteUser)
    
}