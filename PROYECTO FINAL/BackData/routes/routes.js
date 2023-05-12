//rutas para producto
const express = require ('express'); //importamos el servidor de express
const router = express.Router(); //llamamos para controlar las rutas junto con express
const productoController = require('../controllers/productoController'); 

// //api/productos
// router.post('/', () => {
//     console.log('Creando producto...'); //Sera la primera respuesta qeu recibamos al testearlo con el postman
// })

//configuramos la ruta usando el controlador
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos); 

module.exports = router //exportamos el modulo de rutas