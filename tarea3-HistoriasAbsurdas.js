var personajes = ["Ratón gigante", "Elefante petizo", "Robot con 10 brazos", "Perro astronauta", "Loro gruñón"];
var accion = ["bailar salsa en el barro", "comer cáscaras de bananas", "viajar por el universo", "dormir bajo la lluvia"];
var motivo = ["la mama no lo veía", "era en fin de semana", "su amigo fantasma lo acompañaba", "nevaba en Júpiter"];

function crearHistoria(){ 
    var personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    var accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    var motivoAleatorio = motivo[Math.floor(Math.random() * motivo.length)];

    var nuevahistoria = "Había una vez un " + personajeAleatorio + " al que le gustaba " + accionAleatoria + " solamente cuando " + motivoAleatorio + ". Estaba loco!"; 
    return nuevahistoria;
}
    console.log(crearHistoria());