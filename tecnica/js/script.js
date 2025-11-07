debugger 

                                                                                    //BLOQUE 1 Y 2

// 1. Contar caracteres de una palabra
function contarCaracter(palabra) {
    return palabra.length;
}

function contarCaracterArreglo() {
    const palabras = ["Manzana", "Pera", "Sandía"]; 
    for (let i = 0; i < palabras.length; i++) {
        let resp = contarCaracter(palabras[i]);
        console.log(`'${palabras[i]}' tiene ${resp} letras.`);
    }
}

// contarCaracterArreglo();

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

// contarLetraArreglo();

// 3. Invertir una palabra
function invertirTexto(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
}

function invertirTextoArreglo() {
    const textos = ["Quito", "Lima"];
    for (let i = 0; i < textos.length; i++) {
        let resp = invertirTexto(textos[i]);
        console.log(`'${textos[i]}' → '${resp}'`);
    }
}

// invertirTextoArreglo();

// 4. Comparar longitudes de dos cadenas
function compararLongitudes(cad1, cad2) {
    if (cad1.length > cad2.length) {
        return `'${cad1}' tiene más letras que '${cad2}'.`;
    } else if (cad2.length > cad1.length) {
        return `'${cad2}' tiene más letras que '${cad1}'.`;
    } else {
        return `'${cad1}' y '${cad2}' tienen la misma cantidad de letras.`;
    }
}

function compararLongitudesArreglo() {
    const pares = [["García", "Pérez"], ["Lopez", "Ramirez"]];
    for (let i = 0; i < pares.length; i++) {
        let resp = compararLongitudes(pares[i][0], pares[i][1]);
        console.log(resp);
    }
}

// compararLongitudesArreglo();

// 5. Obtener iniciales de un nombre completo
function obtenerIniciales(nombreCompleto) {
    let partes = nombreCompleto.split(" ");
    let resultado = "";
    for (let i = 0; i < partes.length; i++) {
        if (partes[i].length > 0) {
            resultado += partes[i][0].toUpperCase() + ".";
        }
    }
    return resultado;
}

function obtenerInicialesArreglo() {
    const nombres = ["Ana María Torres", "Juan Carlos Pérez"];
    for (let i = 0; i < nombres.length; i++) {
        let resp = obtenerIniciales(nombres[i]);
        console.log(`'${nombres[i]}' → ${resp}`);
    }
}

// obtenerInicialesArreglo();

// FILA 1: remplazar un caracter con otro (si lo encuentra) siempre y cuando este al inicio o al final.
// FILA 2: 

// 6. Reemplazar todas las 'o' por '#'
function reemplazarCaracteres(texto) {
    let nuevo = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'o') {
            nuevo += "#";
        } else {
            nuevo += texto[i];
        }
    }
    return nuevo;
}

function reemplazarCaracteresArreglo() {
    const textos = ["Programador", "Motor"];
    for (let i = 0; i < textos.length; i++) {
        let resp = reemplazarCaracteres(textos[i]);
        console.log(`'${textos[i]}' → '${resp}'`);
    }
}

// reemplazarCaracteresArreglo();

// 7. Verificar si una palabra es palíndromo
function esPalindromo(palabra) {
    let invertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }
    return palabra.toLowerCase() === invertida.toLowerCase();
}

function esPalindromoArreglo() {
    const palabras = ["radar", "oso", "casa"];
    for (let i = 0; i < palabras.length; i++) {
        let resp = esPalindromo(palabras[i]);
        if (resp) {
            console.log(`'${palabras[i]}' → es palíndromo`);
        } else {
            console.log(`'${palabras[i]}' → no es palíndromo`);
        }
    }
}

// esPalindromoArreglo();

// 8. Comparar dos frases y determinar cuál tiene más caracteres
function compararFrases(frase1, frase2) {
    if (frase1.length > frase2.length) {
        return `'${frase1}' tiene más caracteres.`;
    } else if (frase2.length > frase1.length) {
        return `'${frase2}' tiene más caracteres.`;
    } else {
        return "Ambas frases tienen la misma cantidad de caracteres.";
    }
}

function compararFrasesArreglo() {
    const pares = [["Me gusta el fútbol", "Prefiero el baloncesto"], ["Hola", "Adiós"]];
    for (let i = 0; i < pares.length; i++) {
        let resp = compararFrases(pares[i][0], pares[i][1]);
        console.log(resp);
    }
}

// compararFrasesArreglo();

// 9. Contar cuántas veces aparece un carácter específico en una cadena
function contarCaracterEspecifico(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === caracter.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

function contarCaracterEspecificoArreglo() {
    const casos = [["Examen de programación", "m"], ["Hola mundo", "o"]];
    for (let i = 0; i < casos.length; i++) {
        let resp = contarCaracterEspecifico(casos[i][0], casos[i][1]);
        console.log(`En '${casos[i][0]}', '${casos[i][1]}' aparece ${resp} veces.`);
    }
}

// contarCaracterEspecificoArreglo();

// 10. Dividir una oración en palabras y mostrarlas en un arreglo
function dividirOracion(oracion) {
    return oracion.split(" ");
}

function dividirOracionArreglo() {
    const oraciones = ["Me gusta aprender programación", "Hola mundo"];
    for (let i = 0; i < oraciones.length; i++) {
        let resp = dividirOracion(oraciones[i]);
        console.log(`Oración ${i + 1}: ${resp.join(", ")}`);
    }
}

// dividirOracionArreglo();

                                                                                    //BLOQUE 3 Y 4 


// 17. Promedio de 5 números
function promedio5(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

function promedio5Arreglo() {
    const numeros = [5, 7, 9, 3, 6];
    let resp = promedio5(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4]);
    console.log(`Promedio = ${resp}`);
}

//promedio5Arreglo();

// 18. Contar cuántos de 5 números son impares
function contarImpares5(n1, n2, n3, n4, n5) {
    let contador = 0;
    if (n1 % 2 !== 0) contador++;
    if (n2 % 2 !== 0) contador++;
    if (n3 % 2 !== 0) contador++;
    if (n4 % 2 !== 0) contador++;
    if (n5 % 2 !== 0) contador++;
    return contador;
}

function contarImpares5Arreglo() {
    const numeros = [2, 5, 7, 8, 10];
    let resp = contarImpares5(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4]);
    console.log(`Cantidad de impares = ${resp}`);
}

//contarImpares5Arreglo();

// 19. Contar mayores de edad en 5 personas
function mayoresEdad5(edad1, edad2, edad3, edad4, edad5) {
    let contador = 0;
    if (edad1 >= 18) contador++;
    if (edad2 >= 18) contador++;
    if (edad3 >= 18) contador++;
    if (edad4 >= 18) contador++;
    if (edad5 >= 18) contador++;
    return contador;
}

function mayoresEdad5Arreglo() {
    const edades = [15, 22, 18, 30, 12];
    let resp = mayoresEdad5(edades[0], edades[1], edades[2], edades[3], edades[4]);
    console.log(`Mayores de edad: ${resp}`);
}

//mayoresEdad5Arreglo();

// 20. Buscar un valor en 4 números
function buscarValor4(n1, n2, n3, n4, valor) {
    if (n1 === valor || n2 === valor || n3 === valor || n4 === valor) {
        return true;
    }
    return false;
}

function buscarValor4Arreglo() {
    const numeros = [4, 8, 15, 23];
    const valor = 15;
    let resp = buscarValor4(numeros[0], numeros[1], numeros[2], numeros[3], valor);
    console.log(`El valor ${valor} ${resp ? "existe" : "no existe"}.`);
}

// buscarValor4Arreglo();

// 21. Concatenar 3 palabras
function concatenar3(p1, p2, p3) {
    return p1 + " " + p2 + " " + p3;
}

function concatenar3Arreglo() {
    const palabras = ["Me", "gusta", "programar"];
    let resp = concatenar3(palabras[0], palabras[1], palabras[2]);
    console.log(resp);
}

// concatenar3Arreglo();

// 22. Cubo de 3 números
function cubo3(n1, n2, n3) {
    return [n1 * n1 * n1, n2 * n2 * n2, n3 * n3 * n3];
}

function cubo3Arreglo() {
    const numeros = [2, 3, 4];
    let resp = cubo3(numeros[0], numeros[1], numeros[2]);
    console.log(resp);
}

// cubo3Arreglo();

// 23. Tabla de multiplicar de un número
function tablaMultiplicar(num) {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(num * i);
    }
    return tabla;
}

function tablaMultiplicarArreglo() {
    const num = 5;
    let resp = tablaMultiplicar(num);
    console.log(`Tabla del ${num}: ${resp}`);
}

// tablaMultiplicarArreglo();

// 24. Factorial de un número
function factorial(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

function factorialArreglo() {
    const num = 4;
    let resp = factorial(num);
    console.log(`Factorial de ${num} = ${resp}`);
}

// factorialArreglo();

// 25. Leer 4 números y mostrar pares
function pares4(n1, n2, n3, n4) {
    let pares = [];
    if (n1 % 2 === 0) pares.push(n1);
    if (n2 % 2 === 0) pares.push(n2);
    if (n3 % 2 === 0) pares.push(n3);
    if (n4 % 2 === 0) pares.push(n4);
    return pares;
}

function pares4Arreglo() {
    const numeros = [3, 8, 11, 14];
    let resp = pares4(numeros[0], numeros[1], numeros[2], numeros[3]);
    console.log(`Números pares: ${resp}`);
}

// pares4Arreglo();

// 26. Sumar 2 grupos de 3 números
function sumarGrupos(a1, a2, a3, b1, b2, b3) {
    return [a1 + b1, a2 + b2, a3 + b3];
}

function sumarGruposArreglo() {
    const A = [2, 4, 6];
    const B = [1, 3, 5];
    let resp = sumarGrupos(A[0], A[1], A[2], B[0], B[1], B[2]);
    console.log(`Suma: ${resp}`);
}

// sumarGruposArreglo();

