//debugger

//                                              --- SECUENCIA DE EJECUCIÓN DEL BLOQUE 1 ---

// Variable global del arreglo de libros
const biblioteca = [
    { titulo: "Cien años de soledad", autor: "G. García Márquez", año: 1967 },
    { titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997 },
    { titulo: "El Código Da Vinci", autor: "Dan Brown", año: 2003 }
];

// 1. Registrar libros en un arreglo
function MostrarLibros(libros) {
    console.log("--- Ejercicio 1: Mostrar Libros ---");
    console.log("Índice | Título | Autor | Año");
    console.log("---------------------------------------");

    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];
        console.log(`${i} | ${libro.titulo} | ${libro.autor} | ${libro.año}`);
    }
}

// 2. Buscar un libro por título
function BuscarLibroPorTitulo(libros) {
    console.log("\n--- Ejercicio 2: Buscar Libro por Título ---");
    const tituloBuscado = prompt("2. Ingrese el título del libro a buscar:") || "";
    
    let libroEncontrado = null;
    let encontrado = false;
    
    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];

        if (libro.titulo.toLowerCase() === tituloBuscado.toLowerCase()) {
            libroEncontrado = libro;
            encontrado = true;
            break;
        }
    }
    
    if (encontrado) {
        console.log(`¡Libro encontrado! \n Título: ${libroEncontrado.titulo}, Autor: ${libroEncontrado.autor}.`);
    } else {
        console.log(`El libro con título "${tituloBuscado}" no existe.`);
    }
}

// 3. Contar libros publicados después del año 2000
function ContarLibrosRecientes(libros, anioLimite = 2000) {
    console.log(`\n--- Ejercicio 3: Contar Libros Posteriores a ${anioLimite} ---`);
    
    let contador = 0;
    
    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];
        if (libro.año > anioLimite) {
            contador++;
        }
    }
    
    console.log(`Cantidad de libros publicados después del año ${anioLimite}: ${contador} libro(s).`);
    return contador;
}

// 4. Concatenar todos los títulos en una sola cadena
function ConcatenarTitulos(libros) {
    console.log("\n--- Ejercicio 4: Concatenar Todos los Títulos ---");
    
    let cadenaResultante = "";
   
    for (let i = 0; i < libros.length; i++) {
        const titulo = libros[i].titulo;
        
        cadenaResultante += titulo;
        
        if (i < libros.length - 1) {
            cadenaResultante += " – ";
        }
    }
    
    console.log("Cadena resultante:");
    console.log(cadenaResultante);
    return cadenaResultante;
}

// 5. Actualizar el año de publicación de un libro (Interactivo)
function ActualizarAnioDeLibro(libros) {
    console.log("\n--- Ejercicio 5: Actualizar Año de Publicación ---");
    const titulo = prompt("5. Ingrese el título del libro a actualizar:") || "";
    const nuevoAnioStr = prompt(`5. Ingrese el nuevo año de publicación para "${titulo}":`) || "0";
    const nuevoAnio = parseInt(nuevoAnioStr);

    let actualizado = false;

    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];
        
        if (libro.titulo.toLowerCase() === titulo.toLowerCase()) {

            const anioAnterior = libro.año; 
            
            if (!isNaN(nuevoAnio) && nuevoAnio > 0) {
                libro.año = nuevoAnio; 
                actualizado = true;
                console.log(`¡Actualización exitosa para "${titulo}"!`);
                console.log(`   Año anterior: ${anioAnterior}, Nuevo año: ${libro.año}`);
            } else {
                console.log(`Error: El año ingresado (${nuevoAnioStr}) no es válido.`);
            }
            break; 
        }
    }
    
    if (!actualizado && titulo) {
        console.log(`No se pudo actualizar: Libro con título "${titulo}" no encontrado.`);
    }
}


// --- BLOQUE 1 ---
// MostrarLibros(biblioteca);
// BuscarLibroPorTitulo(biblioteca); 
// ContarLibrosRecientes(biblioteca);
// ConcatenarTitulos(biblioteca);
// ActualizarAnioDeLibro(biblioteca);

//                                              --- SECUENCIA DE EJECUCIÓN DEL BLOQUE 2 ---

// Variable global para simular la pila
let pilaDeLibros = [];

// 6. Implementar una pila de libros (push) - Interactivo y con cantidad dinámica
function InsertarLibrosEnPila(pila) {
    console.log("\n--- Ejercicio 6: Insertar Libros en Pila ---");

    const cantidadStr = prompt("6. Ingrese la CANTIDAD de libros que va a apilar:") || "0";
    const cantidad = parseInt(cantidadStr);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida o cero.");
        return;
    }

    console.log(`\nPreparando para ingresar ${cantidad} libro(s)...`);

    for(let i = 0; i < cantidad; i++) {
        const titulo = prompt(`6. (Libro ${i+1}/${cantidad}) Ingrese el Título del libro:`);
        const autor = prompt(`6. Ingrese el Autor de "${titulo}":`);
        const añoStr = prompt(`6. Ingrese el Año de "${titulo}":`);
        const año = parseInt(añoStr);

        if (titulo && autor && !isNaN(año) && año > 0) {
            const nuevoLibro = { titulo, autor, año };
            pila.push(nuevoLibro);
            console.log(`Libro ${i+1} insertado: "${nuevoLibro.titulo}"`);
        } else {
            console.log(`Libro ${i+1} omitido. Datos incompletos o incorrectos.`);
        }
    }
    console.log("Pila después de la inserción:");
    console.log(pila);
    //console.table(pila);
}

// 7. Eliminar el último libro ingresado
function EliminarLibroDePila(pila) {
    console.log("\n--- Ejercicio 7: Eliminar el Último Libro ---");
    const libroEliminado = pila.pop();
    if (libroEliminado) {
        console.log(`Libro eliminado: "${libroEliminado.titulo}" de ${libroEliminado.autor}.`);
        console.log("Pila actual:");
        console.log(pila);
        //console.table(pila);
        return libroEliminado;
    } else {
        console.log("La pila está vacía.");
        return null;
    }
}

// 8. Ver el libro en la cima de la pila (peek)
function VerCimaDePila(pila) {
    console.log("\n--- Ejercicio 8: Ver Libro en la Cima ---");
    if (pila.length > 0) {
        const cima = pila[pila.length - 1]; 
        console.log(`Cima de la pila: "${cima.titulo}" de ${cima.autor}.`);
        return cima;
    } else {
        console.log("La pila está vacía.");
        return null;
    }
}

// 9. Verificar si la pila está vacía
function VerificarSiPilaEstaVacia(pila) {
    console.log("\n--- Ejercicio 9: Verificar si la Pila Está Vacía ---");
    const estaVacia = pila.length === 0; 
    const mensaje = estaVacia
        ? "La pila está vacía."
        : `La pila tiene ${pila.length} libro(s).`;
    console.log(mensaje);
    return estaVacia;
}

// 10. Vaciar completamente la pila
function VaciarCompletamentePila(pila) {
    console.log("\n--- Ejercicio 10: Vaciar Completamente la Pila ---");
    console.log("Vaciando la pila...");
    
    let contador = 0;
    while (pila.length > 0) { 
        const libro = pila.pop();
        console.log(`   Libro removido: "${libro.titulo}"`);
        contador++;
    }
    console.log(`La pila se ha vaciado completamente (se removieron ${contador} libros).`);
    VerificarSiPilaEstaVacia(pila); 
}

// --- BLOQUE 2 ---

// InsertarLibrosEnPila(pilaDeLibros); 
// EliminarLibroDePila(pilaDeLibros); 
// VerCimaDePila(pilaDeLibros);
// VerificarSiPilaEstaVacia(pilaDeLibros);
// VaciarCompletamentePila(pilaDeLibros);