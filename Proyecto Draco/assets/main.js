const app = document.getElementById('efectoEscritura');

const typewriter = new Typewriter (app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('2500 metros mas cerca de las estrellas')
    .pauseFor(200)
    .start();