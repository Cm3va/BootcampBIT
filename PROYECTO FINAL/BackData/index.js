// console.log('texto de prueba para nodemon')

/* CREACIÓN DEL SERVIDOR */
const express = require('express'); //llamada del servicio de express
const conectarDB = require('./config/db'); //llamamos el archivo db.js de la carpeta config

//creamos el servidor
const app = express(); //Implementación del servicio

//conectamos a la BD
conectarDB(); //llamamos la función

app.use(express.json());

app.use('/api/productos', require('./routes/routes'));

// //Definimos ruta principal
// app.get('/', (req, res)=>{
//     res.send('Hola mundo')
// })

//Creación del servidor para ejecutarlo en http://localhost:4000/
app.listen(4000, () => {
    console.log("El servidor esta arriba")
})