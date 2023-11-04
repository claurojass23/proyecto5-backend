const { Router } = require('express')
const multer = require('multer');
const { extname } = require('path');



const { buscarProducto,
    newProducto,
    eliminarProducto,
    modificarProducto, getProductos } = require('../controllers/productosControllers.js')

   

    const MIMETYPES = ['image/jpeg', 'image/png'];

 const multerUpload = multer({
    storage: multer.diskStorage({
        destination: `${__dirname}/../uploads`,
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];

            cb(null, `${fileName}${fileExtension}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (MIMETYPES.includes(file.mimetype)) cb(null, true);
        else cb(new Error(`Only ${MIMETYPES.join(' ')} mimetypes are allowed`));
    },
    limits: {
        fieldSize: 10000000,
    },
  });





const productos = (server) => {
    const router = Router()
    server.use('/productos', router)
    router.get('/buscarProd', buscarProducto)
    router.get('/getProdList', getProductos)
    router.post('/crearProd', multerUpload.single('file'), newProducto)
    router.put('/modificarProd/:id', modificarProducto)
    router.delete('/eliminarProd/:id', eliminarProducto)
}

module.exports = productos

