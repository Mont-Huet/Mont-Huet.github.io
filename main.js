//console.log("Hola Mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Ing. en sistemas computacionales|Desarrolladora Frontend Jr")
    .pauseFor(2500)
    .deleteAll()
    .start();