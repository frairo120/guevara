
const gente = [
  { nombre: "Ana", edad: 5 },
  { nombre: "Dan", edad: 15 },
  { nombre: "Miguel", edad: 25 },
  { nombre: "Jose", edad: 65 },
  { nombre: "Erick", edad: 7 },
  { nombre: "Yadira", edad: 22 },
  { nombre: "Noris", edad: 76 },
  { nombre: "Marcos", edad: 17 }
]

function ClasificarPesonas(personas) {
    console.log(`clasificacion x edad`);
    
    let contador = 0;
    let contador2 = 0;
    let contador3 = 0;
    let contador4 = 0;
    
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        if (persona.edad < 13) {
            ninio = persona.edad
            contador++;
        } if (persona.edad < 18){
            adolecente = persona.edad
            contador2++;
        } if (persona.edad < 59) {
            adulto = persona.edad
            contador3++;
        } if (persona.edad > 60) {
            adutomayor = persona.edad
            contador4++;
        } else{

        }
        }
        promedio = ninio / contador++
        promedio1 = adolecente / contador2++
        promedio2 = adulto / contador3++
        promedio3 = adutomayor/ contador4++
        console.log(`hay ${contador} niños su promedio ${promedio}`)
        console.log(`hay ${contador2} adolecentes su promedio ${promedio1}`)
        console.log(`hay ${contador3} adultos su promedio ${promedio2}`)
        console.log(`hay ${contador4} adultos mayores su promedio ${promedio3}`)
    }


ClasificarPesonas(gente);

