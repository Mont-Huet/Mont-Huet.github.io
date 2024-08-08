var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ing. En sistemas computacionales | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes programar!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('')
    .pauseFor(2500)
    .start();