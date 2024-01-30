function emocionesExpresadas(emocion) {
    var emociones = {
        feliz: "😄",
        triste: "😞",
        enojado: "😠",
        ansioso: "😰",
        enamorado: "😍"
    };

    var emoji = emociones[emocion.toLowerCase()];

    if (emoji) {
        return emoji;
    } else {
        return "Por favor, ingresa una emoción válida.";
    }
}

var emocionFinal = emocionesExpresadas("feliz");
console.log("Hoy te sientes: " + emocionFinal);

emocionFinal = emocionesExpresadas("furioso");
console.log("Hoy te sientes: " + emocionFinal);

