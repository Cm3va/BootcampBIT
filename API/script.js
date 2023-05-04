function buscarPersonaje(url = "https://rickandmortyapi.com/api/character") {
    fetch(url).then(respuesta => {
        console.log(respuesta)
        respuesta.json().then(datos => {
            console.log(datos)
            imprimirPersonajes(datos)
        })
    })
        .catch(error => console.log(error));
};

function imprimirPersonajes(list = []) {
    list.results.forEach(personaje => {
        document.querySelector("#printer").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">${personaje.status}</p>
            <p class="card-text">${personaje.species}</p>
            <p class="card-text">${personaje.location.name}</p>
            </div>
        </div>
        `;
    })
    document.querySelector("#printer").innerHTML += `
    <button type="button" onclick="buscarPersonaje('${list.info.next}')">next</button>
    <button type="button" onclick="buscarPersonaje('${list.info.prev}')">prev</button>
    
    `
}

buscarPersonaje();