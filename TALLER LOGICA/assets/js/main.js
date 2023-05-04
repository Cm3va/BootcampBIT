//cSpell:disable
/* Ejercicio 1 */
// Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.
function sumatoria(){
    let numSum = document.querySelector("#numUsuario")
    numSum = parseInt(numSum.value)
    let x = 0
    let z = 0
    while (x<=numSum) {
        z = z + x
        x++
        console.log(z)
    }
    return numSum
    }
/* Ejercicio 1 */


/* Ejercicio 2 */
// Se necesita validar si un número ingresado por el usuario es par o impar.
function valNum() {
    let numeroacomprobar = document.querySelector("#numValid")
    if (parseInt(numeroacomprobar.value) === 0){
    console.log (`El numero: ${numeroacomprobar} es cero`);
    } if (parseInt(numeroacomprobar.value) % 2 === 0) {
        console.log(`El numero: ${numeroacomprobar} es par`);
    } else {
        console.log(`El numero: ${numeroacomprobar} es impar`)
    }
}
/* Ejercicio 2 */

/* Ejercicio 3 */
// La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, 
//se tienen las siguientes validaciones:
// Si es un niño menor a 10 años, debe ir a reclamar un jugo.
// Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza. 
// Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
// O si es un hombre debe reclamar adicionalmente una porción de pizza tres carnes.
// Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.
function pizzeria() {
    let sexoCompro = document.querySelector("#Genero")
    let edadCompro = document.querySelector("#Edad1")
    edadCompro = parseInt(edadCompro.value)
    if (sexoCompro.value == "mujer") {
        if (edadCompro <= 10) {
            console.log (`Reclamar Jugo y Pizza Hawaiana`)
        } else if ( edadCompro >= 18){
            console.log (`Reclamar Cerveza y Pizza Hawaiana`)
        } else{
            console.log (`No tiene Premio`)
        }
    } else if (sexoCompro.value =="hombre"){
        if (edadCompro <= 10) {
            console.log (`Reclamar Jugo y Pizza tres carnes`)
        } else if ( edadCompro >= 18){
            console.log (`Reclamar Cerveza y Pizza tres carnes`)
        }else{
            console.log (`No tiene Premio`)
        }
    } else {
    console.log (`Digite Correctamente los Datos Solicitados, no sea pendejo/a`)
}
}
/* Ejercicio 3 */

/* Ejercicio 4 */
//Se necesita crear un menú de opciones, donde la persona escriba que quiere de comer, 
//se le vaya sumando el valor a lo seleccionado hasta que el usuario escriba pagar, 
//Una vez termine de comprar, se le debe mostrar el valor que debe pagar. 
//(El menú y precios lo decide el  programado@r.)



/* Ejercicio 4 */

/* Ejercicio 5 */
//Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, 
//adicionalmente, se debe mostrar el total de las multiplicaciones.
function ejercicio5() {
    let numeroacomprobar1 = document.querySelector("#nuMult")
    let x = 1
    let z = parseInt(numeroacomprobar1.value)
    let a = 0
    while (x <= 10) {
        z = numeroacomprobar1*x
        console.log (`La tabla de multiplicar del numero: ${numeroacomprobar1}  es :  ${numMult} * ${x} = ${z}`)
        x++
        a=a+z
    }
    console.log(`La sumatoria de los multiplos es: ${a}`)
}
/* Ejercicio 5 */

/* Ejercicio 6 */
// Validar cual es el valor de matrícula (1’000.000) que debe pagar un estudiante, teniendo en cuenta que:
// Si el promedio fue menor a 3 no se le descuenta nada.
// Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
// Cuando el promedio sea mayor que 4, se le descuenta 50%
function ejercicio6() {
    let numeroacomprobar6 = document.querySelector("#valorPromedio")
    let x = parseInt(numeroacomprobar6.value)
    let matricula = 1000000
    let descuento = 0
    if (x>=3 && x<4) {
        descuento = matricula*0.05
        console.log(`El descuento es de: ${descuento}`)
    } else if (x>=4 && x<=5) {
        descuento = matricula*0.5
        console.log(`El descuento es de: ${descuento}`)
    } else if (x>=0 && x<3) {
        console.log(`No tienes descuento`)
    } else {
        console.log (`Digite un numero valido`)
    }
}


/* Ejercicio 6 */

// /* Ejercicio Promesa */
// const eProm = new Promise((resolve, reject) => {
//     let x = 2
//     if ((x == 0)) {
//         return resolve({res: `El numero es cero`})
//     } 
    
//     if ((x % 2) == 0) {
//         return resolve({res: `El numero es par`})
//     } else {
//         return reject({res: `El numero es impar`})
//     }
// })

// eProm
//     .then((par)=>{
//         console.log(par)
//     })
//     .catch((impar)=> {
//         console.log(impar)
//     })
// /* Ejercicio Promesa */