var ingredientePrincipal = ["los tomates marcianos", "los huevos bioluminiscentes", "las milanesa de micelio alienígena", "las albóndigas de calamar galáctico"];
var ingredienteGuarnicion = ["Pure de estrellas", "piedra gomosa lunar", "ensalada de protones", "algas uraneanas"];
var metodoCocina = ["la olla de gravedad 0", "los rayos gamma 2.5 comestibles", "la fusión de átomos controlada", "la resonancia molecular"];

function receta(){ 
    var ingredienteAleatorio = ingredientePrincipal[Math.floor(Math.random() * ingredientePrincipal.length)];
    var guarnicionAleatoria = ingredienteGuarnicion[Math.floor(Math.random() * ingredienteGuarnicion.length)];
    var metodo = metodoCocina[Math.floor(Math.random() * metodoCocina.length)];

    var nuevaReceta = `Deleitate el paladar con la siguiente receta!
    1. Pon ${ingredienteAleatorio} a cocinar usando ${metodo}
    2. Mientras se cocina, prepara una rica guarnición de ${guarnicionAleatoria} para acompañar nuestro plato principal
    3. Emplata y disfruta de esta comida con un buen Vino Cosecha Andrómeda 2589!`;

    return nuevaReceta;
}
    console.log(receta());