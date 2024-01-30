var nombres1 = ["Gato", "Elefante", "Árbol", "Lobo", "Dragón"];
var nombres2 = ["Eléctrico", "Nórdico", "Trompetista", "Maldito", "Rosado"];

function crearNombre(){ 
    var primerNombre = nombres1[Math.floor(Math.random() * nombres1.length)];
    var segundoNombre = nombres2[Math.floor(Math.random() * nombres1.length)];

    var nombreCompleto = primerNombre + " " + segundoNombre; 
    return nombreCompleto;
}
    console.log(crearNombre());


