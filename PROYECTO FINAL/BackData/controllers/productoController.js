const productos = require("../models/Producto")
exports.crearProducto = async(req, res) => {
    // console.log('creando producto desde el controlador')
    console.log(req.body);
    //definimos la respuesta de la api dependiendo del estado recibido
    try {
        //declaramos la variable principal
        let producto;
        //instanciamos el modelo del componente para enviar la data
        producto = new productos(req.body);
        //indicamos como respuesta el nuevo documento creado
        await producto.save();
        //mandamos como respuestqa el nuevo documento creado
        res.send(producto);
    } catch (error){
        console.log (error);
        //error interno del servidor
        //https://developer.mozilla.org/es/docs/Web/HTTP/Status
        res.status(500).send('Ups... hubo un error');//si el estado es 500 se le enviara este mensaje de error al usuario
    }
}

//metodo para obtener todos los productos
exports.obtenerProductos = async(req, res) => {
    try {
        const dataProductos = await productos.find();
        res.json(dataProductos);
    } catch (error) {
        console.log(error);
        //error interno del servidor
        //https://developer.mozilla.org/es/docs/Web/HTTP/Status
        res.status(500).send('Ups... hubo un error');//si el estado es 500 se le enviara este mensaje de error al usuario

    }

}