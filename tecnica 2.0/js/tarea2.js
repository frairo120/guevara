//debugger

function longitud(empleado){
    let nom = empleado.nombre
    let lon = 0

    for(let i=0;i<nom.length;i++){
        lon++
    }
    return lon
}
function longi(){
    let emp1 = {nombre: "juan", edad: 30}
    let len = longitud(emp1)

console.log(`la longuitud del nombre "${emp1.nombre}" es ${emp1.nombre.length}`)
}

//longi()

function contatVocal(producto, vocal){
    let nombre =  producto.nombre
    let voc = 0 

    for(let i = 0; i < nombre.length; i++){
        if (nombre[i]==vocal){
            voc++
        }
    }
    return voc
}

function buscarletra(){
    let prod = {nombre: "cocacola", presio: 100}
    let bus = "a"
    voc = contatVocal(prod, bus)
    console.log(`las veces q aparece la letra "${bus}" en la palabra "${prod.nombre}" es ${voc}`)
}

//buscarletra()

function invertirTxt(palabra){
    let nombre = palabra.nombre
    let invertido = ""
    let lon = nombre.length-1

    for (let i = lon; i >= 0; i--){
        invertido = invertido + nombre[i] 
    }
return invertido
}

function txt(){
    let palabra = {nombre: "carlos", edad: 23}
pal =invertirTxt(palabra)
console.log(`El invertido de "${palabra.nombre}" es ${pal}`)
}

//txt()

const empleados = [
    {nombre: "Ana", edad: 17 },
    {nombre: "Dan", edad: 20 },
    {nombre: "Miguel", edad: 35 },
    {nombre: "Jose", edad: 15 },
    {nombre: "Erick", edad: 18 }
]

function SacarPromedio(personas){
    let contador = 0;
    let contador2 = 0;
    let adolecente, ninio 

    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
    
         if (persona.edad < 18){
            adolecente += persona.edad
            contador++;
        } else {
            ninio += persona.edad
            contador2++
        }
        
        promedio = adolecente / contador++
        promedio2 = ninio / contador2++

        console.log(`adolecentes su promedio ${promedio}`)
}

SacarPromedio(empleados)
