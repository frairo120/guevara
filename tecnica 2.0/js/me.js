const productos = []

function AggProducto(nombre, pres, stock){
  let producto = {descripcion:nombre, precio:pres, stock}
  productos.push(producto)
}

function mostrarProductos(){
  for(let i=0;i<productos.length;i++){
    let p=productos[i]
    console.log(`|id:${i+1}| Nombre: ${p.descripcion} | Presio: ${p.precio} | stock: ${p.stock}`)
  }
}

function buscarProducto(nombre){
  for(let i=0;i<productos.length;i++){
    let p=productos[i]
    if(p.descripcion===nombre){
      return p
    }
  }
  return null
}

function AggProductoCliente(){
    let can = prompt("cuantos productos va a ingresar")
    let produ, pre, s

    for (let i=0; i<can;i++){
    produ = prompt("ingrese el nombre del producto")
    pre = prompt("ingrese el presio del producto")
    s = prompt("ingrese el stock del producto")
    
    AggProducto(produ, pre , s)
    }
}

AggProducto("Arroz", 50, 20)
AggProducto("Pan", 30, 15)
AggProducto("Fideo", 20, 25)

console.table(productos)
//AggProductoCliente()
mostrarProductos()
console.log(" ")
console.log("Producto buscado")
prod = buscarProducto("Pan")
console.table(prod)
