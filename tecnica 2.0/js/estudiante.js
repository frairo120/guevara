const estudiantes = []

function aggestudiante(nombre, asigna, calificacion){
    let estudiante = {alumno:nombre, asignatura:asigna, calificacion}
    estudiantes.push(estudiante)
}

function mostrarEstudiante(){
  for(let i=0;i<estudiantes.length;i++){
    let p=estudiantes[i]
    console.log(`id:${i+1} Nombre: ${p.alumno}, Asignatura: ${p.asignatura}, Calificacion: ${p.calificacion}`)
  }
}

function buscarAlumno(nombre){
  for(let i=0;i<estudiantes.length;i++){
    let p=estudiantes[i]
    if(p.alumno===nombre){
      return p
    }
  }
  return null
}

function aggestudiantePro(){
    let can = prompt("cuantos estudiantes va a ingresar")
    let produ, pre, s

    for (let i=0; i<can;i++){
    produ = prompt("ingrese el nombre del estudiante")
    pre = prompt("ingrese la asignatura del estudiante")
    s = prompt("ingrese la calificacion del estudiante")
    
    aggestudiante(produ, pre , s)
    }
}

aggestudiante("alex", "mate", 9)
aggestudiante("alexa", "fisica", 10)
aggestudiante("alice", "historia", 8)

console.table(estudiantes)
//aggestudiantePro()
mostrarEstudiante()

console.log(" ")
console.log("Alumno buscado")
prod = buscarAlumno("alex")
console.table(prod)
