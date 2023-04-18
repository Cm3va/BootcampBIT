let dia_actual = process.openStdin();
dia_actual.addListener("data",(data) => {
    if (data == "lunes"){
        console.log("Hoy puedes comer una pizza")
    }else if(data == "martes"){
        console.log("hoy comemos arroz con pollo")
    }else if(data == "miercoles"){
        console.log ("hoy comemos tacos a la birria")
    }else if(data == "jueves"){
        console.log("hoy comemos hamburguesa")
    }else if(data == "viernes"){
        console.log("hoy comemos carne a la planca")
    }else{
        console.log("Es fin de semana, comamos lo que queramos")
    }
    process.exit()
})

