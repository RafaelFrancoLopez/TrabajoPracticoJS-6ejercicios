var nombres = ["Xaltron", "Zirec", "Irvine", "Koval", "Unjasu"];
var color = ["Rojo", "Marrón", "Translúcido", "Violeta", "Negro"];
var fenomenos = ["Aureolas boreales", "Lluvia de estrellas", "Colisión atmosférica", "Tsunamis Gaseosos", "Tormenta electromagnética"];
var quimicos = ["Oro", "Cobre", "Mercurio", "Plata", "Aluminio"];

function planetaAleatorio(){
    var nombrePlaneta = nombres[Math.floor(Math.random() * nombres.length)];
    var colorPlaneta = color[Math.floor(Math.random() * color.length)];
    var fenomenosPlaneta = fenomenos[Math.floor(Math.random() * fenomenos.length)];
    var quimicosPlaneta = quimicos[Math.floor(Math.random() * quimicos.length)];

    return `El Planeta ${nombrePlaneta}, conocido como planeta ${colorPlaneta}
    tiene un curioso secreto. Se cree que debido a su núcleo completamente
    formado por ${quimicosPlaneta}, atrae y logra formar lo que se conoce como
    ${fenomenosPlaneta}. `
}

console.log(planetaAleatorio());