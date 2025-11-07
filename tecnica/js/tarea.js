// FILA 2: Contar cuántas palabras tiene una frase

function contarEspacio(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

function contarpalabras(){
const frases = [prompt("igresa la frase")]
    const letra = " ";
    for (let i = 0; i < frases.length; i++) {
        let resp = contarEspacio(frases[i], letra);
        alert(`la frase "${frases[i]}" tiene ${resp + 1} palabras.`);
    }
}

contarpalabras()

/*
// 2. Contar cuántas veces aparece una letra en una frase
function contarLetra(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

function contarLetraArreglo() {
    const frases = ["Me encanta el café", "Estudio programación"];
    const letra = "e";
    for (let i = 0; i < frases.length; i++) {
        let resp = contarLetra(frases[i], letra);
        console.log(`En '${frases[i]}', la '${letra}' aparece ${resp} veces.`);
    }
}
*/